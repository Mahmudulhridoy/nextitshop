import React from "react";
import Link from "next/link";
import { slugifyHeading } from "@/config/blog";

// Tiny, dependency-free Markdown renderer for blog posts.
// Supports: ## / ### headings, paragraphs, **bold**, *italic*, `code`, [links](url),
// - bullet lists, 1. numbered lists, > quotes, --- rules and simple | tables |.

function inline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyPrefix}-${i++}`;
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key} className="font-bold text-white">{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("`")) {
      nodes.push(<code key={key} className="px-1.5 py-0.5 rounded bg-white/[0.08] text-cyan-300 text-[0.9em] font-mono">{tok.slice(1, -1)}</code>);
    } else if (tok.startsWith("[")) {
      const lm = tok.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
      const href = lm[2];
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">{lm[1]}</Link>
        ) : (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">{lm[1]}</a>
        )
      );
    } else {
      nodes.push(<em key={key}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

export default function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  let k = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    // headings
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      const text = h[2];
      out.push(
        h[1].length === 2 ? (
          <h2 key={k++} id={slugifyHeading(text)} className="scroll-mt-28 text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-12 mb-4">{inline(text, `h${k}`)}</h2>
        ) : (
          <h3 key={k++} id={slugifyHeading(text)} className="scroll-mt-28 text-lg sm:text-xl font-bold text-white mt-8 mb-3">{inline(text, `h${k}`)}</h3>
        )
      );
      i++; continue;
    }

    // rule
    if (/^---+$/.test(line.trim())) { out.push(<hr key={k++} className="border-white/10 my-10" />); i++; continue; }

    // table
    if (line.includes("|") && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) { rows.push(splitRow(lines[i])); i++; }
      out.push(
        <div key={k++} className="my-8 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/[0.04] text-white">
              <tr>{head.map((c, ci) => <th key={ci} className="px-4 py-3 font-bold whitespace-nowrap">{inline(c, `th${k}${ci}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-t border-white/[0.06]">
                  {r.map((c, ci) => <td key={ci} className="px-4 py-3 text-white/65">{inline(c, `td${k}${ri}${ci}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // quote
    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) { buf.push(lines[i].replace(/^>\s?/, "")); i++; }
      out.push(<blockquote key={k++} className="my-8 pl-5 border-l-2 border-cyan-400/60 text-white/80 italic">{inline(buf.join(" "), `q${k}`)}</blockquote>);
      continue;
    }

    // lists
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*[-*]\s+/, "")); i++; }
      out.push(
        <ul key={k++} className="my-5 space-y-2.5">
          {items.map((it, ii) => (
            <li key={ii} className="flex gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" /><span>{inline(it, `li${k}${ii}`)}</span></li>
          ))}
        </ul>
      );
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*\d+\.\s+/, "")); i++; }
      out.push(
        <ol key={k++} className="my-5 space-y-2.5">
          {items.map((it, ii) => (
            <li key={ii} className="flex gap-3"><span className="w-6 h-6 mt-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold flex items-center justify-center flex-shrink-0">{ii + 1}</span><span>{inline(it, `ol${k}${ii}`)}</span></li>
          ))}
        </ol>
      );
      continue;
    }

    // paragraph
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|>|\s*[-*]\s+|\s*\d+\.\s+|---+$)/.test(lines[i]) && !(lines[i].includes("|") && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1]))) {
      buf.push(lines[i]); i++;
    }
    out.push(<p key={k++} className="my-5">{inline(buf.join(" "), `p${k}`)}</p>);
  }

  return <div className="text-base sm:text-[17px] text-white/70 leading-8">{out}</div>;
}
