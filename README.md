# ToolLoop

A community tool-sharing marketplace prototype for MagdeHack 2026, built in the existing Next.js App Router project with TypeScript, React, and Tailwind CSS. No additional runtime dependencies were introduced.

## Run locally

From this directory (`toolloop/`):

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` followed by `npm start`.

## Pages and interactions

- `/`: homepage, search, category links, featured listings, and borrowing/credits explanation.
- `/explore`: 12 mock listings; text, category, daily-budget, and availability filters; price and credits sorting; empty-state reset. Homepage searches and category links seed the filters through URL parameters.
- `/tools/[id]`: descriptions, included equipment, sample owner and availability, and a local borrow-request preview with duration and euro/credit totals. Unknown tools show a 404.
- `/projects`: three beginner projects with expandable written steps, links to matching marketplace tools, and explicit placeholders for future verified YouTube tutorials.
- `/profile`: an explicitly fictional sample user, credits balance, owned tools, and borrowing/lending history.

## Structure

- `app/`: route pages, shared layout, metadata, 404, and responsive global styles.
- `components/`: navigation, icons, local SVG tool illustrations, listing cards, search, client-side filters, and borrow preview.
- `lib/types.ts`: shared TypeScript domain models.
- `lib/mock-data.ts`: mock tools, categories, projects, profile, and history.
- `lib/data.ts`: read-only data adapter, intended to be replaced by Supabase queries later.

All tool artwork is rendered locally as SVG. No remote image service, external fonts, API credentials, or environment variables are required.

## Demo boundaries

All people, listings, availability, prices, activity, and credit balances are sample data. A borrow request only changes in-memory component state and is lost on navigation or reload. Nothing is booked, persisted, sent to an owner, paid, or deducted. There is no authentication, database, payment system, or real credit ledger. Tutorial slots are labelled placeholders, with no claimed verification.

## Checks

```bash
npm run lint
npm run build
```

No deployment or GitHub push is part of this implementation.
