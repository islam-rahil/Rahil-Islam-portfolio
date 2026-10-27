"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Dict } from "@/content";

export function ExperienceList({ roles }: { roles: Dict["experience"]["roles"] }) {
  const [active, setActive] = useState(0);
  const current = roles[active];

  return (
    <div className="border-l border-ink/80">
      {roles.map((r, i) => (
        <div key={r.company + r.period}>
          <button
            type="button"
            onClick={() => setActive(i)}
            aria-expanded={active === i}
            className={`grid w-full grid-cols-1 gap-1 px-4 py-5 text-left transition-colors md:grid-cols-[1.4fr_1fr_auto] md:items-center md:gap-6 md:px-6 ${
              active === i ? "bg-panel" : "hover:bg-panel/60"
            }`}
          >
            <span className="font-display text-base font-bold md:text-lg">{r.role}</span>
            <span className="text-sm text-muted">{r.company}</span>
            <span className="text-[11px] uppercase tracking-wider text-soft">{r.period}</span>
          </button>
          {/* On mobile, details open under the selected row */}
          {active === i && (
            <ul className="space-y-2 px-4 pb-6 pt-3 text-sm text-muted md:hidden">
              {r.points.map((p) => (
                <li key={p}>— {p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <ul className="hidden space-y-3 px-6 pt-6 text-sm leading-relaxed text-muted md:block">
        {current.points.map((p) => (
          <li key={p}>— {p}</li>
        ))}
      </ul>
    </div>
  );
}

export function FaqList({ items }: { items: Dict["faq"]["items"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-base font-bold md:text-lg">{item.q}</span>
              {isOpen ? <Minus size={18} className="shrink-0" /> : <Plus size={18} className="shrink-0" />}
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted">
                <span className="block pb-6">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
