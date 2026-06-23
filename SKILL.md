---
name: bina-design
description: Use this skill to generate well-branded interfaces and assets for Bina (the living timeline of the most popular AI topics), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file to inherit all tokens + fonts. (`@import` list only.)
- `tokens/` — colors, typography, spacing, effects, base reset (CSS custom properties).
- `guidelines/` — foundation specimen cards (the visual language at a glance).
- `components/core/` — reusable React primitives (`Button`, `Card`, `Badge`, `Tag`, `Sparkline`,
  `Input`, `Switch`, `Avatar`, `Tabs`, `Tooltip`, `IconButton`). Each has a `.prompt.md` usage note.
- `ui_kits/bina-app/` — full product recreation (timeline home + topic detail) to copy from.
- `assets/` — `moonlit-hero.jpg` (brand image), `bina-mark.svg` (crescent logo).

## The brand in one breath
Nocturnal, editorial, calm. Dark-first midnight blues; bioluminescent cyan as the one signature
accent; Cormorant Garamond (display serif, italic for emphasis) + Hanken Grotesk (body) + IBM Plex
Mono (all numbers/dates/labels, uppercase eyebrows only). Light glows in darkness — soft shadows +
rim-light on cards, real glow on live data. No emoji, no bounce, sentence case. The recurring motif
is a glowing vertical timeline spine.
