import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "mmellows1@gmail.com",
      subject: "Yoga message",
      text: data.message,
      html: `<p>${data.message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);

    const previewUrl = nodemailer.getTestMessageUrl(info);

    console.log("Preview URL: %s", previewUrl);

    return NextResponse.json({ previewUrl, info });
    // await submit(request);
    // return new Response(null, { status: 204 });
  } catch (reason) {
    // const message =
    //   reason instanceof Error ? reason.message : "Unexpected error";

    // return new Response(message, { status: 500 });
    console.log("hi there");
  }
}
