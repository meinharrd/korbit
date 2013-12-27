function calcTotal() {
  $(".hook-size, .hook-price").on("input", function() {
    var e = $(".hook-size").val(),
    t = $(".hook-price").val(),
    n = parseFloat($(".hook-size-after").data("commission")),
    i = Math.round(e * t);
    $(".hook-fee").html(Math.abs(e * n).toFixed(8).replace(/0+$/, "") + " BTC"),
    $(".hook-size-after").html((e * (1 + n)).toFixed(8).replace(/0+$/, "") + " BTC"),
    !isNaN(t) && !isNaN(e) && t > 0 && e > 0 && $(".hook-price-total").val(i)
  }),
  $(".hook-price-total").on("input", function() {
    var e = $(".hook-price-total").val(),
    t = $(".hook-price").val(),
    n = (e / t).toFixed(8).replace(/0+$/, "").replace(/\.$/, ""),
    i = parseFloat($(".hook-size-after").data("commission")),
    o = Math.abs(n * i).toFixed(8).replace(/0+$/, "") + " BTC",
    r = (n * (1 + i)).toFixed(8).replace(/0+$/, "") + " BTC";
    $(".hook-fee").html(o),
    $(".hook-size-after").html(r),
    !isNaN(t) && t > 0 && !isNaN(e) && $(".hook-size").val(n)
  }),
  $(".hook-withdrawal").on("input", function() {
    var e = $(".hook-withdrawal").val(),
    t = 2e-4,
    n = ((e * SATOSHI - t * SATOSHI) / SATOSHI).toFixed(8).replace(/0+$/, ""); ! isNaN(e) && e > 0 && $(".hook-withdrawal-after").html(n + " BTC")
  })
}
function krwFormat(e) {
  return addCommas(Math.round(e))
}
function addCommas(e) {
  e += "";
  for (var t = e.split("."), n = t[0], i = t.length > 1 ? "." + t[1] : "", o = /(\d+)(\d{3})/; o.test(n);) n = n.replace(o, "$1,$2");
  return n + i
}
function krwDisplay(e, t, n, i, o) {
  var r = (Math.round(t * e), krwFormat(t * e)),
  s = krwFormat(n * e),
  a = krwFormat(i * e),
  c = krwFormat(o * e);
  isNaN(t) || ($(".usdLast").html(t), $(".krwLast").html(r), $(".krwHigh").html(s), $(".krwLow").html(a), $(".krwVwap").html(c))
}
function ticker() {
  var e = parseFloat($(".usdkrw").data("usdkrw")),
  t = parseFloat($(".usdkrw").data("usdlast")),
  n = parseFloat($(".usdkrw").data("usdhigh")),
  i = parseFloat($(".usdkrw").data("usdlow")),
  o = parseFloat($(".usdkrw").data("usdvwap"));
  krwDisplay(e, t, n, i, o)
} !
function(e, t) {
  function n(e) {
    var t = e.length,
    n = ut.type(e);
    return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  function i(e) {
    var t = St[e] = {};
    return ut.each(e.match(ft) || [], function(e, n) {
      t[n] = !0
    }),
    t
  }
  function o(e, n, i, o) {
    if (ut.acceptData(e)) {
      var r, s, a = ut.expando,
      c = e.nodeType,
      l = c ? ut.cache : e,
      u = c ? e[a] : e[a] && a;
      if (u && l[u] && (o || l[u].data) || i !== t || "string" != typeof n) return u || (u = c ? e[a] = tt.pop() || ut.guid++:a),
      l[u] || (l[u] = c ? {} : {
        toJSON: ut.noop
      }),
      ("object" == typeof n || "function" == typeof n) && (o ? l[u] = ut.extend(l[u], n) : l[u].data = ut.extend(l[u].data, n)),
      s = l[u],
      o || (s.data || (s.data = {}), s = s.data),
      i !== t && (s[ut.camelCase(n)] = i),
      "string" == typeof n ? (r = s[n], null == r && (r = s[ut.camelCase(n)])) : r = s,
      r
    }
  }
  function r(e, t, n) {
    if (ut.acceptData(e)) {
      var i, o, r = e.nodeType,
      s = r ? ut.cache : e,
      c = r ? e[ut.expando] : ut.expando;
      if (s[c]) {
        if (t && (i = n ? s[c] : s[c].data)) {
          ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in i ? t = [t] : (t = ut.camelCase(t), t = t in i ? [t] : t.split(" ")),
          o = t.length;
          for (; o--;) delete i[t[o]];
          if (n ? !a(i) : !ut.isEmptyObject(i)) return
        } (n || (delete s[c].data, a(s[c]))) && (r ? ut.cleanData([e], !0) : ut.support.deleteExpando || s != s.window ? delete s[c] : s[c] = null)
      }
    }
  }
  function s(e, n, i) {
    if (i === t && 1 === e.nodeType) {
      var o = "data-" + n.replace($t, "-$1").toLowerCase();
      if (i = e.getAttribute(o), "string" == typeof i) {
        try {
          i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Et.test(i) ? ut.parseJSON(i) : i
        } catch(r) {}
        ut.data(e, n, i)
      } else i = t
    }
    return i
  }
  function a(e) {
    var t;
    for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }
  function c() {
    return !0
  }
  function l() {
    return !1
  }
  function u() {
    try {
      return G.activeElement
    } catch(e) {}
  }
  function p(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e
  }
  function f(e, t, n) {
    if (ut.isFunction(t)) return ut.grep(e, function(e, i) {
      return !! t.call(e, i, e) !== n
    });
    if (t.nodeType) return ut.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (Bt.test(t)) return ut.filter(t, e, n);
      t = ut.filter(t, e)
    }
    return ut.grep(e, function(e) {
      return ut.inArray(e, t) >= 0 !== n
    })
  }
  function d(e) {
    var t = Ut.split("|"),
    n = e.createDocumentFragment();
    if (n.createElement) for (; t.length;) n.createElement(t.pop());
    return n
  }
  function h(e, t) {
    return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function m(e) {
    return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type,
    e
  }
  function g(e) {
    var t = rn.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"),
    e
  }
  function y(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) ut._data(n, "globalEval", !t || ut._data(t[i], "globalEval"))
  }
  function v(e, t) {
    if (1 === t.nodeType && ut.hasData(e)) {
      var n, i, o, r = ut._data(e),
      s = ut._data(t, r),
      a = r.events;
      if (a) {
        delete s.handle,
        s.events = {};
        for (n in a) for (i = 0, o = a[n].length; o > i; i++) ut.event.add(t, n, a[n][i])
      }
      s.data && (s.data = ut.extend({},
      s.data))
    }
  }
  function b(e, t) {
    var n, i, o;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
        o = ut._data(t);
        for (i in o.events) ut.removeEvent(t, i, o.handle);
        t.removeAttribute(ut.expando)
      }
      "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }
  function w(e, n) {
    var i, o, r = 0,
    s = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], i = e.childNodes || e; null != (o = i[r]); r++) ! n || ut.nodeName(o, n) ? s.push(o) : ut.merge(s, w(o, n));
    return n === t || n && ut.nodeName(e, n) ? ut.merge([e], s) : s
  }
  function x(e) {
    tn.test(e.type) && (e.defaultChecked = e.checked)
  }
  function k(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Sn.length; o--;) if (t = Sn[o] + n, t in e) return t;
    return i
  }
  function T(e, t) {
    return e = t || e,
    "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
  }
  function C(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s],
    i.style && (r[s] = ut._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (r[s] = ut._data(i, "olddisplay", N(i.nodeName)))) : r[s] || (o = T(i), (n && "none" !== n || !o) && ut._data(i, "olddisplay", o ? n : ut.css(i, "display"))));
    for (s = 0; a > s; s++) i = e[s],
    i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
    return e
  }
  function S(e, t, n) {
    var i = vn.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }
  function E(e, t, n, i, o) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += ut.css(e, n + Cn[r], !0, o)),
    i ? ("content" === n && (s -= ut.css(e, "padding" + Cn[r], !0, o)), "margin" !== n && (s -= ut.css(e, "border" + Cn[r] + "Width", !0, o))) : (s += ut.css(e, "padding" + Cn[r], !0, o), "padding" !== n && (s += ut.css(e, "border" + Cn[r] + "Width", !0, o)));
    return s
  }
  function $(e, t, n) {
    var i = !0,
    o = "width" === t ? e.offsetWidth : e.offsetHeight,
    r = pn(e),
    s = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r);
    if (0 >= o || null == o) {
      if (o = fn(e, t, r), (0 > o || null == o) && (o = e.style[t]), bn.test(o)) return o;
      i = s && (ut.support.boxSizingReliable || o === e.style[t]),
      o = parseFloat(o) || 0
    }
    return o + E(e, t, n || (s ? "border" : "content"), i, r) + "px"
  }
  function N(e) {
    var t = G,
    n = xn[e];
    return n || (n = j(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), un.detach()), xn[e] = n),
    n
  }
  function j(e, t) {
    var n = ut(t.createElement(e)).appendTo(t.body),
    i = ut.css(n[0], "display");
    return n.remove(),
    i
  }
  function A(e, t, n, i) {
    var o;
    if (ut.isArray(t)) ut.each(t, function(t, o) {
      n || $n.test(e) ? i(e, o) : A(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
    });
    else if (n || "object" !== ut.type(t)) i(e, t);
    else for (o in t) A(e + "[" + o + "]", t[o], n, i)
  }
  function _(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, o = 0,
      r = t.toLowerCase().match(ft) || [];
      if (ut.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }
  function D(e, t, n, i) {
    function o(a) {
      var c;
      return r[a] = !0,
      ut.each(e[a] || [], function(e, a) {
        var l = a(t, n, i);
        return "string" != typeof l || s || r[l] ? s ? !(c = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
      }),
      c
    }
    var r = {},
    s = e === zn;
    return o(t.dataTypes[0]) || !r["*"] && o("*")
  }
  function L(e, n) {
    var i, o, r = ut.ajaxSettings.flatOptions || {};
    for (o in n) n[o] !== t && ((r[o] ? e : i || (i = {}))[o] = n[o]);
    return i && ut.extend(!0, e, i),
    e
  }
  function O(e, n, i) {
    for (var o, r, s, a, c = e.contents, l = e.dataTypes;
    "*" === l[0];) l.shift(),
    r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
    if (r) for (a in c) if (c[a] && c[a].test(r)) {
      l.unshift(a);
      break
    }
    if (l[0] in i) s = l[0];
    else {
      for (a in i) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          s = a;
          break
        }
        o || (o = a)
      }
      s = s || o
    }
    return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
  }
  function W(e, t, n, i) {
    var o, r, s, a, c, l = {},
    u = e.dataTypes.slice();
    if (u[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift()) if ("*" === r) r = c;
    else if ("*" !== c && c !== r) {
      if (s = l[c + " " + r] || l["* " + r], !s) for (o in l) if (a = o.split(" "), a[1] === r && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
        s === !0 ? s = l[o] : l[o] !== !0 && (r = a[0], u.unshift(a[1]));
        break
      }
      if (s !== !0) if (s && e["throws"]) t = s(t);
      else try {
        t = s(t)
      } catch(p) {
        return {
          state: "parsererror",
          error: s ? p : "No conversion from " + c + " to " + r
        }
      }
    }
    return {
      state: "success",
      data: t
    }
  }
  function F() {
    try {
      return new e.XMLHttpRequest
    } catch(t) {}
  }
  function H() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch(t) {}
  }
  function I() {
    return setTimeout(function() {
      Zn = t
    }),
    Zn = ut.now()
  }
  function P(e, t, n) {
    for (var i, o = (ri[t] || []).concat(ri["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, t, e)) return i
  }
  function q(e, t, n) {
    var i, o, r = 0,
    s = oi.length,
    a = ut.Deferred().always(function() {
      delete c.elem
    }),
    c = function() {
      if (o) return !1;
      for (var t = Zn || I(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, s = 0, c = l.tweens.length; c > s; s++) l.tweens[s].run(r);
      return a.notifyWith(e, [l, r, n]),
      1 > r && c ? n : (a.resolveWith(e, [l]), !1)
    },
    l = a.promise({
      elem: e,
      props: ut.extend({},
      t),
      opts: ut.extend(!0, {
        specialEasing: {}
      },
      n),
      originalProperties: t,
      originalOptions: n,
      startTime: Zn || I(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var i = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(i),
        i
      },
      stop: function(t) {
        var n = 0,
        i = t ? l.tweens.length : 0;
        if (o) return this;
        for (o = !0; i > n; n++) l.tweens[n].run(1);
        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
        this
      }
    }),
    u = l.props;
    for (M(u, l.opts.specialEasing); s > r; r++) if (i = oi[r].call(l, e, u, l.opts)) return i;
    return ut.map(u, P, l),
    ut.isFunction(l.opts.start) && l.opts.start.call(e, l),
    ut.fx.timer(ut.extend(c, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })),
    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }
  function M(e, t) {
    var n, i, o, r, s;
    for (n in e) if (i = ut.camelCase(n), o = t[i], r = e[n], ut.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = ut.cssHooks[i], s && "expand" in s) {
      r = s.expand(r),
      delete e[i];
      for (n in r) n in e || (e[n] = r[n], t[n] = o)
    } else t[i] = o
  }
  function B(e, t, n) {
    var i, o, r, s, a, c, l = this,
    u = {},
    p = e.style,
    f = e.nodeType && T(e),
    d = ut._data(e, "fxshow");
    n.queue || (a = ut._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function() {
      a.unqueued || c()
    }), a.unqueued++, l.always(function() {
      l.always(function() {
        a.unqueued--,
        ut.queue(e, "fx").length || a.empty.fire()
      })
    })),
    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
    n.overflow && (p.overflow = "hidden", ut.support.shrinkWrapBlocks || l.always(function() {
      p.overflow = n.overflow[0],
      p.overflowX = n.overflow[1],
      p.overflowY = n.overflow[2]
    }));
    for (i in t) if (o = t[i], ti.exec(o)) {
      if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) continue;
      u[i] = d && d[i] || ut.style(e, i)
    }
    if (!ut.isEmptyObject(u)) {
      d ? "hidden" in d && (f = d.hidden) : d = ut._data(e, "fxshow", {}),
      r && (d.hidden = !f),
      f ? ut(e).show() : l.done(function() {
        ut(e).hide()
      }),
      l.done(function() {
        var t;
        ut._removeData(e, "fxshow");
        for (t in u) ut.style(e, t, u[t])
      });
      for (i in u) s = P(f ? d[i] : 0, i, l),
      i in d || (d[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }
  }
  function R(e, t, n, i, o) {
    return new R.prototype.init(e, t, n, i, o)
  }
  function z(e, t) {
    var n, i = {
      height: e
    },
    o = 0;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Cn[o],
    i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e),
    i
  }
  function X(e) {
    return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var U, J, V = typeof t,
  Q = e.location,
  G = e.document,
  K = G.documentElement,
  Y = e.jQuery,
  Z = e.$,
  et = {},
  tt = [],
  nt = "1.10.2",
  it = tt.concat,
  ot = tt.push,
  rt = tt.slice,
  st = tt.indexOf,
  at = et.toString,
  ct = et.hasOwnProperty,
  lt = nt.trim,
  ut = function(e, t) {
    return new ut.fn.init(e, t, J)
  },
  pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  ft = /\S+/g,
  dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  gt = /^[\],:{}\s]*$/,
  yt = /(?:^|:|,)(?:\s*\[)+/g,
  vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
  wt = /^-ms-/,
  xt = /-([\da-z])/gi,
  kt = function(e, t) {
    return t.toUpperCase()
  },
  Tt = function(e) {
    (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Ct(), ut.ready())
  },
  Ct = function() {
    G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Tt, !1), e.removeEventListener("load", Tt, !1)) : (G.detachEvent("onreadystatechange", Tt), e.detachEvent("onload", Tt))
  };
  ut.fn = ut.prototype = {
    jquery: nt,
    constructor: ut,
    init: function(e, n, i) {
      var o, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
        if (o[1]) {
          if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), mt.test(o[1]) && ut.isPlainObject(n)) for (o in n) ut.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
          return this
        }
        if (r = G.getElementById(o[2]), r && r.parentNode) {
          if (r.id !== o[2]) return i.find(e);
          this.length = 1,
          this[0] = r
        }
        return this.context = G,
        this.selector = e,
        this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
    },
    selector: "",
    length: 0,
    toArray: function() {
      return rt.call(this)
    },
    get: function(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    },
    pushStack: function(e) {
      var t = ut.merge(this.constructor(), e);
      return t.prevObject = this,
      t.context = this.context,
      t
    },
    each: function(e, t) {
      return ut.each(this, e, t)
    },
    ready: function(e) {
      return ut.ready.promise().done(e),
      this
    },
    slice: function() {
      return this.pushStack(rt.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
      n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    map: function(e) {
      return this.pushStack(ut.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: ot,
    sort: [].sort,
    splice: [].splice
  },
  ut.fn.init.prototype = ut.fn,
  ut.extend = ut.fn.extend = function() {
    var e, n, i, o, r, s, a = arguments[0] || {},
    c = 1,
    l = arguments.length,
    u = !1;
    for ("boolean" == typeof a && (u = a, a = arguments[1] || {},
    c = 2), "object" == typeof a || ut.isFunction(a) || (a = {}), l === c && (a = this, --c); l > c; c++) if (null != (r = arguments[c])) for (o in r) e = a[o],
    i = r[o],
    a !== i && (u && i && (ut.isPlainObject(i) || (n = ut.isArray(i))) ? (n ? (n = !1, s = e && ut.isArray(e) ? e : []) : s = e && ut.isPlainObject(e) ? e : {},
    a[o] = ut.extend(u, s, i)) : i !== t && (a[o] = i));
    return a
  },
  ut.extend({
    expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
    noConflict: function(t) {
      return e.$ === ut && (e.$ = Z),
      t && e.jQuery === ut && (e.jQuery = Y),
      ut
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? ut.readyWait++:ut.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--ut.readyWait : !ut.isReady) {
        if (!G.body) return setTimeout(ut.ready);
        ut.isReady = !0,
        e !== !0 && --ut.readyWait > 0 || (U.resolveWith(G, [ut]), ut.fn.trigger && ut(G).trigger("ready").off("ready"))
      }
    },
    isFunction: function(e) {
      return "function" === ut.type(e)
    },
    isArray: Array.isArray ||
    function(e) {
      return "array" === ut.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function(e) {
      return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
    },
    isPlainObject: function(e) {
      var n;
      if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
      try {
        if (e.constructor && !ct.call(e, "constructor") && !ct.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch(i) {
        return !1
      }
      if (ut.support.ownLast) for (n in e) return ct.call(e, n);
      for (n in e);
      return n === t || ct.call(e, n)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    error: function(e) {
      throw new Error(e)
    },
    parseHTML: function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1),
      t = t || G;
      var i = mt.exec(e),
      o = !n && [];
      return i ? [t.createElement(i[1])] : (i = ut.buildFragment([e], t, o), o && ut(o).remove(), ut.merge([], i.childNodes))
    },
    parseJSON: function(t) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t & >.test(t.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
    },
    parseXML: function(n) {
      var i, o;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
      } catch(r) {
        i = t
      }
      return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n),
      i
    },
    noop: function() {},
    globalEval: function(t) {
      t && ut.trim(t) && (e.execScript ||
      function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(wt, "ms-").replace(xt, kt)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, i) {
      var o, r = 0,
      s = e.length,
      a = n(e);
      if (i) {
        if (a) for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
        else for (r in e) if (o = t.apply(e[r], i), o === !1) break
      } else if (a) for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
      else for (r in e) if (o = t.call(e[r], r, e[r]), o === !1) break;
      return e
    },
    trim: lt && !lt.call("﻿ ") ?
    function(e) {
      return null == e ? "" : lt.call(e)
    } : function(e) {
      return null == e ? "" : (e + "").replace(dt, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? ut.merge(i, "string" == typeof e ? [e] : e) : ot.call(i, e)),
      i
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (st) return st.call(t, e, n);
        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, n) {
      var i = n.length,
      o = e.length,
      r = 0;
      if ("number" == typeof i) for (; i > r; r++) e[o++] = n[r];
      else for (; n[r] !== t;) e[o++] = n[r++];
      return e.length = o,
      e
    },
    grep: function(e, t, n) {
      var i, o = [],
      r = 0,
      s = e.length;
      for (n = !!n; s > r; r++) i = !!t(e[r], r),
      n !== i && o.push(e[r]);
      return o
    },
    map: function(e, t, i) {
      var o, r = 0,
      s = e.length,
      a = n(e),
      c = [];
      if (a) for (; s > r; r++) o = t(e[r], r, i),
      null != o && (c[c.length] = o);
      else for (r in e) o = t(e[r], r, i),
      null != o && (c[c.length] = o);
      return it.apply([], c)
    },
    guid: 1,
    proxy: function(e, n) {
      var i, o, r;
      return "string" == typeof n && (r = e[n], n = e, e = r),
      ut.isFunction(e) ? (i = rt.call(arguments, 2), o = function() {
        return e.apply(n || this, i.concat(rt.call(arguments)))
      },
      o.guid = e.guid = e.guid || ut.guid++, o) : t
    },
    access: function(e, n, i, o, r, s, a) {
      var c = 0,
      l = e.length,
      u = null == i;
      if ("object" === ut.type(i)) {
        r = !0;
        for (c in i) ut.access(e, n, c, i[c], !0, s, a)
      } else if (o !== t && (r = !0, ut.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
        return u.call(ut(e), n)
      })), n)) for (; l > c; c++) n(e[c], i, a ? o : o.call(e[c], c, n(e[c], i)));
      return r ? e : u ? n.call(e) : l ? n(e[0], i) : s
    },
    now: function() {
      return (new Date).getTime()
    },
    swap: function(e, t, n, i) {
      var o, r, s = {};
      for (r in t) s[r] = e.style[r],
      e.style[r] = t[r];
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o
    }
  }),
  ut.ready.promise = function(t) {
    if (!U) if (U = ut.Deferred(), "complete" === G.readyState) setTimeout(ut.ready);
    else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Tt, !1),
    e.addEventListener("load", Tt, !1);
    else {
      G.attachEvent("onreadystatechange", Tt),
      e.attachEvent("onload", Tt);
      var n = !1;
      try {
        n = null == e.frameElement && G.documentElement
      } catch(i) {}
      n && n.doScroll && !
      function o() {
        if (!ut.isReady) {
          try {
            n.doScroll("left")
          } catch(e) {
            return setTimeout(o, 50)
          }
          Ct(),
          ut.ready()
        }
      } ()
    }
    return U.promise(t)
  },
  ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    et["[object " + t + "]"] = t.toLowerCase()
  }),
  J = ut(G),
  function(e, t) {
    function n(e, t, n, i) {
      var o, r, s, a, c, l, u, p, h, m;
      if ((t ? t.ownerDocument || t : q) !== D && _(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (a = t.nodeType) && 9 !== a) return[];
      if (O && !i) {
        if (o = bt.exec(e)) if (s = o[1]) {
          if (9 === a) {
            if (r = t.getElementById(s), !r || !r.parentNode) return n;
            if (r.id === s) return n.push(r),
            n
          } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && I(t, r) && r.id === s) return n.push(r),
          n
        } else {
          if (o[2]) return et.apply(n, t.getElementsByTagName(e)),
          n;
          if ((s = o[3]) && T.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)),
          n
        }
        if (T.qsa && (!W || !W.test(e))) {
          if (p = u = P, h = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = f(e), (u = t.getAttribute("id")) ? p = u.replace(kt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + d(l[c]);
            h = dt.test(e) && t.parentNode || t,
            m = l.join(",")
          }
          if (m) try {
            return et.apply(n, h.querySelectorAll(m)),
            n
          } catch(g) {} finally {
            u || t.removeAttribute("id")
          }
        }
      }
      return x(e.replace(lt, "$1"), t, n, i)
    }
    function i() {
      function e(n, i) {
        return t.push(n += " ") > S.cacheLength && delete e[t.shift()],
        e[n] = i
      }
      var t = [];
      return e
    }
    function o(e) {
      return e[P] = !0,
      e
    }
    function r(e) {
      var t = D.createElement("div");
      try {
        return !! e(t)
      } catch(n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
        t = null
      }
    }
    function s(e, t) {
      for (var n = e.split("|"), i = e.length; i--;) S.attrHandle[n[i]] = t
    }
    function a(e, t) {
      var n = t && e,
      i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }
    function c(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }
    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }
    function u(e) {
      return o(function(t) {
        return t = +t,
        o(function(n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
        })
      })
    }
    function p() {}
    function f(e, t) {
      var i, o, r, s, a, c, l, u = z[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (a = e, c = [], l = S.preFilter; a;) {
        (!i || (o = pt.exec(a))) && (o && (a = a.slice(o[0].length) || a), c.push(r = [])),
        i = !1,
        (o = ft.exec(a)) && (i = o.shift(), r.push({
          value: i,
          type: o[0].replace(lt, " ")
        }), a = a.slice(i.length));
        for (s in S.filter) ! (o = yt[s].exec(a)) || l[s] && !(o = l[s](o)) || (i = o.shift(), r.push({
          value: i,
          type: s,
          matches: o
        }), a = a.slice(i.length));
        if (!i) break
      }
      return t ? a.length : a ? n.error(e) : z(e, c).slice(0)
    }
    function d(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i
    }
    function h(e, t, n) {
      var i = t.dir,
      o = n && "parentNode" === i,
      r = B++;
      return t.first ?
      function(t, n, r) {
        for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
      } : function(t, n, s) {
        var a, c, l, u = M + " " + r;
        if (s) {
          for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
        } else for (; t = t[i];) if (1 === t.nodeType || o) if (l = t[P] || (t[P] = {}), (c = l[i]) && c[0] === u) {
          if ((a = c[1]) === !0 || a === C) return a === !0
        } else if (c = l[i] = [u], c[1] = e(t, n, s) || C, c[1] === !0) return !0
      }
    }
    function m(e) {
      return e.length > 1 ?
      function(t, n, i) {
        for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
        return !0
      } : e[0]
    }
    function g(e, t, n, i, o) {
      for (var r, s = [], a = 0, c = e.length, l = null != t; c > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), l && t.push(a));
      return s
    }
    function y(e, t, n, i, r, s) {
      return i && !i[P] && (i = y(i)),
      r && !r[P] && (r = y(r, s)),
      o(function(o, s, a, c) {
        var l, u, p, f = [],
        d = [],
        h = s.length,
        m = o || w(t || "*", a.nodeType ? [a] : a, []),
        y = !e || !o && t ? m : g(m, f, e, a, c),
        v = n ? r || (o ? e : h || i) ? [] : s : y;
        if (n && n(y, v, a, c), i) for (l = g(v, d), i(l, [], a, c), u = l.length; u--;)(p = l[u]) && (v[d[u]] = !(y[d[u]] = p));
        if (o) {
          if (r || e) {
            if (r) {
              for (l = [], u = v.length; u--;)(p = v[u]) && l.push(y[u] = p);
              r(null, v = [], l, c)
            }
            for (u = v.length; u--;)(p = v[u]) && (l = r ? nt.call(o, p) : f[u]) > -1 && (o[l] = !(s[l] = p))
          }
        } else v = g(v === s ? v.splice(h, v.length) : v),
        r ? r(null, s, v, c) : et.apply(s, v)
      })
    }
    function v(e) {
      for (var t, n, i, o = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], a = r ? 1 : 0, c = h(function(e) {
        return e === t
      },
      s, !0), l = h(function(e) {
        return nt.call(t, e) > -1
      },
      s, !0), u = [function(e, n, i) {
        return !r && (i || n !== j) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i))
      }]; o > a; a++) if (n = S.relative[e[a].type]) u = [h(m(u), n)];
      else {
        if (n = S.filter[e[a].type].apply(null, e[a].matches), n[P]) {
          for (i = ++a; o > i && !S.relative[e[i].type]; i++);
          return y(a > 1 && m(u), a > 1 && d(e.slice(0, a - 1).concat({
            value: " " === e[a - 2].type ? "*" : ""
          })).replace(lt, "$1"), n, i > a && v(e.slice(a, i)), o > i && v(e = e.slice(i)), o > i && d(e))
        }
        u.push(n)
      }
      return m(u)
    }
    function b(e, t) {
      var i = 0,
      r = t.length > 0,
      s = e.length > 0,
      a = function(o, a, c, l, u) {
        var p, f, d, h = [],
        m = 0,
        y = "0",
        v = o && [],
        b = null != u,
        w = j,
        x = o || s && S.find.TAG("*", u && a.parentNode || a),
        k = M += null == w ? 1 : Math.random() || .1;
        for (b && (j = a !== D && a, C = i); null != (p = x[y]); y++) {
          if (s && p) {
            for (f = 0; d = e[f++];) if (d(p, a, c)) {
              l.push(p);
              break
            }
            b && (M = k, C = ++i)
          }
          r && ((p = !d && p) && m--, o && v.push(p))
        }
        if (m += y, r && y !== m) {
          for (f = 0; d = t[f++];) d(v, h, a, c);
          if (o) {
            if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = Y.call(l));
            h = g(h)
          }
          et.apply(l, h),
          b && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(l)
        }
        return b && (M = k, j = w),
        v
      };
      return r ? o(a) : a
    }
    function w(e, t, i) {
      for (var o = 0, r = t.length; r > o; o++) n(e, t[o], i);
      return i
    }
    function x(e, t, n, i) {
      var o, r, s, a, c, l = f(e);
      if (!i && 1 === l.length) {
        if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === t.nodeType && O && S.relative[r[1].type]) {
          if (t = (S.find.ID(s.matches[0].replace(Tt, Ct), t) || [])[0], !t) return n;
          e = e.slice(r.shift().value.length)
        }
        for (o = yt.needsContext.test(e) ? 0 : r.length; o--&&(s = r[o], !S.relative[a = s.type]);) if ((c = S.find[a]) && (i = c(s.matches[0].replace(Tt, Ct), dt.test(r[0].type) && t.parentNode || t))) {
          if (r.splice(o, 1), e = i.length && d(r), !e) return et.apply(n, i),
          n;
          break
        }
      }
      return N(e, l)(i, t, !O, n, dt.test(e)),
      n
    }
    var k, T, C, S, E, $, N, j, A, _, D, L, O, W, F, H, I, P = "sizzle" + -new Date,
    q = e.document,
    M = 0,
    B = 0,
    R = i(),
    z = i(),
    X = i(),
    U = !1,
    J = function(e, t) {
      return e === t ? (U = !0, 0) : 0
    },
    V = typeof t,
    Q = 1 << 31,
    G = {}.hasOwnProperty,
    K = [],
    Y = K.pop,
    Z = K.push,
    et = K.push,
    tt = K.slice,
    nt = K.indexOf ||
    function(e) {
      for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
      return -1
    },
    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    ot = "[\\x20\\t\\r\\n\\f]",
    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    st = rt.replace("w", "w#"),
    at = "\\[" + ot + "*(" + rt + ")" + ot + "*(?:([*^$|!~]?=)" + ot + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + ot + "*\\]",
    ct = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
    lt = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
    pt = new RegExp("^" + ot + "*," + ot + "*"),
    ft = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
    dt = new RegExp(ot + "*[+~]"),
    ht = new RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
    mt = new RegExp(ct),
    gt = new RegExp("^" + st + "$"),
    yt = {
      ID: new RegExp("^#(" + rt + ")"),
      CLASS: new RegExp("^\\.(" + rt + ")"),
      TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + at),
      PSEUDO: new RegExp("^" + ct),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + it + ")$", "i"),
      needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
    },
    vt = /^[^{]+\{\s*\[native \w/,
    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    wt = /^(?:input|select|textarea|button)$/i,
    xt = /^h\d$/i,
    kt = /'|\\/g,
    Tt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
    Ct = function(e, t, n) {
      var i = "0x" + t - 65536;
      return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    };
    try {
      et.apply(K = tt.call(q.childNodes), q.childNodes),
      K[q.childNodes.length].nodeType
    } catch(St) {
      et = {
        apply: K.length ?
        function(e, t) {
          Z.apply(e, tt.call(t))
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    $ = n.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    },
    T = n.support = {},
    _ = n.setDocument = function(e) {
      var t = e ? e.ownerDocument || e : q,
      n = t.defaultView;
      return t !== D && 9 === t.nodeType && t.documentElement ? (D = t, L = t.documentElement, O = !$(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
        _()
      }), T.attributes = r(function(e) {
        return e.className = "i",
        !e.getAttribute("className")
      }), T.getElementsByTagName = r(function(e) {
        return e.appendChild(t.createComment("")),
        !e.getElementsByTagName("*").length
      }), T.getElementsByClassName = r(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
        e.firstChild.className = "i",
        2 === e.getElementsByClassName("i").length
      }), T.getById = r(function(e) {
        return L.appendChild(e).id = P,
        !t.getElementsByName || !t.getElementsByName(P).length
      }), T.getById ? (S.find.ID = function(e, t) {
        if (typeof t.getElementById !== V && O) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      },
      S.filter.ID = function(e) {
        var t = e.replace(Tt, Ct);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete S.find.ID, S.filter.ID = function(e) {
        var t = e.replace(Tt, Ct);
        return function(e) {
          var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), S.find.TAG = T.getElementsByTagName ?
      function(e, t) {
        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
      } : function(e, t) {
        var n, i = [],
        o = 0,
        r = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = r[o++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return r
      },
      S.find.CLASS = T.getElementsByClassName &&
      function(e, t) {
        return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
      },
      F = [], W = [], (T.qsa = vt.test(t.querySelectorAll)) && (r(function(e) {
        e.innerHTML = "<select><option selected=''></option></select>",
        e.querySelectorAll("[selected]").length || W.push("\\[" + ot + "*(?:value|" + it + ")"),
        e.querySelectorAll(":checked").length || W.push(":checked")
      }), r(function(e) {
        var n = t.createElement("input");
        n.setAttribute("type", "hidden"),
        e.appendChild(n).setAttribute("t", ""),
        e.querySelectorAll("[t^='']").length && W.push("[*^$]=" + ot + "*(?:''|\"\")"),
        e.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"),
        e.querySelectorAll("*,:x"),
        W.push(",.*:")
      })), (T.matchesSelector = vt.test(H = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
        T.disconnectedMatch = H.call(e, "div"),
        H.call(e, "[s!='']:x"),
        F.push("!=", ct)
      }), W = W.length && new RegExp(W.join("|")), F = F.length && new RegExp(F.join("|")), I = vt.test(L.contains) || L.compareDocumentPosition ?
      function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
        i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function(e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      },
      J = L.compareDocumentPosition ?
      function(e, n) {
        if (e === n) return U = !0,
        0;
        var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
        return i ? 1 & i || !T.sortDetached && n.compareDocumentPosition(e) === i ? e === t || I(q, e) ? -1 : n === t || I(q, n) ? 1 : A ? nt.call(A, e) - nt.call(A, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
      } : function(e, n) {
        var i, o = 0,
        r = e.parentNode,
        s = n.parentNode,
        c = [e],
        l = [n];
        if (e === n) return U = !0,
        0;
        if (!r || !s) return e === t ? -1 : n === t ? 1 : r ? -1 : s ? 1 : A ? nt.call(A, e) - nt.call(A, n) : 0;
        if (r === s) return a(e, n);
        for (i = e; i = i.parentNode;) c.unshift(i);
        for (i = n; i = i.parentNode;) l.unshift(i);
        for (; c[o] === l[o];) o++;
        return o ? a(c[o], l[o]) : c[o] === q ? -1 : l[o] === q ? 1 : 0
      },
      t) : D
    },
    n.matches = function(e, t) {
      return n(e, null, null, t)
    },
    n.matchesSelector = function(e, t) {
      if ((e.ownerDocument || e) !== D && _(e), t = t.replace(ht, "='$1']"), !(!T.matchesSelector || !O || F && F.test(t) || W && W.test(t))) try {
        var i = H.call(e, t);
        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch(o) {}
      return n(t, D, null, [e]).length > 0
    },
    n.contains = function(e, t) {
      return (e.ownerDocument || e) !== D && _(e),
      I(e, t)
    },
    n.attr = function(e, n) {
      (e.ownerDocument || e) !== D && _(e);
      var i = S.attrHandle[n.toLowerCase()],
      o = i && G.call(S.attrHandle, n.toLowerCase()) ? i(e, n, !O) : t;
      return o === t ? T.attributes || !O ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
    },
    n.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    },
    n.uniqueSort = function(e) {
      var t, n = [],
      i = 0,
      o = 0;
      if (U = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(J), U) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1)
      }
      return e
    },
    E = n.getText = function(e) {
      var t, n = "",
      i = 0,
      o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[i]; i++) n += E(t);
      return n
    },
    S = n.selectors = {
      cacheLength: 50,
      createPseudo: o,
      match: yt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(Tt, Ct),
          e[3] = (e[4] || e[5] || "").replace(Tt, Ct),
          "~=" === e[2] && (e[3] = " " + e[3] + " "),
          e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(),
          "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
          e
        },
        PSEUDO: function(e) {
          var n, i = !e[5] && e[2];
          return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && mt.test(i) && (n = f(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(Tt, Ct).toLowerCase();
          return "*" === e ?
          function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = R[e + " "];
          return t || (t = new RegExp("(^|" + ot + ")" + e + "(" + ot + "|$)")) && R(e, function(e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, i) {
          return function(o) {
            var r = n.attr(o, e);
            return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r + " ").indexOf(i) > -1 : "|=" === t ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
          }
        },
        CHILD: function(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
          s = "last" !== e.slice(-4),
          a = "of-type" === t;
          return 1 === i && 0 === o ?
          function(e) {
            return !! e.parentNode
          } : function(t, n, c) {
            var l, u, p, f, d, h, m = r !== s ? "nextSibling" : "previousSibling",
            g = t.parentNode,
            y = a && t.nodeName.toLowerCase(),
            v = !c && !a;
            if (g) {
              if (r) {
                for (; m;) {
                  for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  h = m = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? g.firstChild : g.lastChild], s && v) {
                for (u = g[P] || (g[P] = {}), l = u[e] || [], d = l[0] === M && l[1], f = l[0] === M && l[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (f = d = 0) || h.pop();) if (1 === p.nodeType && ++f && p === t) {
                  u[e] = [M, d, f];
                  break
                }
              } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === M) f = l[1];
              else for (;
              (p = ++d && p && p[m] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[P] || (p[P] = {}))[e] = [M, f]), p !== t)););
              return f -= o,
              f === i || f % i === 0 && f / i >= 0
            }
          }
        },
        PSEUDO: function(e, t) {
          var i, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
          return r[P] ? r(t) : r.length > 1 ? (i = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) i = nt.call(e, o[s]),
            e[i] = !(n[i] = o[s])
          }) : function(e) {
            return r(e, 0, i)
          }) : r
        }
      },
      pseudos: {
        not: o(function(e) {
          var t = [],
          n = [],
          i = N(e.replace(lt, "$1"));
          return i[P] ? o(function(e, t, n, o) {
            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
          }) : function(e, o, r) {
            return t[0] = e,
            i(t, null, r, n),
            !n.pop()
          }
        }),
        has: o(function(e) {
          return function(t) {
            return n(e, t).length > 0
          }
        }),
        contains: o(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
          }
        }),
        lang: o(function(e) {
          return gt.test(e || "") || n.error("unsupported lang: " + e),
          e = e.replace(Tt, Ct).toLowerCase(),
          function(t) {
            var n;
            do
            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
            n === e || 0 === n.indexOf(e + "-");
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === L
        },
        focus: function(e) {
          return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex,
          e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0
        },
        parent: function(e) {
          return !S.pseudos.empty(e)
        },
        header: function(e) {
          return xt.test(e.nodeName)
        },
        input: function(e) {
          return wt.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        },
        first: u(function() {
          return[0]
        }),
        last: u(function(e, t) {
          return[t - 1]
        }),
        eq: u(function(e, t, n) {
          return[0 > n ? n + t : n]
        }),
        even: u(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: u(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: u(function(e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
          return e
        }),
        gt: u(function(e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    },
    S.pseudos.nth = S.pseudos.eq;
    for (k in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) S.pseudos[k] = c(k);
    for (k in {
      submit: !0,
      reset: !0
    }) S.pseudos[k] = l(k);
    p.prototype = S.filters = S.pseudos,
    S.setFilters = new p,
    N = n.compile = function(e, t) {
      var n, i = [],
      o = [],
      r = X[e + " "];
      if (!r) {
        for (t || (t = f(e)), n = t.length; n--;) r = v(t[n]),
        r[P] ? i.push(r) : o.push(r);
        r = X(e, b(o, i))
      }
      return r
    },
    T.sortStable = P.split("").sort(J).join("") === P,
    T.detectDuplicates = U,
    _(),
    T.sortDetached = r(function(e) {
      return 1 & e.compareDocumentPosition(D.createElement("div"))
    }),
    r(function(e) {
      return e.innerHTML = "<a href='#'></a>",
      "#" === e.firstChild.getAttribute("href")
    }) || s("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }),
    T.attributes && r(function(e) {
      return e.innerHTML = "<input/>",
      e.firstChild.setAttribute("value", ""),
      "" === e.firstChild.getAttribute("value")
    }) || s("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }),
    r(function(e) {
      return null == e.getAttribute("disabled")
    }) || s(it, function(e, t, n) {
      var i;
      return n ? void 0 : (i = e.getAttributeNode(t)) && i.specified ? i.value : e[t] === !0 ? t.toLowerCase() : null
    }),
    ut.find = n,
    ut.expr = n.selectors,
    ut.expr[":"] = ut.expr.pseudos,
    ut.unique = n.uniqueSort,
    ut.text = n.getText,
    ut.isXMLDoc = n.isXML,
    ut.contains = n.contains
  } (e);
  var St = {};
  ut.Callbacks = function(e) {
    e = "string" == typeof e ? St[e] || i(e) : ut.extend({},
    e);
    var n, o, r, s, a, c, l = [],
    u = !e.once && [],
    p = function(t) {
      for (o = e.memory && t, r = !0, a = c || 0, c = 0, s = l.length, n = !0; l && s > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        o = !1;
        break
      }
      n = !1,
      l && (u ? u.length && p(u.shift()) : o ? l = [] : f.disable())
    },
    f = {
      add: function() {
        if (l) {
          var t = l.length; !
          function i(t) {
            ut.each(t, function(t, n) {
              var o = ut.type(n);
              "function" === o ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== o && i(n)
            })
          } (arguments),
          n ? s = l.length : o && (c = t, p(o))
        }
        return this
      },
      remove: function() {
        return l && ut.each(arguments, function(e, t) {
          for (var i;
          (i = ut.inArray(t, l, i)) > -1;) l.splice(i, 1),
          n && (s >= i && s--, a >= i && a--)
        }),
        this
      },
      has: function(e) {
        return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
      },
      empty: function() {
        return l = [],
        s = 0,
        this
      },
      disable: function() {
        return l = u = o = t,
        this
      },
      disabled: function() {
        return !l
      },
      lock: function() {
        return u = t,
        o || f.disable(),
        this
      },
      locked: function() {
        return !u
      },
      fireWith: function(e, t) {
        return !l || r && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : p(t)),
        this
      },
      fire: function() {
        return f.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !! r
      }
    };
    return f
  },
  ut.extend({
    Deferred: function(e) {
      var t = [
        ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
        ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
        ["notify", "progress", ut.Callbacks("memory")]],
      n = "pending",
      i = {
        state: function() {
          return n
        },
        always: function() {
          return o.done(arguments).fail(arguments),
          this
        },
        then: function() {
          var e = arguments;
          return ut.Deferred(function(n) {
            ut.each(t, function(t, r) {
              var s = r[0],
              a = ut.isFunction(e[t]) && e[t];
              o[r[1]](function() {
                var e = a && a.apply(this, arguments);
                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
              })
            }),
            e = null
          }).promise()
        },
        promise: function(e) {
          return null != e ? ut.extend(e, i) : i
        }
      },
      o = {};
      return i.pipe = i.then,
      ut.each(t, function(e, r) {
        var s = r[2],
        a = r[3];
        i[r[1]] = s.add,
        a && s.add(function() {
          n = a
        },
        t[1 ^ e][2].disable, t[2][2].lock),
        o[r[0]] = function() {
          return o[r[0] + "With"](this === o ? i : this, arguments),
          this
        },
        o[r[0] + "With"] = s.fireWith
      }),
      i.promise(o),
      e && e.call(o, o),
      o
    },
    when: function(e) {
      var t, n, i, o = 0,
      r = rt.call(arguments),
      s = r.length,
      a = 1 !== s || e && ut.isFunction(e.promise) ? s : 0,
      c = 1 === a ? e : ut.Deferred(),
      l = function(e, n, i) {
        return function(o) {
          n[e] = this,
          i[e] = arguments.length > 1 ? rt.call(arguments) : o,
          i === t ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
        }
      };
      if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && ut.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, t)) : --a;
      return a || c.resolveWith(i, r),
      c.promise()
    }
  }),
  ut.support = function(t) {
    var n, i, o, r, s, a, c, l, u, p = G.createElement("div");
    if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], i = p.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
    r = G.createElement("select"),
    a = r.appendChild(G.createElement("option")),
    o = p.getElementsByTagName("input")[0],
    i.style.cssText = "top:1px;float:left;opacity:.5",
    t.getSetAttribute = "t" !== p.className,
    t.leadingWhitespace = 3 === p.firstChild.nodeType,
    t.tbody = !p.getElementsByTagName("tbody").length,
    t.htmlSerialize = !!p.getElementsByTagName("link").length,
    t.style = /top/.test(i.getAttribute("style")),
    t.hrefNormalized = "/a" === i.getAttribute("href"),
    t.opacity = /^0.5/.test(i.style.opacity),
    t.cssFloat = !!i.style.cssFloat,
    t.checkOn = !!o.value,
    t.optSelected = a.selected,
    t.enctype = !!G.createElement("form").enctype,
    t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
    t.inlineBlockNeedsLayout = !1,
    t.shrinkWrapBlocks = !1,
    t.pixelPosition = !1,
    t.deleteExpando = !0,
    t.noCloneEvent = !0,
    t.reliableMarginRight = !0,
    t.boxSizingReliable = !0,
    o.checked = !0,
    t.noCloneChecked = o.cloneNode(!0).checked,
    r.disabled = !0,
    t.optDisabled = !a.disabled;
    try {
      delete p.test
    } catch(f) {
      t.deleteExpando = !1
    }
    o = G.createElement("input"),
    o.setAttribute("value", ""),
    t.input = "" === o.getAttribute("value"),
    o.value = "t",
    o.setAttribute("type", "radio"),
    t.radioValue = "t" === o.value,
    o.setAttribute("checked", "t"),
    o.setAttribute("name", "t"),
    s = G.createDocumentFragment(),
    s.appendChild(o),
    t.appendChecked = o.checked,
    t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
    p.attachEvent && (p.attachEvent("onclick", function() {
      t.noCloneEvent = !1
    }), p.cloneNode(!0).click());
    for (u in {
      submit: !0,
      change: !0,
      focusin: !0
    }) p.setAttribute(c = "on" + u, "t"),
    t[u + "Bubbles"] = c in e || p.attributes[c].expando === !1;
    p.style.backgroundClip = "content-box",
    p.cloneNode(!0).style.backgroundClip = "",
    t.clearCloneStyle = "content-box" === p.style.backgroundClip;
    for (u in ut(t)) break;
    return t.ownLast = "0" !== u,
    ut(function() {
      var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
      s = G.getElementsByTagName("body")[0];
      s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(s, null != s.style.zoom ? {
        zoom: 1
      } : {},
      function() {
        t.boxSizing = 4 === p.offsetWidth
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
        width: "4px"
      }).width, i = p.appendChild(G.createElement("div")), i.style.cssText = p.style.cssText = r, i.style.marginRight = i.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== V && (p.innerHTML = "", p.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = o = i = null)
    }),
    n = r = s = a = i = o = null,
    t
  } ({});
  var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  $t = /([A-Z])/g;
  ut.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando],
      !!e && !a(e)
    },
    data: function(e, t, n) {
      return o(e, t, n)
    },
    removeData: function(e, t) {
      return r(e, t)
    },
    _data: function(e, t, n) {
      return o(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return r(e, t, !0)
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }),
  ut.fn.extend({
    data: function(e, n) {
      var i, o, r = null,
      a = 0,
      c = this[0];
      if (e === t) {
        if (this.length && (r = ut.data(c), 1 === c.nodeType && !ut._data(c, "parsedAttrs"))) {
          for (i = c.attributes; a < i.length; a++) o = i[a].name,
          0 === o.indexOf("data-") && (o = ut.camelCase(o.slice(5)), s(c, o, r[o]));
          ut._data(c, "parsedAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        ut.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        ut.data(this, e, n)
      }) : c ? s(c, e, ut.data(c, e)) : null
    },
    removeData: function(e) {
      return this.each(function() {
        ut.removeData(this, e)
      })
    }
  }),
  ut.extend({
    queue: function(e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = ut._data(e, t), n && (!i || ut.isArray(n) ? i = ut._data(e, t, ut.makeArray(n)) : i.push(n)), i || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = ut.queue(e, t),
      i = n.length,
      o = n.shift(),
      r = ut._queueHooks(e, t),
      s = function() {
        ut.dequeue(e, t)
      };
      "inprogress" === o && (o = n.shift(), i--),
      o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)),
      !i && r && r.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return ut._data(e, n) || ut._data(e, n, {
        empty: ut.Callbacks("once memory").add(function() {
          ut._removeData(e, t + "queue"),
          ut._removeData(e, n)
        })
      })
    }
  }),
  ut.fn.extend({
    queue: function(e, n) {
      var i = 2;
      return "string" != typeof e && (n = e, e = "fx", i--),
      arguments.length < i ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = ut.queue(this, e, n);
        ut._queueHooks(this, e),
        "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        ut.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = ut.fx ? ut.fx.speeds[e] || e : e,
      t = t || "fx",
      this.queue(t, function(t, n) {
        var i = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(i)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, n) {
      var i, o = 1,
      r = ut.Deferred(),
      s = this,
      a = this.length,
      c = function() {
        --o || r.resolveWith(s, [s])
      };
      for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = ut._data(s[a], e + "queueHooks"),
      i && i.empty && (o++, i.empty.add(c));
      return c(),
      r.promise(n)
    }
  });
  var Nt, jt, At = /[\t\r\n\f]/g,
  _t = /\r/g,
  Dt = /^(?:input|select|textarea|button|object)$/i,
  Lt = /^(?:a|area)$/i,
  Ot = /^(?:checked|selected)$/i,
  Wt = ut.support.getSetAttribute,
  Ft = ut.support.input;
  ut.fn.extend({
    attr: function(e, t) {
      return ut.access(this, ut.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        ut.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return ut.access(this, ut.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = ut.propFix[e] || e,
      this.each(function() {
        try {
          this[e] = t,
          delete this[e]
        } catch(n) {}
      })
    },
    addClass: function(e) {
      var t, n, i, o, r, s = 0,
      a = this.length,
      c = "string" == typeof e && e;
      if (ut.isFunction(e)) return this.each(function(t) {
        ut(this).addClass(e.call(this, t, this.className))
      });
      if (c) for (t = (e || "").match(ft) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        n.className = ut.trim(i)
      }
      return this
    },
    removeClass: function(e) {
      var t, n, i, o, r, s = 0,
      a = this.length,
      c = 0 === arguments.length || "string" == typeof e && e;
      if (ut.isFunction(e)) return this.each(function(t) {
        ut(this).removeClass(e.call(this, t, this.className))
      });
      if (c) for (t = (e || "").match(ft) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
        for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
        n.className = e ? ut.trim(i) : ""
      }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ut.isFunction(e) ? this.each(function(n) {
        ut(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function() {
        if ("string" === n) for (var t, i = 0, o = ut(this), r = e.match(ft) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        else(n === V || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var n, i, o, r = this[0]; {
        if (arguments.length) return o = ut.isFunction(e),
        this.each(function(n) {
          var r;
          1 === this.nodeType && (r = o ? e.call(this, n, ut(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ut.isArray(r) && (r = ut.map(r, function(e) {
            return null == e ? "" : e + ""
          })), i = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
        });
        if (r) return i = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()],
        i && "get" in i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
      }
    }
  }),
  ut.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = ut.find.attr(e, "value");
          return null != t ? t : e.text
        }
      },
      select: {
        get: function(e) {
          for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, c = 0 > o ? a : r ? o : 0; a > c; c++) if (n = i[c], !(!n.selected && c !== o || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
            if (t = ut(n).val(), r) return t;
            s.push(t)
          }
          return s
        },
        set: function(e, t) {
          for (var n, i, o = e.options, r = ut.makeArray(t), s = o.length; s--;) i = o[s],
          (i.selected = ut.inArray(ut(i).val(), r) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1),
          r
        }
      }
    },
    attr: function(e, n, i) {
      var o, r, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? ut.prop(e, n, i) : (1 === s && ut.isXMLDoc(e) || (n = n.toLowerCase(), o = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? jt : Nt)), i === t ? o && "get" in o && null !== (r = o.get(e, n)) ? r : (r = ut.find.attr(e, n), null == r ? t : r) : null !== i ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : (e.setAttribute(n, i + ""), i) : (ut.removeAttr(e, n), void 0))
    },
    removeAttr: function(e, t) {
      var n, i, o = 0,
      r = t && t.match(ft);
      if (r && 1 === e.nodeType) for (; n = r[o++];) i = ut.propFix[n] || n,
      ut.expr.match.bool.test(n) ? Ft && Wt || !Ot.test(n) ? e[i] = !1 : e[ut.camelCase("default-" + n)] = e[i] = !1 : ut.attr(e, n, ""),
      e.removeAttribute(Wt ? n : i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t),
            n && (e.value = n),
            t
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, n, i) {
      var o, r, s, a = e.nodeType;
      if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ut.isXMLDoc(e),
      s && (n = ut.propFix[n] || n, r = ut.propHooks[n]),
      i !== t ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : e[n] = i : r && "get" in r && null !== (o = r.get(e, n)) ? o : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = ut.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Dt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }),
  jt = {
    set: function(e, t, n) {
      return t === !1 ? ut.removeAttr(e, n) : Ft && Wt || !Ot.test(n) ? e.setAttribute(!Wt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0,
      n
    }
  },
  ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, n) {
    var i = ut.expr.attrHandle[n] || ut.find.attr;
    ut.expr.attrHandle[n] = Ft && Wt || !Ot.test(n) ?
    function(e, n, o) {
      var r = ut.expr.attrHandle[n],
      s = o ? t : (ut.expr.attrHandle[n] = t) != i(e, n, o) ? n.toLowerCase() : null;
      return ut.expr.attrHandle[n] = r,
      s
    } : function(e, n, i) {
      return i ? t : e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }),
  Ft && Wt || (ut.attrHooks.value = {
    set: function(e, t, n) {
      return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Nt && Nt.set(e, t, n)
    }
  }),
  Wt || (Nt = {
    set: function(e, n, i) {
      var o = e.getAttributeNode(i);
      return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)),
      o.value = n += "",
      "value" === i || n === e.getAttribute(i) ? n : t
    }
  },
  ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, i) {
    var o;
    return i ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
  },
  ut.valHooks.button = {
    get: function(e, n) {
      var i = e.getAttributeNode(n);
      return i && i.specified ? i.value : t
    },
    set: Nt.set
  },
  ut.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Nt.set(e, "" === t ? !1 : t, n)
    }
  },
  ut.each(["width", "height"], function(e, t) {
    ut.attrHooks[t] = {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
      }
    }
  })),
  ut.support.hrefNormalized || ut.each(["href", "src"], function(e, t) {
    ut.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }),
  ut.support.style || (ut.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }),
  ut.support.optSelected || (ut.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
      null
    }
  }),
  ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ut.propFix[this.toLowerCase()] = this
  }),
  ut.support.enctype || (ut.propFix.enctype = "encoding"),
  ut.each(["radio", "checkbox"], function() {
    ut.valHooks[this] = {
      set: function(e, t) {
        return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
      }
    },
    ut.support.checkOn || (ut.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Ht = /^(?:input|select|textarea)$/i,
  It = /^key/,
  Pt = /^(?:mouse|contextmenu)|click/,
  qt = /^(?:focusinfocus|focusoutblur)$/,
  Mt = /^([^.]*)(?:\.(.+)|)$/;
  ut.event = {
    global: {},
    add: function(e, n, i, o, r) {
      var s, a, c, l, u, p, f, d, h, m, g, y = ut._data(e);
      if (y) {
        for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = ut.guid++), (a = y.events) || (a = y.events = {}), (p = y.handle) || (p = y.handle = function(e) {
          return typeof ut === V || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(p.elem, arguments)
        },
        p.elem = e), n = (n || "").match(ft) || [""], c = n.length; c--;) s = Mt.exec(n[c]) || [],
        h = g = s[1],
        m = (s[2] || "").split(".").sort(),
        h && (u = ut.event.special[h] || {},
        h = (r ? u.delegateType : u.bindType) || h, u = ut.event.special[h] || {},
        f = ut.extend({
          type: h,
          origType: g,
          data: o,
          handler: i,
          guid: i.guid,
          selector: r,
          needsContext: r && ut.expr.match.needsContext.test(r),
          namespace: m.join(".")
        },
        l), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, u.setup && u.setup.call(e, o, m, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), ut.event.global[h] = !0);
        e = null
      }
    },
    remove: function(e, t, n, i, o) {
      var r, s, a, c, l, u, p, f, d, h, m, g = ut.hasData(e) && ut._data(e);
      if (g && (u = g.events)) {
        for (t = (t || "").match(ft) || [""], l = t.length; l--;) if (a = Mt.exec(t[l]) || [], d = m = a[1], h = (a[2] || "").split(".").sort(), d) {
          for (p = ut.event.special[d] || {},
          d = (i ? p.delegateType : p.bindType) || d, f = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = f.length; r--;) s = f[r],
          !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, p.remove && p.remove.call(e, s));
          c && !f.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ut.removeEvent(e, d, g.handle), delete u[d])
        } else for (d in u) ut.event.remove(e, d + t[l], n, i, !0);
        ut.isEmptyObject(u) && (delete g.handle, ut._removeData(e, "events"))
      }
    },
    trigger: function(n, i, o, r) {
      var s, a, c, l, u, p, f, d = [o || G],
      h = ct.call(n, "type") ? n.type : n,
      m = ct.call(n, "namespace") ? n.namespace.split(".") : [];
      if (c = p = o = o || G, 3 !== o.nodeType && 8 !== o.nodeType && !qt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i = null == i ? [n] : ut.makeArray(i, [n]), u = ut.event.special[h] || {},
      r || !u.trigger || u.trigger.apply(o, i) !== !1)) {
        if (!r && !u.noBubble && !ut.isWindow(o)) {
          for (l = u.delegateType || h, qt.test(l + h) || (c = c.parentNode); c; c = c.parentNode) d.push(c),
          p = c;
          p === (o.ownerDocument || G) && d.push(p.defaultView || p.parentWindow || e)
        }
        for (f = 0;
        (c = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? l : u.bindType || h,
        s = (ut._data(c, "events") || {})[n.type] && ut._data(c, "handle"),
        s && s.apply(c, i),
        s = a && c[a],
        s && ut.acceptData(c) && s.apply && s.apply(c, i) === !1 && n.preventDefault();
        if (n.type = h, !r && !n.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && ut.acceptData(o) && a && o[h] && !ut.isWindow(o)) {
          p = o[a],
          p && (o[a] = null),
          ut.event.triggered = h;
          try {
            o[h]()
          } catch(g) {}
          ut.event.triggered = t,
          p && (o[a] = p)
        }
        return n.result
      }
    },
    dispatch: function(e) {
      e = ut.event.fix(e);
      var n, i, o, r, s, a = [],
      c = rt.call(arguments),
      l = (ut._data(this, "events") || {})[e.type] || [],
      u = ut.event.special[e.type] || {};
      if (c[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
        for (a = ut.event.handlers.call(this, e, l), n = 0;
        (r = a[n++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, s = 0;
        (o = r.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((ut.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e),
        e.result
      }
    },
    handlers: function(e, n) {
      var i, o, r, s, a = [],
      c = n.delegateCount,
      l = e.target;
      if (c && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (r = [], s = 0; c > s; s++) o = n[s],
        i = o.selector + " ",
        r[i] === t && (r[i] = o.needsContext ? ut(i, this).index(l) >= 0 : ut.find(i, this, null, [l]).length),
        r[i] && r.push(o);
        r.length && a.push({
          elem: l,
          handlers: r
        })
      }
      return c < n.length && a.push({
        elem: this,
        handlers: n.slice(c)
      }),
      a
    },
    fix: function(e) {
      if (e[ut.expando]) return e;
      var t, n, i, o = e.type,
      r = e,
      s = this.fixHooks[o];
      for (s || (this.fixHooks[o] = s = Pt.test(o) ? this.mouseHooks : It.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ut.Event(r), t = i.length; t--;) n = i[t],
      e[n] = r[n];
      return e.target || (e.target = r.srcElement || G),
      3 === e.target.nodeType && (e.target = e.target.parentNode),
      e.metaKey = !!e.metaKey,
      s.filter ? s.filter(e, r) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
        e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, n) {
        var i, o, r, s = n.button,
        a = n.fromElement;
        return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || G, r = o.documentElement, i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
        e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
        e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== u() && this.focus) try {
            return this.focus(),
            !1
          } catch(e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === u() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return ut.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, i) {
      var o = ut.extend(new ut.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? ut.event.trigger(o, null, t) : ut.event.dispatch.call(t, o),
      o.isDefaultPrevented() && n.preventDefault()
    }
  },
  ut.removeEvent = G.removeEventListener ?
  function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var i = "on" + t;
    e.detachEvent && (typeof e[i] === V && (e[i] = null), e.detachEvent(i, n))
  },
  ut.Event = function(e, t) {
    return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? c : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
  },
  ut.Event.prototype = {
    isDefaultPrevented: l,
    isPropagationStopped: l,
    isImmediatePropagationStopped: l,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = c,
      e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = c,
      e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = c,
      this.stopPropagation()
    }
  },
  ut.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
  function(e, t) {
    ut.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this,
        o = e.relatedTarget,
        r = e.handleObj;
        return (!o || o !== i && !ut.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
        n
      }
    }
  }),
  ut.support.submitBubbles || (ut.event.special.submit = {
    setup: function() {
      return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function(e) {
        var n = e.target,
        i = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
        i && !ut._data(i, "submitBubbles") && (ut.event.add(i, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), ut._data(i, "submitBubbles", !0))
      }), void 0)
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
    }
  }),
  ut.support.changeBubbles || (ut.event.special.change = {
    setup: function() {
      return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), ut.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1),
        ut.event.simulate("change", this, e, !0)
      })), !1) : (ut.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Ht.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
        }), ut._data(t, "changeBubbles", !0))
      }), void 0)
    },
    handle: function(e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return ut.event.remove(this, "._change"),
      !Ht.test(this.nodeName)
    }
  }),
  ut.support.focusinBubbles || ut.each({
    focus: "focusin",
    blur: "focusout"
  },
  function(e, t) {
    var n = 0,
    i = function(e) {
      ut.event.simulate(t, e.target, ut.event.fix(e), !0)
    };
    ut.event.special[t] = {
      setup: function() {
        0 === n++&&G.addEventListener(e, i, !0)
      },
      teardown: function() {
        0 === --n && G.removeEventListener(e, i, !0)
      }
    }
  }),
  ut.fn.extend({
    on: function(e, n, i, o, r) {
      var s, a;
      if ("object" == typeof e) {
        "string" != typeof n && (i = i || n, n = t);
        for (s in e) this.on(s, n, i, e[s], r);
        return this
      }
      if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, i = t) : (o = i, i = n, n = t)), o === !1) o = l;
      else if (!o) return this;
      return 1 === r && (a = o, o = function(e) {
        return ut().off(e),
        a.apply(this, arguments)
      },
      o.guid = a.guid || (a.guid = ut.guid++)),
      this.each(function() {
        ut.event.add(this, e, o, i, n)
      })
    },
    one: function(e, t, n, i) {
      return this.on(e, t, n, i, 1)
    },
    off: function(e, n, i) {
      var o, r;
      if (e && e.preventDefault && e.handleObj) return o = e.handleObj,
      ut(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
      this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, n, e[r]);
        return this
      }
      return (n === !1 || "function" == typeof n) && (i = n, n = t),
      i === !1 && (i = l),
      this.each(function() {
        ut.event.remove(this, e, i, n)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        ut.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? ut.event.trigger(e, t, n, !0) : void 0
    }
  });
  var Bt = /^.[^:#\[\.,]*$/,
  Rt = /^(?:parents|prev(?:Until|All))/,
  zt = ut.expr.match.needsContext,
  Xt = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  ut.fn.extend({
    find: function(e) {
      var t, n = [],
      i = this,
      o = i.length;
      if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
        for (t = 0; o > t; t++) if (ut.contains(i[t], this)) return !0
      }));
      for (t = 0; o > t; t++) ut.find(e, i[t], n);
      return n = this.pushStack(o > 1 ? ut.unique(n) : n),
      n.selector = this.selector ? this.selector + " " + e : e,
      n
    },
    has: function(e) {
      var t, n = ut(e, this),
      i = n.length;
      return this.filter(function() {
        for (t = 0; i > t; t++) if (ut.contains(this, n[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(f(this, e || [], !0))
    },
    filter: function(e) {
      return this.pushStack(f(this, e || [], !1))
    },
    is: function(e) {
      return !! f(this, "string" == typeof e && zt.test(e) ? ut(e) : e || [], !1).length
    },
    closest: function(e, t) {
      for (var n, i = 0, o = this.length, r = [], s = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
        n = r.push(n);
        break
      }
      return this.pushStack(r.length > 1 ? ut.unique(r) : r)
    },
    index: function(e) {
      return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
      i = ut.merge(this.get(), n);
      return this.pushStack(ut.unique(i))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
  ut.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return ut.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return ut.dir(e, "parentNode", n)
    },
    next: function(e) {
      return p(e, "nextSibling")
    },
    prev: function(e) {
      return p(e, "previousSibling")
    },
    nextAll: function(e) {
      return ut.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return ut.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return ut.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return ut.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return ut.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return ut.sibling(e.firstChild)
    },
    contents: function(e) {
      return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
    }
  },
  function(e, t) {
    ut.fn[e] = function(n, i) {
      var o = ut.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n),
      i && "string" == typeof i && (o = ut.filter(i, o)),
      this.length > 1 && (Xt[e] || (o = ut.unique(o)), Rt.test(e) && (o = o.reverse())),
      this.pushStack(o)
    }
  }),
  ut.extend({
    filter: function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType ? ut.find.matchesSelector(i, e) ? [i] : [] : ut.find.matches(e, ut.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    },
    dir: function(e, n, i) {
      for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !ut(r).is(i));) 1 === r.nodeType && o.push(r),
      r = r[n];
      return o
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  Jt = / jQuery\d+="(?:null|\d+)"/g,
  Vt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
  Qt = /^\s+/,
  Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  Kt = /<([\w:]+)/,
  Yt = /<tbody/i,
  Zt = /<|&#?\w+;/,
  en = /<(?:script|style|link)/i,
  tn = /^(?:checkbox|radio)$/i,
  nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
  on = /^$|\/(?:java|ecma)script/i,
  rn = /^true\/(.*)/,
  sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  an = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
  cn = d(G),
  ln = cn.appendChild(G.createElement("div"));
  an.optgroup = an.option,
  an.tbody = an.tfoot = an.colgroup = an.caption = an.thead,
  an.th = an.td,
  ut.fn.extend({
    text: function(e) {
      return ut.access(this, function(e) {
        return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
      },
      null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = h(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = h(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, i = e ? ut.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ut.cleanData(w(n)),
      n.parentNode && (t && ut.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && ut.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && ut.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e,
      t = null == t ? e : t,
      this.map(function() {
        return ut.clone(this, e, t)
      })
    },
    html: function(e) {
      return ut.access(this, function(e) {
        var n = this[0] || {},
        i = 0,
        o = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Jt, "") : t;
        if (! ("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Vt.test(e) || !ut.support.leadingWhitespace && Qt.test(e) || an[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Gt, "<$1></$2>");
          try {
            for (; o > i; i++) n = this[i] || {},
            1 === n.nodeType && (ut.cleanData(w(n, !1)), n.innerHTML = e);
            n = 0
          } catch(r) {}
        }
        n && this.empty().append(e)
      },
      null, e, arguments.length)
    },
    replaceWith: function() {
      var e = ut.map(this, function(e) {
        return[e.nextSibling, e.parentNode]
      }),
      t = 0;
      return this.domManip(arguments, function(n) {
        var i = e[t++],
        o = e[t++];
        o && (i && i.parentNode !== o && (i = this.nextSibling), ut(this).remove(), o.insertBefore(n, i))
      },
      !0),
      t ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t, n) {
      e = it.apply([], e);
      var i, o, r, s, a, c, l = 0,
      u = this.length,
      p = this,
      f = u - 1,
      d = e[0],
      h = ut.isFunction(d);
      if (h || !(1 >= u || "string" != typeof d || ut.support.checkClone) && nn.test(d)) return this.each(function(i) {
        var o = p.eq(i);
        h && (e[0] = d.call(this, i, o.html())),
        o.domManip(e, t, n)
      });
      if (u && (c = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = c.firstChild, 1 === c.childNodes.length && (c = i), i)) {
        for (s = ut.map(w(c, "script"), m), r = s.length; u > l; l++) o = c,
        l !== f && (o = ut.clone(o, !0, !0), r && ut.merge(s, w(o, "script"))),
        t.call(this[l], o, l);
        if (r) for (a = s[s.length - 1].ownerDocument, ut.map(s, g), l = 0; r > l; l++) o = s[l],
        on.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(a, o) && (o.src ? ut._evalUrl(o.src) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(sn, "")));
        c = i = null
      }
      return this
    }
  }),
  ut.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  },
  function(e, t) {
    ut.fn[e] = function(e) {
      for (var n, i = 0, o = [], r = ut(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0),
      ut(r[i])[t](n),
      ot.apply(o, n.get());
      return this.pushStack(o)
    }
  }),
  ut.extend({
    clone: function(e, t, n) {
      var i, o, r, s, a, c = ut.contains(e.ownerDocument, e);
      if (ut.support.html5Clone || ut.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(r = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (i = w(r), a = w(e), s = 0; null != (o = a[s]); ++s) i[s] && b(o, i[s]);
      if (t) if (n) for (a = a || w(e), i = i || w(r), s = 0; null != (o = a[s]); s++) v(o, i[s]);
      else v(e, r);
      return i = w(r, "script"),
      i.length > 0 && y(i, !c && w(e, "script")),
      i = a = o = null,
      r
    },
    buildFragment: function(e, t, n, i) {
      for (var o, r, s, a, c, l, u, p = e.length, f = d(t), h = [], m = 0; p > m; m++) if (r = e[m], r || 0 === r) if ("object" === ut.type(r)) ut.merge(h, r.nodeType ? [r] : r);
      else if (Zt.test(r)) {
        for (a = a || f.appendChild(t.createElement("div")), c = (Kt.exec(r) || ["", ""])[1].toLowerCase(), u = an[c] || an._default, a.innerHTML = u[1] + r.replace(Gt, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
        if (!ut.support.leadingWhitespace && Qt.test(r) && h.push(t.createTextNode(Qt.exec(r)[0])), !ut.support.tbody) for (r = "table" !== c || Yt.test(r) ? "<table>" !== u[1] || Yt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ut.nodeName(l = r.childNodes[o], "tbody") && !l.childNodes.length && r.removeChild(l);
        for (ut.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
        a = f.lastChild
      } else h.push(t.createTextNode(r));
      for (a && f.removeChild(a), ut.support.appendChecked || ut.grep(w(h, "input"), x), m = 0; r = h[m++];) if ((!i || -1 === ut.inArray(r, i)) && (s = ut.contains(r.ownerDocument, r), a = w(f.appendChild(r), "script"), s && y(a), n)) for (o = 0; r = a[o++];) on.test(r.type || "") && n.push(r);
      return a = null,
      f
    },
    cleanData: function(e, t) {
      for (var n, i, o, r, s = 0, a = ut.expando, c = ut.cache, l = ut.support.deleteExpando, u = ut.event.special; null != (n = e[s]); s++) if ((t || ut.acceptData(n)) && (o = n[a], r = o && c[o])) {
        if (r.events) for (i in r.events) u[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, r.handle);
        c[o] && (delete c[o], l ? delete n[a] : typeof n.removeAttribute !== V ? n.removeAttribute(a) : n[a] = null, tt.push(o))
      }
    },
    _evalUrl: function(e) {
      return ut.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }
  }),
  ut.fn.extend({
    wrapAll: function(e) {
      if (ut.isFunction(e)) return this.each(function(t) {
        ut(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]),
        t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return ut.isFunction(e) ? this.each(function(t) {
        ut(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = ut(this),
        n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = ut.isFunction(e);
      return this.each(function(n) {
        ut(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var un, pn, fn, dn = /alpha\([^)]*\)/i,
  hn = /opacity\s*=\s*([^)]*)/,
  mn = /^(top|right|bottom|left)$/,
  gn = /^(none|table(?!-c[ea]).+)/,
  yn = /^margin/,
  vn = new RegExp("^(" + pt + ")(.*)$", "i"),
  bn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
  wn = new RegExp("^([+-])=(" + pt + ")", "i"),
  xn = {
    BODY: "block"
  },
  kn = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
  Tn = {
    letterSpacing: 0,
    fontWeight: 400
  },
  Cn = ["Top", "Right", "Bottom", "Left"],
  Sn = ["Webkit", "O", "Moz", "ms"];
  ut.fn.extend({
    css: function(e, n) {
      return ut.access(this, function(e, n, i) {
        var o, r, s = {},
        a = 0;
        if (ut.isArray(n)) {
          for (r = pn(e), o = n.length; o > a; a++) s[n[a]] = ut.css(e, n[a], !1, r);
          return s
        }
        return i !== t ? ut.style(e, n, i) : ut.css(e, n)
      },
      e, n, arguments.length > 1)
    },
    show: function() {
      return C(this, !0)
    },
    hide: function() {
      return C(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        T(this) ? ut(this).show() : ut(this).hide()
      })
    }
  }),
  ut.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = fn(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, i, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, s, a, c = ut.camelCase(n),
        l = e.style;
        if (n = ut.cssProps[c] || (ut.cssProps[c] = k(l, c)), a = ut.cssHooks[n] || ut.cssHooks[c], i === t) return a && "get" in a && (r = a.get(e, !1, o)) !== t ? r : l[n];
        if (s = typeof i, "string" === s && (r = wn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ut.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ut.cssNumber[c] || (i += "px"), ut.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set" in a && (i = a.set(e, i, o)) === t))) try {
          l[n] = i
        } catch(u) {}
      }
    },
    css: function(e, n, i, o) {
      var r, s, a, c = ut.camelCase(n);
      return n = ut.cssProps[c] || (ut.cssProps[c] = k(e.style, c)),
      a = ut.cssHooks[n] || ut.cssHooks[c],
      a && "get" in a && (s = a.get(e, !0, i)),
      s === t && (s = fn(e, n, o)),
      "normal" === s && n in Tn && (s = Tn[n]),
      "" === i || i ? (r = parseFloat(s), i === !0 || ut.isNumeric(r) ? r || 0 : s) : s
    }
  }),
  e.getComputedStyle ? (pn = function(t) {
    return e.getComputedStyle(t, null)
  },
  fn = function(e, n, i) {
    var o, r, s, a = i || pn(e),
    c = a ? a.getPropertyValue(n) || a[n] : t,
    l = e.style;
    return a && ("" !== c || ut.contains(e.ownerDocument, e) || (c = ut.style(e, n)), bn.test(c) && yn.test(n) && (o = l.width, r = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = a.width, l.width = o, l.minWidth = r, l.maxWidth = s)),
    c
  }) : G.documentElement.currentStyle && (pn = function(e) {
    return e.currentStyle
  },
  fn = function(e, n, i) {
    var o, r, s, a = i || pn(e),
    c = a ? a[n] : t,
    l = e.style;
    return null == c && l && l[n] && (c = l[n]),
    bn.test(c) && !mn.test(n) && (o = l.left, r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : c, c = l.pixelLeft + "px", l.left = o, s && (r.left = s)),
    "" === c ? "auto" : c
  }),
  ut.each(["height", "width"], function(e, t) {
    ut.cssHooks[t] = {
      get: function(e, n, i) {
        return n ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, kn, function() {
          return $(e, t, i)
        }) : $(e, t, i) : void 0
      },
      set: function(e, n, i) {
        var o = i && pn(e);
        return S(e, n, i ? E(e, t, i, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o), o) : 0)
      }
    }
  }),
  ut.support.opacity || (ut.cssHooks.opacity = {
    get: function(e, t) {
      return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
      i = e.currentStyle,
      o = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
      r = i && i.filter || n.filter || "";
      n.zoom = 1,
      (t >= 1 || "" === t) && "" === ut.trim(r.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = dn.test(r) ? r.replace(dn, o) : r + " " + o)
    }
  }),
  ut(function() {
    ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
      get: function(e, t) {
        return t ? ut.swap(e, {
          display: "inline-block"
        },
        fn, [e, "marginRight"]) : void 0
      }
    }),
    !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function(e, t) {
      ut.cssHooks[t] = {
        get: function(e, n) {
          return n ? (n = fn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
        }
      }
    })
  }),
  ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
  },
  ut.expr.filters.visible = function(e) {
    return !ut.expr.filters.hidden(e)
  }),
  ut.each({
    margin: "",
    padding: "",
    border: "Width"
  },
  function(e, t) {
    ut.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Cn[i] + t] = r[i] || r[i - 2] || r[0];
        return o
      }
    },
    yn.test(e) || (ut.cssHooks[e + t].set = S)
  });
  var En = /%20/g,
  $n = /\[\]$/,
  Nn = /\r?\n/g,
  jn = /^(?:submit|button|image|reset|file)$/i,
  An = /^(?:input|select|textarea|keygen)/i;
  ut.fn.extend({
    serialize: function() {
      return ut.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = ut.prop(this, "elements");
        return e ? ut.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !ut(this).is(":disabled") && An.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
      }).map(function(e, t) {
        var n = ut(this).val();
        return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Nn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Nn, "\r\n")
        }
      }).get()
    }
  }),
  ut.param = function(e, n) {
    var i, o = [],
    r = function(e, t) {
      t = ut.isFunction(t) ? t() : null == t ? "" : t,
      o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
      r(this.name, this.value)
    });
    else for (i in e) A(i, e[i], n, r);
    return o.join("&").replace(En, "+")
  },
  ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    ut.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }),
  ut.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var _n, Dn, Ln = ut.now(),
  On = /\?/,
  Wn = /#.*$/,
  Fn = /([?&])_=[^&]*/,
  Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Pn = /^(?:GET|HEAD)$/,
  qn = /^\/\//,
  Mn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
  Bn = ut.fn.load,
  Rn = {},
  zn = {},
  Xn = "*/".concat("*");
  try {
    Dn = Q.href
  } catch(Un) {
    Dn = G.createElement("a"),
    Dn.href = "",
    Dn = Dn.href
  }
  _n = Mn.exec(Dn.toLowerCase()) || [],
  ut.fn.load = function(e, n, i) {
    if ("string" != typeof e && Bn) return Bn.apply(this, arguments);
    var o, r, s, a = this,
    c = e.indexOf(" ");
    return c >= 0 && (o = e.slice(c, e.length), e = e.slice(0, c)),
    ut.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"),
    a.length > 0 && ut.ajax({
      url: e,
      type: s,
      dataType: "html",
      data: n
    }).done(function(e) {
      r = arguments,
      a.html(o ? ut("<div>").append(ut.parseHTML(e)).find(o) : e)
    }).complete(i &&
    function(e, t) {
      a.each(i, r || [e.responseText, t, e])
    }),
    this
  },
  ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    ut.fn[t] = function(e) {
      return this.on(t, e)
    }
  }),
  ut.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Dn,
      type: "GET",
      isLocal: In.test(_n[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": ut.parseJSON,
        "text xml": ut.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? L(L(e, ut.ajaxSettings), t) : L(ut.ajaxSettings, e)
    },
    ajaxPrefilter: _(Rn),
    ajaxTransport: _(zn),
    ajax: function(e, n) {
      function i(e, n, i, o) {
        var r, p, v, b, x, T = n;
        2 !== w && (w = 2, c && clearTimeout(c), u = t, a = o || "", k.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (b = O(f, k, i)), b = W(f, b, k, r), r ? (f.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ut.lastModified[s] = x), x = k.getResponseHeader("etag"), x && (ut.etag[s] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, v = b.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || T) + "", r ? m.resolveWith(d, [p, T, k]) : m.rejectWith(d, [k, T, v]), k.statusCode(y), y = t, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [k, f, r ? p : v]), g.fireWith(d, [k, T]), l && (h.trigger("ajaxComplete", [k, f]), --ut.active || ut.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (n = e, e = t),
      n = n || {};
      var o, r, s, a, c, l, u, p, f = ut.ajaxSetup({},
      n),
      d = f.context || f,
      h = f.context && (d.nodeType || d.jquery) ? ut(d) : ut.event,
      m = ut.Deferred(),
      g = ut.Callbacks("once memory"),
      y = f.statusCode || {},
      v = {},
      b = {},
      w = 0,
      x = "canceled",
      k = {
        readyState: 0,
        getResponseHeader: function(e) {
          var t;
          if (2 === w) {
            if (!p) for (p = {}; t = Hn.exec(a);) p[t[1].toLowerCase()] = t[2];
            t = p[e.toLowerCase()]
          }
          return null == t ? null : t
        },
        getAllResponseHeaders: function() {
          return 2 === w ? a : null
        },
        setRequestHeader: function(e, t) {
          var n = e.toLowerCase();
          return w || (e = b[n] = b[n] || e, v[e] = t),
          this
        },
        overrideMimeType: function(e) {
          return w || (f.mimeType = e),
          this
        },
        statusCode: function(e) {
          var t;
          if (e) if (2 > w) for (t in e) y[t] = [y[t], e[t]];
          else k.always(e[k.status]);
          return this
        },
        abort: function(e) {
          var t = e || x;
          return u && u.abort(t),
          i(0, t),
          this
        }
      };
      if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || Dn) + "").replace(Wn, "").replace(qn, _n[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ut.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (o = Mn.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === _n[1] && o[2] === _n[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ut.param(f.data, f.traditional)), D(Rn, f, n, k), 2 === w) return k;
      l = f.global,
      l && 0 === ut.active++&&ut.event.trigger("ajaxStart"),
      f.type = f.type.toUpperCase(),
      f.hasContent = !Pn.test(f.type),
      s = f.url,
      f.hasContent || (f.data && (s = f.url += (On.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Fn.test(s) ? s.replace(Fn, "$1_=" + Ln++) : s + (On.test(s) ? "&" : "?") + "_=" + Ln++)),
      f.ifModified && (ut.lastModified[s] && k.setRequestHeader("If-Modified-Since", ut.lastModified[s]), ut.etag[s] && k.setRequestHeader("If-None-Match", ut.etag[s])),
      (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType),
      k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : f.accepts["*"]);
      for (r in f.headers) k.setRequestHeader(r, f.headers[r]);
      if (f.beforeSend && (f.beforeSend.call(d, k, f) === !1 || 2 === w)) return k.abort();
      x = "abort";
      for (r in {
        success: 1,
        error: 1,
        complete: 1
      }) k[r](f[r]);
      if (u = D(zn, f, n, k)) {
        k.readyState = 1,
        l && h.trigger("ajaxSend", [k, f]),
        f.async && f.timeout > 0 && (c = setTimeout(function() {
          k.abort("timeout")
        },
        f.timeout));
        try {
          w = 1,
          u.send(v, i)
        } catch(T) {
          if (! (2 > w)) throw T;
          i(-1, T)
        }
      } else i(-1, "No Transport");
      return k
    },
    getJSON: function(e, t, n) {
      return ut.get(e, t, n, "json")
    },
    getScript: function(e, n) {
      return ut.get(e, t, n, "script")
    }
  }),
  ut.each(["get", "post"], function(e, n) {
    ut[n] = function(e, i, o, r) {
      return ut.isFunction(i) && (r = r || o, o = i, i = t),
      ut.ajax({
        url: e,
        type: n,
        dataType: r,
        data: i,
        success: o
      })
    }
  }),
  ut.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return ut.globalEval(e),
        e
      }
    }
  }),
  ut.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1),
    e.crossDomain && (e.type = "GET", e.global = !1)
  }),
  ut.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, i = G.head || ut("head")[0] || G.documentElement;
      return {
        send: function(t, o) {
          n = G.createElement("script"),
          n.async = !0,
          e.scriptCharset && (n.charset = e.scriptCharset),
          n.src = e.url,
          n.onload = n.onreadystatechange = function(e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
          },
          i.insertBefore(n, i.firstChild)
        },
        abort: function() {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Jn = [],
  Vn = /(=)\?(?=&|$)|\?\?/;
  ut.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Jn.pop() || ut.expando + "_" + Ln++;
      return this[e] = !0,
      e
    }
  }),
  ut.ajaxPrefilter("json jsonp", function(n, i, o) {
    var r, s, a, c = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
    return c || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, c ? n[c] = n[c].replace(Vn, "$1" + r) : n.jsonp !== !1 && (n.url += (On.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
      return a || ut.error(r + " was not called"),
      a[0]
    },
    n.dataTypes[0] = "json", s = e[r], e[r] = function() {
      a = arguments
    },
    o.always(function() {
      e[r] = s,
      n[r] && (n.jsonpCallback = i.jsonpCallback, Jn.push(r)),
      a && ut.isFunction(s) && s(a[0]),
      a = s = t
    }), "script") : void 0
  });
  var Qn, Gn, Kn = 0,
  Yn = e.ActiveXObject &&
  function() {
    var e;
    for (e in Qn) Qn[e](t, !0)
  };
  ut.ajaxSettings.xhr = e.ActiveXObject ?
  function() {
    return !this.isLocal && F() || H()
  } : F,
  Gn = ut.ajaxSettings.xhr(),
  ut.support.cors = !!Gn && "withCredentials" in Gn,
  Gn = ut.support.ajax = !!Gn,
  Gn && ut.ajaxTransport(function(n) {
    if (!n.crossDomain || ut.support.cors) {
      var i;
      return {
        send: function(o, r) {
          var s, a, c = n.xhr();
          if (n.username ? c.open(n.type, n.url, n.async, n.username, n.password) : c.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) c[a] = n.xhrFields[a];
          n.mimeType && c.overrideMimeType && c.overrideMimeType(n.mimeType),
          n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (a in o) c.setRequestHeader(a, o[a])
          } catch(l) {}
          c.send(n.hasContent && n.data || null),
          i = function(e, o) {
            var a, l, u, p;
            try {
              if (i && (o || 4 === c.readyState)) if (i = t, s && (c.onreadystatechange = ut.noop, Yn && delete Qn[s]), o) 4 !== c.readyState && c.abort();
              else {
                p = {},
                a = c.status,
                l = c.getAllResponseHeaders(),
                "string" == typeof c.responseText && (p.text = c.responseText);
                try {
                  u = c.statusText
                } catch(f) {
                  u = ""
                }
                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
              }
            } catch(d) {
              o || r(-1, d)
            }
            p && r(a, u, p, l)
          },
          n.async ? 4 === c.readyState ? setTimeout(i) : (s = ++Kn, Yn && (Qn || (Qn = {},
          ut(e).unload(Yn)), Qn[s] = i), c.onreadystatechange = i) : i()
        },
        abort: function() {
          i && i(t, !0)
        }
      }
    }
  });
  var Zn, ei, ti = /^(?:toggle|show|hide)$/,
  ni = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
  ii = /queueHooks$/,
  oi = [B],
  ri = {
    "*": [function(e, t) {
      var n = this.createTween(e, t),
      i = n.cur(),
      o = ni.exec(t),
      r = o && o[3] || (ut.cssNumber[e] ? "" : "px"),
      s = (ut.cssNumber[e] || "px" !== r && +i) && ni.exec(ut.css(n.elem, e)),
      a = 1,
      c = 20;
      if (s && s[3] !== r) {
        r = r || s[3],
        o = o || [],
        s = +i || 1;
        do a = a || ".5",
        s /= a,
        ut.style(n.elem, e, s + r);
        while (a !== (a = n.cur() / i) && 1 !== a && --c)
      }
      return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
      n
    }]
  };
  ut.Animation = ut.extend(q, {
    tweener: function(e, t) {
      ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, i = 0, o = e.length; o > i; i++) n = e[i],
      ri[n] = ri[n] || [],
      ri[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? oi.unshift(e) : oi.push(e)
    }
  }),
  ut.Tween = R,
  R.prototype = {
    constructor: R,
    init: function(e, t, n, i, o, r) {
      this.elem = e,
      this.prop = n,
      this.easing = o || "swing",
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = i,
      this.unit = r || (ut.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = R.propHooks[this.prop];
      return e && e.get ? e.get(this) : R.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = R.propHooks[this.prop];
      return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      n && n.set ? n.set(this) : R.propHooks._default.set(this),
      this
    }
  },
  R.prototype.init.prototype = R.prototype,
  R.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  },
  R.propHooks.scrollTop = R.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  ut.each(["toggle", "show", "hide"], function(e, t) {
    var n = ut.fn[t];
    ut.fn[t] = function(e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, o)
    }
  }),
  ut.fn.extend({
    fadeTo: function(e, t, n, i) {
      return this.filter(T).css("opacity", 0).show().end().animate({
        opacity: t
      },
      e, n, i)
    },
    animate: function(e, t, n, i) {
      var o = ut.isEmptyObject(e),
      r = ut.speed(t, n, i),
      s = function() {
        var t = q(this, ut.extend({},
        e), r);
        (o || ut._data(this, "finish")) && t.stop(!0)
      };
      return s.finish = s,
      o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
    },
    stop: function(e, n, i) {
      var o = function(e) {
        var t = e.stop;
        delete e.stop,
        t(i)
      };
      return "string" != typeof e && (i = n, n = e, e = t),
      n && e !== !1 && this.queue(e || "fx", []),
      this.each(function() {
        var t = !0,
        n = null != e && e + "queueHooks",
        r = ut.timers,
        s = ut._data(this);
        if (n) s[n] && s[n].stop && o(s[n]);
        else for (n in s) s[n] && s[n].stop && ii.test(n) && o(s[n]);
        for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(i), t = !1, r.splice(n, 1));
        (t || !i) && ut.dequeue(this, e)
      })
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"),
      this.each(function() {
        var t, n = ut._data(this),
        i = n[e + "queue"],
        o = n[e + "queueHooks"],
        r = ut.timers,
        s = i ? i.length : 0;
        for (n.finish = !0, ut.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }),
  ut.each({
    slideDown: z("show"),
    slideUp: z("hide"),
    slideToggle: z("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  },
  function(e, t) {
    ut.fn[e] = function(e, n, i) {
      return this.animate(t, e, n, i)
    }
  }),
  ut.speed = function(e, t, n) {
    var i = e && "object" == typeof e ? ut.extend({},
    e) : {
      complete: n || !n && t || ut.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !ut.isFunction(t) && t
    };
    return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default,
    (null == i.queue || i.queue === !0) && (i.queue = "fx"),
    i.old = i.complete,
    i.complete = function() {
      ut.isFunction(i.old) && i.old.call(this),
      i.queue && ut.dequeue(this, i.queue)
    },
    i
  },
  ut.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return.5 - Math.cos(e * Math.PI) / 2
    }
  },
  ut.timers = [],
  ut.fx = R.prototype.init,
  ut.fx.tick = function() {
    var e, n = ut.timers,
    i = 0;
    for (Zn = ut.now(); i < n.length; i++) e = n[i],
    e() || n[i] !== e || n.splice(i--, 1);
    n.length || ut.fx.stop(),
    Zn = t
  },
  ut.fx.timer = function(e) {
    e() && ut.timers.push(e) && ut.fx.start()
  },
  ut.fx.interval = 13,
  ut.fx.start = function() {
    ei || (ei = setInterval(ut.fx.tick, ut.fx.interval))
  },
  ut.fx.stop = function() {
    clearInterval(ei),
    ei = null
  },
  ut.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  ut.fx.step = {},
  ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
    return ut.grep(ut.timers, function(t) {
      return e === t.elem
    }).length
  }),
  ut.fn.offset = function(e) {
    if (arguments.length) return e === t ? this : this.each(function(t) {
      ut.offset.setOffset(this, e, t)
    });
    var n, i, o = {
      top: 0,
      left: 0
    },
    r = this[0],
    s = r && r.ownerDocument;
    if (s) return n = s.documentElement,
    ut.contains(n, r) ? (typeof r.getBoundingClientRect !== V && (o = r.getBoundingClientRect()), i = X(s), {
      top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o
  },
  ut.offset = {
    setOffset: function(e, t, n) {
      var i = ut.css(e, "position");
      "static" === i && (e.style.position = "relative");
      var o, r, s = ut(e),
      a = s.offset(),
      c = ut.css(e, "top"),
      l = ut.css(e, "left"),
      u = ("absolute" === i || "fixed" === i) && ut.inArray("auto", [c, l]) > -1,
      p = {},
      f = {};
      u ? (f = s.position(), o = f.top, r = f.left) : (o = parseFloat(c) || 0, r = parseFloat(l) || 0),
      ut.isFunction(t) && (t = t.call(e, n, a)),
      null != t.top && (p.top = t.top - a.top + o),
      null != t.left && (p.left = t.left - a.left + r),
      "using" in t ? t.using.call(e, p) : s.css(p)
    }
  },
  ut.fn.extend({
    position: function() {
      if (this[0]) {
        var e, t, n = {
          top: 0,
          left: 0
        },
        i = this[0];
        return "fixed" === ut.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)),
        {
          top: t.top - n.top - ut.css(i, "marginTop", !0),
          left: t.left - n.left - ut.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || K; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
        return e || K
      })
    }
  }),
  ut.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  },
  function(e, n) {
    var i = /Y/.test(n);
    ut.fn[e] = function(o) {
      return ut.access(this, function(e, o, r) {
        var s = X(e);
        return r === t ? s ? n in s ? s[n] : s.document.documentElement[o] : e[o] : (s ? s.scrollTo(i ? ut(s).scrollLeft() : r, i ? r : ut(s).scrollTop()) : e[o] = r, void 0)
      },
      e, o, arguments.length, null)
    }
  }),
  ut.each({
    Height: "height",
    Width: "width"
  },
  function(e, n) {
    ut.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    },
    function(i, o) {
      ut.fn[o] = function(o, r) {
        var s = arguments.length && (i || "boolean" != typeof o),
        a = i || (o === !0 || r === !0 ? "margin" : "border");
        return ut.access(this, function(n, i, o) {
          var r;
          return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : o === t ? ut.css(n, i, a) : ut.style(n, i, o, a)
        },
        n, s ? o : t, s, null)
      }
    })
  }),
  ut.fn.size = function() {
    return this.length
  },
  ut.fn.andSelf = ut.fn.addBack,
  "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ut
  }))
} (window),
function(e, t) {
  e.rails !== t && e.error("jquery-ujs has already been loaded!");
  var n, i = e(document);
  e.rails = n = {
    linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
    buttonClickSelector: "button[data-remote]",
    inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
    formSubmitSelector: "form",
    formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
    disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
    enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
    requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
    fileInputSelector: "input[type=file]",
    linkDisableSelector: "a[data-disable-with]",
    CSRFProtection: function(t) {
      var n = e('meta[name="csrf-token"]').attr("content");
      n && t.setRequestHeader("X-CSRF-Token", n)
    },
    fire: function(t, n, i) {
      var o = e.Event(n);
      return t.trigger(o, i),
      o.result !== !1
    },
    confirm: function(e) {
      return confirm(e)
    },
    ajax: function(t) {
      return e.ajax(t)
    },
    href: function(e) {
      return e.attr("href")
    },
    handleRemote: function(i) {
      var o, r, s, a, c, l, u, p;
      if (n.fire(i, "ajax:before")) {
        if (a = i.data("cross-domain"), c = a === t ? null : a, l = i.data("with-credentials") || null, u = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
          o = i.attr("method"),
          r = i.attr("action"),
          s = i.serializeArray();
          var f = i.data("ujs:submit-button");
          f && (s.push(f), i.data("ujs:submit-button", null))
        } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
        p = {
          type: o || "GET",
          data: s,
          dataType: u,
          beforeSend: function(e, o) {
            return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script),
            n.fire(i, "ajax:beforeSend", [e, o])
          },
          success: function(e, t, n) {
            i.trigger("ajax:success", [e, t, n])
          },
          complete: function(e, t) {
            i.trigger("ajax:complete", [e, t])
          },
          error: function(e, t, n) {
            i.trigger("ajax:error", [e, t, n])
          },
          crossDomain: c
        },
        l && (p.xhrFields = {
          withCredentials: l
        }),
        r && (p.url = r);
        var d = n.ajax(p);
        return i.trigger("ajax:send", d),
        d
      }
      return !1
    },
    handleMethod: function(i) {
      var o = n.href(i),
      r = i.data("method"),
      s = i.attr("target"),
      a = e("meta[name=csrf-token]").attr("content"),
      c = e("meta[name=csrf-param]").attr("content"),
      l = e('<form method="post" action="' + o + '"></form>'),
      u = '<input name="_method" value="' + r + '" type="hidden" />';
      c !== t && a !== t && (u += '<input name="' + c + '" value="' + a + '" type="hidden" />'),
      s && l.attr("target", s),
      l.hide().append(u).appendTo("body"),
      l.submit()
    },
    disableFormElements: function(t) {
      t.find(n.disableSelector).each(function() {
        var t = e(this),
        n = t.is("button") ? "html" : "val";
        t.data("ujs:enable-with", t[n]()),
        t[n](t.data("disable-with")),
        t.prop("disabled", !0)
      })
    },
    enableFormElements: function(t) {
      t.find(n.enableSelector).each(function() {
        var t = e(this),
        n = t.is("button") ? "html" : "val";
        t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")),
        t.prop("disabled", !1)
      })
    },
    allowAction: function(e) {
      var t, i = e.data("confirm"),
      o = !1;
      return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
    },
    blankInputs: function(t, n, i) {
      var o, r, s = e(),
      a = n || "input,textarea",
      c = t.find(a);
      return c.each(function() {
        if (o = e(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
          if (o.is("input[type=radio]") && c.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
          s = s.add(o)
        }
      }),
      s.length ? s : !1
    },
    nonBlankInputs: function(e, t) {
      return n.blankInputs(e, t, !0)
    },
    stopEverything: function(t) {
      return e(t.target).trigger("ujs:everythingStopped"),
      t.stopImmediatePropagation(),
      !1
    },
    disableElement: function(e) {
      e.data("ujs:enable-with", e.html()),
      e.html(e.data("disable-with")),
      e.bind("click.railsDisable", function(e) {
        return n.stopEverything(e)
      })
    },
    enableElement: function(e) {
      e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
      e.unbind("click.railsDisable")
    }
  },
  n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
    e.crossDomain || n.CSRFProtection(i)
  }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
    n.enableElement(e(this))
  }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
    var o = e(this),
    r = o.data("method"),
    s = o.data("params");
    if (!n.allowAction(o)) return n.stopEverything(i);
    if (o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
      if (! (!i.metaKey && !i.ctrlKey || r && "GET" !== r || s)) return !0;
      var a = n.handleRemote(o);
      return a === !1 ? n.enableElement(o) : a.error(function() {
        n.enableElement(o)
      }),
      !1
    }
    return o.data("method") ? (n.handleMethod(o), !1) : void 0
  }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
    var i = e(this);
    return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
  }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
    var i = e(this);
    return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
  }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
    var o = e(this),
    r = o.data("remote") !== t,
    s = n.blankInputs(o, n.requiredInputSelector),
    a = n.nonBlankInputs(o, n.fileInputSelector);
    if (!n.allowAction(o)) return n.stopEverything(i);
    if (s && o.attr("novalidate") == t && n.fire(o, "ajax:aborted:required", [s])) return n.stopEverything(i);
    if (r) {
      if (a) {
        setTimeout(function() {
          n.disableFormElements(o)
        },
        13);
        var c = n.fire(o, "ajax:aborted:file", [a]);
        return c || setTimeout(function() {
          n.enableFormElements(o)
        },
        13),
        c
      }
      return n.handleRemote(o),
      !1
    }
    setTimeout(function() {
      n.disableFormElements(o)
    },
    13)
  }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
    var i = e(this);
    if (!n.allowAction(i)) return n.stopEverything(t);
    var o = i.attr("name"),
    r = o ? {
      name: o,
      value: i.val()
    } : null;
    i.closest("form").data("ujs:submit-button", r)
  }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
    this == t.target && n.disableFormElements(e(this))
  }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
    this == t.target && n.enableFormElements(e(this))
  }), e(function() {
    var t = e("meta[name=csrf-token]").attr("content"),
    n = e("meta[name=csrf-param]").attr("content");
    e('form input[name="' + n + '"]').val(t)
  }))
} (jQuery),
!
function(e) {
  "use strict";
  e(function() {
    e.support.transition = function() {
      var e = function() {
        var e, t = document.createElement("bootstrap"),
        n = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
        for (e in n) if (void 0 !== t.style[e]) return n[e]
      } ();
      return e && {
        end: e
      }
    } ()
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.options = e.extend({},
    e.fn.affix.defaults, n),
    this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
      setTimeout(e.proxy(this.checkPosition, this), 1)
    },
    this)),
    this.$element = e(t),
    this.checkPosition()
  };
  t.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var t, n = e(document).height(),
      i = this.$window.scrollTop(),
      o = this.$element.offset(),
      r = this.options.offset,
      s = r.bottom,
      a = r.top,
      c = "affix affix-top affix-bottom";
      "object" != typeof r && (s = a = r),
      "function" == typeof a && (a = r.top()),
      "function" == typeof s && (s = r.bottom()),
      t = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1,
      this.affixed !== t && (this.affixed = t, this.unpin = "bottom" == t ? o.top - i : null, this.$element.removeClass(c).addClass("affix" + (t ? "-" + t : "")))
    }
  };
  var n = e.fn.affix;
  e.fn.affix = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("affix"),
      r = "object" == typeof n && n;
      o || i.data("affix", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.affix.Constructor = t,
  e.fn.affix.defaults = {
    offset: 0
  },
  e.fn.affix.noConflict = function() {
    return e.fn.affix = n,
    this
  },
  e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var t = e(this),
      n = t.data();
      n.offset = n.offset || {},
      n.offsetBottom && (n.offset.bottom = n.offsetBottom),
      n.offsetTop && (n.offset.top = n.offsetTop),
      t.affix(n)
    })
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = '[data-dismiss="alert"]',
  n = function(n) {
    e(n).on("click", t, this.close)
  };
  n.prototype.close = function(t) {
    function n() {
      i.trigger("closed").remove()
    }
    var i, o = e(this),
    r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")),
    i = e(r),
    t && t.preventDefault(),
    i.length || (i = o.hasClass("alert") ? o : o.parent()),
    i.trigger(t = e.Event("close")),
    t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n())
  };
  var i = e.fn.alert;
  e.fn.alert = function(t) {
    return this.each(function() {
      var i = e(this),
      o = i.data("alert");
      o || i.data("alert", o = new n(this)),
      "string" == typeof t && o[t].call(i)
    })
  },
  e.fn.alert.Constructor = n,
  e.fn.alert.noConflict = function() {
    return e.fn.alert = i,
    this
  },
  e(document).on("click.alert.data-api", t, n.prototype.close)
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.$element = e(t),
    this.options = e.extend({},
    e.fn.button.defaults, n)
  };
  t.prototype.setState = function(e) {
    var t = "disabled",
    n = this.$element,
    i = n.data(),
    o = n.is("input") ? "val" : "html";
    e += "Text",
    i.resetText || n.data("resetText", n[o]()),
    n[o](i[e] || this.options[e]),
    setTimeout(function() {
      "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
    },
    0)
  },
  t.prototype.toggle = function() {
    var e = this.$element.closest('[data-toggle="buttons-radio"]');
    e && e.find(".active").removeClass("active"),
    this.$element.toggleClass("active")
  };
  var n = e.fn.button;
  e.fn.button = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("button"),
      r = "object" == typeof n && n;
      o || i.data("button", o = new t(this, r)),
      "toggle" == n ? o.toggle() : n && o.setState(n)
    })
  },
  e.fn.button.defaults = {
    loadingText: "loading..."
  },
  e.fn.button.Constructor = t,
  e.fn.button.noConflict = function() {
    return e.fn.button = n,
    this
  },
  e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
    var n = e(t.target);
    n.hasClass("btn") || (n = n.closest(".btn")),
    n.button("toggle")
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.$element = e(t),
    this.$indicators = this.$element.find(".carousel-indicators"),
    this.options = n,
    "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
  };
  t.prototype = {
    cycle: function(t) {
      return t || (this.paused = !1),
      this.interval && clearInterval(this.interval),
      this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
      this
    },
    getActiveIndex: function() {
      return this.$active = this.$element.find(".item.active"),
      this.$items = this.$active.parent().children(),
      this.$items.index(this.$active)
    },
    to: function(t) {
      var n = this.getActiveIndex(),
      i = this;
      if (! (t > this.$items.length - 1 || 0 > t)) return this.sliding ? this.$element.one("slid", function() {
        i.to(t)
      }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
    },
    pause: function(t) {
      return t || (this.paused = !0),
      this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
      clearInterval(this.interval),
      this.interval = null,
      this
    },
    next: function() {
      return this.sliding ? void 0 : this.slide("next")
    },
    prev: function() {
      return this.sliding ? void 0 : this.slide("prev")
    },
    slide: function(t, n) {
      var i, o = this.$element.find(".item.active"),
      r = n || o[t](),
      s = this.interval,
      a = "next" == t ? "left" : "right",
      c = "next" == t ? "first" : "last",
      l = this;
      if (this.sliding = !0, s && this.pause(), r = r.length ? r : this.$element.find(".item")[c](), i = e.Event("slide", {
        relatedTarget: r[0],
        direction: a
      }), !r.hasClass("active")) {
        if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
          var t = e(l.$indicators.children()[l.getActiveIndex()]);
          t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide")) {
          if (this.$element.trigger(i), i.isDefaultPrevented()) return;
          r.addClass(t),
          r[0].offsetWidth,
          o.addClass(a),
          r.addClass(a),
          this.$element.one(e.support.transition.end, function() {
            r.removeClass([t, a].join(" ")).addClass("active"),
            o.removeClass(["active", a].join(" ")),
            l.sliding = !1,
            setTimeout(function() {
              l.$element.trigger("slid")
            },
            0)
          })
        } else {
          if (this.$element.trigger(i), i.isDefaultPrevented()) return;
          o.removeClass("active"),
          r.addClass("active"),
          this.sliding = !1,
          this.$element.trigger("slid")
        }
        return s && this.cycle(),
        this
      }
    }
  };
  var n = e.fn.carousel;
  e.fn.carousel = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("carousel"),
      r = e.extend({},
      e.fn.carousel.defaults, "object" == typeof n && n),
      s = "string" == typeof n ? n : r.slide;
      o || i.data("carousel", o = new t(this, r)),
      "number" == typeof n ? o.to(n) : s ? o[s]() : r.interval && o.pause().cycle()
    })
  },
  e.fn.carousel.defaults = {
    interval: 5e3,
    pause: "hover"
  },
  e.fn.carousel.Constructor = t,
  e.fn.carousel.noConflict = function() {
    return e.fn.carousel = n,
    this
  },
  e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
    var n, i, o = e(this),
    r = e(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
    s = e.extend({},
    r.data(), o.data());
    r.carousel(s),
    (i = o.attr("data-slide-to")) && r.data("carousel").pause().to(i).cycle(),
    t.preventDefault()
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.$element = e(t),
    this.options = e.extend({},
    e.fn.collapse.defaults, n),
    this.options.parent && (this.$parent = e(this.options.parent)),
    this.options.toggle && this.toggle()
  };
  t.prototype = {
    constructor: t,
    dimension: function() {
      var e = this.$element.hasClass("width");
      return e ? "width" : "height"
    },
    show: function() {
      var t, n, i, o;
      if (!this.transitioning && !this.$element.hasClass("in")) {
        if (t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
          if (o = i.data("collapse"), o && o.transitioning) return;
          i.collapse("hide"),
          o || i.data("collapse", null)
        }
        this.$element[t](0),
        this.transition("addClass", e.Event("show"), "shown"),
        e.support.transition && this.$element[t](this.$element[0][n])
      }
    },
    hide: function() {
      var t; ! this.transitioning && this.$element.hasClass("in") && (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0))
    },
    reset: function(e) {
      var t = this.dimension();
      return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth,
      this.$element[null !== e ? "addClass" : "removeClass"]("collapse"),
      this
    },
    transition: function(t, n, i) {
      var o = this,
      r = function() {
        "show" == n.type && o.reset(),
        o.transitioning = 0,
        o.$element.trigger(i)
      };
      this.$element.trigger(n),
      n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, r) : r())
    },
    toggle: function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
  };
  var n = e.fn.collapse;
  e.fn.collapse = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("collapse"),
      r = e.extend({},
      e.fn.collapse.defaults, i.data(), "object" == typeof n && n);
      o || i.data("collapse", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.collapse.defaults = {
    toggle: !0
  },
  e.fn.collapse.Constructor = t,
  e.fn.collapse.noConflict = function() {
    return e.fn.collapse = n,
    this
  },
  e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
    var n, i = e(this),
    o = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
    r = e(o).data("collapse") ? "toggle" : i.data();
    i[e(o).hasClass("in") ? "addClass" : "removeClass"]("collapsed"),
    e(o).collapse(r)
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  function t() {
    e(i).each(function() {
      n(e(this)).removeClass("open")
    })
  }
  function n(t) {
    var n, i = t.attr("data-target");
    return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
    n = i && e(i),
    n && n.length || (n = t.parent()),
    n
  }
  var i = "[data-toggle=dropdown]",
  o = function(t) {
    var n = e(t).on("click.dropdown.data-api", this.toggle);
    e("html").on("click.dropdown.data-api", function() {
      n.parent().removeClass("open")
    })
  };
  o.prototype = {
    constructor: o,
    toggle: function() {
      var i, o, r = e(this);
      if (!r.is(".disabled, :disabled")) return i = n(r),
      o = i.hasClass("open"),
      t(),
      o || i.toggleClass("open"),
      r.focus(),
      !1
    },
    keydown: function(t) {
      var o, r, s, a, c;
      if (/(38|40|27)/.test(t.keyCode) && (o = e(this), t.preventDefault(), t.stopPropagation(), !o.is(".disabled, :disabled"))) {
        if (s = n(o), a = s.hasClass("open"), !a || a && 27 == t.keyCode) return 27 == t.which && s.find(i).focus(),
        o.click();
        r = e("[role=menu] li:not(.divider):visible a", s),
        r.length && (c = r.index(r.filter(":focus")), 38 == t.keyCode && c > 0 && c--, 40 == t.keyCode && c < r.length - 1 && c++, ~c || (c = 0), r.eq(c).focus())
      }
    }
  };
  var r = e.fn.dropdown;
  e.fn.dropdown = function(t) {
    return this.each(function() {
      var n = e(this),
      i = n.data("dropdown");
      i || n.data("dropdown", i = new o(this)),
      "string" == typeof t && i[t].call(n)
    })
  },
  e.fn.dropdown.Constructor = o,
  e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = r,
    this
  },
  e(document).on("click.dropdown.data-api", t).on("click.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
  }).on("click.dropdown-menu", function(e) {
    e.stopPropagation()
  }).on("click.dropdown.data-api", i, o.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", o.prototype.keydown)
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.options = n,
    this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)),
    this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
  };
  t.prototype = {
    constructor: t,
    toggle: function() {
      return this[this.isShown ? "hide" : "show"]()
    },
    show: function() {
      var t = this,
      n = e.Event("show");
      this.$element.trigger(n),
      this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
        var n = e.support.transition && t.$element.hasClass("fade");
        t.$element.parent().length || t.$element.appendTo(document.body),
        t.$element.show(),
        n && t.$element[0].offsetWidth,
        t.$element.addClass("in").attr("aria-hidden", !1),
        t.enforceFocus(),
        n ? t.$element.one(e.support.transition.end, function() {
          t.$element.focus().trigger("shown")
        }) : t.$element.focus().trigger("shown")
      }))
    },
    hide: function(t) {
      t && t.preventDefault();
      t = e.Event("hide"),
      this.$element.trigger(t),
      this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
    },
    enforceFocus: function() {
      var t = this;
      e(document).on("focusin.modal", function(e) {
        t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
      })
    },
    escape: function() {
      var e = this;
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
        27 == t.which && e.hide()
      }) : this.isShown || this.$element.off("keyup.dismiss.modal")
    },
    hideWithTransition: function() {
      var t = this,
      n = setTimeout(function() {
        t.$element.off(e.support.transition.end),
        t.hideModal()
      },
      500);
      this.$element.one(e.support.transition.end, function() {
        clearTimeout(n),
        t.hideModal()
      })
    },
    hideModal: function() {
      var e = this;
      this.$element.hide(),
      this.backdrop(function() {
        e.removeBackdrop(),
        e.$element.trigger("hidden")
      })
    },
    removeBackdrop: function() {
      this.$backdrop && this.$backdrop.remove(),
      this.$backdrop = null
    },
    backdrop: function(t) {
      var n = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var i = e.support.transition && n;
        if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
        i ? this.$backdrop.one(e.support.transition.end, t) : t()
      } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
    }
  };
  var n = e.fn.modal;
  e.fn.modal = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("modal"),
      r = e.extend({},
      e.fn.modal.defaults, i.data(), "object" == typeof n && n);
      o || i.data("modal", o = new t(this, r)),
      "string" == typeof n ? o[n]() : r.show && o.show()
    })
  },
  e.fn.modal.defaults = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  },
  e.fn.modal.Constructor = t,
  e.fn.modal.noConflict = function() {
    return e.fn.modal = n,
    this
  },
  e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
    var n = e(this),
    i = n.attr("href"),
    o = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
    r = o.data("modal") ? "toggle" : e.extend({
      remote: !/#/.test(i) && i
    },
    o.data(), n.data());
    t.preventDefault(),
    o.modal(r).one("hide", function() {
      n.focus()
    })
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  function t(t, n) {
    var i, o = e.proxy(this.process, this),
    r = e(t).is("body") ? e(window) : e(t);
    this.options = e.extend({},
    e.fn.scrollspy.defaults, n),
    this.$scrollElement = r.on("scroll.scroll-spy.data-api", o),
    this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
    this.$body = e("body"),
    this.refresh(),
    this.process()
  }
  t.prototype = {
    constructor: t,
    refresh: function() {
      var t, n = this;
      this.offsets = e([]),
      this.targets = e([]),
      t = this.$body.find(this.selector).map(function() {
        var t = e(this),
        i = t.data("target") || t.attr("href"),
        o = /^#\w/.test(i) && e(i);
        return o && o.length && [
          [o.position().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]] || null
      }).sort(function(e, t) {
        return e[0] - t[0]
      }).each(function() {
        n.offsets.push(this[0]),
        n.targets.push(this[1])
      })
    },
    process: function() {
      var e, t = this.$scrollElement.scrollTop() + this.options.offset,
      n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
      i = n - this.$scrollElement.height(),
      o = this.offsets,
      r = this.targets,
      s = this.activeTarget;
      if (t >= i) return s != (e = r.last()[0]) && this.activate(e);
      for (e = o.length; e--;) s != r[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(r[e])
    },
    activate: function(t) {
      var n, i;
      this.activeTarget = t,
      e(this.selector).parent(".active").removeClass("active"),
      i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      n = e(i).parent("li").addClass("active"),
      n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
      n.trigger("activate")
    }
  };
  var n = e.fn.scrollspy;
  e.fn.scrollspy = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("scrollspy"),
      r = "object" == typeof n && n;
      o || i.data("scrollspy", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.scrollspy.Constructor = t,
  e.fn.scrollspy.defaults = {
    offset: 10
  },
  e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = n,
    this
  },
  e(window).on("load", function() {
    e('[data-spy="scroll"]').each(function() {
      var t = e(this);
      t.scrollspy(t.data())
    })
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t) {
    this.element = e(t)
  };
  t.prototype = {
    constructor: t,
    show: function() {
      var t, n, i, o = this.element,
      r = o.closest("ul:not(.dropdown-menu)"),
      s = o.attr("data-target");
      s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")),
      o.parent("li").hasClass("active") || (t = r.find(".active:last a")[0], i = e.Event("show", {
        relatedTarget: t
      }), o.trigger(i), i.isDefaultPrevented() || (n = e(s), this.activate(o.parent("li"), r), this.activate(n, n.parent(), function() {
        o.trigger({
          type: "shown",
          relatedTarget: t
        })
      })))
    },
    activate: function(t, n, i) {
      function o() {
        r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
        t.addClass("active"),
        s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
        t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"),
        i && i()
      }
      var r = n.find("> .active"),
      s = i && e.support.transition && r.hasClass("fade");
      s ? r.one(e.support.transition.end, o) : o(),
      r.removeClass("in")
    }
  };
  var n = e.fn.tab;
  e.fn.tab = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("tab");
      o || i.data("tab", o = new t(this)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.tab.Constructor = t,
  e.fn.tab.noConflict = function() {
    return e.fn.tab = n,
    this
  },
  e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
    t.preventDefault(),
    e(this).tab("show")
  })
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(e, t) {
    this.init("tooltip", e, t)
  };
  t.prototype = {
    constructor: t,
    init: function(t, n, i) {
      var o, r, s, a, c;
      for (this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, s = this.options.trigger.split(" "), c = s.length; c--;) a = s[c],
      "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (o = "hover" == a ? "mouseenter" : "focus", r = "hover" == a ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
      this.options.selector ? this._options = e.extend({},
      this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle()
    },
    getOptions: function(t) {
      return t = e.extend({},
      e.fn[this.type].defaults, this.$element.data(), t),
      t.delay && "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }),
      t
    },
    enter: function(t) {
      var n, i = e.fn[this.type].defaults,
      o = {};
      return this._options && e.each(this._options, function(e, t) {
        i[e] != t && (o[e] = t)
      },
      this),
      n = e(t.currentTarget)[this.type](o).data(this.type),
      n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function() {
        "in" == n.hoverState && n.show()
      },
      n.options.delay.show), void 0) : n.show()
    },
    leave: function(t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      return this.timeout && clearTimeout(this.timeout),
      n.options.delay && n.options.delay.hide ? (n.hoverState = "out", this.timeout = setTimeout(function() {
        "out" == n.hoverState && n.hide()
      },
      n.options.delay.hide), void 0) : n.hide()
    },
    show: function() {
      var t, n, i, o, r, s, a = e.Event("show");
      if (this.hasContent() && this.enabled) {
        if (this.$element.trigger(a), a.isDefaultPrevented()) return;
        switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), r = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
          top: 0,
          left: 0,
          display: "block"
        }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), i = t[0].offsetWidth, o = t[0].offsetHeight, r) {
        case "bottom":
          s = {
            top: n.top + n.height,
            left: n.left + n.width / 2 - i / 2
          };
          break;
        case "top":
          s = {
            top: n.top - o,
            left: n.left + n.width / 2 - i / 2
          };
          break;
        case "left":
          s = {
            top: n.top + n.height / 2 - o / 2,
            left: n.left - i
          };
          break;
        case "right":
          s = {
            top: n.top + n.height / 2 - o / 2,
            left: n.left + n.width
          }
        }
        this.applyPlacement(s, r),
        this.$element.trigger("shown")
      }
    },
    applyPlacement: function(e, t) {
      var n, i, o, r, s = this.tip(),
      a = s[0].offsetWidth,
      c = s[0].offsetHeight;
      s.offset(e).addClass(t).addClass("in"),
      n = s[0].offsetWidth,
      i = s[0].offsetHeight,
      "top" == t && i != c && (e.top = e.top + c - i, r = !0),
      "bottom" == t || "top" == t ? (o = 0, e.left < 0 && (o = -2 * e.left, e.left = 0, s.offset(e), n = s[0].offsetWidth, i = s[0].offsetHeight), this.replaceArrow(o - a + n, n, "left")) : this.replaceArrow(i - c, i, "top"),
      r && s.offset(e)
    },
    replaceArrow: function(e, t, n) {
      this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    },
    setContent: function() {
      var e = this.tip(),
      t = this.getTitle();
      e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
      e.removeClass("fade in top bottom left right")
    },
    hide: function() {
      function t() {
        var t = setTimeout(function() {
          n.off(e.support.transition.end).detach()
        },
        500);
        n.one(e.support.transition.end, function() {
          clearTimeout(t),
          n.detach()
        })
      }
      var n = this.tip(),
      i = e.Event("hide");
      return this.$element.trigger(i),
      i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(), this.$element.trigger("hidden"), this)
    },
    fixTitle: function() {
      var e = this.$element;
      (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    },
    hasContent: function() {
      return this.getTitle()
    },
    getPosition: function() {
      var t = this.$element[0];
      return e.extend({},
      "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
        width: t.offsetWidth,
        height: t.offsetHeight
      },
      this.$element.offset())
    },
    getTitle: function() {
      var e, t = this.$element,
      n = this.options;
      return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    },
    tip: function() {
      return this.$tip = this.$tip || e(this.options.template)
    },
    arrow: function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    validate: function() {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    enable: function() {
      this.enabled = !0
    },
    disable: function() {
      this.enabled = !1
    },
    toggleEnabled: function() {
      this.enabled = !this.enabled
    },
    toggle: function(t) {
      var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
      n.tip().hasClass("in") ? n.hide() : n.show()
    },
    destroy: function() {
      this.hide().$element.off("." + this.type).removeData(this.type)
    }
  };
  var n = e.fn.tooltip;
  e.fn.tooltip = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("tooltip"),
      r = "object" == typeof n && n;
      o || i.data("tooltip", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.tooltip.Constructor = t,
  e.fn.tooltip.defaults = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  },
  e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = n,
    this
  }
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(e, t) {
    this.init("popover", e, t)
  };
  t.prototype = e.extend({},
  e.fn.tooltip.Constructor.prototype, {
    constructor: t,
    setContent: function() {
      var e = this.tip(),
      t = this.getTitle(),
      n = this.getContent();
      e.find(".popover-title")[this.options.html ? "html" : "text"](t),
      e.find(".popover-content")[this.options.html ? "html" : "text"](n),
      e.removeClass("fade top bottom left right in")
    },
    hasContent: function() {
      return this.getTitle() || this.getContent()
    },
    getContent: function() {
      var e, t = this.$element,
      n = this.options;
      return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content")
    },
    tip: function() {
      return this.$tip || (this.$tip = e(this.options.template)),
      this.$tip
    },
    destroy: function() {
      this.hide().$element.off("." + this.type).removeData(this.type)
    }
  });
  var n = e.fn.popover;
  e.fn.popover = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("popover"),
      r = "object" == typeof n && n;
      o || i.data("popover", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.popover.Constructor = t,
  e.fn.popover.defaults = e.extend({},
  e.fn.tooltip.defaults, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }),
  e.fn.popover.noConflict = function() {
    return e.fn.popover = n,
    this
  }
} (window.jQuery),
!
function(e) {
  "use strict";
  var t = function(t, n) {
    this.$element = e(t),
    this.options = e.extend({},
    e.fn.typeahead.defaults, n),
    this.matcher = this.options.matcher || this.matcher,
    this.sorter = this.options.sorter || this.sorter,
    this.highlighter = this.options.highlighter || this.highlighter,
    this.updater = this.options.updater || this.updater,
    this.source = this.options.source,
    this.$menu = e(this.options.menu),
    this.shown = !1,
    this.listen()
  };
  t.prototype = {
    constructor: t,
    select: function() {
      var e = this.$menu.find(".active").attr("data-value");
      return this.$element.val(this.updater(e)).change(),
      this.hide()
    },
    updater: function(e) {
      return e
    },
    show: function() {
      var t = e.extend({},
      this.$element.position(), {
        height: this.$element[0].offsetHeight
      });
      return this.$menu.insertAfter(this.$element).css({
        top: t.top + t.height,
        left: t.left
      }).show(),
      this.shown = !0,
      this
    },
    hide: function() {
      return this.$menu.hide(),
      this.shown = !1,
      this
    },
    lookup: function() {
      var t;
      return this.query = this.$element.val(),
      !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, t ? this.process(t) : this)
    },
    process: function(t) {
      var n = this;
      return t = e.grep(t, function(e) {
        return n.matcher(e)
      }),
      t = this.sorter(t),
      t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
    },
    matcher: function(e) {
      return~e.toLowerCase().indexOf(this.query.toLowerCase())
    },
    sorter: function(e) {
      for (var t, n = [], i = [], o = []; t = e.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : o.push(t) : n.push(t);
      return n.concat(i, o)
    },
    highlighter: function(e) {
      var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
        return "<strong>" + t + "</strong>"
      })
    },
    render: function(t) {
      var n = this;
      return t = e(t).map(function(t, i) {
        return t = e(n.options.item).attr("data-value", i),
        t.find("a").html(n.highlighter(i)),
        t[0]
      }),
      t.first().addClass("active"),
      this.$menu.html(t),
      this
    },
    next: function() {
      var t = this.$menu.find(".active").removeClass("active"),
      n = t.next();
      n.length || (n = e(this.$menu.find("li")[0])),
      n.addClass("active")
    },
    prev: function() {
      var e = this.$menu.find(".active").removeClass("active"),
      t = e.prev();
      t.length || (t = this.$menu.find("li").last()),
      t.addClass("active")
    },
    listen: function() {
      this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)),
      this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)),
      this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
    },
    eventSupported: function(e) {
      var t = e in this.$element;
      return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]),
      t
    },
    move: function(e) {
      if (this.shown) {
        switch (e.keyCode) {
        case 9:
        case 13:
        case 27:
          e.preventDefault();
          break;
        case 38:
          e.preventDefault(),
          this.prev();
          break;
        case 40:
          e.preventDefault(),
          this.next()
        }
        e.stopPropagation()
      }
    },
    keydown: function(t) {
      this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]),
      this.move(t)
    },
    keypress: function(e) {
      this.suppressKeyPressRepeat || this.move(e)
    },
    keyup: function(e) {
      switch (e.keyCode) {
      case 40:
      case 38:
      case 16:
      case 17:
      case 18:
        break;
      case 9:
      case 13:
        if (!this.shown) return;
        this.select();
        break;
      case 27:
        if (!this.shown) return;
        this.hide();
        break;
      default:
        this.lookup()
      }
      e.stopPropagation(),
      e.preventDefault()
    },
    focus: function() {
      this.focused = !0
    },
    blur: function() {
      this.focused = !1,
      !this.mousedover && this.shown && this.hide()
    },
    click: function(e) {
      e.stopPropagation(),
      e.preventDefault(),
      this.select(),
      this.$element.focus()
    },
    mouseenter: function(t) {
      this.mousedover = !0,
      this.$menu.find(".active").removeClass("active"),
      e(t.currentTarget).addClass("active")
    },
    mouseleave: function() {
      this.mousedover = !1,
      !this.focused && this.shown && this.hide()
    }
  };
  var n = e.fn.typeahead;
  e.fn.typeahead = function(n) {
    return this.each(function() {
      var i = e(this),
      o = i.data("typeahead"),
      r = "object" == typeof n && n;
      o || i.data("typeahead", o = new t(this, r)),
      "string" == typeof n && o[n]()
    })
  },
  e.fn.typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1
  },
  e.fn.typeahead.Constructor = t,
  e.fn.typeahead.noConflict = function() {
    return e.fn.typeahead = n,
    this
  },
  e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
    var t = e(this);
    t.data("typeahead") || t.typeahead(t.data())
  })
} (window.jQuery);
var myApp = angular.module("myApp", []);
myApp.filter("roundInt", function() {
  return function(e) {
    return isNaN(e) ? void 0 : Math.round(e)
  }
}),
myApp.filter("clearZeros", function() {
  return function(e) {
    return isNaN(e) ? void 0 : String(e.toFixed(8)).replace(/0+$/, "")
  }
}),
myApp.filter("nonNegative", function() {
  return function(e) {
    return !isNaN(e) && e > 0 ? e : void 0
  }
}),
function() {}.call(this),
function() {}.call(this),
function() {}.call(this);
var io = "undefined" == typeof module ? {} : module.exports; !
function() {
  if (function(e, t) {
    var n = e;
    n.version = "0.9.11",
    n.protocol = 1,
    n.transports = [],
    n.j = [],
    n.sockets = {},
    n.connect = function(e, i) {
      var o, r, s = n.util.parseUri(e);
      t && t.location && (s.protocol = s.protocol || t.location.protocol.slice(0, -1), s.host = s.host || (t.document ? t.document.domain : t.location.hostname), s.port = s.port || t.location.port),
      o = n.util.uniqueUri(s);
      var a = {
        host: s.host,
        secure: "https" == s.protocol,
        port: s.port || ("https" == s.protocol ? 443 : 80),
        query: s.query || ""
      };
      return n.util.merge(a, i),
      (a["force new connection"] || !n.sockets[o]) && (r = new n.Socket(a)),
      !a["force new connection"] && r && (n.sockets[o] = r),
      r = r || n.sockets[o],
      r.of(s.path.length > 1 ? s.path : "")
    }
  } ("object" == typeof module ? module.exports : this.io = {},
  this), function(e, t) {
    var n = e.util = {},
    i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    n.parseUri = function(e) {
      for (var t = i.exec(e || ""), n = {},
      r = 14; r--;) n[o[r]] = t[r] || "";
      return n
    },
    n.uniqueUri = function(e) {
      var n = e.protocol,
      i = e.host,
      o = e.port;
      return "document" in t ? (i = i || document.domain, o = o || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (i = i || "localhost", !o && "https" == n && (o = 443)),
      (n || "http") + "://" + i + ":" + (o || 80)
    },
    n.query = function(e, t) {
      var i = n.chunkQuery(e || ""),
      o = [];
      n.merge(i, n.chunkQuery(t || ""));
      for (var r in i) i.hasOwnProperty(r) && o.push(r + "=" + i[r]);
      return o.length ? "?" + o.join("&") : ""
    },
    n.chunkQuery = function(e) {
      for (var t, n = {}, i = e.split("&"), o = 0, r = i.length; r > o; ++o) t = i[o].split("="),
      t[0] && (n[t[0]] = t[1]);
      return n
    };
    var r = !1;
    n.load = function(e) {
      return "document" in t && "complete" === document.readyState || r ? e() : (n.on(t, "load", e, !1), void 0)
    },
    n.on = function(e, t, n, i) {
      e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, i)
    },
    n.request = function(e) {
      if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
      if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
      if (!e) try {
        return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
      } catch(t) {}
      return null
    },
    "undefined" != typeof window && n.load(function() {
      r = !0
    }),
    n.defer = function(e) {
      return n.ua.webkit && "undefined" == typeof importScripts ? (n.load(function() {
        setTimeout(e, 100)
      }), void 0) : e()
    },
    n.merge = function(e, t, i, o) {
      var r, s = o || [],
      a = "undefined" == typeof i ? 2 : i;
      for (r in t) t.hasOwnProperty(r) && n.indexOf(s, r) < 0 && ("object" == typeof e[r] && a ? n.merge(e[r], t[r], a - 1, s) : (e[r] = t[r], s.push(t[r])));
      return e
    },
    n.mixin = function(e, t) {
      n.merge(e.prototype, t.prototype)
    },
    n.inherit = function(e, t) {
      function n() {}
      n.prototype = t.prototype,
      e.prototype = new n
    },
    n.isArray = Array.isArray ||
    function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    },
    n.intersect = function(e, t) {
      for (var i = [], o = e.length > t.length ? e : t, r = e.length > t.length ? t : e, s = 0, a = r.length; a > s; s++)~n.indexOf(o, r[s]) && i.push(r[s]);
      return i
    },
    n.indexOf = function(e, t, n) {
      for (var i = e.length, n = 0 > n ? 0 > n + i ? 0 : n + i : n || 0; i > n && e[n] !== t; n++);
      return n >= i ? -1 : n
    },
    n.toArray = function(e) {
      for (var t = [], n = 0, i = e.length; i > n; n++) t.push(e[n]);
      return t
    },
    n.ua = {},
    n.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
    function() {
      try {
        var e = new XMLHttpRequest
      } catch(t) {
        return !1
      }
      return void 0 != e.withCredentials
    } (),
    n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent),
    n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
  } ("undefined" != typeof io ? io : module.exports, this), function(e, t) {
    function n() {}
    e.EventEmitter = n,
    n.prototype.on = function(e, n) {
      return this.$events || (this.$events = {}),
      this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n,
      this
    },
    n.prototype.addListener = n.prototype.on,
    n.prototype.once = function(e, t) {
      function n() {
        i.removeListener(e, n),
        t.apply(this, arguments)
      }
      var i = this;
      return n.listener = t,
      this.on(e, n),
      this
    },
    n.prototype.removeListener = function(e, n) {
      if (this.$events && this.$events[e]) {
        var i = this.$events[e];
        if (t.util.isArray(i)) {
          for (var o = -1, r = 0, s = i.length; s > r; r++) if (i[r] === n || i[r].listener && i[r].listener === n) {
            o = r;
            break
          }
          if (0 > o) return this;
          i.splice(o, 1),
          i.length || delete this.$events[e]
        } else(i === n || i.listener && i.listener === n) && delete this.$events[e]
      }
      return this
    },
    n.prototype.removeAllListeners = function(e) {
      return void 0 === e ? (this.$events = {},
      this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
    },
    n.prototype.listeners = function(e) {
      return this.$events || (this.$events = {}),
      this.$events[e] || (this.$events[e] = []),
      t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]),
      this.$events[e]
    },
    n.prototype.emit = function(e) {
      if (!this.$events) return !1;
      var n = this.$events[e];
      if (!n) return !1;
      var i = Array.prototype.slice.call(arguments, 1);
      if ("function" == typeof n) n.apply(this, i);
      else {
        if (!t.util.isArray(n)) return !1;
        for (var o = n.slice(), r = 0, s = o.length; s > r; r++) o[r].apply(this, i)
      }
      return !0
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(exports, nativeJSON) {
    function f(e) {
      return 10 > e ? "0" + e : e
    }
    function date(e) {
      return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
    }
    function quote(e) {
      return escapable.lastIndex = 0,
      escapable.test(e) ? '"' + e.replace(escapable, function(e) {
        var t = meta[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
      var n, i, o, r, s, a = gap,
      c = t[e];
      switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
      case "string":
        return quote(c);
      case "number":
        return isFinite(c) ? String(c) : "null";
      case "boolean":
      case "null":
        return String(c);
      case "object":
        if (!c) return "null";
        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
          for (r = c.length, n = 0; r > n; n += 1) s[n] = str(n, c) || "null";
          return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]",
          gap = a,
          o
        }
        if (rep && "object" == typeof rep) for (r = rep.length, n = 0; r > n; n += 1)"string" == typeof rep[n] && (i = rep[n], o = str(i, c), o && s.push(quote(i) + (gap ? ": " : ":") + o));
        else for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (o = str(i, c), o && s.push(quote(i) + (gap ? ": " : ":") + o));
        return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}",
        gap = a,
        o
      }
    }
    if (nativeJSON && nativeJSON.parse) return exports.JSON = {
      parse: nativeJSON.parse,
      stringify: nativeJSON.stringify
    };
    var JSON = exports.JSON = {},
    cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap, indent, meta = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    rep;
    JSON.stringify = function(e, t, n) {
      var i;
      if (gap = "", indent = "", "number" == typeof n) for (i = 0; n > i; i += 1) indent += " ";
      else "string" == typeof n && (indent = n);
      if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
        "": e
      });
      throw new Error("JSON.stringify")
    },
    JSON.parse = function(text, reviver) {
      function walk(e, t) {
        var n, i, o = e[t];
        if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
        return reviver.call(e, t, o)
      }
      var j;
      if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
      })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
      "function" == typeof reviver ? walk({
        "": j
      },
      "") : j;
      throw new SyntaxError("JSON.parse")
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function(e, t) {
    var n = e.parser = {},
    i = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
    o = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
    r = n.advice = ["reconnect"],
    s = t.JSON,
    a = t.util.indexOf;
    n.encodePacket = function(e) {
      var t = a(i, e.type),
      n = e.id || "",
      c = e.endpoint || "",
      l = e.ack,
      u = null;
      switch (e.type) {
      case "error":
        var p = e.reason ? a(o, e.reason) : "",
        f = e.advice ? a(r, e.advice) : "";
        ("" !== p || "" !== f) && (u = p + ("" !== f ? "+" + f : ""));
        break;
      case "message":
        "" !== e.data && (u = e.data);
        break;
      case "event":
        var d = {
          name: e.name
        };
        e.args && e.args.length && (d.args = e.args),
        u = s.stringify(d);
        break;
      case "json":
        u = s.stringify(e.data);
        break;
      case "connect":
        e.qs && (u = e.qs);
        break;
      case "ack":
        u = e.ackId + (e.args && e.args.length ? "+" + s.stringify(e.args) : "")
      }
      var h = [t, n + ("data" == l ? "+" : ""), c];
      return null !== u && void 0 !== u && h.push(u),
      h.join(":")
    },
    n.encodePayload = function(e) {
      var t = "";
      if (1 == e.length) return e[0];
      for (var n = 0, i = e.length; i > n; n++) {
        var o = e[n];
        t += "�" + o.length + "�" + e[n]
      }
      return t
    };
    var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
    n.decodePacket = function(e) {
      var t = e.match(c);
      if (!t) return {};
      var n = t[2] || "",
      e = t[5] || "",
      a = {
        type: i[t[1]],
        endpoint: t[4] || ""
      };
      switch (n && (a.id = n, a.ack = t[3] ? "data" : !0), a.type) {
      case "error":
        var t = e.split("+");
        a.reason = o[t[0]] || "",
        a.advice = r[t[1]] || "";
        break;
      case "message":
        a.data = e || "";
        break;
      case "event":
        try {
          var l = s.parse(e);
          a.name = l.name,
          a.args = l.args
        } catch(u) {}
        a.args = a.args || [];
        break;
      case "json":
        try {
          a.data = s.parse(e)
        } catch(u) {}
        break;
      case "connect":
        a.qs = e || "";
        break;
      case "ack":
        var t = e.match(/^([0-9]+)(\+)?(.*)/);
        if (t && (a.ackId = t[1], a.args = [], t[3])) try {
          a.args = t[3] ? s.parse(t[3]) : []
        } catch(u) {}
        break;
      case "disconnect":
      case "heartbeat":
      }
      return a
    },
    n.decodePayload = function(e) {
      if ("�" == e.charAt(0)) {
        for (var t = [], i = 1, o = ""; i < e.length; i++)"�" == e.charAt(i) ? (t.push(n.decodePacket(e.substr(i + 1).substr(0, o))), i += Number(o) + 1, o = "") : o += e.charAt(i);
        return t
      }
      return[n.decodePacket(e)]
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t) {
    function n(e, t) {
      this.socket = e,
      this.sessid = t
    }
    e.Transport = n,
    t.util.mixin(n, t.EventEmitter),
    n.prototype.heartbeats = function() {
      return !0
    },
    n.prototype.onData = function(e) {
      if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
        var n = t.parser.decodePayload(e);
        if (n && n.length) for (var i = 0, o = n.length; o > i; i++) this.onPacket(n[i])
      }
      return this
    },
    n.prototype.onPacket = function(e) {
      return this.socket.setHeartbeatTimeout(),
      "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
    },
    n.prototype.setCloseTimeout = function() {
      if (!this.closeTimeout) {
        var e = this;
        this.closeTimeout = setTimeout(function() {
          e.onDisconnect()
        },
        this.socket.closeTimeout)
      }
    },
    n.prototype.onDisconnect = function() {
      return this.isOpen && this.close(),
      this.clearTimeouts(),
      this.socket.onDisconnect(),
      this
    },
    n.prototype.onConnect = function() {
      return this.socket.onConnect(),
      this
    },
    n.prototype.clearCloseTimeout = function() {
      this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
    },
    n.prototype.clearTimeouts = function() {
      this.clearCloseTimeout(),
      this.reopenTimeout && clearTimeout(this.reopenTimeout)
    },
    n.prototype.packet = function(e) {
      this.send(t.parser.encodePacket(e))
    },
    n.prototype.onHeartbeat = function() {
      this.packet({
        type: "heartbeat"
      })
    },
    n.prototype.onOpen = function() {
      this.isOpen = !0,
      this.clearCloseTimeout(),
      this.socket.onOpen()
    },
    n.prototype.onClose = function() {
      this.isOpen = !1,
      this.socket.onClose(),
      this.onDisconnect()
    },
    n.prototype.prepareUrl = function() {
      var e = this.socket.options;
      return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
    },
    n.prototype.ready = function(e, t) {
      t.call(this)
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t, n) {
    function i(e) {
      if (this.options = {
        port: 80,
        secure: !1,
        document: "document" in n ? document : !1,
        resource: "socket.io",
        transports: t.transports,
        "connect timeout": 1e4,
        "try multiple transports": !0,
        reconnect: !0,
        "reconnection delay": 500,
        "reconnection limit": 1 / 0,
        "reopen delay": 3e3,
        "max reconnection attempts": 10,
        "sync disconnect on unload": !1,
        "auto connect": !0,
        "flash policy port": 10843,
        manualFlush: !1
      },
      t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {},
      this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
        var i = this;
        t.util.on(n, "beforeunload", function() {
          i.disconnectSync()
        },
        !1)
      }
      this.options["auto connect"] && this.connect()
    }
    function o() {}
    e.Socket = i,
    t.util.mixin(i, t.EventEmitter),
    i.prototype.of = function(e) {
      return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({
        type: "connect"
      })),
      this.namespaces[e]
    },
    i.prototype.publish = function() {
      this.emit.apply(this, arguments);
      var e;
      for (var t in this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t), e.$emit.apply(e, arguments))
    },
    i.prototype.handshake = function(e) {
      function n(t) {
        t instanceof Error ? (i.connecting = !1, i.onError(t.message)) : e.apply(null, t.split(":"))
      }
      var i = this,
      r = this.options,
      s = ["http" + (r.secure ? "s" : "") + ":/", r.host + ":" + r.port, r.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
      if (this.isXDomain() && !t.util.ua.hasCORS) {
        var a = document.getElementsByTagName("script")[0],
        c = document.createElement("script");
        c.src = s + "&jsonp=" + t.j.length,
        a.parentNode.insertBefore(c, a),
        t.j.push(function(e) {
          n(e),
          c.parentNode.removeChild(c)
        })
      } else {
        var l = t.util.request();
        l.open("GET", s, !0),
        this.isXDomain() && (l.withCredentials = !0),
        l.onreadystatechange = function() {
          4 == l.readyState && (l.onreadystatechange = o, 200 == l.status ? n(l.responseText) : 403 == l.status ? i.onError(l.responseText) : (i.connecting = !1, !i.reconnecting && i.onError(l.responseText)))
        },
        l.send(null)
      }
    },
    i.prototype.getTransport = function(e) {
      for (var n, i = e || this.transports, o = 0; n = i[o]; o++) if (t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) return new t.Transport[n](this, this.sessionid);
      return null
    },
    i.prototype.connect = function(e) {
      if (this.connecting) return this;
      var n = this;
      return n.connecting = !0,
      this.handshake(function(i, o, r, s) {
        function a(e) {
          return n.transport && n.transport.clearTimeouts(),
          n.transport = n.getTransport(e),
          n.transport ? (n.transport.ready(n, function() {
            n.connecting = !0,
            n.publish("connecting", n.transport.name),
            n.transport.open(),
            n.options["connect timeout"] && (n.connectTimeoutTimer = setTimeout(function() {
              if (!n.connected && (n.connecting = !1, n.options["try multiple transports"])) {
                for (var e = n.transports; e.length > 0 && e.splice(0, 1)[0] != n.transport.name;);
                e.length ? a(e) : n.publish("connect_failed")
              }
            },
            n.options["connect timeout"]))
          }), void 0) : n.publish("connect_failed")
        }
        n.sessionid = i,
        n.closeTimeout = 1e3 * r,
        n.heartbeatTimeout = 1e3 * o,
        n.transports || (n.transports = n.origTransports = s ? t.util.intersect(s.split(","), n.options.transports) : n.options.transports),
        n.setHeartbeatTimeout(),
        a(n.transports),
        n.once("connect", function() {
          clearTimeout(n.connectTimeoutTimer),
          e && "function" == typeof e && e()
        })
      }),
      this
    },
    i.prototype.setHeartbeatTimeout = function() {
      if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
        var e = this;
        this.heartbeatTimeoutTimer = setTimeout(function() {
          e.transport.onClose()
        },
        this.heartbeatTimeout)
      }
    },
    i.prototype.packet = function(e) {
      return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e),
      this
    },
    i.prototype.setBuffer = function(e) {
      this.doBuffer = e,
      !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
    },
    i.prototype.flushBuffer = function() {
      this.transport.payload(this.buffer),
      this.buffer = []
    },
    i.prototype.disconnect = function() {
      return (this.connected || this.connecting) && (this.open && this.of("").packet({
        type: "disconnect"
      }), this.onDisconnect("booted")),
      this
    },
    i.prototype.disconnectSync = function() {
      var e = t.util.request(),
      n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
      e.open("GET", n, !1),
      e.send(null),
      this.onDisconnect("booted")
    },
    i.prototype.isXDomain = function() {
      var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
      return this.options.host !== n.location.hostname || this.options.port != e
    },
    i.prototype.onConnect = function() {
      this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
    },
    i.prototype.onOpen = function() {
      this.open = !0
    },
    i.prototype.onClose = function() {
      this.open = !1,
      clearTimeout(this.heartbeatTimeoutTimer)
    },
    i.prototype.onPacket = function(e) {
      this.of(e.endpoint).onPacket(e)
    },
    i.prototype.onError = function(e) {
      e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()),
      this.publish("error", e && e.reason ? e.reason : e)
    },
    i.prototype.onDisconnect = function(e) {
      var t = this.connected,
      n = this.connecting;
      this.connected = !1,
      this.connecting = !1,
      this.open = !1,
      (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()))
    },
    i.prototype.reconnect = function() {
      function e() {
        if (n.connected) {
          for (var e in n.namespaces) n.namespaces.hasOwnProperty(e) && "" !== e && n.namespaces[e].packet({
            type: "connect"
          });
          n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
        }
        clearTimeout(n.reconnectionTimer),
        n.removeListener("connect_failed", t),
        n.removeListener("connect", t),
        n.reconnecting = !1,
        delete n.reconnectionAttempts,
        delete n.reconnectionDelay,
        delete n.reconnectionTimer,
        delete n.redoTransports,
        n.options["try multiple transports"] = o
      }
      function t() {
        return n.reconnecting ? n.connected ? e() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(t, 1e3) : (n.reconnectionAttempts++>=i ? n.redoTransports ? (n.publish("reconnect_failed"), e()) : (n.on("connect_failed", t), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < r && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(t, n.reconnectionDelay)), void 0) : void 0
      }
      this.reconnecting = !0,
      this.reconnectionAttempts = 0,
      this.reconnectionDelay = this.options["reconnection delay"];
      var n = this,
      i = this.options["max reconnection attempts"],
      o = this.options["try multiple transports"],
      r = this.options["reconnection limit"];
      this.options["try multiple transports"] = !1,
      this.reconnectionTimer = setTimeout(t, this.reconnectionDelay),
      this.on("connect", t)
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(e, t) {
    function n(e, t) {
      this.socket = e,
      this.name = t || "",
      this.flags = {},
      this.json = new i(this, "json"),
      this.ackPackets = 0,
      this.acks = {}
    }
    function i(e, t) {
      this.namespace = e,
      this.name = t
    }
    e.SocketNamespace = n,
    t.util.mixin(n, t.EventEmitter),
    n.prototype.$emit = t.EventEmitter.prototype.emit,
    n.prototype.of = function() {
      return this.socket.of.apply(this.socket, arguments)
    },
    n.prototype.packet = function(e) {
      return e.endpoint = this.name,
      this.socket.packet(e),
      this.flags = {},
      this
    },
    n.prototype.send = function(e, t) {
      var n = {
        type: this.flags.json ? "json" : "message",
        data: e
      };
      return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t),
      this.packet(n)
    },
    n.prototype.emit = function(e) {
      var t = Array.prototype.slice.call(arguments, 1),
      n = t[t.length - 1],
      i = {
        type: "event",
        name: e
      };
      return "function" == typeof n && (i.id = ++this.ackPackets, i.ack = "data", this.acks[i.id] = n, t = t.slice(0, t.length - 1)),
      i.args = t,
      this.packet(i)
    },
    n.prototype.disconnect = function() {
      return "" === this.name ? this.socket.disconnect() : (this.packet({
        type: "disconnect"
      }), this.$emit("disconnect")),
      this
    },
    n.prototype.onPacket = function(e) {
      function n() {
        i.packet({
          type: "ack",
          args: t.util.toArray(arguments),
          ackId: e.id
        })
      }
      var i = this;
      switch (e.type) {
      case "connect":
        this.$emit("connect");
        break;
      case "disconnect":
        "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
        break;
      case "message":
      case "json":
        var o = ["message", e.data];
        "data" == e.ack ? o.push(n) : e.ack && this.packet({
          type: "ack",
          ackId: e.id
        }),
        this.$emit.apply(this, o);
        break;
      case "event":
        var o = [e.name].concat(e.args);
        "data" == e.ack && o.push(n),
        this.$emit.apply(this, o);
        break;
      case "ack":
        this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
        break;
      case "error":
        e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
      }
    },
    i.prototype.send = function() {
      this.namespace.flags[this.name] = !0,
      this.namespace.send.apply(this.namespace, arguments)
    },
    i.prototype.emit = function() {
      this.namespace.flags[this.name] = !0,
      this.namespace.emit.apply(this.namespace, arguments)
    }
  } ("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t, n) {
    function i() {
      t.Transport.apply(this, arguments)
    }
    e.websocket = i,
    t.util.inherit(i, t.Transport),
    i.prototype.name = "websocket",
    i.prototype.open = function() {
      var e, i = t.util.query(this.socket.options.query),
      o = this;
      return e || (e = n.MozWebSocket || n.WebSocket),
      this.websocket = new e(this.prepareUrl() + i),
      this.websocket.onopen = function() {
        o.onOpen(),
        o.socket.setBuffer(!1)
      },
      this.websocket.onmessage = function(e) {
        o.onData(e.data)
      },
      this.websocket.onclose = function() {
        o.onClose(),
        o.socket.setBuffer(!0)
      },
      this.websocket.onerror = function(e) {
        o.onError(e)
      },
      this
    },
    i.prototype.send = t.util.ua.iDevice ?
    function(e) {
      var t = this;
      return setTimeout(function() {
        t.websocket.send(e)
      },
      0),
      this
    } : function(e) {
      return this.websocket.send(e),
      this
    },
    i.prototype.payload = function(e) {
      for (var t = 0, n = e.length; n > t; t++) this.packet(e[t]);
      return this
    },
    i.prototype.close = function() {
      return this.websocket.close(),
      this
    },
    i.prototype.onError = function(e) {
      this.socket.onError(e)
    },
    i.prototype.scheme = function() {
      return this.socket.options.secure ? "wss" : "ws"
    },
    i.check = function() {
      return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
    },
    i.xdomainCheck = function() {
      return !0
    },
    t.transports.push("websocket")
  } ("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(e, t) {
    function n() {
      t.Transport.websocket.apply(this, arguments)
    }
    e.flashsocket = n,
    t.util.inherit(n, t.Transport.websocket),
    n.prototype.name = "flashsocket",
    n.prototype.open = function() {
      var e = this,
      n = arguments;
      return WebSocket.__addTask(function() {
        t.Transport.websocket.prototype.open.apply(e, n)
      }),
      this
    },
    n.prototype.send = function() {
      var e = this,
      n = arguments;
      return WebSocket.__addTask(function() {
        t.Transport.websocket.prototype.send.apply(e, n)
      }),
      this
    },
    n.prototype.close = function() {
      return WebSocket.__tasks.length = 0,
      t.Transport.websocket.prototype.close.call(this),
      this
    },
    n.prototype.ready = function(e, i) {
      function o() {
        var t = e.options,
        o = t["flash policy port"],
        s = ["http" + (t.secure ? "s" : "") + ":/", t.host + ":" + t.port, t.resource, "static/flashsocket", "WebSocketMain" + (e.isXDomain() ? "Insecure" : "") + ".swf"];
        n.loaded || ("undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = s.join("/")), 843 !== o && WebSocket.loadFlashPolicyFile("xmlsocket://" + t.host + ":" + o), WebSocket.__initialize(), n.loaded = !0),
        i.call(r)
      }
      var r = this;
      return document.body ? o() : (t.util.load(o), void 0)
    },
    n.check = function() {
      return "undefined" != typeof WebSocket && "__initialize" in WebSocket && swfobject ? swfobject.getFlashPlayerVersion().major >= 10 : !1
    },
    n.xdomainCheck = function() {
      return !0
    },
    "undefined" != typeof window && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0),
    t.transports.push("flashsocket")
  } ("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), "undefined" != typeof window) var swfobject = function() {
    function e() {
      if (!R) {
        try {
          var e = F.getElementsByTagName("body")[0].appendChild(g("span"));
          e.parentNode.removeChild(e)
        } catch(t) {
          return
        }
        R = !0;
        for (var n = P.length, i = 0; n > i; i++) P[i]()
      }
    }
    function t(e) {
      R ? e() : P[P.length] = e
    }
    function n(e) {
      if (typeof W.addEventListener != N) W.addEventListener("load", e, !1);
      else if (typeof F.addEventListener != N) F.addEventListener("load", e, !1);
      else if (typeof W.attachEvent != N) y(W, "onload", e);
      else if ("function" == typeof W.onload) {
        var t = W.onload;
        W.onload = function() {
          t(),
          e()
        }
      } else W.onload = e
    }
    function i() {
      I ? o() : r()
    }
    function o() {
      var e = F.getElementsByTagName("body")[0],
      t = g(j);
      t.setAttribute("type", D);
      var n = e.appendChild(t);
      if (n) {
        var i = 0; !
        function() {
          if (typeof n.GetVariable != N) {
            var o = n.GetVariable("$version");
            o && (o = o.split(" ")[1].split(","), U.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
          } else if (10 > i) return i++,
          setTimeout(arguments.callee, 10),
          void 0;
          e.removeChild(t),
          n = null,
          r()
        } ()
      } else r()
    }
    function r() {
      var e = q.length;
      if (e > 0) for (var t = 0; e > t; t++) {
        var n = q[t].id,
        i = q[t].callbackFn,
        o = {
          success: !1,
          id: n
        };
        if (U.pv[0] > 0) {
          var r = m(n);
          if (r) if (!v(q[t].swfVersion) || U.wk && U.wk < 312) if (q[t].expressInstall && a()) {
            var u = {};
            u.data = q[t].expressInstall,
            u.width = r.getAttribute("width") || "0",
            u.height = r.getAttribute("height") || "0",
            r.getAttribute("class") && (u.styleclass = r.getAttribute("class")),
            r.getAttribute("align") && (u.align = r.getAttribute("align"));
            for (var p = {}, f = r.getElementsByTagName("param"), d = f.length, h = 0; d > h; h++)"movie" != f[h].getAttribute("name").toLowerCase() && (p[f[h].getAttribute("name")] = f[h].getAttribute("value"));
            c(u, p, n, i)
          } else l(r),
          i && i(o);
          else w(n, !0),
          i && (o.success = !0, o.ref = s(n), i(o))
        } else if (w(n, !0), i) {
          var g = s(n);
          g && typeof g.SetVariable != N && (o.success = !0, o.ref = g),
          i(o)
        }
      }
    }
    function s(e) {
      var t = null,
      n = m(e);
      if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != N) t = n;
      else {
        var i = n.getElementsByTagName(j)[0];
        i && (t = i)
      }
      return t
    }
    function a() {
      return !z && v("6.0.65") && (U.win || U.mac) && !(U.wk && U.wk < 312)
    }
    function c(e, t, n, i) {
      z = !0,
      C = i || null,
      S = {
        success: !1,
        id: n
      };
      var o = m(n);
      if (o) {
        "OBJECT" == o.nodeName ? (k = u(o), T = null) : (k = o, T = n),
        e.id = L,
        (typeof e.width == N || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"),
        (typeof e.height == N || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"),
        F.title = F.title.slice(0, 47) + " - Flash Player Installation";
        var r = U.ie && U.win ? ["Active"].concat("").join("X") : "PlugIn",
        s = "MMredirectURL=" + W.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + F.title;
        if (typeof t.flashvars != N ? t.flashvars += "&" + s : t.flashvars = s, U.ie && U.win && 4 != o.readyState) {
          var a = g("div");
          n += "SWFObjectNew",
          a.setAttribute("id", n),
          o.parentNode.insertBefore(a, o),
          o.style.display = "none",
          function() {
            4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
          } ()
        }
        p(e, t, n)
      }
    }
    function l(e) {
      if (U.ie && U.win && 4 != e.readyState) {
        var t = g("div");
        e.parentNode.insertBefore(t, e),
        t.parentNode.replaceChild(u(e), t),
        e.style.display = "none",
        function() {
          4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
        } ()
      } else e.parentNode.replaceChild(u(e), e)
    }
    function u(e) {
      var t = g("div");
      if (U.win && U.ie) t.innerHTML = e.innerHTML;
      else {
        var n = e.getElementsByTagName(j)[0];
        if (n) {
          var i = n.childNodes;
          if (i) for (var o = i.length, r = 0; o > r; r++)(1 != i[r].nodeType || "PARAM" != i[r].nodeName) && 8 != i[r].nodeType && t.appendChild(i[r].cloneNode(!0))
        }
      }
      return t
    }
    function p(e, t, n) {
      var i, o = m(n);
      if (U.wk && U.wk < 312) return i;
      if (o) if (typeof e.id == N && (e.id = n), U.ie && U.win) {
        var r = "";
        for (var s in e) e[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? t.movie = e[s] : "styleclass" == s.toLowerCase() ? r += ' class="' + e[s] + '"' : "classid" != s.toLowerCase() && (r += " " + s + '="' + e[s] + '"'));
        var a = "";
        for (var c in t) t[c] != Object.prototype[c] && (a += '<param name="' + c + '" value="' + t[c] + '" />');
        o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + a + "</object>",
        M[M.length] = e.id,
        i = m(e.id)
      } else {
        var l = g(j);
        l.setAttribute("type", D);
        for (var u in e) e[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? l.setAttribute("class", e[u]) : "classid" != u.toLowerCase() && l.setAttribute(u, e[u]));
        for (var p in t) t[p] != Object.prototype[p] && "movie" != p.toLowerCase() && f(l, p, t[p]);
        o.parentNode.replaceChild(l, o),
        i = l
      }
      return i
    }
    function f(e, t, n) {
      var i = g("param");
      i.setAttribute("name", t),
      i.setAttribute("value", n),
      e.appendChild(i)
    }
    function d(e) {
      var t = m(e);
      t && "OBJECT" == t.nodeName && (U.ie && U.win ? (t.style.display = "none", function() {
        4 == t.readyState ? h(e) : setTimeout(arguments.callee, 10)
      } ()) : t.parentNode.removeChild(t))
    }
    function h(e) {
      var t = m(e);
      if (t) {
        for (var n in t)"function" == typeof t[n] && (t[n] = null);
        t.parentNode.removeChild(t)
      }
    }
    function m(e) {
      var t = null;
      try {
        t = F.getElementById(e)
      } catch(n) {}
      return t
    }
    function g(e) {
      return F.createElement(e)
    }
    function y(e, t, n) {
      e.attachEvent(t, n),
      B[B.length] = [e, t, n]
    }
    function v(e) {
      var t = U.pv,
      n = e.split(".");
      return n[0] = parseInt(n[0], 10),
      n[1] = parseInt(n[1], 10) || 0,
      n[2] = parseInt(n[2], 10) || 0,
      t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function b(e, t, n, i) {
      if (!U.ie || !U.mac) {
        var o = F.getElementsByTagName("head")[0];
        if (o) {
          var r = n && "string" == typeof n ? n : "screen";
          if (i && (E = null, $ = null), !E || $ != r) {
            var s = g("style");
            s.setAttribute("type", "text/css"),
            s.setAttribute("media", r),
            E = o.appendChild(s),
            U.ie && U.win && typeof F.styleSheets != N && F.styleSheets.length > 0 && (E = F.styleSheets[F.styleSheets.length - 1]),
            $ = r
          }
          U.ie && U.win ? E && typeof E.addRule == j && E.addRule(e, t) : E && typeof F.createTextNode != N && E.appendChild(F.createTextNode(e + " {" + t + "}"))
        }
      }
    }
    function w(e, t) {
      if (X) {
        var n = t ? "visible" : "hidden";
        R && m(e) ? m(e).style.visibility = n : b("#" + e, "visibility:" + n)
      }
    }
    function x(e) {
      var t = /[\\\"<>\.;]/,
      n = null != t.exec(e);
      return n && typeof encodeURIComponent != N ? encodeURIComponent(e) : e
    } {
      var k, T, C, S, E, $, N = "undefined",
      j = "object",
      A = "Shockwave Flash",
      _ = "ShockwaveFlash.ShockwaveFlash",
      D = "application/x-shockwave-flash",
      L = "SWFObjectExprInst",
      O = "onreadystatechange",
      W = window,
      F = document,
      H = navigator,
      I = !1,
      P = [i],
      q = [],
      M = [],
      B = [],
      R = !1,
      z = !1,
      X = !0,
      U = function() {
        var e = typeof F.getElementById != N && typeof F.getElementsByTagName != N && typeof F.createElement != N,
        t = H.userAgent.toLowerCase(),
        n = H.platform.toLowerCase(),
        i = n ? /win/.test(n) : /win/.test(t),
        o = n ? /mac/.test(n) : /mac/.test(t),
        r = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
        s = !1,
        a = [0, 0, 0],
        c = null;
        if (typeof H.plugins != N && typeof H.plugins[A] == j) c = H.plugins[A].description,
        c && (typeof H.mimeTypes == N || !H.mimeTypes[D] || !!H.mimeTypes[D].enabledPlugin) && (I = !0, s = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof W[["Active"].concat("Object").join("X")] != N) try {
          var l = new(window[["Active"].concat("Object").join("X")])(_);
          l && (c = l.GetVariable("$version"), c && (s = !0, c = c.split(" ")[1].split(","), a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
        } catch(u) {}
        return {
          w3: e,
          pv: a,
          wk: r,
          ie: s,
          win: i,
          mac: o
        }
      } (); !
      function() {
        U.w3 && ((typeof F.readyState != N && "complete" == F.readyState || typeof F.readyState == N && (F.getElementsByTagName("body")[0] || F.body)) && e(), R || (typeof F.addEventListener != N && F.addEventListener("DOMContentLoaded", e, !1), U.ie && U.win && (F.attachEvent(O, function() {
          "complete" == F.readyState && (F.detachEvent(O, arguments.callee), e())
        }), W == top &&
        function() {
          if (!R) {
            try {
              F.documentElement.doScroll("left")
            } catch(t) {
              return setTimeout(arguments.callee, 0),
              void 0
            }
            e()
          }
        } ()), U.wk &&
        function() {
          return R ? void 0 : /loaded|complete/.test(F.readyState) ? (e(), void 0) : (setTimeout(arguments.callee, 0), void 0)
        } (), n(e)))
      } (),
      function() {
        U.ie && U.win && window.attachEvent("onunload", function() {
          for (var e = B.length, t = 0; e > t; t++) B[t][0].detachEvent(B[t][1], B[t][2]);
          for (var n = M.length, i = 0; n > i; i++) d(M[i]);
          for (var o in U) U[o] = null;
          U = null;
          for (var r in swfobject) swfobject[r] = null;
          swfobject = null
        })
      } ()
    }
    return {
      registerObject: function(e, t, n, i) {
        if (U.w3 && e && t) {
          var o = {};
          o.id = e,
          o.swfVersion = t,
          o.expressInstall = n,
          o.callbackFn = i,
          q[q.length] = o,
          w(e, !1)
        } else i && i({
          success: !1,
          id: e
        })
      },
      getObjectById: function(e) {
        return U.w3 ? s(e) : void 0
      },
      embedSWF: function(e, n, i, o, r, s, l, u, f, d) {
        var h = {
          success: !1,
          id: n
        };
        U.w3 && !(U.wk && U.wk < 312) && e && n && i && o && r ? (w(n, !1), t(function() {
          i += "",
          o += "";
          var t = {};
          if (f && typeof f === j) for (var m in f) t[m] = f[m];
          t.data = e,
          t.width = i,
          t.height = o;
          var g = {};
          if (u && typeof u === j) for (var y in u) g[y] = u[y];
          if (l && typeof l === j) for (var b in l) typeof g.flashvars != N ? g.flashvars += "&" + b + "=" + l[b] : g.flashvars = b + "=" + l[b];
          if (v(r)) {
            var x = p(t, g, n);
            t.id == n && w(n, !0),
            h.success = !0,
            h.ref = x
          } else {
            if (s && a()) return t.data = s,
            c(t, g, n, d),
            void 0;
            w(n, !0)
          }
          d && d(h)
        })) : d && d(h)
      },
      switchOffAutoHideShow: function() {
        X = !1
      },
      ua: U,
      getFlashPlayerVersion: function() {
        return {
          major: U.pv[0],
          minor: U.pv[1],
          release: U.pv[2]
        }
      },
      hasFlashPlayerVersion: v,
      createSWF: function(e, t, n) {
        return U.w3 ? p(e, t, n) : void 0
      },
      showExpressInstall: function(e, t, n, i) {
        U.w3 && a() && c(e, t, n, i)
      },
      removeSWF: function(e) {
        U.w3 && d(e)
      },
      createCSS: function(e, t, n, i) {
        U.w3 && b(e, t, n, i)
      },
      addDomLoadEvent: t,
      addLoadEvent: n,
      getQueryParamValue: function(e) {
        var t = F.location.search || F.location.hash;
        if (t) {
          if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return x(t);
          for (var n = t.split("&"), i = 0; i < n.length; i++) if (n[i].substring(0, n[i].indexOf("=")) == e) return x(n[i].substring(n[i].indexOf("=") + 1))
        }
        return ""
      },
      expressInstallCallback: function() {
        if (z) {
          var e = m(L);
          e && k && (e.parentNode.replaceChild(k, e), T && (w(T, !0), U.ie && U.win && (k.style.display = "block")), C && C(S)),
          z = !1
        }
      }
    }
  } (); !
  function() {
    if ("undefined" != typeof window && !window.WebSocket) {
      var e = window.console;
      return e && e.log && e.error || (e = {
        log: function() {},
        error: function() {}
      }),
      swfobject.hasFlashPlayerVersion("10.0.0") ? ("file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function(e, t, n, i, o) {
        var r = this;
        r.__id = WebSocket.__nextId++,
        WebSocket.__instances[r.__id] = r,
        r.readyState = WebSocket.CONNECTING,
        r.bufferedAmount = 0,
        r.__events = {},
        t ? "string" == typeof t && (t = [t]) : t = [],
        setTimeout(function() {
          WebSocket.__addTask(function() {
            WebSocket.__flash.create(r.__id, e, t, n || null, i || 0, o || null)
          })
        },
        0)
      },
      WebSocket.prototype.send = function(e) {
        if (this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";
        var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
        return 0 > t ? !0 : (this.bufferedAmount += t, !1)
      },
      WebSocket.prototype.close = function() {
        this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
      },
      WebSocket.prototype.addEventListener = function(e, t) {
        e in this.__events || (this.__events[e] = []),
        this.__events[e].push(t)
      },
      WebSocket.prototype.removeEventListener = function(e, t) {
        if (e in this.__events) for (var n = this.__events[e], i = n.length - 1; i >= 0; --i) if (n[i] === t) {
          n.splice(i, 1);
          break
        }
      },
      WebSocket.prototype.dispatchEvent = function(e) {
        for (var t = this.__events[e.type] || [], n = 0; n < t.length; ++n) t[n](e);
        var i = this["on" + e.type];
        i && i(e)
      },
      WebSocket.prototype.__handleEvent = function(e) {
        "readyState" in e && (this.readyState = e.readyState),
        "protocol" in e && (this.protocol = e.protocol);
        var t;
        if ("open" == e.type || "error" == e.type) t = this.__createSimpleEvent(e.type);
        else if ("close" == e.type) t = this.__createSimpleEvent("close");
        else {
          if ("message" != e.type) throw "unknown event type: " + e.type;
          var n = decodeURIComponent(e.message);
          t = this.__createMessageEvent("message", n)
        }
        this.dispatchEvent(t)
      },
      WebSocket.prototype.__createSimpleEvent = function(e) {
        if (document.createEvent && window.Event) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !1, !1),
          t
        }
        return {
          type: e,
          bubbles: !1,
          cancelable: !1
        }
      },
      WebSocket.prototype.__createMessageEvent = function(e, t) {
        if (document.createEvent && window.MessageEvent && !window.opera) {
          var n = document.createEvent("MessageEvent");
          return n.initMessageEvent("message", !1, !1, t, null, null, window, null),
          n
        }
        return {
          type: e,
          data: t,
          bubbles: !1,
          cancelable: !1
        }
      },
      WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {},
      WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(e) {
        WebSocket.__addTask(function() {
          WebSocket.__flash.loadManualPolicyFile(e)
        })
      },
      WebSocket.__initialize = function() {
        if (!WebSocket.__flash) {
          if (WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"),
          void 0;
          var t = document.createElement("div");
          t.id = "webSocketContainer",
          t.style.position = "absolute",
          WebSocket.__isFlashLite() ? (t.style.left = "0px", t.style.top = "0px") : (t.style.left = "-100px", t.style.top = "-100px");
          var n = document.createElement("div");
          n.id = "webSocketFlash",
          t.appendChild(n),
          document.body.appendChild(t),
          swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
            hasPriority: !0,
            swliveconnect: !0,
            allowScriptAccess: "always"
          },
          null, function(t) {
            t.success || e.error("[WebSocket] swfobject.embedSWF failed")
          })
        }
      },
      WebSocket.__onFlashInitialized = function() {
        setTimeout(function() {
          WebSocket.__flash = document.getElementById("webSocketFlash"),
          WebSocket.__flash.setCallerUrl(location.href),
          WebSocket.__flash.setDebug( !! window.WEB_SOCKET_DEBUG);
          for (var e = 0; e < WebSocket.__tasks.length; ++e) WebSocket.__tasks[e]();
          WebSocket.__tasks = []
        },
        0)
      },
      WebSocket.__onFlashEvent = function() {
        return setTimeout(function() {
          try {
            for (var t = WebSocket.__flash.receiveEvents(), n = 0; n < t.length; ++n) WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])
          } catch(i) {
            e.error(i)
          }
        },
        0),
        !0
      },
      WebSocket.__log = function(t) {
        e.log(decodeURIComponent(t))
      },
      WebSocket.__error = function(t) {
        e.error(decodeURIComponent(t))
      },
      WebSocket.__addTask = function(e) {
        WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
      },
      WebSocket.__isFlashLite = function() {
        if (!window.navigator || !window.navigator.mimeTypes) return !1;
        var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
        return e && e.enabledPlugin && e.enabledPlugin.filename ? e.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1 : !1
      },
      window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
        WebSocket.__initialize()
      },
      !1) : window.attachEvent("onload", function() {
        WebSocket.__initialize()
      })), void 0) : (e.error("Flash Player >= 10.0.0 is required."), void 0)
    }
  } (),
  "function" == typeof define && define.amd && define([], function() {
    return io
  })
} (),
SATOSHI = 1e8,
$(document).ready(function() {
  $("abbr[title], abbr[data-original-title]").tooltip(),
  $(".pop").popover(),
  $(".pop-html").popover({
    html: !0
  }),
  $(".tip").tooltip(),
  $("#notificationModal").modal(),
  calcTotal(),
  ticker()
});
