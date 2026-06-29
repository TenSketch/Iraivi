# Iraivi Sanity Studio

This folder contains the Sanity Studio that replaces the old Decap CMS admin flow.

## Setup

1. Create a Sanity project in the Sanity dashboard.
2. Copy `studio-iraivi/.env.example` to `.env` and set:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
3. Install dependencies inside `studio-iraivi/` and start the studio:

```bash
cd studio-iraivi
npm install
npm run dev
```

## Notes

- The legacy Decap admin files and OAuth proxy have been removed.
- The schemas mirror the current Hugo content shapes so the migration path stays close to the existing site structure.
- The `about-me` page now supports a Sanity test path: create a `Page` document with slug `about-me`, then the Hugo page will use Sanity content and fall back to the local markdown file if no document exists yet.
