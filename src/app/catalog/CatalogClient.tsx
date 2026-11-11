"use client";

import { useState, useMemo } from "react";
import { products, Product } from "@/config/catalog";
import ProductCard from "@/components/ProductCard";
import { Search, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Accounts" },
  { id: "email", label: "Email & GV" },
  { id: "chat", label: "Telegram & WhatsApp" },
  { id: "social", label: "Social Media (FB, X, IG)" },
  { id: "dev", label: "Developer & Edu" },
];

export default function CatalogClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchTab = activeTab === "all" || p.category === activeTab;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        p.variations.some((v) => v.name.toLowerCase().includes(search.toLowerCase()));
      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  return (
    <div>
      {/* Search & Minimal Category Pills */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        {/* Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-x-auto w-full md:w-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === c.id
                  ? "bg-white text-black shadow-sm"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search accounts or tiers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Live Inventory Counter */}
      <div className="flex items-center justify-between text-xs text-white/40 mb-6 px-1">
        <span>Showing {filtered.length} verified account types</span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live Stock
        </span>
      </div>

      {/* Grid */}
      <h2 className="mb-6 text-xl font-bold text-white">
        {categories.find((c) => c.id === activeTab)?.label ?? "All Accounts"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
          <p className="text-white/40 text-sm">No accounts found matching &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
