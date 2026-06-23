import React from 'react';

const CSS = `
.sel-btn{
  --_bg:var(--accent); --_fg:var(--text-on-accent); --_bd:transparent;
  display:inline-flex;align-items:center;justify-content:center;gap:.5em;
  font-family:var(--font-body);font-weight:var(--fw-semibold);
  border:1px solid var(--_bd);background:var(--_bg);color:var(--_fg);
  border-radius:var(--radius-sm);cursor:pointer;white-space:nowrap;
  transition:transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-med) var(--ease-out),
             background var(--dur-fast) var(--ease-out),
             filter var(--dur-fast) var(--ease-out);
}
.sel-btn:focus-visible{outline:2px solid var(--ring);outline-offset:2px;}
.sel-btn:active{transform:translateY(1px) scale(.99);}
.sel-btn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none;}
.sel-btn svg{width:1.15em;height:1.15em;}

/* sizes */
.sel-btn--sm{font-size:var(--text-sm);padding:.4rem .75rem;}
.sel-btn--md{font-size:var(--text-md);padding:.6rem 1.1rem;}
.sel-btn--lg{font-size:var(--text-lg);padding:.8rem 1.5rem;}

/* primary — bioluminescent */
.sel-btn--primary{box-shadow:var(--glow-sm);}
.sel-btn--primary:hover{background:var(--accent-hover);box-shadow:var(--glow-md);}
.sel-btn--primary:active{background:var(--accent-press);}

/* secondary — moonlit surface */
.sel-btn--secondary{--_bg:var(--surface-card);--_fg:var(--text-primary);--_bd:var(--border-strong);box-shadow:var(--rim-light);}
.sel-btn--secondary:hover{--_bg:var(--surface-hover);--_bd:var(--border-glow);}

/* ghost */
.sel-btn--ghost{--_bg:transparent;--_fg:var(--text-secondary);}
.sel-btn--ghost:hover{--_bg:var(--surface-hover);--_fg:var(--text-primary);}

/* plum — counter accent */
.sel-btn--plum{--_bg:var(--plum-500);--_fg:#fff;}
.sel-btn--plum:hover{--_bg:var(--plum-400);box-shadow:var(--glow-plum);}
`;

if (typeof document !== 'undefined' && !document.getElementById('sel-button-css')) {
  const s = document.createElement('style'); s.id = 'sel-button-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Button({ variant = 'primary', size = 'md', as = 'button', children, className = '', ...rest }) {
  const Tag = as;
  return (
    <Tag className={`sel-btn sel-btn--${variant} sel-btn--${size} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
