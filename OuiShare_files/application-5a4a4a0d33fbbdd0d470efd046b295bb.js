function $JssorPlayerClass$() {
    function t(t) {
        function e(n) {
            var r = $Jssor$.$EventSrc(n);
            i = r.pInstance, $Jssor$.$RemoveEvent(r, "dataavailable", e), $Jssor$.$Each(o, function(t) {
                t != i && t.$Remove()
            }), t.pTagName = i.tagName, o = null
        }

        function n(n) {
            var i;
            if (!n.pInstance) {
                var r = $Jssor$.$AttributeEx(n, "pHandler");
                $JssorPlayer$[r] && ($Jssor$.$AddEvent(n, "dataavailable", e), i = new $JssorPlayer$[r](t, n), o.push(i), $JssorDebug$.$Execute(function() {
                    "function" != $Jssor$.$Type(i.$Remove) && $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + r + "'.")
                }))
            }
            return i
        }
        var i, r = this,
            o = [];
        r.$InitPlayerController = function() {
            if (!t.pInstance && !n(t)) {
                var e = $Jssor$.$Children(t);
                $Jssor$.$Each(e, function(t) {
                    n(t)
                })
            }
        }
    }
    var e = this,
        n = [];
    e.$EVT_SWITCH = 21, e.$FetchPlayers = function(e) {
        e = e || document.body;
        var i = $Jssor$.$FindChildren(e, "player");
        $Jssor$.$Each(i, function(e) {
            n[e.pId] || (e.pId = n.length, n.push(new t(e)));
            var i = n[e.pId];
            i.$InitPlayerController()
        })
    }
}

function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0), this.$Revert = $Jssor$.$EmptyFunction
}
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = rt.type(t);
            return "function" === n || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (rt.isFunction(e)) return rt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return rt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (dt.test(e)) return rt.filter(e, t, n);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function(t) {
                return rt.inArray(t, e) >= 0 !== n
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = yt[t] = {};
            return rt.each(t.match(bt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (s(), rt.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Tt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? rt.parseJSON(n) : n
                    } catch (r) {}
                    rt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, n, i) {
            if (rt.acceptData(t)) {
                var r, o, s = rt.expando,
                    a = t.nodeType,
                    l = a ? rt.cache : t,
                    u = a ? t[s] : t[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = G.pop() || rt.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: rt.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
            }
        }

        function h(t, e, n) {
            if (rt.acceptData(t)) {
                var i, r, o = t.nodeType,
                    s = o ? rt.cache : t,
                    a = o ? t[rt.expando] : rt.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !u(i) : !rt.isEmptyObject(i)) return
                    }(n || (delete s[a].data, u(s[a]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return pt.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Lt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, r = 0,
                o = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, g(i, e));
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
        }

        function v(t) {
            It.test(t.type) && (t.defaultChecked = t.checked)
        }

        function $(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
        }

        function y(t) {
            var e = Vt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
        }

        function x(t, e) {
            if (1 === e.nodeType && rt.hasData(t)) {
                var n, i, r, o = rt._data(t),
                    s = rt._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) rt.event.add(e, n, a[n][i])
                }
                s.data && (s.data = rt.extend({}, s.data))
            }
        }

        function C(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
                    r = rt._data(e);
                    for (i in r.events) rt.removeEvent(e, i, r.handle);
                    e.removeAttribute(rt.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, y(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && It.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function S(e, n) {
            var i, r = rt(n.createElement(e)).appendTo(n.body),
                o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
            return r.detach(), o
        }

        function T(t) {
            var e = pt,
                n = Kt[t];
            return n || (n = S(t, e), "none" !== n && n || (Yt = (Yt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Yt[0].contentWindow || Yt[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Yt.detach()), Kt[t] = n), n
        }

        function _(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function E(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = de.length; r--;)
                if (e = de[r] + n, e in t) return e;
            return i
        }

        function D(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Dt(i) && (o[s] = rt._data(i, "olddisplay", T(i.nodeName)))) : (r = Dt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function I(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += rt.css(t, n + Et[o], !0, r)), i ? ("content" === n && (s -= rt.css(t, "padding" + Et[o], !0, r)), "margin" !== n && (s -= rt.css(t, "border" + Et[o] + "Width", !0, r))) : (s += rt.css(t, "padding" + Et[o], !0, r), "padding" !== n && (s += rt.css(t, "border" + Et[o] + "Width", !0, r)));
            return s
        }

        function F(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = te(t),
                s = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r)) return r;
                i = s && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + I(t, e, n || (s ? "border" : "content"), i, o) + "px"
        }

        function k(t, e, n, i, r) {
            return new k.prototype.init(t, e, n, i, r)
        }

        function P() {
            return setTimeout(function() {
                fe = void 0
            }), fe = rt.now()
        }

        function N(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Et[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function O(t, e, n) {
            for (var i, r = (be[e] || []).concat(be["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function L(t, e, n) {
            var i, r, o, s, a, l, u, c, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && Dt(t),
                m = rt._data(t, "fxshow");
            n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || T(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || h.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], me.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    d[i] = m && m[i] || rt.style(t, i)
                } else u = void 0;
            if (rt.isEmptyObject(d)) "inline" === ("none" === u ? T(t.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = rt._data(t, "fxshow", {}), o && (m.hidden = !p), p ? rt(t).show() : h.done(function() {
                    rt(t).hide()
                }), h.done(function() {
                    var e;
                    rt._removeData(t, "fxshow");
                    for (e in d) rt.style(t, e, d[e])
                });
                for (i in d) s = O(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function J(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = rt.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function R(t, e, n) {
            var i, r, o = 0,
                s = $e.length,
                a = rt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = fe || P(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: fe || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (J(c, u.opts.specialEasing); s > o; o++)
                if (i = $e[o].call(u, t, c, u.opts)) return i;
            return rt.map(c, O, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function M(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(bt) || [];
                if (rt.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function j(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, rt.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = t === Be;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function H(t, e) {
            var n, i, r = rt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && rt.extend(!0, t, n), t
        }

        function W(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    i || (i = s)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function B(t, e, n, i) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function q(t, e, n, i) {
            var r;
            if (rt.isArray(e)) rt.each(e, function(e, r) {
                n || Ve.test(t) ? i(t, r) : q(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== rt.type(e)) i(t, e);
            else
                for (r in e) q(t + "[" + r + "]", e[r], n, i)
        }

        function z() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function U() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function V(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var G = [],
            X = G.slice,
            Q = G.concat,
            Z = G.push,
            Y = G.indexOf,
            K = {},
            tt = K.toString,
            et = K.hasOwnProperty,
            nt = {},
            it = "1.11.1",
            rt = function(t, e) {
                return new rt.fn.init(t, e)
            },
            ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: it,
            constructor: rt,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
            },
            pushStack: function(t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return rt.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(rt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: G.sort,
            splice: G.splice
        }, rt.extend = rt.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (r = arguments[a]))
                    for (i in r) t = s[i], n = r[i], s !== n && (u && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, s[i] = rt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, rt.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === rt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === rt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !rt.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && rt.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(st, "ms-").replace(at, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var r, o = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                    else
                        for (o in t)
                            if (r = e.apply(t[o], i), r === !1) break
                } else if (a)
                    for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.call(t[o], o, t[o]), r === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(ot, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (Y) return Y.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[r++] = e[i++];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, i) {
                var r, o = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > o; o++) r = e(t[o], o, i), null != r && l.push(r);
                else
                    for (o in t) r = e(t[o], o, i), null != r && l.push(r);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (n = X.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(X.call(arguments)))
                }, i.guid = t.guid = t.guid || rt.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: nt
        }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            K["[object " + e + "]"] = e.toLowerCase()
        });
        var ut = function(t) {
            function e(t, e, n, i) {
                var r, o, s, a, l, u, h, f, p, m;
                if ((e ? e.ownerDocument || e : j) !== k && F(e), e = e || k, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (N && !i) {
                    if (r = $t.exec(t))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (w.qsa && (!O || !O.test(t))) {
                        if (f = h = M, p = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = T(t), (h = e.getAttribute("id")) ? f = h.replace(yt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            p = bt.test(t) && c(e.parentNode) || e, m = u.join(",")
                        }
                        if (m) try {
                            return K.apply(n, p.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[M] = !0, t
            }

            function r(t) {
                var e = k.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(t) {
                return t && typeof t.getElementsByTagName !== V && t
            }

            function h() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = W++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, s) {
                    var a, l, u = [H, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (l = e[M] || (e[M] = {}), (a = l[i]) && a[0] === H && a[1] === o) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                return i
            }

            function g(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                return s
            }

            function v(t, e, n, r, o, s) {
                return r && !r[M] && (r = v(r)), o && !o[M] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, h, d = [],
                        f = [],
                        p = s.length,
                        v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        $ = !t || !i && e ? v : g(v, d, t, a, l),
                        b = n ? o || (i ? t : p || r) ? [] : s : $;
                    if (n && n($, b, a, l), r)
                        for (u = g(b, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[f[c]] = !($[f[c]] = h));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(h = b[c]) && u.push($[c] = h);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(h = b[c]) && (u = o ? et.call(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                        }
                    } else b = g(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
                })
            }

            function $(t) {
                for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, s, !0), u = f(function(t) {
                        return et.call(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        return !o && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }]; r > a; a++)
                    if (n = x.relative[t[a].type]) c = [f(p(c), n)];
                    else {
                        if (n = x.filter[t[a].type].apply(null, t[a].matches), n[M]) {
                            for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                            return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > a && $(t.slice(a, i)), r > i && $(t = t.slice(i)), r > i && d(t))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function b(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, h, d, f = 0,
                            p = "0",
                            m = i && [],
                            v = [],
                            $ = D,
                            b = i || o && x.find.TAG("*", u),
                            y = H += null == $ ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (D = s !== k && s); p !== w && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (h = 0; d = t[h++];)
                                    if (d(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (H = y)
                            }
                            r && ((c = !d && c) && f--, i && m.push(c))
                        }
                        if (f += p, r && p !== f) {
                            for (h = 0; d = n[h++];) d(m, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || v[p] || (v[p] = Z.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (H = y, D = $), m
                    };
                return r ? i(s) : s
            }
            var y, w, x, C, S, T, _, E, D, A, I, F, k, P, N, O, L, J, R, M = "sizzle" + -new Date,
                j = t.document,
                H = 0,
                W = 0,
                B = n(),
                q = n(),
                z = n(),
                U = function(t, e) {
                    return t === e && (I = !0), 0
                },
                V = "undefined",
                G = 1 << 31,
                X = {}.hasOwnProperty,
                Q = [],
                Z = Q.pop,
                Y = Q.push,
                K = Q.push,
                tt = Q.slice,
                et = Q.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = rt.replace("w", "w#"),
                st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
                at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ut = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                dt = new RegExp(at),
                ft = new RegExp("^" + ot + "$"),
                pt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                $t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                yt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                K.apply(Q = tt.call(j.childNodes), j.childNodes), Q[j.childNodes.length].nodeType
            } catch (Ct) {
                K = {
                    apply: Q.length ? function(t, e) {
                        Y.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, S = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, F = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : j,
                    i = n.defaultView;
                return n !== k && 9 === n.nodeType && n.documentElement ? (k = n, P = n.documentElement, N = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    F()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    F()
                })), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = r(function(t) {
                    return P.appendChild(t).id = M, !n.getElementsByName || !n.getElementsByName(M).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if (typeof e.getElementById !== V && N) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== V && N ? e.getElementsByClassName(t) : void 0
                }, L = [], O = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = vt.test(J = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = J.call(t, "div"), J.call(t, "[s!='']:x"), L.push("!=", at)
                }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(P.compareDocumentPosition), R = e || vt.test(P.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === j && R(j, t) ? -1 : e === n || e.ownerDocument === j && R(j, e) ? 1 : A ? et.call(A, t) - et.call(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i, r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : A ? et.call(A, t) - et.call(A, e) : 0;
                    if (o === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[r] === u[r];) r++;
                    return r ? s(l[r], u[r]) : l[r] === j ? -1 : u[r] === j ? 1 : 0
                }, n) : k
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== k && F(t), n = n.replace(ht, "='$1']"), w.matchesSelector && N && (!L || !L.test(n)) && (!O || !O.test(n))) try {
                    var i = J.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (r) {}
                return e(n, k, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== k && F(t), R(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== k && F(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                return void 0 !== i ? i : w.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (I = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(U), I) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                $ = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && $) {
                                    for (c = g[M] || (g[M] = {}), u = c[t] || [], f = u[0] === H && u[1], d = u[0] === H && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (d = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            c[t] = [H, f, d];
                                            break
                                        }
                                } else if ($ && (u = (e[M] || (e[M] = {}))[t]) && u[0] === H) d = u[1];
                                else
                                    for (;
                                        (h = ++f && h && h[m] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || ($ && ((h[M] || (h[M] = {}))[t] = [H, d]), h !== e)););
                                return d -= r, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[M] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;) i = et.call(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = _(t.replace(lt, "$1"));
                        return r[M] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === P
                    },
                    focus: function(t) {
                        return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[y] = a(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[y] = l(y);
            return h.prototype = x.filters = x.pseudos, x.setFilters = new h, T = e.tokenize = function(t, n) {
                var i, r, o, s, a, l, u, c = q[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = x.preFilter; a;) {
                    (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(i.length));
                    for (s in x.filter) !(r = pt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : q(t, l).slice(0)
            }, _ = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = z[t + " "];
                if (!o) {
                    for (e || (e = T(t)), n = e.length; n--;) o = $(e[n]), o[M] ? i.push(o) : r.push(o);
                    o = z(t, b(r, i)), o.selector = t
                }
                return o
            }, E = e.select = function(t, e, n, i) {
                var r, o, s, a, l, u = "function" == typeof t && t,
                    h = !i && T(t = u.selector || t);
                if (n = n || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                        if ((l = x.find[a]) && (i = l(s.matches[0].replace(wt, xt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && d(o), !t) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || _(t, h))(i, e, !N, n, bt.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!I, F(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(k.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(nt, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
        var ct = rt.expr.match.needsContext,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            dt = /^.[^:#\[\.,]*$/;
        rt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (rt.contains(i[e], this)) return !0
                }));
                for (e = 0; r > e; e++) rt.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var ft, pt = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = rt.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)), ht.test(n[1]) && rt.isPlainObject(e))
                            for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = pt.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return ft.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = pt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
            };
        gt.prototype = rt.fn, ft = rt(pt);
        var vt = /^(?:parents|prev(?:Until|All))/,
            $t = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        rt.extend({
            dir: function(t, e, n) {
                for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), rt.fn.extend({
            has: function(t) {
                var e, n = rt(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (rt.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? rt.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return rt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return rt.dir(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return rt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return rt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return rt.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return rt.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return rt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return rt.sibling(t.firstChild)
            },
            contents: function(t) {
                return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
            }
        }, function(t, e) {
            rt.fn[t] = function(n, i) {
                var r = rt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && ($t[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var bt = /\S+/g,
            yt = {};
        rt.Callbacks = function(t) {
            t = "string" == typeof t ? yt[t] || o(t) : rt.extend({}, t);
            var e, n, i, r, s, a, l = [],
                u = !t.once && [],
                c = function(o) {
                    for (n = t.memory && o, i = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++)
                        if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                rt.each(e, function(e, n) {
                                    var i = rt.type(n);
                                    "function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), e ? r = l.length : n && (a = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && rt.each(arguments, function(t, n) {
                            for (var i;
                                (i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (r >= i && r--, s >= i && s--)
                        }), this
                    },
                    has: function(t) {
                        return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(t, n) {
                        return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return h
        }, rt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", rt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return rt.Deferred(function(n) {
                                rt.each(e, function(e, o) {
                                    var s = rt.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? rt.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, rt.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    o = X.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : rt.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var wt;
        rt.fn.ready = function(t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? rt.readyWait++ : rt.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                    if (!pt.body) return setTimeout(rt.ready);
                    rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (wt.resolveWith(pt, [rt]), rt.fn.triggerHandler && (rt(pt).triggerHandler("ready"), rt(pt).off("ready")))
                }
            }
        }), rt.ready.promise = function(e) {
            if (!wt)
                if (wt = rt.Deferred(), "complete" === pt.readyState) setTimeout(rt.ready);
                else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                pt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && pt.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!rt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        s(), rt.ready()
                    }
                }()
            }
            return wt.promise(e)
        };
        var xt, Ct = "undefined";
        for (xt in rt(nt)) break;
        nt.ownLast = "0" !== xt, nt.inlineBlockNeedsLayout = !1, rt(function() {
                var t, e, n, i;
                n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = pt.createElement("div");
                if (null == nt.deleteExpando) {
                    nt.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        nt.deleteExpando = !1
                    }
                }
                t = null
            }(), rt.acceptData = function(t) {
                var e = rt.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Tt = /([A-Z])/g;
        rt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !u(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return h(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return h(t, e, !0)
            }
        }), rt.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                        rt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    rt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    rt.data(this, t, e)
                }) : o ? l(o, t, rt.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    rt.removeData(this, t)
                })
            }
        }), rt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = rt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = rt._queueHooks(t, e),
                    s = function() {
                        rt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return rt._data(t, n) || rt._data(t, n, {
                    empty: rt.Callbacks("once memory").add(function() {
                        rt._removeData(t, e + "queue"), rt._removeData(t, n)
                    })
                })
            }
        }), rt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    rt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = rt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = rt._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Et = ["Top", "Right", "Bottom", "Left"],
            Dt = function(t, e) {
                return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
            },
            At = rt.access = function(t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === rt.type(n)) {
                    r = !0;
                    for (a in n) rt.access(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(rt(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            It = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = pt.createElement("input"),
                e = pt.createElement("div"),
                n = pt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    nt.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, n, i = pt.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Ft = /^(?:input|select|textarea)$/i,
            kt = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Nt = /^(?:focusinfocus|focusoutblur)$/,
            Ot = /^([^.]*)(?:\.(.+)|)$/;
        rt.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, d, f, p, m, g = rt._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                            return typeof rt === Ct || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Ot.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = rt.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = rt.event.special[f] || {}, h = rt.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), rt.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, d, f, p, m, g = rt.hasData(t) && rt._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(bt) || [""], u = e.length; u--;)
                        if (a = Ot.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (h = rt.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                            l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || rt.removeEvent(t, f, g.handle), delete c[f])
                        } else
                            for (f in c) rt.event.remove(t, f + e[u], n, i, !0);
                    rt.isEmptyObject(c) && (delete g.handle, rt._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, r) {
                var o, s, a, l, u, c, h, d = [i || pt],
                    f = et.call(e, "type") ? e.type : e,
                    p = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(f + rt.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[rt.expando] ? e : new rt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), u = rt.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!r && !u.noBubble && !rt.isWindow(i)) {
                        for (l = u.delegateType || f, Nt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                        c === (i.ownerDocument || pt) && d.push(c.defaultView || c.parentWindow || t)
                    }
                    for (h = 0;
                        (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || f, o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && rt.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && rt.acceptData(i) && s && i[f] && !rt.isWindow(i)) {
                        c = i[s], c && (i[s] = null), rt.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        rt.event.triggered = void 0, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = rt.event.fix(t);
                var e, n, i, r, o, s = [],
                    a = X.call(arguments),
                    l = (rt._data(this, "events") || {})[t.type] || [],
                    u = rt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = rt.event.handlers.call(this, t, l), e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], o = 0; a > o; o++) i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && s.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[rt.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks : kt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || pt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, o = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pt, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return rt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var r = rt.extend(new rt.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, rt.removeEvent = pt.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Ct && (t[i] = null), t.detachEvent(i, n))
        }, rt.Event = function(t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !rt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (rt.event.special.submit = {
            setup: function() {
                return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                    n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), rt._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (rt.event.special.change = {
            setup: function() {
                return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), rt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
                })), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Ft.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                    }), rt._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return rt.event.remove(this, "._change"), !Ft.test(this.nodeName)
            }
        }), nt.focusinBubbles || rt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                rt.event.simulate(e, t.target, rt.event.fix(t), !0)
            };
            rt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = rt._data(i, e);
                    r || i.addEventListener(t, n, !0), rt._data(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = rt._data(i, e) - 1;
                    r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
                }
            }
        }), rt.fn.extend({
            on: function(t, e, n, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (o in t) this.on(o, e, n, t[o], r);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === r && (s = i, i = function(t) {
                    return rt().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = rt.guid++)), this.each(function() {
                    rt.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                    rt.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    rt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? rt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Jt = / jQuery\d+="(?:null|\d+)"/g,
            Rt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
            Mt = /^\s+/,
            jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ht = /<([\w:]+)/,
            Wt = /<tbody/i,
            Bt = /<|&#?\w+;/,
            qt = /<(?:script|style|link)/i,
            zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ut = /^$|\/(?:java|ecma)script/i,
            Vt = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qt = m(pt),
            Zt = Qt.appendChild(pt.createElement("div"));
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, rt.extend({
            clone: function(t, e, n) {
                var i, r, o, s, a, l = rt.contains(t.ownerDocument, t);
                if (nt.html5Clone || rt.isXMLDoc(t) || !Rt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Zt.innerHTML = t.outerHTML, Zt.removeChild(o = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                    for (i = g(o), a = g(t), s = 0; null != (r = a[s]); ++s) i[s] && C(r, i[s]);
                if (e)
                    if (n)
                        for (a = a || g(t), i = i || g(o), s = 0; null != (r = a[s]); s++) x(r, i[s]);
                    else x(t, o);
                return i = g(o, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = a = r = null, o
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, l, u, c, h = t.length, d = m(e), f = [], p = 0; h > p; p++)
                    if (o = t[p], o || 0 === o)
                        if ("object" === rt.type(o)) rt.merge(f, o.nodeType ? [o] : o);
                        else if (Bt.test(o)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Ht.exec(o) || ["", ""])[1].toLowerCase(), c = Xt[l] || Xt._default, a.innerHTML = c[1] + o.replace(jt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!nt.leadingWhitespace && Mt.test(o) && f.push(e.createTextNode(Mt.exec(o)[0])), !nt.tbody)
                        for (o = "table" !== l || Wt.test(o) ? "<table>" !== c[1] || Wt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (rt.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = d.lastChild
                } else f.push(e.createTextNode(o));
                for (a && d.removeChild(a), nt.appendChecked || rt.grep(g(f, "input"), v), p = 0; o = f[p++];)
                    if ((!i || -1 === rt.inArray(o, i)) && (s = rt.contains(o.ownerDocument, o), a = g(d.appendChild(o), "script"), s && w(a), n))
                        for (r = 0; o = a[r++];) Ut.test(o.type || "") && n.push(o);
                return a = null, d
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = t[s]); s++)
                    if ((e || rt.acceptData(n)) && (r = n[a], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Ct ? n.removeAttribute(a) : n[a] = null, G.push(r))
                    }
            }
        }), rt.fn.extend({
            text: function(t) {
                return At(this, function(t) {
                    return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (e && rt.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && rt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return rt.clone(this, t, e)
                })
            },
            html: function(t) {
                return At(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Jt, "") : void 0;
                    if ("string" == typeof t && !qt.test(t) && (nt.htmlSerialize || !Rt.test(t)) && (nt.leadingWhitespace || !Mt.test(t)) && !Xt[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(jt, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = Q.apply([], t);
                var n, i, r, o, s, a, l = 0,
                    u = this.length,
                    c = this,
                    h = u - 1,
                    d = t[0],
                    f = rt.isFunction(d);
                if (f || u > 1 && "string" == typeof d && !nt.checkClone && zt.test(d)) return this.each(function(n) {
                    var i = c.eq(n);
                    f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (u && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (o = rt.map(g(a, "script"), b), r = o.length; u > l; l++) i = a, l !== h && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), e.call(this[l], i, l);
                    if (r)
                        for (s = o[o.length - 1].ownerDocument, rt.map(o, y), l = 0; r > l; l++) i = o[l], Ut.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                    a = n = null
                }
                return this
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            rt.fn[t] = function(t) {
                for (var n, i = 0, r = [], o = rt(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), rt(o[i])[e](n), Z.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Yt, Kt = {};
        ! function() {
            var t;
            nt.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = pt.getElementsByTagName("body")[0], n && n.style ? (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/,
            ie = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
            re = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function(t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            }, ee = function(t, e, n) {
                var i, r, o, s, a = t.style;
                return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
            }) : pt.documentElement.currentStyle && (te = function(t) {
                return t.currentStyle
            }, ee = function(t, e, n) {
                var i, r, o, s, a = t.style;
                return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ie.test(s) && !re.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
            }),
            function() {
                function e() {
                    var e, n, i, r;
                    n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"),
                        i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, r = e.appendChild(pt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
                }
                var n, i, r, o, s, a, l;
                n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
                    reliableHiddenOffsets: function() {
                        return null == a && e(), a
                    },
                    boxSizingReliable: function() {
                        return null == s && e(), s
                    },
                    pixelPosition: function() {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && e(), l
                    }
                }))
            }(), rt.swap = function(t, e, n, i) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return r
            };
        var oe = /alpha\([^)]*\)/i,
            se = /opacity\s*=\s*([^)]*)/,
            ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + _t + ")(.*)$", "i"),
            ue = new RegExp("^([+-])=(" + _t + ")", "i"),
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            he = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            de = ["Webkit", "O", "Moz", "ms"];
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
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
                "float": nt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = rt.camelCase(e),
                        l = t.style;
                    if (e = rt.cssProps[a] || (rt.cssProps[a] = E(l, a)), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                    if (o = typeof n, "string" === o && (r = ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (u) {}
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = rt.camelCase(e);
                return e = rt.cssProps[a] || (rt.cssProps[a] = E(t.style, a)), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = ee(t, e, i)), "normal" === o && e in he && (o = he[e]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
            }
        }), rt.each(["height", "width"], function(t, e) {
            rt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce, function() {
                        return F(t, e, i)
                    }) : F(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && te(t);
                    return A(t, n, i ? I(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), nt.opacity || (rt.cssHooks.opacity = {
            get: function(t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
            }
        }), rt.cssHooks.marginRight = _(nt.reliableMarginRight, function(t, e) {
            return e ? rt.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), rt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            rt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Et[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, ne.test(t) || (rt.cssHooks[t + e].set = A)
        }), rt.fn.extend({
            css: function(t, e) {
                return At(this, function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (rt.isArray(e)) {
                        for (i = te(t), r = e.length; r > s; s++) o[e[s]] = rt.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Dt(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = k, k.prototype = {
            constructor: k,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = k.propHooks[this.prop];
                return t && t.get ? t.get(this) : k.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = k.propHooks[this.prop];
                return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
            }
        }, k.prototype.init.prototype = k.prototype, k.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, rt.fx = k.prototype.init, rt.fx.step = {};
        var fe, pe, me = /^(?:toggle|show|hide)$/,
            ge = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/,
            $e = [L],
            be = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = ge.exec(e),
                        o = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
                        s = (rt.cssNumber[t] || "px" !== o && +i) && ge.exec(rt.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, rt.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        rt.Animation = rt.extend(R, {
                tweener: function(t, e) {
                    rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, r = t.length; r > i; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? $e.unshift(t) : $e.push(t)
                }
            }), rt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? rt.extend({}, t) : {
                    complete: n || !n && e || rt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !rt.isFunction(e) && e
                };
                return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
                }, i
            }, rt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Dt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = rt.isEmptyObject(t),
                        o = rt.speed(e, n, i),
                        s = function() {
                            var e = R(this, rt.extend({}, t), o);
                            (r || rt._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = rt.timers,
                            s = rt._data(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && ve.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        (e || !n) && rt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = rt._data(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = rt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), rt.each(["toggle", "show", "hide"], function(t, e) {
                var n = rt.fn[e];
                rt.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, i, r)
                }
            }), rt.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                rt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), rt.timers = [], rt.fx.tick = function() {
                var t, e = rt.timers,
                    n = 0;
                for (fe = rt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || rt.fx.stop(), fe = void 0
            }, rt.fx.timer = function(t) {
                rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
            }, rt.fx.interval = 13, rt.fx.start = function() {
                pe || (pe = setInterval(rt.fx.tick, rt.fx.interval))
            }, rt.fx.stop = function() {
                clearInterval(pe), pe = null
            }, rt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, rt.fn.delay = function(t, e) {
                return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, r;
                e = pt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pt.createElement("select"), r = n.appendChild(pt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = r.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, t = pt.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
            }();
        var ye = /\r/g;
        rt.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = rt.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ye, "") : null == n ? "" : n)
                }
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === r) && (nt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !rt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = rt(n).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = rt.makeArray(e), s = r.length; s--;)
                            if (i = r[s], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function() {
            rt.valHooks[this] = {
                set: function(t, e) {
                    return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (rt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var we, xe, Ce = rt.expr.attrHandle,
            Se = /^(?:checked|selected)$/i,
            Te = nt.getSetAttribute,
            _e = nt.input;
        rt.fn.extend({
            attr: function(t, e) {
                return At(this, rt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? xe : we)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(bt);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? _e && Te || !Se.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""), t.removeAttribute(Te ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), xe = {
            set: function(t, e, n) {
                return e === !1 ? rt.removeAttr(t, n) : _e && Te || !Se.test(n) ? t.setAttribute(!Te && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Ce[e] || rt.find.attr;
            Ce[e] = _e && Te || !Se.test(e) ? function(t, e, i) {
                var r, o;
                return i || (o = Ce[e], Ce[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Ce[e] = o), r
            } : function(t, e, n) {
                return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), _e && Te || (rt.attrHooks.value = {
            set: function(t, e, n) {
                return rt.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, n)
            }
        }), Te || (we = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Ce.id = Ce.name = Ce.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, rt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: we.set
        }, rt.attrHooks.contenteditable = {
            set: function(t, e, n) {
                we.set(t, "" === e ? !1 : e, n)
            }
        }, rt.each(["width", "height"], function(t, e) {
            rt.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (rt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ee = /^(?:input|select|textarea|button|object)$/i,
            De = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function(t, e) {
                return At(this, rt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = rt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), rt.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ee.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || rt.each(["href", "src"], function(t, e) {
            rt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (rt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            rt.propFix[this.toLowerCase()] = this
        }), nt.enctype || (rt.propFix.enctype = "encoding");
        var Ae = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                            for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = rt.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            s = t ? rt.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(n) {
                    rt(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, r = rt(this), o = t.match(bt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(n === Ct || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            rt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Ie = rt.now(),
            Fe = /\?/,
            ke = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        rt.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                r = rt.trim(e + "");
            return r && !rt.trim(r.replace(ke, function(t, e, r, o) {
                return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
            })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
        }, rt.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n
        };
        var Pe, Ne, Oe = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Me = /^(?:GET|HEAD)$/,
            je = /^\/\//,
            He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            We = {},
            Be = {},
            qe = "*/".concat("*");
        try {
            Ne = location.href
        } catch (ze) {
            Ne = pt.createElement("a"), Ne.href = "", Ne = Ne.href
        }
        Pe = He.exec(Ne.toLowerCase()) || [], rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ne,
                type: "GET",
                isLocal: Re.test(Pe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qe,
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
                    "text json": rt.parseJSON,
                    "text xml": rt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, rt.ajaxSettings), e) : H(rt.ajaxSettings, t)
            },
            ajaxPrefilter: M(We),
            ajaxTransport: M(Be),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var r, c, v, $, y, x = e;
                    2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && ($ = W(h, w, n)), $ = B(h, $, w, r), r ? (h.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (rt.lastModified[o] = y), y = w.getResponseHeader("etag"), y && (rt.etag[o] = y)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = $.state, c = $.data, v = $.error, r = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", r ? p.resolveWith(d, [c, x, w]) : p.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? c : v]), m.fireWith(d, [w, x]), l && (f.trigger("ajaxComplete", [w, h]), --rt.active || rt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, a, l, u, c, h = rt.ajaxSetup({}, e),
                    d = h.context || h,
                    f = h.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
                    p = rt.Deferred(),
                    m = rt.Callbacks("once memory"),
                    g = h.statusCode || {},
                    v = {},
                    $ = {},
                    b = 0,
                    y = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; e = Je.exec(s);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = $[n] = $[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || y;
                            return u && u.abort(e), n(0, e), this
                        }
                    };
                if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Ne) + "").replace(Oe, "").replace(je, Pe[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(bt) || [""], null == h.crossDomain && (i = He.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Pe[1] && i[2] === Pe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pe[3] || ("http:" === Pe[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), j(We, h, e, w), 2 === b) return w;
                l = h.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Me.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Fe.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Le.test(o) ? o.replace(Le, "$1_=" + Ie++) : o + (Fe.test(o) ? "&" : "?") + "_=" + Ie++)), h.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) w.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
                y = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](h[r]);
                if (u = j(Be, h, e, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (x) {
                        if (!(2 > b)) throw x;
                        n(-1, x)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, n) {
                return rt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function(t, e) {
            rt[e] = function(t, n, i, r) {
                return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            rt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), rt._evalUrl = function(t) {
            return rt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, rt.fn.extend({
            wrapAll: function(t) {
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return rt.isFunction(t) ? this.each(function(e) {
                    rt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = rt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = rt.isFunction(t);
                return this.each(function(n) {
                    rt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
        }, rt.expr.filters.visible = function(t) {
            return !rt.expr.filters.hidden(t)
        };
        var Ue = /%20/g,
            Ve = /\[\]$/,
            Ge = /\r?\n/g,
            Xe = /^(?:submit|button|image|reset|file)$/i,
            Qe = /^(?:input|select|textarea|keygen)/i;
        rt.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) q(n, t[n], e, r);
            return i.join("&").replace(Ue, "+")
        }, rt.fn.extend({
            serialize: function() {
                return rt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Qe.test(this.nodeName) && !Xe.test(t) && (this.checked || !It.test(t))
                }).map(function(t, e) {
                    var n = rt(this).val();
                    return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ge, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ge, "\r\n")
                    }
                }).get()
            }
        }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || U()
        } : z;
        var Ze = 0,
            Ye = {},
            Ke = rt.ajaxSettings.xhr();
        t.ActiveXObject && rt(t).on("unload", function() {
            for (var t in Ye) Ye[t](void 0, !0)
        }), nt.cors = !!Ke && "withCredentials" in Ke, Ke = nt.ajax = !!Ke, Ke && rt.ajaxTransport(function(t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var r, o = t.xhr(),
                            s = ++Ze;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(t.hasContent && t.data || null), e = function(n, r) {
                            var a, l, u;
                            if (e && (r || 4 === o.readyState))
                                if (delete Ye[s], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && i(a, l, u, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ye[s] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), rt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), rt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = pt.head || rt("head")[0] || pt.documentElement;
                return {
                    send: function(i, r) {
                        e = pt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = tn.pop() || rt.expando + "_" + Ie++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || rt.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, i.always(function() {
                t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)), s && rt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), rt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || pt;
            var i = ht.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
        };
        var nn = rt.fn.load;
        rt.fn.load = function(t, e, n) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, r || [t.responseText, e, t])
            }), this
        }, rt.expr.filters.animated = function(t) {
            return rt.grep(rt.timers, function(e) {
                return t === e.elem
            }).length
        };
        var rn = t.document.documentElement;
        rt.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u, c = rt.css(t, "position"),
                    h = rt(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, rt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Ct && (i = r.getBoundingClientRect()), n = V(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - rt.css(i, "marginTop", !0),
                        left: e.left - n.left - rt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || rn; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || rn
                })
            }
        }), rt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            rt.fn[t] = function(i) {
                return At(this, function(t, i, r) {
                    var o = V(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : t[i] = r)
                }, t, i, arguments.length, null)
            }
        }), rt.each(["top", "left"], function(t, e) {
            rt.cssHooks[e] = _(nt.pixelPosition, function(t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px" : n) : void 0
            })
        }), rt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            rt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                rt.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return At(this, function(e, n, i) {
                        var r;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), rt.fn.size = function() {
            return this.length
        }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return rt
        });
        var on = t.jQuery,
            sn = t.$;
        return rt.noConflict = function(e) {
            return t.$ === rt && (t.$ = sn), e && t.jQuery === rt && (t.jQuery = on), rt
        }, typeof e === Ct && (t.jQuery = t.$ = rt), rt
    }), function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var e = t("meta[name=csrf-token]").attr("content"),
                    n = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + n + '"]').val(e)
            },
            fire: function(e, n, i) {
                var r = t.Event(n);
                return e.trigger(r, i), r.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t[0].href
            },
            handleRemote: function(i) {
                var r, o, s, a, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (s.push(c), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                    return u = {
                        type: r || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function(t, r) {
                            return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, a && (u.xhrFields = {
                        withCredentials: a
                    }), o && (u.url = o), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function(t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    o = i.data("method"),
                    s = i.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    u = t('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
            },
            formElements: function(e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function(e) {
                n.formElements(e, n.disableSelector).each(function() {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var n, i;
                n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
            },
            enableFormElements: function(e) {
                n.formElements(e, n.enableSelector).each(function() {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"),
                    r = !1;
                return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
            },
            blankInputs: function(e, n, i) {
                var r, o, s = t(),
                    a = n || "input,textarea",
                    l = e.find(a);
                return l.each(function() {
                    if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        s = s.add(r)
                    }
                }), s.length ? s : !1
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                var i = t.data("disable-with");
                t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                    return n.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(t(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(t(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var r = t(this),
                o = r.data("method"),
                s = r.data("params"),
                a = i.metaKey || i.ctrlKey;
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
                if (a && (!o || "GET" === o) && !s) return !0;
                var l = n.handleRemote(r);
                return l === !1 ? n.enableElement(r) : l.error(function() {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return r === !1 ? n.enableFormElement(i) : r.error(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r, o, s = t(this),
                a = s.data("remote") !== e;
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (s.attr("novalidate") == e && (r = n.blankInputs(s, n.requiredInputSelector), r && n.fire(s, "ajax:aborted:required", [r]))) return n.stopEverything(i);
            if (a) {
                if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(s)
                    }, 13), l
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function() {
                n.disableFormElements(s)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
            this == e.target && n.disableFormElements(t(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && n.enableFormElements(t(this))
        }), t(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), function(t) {
        var e = {};
        t.fn.railsAutocomplete = function() {
            var n = function() {
                this.railsAutoCompleter || (this.railsAutoCompleter = new t.railsAutocomplete(this))
            };
            return e[this.selector.replace("#", "")] = arguments[0], void 0 !== t.fn.on ? $(document).on("focus", this.selector, n) : this.live("focus", n)
        }, t.railsAutocomplete = function(t) {
            _e = t, this.init(_e)
        }, t.railsAutocomplete.fn = t.railsAutocomplete.prototype = {
            railsAutocomplete: "0.0.1"
        }, t.railsAutocomplete.fn.extend = t.railsAutocomplete.extend = t.extend, t.railsAutocomplete.fn.extend({
            init: function(n) {
                function i(t) {
                    return t.split(n.delimiter)
                }

                function r(t) {
                    return i(t).pop().replace(/^\s+/, "")
                }
                n.delimiter = t(n).attr("data-delimiter") || null, t(n).autocomplete($.extend({
                    source: function(e, i) {
                        t.getJSON(t(n).attr("data-autocomplete"), {
                            term: r(e.term)
                        }, function() {
                            0 == arguments[0].length && (arguments[0] = [], arguments[0][0] = {
                                id: "",
                                label: "no existing match"
                            }), t(arguments[0]).each(function(e, i) {
                                var r = {};
                                r[i.id] = i, t(n).data(r)
                            }), i.apply(null, arguments)
                        })
                    },
                    change: function(e, n) {
                        if ("" != t(t(this).attr("data-id-element")).val()) {
                            t(t(this).attr("data-id-element")).val(n.item ? n.item.id : "");
                            var i = t.parseJSON(t(this).attr("data-update-elements")),
                                r = n.item ? t(this).data(n.item.id.toString()) : {};
                            if (!i || "" != t(i.id).val())
                                for (var o in i) t(i[o]).val(n.item ? r[o] : "")
                        }
                    },
                    search: function() {
                        var t = r(this.value);
                        return t.length < 2 ? !1 : void 0
                    },
                    focus: function() {
                        return !1
                    },
                    select: function(e, r) {
                        var o = i(this.value);
                        if (o.pop(), o.push(r.item.value), null != n.delimiter) o.push(""), this.value = o.join(n.delimiter);
                        else if (this.value = o.join(""), t(this).attr("data-id-element") && t(t(this).attr("data-id-element")).val(r.item.id), t(this).attr("data-update-elements")) {
                            var s = t(this).data(r.item.id.toString()),
                                a = t.parseJSON(t(this).attr("data-update-elements"));
                            for (var l in a) t(a[l]).val(s[l])
                        }
                        var u = this.value;
                        return t(this).bind("keyup.clearId", function() {
                            t(this).val().trim() != u.trim() && (t(t(this).attr("data-id-element")).val(""), t(this).unbind("keyup.clearId"))
                        }), t(n).trigger("railsAutocomplete.select", r), !1
                    }
                }, e[n.id]))
            }
        }), t(document).ready(function() {
            t("input[data-autocomplete]").railsAutocomplete()
        })
    }(jQuery), function(t) {
        var e = new Array,
            n = new Array;
        t.fn.doAutosize = function(e) {
            var n = t(this).data("minwidth"),
                i = t(this).data("maxwidth"),
                r = "",
                o = t(this),
                s = t("#" + t(this).data("tester_id"));
            if (r !== (r = o.val())) {
                var a = r.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                s.html(a);
                var l = s.width(),
                    u = l + e.comfortZone >= n ? l + e.comfortZone : n,
                    c = o.width(),
                    h = c > u && u >= n || u > n && i > u;
                h && o.width(u)
            }
        }, t.fn.resetAutosize = function(e) {
            var n = t(this).data("minwidth") || e.minInputWidth || t(this).width(),
                i = t(this).data("maxwidth") || e.maxInputWidth || t(this).closest(".tagsinput").width() - e.inputPadding,
                r = t(this),
                o = t("<tester/>").css({
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    width: "auto",
                    fontSize: r.css("fontSize"),
                    fontFamily: r.css("fontFamily"),
                    fontWeight: r.css("fontWeight"),
                    letterSpacing: r.css("letterSpacing"),
                    whiteSpace: "nowrap"
                }),
                s = t(this).attr("id") + "_autosize_tester";
            !t("#" + s).length > 0 && (o.attr("id", s), o.appendTo("body")), r.data("minwidth", n), r.data("maxwidth", i), r.data("tester_id", s), r.css("width", n)
        }, t.fn.addTag = function(i, r) {
            return r = jQuery.extend({
                focus: !1,
                callback: !0
            }, r), this.each(function() {
                var o = t(this).attr("id"),
                    s = t(this).val().split(e[o]);
                if ("" == s[0] && (s = new Array), i = jQuery.trim(i), r.unique) {
                    var a = t(this).tagExist(i);
                    1 == a && t("#" + o + "_tag").addClass("not_valid")
                } else var a = !1;
                if ("" != i && 1 != a) {
                    if (t("<span>").addClass("tag").append(t("<span>").text(i).append("&nbsp;&nbsp;"), t("<a>", {
                            href: "#",
                            title: "Removing tag",
                            text: "x"
                        }).click(function() {
                            return t("#" + o).removeTag(escape(i))
                        })).insertBefore("#" + o + "_addTag"), s.push(i), t("#" + o + "_tag").val(""), r.focus ? t("#" + o + "_tag").focus() : t("#" + o + "_tag").blur(), t.fn.tagsInput.updateTagsField(this, s), r.callback && n[o] && n[o].onAddTag) {
                        var l = n[o].onAddTag;
                        l.call(this, i)
                    }
                    if (n[o] && n[o].onChange) {
                        var u = s.length,
                            l = n[o].onChange;
                        l.call(this, t(this), s[u - 1])
                    }
                }
            }), !1
        }, t.fn.removeTag = function(r) {
            return r = unescape(r), this.each(function() {
                var o = t(this).attr("id"),
                    s = t(this).val().split(e[o]);
                for (t("#" + o + "_tagsinput .tag").remove(), str = "", i = 0; i < s.length; i++) s[i] != r && (str = str + e[o] + s[i]);
                if (t.fn.tagsInput.importTags(this, str), n[o] && n[o].onRemoveTag) {
                    var a = n[o].onRemoveTag;
                    a.call(this, r)
                }
            }), !1
        }, t.fn.tagExist = function(n) {
            var i = t(this).attr("id"),
                r = t(this).val().split(e[i]);
            return jQuery.inArray(n, r) >= 0
        }, t.fn.importTags = function(e) {
            id = t(this).attr("id"), t("#" + id + "_tagsinput .tag").remove(), t.fn.tagsInput.importTags(this, e)
        }, t.fn.tagsInput = function(i) {
            var r = jQuery.extend({
                interactive: !0,
                defaultText: "add a tag",
                minChars: 0,
                width: "300px",
                height: "100px",
                autocomplete: {
                    selectFirst: !1
                },
                hide: !0,
                delimiter: ",",
                unique: !0,
                removeWithBackspace: !0,
                placeholderColor: "#666666",
                autosize: !0,
                comfortZone: 20,
                inputPadding: 12
            }, i);
            return this.each(function() {
                r.hide && t(this).hide();
                var i = t(this).attr("id");
                (!i || e[t(this).attr("id")]) && (i = t(this).attr("id", "tags" + (new Date).getTime()).attr("id"));
                var o = jQuery.extend({
                    pid: i,
                    real_input: "#" + i,
                    holder: "#" + i + "_tagsinput",
                    input_wrapper: "#" + i + "_addTag",
                    fake_input: "#" + i + "_tag"
                }, r);
                e[i] = o.delimiter, (r.onAddTag || r.onRemoveTag || r.onChange) && (n[i] = new Array, n[i].onAddTag = r.onAddTag, n[i].onRemoveTag = r.onRemoveTag, n[i].onChange = r.onChange);
                var s = '<div id="' + i + '_tagsinput" class="tagsinput"><div id="' + i + '_addTag">';
                if (r.interactive && (s = s + '<input id="' + i + '_tag" value="" data-default="' + r.defaultText + '" />'), s += '</div><div class="tags_clear"></div></div>', t(s).insertAfter(this), t(o.holder).css("width", r.width), t(o.holder).css("min-height", r.height), t(o.holder).css("height", "100%"), "" != t(o.real_input).val() && t.fn.tagsInput.importTags(t(o.real_input), t(o.real_input).val()), r.interactive) {
                    if (t(o.fake_input).val(t(o.fake_input).attr("data-default")), t(o.fake_input).css("color", r.placeholderColor), t(o.fake_input).resetAutosize(r), t(o.holder).bind("click", o, function(e) {
                            t(e.data.fake_input).focus()
                        }), t(o.fake_input).bind("focus", o, function(e) {
                            t(e.data.fake_input).val() == t(e.data.fake_input).attr("data-default") && t(e.data.fake_input).val(""), t(e.data.fake_input).css("color", "#000000")
                        }), void 0 != r.autocomplete_url) {
                        autocomplete_options = {
                            source: r.autocomplete_url
                        };
                        for (attrname in r.autocomplete) autocomplete_options[attrname] = r.autocomplete[attrname];
                        void 0 !== jQuery.Autocompleter ? (t(o.fake_input).autocomplete(r.autocomplete_url, r.autocomplete), t(o.fake_input).bind("result", o, function(e, n, o) {
                            n && t("#" + i).addTag(n[0] + "", {
                                focus: !0,
                                unique: r.unique
                            })
                        })) : void 0 !== jQuery.ui.autocomplete && (t(o.fake_input).autocomplete(autocomplete_options), t(o.fake_input).bind("autocompleteselect", o, function(e, n) {
                            return t(e.data.real_input).addTag(n.item.value, {
                                focus: !0,
                                unique: r.unique
                            }), !1
                        }))
                    } else t(o.fake_input).bind("blur", o, function(e) {
                        var n = t(this).attr("data-default");
                        return "" != t(e.data.fake_input).val() && t(e.data.fake_input).val() != n ? e.data.minChars <= t(e.data.fake_input).val().length && (!e.data.maxChars || e.data.maxChars >= t(e.data.fake_input).val().length) && t(e.data.real_input).addTag(t(e.data.fake_input).val(), {
                            focus: !0,
                            unique: r.unique
                        }) : (t(e.data.fake_input).val(t(e.data.fake_input).attr("data-default")), t(e.data.fake_input).css("color", r.placeholderColor)), !1
                    });
                    t(o.fake_input).bind("keypress", o, function(e) {
                        return e.which == e.data.delimiter.charCodeAt(0) || 13 == e.which ? (e.preventDefault(), e.data.minChars <= t(e.data.fake_input).val().length && (!e.data.maxChars || e.data.maxChars >= t(e.data.fake_input).val().length) && t(e.data.real_input).addTag(t(e.data.fake_input).val(), {
                            focus: !0,
                            unique: r.unique
                        }), t(e.data.fake_input).resetAutosize(r), !1) : void(e.data.autosize && t(e.data.fake_input).doAutosize(r))
                    }), o.removeWithBackspace && t(o.fake_input).bind("keydown", function(e) {
                        if (8 == e.keyCode && "" == t(this).val()) {
                            e.preventDefault();
                            var n = t(this).closest(".tagsinput").find(".tag:last").text(),
                                i = t(this).attr("id").replace(/_tag$/, "");
                            n = n.replace(/[\s]+x$/, ""), t("#" + i).removeTag(escape(n)), t(this).trigger("focus")
                        }
                    }), t(o.fake_input).blur(), o.unique && t(o.fake_input).keydown(function(e) {
                        (8 == e.keyCode || String.fromCharCode(e.which).match(/\w+|[\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1,/]+/)) && t(this).removeClass("not_valid")
                    })
                }
            }), this
        }, t.fn.tagsInput.updateTagsField = function(n, i) {
            var r = t(n).attr("id");
            t(n).val(i.join(e[r]))
        }, t.fn.tagsInput.importTags = function(r, o) {
            t(r).val("");
            var s = t(r).attr("id"),
                a = o.split(e[s]);
            for (i = 0; i < a.length; i++) t(r).addTag(a[i], {
                focus: !1,
                callback: !1
            });
            if (n[s] && n[s].onChange) {
                var l = n[s].onChange;
                l.call(r, r, a[i])
            }
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.button"),
                o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function() {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = t(this),
            o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(o).each(function() {
            var i = t(this),
                r = e(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.5", s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(),
                    e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            r = i.attr("href"),
            o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (u) {
                var f = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > p.bottom ? "top" : "top" == a && c.top - d < p.top ? "bottom" : "right" == a && c.right + h > p.width ? "left" : "left" == a && c.left - h < p.left ? "right" : a, o.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, h, d);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(n),
            d = h ? 2 * c.left - r + l : 2 * c.top - o + u,
            f = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, s, a, o)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < s.left ? r.left = s.left - u : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = i.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : t - i >= r + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            u = a ? s : e;
        return null != n && n >= r ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(t, e) {
        return t.toUpperCase().indexOf(e.toUpperCase()) > -1
    }

    function n(e) {
        var n = [{
            re: /[\xC0-\xC6]/g,
            ch: "A"
        }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
        }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
        }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
        }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
        }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
        }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
        }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
        }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
        }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
        }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
        }, {
            re: /[\xD1]/g,
            ch: "N"
        }, {
            re: /[\xF1]/g,
            ch: "n"
        }];
        return t.each(n, function() {
            e = e.replace(this.re, this.ch)
        }), e
    }

    function i(t) {
        var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            n = "(?:" + Object.keys(e).join("|") + ")",
            i = new RegExp(n),
            r = new RegExp(n, "g"),
            o = null == t ? "" : "" + t;
        return i.test(o) ? o.replace(r, function(t) {
            return e[t]
        }) : o
    }

    function r(e, n) {
        var i = arguments,
            r = e,
            e = i[0],
            n = i[1];
        [].shift.apply(i), "undefined" == typeof e && (e = r);
        var s, a = this.each(function() {
            var r = t(this);
            if (r.is("select")) {
                var a = r.data("selectpicker"),
                    l = "object" == typeof e && e;
                if (a) {
                    if (l)
                        for (var u in l) l.hasOwnProperty(u) && (a.options[u] = l[u])
                } else {
                    var c = t.extend({}, o.DEFAULTS, t.fn.selectpicker.defaults || {}, r.data(), l);
                    r.data("selectpicker", a = new o(this, c, n))
                }
                "string" == typeof e && (s = a[e] instanceof Function ? a[e].apply(a, i) : a.options[e])
            }
        });
        return "undefined" != typeof s ? s : a
    }
    t.expr[":"].icontains = function(n, i, r) {
        return e(t(n).text(), r[3])
    }, t.expr[":"].aicontains = function(n, i, r) {
        return e(t(n).data("normalizedText") || t(n).text(), r[3])
    };
    var o = function(e, n, i) {
        i && (i.stopPropagation(), i.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.remove, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init()
    };
    o.VERSION = "1.6.3", o.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results match",
        countSelectedText: function(t, e) {
            return 1 == t ? "{0} item selected" : "{0} items selected"
        },
        maxOptionsText: function(t, e) {
            var n = [];
            return n[0] = 1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", n[1] = 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)", n
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        multipleSeparator: ", ",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        searchAccentInsensitive: !1
    }, o.prototype = {
        constructor: o,
        init: function() {
            var e = this,
                n = this.$element.attr("id");
            this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof n && (this.$button.attr("data-id", n), t('label[for="' + n + '"]').click(function(t) {
                t.preventDefault(), e.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile()
        },
        createDropdown: function() {
            var e = this.multiple ? " show-tick" : "",
                n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                r = this.autofocus ? " autofocus" : "",
                o = this.$element.parents().hasClass("form-group-lg") ? " btn-lg" : this.$element.parents().hasClass("form-group-sm") ? " btn-sm" : "",
                s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                a = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                l = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">' + this.options.selectAllText + '</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                u = '<div class="btn-group bootstrap-select' + e + n + '"><button type="button" class="btn dropdown-toggle form-control selectpicker' + o + '" data-toggle="dropdown"' + r + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + s + a + l + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
            return t(u)
        },
        createView: function() {
            var t = this.createDropdown(),
                e = this.createLi();
            return t.find("ul").append(e), t
        },
        reloadLi: function() {
            this.destroyLi();
            var t = this.createLi();
            this.$menu.find("ul").append(t)
        },
        destroyLi: function() {
            this.$menu.find("li").remove()
        },
        createLi: function() {
            var e = this,
                r = [],
                o = 0,
                s = function(t, e, n) {
                    return "<li" + ("undefined" != typeof n ? ' class="' + n + '"' : "") + ("undefined" != typeof e | null === e ? ' data-original-index="' + e + '"' : "") + ">" + t + "</li>"
                },
                a = function(t, r, o, s) {
                    var a = n(i(t));
                    return '<a tabindex="0"' + ("undefined" != typeof r ? ' class="' + r + '"' : "") + ("undefined" != typeof o ? ' style="' + o + '"' : "") + ("undefined" != typeof s ? 'data-optgroup="' + s + '"' : "") + ' data-normalized-text="' + a + '">' + t + '<span class="' + e.options.iconBase + " " + e.options.tickIcon + ' check-mark"></span></a>'
                };
            return this.$element.find("option").each(function() {
                var n = t(this),
                    i = n.attr("class") || "",
                    l = n.attr("style"),
                    u = n.data("content") ? n.data("content") : n.html(),
                    c = "undefined" != typeof n.data("subtext") ? '<small class="muted text-muted">' + n.data("subtext") + "</small>" : "",
                    h = "undefined" != typeof n.data("icon") ? '<span class="' + e.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
                    d = n.is(":disabled") || n.parent().is(":disabled"),
                    f = n.index();
                if ("" !== h && d && (h = "<span>" + h + "</span>"), n.data("content") || (u = h + '<span class="text">' + u + c + "</span>"), !e.options.hideDisabled || !d)
                    if (n.parent().is("optgroup") && n.data("divider") !== !0) {
                        if (0 === n.index()) {
                            o += 1;
                            var p = n.parent().attr("label"),
                                m = "undefined" != typeof n.parent().data("subtext") ? '<small class="muted text-muted">' + n.parent().data("subtext") + "</small>" : "",
                                g = n.parent().data("icon") ? '<span class="' + e.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "";
                            p = g + '<span class="text">' + p + m + "</span>", 0 !== f && r.length > 0 && r.push(s("", null, "divider")), r.push(s(p, null, "dropdown-header"))
                        }
                        r.push(s(a(u, "opt " + i, l, o), f))
                    } else n.data("divider") === !0 ? r.push(s("", f, "divider")) : n.data("hidden") === !0 ? r.push(s(a(u, i, l), f, "hidden is-hidden")) : r.push(s(a(u, i, l), f))
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), t(r.join(""))
        },
        findLis: function() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
        },
        render: function(e) {
            var n = this;
            e !== !1 && this.$element.find("option").each(function(e) {
                n.setDisabled(e, t(this).is(":disabled") || t(this).parent().is(":disabled")), n.setSelected(e, t(this).is(":selected"))
            }), this.tabIndex();
            var i = this.options.hideDisabled ? ":not([disabled])" : "",
                r = this.$element.find("option:selected" + i).map(function() {
                    var e, i = t(this),
                        r = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                    return e = n.options.showSubtext && i.attr("data-subtext") && !n.multiple ? ' <small class="muted text-muted">' + i.data("subtext") + "</small>" : "", i.data("content") && n.options.showContent ? i.data("content") : "undefined" != typeof i.attr("title") ? i.attr("title") : r + i.html() + e
                }).toArray(),
                o = this.multiple ? r.join(this.options.multipleSeparator) : r[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var s = this.options.selectedTextFormat.split(">");
                if (s.length > 1 && r.length > s[1] || 1 == s.length && r.length >= 2) {
                    i = this.options.hideDisabled ? ", [disabled]" : "";
                    var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length,
                        l = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(r.length, a) : this.options.countSelectedText;
                    o = l.replace("{0}", r.length.toString()).replace("{1}", a.toString())
                }
            }
            this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(o.replace(/<[^>]*>?/g, ""))), this.$newElement.find(".filter-option").html(o)
        },
        setStyle: function(t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
            var n = t ? t : this.options.style;
            "add" == e ? this.$button.addClass(n) : "remove" == e ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
        },
        liHeight: function() {
            if (this.options.size !== !1) {
                var t = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                    e = t.addClass("open").find("> .dropdown-menu"),
                    n = e.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),
                    i = this.options.header ? e.find(".popover-title").outerHeight() : 0,
                    r = this.options.liveSearch ? e.find(".bs-searchbox").outerHeight() : 0,
                    o = this.options.actionsBox ? e.find(".bs-actionsbox").outerHeight() : 0;
                t.remove(), this.$newElement.data("liHeight", n).data("headerHeight", i).data("searchHeight", r).data("actionsHeight", o)
            }
        },
        setSize: function() {
            this.findLis();
            var e, n, i, r = this,
                o = this.$menu,
                s = o.find(".inner"),
                a = this.$newElement.outerHeight(),
                l = this.$newElement.data("liHeight"),
                u = this.$newElement.data("headerHeight"),
                c = this.$newElement.data("searchHeight"),
                h = this.$newElement.data("actionsHeight"),
                d = this.$lis.filter(".divider").outerHeight(!0),
                f = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom")) + parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")),
                p = this.options.hideDisabled ? ", .disabled" : "",
                m = t(window),
                g = f + parseInt(o.css("margin-top")) + parseInt(o.css("margin-bottom")) + 2,
                v = function() {
                    n = r.$newElement.offset().top - m.scrollTop(), i = m.height() - n - a
                };
            if (v(), this.options.header && o.css("padding-top", 0), "auto" == this.options.size) {
                var $ = function() {
                    var t, a = r.$lis.not(".hidden");
                    v(), e = i - g, r.options.dropupAuto && r.$newElement.toggleClass("dropup", n > i && e - g < o.height()), r.$newElement.hasClass("dropup") && (e = n - g), t = a.length + a.filter(".dropdown-header").length > 3 ? 3 * l + g - 2 : 0, o.css({
                        "max-height": e + "px",
                        overflow: "hidden",
                        "min-height": t + u + c + h + "px"
                    }), s.css({
                        "max-height": e - u - c - h - f + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(t - f, 0) + "px"
                    })
                };
                $(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", $), t(window).off("resize.getSize").on("resize.getSize", $), t(window).off("scroll.getSize").on("scroll.getSize", $)
            } else if (this.options.size && "auto" != this.options.size && o.find("li" + p).length > this.options.size) {
                var b = this.$lis.not(".divider" + p).find(" > *").slice(0, this.options.size).last().parent().index(),
                    y = this.$lis.slice(0, b + 1).filter(".divider").length;
                e = l * this.options.size + y * d + f, r.options.dropupAuto && this.$newElement.toggleClass("dropup", n > i && e < o.height()), o.css({
                    "max-height": e + u + c + h + "px",
                    overflow: "hidden"
                }), s.css({
                    "max-height": e - f + "px",
                    "overflow-y": "auto"
                })
            }
        },
        setWidth: function() {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$newElement.clone().appendTo("body"),
                    e = t.find("> .dropdown-menu").css("width"),
                    n = t.css("width", "auto").find("> button").css("width");
                t.remove(), this.$newElement.css("width", Math.max(parseInt(e), parseInt(n)) + "px")
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var e, n, i = this,
                r = "<div />",
                o = t(r),
                s = function(t) {
                    o.addClass(t.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, o.css({
                        top: e.top + n,
                        left: e.left,
                        width: t[0].offsetWidth,
                        position: "absolute"
                    })
                };
            this.$newElement.on("click", function() {
                i.isDisabled() || (s(t(this)), o.appendTo(i.options.container), o.toggleClass("open", !t(this).hasClass("open")), o.append(i.$menu))
            }), t(window).resize(function() {
                s(i.$newElement)
            }), t(window).on("scroll", function() {
                s(i.$newElement)
            }), t("html").on("click", function(e) {
                t(e.target).closest(i.$newElement).length < 1 && o.removeClass("open")
            })
        },
        setSelected: function(t, e) {
            this.findLis(), this.$lis.filter('[data-original-index="' + t + '"]').toggleClass("selected", e)
        },
        setDisabled: function(t, e) {
            this.findLis(), e ? this.$lis.filter('[data-original-index="' + t + '"]').addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$lis.filter('[data-original-index="' + t + '"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() {
            return this.$element.is(":disabled")
        },
        checkDisabled: function() {
            var t = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() {
                return !t.isDisabled()
            })
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function() {
            var e = this;
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(t) {
                t.stopPropagation()
            }), this.$newElement.on("click", function() {
                e.setSize(), e.options.liveSearch || e.multiple || setTimeout(function() {
                    e.$menu.find(".selected a").focus()
                }, 10)
            }), this.$menu.on("click", "li a", function(n) {
                var i = t(this),
                    r = i.parent().data("originalIndex"),
                    o = e.$element.val(),
                    s = e.$element.prop("selectedIndex");
                if (e.multiple && n.stopPropagation(), n.preventDefault(), !e.isDisabled() && !i.parent().hasClass("disabled")) {
                    var a = e.$element.find("option"),
                        l = a.eq(r),
                        u = l.prop("selected"),
                        c = l.parent("optgroup"),
                        h = e.options.maxOptions,
                        d = c.data("maxOptions") || !1;
                    if (e.multiple) {
                        if (l.prop("selected", !u), e.setSelected(r, !u), i.blur(), h !== !1 || d !== !1) {
                            var f = h < a.filter(":selected").length,
                                p = d < c.find("option:selected").length;
                            if (h && f || d && p)
                                if (h && 1 == h) a.prop("selected", !1), l.prop("selected", !0), e.$menu.find(".selected").removeClass("selected"), e.setSelected(r, !0);
                                else if (d && 1 == d) {
                                c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                var m = i.data("optgroup");
                                e.$menu.find(".selected").has('a[data-optgroup="' + m + '"]').removeClass("selected"), e.setSelected(r, !0)
                            } else {
                                var g = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(h, d) : e.options.maxOptionsText,
                                    v = g[0].replace("{n}", h),
                                    $ = g[1].replace("{n}", d),
                                    b = t('<div class="notify"></div>');
                                g[2] && (v = v.replace("{var}", g[2][h > 1 ? 0 : 1]), $ = $.replace("{var}", g[2][d > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(b), h && f && (b.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), d && p && (b.append(t("<div>" + $ + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                    e.setSelected(r, !1)
                                }, 10), b.delay(750).fadeOut(300, function() {
                                    t(this).remove()
                                })
                            }
                        }
                    } else a.prop("selected", !1), l.prop("selected", !0), e.$menu.find(".selected").removeClass("selected"), e.setSelected(r, !0);
                    e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (o != e.$element.val() && e.multiple || s != e.$element.prop("selectedIndex") && !e.multiple) && e.$element.change()
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(t) {
                t.currentTarget == this && (t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus())
            }), this.$menu.on("click", "li.divider, li.dropdown-header", function(t) {
                t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
            }), this.$menu.on("click", ".popover-title .close", function() {
                e.$button.focus()
            }), this.$searchbox.on("click", function(t) {
                t.stopPropagation()
            }), this.$menu.on("click", ".actions-btn", function(n) {
                e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), n.preventDefault(), n.stopPropagation(), t(this).is(".bs-select-all") ? e.selectAll() : e.deselectAll(), e.$element.change()
            }), this.$element.change(function() {
                e.render(!1)
            })
        },
        liveSearchListener: function() {
            var e = this,
                r = t('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                e.$menu.find(".active").removeClass("active"), e.$searchbox.val() && (e.$searchbox.val(""), e.$lis.not(".is-hidden").removeClass("hidden"), r.parent().length && r.remove()), e.multiple || e.$menu.find(".selected").addClass("active"), setTimeout(function() {
                    e.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(t) {
                t.stopPropagation()
            }), this.$searchbox.on("input propertychange", function() {
                e.$searchbox.val() ? (e.options.searchAccentInsensitive ? e.$lis.not(".is-hidden").removeClass("hidden").find("a").not(":aicontains(" + n(e.$searchbox.val()) + ")").parent().addClass("hidden") : e.$lis.not(".is-hidden").removeClass("hidden").find("a").not(":icontains(" + e.$searchbox.val() + ")").parent().addClass("hidden"), e.$menu.find("li").filter(":visible:not(.no-results)").length ? r.parent().length && r.remove() : (r.parent().length && r.remove(), r.html(e.options.noneResultsText + ' "' + i(e.$searchbox.val()) + '"').show(), e.$menu.find("li").last().after(r))) : (e.$lis.not(".is-hidden").removeClass("hidden"), r.parent().length && r.remove()), e.$menu.find("li.active").removeClass("active"), e.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), t(this).focus()
            })
        },
        val: function(t) {
            return "undefined" != typeof t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
        },
        selectAll: function() {
            this.findLis(), this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()
        },
        deselectAll: function() {
            this.findLis(), this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()
        },
        keydown: function(e) {
            var i, r, o, s, a, l, u, c, h, d = t(this),
                f = d.is("input") ? d.parent().parent() : d.parent(),
                p = f.data("this"),
                m = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (p.options.liveSearch && (f = d.parent().parent()), p.options.container && (f = p.$menu), i = t("[role=menu] li a", f), h = p.$menu.parent().hasClass("open"), !h && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode)) && (p.options.container ? p.$newElement.trigger("click") : (p.setSize(), p.$menu.parent().addClass("open"), h = !0), p.$searchbox.focus()), p.options.liveSearch && (/(^9$|27)/.test(e.keyCode.toString(10)) && h && 0 === p.$menu.find(".active").length && (e.preventDefault(), p.$menu.parent().removeClass("open"), p.$button.focus()), i = t("[role=menu] li:not(.divider):not(.dropdown-header):visible", f), d.val() || /(38|40)/.test(e.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = p.options.searchAccentInsensitive ? p.$newElement.find("li").filter(":aicontains(" + n(m[e.keyCode]) + ")") : p.$newElement.find("li").filter(":icontains(" + m[e.keyCode] + ")"))), i.length) {
                if (/(38|40)/.test(e.keyCode.toString(10))) r = i.index(i.filter(":focus")), s = i.parent(":not(.disabled):visible").first().index(), a = i.parent(":not(.disabled):visible").last().index(), o = i.eq(r).parent().nextAll(":not(.disabled):visible").eq(0).index(), l = i.eq(r).parent().prevAll(":not(.disabled):visible").eq(0).index(), u = i.eq(o).parent().prevAll(":not(.disabled):visible").eq(0).index(), p.options.liveSearch && (i.each(function(e) {
                    t(this).is(":not(.disabled)") && t(this).data("index", e)
                }), r = i.index(i.filter(".active")), s = i.filter(":not(.disabled):visible").first().data("index"), a = i.filter(":not(.disabled):visible").last().data("index"), o = i.eq(r).nextAll(":not(.disabled):visible").eq(0).data("index"), l = i.eq(r).prevAll(":not(.disabled):visible").eq(0).data("index"), u = i.eq(o).prevAll(":not(.disabled):visible").eq(0).data("index")), c = d.data("prevIndex"), 38 == e.keyCode && (p.options.liveSearch && (r -= 1), r != u && r > l && (r = l), s > r && (r = s), r == c && (r = a)), 40 == e.keyCode && (p.options.liveSearch && (r += 1), -1 == r && (r = 0), r != u && o > r && (r = o), r > a && (r = a), r == c && (r = s)), d.data("prevIndex", r), p.options.liveSearch ? (e.preventDefault(), d.is(".dropdown-toggle") || (i.removeClass("active"), i.eq(r).addClass("active").find("a").focus(), d.focus())) : i.eq(r).focus();
                else if (!d.is("input")) {
                    var g, v, $ = [];
                    i.each(function() {
                        t(this).parent().is(":not(.disabled)") && t.trim(t(this).text().toLowerCase()).substring(0, 1) == m[e.keyCode] && $.push(t(this).parent().index())
                    }), g = t(document).data("keycount"), g++, t(document).data("keycount", g), v = t.trim(t(":focus").text().toLowerCase()).substring(0, 1), v != m[e.keyCode] ? (g = 1, t(document).data("keycount", g)) : g >= $.length && (t(document).data("keycount", 0), g > $.length && (g = 1)), i.eq($[g - 1]).focus()
                }(/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && p.options.selectOnTab) && h && (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), p.options.liveSearch ? /(32)/.test(e.keyCode.toString(10)) || (p.$menu.find(".active a").click(), d.focus()) : t(":focus").click(), t(document).data("keycount", 0)), (/(^9$|27)/.test(e.keyCode.toString(10)) && h && (p.multiple || p.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !h) && (p.$menu.parent().removeClass("open"), p.$button.focus())
            }
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function() {
            this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        hide: function() {
            this.$newElement.hide()
        },
        show: function() {
            this.$newElement.show()
        },
        remove: function() {
            this.$newElement.remove(), this.$element.remove()
        }
    };
    var s = t.fn.selectpicker;
    t.fn.selectpicker = r, t.fn.selectpicker.Constructor = o, t.fn.selectpicker.noConflict = function() {
        return t.fn.selectpicker = s, this
    }, t(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", o.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", function(t) {
        t.stopPropagation()
    }), t(window).on("load.bs.select.data-api", function() {
        t(".selectpicker").each(function() {
            var e = t(this);
            r.call(e, e.data())
        })
    })
}(jQuery);
var $JssorDebug$ = new function() {
        function t(e) {
            if (e.constructor === t.caller) throw new Error("Cannot create instance of an abstract class.")
        }
        this.$DebugMode = !0, this.$Log = function(t, e) {
            var n = window.console || {},
                i = this.$DebugMode;
            i && n.log ? n.log(t) : i && e && alert(t)
        }, this.$Error = function(t, e) {
            var n = window.console || {},
                i = this.$DebugMode;
            if (i && n.error ? n.error(t) : i && alert(t), i) throw e || new Error(t)
        }, this.$Fail = function(t) {
            throw new Error(t)
        }, this.$Assert = function(t, e) {
            var n = this.$DebugMode;
            if (n && !t) throw new Error("Assert failed " + e || "")
        }, this.$Trace = function(t) {
            var e = window.console || {},
                n = this.$DebugMode;
            n && e.log && e.log(t)
        }, this.$Execute = function(t) {
            var e = this.$DebugMode;
            e && t()
        }, this.$LiveStamp = function(t, e) {
            var n = this.$DebugMode;
            if (n) {
                var i = document.createElement("DIV");
                i.setAttribute("id", e), t.$Live = i
            }
        }, this.$C_AbstractProperty = function() {
            throw new Error("The property is abstract, it should be implemented by subclass.")
        }, this.$C_AbstractMethod = function() {
            throw new Error("The method is abstract, it should be implemented by subclass.")
        }, this.$C_AbstractClass = t
    },
    $JssorEasing$ = window.$JssorEasing$ = {
        $EaseLinear: function(t) {
            return t
        },
        $EaseGoBack: function(t) {
            return 1 - Math.abs((t *= 2) - 1)
        },
        $EaseSwing: function(t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        },
        $EaseInQuad: function(t) {
            return t * t
        },
        $EaseOutQuad: function(t) {
            return -t * (t - 2)
        },
        $EaseInOutQuad: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
        },
        $EaseInCubic: function(t) {
            return t * t * t
        },
        $EaseOutCubic: function(t) {
            return (t -= 1) * t * t + 1
        },
        $EaseInOutCubic: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        $EaseInQuart: function(t) {
            return t * t * t * t
        },
        $EaseOutQuart: function(t) {
            return -((t -= 1) * t * t * t - 1)
        },
        $EaseInOutQuart: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
        },
        $EaseInQuint: function(t) {
            return t * t * t * t * t
        },
        $EaseOutQuint: function(t) {
            return (t -= 1) * t * t * t * t + 1
        },
        $EaseInOutQuint: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        $EaseInSine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        $EaseOutSine: function(t) {
            return Math.sin(t * Math.PI / 2)
        },
        $EaseInOutSine: function(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1)
        },
        $EaseInExpo: function(t) {
            return 0 == t ? 0 : Math.pow(2, 10 * (t - 1))
        },
        $EaseOutExpo: function(t) {
            return 1 == t ? 1 : -Math.pow(2, -10 * t) + 1
        },
        $EaseInOutExpo: function(t) {
            return 0 == t || 1 == t ? t : (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
        },
        $EaseInCirc: function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        },
        $EaseOutCirc: function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        },
        $EaseInOutCirc: function(t) {
            return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        $EaseInElastic: function(t) {
            if (!t || 1 == t) return t;
            var e = .3,
                n = .075;
            return -(Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / e))
        },
        $EaseOutElastic: function(t) {
            if (!t || 1 == t) return t;
            var e = .3,
                n = .075;
            return Math.pow(2, -10 * t) * Math.sin(2 * (t - n) * Math.PI / e) + 1
        },
        $EaseInOutElastic: function(t) {
            if (!t || 1 == t) return t;
            var e = .45,
                n = .1125;
            return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / e) : Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / e) * .5 + 1
        },
        $EaseInBack: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        $EaseOutBack: function(t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1
        },
        $EaseInOutBack: function(t) {
            var e = 1.70158;
            return (t *= 2) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
        },
        $EaseInBounce: function(t) {
            return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
        },
        $EaseOutBounce: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        $EaseInOutBounce: function(t) {
            return .5 > t ? .5 * $JssorEasing$.$EaseInBounce(2 * t) : .5 * $JssorEasing$.$EaseOutBounce(2 * t - 1) + .5
        },
        $EaseInWave: function(t) {
            return 1 - Math.cos(t * Math.PI * 2)
        },
        $EaseOutWave: function(t) {
            return Math.sin(t * Math.PI * 2)
        },
        $EaseOutJump: function(t) {
            return 1 - ((t *= 2) < 1 ? (t = 1 - t) * t * t : (t -= 1) * t * t)
        },
        $EaseInJump: function(t) {
            return (t *= 2) < 1 ? t * t * t : (t = 2 - t) * t * t
        }
    },
    $JssorDirection$ = window.$JssorDirection$ = {
        $TO_LEFT: 1,
        $TO_RIGHT: 2,
        $TO_TOP: 4,
        $TO_BOTTOM: 8,
        $HORIZONTAL: 3,
        $VERTICAL: 12,
        $LEFTRIGHT: 3,
        $TOPBOTOM: 12,
        $TOPLEFT: 5,
        $TOPRIGHT: 6,
        $BOTTOMLEFT: 9,
        $BOTTOMRIGHT: 10,
        $AROUND: 15,
        $GetDirectionHorizontal: function(t) {
            return 3 & t
        },
        $GetDirectionVertical: function(t) {
            return 12 & t
        },
        $ChessHorizontal: function(t) {
            return (3 & ~t) + (12 & t)
        },
        $ChessVertical: function(t) {
            return (12 & ~t) + (3 & t)
        },
        $IsToLeft: function(t) {
            return 1 == (3 & t)
        },
        $IsToRight: function(t) {
            return 2 == (3 & t)
        },
        $IsToTop: function(t) {
            return 4 == (12 & t)
        },
        $IsToBottom: function(t) {
            return 8 == (12 & t)
        },
        $IsHorizontal: function(t) {
            return (3 & t) > 0
        },
        $IsVertical: function(t) {
            return (12 & t) > 0
        }
    },
    $JssorKeyCode$ = {
        $BACKSPACE: 8,
        $COMMA: 188,
        $DELETE: 46,
        $DOWN: 40,
        $END: 35,
        $ENTER: 13,
        $ESCAPE: 27,
        $HOME: 36,
        $LEFT: 37,
        $NUMPAD_ADD: 107,
        $NUMPAD_DECIMAL: 110,
        $NUMPAD_DIVIDE: 111,
        $NUMPAD_ENTER: 108,
        $NUMPAD_MULTIPLY: 106,
        $NUMPAD_SUBTRACT: 109,
        $PAGE_DOWN: 34,
        $PAGE_UP: 33,
        $PERIOD: 190,
        $RIGHT: 39,
        $SPACE: 32,
        $TAB: 9,
        $UP: 38
    },
    $JssorAlignment$ = {
        $TopLeft: 17,
        $TopCenter: 18,
        $TopRight: 20,
        $MiddleLeft: 33,
        $MiddleCenter: 34,
        $MiddleRight: 36,
        $BottomLeft: 65,
        $BottomCenter: 66,
        $BottomRight: 68,
        $IsTop: function(t) {
            return t & !0
        },
        $IsMiddle: function(t) {
            return t & !0
        },
        $IsBottom: function(t) {
            return t & !0
        },
        $IsLeft: function(t) {
            return t & !0
        },
        $IsCenter: function(t) {
            return t & !0
        },
        $IsRight: function(t) {
            return t & !0
        }
    },
    $JssorMatrix$, $JssorAnimator$, $Jssor$ = window.$Jssor$ = new function() {
        function t() {
            if (!et)
                if ("Microsoft Internet Explorer" == st && window.attachEvent && window.ActiveXObject) {
                    var t = at.indexOf("MSIE");
                    et = Z, it = H(at.substring(t + 5, at.indexOf(";", t))), nt = document.documentMode || it
                } else if ("Netscape" == st && window.addEventListener) {
                var e = at.indexOf("Firefox"),
                    n = at.indexOf("Safari"),
                    i = at.indexOf("Chrome"),
                    r = at.indexOf("AppleWebKit");
                if (e >= 0) et = Y, nt = H(at.substring(e + 8));
                else if (n >= 0) {
                    var o = at.substring(0, n).lastIndexOf("/");
                    et = i >= 0 ? K : Y, nt = H(at.substring(o + 1, n))
                }
                r >= 0 && (ot = H(at.substring(r + 12)))
            } else {
                var s = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(at);
                s && (et = tt, nt = H(s[2]))
            }
        }

        function e() {
            return t(), et == Z
        }

        function n() {
            return e() && (6 > nt || "BackCompat" == document.compatMode)
        }

        function i() {
            return t(), et == Y
        }

        function r() {
            return t(), et == Y
        }

        function o() {
            return t(), et == K
        }

        function s() {
            return t(), et == tt
        }

        function a() {
            return r() && ot > 534 && 535 > ot
        }

        function l() {
            return e() && 9 > nt
        }

        function u(t) {
            return V || (h(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(e) {
                return void 0 != t.style[e] ? (V = e, !0) : void 0
            }), V = V || "transform"), V
        }

        function c(t) {
            return Object.prototype.toString.call(t)
        }

        function h(t, e) {
            if ("[object Array]" == c(t)) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n], n, t)) return !0
            } else
                for (var i in t)
                    if (e(t[i], i, t)) return !0
        }

        function d() {
            return G || (G = {}, h(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(t) {
                G["[object " + t + "]"] = t.toLowerCase()
            })), G
        }

        function f(t) {
            return null == t ? String(t) : d()[c(t)] || "object"
        }

        function p(t) {
            if (!t || "object" !== f(t) || t.nodeType || X.$IsWindow(t)) return !1;
            var e = Object.prototype.hasOwnProperty;
            try {
                if (t.constructor && !e.call(t, "constructor") && !e.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in t);
            return void 0 === i || e.call(t, i)
        }

        function m(t, e) {
            return {
                x: t,
                y: e
            }
        }

        function g(t, e) {
            setTimeout(t, e || 0)
        }

        function v(t, e, n) {
            var i = t && "inherit" != t ? t : "";
            return h(e, function(t) {
                var e = t.exec(i);
                if (e) {
                    var n = i.substr(0, e.index),
                        r = i.substr(e.lastIndex + 1, i.length - (e.lastIndex + 1));
                    i = n + r
                }
            }), i = n + (0 != i.indexOf(" ") ? " " : "") + i
        }

        function $(t, e) {
            9 > nt && (t.style.filter = e)
        }

        function b(t, e, n) {
            if (9 > rt) {
                var i = t.style.filter,
                    r = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                    o = e ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + e[0][0] + ", M12=" + e[0][1] + ", M21=" + e[1][0] + ", M22=" + e[1][1] + ", SizingMethod='auto expand')" : "",
                    s = v(i, [r], o);
                $(t, s), X.$CssMarginTop(t, n.y), X.$CssMarginLeft(t, n.x)
            }
        }

        function y(t) {
            t.constructor === y.caller && t.$Construct && t.$Construct.apply(t, y.caller.arguments)
        }

        function w(t) {
            return t || window.event
        }

        function x(t, e, n) {
            if (void 0 == n) {
                var i = t.currentStyle || t.style;
                return n = i[e], "" == n && window.getComputedStyle && (i = t.ownerDocument.defaultView.getComputedStyle(t, null), i && (n = i.getPropertyValue(e) || i[e])), n
            }
            t.style[e] = n
        }

        function C(t, e, n, i) {
            return void 0 == n ? H(x(t, e)) : (i && (n += "px"), void x(t, e, n))
        }

        function S(t, e, n) {
            return C(t, e, n, !0)
        }

        function T(t, e) {
            var n = 2 & e,
                i = e ? C : x;
            return function(e, r) {
                return i(e, t, r, n)
            }
        }

        function _(t) {
            if (e() && 9 > it) {
                var n = /opacity=([^)]*)/.exec(t.style.filter || "");
                return n ? H(n[1]) / 100 : 1
            }
            return H(t.style.opacity || "1")
        }

        function E(t, n, i) {
            if (e() && 9 > it) {
                var r = t.style.filter || "",
                    o = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    s = Math.round(100 * n),
                    a = "";
                (100 > s || i) && (a = "alpha(opacity=" + s + ") ");
                var l = v(r, [o], a);
                $(t, l)
            } else t.style.opacity = 1 == n ? "" : Math.round(100 * n) / 100
        }

        function D(t, e) {
            var n = e.$Rotate || 0,
                i = void 0 == e.$Scale ? 1 : e.$Scale;
            if (l()) {
                var r = X.$CreateMatrix(n / 180 * Math.PI, i, i);
                b(t, n || 1 != i ? r : null, X.$GetMatrixOffset(r, e.$OriginalWidth, e.$OriginalHeight))
            } else {
                var s = u(t);
                if (s) {
                    var a = "rotate(" + n % 360 + "deg) scale(" + i + ")";
                    o() && ot > 535 && "ontouchstart" in window && (a += " perspective(2000px)"), t.style[s] = a
                }
            }
        }

        function A(t, e, n, i) {
            for (i = i || "u", t = t ? t.firstChild : null; t; t = t.nextSibling)
                if (1 == t.nodeType) {
                    if (J(t, i) == e) return t;
                    if (!n) {
                        var r = A(t, e, n, i);
                        if (r) return r
                    }
                }
        }

        function I(t, e, n, i) {
            i = i || "u";
            var r = [];
            for (t = t ? t.firstChild : null; t; t = t.nextSibling)
                if (1 == t.nodeType && (J(t, i) == e && r.push(t), !n)) {
                    var o = I(t, e, n, i);
                    o.length && (r = r.concat(o))
                }
            return r
        }

        function F(t, e, n) {
            for (t = t ? t.firstChild : null; t; t = t.nextSibling)
                if (1 == t.nodeType) {
                    if (t.tagName == e) return t;
                    if (!n) {
                        var i = F(t, e, n);
                        if (i) return i
                    }
                }
        }

        function k(t, e, n) {
            var i = [];
            for (t = t ? t.firstChild : null; t; t = t.nextSibling)
                if (1 == t.nodeType && (e && t.tagName != e || i.push(t), !n)) {
                    var r = k(t, e, n);
                    r.length && (i = i.concat(r))
                }
            return i
        }

        function P(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (n)
                    for (var i in n) t[i] = n[i]
            }
            return t
        }

        function N(t, e) {
            $JssorDebug$.$Assert(e);
            var n = {};
            for (var i in t) t[i] !== e[i] && (n[i] = t[i]);
            return n
        }

        function O(t) {
            return document.createElement(t)
        }

        function L(t, e, n) {
            return void 0 == n ? t.getAttribute(e) : void t.setAttribute(e, n)
        }

        function J(t, e) {
            return L(t, e) || L(t, "data-" + e)
        }

        function R(t, e) {
            return void 0 == e ? t.className : void(t.className = e)
        }

        function M(t) {
            var e = {};
            return h(t, function(t) {
                e[t] = t
            }), e
        }

        function j(t, e) {
            var n = "";
            return h(e, function(e) {
                n && (n += t), n += e
            }), n
        }

        function H(t) {
            return parseFloat(t)
        }

        function W(t, e, n) {
            var i = t.cloneNode(!e);
            return n || X.$RemoveAttribute(i, "id"), i
        }

        function B(t) {
            if (t) {
                var e = t.$FlyDirection;
                1 & e && (t.x = t.$ScaleHorizontal || 1), 2 & e && (t.x = -t.$ScaleHorizontal || -1), 4 & e && (t.y = t.$ScaleVertical || 1), 8 & e && (t.y = -t.$ScaleVertical || -1), 1 == t.$Rotate && (t.$Rotate = 1), B(t.$Brother)
            }
        }

        function q(t) {
            function e() {
                var e = i;
                s ? e += "ds" : r ? e += "dn" : 2 == o ? e += "pv" : o && (e += "av"), R(t, e)
            }

            function n(t) {
                s ? X.$CancelEvent(t) : (dt.push(a), r = !0, e())
            }
            var i, r, o, s, a = this;
            a.$MouseUp = function() {
                r = !1, e()
            }, a.$Selected = function(t) {
                return void 0 == t ? o : (o = t, void e())
            }, a.$Enable = function(t) {
                return void 0 == t ? !s : (s = !t, void e())
            }, t = X.$GetElement(t), dt || (X.$AddEventBrowserMouseUp(function() {
                var t = dt;
                dt = [], h(t, function(t) {
                    t.$MouseUp()
                })
            }), dt = []), i = R(t), $Jssor$.$AddEvent(t, "mousedown", n)
        }

        function z() {
            return ft || (ft = P({
                $MarginTop: X.$CssMarginTop,
                $MarginLeft: X.$CssMarginLeft,
                $Clip: X.$SetStyleClip,
                $Transform: X.$SetStyleTransform
            }, pt)), ft
        }

        function U() {
            return z(), ft.$Transform = ft.$Transform, ft
        }
        var V, G, X = this,
            Q = /\S+/g,
            Z = 1,
            Y = 2,
            Y = 3,
            K = 4,
            tt = 5,
            et = 0,
            nt = 0,
            it = 0,
            rt = 0,
            ot = 0,
            st = navigator.appName,
            at = (navigator.appVersion, navigator.userAgent),
            lt = document.documentElement;
        X.$IsBrowserIE = e, X.$IsBrowserIeQuirks = n, X.$IsBrowserFireFox = i, X.$IsBrowserSafari = r, X.$IsBrowserChrome = o, X.$IsBrowserOpera = s, X.$IsBrowserBadTransform = a, X.$IsBrowserIe9Earlier = l, X.$BrowserVersion = function() {
            return nt
        }, X.$BrowserEngineVersion = function() {
            return it || nt
        }, X.$WebKitVersion = function() {
            return t(), ot
        }, X.$Delay = g, X.$Inherit = function(t, e) {
            return e.call(t), P({}, t)
        }, X.$Construct = y, X.$GetElement = function(t) {
            return X.$IsString(t) && (t = document.getElementById(t)), t
        }, X.$GetEvent = w, X.$EventSrc = function(t) {
            return t = w(t), t.target || t.srcElement || document
        }, X.$EventDst = function(t) {
            return t = w(t), t.relatedTarget || t.toElement
        }, X.$MousePosition = function(t) {
            t = w(t);
            var e = document.body;
            return {
                x: t.pageX || t.clientX + (lt.scrollLeft || e.scrollLeft || 0) - (lt.clientLeft || e.clientLeft || 0) || 0,
                y: t.pageY || t.clientY + (lt.scrollTop || e.scrollTop || 0) - (lt.clientTop || e.clientTop || 0) || 0
            }
        }, X.$PageScroll = function() {
            var t = document.body;
            return {
                x: (window.pageXOffset || lt.scrollLeft || t.scrollLeft || 0) - (lt.clientLeft || t.clientLeft || 0),
                y: (window.pageYOffset || lt.scrollTop || t.scrollTop || 0) - (lt.clientTop || t.clientTop || 0)
            }
        }, X.$WindowSize = function() {
            var t = document.body;
            return {
                x: t.clientWidth || lt.clientWidth,
                y: t.clientHeight || lt.clientHeight
            }
        }, X.$SetStyleTransform = function(t, e) {
            a() ? g(X.$CreateCallback(null, D, t, e)) : D(t, e)
        }, X.$SetStyleTransformOrigin = function(t, e) {
            var n = u(t);
            n && (t.style[n + "Origin"] = e)
        }, X.$CssScale = function(t, i) {
            if (e() && 9 > it || 10 > it && n()) t.style.zoom = 1 == i ? "" : i;
            else {
                var r = u(t);
                if (r) {
                    var o = "scale(" + i + ")",
                        s = t.style[r],
                        a = new RegExp(/[\s]*scale\(.*?\)/g),
                        l = v(s, [a], o);
                    t.style[r] = l
                }
            }
        }, X.$EnableHWA = function(t) {}, X.$DisableHWA = function(t) {
            t.style[u(t)] = "none"
        };
        var ut = 0,
            ct = 0;
        X.$WindowResizeFilter = function(t, e) {
            return l() ? function() {
                var i = !0,
                    r = n() ? t.document.body : t.document.documentElement;
                if (r) {
                    var o = r.offsetWidth - ut,
                        s = r.offsetHeight - ct;
                    o || s ? (ut += o, ct += s) : i = !1
                }
                i && e()
            } : e
        }, X.$MouseOverOutFilter = function(t, e) {
            return $JssorDebug$.$Execute(function() {
                    if (!e) throw new Error('Null reference, parameter "target".')
                }),
                function(n) {
                    n = w(n);
                    var i = n.type,
                        r = n.relatedTarget || ("mouseout" == i ? n.toElement : n.fromElement);
                    (!r || r !== e && !X.$IsChild(e, r)) && t(n)
                }
        }, X.$AddEvent = function(t, e, n, i) {
            t = X.$GetElement(t), t.addEventListener ? ("mousewheel" == e && t.addEventListener("DOMMouseScroll", n, i), t.addEventListener(e, n, i)) : t.attachEvent && (t.attachEvent("on" + e, n), i && t.setCapture && t.setCapture()), $JssorDebug$.$Execute(function() {
                t.addEventListener || t.attachEvent || $JssorDebug$.$Fail("Unable to attach event handler, no known technique.")
            })
        }, X.$RemoveEvent = function(t, e, n, i) {
            t = X.$GetElement(t), t.removeEventListener ? ("mousewheel" == e && t.removeEventListener("DOMMouseScroll", n, i), t.removeEventListener(e, n, i)) : t.detachEvent && (t.detachEvent("on" + e, n), i && t.releaseCapture && t.releaseCapture())
        }, X.$FireEvent = function(t, e) {
            $JssorDebug$.$Execute(function() {
                document.createEvent || document.createEventObject || $JssorDebug$.$Fail("Unable to fire event, no known technique."), t.dispatchEvent || t.fireEvent || $JssorDebug$.$Fail("Unable to fire event, no known technique.")
            });
            var n;
            if (document.createEvent) n = document.createEvent("HTMLEvents"), n.initEvent(e, !1, !1), t.dispatchEvent(n);
            else {
                var i = "on" + e;
                n = document.createEventObject(), t.fireEvent(i, n)
            }
        }, X.$AddEventBrowserMouseUp = function(t, e) {
            X.$AddEvent(l() ? document : window, "mouseup", t, e)
        }, X.$RemoveEventBrowserMouseUp = function(t, e) {
            X.$RemoveEvent(l() ? document : window, "mouseup", t, e)
        }, X.$CancelEvent = function(t) {
            t = w(t), t.preventDefault && t.preventDefault(), t.cancel = !0, t.returnValue = !1
        }, X.$StopEvent = function(t) {
            t = w(t), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0
        }, X.$CreateCallback = function(t, e) {
            var n = [].slice.call(arguments, 2),
                i = function() {
                    var i = n.concat([].slice.call(arguments, 0));
                    return e.apply(t, i)
                };
            return i
        };
        var ht;
        X.$FreeElement = function(t) {
            ht || (ht = X.$CreateDiv()), t && ($Jssor$.$AppendChild(ht, t), $Jssor$.$ClearInnerHtml(ht))
        }, X.$InnerText = function(t, e) {
            if (void 0 == e) return t.textContent || t.innerText;
            var n = document.createTextNode(e);
            X.$ClearInnerHtml(t), t.appendChild(n)
        }, X.$InnerHtml = function(t, e) {
            return void 0 == e ? t.innerHTML : void(t.innerHTML = e)
        }, X.$GetClientRect = function(t) {
            var e = t.getBoundingClientRect();
            return {
                x: e.left,
                y: e.top,
                w: e.right - e.left,
                h: e.bottom - e.top
            }
        }, X.$ClearInnerHtml = function(t) {
            t.innerHTML = ""
        }, X.$EncodeHtml = function(t) {
            var e = X.$CreateDiv();
            return X.$InnerText(e, t), X.$InnerHtml(e)
        }, X.$DecodeHtml = function(t) {
            var e = X.$CreateDiv();
            return X.$InnerHtml(e, t), X.$InnerText(e)
        }, X.$SelectElement = function(t) {
            var e;
            window.getSelection && (e = window.getSelection());
            var n = null;
            document.createRange ? (n = document.createRange(), n.selectNode(t)) : (n = document.body.createTextRange(), n.moveToElementText(t), n.select()), e && e.addRange(n)
        }, X.$DeselectElements = function() {
            document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
        }, X.$Children = function(t) {
            for (var e = [], n = t.firstChild; n; n = n.nextSibling) 1 == n.nodeType && e.push(n);
            return e
        }, X.$FindChild = A, X.$FindChildren = I, X.$FindChildByTag = F, X.$FindChildrenByTag = k, X.$GetElementsByTag = function(t, e) {
            return t.getElementsByTagName(e)
        }, X.$Extend = P, X.$Unextend = N, X.$IsUndefined = function(t) {
            return "undefined" == f(t)
        }, X.$IsFunction = function(t) {
            return "function" == f(t)
        }, X.$IsArray = function(t) {
            return "array" == f(t)
        }, X.$IsString = function(t) {
            return "string" == f(t)
        }, X.$IsNumeric = function(t) {
            return !isNaN(H(t)) && isFinite(t)
        }, X.$IsWindow = function(t) {
            return t && t == t.window
        }, X.$Type = f, X.$Each = h, X.$IsPlainObject = p, X.$CreateElement = O, X.$CreateDiv = function() {
            return O("DIV", document)
        }, X.$CreateSpan = function() {
            return O("SPAN", document)
        }, X.$EmptyFunction = function() {}, X.$Attribute = L, X.$AttributeEx = J, X.$ClassName = R, X.$ToHash = M, X.$Join = j, X.$AddClass = function(t, e) {
            var n = R(t) + " " + e;
            R(t, j(" ", M(n.match(Q))))
        }, X.$RemoveClass = function(t, e) {
            R(t, j(" ", X.$Unextend(M(R(t).match(Q)), M(e.match(Q)))))
        }, X.$ParentNode = function(t) {
            return t.parentNode
        }, X.$HideElement = function(t) {
            X.$CssDisplay(t, "none")
        }, X.$EnableElement = function(t, e) {
            e ? X.$Attribute(t, "disabled", !0) : X.$RemoveAttribute(t, "disabled")
        }, X.$HideElements = function(t) {
            for (var e = 0; e < t.length; e++) X.$HideElement(t[e])
        }, X.$ShowElement = function(t, e) {
            X.$CssDisplay(t, e ? "none" : "")
        }, X.$ShowElements = function(t, e) {
            for (var n = 0; n < t.length; n++) X.$ShowElement(t[n], e)
        }, X.$RemoveAttribute = function(t, e) {
            t.removeAttribute(e)
        }, X.$CanClearClip = function() {
            return e() && 10 > nt
        }, X.$SetStyleClip = function(t, e) {
            if (e) t.style.clip = "rect(" + Math.round(e.$Top) + "px " + Math.round(e.$Right) + "px " + Math.round(e.$Bottom) + "px " + Math.round(e.$Left) + "px)";
            else {
                var n = t.style.cssText,
                    i = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    r = v(n, i, "");
                $Jssor$.$CssCssText(t, r)
            }
        }, X.$GetNow = function() {
            return (new Date).getTime()
        }, X.$AppendChild = function(t, e) {
            t.appendChild(e)
        }, X.$AppendChildren = function(t, e) {
            h(e, function(e) {
                X.$AppendChild(t, e)
            })
        }, X.$InsertBefore = function(t, e, n) {
            (n || e.parentNode).insertBefore(t, e)
        }, X.$InsertAfter = function(t, e, n) {
            X.$InsertBefore(t, e.nextSibling, n || e.parentNode)
        }, X.$InsertAdjacentHtml = function(t, e, n) {
            t.insertAdjacentHTML(e, n)
        }, X.$RemoveElement = function(t, e) {
            (e || t.parentNode).removeChild(t)
        }, X.$RemoveElements = function(t, e) {
            h(t, function(t) {
                X.$RemoveElement(t, e)
            })
        }, X.$Empty = function(t) {
            X.$RemoveElements(X.$Children(t), t)
        }, X.$ParseInt = function(t, e) {
            return parseInt(t, e || 10)
        }, X.$ParseFloat = H, X.$IsChild = function(t, e) {
            for (var n = document.body; e && t !== e && n !== e;) try {
                e = e.parentNode
            } catch (i) {
                return !1
            }
            return t === e
        }, X.$CloneNode = W, X.$TranslateTransitions = function(t) {
            if (t) {
                for (var e = 0; e < t.length; e++) B(t[e]);
                for (var n in t) B(t[n])
            }
        }, X.$LoadImage = function(t, e) {
            function n(t, o) {
                X.$RemoveEvent(r, "load", n), X.$RemoveEvent(r, "abort", i), X.$RemoveEvent(r, "error", i), e && e(r, o)
            }

            function i(t) {
                n(t, !0)
            }
            var r = new Image;
            s() && 11.6 > nt || !t ? n(!t) : (X.$AddEvent(r, "load", n), X.$AddEvent(r, "abort", i), X.$AddEvent(r, "error", i), r.src = t)
        }, X.$LoadImages = function(t, e, n) {
            function i(t, i) {
                r--, e && t && t.src == e.src && (e = t), !r && n && n(e)
            }
            var r = t.length + 1;
            h(t, function(t) {
                X.$LoadImage(t.src, i)
            }), i()
        }, X.$BuildElement = function(t, e, n, i) {
            i && (t = W(t));
            var r = I(t, e);
            r.length || (r = $Jssor$.$GetElementsByTag(t, e));
            for (var o = r.length - 1; o > -1; o--) {
                var s = r[o],
                    a = W(n);
                R(a, R(s)), $Jssor$.$CssCssText(a, s.style.cssText), $Jssor$.$InsertBefore(a, s), $Jssor$.$RemoveElement(s)
            }
            return t
        };
        var dt;
        X.$Buttonize = function(t) {
            return new q(t)
        }, X.$Css = x, X.$CssN = C, X.$CssP = S, X.$CssOverflow = T("overflow"), X.$CssTop = T("top", 2), X.$CssLeft = T("left", 2), X.$CssWidth = T("width", 2), X.$CssHeight = T("height", 2), X.$CssMarginLeft = T("marginLeft", 2), X.$CssMarginTop = T("marginTop", 2), X.$CssPosition = T("position"), X.$CssDisplay = T("display"), X.$CssZIndex = T("zIndex", 1), X.$CssFloat = function(t, n) {
            return x(t, e() ? "styleFloat" : "cssFloat", n)
        }, X.$CssOpacity = function(t, e, n) {
            return void 0 == e ? _(t) : void E(t, e, n)
        }, X.$CssCssText = function(t, e) {
            return void 0 == e ? t.style.cssText : void(t.style.cssText = e)
        };
        var ft, pt = {
            $Opacity: X.$CssOpacity,
            $Top: X.$CssTop,
            $Left: X.$CssLeft,
            $Width: X.$CssWidth,
            $Height: X.$CssHeight,
            $Position: X.$CssPosition,
            $Display: X.$CssDisplay,
            $ZIndex: X.$CssZIndex
        };
        X.$StyleSetter = z, X.$StyleSetterEx = U, X.$GetStyles = function(t, e) {
            z();
            var n = {};
            return h(e, function(e, i) {
                pt[i] && (n[i] = pt[i](t))
            }), n
        }, X.$SetStyles = function(t, e) {
            var n = z();
            h(e, function(e, i) {
                n[i] && n[i](t, e)
            })
        }, X.$SetStylesEx = function(t, e) {
            U(), X.$SetStyles(t, e)
        }, $JssorMatrix$ = new function() {
            function t(t, e) {
                for (var n = t[0].length, i = t.length, r = e[0].length, o = [], s = 0; i > s; s++)
                    for (var a = o[s] = [], l = 0; r > l; l++) {
                        for (var u = 0, c = 0; n > c; c++) u += t[s][c] * e[c][l];
                        a[l] = u
                    }
                return o
            }
            var e = this;
            e.$ScaleX = function(t, n) {
                return e.$ScaleXY(t, n, 0)
            }, e.$ScaleY = function(t, n) {
                return e.$ScaleXY(t, 0, n)
            }, e.$ScaleXY = function(e, n, i) {
                return t(e, [
                    [n, 0],
                    [0, i]
                ])
            }, e.$TransformPoint = function(e, n) {
                var i = t(e, [
                    [n.x],
                    [n.y]
                ]);
                return m(i[0][0], i[1][0])
            }
        }, X.$CreateMatrix = function(t, e, n) {
            var i = Math.cos(t),
                r = Math.sin(t);
            return [
                [i * e, -r * n],
                [r * e, i * n]
            ]
        }, X.$GetMatrixOffset = function(t, e, n) {
            var i = $JssorMatrix$.$TransformPoint(t, m(-e / 2, -n / 2)),
                r = $JssorMatrix$.$TransformPoint(t, m(e / 2, -n / 2)),
                o = $JssorMatrix$.$TransformPoint(t, m(e / 2, n / 2)),
                s = $JssorMatrix$.$TransformPoint(t, m(-e / 2, n / 2));
            return m(Math.min(i.x, r.x, o.x, s.x) + e / 2, Math.min(i.y, r.y, o.y, s.y) + n / 2)
        }, X.$Transform = function(t, e, n, i, r, o, s) {
            var a = e;
            if (t) {
                a = {};
                for (var l in e) {
                    var u = o[l] || 1,
                        c = r[l] || [0, 1],
                        h = (n - c[0]) / c[1];
                    h = Math.min(Math.max(h, 0), 1), h *= u;
                    var d = Math.floor(h);
                    h != d && (h -= d);
                    var f, p = i[l] || i.$Default,
                        m = p(h),
                        g = t[l],
                        v = e[l];
                    $Jssor$.$IsNumeric(v) ? f = g + (v - g) * m : (f = $Jssor$.$Extend({
                        $Offset: {}
                    }, t[l]), $Jssor$.$Each(v.$Offset, function(t, e) {
                        var n = t * m;
                        f.$Offset[e] = n, f[e] += n
                    })), a[l] = f
                }
                t.$Zoom && (a.$Transform = {
                    $Rotate: a.$Rotate || 0,
                    $Scale: a.$Zoom,
                    $OriginalWidth: s.$OriginalWidth,
                    $OriginalHeight: s.$OriginalHeight
                })
            }
            if (e.$Clip && s.$Move) {
                var $ = a.$Clip.$Offset,
                    b = ($.$Top || 0) + ($.$Bottom || 0),
                    y = ($.$Left || 0) + ($.$Right || 0);
                a.$Left = (a.$Left || 0) + y, a.$Top = (a.$Top || 0) + b, a.$Clip.$Left -= y, a.$Clip.$Right -= y, a.$Clip.$Top -= b, a.$Clip.$Bottom -= b
            }
            return a.$Clip && $Jssor$.$CanClearClip() && !a.$Clip.$Top && !a.$Clip.$Left && a.$Clip.$Right == s.$OriginalWidth && a.$Clip.$Bottom == s.$OriginalHeight && (a.$Clip = null), a
        }
    },
    $JssorObject$ = window.$JssorObject$ = function() {
        function t(t, e) {
            $JssorDebug$.$Execute(function() {
                if (void 0 == t || null == t) throw new Error("param 'eventName' is null or empty.");
                if ("function" != typeof e) throw "param 'handler' must be a function.";
                $Jssor$.$Each(o, function(n) {
                    if (n.$EventName == t && n.$Handler === e) throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.")
                })
            }), o.push({
                $EventName: t,
                $Handler: e
            })
        }

        function e(t, e) {
            $JssorDebug$.$Execute(function() {
                if (void 0 == t || null == t) throw new Error("param 'eventName' is null or empty.");
                if ("function" != typeof e) throw "param 'handler' must be a function."
            }), $Jssor$.$Each(o, function(n, i) {
                n.$EventName == t && n.$Handler === e && o.splice(i, 1)
            })
        }

        function n() {
            o = []
        }

        function i() {
            $Jssor$.$Each(s, function(t) {
                $Jssor$.$RemoveEvent(t.$Obj, t.$EventName, t.$Handler)
            }), s = []
        }
        var r = this,
            o = [],
            s = [];
        r.$Listen = function(t, e, n, i) {
            $JssorDebug$.$Execute(function() {
                if (!t) throw new Error("param 'obj' is null or empty.");
                if (void 0 == e || null == e) throw new Error("param 'eventName' is null or empty.");
                if ("function" != typeof n) throw "param 'handler' must be a function.";
                $Jssor$.$Each(s, function(i) {
                    if (i.$Obj === t && i.$EventName == e && i.$Handler === n) throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.")
                })
            }), $Jssor$.$AddEvent(t, e, n, i), s.push({
                $Obj: t,
                $EventName: e,
                $Handler: n
            })
        }, r.$Unlisten = function(t, e, n) {
            $JssorDebug$.$Execute(function() {
                if (!t) throw new Error("param 'obj' is null or empty.");
                if (void 0 == e || null == e) throw new Error("param 'eventName' is null or empty.");
                if ("function" != typeof n) throw "param 'handler' must be a function."
            }), $Jssor$.$Each(s, function(i, r) {
                i.$Obj === t && i.$EventName == e && i.$Handler === n && ($Jssor$.$RemoveEvent(t, e, n), s.splice(r, 1))
            })
        }, r.$UnlistenAll = i, r.$On = r.addEventListener = t, r.$Off = r.removeEventListener = e, r.$TriggerEvent = function(t) {
            var e = [].slice.call(arguments, 1);
            $Jssor$.$Each(o, function(n) {
                n.$EventName == t && n.$Handler.apply(window, e)
            })
        }, r.$Destroy = function() {
            i(), n();
            for (var t in r) delete r[t]
        }, $JssorDebug$.$C_AbstractClass(r)
    };
$JssorAnimator$ = function(t, e, n, i, r, o) {
    function s(t) {
        C += t, S += t, k += t, P += t, I += t, F += t, A = t
    }

    function a(e, n) {
        var i = e - C + t * n;
        return s(i), S
    }

    function l(t, s) {
        var a = t;
        if (T && (a >= S || C >= a) && (a = ((a - C) % T + T) % T + C), !x || v || s || I != a) {
            var l = Math.min(a, S);
            if (l = Math.max(l, C), !x || v || s || l != F) {
                if (o) {
                    var u = (l - k) / (e || 1);
                    n.$Reverse && (u = 1 - u);
                    var c = $Jssor$.$Transform(r, o, u, $, y, b, n);
                    $Jssor$.$Each(c, function(t, e) {
                        _[e] && _[e](i, t)
                    })
                }
                E.$OnInnerOffsetChange(F - k, l - k)
            }
            F = l, $Jssor$.$Each(N, function(e, n) {
                var i = I > t ? N[N.length - n - 1] : e;
                i.$GoToPosition(t - A, s)
            });
            var h = I,
                d = t;
            I = a, x = !0, E.$OnPositionChange(h, d)
        }
    }

    function u(t, e, n) {
        $JssorDebug$.$Execute(function() {
            0 !== e && 1 !== e && $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.")
        }), e && t.$Locate(S, 1), !n && (S = Math.max(S, t.$GetPosition_OuterEnd() + A)), N.push(t)
    }

    function c() {
        if (f) {
            var t = $Jssor$.$GetNow(),
                e = Math.min(t - D, n.$IntervalMax),
                i = I + e * g;
            D = t, i * g >= m * g && (i = m), l(i), !v && i * g >= m * g ? d(w) : O(c)
        }
    }

    function h(t, e, n) {
        f || (f = !0, v = n, w = e, t = Math.max(t, C), t = Math.min(t, S), m = t, g = I > m ? -1 : 1, E.$OnStart(), D = $Jssor$.$GetNow(), O(c))
    }

    function d(t) {
        f && (v = f = w = !1, E.$OnStop(), t && t())
    }
    t = t || 0;
    var f, p, m, g, v, $, b, y, w, x, C, S, T, _, E = this,
        D = 0,
        A = 0,
        I = 0,
        F = 0,
        k = t,
        P = t + e,
        N = [],
        O = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    $Jssor$.$IsBrowserSafari() && $Jssor$.$BrowserVersion() < 7 && (O = null, $JssorDebug$.$Log("Custom animation frame for safari before 7.")), O = O || function(t) {
        $Jssor$.$Delay(t, n.$Interval)
    }, E.$Play = function(t, e, n) {
        h(t ? I + t : S, e, n)
    }, E.$PlayToPosition = h, E.$PlayToBegin = function(t, e) {
        h(C, t, e)
    }, E.$PlayToEnd = function(t, e) {
        h(S, t, e)
    }, E.$Stop = d, E.$Continue = function(t) {
        h(t)
    }, E.$GetPosition = function() {
        return I
    }, E.$GetPlayToPosition = function() {
        return m
    }, E.$GetPosition_Display = function() {
        return F
    }, E.$GoToPosition = l, E.$GoToBegin = function() {
        l(C, !0)
    }, E.$GoToEnd = function() {
        l(S, !0)
    }, E.$Move = function(t) {
        l(I + t)
    }, E.$CombineMode = function() {
        return p
    }, E.$GetDuration = function() {
        return e
    }, E.$IsPlaying = function() {
        return f
    }, E.$IsOnTheWay = function() {
        return I > k && P >= I
    }, E.$SetLoopLength = function(t) {
        T = t
    }, E.$Locate = a, E.$Shift = s, E.$Join = u, E.$Combine = function(t) {
        u(t, 0)
    }, E.$Chain = function(t) {
        u(t, 1)
    }, E.$GetPosition_InnerBegin = function() {
        return k
    }, E.$GetPosition_InnerEnd = function() {
        return P
    }, E.$GetPosition_OuterBegin = function() {
        return C
    }, E.$GetPosition_OuterEnd = function() {
        return S
    }, E.$OnPositionChange = E.$OnStart = E.$OnStop = E.$OnInnerOffsetChange = $Jssor$.$EmptyFunction, E.$Version = $Jssor$.$GetNow(), n = $Jssor$.$Extend({
        $Interval: 16,
        $IntervalMax: 50
    }, n), $JssorDebug$.$Execute(function() {
        n = $Jssor$.$Extend({
            $LoopLength: void 0,
            $Setter: void 0,
            $Easing: void 0
        }, n)
    }), T = n.$LoopLength, _ = $Jssor$.$Extend({}, $Jssor$.$StyleSetter(), n.$Setter), C = k = t, S = P = t + e, b = n.$Round || {}, y = n.$During || {}, $ = $Jssor$.$Extend({
        $Default: $Jssor$.$IsFunction(n.$Easing) && n.$Easing || $JssorEasing$.$EaseSwing
    }, n.$Easing)
};
var $JssorSlider$, $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = {},
    $JssorSlideshowRunner$;
!new function() {
    function t(t) {
        return (t & f) == f
    }

    function e(t) {
        return (t & p) == p
    }

    function n(t, e, n) {
        n.push(e), t[e] = t[e] || [], t[e].push(n)
    }

    function i(t) {
        var e = t.$Formation(t);
        return t.$Reverse ? e.reverse() : e
    }

    function r(t, e) {
        var n = {
            $Interval: e,
            $Duration: 1,
            $Delay: 0,
            $Cols: 1,
            $Rows: 1,
            $Opacity: 0,
            $Zoom: 0,
            $Clip: 0,
            $Move: !1,
            $SlideOut: !1,
            $Reverse: !1,
            $Formation: $JssorSlideshowFormations$.$FormationRandom,
            $Assembly: E,
            $ChessMode: {
                $Column: 0,
                $Row: 0
            },
            $Easing: $JssorEasing$.$EaseSwing,
            $Round: {},
            $Blocks: [],
            $During: {}
        };
        return $Jssor$.$Extend(n, t), n.$Count = n.$Cols * n.$Rows, $Jssor$.$IsFunction(n.$Easing) && (n.$Easing = {
            $Default: n.$Easing
        }), n.$FramesCount = Math.ceil(n.$Duration / n.$Interval), n.$EasingInstance = o(n), n.$GetBlocks = function(t, e) {
            t /= n.$Cols, e /= n.$Rows;
            var i = t + "x" + e;
            if (!n.$Blocks[i]) {
                n.$Blocks[i] = {
                    $Width: t,
                    $Height: e
                };
                for (var r = 0; r < n.$Cols; r++)
                    for (var o = 0; o < n.$Rows; o++) n.$Blocks[i][o + "," + r] = {
                        $Top: o * e,
                        $Right: r * t + t,
                        $Bottom: o * e + e,
                        $Left: r * t
                    }
            }
            return n.$Blocks[i]
        }, n.$Brother && (n.$Brother = r(n.$Brother, e), n.$SlideOut = !0), n
    }

    function o(t) {
        var e = t.$Easing;
        e.$Default || (e.$Default = $JssorEasing$.$EaseSwing);
        var n = t.$FramesCount,
            i = e.$Cache;
        if (!i) {
            var r = $Jssor$.$Extend({}, t.$Easing, t.$Round);
            i = e.$Cache = {}, $Jssor$.$Each(r, function(r, o) {
                var s = e[o] || e.$Default,
                    a = t.$Round[o] || 1;
                $Jssor$.$IsArray(s.$Cache) || (s.$Cache = []);
                var l = s.$Cache[n] = s.$Cache[n] || [];
                if (!l[a]) {
                    l[a] = [0];
                    for (var u = 1; n >= u; u++) {
                        var c = u / n * a,
                            h = Math.floor(c);
                        c != h && (c -= h), l[a][u] = s(c)
                    }
                }
                i[o] = l
            })
        }
        return i
    }

    function s(t, e, n, r, o, s) {
        function a(t) {
            $Jssor$.$DisableHWA(t);
            var e = $Jssor$.$Children(t);
            $Jssor$.$Each(e, function(t) {
                a(t)
            })
        }
        var l, u, c, h, d, f = this,
            p = {},
            m = {},
            g = [],
            v = n.$ChessMode.$Column || 0,
            $ = n.$ChessMode.$Row || 0,
            b = n.$GetBlocks(o, s),
            y = i(n),
            w = y.length - 1,
            x = n.$Duration + n.$Delay * w,
            C = r + x,
            S = n.$SlideOut;
        if (C += $Jssor$.$IsBrowserChrome() ? 260 : 50, f.$EndTime = C, f.$ShowFrame = function(t) {
                t -= r;
                var e = x > t;
                if (e || d) {
                    d = e, S || (t = x - t);
                    var i = Math.ceil(t / n.$Interval);
                    $Jssor$.$Each(m, function(t, e) {
                        var n = Math.max(i, t.$Min);
                        n = Math.min(n, t.length - 1), t.$LastFrameIndex != n && (t.$LastFrameIndex || S ? n == t.$Max && S && $Jssor$.$HideElement(g[e]) : $Jssor$.$ShowElement(g[e]), t.$LastFrameIndex = n, $Jssor$.$SetStylesEx(g[e], t[n]))
                    })
                }
            }, e = $Jssor$.$CloneNode(e), a(e), $Jssor$.$IsBrowserIe9Earlier()) {
            var T = !e["no-image"],
                _ = $Jssor$.$FindChildrenByTag(e);
            $Jssor$.$Each(_, function(t) {
                (T || t["jssor-slider"]) && $Jssor$.$CssOpacity(t, $Jssor$.$CssOpacity(t), !0)
            })
        }
        $Jssor$.$Each(y, function(t, e) {
            $Jssor$.$Each(t, function(t) {
                var i = t[0],
                    r = t[1],
                    a = i + "," + r,
                    d = !1,
                    f = !1,
                    g = !1;
                v && r % 2 && ($JssorDirection$.$IsHorizontal(v) && (d = !d), $JssorDirection$.$IsVertical(v) && (f = !f), 16 & v && (g = !g)), $ && i % 2 && ($JssorDirection$.$IsHorizontal($) && (d = !d), $JssorDirection$.$IsVertical($) && (f = !f), 16 & $ && (g = !g)), n.$Top = n.$Top || 4 & n.$Clip, n.$Bottom = n.$Bottom || 8 & n.$Clip, n.$Left = n.$Left || 1 & n.$Clip, n.$Right = n.$Right || 2 & n.$Clip;
                var y = f ? n.$Bottom : n.$Top,
                    w = f ? n.$Top : n.$Bottom,
                    x = d ? n.$Right : n.$Left,
                    C = d ? n.$Left : n.$Right;
                n.$Clip = y || w || x || C, h = {}, c = {
                    $Top: 0,
                    $Left: 0,
                    $Opacity: 1,
                    $Width: o,
                    $Height: s
                }, u = $Jssor$.$Extend({}, c), l = $Jssor$.$Extend({}, b[a]), n.$Opacity && (c.$Opacity = 2 - n.$Opacity), n.$ZIndex && (c.$ZIndex = n.$ZIndex, u.$ZIndex = 0);
                var T = n.$Cols * n.$Rows > 1 || n.$Clip;
                if (n.$Zoom || n.$Rotate) {
                    var _ = !0;
                    if ($Jssor$.$IsBrowserIE() && $Jssor$.$BrowserEngineVersion() < 9 && (n.$Cols * n.$Rows > 1 ? _ = !1 : T = !1), _) {
                        c.$Zoom = n.$Zoom ? n.$Zoom - 1 : 1, u.$Zoom = 1, ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) && (c.$Zoom = Math.min(c.$Zoom, 2));
                        var E = n.$Rotate;
                        c.$Rotate = 360 * E * (g ? -1 : 1), u.$Rotate = 0
                    }
                }
                if (T) {
                    if (n.$Clip) {
                        var D = n.$ScaleClip || 1,
                            A = l.$Offset = {};
                        y && w ? (A.$Top = b.$Height / 2 * D, A.$Bottom = -A.$Top) : y ? A.$Bottom = -b.$Height * D : w && (A.$Top = b.$Height * D), x && C ? (A.$Left = b.$Width / 2 * D, A.$Right = -A.$Left) : x ? A.$Right = -b.$Width * D : C && (A.$Left = b.$Width * D)
                    }
                    h.$Clip = l, u.$Clip = b[a]
                }
                var I = d ? 1 : -1,
                    F = f ? 1 : -1;
                n.x && (c.$Left += o * n.x * I), n.y && (c.$Top += s * n.y * F), $Jssor$.$Each(c, function(t, e) {
                    $Jssor$.$IsNumeric(t) && t != u[e] && (h[e] = t - u[e])
                }), p[a] = S ? u : c;
                var k = Math.round(e * n.$Delay / n.$Interval);
                m[a] = new Array(k), m[a].$Min = k;
                for (var P = n.$FramesCount, N = 0; P >= N; N++) {
                    var O = {};
                    if ($Jssor$.$Each(h, function(t, e) {
                            var i = n.$EasingInstance[e] || n.$EasingInstance.$Default,
                                r = i[n.$Round[e] || 1],
                                o = n.$During[e] || [0, 1],
                                s = (N / P - o[0]) / o[1] * P;
                            s = Math.round(Math.min(P, Math.max(s, 0)));
                            var a = r[s];
                            if ($Jssor$.$IsNumeric(t)) O[e] = u[e] + t * a;
                            else {
                                var l = O[e] = $Jssor$.$Extend({}, u[e]);
                                l.$Offset = [], $Jssor$.$Each(t.$Offset, function(t, e) {
                                    var n = t * a;
                                    l.$Offset[e] = n, l[e] += n
                                })
                            }
                        }), u.$Zoom && (O.$Transform = {
                            $Rotate: O.$Rotate || 0,
                            $Scale: O.$Zoom,
                            $OriginalWidth: o,
                            $OriginalHeight: s
                        }), O.$Clip && n.$Move) {
                        var L = O.$Clip.$Offset,
                            J = (L.$Top || 0) + (L.$Bottom || 0),
                            R = (L.$Left || 0) + (L.$Right || 0);
                        O.$Left = (O.$Left || 0) + R, O.$Top = (O.$Top || 0) + J, O.$Clip.$Left -= R, O.$Clip.$Right -= R, O.$Clip.$Top -= J, O.$Clip.$Bottom -= J
                    }
                    O.$ZIndex = O.$ZIndex || 1, m[a].push(O)
                }
            })
        }), y.reverse(), $Jssor$.$Each(y, function(n) {
            $Jssor$.$Each(n, function(n) {
                var i = n[0],
                    r = n[1],
                    o = i + "," + r,
                    s = e;
                (r || i) && (s = $Jssor$.$CloneNode(e)), $Jssor$.$SetStyles(s, p[o]), $Jssor$.$CssOverflow(s, "hidden"), $Jssor$.$CssPosition(s, "absolute"), t.$AddClipElement(s), g[o] = s, $Jssor$.$ShowElement(s, !S)
            })
        })
    }

    function a(t, e) {
        function n() {
            var t = this;
            $JssorAnimator$.call(t, -1e8, 2e8), t.$GetCurrentSlideInfo = function() {
                var e = t.$GetPosition_Display(),
                    n = Math.floor(e),
                    i = S(n),
                    r = e - Math.floor(e);
                return {
                    $Index: i,
                    $VirtualIndex: n,
                    $Position: r
                }
            }, t.$OnPositionChange = function(t, e) {
                var n = Math.floor(e);
                n != e && e > t && n++, y(n, !0), O.$TriggerEvent(a.$EVT_POSITION_CHANGE, S(e), S(t), e, t)
            }
        }

        function i() {
            var t = this;
            $JssorAnimator$.call(t, 0, 0, {
                $LoopLength: Mt
            }), $Jssor$.$Each(de, function(e) {
                1 & Zt && e.$SetLoopLength(Mt), t.$Chain(e), e.$Shift(Ct / zt)
            })
        }

        function r() {
            var t = this,
                e = ee.$Elmt;
            $JssorAnimator$.call(t, -1, 2, {
                $Easing: $JssorEasing$.$EaseLinear,
                $Setter: {
                    $Position: c
                },
                $LoopLength: Mt
            }, e, {
                $Position: 1
            }, {
                $Position: -1
            }), t.$Wrapper = e, $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute(ee.$Elmt, "debug-id", "slide_container")
            })
        }

        function o(t, e) {
            var i, r, o, s, l, u = this;
            $JssorAnimator$.call(u, -1e8, 2e8, {
                $IntervalMax: 100
            }), u.$OnStart = function() {
                _t = !0, Dt = null, O.$TriggerEvent(a.$EVT_SWIPE_START, S(Pt.$GetPosition()), Pt.$GetPosition())
            }, u.$OnStop = function() {
                _t = !1, s = !1;
                var t = Pt.$GetCurrentSlideInfo();
                O.$TriggerEvent(a.$EVT_SWIPE_END, S(Pt.$GetPosition()), Pt.$GetPosition()), t.$Position || b(t.$VirtualIndex, Rt)
            }, u.$OnPositionChange = function(t, e) {
                var n;
                if (s) n = l;
                else if (n = r, o) {
                    var a = e / o;
                    n = R.$SlideEasing(a) * (r - i) + i
                }
                Pt.$GoToPosition(n)
            }, u.$PlayCarousel = function(t, e, n, s) {
                $JssorDebug$.$Execute(function() {
                    u.$IsPlaying() && $JssorDebug$.$Fail("The carousel is already playing.")
                }), i = t, r = e, o = n, Pt.$GoToPosition(t), u.$GoToPosition(0), u.$PlayToPosition(n, s)
            }, u.$StandBy = function(t) {
                s = !0, l = t, u.$Play(t, null, !0)
            }, u.$SetStandByPosition = function(t) {
                l = t
            }, u.$MoveCarouselTo = function(t) {
                Pt.$GoToPosition(t)
            }, Pt = new n, Pt.$Combine(t), Pt.$Combine(e)
        }

        function s() {
            var t = this,
                e = C();
            $Jssor$.$CssZIndex(e, 0), $Jssor$.$Css(e, "pointerEvents", "none"), t.$Elmt = e, t.$AddClipElement = function(t) {
                $Jssor$.$AppendChild(e, t), $Jssor$.$ShowElement(e)
            }, t.$Clear = function() {
                $Jssor$.$HideElement(e), $Jssor$.$ClearInnerHtml(e)
            }
        }

        function l(t, e) {
            function n(e) {
                v && v.$Revert(), g && g.$Revert(), m(t, e), E = !0, g = new W.$Class(t, W, 1), $JssorDebug$.$LiveStamp(g, "caption_slider_" + J + "_in"), v = new W.$Class(t, W), $JssorDebug$.$LiveStamp(v, "caption_slider_" + J + "_out"), $JssorDebug$.$Execute(function() {
                    J++
                }), v.$GoToBegin(), g.$GoToBegin()
            }

            function i() {
                g.$Version < W.$Version && n()
            }

            function r(t, n, i) {
                if (!T && (T = !0, y && i)) {
                    var r = i.width,
                        o = i.height,
                        s = r,
                        l = o;
                    if (r && o && R.$FillMode) {
                        if (3 & R.$FillMode && (!(4 & R.$FillMode) || r > jt || o > Ht)) {
                            var u = !1,
                                c = jt / Ht * o / r;
                            1 & R.$FillMode ? u = c > 1 : 2 & R.$FillMode && (u = 1 > c), s = u ? r * Ht / o : jt, l = u ? Ht : o * jt / r
                        }
                        $Jssor$.$CssWidth(y, s), $Jssor$.$CssHeight(y, l), $Jssor$.$CssTop(y, (Ht - l) / 2), $Jssor$.$CssLeft(y, (jt - s) / 2)
                    }
                    $Jssor$.$CssPosition(y, "absolute"), O.$TriggerEvent(a.$EVT_LOAD_END, e)
                }
                $Jssor$.$HideElement(n), t && t(P)
            }

            function o(t, n, i, r) {
                if (r == Dt && Rt == e && yt && !bt) {
                    var o = S(t);
                    ne.$Initialize(o, e, n, P, i), n.$HideContentForSlideshow(), Nt.$Locate(o, 1), Nt.$GoToPosition(o), Ot.$PlayCarousel(t, t, 0)
                }
            }

            function s(n) {
                if (n == Dt && Rt == e) {
                    if (!D) {
                        var r = null;
                        ne && (ne.$Index == e ? r = ne.$GetProcessor() : ne.$Clear()), i(), D = new u(t, e, r, P.$GetCaptionSliderIn(), P.$GetCaptionSliderOut()), D.$SetPlayer(I)
                    }!D.$IsPlaying() && D.$Replay()
                }
            }

            function l(t, n, i) {
                if (t == e) {
                    t != n ? de[n] && de[n].$ParkOut() : !i && D && D.$AdjustIdleOnPark(), I && I.$Enable();
                    var r = Dt = $Jssor$.$GetNow();
                    P.$LoadImage($Jssor$.$CreateCallback(null, s, r))
                } else {
                    var o = Math.abs(e - t),
                        a = Ut + R.$LazyLoading - 1;
                    (!_ || a >= o) && P.$LoadImage()
                }
            }

            function h() {
                Rt == e && D && (D.$Stop(), I && I.$Quit(), I && I.$Disable(), D.$OpenSlideshowPanel())
            }

            function d() {
                Rt == e && D && D.$Stop()
            }

            function f(t) {
                Tt ? $Jssor$.$CancelEvent(t) : O.$TriggerEvent(a.$EVT_CLICK, e, t)
            }

            function p() {
                I = A.pInstance, D && D.$SetPlayer(I)
            }

            function m(t, e, n) {
                if (!t["jssor-slider"]) {
                    n = n || 0, E || ("IMG" == t.tagName && (N.push(t), t.src || (_ = !0, t["display-origin"] = $Jssor$.$CssDisplay(t), $Jssor$.$HideElement(t))), $Jssor$.$IsBrowserIe9Earlier() && $Jssor$.$CssZIndex(t, ($Jssor$.$CssZIndex(t) || 0) + 1), R.$HWA && $Jssor$.$WebKitVersion() && (!pt || $Jssor$.$WebKitVersion() < 534 || !xt && !$Jssor$.$IsBrowserChrome()) && $Jssor$.$EnableHWA(t));
                    var i = $Jssor$.$Children(t);
                    $Jssor$.$Each(i, function(i, r) {
                        var o = $Jssor$.$AttributeEx(i, "u");
                        if ("player" != o || A || (A = i, A.pInstance ? p() : $Jssor$.$AddEvent(A, "dataavailable", p)), "caption" == o) {
                            if (!$Jssor$.$IsBrowserIE() && !e) {
                                var s = $Jssor$.$CloneNode(i, !1, !0);
                                $Jssor$.$InsertBefore(s, i, t), $Jssor$.$RemoveElement(i, t), i = s, e = !0
                            }
                        } else E || n || y || ("A" == i.tagName ? ("image" == $Jssor$.$AttributeEx(i, "u") ? (y = $Jssor$.$FindChildByTag(i, "IMG"), $JssorDebug$.$Execute(function() {
                            y || $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + t.outerHTML)
                        })) : y = $Jssor$.$FindChild(i, "image", !0), y && (w = i, $Jssor$.$SetStyles(w, nt), x = $Jssor$.$CloneNode(w, !0), $Jssor$.$AddEvent(x, "click", f), $Jssor$.$CssDisplay(x, "block"), $Jssor$.$SetStyles(x, nt), $Jssor$.$CssOpacity(x, 0), $Jssor$.$Css(x, "backgroundColor", "#000"))) : "IMG" == i.tagName && "image" == $Jssor$.$AttributeEx(i, "u") && (y = i), y && (y.border = 0, $Jssor$.$SetStyles(y, nt)));
                        m(i, e, n + 1)
                    })
                }
            }
            var g, v, $, b, y, w, x, C, T, _, E, D, A, I, k, P = this,
                N = [];
            $JssorAnimator$.call(P, -Ut, Ut + 1, {
                $SlideItemAnimator: !0
            }), P.$LoadImage = function(t, n) {
                n = n || b, N.length && !T ? ($Jssor$.$ShowElement(n), C || (C = !0, O.$TriggerEvent(a.$EVT_LOAD_START, e), $Jssor$.$Each(N, function(t) {
                    t.src || (t.src = $Jssor$.$AttributeEx(t, "src2"), $Jssor$.$CssDisplay(t, t["display-origin"]))
                })), $Jssor$.$LoadImages(N, y, $Jssor$.$CreateCallback(null, r, t, n))) : r(t, n)
            }, P.$GoForNextSlide = function() {
                if (ne) {
                    var t = ne.$GetTransition(Mt);
                    if (t) {
                        var n = Dt = $Jssor$.$GetNow(),
                            i = e + j,
                            r = de[S(i)];
                        return r.$LoadImage($Jssor$.$CreateCallback(null, o, i, r, t, n), b)
                    }
                }
                F(Rt + R.$AutoPlaySteps * j)
            }, P.$TryActivate = function() {
                l(e, e, !0)
            }, P.$ParkOut = function() {
                I && I.$Quit(), I && I.$Disable(), P.$UnhideContentForSlideshow(), D && D.$Abort(), D = null, n()
            }, P.$StampSlideItemElements = function(e) {
                e = k + "_" + e, $JssorDebug$.$Execute(function() {
                    y && $Jssor$.$Attribute(y, "debug-id", e + "_slide_item_image_id"), $Jssor$.$Attribute(t, "debug-id", e + "_slide_item_item_id")
                }), $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute($, "debug-id", e + "_slide_item_wrapper_id")
                }), $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute(b, "debug-id", e + "_loading_container_id")
                })
            }, P.$HideContentForSlideshow = function() {
                $Jssor$.$HideElement(t)
            }, P.$UnhideContentForSlideshow = function() {
                $Jssor$.$ShowElement(t)
            }, P.$EnablePlayer = function() {
                I && I.$Enable()
            }, P.$OnInnerOffsetChange = function(t, e) {
                var n = Ut - e;
                c($, n)
            }, P.$GetCaptionSliderIn = function() {
                return g
            }, P.$GetCaptionSliderOut = function() {
                return v
            }, P.$Index = e, $JssorObject$.call(P);
            var L = $Jssor$.$FindChild(t, "thumb", !0);
            L && (P.$Thumb = $Jssor$.$CloneNode(L), $Jssor$.$RemoveAttribute(L, "id"), $Jssor$.$HideElement(L)), $Jssor$.$ShowElement(t), b = $Jssor$.$CloneNode(X), $Jssor$.$CssZIndex(b, 1e3), $Jssor$.$AddEvent(t, "click", f), n(!0), P.$Image = y, P.$Link = x, P.$Item = t, P.$Wrapper = $ = t, $Jssor$.$AppendChild($, b), O.$On(203, l), O.$On(28, d), O.$On(24, h), $JssorDebug$.$Execute(function() {
                k = Jt++
            }), $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute($, "debug-id", "slide-" + e)
            })
        }

        function u(t, e, n, i, r) {
            function o() {
                $Jssor$.$Empty(ie), $t && p && w.$Link && $Jssor$.$AppendChild(ie, w.$Link), $Jssor$.$ShowElement(ie, !p && w.$Image)
            }

            function s() {
                m && (m = !1, O.$TriggerEvent(a.$EVT_ROLLBACK_END, e, d, b, h, d, f), $.$GoToPosition(h)), $.$Replay()
            }

            function l(t) {
                v = t, $.$Stop(), $.$Replay()
            }
            var u, c, h, d, f, p, m, g, v, $ = this,
                b = 0,
                y = 0,
                w = de[e];
            $JssorAnimator$.call($, 0, 0), $.$Replay = function() {
                var t = $.$GetPosition_Display();
                if (!Et && !_t && !v && Rt == e) {
                    t || (u && !p && (p = !0, $.$OpenSlideshowPanel(!0), O.$TriggerEvent(a.$EVT_SLIDESHOW_START, e, b, y, u, f)), o());
                    var n, i = a.$EVT_STATE_CHANGE;
                    t != f && (t == d ? n = f : t == h ? n = d : t ? t > d ? (m = !0, n = d, i = a.$EVT_ROLLBACK_START) : n = $.$GetPlayToPosition() : n = h), O.$TriggerEvent(i, e, t, b, h, d, f);
                    var r = yt && (!Gt || Yt);
                    t == f ? (d != f && !(12 & Gt) || r) && w.$GoForNextSlide() : (r || t != d) && $.$PlayToPosition(n, s)
                }
            }, $.$AdjustIdleOnPark = function() {
                d == f && d == $.$GetPosition_Display() && $.$GoToPosition(h)
            }, $.$Abort = function() {
                ne && ne.$Index == e && ne.$Clear();
                var t = $.$GetPosition_Display();
                f > t && O.$TriggerEvent(a.$EVT_STATE_CHANGE, e, -t - 1, b, h, d, f)
            }, $.$OpenSlideshowPanel = function(t) {
                n && $Jssor$.$CssOverflow(ut, t && n.$Transition.$Outside ? "" : "hidden")
            }, $.$OnInnerOffsetChange = function(t, n) {
                p && n >= u && (p = !1, o(), w.$UnhideContentForSlideshow(), ne.$Clear(), O.$TriggerEvent(a.$EVT_SLIDESHOW_END, e, b, y, u, f)), O.$TriggerEvent(a.$EVT_PROGRESS_CHANGE, e, n, b, h, d, f)
            }, $.$SetPlayer = function(t) {
                t && !g && (g = t, t.$On($JssorPlayer$.$EVT_SWITCH, l))
            }, n && $.$Chain(n), u = $.$GetPosition_OuterEnd(), c = $.$GetPosition_OuterEnd(), $.$Chain(i), h = i.$GetPosition_OuterEnd(), d = h + ($Jssor$.$ParseFloat($Jssor$.$AttributeEx(t, "idle")) || R.$AutoPlayInterval), r.$Shift(d), $.$Combine(r), f = $.$GetPosition_OuterEnd()
        }

        function c(t, e) {
            var n = ct > 0 ? ct : M,
                i = Bt * e * (1 & n),
                r = qt * e * (n >> 1 & 1);
            $Jssor$.$IsBrowserChrome() && $Jssor$.$BrowserVersion() < 38 ? (i = i.toFixed(3), r = r.toFixed(3)) : (i = Math.round(i), r = Math.round(r)), $Jssor$.$IsBrowserIE() && $Jssor$.$BrowserVersion() >= 10 && $Jssor$.$BrowserVersion() < 11 ? t.style.msTransform = "translate(" + i + "px, " + r + "px)" : $Jssor$.$IsBrowserChrome() && $Jssor$.$BrowserVersion() >= 30 && $Jssor$.$BrowserVersion() < 34 ? (t.style.WebkitTransition = "transform 0s", t.style.WebkitTransform = "translate3d(" + i + "px, " + r + "px, 0px) perspective(2000px)") : ($Jssor$.$CssLeft(t, i), $Jssor$.$CssTop(t, r))
        }

        function h(t) {
            var e = $Jssor$.$EventSrc(t).tagName;
            !ht && "INPUT" != e && "TEXTAREA" != e && "SELECT" != e && w() && m(t)
        }

        function d() {
            ae = _t, le = Ot.$GetPlayToPosition(), se = Pt.$GetPosition()
        }

        function f() {
            d(), (Et || !Yt && 12 & Gt) && (Ot.$Stop(), O.$TriggerEvent(a.$EVT_FREEZE))
        }

        function p(t) {
            if (t && d(), !Et && (Yt || !(12 & Gt)) && !Ot.$IsPlaying()) {
                var e = Pt.$GetPosition(),
                    n = Math.ceil(se);
                t && Math.abs(At) >= R.$MinDragOffsetToSlide && (n = Math.ceil(e), n += Ft), 1 & Zt || (n = Math.min(Mt - Ut, Math.max(n, 0)));
                var i = Math.abs(n - e);
                i = 1 - Math.pow(1 - i, 5), !Tt && ae ? Ot.$Continue(le) : e == n ? (lt.$EnablePlayer(), lt.$TryActivate()) : Ot.$PlayCarousel(e, n, i * Xt)
            }
        }

        function m(t) {
            if (Et = !0, dt = !1, Dt = null, $Jssor$.$AddEvent(document, pe, g), oe = $Jssor$.$GetNow() - 50, Tt = 0, f(), ae || (ct = 0), ft) {
                var e = t.touches[0];
                Kt = e.clientX, te = e.clientY
            } else {
                var n = $Jssor$.$MousePosition(t);
                Kt = n.x, te = n.y, $Jssor$.$CancelEvent(t)
            }
            At = 0, It = 0, Ft = 0, O.$TriggerEvent(a.$EVT_DRAG_START, S(se), se, t)
        }

        function g(t) {
            if (!Et || $Jssor$.$IsBrowserIe9Earlier() && !t.button) v(t);
            else {
                var e;
                if (ft) {
                    var n = t.touches;
                    n && n.length > 0 && (e = {
                        x: n[0].clientX,
                        y: n[0].clientY
                    })
                } else e = $Jssor$.$MousePosition(t);
                if (e) {
                    var i = e.x - Kt,
                        r = e.y - te;
                    if (Math.floor(se) != se && (ct = ct || M & ht), !i && !r || ct || (ct = 3 == ht ? Math.abs(r) > Math.abs(i) ? 2 : 1 : ht, pt && 1 == ct && Math.abs(r) - Math.abs(i) > 3 && (dt = !0)), ct) {
                        var o = r,
                            s = qt;
                        if (1 == ct && (o = i, s = Bt), !(1 & Zt)) {
                            if (o > 0) {
                                var a = s * Rt,
                                    l = o - a;
                                l > 0 && (o = a + 5 * Math.sqrt(l))
                            }
                            if (0 > o) {
                                var a = s * (Mt - Ut - Rt),
                                    l = -o - a;
                                l > 0 && (o = -a - 5 * Math.sqrt(l))
                            }
                        } - 2 > At - It ? Ft = 0 : At - It > 2 && (Ft = -1), It = At, At = o, ue = se - At / s / (Lt || 1), At && ct && !dt ? ($Jssor$.$CancelEvent(t), _t ? Ot.$SetStandByPosition(ue) : Ot.$StandBy(ue)) : $Jssor$.$IsBrowserIe9Earlier() && $Jssor$.$CancelEvent(t)
                    }
                }
            }
        }

        function v(t) {
            if (x(), Et) {
                Et = !1, oe = $Jssor$.$GetNow(), $Jssor$.$RemoveEvent(document, pe, g), Tt = At, Tt && $Jssor$.$CancelEvent(t), Ot.$Stop();
                var e = Pt.$GetPosition();
                O.$TriggerEvent(a.$EVT_DRAG_END, S(e), e, S(se), se, t), p(!0)
            }
        }

        function $(t) {
            return at = de[Rt], ot = Rt, Rt = S(t), lt = de[Rt], y(t), Rt
        }

        function b(t, e) {
            ct = 0, $(t), O.$TriggerEvent(a.$EVT_PARK, S(t), e)
        }

        function y(t, e) {
            st = t, $Jssor$.$Each(Vt, function(n) {
                n.$SetCurrentIndex(S(t), t, e)
            })
        }

        function w() {
            var t = a.$DragRegistry || 0,
                e = St;
            return pt && 1 & e && (e &= 1), a.$DragRegistry |= e, ht = e & ~t
        }

        function x() {
            ht && (a.$DragRegistry &= ~St, ht = 0)
        }

        function C() {
            var t = $Jssor$.$CreateDiv();
            return $Jssor$.$SetStyles(t, nt), $Jssor$.$CssPosition(t, "absolute"), t
        }

        function S(t) {
            return (t % Mt + Mt) % Mt
        }

        function T(t, e) {
            e && (Zt ? 2 & Zt && (t = S(t + st), e = !1) : (t = Math.min(Math.max(t + st, 0), Mt - Ut), e = !1)), F(t, R.$SlideDuration, e)
        }

        function _() {
            $Jssor$.$Each(Vt, function(t) {
                t.$Show(t.$Options.$ChanceToShow <= Yt)
            })
        }

        function E() {
            Yt || (Yt = 1, _(), Et || (12 & Gt && p(), 3 & Gt && de[Rt].$TryActivate()))
        }

        function D() {
            Yt && (Yt = 0, _(), Et || !(12 & Gt) || f())
        }

        function A() {
            nt = {
                $Width: jt,
                $Height: Ht,
                $Top: 0,
                $Left: 0
            }, $Jssor$.$Each(it, function(t, e) {
                $Jssor$.$SetStyles(t, nt), $Jssor$.$CssPosition(t, "absolute"), $Jssor$.$CssOverflow(t, "hidden"), $Jssor$.$HideElement(t)
            }), $Jssor$.$SetStyles(X, nt)
        }

        function I(t, e) {
            F(t, e, !0)
        }

        function F(t, e, n) {
            if (Qt && (!Et || R.$NaviQuitDrag)) {
                _t = !0, Et = !1, Ot.$Stop(), void 0 == e && (e = Xt);
                var i = kt.$GetPosition_Display(),
                    r = t;
                n && (r = i + t, r = t > 0 ? Math.ceil(r) : Math.floor(r)), 2 & Zt && (r = S(r)), 1 & Zt || (r = Math.max(0, Math.min(r, Mt - Ut)));
                var o = (r - i) % Mt;
                r = i + o;
                var s = i == r ? 0 : e * Math.abs(o);
                s = Math.min(s, e * Ut * 1.5), Ot.$PlayCarousel(i, r, s || 1)
            }
        }

        function k() {
            return $Jssor$.$CssWidth(U || t)
        }

        function P() {
            return $Jssor$.$CssHeight(U || t)
        }

        function N(e, n) {
            if (void 0 == e) return $Jssor$.$CssWidth(t);
            if (!U) {
                $JssorDebug$.$Execute(function() {
                    var e = $Jssor$.$Css(t, "width"),
                        n = $Jssor$.$Css(t, "height"),
                        i = $Jssor$.$CssP(t, "width"),
                        r = $Jssor$.$CssP(t, "height");
                    e && -1 != e.indexOf("px") || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'"), n && -1 != n.indexOf("px") || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'"), -1 != e.indexOf("%") && $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'"), -1 != n.indexOf("%") && $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'"), i || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'"), r || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'")
                });
                var i = $Jssor$.$CreateDiv(document);
                $Jssor$.$ClassName(i, $Jssor$.$ClassName(t)), $Jssor$.$CssCssText(i, $Jssor$.$CssCssText(t)), $Jssor$.$CssDisplay(i, "block"), $Jssor$.$CssPosition(i, "relative"), $Jssor$.$CssTop(i, 0), $Jssor$.$CssLeft(i, 0), $Jssor$.$CssOverflow(i, "visible"), U = $Jssor$.$CreateDiv(document), $Jssor$.$CssPosition(U, "absolute"), $Jssor$.$CssTop(U, 0), $Jssor$.$CssLeft(U, 0), $Jssor$.$CssWidth(U, $Jssor$.$CssWidth(t)), $Jssor$.$CssHeight(U, $Jssor$.$CssHeight(t)), $Jssor$.$SetStyleTransformOrigin(U, "0 0"), $Jssor$.$AppendChild(U, i);
                var r = $Jssor$.$Children(t);
                $Jssor$.$AppendChild(t, U), $Jssor$.$Css(t, "backgroundImage", "");
                var o = {
                    navigator: B && 0 == B.$Scale,
                    arrowleft: q && 0 == q.$Scale,
                    arrowright: q && 0 == q.$Scale,
                    thumbnavigator: z && 0 == z.$Scale,
                    thumbwrapper: z && 0 == z.$Scale
                };
                $Jssor$.$Each(r, function(e) {
                    $Jssor$.$AppendChild(o[$Jssor$.$AttributeEx(e, "u")] ? t : i, e)
                })
            }
            $JssorDebug$.$Execute(function() {
                (!e || 0 > e) && $JssorDebug$.$Fail("'$ScaleWidth' error, 'dimension' should be positive value.")
            }), $JssorDebug$.$Execute(function() {
                L || (L = O.$Elmt.scrollWidth)
            }), Lt = e / (n ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(U), $Jssor$.$CssScale(U, Lt);
            var s = n ? Lt * k() : e,
                a = n ? e : Lt * P();
            $Jssor$.$CssWidth(t, s), $Jssor$.$CssHeight(t, a), $Jssor$.$Each(Vt, function(t) {
                t.$Relocate(s, a)
            })
        }
        var O = this;
        O.$PlayTo = F, O.$GoTo = function(t) {
            F(t, 1)
        }, O.$Next = function() {
            I(1)
        }, O.$Prev = function() {
            I(-1)
        }, O.$Pause = function() {
            yt = !1
        }, O.$Play = function() {
            yt || (yt = !0, de[Rt] && de[Rt].$TryActivate())
        }, O.$SetSlideshowTransitions = function(t) {
            $JssorDebug$.$Execute(function() {
                t && t.length || $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.")
            }), $Jssor$.$TranslateTransitions(t), R.$SlideshowOptions.$Transitions = t
        }, O.$SetCaptionTransitions = function(t) {
            $JssorDebug$.$Execute(function() {
                t && t.length || $JssorDebug$.$Error("Can not set caption transitions, no transitions specified")
            }), $Jssor$.$TranslateTransitions(t), W.$CaptionTransitions = t, W.$Version = $Jssor$.$GetNow()
        }, O.$SlidesCount = function() {
            return it.length
        }, O.$CurrentIndex = function() {
            return Rt
        }, O.$IsAutoPlaying = function() {
            return yt
        }, O.$IsDragging = function() {
            return Et
        }, O.$IsSliding = function() {
            return _t
        }, O.$IsMouseOver = function() {
            return !Yt
        }, O.$LastDragSucceded = function() {
            return Tt
        }, O.$OriginalWidth = O.$GetOriginalWidth = k, O.$OriginalHeight = O.$GetOriginalHeight = P, O.$ScaleHeight = O.$GetScaleHeight = function(e) {
            return void 0 == e ? $Jssor$.$CssHeight(t) : void N(e, !0)
        }, O.$ScaleWidth = O.$SetScaleWidth = O.$GetScaleWidth = N, O.$GetVirtualIndex = function(t) {
            var e = Math.ceil(S(Ct / zt)),
                n = S(t - Rt + e);
            return n > Ut ? t - Rt > Mt / 2 ? t -= Mt : -Mt / 2 >= t - Rt && (t += Mt) : t = Rt + n - e, t
        }, $JssorObject$.call(O), $JssorDebug$.$Execute(function() {
            var e = $Jssor$.$GetElement(t);
            e || $JssorDebug$.$Fail("Outer container '" + t + "' not found.")
        }), O.$Elmt = t = $Jssor$.$GetElement(t);
        var L, J = 1,
            R = $Jssor$.$Extend({
                $FillMode: 0,
                $LazyLoading: 1,
                $StartIndex: 0,
                $AutoPlay: !1,
                $Loop: 1,
                $HWA: !0,
                $NaviQuitDrag: !0,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: $JssorEasing$.$EaseOutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, e);
        $JssorDebug$.$Execute(function() {
            R = $Jssor$.$Extend({
                $ArrowKeyNavigation: void 0,
                $SlideWidth: void 0,
                $SlideHeight: void 0,
                $SlideshowOptions: void 0,
                $CaptionSliderOptions: void 0,
                $BulletNavigatorOptions: void 0,
                $ArrowNavigatorOptions: void 0,
                $ThumbnailNavigatorOptions: void 0
            }, R)
        });
        var M = 3 & R.$PlayOrientation,
            j = (4 & R.$PlayOrientation) / -4 || 1,
            H = R.$SlideshowOptions,
            W = $Jssor$.$Extend({
                $Class: $JssorCaptionSliderBase$,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, R.$CaptionSliderOptions);
        $Jssor$.$TranslateTransitions(W.$CaptionTransitions);
        var B = R.$BulletNavigatorOptions,
            q = R.$ArrowNavigatorOptions,
            z = R.$ThumbnailNavigatorOptions;
        $JssorDebug$.$Execute(function() {
            H && !H.$Class && $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.")
        }), $JssorDebug$.$Execute(function() {
            R.$CaptionSliderOptions && !R.$CaptionSliderOptions.$Class && $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.")
        }), $JssorDebug$.$Execute(function() {
            B && !B.$Class && $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.")
        }), $JssorDebug$.$Execute(function() {
            q && !q.$Class && $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.")
        }), $JssorDebug$.$Execute(function() {
            z && !z.$Class && $JssorDebug$.$Fail("Option $ThumbnailNavigatorOptions error, class not specified.")
        });
        var U, V = !R.$UISearchMode,
            G = $Jssor$.$FindChild(t, "slides", V),
            X = $Jssor$.$FindChild(t, "loading", V) || $Jssor$.$CreateDiv(document),
            Q = $Jssor$.$FindChild(t, "navigator", V),
            Z = $Jssor$.$FindChild(t, "arrowleft", V),
            Y = $Jssor$.$FindChild(t, "arrowright", V),
            K = $Jssor$.$FindChild(t, "thumbnavigator", V);
        $JssorDebug$.$Execute(function() {
            if (Q && !B) throw new Error("Bullet navigator container defined but $BulletNavigatorOptions not specified.");
            if ((Z || Y) && !q) throw new Error("arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified.");
            if (K && !z) throw new Error("Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified.")
        });
        var tt = $Jssor$.$CssWidth(G),
            et = $Jssor$.$CssHeight(G);
        $JssorDebug$.$Execute(function() {
            isNaN(tt) && $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;')."), void 0 == tt && $JssorDebug$.$Fail("Width of slides container not specified, it should be specified in pixel (like style='width: 600px;')."), isNaN(et) && $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;')."), void 0 == et && $JssorDebug$.$Fail("Height of slides container not specified, it should be specified in pixel (like style='height: 300px;').");
            var t = $Jssor$.$CssOverflow(G),
                e = $Jssor$.$Css(G, "overflowX"),
                n = $Jssor$.$Css(G, "overflowY");
            "hidden" == t || "hidden" == e && "hidden" == n || $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').")
        }), $JssorDebug$.$Execute(function() {
            $Jssor$.$IsNumeric(R.$DisplayPieces) || $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1."), R.$DisplayPieces < 1 && $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1."), R.$DisplayPieces > 1 && R.$DragOrientation && R.$DragOrientation != M && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1."), $Jssor$.$IsNumeric(R.$ParkingPosition) || $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value."), R.$ParkingPosition && R.$DragOrientation && R.$DragOrientation != M && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.")
        });
        var nt, it = [],
            rt = $Jssor$.$Children(G);
        $Jssor$.$Each(rt, function(t) {
            "DIV" != t.tagName || $Jssor$.$AttributeEx(t, "u") || it.push(t)
        }), $JssorDebug$.$Execute(function() {
            it.length < 1 && $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.")
        });
        var ot, st, at, lt, ut, ct, ht, dt, ft, pt, mt, gt, vt, $t, bt, yt, wt, xt, Ct, St, Tt, _t, Et, Dt, At, It, Ft, kt, Pt, Nt, Ot, Lt, Jt = 0,
            Rt = -1,
            Mt = it.length,
            jt = R.$SlideWidth || tt,
            Ht = R.$SlideHeight || et,
            Wt = R.$SlideSpacing,
            Bt = jt + Wt,
            qt = Ht + Wt,
            zt = 1 & M ? Bt : qt,
            Ut = Math.min(R.$DisplayPieces, Mt),
            Vt = [],
            Gt = (R.$AutoPlaySteps, R.$PauseOnHover),
            Xt = (R.$AutoPlayInterval, R.$SlideDuration),
            Qt = Mt > Ut,
            Zt = Qt ? R.$Loop : 0,
            Yt = 1,
            Kt = 0,
            te = 0,
            ee = new s;
        yt = R.$AutoPlay, O.$Options = e, A(), t["jssor-slider"] = !0, $Jssor$.$CssZIndex(G, $Jssor$.$CssZIndex(G) || 0), $Jssor$.$CssPosition(G, "absolute"), ut = $Jssor$.$CloneNode(G, !0), $Jssor$.$InsertBefore(ut, G), H && ($t = H.$ShowLink, wt = H.$Class, $JssorDebug$.$Execute(function() {
            H.$Transitions && H.$Transitions.length || $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.")
        }), $Jssor$.$TranslateTransitions(H.$Transitions), xt = 1 == Ut && Mt > 1 && wt && (!$Jssor$.$IsBrowserIE() || $Jssor$.$BrowserVersion() >= 8)), Ct = xt || Ut >= Mt || !(1 & Zt) ? 0 : R.$ParkingPosition, St = (Ut > 1 || Ct ? M : -1) & R.$DragOrientation;
        var ne, ie, re, oe, se, ae, le, ue, ce, he = G,
            de = [],
            fe = "mousedown",
            pe = "mousemove",
            me = "mouseup";
        if (window.navigator.pointerEnabled || (ce = window.navigator.msPointerEnabled)) {
            if (pt = !0, fe = ce ? "MSPointerDown" : "pointerdown", pe = ce ? "MSPointerMove" : "pointermove", me = ce ? "MSPointerUp" : "pointerup", re = ce ? "MSPointerCancel" : "pointercancel", St) {
                var ge = "auto";
                2 == St ? ge = "pan-x" : St && (ge = "pan-y"), $Jssor$.$Css(he, ce ? "msTouchAction" : "touchAction", ge)
            }
        } else("ontouchstart" in window || "createTouch" in document) && (ft = !0, pt = !0, fe = "touchstart", pe = "touchmove", me = "touchend", re = "touchcancel");
        Nt = new r, xt && (ne = new wt(ee, jt, Ht, H, ft)), $Jssor$.$AppendChild(ut, Nt.$Wrapper), $Jssor$.$CssOverflow(G, "hidden"), ie = C(), $Jssor$.$Css(ie, "backgroundColor", "#000"), $Jssor$.$CssOpacity(ie, 0), $Jssor$.$InsertBefore(ie, he.firstChild, he);
        for (var ve = 0; ve < it.length; ve++) {
            var $e = it[ve],
                be = new l($e, ve);
            de.push(be)
        }
        $Jssor$.$HideElement(X), $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(X, "debug-id", "loading-container")
        }), kt = new i, Ot = new o(kt, Nt), $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(he, "debug-id", "slide-board")
        }), St && ($Jssor$.$AddEvent(G, fe, h), $Jssor$.$AddEvent(document, me, v), re && $Jssor$.$AddEvent(document, re, v)), Gt &= pt ? 10 : 5, Q && B && (mt = new B.$Class(Q, B, k(), P()), Vt.push(mt)), q && Z && Y && (q.$Loop = Zt, gt = new q.$Class(Z, Y, q, k(), P()), Vt.push(gt)), K && z && (z.$StartIndex = R.$StartIndex, vt = new z.$Class(K, z), Vt.push(vt)), $Jssor$.$Each(Vt, function(t) {
            t.$Reset(Mt, de, X), t.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, T)
        }), N(k()), $Jssor$.$AddEvent(t, "mouseout", $Jssor$.$MouseOverOutFilter(E, t)), $Jssor$.$AddEvent(t, "mouseover", $Jssor$.$MouseOverOutFilter(D, t)), _(), R.$ArrowKeyNavigation && $Jssor$.$AddEvent(document, "keydown", function(t) {
            t.keyCode == $JssorKeyCode$.$LEFT ? I(-1) : t.keyCode == $JssorKeyCode$.$RIGHT && I(1)
        });
        var ye = R.$StartIndex;
        1 & Zt || (ye = Math.max(0, Math.min(ye, Mt - Ut))), Ot.$PlayCarousel(ye, ye, 0)
    }
    var l = 0,
        u = 1,
        c = 2,
        h = 3,
        d = 1,
        f = 2,
        p = 4,
        m = 8,
        g = 256,
        v = 512,
        $ = 1024,
        b = 2048,
        y = b + d,
        w = b + f,
        x = v + d,
        C = v + f,
        S = g + p,
        T = g + m,
        _ = $ + p,
        E = $ + m;
    $JssorSlideshowFormations$.$FormationStraight = function(t) {
        var e, i, r = t.$Cols,
            o = t.$Rows,
            s = t.$Assembly,
            a = t.$Count,
            l = [],
            u = 0,
            c = 0,
            h = r - 1,
            d = o - 1,
            f = a - 1;
        for (c = 0; o > c; c++)
            for (u = 0; r > u; u++) {
                switch (e = c + "," + u, s) {
                    case y:
                        i = f - (u * o + (d - c));
                        break;
                    case _:
                        i = f - (c * r + (h - u));
                        break;
                    case x:
                        i = f - (u * o + c);
                    case S:
                        i = f - (c * r + u);
                        break;
                    case w:
                        i = u * o + c;
                        break;
                    case T:
                        i = c * r + (h - u);
                        break;
                    case C:
                        i = u * o + (d - c);
                        break;
                    default:
                        i = c * r + u
                }
                n(l, i, [c, u])
            }
        return l
    }, $JssorSlideshowFormations$.$FormationSwirl = function(t) {
        var e, i, r = t.$Cols,
            o = t.$Rows,
            s = t.$Assembly,
            a = t.$Count,
            d = [],
            f = [],
            p = 0,
            m = 0,
            g = 0,
            v = r - 1,
            $ = o - 1,
            b = 0;
        switch (s) {
            case y:
                m = v, g = 0, i = [c, u, h, l];
                break;
            case _:
                m = 0, g = $, i = [l, h, u, c];
                break;
            case x:
                m = v, g = $, i = [h, u, c, l];
                break;
            case S:
                m = v, g = $, i = [u, h, l, c];
                break;
            case w:
                m = 0, g = 0, i = [c, l, h, u];
                break;
            case T:
                m = v, g = 0, i = [u, c, l, h];
                break;
            case C:
                m = 0, g = $, i = [h, l, c, u];
                break;
            default:
                m = 0, g = 0, i = [l, c, u, h]
        }
        for (p = 0; a > p;) {
            if (e = g + "," + m, m >= 0 && r > m && g >= 0 && o > g && !f[e]) f[e] = !0, n(d, p++, [g, m]);
            else switch (i[b++ % i.length]) {
                case l:
                    m--;
                    break;
                case c:
                    g--;
                    break;
                case u:
                    m++;
                    break;
                case h:
                    g++
            }
            switch (i[b % i.length]) {
                case l:
                    m++;
                    break;
                case c:
                    g++;
                    break;
                case u:
                    m--;
                    break;
                case h:
                    g--
            }
        }
        return d
    }, $JssorSlideshowFormations$.$FormationZigZag = function(t) {
        var e, i, r = t.$Cols,
            o = t.$Rows,
            s = t.$Assembly,
            a = t.$Count,
            d = [],
            f = 0,
            p = 0,
            m = 0,
            g = r - 1,
            v = o - 1,
            $ = 0;
        switch (s) {
            case y:
                p = g, m = 0, i = [c, u, h, u];
                break;
            case _:
                p = 0, m = v, i = [l, h, u, h];
                break;
            case x:
                p = g, m = v, i = [h, u, c, u];
                break;
            case S:
                p = g, m = v, i = [u, h, l, h];
                break;
            case w:
                p = 0, m = 0, i = [c, l, h, l];
                break;
            case T:
                p = g, m = 0, i = [u, c, l, c];
                break;
            case C:
                p = 0, m = v, i = [h, l, c, l];
                break;
            default:
                p = 0, m = 0, i = [l, c, u, c]
        }
        for (f = 0; a > f;)
            if (e = m + "," + p, p >= 0 && r > p && m >= 0 && o > m && "undefined" == typeof d[e]) switch (n(d, f++, [m, p]), i[$ % i.length]) {
                case l:
                    p++;
                    break;
                case c:
                    m++;
                    break;
                case u:
                    p--;
                    break;
                case h:
                    m--
            } else {
                switch (i[$++ % i.length]) {
                    case l:
                        p--;
                        break;
                    case c:
                        m--;
                        break;
                    case u:
                        p++;
                        break;
                    case h:
                        m++
                }
                switch (i[$++ % i.length]) {
                    case l:
                        p++;
                        break;
                    case c:
                        m++;
                        break;
                    case u:
                        p--;
                        break;
                    case h:
                        m--
                }
            }
            return d
    }, $JssorSlideshowFormations$.$FormationStraightStairs = function(i) {
        var r, o = i.$Cols,
            s = i.$Rows,
            a = i.$Assembly,
            l = i.$Count,
            u = [],
            c = 0,
            h = 0,
            d = 0,
            f = o - 1,
            p = s - 1,
            m = l - 1;
        switch (a) {
            case y:
            case C:
            case x:
            case w:
                var g = 0,
                    v = 0;
                break;
            case T:
            case _:
            case S:
            case E:
                var g = f,
                    v = 0;
                break;
            default:
                a = E;
                var g = f,
                    v = 0
        }
        for (h = g, d = v; l > c;) {
            switch (r = d + "," + h, e(a) || t(a) ? n(u, m - c++, [d, h]) : n(u, c++, [d, h]), a) {
                case y:
                case C:
                    h--, d++;
                    break;
                case x:
                case w:
                    h++, d--;
                    break;
                case T:
                case _:
                    h--, d--;
                    break;
                case E:
                case S:
                default:
                    h++, d++
            }
            if (0 > h || 0 > d || h > f || d > p) {
                switch (a) {
                    case y:
                    case C:
                        g++;
                        break;
                    case T:
                    case _:
                    case x:
                    case w:
                        v++;
                        break;
                    case E:
                    case S:
                    default:
                        g--
                }
                if (0 > g || 0 > v || g > f || v > p) {
                    switch (a) {
                        case y:
                        case C:
                            g = f, v++;
                            break;
                        case x:
                        case w:
                            v = p, g++;
                            break;
                        case T:
                        case _:
                            v = p, g--;
                            break;
                        case E:
                        case S:
                        default:
                            g = 0, v++
                    }
                    v > p ? v = p : 0 > v ? v = 0 : g > f ? g = f : 0 > g && (g = 0)
                }
                d = v, h = g
            }
        }
        return u
    }, $JssorSlideshowFormations$.$FormationSquare = function(t) {
        var e, i, r, o, s, a = t.$Cols || 1,
            l = t.$Rows || 1,
            u = [];
        for (r = l > a ? (l - a) / 2 : 0, o = a > l ? (a - l) / 2 : 0, s = Math.round(Math.max(a / 2, l / 2)) + 1, e = 0; a > e; e++)
            for (i = 0; l > i; i++) n(u, s - Math.min(e + 1 + r, i + 1 + o, a - e + r, l - i + o), [i, e]);
        return u
    }, $JssorSlideshowFormations$.$FormationRectangle = function(t) {
        var e, i, r, o = t.$Cols || 1,
            s = t.$Rows || 1,
            a = [];
        for (r = Math.round(Math.min(o / 2, s / 2)) + 1, e = 0; o > e; e++)
            for (i = 0; s > i; i++) n(a, r - Math.min(e + 1, i + 1, o - e, s - i), [i, e]);
        return a
    }, $JssorSlideshowFormations$.$FormationRandom = function(t) {
        var e, i, r = [];
        for (e = 0; e < t.$Rows; e++)
            for (i = 0; i < t.$Cols; i++) n(r, Math.ceil(1e5 * Math.random()) % 13, [e, i]);
        return r
    }, $JssorSlideshowFormations$.$FormationCircle = function(t) {
        var e, i, r = t.$Cols || 1,
            o = t.$Rows || 1,
            s = [],
            a = r / 2 - .5,
            l = o / 2 - .5;
        for (e = 0; r > e; e++)
            for (i = 0; o > i; i++) n(s, Math.round(Math.sqrt(Math.pow(e - a, 2) + Math.pow(i - l, 2))), [i, e]);
        return s
    }, $JssorSlideshowFormations$.$FormationCross = function(t) {
        var e, i, r = t.$Cols || 1,
            o = t.$Rows || 1,
            s = [],
            a = r / 2 - .5,
            l = o / 2 - .5;
        for (e = 0; r > e; e++)
            for (i = 0; o > i; i++) n(s, Math.round(Math.min(Math.abs(e - a), Math.abs(i - l))), [i, e]);
        return s
    }, $JssorSlideshowFormations$.$FormationRectangleCross = function(t) {
        var e, i, r = t.$Cols || 1,
            o = t.$Rows || 1,
            s = [],
            a = r / 2 - .5,
            l = o / 2 - .5,
            u = Math.max(a, l) + 1;
        for (e = 0; r > e; e++)
            for (i = 0; o > i; i++) n(s, Math.round(u - Math.max(a - Math.abs(e - a), l - Math.abs(i - l))) - 1, [i, e]);
        return s
    };
    var D = 1;
    $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function(t, e, n, i, o) {
        function a() {
            var t = this,
                e = 0;
            $JssorAnimator$.call(t, 0, l), t.$OnPositionChange = function(t, n) {
                n - e > v && (e = n, c && c.$ShowFrame(n), u && u.$ShowFrame(n))
            }, t.$Transition = f
        }
        var l, u, c, h, d, f, p = this,
            m = 0,
            g = i.$TransitionsOrder,
            v = 8;
        p.$GetTransition = function(t) {
            var e = 0,
                n = i.$Transitions,
                r = n.length;
            return e = g ? m++ % r : Math.floor(Math.random() * r), n[e] && (n[e].$Index = e), n[e]
        }, p.$Initialize = function(i, o, a, m, g) {
            $JssorDebug$.$Execute(function() {
                u && $JssorDebug$.$Fail("slideshow runner has not been cleared.")
            }), f = g, g = r(g, v), d = a, h = m;
            var $ = m.$Item,
                b = a.$Item;
            $["no-image"] = !m.$Image, b["no-image"] = !a.$Image;
            var y = $,
                w = b,
                x = g,
                C = g.$Brother || r({}, v);
            g.$SlideOut || (y = b, w = $);
            var S = C.$Shift || 0;
            u = new s(t, w, C, Math.max(S - C.$Interval, 0), e, n), c = new s(t, y, x, Math.max(C.$Interval - S, 0), e, n), u.$ShowFrame(0), c.$ShowFrame(0), l = Math.max(u.$EndTime, c.$EndTime), p.$Index = i
        }, p.$Clear = function() {
            t.$Clear(), u = null, c = null
        }, p.$GetProcessor = function() {
            var t = null;
            return c && (t = new a), t
        }, ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera() || o && $Jssor$.$WebKitVersion() < 537) && (v = 16), $JssorObject$.call(p), $JssorAnimator$.call(p, -1e7, 1e7), $JssorDebug$.$LiveStamp(p, "slideshow_runner_" + D++)
    }, a.$EVT_CLICK = 21, a.$EVT_DRAG_START = 22, a.$EVT_DRAG_END = 23, a.$EVT_SWIPE_START = 24, a.$EVT_SWIPE_END = 25, a.$EVT_LOAD_START = 26, a.$EVT_LOAD_END = 27, a.$EVT_FREEZE = 28, a.$EVT_POSITION_CHANGE = 202, a.$EVT_PARK = 203, a.$EVT_SLIDESHOW_START = 206, a.$EVT_SLIDESHOW_END = 207, a.$EVT_PROGRESS_CHANGE = 208, a.$EVT_STATE_CHANGE = 209, a.$EVT_ROLLBACK_START = 210, a.$EVT_ROLLBACK_END = 211, window.$JssorSlider$ = $JssorSlider$ = a
};
var $JssorNavigatorEvents$ = {
        $NAVIGATIONREQUEST: 1,
        $INDEXCHANGE: 2,
        $RESET: 3
    },
    $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function(t, e, n, i) {
        function r(t) {
            -1 != t && C[t].$Selected(t == w)
        }

        function o(t) {
            s.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, t * f)
        }
        var s = this;
        $JssorObject$.call(s), t = $Jssor$.$GetElement(t);
        var a, l, u, c, h, d, f, p, m, g, v, $, b, y, w = 0,
            x = [],
            C = [];
        s.$Elmt = t, s.$GetCurrentIndex = function() {
            return h
        }, s.$SetCurrentIndex = function(t) {
            if (t != h) {
                var e = w,
                    n = Math.floor(t / f);
                w = n, h = t, r(e), r(n)
            }
        }, s.$Show = function(e) {
            $Jssor$.$ShowElement(t, e)
        };
        var S;
        s.$Relocate = function(e, n) {
            S && 0 != d.$Scale || (1 & d.$AutoCenter && $Jssor$.$CssLeft(t, (e - u) / 2), 2 & d.$AutoCenter && $Jssor$.$CssTop(t, (n - c) / 2), S = !0)
        };
        var T;
        s.$Reset = function(e) {
            if (!T) {
                l = e, a = Math.ceil(e / f), w = 0;
                var n = b + m,
                    i = y + g,
                    r = Math.ceil(a / p) - 1;
                u = b + n * (v ? p - 1 : r), c = y + i * (v ? r : p - 1), $Jssor$.$CssWidth(t, u), $Jssor$.$CssHeight(t, c);
                for (var s = 0; a > s; s++) {
                    var h = $Jssor$.$CreateSpan();
                    $Jssor$.$InnerText(h, s + 1);
                    var S = $Jssor$.$BuildElement($, "numbertemplate", h, !0);
                    $Jssor$.$CssPosition(S, "absolute");
                    var _ = s % (r + 1);
                    $Jssor$.$CssLeft(S, v ? s % p * n : n * _), $Jssor$.$CssTop(S, v ? i * _ : Math.floor(s / (r + 1)) * i), $Jssor$.$AppendChild(t, S), x[s] = S, 1 & d.$ActionMode && $Jssor$.$AddEvent(S, "click", $Jssor$.$CreateCallback(null, o, s)), 2 & d.$ActionMode && $Jssor$.$AddEvent(S, "mouseover", $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, o, s), S)), C[s] = $Jssor$.$Buttonize(S)
                }
                T = !0
            }
        }, s.$Options = d = $Jssor$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, e), $JssorDebug$.$Execute(function() {
            d = $Jssor$.$Extend({
                $Steps: void 0,
                $Lanes: void 0
            }, d)
        }), $ = $Jssor$.$FindChild(t, "prototype"), $JssorDebug$.$Execute(function() {
            $ || $JssorDebug$.$Fail("Navigator item prototype not defined."), isNaN($Jssor$.$CssWidth($)) && $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified."), isNaN($Jssor$.$CssHeight($)) && $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.")
        }), b = $Jssor$.$CssWidth($), y = $Jssor$.$CssHeight($), $Jssor$.$RemoveElement($, t), f = d.$Steps || 1, p = d.$Lanes || 1, m = d.$SpacingX, g = d.$SpacingY, v = d.$Orientation - 1
    },
    $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function(t, e, n, i, r) {
        function o(t) {
            a.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, t, !0)
        }

        function s(i) {
            $Jssor$.$ShowElement(t, i || !n.$Loop && 0 == c), $Jssor$.$ShowElement(e, i || !n.$Loop && c == u - 1), l = i
        }
        var a = this;
        $JssorObject$.call(a), $JssorDebug$.$Execute(function() {
            t || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation."), e || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation."), isNaN($Jssor$.$CssWidth(t)) && $JssorDebug$.$Fail("Width of 'arrow left' not specified."), isNaN($Jssor$.$CssWidth(e)) && $JssorDebug$.$Fail("Width of 'arrow right' not specified."), isNaN($Jssor$.$CssHeight(t)) && $JssorDebug$.$Fail("Height of 'arrow left' not specified."), isNaN($Jssor$.$CssHeight(e)) && $JssorDebug$.$Fail("Height of 'arrow right' not specified.")
        });
        var l, u, c, h, d, f = $Jssor$.$CssWidth(t),
            p = $Jssor$.$CssHeight(t);
        a.$GetCurrentIndex = function() {
            return c
        }, a.$SetCurrentIndex = function(t, e, n) {
            n ? c = e : (c = t, s(l))
        }, a.$Show = s;
        var m;
        a.$Relocate = function(n, r) {
            m && 0 != h.$Scale || (1 & h.$AutoCenter && ($Jssor$.$CssLeft(t, (i - f) / 2), $Jssor$.$CssLeft(e, (i - f) / 2)), 2 & h.$AutoCenter && ($Jssor$.$CssTop(t, (r - p) / 2), $Jssor$.$CssTop(e, (r - p) / 2)), m = !0)
        };
        var g;
        a.$Reset = function(n) {
            u = n, c = 0, g || ($Jssor$.$AddEvent(t, "click", $Jssor$.$CreateCallback(null, o, -d)), $Jssor$.$AddEvent(e, "click", $Jssor$.$CreateCallback(null, o, d)), $Jssor$.$Buttonize(t), $Jssor$.$Buttonize(e), g = !0)
        }, a.$Options = h = $Jssor$.$Extend({
            $Steps: 1
        }, n), d = h.$Steps
    },
    $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function(t, e) {
        function n(t, e) {
            function n(t) {
                a.$Selected(o == e)
            }

            function i(t) {
                if (!m.$LastDragSucceded()) {
                    var n = u - e % u,
                        i = m.$GetVirtualIndex((e + n) / u - 1),
                        r = i * u + u - n;
                    $.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, r)
                }
            }
            var r, a, l, c = this;
            $JssorDebug$.$Execute(function() {
                c.$Wrapper = void 0
            }), c.$Index = e, c.$Highlight = n, l = t.$Thumb || t.$Image || $Jssor$.$CreateDiv(), c.$Wrapper = r = $Jssor$.$BuildElement(v, "thumbnailtemplate", l, !0), a = $Jssor$.$Buttonize(r), 1 & s.$ActionMode && $Jssor$.$AddEvent(r, "click", i), 2 & s.$ActionMode && $Jssor$.$AddEvent(r, "mouseover", $Jssor$.$MouseOverOutFilter(i, r))
        }
        var i, r, o, s, a, l, u, c, h, d, f, p, m, g, v, $ = this,
            b = [];
        $JssorObject$.call($), t = $Jssor$.$GetElement(t), $.$GetCurrentIndex = function() {
            return o
        }, $.$SetCurrentIndex = function(t, e, n) {
            var i = o;
            o = t, -1 != i && b[i].$Highlight(), b[t].$Highlight(), n || m.$PlayTo(m.$GetVirtualIndex(Math.floor(e / u)))
        }, $.$Show = function(e) {
            $Jssor$.$ShowElement(t, e)
        }, $.$Relocate = $Jssor$.$EmptyFunction;
        var y;
        $.$Reset = function(e, v, $) {
            if (!y) {
                i = e, r = Math.ceil(i / u), o = -1, p = Math.min(p, v.length);
                var w = 1 & s.$Orientation,
                    x = d + (d + c) * (u - 1) * (1 - w),
                    C = f + (f + h) * (u - 1) * w,
                    S = x + (x + c) * (p - 1) * w,
                    T = C + (C + h) * (p - 1) * (1 - w);
                $Jssor$.$CssPosition(g, "absolute"), $Jssor$.$CssOverflow(g, "hidden"), 1 & s.$AutoCenter && $Jssor$.$CssLeft(g, (a - S) / 2), 2 & s.$AutoCenter && $Jssor$.$CssTop(g, (l - T) / 2), $Jssor$.$CssWidth(g, S), $Jssor$.$CssHeight(g, T);
                var _ = [];
                $Jssor$.$Each(v, function(t, e) {
                    var i = new n(t, e),
                        r = i.$Wrapper,
                        o = Math.floor(e / u),
                        s = e % u;
                    $Jssor$.$CssLeft(r, (d + c) * s * (1 - w)), $Jssor$.$CssTop(r, (f + h) * s * w), _[o] || (_[o] = $Jssor$.$CreateDiv(), $Jssor$.$AppendChild(g, _[o])), $Jssor$.$AppendChild(_[o], r), b.push(i)
                });
                var E = $Jssor$.$Extend({
                    $HWA: !1,
                    $AutoPlay: !1,
                    $NaviQuitDrag: !1,
                    $SlideWidth: x,
                    $SlideHeight: C,
                    $SlideSpacing: c * w + h * (1 - w),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: s.$Orientation,
                    $DragOrientation: s.$DisableDrag ? 0 : s.$Orientation
                }, s);
                m = new $JssorSlider$(t, E), y = !0
            }
        }, $.$Options = s = $Jssor$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, e), $JssorDebug$.$Execute(function() {
            s = $Jssor$.$Extend({
                $Lanes: void 0,
                $Width: void 0,
                $Height: void 0
            }, s)
        }), a = $Jssor$.$CssWidth(t), l = $Jssor$.$CssHeight(t), $JssorDebug$.$Execute(function() {
            a || $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified."), l || $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.")
        }), g = $Jssor$.$FindChild(t, "slides", !0), v = $Jssor$.$FindChild(g, "prototype"), $JssorDebug$.$Execute(function() {
            v || $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.")
        }), d = $Jssor$.$CssWidth(v), f = $Jssor$.$CssHeight(v), $Jssor$.$RemoveElement(v, g), u = s.$Lanes || 1, c = s.$SpacingX, h = s.$SpacingY, p = s.$DisplayPieces
    },
    $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function(t, e, n) {
        function i(t, e) {
            function r(t, e) {
                var n = {};
                return $Jssor$.$Each(c, function(i, r) {
                    var o = $Jssor$.$AttributeEx(t, i + (e || ""));
                    if (o) {
                        var s = {};
                        "t" == i ? s.$Value = o : o.indexOf("%") + 1 ? s.$Percent = $Jssor$.$ParseFloat(o) / 100 : s.$Value = $Jssor$.$ParseFloat(o), n[r] = s
                    }
                }), n
            }

            function o() {
                return u[Math.floor(Math.random() * u.length)]
            }

            function s(t) {
                var e;
                if ("*" == t) e = o();
                else if (t) {
                    var n = u[$Jssor$.$ParseInt(t)] || u[t];
                    $Jssor$.$IsArray(n) && (t != a ? (a = t, p[t] = 0, f[t] = n[Math.floor(Math.random() * n.length)]) : p[t]++, n = f[t], $Jssor$.$IsArray(n) && (n = n.length && n[p[t] % n.length], $Jssor$.$IsArray(n) && (n = n[Math.floor(Math.random() * n.length)]))), e = n, $Jssor$.$IsString(e) && (e = s(e))
                }
                return e
            }
            var a, d = [],
                f = [],
                p = [],
                m = $Jssor$.$Children(t);
            return $Jssor$.$Each(m, function(t, o) {
                var a = [];
                a.$Elmt = t;
                var u = "caption" == $Jssor$.$AttributeEx(t, "u");
                $Jssor$.$Each(n ? [0, 3] : [2], function(n, o) {
                    if (u) {
                        var c, d;
                        if (2 == n && $Jssor$.$AttributeEx(t, "t3") || (d = r(t, n), 2 != n || d.$Transition || (d.$Delay = d.$Delay || {
                                $Value: 0
                            }, d = $Jssor$.$Extend(r(t, 0), d))), d && d.$Transition && (c = s(d.$Transition.$Value))) {
                            var f = $Jssor$.$Extend({
                                $Delay: 0
                            }, c);
                            $Jssor$.$Each(d, function(t, e) {
                                var n = (h[e] || h.$Default).apply(h, [f[e], d[e]]);
                                isNaN(n) || (f[e] = n)
                            }), o || (d.$BeginTime ? f.$BeginTime = d.$BeginTime.$Value || 0 : 2 & l && (f.$BeginTime = 0))
                        }
                        a.push(f)
                    }
                    e % 2 && !o && (a.$Children = i(t, e + 1))
                }), d.push(a)
            }), d
        }

        function r(t, e, i) {
            var r = {
                $Easing: e.$Easing,
                $Round: e.$Round,
                $During: e.$During,
                $Reverse: n && !i,
                $Optimize: !0
            };
            $JssorDebug$.$Execute(function() {
                r.$CaptionAnimator = !0
            });
            var o = t,
                s = $Jssor$.$ParentNode(t),
                a = $Jssor$.$CssWidth(o),
                l = $Jssor$.$CssHeight(o),
                u = $Jssor$.$CssWidth(s),
                c = $Jssor$.$CssHeight(s),
                h = {},
                d = {},
                f = e.$ScaleClip || 1;
            if (e.$Opacity && (h.$Opacity = 2 - e.$Opacity), r.$OriginalWidth = a, r.$OriginalHeight = l, e.$Zoom || e.$Rotate) {
                h.$Zoom = e.$Zoom ? e.$Zoom - 1 : 1, ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) && (h.$Zoom = Math.min(h.$Zoom, 2)), d.$Zoom = 1;
                var p = e.$Rotate || 0;
                h.$Rotate = 360 * p, d.$Rotate = 0
            } else if (e.$Clip) {
                var m = {
                        $Top: 0,
                        $Right: a,
                        $Bottom: l,
                        $Left: 0
                    },
                    g = $Jssor$.$Extend({}, m),
                    v = g.$Offset = {},
                    $ = 4 & e.$Clip,
                    b = 8 & e.$Clip,
                    y = 1 & e.$Clip,
                    w = 2 & e.$Clip;
                $ && b ? (v.$Top = l / 2 * f, v.$Bottom = -v.$Top) : $ ? v.$Bottom = -l * f : b && (v.$Top = l * f), y && w ? (v.$Left = a / 2 * f, v.$Right = -v.$Left) : y ? v.$Right = -a * f : w && (v.$Left = a * f), r.$Move = e.$Move, h.$Clip = g, d.$Clip = m
            }
            var x = 0,
                C = 0;
            e.x && (x -= u * e.x), e.y && (C -= c * e.y), (x || C || r.$Move) && (h.$Left = x + $Jssor$.$CssLeft(o), h.$Top = C + $Jssor$.$CssTop(o));
            var S = e.$Duration;
            return d = $Jssor$.$Extend(d, $Jssor$.$GetStyles(o, h)), r.$Setter = $Jssor$.$StyleSetterEx(), new $JssorAnimator$(e.$Delay, S, r, o, d, h)
        }

        function o(t, e) {
            return $Jssor$.$Each(e, function(e, n) {
                $JssorDebug$.$Execute(function() {
                    if (e.length) {
                        var t = $Jssor$.$CssTop(e.$Elmt),
                            i = $Jssor$.$CssLeft(e.$Elmt),
                            r = $Jssor$.$CssWidth(e.$Elmt),
                            o = $Jssor$.$CssHeight(e.$Elmt),
                            s = null;
                        isNaN(t) ? s = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(i) ? s = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(r) ? s = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(o) && (s = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'."), s && $JssorDebug$.$Error("Caption " + (n + 1) + " definition error, \r\n" + s + "\r\n" + e.$Elmt.outerHTML)
                    }
                });
                var i, l = e.$Elmt,
                    u = e[0],
                    c = e[1];
                if (u && (i = r(l, u), t = i.$Locate(void 0 == u.$BeginTime ? t : u.$BeginTime, 1)), t = o(t, e.$Children), c) {
                    var h = r(l, c, 1);
                    h.$Locate(t, 1), a.$Combine(h), s.$Combine(h)
                }
                i && a.$Combine(i)
            }), t
        }
        $JssorDebug$.$Execute(function() {
            e.$CaptionTransitions || $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.")
        });
        var s, a = this,
            l = n ? e.$PlayInMode : e.$PlayOutMode,
            u = e.$CaptionTransitions,
            c = {
                $Transition: "t",
                $Delay: "d",
                $Duration: "du",
                x: "x",
                y: "y",
                $Rotate: "r",
                $Zoom: "z",
                $Opacity: "f",
                $BeginTime: "b"
            },
            h = {
                $Default: function(t, e) {
                    return isNaN(e.$Value) ? t *= e.$Percent : t = e.$Value, t
                },
                $Opacity: function(t, e) {
                    return this.$Default(t - 1, e)
                }
            };
        h.$Zoom = h.$Opacity, $JssorAnimator$.call(a, 0, 0), a.$Revert = function() {
            a.$GoToPosition(a.$GetPosition_OuterEnd() * (n || 0)), s.$GoToBegin()
        }, s = new $JssorAnimator$(0, 0), o(0, l ? i(t, 1) : [])
    };
! function(t, e, n) {
    ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define("datatables", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : jQuery && !jQuery.fn.dataTable && t(jQuery)
    }(function(i) {
        "use strict";

        function r(t) {
            var e, n, o = "a aa ai ao as b fn i m o s ",
                s = {};
            i.each(t, function(i, a) {
                e = i.match(/^([^A-Z]+?)([A-Z])/), e && -1 !== o.indexOf(e[1] + " ") && (n = i.replace(e[0], e[2].toLowerCase()), s[n] = i, "o" === e[1] && r(t[i]))
            }), t._hungarianMap = s
        }

        function o(t, e, s) {
            t._hungarianMap || r(t);
            var a;
            i.each(e, function(r, l) {
                a = t._hungarianMap[r], a === n || !s && e[a] !== n || ("o" === a.charAt(0) ? (e[a] || (e[a] = {}), i.extend(!0, e[a], e[r]), o(t[a], e[a], s)) : e[a] = e[r])
            })
        }

        function s(t) {
            var e = Gt.defaults.oLanguage,
                n = t.sZeroRecords;
            !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && Jt(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && Jt(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var i = t.sDecimal;
            i && Ut(i)
        }

        function a(t) {
            $e(t, "ordering", "bSort"), $e(t, "orderMulti", "bSortMulti"), $e(t, "orderClasses", "bSortClasses"), $e(t, "orderCellsTop", "bSortCellsTop"), $e(t, "order", "aaSorting"), $e(t, "orderFixed", "aaSortingFixed"), $e(t, "paging", "bPaginate"), $e(t, "pagingType", "sPaginationType"), $e(t, "pageLength", "iDisplayLength"), $e(t, "searching", "bFilter");
            var e = t.aoSearchCols;
            if (e)
                for (var n = 0, i = e.length; i > n; n++) e[n] && o(Gt.models.oSearch, e[n])
        }

        function l(t) {
            $e(t, "orderable", "bSortable"), $e(t, "orderData", "aDataSort"), $e(t, "orderSequence", "asSorting"), $e(t, "orderDataType", "sortDataType");
            var e = t.aDataSort;
            e && !i.isArray(e) && (t.aDataSort = [e])
        }

        function u(t) {
            var e = t.oBrowser,
                n = i("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(i("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(i('<div class="test"/>').css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                r = n.find(".test");
            e.bScrollOversize = 100 === r[0].offsetWidth, e.bScrollbarLeft = 1 !== Math.round(r.offset().left), n.remove()
        }

        function c(t, e, i, r, o, s) {
            var a, l = r,
                u = !1;
            for (i !== n && (a = i, u = !0); l !== o;) t.hasOwnProperty(l) && (a = u ? e(a, t[l], l, t) : t[l], u = !0, l += s);
            return a
        }

        function h(t, n) {
            var r = Gt.defaults.column,
                o = t.aoColumns.length,
                s = i.extend({}, Gt.models.oColumn, r, {
                    nTh: n ? n : e.createElement("th"),
                    sTitle: r.sTitle ? r.sTitle : n ? n.innerHTML : "",
                    aDataSort: r.aDataSort ? r.aDataSort : [o],
                    mData: r.mData ? r.mData : o,
                    idx: o
                });
            t.aoColumns.push(s);
            var a = t.aoPreSearchCols;
            a[o] = i.extend({}, Gt.models.oSearch, a[o]), d(t, o, i(n).data())
        }

        function d(t, e, r) {
            var s = t.aoColumns[e],
                a = t.oClasses,
                u = i(s.nTh);
            if (!s.sWidthOrig) {
                s.sWidthOrig = u.attr("width") || null;
                var c = (u.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                c && (s.sWidthOrig = c[1])
            }
            r !== n && null !== r && (l(r), o(Gt.defaults.column, r), r.mDataProp === n || r.mData || (r.mData = r.mDataProp), r.sType && (s._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), i.extend(s, r), Jt(s, r, "sWidth", "sWidthOrig"), r.iDataSort !== n && (s.aDataSort = [r.iDataSort]), Jt(s, r, "aDataSort"));
            var h = s.mData,
                d = E(h),
                f = s.mRender ? E(s.mRender) : null,
                p = function(t) {
                    return "string" == typeof t && -1 !== t.indexOf("@")
                };
            s._bAttrSrc = i.isPlainObject(h) && (p(h.sort) || p(h.type) || p(h.filter)), s.fnGetData = function(t, e, i) {
                var r = d(t, e, n, i);
                return f && e ? f(r, e, t, i) : r
            }, s.fnSetData = function(t, e, n) {
                return D(h)(t, e, n)
            }, "number" != typeof h && (t._rowReadObject = !0), t.oFeatures.bSort || (s.bSortable = !1, u.addClass(a.sSortableNone));
            var m = -1 !== i.inArray("asc", s.asSorting),
                g = -1 !== i.inArray("desc", s.asSorting);
            s.bSortable && (m || g) ? m && !g ? (s.sSortingClass = a.sSortableAsc, s.sSortingClassJUI = a.sSortJUIAscAllowed) : !m && g ? (s.sSortingClass = a.sSortableDesc, s.sSortingClassJUI = a.sSortJUIDescAllowed) : (s.sSortingClass = a.sSortable, s.sSortingClassJUI = a.sSortJUI) : (s.sSortingClass = a.sSortableNone, s.sSortingClassJUI = "")
        }

        function f(t) {
            if (t.oFeatures.bAutoWidth !== !1) {
                var e = t.aoColumns;
                $t(t);
                for (var n = 0, i = e.length; i > n; n++) e[n].nTh.style.width = e[n].sWidth
            }
            var r = t.oScroll;
            ("" !== r.sY || "" !== r.sX) && gt(t), Ht(t, null, "column-sizing", [t])
        }

        function p(t, e) {
            var n = v(t, "bVisible");
            return "number" == typeof n[e] ? n[e] : null
        }

        function m(t, e) {
            var n = v(t, "bVisible"),
                r = i.inArray(e, n);
            return -1 !== r ? r : null
        }

        function g(t) {
            return v(t, "bVisible").length
        }

        function v(t, e) {
            var n = [];
            return i.map(t.aoColumns, function(t, i) {
                t[e] && n.push(i)
            }), n
        }

        function $(t) {
            var e, i, r, o, s, a, l, u, c, h = t.aoColumns,
                d = t.aoData,
                f = Gt.ext.type.detect;
            for (e = 0, i = h.length; i > e; e++)
                if (l = h[e], c = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (r = 0, o = f.length; o > r; r++) {
                    for (s = 0, a = d.length; a > s && (c[s] === n && (c[s] = S(t, s, e, "type")), u = f[r](c[s], t), u || r === f.length - 1) && "html" !== u; s++);
                    if (u) {
                        l.sType = u;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function b(t, e, r, o) {
            var s, a, l, u, c, d, f, p = t.aoColumns;
            if (e)
                for (s = e.length - 1; s >= 0; s--) {
                    f = e[s];
                    var m = f.targets !== n ? f.targets : f.aTargets;
                    for (i.isArray(m) || (m = [m]), l = 0, u = m.length; u > l; l++)
                        if ("number" == typeof m[l] && m[l] >= 0) {
                            for (; p.length <= m[l];) h(t);
                            o(m[l], f)
                        } else if ("number" == typeof m[l] && m[l] < 0) o(p.length + m[l], f);
                    else if ("string" == typeof m[l])
                        for (c = 0, d = p.length; d > c; c++)("_all" == m[l] || i(p[c].nTh).hasClass(m[l])) && o(c, f)
                }
            if (r)
                for (s = 0, a = r.length; a > s; s++) o(s, r[s])
        }

        function y(t, e, n, r) {
            var o = t.aoData.length,
                s = i.extend(!0, {}, Gt.models.oRow, {
                    src: n ? "dom" : "data"
                });
            s._aData = e, t.aoData.push(s);
            for (var a = t.aoColumns, l = 0, u = a.length; u > l; l++) n && T(t, o, l, S(t, o, l)), a[l].sType = null;
            return t.aiDisplayMaster.push(o), (n || !t.oFeatures.bDeferRender) && N(t, o, n, r), o
        }

        function w(t, e) {
            var n;
            return e instanceof i || (e = i(e)), e.map(function(e, i) {
                return n = P(t, i), y(t, n.data, i, n.cells)
            })
        }

        function x(t, e) {
            return e._DT_RowIndex !== n ? e._DT_RowIndex : null
        }

        function C(t, e, n) {
            return i.inArray(n, t.aoData[e].anCells)
        }

        function S(t, e, i, r) {
            var o = t.iDraw,
                s = t.aoColumns[i],
                a = t.aoData[e]._aData,
                l = s.sDefaultContent,
                u = s.fnGetData(a, r, {
                    settings: t,
                    row: e,
                    col: i
                });
            if (u === n) return t.iDrawError != o && null === l && (Lt(t, 0, "Requested unknown parameter " + ("function" == typeof s.mData ? "{function}" : "'" + s.mData + "'") + " for row " + e, 4), t.iDrawError = o), l;
            if (u !== a && null !== u || null === l) {
                if ("function" == typeof u) return u.call(a)
            } else u = l;
            return null === u && "display" == r ? "" : u
        }

        function T(t, e, n, i) {
            var r = t.aoColumns[n],
                o = t.aoData[e]._aData;
            r.fnSetData(o, i, {
                settings: t,
                row: e,
                col: n
            })
        }

        function _(t) {
            return i.map(t.match(/(\\.|[^\.])+/g), function(t) {
                return t.replace(/\\./g, ".")
            })
        }

        function E(t) {
            if (i.isPlainObject(t)) {
                var e = {};
                return i.each(t, function(t, n) {
                        n && (e[t] = E(n))
                    }),
                    function(t, i, r, o) {
                        var s = e[i] || e._;
                        return s !== n ? s(t, i, r, o) : t
                    }
            }
            if (null === t) return function(t) {
                return t
            };
            if ("function" == typeof t) return function(e, n, i, r) {
                return t(e, n, i, r)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e, n) {
                return e[t]
            };
            var r = function(t, e, i) {
                var o, s, a, l;
                if ("" !== i)
                    for (var u = _(i), c = 0, h = u.length; h > c; c++) {
                        if (o = u[c].match(be), s = u[c].match(ye), o) {
                            u[c] = u[c].replace(be, ""), "" !== u[c] && (t = t[u[c]]), a = [], u.splice(0, c + 1), l = u.join(".");
                            for (var d = 0, f = t.length; f > d; d++) a.push(r(t[d], e, l));
                            var p = o[0].substring(1, o[0].length - 1);
                            t = "" === p ? a : a.join(p);
                            break
                        }
                        if (s) u[c] = u[c].replace(ye, ""), t = t[u[c]]();
                        else {
                            if (null === t || t[u[c]] === n) return n;
                            t = t[u[c]]
                        }
                    }
                return t
            };
            return function(e, n) {
                return r(e, n, t)
            }
        }

        function D(t) {
            if (i.isPlainObject(t)) return D(t._);
            if (null === t) return function() {};
            if ("function" == typeof t) return function(e, n, i) {
                t(e, "set", n, i)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e, n) {
                e[t] = n
            };
            var e = function(t, i, r) {
                for (var o, s, a, l, u, c = _(r), h = c[c.length - 1], d = 0, f = c.length - 1; f > d; d++) {
                    if (s = c[d].match(be), a = c[d].match(ye), s) {
                        c[d] = c[d].replace(be, ""), t[c[d]] = [], o = c.slice(), o.splice(0, d + 1), u = o.join(".");
                        for (var p = 0, m = i.length; m > p; p++) l = {}, e(l, i[p], u), t[c[d]].push(l);
                        return
                    }
                    a && (c[d] = c[d].replace(ye, ""), t = t[c[d]](i)), (null === t[c[d]] || t[c[d]] === n) && (t[c[d]] = {}), t = t[c[d]]
                }
                h.match(ye) ? t = t[h.replace(ye, "")](i) : t[h.replace(be, "")] = i
            };
            return function(n, i) {
                return e(n, i, t)
            }
        }

        function A(t) {
            return de(t.aoData, "_aData")
        }

        function I(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0
        }

        function F(t, e, i) {
            for (var r = -1, o = 0, s = t.length; s > o; o++) t[o] == e ? r = o : t[o] > e && t[o]--; - 1 != r && i === n && t.splice(r, 1)
        }

        function k(t, e, i, r) {
            var o, s, a = t.aoData[e],
                l = function(n, i) {
                    for (; n.childNodes.length;) n.removeChild(n.firstChild);
                    n.innerHTML = S(t, e, i, "display")
                };
            if ("dom" !== i && (i && "auto" !== i || "dom" !== a.src)) {
                var u = a.anCells;
                if (u)
                    if (r !== n) l(u[r], r);
                    else
                        for (o = 0, s = u.length; s > o; o++) l(u[o], o)
            } else a._aData = P(t, a, r, r === n ? n : a._aData).data;
            a._aSortData = null, a._aFilterData = null;
            var c = t.aoColumns;
            if (r !== n) c[r].sType = null;
            else {
                for (o = 0, s = c.length; s > o; o++) c[o].sType = null;
                O(a)
            }
        }

        function P(t, e, r, o) {
            var s, a, l, u = [],
                c = e.firstChild,
                h = 0,
                d = t.aoColumns,
                f = t._rowReadObject;
            o = o || f ? {} : [];
            var p = function(t, e) {
                    if ("string" == typeof t) {
                        var n = t.indexOf("@");
                        if (-1 !== n) {
                            var i = t.substring(n + 1),
                                r = D(t);
                            r(o, e.getAttribute(i))
                        }
                    }
                },
                m = function(t) {
                    if (r === n || r === h)
                        if (a = d[h], l = i.trim(t.innerHTML), a && a._bAttrSrc) {
                            var e = D(a.mData._);
                            e(o, l), p(a.mData.sort, t), p(a.mData.type, t), p(a.mData.filter, t)
                        } else f ? (a._setter || (a._setter = D(a.mData)), a._setter(o, l)) : o[h] = l;
                    h++
                };
            if (c)
                for (; c;) s = c.nodeName.toUpperCase(), ("TD" == s || "TH" == s) && (m(c), u.push(c)), c = c.nextSibling;
            else {
                u = e.anCells;
                for (var g = 0, v = u.length; v > g; g++) m(u[g])
            }
            return {
                data: o,
                cells: u
            }
        }

        function N(t, n, i, r) {
            var o, s, a, l, u, c = t.aoData[n],
                h = c._aData,
                d = [];
            if (null === c.nTr) {
                for (o = i || e.createElement("tr"), c.nTr = o, c.anCells = d, o._DT_RowIndex = n, O(c), l = 0, u = t.aoColumns.length; u > l; l++) a = t.aoColumns[l], s = i ? r[l] : e.createElement(a.sCellType), d.push(s), (!i || a.mRender || a.mData !== l) && (s.innerHTML = S(t, n, l, "display")), a.sClass && (s.className += " " + a.sClass), a.bVisible && !i ? o.appendChild(s) : !a.bVisible && i && s.parentNode.removeChild(s), a.fnCreatedCell && a.fnCreatedCell.call(t.oInstance, s, S(t, n, l), h, n, l);
                Ht(t, "aoRowCreatedCallback", null, [o, h, n])
            }
            c.nTr.setAttribute("role", "row")
        }

        function O(t) {
            var e = t.nTr,
                n = t._aData;
            if (e) {
                if (n.DT_RowId && (e.id = n.DT_RowId), n.DT_RowClass) {
                    var r = n.DT_RowClass.split(" ");
                    t.__rowc = t.__rowc ? ve(t.__rowc.concat(r)) : r, i(e).removeClass(t.__rowc.join(" ")).addClass(n.DT_RowClass)
                }
                n.DT_RowAttr && i(e).attr(n.DT_RowAttr), n.DT_RowData && i(e).data(n.DT_RowData)
            }
        }

        function L(t) {
            var e, n, r, o, s, a = t.nTHead,
                l = t.nTFoot,
                u = 0 === i("th, td", a).length,
                c = t.oClasses,
                h = t.aoColumns;
            for (u && (o = i("<tr/>").appendTo(a)), e = 0, n = h.length; n > e; e++) s = h[e], r = i(s.nTh).addClass(s.sClass), u && r.appendTo(o), t.oFeatures.bSort && (r.addClass(s.sSortingClass), s.bSortable !== !1 && (r.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), It(t, s.nTh, e))), s.sTitle != r.html() && r.html(s.sTitle), Bt(t, "header")(t, r, s, c);
            if (u && H(t.aoHeader, a), i(a).find(">tr").attr("role", "row"), i(a).find(">tr>th, >tr>td").addClass(c.sHeaderTH), i(l).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== l) {
                var d = t.aoFooter[0];
                for (e = 0, n = d.length; n > e; e++) s = h[e], s.nTf = d[e].cell, s.sClass && i(s.nTf).addClass(s.sClass)
            }
        }

        function J(t, e, r) {
            var o, s, a, l, u, c, h, d, f, p = [],
                m = [],
                g = t.aoColumns.length;
            if (e) {
                for (r === n && (r = !1), o = 0, s = e.length; s > o; o++) {
                    for (p[o] = e[o].slice(), p[o].nTr = e[o].nTr, a = g - 1; a >= 0; a--) t.aoColumns[a].bVisible || r || p[o].splice(a, 1);
                    m.push([])
                }
                for (o = 0, s = p.length; s > o; o++) {
                    if (h = p[o].nTr)
                        for (; c = h.firstChild;) h.removeChild(c);
                    for (a = 0, l = p[o].length; l > a; a++)
                        if (d = 1, f = 1, m[o][a] === n) {
                            for (h.appendChild(p[o][a].cell), m[o][a] = 1; p[o + d] !== n && p[o][a].cell == p[o + d][a].cell;) m[o + d][a] = 1, d++;
                            for (; p[o][a + f] !== n && p[o][a].cell == p[o][a + f].cell;) {
                                for (u = 0; d > u; u++) m[o + u][a + f] = 1;
                                f++
                            }
                            i(p[o][a].cell).attr("rowspan", d).attr("colspan", f)
                        }
                }
            }
        }

        function R(t) {
            var e = Ht(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 !== i.inArray(!1, e)) return void pt(t, !1);
            var r = [],
                o = 0,
                s = t.asStripeClasses,
                a = s.length,
                l = (t.aoOpenRows.length, t.oLanguage),
                u = t.iInitDisplayStart,
                c = "ssp" == qt(t),
                h = t.aiDisplay;
            t.bDrawing = !0, u !== n && -1 !== u && (t._iDisplayStart = c ? u : u >= t.fnRecordsDisplay() ? 0 : u, t.iInitDisplayStart = -1);
            var d = t._iDisplayStart,
                f = t.fnDisplayEnd();
            if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, pt(t, !1);
            else if (c) {
                if (!t.bDestroying && !q(t)) return
            } else t.iDraw++;
            if (0 !== h.length)
                for (var p = c ? 0 : d, m = c ? t.aoData.length : f, v = p; m > v; v++) {
                    var $ = h[v],
                        b = t.aoData[$];
                    null === b.nTr && N(t, $);
                    var y = b.nTr;
                    if (0 !== a) {
                        var w = s[o % a];
                        b._sRowStripe != w && (i(y).removeClass(b._sRowStripe).addClass(w), b._sRowStripe = w)
                    }
                    Ht(t, "aoRowCallback", null, [y, b._aData, o, v]), r.push(y), o++
                } else {
                    var x = l.sZeroRecords;
                    1 == t.iDraw && "ajax" == qt(t) ? x = l.sLoadingRecords : l.sEmptyTable && 0 === t.fnRecordsTotal() && (x = l.sEmptyTable), r[0] = i("<tr/>", {
                        "class": a ? s[0] : ""
                    }).append(i("<td />", {
                        valign: "top",
                        colSpan: g(t),
                        "class": t.oClasses.sRowEmpty
                    }).html(x))[0]
                }
            Ht(t, "aoHeaderCallback", "header", [i(t.nTHead).children("tr")[0], A(t), d, f, h]), Ht(t, "aoFooterCallback", "footer", [i(t.nTFoot).children("tr")[0], A(t), d, f, h]);
            var C = i(t.nTBody);
            C.children().detach(), C.append(i(r)), Ht(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        }

        function M(t, e) {
            var n = t.oFeatures,
                i = n.bSort,
                r = n.bFilter;
            i && Et(t), r ? X(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), e !== !0 && (t._iDisplayStart = 0), t._drawHold = e, R(t), t._drawHold = !1
        }

        function j(t) {
            var e = t.oClasses,
                n = i(t.nTable),
                r = i("<div/>").insertBefore(n),
                o = t.oFeatures,
                s = i("<div/>", {
                    id: t.sTableId + "_wrapper",
                    "class": e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter)
                });
            t.nHolding = r[0], t.nTableWrapper = s[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var a, l, u, c, h, d, f = t.sDom.split(""), p = 0; p < f.length; p++) {
                if (a = null, l = f[p], "<" == l) {
                    if (u = i("<div/>")[0], c = f[p + 1], "'" == c || '"' == c) {
                        for (h = "", d = 2; f[p + d] != c;) h += f[p + d], d++;
                        if ("H" == h ? h = e.sJUIHeader : "F" == h && (h = e.sJUIFooter), -1 != h.indexOf(".")) {
                            var m = h.split(".");
                            u.id = m[0].substr(1, m[0].length - 1), u.className = m[1]
                        } else "#" == h.charAt(0) ? u.id = h.substr(1, h.length - 1) : u.className = h;
                        p += d
                    }
                    s.append(u), s = i(u)
                } else if (">" == l) s = s.parent();
                else if ("l" == l && o.bPaginate && o.bLengthChange) a = ct(t);
                else if ("f" == l && o.bFilter) a = G(t);
                else if ("r" == l && o.bProcessing) a = ft(t);
                else if ("t" == l) a = mt(t);
                else if ("i" == l && o.bInfo) a = rt(t);
                else if ("p" == l && o.bPaginate) a = ht(t);
                else if (0 !== Gt.ext.feature.length)
                    for (var g = Gt.ext.feature, v = 0, $ = g.length; $ > v; v++)
                        if (l == g[v].cFeature) {
                            a = g[v].fnInit(t);
                            break
                        }
                if (a) {
                    var b = t.aanFeatures;
                    b[l] || (b[l] = []), b[l].push(a), s.append(a)
                }
            }
            r.replaceWith(s)
        }

        function H(t, e) {
            var n, r, o, s, a, l, u, c, h, d, f, p = i(e).children("tr"),
                m = function(t, e, n) {
                    for (var i = t[e]; i[n];) n++;
                    return n
                };
            for (t.splice(0, t.length), o = 0, l = p.length; l > o; o++) t.push([]);
            for (o = 0, l = p.length; l > o; o++)
                for (n = p[o], c = 0, r = n.firstChild; r;) {
                    if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())
                        for (h = 1 * r.getAttribute("colspan"), d = 1 * r.getAttribute("rowspan"), h = h && 0 !== h && 1 !== h ? h : 1, d = d && 0 !== d && 1 !== d ? d : 1, u = m(t, o, c), f = 1 === h ? !0 : !1, a = 0; h > a; a++)
                            for (s = 0; d > s; s++) t[o + s][u + a] = {
                                cell: r,
                                unique: f
                            }, t[o + s].nTr = n;
                    r = r.nextSibling
                }
        }

        function W(t, e, n) {
            var i = [];
            n || (n = t.aoHeader, e && (n = [], H(n, e)));
            for (var r = 0, o = n.length; o > r; r++)
                for (var s = 0, a = n[r].length; a > s; s++) !n[r][s].unique || i[s] && t.bSortCellsTop || (i[s] = n[r][s].cell);
            return i
        }

        function B(t, e, n) {
            if (Ht(t, "aoServerParams", "serverParams", [e]), e && i.isArray(e)) {
                var r = {},
                    o = /(.*?)\[\]$/;
                i.each(e, function(t, e) {
                    var n = e.name.match(o);
                    if (n) {
                        var i = n[0];
                        r[i] || (r[i] = []), r[i].push(e.value)
                    } else r[e.name] = e.value
                }), e = r
            }
            var s, a = t.ajax,
                l = t.oInstance,
                u = function(e) {
                    Ht(t, null, "xhr", [t, e]), n(e)
                };
            if (i.isPlainObject(a) && a.data) {
                s = a.data;
                var c = i.isFunction(s) ? s(e, t) : s;
                e = i.isFunction(s) && c ? c : i.extend(!0, e, c), delete a.data
            }
            var h = {
                data: e,
                success: function(e) {
                    var n = e.error || e.sError;
                    n && t.oApi._fnLog(t, 0, n), t.json = e, u(e)
                },
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function(e, n, i) {
                    var r = t.oApi._fnLog;
                    "parsererror" == n ? r(t, 0, "Invalid JSON response", 1) : 4 === e.readyState && r(t, 0, "Ajax error", 7), pt(t, !1)
                }
            };
            t.oAjaxData = e, Ht(t, null, "preXhr", [t, e]), t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, i.map(e, function(t, e) {
                return {
                    name: e,
                    value: t
                }
            }), u, t) : t.sAjaxSource || "string" == typeof a ? t.jqXHR = i.ajax(i.extend(h, {
                url: a || t.sAjaxSource
            })) : i.isFunction(a) ? t.jqXHR = a.call(l, e, u, t) : (t.jqXHR = i.ajax(i.extend(h, a)), a.data = s)
        }

        function q(t) {
            return t.bAjaxDataGet ? (t.iDraw++, pt(t, !0), B(t, z(t), function(e) {
                U(t, e)
            }), !1) : !0
        }

        function z(t) {
            var e, n, r, o, s = t.aoColumns,
                a = s.length,
                l = t.oFeatures,
                u = t.oPreviousSearch,
                c = t.aoPreSearchCols,
                h = [],
                d = _t(t),
                f = t._iDisplayStart,
                p = l.bPaginate !== !1 ? t._iDisplayLength : -1,
                m = function(t, e) {
                    h.push({
                        name: t,
                        value: e
                    })
                };
            m("sEcho", t.iDraw), m("iColumns", a), m("sColumns", de(s, "sName").join(",")), m("iDisplayStart", f), m("iDisplayLength", p);
            var g = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: f,
                length: p,
                search: {
                    value: u.sSearch,
                    regex: u.bRegex
                }
            };
            for (e = 0; a > e; e++) r = s[e], o = c[e], n = "function" == typeof r.mData ? "function" : r.mData, g.columns.push({
                data: n,
                name: r.sName,
                searchable: r.bSearchable,
                orderable: r.bSortable,
                search: {
                    value: o.sSearch,
                    regex: o.bRegex
                }
            }), m("mDataProp_" + e, n), l.bFilter && (m("sSearch_" + e, o.sSearch), m("bRegex_" + e, o.bRegex), m("bSearchable_" + e, r.bSearchable)), l.bSort && m("bSortable_" + e, r.bSortable);
            l.bFilter && (m("sSearch", u.sSearch),
                m("bRegex", u.bRegex)), l.bSort && (i.each(d, function(t, e) {
                g.order.push({
                    column: e.col,
                    dir: e.dir
                }), m("iSortCol_" + t, e.col), m("sSortDir_" + t, e.dir)
            }), m("iSortingCols", d.length));
            var v = Gt.ext.legacy.ajax;
            return null === v ? t.sAjaxSource ? h : g : v ? h : g
        }

        function U(t, e) {
            var i = function(t, i) {
                    return e[t] !== n ? e[t] : e[i]
                },
                r = V(t, e),
                o = i("sEcho", "draw"),
                s = i("iTotalRecords", "recordsTotal"),
                a = i("iTotalDisplayRecords", "recordsFiltered");
            if (o) {
                if (1 * o < t.iDraw) return;
                t.iDraw = 1 * o
            }
            I(t), t._iRecordsTotal = parseInt(s, 10), t._iRecordsDisplay = parseInt(a, 10);
            for (var l = 0, u = r.length; u > l; l++) y(t, r[l]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, R(t), t._bInitComplete || lt(t, e), t.bAjaxDataGet = !0, pt(t, !1)
        }

        function V(t, e) {
            var r = i.isPlainObject(t.ajax) && t.ajax.dataSrc !== n ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === r ? e.aaData || e[r] : "" !== r ? E(r)(e) : e
        }

        function G(t) {
            var n = t.oClasses,
                r = t.sTableId,
                o = t.oLanguage,
                s = t.oPreviousSearch,
                a = t.aanFeatures,
                l = '<input type="search" class="' + n.sFilterInput + '"/>',
                u = o.sSearch;
            u = u.match(/_INPUT_/) ? u.replace("_INPUT_", l) : u + l;
            var c = i("<div/>", {
                    id: a.f ? null : r + "_filter",
                    "class": n.sFilter
                }).append(i("<label/>").append(u)),
                h = function() {
                    var e = (a.f, this.value ? this.value : "");
                    e != s.sSearch && (X(t, {
                        sSearch: e,
                        bRegex: s.bRegex,
                        bSmart: s.bSmart,
                        bCaseInsensitive: s.bCaseInsensitive
                    }), t._iDisplayStart = 0, R(t))
                },
                d = null !== t.searchDelay ? t.searchDelay : "ssp" === qt(t) ? 400 : 0,
                f = i("input", c).val(s.sSearch).attr("placeholder", o.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", d ? bt(h, d) : h).bind("keypress.DT", function(t) {
                    return 13 == t.keyCode ? !1 : void 0
                }).attr("aria-controls", r);
            return i(t.nTable).on("search.dt.DT", function(n, i) {
                if (t === i) try {
                    f[0] !== e.activeElement && f.val(s.sSearch)
                } catch (r) {}
            }), c[0]
        }

        function X(t, e, i) {
            var r = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                s = function(t) {
                    r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive
                },
                a = function(t) {
                    return t.bEscapeRegex !== n ? !t.bEscapeRegex : t.bRegex
                };
            if ($(t), "ssp" != qt(t)) {
                Y(t, e.sSearch, i, a(e), e.bSmart, e.bCaseInsensitive), s(e);
                for (var l = 0; l < o.length; l++) Z(t, o[l].sSearch, l, a(o[l]), o[l].bSmart, o[l].bCaseInsensitive);
                Q(t)
            } else s(e);
            t.bFiltered = !0, Ht(t, null, "search", [t])
        }

        function Q(t) {
            for (var e, n, i = Gt.ext.search, r = t.aiDisplay, o = 0, s = i.length; s > o; o++) {
                for (var a = [], l = 0, u = r.length; u > l; l++) n = r[l], e = t.aoData[n], i[o](t, e._aFilterData, n, e._aData, l) && a.push(n);
                r.length = 0, r.push.apply(r, a)
            }
        }

        function Z(t, e, n, i, r, o) {
            if ("" !== e)
                for (var s, a = t.aiDisplay, l = K(e, i, r, o), u = a.length - 1; u >= 0; u--) s = t.aoData[a[u]]._aFilterData[n], l.test(s) || a.splice(u, 1)
        }

        function Y(t, e, n, i, r, o) {
            var s, a, l, u = K(e, i, r, o),
                c = t.oPreviousSearch.sSearch,
                h = t.aiDisplayMaster;
            if (0 !== Gt.ext.search.length && (n = !0), a = et(t), e.length <= 0) t.aiDisplay = h.slice();
            else
                for ((a || n || c.length > e.length || 0 !== e.indexOf(c) || t.bSorted) && (t.aiDisplay = h.slice()), s = t.aiDisplay, l = s.length - 1; l >= 0; l--) u.test(t.aoData[s[l]]._sFilterRow) || s.splice(l, 1)
        }

        function K(t, e, n, r) {
            if (t = e ? t : tt(t), n) {
                var o = i.map(t.match(/"[^"]+"|[^ ]+/g) || "", function(t) {
                    if ('"' === t.charAt(0)) {
                        var e = t.match(/^"(.*)"$/);
                        t = e ? e[1] : t
                    }
                    return t.replace('"', "")
                });
                t = "^(?=.*?" + o.join(")(?=.*?") + ").*$"
            }
            return new RegExp(t, r ? "i" : "")
        }

        function tt(t) {
            return t.replace(re, "\\$1")
        }

        function et(t) {
            var e, n, i, r, o, s, a, l, u = t.aoColumns,
                c = Gt.ext.type.search,
                h = !1;
            for (n = 0, r = t.aoData.length; r > n; n++)
                if (l = t.aoData[n], !l._aFilterData) {
                    for (s = [], i = 0, o = u.length; o > i; i++) e = u[i], e.bSearchable ? (a = S(t, n, i, "filter"), c[e.sType] && (a = c[e.sType](a)), null === a && (a = ""), "string" != typeof a && a.toString && (a = a.toString())) : a = "", a.indexOf && -1 !== a.indexOf("&") && (we.innerHTML = a, a = xe ? we.textContent : we.innerText), a.replace && (a = a.replace(/[\r\n]/g, "")), s.push(a);
                    l._aFilterData = s, l._sFilterRow = s.join("  "), h = !0
                }
            return h
        }

        function nt(t) {
            return {
                search: t.sSearch,
                smart: t.bSmart,
                regex: t.bRegex,
                caseInsensitive: t.bCaseInsensitive
            }
        }

        function it(t) {
            return {
                sSearch: t.search,
                bSmart: t.smart,
                bRegex: t.regex,
                bCaseInsensitive: t.caseInsensitive
            }
        }

        function rt(t) {
            var e = t.sTableId,
                n = t.aanFeatures.i,
                r = i("<div/>", {
                    "class": t.oClasses.sInfo,
                    id: n ? null : e + "_info"
                });
            return n || (t.aoDrawCallback.push({
                fn: ot,
                sName: "information"
            }), r.attr("role", "status").attr("aria-live", "polite"), i(t.nTable).attr("aria-describedby", e + "_info")), r[0]
        }

        function ot(t) {
            var e = t.aanFeatures.i;
            if (0 !== e.length) {
                var n = t.oLanguage,
                    r = t._iDisplayStart + 1,
                    o = t.fnDisplayEnd(),
                    s = t.fnRecordsTotal(),
                    a = t.fnRecordsDisplay(),
                    l = a ? n.sInfo : n.sInfoEmpty;
                a !== s && (l += " " + n.sInfoFiltered), l += n.sInfoPostFix, l = st(t, l);
                var u = n.fnInfoCallback;
                null !== u && (l = u.call(t.oInstance, t, r, o, s, a, l)), i(e).html(l)
            }
        }

        function st(t, e) {
            var n = t.fnFormatNumber,
                i = t._iDisplayStart + 1,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay(),
                s = -1 === r;
            return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, s ? 1 : Math.ceil(i / r))).replace(/_PAGES_/g, n.call(t, s ? 1 : Math.ceil(o / r)))
        }

        function at(t) {
            var e, n, i, r = t.iInitDisplayStart,
                o = t.aoColumns,
                s = t.oFeatures;
            if (!t.bInitialised) return void setTimeout(function() {
                at(t)
            }, 200);
            for (j(t), L(t), J(t, t.aoHeader), J(t, t.aoFooter), pt(t, !0), s.bAutoWidth && $t(t), e = 0, n = o.length; n > e; e++) i = o[e], i.sWidth && (i.nTh.style.width = St(i.sWidth));
            M(t);
            var a = qt(t);
            "ssp" != a && ("ajax" == a ? B(t, [], function(n) {
                var i = V(t, n);
                for (e = 0; e < i.length; e++) y(t, i[e]);
                t.iInitDisplayStart = r, M(t), pt(t, !1), lt(t, n)
            }, t) : (pt(t, !1), lt(t)))
        }

        function lt(t, e) {
            t._bInitComplete = !0, e && f(t), Ht(t, "aoInitComplete", "init", [t, e])
        }

        function ut(t, e) {
            var n = parseInt(e, 10);
            t._iDisplayLength = n, Wt(t), Ht(t, null, "length", [t, n])
        }

        function ct(t) {
            for (var e = t.oClasses, n = t.sTableId, r = t.aLengthMenu, o = i.isArray(r[0]), s = o ? r[0] : r, a = o ? r[1] : r, l = i("<select/>", {
                    name: n + "_length",
                    "aria-controls": n,
                    "class": e.sLengthSelect
                }), u = 0, c = s.length; c > u; u++) l[0][u] = new Option(a[u], s[u]);
            var h = i("<div><label/></div>").addClass(e.sLength);
            return t.aanFeatures.l || (h[0].id = n + "_length"), h.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), i("select", h).val(t._iDisplayLength).bind("change.DT", function(e) {
                ut(t, i(this).val()), R(t)
            }), i(t.nTable).bind("length.dt.DT", function(e, n, r) {
                t === n && i("select", h).val(r)
            }), h[0]
        }

        function ht(t) {
            var e = t.sPaginationType,
                n = Gt.ext.pager[e],
                r = "function" == typeof n,
                o = function(t) {
                    R(t)
                },
                s = i("<div/>").addClass(t.oClasses.sPaging + e)[0],
                a = t.aanFeatures;
            return r || n.fnInit(t, s, o), a.p || (s.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function(t) {
                    if (r) {
                        var e, i, s = t._iDisplayStart,
                            l = t._iDisplayLength,
                            u = t.fnRecordsDisplay(),
                            c = -1 === l,
                            h = c ? 0 : Math.ceil(s / l),
                            d = c ? 1 : Math.ceil(u / l),
                            f = n(h, d);
                        for (e = 0, i = a.p.length; i > e; e++) Bt(t, "pageButton")(t, a.p[e], e, f, h, d)
                    } else n.fnUpdate(t, o)
                },
                sName: "pagination"
            })), s
        }

        function dt(t, e, n) {
            var i = t._iDisplayStart,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay();
            0 === o || -1 === r ? i = 0 : "number" == typeof e ? (i = e * r, i > o && (i = 0)) : "first" == e ? i = 0 : "previous" == e ? (i = r >= 0 ? i - r : 0, 0 > i && (i = 0)) : "next" == e ? o > i + r && (i += r) : "last" == e ? i = Math.floor((o - 1) / r) * r : Lt(t, 0, "Unknown paging action: " + e, 5);
            var s = t._iDisplayStart !== i;
            return t._iDisplayStart = i, s && (Ht(t, null, "page", [t]), n && R(t)), s
        }

        function ft(t) {
            return i("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                "class": t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function pt(t, e) {
            t.oFeatures.bProcessing && i(t.aanFeatures.r).css("display", e ? "block" : "none"), Ht(t, null, "processing", [t, e])
        }

        function mt(t) {
            var e = i(t.nTable);
            e.attr("role", "grid");
            var n = t.oScroll;
            if ("" === n.sX && "" === n.sY) return t.nTable;
            var r = n.sX,
                o = n.sY,
                s = t.oClasses,
                a = e.children("caption"),
                l = a.length ? a[0]._captionSide : null,
                u = i(e[0].cloneNode(!1)),
                c = i(e[0].cloneNode(!1)),
                h = e.children("tfoot"),
                d = "<div/>",
                f = function(t) {
                    return t ? St(t) : null
                };
            n.sX && "100%" === e.attr("width") && e.removeAttr("width"), h.length || (h = null);
            var p = i(d, {
                "class": s.sScrollWrapper
            }).append(i(d, {
                "class": s.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? f(r) : "100%"
            }).append(i(d, {
                "class": s.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: n.sXInner || "100%"
            }).append(u.removeAttr("id").css("margin-left", 0).append("top" === l ? a : null).append(e.children("thead"))))).append(i(d, {
                "class": s.sScrollBody
            }).css({
                overflow: "auto",
                height: f(o),
                width: f(r)
            }).append(e));
            h && p.append(i(d, {
                "class": s.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: r ? f(r) : "100%"
            }).append(i(d, {
                "class": s.sScrollFootInner
            }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? a : null).append(e.children("tfoot")))));
            var m = p.children(),
                g = m[0],
                v = m[1],
                $ = h ? m[2] : null;
            return r && i(v).on("scroll.DT", function(t) {
                var e = this.scrollLeft;
                g.scrollLeft = e, h && ($.scrollLeft = e)
            }), t.nScrollHead = g, t.nScrollBody = v, t.nScrollFoot = $, t.aoDrawCallback.push({
                fn: gt,
                sName: "scrolling"
            }), p[0]
        }

        function gt(t) {
            var e, n, r, o, s, a, l, u, c, h = t.oScroll,
                d = h.sX,
                f = h.sXInner,
                m = h.sY,
                g = h.iBarWidth,
                v = i(t.nScrollHead),
                $ = v[0].style,
                b = v.children("div"),
                y = b[0].style,
                w = b.children("table"),
                x = t.nScrollBody,
                C = i(x),
                S = x.style,
                T = i(t.nScrollFoot),
                _ = T.children("div"),
                E = _.children("table"),
                D = i(t.nTHead),
                A = i(t.nTable),
                I = A[0],
                F = I.style,
                k = t.nTFoot ? i(t.nTFoot) : null,
                P = t.oBrowser,
                N = P.bScrollOversize,
                O = [],
                L = [],
                J = [],
                R = function(t) {
                    var e = t.style;
                    e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                };
            if (A.children("thead, tfoot").remove(), s = D.clone().prependTo(A), e = D.find("tr"), r = s.find("tr"), s.find("th, td").removeAttr("tabindex"), k && (a = k.clone().prependTo(A), n = k.find("tr"), o = a.find("tr")), d || (S.width = "100%", v[0].style.width = "100%"), i.each(W(t, s), function(e, n) {
                    l = p(t, e), n.style.width = t.aoColumns[l].sWidth
                }), k && vt(function(t) {
                    t.style.width = ""
                }, o), h.bCollapse && "" !== m && (S.height = C[0].offsetHeight + D[0].offsetHeight + "px"), c = A.outerWidth(), "" === d ? (F.width = "100%", N && (A.find("tbody").height() > x.offsetHeight || "scroll" == C.css("overflow-y")) && (F.width = St(A.outerWidth() - g))) : "" !== f ? F.width = St(f) : c == C.width() && C.height() < A.height() ? (F.width = St(c - g), A.outerWidth() > c - g && (F.width = St(c))) : F.width = St(c), c = A.outerWidth(), vt(R, r), vt(function(t) {
                    J.push(t.innerHTML), O.push(St(i(t).css("width")))
                }, r), vt(function(t, e) {
                    t.style.width = O[e]
                }, e), i(r).height(0), k && (vt(R, o), vt(function(t) {
                    L.push(St(i(t).css("width")))
                }, o), vt(function(t, e) {
                    t.style.width = L[e]
                }, n), i(o).height(0)), vt(function(t, e) {
                    t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + J[e] + "</div>", t.style.width = O[e]
                }, r), k && vt(function(t, e) {
                    t.innerHTML = "", t.style.width = L[e]
                }, o), A.outerWidth() < c ? (u = x.scrollHeight > x.offsetHeight || "scroll" == C.css("overflow-y") ? c + g : c, N && (x.scrollHeight > x.offsetHeight || "scroll" == C.css("overflow-y")) && (F.width = St(u - g)), ("" === d || "" !== f) && Lt(t, 1, "Possible column misalignment", 6)) : u = "100%", S.width = St(u), $.width = St(u), k && (t.nScrollFoot.style.width = St(u)), m || N && (S.height = St(I.offsetHeight + g)), m && h.bCollapse) {
                S.height = St(m);
                var M = d && I.offsetWidth > x.offsetWidth ? g : 0;
                I.offsetHeight < x.offsetHeight && (S.height = St(I.offsetHeight + M))
            }
            var j = A.outerWidth();
            w[0].style.width = St(j), y.width = St(j);
            var H = A.height() > x.clientHeight || "scroll" == C.css("overflow-y"),
                B = "padding" + (P.bScrollbarLeft ? "Left" : "Right");
            y[B] = H ? g + "px" : "0px", k && (E[0].style.width = St(j), _[0].style.width = St(j), _[0].style[B] = H ? g + "px" : "0px"), C.scroll(), !t.bSorted && !t.bFiltered || t._drawHold || (x.scrollTop = 0)
        }

        function vt(t, e, n) {
            for (var i, r, o = 0, s = 0, a = e.length; a > s;) {
                for (i = e[s].firstChild, r = n ? n[s].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, r, o) : t(i, o), o++), i = i.nextSibling, r = n ? r.nextSibling : null;
                s++
            }
        }

        function $t(e) {
            var n, r, o, s, a, l = e.nTable,
                u = e.aoColumns,
                c = e.oScroll,
                h = c.sY,
                d = c.sX,
                p = c.sXInner,
                m = u.length,
                $ = v(e, "bVisible"),
                b = i("th", e.nTHead),
                y = l.getAttribute("width"),
                w = l.parentNode,
                x = !1,
                C = l.style.width;
            for (C && -1 !== C.indexOf("%") && (y = C), n = 0; n < $.length; n++) r = u[$[n]], null !== r.sWidth && (r.sWidth = yt(r.sWidthOrig, w), x = !0);
            if (x || d || h || m != g(e) || m != b.length) {
                var S = i(l).clone().empty().css("visibility", "hidden").removeAttr("id").append(i(e.nTHead).clone(!1)).append(i(e.nTFoot).clone(!1)).append(i("<tbody><tr/></tbody>"));
                S.find("tfoot th, tfoot td").css("width", "");
                var T = S.find("tbody tr");
                for (b = W(e, S.find("thead")[0]), n = 0; n < $.length; n++) r = u[$[n]], b[n].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? St(r.sWidthOrig) : "";
                if (e.aoData.length)
                    for (n = 0; n < $.length; n++) o = $[n], r = u[o], i(xt(e, o)).clone(!1).append(r.sContentPadding).appendTo(T);
                if (S.appendTo(w), d && p ? S.width(p) : d ? (S.css("width", "auto"), S.width() < w.offsetWidth && S.width(w.offsetWidth)) : h ? S.width(w.offsetWidth) : y && S.width(y), wt(e, S[0]), d) {
                    var _ = 0;
                    for (n = 0; n < $.length; n++) r = u[$[n]], a = i(b[n]).outerWidth(), _ += null === r.sWidthOrig ? a : parseInt(r.sWidth, 10) + a - i(b[n]).width();
                    S.width(St(_)), l.style.width = St(_)
                }
                for (n = 0; n < $.length; n++) r = u[$[n]], s = i(b[n]).width(), s && (r.sWidth = St(s));
                l.style.width = St(S.css("width")), S.remove()
            } else
                for (n = 0; m > n; n++) u[n].sWidth = St(b.eq(n).width());
            y && (l.style.width = St(y)), !y && !d || e._reszEvt || (i(t).bind("resize.DT-" + e.sInstance, bt(function() {
                f(e)
            })), e._reszEvt = !0)
        }

        function bt(t, e) {
            var i, r, o = e !== n ? e : 200;
            return function() {
                var e = this,
                    s = +new Date,
                    a = arguments;
                i && i + o > s ? (clearTimeout(r), r = setTimeout(function() {
                    i = n, t.apply(e, a)
                }, o)) : (i = s, t.apply(e, a))
            }
        }

        function yt(t, n) {
            if (!t) return 0;
            var r = i("<div/>").css("width", St(t)).appendTo(n || e.body),
                o = r[0].offsetWidth;
            return r.remove(), o
        }

        function wt(t, e) {
            var n = t.oScroll;
            if (n.sX || n.sY) {
                var r = n.sX ? 0 : n.iBarWidth;
                e.style.width = St(i(e).outerWidth() - r)
            }
        }

        function xt(t, e) {
            var n = Ct(t, e);
            if (0 > n) return null;
            var r = t.aoData[n];
            return r.nTr ? r.anCells[e] : i("<td/>").html(S(t, n, e, "display"))[0]
        }

        function Ct(t, e) {
            for (var n, i = -1, r = -1, o = 0, s = t.aoData.length; s > o; o++) n = S(t, o, e, "display") + "", n = n.replace(Ce, ""), n.length > i && (i = n.length, r = o);
            return r
        }

        function St(t) {
            return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function Tt() {
            var t = Gt.__scrollbarWidth;
            if (t === n) {
                var e = i("<p/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 150,
                    padding: 0,
                    overflow: "scroll",
                    visibility: "hidden"
                }).appendTo("body");
                t = e[0].offsetWidth - e[0].clientWidth, Gt.__scrollbarWidth = t, e.remove()
            }
            return t
        }

        function _t(t) {
            var e, r, o, s, a, l, u, c = [],
                h = t.aoColumns,
                d = t.aaSortingFixed,
                f = i.isPlainObject(d),
                p = [],
                m = function(t) {
                    t.length && !i.isArray(t[0]) ? p.push(t) : p.push.apply(p, t)
                };
            for (i.isArray(d) && m(d), f && d.pre && m(d.pre), m(t.aaSorting), f && d.post && m(d.post), e = 0; e < p.length; e++)
                for (u = p[e][0], s = h[u].aDataSort, r = 0, o = s.length; o > r; r++) a = s[r], l = h[a].sType || "string", p[e]._idx === n && (p[e]._idx = i.inArray(p[e][1], h[a].asSorting)), c.push({
                    src: u,
                    col: a,
                    dir: p[e][1],
                    index: p[e]._idx,
                    type: l,
                    formatter: Gt.ext.type.order[l + "-pre"]
                });
            return c
        }

        function Et(t) {
            var e, n, i, r, o, s = [],
                a = Gt.ext.type.order,
                l = t.aoData,
                u = (t.aoColumns, 0),
                c = t.aiDisplayMaster;
            for ($(t), o = _t(t), e = 0, n = o.length; n > e; e++) r = o[e], r.formatter && u++, kt(t, r.col);
            if ("ssp" != qt(t) && 0 !== o.length) {
                for (e = 0, i = c.length; i > e; e++) s[c[e]] = e;
                u === o.length ? c.sort(function(t, e) {
                    var n, i, r, a, u, c = o.length,
                        h = l[t]._aSortData,
                        d = l[e]._aSortData;
                    for (r = 0; c > r; r++)
                        if (u = o[r], n = h[u.col], i = d[u.col], a = i > n ? -1 : n > i ? 1 : 0, 0 !== a) return "asc" === u.dir ? a : -a;
                    return n = s[t], i = s[e], i > n ? -1 : n > i ? 1 : 0
                }) : c.sort(function(t, e) {
                    var n, i, r, u, c, h, d = o.length,
                        f = l[t]._aSortData,
                        p = l[e]._aSortData;
                    for (r = 0; d > r; r++)
                        if (c = o[r], n = f[c.col], i = p[c.col], h = a[c.type + "-" + c.dir] || a["string-" + c.dir], u = h(n, i), 0 !== u) return u;
                    return n = s[t], i = s[e], i > n ? -1 : n > i ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function Dt(t) {
            for (var e, n, i = t.aoColumns, r = _t(t), o = t.oLanguage.oAria, s = 0, a = i.length; a > s; s++) {
                var l = i[s],
                    u = l.asSorting,
                    c = l.sTitle.replace(/<.*?>/g, ""),
                    h = l.nTh;
                h.removeAttribute("aria-sort"), l.bSortable ? (r.length > 0 && r[0].col == s ? (h.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = u[r[0].index + 1] || u[0]) : n = u[0], e = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)) : e = c, h.setAttribute("aria-label", e)
            }
        }

        function At(t, e, r, o) {
            var s, a = t.aoColumns[e],
                l = t.aaSorting,
                u = a.asSorting,
                c = function(t, e) {
                    var r = t._idx;
                    return r === n && (r = i.inArray(t[1], u)), r + 1 < u.length ? r + 1 : e ? null : 0
                };
            if ("number" == typeof l[0] && (l = t.aaSorting = [l]), r && t.oFeatures.bSortMulti) {
                var h = i.inArray(e, de(l, "0")); - 1 !== h ? (s = c(l[h], !0), null === s && 1 === l.length && (s = 0), null === s ? l.splice(h, 1) : (l[h][1] = u[s], l[h]._idx = s)) : (l.push([e, u[0], 0]), l[l.length - 1]._idx = 0)
            } else l.length && l[0][0] == e ? (s = c(l[0]), l.length = 1, l[0][1] = u[s], l[0]._idx = s) : (l.length = 0, l.push([e, u[0]]), l[0]._idx = 0);
            M(t), "function" == typeof o && o(t)
        }

        function It(t, e, n, i) {
            var r = t.aoColumns[n];
            Mt(e, {}, function(e) {
                r.bSortable !== !1 && (t.oFeatures.bProcessing ? (pt(t, !0), setTimeout(function() {
                    At(t, n, e.shiftKey, i), "ssp" !== qt(t) && pt(t, !1)
                }, 0)) : At(t, n, e.shiftKey, i))
            })
        }

        function Ft(t) {
            var e, n, r, o = t.aLastSort,
                s = t.oClasses.sSortColumn,
                a = _t(t),
                l = t.oFeatures;
            if (l.bSort && l.bSortClasses) {
                for (e = 0, n = o.length; n > e; e++) r = o[e].src, i(de(t.aoData, "anCells", r)).removeClass(s + (2 > e ? e + 1 : 3));
                for (e = 0, n = a.length; n > e; e++) r = a[e].src, i(de(t.aoData, "anCells", r)).addClass(s + (2 > e ? e + 1 : 3))
            }
            t.aLastSort = a
        }

        function kt(t, e) {
            var n, i = t.aoColumns[e],
                r = Gt.ext.order[i.sSortDataType];
            r && (n = r.call(t.oInstance, t, e, m(t, e)));
            for (var o, s, a = Gt.ext.type.order[i.sType + "-pre"], l = 0, u = t.aoData.length; u > l; l++) o = t.aoData[l], o._aSortData || (o._aSortData = []), (!o._aSortData[e] || r) && (s = r ? n[l] : S(t, l, e, "sort"), o._aSortData[e] = a ? a(s) : s)
        }

        function Pt(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var e = {
                    time: +new Date,
                    start: t._iDisplayStart,
                    length: t._iDisplayLength,
                    order: i.extend(!0, [], t.aaSorting),
                    search: nt(t.oPreviousSearch),
                    columns: i.map(t.aoColumns, function(e, n) {
                        return {
                            visible: e.bVisible,
                            search: nt(t.aoPreSearchCols[n])
                        }
                    })
                };
                Ht(t, "aoStateSaveParams", "stateSaveParams", [t, e]), t.oSavedState = e, t.fnStateSaveCallback.call(t.oInstance, t, e)
            }
        }

        function Nt(t, e) {
            var r, o, s = t.aoColumns;
            if (t.oFeatures.bStateSave) {
                var a = t.fnStateLoadCallback.call(t.oInstance, t);
                if (a && a.time) {
                    var l = Ht(t, "aoStateLoadParams", "stateLoadParams", [t, a]);
                    if (-1 === i.inArray(!1, l)) {
                        var u = t.iStateDuration;
                        if (!(u > 0 && a.time < +new Date - 1e3 * u) && s.length === a.columns.length) {
                            for (t.oLoadedState = i.extend(!0, {}, a), a.start !== n && (t._iDisplayStart = a.start, t.iInitDisplayStart = a.start), a.length !== n && (t._iDisplayLength = a.length), a.order !== n && (t.aaSorting = [], i.each(a.order, function(e, n) {
                                    t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                                })), a.search !== n && i.extend(t.oPreviousSearch, it(a.search)), r = 0, o = a.columns.length; o > r; r++) {
                                var c = a.columns[r];
                                c.visible !== n && (s[r].bVisible = c.visible), c.search !== n && i.extend(t.aoPreSearchCols[r], it(c.search))
                            }
                            Ht(t, "aoStateLoaded", "stateLoaded", [t, a])
                        }
                    }
                }
            }
        }

        function Ot(t) {
            var e = Gt.settings,
                n = i.inArray(t, de(e, "nTable"));
            return -1 !== n ? e[n] : null
        }

        function Lt(e, n, i, r) {
            if (i = "DataTables warning: " + (null !== e ? "table id=" + e.sTableId + " - " : "") + i, r && (i += ". For more information about this error, please see http://datatables.net/tn/" + r), n) t.console && console.log && console.log(i);
            else {
                var o = Gt.ext,
                    s = o.sErrMode || o.errMode;
                if (Ht(e, null, "error", [e, r, i]), "alert" == s) alert(i);
                else {
                    if ("throw" == s) throw new Error(i);
                    "function" == typeof s && s(e, r, i)
                }
            }
        }

        function Jt(t, e, r, o) {
            return i.isArray(r) ? void i.each(r, function(n, r) {
                i.isArray(r) ? Jt(t, e, r[0], r[1]) : Jt(t, e, r)
            }) : (o === n && (o = r), void(e[r] !== n && (t[o] = e[r])))
        }

        function Rt(t, e, n) {
            var r;
            for (var o in e) e.hasOwnProperty(o) && (r = e[o], i.isPlainObject(r) ? (i.isPlainObject(t[o]) || (t[o] = {}), i.extend(!0, t[o], r)) : n && "data" !== o && "aaData" !== o && i.isArray(r) ? t[o] = r.slice() : t[o] = r);
            return t
        }

        function Mt(t, e, n) {
            i(t).bind("click.DT", e, function(e) {
                t.blur(), n(e)
            }).bind("keypress.DT", e, function(t) {
                13 === t.which && (t.preventDefault(), n(t))
            }).bind("selectstart.DT", function() {
                return !1
            })
        }

        function jt(t, e, n, i) {
            n && t[e].push({
                fn: n,
                sName: i
            })
        }

        function Ht(t, e, n, r) {
            var o = [];
            return e && (o = i.map(t[e].slice().reverse(), function(e, n) {
                return e.fn.apply(t.oInstance, r)
            })), null !== n && i(t.nTable).trigger(n + ".dt", r), o
        }

        function Wt(t) {
            var e = t._iDisplayStart,
                n = t.fnDisplayEnd(),
                i = t._iDisplayLength;
            e >= n && (e = n - i), e -= e % i, (-1 === i || 0 > e) && (e = 0), t._iDisplayStart = e
        }

        function Bt(t, e) {
            var n = t.renderer,
                r = Gt.ext.renderer[e];
            return i.isPlainObject(n) && n[e] ? r[n[e]] || r._ : "string" == typeof n ? r[n] || r._ : r._
        }

        function qt(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function zt(t, e) {
            var n = [],
                i = Ue.numbers_length,
                r = Math.floor(i / 2);
            return i >= e ? n = pe(0, e) : r >= t ? (n = pe(0, i - 2), n.push("ellipsis"), n.push(e - 1)) : t >= e - 1 - r ? (n = pe(e - (i - 2), e), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : (n = pe(t - r + 2, t + r - 1), n.push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
        }

        function Ut(t) {
            i.each({
                num: function(e) {
                    return Ve(e, t)
                },
                "num-fmt": function(e) {
                    return Ve(e, t, oe)
                },
                "html-num": function(e) {
                    return Ve(e, t, ee)
                },
                "html-num-fmt": function(e) {
                    return Ve(e, t, ee, oe)
                }
            }, function(e, n) {
                Xt.type.order[e + t + "-pre"] = n, e.match(/^html\-/) && (Xt.type.search[e + t] = Xt.type.search.html)
            })
        }

        function Vt(t) {
            return function() {
                var e = [Ot(this[Gt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Gt.ext.internal[t].apply(this, e)
            }
        }
        var Gt, Xt, Qt, Zt, Yt, Kt = {},
            te = /[\r\n]/g,
            ee = /<.*?>/g,
            ne = /^[\w\+\-]/,
            ie = /[\w\+\-]$/,
            re = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
            oe = /[',$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            se = function(t) {
                return t && t !== !0 && "-" !== t ? !1 : !0
            },
            ae = function(t) {
                var e = parseInt(t, 10);
                return !isNaN(e) && isFinite(t) ? e : null
            },
            le = function(t, e) {
                return Kt[e] || (Kt[e] = new RegExp(tt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Kt[e], ".") : t
            },
            ue = function(t, e, n) {
                var i = "string" == typeof t;
                return se(t) ? !0 : (e && i && (t = le(t, e)), n && i && (t = t.replace(oe, "")), !isNaN(parseFloat(t)) && isFinite(t))
            },
            ce = function(t) {
                return se(t) || "string" == typeof t
            },
            he = function(t, e, n) {
                if (se(t)) return !0;
                var i = ce(t);
                return i && ue(ge(t), e, n) ? !0 : null
            },
            de = function(t, e, i) {
                var r = [],
                    o = 0,
                    s = t.length;
                if (i !== n)
                    for (; s > o; o++) t[o] && t[o][e] && r.push(t[o][e][i]);
                else
                    for (; s > o; o++) t[o] && r.push(t[o][e]);
                return r
            },
            fe = function(t, e, i, r) {
                var o = [],
                    s = 0,
                    a = e.length;
                if (r !== n)
                    for (; a > s; s++) t[e[s]][i] && o.push(t[e[s]][i][r]);
                else
                    for (; a > s; s++) o.push(t[e[s]][i]);
                return o
            },
            pe = function(t, e) {
                var i, r = [];
                e === n ? (e = 0, i = t) : (i = e, e = t);
                for (var o = e; i > o; o++) r.push(o);
                return r
            },
            me = function(t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) t[n] && e.push(t[n]);
                return e
            },
            ge = function(t) {
                return t.replace(ee, "")
            },
            ve = function(t) {
                var e, n, i, r = [],
                    o = t.length,
                    s = 0;
                t: for (n = 0; o > n; n++) {
                    for (e = t[n], i = 0; s > i; i++)
                        if (r[i] === e) continue t;
                    r.push(e), s++
                }
                return r
            },
            $e = function(t, e, i) {
                t[e] !== n && (t[i] = t[e])
            },
            be = /\[.*?\]$/,
            ye = /\(\)$/,
            we = i("<div>")[0],
            xe = we.textContent !== n,
            Ce = /<.*?>/g;
        Gt = function(t) {
            this.$ = function(t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function(t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function(t) {
                return new Qt(t ? Ot(this[Xt.iApiIndex]) : this)
            }, this.fnAddData = function(t, e) {
                var r = this.api(!0),
                    o = i.isArray(t) && (i.isArray(t[0]) || i.isPlainObject(t[0])) ? r.rows.add(t) : r.row.add(t);
                return (e === n || e) && r.draw(), o.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(t) {
                var e = this.api(!0).columns.adjust(),
                    i = e.settings()[0],
                    r = i.oScroll;
                t === n || t ? e.draw(!1) : ("" !== r.sX || "" !== r.sY) && gt(i)
            }, this.fnClearTable = function(t) {
                var e = this.api(!0).clear();
                (t === n || t) && e.draw()
            }, this.fnClose = function(t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function(t, e, i) {
                var r = this.api(!0),
                    o = r.rows(t),
                    s = o.settings()[0],
                    a = s.aoData[o[0][0]];
                return o.remove(), e && e.call(this, s, a), (i === n || i) && r.draw(), a
            }, this.fnDestroy = function(t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function(t) {
                this.api(!0).draw(t)
            }, this.fnFilter = function(t, e, i, r, o, s) {
                var a = this.api(!0);
                null === e || e === n ? a.search(t, i, r, s) : a.column(e).search(t, i, r, s), a.draw()
            }, this.fnGetData = function(t, e) {
                var i = this.api(!0);
                if (t !== n) {
                    var r = t.nodeName ? t.nodeName.toLowerCase() : "";
                    return e !== n || "td" == r || "th" == r ? i.cell(t, e).data() : i.row(t).data() || null
                }
                return i.data().toArray()
            }, this.fnGetNodes = function(t) {
                var e = this.api(!0);
                return t !== n ? e.row(t).node() : e.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function(t) {
                var e = this.api(!0),
                    n = t.nodeName.toUpperCase();
                if ("TR" == n) return e.row(t).index();
                if ("TD" == n || "TH" == n) {
                    var i = e.cell(t).index();
                    return [i.row, i.columnVisible, i.column]
                }
                return null
            }, this.fnIsOpen = function(t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function(t, e, n) {
                return this.api(!0).row(t).child(e, n).show().child()[0]
            }, this.fnPageChange = function(t, e) {
                var i = this.api(!0).page(t);
                (e === n || e) && i.draw(!1)
            }, this.fnSetColumnVis = function(t, e, i) {
                var r = this.api(!0).column(t).visible(e);
                (i === n || i) && r.columns.adjust().draw()
            }, this.fnSettings = function() {
                return Ot(this[Xt.iApiIndex])
            }, this.fnSort = function(t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function(t, e, n) {
                this.api(!0).order.listener(t, e, n)
            }, this.fnUpdate = function(t, e, i, r, o) {
                var s = this.api(!0);
                return i === n || null === i ? s.row(e).data(t) : s.cell(e, i).data(t), (o === n || o) && s.columns.adjust(), (r === n || r) && s.draw(), 0
            }, this.fnVersionCheck = Xt.fnVersionCheck;
            var e = this,
                r = t === n,
                c = this.length;
            r && (t = {}), this.oApi = this.internal = Xt.internal;
            for (var f in Gt.ext.internal) f && (this[f] = Vt(f));
            return this.each(function() {
                var f, p = {},
                    m = c > 1 ? Rt(p, t, !0) : t,
                    g = 0,
                    v = this.getAttribute("id"),
                    $ = !1,
                    x = Gt.defaults,
                    C = i(this);
                if ("table" != this.nodeName.toLowerCase()) return void Lt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                a(x), l(x.column), o(x, x, !0), o(x.column, x.column, !0), o(x, i.extend(m, C.data()));
                var S = Gt.settings;
                for (g = 0, f = S.length; f > g; g++) {
                    var T = S[g];
                    if (T.nTable == this || T.nTHead.parentNode == this || T.nTFoot && T.nTFoot.parentNode == this) {
                        var _ = m.bRetrieve !== n ? m.bRetrieve : x.bRetrieve,
                            E = m.bDestroy !== n ? m.bDestroy : x.bDestroy;
                        if (r || _) return T.oInstance;
                        if (E) {
                            T.oInstance.fnDestroy();
                            break
                        }
                        return void Lt(T, 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (T.sTableId == this.id) {
                        S.splice(g, 1);
                        break
                    }
                }(null === v || "" === v) && (v = "DataTables_Table_" + Gt.ext._unique++, this.id = v);
                var D = i.extend(!0, {}, Gt.models.oSettings, {
                    sDestroyWidth: C[0].style.width,
                    sInstance: v,
                    sTableId: v
                });
                D.nTable = this, D.oApi = e.internal, D.oInit = m, S.push(D), D.oInstance = 1 === e.length ? e : C.dataTable(), a(m), m.oLanguage && s(m.oLanguage), m.aLengthMenu && !m.iDisplayLength && (m.iDisplayLength = i.isArray(m.aLengthMenu[0]) ? m.aLengthMenu[0][0] : m.aLengthMenu[0]), m = Rt(i.extend(!0, {}, x), m), Jt(D.oFeatures, m, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Jt(D, m, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                    ["bJQueryUI", "bJUI"]
                ]), Jt(D.oScroll, m, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"]
                ]), Jt(D.oLanguage, m, "fnInfoCallback"), jt(D, "aoDrawCallback", m.fnDrawCallback, "user"), jt(D, "aoServerParams", m.fnServerParams, "user"), jt(D, "aoStateSaveParams", m.fnStateSaveParams, "user"), jt(D, "aoStateLoadParams", m.fnStateLoadParams, "user"), jt(D, "aoStateLoaded", m.fnStateLoaded, "user"), jt(D, "aoRowCallback", m.fnRowCallback, "user"), jt(D, "aoRowCreatedCallback", m.fnCreatedRow, "user"), jt(D, "aoHeaderCallback", m.fnHeaderCallback, "user"), jt(D, "aoFooterCallback", m.fnFooterCallback, "user"), jt(D, "aoInitComplete", m.fnInitComplete, "user"), jt(D, "aoPreDrawCallback", m.fnPreDrawCallback, "user");
                var A = D.oClasses;
                if (m.bJQueryUI ? (i.extend(A, Gt.ext.oJUIClasses, m.oClasses), m.sDom === x.sDom && "lfrtip" === x.sDom && (D.sDom = '<"H"lfr>t<"F"ip>'), D.renderer ? i.isPlainObject(D.renderer) && !D.renderer.header && (D.renderer.header = "jqueryui") : D.renderer = "jqueryui") : i.extend(A, Gt.ext.classes, m.oClasses), C.addClass(A.sTable), ("" !== D.oScroll.sX || "" !== D.oScroll.sY) && (D.oScroll.iBarWidth = Tt()), D.oScroll.sX === !0 && (D.oScroll.sX = "100%"), D.iInitDisplayStart === n && (D.iInitDisplayStart = m.iDisplayStart, D._iDisplayStart = m.iDisplayStart), null !== m.iDeferLoading) {
                    D.bDeferLoading = !0;
                    var I = i.isArray(m.iDeferLoading);
                    D._iRecordsDisplay = I ? m.iDeferLoading[0] : m.iDeferLoading, D._iRecordsTotal = I ? m.iDeferLoading[1] : m.iDeferLoading
                }
                var F = D.oLanguage;
                i.extend(!0, F, m.oLanguage), "" !== F.sUrl && (i.ajax({
                    dataType: "json",
                    url: F.sUrl,
                    success: function(t) {
                        s(t), o(x.oLanguage, t), i.extend(!0, F, t), at(D)
                    },
                    error: function() {
                        at(D)
                    }
                }), $ = !0), null === m.asStripeClasses && (D.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
                var k = D.asStripeClasses,
                    N = C.children("tbody").find("tr").eq(0); - 1 !== i.inArray(!0, i.map(k, function(t, e) {
                    return N.hasClass(t)
                })) && (i("tbody tr", this).removeClass(k.join(" ")), D.asDestroyStripes = k.slice());
                var O, L = [],
                    J = this.getElementsByTagName("thead");
                if (0 !== J.length && (H(D.aoHeader, J[0]), L = W(D)), null === m.aoColumns)
                    for (O = [], g = 0, f = L.length; f > g; g++) O.push(null);
                else O = m.aoColumns;
                for (g = 0, f = O.length; f > g; g++) h(D, L ? L[g] : null);
                if (b(D, m.aoColumnDefs, O, function(t, e) {
                        d(D, t, e)
                    }), N.length) {
                    var R = function(t, e) {
                        return null !== t.getAttribute("data-" + e) ? e : null
                    };
                    i.each(P(D, N[0]).cells, function(t, e) {
                        var i = D.aoColumns[t];
                        if (i.mData === t) {
                            var r = R(e, "sort") || R(e, "order"),
                                o = R(e, "filter") || R(e, "search");
                            (null !== r || null !== o) && (i.mData = {
                                _: t + ".display",
                                sort: null !== r ? t + ".@data-" + r : n,
                                type: null !== r ? t + ".@data-" + r : n,
                                filter: null !== o ? t + ".@data-" + o : n
                            }, d(D, t))
                        }
                    })
                }
                var M = D.oFeatures;
                if (m.bStateSave && (M.bStateSave = !0, Nt(D, m), jt(D, "aoDrawCallback", Pt, "state_save")), m.aaSorting === n) {
                    var j = D.aaSorting;
                    for (g = 0, f = j.length; f > g; g++) j[g][1] = D.aoColumns[g].asSorting[0]
                }
                Ft(D), M.bSort && jt(D, "aoDrawCallback", function() {
                    if (D.bSorted) {
                        var t = _t(D),
                            e = {};
                        i.each(t, function(t, n) {
                            e[n.src] = n.dir
                        }), Ht(D, null, "order", [D, t, e]), Dt(D)
                    }
                }), jt(D, "aoDrawCallback", function() {
                    (D.bSorted || "ssp" === qt(D) || M.bDeferRender) && Ft(D)
                }, "sc"), u(D);
                var B = C.children("caption").each(function() {
                        this._captionSide = C.css("caption-side")
                    }),
                    q = C.children("thead");
                0 === q.length && (q = i("<thead/>").appendTo(this)), D.nTHead = q[0];
                var z = C.children("tbody");
                0 === z.length && (z = i("<tbody/>").appendTo(this)), D.nTBody = z[0];
                var U = C.children("tfoot");
                if (0 === U.length && B.length > 0 && ("" !== D.oScroll.sX || "" !== D.oScroll.sY) && (U = i("<tfoot/>").appendTo(this)), 0 === U.length || 0 === U.children().length ? C.addClass(A.sNoFooter) : U.length > 0 && (D.nTFoot = U[0], H(D.aoFooter, D.nTFoot)), m.aaData)
                    for (g = 0; g < m.aaData.length; g++) y(D, m.aaData[g]);
                else(D.bDeferLoading || "dom" == qt(D)) && w(D, i(D.nTBody).children("tr"));
                D.aiDisplay = D.aiDisplayMaster.slice(), D.bInitialised = !0, $ === !1 && at(D)
            }), e = null, this
        };
        var Se = [],
            Te = Array.prototype,
            _e = function(t) {
                var e, n, r = Gt.settings,
                    o = i.map(r, function(t, e) {
                        return t.nTable
                    });
                return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? (e = i.inArray(t, o), -1 !== e ? [r[e]] : null) : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? n = i(t) : t instanceof i && (n = t), n ? n.map(function(t) {
                    return e = i.inArray(this, o), -1 !== e ? r[e] : null
                }).toArray() : void 0) : []
            };
        Qt = function(t, e) {
            if (!this instanceof Qt) throw "DT API must be constructed as a new object";
            var n = [],
                r = function(t) {
                    var e = _e(t);
                    e && n.push.apply(n, e)
                };
            if (i.isArray(t))
                for (var o = 0, s = t.length; s > o; o++) r(t[o]);
            else r(t);
            this.context = ve(n), e && this.push.apply(this, e.toArray ? e.toArray() : e), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Qt.extend(this, this, Se)
        }, Gt.Api = Qt, Qt.prototype = {
            concat: Te.concat,
            context: [],
            each: function(t) {
                for (var e = 0, n = this.length; n > e; e++) t.call(this, this[e], e, this);
                return this
            },
            eq: function(t) {
                var e = this.context;
                return e.length > t ? new Qt(e[t], this[t]) : null
            },
            filter: function(t) {
                var e = [];
                if (Te.filter) e = Te.filter.call(this, t, this);
                else
                    for (var n = 0, i = this.length; i > n; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                return new Qt(this.context, e)
            },
            flatten: function() {
                var t = [];
                return new Qt(this.context, t.concat.apply(t, this.toArray()))
            },
            join: Te.join,
            indexOf: Te.indexOf || function(t, e) {
                for (var n = e || 0, i = this.length; i > n; n++)
                    if (this[n] === t) return n;
                return -1
            },
            iterator: function(t, e, i, r) {
                var o, s, a, l, u, c, h, d, f = [],
                    p = this.context,
                    m = this.selector;
                for ("string" == typeof t && (r = i, i = e, e = t, t = !1), s = 0, a = p.length; a > s; s++) {
                    var g = new Qt(p[s]);
                    if ("table" === e) o = i.call(g, p[s], s), o !== n && f.push(o);
                    else if ("columns" === e || "rows" === e) o = i.call(g, p[s], this[s], s), o !== n && f.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (h = this[s], "column-rows" === e && (c = ke(p[s], m.opts)), l = 0, u = h.length; u > l; l++) d = h[l], o = "cell" === e ? i.call(g, p[s], d.row, d.column, s, l) : i.call(g, p[s], d, s, l, c), o !== n && f.push(o)
                }
                if (f.length || r) {
                    var v = new Qt(p, t ? f.concat.apply([], f) : f),
                        $ = v.selector;
                    return $.rows = m.rows, $.cols = m.cols, $.opts = m.opts, v
                }
                return this
            },
            lastIndexOf: Te.lastIndexOf || function(t, e) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(t) {
                var e = [];
                if (Te.map) e = Te.map.call(this, t, this);
                else
                    for (var n = 0, i = this.length; i > n; n++) e.push(t.call(this, this[n], n));
                return new Qt(this.context, e)
            },
            pluck: function(t) {
                return this.map(function(e) {
                    return e[t]
                })
            },
            pop: Te.pop,
            push: Te.push,
            reduce: Te.reduce || function(t, e) {
                return c(this, t, e, 0, this.length, 1)
            },
            reduceRight: Te.reduceRight || function(t, e) {
                return c(this, t, e, this.length - 1, -1, -1)
            },
            reverse: Te.reverse,
            selector: null,
            shift: Te.shift,
            sort: Te.sort,
            splice: Te.splice,
            toArray: function() {
                return Te.slice.call(this)
            },
            to$: function() {
                return i(this)
            },
            toJQuery: function() {
                return i(this)
            },
            unique: function() {
                return new Qt(this.context, ve(this))
            },
            unshift: Te.unshift
        }, Qt.extend = function(t, e, n) {
            if (n.length && e && (e instanceof Qt || e.__dt_wrapper)) {
                var r, o, s, a = function(t, e, n) {
                    return function() {
                        var i = e.apply(t, arguments);
                        return Qt.extend(i, i, n.methodExt),
                            i
                    }
                };
                for (r = 0, o = n.length; o > r; r++) s = n[r], e[s.name] = "function" == typeof s.val ? a(t, s.val, s) : i.isPlainObject(s.val) ? {} : s.val, e[s.name].__dt_wrapper = !0, Qt.extend(t, e[s.name], s.propExt)
            }
        }, Qt.register = Zt = function(t, e) {
            if (i.isArray(t))
                for (var n = 0, r = t.length; r > n; n++) Qt.register(t[n], e);
            else {
                var o, s, a, l, u = t.split("."),
                    c = Se,
                    h = function(t, e) {
                        for (var n = 0, i = t.length; i > n; n++)
                            if (t[n].name === e) return t[n];
                        return null
                    };
                for (o = 0, s = u.length; s > o; o++) {
                    l = -1 !== u[o].indexOf("()"), a = l ? u[o].replace("()", "") : u[o];
                    var d = h(c, a);
                    d || (d = {
                        name: a,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, c.push(d)), o === s - 1 ? d.val = e : c = l ? d.methodExt : d.propExt
                }
            }
        }, Qt.registerPlural = Yt = function(t, e, r) {
            Qt.register(t, r), Qt.register(e, function() {
                var t = r.apply(this, arguments);
                return t === this ? this : t instanceof Qt ? t.length ? i.isArray(t[0]) ? new Qt(t.context, t[0]) : t[0] : n : t
            })
        };
        var Ee = function(t, e) {
            if ("number" == typeof t) return [e[t]];
            var n = i.map(e, function(t, e) {
                return t.nTable
            });
            return i(n).filter(t).map(function(t) {
                var r = i.inArray(this, n);
                return e[r]
            }).toArray()
        };
        Zt("tables()", function(t) {
            return t ? new Qt(Ee(t, this.context)) : this
        }), Zt("table()", function(t) {
            var e = this.tables(t),
                n = e.context;
            return n.length ? new Qt(n[0]) : e
        }), Yt("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(t) {
                return t.nTable
            }, 1)
        }), Yt("tables().body()", "table().body()", function() {
            return this.iterator("table", function(t) {
                return t.nTBody
            }, 1)
        }), Yt("tables().header()", "table().header()", function() {
            return this.iterator("table", function(t) {
                return t.nTHead
            }, 1)
        }), Yt("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(t) {
                return t.nTFoot
            }, 1)
        }), Yt("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(t) {
                return t.nTableWrapper
            }, 1)
        }), Zt("draw()", function(t) {
            return this.iterator("table", function(e) {
                M(e, t === !1)
            })
        }), Zt("page()", function(t) {
            return t === n ? this.page.info().page : this.iterator("table", function(e) {
                dt(e, t)
            })
        }), Zt("page.info()", function(t) {
            if (0 === this.context.length) return n;
            var e = this.context[0],
                i = e._iDisplayStart,
                r = e._iDisplayLength,
                o = e.fnRecordsDisplay(),
                s = -1 === r;
            return {
                page: s ? 0 : Math.floor(i / r),
                pages: s ? 1 : Math.ceil(o / r),
                start: i,
                end: e.fnDisplayEnd(),
                length: r,
                recordsTotal: e.fnRecordsTotal(),
                recordsDisplay: o
            }
        }), Zt("page.len()", function(t) {
            return t === n ? 0 !== this.context.length ? this.context[0]._iDisplayLength : n : this.iterator("table", function(e) {
                ut(e, t)
            })
        });
        var De = function(t, e, n) {
            if (n) {
                var i = new Qt(t);
                i.one("draw", function() {
                    n(i.ajax.json())
                })
            }
            "ssp" == qt(t) ? M(t, e) : (pt(t, !0), B(t, [], function(n) {
                I(t);
                for (var i = V(t, n), r = 0, o = i.length; o > r; r++) y(t, i[r]);
                M(t, e), pt(t, !1)
            }))
        };
        Zt("ajax.json()", function() {
            var t = this.context;
            return t.length > 0 ? t[0].json : void 0
        }), Zt("ajax.params()", function() {
            var t = this.context;
            return t.length > 0 ? t[0].oAjaxData : void 0
        }), Zt("ajax.reload()", function(t, e) {
            return this.iterator("table", function(n) {
                De(n, e === !1, t)
            })
        }), Zt("ajax.url()", function(t) {
            var e = this.context;
            return t === n ? 0 === e.length ? n : (e = e[0], e.ajax ? i.isPlainObject(e.ajax) ? e.ajax.url : e.ajax : e.sAjaxSource) : this.iterator("table", function(e) {
                i.isPlainObject(e.ajax) ? e.ajax.url = t : e.ajax = t
            })
        }), Zt("ajax.url().load()", function(t, e) {
            return this.iterator("table", function(n) {
                De(n, e === !1, t)
            })
        });
        var Ae = function(t, e) {
                var r, o, s, a, l, u, c = [],
                    h = typeof t;
                for (t && "string" !== h && "function" !== h && t.length !== n || (t = [t]), s = 0, a = t.length; a > s; s++)
                    for (o = t[s] && t[s].split ? t[s].split(",") : [t[s]], l = 0, u = o.length; u > l; l++) r = e("string" == typeof o[l] ? i.trim(o[l]) : o[l]), r && r.length && c.push.apply(c, r);
                return c
            },
            Ie = function(t) {
                return t || (t = {}), t.filter && !t.search && (t.search = t.filter), {
                    search: t.search || "none",
                    order: t.order || "current",
                    page: t.page || "all"
                }
            },
            Fe = function(t) {
                for (var e = 0, n = t.length; n > e; e++)
                    if (t[e].length > 0) return t[0] = t[e], t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            },
            ke = function(t, e) {
                var n, r, o, s = [],
                    a = t.aiDisplay,
                    l = t.aiDisplayMaster,
                    u = e.search,
                    c = e.order,
                    h = e.page;
                if ("ssp" == qt(t)) return "removed" === u ? [] : pe(0, l.length);
                if ("current" == h)
                    for (n = t._iDisplayStart, r = t.fnDisplayEnd(); r > n; n++) s.push(a[n]);
                else if ("current" == c || "applied" == c) s = "none" == u ? l.slice() : "applied" == u ? a.slice() : i.map(l, function(t, e) {
                    return -1 === i.inArray(t, a) ? t : null
                });
                else if ("index" == c || "original" == c)
                    for (n = 0, r = t.aoData.length; r > n; n++) "none" == u ? s.push(n) : (o = i.inArray(n, a), (-1 === o && "removed" == u || o >= 0 && "applied" == u) && s.push(n));
                return s
            },
            Pe = function(t, e, n) {
                return Ae(e, function(e) {
                    var r = ae(e);
                    if (null !== r && !n) return [r];
                    var o = ke(t, n);
                    if (null !== r && -1 !== i.inArray(r, o)) return [r];
                    if (!e) return o;
                    if ("function" == typeof e) return i.map(o, function(n) {
                        var i = t.aoData[n];
                        return e(n, i._aData, i.nTr) ? n : null
                    });
                    var s = me(fe(t.aoData, o, "nTr"));
                    return e.nodeName && -1 !== i.inArray(e, s) ? [e._DT_RowIndex] : i(s).filter(e).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                })
            };
        Zt("rows()", function(t, e) {
            t === n ? t = "" : i.isPlainObject(t) && (e = t, t = ""), e = Ie(e);
            var r = this.iterator("table", function(n) {
                return Pe(n, t, e)
            }, 1);
            return r.selector.rows = t, r.selector.opts = e, r
        }), Zt("rows().nodes()", function() {
            return this.iterator("row", function(t, e) {
                return t.aoData[e].nTr || n
            }, 1)
        }), Zt("rows().data()", function() {
            return this.iterator(!0, "rows", function(t, e) {
                return fe(t.aoData, e, "_aData")
            }, 1)
        }), Yt("rows().cache()", "row().cache()", function(t) {
            return this.iterator("row", function(e, n) {
                var i = e.aoData[n];
                return "search" === t ? i._aFilterData : i._aSortData
            }, 1)
        }), Yt("rows().invalidate()", "row().invalidate()", function(t) {
            return this.iterator("row", function(e, n) {
                k(e, n, t)
            })
        }), Yt("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(t, e) {
                return e
            }, 1)
        }), Yt("rows().remove()", "row().remove()", function() {
            var t = this;
            return this.iterator("row", function(e, n, r) {
                var o = e.aoData;
                o.splice(n, 1);
                for (var s = 0, a = o.length; a > s; s++) null !== o[s].nTr && (o[s].nTr._DT_RowIndex = s);
                i.inArray(n, e.aiDisplay);
                F(e.aiDisplayMaster, n), F(e.aiDisplay, n), F(t[r], n, !1), Wt(e)
            })
        }), Zt("rows.add()", function(t) {
            var e = this.iterator("table", function(e) {
                    var n, i, r, o = [];
                    for (i = 0, r = t.length; r > i; i++) n = t[i], n.nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(w(e, n)[0]) : o.push(y(e, n));
                    return o
                }, 1),
                n = this.rows(-1);
            return n.pop(), n.push.apply(n, e.toArray()), n
        }), Zt("row()", function(t, e) {
            return Fe(this.rows(t, e))
        }), Zt("row().data()", function(t) {
            var e = this.context;
            return t === n ? e.length && this.length ? e[0].aoData[this[0]]._aData : n : (e[0].aoData[this[0]]._aData = t, k(e[0], this[0], "data"), this)
        }), Zt("row().node()", function() {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]].nTr || null : null
        }), Zt("row.add()", function(t) {
            t instanceof i && t.length && (t = t[0]);
            var e = this.iterator("table", function(e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? w(e, t)[0] : y(e, t)
            });
            return this.row(e[0])
        });
        var Ne = function(t, e, n, r) {
                var o = [],
                    s = function(e, n) {
                        if (i.isArray(e) || e instanceof i)
                            for (var r = 0, a = e.length; a > r; r++) s(e[r], n);
                        else if (e.nodeName && "tr" === e.nodeName.toLowerCase()) o.push(e);
                        else {
                            var l = i("<tr><td/></tr>").addClass(n);
                            i("td", l).addClass(n).html(e)[0].colSpan = g(t), o.push(l[0])
                        }
                    };
                s(n, r), e._details && e._details.remove(), e._details = i(o), e._detailsShow && e._details.insertAfter(e.nTr)
            },
            Oe = function(t, e) {
                var i = t.context;
                if (i.length) {
                    var r = i[0].aoData[e !== n ? e : t[0]];
                    r._details && (r._details.remove(), r._detailsShow = n, r._details = n)
                }
            },
            Le = function(t, e) {
                var n = t.context;
                if (n.length && t.length) {
                    var i = n[0].aoData[t[0]];
                    i._details && (i._detailsShow = e, e ? i._details.insertAfter(i.nTr) : i._details.detach(), Je(n[0]))
                }
            },
            Je = function(t) {
                var e = new Qt(t),
                    n = ".dt.DT_details",
                    i = "draw" + n,
                    r = "column-visibility" + n,
                    o = "destroy" + n,
                    s = t.aoData;
                e.off(i + " " + r + " " + o), de(s, "_details").length > 0 && (e.on(i, function(n, i) {
                    t === i && e.rows({
                        page: "current"
                    }).eq(0).each(function(t) {
                        var e = s[t];
                        e._detailsShow && e._details.insertAfter(e.nTr)
                    })
                }), e.on(r, function(e, n, i, r) {
                    if (t === n)
                        for (var o, a = g(n), l = 0, u = s.length; u > l; l++) o = s[l], o._details && o._details.children("td[colspan]").attr("colspan", a)
                }), e.on(o, function(n, i) {
                    if (t === i)
                        for (var r = 0, o = s.length; o > r; r++) s[r]._details && Oe(e, r)
                }))
            },
            Re = "",
            Me = Re + "row().child",
            je = Me + "()";
        Zt(je, function(t, e) {
            var i = this.context;
            return t === n ? i.length && this.length ? i[0].aoData[this[0]]._details : n : (t === !0 ? this.child.show() : t === !1 ? Oe(this) : i.length && this.length && Ne(i[0], i[0].aoData[this[0]], t, e), this)
        }), Zt([Me + ".show()", je + ".show()"], function(t) {
            return Le(this, !0), this
        }), Zt([Me + ".hide()", je + ".hide()"], function() {
            return Le(this, !1), this
        }), Zt([Me + ".remove()", je + ".remove()"], function() {
            return Oe(this), this
        }), Zt(Me + ".isShown()", function() {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var He = /^(.+):(name|visIdx|visible)$/,
            We = function(t, e, n, i, r) {
                for (var o = [], s = 0, a = r.length; a > s; s++) o.push(S(t, r[s], e));
                return o
            },
            Be = function(t, e, n) {
                var r = t.aoColumns,
                    o = de(r, "sName"),
                    s = de(r, "nTh");
                return Ae(e, function(e) {
                    var a = ae(e);
                    if ("" === e) return pe(r.length);
                    if (null !== a) return [a >= 0 ? a : r.length + a];
                    if ("function" == typeof e) {
                        var l = ke(t, n);
                        return i.map(r, function(n, i) {
                            return e(i, We(t, i, 0, 0, l), s[i]) ? i : null
                        })
                    }
                    var u = "string" == typeof e ? e.match(He) : "";
                    if (!u) return i(s).filter(e).map(function() {
                        return i.inArray(this, s)
                    }).toArray();
                    switch (u[2]) {
                        case "visIdx":
                        case "visible":
                            var c = parseInt(u[1], 10);
                            if (0 > c) {
                                var h = i.map(r, function(t, e) {
                                    return t.bVisible ? e : null
                                });
                                return [h[h.length + c]]
                            }
                            return [p(t, c)];
                        case "name":
                            return i.map(o, function(t, e) {
                                return t === u[1] ? e : null
                            })
                    }
                })
            },
            qe = function(t, e, r, o) {
                var s, a, l, u, c = t.aoColumns,
                    h = c[e],
                    d = t.aoData;
                if (r === n) return h.bVisible;
                if (h.bVisible !== r) {
                    if (r) {
                        var p = i.inArray(!0, de(c, "bVisible"), e + 1);
                        for (a = 0, l = d.length; l > a; a++) u = d[a].nTr, s = d[a].anCells, u && u.insertBefore(s[e], s[p] || null)
                    } else i(de(t.aoData, "anCells", e)).detach();
                    h.bVisible = r, J(t, t.aoHeader), J(t, t.aoFooter), (o === n || o) && (f(t), (t.oScroll.sX || t.oScroll.sY) && gt(t)), Ht(t, null, "column-visibility", [t, e, r]), Pt(t)
                }
            };
        Zt("columns()", function(t, e) {
            t === n ? t = "" : i.isPlainObject(t) && (e = t, t = ""), e = Ie(e);
            var r = this.iterator("table", function(n) {
                return Be(n, t, e)
            }, 1);
            return r.selector.cols = t, r.selector.opts = e, r
        }), Yt("columns().header()", "column().header()", function(t, e) {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTh
            }, 1)
        }), Yt("columns().footer()", "column().footer()", function(t, e) {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTf
            }, 1)
        }), Yt("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", We, 1)
        }), Yt("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].mData
            }, 1)
        }), Yt("columns().cache()", "column().cache()", function(t) {
            return this.iterator("column-rows", function(e, n, i, r, o) {
                return fe(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n)
            }, 1)
        }), Yt("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(t, e, n, i, r) {
                return fe(t.aoData, r, "anCells", e)
            }, 1)
        }), Yt("columns().visible()", "column().visible()", function(t, e) {
            return this.iterator("column", function(i, r) {
                return t === n ? i.aoColumns[r].bVisible : void qe(i, r, t, e)
            })
        }), Yt("columns().indexes()", "column().index()", function(t) {
            return this.iterator("column", function(e, n) {
                return "visible" === t ? m(e, n) : n
            }, 1)
        }), Zt("columns.adjust()", function() {
            return this.iterator("table", function(t) {
                f(t)
            }, 1)
        }), Zt("column.index()", function(t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return p(n, e);
                if ("fromData" === t || "toVisible" === t) return m(n, e)
            }
        }), Zt("column()", function(t, e) {
            return Fe(this.columns(t, e))
        });
        var ze = function(t, e, r) {
            var o, s, a, l, u, c, h, d = t.aoData,
                f = ke(t, r),
                p = me(fe(d, f, "anCells")),
                m = i([].concat.apply([], p)),
                g = t.aoColumns.length;
            return Ae(e, function(e) {
                var r = "function" == typeof e;
                if (null === e || e === n || r) {
                    for (s = [], a = 0, l = f.length; l > a; a++)
                        for (o = f[a], u = 0; g > u; u++) c = {
                            row: o,
                            column: u
                        }, r ? (h = t.aoData[o], e(c, S(t, o, u), h.anCells[u]) && s.push(c)) : s.push(c);
                    return s
                }
                return i.isPlainObject(e) ? [e] : m.filter(e).map(function(t, e) {
                    return o = e.parentNode._DT_RowIndex, {
                        row: o,
                        column: i.inArray(e, d[o].anCells)
                    }
                }).toArray()
            })
        };
        Zt("cells()", function(t, e, r) {
                if (i.isPlainObject(t) && (t.row === n ? (r = t, t = null) : (r = e, e = null)), i.isPlainObject(e) && (r = e, e = null), null === e || e === n) return this.iterator("table", function(e) {
                    return ze(e, t, Ie(r))
                });
                var o, s, a, l, u, c = this.columns(e, r),
                    h = this.rows(t, r),
                    d = this.iterator("table", function(t, e) {
                        for (o = [], s = 0, a = h[e].length; a > s; s++)
                            for (l = 0, u = c[e].length; u > l; l++) o.push({
                                row: h[e][s],
                                column: c[e][l]
                            });
                        return o
                    }, 1);
                return i.extend(d.selector, {
                    cols: e,
                    rows: t,
                    opts: r
                }), d
            }), Yt("cells().nodes()", "cell().node()", function() {
                return this.iterator("cell", function(t, e, i) {
                    var r = t.aoData[e].anCells;
                    return r ? r[i] : n
                }, 1)
            }), Zt("cells().data()", function() {
                return this.iterator("cell", function(t, e, n) {
                    return S(t, e, n)
                }, 1)
            }), Yt("cells().cache()", "cell().cache()", function(t) {
                return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, n, i) {
                    return e.aoData[n][t][i]
                }, 1)
            }), Yt("cells().render()", "cell().render()", function(t) {
                return this.iterator("cell", function(e, n, i) {
                    return S(e, n, i, t)
                }, 1)
            }), Yt("cells().indexes()", "cell().index()", function() {
                return this.iterator("cell", function(t, e, n) {
                    return {
                        row: e,
                        column: n,
                        columnVisible: m(t, n)
                    }
                }, 1)
            }), Yt("cells().invalidate()", "cell().invalidate()", function(t) {
                return this.iterator("cell", function(e, n, i) {
                    k(e, n, t, i)
                })
            }), Zt("cell()", function(t, e, n) {
                return Fe(this.cells(t, e, n))
            }), Zt("cell().data()", function(t) {
                var e = this.context,
                    i = this[0];
                return t === n ? e.length && i.length ? S(e[0], i[0].row, i[0].column) : n : (T(e[0], i[0].row, i[0].column, t), k(e[0], i[0].row, "data", i[0].column), this)
            }), Zt("order()", function(t, e) {
                var r = this.context;
                return t === n ? 0 !== r.length ? r[0].aaSorting : n : ("number" == typeof t ? t = [
                    [t, e]
                ] : i.isArray(t[0]) || (t = Array.prototype.slice.call(arguments)), this.iterator("table", function(e) {
                    e.aaSorting = t.slice()
                }))
            }), Zt("order.listener()", function(t, e, n) {
                return this.iterator("table", function(i) {
                    It(i, t, e, n)
                })
            }), Zt(["columns().order()", "column().order()"], function(t) {
                var e = this;
                return this.iterator("table", function(n, r) {
                    var o = [];
                    i.each(e[r], function(e, n) {
                        o.push([n, t])
                    }), n.aaSorting = o
                })
            }), Zt("search()", function(t, e, r, o) {
                var s = this.context;
                return t === n ? 0 !== s.length ? s[0].oPreviousSearch.sSearch : n : this.iterator("table", function(n) {
                    n.oFeatures.bFilter && X(n, i.extend({}, n.oPreviousSearch, {
                        sSearch: t + "",
                        bRegex: null === e ? !1 : e,
                        bSmart: null === r ? !0 : r,
                        bCaseInsensitive: null === o ? !0 : o
                    }), 1)
                })
            }), Yt("columns().search()", "column().search()", function(t, e, r, o) {
                return this.iterator("column", function(s, a) {
                    var l = s.aoPreSearchCols;
                    return t === n ? l[a].sSearch : void(s.oFeatures.bFilter && (i.extend(l[a], {
                        sSearch: t + "",
                        bRegex: null === e ? !1 : e,
                        bSmart: null === r ? !0 : r,
                        bCaseInsensitive: null === o ? !0 : o
                    }), X(s, s.oPreviousSearch, 1)))
                })
            }), Zt("state()", function() {
                return this.context.length ? this.context[0].oSavedState : null
            }), Zt("state.clear()", function() {
                return this.iterator("table", function(t) {
                    t.fnStateSaveCallback.call(t.oInstance, t, {})
                })
            }), Zt("state.loaded()", function() {
                return this.context.length ? this.context[0].oLoadedState : null
            }), Zt("state.save()", function() {
                return this.iterator("table", function(t) {
                    Pt(t)
                })
            }), Gt.versionCheck = Gt.fnVersionCheck = function(t) {
                for (var e, n, i = Gt.version.split("."), r = t.split("."), o = 0, s = r.length; s > o; o++)
                    if (e = parseInt(i[o], 10) || 0, n = parseInt(r[o], 10) || 0, e !== n) return e > n;
                return !0
            }, Gt.isDataTable = Gt.fnIsDataTable = function(t) {
                var e = i(t).get(0),
                    n = !1;
                return i.each(Gt.settings, function(t, r) {
                    var o = r.nScrollHead ? i("table", r.nScrollHead)[0] : null,
                        s = r.nScrollFoot ? i("table", r.nScrollFoot)[0] : null;
                    (r.nTable === e || o === e || s === e) && (n = !0)
                }), n
            }, Gt.tables = Gt.fnTables = function(t) {
                return i.map(Gt.settings, function(e) {
                    return !t || t && i(e.nTable).is(":visible") ? e.nTable : void 0
                })
            }, Gt.util = {
                throttle: bt,
                escapeRegex: tt
            }, Gt.camelToHungarian = o, Zt("$()", function(t, e) {
                var n = this.rows(e).nodes(),
                    r = i(n);
                return i([].concat(r.filter(t).toArray(), r.find(t).toArray()))
            }), i.each(["on", "one", "off"], function(t, e) {
                Zt(e + "()", function() {
                    var t = Array.prototype.slice.call(arguments);
                    t[0].match(/\.dt\b/) || (t[0] += ".dt");
                    var n = i(this.tables().nodes());
                    return n[e].apply(n, t), this
                })
            }), Zt("clear()", function() {
                return this.iterator("table", function(t) {
                    I(t)
                })
            }), Zt("settings()", function() {
                return new Qt(this.context, this.context)
            }), Zt("init()", function() {
                var t = this.context;
                return t.length ? t[0].oInit : null
            }), Zt("data()", function() {
                return this.iterator("table", function(t) {
                    return de(t.aoData, "_aData")
                }).flatten()
            }), Zt("destroy()", function(e) {
                return e = e || !1, this.iterator("table", function(n) {
                    var r, o = n.nTableWrapper.parentNode,
                        s = n.oClasses,
                        a = n.nTable,
                        l = n.nTBody,
                        u = n.nTHead,
                        c = n.nTFoot,
                        h = i(a),
                        d = i(l),
                        f = i(n.nTableWrapper),
                        p = i.map(n.aoData, function(t) {
                            return t.nTr
                        });
                    n.bDestroying = !0, Ht(n, "aoDestroyCallback", "destroy", [n]), e || new Qt(n).columns().visible(!0), f.unbind(".DT").find(":not(tbody *)").unbind(".DT"), i(t).unbind(".DT-" + n.sInstance), a != u.parentNode && (h.children("thead").detach(), h.append(u)), c && a != c.parentNode && (h.children("tfoot").detach(), h.append(c)), h.detach(), f.detach(), n.aaSorting = [], n.aaSortingFixed = [], Ft(n), i(p).removeClass(n.asStripeClasses.join(" ")), i("th, td", u).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone), n.bJUI && (i("th span." + s.sSortIcon + ", td span." + s.sSortIcon, u).detach(), i("th, td", u).each(function() {
                        var t = i("div." + s.sSortJUIWrapper, this);
                        i(this).append(t.contents()), t.detach()
                    })), !e && o && o.insertBefore(a, n.nTableReinsertBefore), d.children().detach(), d.append(p), h.css("width", n.sDestroyWidth).removeClass(s.sTable), r = n.asDestroyStripes.length, r && d.children().each(function(t) {
                        i(this).addClass(n.asDestroyStripes[t % r])
                    });
                    var m = i.inArray(n, Gt.settings); - 1 !== m && Gt.settings.splice(m, 1)
                })
            }), i.each(["column", "row", "cell"], function(t, e) {
                Zt(e + "s().every()", function(t) {
                    return this.iterator(e, function(n, i, r) {
                        t.call(new Qt(n)[e](i, r))
                    })
                })
            }), Gt.version = "1.10.6", Gt.settings = [], Gt.models = {}, Gt.models.oSearch = {
                bCaseInsensitive: !0,
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            }, Gt.models.oRow = {
                nTr: null,
                anCells: null,
                _aData: [],
                _aSortData: null,
                _aFilterData: null,
                _sFilterRow: null,
                _sRowStripe: "",
                src: null
            }, Gt.models.oColumn = {
                idx: null,
                aDataSort: null,
                asSorting: null,
                bSearchable: null,
                bSortable: null,
                bVisible: null,
                _sManualType: null,
                _bAttrSrc: !1,
                fnCreatedCell: null,
                fnGetData: null,
                fnSetData: null,
                mData: null,
                mRender: null,
                nTh: null,
                nTf: null,
                sClass: null,
                sContentPadding: null,
                sDefaultContent: null,
                sName: null,
                sSortDataType: "std",
                sSortingClass: null,
                sSortingClassJUI: null,
                sTitle: null,
                sType: null,
                sWidth: null,
                sWidthOrig: null
            }, Gt.defaults = {
                aaData: null,
                aaSorting: [
                    [0, "asc"]
                ],
                aaSortingFixed: [],
                ajax: null,
                aLengthMenu: [10, 25, 50, 100],
                aoColumns: null,
                aoColumnDefs: null,
                aoSearchCols: [],
                asStripeClasses: null,
                bAutoWidth: !0,
                bDeferRender: !1,
                bDestroy: !1,
                bFilter: !0,
                bInfo: !0,
                bJQueryUI: !1,
                bLengthChange: !0,
                bPaginate: !0,
                bProcessing: !1,
                bRetrieve: !1,
                bScrollCollapse: !1,
                bServerSide: !1,
                bSort: !0,
                bSortMulti: !0,
                bSortCellsTop: !1,
                bSortClasses: !0,
                bStateSave: !1,
                fnCreatedRow: null,
                fnDrawCallback: null,
                fnFooterCallback: null,
                fnFormatNumber: function(t) {
                    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
                },
                fnHeaderCallback: null,
                fnInfoCallback: null,
                fnInitComplete: null,
                fnPreDrawCallback: null,
                fnRowCallback: null,
                fnServerData: null,
                fnServerParams: null,
                fnStateLoadCallback: function(t) {
                    try {
                        return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                    } catch (e) {}
                },
                fnStateLoadParams: null,
                fnStateLoaded: null,
                fnStateSaveCallback: function(t, e) {
                    try {
                        (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                    } catch (n) {}
                },
                fnStateSaveParams: null,
                iStateDuration: 7200,
                iDeferLoading: null,
                iDisplayLength: 10,
                iDisplayStart: 0,
                iTabIndex: 0,
                oClasses: {},
                oLanguage: {
                    oAria: {
                        sSortAscending: ": activate to sort column ascending",
                        sSortDescending: ": activate to sort column descending"
                    },
                    oPaginate: {
                        sFirst: "First",
                        sLast: "Last",
                        sNext: "Next",
                        sPrevious: "Previous"
                    },
                    sEmptyTable: "No data available in table",
                    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                    sInfoEmpty: "Showing 0 to 0 of 0 entries",
                    sInfoFiltered: "(filtered from _MAX_ total entries)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ",",
                    sLengthMenu: "Show _MENU_ entries",
                    sLoadingRecords: "Loading...",
                    sProcessing: "Processing...",
                    sSearch: "Search:",
                    sSearchPlaceholder: "",
                    sUrl: "",
                    sZeroRecords: "No matching records found"
                },
                oSearch: i.extend({}, Gt.models.oSearch),
                sAjaxDataProp: "data",
                sAjaxSource: null,
                sDom: "lfrtip",
                searchDelay: null,
                sPaginationType: "simple_numbers",
                sScrollX: "",
                sScrollXInner: "",
                sScrollY: "",
                sServerMethod: "GET",
                renderer: null
            }, r(Gt.defaults), Gt.defaults.column = {
                aDataSort: null,
                iDataSort: -1,
                asSorting: ["asc", "desc"],
                bSearchable: !0,
                bSortable: !0,
                bVisible: !0,
                fnCreatedCell: null,
                mData: null,
                mRender: null,
                sCellType: "td",
                sClass: "",
                sContentPadding: "",
                sDefaultContent: null,
                sName: "",
                sSortDataType: "std",
                sTitle: null,
                sType: null,
                sWidth: null
            }, r(Gt.defaults.column), Gt.models.oSettings = {
                oFeatures: {
                    bAutoWidth: null,
                    bDeferRender: null,
                    bFilter: null,
                    bInfo: null,
                    bLengthChange: null,
                    bPaginate: null,
                    bProcessing: null,
                    bServerSide: null,
                    bSort: null,
                    bSortMulti: null,
                    bSortClasses: null,
                    bStateSave: null
                },
                oScroll: {
                    bCollapse: null,
                    iBarWidth: 0,
                    sX: null,
                    sXInner: null,
                    sY: null
                },
                oLanguage: {
                    fnInfoCallback: null
                },
                oBrowser: {
                    bScrollOversize: !1,
                    bScrollbarLeft: !1
                },
                ajax: null,
                aanFeatures: [],
                aoData: [],
                aiDisplay: [],
                aiDisplayMaster: [],
                aoColumns: [],
                aoHeader: [],
                aoFooter: [],
                oPreviousSearch: {},
                aoPreSearchCols: [],
                aaSorting: null,
                aaSortingFixed: [],
                asStripeClasses: null,
                asDestroyStripes: [],
                sDestroyWidth: 0,
                aoRowCallback: [],
                aoHeaderCallback: [],
                aoFooterCallback: [],
                aoDrawCallback: [],
                aoRowCreatedCallback: [],
                aoPreDrawCallback: [],
                aoInitComplete: [],
                aoStateSaveParams: [],
                aoStateLoadParams: [],
                aoStateLoaded: [],
                sTableId: "",
                nTable: null,
                nTHead: null,
                nTFoot: null,
                nTBody: null,
                nTableWrapper: null,
                bDeferLoading: !1,
                bInitialised: !1,
                aoOpenRows: [],
                sDom: null,
                searchDelay: null,
                sPaginationType: "two_button",
                iStateDuration: 0,
                aoStateSave: [],
                aoStateLoad: [],
                oSavedState: null,
                oLoadedState: null,
                sAjaxSource: null,
                sAjaxDataProp: null,
                bAjaxDataGet: !0,
                jqXHR: null,
                json: n,
                oAjaxData: n,
                fnServerData: null,
                aoServerParams: [],
                sServerMethod: null,
                fnFormatNumber: null,
                aLengthMenu: null,
                iDraw: 0,
                bDrawing: !1,
                iDrawError: -1,
                _iDisplayLength: 10,
                _iDisplayStart: 0,
                _iRecordsTotal: 0,
                _iRecordsDisplay: 0,
                bJUI: null,
                oClasses: {},
                bFiltered: !1,
                bSorted: !1,
                bSortCellsTop: null,
                oInit: null,
                aoDestroyCallback: [],
                fnRecordsTotal: function() {
                    return "ssp" == qt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
                },
                fnRecordsDisplay: function() {
                    return "ssp" == qt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
                },
                fnDisplayEnd: function() {
                    var t = this._iDisplayLength,
                        e = this._iDisplayStart,
                        n = e + t,
                        i = this.aiDisplay.length,
                        r = this.oFeatures,
                        o = r.bPaginate;
                    return r.bServerSide ? o === !1 || -1 === t ? e + i : Math.min(e + t, this._iRecordsDisplay) : !o || n > i || -1 === t ? i : n
                },
                oInstance: null,
                sInstance: null,
                iTabIndex: 0,
                nScrollHead: null,
                nScrollFoot: null,
                aLastSort: [],
                oPlugins: {}
            }, Gt.ext = Xt = {
                buttons: {},
                classes: {},
                errMode: "alert",
                feature: [],
                search: [],
                internal: {},
                legacy: {
                    ajax: null
                },
                pager: {},
                renderer: {
                    pageButton: {},
                    header: {}
                },
                order: {},
                type: {
                    detect: [],
                    search: {},
                    order: {}
                },
                _unique: 0,
                fnVersionCheck: Gt.fnVersionCheck,
                iApiIndex: 0,
                oJUIClasses: {},
                sVersion: Gt.version
            }, i.extend(Xt, {
                afnFiltering: Xt.search,
                aTypes: Xt.type.detect,
                ofnSearch: Xt.type.search,
                oSort: Xt.type.order,
                afnSortData: Xt.order,
                aoFeatures: Xt.feature,
                oApi: Xt.internal,
                oStdClasses: Xt.classes,
                oPagination: Xt.pager
            }), i.extend(Gt.ext.classes, {
                sTable: "dataTable",
                sNoFooter: "no-footer",
                sPageButton: "paginate_button",
                sPageButtonActive: "current",
                sPageButtonDisabled: "disabled",
                sStripeOdd: "odd",
                sStripeEven: "even",
                sRowEmpty: "dataTables_empty",
                sWrapper: "dataTables_wrapper",
                sFilter: "dataTables_filter",
                sInfo: "dataTables_info",
                sPaging: "dataTables_paginate paging_",
                sLength: "dataTables_length",
                sProcessing: "dataTables_processing",
                sSortAsc: "sorting_asc",
                sSortDesc: "sorting_desc",
                sSortable: "sorting",
                sSortableAsc: "sorting_asc_disabled",
                sSortableDesc: "sorting_desc_disabled",
                sSortableNone: "sorting_disabled",
                sSortColumn: "sorting_",
                sFilterInput: "",
                sLengthSelect: "",
                sScrollWrapper: "dataTables_scroll",
                sScrollHead: "dataTables_scrollHead",
                sScrollHeadInner: "dataTables_scrollHeadInner",
                sScrollBody: "dataTables_scrollBody",
                sScrollFoot: "dataTables_scrollFoot",
                sScrollFootInner: "dataTables_scrollFootInner",
                sHeaderTH: "",
                sFooterTH: "",
                sSortJUIAsc: "",
                sSortJUIDesc: "",
                sSortJUI: "",
                sSortJUIAscAllowed: "",
                sSortJUIDescAllowed: "",
                sSortJUIWrapper: "",
                sSortIcon: "",
                sJUIHeader: "",
                sJUIFooter: ""
            }),
            function() {
                var t = "";
                t = "";
                var e = t + "ui-state-default",
                    n = t + "css_right ui-icon ui-icon-",
                    r = t + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
                i.extend(Gt.ext.oJUIClasses, Gt.ext.classes, {
                    sPageButton: "fg-button ui-button " + e,
                    sPageButtonActive: "ui-state-disabled",
                    sPageButtonDisabled: "ui-state-disabled",
                    sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                    sSortAsc: e + " sorting_asc",
                    sSortDesc: e + " sorting_desc",
                    sSortable: e + " sorting",
                    sSortableAsc: e + " sorting_asc_disabled",
                    sSortableDesc: e + " sorting_desc_disabled",
                    sSortableNone: e + " sorting_disabled",
                    sSortJUIAsc: n + "triangle-1-n",
                    sSortJUIDesc: n + "triangle-1-s",
                    sSortJUI: n + "carat-2-n-s",
                    sSortJUIAscAllowed: n + "carat-1-n",
                    sSortJUIDescAllowed: n + "carat-1-s",
                    sSortJUIWrapper: "DataTables_sort_wrapper",
                    sSortIcon: "DataTables_sort_icon",
                    sScrollHead: "dataTables_scrollHead " + e,
                    sScrollFoot: "dataTables_scrollFoot " + e,
                    sHeaderTH: e,
                    sFooterTH: e,
                    sJUIHeader: r + " ui-corner-tl ui-corner-tr",
                    sJUIFooter: r + " ui-corner-bl ui-corner-br"
                })
            }();
        var Ue = Gt.ext.pager;
        i.extend(Ue, {
            simple: function(t, e) {
                return ["previous", "next"]
            },
            full: function(t, e) {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(t, e) {
                return ["previous", zt(t, e), "next"]
            },
            full_numbers: function(t, e) {
                return ["first", "previous", zt(t, e), "next", "last"]
            },
            _numbers: zt,
            numbers_length: 7
        }), i.extend(!0, Gt.ext.renderer, {
            pageButton: {
                _: function(t, n, r, o, s, a) {
                    var l, u, c, h = t.oClasses,
                        d = t.oLanguage.oPaginate,
                        f = 0,
                        p = function(e, n) {
                            var o, c, m, g, v = function(e) {
                                dt(t, e.data.action, !0)
                            };
                            for (o = 0, c = n.length; c > o; o++)
                                if (g = n[o], i.isArray(g)) {
                                    var $ = i("<" + (g.DT_el || "div") + "/>").appendTo(e);
                                    p($, g)
                                } else {
                                    switch (l = "", u = "", g) {
                                        case "ellipsis":
                                            e.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            l = d.sFirst, u = g + (s > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            l = d.sPrevious, u = g + (s > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            l = d.sNext, u = g + (a - 1 > s ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            l = d.sLast, u = g + (a - 1 > s ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        default:
                                            l = g + 1, u = s === g ? h.sPageButtonActive : ""
                                    }
                                    l && (m = i("<a>", {
                                        "class": h.sPageButton + " " + u,
                                        "aria-controls": t.sTableId,
                                        "data-dt-idx": f,
                                        tabindex: t.iTabIndex,
                                        id: 0 === r && "string" == typeof g ? t.sTableId + "_" + g : null
                                    }).html(l).appendTo(e), Mt(m, {
                                        action: g
                                    }, v), f++)
                                }
                        };
                    try {
                        c = i(e.activeElement).data("dt-idx")
                    } catch (m) {}
                    p(i(n).empty(), o), c && i(n).find("[data-dt-idx=" + c + "]").focus()
                }
            }
        }), i.extend(Gt.ext.type.detect, [function(t, e) {
            var n = e.oLanguage.sDecimal;
            return ue(t, n) ? "num" + n : null
        }, function(t, e) {
            if (t && !(t instanceof Date) && (!ne.test(t) || !ie.test(t))) return null;
            var n = Date.parse(t);
            return null !== n && !isNaN(n) || se(t) ? "date" : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return ue(t, n, !0) ? "num-fmt" + n : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return he(t, n) ? "html-num" + n : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return he(t, n, !0) ? "html-num-fmt" + n : null
        }, function(t, e) {
            return se(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
        }]), i.extend(Gt.ext.type.search, {
            html: function(t) {
                return se(t) ? t : "string" == typeof t ? t.replace(te, " ").replace(ee, "") : ""
            },
            string: function(t) {
                return se(t) ? t : "string" == typeof t ? t.replace(te, " ") : t
            }
        });
        var Ve = function(t, e, n, i) {
            return 0 === t || t && "-" !== t ? (e && (t = le(t, e)), t.replace && (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))), 1 * t) : -(1 / 0)
        };
        return i.extend(Xt.type.order, {
            "date-pre": function(t) {
                return Date.parse(t) || 0
            },
            "html-pre": function(t) {
                return se(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            },
            "string-pre": function(t) {
                return se(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
            },
            "string-asc": function(t, e) {
                return e > t ? -1 : t > e ? 1 : 0
            },
            "string-desc": function(t, e) {
                return e > t ? 1 : t > e ? -1 : 0
            }
        }), Ut(""), i.extend(!0, Gt.ext.renderer, {
            header: {
                _: function(t, e, n, r) {
                    i(t.nTable).on("order.dt.DT", function(i, o, s, a) {
                        if (t === o) {
                            var l = n.idx;
                            e.removeClass(n.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == a[l] ? r.sSortAsc : "desc" == a[l] ? r.sSortDesc : n.sSortingClass)
                        }
                    })
                },
                jqueryui: function(t, e, n, r) {
                    i("<div/>").addClass(r.sSortJUIWrapper).append(e.contents()).append(i("<span/>").addClass(r.sSortIcon + " " + n.sSortingClassJUI)).appendTo(e), i(t.nTable).on("order.dt.DT", function(i, o, s, a) {
                        if (t === o) {
                            var l = n.idx;
                            e.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == a[l] ? r.sSortAsc : "desc" == a[l] ? r.sSortDesc : n.sSortingClass), e.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == a[l] ? r.sSortJUIAsc : "desc" == a[l] ? r.sSortJUIDesc : n.sSortingClassJUI)
                        }
                    })
                }
            }
        }), Gt.render = {
            number: function(t, e, n, i) {
                return {
                    display: function(r) {
                        if ("number" != typeof r && "string" != typeof r) return r;
                        var o = 0 > r ? "-" : "";
                        r = Math.abs(parseFloat(r));
                        var s = parseInt(r, 10),
                            a = n ? e + (r - s).toFixed(n).substring(2) : "";
                        return o + (i || "") + s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + a
                    }
                }
            }
        }, i.extend(Gt.ext.internal, {
            _fnExternApiFunc: Vt,
            _fnBuildAjax: B,
            _fnAjaxUpdate: q,
            _fnAjaxParameters: z,
            _fnAjaxUpdateDraw: U,
            _fnAjaxDataSrc: V,
            _fnAddColumn: h,
            _fnColumnOptions: d,
            _fnAdjustColumnSizing: f,
            _fnVisibleToColumnIndex: p,
            _fnColumnIndexToVisible: m,
            _fnVisbleColumns: g,
            _fnGetColumns: v,
            _fnColumnTypes: $,
            _fnApplyColumnDefs: b,
            _fnHungarianMap: r,
            _fnCamelToHungarian: o,
            _fnLanguageCompat: s,
            _fnBrowserDetect: u,
            _fnAddData: y,
            _fnAddTr: w,
            _fnNodeToDataIndex: x,
            _fnNodeToColumnIndex: C,
            _fnGetCellData: S,
            _fnSetCellData: T,
            _fnSplitObjNotation: _,
            _fnGetObjectDataFn: E,
            _fnSetObjectDataFn: D,
            _fnGetDataMaster: A,
            _fnClearTable: I,
            _fnDeleteIndex: F,
            _fnInvalidate: k,
            _fnGetRowElements: P,
            _fnCreateTr: N,
            _fnBuildHead: L,
            _fnDrawHead: J,
            _fnDraw: R,
            _fnReDraw: M,
            _fnAddOptionsHtml: j,
            _fnDetectHeader: H,
            _fnGetUniqueThs: W,
            _fnFeatureHtmlFilter: G,
            _fnFilterComplete: X,
            _fnFilterCustom: Q,
            _fnFilterColumn: Z,
            _fnFilter: Y,
            _fnFilterCreateSearch: K,
            _fnEscapeRegex: tt,
            _fnFilterData: et,
            _fnFeatureHtmlInfo: rt,
            _fnUpdateInfo: ot,
            _fnInfoMacros: st,
            _fnInitialise: at,
            _fnInitComplete: lt,
            _fnLengthChange: ut,
            _fnFeatureHtmlLength: ct,
            _fnFeatureHtmlPaginate: ht,
            _fnPageChange: dt,
            _fnFeatureHtmlProcessing: ft,
            _fnProcessingDisplay: pt,
            _fnFeatureHtmlTable: mt,
            _fnScrollDraw: gt,
            _fnApplyToChildren: vt,
            _fnCalculateColumnWidths: $t,
            _fnThrottle: bt,
            _fnConvertToWidth: yt,
            _fnScrollingWidthAdjust: wt,
            _fnGetWidestNode: xt,
            _fnGetMaxLenString: Ct,
            _fnStringToCss: St,
            _fnScrollBarWidth: Tt,
            _fnSortFlatten: _t,
            _fnSort: Et,
            _fnSortAria: Dt,
            _fnSortListener: At,
            _fnSortAttachListener: It,
            _fnSortingClasses: Ft,
            _fnSortData: kt,
            _fnSaveState: Pt,
            _fnLoadState: Nt,
            _fnSettingsFromNode: Ot,
            _fnLog: Lt,
            _fnMap: Jt,
            _fnBindAction: Mt,
            _fnCallbackReg: jt,
            _fnCallbackFire: Ht,
            _fnLengthOverflow: Wt,
            _fnRenderer: Bt,
            _fnDataSource: qt,
            _fnRowAttributes: O,
            _fnCalculateEnd: function() {}
        }), i.fn.dataTable = Gt, i.fn.dataTableSettings = Gt.settings, i.fn.dataTableExt = Gt.ext, i.fn.DataTable = function(t) {
            return i(this).dataTable(t).api()
        }, i.each(Gt, function(t, e) {
            i.fn.DataTable[t] = e
        }), i.fn.dataTable
    })
}(window, document),
function() {
    var t, e, n, i, r;
    window.OuiShare = {
        initPage: function() {},
        init: function() {}
    }, $(document).ready(function() {
        var i, r, o, s, a, l, u;
        return $("#slider1_container").length > 0 && t(slider1_container), $("#slider2_container").length > 0 && e(slider2_container), $("#slider3_container").length > 0 && n(slider3_container), $(".eur").click(function(t) {
            return t.preventDefault(), $(".eur").addClass("active"), $(".usd").removeClass("active"), $(".dolar").hide(), $(".euro").show()
        }), $(".usd").click(function(t) {
            return t.preventDefault(), $(".eur").removeClass("active"), $(".usd").addClass("active"), $(".euro").hide(), $(".dolar").show()
        }), $(".add-contact-language").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $(".contact-language-select").val(), e = $("#user_contact_languages").val().replace("{", "").replace("}", "").split(","), -1 === e.indexOf(n) ? (console.log(e), e.push(n), console.log(e), $("#user_contact_languages").val("{" + e.toString() + "}"), $(".contact-languages").append("<div value='" + n + "' class='contact-language-value'><span class='remove-contact-language'>x</span>" + n + "</div>")) : void 0
        }), $("#edit").on("click", ".remove-contact-language", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("value"), e = $("#user_contact_languages").val().replace("{", "").replace("}", "").split(","), e = e.splice(e, e.indexOf(n)), $("#user_contact_languages").val("{" + e.toString() + "}"), this.parentNode.remove()
        }), $(".community_events").hide(), o = [], $("#community_event_ids option:selected").each(function(t, e) {
            return o[t] = $(e).text()
        }), $("#event_community").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $("#event_community option:selected").text(), e = $("#event_community option:selected").val(), -1 === o.indexOf(n) ? (o.push(n), $('#community_event_ids option[value="' + e + '"]').prop("selected", !0), $(".event_community").append("<div class='event-community-value' id='event-" + e + "'><span class='remove-event-community'>x</span>" + n + "</div>")) : void 0
        }), $(".event_community").on("click", ".remove-event-community", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("id"), e = n.split("-")[1],
                $('#community_event_ids option[value="' + e + '"]').prop("selected", !1), $("#" + n).remove()
        }), $(".community_users").hide(), s = [], $("#community_user_ids option:selected").each(function(t, e) {
            return s[t] = $(e).text()
        }), $("#users_community").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $("#users_community option:selected").text(), e = $("#users_community option:selected").val(), -1 === s.indexOf(n) ? (s.push(n), $('#community_user_ids option[value="' + e + '"]').prop("selected", !0), $(".user_community").append("<div class='user-community-value' id='user-" + e + "'><span class='remove-user-community'>x</span>" + n + "</div>")) : void 0
        }), $(".user_community").on("click", ".remove-user-community", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("id"), e = n.split("-")[1], $('#community_user_ids option[value="' + e + '"]').prop("selected", !1), $("#" + n).remove()
        }), $(".event_users").hide(), a = [], $("#event_user_ids option:selected").each(function(t, e) {
            return a[t] = $(e).text()
        }), $("#users_event").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $("#users_event option:selected").text(), e = $("#users_event option:selected").val(), -1 === a.indexOf(n) ? (a.push(n), $('#event_user_ids option[value="' + e + '"]').prop("selected", !0), $(".user_event").append("<div class='user-event-value' id='user-" + e + "'><span class='remove-user-event'>x</span>" + n + "</div>")) : void 0
        }), $(".user_event").on("click", ".remove-user-event", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("id"), e = n.split("-")[1], $('#event_user_ids option[value="' + e + '"]').prop("selected", !1), $("#" + n).remove()
        }), $(".project_users").hide(), u = [], $("#project_user_ids option:selected").each(function(t, e) {
            return u[t] = $(e).text()
        }), $("#users_project").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $("#users_project option:selected").text(), e = $("#users_project option:selected").val(), -1 === u.indexOf(n) ? (u.push(n), $('#project_user_ids option[value="' + e + '"]').prop("selected", !0), $(".user_project").append("<div class='user-project-value' id='user-" + e + "'><span class='remove-user-project'>x</span>" + n + "</div>")) : void 0
        }), $(".user_project").on("click", ".remove-user-project", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("id"), e = n.split("-")[1], $('#project_user_ids option[value="' + e + '"]').prop("selected", !1), $("#" + n).remove()
        }), $(".expert_group_users").hide(), l = [], $("#expert_group_user_ids option:selected").each(function(t, e) {
            return l[t] = $(e).text()
        }), $("#users_expert_group").click(function(t) {
            var e, n;
            return t.preventDefault(), n = $("#users_expert_group option:selected").text(), e = $("#users_expert_group option:selected").val(), -1 === l.indexOf(n) ? (l.push(n), $('#expert_group_user_ids option[value="' + e + '"]').prop("selected", !0), $(".user_expert_group").append("<div class='user-expertgroup-value' id='user-" + e + "'><span class='remove-user-expertgroup'>x</span>" + n + "</div>")) : void 0
        }), $(".user_expert_group").on("click", ".remove-user-expertgroup", function(t) {
            var e, n;
            return n = this.parentNode.getAttribute("id"), e = n.split("-")[1], $('#expert_group_user_ids option[value="' + e + '"]').prop("selected", !1), $("#" + n).remove()
        }), i = function(t) {
            return console.log(this)
        }, r = function(t) {
            return console.log(test)
        }
    }), i = function() {
        return console.log(this)
    }, r = function(t) {
        return console.log(test)
    }, t = function(t) {
        var e, n, i;
        i = {
            $AutoPlay: !1,
            $PauseOnHover: 1,
            $ArrowKeyNavigation: !0,
            $SlideWidth: 600,
            $SlideSpacing: 0,
            $DisplayPieces: 2,
            $ParkingPosition: 300,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 2,
                $Steps: 1
            }
        }, n = new $JssorSlider$(t, i), e = function() {
            var t;
            t = n.$Elmt.parentNode.clientWidth, t ? n.$ScaleWidth(Math.min(t)) : $Jssor$.$Delay(e, 30)
        }, e(), $Jssor$.$AddEvent(window, "load", e), $Jssor$.$AddEvent(window, "resize", e), $Jssor$.$AddEvent(window, "orientationchange", e)
    }, e = function(t) {
        var e, n, i;
        i = {
            $AutoPlay: !1,
            $PauseOnHover: 1,
            $ArrowKeyNavigation: !0,
            $SlideWidth: 400,
            $SlideSpacing: 0,
            $DisplayPieces: 3,
            $ParkingPosition: 0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 2,
                $Steps: 1
            }
        }, n = new $JssorSlider$(t, i), e = function() {
            var t;
            t = n.$Elmt.parentNode.clientWidth, t ? n.$ScaleWidth(Math.min(t)) : $Jssor$.$Delay(e, 30)
        }, e(), $Jssor$.$AddEvent(window, "load", e), $Jssor$.$AddEvent(window, "resize", e), $Jssor$.$AddEvent(window, "orientationchange", e)
    }, n = function(t) {
        var e, n, i;
        i = {
            $AutoPlay: !0,
            $PauseOnHover: 1,
            $ArrowKeyNavigation: !0,
            $SlideWidth: 400,
            $SlideSpacing: 0,
            $DisplayPieces: 3,
            $ParkingPosition: 0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 2,
                $Steps: 1
            }
        }, n = new $JssorSlider$(t, i), e = function() {
            var t;
            t = n.$Elmt.parentNode.clientWidth, t ? n.$ScaleWidth(Math.min(t)) : $Jssor$.$Delay(e, 30)
        }, e(), $Jssor$.$AddEvent(window, "load", e), $Jssor$.$AddEvent(window, "resize", e), $Jssor$.$AddEvent(window, "orientationchange", e)
    }
}.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Activities && (t.Activities = {}), OuiShare.Admin.Activities.Index = {
            init: function() {
                return $(".activities").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".activities").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                activity: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Communities && (t.Communities = {}), OuiShare.Admin.Communities.Index = {
            init: function() {
                return $(".communities").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".communities").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                community: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).ExpertGroups && (t.ExpertGroups = {}), OuiShare.Admin.ExpertGroups.Index = {
            init: function() {
                return $(".expert_groups").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".expert_groups").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                expert_group: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).FaqQuestions && (t.FaqQuestions = {}), OuiShare.Admin.FaqQuestions.Index = {
            init: function() {
                return $(".faq-questions").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".faq-questions").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                faq_question: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = t.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function i() {
                        var i, r;
                        return n.settings.submitHandler ? (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), void 0 !== r ? r : !1) : !0
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                var e, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, n = t(this[0].form).validate(), this.each(function() {
                    e = n.element(this) && e
                })), e
            },
            removeAttrs: function(e) {
                var n = {},
                    i = this;
                return t.each(e.split(/\s/), function(t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function(e, n) {
                var i, r, o, s, a, l, u = this[0];
                if (e) switch (i = t.data(u.form, "validator").settings, r = i.rules, o = t.validator.staticRules(u), e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = t.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, t.each(n.split(/\s/), function(e, n) {
                            l[n] = o[n], delete o[n], "required" === n && t(u).removeAttr("aria-required")
                        }), l) : (delete r[u.name], o)
                }
                return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), s.required && (a = s.required, delete s.required, s = t.extend({
                    required: a
                }, s), t(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = t.extend(s, {
                    remote: a
                })), s
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, n) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
        }, t.validator.format = function(e, n) {
            return 1 === arguments.length ? function() {
                var n = t.makeArray(arguments);
                return n.unshift(e), t.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return n
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
                },
                unhighlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var n = t.data(this[0].form, "validator"),
                            i = "on" + e.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[i] && !this.is(r.ignore) && r[i].call(n, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};
                    t.each(this.settings.groups, function(e, n) {
                        "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                            i[n] = e
                        })
                    }), n = this.settings.rules, t.each(n, function(e, i) {
                        n[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var n = this.clean(e),
                        i = this.validationTargetFor(n),
                        r = !0;
                    return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = t(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var n in e) this.errorList.push({
                            message: e[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, n = 0;
                    for (e in t) n++;
                    return n
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        n = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !e.objectLength(t(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var n, i = t(e),
                        r = e.type;
                    return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : i.val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n, i, r, o = t(e).rules(),
                        s = t.map(o, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    for (i in o) {
                        r = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if (n = t.validator.methods[i].call(this, l, e, r.parameters), "dependency-mismatch" === n && 1 === s) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!n) return this.formatAndAdd(e, r), !1
                        } catch (u) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", u), u
                        }
                    }
                    return a ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
                },
                customDataMessage: function(e, n) {
                    return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0
                },
                defaultMessage: function(e, n) {
                    return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, n) {
                    var i = this.defaultMessage(e, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: e,
                        method: n.method
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, n;
                    for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, n) {
                    var i, r, o, s = this.errorsFor(e),
                        a = this.idOrName(e),
                        l = t(e).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(n || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (o = s.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, t(e).attr("aria-describedby", l), r = this.groups[e.name], r && t.each(this.groups, function(e, n) {
                        n === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                    }))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var n = this.idOrName(e),
                        i = t(e).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (r = r + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, n) {
                        return !!t(e, n.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, n) {
                e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var n = {},
                    i = t(e).attr("class");
                return i && t.each(i.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(e) {
                var n, i, r = {},
                    o = t(e),
                    s = e.getAttribute("type");
                for (n in t.validator.methods) "required" === n ? (i = e.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), /min|max/.test(n) && (null === s || /number|range|text/.test(s)) && (i = Number(i)), i || 0 === i ? r[n] = i : s === n && "range" !== s && (r[n] = !0);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(e) {
                var n, i, r = {},
                    o = t(e);
                for (n in t.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function(e) {
                var n = {},
                    i = t.data(e.form, "validator");
                return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
            },
            normalizeRules: function(e, n) {
                return t.each(e, function(i, r) {
                    if (r === !1) return void delete e[i];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? e[i] = void 0 !== r.param ? r.param : !0 : delete e[i]
                    }
                }), t.each(e, function(i, r) {
                    e[i] = t.isFunction(r) ? r(n) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var n;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var n = {};
                    t.each(e.split(/\s/), function() {
                        n[this] = !0
                    }), e = n
                }
                return e
            },
            addMethod: function(e, n, i) {
                t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = t(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var n, i, r = 0,
                        o = 0,
                        s = !1;
                    if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                    for (n = t.length - 1; n >= 0; n--) i = t.charAt(n), o = parseInt(i, 10), s && (o *= 2) > 9 && (o -= 9), r += o, s = !s;
                    return r % 10 === 0
                },
                minlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || i >= r
                },
                rangelength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(t, e, n) {
                    return this.optional(e) || t >= n
                },
                max: function(t, e, n) {
                    return this.optional(e) || n >= t
                },
                range: function(t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                equalTo: function(e, n, i) {
                    var r = t(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(n).valid()
                    }), e === r.val()
                },
                remote: function(e, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r, o, s = this.previousValue(n);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), s.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = s.message, i = "string" == typeof i && {
                        url: i
                    } || i, s.old === e ? s.valid : (s.old = e, r = this, this.startRequest(n), o = {}, o[n.name] = e, t.ajax(t.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: r.currentForm,
                        success: function(i) {
                            var o, a, l, u = i === !0 || "true" === i;
                            r.settings.messages[n.name].remote = s.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, a = i || r.defaultMessage(n, "remote"), o[n.name] = s.message = t.isFunction(a) ? a(e) : a, r.invalid[n.name] = !0, r.showErrors(o)), s.valid = u, r.stopRequest(n, u)
                        }
                    }, i)), "pending")
                }
            }
        }), t.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        };
        var e, n = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, i) {
            var r = t.port;
            "abort" === t.mode && (n[r] && n[r].abort(), n[r] = i)
        }) : (e = t.ajax, t.ajax = function(i) {
            var r = ("mode" in i ? i : t.ajaxSettings).mode,
                o = ("port" in i ? i : t.ajaxSettings).port;
            return "abort" === r ? (n[o] && n[o].abort(), n[o] = e.apply(this, arguments), n[o]) : e.apply(this, arguments)
        }), t.extend(t.fn, {
            validateDelegate: function(e, n, i) {
                return this.bind(n, function(n) {
                    var r = t(n.target);
                    return r.is(e) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Projects && (t.Projects = {}), OuiShare.Admin.Projects.Index = {
            init: function() {
                return $(".projects").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".projects").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                project: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Regions && (t.Regions = {}), OuiShare.Admin.Regions.Index = {
            init: function() {
                return $(".regions").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".regions").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                region: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Researches && (t.Researches = {}), OuiShare.Admin.Researches.Index = {
            init: function() {
                return $(".researches").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".researches").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                research: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Services && (t.Services = {}), OuiShare.Admin.Services.Index = {
            init: function() {
                return $(".services").sortable({
                    axis: "y",
                    placeholder: "sortable-highlight",
                    items: ".sortable",
                    start: function(t, e) {
                        return e.placeholder.height(e.item.height())
                    },
                    stop: function(t, e) {
                        return e.item.effect("highlight", {}, 1e3)
                    },
                    update: function(t, e) {
                        var n, i;
                        return n = void 0, i = void 0, i = $(".services").find(".sortable").index(e.item), n = $("meta[name='csrf-token']").attr("content"), $.ajax({
                            type: "POST",
                            url: e.item.data("update-path"),
                            dataType: "json",
                            headers: {
                                "X-CSRF-Token": n
                            },
                            data: {
                                service: {
                                    row_order_position: i
                                }
                            }
                        })
                    }
                })
            }
        }
    }.call(this),
    function() {
        var t;
        null == OuiShare.Admin && (OuiShare.Admin = {}), null == (t = OuiShare.Admin).Sservices && (t.Sservices = {}), OuiShare.Admin.Sservices.Index = {
            init: function() {},
            modules: function() {
                return []
            }
        }
    }.call(this),
    function() {
        $(function() {
            return $("#users-table").dataTable({
                processing: !0,
                serverSide: !0,
                ajax: $("#users-table").data("source"),
                pagingType: "full_numbers",
                iDisplayLength: 25,
                columnDefs: [{
                    orderable: !1,
                    targets: 4
                }]
            })
        })
    }.call(this), $(document).ready(function() {
        $("#country_select_region_id").change(function() {
            $.ajax({
                url: "/get_communities_select",
                data: {
                    region_id: $("#country_select_region_id").val()
                },
                dataType: "json"
            }).done(function(t) {
                console.log("cities updated"), console.log(t);
                var e = $("#community_select_community_id");
                e.empty(), e.append(new Option("Select a community", "0"));
                for (var n = 0; n < t.length; n++) e.append(new Option(t[n][1], t[n][0]));
                e.change()
            }), $.ajax({
                url: "/get_communities_partial",
                dataType: "html",
                data: {
                    region_id_2: $("#country_select_region_id").val()
                }
            }).done(function(t) {
                var e = $("#communitypartial");
                e.html(t)
            })
        }), $("#community_select_community_id").change(function() {
            $.ajax({
                url: "/get_community_partial",
                dataType: "html",
                data: {
                    community_id: $("#community_select_community_id").val()
                }
            }).done(function(t) {
                var e = $("#communitypartial");
                e.html(t)
            })
        })
    }),
    function() {
        window.Initjs = {
            initialize: function(t) {
                var e;
                return null == t && (t = this.$infos()), this.App || this.appName(t), this.execFilter("init"), t.data("resource") && (e = t.data("resource").split("/")), this.exec(e, t.data("action"))
            },
            initializePartial: function() {
                var t;
                return t = this.$partialInfos(), this.$partialInfos().remove(), t.length > 0 ? (this.partial = !0, this.initialize(t)) : void 0
            },
            $infos: function() {
                return $("#init-js")
            },
            $partialInfos: function() {
                return $("#init-partial-js")
            },
            partial: !1,
            appName: function(t) {
                var e;
                return e = t.data("app-name") || "App", this.App = window[e], null == this.App ? console.log("Initjs: " + e + " is not defined. Run `rails generate initjs:install` to generate the app file.") : void 0
            },
            exec: function(t, e) {
                var n, i, r, o, s, a;
                if (this.partial !== !0 && this.initModules(this.App), t) {
                    if (o = t.pop(), a = this.namespace(t), a && o)
                        if (r = a[o], this.partial !== !0 && this.initModules(r), r && (n = r[e])) this.App.currentView = this.initView(n);
                        else if (r && this.config("respond_with")) {
                        i = [];
                        for (s in this.config("respond_with")) i.push(s); - 1 !== $.inArray(e, i) && (n = r[this.config("respond_with")[e]]) && (this.App.currentView = this.initView(n))
                    }
                    return this.partial = !1
                }
            },
            namespace: function(t) {
                var e, n, i, r;
                for (n = this.App, i = 0, r = t.length; r > i; i++) e = t[i], n && (n = n[e], this.partial !== !0 && this.initModules(n));
                return n
            },
            initView: function(t) {
                return "function" == typeof t ? new t : "object" == typeof t && (this.initModules(t), "function" == typeof t.init) ? new t.init : void 0
            },
            initModules: function(t) {
                var e, n, i, r, o;
                if (null != t && null != t.modules) {
                    for (null == this.App.currentModules && (this.App.currentModules = []), n = "function" == typeof t.modules ? [].concat(new t.modules) : [].concat(t.modules), o = [], i = 0, r = n.length; r > i; i++) e = n[i], o.push(this.App.currentModules.push(this.initView(e)));
                    return o
                }
            },
            config: function(t) {
                return null == this.App ? !1 : (this.App.configs || (this.App.configs = {
                    turbolinks: !0,
                    pjax: !1,
                    respond_with: {
                        Create: "New",
                        Update: "Edit"
                    }
                }), this.App.configs && this.App.configs[t] ? this.App.configs[t] : void 0)
            },
            execFilter: function(t) {
                return this.App && "function" == typeof this.App[t] ? this.App[t]() : void 0
            },
            initApp: function() {
                return this.appName(this.$infos()), Initjs.execFilter("initPage"), null == window.Turbolinks || !Initjs.config("turbolinks") == !0 ? this.initialize() : void 0
            }
        }, jQuery(function() {
            return Initjs.initApp(), null != window.Turbolinks && Initjs.config("turbolinks") === !0 && ($(document).bind("page:change", function() {
                return Initjs.initialize()
            }), navigator.userAgent.match(/MSIE 8.0/) && Initjs.initialize()), null != $.fn.pjax && Initjs.config("pjax") === !0 ? $(document).bind("pjax:complete", function() {
                return Initjs.initialize()
            }) : void 0
        })
    }.call(this),
    function(t, e) {
        function n(e, n) {
            var r, o, s, a = e.nodeName.toLowerCase();
            return "area" === a ? (r = e.parentNode, o = r.name, e.href && o && "map" === r.nodeName.toLowerCase() ? (s = t("img[usemap=#" + o + "]")[0], !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var r = 0,
            o = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            focus: function(e) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), i && i.call(e)
                        }, n)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            scrollParent: function() {
                var e;
                return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function(n) {
                if (n !== e) return this.css("zIndex", n);
                if (this.length)
                    for (var i, r, o = t(this[0]); o.length && o[0] !== document;) {
                        if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                        o = o.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    o.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(n) {
                    return !!t.data(n, e)
                }
            }) : function(e, n, i) {
                return !!t.data(e, i[3])
            },
            focusable: function(e) {
                return n(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    r = isNaN(i);
                return (r || i >= 0) && n(e, !r)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
            function r(e, n, i, r) {
                return t.each(o, function() {
                    n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), n
            }
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                s = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(n) {
                return n === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(s, r(this, n) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(s, r(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(n) {
                return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
            disableSelection: function() {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function(e, n, i) {
                    var r, o = t.ui[e].prototype;
                    for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
                },
                call: function(t, e, n) {
                    var i, r = t.plugins[e];
                    if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (i = 0; r.length > i; i++) t.options[r[i][0]] && r[i][1].apply(t.element, n)
                }
            },
            hasScroll: function(e, n) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    r = !1;
                return e[i] > 0 ? !0 : (e[i] = 1, r = e[i] > 0, e[i] = 0, r)
            }
        })
    }(jQuery),
    function(t, e) {
        var n = 0,
            i = Array.prototype.slice,
            r = t.cleanData;
        t.cleanData = function(e) {
            for (var n, i = 0; null != (n = e[i]); i++) try {
                t(n).triggerHandler("remove")
            } catch (o) {}
            r(e)
        }, t.widget = function(n, i, r) {
            var o, s, a, l, u = {},
                c = n.split(".")[0];
            n = n.split(".")[1], o = c + "-" + n, r || (r = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
                return !!t.data(e, o)
            }, t[c] = t[c] || {}, s = t[c][n], a = t[c][n] = function(t, n) {
                return this._createWidget ? (arguments.length && this._createWidget(t, n), e) : new a(t, n)
            }, t.extend(a, s, {
                version: r.version,
                _proto: t.extend({}, r),
                _childConstructors: []
            }), l = new i, l.options = t.widget.extend({}, l.options), t.each(r, function(n, r) {
                return t.isFunction(r) ? (u[n] = function() {
                    var t = function() {
                            return i.prototype[n].apply(this, arguments)
                        },
                        e = function(t) {
                            return i.prototype[n].apply(this, t)
                        };
                    return function() {
                        var n, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = e, n = r.apply(this, arguments), this._super = i, this._superApply = o, n
                    }
                }(), e) : (u[n] = r, e)
            }), a.prototype = t.widget.extend(l, {
                widgetEventPrefix: s ? l.widgetEventPrefix : n
            }, u, {
                constructor: a,
                namespace: c,
                widgetName: n,
                widgetFullName: o
            }), s ? (t.each(s._childConstructors, function(e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, a, n._proto)
            }), delete s._childConstructors) : i._childConstructors.push(a), t.widget.bridge(n, a)
        }, t.widget.extend = function(n) {
            for (var r, o, s = i.call(arguments, 1), a = 0, l = s.length; l > a; a++)
                for (r in s[a]) o = s[a][r], s[a].hasOwnProperty(r) && o !== e && (n[r] = t.isPlainObject(o) ? t.isPlainObject(n[r]) ? t.widget.extend({}, n[r], o) : t.widget.extend({}, o) : o);
            return n
        }, t.widget.bridge = function(n, r) {
            var o = r.prototype.widgetFullName || n;
            t.fn[n] = function(s) {
                var a = "string" == typeof s,
                    l = i.call(arguments, 1),
                    u = this;
                return s = !a && l.length ? t.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function() {
                    var i, r = t.data(this, o);
                    return r ? t.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, l), i !== r && i !== e ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : e) : t.error("no such method '" + s + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'")
                }) : this.each(function() {
                    var e = t.data(this, o);
                    e ? e.option(s || {})._init() : t.data(this, o, new r(s, this))
                }), u
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(n, i) {
                var r, o, s, a = n;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof n)
                    if (a = {}, r = n.split("."), n = r.shift(), r.length) {
                        for (o = a[n] = t.widget.extend({}, this.options[n]), s = 0; r.length - 1 > s; s++) o[r[s]] = o[r[s]] || {}, o = o[r[s]];
                        if (n = r.pop(), i === e) return o[n] === e ? null : o[n];
                        o[n] = i
                    } else {
                        if (i === e) return this.options[n] === e ? null : this.options[n];
                        a[n] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(n, i, r) {
                var o, s = this;
                "boolean" != typeof n && (r = i, i = n, n = !1), r ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, o = this.widget()), t.each(r, function(r, a) {
                    function l() {
                        return n || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : e
                    }
                    "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                    var u = r.match(/^(\w+)\s*(.*)$/),
                        c = u[1] + s.eventNamespace,
                        h = u[2];
                    h ? o.delegate(h, c, l) : i.bind(c, l)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
            },
            _delay: function(t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, n, i) {
                var r, o, s = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                    for (r in o) r in n || (n[r] = o[r]);
                return this.element.trigger(n, i), !(t.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, n) {
            t.Widget.prototype["_" + e] = function(i, r, o) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
                r = r || {}, "number" == typeof r && (r = {
                    duration: r
                }), s = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                    t(this)[e](), o && o.call(i[0]), n()
                })
            }
        })
    }(jQuery),
    function(t) {
        var e = !1;
        t(document).mouseup(function() {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.10.3",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(n) {
                    return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(n) {
                if (!e) {
                    this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                    var i = this,
                        r = 1 === n.which,
                        o = "string" == typeof this.options.cancel && n.target.nodeName ? t(n.target).closest(this.options.cancel).length : !1;
                    return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(t, e) {
        function n(t, e, n) {
            return [parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? n / 100 : 1)]
        }

        function i(e, n) {
            return parseInt(t.css(e, n), 10) || 0
        }

        function r(e) {
            var n = e[0];
            return 9 === n.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(n) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : n.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: n.pageY,
                    left: n.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        t.ui = t.ui || {};
        var o, s = Math.max,
            a = Math.abs,
            l = Math.round,
            u = /left|center|right/,
            c = /top|center|bottom/,
            h = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            f = /%$/,
            p = t.fn.position;
        t.position = {
                scrollbarWidth: function() {
                    if (o !== e) return o;
                    var n, i, r = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        s = r.children()[0];
                    return t("body").append(r), n = s.offsetWidth, r.css("overflow", "scroll"), i = s.offsetWidth, n === i && (i = r[0].clientWidth), r.remove(), o = n - i
                },
                getScrollInfo: function(e) {
                    var n = e.isWindow ? "" : e.element.css("overflow-x"),
                        i = e.isWindow ? "" : e.element.css("overflow-y"),
                        r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth,
                        o = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
                    return {
                        width: o ? t.position.scrollbarWidth() : 0,
                        height: r ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var n = t(e || window),
                        i = t.isWindow(n[0]);
                    return {
                        element: n,
                        isWindow: i,
                        offset: n.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: i ? n.width() : n.outerWidth(),
                        height: i ? n.height() : n.outerHeight()
                    }
                }
            }, t.fn.position = function(e) {
                if (!e || !e.of) return p.apply(this, arguments);
                e = t.extend({}, e);
                var o, f, m, g, v, $, b = t(e.of),
                    y = t.position.getWithinInfo(e.within),
                    w = t.position.getScrollInfo(y),
                    x = (e.collision || "flip").split(" "),
                    C = {};
                return $ = r(b), b[0].preventDefault && (e.at = "left top"), f = $.width, m = $.height, g = $.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
                    var t, n, i = (e[this] || "").split(" ");
                    1 === i.length && (i = u.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = u.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), n = h.exec(i[1]), C[this] = [t ? t[0] : 0, n ? n[0] : 0], e[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += f : "center" === e.at[0] && (v.left += f / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), o = n(C.at, f, m), v.left += o[0], v.top += o[1], this.each(function() {
                    var r, u, c = t(this),
                        h = c.outerWidth(),
                        d = c.outerHeight(),
                        p = i(this, "marginLeft"),
                        $ = i(this, "marginTop"),
                        S = h + p + i(this, "marginRight") + w.width,
                        T = d + $ + i(this, "marginBottom") + w.height,
                        _ = t.extend({}, v),
                        E = n(C.my, c.outerWidth(), c.outerHeight());
                    "right" === e.my[0] ? _.left -= h : "center" === e.my[0] && (_.left -= h / 2), "bottom" === e.my[1] ? _.top -= d : "center" === e.my[1] && (_.top -= d / 2), _.left += E[0], _.top += E[1], t.support.offsetFractions || (_.left = l(_.left), _.top = l(_.top)), r = {
                        marginLeft: p,
                        marginTop: $
                    }, t.each(["left", "top"], function(n, i) {
                        t.ui.position[x[n]] && t.ui.position[x[n]][i](_, {
                            targetWidth: f,
                            targetHeight: m,
                            elemWidth: h,
                            elemHeight: d,
                            collisionPosition: r,
                            collisionWidth: S,
                            collisionHeight: T,
                            offset: [o[0] + E[0], o[1] + E[1]],
                            my: e.my,
                            at: e.at,
                            within: y,
                            elem: c
                        })
                    }), e.using && (u = function(t) {
                        var n = g.left - _.left,
                            i = n + f - h,
                            r = g.top - _.top,
                            o = r + m - d,
                            l = {
                                target: {
                                    element: b,
                                    left: g.left,
                                    top: g.top,
                                    width: f,
                                    height: m
                                },
                                element: {
                                    element: c,
                                    left: _.left,
                                    top: _.top,
                                    width: h,
                                    height: d
                                },
                                horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
                                vertical: 0 > o ? "top" : r > 0 ? "bottom" : "middle"
                            };
                        h > f && f > a(n + i) && (l.horizontal = "center"), d > m && m > a(r + o) && (l.vertical = "middle"), l.important = s(a(n), a(i)) > s(a(r), a(o)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                    }), c.offset(t.extend(_, {
                        using: u
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var n, i = e.within,
                            r = i.isWindow ? i.scrollLeft : i.offset.left,
                            o = i.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = r - a,
                            u = a + e.collisionWidth - o - r;
                        e.collisionWidth > o ? l > 0 && 0 >= u ? (n = t.left + l + e.collisionWidth - o - r, t.left += l - n) : t.left = u > 0 && 0 >= l ? r : l > u ? r + o - e.collisionWidth : r : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = s(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var n, i = e.within,
                            r = i.isWindow ? i.scrollTop : i.offset.top,
                            o = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = r - a,
                            u = a + e.collisionHeight - o - r;
                        e.collisionHeight > o ? l > 0 && 0 >= u ? (n = t.top + l + e.collisionHeight - o - r, t.top += l - n) : t.top = u > 0 && 0 >= l ? r : l > u ? r + o - e.collisionHeight : r : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = s(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var n, i, r = e.within,
                            o = r.offset.left + r.scrollLeft,
                            s = r.width,
                            l = r.isWindow ? r.scrollLeft : r.offset.left,
                            u = t.left - e.collisionPosition.marginLeft,
                            c = u - l,
                            h = u + e.collisionWidth - s - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            p = -2 * e.offset[0];
                        0 > c ? (n = t.left + d + f + p + e.collisionWidth - s - o, (0 > n || a(c) > n) && (t.left += d + f + p)) : h > 0 && (i = t.left - e.collisionPosition.marginLeft + d + f + p - l, (i > 0 || h > a(i)) && (t.left += d + f + p))
                    },
                    top: function(t, e) {
                        var n, i, r = e.within,
                            o = r.offset.top + r.scrollTop,
                            s = r.height,
                            l = r.isWindow ? r.scrollTop : r.offset.top,
                            u = t.top - e.collisionPosition.marginTop,
                            c = u - l,
                            h = u + e.collisionHeight - s - l,
                            d = "top" === e.my[1],
                            f = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > c ? (i = t.top + f + p + m + e.collisionHeight - s - o, t.top + f + p + m > c && (0 > i || a(c) > i) && (t.top += f + p + m)) : h > 0 && (n = t.top - e.collisionPosition.marginTop + f + p + m - l, t.top + f + p + m > h && (n > 0 || h > a(n)) && (t.top += f + p + m))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var e, n, i, r, o, s = document.getElementsByTagName("body")[0],
                    a = document.createElement("div");
                e = document.createElement(s ? "div" : "body"), i = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, s && t.extend(i, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (o in i) e.style[o] = i[o];
                e.appendChild(a), n = s || document.documentElement, n.insertBefore(e, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", r = t(a).offset().left, t.support.offsetFractions = r > 10 && 11 > r, e.innerHTML = "", n.removeChild(e)
            }()
    }(jQuery),
    function(t) {
        function e(t, e, n) {
            return t > e && e + n > t
        }

        function n(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        }
        t.widget("ui.sortable", t.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || n(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(e, n) {
                "disabled" === e ? (this.options[e] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : t.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(e, n) {
                var i = null,
                    r = !1,
                    o = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, o.widgetName + "-item") === o ? (i = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)), i && (!this.options.handle || n || (t(this.options.handle, i).find("*").addBack().each(function() {
                    this === e.target && (r = !0)
                }), r)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function(e, n, i) {
                var r, o, s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                    for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var n, i, r, o, s = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed)), e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                    if (i = this.items[n], r = i.item[0], o = this._intersectsWithPointer(i), o && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], r) : !0)) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                        this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, n) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var i = this,
                            r = this.placeholder.offset(),
                            o = this.options.axis,
                            s = {};
                        o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                            i._clear(e)
                        })
                    } else this._clear(e, n);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var n = this._getItemsAsjQuery(e && e.connected),
                    i = [];
                return e = e || {}, t(n).each(function() {
                    var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
                }), !i.length && e.key && i.push(e.key + "="), i.join("&")
            },
            toArray: function(e) {
                var n = this._getItemsAsjQuery(e && e.connected),
                    i = [];
                return e = e || {}, n.each(function() {
                    i.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    n = e + this.helperProportions.width,
                    i = this.positionAbs.top,
                    r = i + this.helperProportions.height,
                    o = t.left,
                    s = o + t.width,
                    a = t.top,
                    l = a + t.height,
                    u = this.offset.click.top,
                    c = this.offset.click.left,
                    h = "x" === this.options.axis || i + u > a && l > i + u,
                    d = "y" === this.options.axis || e + c > o && s > e + c,
                    f = h && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : e + this.helperProportions.width / 2 > o && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > r - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var n = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    i = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    r = n && i,
                    o = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return r ? this.floating ? s && "right" === s || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
            },
            _intersectsWithSides: function(t) {
                var n = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    r = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return this.floating && o ? "right" === o && i || "left" === o && !i : r && ("down" === r && n || "up" === r && !n)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                var n, i, r, o, s = [],
                    a = [],
                    l = this._connectWith();
                if (l && e)
                    for (n = l.length - 1; n >= 0; n--)
                        for (r = t(l[n]), i = r.length - 1; i >= 0; i--) o = t.data(r[i], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = a.length - 1; n >= 0; n--) a[n][0].each(function() {
                    s.push(this)
                });
                return t(s)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var n = 0; e.length > n; n++)
                        if (e[n] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var n, i, r, o, s, a, l, u, c = this.items,
                    h = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (n = d.length - 1; n >= 0; n--)
                        for (r = t(d[n]), i = r.length - 1; i >= 0; i--) o = t.data(r[i], this.widgetFullName), o && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (n = h.length - 1; n >= 0; n--)
                    for (s = h[n][1], a = h[n][0], i = 0, u = a.length; u > i; i++) l = t(a[i]), l.data(this.widgetName + "-item", s), c.push({
                        item: l,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var n, i, r, o;
                for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var n, i = e.options;
                i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                    element: function() {
                        var i = e.currentItem[0].nodeName.toLowerCase(),
                            r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === i ? e.currentItem.children().each(function() {
                            t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(r)
                        }) : "img" === i && r.attr("src", e.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
                    },
                    update: function(t, r) {
                        (!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(i) {
                var r, o, s, a, l, u, c, h, d, f, p = null,
                    m = null;
                for (r = this.containers.length - 1; r >= 0; r--)
                    if (!t.contains(this.currentItem[0], this.containers[r].element[0]))
                        if (this._intersectsWith(this.containers[r].containerCache)) {
                            if (p && t.contains(this.containers[r].element[0], p.element[0])) continue;
                            p = this.containers[r], m = r
                        } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", i, this._uiHash(this)), this.containers[r].containerCache.over = 0);
                if (p)
                    if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", i, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                    else {
                        for (s = 1e4, a = null, f = p.floating || n(this.currentItem), l = f ? "left" : "top", u = f ? "width" : "height", c = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!f || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (h = this.items[o].item.offset()[l], d = !1, Math.abs(h - c) > Math.abs(h + this.items[o][u] - c) && (d = !0, h += this.items[o][u]), s > Math.abs(h - c) && (s = Math.abs(h - c), a = this.items[o], this.direction = d ? "up" : "down"));
                        if (!a && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[m]) return;
                        a ? this._rearrange(i, a, null, !0) : this._rearrange(i, null, this.containers[m].element, !0), this._trigger("change", i, this._uiHash()), this.containers[m]._trigger("change", i, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", i, this._uiHash(this)), this.containers[m].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var n = this.options,
                    i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, n, i, r = this.options;
                "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, n) {
                n || (n = this.position);
                var i = "absolute" === e ? 1 : -1,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(r[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                    left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
                }
            },
            _generatePosition: function(e) {
                var n, i, r = this.options,
                    o = e.pageX,
                    s = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
                    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(t, e, n, i) {
                n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var r = this.counter;
                this._delay(function() {
                    r === this.counter && this.refreshPositions(!i)
                })
            },
            _clear: function(t, e) {
                this.reverting = !1;
                var n, i = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && i.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || i.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (i.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), i.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), i.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || i.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])), this.containers[n].containerCache.over && (i.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!e) {
                        for (this._trigger("beforeStop", t, this._uiHash()), n = 0; i.length > n; n++) i[n].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                    for (n = 0; i.length > n; n++) i[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var n = e || this;
                return {
                    helper: n.helper,
                    placeholder: n.placeholder || t([]),
                    position: n.position,
                    originalPosition: n.originalPosition,
                    offset: n.positionAbs,
                    item: n.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }(jQuery),
    function(t) {
        var e = 0;
        t.widget("ui.autocomplete", {
            version: "1.10.3",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var e, n, i, r = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === r,
                    s = "input" === r;
                this.isMultiLine = o ? !0 : s ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || s ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(r) {
                        if (this.element.prop("readOnly")) return e = !0, i = !0, void(n = !0);
                        e = !1, i = !1, n = !1;
                        var o = t.ui.keyCode;
                        switch (r.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", r);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", r);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", r);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", r);
                                break;
                            case o.ENTER:
                            case o.NUMPAD_ENTER:
                                this.menu.active && (e = !0, r.preventDefault(), this.menu.select(r));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(r);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(r), r.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(r)
                        }
                    },
                    keypress: function(i) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                        if (!n) {
                            var r = t.ui.keyCode;
                            switch (i.keyCode) {
                                case r.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case r.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case r.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case r.DOWN:
                                    this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function(t) {
                        return i ? (i = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var n = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                            var e = this;
                            this.document.one("mousedown", function(i) {
                                i.target === e.element[0] || i.target === n || t.contains(n, i.target) || e.close()
                            })
                        })
                    },
                    menufocus: function(e, n) {
                        if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        });
                        var i = n.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", e, {
                            item: i
                        }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(i.value) : this.liveRegion.text(i.value)
                    },
                    menuselect: function(t, e) {
                        var n = e.item.data("ui-autocomplete-item"),
                            i = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i, this.selectedItem = n
                        })), !1 !== this._trigger("select", t, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var e, n, i = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(n, i) {
                    i(t.ui.autocomplete.filter(e, n.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(e, r) {
                    i.xhr && i.xhr.abort(), i.xhr = t.ajax({
                        url: n,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            r(t)
                        },
                        error: function() {
                            r([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var t = this,
                    n = ++e;
                return function(i) {
                    n === e && t.__response(i), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({
                        label: e.label || e.value,
                        value: e.value || e.label
                    }, e)
                })
            },
            _suggest: function(e) {
                var n = this.menu.element.empty();
                this._renderMenu(n, e), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, n) {
                var i = this;
                t.each(n, function(t, n) {
                    i._renderItemData(e, n)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, n) {
                return t("<li>").append(t("<a>").text(n.label)).appendTo(e)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, n) {
                var i = RegExp(t.ui.autocomplete.escapeRegex(n), "i");
                return t.grep(e, function(t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
            }
        })
    }(jQuery),
    function(t) {
        t.widget("ui.menu", {
            version: "1.10.3",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                    this.options.disabled && t.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(e) {
                        var n = t(e.target).closest(".ui-menu-item");
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), n.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        var n = t(e.currentTarget);
                        n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, n)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var n = this.active || this.element.children(".ui-menu-item").eq(0);
                        e || this.focus(t, n)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(e) {
                function n(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var i, r, o, s, a, l = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        l = !1, r = this.previousFilter || "", o = String.fromCharCode(e.keyCode), s = !1, clearTimeout(this.filterTimer), o === r ? s = !0 : o = r + o, a = RegExp("^" + n(o), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return a.test(t(this).children("a").text())
                        }), i = s && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (o = String.fromCharCode(e.keyCode), a = RegExp("^" + n(o), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return a.test(t(this).children("a").text())
                        })), i.length ? (this.focus(e, i), i.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                l && e.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, n = this.options.icons.submenu,
                    i = this.element.find(this.options.menus);
                i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        i = e.prev("a"),
                        r = t("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(r), e.attr("aria-labelledby", i.attr("id"))
                }), e = i.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), e.children(":not(.ui-menu-item)").each(function() {
                    var e = t(this);
                    /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
            },
            focus: function(t, e) {
                var n, i;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), n = e.children(".ui-menu"), n.length && /^mouse/.test(t.type) && this._startOpening(n), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var n, i, r, o, s, a;
                this._hasScroll() && (n = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, r = e.offset().top - this.activeMenu.offset().top - n - i, o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = e.height(), 0 > r ? this.activeMenu.scrollTop(o + r) : r + a > s && this.activeMenu.scrollTop(o + r - s + a))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var n = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function(e, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var i = n ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    i.length || (i = this.element), this._close(i), this.blur(e), this.activeMenu = i
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, n) {
                var i;
                this.active && (i = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(n, i)
            },
            nextPage: function(e) {
                var n, i, r;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return n = t(this), 0 > n.offset().top - i - r
                }), this.focus(e, n)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var n, i, r;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return n = t(this), n.offset().top - i + r > 0
                }), this.focus(e, n)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var n = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, n)
            }
        })
    }(jQuery),
    function(t, e) {
        var n = "ui-effects-";
        t.effects = {
                effect: {}
            },
            function(t, e) {
                function n(t, e, n) {
                    var i = h[e.type] || {};
                    return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t)
                }

                function i(n) {
                    var i = u(),
                        r = i._rgba = [];
                    return n = n.toLowerCase(), p(l, function(t, o) {
                        var s, a = o.re.exec(n),
                            l = a && o.parse(a),
                            u = o.space || "rgba";
                        return l ? (s = i[u](l), i[c[u].cache] = s[c[u].cache], r = i._rgba = s._rgba, !1) : e
                    }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, o.transparent), i) : o[n]
                }

                function r(t, e, n) {
                    return n = (n + 1) % 1, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t
                }
                var o, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    a = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    u = t.Color = function(e, n, i, r) {
                        return new t.Color.fn.parse(e, n, i, r)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    d = u.support = {},
                    f = t("<p>")[0],
                    p = t.each;
                f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(c, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), u.fn = t.extend(u.prototype, {
                    parse: function(r, s, a, l) {
                        if (r === e) return this._rgba = [null, null, null, null], this;
                        (r.jquery || r.nodeType) && (r = t(r).css(s), s = e);
                        var h = this,
                            d = t.type(r),
                            f = this._rgba = [];
                        return s !== e && (r = [r, s, a, l], d = "array"), "string" === d ? this.parse(i(r) || o._default) : "array" === d ? (p(c.rgba.props, function(t, e) {
                            f[e.idx] = n(r[e.idx], e)
                        }), this) : "object" === d ? (r instanceof u ? p(c, function(t, e) {
                            r[e.cache] && (h[e.cache] = r[e.cache].slice())
                        }) : p(c, function(e, i) {
                            var o = i.cache;
                            p(i.props, function(t, e) {
                                if (!h[o] && i.to) {
                                    if ("alpha" === t || null == r[t]) return;
                                    h[o] = i.to(h._rgba)
                                }
                                h[o][e.idx] = n(r[t], e, !0);
                            }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])))
                        }), this) : e
                    },
                    is: function(t) {
                        var n = u(t),
                            i = !0,
                            r = this;
                        return p(c, function(t, o) {
                            var s, a = n[o.cache];
                            return a && (s = r[o.cache] || o.to && o.to(r._rgba) || [], p(o.props, function(t, n) {
                                return null != a[n.idx] ? i = a[n.idx] === s[n.idx] : e
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return p(c, function(n, i) {
                            e[i.cache] && t.push(n)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var i = u(t),
                            r = i._space(),
                            o = c[r],
                            s = 0 === this.alpha() ? u("transparent") : this,
                            a = s[o.cache] || o.to(s._rgba),
                            l = a.slice();
                        return i = i[o.cache], p(o.props, function(t, r) {
                            var o = r.idx,
                                s = a[o],
                                u = i[o],
                                c = h[r.type] || {};
                            null !== u && (null === s ? l[o] = u : (c.mod && (u - s > c.mod / 2 ? s += c.mod : s - u > c.mod / 2 && (s -= c.mod)), l[o] = n((u - s) * e + s, r)))
                        }), this[r](l)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                            i = n.pop(),
                            r = u(e)._rgba;
                        return u(t.map(n, function(t, e) {
                            return (1 - i) * r[e] + i * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            n = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            n = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
                    },
                    toHexString: function(e) {
                        var n = this._rgba.slice(),
                            i = n.pop();
                        return e && n.push(~~(255 * i)), "#" + t.map(n, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), u.fn.parse.prototype = u.fn, c.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, n, i = t[0] / 255,
                        r = t[1] / 255,
                        o = t[2] / 255,
                        s = t[3],
                        a = Math.max(i, r, o),
                        l = Math.min(i, r, o),
                        u = a - l,
                        c = a + l,
                        h = .5 * c;
                    return e = l === a ? 0 : i === a ? 60 * (r - o) / u + 360 : r === a ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === u ? 0 : .5 >= h ? u / c : u / (2 - c), [Math.round(e) % 360, n, h, null == s ? 1 : s]
                }, c.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        n = t[1],
                        i = t[2],
                        o = t[3],
                        s = .5 >= i ? i * (1 + n) : i + n - i * n,
                        a = 2 * i - s;
                    return [Math.round(255 * r(a, s, e + 1 / 3)), Math.round(255 * r(a, s, e)), Math.round(255 * r(a, s, e - 1 / 3)), o]
                }, p(c, function(i, r) {
                    var o = r.props,
                        s = r.cache,
                        l = r.to,
                        c = r.from;
                    u.fn[i] = function(i) {
                        if (l && !this[s] && (this[s] = l(this._rgba)), i === e) return this[s].slice();
                        var r, a = t.type(i),
                            h = "array" === a || "object" === a ? i : arguments,
                            d = this[s].slice();
                        return p(o, function(t, e) {
                            var i = h["object" === a ? t : e.idx];
                            null == i && (i = d[e.idx]), d[e.idx] = n(i, e)
                        }), c ? (r = u(c(d)), r[s] = d, r) : u(d)
                    }, p(o, function(e, n) {
                        u.fn[e] || (u.fn[e] = function(r) {
                            var o, s = t.type(r),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
                                u = this[l](),
                                c = u[n.idx];
                            return "undefined" === s ? c : ("function" === s && (r = r.call(this, c), s = t.type(r)), null == r && n.empty ? this : ("string" === s && (o = a.exec(r), o && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[n.idx] = r, this[l](u)))
                        })
                    })
                }), u.hook = function(e) {
                    var n = e.split(" ");
                    p(n, function(e, n) {
                        t.cssHooks[n] = {
                            set: function(e, r) {
                                var o, s, a = "";
                                if ("transparent" !== r && ("string" !== t.type(r) || (o = i(r)))) {
                                    if (r = u(o || r), !d.rgba && 1 !== r._rgba[3]) {
                                        for (s = "backgroundColor" === n ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && s && s.style;) try {
                                            a = t.css(s, "backgroundColor"), s = s.parentNode
                                        } catch (l) {}
                                        r = r.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    r = r.toRgbaString()
                                }
                                try {
                                    e.style[n] = r
                                } catch (l) {}
                            }
                        }, t.fx.step[n] = function(e) {
                            e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, u.hook(s), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return p(["Top", "Right", "Bottom", "Left"], function(n, i) {
                            e["border" + i + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function n(e) {
                    var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (r && r.length && r[0] && r[r[0]])
                        for (i = r.length; i--;) n = r[i], "string" == typeof r[n] && (o[t.camelCase(n)] = r[n]);
                    else
                        for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
                    return o
                }

                function i(e, n) {
                    var i, r, s = {};
                    for (i in n) r = n[i], e[i] !== r && (o[i] || (t.fx.step[i] || !isNaN(parseFloat(r))) && (s[i] = r));
                    return s
                }
                var r = ["add", "remove", "toggle"],
                    o = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, n) {
                    t.fx.step[n] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, n, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(e, o, s, a) {
                    var l = t.speed(o, s, a);
                    return this.queue(function() {
                        var o, s = t(this),
                            a = s.attr("class") || "",
                            u = l.children ? s.find("*").addBack() : s;
                        u = u.map(function() {
                            var e = t(this);
                            return {
                                el: e,
                                start: n(this)
                            }
                        }), o = function() {
                            t.each(r, function(t, n) {
                                e[n] && s[n + "Class"](e[n])
                            })
                        }, o(), u = u.map(function() {
                            return this.end = n(this.el[0]), this.diff = i(this.start, this.end), this
                        }), s.attr("class", a), u = u.map(function() {
                            var e = this,
                                n = t.Deferred(),
                                i = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        n.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, i), n.promise()
                        }), t.when.apply(t, u.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(s[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(n, i, r, o) {
                            return i ? t.effects.animateClass.call(this, {
                                add: n
                            }, i, r, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(n, i, r, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: n
                            }, i, r, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(n) {
                        return function(i, r, o, s, a) {
                            return "boolean" == typeof r || r === e ? o ? t.effects.animateClass.call(this, r ? {
                                add: i
                            } : {
                                remove: i
                            }, o, s, a) : n.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, r, o, s)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, n, i, r, o) {
                        return t.effects.animateClass.call(this, {
                            add: n,
                            remove: e
                        }, i, r, o)
                    }
                })
            }(),
            function() {
                function i(e, n, i, r) {
                    return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                        effect: e
                    }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = r || n.complete, e
                }

                function r(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                }
                t.extend(t.effects, {
                    version: "1.10.3",
                    save: function(t, e) {
                        for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, i) {
                        var r, o;
                        for (o = 0; i.length > o; o++) null !== i[o] && (r = t.data(n + i[o]), r === e && (r = ""), t.css(i[o], r))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var n, i;
                        switch (t[0]) {
                            case "top":
                                n = 0;
                                break;
                            case "middle":
                                n = .5;
                                break;
                            case "bottom":
                                n = 1;
                                break;
                            default:
                                n = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                i = 0;
                                break;
                            case "center":
                                i = .5;
                                break;
                            case "right":
                                i = 1;
                                break;
                            default:
                                i = t[1] / e.width
                        }
                        return {
                            x: i,
                            y: n
                        }
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var n = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            i = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            r = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (s) {
                            o = document.body
                        }
                        return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(n, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, i) {
                            n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(r), i.css(n).show()
                    },
                    removeWrapper: function(e) {
                        var n = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                    },
                    setTransition: function(e, n, i, r) {
                        return r = r || {}, t.each(n, function(t, n) {
                            var o = e.cssUnit(n);
                            o[0] > 0 && (r[n] = o[0] * i + o[1])
                        }), r
                    }
                }), t.fn.extend({
                    effect: function() {
                        function e(e) {
                            function i() {
                                t.isFunction(o) && o.call(r[0]), t.isFunction(e) && e()
                            }
                            var r = t(this),
                                o = n.complete,
                                a = n.mode;
                            (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), i()) : s.call(r[0], n, i)
                        }
                        var n = i.apply(this, arguments),
                            r = n.mode,
                            o = n.queue,
                            s = t.effects.effect[n.effect];
                        return t.fx.off || !s ? r ? this[r](n.duration, n.complete) : this.each(function() {
                            n.complete && n.complete.call(this)
                        }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
                    },
                    show: function(t) {
                        return function(e) {
                            if (r(e)) return t.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "show", this.effect.call(this, n)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(e) {
                            if (r(e)) return t.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "hide", this.effect.call(this, n)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(e) {
                            if (r(e) || "boolean" == typeof e) return t.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "toggle", this.effect.call(this, n)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var n = this.css(e),
                            i = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            n.indexOf(e) > 0 && (i = [parseFloat(n), e])
                        }), i
                    }
                })
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, n) {
                    e[n] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, n = 4;
                            ((e = Math.pow(2, --n)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, n) {
                    t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function(t) {
                        return 1 - n(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function(t) {
        t.effects.effect.fade = function(e, n) {
            var i = t(this),
                r = t.effects.setMode(i, e.mode || "toggle");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: n
            })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.highlight = function(e, n) {
            var i = t(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                o = t.effects.setMode(i, e.mode || "show"),
                s = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" === o && (s.opacity = 0), t.effects.save(i, r), i.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === o && i.hide(), t.effects.restore(i, r), n()
                }
            })
        }
    }(jQuery), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = t.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function i() {
                        var i, r;
                        return n.settings.submitHandler ? (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), void 0 !== r ? r : !1) : !0
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                var e, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, n = t(this[0].form).validate(), this.each(function() {
                    e = n.element(this) && e
                })), e
            },
            removeAttrs: function(e) {
                var n = {},
                    i = this;
                return t.each(e.split(/\s/), function(t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function(e, n) {
                var i, r, o, s, a, l, u = this[0];
                if (e) switch (i = t.data(u.form, "validator").settings, r = i.rules, o = t.validator.staticRules(u), e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = t.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, t.each(n.split(/\s/), function(e, n) {
                            l[n] = o[n], delete o[n], "required" === n && t(u).removeAttr("aria-required")
                        }), l) : (delete r[u.name], o)
                }
                return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), s.required && (a = s.required, delete s.required, s = t.extend({
                    required: a
                }, s), t(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = t.extend(s, {
                    remote: a
                })), s
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, n) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
        }, t.validator.format = function(e, n) {
            return 1 === arguments.length ? function() {
                var n = t.makeArray(arguments);
                return n.unshift(e), t.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return n
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
                },
                unhighlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var n = t.data(this[0].form, "validator"),
                            i = "on" + e.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[i] && !this.is(r.ignore) && r[i].call(n, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};
                    t.each(this.settings.groups, function(e, n) {
                        "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                            i[n] = e
                        })
                    }), n = this.settings.rules, t.each(n, function(e, i) {
                        n[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var n = this.clean(e),
                        i = this.validationTargetFor(n),
                        r = !0;
                    return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = t(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var n in e) this.errorList.push({
                            message: e[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, n = 0;
                    for (e in t) n++;
                    return n
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        n = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !e.objectLength(t(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var n, i = t(e),
                        r = e.type;
                    return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : i.val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n, i, r, o = t(e).rules(),
                        s = t.map(o, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    for (i in o) {
                        r = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if (n = t.validator.methods[i].call(this, l, e, r.parameters), "dependency-mismatch" === n && 1 === s) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!n) return this.formatAndAdd(e, r), !1
                        } catch (u) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", u), u
                        }
                    }
                    return a ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
                },
                customDataMessage: function(e, n) {
                    return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0
                },
                defaultMessage: function(e, n) {
                    return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, n) {
                    var i = this.defaultMessage(e, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: e,
                        method: n.method
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, n;
                    for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, n) {
                    var i, r, o, s = this.errorsFor(e),
                        a = this.idOrName(e),
                        l = t(e).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(n || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (o = s.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, t(e).attr("aria-describedby", l), r = this.groups[e.name], r && t.each(this.groups, function(e, n) {
                        n === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                    }))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var n = this.idOrName(e),
                        i = t(e).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (r = r + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, n) {
                        return !!t(e, n.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, n) {
                e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var n = {},
                    i = t(e).attr("class");
                return i && t.each(i.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(e) {
                var n, i, r = {},
                    o = t(e),
                    s = e.getAttribute("type");
                for (n in t.validator.methods) "required" === n ? (i = e.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), /min|max/.test(n) && (null === s || /number|range|text/.test(s)) && (i = Number(i)), i || 0 === i ? r[n] = i : s === n && "range" !== s && (r[n] = !0);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(e) {
                var n, i, r = {},
                    o = t(e);
                for (n in t.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function(e) {
                var n = {},
                    i = t.data(e.form, "validator");
                return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
            },
            normalizeRules: function(e, n) {
                return t.each(e, function(i, r) {
                    if (r === !1) return void delete e[i];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? e[i] = void 0 !== r.param ? r.param : !0 : delete e[i]
                    }
                }), t.each(e, function(i, r) {
                    e[i] = t.isFunction(r) ? r(n) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var n;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var n = {};
                    t.each(e.split(/\s/), function() {
                        n[this] = !0
                    }), e = n
                }
                return e
            },
            addMethod: function(e, n, i) {
                t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = t(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var n, i, r = 0,
                        o = 0,
                        s = !1;
                    if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                    for (n = t.length - 1; n >= 0; n--) i = t.charAt(n), o = parseInt(i, 10), s && (o *= 2) > 9 && (o -= 9), r += o, s = !s;
                    return r % 10 === 0
                },
                minlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || i >= r
                },
                rangelength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(t, e, n) {
                    return this.optional(e) || t >= n
                },
                max: function(t, e, n) {
                    return this.optional(e) || n >= t
                },
                range: function(t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                equalTo: function(e, n, i) {
                    var r = t(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(n).valid()
                    }), e === r.val()
                },
                remote: function(e, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r, o, s = this.previousValue(n);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), s.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = s.message, i = "string" == typeof i && {
                        url: i
                    } || i, s.old === e ? s.valid : (s.old = e, r = this, this.startRequest(n), o = {}, o[n.name] = e, t.ajax(t.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: r.currentForm,
                        success: function(i) {
                            var o, a, l, u = i === !0 || "true" === i;
                            r.settings.messages[n.name].remote = s.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, a = i || r.defaultMessage(n, "remote"), o[n.name] = s.message = t.isFunction(a) ? a(e) : a, r.invalid[n.name] = !0, r.showErrors(o)), s.valid = u, r.stopRequest(n, u)
                        }
                    }, i)), "pending")
                }
            }
        }), t.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        };
        var e, n = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, i) {
            var r = t.port;
            "abort" === t.mode && (n[r] && n[r].abort(), n[r] = i)
        }) : (e = t.ajax, t.ajax = function(i) {
            var r = ("mode" in i ? i : t.ajaxSettings).mode,
                o = ("port" in i ? i : t.ajaxSettings).port;
            return "abort" === r ? (n[o] && n[o].abort(), n[o] = e.apply(this, arguments), n[o]) : e.apply(this, arguments)
        }), t.extend(t.fn, {
            validateDelegate: function(e, n, i) {
                return this.bind(n, function(n) {
                    var r = t(n.target);
                    return r.is(e) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }),
    function(t) {
        function e() {}

        function n(t) {
            function n(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, n) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var u = this[a],
                                c = t.data(u, e);
                            if (c)
                                if (t.isFunction(c[r]) && "_" !== r.charAt(0)) {
                                    var h = c[r].apply(c, s);
                                    if (void 0 !== h) return h
                                } else o("no such method '" + r + "' for " + e + " instance");
                            else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'");
                        }
                        return this
                    }
                    return this.each(function() {
                        var i = t.data(this, e);
                        i ? (i.option(r), i._init()) : (i = new n(this, r), t.data(this, e, i))
                    })
                }
            }
            if (t) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    n(e), r(t, e)
                }, t.bridget
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(t.jQuery)
    }(window),
    function(t) {
        var e = document.documentElement,
            n = function() {};
        e.addEventListener ? n = function(t, e, n) {
            t.addEventListener(e, n, !1)
        } : e.attachEvent && (n = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var e = t.event;
                e.target = e.target || e.srcElement, i.handleEvent.call(i, e)
            } : function() {
                var n = t.event;
                n.target = n.target || n.srcElement, i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var i = function() {};
        e.removeEventListener ? i = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        } : e.detachEvent && (i = function(t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : o.push(t))
        }

        function n(t) {
            var n = "readystatechange" === t.type && "complete" !== r.readyState;
            if (!e.isReady && !n) {
                e.isReady = !0;
                for (var i = 0, s = o.length; s > i; i++) {
                    var a = o[i];
                    a()
                }
            }
        }

        function i(i) {
            return i.bind(r, "DOMContentLoaded", n), i.bind(r, "readystatechange", n), i.bind(t, "load", n), e
        }
        var r = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], i)) : t.docReady = i(t.eventie)
    }(this),
    function() {
        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var i = t.prototype;
        i.getListeners = function(t) {
            var e, n, i = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, i.flattenListeners = function(t) {
            var e, n = [];
            for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
            return n
        }, i.getListenersAsObject = function(t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, i.addListener = function(t, n) {
            var i, r = this.getListenersAsObject(t),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === e(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
            return this.getListeners(t), this
        }, i.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function(t, n) {
            var i, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (i = e(o[r], n), -1 !== i && o[r].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function(t, e, n) {
            var i, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (i = n.length; i--;) o.call(this, e, n[i]);
            else
                for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }, i.removeEvent = function(t) {
            var e, n = typeof t,
                i = this._getEvents();
            if ("string" === n) delete i[t];
            else if ("object" === n)
                for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
            var n, i, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof i[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, o = n.length; o > r; r++)
                    if (e = n[r] + t, "string" == typeof i[e]) return e
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                n = -1 === t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, n = a.length; n > e; e++) {
                var i = a[e];
                t[i] = 0
            }
            return t
        }

        function i(t) {
            function i(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = s(t);
                    if ("none" === i.display) return n();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var c = o.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), h = 0, d = a.length; d > h; h++) {
                        var f = a[h],
                            p = i[f];
                        p = r(t, p);
                        var m = parseFloat(p);
                        o[f] = isNaN(m) ? 0 : m
                    }
                    var g = o.paddingLeft + o.paddingRight,
                        v = o.paddingTop + o.paddingBottom,
                        $ = o.marginLeft + o.marginRight,
                        b = o.marginTop + o.marginBottom,
                        y = o.borderLeftWidth + o.borderRightWidth,
                        w = o.borderTopWidth + o.borderBottomWidth,
                        x = c && l,
                        C = e(i.width);
                    C !== !1 && (o.width = C + (x ? 0 : g + y));
                    var S = e(i.height);
                    return S !== !1 && (o.height = S + (x ? 0 : v + w)), o.innerWidth = o.width - (g + y), o.innerHeight = o.height - (v + w), o.outerWidth = o.width + $, o.outerHeight = o.height + b, o
                }
            }

            function r(t, e) {
                if (o || -1 === e.indexOf("%")) return e;
                var n = t.style,
                    i = n.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), n.left = e, e = n.pixelLeft, n.left = i, s && (r.left = s), e
            }
            var l, u = t("boxSizing");
            return function() {
                if (u) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[u] = "border-box";
                    var n = document.body || document.documentElement;
                    n.appendChild(t);
                    var i = s(t);
                    l = 200 === e(i.width), n.removeChild(t)
                }
            }(), i
        }
        var r = document.defaultView,
            o = r && r.getComputedStyle,
            s = o ? function(t) {
                return r.getComputedStyle(t, null)
            } : function(t) {
                return t.currentStyle
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], i) : t.getSize = i(t.getStyleProperty)
    }(window),
    function(t, e) {
        function n(t, e) {
            return t[a](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function r(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, o = n.length; o > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function o(t, e) {
            return i(t), n(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; i > n; n++) {
                var r = t[n],
                    o = r + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        if (a) {
            var l = document.createElement("div"),
                u = n(l, "div");
            s = u ? n : o
        } else s = r;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function i(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t, r, o) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = o("transition"),
                u = o("transform"),
                c = l && u,
                h = !!o("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                p = function() {
                    for (var t = {}, e = 0, n = f.length; n > e; e++) {
                        var i = f[e],
                            r = o(i);
                        r && r !== i && (t[i] = r)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transition = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = r(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var n in t) {
                    var i = p[n] || n;
                    e[i] = t[n]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    n = e.isOriginLeft,
                    i = e.isOriginTop,
                    r = parseInt(t[n ? "left" : "right"], 10),
                    o = parseInt(t[i ? "top" : "bottom"], 10);
                r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
                var a = this.layout.size;
                r -= n ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    n = {};
                e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var m = h ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var n = this.position.x,
                    i = this.position.y,
                    r = parseInt(t, 10),
                    o = parseInt(e, 10),
                    s = r === this.position.x && o === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                var a = t - n,
                    l = e - i,
                    u = {},
                    c = this.layout.options;
                a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = m(a, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transition;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    var i = this.element.offsetHeight;
                    i = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var g = u && i(u) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: g,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transition,
                        i = v[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                        var r = e.onEnd[i];
                        r.call(this), delete e.onEnd[i]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var n in t) e[n] = "";
                this.css(e)
            };
            var $ = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css($)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var o = document.defaultView,
            s = o && o.getComputedStyle ? function(t) {
                return o.getComputedStyle(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], r) : (t.Outlayer = {}, t.Outlayer.Item = r(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === h.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, e) {
            var n = f(e, t); - 1 !== n && e.splice(n, 1)
        }

        function o(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        }

        function s(n, s, h, f, p, m) {
            function g(t, n) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return void(l && l.error("Bad " + this.settings.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.options), this.option(n);
                var i = ++$;
                this.element.outlayerGUID = i, b[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function v(t, n) {
                t.prototype[n] = e({}, g.prototype[n])
            }
            var $ = 0,
                b = {};
            return g.prototype.settings = {
                namespace: "outlayer",
                item: m
            }, g.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(g.prototype, h.prototype), g.prototype.option = function(t) {
                e(this.options, t)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), n = this.settings.item, i = [], r = 0, o = e.length; o > r; r++) {
                    var s = e[r],
                        a = new n(s, this);
                    i.push(a)
                }
                return i
            }, g.prototype._filterFindItemElements = function(t) {
                t = i(t);
                for (var e = this.options.itemSelector, n = [], r = 0, o = t.length; o > r; r++) {
                    var s = t[r];
                    if (d(s))
                        if (e) {
                            p(s, e) && n.push(s);
                            for (var a = s.querySelectorAll(e), l = 0, u = a.length; u > l; l++) n.push(a[l])
                        } else n.push(s)
                }
                return n
            }, g.prototype.getItemElements = function() {
                for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
                return t
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = f(this.element)
            }, g.prototype._getMeasurement = function(t, e) {
                var n, i = this.options[t];
                i ? ("string" == typeof i ? n = this.element.querySelector(i) : d(i) && (n = i), this[t] = n ? f(n)[e] : i) : this[t] = 0
            }, g.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, g.prototype._getItemsForLayout = function(t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var r = t[n];
                    r.isIgnored || e.push(r)
                }
                return e
            }, g.prototype._layoutItems = function(t, e) {
                if (!t || !t.length) return void this.emitEvent("layoutComplete", [this, t]);
                this._itemsOn(t, "layout", function() {
                    this.emitEvent("layoutComplete", [this, t])
                });
                for (var n = [], i = 0, r = t.length; r > i; i++) {
                    var o = t[i],
                        s = this._getItemLayoutPosition(o);
                    s.item = o, s.isInstant = e, n.push(s)
                }
                this._processLayoutQueue(n)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, g.prototype._positionItem = function(t, e, n, i) {
                i ? t.goTo(e, n) : t.moveTo(e, n)
            }, g.prototype._postLayout = function() {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }, g.prototype._getContainerSize = c, g.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var n = this.size;
                    n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, g.prototype._itemsOn = function(t, e, n) {
                function i() {
                    return r++, r === o && n.call(s), !0
                }
                for (var r = 0, o = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                    var u = t[a];
                    u.on(e, i)
                }
            }, g.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, g.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, g.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        this.ignore(i)
                    }
                }
            }, g.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        r(i, this.stamps), this.unignore(i)
                    }
            }, g.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var n = this.stamps[t];
                        this._manageStamp(n)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, g.prototype._manageStamp = c, g.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    i = f(t),
                    r = {
                        left: e.left - n.left - i.marginLeft,
                        top: e.top - n.top - i.marginTop,
                        right: n.right - e.right - i.marginRight,
                        bottom: n.bottom - e.bottom - i.marginBottom
                    };
                return r
            }, g.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                n.unbind(t, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, g.prototype.resize = function() {
                var t = f(this.element),
                    e = this.size && t;
                e && t.innerWidth === this.size.innerWidth || this.layout()
            }, g.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, g.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, g.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
                }
            }, g.prototype.reveal = function(t) {
                if (t && t.length)
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        i.reveal()
                    }
            }, g.prototype.hide = function(t) {
                if (t && t.length)
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        i.hide()
                    }
            }, g.prototype.getItem = function(t) {
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    if (i.element === t) return i
                }
            }, g.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], n = 0, i = t.length; i > n; n++) {
                        var r = t[n],
                            o = this.getItem(r);
                        o && e.push(o)
                    }
                    return e
                }
            }, g.prototype.remove = function(t) {
                t = i(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var n = 0, o = e.length; o > n; n++) {
                        var s = e[n];
                        s.remove(), r(s, this.items)
                    }
                }
            }, g.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    i.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, u && u.removeData(this.element, this.settings.namespace)
            }, g.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && b[e]
            }, g.create = function(t, n) {
                function i() {
                    g.apply(this, arguments)
                }
                return e(i.prototype, g.prototype), v(i, "options"), v(i, "settings"), e(i.prototype.options, n), i.prototype.settings.namespace = t, i.data = g.data, i.Item = function() {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, i.prototype.settings.item = i.Item, s(function() {
                    for (var e = o(t), n = a.querySelectorAll(".js-" + e), r = "data-" + e + "-options", s = 0, c = n.length; c > s; s++) {
                        var h, d = n[s],
                            f = d.getAttribute(r);
                        try {
                            h = f && JSON.parse(f)
                        } catch (p) {
                            l && l.error("Error parsing " + r + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + p);
                            continue
                        }
                        var m = new i(d, h);
                        u && u.data(d, t, m)
                    }
                }), u && u.bridget && u.bridget(t, i), i
            }, g.Item = m, g
        }
        var a = t.document,
            l = t.console,
            u = t.jQuery,
            c = function() {},
            h = Object.prototype.toString,
            d = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t, e) {
            var i = t.create("masonry");
            return i.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, i.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        n = t && t.element;
                    this.columnWidth = n && e(n).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, i.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    n = e(t);
                this.containerWidth = n && n.innerWidth
            }, i.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && 1 > e ? "round" : "ceil",
                    r = Math[i](t.size.outerWidth / this.columnWidth);
                r = Math.min(r, this.cols);
                for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = n(o, s), l = {
                        x: this.columnWidth * a,
                        y: s
                    }, u = s + t.size.outerHeight, c = this.cols + 1 - o.length, h = 0; c > h; h++) this.colYs[a + h] = u;
                return l
            }, i.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                    var r = this.colYs.slice(i, i + t);
                    e[i] = Math.max.apply(Math, r)
                }
                return e
            }, i.prototype._manageStamp = function(t) {
                var n = e(t),
                    i = this._getElementOffset(t),
                    r = this.options.isOriginLeft ? i.left : i.right,
                    o = r + n.outerWidth,
                    s = Math.floor(r / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(o / this.columnWidth);
                a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
            }, i.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, i.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, i.prototype.resize = function() {
                var t = this.containerWidth;
                this.getContainerWidth(), t !== this.containerWidth && this.layout()
            }, i
        }
        var n = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (r === e) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window), $(document).ready(function() {
        $("#new_user").validate({
            rules: {
                "user[birthday(1i)]": {
                    required: !0
                },
                "user[birthday(2i)]": {
                    required: !0
                },
                "user[birthday(3i)]": {
                    required: !0
                },
                "user[language_id]": {
                    required: !0
                },
                "user[user_source_id]": {
                    required: !0
                },
                "user[country]": {
                    required: !0
                },
                "user[gender]": {
                    required: !0
                },
                "user[occupation_id]": {
                    required: !0
                }
            },
            messages: {
                "user[birthday(1i)]": {
                    required: "Please select a year"
                },
                "user[birthday(2i)]": {
                    required: "Please select a month"
                },
                "user[birthday(3i)]": {
                    required: "Please select a day"
                },
                "user[language_id]": {
                    required: "Please select a language"
                },
                "user[user_source_id]": {
                    required: "Please select an option from the list, if none are appropriate please select 'Other'"
                },
                "user[country]": {
                    required: "Please select a country"
                },
                "user[gender]": {
                    required: "Please select an option"
                },
                "user[occupation_id]": {
                    required: "Please select an occupation"
                }
            }
        }), $("#edit_user").validate({
            rules: {
                "user[birthday(1i)]": {
                    required: !0
                },
                "user[birthday(2i)]": {
                    required: !0
                },
                "user[birthday(3i)]": {
                    required: !0
                },
                "user[language_id]": {
                    required: !0
                },
                "user[user_source_id]": {
                    required: !0
                },
                "user[country]": {
                    required: !0
                },
                "user[gender]": {
                    required: !0
                },
                "user[occupation_id]": {
                    required: !0
                }
            },
            messages: {
                "user[birthday(1i)]": {
                    required: "Please select a year"
                },
                "user[birthday(2i)]": {
                    required: "Please select a month"
                },
                "user[birthday(3i)]": {
                    required: "Please select a day"
                },
                "user[language_id]": {
                    required: "Please select a language"
                },
                "user[user_source_id]": {
                    required: "Please select an option from the list, if none are appropriate please select 'Other'"
                },
                "user[country]": {
                    required: "Please select a country"
                },
                "user[gender]": {
                    required: "Please select an option"
                },
                "user[occupation_id]": {
                    required: "Please select an occupation"
                }
            }
        })
    }),
    function() {
        var t;
        t = function(t, e, n, i) {
            return $.ajax({
                method: "POST",
                url: t,
                data: {
                    search: {
                        query: e,
                        tags: n,
                        type: i
                    }
                },
                dataType: "json",
                success: function(t) {
                    return $("#search_result > .container").html(t.attachmentPartial)
                }
            })
        }, $(document).ready(function() {
            var e;
            return e = $(".tagsinput").tagsInput({
                defaultText: "+ Tag",
                height: "auto",
                width: "auto",
                delimiter: ";",
                onChange: function() {
                    return t($("#search_form").attr("action"), $("#search_query").val(), $("#search_tags").val(), $("#search_type").val())
                }
            }), $("#search_tags_tag").hide(), $("#search_query").keypress(function(t) {
                var n;
                return n = $(this), 13 === t.which ? (t.preventDefault(), e.addTag(n.val()), n.val("")) : void 0
            }).autocomplete({
                appendTo: "#autocomplete-content",
                source: function(t, e) {
                    return $.ajax({
                        url: $("#search_query").attr("data-url"),
                        data: {
                            term: t.term,
                            type: $("#search_type").val()
                        },
                        success: function(t) {
                            return e(t)
                        }
                    })
                },
                select: function(t, n) {
                    return t.preventDefault(), e.addTag(n.item.value), $("#search_query").val("")
                }
            }), $("#search_query_header").autocomplete({
                source: function(t, e) {
                    return $.ajax({
                        url: $("#search_query_header").attr("data-url"),
                        data: {
                            term: t.term,
                            type: $("#search_type_header").val()
                        },
                        success: function(t) {
                            return e(t)
                        }
                    })
                },
                select: function(t, e) {
                    return t.preventDefault(), $("#search_tags_header").val(e.item.value.toLowerCase()), $("#search_query_header").val(""), $("#search_form_header").submit()
                }
            }), $("#search_form_header").submit(function(t) {
                var e;
                return e = $("#search_query_header"), e.val().length > 0 ? ($("#search_tags_header").val(e.val().toLowerCase()), e.val("")) : void 0
            }), $("#search_form").submit(function(n) {
                var i, r, o;
                return n.preventDefault(), i = $(this), r = $("#search_query"), e = $("#search_tags"), o = $("#search_type"), r.val().length > 0 && (e.addTag(r.val().toLowerCase()), r.val("")), t(i.attr("action"), r.val(), e.val(), o.val())
            })
        })
    }.call(this);
