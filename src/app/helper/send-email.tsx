import EmailTemplate from "../email/EmailTemplate";
import { Resend } from "resend";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(name: string, email: string, text: string) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "pujanmestry@gmail.com", 
    subject: "New message from portfolio",
    html: await render(<EmailTemplate name={name} email={email} text={text} />),
  });

  if (error) {
    console.error("Resend error:", error);
    throw error;
  }

  return data;
}