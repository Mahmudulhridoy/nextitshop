# Blog & Feedback Guide

## Adding a blog post (client sends you the article)

Posts are simple text files in `content/blog/`. No database, no admin login.

1. Create the file (the helper fills in the header for you):
   ```bash
   npm run new-post -- "Title the client gave" whatsapp
   ```
   Categories: `gmail`, `email`, `telegram`, `whatsapp`, `google-voice`, `social`, `developer`, `other`
2. Open the new file in `content/blog/`, fill in `description`, and paste the article under the `---` line.
3. Optional cover image: put it in `public/blog/` and add `image: /blog/name.jpg` in the header.
   Without an image, the site shows a coloured cover with the service logo automatically.
4. Commit and push. Netlify rebuilds and the post is live in about a minute:
   ```bash
   git add . && git commit -m "New blog post" && git push
   ```

**SEO fields in the post header** (the helper creates the basics; add these for best results):
- `title` is the H1. `seoTitle` is the Google title (keep under 60 characters).
- `description` should be 120-160 characters and include the main keyword.
- `keywords:` comma separated, e.g. `buy Gmail accounts, aged Gmail accounts`.
- `product:` a catalog id (`gmail`, `telegram`, `whatsapp`, `reddit`, ...). It adds an order card to the post and
  lists the post on that product's page (good internal linking).
- `updated: YYYY-MM-DD` when you refresh an old post.
- End each post with `## Frequently Asked Questions` and `### Question?` + answer paragraph. These automatically
  become FAQ rich-result schema for Google.
- `##` headings automatically create the table of contents. Add 2+ internal links like `[Gmail accounts](/product/gmail)`.
- Every post is added to `sitemap.xml` and `/blog/rss.xml` automatically.

**Formatting inside a post:** `## Heading`, `### Sub-heading`, `**bold**`, `*italic*`,
`- bullet`, `1. numbered`, `[link text](https://...)`, `> quote`, and simple tables with `| a | b |`.

**Hide a post** without deleting it: add the line `draft: true` to its header.
**Feature a post** at the top of /blog: add `featured: true`.
**New category:** add one line to `src/config/blogCategories.ts` (and to `scripts/new-post.mjs`).
It shows up on /blog automatically once a post uses it. Empty categories are hidden.

## Customer feedback

1. Customers fill in the form on `/feedback`. Every submission is **emailed straight to nexitshop1@gmail.com** (via FormSubmit.co).
   **One-time setup:** after deploying, send one test feedback. FormSubmit emails you an "Activate Form" link. Click it once.
   Check Spam too. After that, every feedback arrives in your inbox.
2. A copy also goes to Netlify Forms (Netlify → Forms → customer-feedback) when the site is hosted on Netlify.
3. To publish a review, add it to `content/reviews.json`:
   ```json
   [
     {
       "name": "Alex M.",
       "service": "Gmail Accounts",
       "rating": 5,
       "message": "Fast delivery and the account worked first time.",
       "date": "2026-11-09"
     }
   ]
   ```
   Commit and push. It then appears on `/feedback` and in the home page reviews section.
   Only publish real feedback that the customer agreed to share (the form has a checkbox for this).
