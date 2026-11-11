import Link from "next/link";
import { Star, MessageSquareHeart, Quote } from "lucide-react";
import { reviews, reviewStats } from "@/config/reviews";

function Stars({ value, size = "w-4 h-4" }: { value: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`${size} ${n <= value ? "text-amber-400 fill-amber-400" : "text-white/15"}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection({ limit = 6, showHeader = true }: { limit?: number; showHeader?: boolean }) {
  const shown = reviews.slice(0, limit);

  return (
    <section className="py-24 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="eyebrow mb-3">Customer Feedback</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What our customers say</h2>
              <p className="text-base text-white/55 mt-3 max-w-md">Honest feedback from people who have used our services.</p>
            </div>
            <div className="flex items-center gap-4">
              {reviewStats.count > 0 && (
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-3xl font-black text-white">{reviewStats.average.toFixed(1)}</span>
                  <div>
                    <Stars value={Math.round(reviewStats.average)} />
                    <span className="text-[11px] text-white/40">{reviewStats.count} review{reviewStats.count === 1 ? "" : "s"}</span>
                  </div>
                </div>
              )}
              <Link href="/feedback" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-cyan-300 transition-all">
                <MessageSquareHeart className="w-4 h-4" /> Leave feedback
              </Link>
            </div>
          </div>
        )}

        {shown.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((r, i) => (
              <figure key={i} className="relative p-6 rounded-2xl bg-[#0b0d14] border border-white/[0.07] flex flex-col">
                <Quote className="absolute top-5 right-5 w-6 h-6 text-white/[0.06]" />
                <Stars value={r.rating} />
                <blockquote className="mt-4 text-sm text-white/70 leading-relaxed flex-1">“{r.message}”</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm font-black text-white">
                    {r.name.trim().charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{r.name}</div>
                    <div className="text-[11px] text-white/40">{r.service}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 rounded-3xl border border-dashed border-white/10 bg-white/[0.015]">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
              <MessageSquareHeart className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Be the first to share your experience</h3>
            <p className="text-sm text-white/50 max-w-md mx-auto mb-6">Used one of our services? Tell us how it went. It takes less than a minute.</p>
            <Link href="/feedback" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-cyan-300 transition-all">
              Leave feedback
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
