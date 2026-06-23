import React from 'react';

const CSS = `
.sel-switch{display:inline-flex;align-items:center;gap:.6rem;cursor:pointer;user-select:none;}
.sel-switch input{position:absolute;opacity:0;width:0;height:0;}
.sel-switch__track{
  width:42px;height:24px;border-radius:var(--radius-full);
  background:var(--night-700);border:1px solid var(--border-strong);
  position:relative;transition:background var(--dur-med) var(--ease-out),box-shadow var(--dur-med) var(--ease-out);flex:none;
}
.sel-switch__thumb{
  position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;
  background:var(--night-200);transition:transform var(--dur-med) var(--ease-out),background var(--dur-med) var(--ease-out);
}
.sel-switch input:checked + .sel-switch__track{background:var(--accent);box-shadow:var(--glow-sm);}
.sel-switch input:checked + .sel-switch__track .sel-switch__thumb{transform:translateX(18px);background:var(--text-on-accent);}
.sel-switch input:focus-visible + .sel-switch__track{outline:2px solid var(--ring);outline-offset:2px;}
.sel-switch input:disabled + .sel-switch__track{opacity:.45;}
.sel-switch__label{font:var(--type-body);color:var(--text-primary);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-switch-css')) {
  const s = document.createElement('style'); s.id = 'sel-switch-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Switch({ checked, defaultChecked, onChange, disabled, label, className = '', ...rest }) {
  return (
    <label className={`sel-switch ${className}`}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked}
        onChange={onChange} disabled={disabled} {...rest} />
      <span className="sel-switch__track"><span className="sel-switch__thumb" /></span>
      {label && <span className="sel-switch__label">{label}</span>}
    </label>
  );
}
