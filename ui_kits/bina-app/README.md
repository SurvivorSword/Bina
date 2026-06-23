# Bina App — UI kit

A high-fidelity recreation of **Bina**, the living timeline of the most-discussed topics in
artificial intelligence. Dark-first, nocturnal, editorial.

## Screens
- **Explore / Timeline (home)** — `TimelineHome.jsx`. Hero band over the moonlit field image,
  then a vertical glowing "spine" timeline grouped by year. Each topic is an interactive row
  (`TopicRow`) with a momentum `Sparkline`, rise/cool `Badge`, topic `Tag`s, and peak metadata.
- **Topic detail** — `TopicDetail.jsx`. Serif headline, full-width momentum chart, by-the-numbers
  panel, a "Key moments" sub-timeline, related topics, and neighboring break-outs.
- **TopBar** — `TopBar.jsx`. Frosted-glass sticky nav: crescent logo, nav links, search `Input`,
  alerts `IconButton`, `Avatar`.

## Run
Open `index.html`. It loads the compiled `_ds_bundle.js`, then `data.js` (fake dataset),
`icons.js` (lucide-style inline icon set on `window.BinaIcons`), and the screen JSX files,
which each register themselves on `window`. `App` switches between home and detail and is fully
click-through (click any topic → detail → Back).

## Composition notes
Screens compose the design-system primitives (`Button`, `Card`, `Badge`, `Tag`, `Tabs`,
`Sparkline`, `Input`, `IconButton`, `Avatar`, `Tooltip`) from `window.SeleneDesignSystem_7655ad`
— they do not re-implement them. Data is illustrative, not real.
