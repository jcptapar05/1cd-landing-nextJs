import { Resend } from "resend";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { message, email } = body;

    const textContent = `
      Hello,

      This is your plain text content. Customize this section with the actual content of your email.

      Regards,
      1 Click Design LLC
    `;
    console.log(message, email);
    const { data, error } = await resend.emails.send({
      from: "1 Click Design LLC <marketing@1clickdesign.com>",
      to: [email],
      subject: "Requesting Demo",
      html: "Rquesting Demo",
      text: textContent,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
