import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, healer_details, message, phone_no, healing_service } =
        req.body;

      if (
        !name ||
        !healer_details ||
        !message ||
        !phone_no ||
        !healing_service
      ) {
        return res.status(404).send({ message: 'ALL fields Are required' });
      }
      // Create a Nodemailer transporter using your email service provider's SMTP settings
      const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true, // Set to true if your SMTP provider requires a secure connection
        auth: {
          user: 'apikey',
          pass: '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',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // Compose the email message
      const mailOptions = {
        from: 'sarthak95063@gmail.com',
        to: 'mandar@parikhinfosolutions.com',
        subject: `New Email for Healer ${healer_details?.name} `,
        text: `
        Hi,

        There is a new request for healer ${healer_details?.name} enquiry  on Your Spiritual Revolution website.

          Name: ${name}
          Phone: ${phone_no}
          Healing Sevice: ${healing_service}
          Message: ${message}
        `,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);

      console.log('Message sent:', info.messageId);

      res.status(200).json({ message: 'Email sent successfully', mailOptions });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(404).json({ message: 'Invalid request method' });
  }
}
