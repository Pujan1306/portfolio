import { SendEmail } from "@/app/helper/send-email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await SendEmail(name, email, message);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in /api/send-email:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}