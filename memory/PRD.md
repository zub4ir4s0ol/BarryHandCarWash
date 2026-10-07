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

## Update round 2 (2026-10-07, owner feedback)
- Replaced ALL stock photos with the owner's 5 real photos (gallery g1–g5, hero bg = owner's Urus photo). No fake photos remain.
- Hero subline changed to owner's wording: "Professional hand car wash in Barry, providing quality cleaning inside and out to keep your car fresh" (prices line removed from hero; prices live in the price section).
- Removed all booking language: service card CTAs now "Call Us"; visit section says "No booking needed — just turn up".
- Added 4.7 Google rating: hero badge, About review card, Visit "Leave a Review" button, footer link. Real listing found: Barry Hand Car Wash, 4.7 from 22 reviews — reviewUrl now opens the real Google listing directly (google.com/maps?cid=1192728031576523538).
- Added OpenGraph/social share meta with the owner's Urus photo as the thumbnail.

## Update round 3 (2026-10-07, owner feedback)
- "Under New Management" removed everywhere (hero badge, marquee, footer, about text).
- Little SVG logo removed from nav top-left (text wordmark only); the real shield logo now appears in the hero card, the loyalty stamp card, and the footer.
- Payment info added: "Cash & card accepted — cash preferred" in the price list section and in the Find Us address card. "Cash & Card Accepted" also added to the marquee.

## Update round 4 (2026-10-07, owner feedback)
- Real shield logo now in the nav top-left (white tile next to wordmark) and shown large above the hero headline on mobile — logo leads the page on every device. Full set: nav, mobile hero, hero card (desktop), loyalty card, footer.

## Note for owner
- Google listing shows hours 8:30–18:30 all 7 days; the flyer says Sun 9am–5pm and Mon–Sat until 6pm. Site currently shows the FLYER times — tell us which is correct and we'll match it.

## Backlog
- P2: Confirm which opening hours are correct (flyer vs Google listing)
- P3: More owner photos as they come in
