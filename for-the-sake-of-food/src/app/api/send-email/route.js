import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "forthesakeoffoodwebapp@gmail.com",
    pass: "zrzzztdpxaghdaat",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request) {
  const data = await request.json();

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_AUTH_EMAIL,
    to: data?.email,
    subject: `Welcome to For The Sake Of Food!`,
    html: `<h1>Thank You for Joining For The Sake Of Food!</h1>
    <p>Dear ${data.email},</p>
    <p>We're thrilled to have you as a part of our food-loving community. Your passion for delicious recipes is our driving force.</p>
    <p>Get ready to embark on a culinary adventure with us! You can look forward to:</p>
    <ul>
      <li>Exciting new recipes delivered to your inbox regularly</li>
      <li>Exclusive tips and tricks from top chefs</li>
      <li>Notifications about the latest features and updates</li>
    </ul>
    <p>If you ever have any questions or suggestions, feel free to reach out to us. We're here to make your experience exceptional.</p>
    <p>Once again, thank you for signing up with For The Sake Of Food. Let's cook up something amazing together!</p>
    <p>Happy cooking!</p>
    <p>Sincerely,</p>
    <p> For The Sake Of Food Team</p>`,
  };
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log(data);
    return NextResponse.json({ data: res, msg: "success" });
  } catch (e) {
    console.log("source here", e);
    return NextResponse.json({ error: e, msg: "error" });
  }
}
