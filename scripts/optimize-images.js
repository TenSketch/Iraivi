const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(process.cwd(), 'static', 'images');
const MAX_BYTES = 300 * 1024;
const QUALITY_STEPS = [82, 76, 70, 64, 58, 54];
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function walk(dir) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [fullPath] : [];
    }),
  );

  return files.flat();
}

async function buildCandidate(inputPath, extension, quality) {
  let pipeline = sharp(inputPath, {failOn: 'none'}).rotate();

  if (extension === '.jpg' || extension === '.jpeg') {
    pipeline = pipeline.jpeg({quality, mozjpeg: true});
  } else if (extension === '.png') {
    pipeline = pipeline.png({quality, compressionLevel: 9, palette: true});
  } else if (extension === '.webp') {
    pipeline = pipeline.webp({quality});
  } else {
    return null;
  }

  return pipeline.toBuffer();
}

async function optimizeFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const original = await fs.readFile(filePath);

  if (original.byteLength <= MAX_BYTES) {
    return {status: 'skipped', filePath, before: original.byteLength, after: original.byteLength};
  }

  let bestBuffer = null;

  for (const quality of QUALITY_STEPS) {
    const candidate = await buildCandidate(filePath, extension, quality);
    if (!candidate) {
      break;
    }

    if (candidate.byteLength <= MAX_BYTES) {
      bestBuffer = candidate;
      break;
    }

    if (!bestBuffer || candidate.byteLength < bestBuffer.byteLength) {
      bestBuffer = candidate;
    }
  }

  if (!bestBuffer || bestBuffer.byteLength >= original.byteLength) {
    return {status: 'unchanged', filePath, before: original.byteLength, after: original.byteLength};
  }

  await fs.writeFile(filePath, bestBuffer);
  return {status: bestBuffer.byteLength <= MAX_BYTES ? 'optimized' : 'reduced', filePath, before: original.byteLength, after: bestBuffer.byteLength};
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const files = await walk(ROOT);
  const results = [];

  for (const filePath of files) {
    results.push(await optimizeFile(filePath));
  }

  const touched = results.filter((result) => result.status === 'optimized' || result.status === 'reduced');
  const skipped = results.filter((result) => result.status === 'skipped').length;
  const unchanged = results.filter((result) => result.status === 'unchanged').length;

  if (touched.length) {
    touched.forEach((result) => {
      console.log(`${result.status.toUpperCase()}: ${path.relative(process.cwd(), result.filePath)} ${formatBytes(result.before)} -> ${formatBytes(result.after)}`);
    });
  } else {
    console.log('No source images required compression.');
  }

  console.log(`Processed ${results.length} images. ${touched.length} updated, ${skipped} already within limit, ${unchanged} unchanged.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
