"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { profile } from "@/content";
import { checkRate } from "@/lib/rateLimit";

type Values = { name: string; email: string; company: string; message: string };

// `values` is sent back on failure so the form can keep what was typed
export type ContactState = { status: "idle" | "success" | "invalid" | "error"; values?: Values };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();

// Sends the contact form to Rahil's inbox through Gmail (Nodemailer).
// Needs EMAIL_USER + EMAIL_PASS (Gmail app password) and the Upstash variables.
// CONTACT_RECIPIENT and MAIL_FROM are optional.
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Hidden field only bots fill in: pretend it worked and drop it
  if (field(formData, "website")) return { status: "success" };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const message = field(formData, "message");
  const values = { name, email, company, message };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (
    !name || name.length > 120 ||
    !validEmail || email.length > 200 ||
    company.length > 160 ||
    !message || message.length > 5000
  ) {
    return { status: "invalid", values };
  }

  // Rate limit by IP (Upstash)
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const rate = await checkRate(ip);
  if (rate.blocked) {
    return { status: "error", values };
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.error("Contact form: EMAIL_USER or EMAIL_PASS is not set");
    return { status: "error", values };
  }

  const header = [`Name: ${name}`, `Email: ${email}`, ...(company ? [`Company: ${company}`] : [])];
  const text = `${header.join("\n")}\n\n${message}`;

  try {
    const transporter = nodemailer.createTransport(
      process.env.NODE_ENV === "development"
        ? { host: "localhost", port: 1025, secure: false }
        : { service: "gmail", auth: { user, pass } }
    );

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.MAIL_FROM || user}>`,
      to: process.env.CONTACT_RECIPIENT || profile.email,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text,
    });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return { status: "error", values };
  }

  return { status: "success" };
}