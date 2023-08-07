import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        first_name,
        last_name,
        email_address,
        phone_number,
        company_name,
        post_categories,
        uploaded_article_file_link,
        post_content,
        uploaded_profile_picture_link,
        author_bio,
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

        subject: `Free Post Submission Request For YSR`,
        text: `
        Hi,

        There is a new request for free guest post submission.

            First Name: ${[first_name]}
            Last Name: ${[last_name]}
            Email Address: ${[email_address]}
            Phone Number: ${[phone_number]}
            Company Name: ${[company_name]}
            Post Categories: ${[post_categories]}
            Article File: ${[uploaded_article_file_link]}
            Post Content: ${[post_content]}
            Profile Picture: ${[uploaded_profile_picture_link]}
            Author Bio: ${[author_bio]}
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
