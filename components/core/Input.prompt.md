Text input with optional label, leading icon and hint. The system's search bar is this with a search icon and no label.

```jsx
<Input label="Email" type="email" placeholder="you@lab.ai" hint="We never share it." />
<Input icon={<SearchIcon/>} placeholder="Search topics…" />
```

`invalid` switches border + hint to the fall/red signal.
