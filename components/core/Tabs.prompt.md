Segmented control for switching views (e.g. timeline range, sort). Active tab glows cyan.

```jsx
<Tabs value={view} onChange={setView} items={[
  {value:'all', label:'All time'},
  {value:'yr', label:'This year'},
  {value:'wk', label:'This week'},
]} />
```

Each item may carry an `icon` (SVG).
