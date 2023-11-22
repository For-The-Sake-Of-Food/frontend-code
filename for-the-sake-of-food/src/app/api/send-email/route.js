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
    subject: `Welcome to For The Sake Of Food - Bring out the chef in you!`,
    html: `<h1>Thank You for Joining For The Sake Of Food!</h1>
    <p>Dear ${data.email},</p>
    <p>Thank you for signing up! We are thrilled to welcome you to our culinary community, where delicious adventures await.</p>
   <p>At For The Sake Of Food, we believe that the heart of a happy home is a well-fed family. We are excited to be part of your culinary journey, and we can't wait to share mouthwatering recipes and cooking inspiration with you.</p>
    <p>Here's what you can look forward to:</p>
    <ul>
    <li>
    1. Fresh Recipes: Be the first to discover our latest recipes, from quick weekday meals to indulgent weekend treats.</li>
    <li>2. Cooking Tips and Tricks: Elevate your cooking skills with our expert tips and tricks that will turn you into a kitchen pro.</li>
    <li>3. Special Events: Stay tuned for exclusive and exciting events tailored just for you.</li>
</ul>
<p>We understand that life can be busy, so don't worry—we'll only send you the good stuff! Expect to hear from us when there's a new recipe to try or something special cooking in the For The Sake Of Food kitchen</p>
<p>If you ever have any questions, feedback, or just want to share your culinary triumphs, feel free to reach out to us at forthesakeoffoodwebapp@gmail.com
We're here to make your cooking experience enjoyable and memorable.</p>
<p>Happy cooking!</p>
<p>Warm regards,</p>
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
