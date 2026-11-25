import { NextResponse } from "next/server";
import { z } from "zod";
import { projectTypes } from "@/data/site";

const projectTypeValues = projectTypes.map((type) => type.value) as [
  (typeof projectTypes)[number]["value"],
  ...(typeof projectTypes)[number]["value"][],
];

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(160),
  projectType: z.enum(projectTypeValues),
  message: z.string().trim().min(10).max(4000),
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

/**
 * Accepts a builder inquiry and returns success.
 * Does not send email. Wire CONTACT_TO to a mail provider here when ready.
 */
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the form and try again." },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  console.info("[contact]", {
    name: parsed.data.name,
    company: parsed.data.company,
    role: parsed.data.role || undefined,
    phone: parsed.data.phone,
    email: parsed.data.email,
    projectType: parsed.data.projectType,
    messageLength: parsed.data.message.length,
    at: new Date().toISOString(),
    delivered: false,
  });

  return NextResponse.json({
    ok: true,
    delivery: "not-configured",
  });
}
