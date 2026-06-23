import React from 'react';

const CSS = `
.sel-card{
  background:var(--surface-card);border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-md),var(--rim-light);
  overflow:hidden;transition:transform var(--dur-med) var(--ease-out),box-shadow var(--dur-med) var(--ease-out),border-color var(--dur-med) var(--ease-out);
}
.sel-card--interactive{cursor:pointer;}
.sel-card--interactive:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg),var(--rim-light);border-color:var(--border-glow);}
.sel-card--glow{box-shadow:var(--shadow-md),var(--glow-sm);border-color:var(--border-glow);}
.sel-card__media{width:100%;display:block;aspect-ratio:16/9;object-fit:cover;}
.sel-card__body{padding:var(--space-5);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-card-css')) {
  const s = document.createElement('style'); s.id = 'sel-card-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Card({ interactive = false, glow = false, media, padded = true, children, className = '', ...rest }) {
  return (
    <div className={`sel-card ${interactive ? 'sel-card--interactive' : ''} ${glow ? 'sel-card--glow' : ''} ${className}`} {...rest}>
      {media && <img className="sel-card__media" src={media} alt="" />}
      {padded ? <div className="sel-card__body">{children}</div> : children}
    </div>
  );
}
