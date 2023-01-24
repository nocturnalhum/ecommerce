// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from '../../config/nodemailer';
import Link from 'next/link';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      res.status(400).json({ message: 'Bad Request' });
    }
    try {
      await transporter.sendMail({
        from: data.email,
        to: process.env.EMAIL,
        subject: data.subject,
        text: 'This is a test string',
        html: `<h1>${data.subject}</h1><p>${data.message}</p><Link href={data.email}>${data.email}</Link>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  res.status(400).json({ message: 'Bad Request' });
};

export default handler;
