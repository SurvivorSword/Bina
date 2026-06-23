import React from 'react';

const CSS = `
.sel-spark{display:block;overflow:visible;}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-spark-css')) {
  const s = document.createElement('style'); s.id = 'sel-spark-css'; s.textContent = CSS; document.head.appendChild(s);
}

const STROKES = {
  glow: 'var(--glow-400)',
  rise: 'var(--signal-rise)',
  fall: 'var(--signal-fall)',
  plum: 'var(--plum-400)',
  gold: 'var(--gold-400)',
};

let _uid = 0;

export function Sparkline({ data = [], width = 120, height = 36, tone = 'glow', fill = true, dot = true, strokeWidth = 2, className = '', ...rest }) {
  const id = React.useMemo(() => 'spk' + (++_uid), []);
  if (!data.length) return <svg className={`sel-spark ${className}`} width={width} height={height} {...rest} />;
  const min = Math.min(...data), max = Math.max(...data);
  const span = max - min || 1;
  const pad = strokeWidth + 1;
  const stepX = (width - pad * 2) / (data.length - 1 || 1);
  const pts = data.map((v, i) => [pad + i * stepX, pad + (1 - (v - min) / span) * (height - pad * 2)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = `${line} L ${pts[pts.length - 1][0].toFixed(1)} ${height} L ${pts[0][0].toFixed(1)} ${height} Z`;
  const stroke = STROKES[tone] || STROKES.glow;
  const last = pts[pts.length - 1];
  return (
    <svg className={`sel-spark ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" {...rest}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.32" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${id})`} />}
      <path d={line} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 5px ${stroke})` }} />
      {dot && <circle cx={last[0]} cy={last[1]} r={strokeWidth + 1} fill={stroke} style={{ filter: `drop-shadow(0 0 6px ${stroke})` }} />}
    </svg>
  );
}
