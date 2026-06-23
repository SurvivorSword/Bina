import React from 'react';

const CSS = `
.sel-tip{position:relative;display:inline-flex;}
.sel-tip__bubble{
  position:absolute;z-index:50;pointer-events:none;
  bottom:calc(100% + 9px);left:50%;transform:translateX(-50%) translateY(4px);
  background:var(--night-950);color:var(--night-50);border:1px solid var(--border-strong);
  font:var(--text-xs)/1.4 var(--font-mono);letter-spacing:.04em;
  padding:.4rem .6rem;border-radius:var(--radius-sm);white-space:nowrap;
  box-shadow:var(--shadow-lg);opacity:0;transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);
}
.sel-tip__bubble::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);
  border:5px solid transparent;border-top-color:var(--night-950);}
.sel-tip:hover .sel-tip__bubble,.sel-tip:focus-within .sel-tip__bubble{opacity:1;transform:translateX(-50%) translateY(0);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-tip-css')) {
  const s = document.createElement('style'); s.id = 'sel-tip-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tooltip({ label, children, className = '', ...rest }) {
  return (
    <span className={`sel-tip ${className}`} {...rest}>
      {children}
      <span role="tooltip" className="sel-tip__bubble">{label}</span>
    </span>
  );
}
