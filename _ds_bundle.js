/* @ds-bundle: {"format":3,"namespace":"SeleneDesignSystem_7655ad","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Sparkline","sourcePath":"components/core/Sparkline.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3a92e3b40a5f","components/core/Badge.jsx":"7710193fd2da","components/core/Button.jsx":"2bf03db6e5f7","components/core/Card.jsx":"71d8e9c3a248","components/core/IconButton.jsx":"877657acf66d","components/core/Input.jsx":"7c6dbfe12553","components/core/Sparkline.jsx":"27796fd4ff79","components/core/Switch.jsx":"374827539ad9","components/core/Tabs.jsx":"0a167c47a41d","components/core/Tag.jsx":"e249dc03c35a","components/core/Tooltip.jsx":"7d7af7158a2d","ui_kits/bina-app/TimelineHome.jsx":"0f2613b11b61","ui_kits/bina-app/TopBar.jsx":"fba5b20f2d59","ui_kits/bina-app/TopicDetail.jsx":"c6575d56f082","ui_kits/bina-app/data.js":"3e2b74087831","ui_kits/bina-app/icons.js":"ed7a8acecdfd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeleneDesignSystem_7655ad = window.SeleneDesignSystem_7655ad || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sel-avatar sel-avatar--${size} ${ring ? 'sel-avatar--ring' : ''} ${className}`,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sel-badge{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-mono);font-weight:var(--fw-medium);font-size:var(--text-xs);
  letter-spacing:.06em;text-transform:uppercase;
  padding:.28em .6em;border-radius:var(--radius-full);
  border:1px solid transparent;line-height:1;
}
.sel-badge .sel-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;box-shadow:0 0 8px currentColor;}
.sel-badge--neutral{background:color-mix(in oklch,var(--night-400) 16%,transparent);color:var(--night-200);border-color:var(--border-subtle);}
.sel-badge--rise{background:color-mix(in oklch,var(--signal-rise) 14%,transparent);color:var(--signal-rise);}
.sel-badge--fall{background:color-mix(in oklch,var(--signal-fall) 14%,transparent);color:var(--signal-fall);}
.sel-badge--info{background:color-mix(in oklch,var(--glow-500) 16%,transparent);color:var(--glow-300);}
.sel-badge--gold{background:color-mix(in oklch,var(--gold-400) 16%,transparent);color:var(--gold-300);}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-badge-css')) {
  const s = document.createElement('style');
  s.id = 'sel-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sel-badge sel-badge--${tone} ${className}`
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "sel-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-button-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `sel-btn sel-btn--${variant} sel-btn--${size} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  interactive = false,
  glow = false,
  media,
  padded = true,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sel-card ${interactive ? 'sel-card--interactive' : ''} ${glow ? 'sel-card--glow' : ''} ${className}`
  }, rest), media && /*#__PURE__*/React.createElement("img", {
    className: "sel-card__media",
    src: media,
    alt: ""
  }), padded ? /*#__PURE__*/React.createElement("div", {
    className: "sel-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  size = 'md',
  variant = 'plain',
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: `sel-iconbtn sel-iconbtn--${size} sel-iconbtn--${variant} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  icon,
  hint,
  invalid = false,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'sel-f-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: `sel-field ${className}`,
    htmlFor: fid
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "sel-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: `sel-inputwrap ${invalid ? 'sel-inputwrap--invalid' : ''}`
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "sel-inputwrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "sel-input"
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    className: `sel-field__hint ${invalid ? 'sel-field__hint--err' : ''}`
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sel-spark{display:block;overflow:visible;}
`;
if (typeof document !== 'undefined' && !document.getElementById('sel-spark-css')) {
  const s = document.createElement('style');
  s.id = 'sel-spark-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const STROKES = {
  glow: 'var(--glow-400)',
  rise: 'var(--signal-rise)',
  fall: 'var(--signal-fall)',
  plum: 'var(--plum-400)',
  gold: 'var(--gold-400)'
};
let _uid = 0;
function Sparkline({
  data = [],
  width = 120,
  height = 36,
  tone = 'glow',
  fill = true,
  dot = true,
  strokeWidth = 2,
  className = '',
  ...rest
}) {
  const id = React.useMemo(() => 'spk' + ++_uid, []);
  if (!data.length) return /*#__PURE__*/React.createElement("svg", _extends({
    className: `sel-spark ${className}`,
    width: width,
    height: height
  }, rest));
  const min = Math.min(...data),
    max = Math.max(...data);
  const span = max - min || 1;
  const pad = strokeWidth + 1;
  const stepX = (width - pad * 2) / (data.length - 1 || 1);
  const pts = data.map((v, i) => [pad + i * stepX, pad + (1 - (v - min) / span) * (height - pad * 2)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = `${line} L ${pts[pts.length - 1][0].toFixed(1)} ${height} L ${pts[0][0].toFixed(1)} ${height} Z`;
  const stroke = STROKES[tone] || STROKES.glow;
  const last = pts[pts.length - 1];
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: `sel-spark ${className}`,
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    fill: "none"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: stroke,
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: stroke,
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${id})`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: `drop-shadow(0 0 5px ${stroke})`
    }
  }), dot && /*#__PURE__*/React.createElement("circle", {
    cx: last[0],
    cy: last[1],
    r: strokeWidth + 1,
    fill: stroke,
    style: {
      filter: `drop-shadow(0 0 6px ${stroke})`
    }
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `sel-switch ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sel-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sel-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "sel-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  const active = value ?? (items[0] && items[0].value);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: `sel-tabs ${className}`
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    "aria-selected": it.value === active,
    className: `sel-tab ${it.value === active ? 'sel-tab--active' : ''}`,
    onClick: () => onChange && onChange(it.value)
  }, it.icon, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  active = false,
  hash = false,
  onRemove,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sel-tag ${clickable ? 'sel-tag--clickable' : ''} ${active ? 'sel-tag--active' : ''} ${className}`,
    onClick: onClick
  }, rest), hash && /*#__PURE__*/React.createElement("span", {
    className: "sel-tag__hash"
  }, "#"), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sel-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'sel-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sel-tip ${className}`
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "sel-tip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bina-app/TimelineHome.jsx
try { (() => {
/* Bina app — Explore / living timeline (home) */
function TimelineHome({
  onOpen
}) {
  const {
    Card,
    Badge,
    Tag,
    Tabs,
    Sparkline,
    Button
  } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const D = window.BINA_DATA;
  const [range, setRange] = React.useState('all');
  const [showFall, setShowFall] = React.useState(true);
  const topics = D.topics.filter(t => showFall || t.momentum !== 'fall').slice().sort((a, b) => b.year - a.year);

  // group by year
  const byYear = {};
  topics.forEach(t => {
    (byYear[t.year] = byYear[t.year] || []).push(t);
  });
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/moonlit-hero.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '70% 28%',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,var(--night-950) 28%, color-mix(in oklch,var(--night-950) 30%,transparent) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-6) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--glow-300)'
    }
  }, "The living timeline of artificial intelligence"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-7xl)',
      fontWeight: 500,
      letterSpacing: '-.02em',
      margin: '12px 0 0',
      maxWidth: 760,
      textShadow: 'var(--glow-text)'
    }
  }, "Every idea the field", /*#__PURE__*/React.createElement("br", null), "obsessed over, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--glow-300)'
    }
  }, "in order.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--night-200)',
      maxWidth: 540,
      marginTop: 18
    }
  }, "Bina tracks the rise and fall of every conversation in AI \u2014 indexed weekly across papers, posts, and releases since 2017."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, [['1,240', 'topics tracked'], ['8.4M', 'signals indexed'], ['2017', 'earliest record']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-display)',
      fontWeight: 500
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-6) 0',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      marginRight: 'auto'
    }
  }, "Topic timeline"), /*#__PURE__*/React.createElement(Tabs, {
    value: range,
    onChange: setRange,
    items: [{
      value: 'all',
      label: 'All time'
    }, {
      value: '5y',
      label: '5 years'
    }, {
      value: '1y',
      label: 'This year'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setShowFall(s => !s)
  }, /*#__PURE__*/React.createElement(Ic.Sliders, null), showFall ? 'Hide declining' : 'Show all')), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-6) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 42
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      top: 8,
      bottom: 8,
      width: 2,
      background: 'linear-gradient(180deg,var(--glow-500),var(--cobalt-500) 60%, transparent)'
    }
  }), years.map(yr => /*#__PURE__*/React.createElement("div", {
    key: yr,
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -42,
      top: -2,
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--night-850)',
      border: '2px solid var(--glow-500)',
      boxShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--glow-400)',
      boxShadow: '0 0 8px var(--glow-400)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-display)',
      fontWeight: 500,
      letterSpacing: '.02em'
    }
  }, yr), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginLeft: 10
    }
  }, byYear[yr].length, " ", byYear[yr].length > 1 ? 'topics broke out' : 'topic broke out')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, byYear[yr].map(t => /*#__PURE__*/React.createElement(TopicRow, {
    key: t.id,
    t: t,
    onOpen: onOpen
  }))))))));
}
function TopicRow({
  t,
  onOpen
}) {
  const {
    Card,
    Badge,
    Tag,
    Sparkline
  } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const up = t.momentum === 'rise';
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    glow: t.tier === 'gold',
    onClick: () => onOpen(t.id),
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, t.name), /*#__PURE__*/React.createElement(Badge, {
    tone: up ? 'rise' : 'fall',
    dot: true
  }, up ? 'Rising' : 'Cooling', " ", t.delta), t.tier === 'gold' && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, (() => {
    return "Topic of the year";
  })())), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      marginTop: 8,
      maxWidth: 560
    }
  }, t.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, t.related.slice(0, 3).map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    hash: true
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: t.series,
    tone: up ? 'rise' : 'fall',
    width: 160,
    height: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement(Ic.Clock, {
    style: {
      verticalAlign: '-2px',
      marginRight: 4
    }
  }), "PEAK ", t.peak.toUpperCase(), " \xB7 ", t.mentions))));
}
window.TimelineHome = TimelineHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bina-app/TimelineHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bina-app/TopBar.jsx
try { (() => {
/* Bina app — top navigation bar */
function TopBar({
  onHome
}) {
  const {
    IconButton,
    Avatar,
    Input
  } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '14px var(--space-6)',
      borderBottom: '1px solid var(--border-strong)',
      background: 'color-mix(in oklch, var(--night-950) 72%, transparent)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bina-mark.svg",
    alt: "",
    style: {
      width: 32,
      height: 32,
      filter: 'drop-shadow(0 0 12px color-mix(in oklch,var(--glow-400) 55%,transparent))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-display)',
      letterSpacing: '-.01em'
    }
  }, "Bina")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, ['Explore', 'Trending', 'Atlas'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: 'var(--type-label)',
      color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
      padding: '.4rem .7rem',
      borderRadius: 'var(--radius-sm)',
      background: i === 0 ? 'var(--surface-hover)' : 'transparent',
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 380,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(Ic.Search, null),
    placeholder: "Search 1,240 topics\u2026"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    label: "Alerts"
  }, /*#__PURE__*/React.createElement(Ic.Bell, null)), /*#__PURE__*/React.createElement(Avatar, {
    name: "Mei Tanaka",
    ring: true
  }));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bina-app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bina-app/TopicDetail.jsx
try { (() => {
/* Bina app — single topic detail */
function TopicDetail({
  topicId,
  onOpen,
  onBack
}) {
  const {
    Card,
    Badge,
    Tag,
    Button,
    Sparkline,
    IconButton,
    Tooltip
  } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const D = window.BINA_DATA;
  const t = D.topics.find(x => x.id === topicId) || D.topics[0];
  const up = t.momentum === 'rise';
  const milestones = D.milestones[t.id] || [{
    date: t.peak,
    label: 'Reached peak attention across the index'
  }, {
    date: '—',
    label: 'First appeared in the Bina corpus'
  }];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-6) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Ic.ArrowLeft, null), "Back to timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--glow-300)'
    }
  }, "Broke out in ", t.year, " \xB7 peak ", t.peak), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-6xl)',
      fontWeight: 500,
      letterSpacing: '-.02em',
      margin: '8px 0 12px'
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--night-200)',
      maxWidth: 620
    }
  }, t.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: up ? 'rise' : 'fall',
    dot: true
  }, up ? 'Rising' : 'Cooling', " ", t.delta), t.tier === 'gold' && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Topic of the year"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Ic.Bell, null), "Track this topic"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    label: "Share"
  }, /*#__PURE__*/React.createElement(Ic.Link, null))))), /*#__PURE__*/React.createElement(Card, {
    glow: true,
    style: {
      marginTop: 'var(--space-6)'
    },
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-primary)'
    }
  }, "Momentum, 2017 \u2192 now"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: up ? 'var(--signal-rise)' : 'var(--signal-fall)'
    }
  }, up ? '▲' : '▼', " ", t.delta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "vs. prior quarter"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: t.series,
    tone: up ? 'rise' : 'fall',
    width: 1100,
    height: 150,
    strokeWidth: 2.5,
    style: {
      width: '100%',
      height: 150
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, [['Total signals', t.mentions], ['Peak month', t.peak], ['First seen', String(t.year)], ['Momentum', t.delta]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid var(--border-strong)',
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-display)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Key moments"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 26,
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 5,
      top: 6,
      bottom: 6,
      width: 2,
      background: 'linear-gradient(180deg,var(--glow-500),transparent)'
    }
  }), milestones.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -26,
      top: 3,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--glow-400)',
      boxShadow: '0 0 8px var(--glow-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--glow-300)',
      letterSpacing: '.06em'
    }
  }, m.date), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)',
      marginTop: 3
    }
  }, m.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Related topics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, t.related.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    hash: true,
    onClick: () => {}
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Also breaking out"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, D.topics.filter(x => x.id !== t.id).slice(0, 3).map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.id,
    interactive: true,
    onClick: () => onOpen(n.id)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, n.name), /*#__PURE__*/React.createElement(Badge, {
    tone: n.momentum === 'rise' ? 'rise' : 'fall'
  }, n.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: n.series,
    tone: n.momentum === 'rise' ? 'rise' : 'fall',
    width: 240,
    height: 40,
    style: {
      width: '100%'
    }
  })))))));
}
window.TopicDetail = TopicDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bina-app/TopicDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bina-app/data.js
try { (() => {
/* Bina — fake but plausible dataset for the UI kit. Loaded as window.BINA_DATA. */
window.BINA_DATA = {
  topics: [{
    id: 'agents',
    name: 'Autonomous agents',
    year: 2025,
    momentum: 'rise',
    delta: '+312%',
    series: [4, 5, 6, 9, 12, 11, 18, 26, 34, 41, 52],
    peak: 'Apr 2025',
    mentions: '48.2k',
    tier: 'gold',
    blurb: 'Tool-using, long-horizon systems that plan and act. The defining conversation of 2025.',
    related: ['tool use', 'planning', 'memory', 'RLHF']
  }, {
    id: 'reasoning',
    name: 'Reasoning models',
    year: 2024,
    momentum: 'rise',
    delta: '+248%',
    series: [2, 3, 3, 5, 8, 9, 14, 19, 28, 33, 38],
    peak: 'Dec 2024',
    mentions: '39.7k',
    tier: '',
    blurb: 'Inference-time compute and chain-of-thought scaling reshaped what "bigger" means.',
    related: ['chain-of-thought', 'test-time compute', 'search']
  }, {
    id: 'diffusion',
    name: 'Diffusion models',
    year: 2022,
    momentum: 'fall',
    delta: '−18%',
    series: [6, 12, 22, 30, 28, 24, 20, 17, 15, 13, 12],
    peak: 'Aug 2023',
    mentions: '61.0k',
    tier: '',
    blurb: 'Image and video generation went mainstream, then settled into steady infrastructure.',
    related: ['latent space', 'samplers', 'ControlNet']
  }, {
    id: 'rag',
    name: 'Retrieval-augmented generation',
    year: 2023,
    momentum: 'fall',
    delta: '−9%',
    series: [3, 8, 16, 24, 27, 25, 23, 22, 20, 19, 18],
    peak: 'Oct 2023',
    mentions: '34.5k',
    tier: '',
    blurb: 'Grounding models in external knowledge — now a default pattern more than a frontier.',
    related: ['embeddings', 'vector search', 'context windows']
  }, {
    id: 'moe',
    name: 'Mixture of experts',
    year: 2024,
    momentum: 'rise',
    delta: '+86%',
    series: [1, 2, 2, 4, 5, 7, 9, 11, 13, 15, 18],
    peak: 'Mar 2025',
    mentions: '21.3k',
    tier: '',
    blurb: 'Sparse activation made trillion-parameter models tractable to serve.',
    related: ['routing', 'sparsity', 'scaling laws']
  }, {
    id: 'alignment',
    name: 'Alignment & safety',
    year: 2023,
    momentum: 'rise',
    delta: '+54%',
    series: [5, 6, 8, 9, 12, 13, 15, 16, 19, 21, 24],
    peak: 'Feb 2025',
    mentions: '42.8k',
    tier: '',
    blurb: 'From RLHF to interpretability — the field grew a conscience and a research agenda.',
    related: ['interpretability', 'RLHF', 'red-teaming', 'evals']
  }, {
    id: 'multimodal',
    name: 'Multimodal models',
    year: 2023,
    momentum: 'rise',
    delta: '+131%',
    series: [2, 4, 6, 8, 11, 14, 18, 22, 27, 30, 35],
    peak: 'May 2025',
    mentions: '37.1k',
    tier: '',
    blurb: 'Text, image, audio and video collapsing into single unified models.',
    related: ['vision', 'speech', 'any-to-any']
  }, {
    id: 'transformers',
    name: 'Transformers',
    year: 2017,
    momentum: 'fall',
    delta: '−4%',
    series: [1, 9, 20, 35, 48, 52, 49, 45, 42, 40, 38],
    peak: 'Jun 2021',
    mentions: '92.6k',
    tier: '',
    blurb: 'The architecture that started it all — now the assumed substrate beneath everything.',
    related: ['attention', 'positional encoding', 'scaling']
  }],
  milestones: {
    agents: [{
      date: '2023-03',
      label: 'First ReAct-style tool loops go viral'
    }, {
      date: '2024-06',
      label: 'Long-horizon benchmarks emerge'
    }, {
      date: '2025-04',
      label: 'Agent platforms hit mainstream adoption'
    }],
    reasoning: [{
      date: '2024-09',
      label: 'Inference-time scaling demonstrated'
    }, {
      date: '2024-12',
      label: 'Reasoning becomes a product category'
    }]
  },
  years: [2017, 2020, 2022, 2023, 2024, 2025]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bina-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/bina-app/icons.js
try { (() => {
/* Bina — inline icon set (lucide-style: 24px grid, 2px round strokes).
   Exposed on window so all babel scripts can use them. */
(function () {
  const I = (paths, extra = {}) => (p = {}) => React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    width: '1em',
    height: '1em',
    ...extra,
    ...p
  }, paths.map((d, i) => React.createElement('path', {
    key: i,
    d
  })));
  const Circle = (cx, cy, r) => React.createElement('circle', {
    key: 'c' + cx + cy,
    cx,
    cy,
    r
  });
  window.BinaIcons = {
    Search: (p = {}) => React.createElement('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      width: '1em',
      height: '1em',
      ...p
    }, [Circle(11, 11, 7), React.createElement('path', {
      key: 'l',
      d: 'M21 21l-4.3-4.3'
    })]),
    Bell: I(['M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.7 21a2 2 0 0 1-3.4 0']),
    Star: I(['M12 3l2.7 5.8 6.3.8-4.7 4.3 1.3 6.3L12 17.8 6.1 20.5l1.3-6.3L2.7 9.6l6.3-.8z']),
    ArrowUp: I(['M12 19V5', 'M5 12l7-7 7 7']),
    ArrowDown: I(['M12 5v14', 'M19 12l-7 7-7-7']),
    ArrowLeft: I(['M19 12H5', 'M12 19l-7-7 7-7']),
    TrendUp: I(['M3 17l6-6 4 4 8-8', 'M17 7h4v4']),
    Clock: (p = {}) => React.createElement('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      width: '1em',
      height: '1em',
      ...p
    }, [Circle(12, 12, 9), React.createElement('path', {
      key: 'h',
      d: 'M12 7v5l3 2'
    })]),
    Sliders: I(['M4 6h11', 'M19 6h1', 'M9 12h11', 'M4 12h1', 'M14 18h6', 'M4 18h6'].map(d => d)),
    Layers: I(['M12 3l9 5-9 5-9-5 9-5z', 'M3 13l9 5 9-5', 'M3 8l9 5 9-5']),
    Compass: (p = {}) => React.createElement('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      width: '1em',
      height: '1em',
      ...p
    }, [Circle(12, 12, 9), React.createElement('path', {
      key: 'n',
      d: 'M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z'
    })]),
    Sparkle: I(['M12 3v4', 'M12 17v4', 'M3 12h4', 'M17 12h4', 'M7 7l2 2', 'M15 15l2 2', 'M17 7l-2 2', 'M9 15l-2 2']),
    Link: I(['M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1', 'M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1']),
    External: I(['M15 3h6v6', 'M10 14L21 3', 'M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5'])
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bina-app/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
