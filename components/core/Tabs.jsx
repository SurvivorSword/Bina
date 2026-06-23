import React from 'react';

const CSS = `
.sel-tabs{display:inline-flex;gap:2px;background:var(--bg-raised);
  border:1px solid var(--border-strong);border-radius:var(--radius-md);padding:4px;}
.sel-tab{
  appearance:none;border:0;background:none;cursor:pointer;
  font-family:var(--font-body);font-weight:var(--fw-semibold);font-size:var(--text-sm);
  color:var(--text-secondary);padding:.45rem .9rem;border-radius:var(--radius-sm);
  transition:color var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out);
  display:inline-flex;align-items:center;gap:.45em;white-space:nowrap;
}
.sel-tab:hover{color:var(--text-primary);}
.sel-tab--active{color:var(--text-on-accent);background:var(--accent);box-shadow:var(--glow-sm);}
.sel-tab--active:hover{color:var(--text-on-accent);}
.sel-tab:focus-visible{outline:2px solid var(--ring);outline-offset:2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-tabs-css')) {
  const s = document.createElement('style'); s.id = 'sel-tabs-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tabs({ items = [], value, onChange, className = '', ...rest }) {
  const active = value ?? (items[0] && items[0].value);
  return (
    <div role="tablist" className={`sel-tabs ${className}`} {...rest}>
      {items.map((it) => (
        <button key={it.value} role="tab" type="button"
          aria-selected={it.value === active}
          className={`sel-tab ${it.value === active ? 'sel-tab--active' : ''}`}
          onClick={() => onChange && onChange(it.value)}>
          {it.icon}{it.label}
        </button>
      ))}
    </div>
  );
}
