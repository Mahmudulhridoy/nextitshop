#!/usr/bin/env node
// Usage:  npm run new-post -- "My Post Title" whatsapp
// Creates content/blog/<slug>.md with the correct header, ready for you to paste the article.
import fs from "node:fs";
import path from "node:path";

const [title, category = "other"] = process.argv.slice(2);
const valid = ["gmail", "email", "telegram", "whatsapp", "google-voice", "social", "developer", "other"];

if (!title) {
  console.log('Usage: npm run new-post -- "Post title" <category>');
  console.log("Categories:", valid.join(", "));
  process.exit(1);
}
if (!valid.includes(category)) {
  console.log(`Unknown category "${category}". Use one of: ${valid.join(", ")}`);
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 70);
const file = path.join(process.cwd(), "content", "blog", `${slug}.md`);
if (fs.existsSync(file)) {
  console.log("File already exists:", file);
  process.exit(1);
}
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  file,
  `---
title: "${title.replace(/"/g, '\\"')}"
category: ${category}
date: ${today}
description: "One or two sentences that appear on the blog card and in Google results."
# featured: true     <- remove the leading # to show this post big at the top of /blog
# image: /blog/${slug}.jpg   <- optional cover image placed in /public/blog/
# draft: true        <- add this line to hide the post until it is ready
---

Write the introduction here.

## First heading

Paste the client's text here. Use **bold**, lists and links as needed.
`
);
console.log("Created:", file);
