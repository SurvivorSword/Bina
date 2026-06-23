import React from 'react';

const CSS = `
.sel-badge{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-mono);font-weight:var(--fw-medium);font-size:var(--text-xs);
  letter-spacing:.06em;text-transform:uppercase;
  padding:.28em .6em;border-radius:var(--radius-full);
  border:1px solid transparent;line-height:1;
}
.sel-badge .sel-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;box-shadow:0 0 8px currentColor;}
.sel-badge--neutral{background:color-mix(in oklch,var(--night-400) 16%,transparent);color:var(--night-200);border-color:var(--border-subtle);}
.sel-badge--rise{background:color-mix(in oklch,var(--signal-rise) 14%,transparent);color:var(--signal-rise);}
.sel-badge--fall{background:color-mix(in oklch,var(--signal-fall) 14%,transparent);color:var(--signal-fall);}
.sel-badge--info{background:color-mix(in oklch,var(--glow-500) 16%,transparent);color:var(--glow-300);}
.sel-badge--gold{background:color-mix(in oklch,var(--gold-400) 16%,transparent);color:var(--gold-300);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-badge-css')) {
  const s = document.createElement('style'); s.id = 'sel-badge-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Badge({ tone = 'neutral', dot = false, children, className = '', ...rest }) {
  return (
    <span className={`sel-badge sel-badge--${tone} ${className}`} {...rest}>
      {dot && <span className="sel-badge__dot" />}
      {children}
    </span>
  );
}
