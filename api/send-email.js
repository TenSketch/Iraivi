const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;

    // Server-side validation
    const requiredFields = ['name', 'email', 'mobile'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ error: `Field ${field} is required.` });
      }
    }

    // Honeypot check
    if (data.hp_field) {
      return res.status(200).json({ message: 'Spam detected' }); // Fake success
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

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Enquiry: ${data.subject || 'Course Enrollment'}`,
      text: Object.entries(data)
        .filter(([key]) => key !== 'hp_field')
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'),
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Form Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
