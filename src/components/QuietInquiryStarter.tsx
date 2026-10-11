"use client";

import { useState } from "react";
import type { InquiryOption } from "../config/contact";

type QuietInquiryStarterProps = {
  options: InquiryOption[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function QuietInquiryStarter({
  options,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: QuietInquiryStarterProps) {
  const [selectedId, setSelectedId] = useState<string>(options[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  const activeOption = options.find((opt) => opt.id === selectedId) ?? options[0];

  async function handleCopy() {
    if (!activeOption) return;
    try {
      await navigator.clipboard.writeText(activeOption.defaultMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Graceful fallback for non-clipboard environments
    }
  }

  return (
    <div className="quiet-inquiry-starter">
      <div className="quiet-inquiry-chips" role="radiogroup" aria-label="เลือกหัวข้อที่ต้องการปรึกษา">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selectedId === option.id}
            className={`quiet-inquiry-chip ${selectedId === option.id ? "is-selected" : ""}`}
            onClick={() => setSelectedId(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {activeOption && (
        <div className="quiet-inquiry-note">
          <p className="quiet-inquiry-note-label">ข้อความตั้งต้นที่แนะนำเมื่อทักทาย:</p>
          <div className="quiet-inquiry-note-box">
            <p lang="th" className="quiet-inquiry-note-text">
              &ldquo;{activeOption.defaultMessage}&rdquo;
            </p>
            <button
              type="button"
              className="quiet-inquiry-copy-btn"
              onClick={handleCopy}
              aria-label="คัดลอกข้อความทักทาย"
            >
              {copied ? "คัดลอกแล้ว ✓" : "คัดลอกข้อความ"}
            </button>
          </div>
        </div>
      )}

      <div className="final-cta-actions">
        <a
          lang="th"
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-action linen-action"
        >
          {primaryLabel}
        </a>
        <a lang="th" href={secondaryHref} className="text-action">
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
