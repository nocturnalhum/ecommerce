// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from '../../config/nodemailer';
import Link from 'next/link';

const htmlMessage = (data) => `
	<h3>Name: ${data.name}</h3>
	<h3>Email: <Link href={data.email}>${data.email}</Link></h3>
	<h3>Subject: ${data.subject}</h3>
	<h3>Message:</h3><p>${data.message}</p>`;

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
        html: htmlMessage(data),
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
