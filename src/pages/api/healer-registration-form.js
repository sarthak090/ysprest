import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        first_name,
        last_name,
        email_address,
        state,
        city,
        address,
        shortBio,
        countryCode,
        whatsappNumber,
        mobileNumber,
        uploaded_profile_picture_link,
        country,
      } = req.body;

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

        subject: `There is a new request for healer registration on Your Spiritual Revolution website.

        `,
        text: `
        Hi,
        There is a new request for healer registration on Your Spiritual Revolution website.

        First Name: ${first_name}
        Last Name: ${last_name}
        Country Code: ${countryCode}
        Mobile Number: ${mobileNumber}
        Country Code for WhatsApp: ${countryCode}
        WhatsApp Number: ${whatsappNumber}
        Email Address: ${email_address}
        Profile Picture  : ${uploaded_profile_picture_link}
        Country: ${country}
        State: ${state}
        City: ${city}
        Address: ${address}
        Short Bio: ${shortBio}
        `,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      // console.log({ mailOptions });
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
