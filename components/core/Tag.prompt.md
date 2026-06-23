Topic chip — represents an AI subject or an active filter token. Add `onClick` to make it a toggle and `onRemove` to make it dismissible.

```jsx
<Tag hash>diffusion models</Tag>
<Tag hash active onClick={...}>agents</Tag>
<Tag onRemove={...}>2023</Tag>
```

`hash` prefixes a glowing #. `active` shows the selected (cyan) state.
