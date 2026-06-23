Bina's primary action button — use for any clickable action; the `primary` variant carries the signature cyan glow and is reserved for the single key action per view.

```jsx
<Button variant="primary" size="md">Explore timeline</Button>
<Button variant="secondary">Filter</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (glow cyan), `secondary` (moonlit surface + border), `ghost` (text only), `plum` (warm counter-accent). Sizes: `sm` `md` `lg`. Pass an SVG as a child for a leading/trailing icon. Set `as="a"` + `href` for link buttons.
