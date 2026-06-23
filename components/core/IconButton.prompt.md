Icon-only button for toolbars and dense UI — always pass `label` for accessibility.

```jsx
<IconButton label="Bookmark"><BookmarkIcon/></IconButton>
<IconButton variant="solid" size="lg" label="Add"><PlusIcon/></IconButton>
```

Variants: `plain` (transparent, hover surface), `solid` (carded). Sizes `sm` `md` `lg`. Child is any SVG.
