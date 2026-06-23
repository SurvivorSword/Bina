import React from 'react';

const CSS = `
.sel-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  background:transparent;border:1px solid transparent;color:var(--text-secondary);
  border-radius:var(--radius-sm);cursor:pointer;
  transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);
}
.sel-iconbtn:hover{background:var(--surface-hover);color:var(--text-primary);}
.sel-iconbtn:focus-visible{outline:2px solid var(--ring);outline-offset:2px;}
.sel-iconbtn:active{transform:scale(.94);}
.sel-iconbtn[disabled]{opacity:.4;pointer-events:none;}
.sel-iconbtn--sm{width:30px;height:30px;}
.sel-iconbtn--md{width:38px;height:38px;}
.sel-iconbtn--lg{width:46px;height:46px;}
.sel-iconbtn--sm svg{width:16px;height:16px;}
.sel-iconbtn--md svg{width:19px;height:19px;}
.sel-iconbtn--lg svg{width:22px;height:22px;}
.sel-iconbtn--solid{background:var(--surface-card);border-color:var(--border-strong);box-shadow:var(--rim-light);}
.sel-iconbtn--solid:hover{border-color:var(--border-glow);color:var(--accent-hover);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-iconbtn-css')) {
  const s = document.createElement('style'); s.id = 'sel-iconbtn-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function IconButton({ size = 'md', variant = 'plain', label, children, className = '', ...rest }) {
  return (
    <button type="button" aria-label={label} title={label}
      className={`sel-iconbtn sel-iconbtn--${size} sel-iconbtn--${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
}
