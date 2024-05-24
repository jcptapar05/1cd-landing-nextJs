import { Resend } from "resend";
import { render } from "@react-email/render";
import ScheduleLiveShowing from "@/emails/ScheduleLiveShowing";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, date } = body;
    const htmlContent = render(
      ScheduleLiveShowing({ email: email, date: date, name: name })
    );
    const { data, error } = await resend.emails.send({
      from: "1 Click Design LLC <marketing@1clickdesign.com>",
      to: [email],
      subject: "Scheduled Live Showing",
      html: htmlContent,
      text: "Hello, This is your plain text content.",
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
