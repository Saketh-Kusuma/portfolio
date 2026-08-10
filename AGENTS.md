<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions & gotchas

Visual portfolio: Next.js + Tailwind v4 + Base UI + motion. After any change that renders in the browser, verify it with the preview tools (run the `portfolio-dev` server, inspect/measure, screenshot) instead of assuming — most bugs here are runtime layout/stacking issues, not compile errors.

## z-index & overlays
Both navbars (`app/navbar/index.tsx`, `app/navbar/navbar-home.tsx`) are `z-100`, so any dropdown/menu/popover has to clear that. Base UI's `Menu` renders a **Positioner** (the positioned element — z-index applies here) wrapping a **Popup** (`position: static`, so z-index on it is silently ignored). Menu stacking is set on the Positioner in `components/ui/dropdown-menu.tsx` (`z-[120]`) so menus sit above the navbar. Don't try to fix menu layering from the Popup/content className — it can't win against the navbar from there.

## Navbar invariants
`app/navbar/index.tsx` animates its width on scroll (motion `useTransform`). Keep `min-w-fit` on `<motion.nav>` and `shrink-0` on the avatar wrapper + `<Image>` and on the right-side toggle group. Dropping any of these brings back the pill-overflow / squished-avatar bugs.

## Tech-stack icons
Skills live in `app/content/skills/index.ts`; logos are fetched from skillicons.dev by the `icon` slug. Only add a skill whose icon actually exists on skillicons.dev — otherwise it renders a wrong/blank logo (Shadcn UI was removed for exactly this reason).

## Styling
Tailwind v4, CSS-first in `app/globals.css` with OKLCH design tokens. Prefer semantic token classes (`text-primary`, `text-secondary`, `border-input`, `ring-ring`, `bg-card`, `bg-popover`) over hardcoded `neutral-*` when a token fits.
