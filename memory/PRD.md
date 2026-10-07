# PRD — Barry Hand Car Wash Website

## Original problem statement
Owner of "Barry Hand Car Wash" (182-190 Barry Road, Barry, CF62 9BE) wants a website based on his flyer/logo info for mini valet and full valet (with starting prices), with NO bookings, and the ability to add his own business photos later.

## Business facts (source: owner's flyer & logo — exact)
- Name: Barry Hand Car Wash (under new management)
- Address: 182-190 Barry Road, Barry, CF62 9BE
- Phone: 07518199557
- Hours: Mon–Sat 8:30am–6:00pm, Sun 9:00am–5:00pm (open 7 days)
- Loyalty: receive 4 stamps & 5th wash & dry is free
- Free air freshener with every option
- Services/prices: 1) Wash & Dry £10/£12/£15 · 2) Mini Valet £20/£25/£30 · 3) Wash & Body Polish £25/£30/£35 · 4) Mini Valet & Hand Body Polish £35/£40/£45 · 5) Full Valet £55/£60/£65 · 6) Van Wash £10/£12/£15 (Small/Medium/Large)

## User decisions (confirmed via questions, answered "ok" = recommended defaults)
- Show all 6 services, Mini Valet & Full Valet highlighted with starting prices
- Design matches logo: navy/blue/red automotive badge aesthetic
- Google Map embed for CF62 9BE
- Click-to-call 07518199557 everywhere; no booking forms

## Architecture
- Frontend-only React SPA (CRA + Tailwind + framer-motion + lenis). Backend untouched (no API needed).
- Components: Nav, Hero (masked line reveal, parallax bg, floating real-logo card, soap bubbles), Marquee, Services (S/M/L animated price toggle, featured cards), Loyalty (interactive 5-stamp card), About, Gallery, Visit (hours + dark-styled map iframe), Footer.
- Owner's real logo: frontend/public/images/logo.png; favicon: public/favicon.svg (SVG re-draw of shield).

## Implemented (2026-10-07)
- All 9 sections above, mobile-first responsive, data-testids throughout.
- Gallery uses stock placeholder photos, stored at public/images/gallery/g1..g6.jpg — owner swaps these files to add his own photos.

## Backlog
- P2: Replace gallery stock photos with owner's real photos (owner does by swapping files in public/images/gallery/)
- P2: Owner-provided real hero photo of the wash bay (currently stock)
- P2: WhatsApp click-to-chat link if requested later
- P3: SEO: add real business photos to OpenGraph meta
