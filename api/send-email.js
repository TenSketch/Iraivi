const nodemailer = require('nodemailer');

function buildFieldLines(data, keys) {
  return keys
    .filter((key) => data[key] !== undefined && data[key] !== null && data[key] !== '')
    .map((key) => `${key}: ${Array.isArray(data[key]) ? data[key].join(', ') : data[key]}`)
    .join('\n');
}

function validateRequiredFields(data, requiredFields) {
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
      return field;
    }
  }
  return null;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const formType = data.formType || 'course-enquiry';
    const requiredFieldsByForm = {
      'course-enquiry': ['name', 'email', 'mobile', 'location', 'session'],
      'lactation-consultation': [
        'name',
        'email',
        'mobile',
        'location',
        'baby_age',
        'baby_gender',
        'birth_weight',
        'current_weight',
        'complications',
        'mode',
      ],
    };
    const requiredField = validateRequiredFields(data, requiredFieldsByForm[formType] || requiredFieldsByForm['course-enquiry']);

    if (requiredField) {
      return res.status(400).json({ error: `Field ${requiredField} is required.` });
    }

    if (data.hp_field) {
      return res.status(200).json({ message: 'OK' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const clientEmail = process.env.CLIENT_EMAIL;
    const replyTo = data.email;
    const enquiryLabel = formType === 'lactation-consultation' ? 'Lactation Consultation' : 'Course Enrollment';
    const clientSubject = `New Enquiry - ${enquiryLabel} - ${data.name}`;
    const customerSubject = `We received your enquiry - Iraivi`;

    const coreKeys = formType === 'lactation-consultation'
      ? ['name', 'email', 'mobile', 'location', 'baby_age', 'baby_gender', 'birth_weight', 'current_weight', 'feeding_habits', 'birth_mode', 'complications', 'history', 'wellbeing', 'timeline', 'mode']
      : ['name', 'email', 'mobile', 'location', 'trimester', 'session'];

    const clientText = [
      `New enquiry received: ${enquiryLabel}`,
      '',
      buildFieldLines(data, coreKeys),
      '',
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n');

    const customerText = [
      `Hi ${data.name},`,
      '',
      `Thank you for reaching out to Iraivi.`,
      `We have received your ${enquiryLabel.toLowerCase()} and a copy of your enquiry is below.`,
      '',
      buildFieldLines(data, coreKeys),
      '',
      `Our team will review your message and get back to you soon.`,
      '',
      `Warm regards,`,
      `Iraivi`,
    ].join('\n');

    const mailOptions = {
      from: fromAddress,
      to: clientEmail,
      replyTo,
      subject: clientSubject,
      text: clientText,
    };

    await transporter.sendMail(mailOptions);

    if (data.email) {
      await transporter.sendMail({
        from: fromAddress,
        to: data.email,
        replyTo: clientEmail || replyTo,
        subject: customerSubject,
        text: customerText,
      });
    }

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Form Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
