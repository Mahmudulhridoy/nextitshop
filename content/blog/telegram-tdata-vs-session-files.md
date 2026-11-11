---
title: "TData or Session + JSON? A Plain-English Guide to Telegram Account Formats"
seoTitle: "TData vs Session + JSON: Telegram Formats Explained"
category: telegram
date: 2026-10-28
description: "Two Telegram account formats, two different jobs. Learn which one suits Telegram Desktop and which one suits Python scripts, bots and the API."
keywords: TData vs session, Telegram TData, Telegram session JSON, Telegram account formats, Telethon session
product: telegram
updated: 2026-11-09
---

If you have browsed Telegram accounts for sale, you have seen two formats listed again and again: **TData** and **Session + JSON**. They are not "better" or "worse" than each other. They are built for different tools.

## What is TData?

TData is the folder Telegram Desktop creates on a computer to remember a logged-in account. It holds your encrypted login keys and local cache. Copy that folder into a fresh Telegram Desktop installation and the account opens, with no login code needed.

**Choose TData if you:**

- Mainly work by hand in Telegram Desktop
- Manage a handful of accounts and switch between them
- Want the simplest possible setup with no scripting

## What is Session + JSON?

A session file is what libraries such as **Telethon** and **Pyrogram** use to stay logged in. It comes with a JSON file that records details such as the app ID and device information used to create the session.

**Choose Session + JSON if you:**

- Build or run bots and scripts in Python
- Need to connect Telegram to your own tools through the official API
- Prefer to keep configuration in code

## Side by side

| | TData | Session + JSON |
|---|---|---|
| Used with | Telegram Desktop | Telethon, Pyrogram |
| Skill needed | Beginner | Some Python |
| Best for | Manual use | Automation through the API |
| Login code needed | No | No |

## Handling the files safely

A session or TData folder is a **key to the account**. Treat it like a password:

1. Keep a private backup, never in a shared folder or public repository.
2. Do not open the same session from many places at once. Telegram may end sessions it considers suspicious.
3. Enable two-step verification and set your own password as soon as you take over the account.
4. Stay within Telegram's Terms of Service and API rules, including limits on messaging people who have not contacted you.

## Which one should you pick?

If you are unsure, start with TData. It needs nothing but the desktop app. If you are writing code, go with Session + JSON. Not sure? Send us a short message describing what you want to do and we will recommend a format.

## Next Steps

Ready to choose? Read our [Telegram accounts buying guide](/blog/telegram-accounts-buying-guide) or browse [Telegram accounts](/product/telegram).

## Frequently Asked Questions

### Can I use TData with Python scripts?

TData is meant for Telegram Desktop. Python libraries such as Telethon and Pyrogram use session files.

### Is a session file the same as a password?

It works like one, because it keeps the account signed in. Store it privately and never share it.

### Which format is easier to start with?

TData is easier because it only needs the Telegram Desktop app.
