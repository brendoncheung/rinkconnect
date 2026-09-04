/* @ds-bundle: {"format":4,"namespace":"RinkConnectDesignSystem_17ea5d","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"TraceDivider","sourcePath":"components/brand/TraceDivider.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"c47ffb42996e","components/brand/TraceDivider.jsx":"e1122b23566e","components/display/Avatar.jsx":"96fb735c32a1","components/display/Badge.jsx":"5e8ee2d3a97b","components/display/Card.jsx":"085cf22d7260","components/display/Tag.jsx":"2a6c8b8e0f0f","components/feedback/Dialog.jsx":"d38377a9f05d","components/feedback/Toast.jsx":"3e01f7d56d7f","components/feedback/Tooltip.jsx":"d21554d499ba","components/forms/Button.jsx":"9f14b6688ff4","components/forms/Checkbox.jsx":"26963aa24313","components/forms/IconButton.jsx":"02127a45851f","components/forms/Input.jsx":"3d2568c0a80f","components/forms/Radio.jsx":"81df74bf1e46","components/forms/Select.jsx":"44b59ad003dd","components/forms/Switch.jsx":"5cb3bcfc1787","components/navigation/Tabs.jsx":"620d2af59223","ui_kits/app/AppShell.jsx":"eb635adde322","ui_kits/app/AppShell.sa.jsx":"c755c712dc83","ui_kits/app/EventScreen.jsx":"bb3b7eb44eda","ui_kits/app/EventScreen.sa.jsx":"8df3b04a2397","ui_kits/app/HomeScreen.jsx":"2302ba56109a","ui_kits/app/HomeScreen.sa.jsx":"350f027df2a0","ui_kits/app/HoursScreen.jsx":"861a8e540abc","ui_kits/app/icon-seed.js":"d5c0f5d2adb7","ui_kits/website/HoursData.jsx":"588a315c0537","ui_kits/website/Sections.jsx":"ace01cc5fafa","ui_kits/website/Web01_LoginSignup.jsx":"053914c6adec","ui_kits/website/Web02_ClaimClub.jsx":"a00fb7f740bd","ui_kits/website/Web03_AcceptInvite.jsx":"9dcb43b4cca7","ui_kits/website/Web04_Dashboard.jsx":"f7c5d8dbaf7e","ui_kits/website/Web05_ManageInvites.jsx":"b873e1de1a0b","ui_kits/website/Web06_CreateEvent.jsx":"e749810a541a","ui_kits/website/Web07_ClubFeed.jsx":"7894d2598562","ui_kits/website/Web08_HoursReview.jsx":"2840c92173fc","ui_kits/website/Web09_LogHours.jsx":"dd69eabfa17a","ui_kits/website/Web10_MyHours.jsx":"4723e4996721","ui_kits/website/Web11_ClubHours.jsx":"153582ef5f0b","ui_kits/website/WebShell.jsx":"f2956672c366","ui_kits/website/image-slot.js":"d797f41b7d66","ui_kits/website/tweaks-panel.jsx":"4f181eb354cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RinkConnectDesignSystem_17ea5d = window.RinkConnectDesignSystem_17ea5d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fetch each Lucide SVG once, cache the promise, and inline it so `color`
   (currentColor on Lucide strokes) tints it. Avoids cross-origin CSS-mask limits. */
const RC_ICON_CACHE = typeof window !== 'undefined' && (window.__rcIconCache || (window.__rcIconCache = {})) || {};
function loadIcon(name) {
  if (!RC_ICON_CACHE[name]) {
    RC_ICON_CACHE[name] = fetch(`https://unpkg.com/lucide-static@0.469.0/icons/${name}.svg`).then(r => r.ok ? r.text() : '').then(t => t.replace(/width="24"/, '').replace(/height="24"/, '')).catch(() => '');
  }
  return RC_ICON_CACHE[name];
}

/**
 * RinkConnect Icon â€” inlined Lucide (rounded, friendly stroke set).
 * Tints to any brand token via `color`/currentColor.
 */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('rc-icon-style')) {
      const st = document.createElement('style');
      st.id = 'rc-icon-style';
      st.textContent = '[data-rc-icon] svg{width:100%;height:100%;display:block}';
      document.head.appendChild(st);
    }
    let live = true;
    loadIcon(name).then(t => {
      if (live) setSvg(t);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    "data-rc-icon": "",
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      lineHeight: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/TraceDivider.jsx
try { (() => {
/**
 * RinkConnect TraceDivider â€” the signature "one continuous blade line" motif.
 * A thin single-stroke path ending in a loop, used as a section divider or list accent.
 */
function TraceDivider({
  color = 'var(--edge-blue)',
  width = '100%',
  height = 40,
  opacity = 0.9,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 60",
    width: width,
    height: height,
    fill: "none",
    preserveAspectRatio: "xMidYMid meet",
    role: "presentation",
    style: {
      color,
      opacity,
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 30 C 90 12, 150 12, 232 30 C 300 44, 340 44, 392 30 C 428 20, 452 22, 452 34 C 452 46, 434 48, 428 38 C 424 31, 430 24, 440 24 C 456 24, 468 30, 476 30",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { TraceDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TraceDivider.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 44,
  lg: 60
};

/**
 * RinkConnect avatar â€” photo or initials, soft-round. Cool palette by default.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style,
  ...rest
}) {
  const d = typeof size === 'number' ? size : sizes[size] || sizes.md;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: '50%',
      flex: '0 0 auto',
      overflow: 'hidden',
      background: 'var(--glacier-300)',
      color: 'var(--evening-600)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d * 0.4,
      boxShadow: ring ? '0 0 0 2px var(--fresh-ice), 0 0 0 4px var(--edge-blue)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--glacier-200)',
    color: 'var(--evening-600)'
  },
  brand: {
    background: 'var(--info-bg)',
    color: 'var(--edge-blue-700)'
  },
  warm: {
    background: 'var(--gold-100)',
    color: 'var(--gold-700)'
  },
  success: {
    background: 'var(--success-bg)',
    color: 'var(--success)'
  },
  danger: {
    background: 'var(--danger-bg)',
    color: 'var(--danger)'
  }
};

/**
 * RinkConnect badge â€” compact status pill. `warm` is the gold participation cue.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect card â€” the workhorse surface. White, soft-rounded, gentle shadow.
 * `tone="brand"` flips it to an Ice Blue panel with white type.
 */
function Card({
  children,
  tone = 'default',
  padding = 'var(--space-6)',
  interactive = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    brand: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  const t = tones[tone] || tones.default;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect tag/chip â€” filter or category token, optionally removable.
 */
function Tag({
  children,
  icon,
  onRemove,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: rest.onClick ? 'pointer' : 'default',
      background: active ? 'var(--action-primary)' : 'var(--fresh-ice)',
      color: active ? 'var(--fresh-ice)' : 'var(--evening-600)',
      border: `1px solid ${active ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    color: "currentColor"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    icon: 'info',
    color: 'var(--edge-blue)',
    bg: 'var(--fresh-ice)'
  },
  success: {
    icon: 'check-circle-2',
    color: 'var(--success)',
    bg: 'var(--fresh-ice)'
  },
  warm: {
    icon: 'sparkles',
    color: 'var(--gold-700)',
    bg: 'var(--fresh-ice)'
  },
  danger: {
    icon: 'alert-circle',
    color: 'var(--danger)',
    bg: 'var(--fresh-ice)'
  }
};

/**
 * RinkConnect toast â€” a single confirmation card. The voice: "tell you what happens next."
 */
function Toast({
  tone = 'success',
  title,
  message,
  onDismiss,
  style
}) {
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minWidth: 280,
      maxWidth: 420,
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      borderLeft: `4px solid ${t.color}`,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: '0.9375rem'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
      marginTop: 2,
      lineHeight: 1.45
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: 'pointer',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * RinkConnect tooltip â€” hover/focus label on Evening Rink.
 */
function Tooltip({
  label,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(-8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(8px)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      zIndex: 100,
      background: 'var(--evening-rink)',
      color: 'var(--fresh-ice)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: {
    padding: '8px 16px',
    fontSize: '0.875rem',
    height: 36
  },
  md: {
    padding: '11px 22px',
    fontSize: '1rem',
    height: 44
  },
  lg: {
    padding: '14px 30px',
    fontSize: '1.0625rem',
    height: 52
  }
};
const variantStyle = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--fresh-ice)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  },
  secondary: {
    background: 'var(--fresh-ice)',
    color: 'var(--edge-blue)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--edge-blue)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  warm: {
    background: 'var(--rink-light)',
    color: '#5a3d10',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  },
  onBrand: {
    background: 'var(--fresh-ice)',
    color: 'var(--edge-blue)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  }
};

/**
 * RinkConnect primary action button. Rounded, warm, soft-shadowed.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled = false,
  as = 'button',
  href,
  style,
  ...rest
}) {
  const s = sizeMap[size] || sizeMap.md;
  const v = variantStyle[variant] || variantStyle.primary;
  const Tag = as === 'a' || href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: s.padding,
      fontSize: s.fontSize,
      minHeight: s.height,
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect checkbox â€” rounded square, Edge Blue when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const cbId = id || `rc-cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        checked: !on
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--action-primary)' : 'var(--fresh-ice)',
      border: `1px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: "var(--fresh-ice)"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};

/**
 * RinkConnect icon-only button â€” circular, for toolbars & compact actions.
 */
function IconButton({
  icon,
  name,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--evening-600)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--action-primary)',
      color: 'var(--fresh-ice)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--fresh-ice)',
      color: 'var(--edge-blue)',
      border: '1px solid var(--border-strong)'
    },
    warm: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || name,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * RinkConnect modal dialog â€” centered white panel, soft overlay, gentle scale-in.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 460,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(22, 50, 79, 0.38)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)',
      animation: 'rc-fade 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--fresh-ice)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      animation: 'rc-pop 240ms var(--ease-glide)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rc-fade{from{opacity:0}to{opacity:1}}@keyframes rc-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.375rem',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      fontSize: '1rem',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect text input with label, helper/error text, and optional leading icon.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || `rc-input-${Math.random().toString(36).slice(2, 8)}`;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--edge-blue)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      background: 'var(--fresh-ice)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: iconLeft ? '11px 14px 11px 42px' : '11px 14px',
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: error ? 'var(--danger)' : 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect radio button (single control). Compose several with the same `name`.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  name,
  value,
  id,
  style,
  ...rest
}) {
  const rId = id || `rc-radio-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const select = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: select,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--fresh-ice)',
      border: `1px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--action-primary)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-base) var(--ease-glide)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect select dropdown â€” matches Input styling, with a chevron.
 */
function Select({
  label,
  hint,
  error,
  id,
  children,
  style,
  containerStyle,
  ...rest
}) {
  const selId = id || `rc-select-${Math.random().toString(36).slice(2, 8)}`;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--edge-blue)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      background: 'var(--fresh-ice)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 42px 11px 14px',
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: error ? 'var(--danger)' : 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RinkConnect toggle switch â€” pill track, Edge Blue when on.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const swId = id || `rc-sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        checked: !on
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 27,
      borderRadius: 'var(--radius-pill)',
      flex: '0 0 auto',
      position: 'relative',
      background: on ? 'var(--action-primary)' : 'var(--glacier-400)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 22 : 3,
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: 'var(--fresh-ice)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-glide)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * RinkConnect tabs â€” segmented pill nav. The active tab carries a loop-underline feel
 * via a soft Edge Blue fill (pill) or an underline (line) variant.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  if (variant === 'line') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-6)',
        borderBottom: '1px solid var(--border-subtle)',
        ...style
      }
    }, items.map(it => {
      const on = it.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        onClick: () => select(it.value),
        style: {
          position: 'relative',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '1rem',
          color: on ? 'var(--edge-blue)' : 'var(--text-muted)',
          padding: '10px 2px 14px',
          transition: 'color var(--dur-base) var(--ease-out)'
        }
      }, it.label, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          height: 3,
          borderRadius: 3,
          background: on ? 'var(--edge-blue)' : 'transparent',
          transition: 'background var(--dur-base) var(--ease-out)'
        }
      }));
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--glacier-200)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => select(it.value),
      style: {
        flex: 1,
        whiteSpace: 'nowrap',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '0.9375rem',
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--fresh-ice)' : 'transparent',
        color: on ? 'var(--edge-blue)' : 'var(--text-muted)',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
// RinkConnect community app â€” phone shell: header, screen area, bottom tab bar, toast host
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function TopBar({
    title,
    showLogo
  }) {
    const {
      IconButton,
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px 8px',
        background: 'var(--glacier)'
      }
    }, showLogo ? /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "RinkConnect",
      style: {
        height: 34,
        borderRadius: 10
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--evening-rink)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "bell",
      label: "Notifications",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: "Dana Ruiz",
      size: 34
    })));
  }
  function BottomNav({
    active,
    onChange
  }) {
    const {
      Icon
    } = RC;
    const tabs = [{
      id: 'home',
      icon: 'house',
      label: 'Home'
    }, {
      id: 'events',
      icon: 'calendar-days',
      label: 'Events'
    }, {
      id: 'hours',
      icon: 'heart-handshake',
      label: 'Hours'
    }, {
      id: 'safe',
      icon: 'shield-check',
      label: 'Safe Sport'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--fresh-ice)',
        padding: '8px 6px 10px'
      }
    }, tabs.map(t => {
      const on = active === t.id;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => onChange(t.id),
        style: {
          flex: 1,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: '4px 0',
          color: on ? 'var(--edge-blue)' : 'var(--evening-300)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: t.icon,
        size: 22,
        color: on ? 'var(--edge-blue)' : 'var(--evening-300)'
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: on ? 700 : 500,
          fontFamily: 'var(--font-body)'
        }
      }, t.label));
    }));
  }
  function PhoneFrame({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 800,
        background: 'var(--glacier)',
        borderRadius: 44,
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        border: '10px solid #0d1f31'
      }
    }, children);
  }
  function ToastHost({
    toast
  }) {
    if (!toast) return null;
    const {
      Toast
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        right: 14,
        bottom: 84,
        zIndex: 50,
        animation: 'rc-toast-in 320ms cubic-bezier(0.16,1,0.3,1)'
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes rc-toast-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement(Toast, {
      tone: toast.tone,
      title: toast.title,
      message: toast.message
    }));
  }
  window.AppShell = {
    TopBar,
    BottomNav,
    PhoneFrame,
    ToastHost
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.sa.jsx
try { (() => {
// RinkConnect community app â€” phone shell: header, screen area, bottom tab bar, toast host
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function TopBar({
    title,
    showLogo
  }) {
    const {
      IconButton,
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px 8px',
        background: 'var(--glacier)'
      }
    }, showLogo ? /*#__PURE__*/React.createElement("img", {
      src: window.__resources.logoMark,
      alt: "RinkConnect",
      style: {
        height: 34,
        borderRadius: 10
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--evening-rink)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "bell",
      label: "Notifications",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: "Dana Ruiz",
      size: 34
    })));
  }
  function BottomNav({
    active,
    onChange
  }) {
    const {
      Icon
    } = RC;
    const tabs = [{
      id: 'home',
      icon: 'house',
      label: 'Home'
    }, {
      id: 'events',
      icon: 'calendar-days',
      label: 'Events'
    }, {
      id: 'hours',
      icon: 'heart-handshake',
      label: 'Hours'
    }, {
      id: 'safe',
      icon: 'shield-check',
      label: 'Safe Sport'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--fresh-ice)',
        padding: '8px 6px 10px'
      }
    }, tabs.map(t => {
      const on = active === t.id;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => onChange(t.id),
        style: {
          flex: 1,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: '4px 0',
          color: on ? 'var(--edge-blue)' : 'var(--evening-300)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: t.icon,
        size: 22,
        color: on ? 'var(--edge-blue)' : 'var(--evening-300)'
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: on ? 700 : 500,
          fontFamily: 'var(--font-body)'
        }
      }, t.label));
    }));
  }
  function PhoneFrame({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 800,
        background: 'var(--glacier)',
        borderRadius: 44,
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        border: '10px solid #0d1f31'
      }
    }, children);
  }
  function ToastHost({
    toast
  }) {
    if (!toast) return null;
    const {
      Toast
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        right: 14,
        bottom: 84,
        zIndex: 50,
        animation: 'rc-toast-in 320ms cubic-bezier(0.16,1,0.3,1)'
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes rc-toast-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement(Toast, {
      tone: toast.tone,
      title: toast.title,
      message: toast.message
    }));
  }
  window.AppShell = {
    TopBar,
    BottomNav,
    PhoneFrame,
    ToastHost
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EventScreen.jsx
try { (() => {
// RinkConnect community app â€” Event detail screen with RSVP + volunteer slots
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function EventScreen({
    ev,
    onBack,
    onRsvp,
    rsvped,
    onSignUpSlot,
    filledSlot
  }) {
    const {
      Button,
      Badge,
      Card,
      Icon,
      IconButton,
      TraceDivider
    } = RC;
    const Detail = ({
      icon,
      label,
      value
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 12,
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      color: "var(--edge-blue)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--evening-rink)'
      }
    }, value)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 176,
        background: ev.tint,
        display: 'flex',
        alignItems: 'flex-end',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -10,
        top: -20,
        width: 150,
        opacity: 0.32
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "arrow-left",
      label: "Back",
      variant: "outline",
      onClick: onBack,
      style: {
        background: 'rgba(255,255,255,0.9)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        color: '#fff'
      }
    }, ev.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: "warm",
      style: {
        marginBottom: 8
      }
    }, ev.badge), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26
      }
    }, ev.title))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(Detail, {
      icon: "calendar-days",
      label: "When",
      value: ev.whenLong
    }), /*#__PURE__*/React.createElement(Detail, {
      icon: "map-pin",
      label: "Where",
      value: ev.rink + ' Â· Lakeside Arena'
    }), /*#__PURE__*/React.createElement(Detail, {
      icon: "users",
      label: "Who",
      value: ev.who
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-body)',
        fontSize: 15,
        lineHeight: 1.6,
        margin: '10px 0 4px'
      }
    }, ev.desc), /*#__PURE__*/React.createElement(TraceDivider, {
      color: "var(--glacier-400)",
      height: 30,
      style: {
        margin: '8px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: '6px 0 10px'
      }
    }, "Volunteer slots"), /*#__PURE__*/React.createElement(Card, {
      padding: "14px",
      style: {
        marginBottom: 20
      }
    }, ['Door check-in Â· 8:30â€“9:30', 'Snack table Â· 9:30â€“10:30'].map((slot, i) => {
      const taken = filledSlot === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 0',
          borderBottom: i === 0 ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: 'var(--evening-rink)'
        }
      }, slot.split(' Â· ')[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, slot.split(' Â· ')[1], " \xB7 1 hr")), taken ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: true
      }, "Signed up") : /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "warm",
        onClick: () => onSignUpSlot(i)
      }, "Take slot"));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        bottom: 0,
        padding: '12px 20px 16px',
        background: 'linear-gradient(to top, var(--glacier) 70%, transparent)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: rsvped ? 'secondary' : 'primary',
      onClick: onRsvp,
      iconLeft: rsvped ? /*#__PURE__*/React.createElement(RC.Icon, {
        name: "check",
        size: 18,
        color: "var(--edge-blue)"
      }) : null
    }, rsvped ? "You're going" : 'RSVP â€” grab a spot')));
  }
  window.EventScreen = EventScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EventScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EventScreen.sa.jsx
try { (() => {
// RinkConnect community app â€” Event detail screen with RSVP + volunteer slots
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function EventScreen({
    ev,
    onBack,
    onRsvp,
    rsvped,
    onSignUpSlot,
    filledSlot
  }) {
    const {
      Button,
      Badge,
      Card,
      Icon,
      IconButton,
      TraceDivider
    } = RC;
    const Detail = ({
      icon,
      label,
      value
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 12,
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      color: "var(--edge-blue)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--evening-rink)'
      }
    }, value)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 176,
        background: ev.tint,
        display: 'flex',
        alignItems: 'flex-end',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources.traceMark,
      alt: "",
      style: {
        position: 'absolute',
        right: -10,
        top: -20,
        width: 150,
        opacity: 0.32
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "arrow-left",
      label: "Back",
      variant: "outline",
      onClick: onBack,
      style: {
        background: 'rgba(255,255,255,0.9)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        color: '#fff'
      }
    }, ev.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: "warm",
      style: {
        marginBottom: 8
      }
    }, ev.badge), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26
      }
    }, ev.title))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(Detail, {
      icon: "calendar-days",
      label: "When",
      value: ev.whenLong
    }), /*#__PURE__*/React.createElement(Detail, {
      icon: "map-pin",
      label: "Where",
      value: ev.rink + ' Â· Lakeside Arena'
    }), /*#__PURE__*/React.createElement(Detail, {
      icon: "users",
      label: "Who",
      value: ev.who
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-body)',
        fontSize: 15,
        lineHeight: 1.6,
        margin: '10px 0 4px'
      }
    }, ev.desc), /*#__PURE__*/React.createElement(TraceDivider, {
      color: "var(--glacier-400)",
      height: 30,
      style: {
        margin: '8px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: '6px 0 10px'
      }
    }, "Volunteer slots"), /*#__PURE__*/React.createElement(Card, {
      padding: "14px",
      style: {
        marginBottom: 20
      }
    }, ['Door check-in Â· 8:30â€“9:30', 'Snack table Â· 9:30â€“10:30'].map((slot, i) => {
      const taken = filledSlot === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 0',
          borderBottom: i === 0 ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: 'var(--evening-rink)'
        }
      }, slot.split(' Â· ')[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, slot.split(' Â· ')[1], " \xB7 1 hr")), taken ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: true
      }, "Signed up") : /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "warm",
        onClick: () => onSignUpSlot(i)
      }, "Take slot"));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        bottom: 0,
        padding: '12px 20px 16px',
        background: 'linear-gradient(to top, var(--glacier) 70%, transparent)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: rsvped ? 'secondary' : 'primary',
      onClick: onRsvp,
      iconLeft: rsvped ? /*#__PURE__*/React.createElement(RC.Icon, {
        name: "check",
        size: 18,
        color: "var(--edge-blue)"
      }) : null
    }, rsvped ? "You're going" : 'RSVP â€” grab a spot')));
  }
  window.EventScreen = EventScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EventScreen.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
// RinkConnect community app â€” Home feed screen
(function () {
  const useState = React.useState;
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function EventPoster({
    tint = 'var(--ice-blue)',
    icon = 'calendar-days',
    height = 116
  }) {
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        background: tint,
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -18,
        bottom: -22,
        width: 120,
        opacity: 0.35
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 34,
      color: "rgba(255,255,255,0.95)"
    }));
  }
  function EventCard({
    ev,
    onOpen
  }) {
    const {
      Card,
      Badge
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: "12px",
      onClick: onOpen,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(EventPoster, {
      tint: ev.tint,
      icon: ev.icon
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 12,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)'
      }
    }, ev.title), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13,
        marginTop: 3
      }
    }, ev.when, " \xB7 ", ev.rink)), ev.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: ev.badgeTone
    }, ev.badge)));
  }
  function HomeScreen({
    events,
    onOpen,
    hours
  }) {
    const {
      Tabs,
      Card,
      TraceDivider,
      Icon
    } = RC;
    const [tab, setTab] = useState('up');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)'
      }
    }, "Hi, Dana \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14,
        marginTop: 2
      }
    }, "Here's what's happening at Lakeside FSC.")), /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "16px",
      style: {
        margin: '16px 20px 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: 0.9
      }
    }, "Your volunteer hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.1,
        marginTop: 2
      }
    }, hours, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        opacity: 0.85
      }
    }, "/ 12 hrs"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 26,
      color: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.22)',
        marginTop: 12,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${hours / 12 * 100}%`,
        height: '100%',
        background: 'var(--rink-light)',
        borderRadius: 999
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 20px 4px'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      items: [{
        label: 'Upcoming',
        value: 'up'
      }, {
        label: 'This week',
        value: 'wk'
      }, {
        label: 'Mine',
        value: 'me'
      }],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 20px 0'
      }
    }, events.map(ev => /*#__PURE__*/React.createElement(EventCard, {
      key: ev.id,
      ev: ev,
      onOpen: () => onOpen(ev)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0 24px',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(TraceDivider, {
      color: "var(--glacier-500)",
      height: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        marginTop: 4
      }
    }, "That's everything for now."))));
  }
  window.HomeScreen = HomeScreen;
  window.EventPoster = EventPoster;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.sa.jsx
try { (() => {
// RinkConnect community app â€” Home feed screen
(function () {
  const useState = React.useState;
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function EventPoster({
    tint = 'var(--ice-blue)',
    icon = 'calendar-days',
    height = 116
  }) {
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        background: tint,
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources.traceMark,
      alt: "",
      style: {
        position: 'absolute',
        right: -18,
        bottom: -22,
        width: 120,
        opacity: 0.35
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 34,
      color: "rgba(255,255,255,0.95)"
    }));
  }
  function EventCard({
    ev,
    onOpen
  }) {
    const {
      Card,
      Badge
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: "12px",
      onClick: onOpen,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(EventPoster, {
      tint: ev.tint,
      icon: ev.icon
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 12,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)'
      }
    }, ev.title), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13,
        marginTop: 3
      }
    }, ev.when, " \xB7 ", ev.rink)), ev.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: ev.badgeTone
    }, ev.badge)));
  }
  function HomeScreen({
    events,
    onOpen,
    hours
  }) {
    const {
      Tabs,
      Card,
      TraceDivider,
      Icon
    } = RC;
    const [tab, setTab] = useState('up');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)'
      }
    }, "Hi, Dana \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14,
        marginTop: 2
      }
    }, "Here's what's happening at Lakeside FSC.")), /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "16px",
      style: {
        margin: '16px 20px 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: 0.9
      }
    }, "Your volunteer hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.1,
        marginTop: 2
      }
    }, hours, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        opacity: 0.85
      }
    }, "/ 12 hrs"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 26,
      color: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.22)',
        marginTop: 12,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${hours / 12 * 100}%`,
        height: '100%',
        background: 'var(--rink-light)',
        borderRadius: 999
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 20px 4px'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      items: [{
        label: 'Upcoming',
        value: 'up'
      }, {
        label: 'This week',
        value: 'wk'
      }, {
        label: 'Mine',
        value: 'me'
      }],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 20px 0'
      }
    }, events.map(ev => /*#__PURE__*/React.createElement(EventCard, {
      key: ev.id,
      ev: ev,
      onOpen: () => onOpen(ev)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0 24px',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(TraceDivider, {
      color: "var(--glacier-500)",
      height: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        marginTop: 4
      }
    }, "That's everything for now."))));
  }
  window.HomeScreen = HomeScreen;
  window.EventPoster = EventPoster;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HoursScreen.jsx
try { (() => {
// RinkConnect community app â€” Volunteer hours ledger screen
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function HoursScreen({
    entries
  }) {
    const {
      Card,
      Badge,
      Icon,
      Button
    } = RC;
    const total = entries.filter(e => e.status !== 'pending').reduce((s, e) => s + e.hrs, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24,
        color: 'var(--evening-rink)'
      }
    }, "Volunteer hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14,
        marginTop: 2,
        marginBottom: 16
      }
    }, "Season goal: 12 hours per family."), /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "18px",
      style: {
        textAlign: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 44,
        lineHeight: 1
      }
    }, total), /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: 0.9,
        fontSize: 13,
        marginTop: 4
      }
    }, "hours approved this season")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
      }
    }, entries.map((e, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      padding: "12px 14px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 12,
        background: 'var(--gold-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: e.icon,
      size: 18,
      color: "var(--gold-700)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--evening-rink)'
      }
    }, e.task), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, e.date, " \xB7 ", e.hrs, " hr", e.hrs > 1 ? 's' : '')), e.status === 'pending' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "warm",
      dot: true
    }, "Pending") : /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Approved"))))), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      variant: "warm",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18,
        color: "#5a3d10"
      }),
      style: {
        marginBottom: 20
      }
    }, "Log more hours"));
  }
  window.HoursScreen = HoursScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HoursScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icon-seed.js
try { (() => {
window.__rcIconCache = window.__rcIconCache || {};
(function () {
  var d = {
    "heart-handshake": "<svg\n  class=\"lucide lucide-heart-handshake\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />\n  <path d=\"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66\" />\n  <path d=\"m18 15-2-2\" />\n  <path d=\"m15 18-2-2\" />\n</svg>",
    "bell": "<svg\n  class=\"lucide lucide-bell\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />\n</svg>",
    "house": "<svg\n  class=\"lucide lucide-house\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" />\n  <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />\n</svg>",
    "calendar-days": "<svg\n  class=\"lucide lucide-calendar-days\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M8 2v4\" />\n  <path d=\"M16 2v4\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />\n  <path d=\"M3 10h18\" />\n  <path d=\"M8 14h.01\" />\n  <path d=\"M12 14h.01\" />\n  <path d=\"M16 14h.01\" />\n  <path d=\"M8 18h.01\" />\n  <path d=\"M12 18h.01\" />\n  <path d=\"M16 18h.01\" />\n</svg>",
    "shield-check": "<svg\n  class=\"lucide lucide-shield-check\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />\n  <path d=\"m9 12 2 2 4-4\" />\n</svg>",
    "sparkles": "<svg\n  class=\"lucide lucide-sparkles\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" />\n  <path d=\"M20 3v4\" />\n  <path d=\"M22 5h-4\" />\n  <path d=\"M4 17v2\" />\n  <path d=\"M5 18H3\" />\n</svg>",
    "snowflake": "<svg\n  class=\"lucide lucide-snowflake\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"m10 20-1.25-2.5L6 18\" />\n  <path d=\"M10 4 8.75 6.5 6 6\" />\n  <path d=\"m14 20 1.25-2.5L18 18\" />\n  <path d=\"m14 4 1.25 2.5L18 6\" />\n  <path d=\"m17 21-3-6h-4\" />\n  <path d=\"m17 3-3 6 1.5 3\" />\n  <path d=\"M2 12h6.5L10 9\" />\n  <path d=\"m20 10-1.5 2 1.5 2\" />\n  <path d=\"M22 12h-6.5L14 15\" />\n  <path d=\"m4 10 1.5 2L4 14\" />\n  <path d=\"m7 21 3-6-1.5-3\" />\n  <path d=\"m7 3 3 6h4\" />\n</svg>",
    "users": "<svg\n  class=\"lucide lucide-users\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"9\" cy=\"7\" r=\"4\" />\n  <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" />\n  <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />\n</svg>",
    "cookie": "<svg\n  class=\"lucide lucide-cookie\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5\" />\n  <path d=\"M8.5 8.5v.01\" />\n  <path d=\"M16 15.5v.01\" />\n  <path d=\"M12 12v.01\" />\n  <path d=\"M11 17v.01\" />\n  <path d=\"M7 14v.01\" />\n</svg>",
    "clipboard-check": "<svg\n  class=\"lucide lucide-clipboard-check\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" />\n  <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" />\n  <path d=\"m9 14 2 2 4-4\" />\n</svg>",
    "music": "<svg\n  class=\"lucide lucide-music\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M9 18V5l12-2v13\" />\n  <circle cx=\"6\" cy=\"18\" r=\"3\" />\n  <circle cx=\"18\" cy=\"16\" r=\"3\" />\n</svg>",
    "arrow-left": "<svg\n  class=\"lucide lucide-arrow-left\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"m12 19-7-7 7-7\" />\n  <path d=\"M19 12H5\" />\n</svg>",
    "map-pin": "<svg\n  class=\"lucide lucide-map-pin\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" />\n  <circle cx=\"12\" cy=\"10\" r=\"3\" />\n</svg>",
    "check": "<svg\n  class=\"lucide lucide-check\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M20 6 9 17l-5-5\" />\n</svg>",
    "plus": "<svg\n  class=\"lucide lucide-plus\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M5 12h14\" />\n  <path d=\"M12 5v14\" />\n</svg>",
    "x": "<svg\n  class=\"lucide lucide-x\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M18 6 6 18\" />\n  <path d=\"m6 6 12 12\" />\n</svg>",
    "info": "<svg\n  class=\"lucide lucide-info\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 16v-4\" />\n  <path d=\"M12 8h.01\" />\n</svg>",
    "user": "<svg\n  class=\"lucide lucide-user\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"12\" cy=\"7\" r=\"4\" />\n</svg>",
    "chevron-down": "<svg\n  class=\"lucide lucide-chevron-down\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"m6 9 6 6 6-6\" />\n</svg>",
    "mail": "<svg\n  class=\"lucide lucide-mail\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" />\n  <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />\n</svg>",
    "heart": "<svg\n  class=\"lucide lucide-heart\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />\n</svg>",
    "arrow-right": "<svg\n  class=\"lucide lucide-arrow-right\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M5 12h14\" />\n  <path d=\"m12 5 7 7-7 7\" />\n</svg>",
    "clock": "<svg\n  class=\"lucide lucide-clock\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <polyline points=\"12 6 12 12 16 14\" />\n</svg>",
    "alert-circle": "<svg\n  class=\"lucide lucide-circle-alert\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" />\n  <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />\n</svg>",
    "check-circle-2": "<svg\n  class=\"lucide lucide-circle-check-big\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  \n  \n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M21.801 10A10 10 0 1 1 17 3.335\" />\n  <path d=\"m9 11 3 3L22 4\" />\n</svg>"
  };
  for (var k in d) {
    window.__rcIconCache[k] = Promise.resolve(d[k]);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icon-seed.js", error: String((e && e.message) || e) }); }

// ui_kits/website/HoursData.jsx
try { (() => {
// Shared volunteer-hours data + small parts used by Web 08â€“11.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const PENDING = [{
    event: 'Summer Ice Show rehearsal',
    when: 'Sat Jul 26 Â· 4:00â€“6:00 PM',
    entries: [{
      name: 'Marta Wolf',
      role: 'Check-in desk',
      slot: 2,
      claimed: 2,
      note: '',
      receipt: false
    }, {
      name: 'Sam Okafor',
      role: 'Music & sound',
      slot: 2,
      claimed: 2,
      note: '',
      receipt: false
    }, {
      name: 'Rosa Delgado',
      role: 'Snack bar',
      slot: 2,
      claimed: 3.5,
      note: 'Stayed to clean up after the second group ran late.',
      receipt: false
    }]
  }, {
    event: 'Learn-to-skate open house',
    when: 'Sat Jul 19 Â· 9:00â€“11:00 AM',
    entries: [{
      name: 'Ken Adeyemi',
      role: 'Skate rentals',
      slot: 2,
      claimed: 2,
      note: '',
      receipt: false
    }, {
      name: 'Marta Wolf',
      role: 'Bake sale',
      slot: 2,
      claimed: 2,
      note: 'Ingredients receipt attached.',
      receipt: true
    }]
  }];
  const LEDGER = [{
    event: 'Summer Ice Show rehearsal',
    date: 'Jul 26, 2026',
    role: 'Check-in desk',
    hours: 2,
    status: 'Pending',
    tone: 'brand'
  }, {
    event: 'Learn-to-skate open house',
    date: 'Jul 19, 2026',
    role: 'Bake sale',
    hours: 2,
    status: 'Approved',
    tone: 'success'
  }, {
    event: 'Spring gala',
    date: 'Jun 14, 2026',
    role: 'Ticket table',
    hours: 4,
    status: 'Approved',
    tone: 'success'
  }, {
    event: 'Rink clean-up day',
    date: 'Jun 2, 2026',
    role: 'General help',
    hours: 3,
    status: 'Needs a note',
    tone: 'warning'
  }, {
    event: 'Season kickoff social',
    date: 'May 10, 2026',
    role: 'Setup crew',
    hours: 2.5,
    status: 'Approved',
    tone: 'success'
  }];
  const FAMILIES = [{
    name: 'Priya Shah',
    role: 'Coordinator',
    approved: 18,
    pending: 0,
    pledge: 20
  }, {
    name: 'Marta Wolf',
    role: 'Board member',
    approved: 14,
    pending: 4,
    pledge: 20
  }, {
    name: 'Sam Okafor',
    role: 'Board member',
    approved: 11.5,
    pending: 2,
    pledge: 20
  }, {
    name: 'Rosa Delgado',
    role: 'Parent',
    approved: 9,
    pending: 3.5,
    pledge: 20
  }, {
    name: 'Ken Adeyemi',
    role: 'Parent',
    approved: 6,
    pending: 2,
    pledge: 20
  }, {
    name: 'Tessa Lindqvist',
    role: 'Parent',
    approved: 2,
    pending: 0,
    pledge: 20
  }];
  function ProgressBar({
    pct,
    tone = 'var(--edge-blue)',
    height = 8
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: height / 2,
        background: 'var(--glacier-200)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: Math.min(100, pct) + '%',
        height: '100%',
        borderRadius: height / 2,
        background: tone
      }
    }));
  }
  function StatTile({
    value,
    label,
    tone
  }) {
    const {
      Card
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "18px 20px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 27,
        color: tone || 'var(--evening-rink)',
        lineHeight: 1.1
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 5
      }
    }, label));
  }
  window.HoursData = {
    PENDING,
    LEDGER,
    FAMILIES,
    ProgressBar,
    StatTile
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HoursData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// RinkConnect marketing website â€” page sections
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function Nav() {
    const {
      Button
    } = RC;
    const links = ['Features', 'For clubs', 'Safe Sport', 'Pricing'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 40px',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 36,
        borderRadius: 10
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--evening-rink)'
      }
    }, "RinkConnect")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        color: 'var(--evening-600)',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: 15
      }
    }, l)), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary"
    }, "Book a demo")));
  }
  function Hero({
    bg = 'var(--ice-blue)',
    headline = 'Your club, all in one place.',
    eyebrow = 'Made by rink parents, for rink parents'
  } = {}) {
    const {
      Button,
      TraceDivider,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: bg,
        borderRadius: 'var(--radius-2xl)',
        margin: '8px 24px 0',
        padding: '72px 40px 64px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        left: -60,
        top: -40,
        width: 260,
        opacity: 0.18
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -70,
        bottom: -60,
        width: 300,
        opacity: 0.16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 760,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(255,255,255,0.16)',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 15,
      color: "var(--rink-light)"
    }), " ", eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 56,
        lineHeight: 1.08,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, headline), /*#__PURE__*/React.createElement(TraceDivider, {
      color: "rgba(255,255,255,0.75)",
      height: 34,
      style: {
        margin: '18px auto',
        maxWidth: 320
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,0.92)',
        fontSize: 19,
        lineHeight: 1.55,
        maxWidth: 560,
        margin: '0 auto 30px'
      }
    }, "Events, volunteer hours, forms, and Safe Sport \u2014 out of the email chain and into one calm home base."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "onBrand"
    }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "ghost",
      style: {
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.5)'
      }
    }, "See a sample club"))));
  }
  function Features({
    columns = 2
  } = {}) {
    const {
      Card,
      Icon,
      Badge
    } = RC;
    const feats = [{
      icon: 'calendar-days',
      title: 'Events & sign-ups',
      body: 'Post a session once. Parents grab spots, get reminders, and see it on their own calendar.'
    }, {
      icon: 'heart-handshake',
      title: 'Volunteer hours',
      body: 'Skaters and parents log hours in a tap. The board approves â€” everyone sees where they stand.',
      warm: true
    }, {
      icon: 'file-check',
      title: 'Forms that get done',
      body: 'Waivers, medical forms, media consent â€” collected, tracked, and never lost in a reply-all.'
    }, {
      icon: 'shield-check',
      title: 'Safe Sport, built in',
      body: 'A confidential channel straight to your Safe Sport chair. Calm, private, always one tap away.'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1120,
        margin: '80px auto 0',
        padding: '0 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--edge-blue)',
        marginBottom: 10
      }
    }, "Everything the club runs on"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 38,
        color: 'var(--evening-rink)',
        margin: 0
      }
    }, "Warmth up front. Admin, handled.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 20
      }
    }, feats.map(f => /*#__PURE__*/React.createElement(Card, {
      key: f.title,
      padding: "26px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 16,
        background: f.warm ? 'var(--gold-100)' : 'var(--info-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: f.icon,
      size: 26,
      color: f.warm ? 'var(--gold-700)' : 'var(--edge-blue)'
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 21,
        color: 'var(--evening-rink)',
        margin: 0
      }
    }, f.title), f.warm && /*#__PURE__*/React.createElement(Badge, {
      tone: "warm",
      style: {
        marginLeft: 'auto'
      }
    }, "Favorite")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-body)',
        fontSize: 16,
        lineHeight: 1.6,
        margin: 0
      }
    }, f.body)))));
  }
  function Quote() {
    const {
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 860,
        margin: '84px auto 0',
        padding: '0 40px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-ink.svg",
      alt: "",
      style: {
        width: 54,
        opacity: 0.35,
        marginBottom: 18
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 1.4,
        color: 'var(--evening-rink)',
        margin: '0 0 24px'
      }
    }, "\u201CThe 6am email chain is gone. Parents finally know where to look, and our board got its weekends back.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      ring: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--evening-rink)'
      }
    }, "Priya Shah"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "President, Lakeside Figure Skating Club"))));
  }
  function CTA({
    bg = 'var(--evening-rink)'
  } = {}) {
    const {
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: bg,
        borderRadius: 'var(--radius-2xl)',
        margin: '84px 24px 0',
        padding: '56px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -40,
        top: -30,
        width: 200,
        opacity: 0.12
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 34,
        color: '#fff',
        margin: '0 0 12px'
      }
    }, "Bring your club in from the cold."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,0.82)',
        fontSize: 17,
        margin: '0 auto 26px',
        maxWidth: 460
      }
    }, "A 20-minute walkthrough with your season already set up."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "warm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#5a3d10"
      })
    }, "Book a demo"));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1120,
        margin: '48px auto 0',
        padding: '28px 40px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 28,
        borderRadius: 8
      }
    }), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 RinkConnect")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Privacy"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Safe Sport"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Contact")));
  }
  window.WebSections = {
    Nav,
    Hero,
    Features,
    Quote,
    CTA,
    Footer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web01_LoginSignup.jsx
try { (() => {
// RinkConnect â€” Login & Sign up screens (three layout directions)
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const {
    useState
  } = React;
  const RINKS = ['Lakeside Figure Skating Club', 'Cedar Ridge Skating Academy', 'Harbor City Ice Club', 'Northgate Skating Association', 'Other / not listed'];

  // The form body, shared across all three layouts.
  function AuthForm({
    compact = false
  }) {
    const {
      Button,
      Input,
      Select,
      Tabs,
      Icon
    } = RC;
    const [mode, setMode] = useState('login');
    const isSignup = mode === 'signup';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: compact ? 26 : 30,
        color: 'var(--evening-rink)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, isSignup ? 'Join your club' : 'Welcome back'), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 15,
        lineHeight: 1.5,
        margin: '8px 0 0'
      }
    }, isSignup ? 'Create an account to see your season in one calm place.' : 'Log in to pick up right where your club left off.')), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: mode,
      onChange: setMode,
      items: [{
        label: 'Log in',
        value: 'login'
      }, {
        label: 'Sign up',
        value: 'signup'
      }],
      style: {
        display: 'flex',
        width: '100%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      defaultValue: "",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 17,
        color: "var(--text-muted)"
      })
    }), isSignup && /*#__PURE__*/React.createElement(Select, {
      label: "Home rink or club"
    }, RINKS.map(r => /*#__PURE__*/React.createElement("option", {
      key: r,
      value: r
    }, r))), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      placeholder: isSignup ? 'At least 8 characters' : 'Enter your password',
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 17,
        color: "var(--text-muted)"
      }),
      hint: !isSignup ? undefined : undefined
    }), !isSignup && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: -4,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-link)',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none'
      }
    }, "Forgot password?"))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#fff"
      })
    }, isSignup ? 'Create account' : 'Log in'), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: 14,
        margin: 0
      }
    }, isSignup ? 'Already with a club? ' : 'New to RinkConnect? ', /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        setMode(isSignup ? 'login' : 'signup');
      },
      style: {
        color: 'var(--text-link)',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, isSignup ? 'Log in' : 'Create an account')));
  }
  function Brandmark({
    light
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 34,
        borderRadius: 9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19,
        color: light ? '#fff' : 'var(--evening-rink)'
      }
    }, "RinkConnect"));
  }

  // ---- Layout A: centered card on brand background ----
  function CenteredCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--ice-blue)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        left: -70,
        top: -50,
        width: 300,
        opacity: 0.16
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -80,
        bottom: -70,
        width: 340,
        opacity: 0.14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 32,
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, /*#__PURE__*/React.createElement(Brandmark, {
      light: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 440,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-xl, 0 24px 60px rgba(22,50,79,0.28))',
        padding: '40px 40px 34px'
      }
    }, /*#__PURE__*/React.createElement(AuthForm, {
      compact: true
    })));
  }

  // ---- Layout B: split â€” brand panel + form ----
  function SplitScreen() {
    const {
      Icon,
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-card)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--evening-rink)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -60,
        top: -40,
        width: 240,
        opacity: 0.12
      }
    }), /*#__PURE__*/React.createElement(Brandmark, {
      light: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 44,
        right: 44,
        top: 150,
        bottom: 200
      }
    }, /*#__PURE__*/React.createElement("image-slot", {
      id: "auth-split-art",
      shape: "rounded",
      radius: "20",
      fit: "cover",
      placeholder: "Hand-drawn skate illustration"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.4,
        color: '#fff',
        margin: '0 0 20px'
      }
    }, "\u201CThe 6am email chain is gone. Parents finally know where to look.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      ring: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: '#fff',
        fontSize: 15
      }
    }, "Priya Shah"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)'
      }
    }, "President, Lakeside FSC"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 380
      }
    }, /*#__PURE__*/React.createElement(AuthForm, null))));
  }

  // ---- Layout C: full-bleed image with floating panel ----
  function HeroPanel() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--evening-rink)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("image-slot", {
      id: "auth-hero-bg",
      shape: "rect",
      fit: "cover",
      placeholder: "Full-bleed rink photograph"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(22,50,79,0.82) 0%, rgba(22,50,79,0.55) 42%, rgba(22,50,79,0.15) 100%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 34,
        left: 44,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement(Brandmark, {
      light: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: 88,
        transform: 'translateY(-50%)',
        width: 420,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: '0 30px 70px rgba(11,26,43,0.45)',
        padding: '38px 40px 32px'
      }
    }, /*#__PURE__*/React.createElement(AuthForm, {
      compact: true
    })));
  }
  window.AuthScreens = {
    CenteredCard,
    SplitScreen,
    HeroPanel
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web01_LoginSignup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web02_ClaimClub.jsx
try { (() => {
// Web 02 â€” Claim your club (Story 1). Newcomer claims a unique club from the directory.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function ClaimBrandPanel() {
    const {
      Icon
    } = RC;
    const points = ['You become the clubâ€™s first coordinator', 'Invite your board with one shareable link', 'Families see events & hours right away'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ice-blue)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 52px',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        left: -66,
        top: -54,
        width: 260,
        opacity: 0.22
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -70,
        bottom: -70,
        width: 300,
        opacity: 0.18
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 34,
        borderRadius: 9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: '#fff'
      }
    }, "RinkConnect")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 38,
        lineHeight: 1.14,
        color: '#fff',
        margin: '0 0 32px',
        letterSpacing: '-0.01em',
        maxWidth: 440
      }
    }, "Claim your club\u2019s home on the ice."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, points.map(p => /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.94)',
        fontSize: 16,
        fontWeight: 600
      }
    }, p))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 'auto',
        paddingTop: 40,
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14
      }
    }, "Free for clubs under 50 skaters."));
  }

  // Directory autocomplete â€” real clubs, claimed vs unclaimed, plus create-new.
  function ClubAutocomplete() {
    const {
      Icon
    } = RC;
    const rows = [{
      name: 'Lakeside Figure Skating Club',
      place: 'Minnetonka, MN',
      taken: true
    }, {
      name: 'Lakeview Skating Club',
      place: 'Chicago, IL',
      taken: false
    }, {
      name: 'Lake County Ice Academy',
      place: 'Waukegan, IL',
      taken: false
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        left: 0,
        right: 0,
        zIndex: 5,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 16px 40px rgba(22,50,79,0.18)',
        overflow: 'hidden'
      }
    }, rows.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 16px',
        borderBottom: '1px solid var(--glacier-200)',
        cursor: r.taken ? 'not-allowed' : 'pointer',
        background: r.taken ? 'var(--glacier-100)' : '#fff',
        opacity: r.taken ? 0.75 : 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.taken ? 'lock' : 'check',
      size: 17,
      color: r.taken ? 'var(--text-muted)' : 'var(--success)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-body)'
      }
    }, r.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, r.place)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: r.taken ? 'var(--text-muted)' : 'var(--success)',
        whiteSpace: 'nowrap'
      }
    }, r.taken ? 'Already claimed' : 'Unclaimed â€” claim it'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 16px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-plus",
      size: 17,
      color: "var(--edge-blue)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--edge-blue)'
      }
    }, "Create \u201CLake Harbor Skating Club\u201D"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--text-muted)'
      }
    }, "New club")));
  }
  function ClaimForm({
    state
  }) {
    const {
      Input,
      Button,
      Icon
    } = RC;
    const errors = state === 'errors';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '36px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 392
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 31,
        color: 'var(--evening-rink)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, "Claim your club"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 15,
        lineHeight: 1.5,
        margin: '9px 0 22px'
      }
    }, "Tell us who you are and find your club. We\u2019ll set you up as its first coordinator."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your name",
      placeholder: "Dana Ruiz",
      defaultValue: "Dana Ruiz"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      defaultValue: errors ? 'dana@lakesidefsc.org' : 'dana@email.com',
      error: errors ? 'That email is already registered. Log in instead, or use another address.' : undefined,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 17
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      placeholder: "At least 8 characters",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 17
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Club name",
      placeholder: "Start typing to search the club directory\u2026",
      defaultValue: errors ? 'Lakeside Figure Skating Club' : 'Lake',
      error: errors ? 'This club is already claimed. Pick your clubâ€™s real name â€” or contact us if someone claimed it wrongly.' : undefined,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 17
      })
    }), !errors && /*#__PURE__*/React.createElement(ClubAutocomplete, null)), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      style: {
        marginTop: errors ? 6 : 214
      },
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#fff"
      })
    }, "Claim club & create account")), /*#__PURE__*/React.createElement("p", {
      style: {
        display: 'flex',
        gap: 8,
        color: 'var(--text-muted)',
        fontSize: 13,
        lineHeight: 1.5,
        margin: '14px 0 0'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 16,
      color: "var(--text-muted)",
      style: {
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, "Claiming reserves your club\u2019s name instantly. We give every new coordinator a quick verification call before invites unlock.")), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: 14,
        margin: '14px 0 0'
      }
    }, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-link)',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, "Log in"))));
  }
  function ClaimClub({
    state = 'available'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-card)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement(ClaimBrandPanel, null), /*#__PURE__*/React.createElement(ClaimForm, {
      state: state
    }));
  }
  window.Web02 = {
    ClaimClub
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web02_ClaimClub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web03_AcceptInvite.jsx
try { (() => {
// Web 03 â€” Accept invite (Story 3). Board member accepts a token invite.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function InviteBrandPanel() {
    const {
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--evening-rink)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 52px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/trace-mark-white.svg",
      alt: "",
      style: {
        position: 'absolute',
        right: -60,
        top: -40,
        width: 240,
        opacity: 0.12
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 32,
        borderRadius: 9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: '#fff'
      }
    }, "RinkConnect")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 23,
        lineHeight: 1.4,
        color: '#fff',
        margin: '0 0 20px'
      }
    }, "\u201CTwo clicks and our new treasurer could see every event. No spreadsheet handover.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      ring: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: '#fff',
        fontSize: 15
      }
    }, "Priya Shah"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)'
      }
    }, "Coordinator, Lakeside FSC")))));
  }

  // Valid invite â†’ create account
  function AcceptForm() {
    const {
      Input,
      Button,
      Badge,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 384
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--info-bg)',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail-check",
      size: 17,
      color: "var(--edge-blue)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: 'var(--edge-blue)'
      }
    }, "You\u2019ve been invited to Lakeside FSC")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        color: 'var(--evening-rink)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, "Accept your invite"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 15.5,
        lineHeight: 1.5,
        margin: '10px 0 24px'
      }
    }, "Priya Shah invited you to join as a board member. Set up your account to get started."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-muted)',
        marginBottom: 7
      }
    }, "Your role in this club"), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, "Board member")), /*#__PURE__*/React.createElement(Input, {
      label: "Your name",
      placeholder: "Sam Okafor",
      defaultValue: "Sam Okafor"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "sam@email.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 17
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Create a password",
      type: "password",
      placeholder: "At least 8 characters",
      hint: "Use 8 or more characters.",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 17
      })
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#fff"
      })
    }, "Accept & go to dashboard")), /*#__PURE__*/React.createElement("p", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        color: 'var(--text-muted)',
        fontSize: 13.5,
        margin: '18px 0 0'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15,
      color: "var(--text-muted)"
    }), " This invite expires Aug 6, 2026.")));
  }

  // Expired / already-used invite â†’ dead end with recovery path
  function InviteExpired({
    reason = 'expired'
  }) {
    const {
      Button,
      Icon
    } = RC;
    const used = reason === 'used';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 380,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 68,
        height: 68,
        margin: '0 auto 22px',
        borderRadius: '50%',
        background: 'var(--danger-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: used ? 'check-check' : 'clock-alert',
      size: 32,
      color: "var(--danger)"
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 27,
        color: 'var(--evening-rink)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, used ? 'This invite was already used' : 'This invite has expired'), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 15.5,
        lineHeight: 1.55,
        margin: '12px 0 26px'
      }
    }, used ? 'An account has already been created with this link. Try logging in, or ask your coordinator to send a fresh invite.' : 'Invites are valid for 14 days. Ask your club coordinator to send you a new one â€” it only takes them a moment.'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true
    }, used ? 'Go to log in' : 'Request a new invite'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      fullWidth: true
    }, "Back to rinkconnect.com"))));
  }
  function AcceptInvite({
    state = 'valid'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-card)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement(InviteBrandPanel, null), state === 'valid' ? /*#__PURE__*/React.createElement(AcceptForm, null) : /*#__PURE__*/React.createElement(InviteExpired, {
      reason: state
    }));
  }
  window.Web03 = {
    AcceptInvite
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web03_AcceptInvite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web04_Dashboard.jsx
try { (() => {
// Web 04 â€” Club dashboard (Home). Role-gated actions + verification gate (Stories 2 & 4).
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const EVENTS = [{
    name: 'Summer Ice Show rehearsal',
    when: 'Sat Jul 26 Â· 4:00 PM',
    rsvp: 'Going',
    tone: 'success'
  }, {
    name: 'Board meeting â€” season budget',
    when: 'Tue Aug 4 Â· 7:00 PM',
    rsvp: 'RSVP',
    tone: 'neutral'
  }];
  function SectionTitle({
    children
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: '0 0 14px'
      }
    }, children);
  }
  function EventsCard() {
    const {
      Card,
      Badge,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "22px 24px"
    }, /*#__PURE__*/React.createElement(SectionTitle, null, "Upcoming events"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, EVENTS.map((e, i) => /*#__PURE__*/React.createElement("div", {
      key: e.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '13px 0',
        borderTop: i ? '1px solid var(--glacier-200)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--info-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 20,
      color: "var(--edge-blue)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, e.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, e.when)), /*#__PURE__*/React.createElement(Badge, {
      tone: e.tone,
      dot: e.tone === 'success'
    }, e.rsvp)))));
  }
  function HoursCard({
    board
  }) {
    const {
      Card,
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "22px 24px"
    }, /*#__PURE__*/React.createElement(SectionTitle, null, board ? 'Your volunteer hours' : 'Season volunteer hours'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 34,
        color: 'var(--evening-rink)'
      }
    }, board ? '13.5' : '128'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, board ? 'of 20 hours pledged' : 'of 240 pledged')), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 4,
        background: 'var(--glacier-200)',
        margin: '14px 0 10px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: board ? '67%' : '53%',
        height: '100%',
        borderRadius: 4,
        background: 'var(--edge-blue)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, board ? '2h pending review Â· 6.5h to go' : '12 families logging hours this season'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 16,
        paddingTop: 15,
        borderTop: '1px solid var(--glacier-200)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--warning-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: board ? 'heart-handshake' : 'clock',
      size: 19,
      color: "var(--gold-700)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--evening-rink)'
      }
    }, board ? 'You helped at Summer Ice Show rehearsal' : '11.5 hours awaiting your review'), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, board ? 'Ended yesterday Â· 2h check-in desk slot' : 'From 5 people across 2 events')), /*#__PURE__*/React.createElement(Button, {
      variant: board ? 'primary' : 'secondary',
      size: "sm"
    }, board ? 'Log 2h' : 'Review')));
  }
  function MembersCard({
    members,
    canInvite
  }) {
    const {
      Card,
      Badge,
      Button,
      Avatar,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "22px 24px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: 0
      }
    }, "Members"), canInvite && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 16,
        color: "var(--edge-blue)"
      })
    }, "Invite")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, members.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderTop: i ? '1px solid var(--glacier-200)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--text-body)'
      }
    }, m.name), /*#__PURE__*/React.createElement(Badge, {
      tone: m.role === 'Coordinator' ? 'brand' : 'neutral'
    }, m.role)))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        lineHeight: 1.5,
        margin: '12px 0 0'
      }
    }, "Only members of this club can see its roster."));
  }
  function InvitePanel({
    locked
  }) {
    const {
      Card,
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "22px 24px"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: '#fff',
        margin: '0 0 8px'
      }
    }, "Grow your board"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,0.88)',
        margin: '0 0 16px'
      }
    }, "Share one link and board members set up their own accounts \u2014 no managing logins by hand."), /*#__PURE__*/React.createElement(Button, {
      variant: "onBrand",
      size: "md",
      fullWidth: true,
      disabled: locked,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: locked ? 'lock' : 'user-plus',
        size: 17,
        color: "var(--edge-blue)"
      })
    }, "Invite board members"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        lineHeight: 1.5,
        color: 'rgba(255,255,255,0.75)',
        margin: '12px 0 0'
      }
    }, locked ? 'Unlocks once your club is verified.' : 'Coordinators only. Invite links expire after 14 days.'));
  }
  function VerificationBanner() {
    const {
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'var(--warning-bg)',
        border: '1px solid var(--gold-600)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 20px',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'rgba(232,161,61,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 22,
      color: "var(--gold-700)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--evening-rink)'
      }
    }, "We\u2019re verifying your club"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        color: 'var(--text-body)',
        marginTop: 3,
        lineHeight: 1.5
      }
    }, "Your club\u2019s name is reserved. We\u2019ll give you a quick call to confirm you\u2019re with the club \u2014 invites unlock right after. Verified already? Refresh.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "refresh-cw",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Refresh"));
  }
  function Dashboard({
    variant = 'coordinator'
  }) {
    const {
      AppHeader
    } = window.WebShell;
    const pending = variant === 'pending';
    const board = variant === 'board';
    const clubName = pending ? 'Lakeview Skating Club' : 'Lakeside Figure Skating Club';
    const userName = board ? 'Sam Okafor' : pending ? 'Dana Ruiz' : 'Priya Shah';
    const members = pending ? [{
      name: 'Dana Ruiz',
      role: 'Coordinator'
    }] : [{
      name: 'Priya Shah',
      role: 'Coordinator'
    }, {
      name: 'Sam Okafor',
      role: 'Board member'
    }, {
      name: 'Marta Wolf',
      role: 'Board member'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: clubName,
      userName: userName,
      active: "Home"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '30px 36px'
      }
    }, pending && /*#__PURE__*/React.createElement(VerificationBanner, null), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)',
        margin: '0 0 22px',
        letterSpacing: '-0.01em'
      }
    }, pending ? `Welcome, ${userName.split(' ')[0]} â€” your club is claimed.` : `Good morning, ${userName.split(' ')[0]}`), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: 22,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(EventsCard, null), /*#__PURE__*/React.createElement(HoursCard, {
      board: board
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, !board && /*#__PURE__*/React.createElement(InvitePanel, {
      locked: pending
    }), /*#__PURE__*/React.createElement(MembersCard, {
      members: members,
      canInvite: !board && !pending
    })))));
  }
  window.Web04 = {
    Dashboard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web04_Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web05_ManageInvites.jsx
try { (() => {
// Web 05 â€” Manage invites (Story 2). Coordinator generates + tracks invite links.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const INVITES = [{
    token: 'rinkconnect.com/invite/â€¦c81f4a',
    created: 'Jul 23, 2026',
    detail: 'Expires Aug 6, 2026',
    status: 'Pending',
    tone: 'brand',
    copy: true
  }, {
    token: 'rinkconnect.com/invite/â€¦9d02be',
    created: 'Jul 12, 2026',
    detail: 'Accepted Jul 14 by Sam Okafor',
    status: 'Accepted',
    tone: 'success'
  }, {
    token: 'rinkconnect.com/invite/â€¦44aa07',
    created: 'Jun 20, 2026',
    detail: 'Expired Jul 4, 2026',
    status: 'Expired',
    tone: 'neutral'
  }];
  function NewInviteCard() {
    const {
      Card,
      Button,
      Badge,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "24px 26px"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--evening-rink)',
        margin: '0 0 6px'
      }
    }, "New invite link"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        lineHeight: 1.5,
        margin: '0 0 18px'
      }
    }, "Generate a link and share it however you like \u2014 text, email, or the group chat."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--glacier-100)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '11px 14px',
        fontSize: 14.5,
        color: 'var(--text-body)',
        fontFamily: 'var(--font-mono, monospace)',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "link",
      size: 16,
      color: "var(--text-muted)"
    }), "rinkconnect.com/invite/e3b9\u2026c81f4a"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "copy",
        size: 16,
        color: "#fff"
      })
    }, "Copy link")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "Board member"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15,
      color: "var(--text-muted)"
    }), " Expires Aug 6, 2026 \xB7 14 days from today")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        margin: '14px 0 0'
      }
    }, "Anyone with this link can join once \u2014 it stops working the moment it\u2019s accepted. Only you and other coordinators can create invites."));
  }
  function InviteListCard() {
    const {
      Card,
      Badge,
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "24px 26px"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--evening-rink)',
        margin: '0 0 10px'
      }
    }, "Sent invites"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, INVITES.map((inv, i) => /*#__PURE__*/React.createElement("div", {
      key: inv.token,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 0',
        borderTop: i ? '1px solid var(--glacier-200)' : 'none',
        opacity: inv.status === 'Expired' ? 0.65 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "link",
      size: 18,
      color: "var(--evening-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--text-body)',
        fontFamily: 'var(--font-mono, monospace)'
      }
    }, inv.token), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Created ", inv.created, " \xB7 ", inv.detail)), /*#__PURE__*/React.createElement(Badge, {
      tone: inv.tone,
      dot: inv.status === 'Pending'
    }, inv.status), inv.copy && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "copy",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Copy")))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.5,
        margin: '10px 0 0'
      }
    }, "Invites can\u2019t be revoked \u2014 an unused link simply expires on its own after 14 days."));
  }
  function ManageInvites() {
    const {
      AppHeader
    } = window.WebShell;
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: "Lakeside Figure Skating Club",
      userName: "Priya Shah",
      active: "Members"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '30px 36px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-link)',
        textDecoration: 'none',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16,
      color: "var(--text-link)"
    }), " Back to Home"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)',
        margin: '0 0 6px',
        letterSpacing: '-0.01em'
      }
    }, "Invite board members"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: '0 0 24px'
      }
    }, "Each link admits one board member to Lakeside Figure Skating Club."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(NewInviteCard, null), /*#__PURE__*/React.createElement(InviteListCard, null))));
  }
  window.Web05 = {
    ManageInvites
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web05_ManageInvites.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web06_CreateEvent.jsx
try { (() => {
// Web 06 â€” Create event. Side sheet over the dashboard: details â†’ audience, draft/publish/notify.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const PRESETS = [{
    name: 'Rehearsal',
    icon: 'music-4'
  }, {
    name: 'Board meeting',
    icon: 'users'
  }, {
    name: 'Competition',
    icon: 'trophy'
  }, {
    name: 'Fundraiser',
    icon: 'hand-coins'
  }];
  function Field({
    label,
    children,
    hint
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-body)',
        marginBottom: 7
      }
    }, label), children, hint && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 6,
        lineHeight: 1.45
      }
    }, hint));
  }
  function StepDots({
    step
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 22
      }
    }, ['Details', 'Who sees it'].map((s, i) => {
      const on = i + 1 <= step;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: s
      }, i > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 2,
          background: 'var(--glacier-300)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'var(--font-display)',
          background: on ? 'var(--edge-blue)' : 'var(--glacier-200)',
          color: on ? '#fff' : 'var(--text-muted)'
        }
      }, i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          fontWeight: 600,
          color: on ? 'var(--evening-rink)' : 'var(--text-muted)'
        }
      }, s)));
    }));
  }
  function SheetHeader({
    title,
    sub
  }) {
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '24px 28px 18px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 21,
        color: 'var(--evening-rink)',
        letterSpacing: '-0.01em'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 17,
      color: "var(--text-muted)"
    })));
  }
  function StepDetails() {
    const {
      Input,
      Select,
      Icon,
      Checkbox
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Event type"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8
      }
    }, PRESETS.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 7,
        padding: '13px 6px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        border: i === 0 ? '2px solid var(--edge-blue)' : '1px solid var(--border-strong)',
        background: i === 0 ? 'var(--info-bg)' : 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 19,
      color: i === 0 ? 'var(--edge-blue)' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: 1.25,
        color: i === 0 ? 'var(--edge-blue)' : 'var(--text-muted)'
      }
    }, p.name))))), /*#__PURE__*/React.createElement(Input, {
      label: "Event title",
      defaultValue: "Summer Ice Show rehearsal"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Date",
      type: "date",
      defaultValue: "2026-08-15"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Starts",
      type: "time",
      defaultValue: "16:00"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Ends",
      type: "time",
      defaultValue: "18:00"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Location",
      defaultValue: "home"
    }, /*#__PURE__*/React.createElement("option", {
      value: "home"
    }, "Lakeside Arena \u2014 Rink A (home rink)"), /*#__PURE__*/React.createElement("option", {
      value: "b"
    }, "Lakeside Arena \u2014 Rink B"), /*#__PURE__*/React.createElement("option", {
      value: "other"
    }, "Somewhere else\u2026")), /*#__PURE__*/React.createElement(Field, {
      label: "Details for families",
      hint: "Shown on the event and in the feed."
    }, /*#__PURE__*/React.createElement("textarea", {
      defaultValue: "Full run-through in costume. Skaters arrive 15 minutes early to warm up.",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 78,
        resize: 'vertical',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.5,
        color: 'var(--text-body)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '11px 14px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--glacier-200)',
        paddingTop: 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5
        }
      }, "Repeat weekly until ", /*#__PURE__*/React.createElement("strong", null, "Dec 20, 2026")),
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--glacier-100)',
        borderRadius: 'var(--radius-md)',
        padding: '11px 14px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "repeat",
      size: 16,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "Creates 19 events. You can uncheck individual dates next."), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: 'var(--text-link)',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, "Preview dates")), /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5
        }
      }, "Needs volunteers \u2014 adds hour-logging slots"),
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        paddingLeft: 30
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Volunteers needed",
      type: "number",
      defaultValue: "4"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Hours each",
      type: "number",
      defaultValue: "2"
    }))));
  }
  function StepAudience() {
    const {
      Icon,
      Checkbox,
      Badge
    } = RC;
    const options = [{
      name: 'Everyone in the club',
      detail: '34 families Â· 41 members',
      icon: 'users',
      on: true
    }, {
      name: 'Board members only',
      detail: '3 members',
      icon: 'shield-check',
      on: false
    }, {
      name: 'Specific groups',
      detail: 'Pick skill levels or squads',
      icon: 'list-filter',
      on: false
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Who can see this event"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, options.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        border: o.on ? '2px solid var(--edge-blue)' : '1px solid var(--border-strong)',
        background: o.on ? 'var(--info-bg)' : 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: o.icon,
      size: 19,
      color: o.on ? 'var(--edge-blue)' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: o.on ? 'var(--edge-blue)' : 'var(--text-body)'
      }
    }, o.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, o.detail)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: o.on ? 'none' : '2px solid var(--glacier-300)',
        background: o.on ? 'var(--edge-blue)' : 'transparent'
      }
    }, o.on && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "#fff"
    })))))), /*#__PURE__*/React.createElement(Field, {
      label: "RSVP"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5
        }
      }, "Ask families to RSVP"),
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5
        }
      }, "Send a reminder 2 days before"),
      defaultChecked: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--glacier-200)',
        paddingTop: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "When to publish"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        border: '2px solid var(--edge-blue)',
        background: 'var(--info-bg)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18,
      color: "var(--edge-blue)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--edge-blue)'
      }
    }, "Publish now"), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "Notifies 34 families")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-strong)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell-off",
      size: 18,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-body)'
      }
    }, "Publish quietly \u2014 no notification")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-strong)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-clock",
      size: 18,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-body)'
      }
    }, "Schedule for later"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "Sept 1, 8:00 AM"))))));
  }
  function SheetFooter({
    step
  }) {
    const {
      Button,
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md"
    }, step === 1 ? 'Save draft' : 'Back'), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), step === 1 ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17,
        color: "#fff"
      })
    }, "Next \u2014 who sees it") : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 16,
        color: "#fff"
      })
    }, "Publish & notify"));
  }

  // Dimmed dashboard behind the sheet.
  function Backdrop() {
    const {
      Dashboard
    } = window.Web04;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(Dashboard, {
      variant: "coordinator"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(22,50,79,0.42)'
      }
    }));
  }
  function CreateEvent({
    step = 1
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(Backdrop, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 520,
        background: 'var(--surface-card)',
        boxShadow: '-24px 0 60px rgba(11,26,43,0.28)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(SheetHeader, {
      title: step === 1 ? 'New event' : 'Who sees it',
      sub: step === 1 ? 'Lakeside Figure Skating Club' : 'Summer Ice Show rehearsal Â· Aug 15, 4:00 PM'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '20px 28px 26px'
      }
    }, /*#__PURE__*/React.createElement(StepDots, {
      step: step
    }), step === 1 ? /*#__PURE__*/React.createElement(StepDetails, null) : /*#__PURE__*/React.createElement(StepAudience, null)), /*#__PURE__*/React.createElement(SheetFooter, {
      step: step
    })));
  }
  window.Web06 = {
    CreateEvent
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web06_CreateEvent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web07_ClubFeed.jsx
try { (() => {
// Web 07 â€” Club feed. Published events + announcements in one stream, with the composer.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  const FEED = [{
    kind: 'pinned',
    icon: 'pin',
    author: 'Priya Shah',
    role: 'Coordinator',
    when: 'Pinned Â· Jul 30',
    title: 'Season schedule is live',
    body: 'Every rehearsal through December is now on the calendar. Check your skaterâ€™s group and RSVP where you can.',
    actions: 'ack',
    acked: 28,
    audience: 'Everyone'
  }, {
    kind: 'event',
    icon: 'calendar-days',
    author: 'Priya Shah',
    role: 'Coordinator',
    when: '2 days ago',
    title: 'Summer Ice Show rehearsal',
    meta: 'Sat Aug 15 Â· 4:00â€“6:00 PM Â· Lakeside Arena, Rink A',
    body: 'Full run-through in costume. Skaters arrive 15 minutes early to warm up.',
    actions: 'rsvp',
    going: 22,
    volunteers: '3 of 4 volunteer slots filled',
    audience: 'Everyone'
  }, {
    kind: 'draft',
    icon: 'file-pen-line',
    author: 'You',
    role: 'Coordinator',
    when: 'Draft Â· saved Jul 29',
    title: 'Fall fundraiser â€” bottle drive',
    body: 'Date and location still to confirm with the arena.',
    audience: 'Draft â€” only coordinators can see this'
  }, {
    kind: 'post',
    icon: 'megaphone',
    author: 'Marta Wolf',
    role: 'Board member',
    when: 'Jul 24',
    title: 'Lost and found is overflowing',
    body: 'Anything unclaimed by Aug 8 goes to donation. The bin is by the skate shop counter.',
    actions: 'ack',
    acked: 12,
    audience: 'Everyone'
  }];
  function Composer() {
    const {
      Card,
      Icon,
      Button,
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "18px 20px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--glacier-100)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-pill)',
        padding: '11px 18px',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        cursor: 'text'
      }
    }, "Share something with your club\u2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar-plus",
        size: 16,
        color: "#fff"
      })
    }, "New event"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "megaphone",
        size: 16,
        color: "var(--edge-blue)"
      })
    }, "Post an update"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "file-pen-line",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Drafts \xB7 1")));
  }
  function FeedItem({
    item
  }) {
    const {
      Card,
      Badge,
      Button,
      Avatar,
      Icon
    } = RC;
    const draft = item.kind === 'draft';
    const pinned = item.kind === 'pinned';
    return /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: 'hidden',
        border: pinned ? '1px solid var(--gold-600)' : undefined,
        opacity: draft ? 0.92 : 1
      }
    }, pinned && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--warning-bg)',
        padding: '8px 20px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pin",
      size: 14,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--gold-700)'
      }
    }, "Pinned for this week")), draft && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--glacier-200)',
        padding: '8px 20px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-pen-line",
      size: 14,
      color: "var(--evening-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--evening-600)'
      }
    }, "Draft \u2014 not published")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: item.author === 'You' ? 'Priya Shah' : item.author,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, item.author, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--text-muted)'
      }
    }, "\xB7 ", item.role)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, item.when)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 'var(--radius-md)',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 16,
      color: "var(--evening-600)"
    }))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17.5,
        color: 'var(--evening-rink)',
        margin: '0 0 6px',
        letterSpacing: '-0.005em'
      }
    }, item.title), item.meta && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--edge-blue)',
        background: 'var(--info-bg)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 12px',
        marginBottom: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14,
      color: "var(--edge-blue)"
    }), item.meta), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: '0 0 14px',
        textWrap: 'pretty'
      }
    }, item.body), item.volunteers && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        background: 'var(--glacier-100)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 13px',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 16,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13.5,
        color: 'var(--text-body)',
        fontWeight: 600
      }
    }, item.volunteers), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: 'var(--text-link)',
        textDecoration: 'none'
      }
    }, "Sign up")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        paddingTop: 13,
        borderTop: '1px solid var(--glacier-200)'
      }
    }, item.actions === 'rsvp' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15,
        color: "#fff"
      })
    }, "Going"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Can\u2019t make it"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginLeft: 4
      }
    }, item.going, " going")), item.actions === 'ack' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Got it"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginLeft: 4
      }
    }, item.acked, " read")), draft && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Finish & publish"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Discard")), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: draft ? 'neutral' : 'neutral'
    }, item.audience))));
  }
  function ClubFeed() {
    const {
      AppHeader
    } = window.WebShell;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: "Lakeside Figure Skating Club",
      userName: "Priya Shah",
      active: "Events"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '28px 36px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 660,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 25,
        color: 'var(--evening-rink)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, "Club feed"), /*#__PURE__*/React.createElement(Composer, null), FEED.map(item => /*#__PURE__*/React.createElement(FeedItem, {
      key: item.title,
      item: item
    })))));
  }
  window.Web07 = {
    ClubFeed
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web07_ClubFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web08_HoursReview.jsx
try { (() => {
// Web 08 â€” Coordinator: hours review queue. Bulk approve per event; gentle query path.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function EntryRow({
    e,
    flagged
  }) {
    const {
      Avatar,
      Badge,
      Button,
      Icon
    } = RC;
    const mismatch = e.claimed !== e.slot;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13,
        padding: '14px 0',
        borderTop: '1px solid var(--glacier-200)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        marginTop: 2,
        flexShrink: 0,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: mismatch ? 'transparent' : 'var(--edge-blue)',
        border: mismatch ? '2px solid var(--glacier-300)' : 'none'
      }
    }, !mismatch && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "#fff"
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: e.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, e.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, e.role), e.receipt && /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Receipt")), e.note && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 4,
        lineHeight: 1.5
      }
    }, "\u201C", e.note, "\u201D"), mismatch && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        marginTop: 8,
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--gold-700)',
        background: 'var(--warning-bg)',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 11px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 14,
      color: "var(--gold-700)"
    }), e.claimed, "h claimed on a ", e.slot, "h slot \u2014 worth a quick look")), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)'
      }
    }, e.claimed, "h"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, "slot: ", e.slot, "h")), mismatch && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 7,
        flexShrink: 0,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Approve ", e.claimed, "h"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Ask ", e.name.split(' ')[0])));
  }
  function EventGroup({
    group
  }) {
    const {
      Card,
      Button,
      Icon
    } = RC;
    const total = group.entries.reduce((s, e) => s + e.claimed, 0);
    const clean = group.entries.filter(e => e.claimed === e.slot).length;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "20px 24px 16px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--info-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 20,
      color: "var(--edge-blue)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)'
      }
    }, group.event), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, group.when, " \xB7 ", group.entries.length, " people \xB7 ", total, "h claimed")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check-check",
        size: 16,
        color: "#fff"
      })
    }, "Approve ", clean, " matching")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, group.entries.map(e => /*#__PURE__*/React.createElement(EntryRow, {
      key: e.name + group.event,
      e: e
    }))));
  }
  function ReviewQueue() {
    const {
      AppHeader
    } = window.WebShell;
    const {
      PENDING,
      StatTile
    } = window.HoursData;
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: "Lakeside Figure Skating Club",
      userName: "Priya Shah",
      active: "Hours"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '28px 36px 40px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-link)',
        textDecoration: 'none',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16,
      color: "var(--text-link)"
    }), " Back to Home"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)',
        margin: '0 0 6px',
        letterSpacing: '-0.01em'
      }
    }, "Hours to review"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: '0 0 22px'
      }
    }, "Everything logged since your last review, grouped by event. Approve a whole roster at once."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        maxWidth: 860,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      value: "11.5h",
      label: "Awaiting your review"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "5",
      label: "Entries logged"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "1",
      label: "Needs a closer look",
      tone: "var(--gold-700)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        maxWidth: 860
      }
    }, PENDING.map(g => /*#__PURE__*/React.createElement(EventGroup, {
      key: g.event,
      group: g
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        display: 'flex',
        gap: 9,
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        margin: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 16,
      color: "var(--text-muted)",
      style: {
        marginTop: 1,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, "Entries matching their signed-up slot are pre-ticked. Anything different is only flagged for a look \u2014 asking sends a friendly private note, never a rejection.")))));
  }
  window.Web08 = {
    ReviewQueue
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web08_HoursReview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web09_LogHours.jsx
try { (() => {
// Web 09 â€” Member: log hours. Side sheet from the event card; prefilled from the signed-up slot.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function Field({
    label,
    children,
    hint
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-body)',
        marginBottom: 7
      }
    }, label), children, hint && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 6,
        lineHeight: 1.45
      }
    }, hint));
  }
  function EventContext() {
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        background: 'var(--info-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: '14px 16px',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 19,
      color: "var(--edge-blue)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--evening-rink)'
      }
    }, "Summer Ice Show rehearsal"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Sat Jul 26 \xB7 4:00\u20136:00 PM \xB7 Check-in desk")));
  }
  function HourStepper({
    value
  }) {
    const {
      Icon
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: '1px solid var(--border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 18,
      color: "var(--evening-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 34,
        color: 'var(--evening-rink)'
      }
    }, value), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--text-muted)',
        marginLeft: 4
      }
    }, "hours")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: '1px solid var(--border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18,
      color: "var(--evening-600)"
    })));
  }
  function LogSheet({
    state
  }) {
    const {
      Button,
      Icon,
      Badge
    } = RC;
    const extra = state === 'extra';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 480,
        background: 'var(--surface-card)',
        boxShadow: '-24px 0 60px rgba(11,26,43,0.28)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '24px 28px 18px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 21,
        color: 'var(--evening-rink)',
        letterSpacing: '-0.01em'
      }
    }, "Log your hours"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Thanks for helping out \u2014 this takes a second.")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 17,
      color: "var(--text-muted)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '20px 28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(EventContext, null), /*#__PURE__*/React.createElement(Field, {
      label: "Hours worked",
      hint: extra ? undefined : 'Prefilled from the slot you signed up for.'
    }, /*#__PURE__*/React.createElement(HourStepper, {
      value: extra ? '3.5' : '2'
    })), extra && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        background: 'var(--warning-bg)',
        borderRadius: 'var(--radius-md)',
        padding: '13px 15px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 17,
      color: "var(--gold-700)",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.5,
        color: 'var(--text-body)'
      }
    }, "That\u2019s more than your 2-hour slot \u2014 no problem at all. A quick note helps Priya approve it without asking.")), /*#__PURE__*/React.createElement(Field, {
      label: extra ? 'What kept you longer?' : 'Add a note (optional)'
    }, /*#__PURE__*/React.createElement("textarea", {
      defaultValue: extra ? 'Stayed to clean up after the second group ran late.' : '',
      placeholder: "Anything the coordinator should know\u2026",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 76,
        resize: 'vertical',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.5,
        color: 'var(--text-body)',
        background: 'var(--surface-card)',
        border: extra ? '1px solid var(--gold-600)' : '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '11px 14px'
      }
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Receipt or photo",
      hint: "Only if you spent money \u2014 ingredients, supplies, fuel."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        border: '1px dashed var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 18px',
        cursor: 'pointer',
        background: 'var(--glacier-100)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "paperclip",
      size: 18,
      color: "var(--evening-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, "Add a receipt"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Photo or PDF, up to 10 MB")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderTop: '1px solid var(--glacier-200)',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, "Goes to Priya for approval"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Usually same week."))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md"
    }, "Cancel"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16,
        color: "#fff"
      })
    }, "Submit ", extra ? '3.5' : '2', " hours")));
  }

  // Prompt that appears on the event card once the event has finished.
  function PromptCard() {
    const {
      Card,
      Button,
      Icon,
      Avatar
    } = RC;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: 'hidden',
        border: '1px solid var(--gold-600)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--warning-bg)',
        padding: '8px 20px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 14,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--gold-700)'
      }
    }, "You signed up to help at this one")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, "Priya Shah ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--text-muted)'
      }
    }, "\xB7 Coordinator")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, "Ended yesterday"))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17.5,
        color: 'var(--evening-rink)',
        margin: '0 0 6px'
      }
    }, "Summer Ice Show rehearsal"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--edge-blue)',
        background: 'var(--info-bg)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 12px',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14,
      color: "var(--edge-blue)"
    }), "Sat Jul 26 \xB7 Check-in desk \xB7 2h slot"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingTop: 13,
        borderTop: '1px solid var(--glacier-200)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15,
        color: "#fff"
      })
    }, "Log 2 hours"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Different amount"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "I didn\u2019t make it"))));
  }
  function LogHours({
    state = 'match'
  }) {
    const {
      ClubFeed
    } = window.Web07;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(ClubFeed, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(22,50,79,0.42)'
      }
    })), /*#__PURE__*/React.createElement(LogSheet, {
      state: state
    }));
  }
  window.Web09 = {
    LogHours,
    PromptCard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web09_LogHours.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web10_MyHours.jsx
try { (() => {
// Web 10 â€” Member: my hours. Season ledger against a personal pledge.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function PledgeCard() {
    const {
      Card,
      Icon
    } = RC;
    const {
      ProgressBar
    } = window.HoursData;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "24px 26px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        marginBottom: 12
      }
    }, "Your season"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 40,
        color: 'var(--evening-rink)',
        lineHeight: 1
      }
    }, "13.5"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "of 20 hours pledged"))), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Season ends"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--evening-rink)',
        marginTop: 3
      }
    }, "Dec 20, 2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '16px 0 12px'
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      pct: 67.5,
      height: 10
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, [{
      c: 'var(--edge-blue)',
      l: '11.5h approved'
    }, {
      c: 'var(--gold-600)',
      l: '2h pending review'
    }, {
      c: 'var(--glacier-300)',
      l: '6.5h to go'
    }].map(k => /*#__PURE__*/React.createElement("span", {
      key: k.l,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: k.c
      }
    }), k.l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1px solid var(--glacier-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart-handshake",
      size: 17,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)'
      }
    }, "Three events this month still need volunteers."), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-link)',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, "Find a slot")));
  }
  function LedgerCard() {
    const {
      Card,
      Badge,
      Button,
      Icon
    } = RC;
    const {
      LEDGER
    } = window.HoursData;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "22px 26px 18px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: 0,
        flex: 1
      }
    }, "Your logged hours"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Log hours")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, LEDGER.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r.event + r.date,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        borderTop: '1px solid var(--glacier-200)',
        marginTop: i === 0 ? 8 : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--glacier-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 18,
      color: "var(--evening-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, r.event), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, r.date, " \xB7 ", r.role)), r.status === 'Needs a note' && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Add a note"), /*#__PURE__*/React.createElement(Badge, {
      tone: r.tone,
      dot: r.status === 'Pending'
    }, r.status), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--evening-rink)',
        width: 44,
        textAlign: 'right',
        flexShrink: 0
      }
    }, r.hours, "h")))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        margin: '14px 0 0'
      }
    }, "Hours are approved by a coordinator, usually within the week. \u201CNeeds a note\u201D just means they\u2019d like a little more detail \u2014 nothing is ever rejected outright."));
  }
  function MyHours() {
    const {
      AppHeader
    } = window.WebShell;
    const {
      StatTile
    } = window.HoursData;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: "Lakeside Figure Skating Club",
      userName: "Marta Wolf",
      active: "Hours"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '28px 36px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)',
        margin: '0 0 5px',
        letterSpacing: '-0.01em'
      }
    }, "Your volunteer hours"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Everything you\u2019ve given to Lakeside this season.")), /*#__PURE__*/React.createElement(PledgeCard, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      value: "5",
      label: "Events helped at"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "2.7h",
      label: "Average per event"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "Top 3",
      label: "In the club this season",
      tone: "var(--gold-700)"
    })), /*#__PURE__*/React.createElement(LedgerCard, null))));
  }
  window.Web10 = {
    MyHours
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web10_MyHours.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Web11_ClubHours.jsx
try { (() => {
// Web 11 â€” Coordinator: club hours overview. Per-person progress against pledge.
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function PersonRow({
    f
  }) {
    const {
      Avatar,
      Badge,
      Button,
      Icon
    } = RC;
    const {
      ProgressBar
    } = window.HoursData;
    const pct = f.approved / f.pledge * 100;
    const behind = pct < 40;
    const done = f.approved >= f.pledge;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '15px 0',
        borderTop: '1px solid var(--glacier-200)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: f.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 168,
        flexShrink: 0,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, f.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, f.role)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      pct: pct,
      tone: done ? 'var(--success)' : behind ? 'var(--gold-600)' : 'var(--edge-blue)'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 96,
        textAlign: 'right',
        flexShrink: 0,
        fontSize: 14,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 15.5,
        color: 'var(--evening-rink)'
      }
    }, f.approved), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, " / ", f.pledge, "h")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 92,
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, f.pending > 0 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, f.pending, "h pending") : done ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Complete") : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 96,
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, behind && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "hand-heart",
        size: 15,
        color: "var(--edge-blue)"
      })
    }, "Nudge")));
  }
  function ClubHours() {
    const {
      AppHeader
    } = window.WebShell;
    const {
      FAMILIES,
      StatTile,
      ProgressBar
    } = window.HoursData;
    const {
      Card,
      Button,
      Icon,
      Tabs
    } = RC;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-page)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(AppHeader, {
      clubName: "Lakeside Figure Skating Club",
      userName: "Priya Shah",
      active: "Hours"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '28px 36px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 940,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--evening-rink)',
        margin: '0 0 5px',
        letterSpacing: '-0.01em'
      }
    }, "Club volunteer hours"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Season to date \xB7 every member\u2019s progress against their 20-hour pledge.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16,
        color: "var(--edge-blue)"
      })
    }, "Export season report")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      value: "60.5h",
      label: "Approved this season"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "11.5h",
      label: "Awaiting review",
      tone: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "6 of 6",
      label: "Members logging hours"
    }), /*#__PURE__*/React.createElement(StatTile, {
      value: "50%",
      label: "Of club pledge total"
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "22px 26px 18px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)',
        margin: 0,
        flex: 1
      }
    }, "By member"), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: "all",
      items: [{
        label: 'All',
        value: 'all'
      }, {
        label: 'Behind',
        value: 'behind'
      }, {
        label: 'Complete',
        value: 'done'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, FAMILIES.map(f => /*#__PURE__*/React.createElement(PersonRow, {
      key: f.name,
      f: f
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        display: 'flex',
        gap: 9,
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        margin: '14px 0 0'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "hand-heart",
      size: 16,
      color: "var(--text-muted)",
      style: {
        marginTop: 1,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, "A nudge is a warm private message with the events still needing help \u2014 it never shows anyone else\u2019s totals."))))));
  }
  window.Web11 = {
    ClubHours
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Web11_ClubHours.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebShell.jsx
try { (() => {
// Shared web-app shell for logged-in screens (Web 04, Web 05).
(function () {
  const RC = window.RinkConnectDesignSystem_17ea5d;
  function AppHeader({
    clubName,
    userName,
    active = 'Home'
  }) {
    const {
      Avatar
    } = RC;
    const links = ['Home', 'Events', 'Hours', 'Members'];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 36px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.svg",
      alt: "",
      style: {
        height: 30,
        borderRadius: 8
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--evening-rink)'
      }
    }, "RinkConnect")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 26,
        background: 'var(--glacier-300)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, clubName), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 6,
        marginLeft: 'auto'
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14.5,
        textDecoration: 'none',
        padding: '7px 15px',
        borderRadius: 'var(--radius-pill)',
        color: l === active ? 'var(--edge-blue)' : 'var(--text-muted)',
        background: l === active ? 'var(--glacier-200)' : 'transparent'
      }
    }, l))), /*#__PURE__*/React.createElement(Avatar, {
      name: userName,
      size: "sm",
      ring: true
    }));
  }
  window.WebShell = {
    AppHeader
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> â€” user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default â€” write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar â€”
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload â€”
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse â€” set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` â€” use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there â€” double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, â€¦): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' â€”
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed â€” a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only â€” anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper â€” absolutely positioned, a grid cell, a fixed
 * frame â€” and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against â€” size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through â€” pointer-events: none on scrims/text plates, re-enabled
 * on interactive children â€” so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require â€” end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts â€” this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // â€” Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex â€” strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2Ã— a ~600px slot in a 1920-wide deck â€” retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still â€” better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // â”€â”€ Shared sidecar store â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved â€” otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk â€” inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead â€” content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them â€”
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value â€” write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // â”€â”€ Image downscale â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2Ã— the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10Ã— smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // â”€â”€ Custom element â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box â€” a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome â€”
  // empty-state icon/caption (currentColor) and the dashed ring â€” must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) â€” so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it â€” later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display â€” _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) â€” anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image â€” no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome â€”
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // â€” attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute â€” rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key â€” so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here â€” a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // â€” degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it â€” a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable â€” a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl â€” the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // â€” without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire â€”
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this â€” setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM â€” bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable â€” without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load â€” re-apply so the cover
      // baseline is computed from real dimensions, not the 100%Ã—100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable â€” any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) s