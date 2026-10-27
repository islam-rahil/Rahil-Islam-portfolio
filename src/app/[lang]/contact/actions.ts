"use server";

import { profile } from "@/content";

type Values = { name: string; email: string; company: string; message: string };

// `values` is sent back on failure so the form can keep what was typed
export type ContactState = { status: "idle" | "success" | "invalid" | "error"; values?: Values };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();

// Sends the contact form to Rahil's inbox through the Resend API.
// Needs RESEND_API_KEY; CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are optional.
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Hidden field only bots fill in: pretend it worked and drop it
  if (field(formData, "website")) return { status: "success" };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const message = field(formData, "message");
  const values = { name, email, company, message };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || name.length > 120 || !validEmail || email.length > 200 || company.length > 160 || !message || message.length > 5000) {
    return { status: "invalid", values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", values };
  }

  const header = [`Name: ${name}`, `Email: ${email}`, ...(company ? [`Company: ${company}`] : [])];
  const text = `${header.join("\n")}\n\n${message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || profile.email],
        reply_to: email,
        subject: `Portfolio contact — ${name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text());
      return { status: "error", values };
    }
  } catch (err) {
    console.error("Contact form: request failed", err);
    return { status: "error", values };
  }

  return { status: "success" };
}
