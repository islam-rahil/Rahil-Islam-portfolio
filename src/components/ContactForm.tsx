"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Dict } from "@/content";
import { sendContact, type ContactState } from "@/app/[lang]/contact/actions";

const inputClass =
  "mt-2 w-full border border-ink/80 bg-paper px-3 py-3 text-sm normal-case tracking-normal text-ink outline-none transition-colors placeholder:text-soft focus:border-accent-dark focus:bg-white";

export default function ContactForm({ form }: { form: Dict["contactPage"]["form"] }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  const values = state.values;

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 border border-ink/80 bg-white p-6" role="status">
        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-dark" />
        <p className="text-sm leading-relaxed">{form.success}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5 border border-ink/80 bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[11px] uppercase tracking-wider text-muted">
          {form.name}
          <input name="name" defaultValue={values?.name} required maxLength={120} autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-[11px] uppercase tracking-wider text-muted">
          {form.email}
          <input name="email" type="email" defaultValue={values?.email} required maxLength={200} autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="block text-[11px] uppercase tracking-wider text-muted">
        {form.company}
        <input name="company" defaultValue={values?.company} maxLength={160} autoComplete="organization" className={inputClass} />
      </label>
      <label className="block text-[11px] uppercase tracking-wider text-muted">
        {form.message}
        <textarea
          name="message"
          defaultValue={values?.message}
          required
          rows={6}
          maxLength={5000}
          placeholder={form.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>
      {/* Honeypot: hidden from people, filled in by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {(state.status === "invalid" || state.status === "error") && (
        <p className="border-l-2 border-accent-dark pl-3 text-sm text-accent-dark" role="alert">
          {state.status === "invalid" ? form.invalid : form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-ink px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent hover:text-ink disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? form.sending : form.send}
      </button>
    </form>
  );
}
