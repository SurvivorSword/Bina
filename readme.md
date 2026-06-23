# Bina Design System

> The living timeline of artificial intelligence — a nocturnal, editorial data product that
> tracks the rise and fall of every conversation in AI.

Bina presents a "timeline of the most popular AI topics" as a calm, luminous record: topics
surface, peak, and fade against a midnight sky. The aesthetic is drawn directly from the single
brand reference supplied — a moonlit field of bioluminescent flowers under a vast moon. Deep
midnight blues, luminous moon-white, glowing violet, sky, mint, and rare gold.

## Quick start
Link the one global stylesheet and you inherit every token + webfont:
```html
<link rel="stylesheet" href="styles.css">
```
Reusable React components are bundled into `_ds_bundle.js` and exposed on a global namespace —
see **Components** below. Open `ui_kits/bina-app/index.html` for the full interactive product
recreation, or any file in `guidelines/` for a foundation specimen.

**Repo layout:** `styles.css` (entry) · `tokens/` (CSS variables) · `guidelines/` (specimen
cards) · `components/core/` (React primitives) · `ui_kits/bina-app/` (product demo) · `assets/`
(logo + imagery) · `SKILL.md` (Claude Code skill wrapper).

## Sources given
- Company description (verbatim): *"Timeline of most popular AI topics."*

No codebase, Figma, or existing brand guide was provided. The visual direction below is an
**original system derived from the reference image**

---

## Content fundamentals
How Bina writes.

- **Voice:** literary but precise — an archivist of ideas, not a hype-machine. Short declarative
  sentences. *"Topics surface, peak, and fade."* *"Every idea the field obsessed over, in order."*
- **Person:** third-person about the subject ("the field", "the conversation"); "Bina" refers to
  the product by name. Avoid "we"/"you" in editorial copy; "you" is fine in product UI affordances
  ("Track this topic").
- **Casing:** Sentence case everywhere — headlines, buttons, nav. The ONLY uppercase is the mono
  **eyebrow / micro-label** (`.eyebrow`), used for machine-y metadata: `INDEXED WEEKLY`,
  `PEAK APR 2025 · 48.2K`. Tracking is wide (`--ls-wider`).
- **Numbers & dates:** always set in the mono face (IBM Plex Mono). Deltas use ▲/▼ + percent.
  Dates as `2025-04` or `Apr 2025`.
- **Tone words:** quiet, luminous, nocturnal, calm. Never "revolutionary", "unleash", "game-changing".
- **Emoji:** none. Status is shown with glowing dots and mono badges, never emoji.

## Visual foundations
- **Color:** Dark-first — `:root` *is* the night theme. Cool blue-tinted neutrals
  (`--night-950 → --moon`). One signature accent: luminous **violet** (`--glow-500`, `#A78BFF`),
  used sparingly for the single key action and live data. Counter-accents: **sky** (cool structure),
  **mint** (fresh highlight), **gold** (rare — "topic of the year"). Status: rise (mint), fall
  (coral), warn (gold), info (cyan).
- **Type:** Display = **Cormorant Garamond** (ethereal high-contrast serif, often italic for the
  emphasized phrase). Body/UI = **Hanken Grotesk** (clean humanist sans). Data/labels = **IBM
  Plex Mono**. Headlines lean large and airy with tight tracking (`-.02em`).
- **Backgrounds:** solid midnight (`--bg`), occasionally a faint radial moon-glow (`--grad-moon`)
  top-right. Imagery is full-bleed but heavily darkened and protected with a left→right and
  bottom→up gradient (`--protect-bottom`) so text reads. Cool, luminous, slightly desaturated.
- **The signature is light in darkness.** Elevation is mostly deep soft shadows PLUS a faint top
  rim-light (`--rim-light`) on cards. Accents and live data get a real **glow** (`--glow-sm/-md`,
  `drop-shadow`). Use glow sparingly — it should feel like bioluminescence, not neon.
- **Cards:** `--surface-card` fill, 1px `--border-subtle`, `--radius-lg` (16px), `shadow-md` +
  rim-light. Featured cards add the cyan glow border. Hover = lift 2px + glow border.
- **Borders & radii:** hairline cool borders; radii are soft (4–24px) — `--radius-full` is reserved
  for chips, badges, avatars, and the timeline spine, never structural panels.
- **Motion:** calm and floating. `--ease-out` / `--ease-in-out`, 140–520ms. Fades and gentle
  lifts; **no bounce**, no spring. Press = slight shrink (`scale(.99)`), not color flash.
- **Hover states:** surfaces lighten one step (`--surface-hover`); accents brighten (`--glow-400`)
  and the glow intensifies. **Press:** darker accent (`--accent-press`) + 1px down.
- **Transparency & blur:** the sticky top bar is frosted glass (`--blur-glass` over a 72% night
  tint). Used for chrome over content, not decoratively.
- **Layout:** `--container` 1200px, generous gutters. The recurring structural motif is the
  **glowing vertical timeline spine** with mono year markers and luminous nodes.

## Iconography
- **System:** a small **lucide-style** set (24px grid, 2px round strokes) is shipped inline at
  `ui_kits/bina-app/icons.js` as `window.BinaIcons` (Search, Bell, Star, ArrowUp/Down/Left,
  TrendUp, Clock, Sliders, Layers, Compass, Sparkle, Link, External). They match Lucide's weight
  and join style.
- **Recommendation:** for broader needs, use **Lucide** (https://lucide.dev) from CDN — same
  stroke weight (2px), round caps/joins. This is a *substitution choice*, not a copied brand
  icon set (none was provided). Stick to outline icons; never mix filled icon families.
- Icons inherit `currentColor` and size to `1em`, so they tint and scale with their button/text.
- **No emoji.** Status uses glowing dots (`Badge dot`) and mono badges. The crescent moon mark
  (`assets/bina-mark.svg`) is the one brand glyph.

## Index / manifest
Root:
- `styles.css` — global entry point (consumers link this). `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.
- `assets/` — `moonlit-hero.jpg` (brand reference), `bina-mark.svg` (crescent logo).
- `components/core/` — reusable primitives + `core.card.html`.
- `ui_kits/bina-app/` — the product recreation (home timeline + topic detail).
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

### Components (`window.SeleneDesignSystem_7655ad`)
`Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Input`, `Switch`, `Avatar`, `Tabs`, `Tooltip`,
`Sparkline`. Each has a `.d.ts` (props) and `.prompt.md` (usage). `Button`, `Card`, `Sparkline`,
and the Bina App screen are tagged as **starting points**.

### UI kits
- `ui_kits/bina-app/` — Bina timeline web app: `index.html` (interactive), `TopBar.jsx`,
  `TimelineHome.jsx`, `TopicDetail.jsx`, `data.js`, `icons.js`. See its README.

---

## CAVEATS
- **Direction is inferred.** The only brand input was one image + a one-line description. The
  nocturnal/editorial direction, product framing, name "Bina", and all copy are an original
  interpretation. If you had a different product or brand in mind, tell me and I'll re-aim.
- **Fonts load from Google Fonts CDN** via `@import` in `tokens/fonts.css` (Cormorant Garamond,
  Hanken Grotesk, IBM Plex Mono) — they are not self-hosted, so the compiler reports 0 `@font-face`
  files. If you need offline/self-hosted webfonts, send the files and I'll wire `@font-face`.
- **Icons are a Lucide-style substitution** (no brand icon set existed). Swap if you have one.
- Logo is a simple geometric crescent mark I created — happy to refine or replace with a real logo.
