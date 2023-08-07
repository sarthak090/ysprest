import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, contact, code, page_url } = req.body;

      if (!name || !email || !code || !contact || !page_url) {
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
        subject: `New Email for Magzine   `,
        text: `
        Hi,

 
        Full Name: ${name}
        Email Address: ${email}
        Contact Number: ${contact}
        Page URL: ${page_url}
        `,
      };

      // Send the email
      // const info = await transporter.sendMail(mailOptions);

      // console.log('Message sent:', info.messageId);

      res.status(200).json({ message: 'Email sent successfully', mailOptions });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(404).json({ message: 'Invalid request method' });
  }
}
