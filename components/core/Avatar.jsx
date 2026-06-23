import React from 'react';

const CSS = `
.sel-avatar{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:50%;overflow:hidden;flex:none;
  background:var(--grad-aurora);color:var(--moon);
  font-family:var(--font-body);font-weight:var(--fw-semibold);
  border:1px solid color-mix(in oklch,var(--moon) 14%,transparent);
}
.sel-avatar img{width:100%;height:100%;object-fit:cover;}
.sel-avatar--sm{width:28px;height:28px;font-size:11px;}
.sel-avatar--md{width:38px;height:38px;font-size:14px;}
.sel-avatar--lg{width:52px;height:52px;font-size:19px;}
.sel-avatar--ring{box-shadow:0 0 0 2px var(--bg),0 0 0 3px var(--accent);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-avatar-css')) {
  const s = document.createElement('style'); s.id = 'sel-avatar-css'; s.textContent = CSS; document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

export function Avatar({ src, name = '', size = 'md', ring = false, className = '', ...rest }) {
  return (
    <span className={`sel-avatar sel-avatar--${size} ${ring ? 'sel-avatar--ring' : ''} ${className}`}
      title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
