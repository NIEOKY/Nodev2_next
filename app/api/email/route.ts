import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: "nodev.contacto@gmail.com",
      from: "nodev.contacto@gmail.com",
      subject: `Message from ${name} with email ${email}`,
      text: message,
      html: `<strong>${message}</strong>`,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Email not sent" },
      { status: 500 }
    );
  }
}
