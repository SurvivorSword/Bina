The signature Bina dataviz unit — a glowing momentum line for a topic over time. Tone encodes direction.

```jsx
<Sparkline data={[3,5,4,8,12,9,18,24]} tone="rise" width={140} height={40} />
<Sparkline data={[20,18,14,15,9,6,4]} tone="fall" fill={false} />
```

Tones: `glow` `rise` `fall` `plum` `gold`. Auto-scales to the data; `dot` marks the latest point.
