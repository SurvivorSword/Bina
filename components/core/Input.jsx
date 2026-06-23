import React from 'react';

const CSS = `
.sel-field{display:inline-flex;flex-direction:column;gap:.4rem;width:100%;}
.sel-field__label{font:var(--type-label);color:var(--text-secondary);}
.sel-inputwrap{
  display:flex;align-items:center;gap:.55rem;
  background:var(--bg-raised);border:1px solid var(--border-strong);
  border-radius:var(--radius-sm);padding:0 .8rem;
  transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out);
}
.sel-inputwrap:focus-within{border-color:var(--border-glow);box-shadow:0 0 0 3px var(--accent-soft);}
.sel-inputwrap--invalid{border-color:var(--signal-fall);}
.sel-inputwrap__icon{display:flex;color:var(--text-muted);flex:none;}
.sel-inputwrap__icon svg{width:17px;height:17px;}
.sel-input{
  flex:1;min-width:0;background:none;border:0;outline:none;
  font:var(--type-body);color:var(--text-primary);padding:.6rem 0;
}
.sel-input::placeholder{color:var(--text-muted);}
.sel-field__hint{font:var(--text-xs)/1.4 var(--font-mono);color:var(--text-muted);letter-spacing:.03em;}
.sel-field__hint--err{color:var(--signal-fall);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-input-css')) {
  const s = document.createElement('style'); s.id = 'sel-input-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Input({ label, icon, hint, invalid = false, id, className = '', ...rest }) {
  const fid = id || (label ? 'sel-f-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <label className={`sel-field ${className}`} htmlFor={fid}>
      {label && <span className="sel-field__label">{label}</span>}
      <span className={`sel-inputwrap ${invalid ? 'sel-inputwrap--invalid' : ''}`}>
        {icon && <span className="sel-inputwrap__icon">{icon}</span>}
        <input id={fid} className="sel-input" {...rest} />
      </span>
      {hint && <span className={`sel-field__hint ${invalid ? 'sel-field__hint--err' : ''}`}>{hint}</span>}
    </label>
  );
}
