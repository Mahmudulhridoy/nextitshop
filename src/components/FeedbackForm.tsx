"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const FORM_NAME = "customer-feedback";
const ratingLabels = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

export default function FeedbackForm({ services }: { services: string[] }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating === 0) {
      setError("Please choose a star rating.");
      return;
    }
    setError("");
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("rating", String(rating));
    const fields = Object.fromEntries(Array.from(data.entries()).map(([k, v]) => [k, String(v)]));

    // Email delivery via FormSubmit (works on any static host, no server needed).
    // If FormSubmit delivery fails, the error state shows a mailto fallback link.
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New ${rating}★ feedback from ${fields.name} (${fields.service})`,
          _template: "table",
          _captcha: "false",
          Rating: `${rating} / 5`,
          Name: fields.name,
          Service: fields.service,
          Message: fields.message,
          Contact: fields.contact || "(not given)",
          "OK to publish": fields.publish_ok ? "Yes" : "No",
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok || j.success === false || j.success === "false") throw new Error("formsubmit failed");
      setStatus("done");
      form.reset();
      setRating(0);
    } catch {
      setMailtoHref(
        `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Feedback (${rating}/5) - ${fields.service}`)}&body=${encodeURIComponent(`${fields.message}\n\nName: ${fields.name}`)}`
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-14 px-6">
        <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-5" />
        <h2 className="text-2xl font-bold text-white mb-2">Thank you for your feedback!</h2>
        <p className="text-white/55 max-w-sm mx-auto">We read every message. Approved reviews are published on our website within a day or two.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-cyan-400 hover:text-cyan-300">Send another</button>
      </div>
    );
  }

  const active = hover || rating;
  const input = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/50 transition-colors";

  return (
    <form name={FORM_NAME} method="POST" onSubmit={onSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

      {/* Rating */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">How was your experience? <span className="text-rose-400">*</span></label>
        <div className="flex items-center gap-1.5" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(n)}
              onClick={() => setRating(n)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star className={`w-9 h-9 transition-colors ${n <= active ? "text-amber-400 fill-amber-400" : "text-white/20"}`} />
            </button>
          ))}
          <span className="ml-3 text-sm font-semibold text-amber-300 min-w-[80px]">{ratingLabels[active]}</span>
        </div>
        <input type="hidden" name="rating" value={rating} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fb-name" className="block text-sm font-semibold text-white mb-2">Your name <span className="text-rose-400">*</span></label>
          <input id="fb-name" name="name" required maxLength={60} placeholder="e.g. Alex M." className={input} />
        </div>
        <div>
          <label htmlFor="fb-service" className="block text-sm font-semibold text-white mb-2">Service you used <span className="text-rose-400">*</span></label>
          <select id="fb-service" name="service" required defaultValue="" className={`${input} appearance-none`}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s} value={s} className="bg-[#0b0d14]">{s}</option>)}
            <option value="Other" className="bg-[#0b0d14]">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="fb-msg" className="block text-sm font-semibold text-white mb-2">Your feedback <span className="text-rose-400">*</span></label>
        <textarea id="fb-msg" name="message" required minLength={10} maxLength={600} rows={5} placeholder="What went well? Anything we can improve? How was delivery and support?" className={`${input} resize-none`} />
      </div>

      <div>
        <label htmlFor="fb-contact" className="block text-sm font-semibold text-white mb-2">Email or Telegram <span className="text-white/35 font-normal">(optional, never shown publicly)</span></label>
        <input id="fb-contact" name="contact" maxLength={80} placeholder="So we can follow up if needed" className={input} />
      </div>

      <label className="flex items-start gap-3 text-xs text-white/55 leading-relaxed cursor-pointer">
        <input type="checkbox" name="publish_ok" value="yes" defaultChecked className="mt-0.5 w-4 h-4 accent-cyan-400" />
        I agree that my name, rating and feedback may be shown on the nextITshop website.
      </label>

      {error && <p className="text-sm text-rose-400">{error}</p>}
      {status === "error" && (
        <p className="text-sm text-rose-400">
          We could not send your feedback right now. Please{" "}
          <a href={mailtoHref} className="underline">email it to us</a> or message us on{" "}
          <a href={siteConfig.contact.telegramUrl} className="underline">Telegram</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-cyan-300 disabled:opacity-60 transition-all"
      >
        {status === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {status === "sending" ? "Sending…" : "Submit feedback"}
      </button>
    </form>
  );
}
