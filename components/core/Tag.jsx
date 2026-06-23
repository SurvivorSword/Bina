import React from 'react';

const CSS = `
.sel-tag{
  display:inline-flex;align-items:center;gap:.45em;
  font-family:var(--font-body);font-weight:var(--fw-medium);font-size:var(--text-sm);
  color:var(--text-primary);background:var(--surface-card);
  border:1px solid var(--border-subtle);border-radius:var(--radius-full);
  padding:.34em .8em;cursor:default;line-height:1;
  transition:border-color var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out);
}
.sel-tag--clickable{cursor:pointer;}
.sel-tag--clickable:hover{border-color:var(--border-glow);color:var(--glow-200,var(--glow-300));}
.sel-tag--active{background:var(--accent-soft);border-color:var(--border-glow);color:var(--glow-100);}
.sel-tag__hash{color:var(--accent);font-family:var(--font-mono);}
.sel-tag__x{display:inline-flex;margin-left:.1em;opacity:.6;cursor:pointer;border:0;background:none;color:inherit;padding:0;line-height:0;}
.sel-tag__x:hover{opacity:1;}
.sel-tag__x svg{width:13px;height:13px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-tag-css')) {
  const s = document.createElement('style'); s.id = 'sel-tag-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tag({ active = false, hash = false, onRemove, onClick, children, className = '', ...rest }) {
  const clickable = !!onClick;
  return (
    <span
      className={`sel-tag ${clickable ? 'sel-tag--clickable' : ''} ${active ? 'sel-tag--active' : ''} ${className}`}
      onClick={onClick} {...rest}>
      {hash && <span className="sel-tag__hash">#</span>}
      {children}
      {onRemove && (
        <button type="button" className="sel-tag__x" aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      )}
    </span>
  );
}
