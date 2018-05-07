// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 3
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {
    var aa, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ea = function() {
            ea = function() {};
            ca.Symbol || (ca.Symbol = fa)
        },
        fa = function() {
            var a = 0;
            return function(b) {
                return "jscomp_symbol_" + (b || "") + a++
            }
        }(),
        ia = function() {
            ea();
            var a = ca.Symbol.iterator;
            a || (a = ca.Symbol.iterator = ca.Symbol("iterator"));
            "function" != typeof Array.prototype[a] &&
                ba(Array.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return ha(this)
                    }
                });
            ia = function() {}
        },
        ha = function(a) {
            var b = 0;
            return ja(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        },
        ja = function(a) {
            ia();
            var b = {
                next: a
            };
            b[ca.Symbol.iterator] = function() {
                return this
            };
            return b
        },
        ka = function(a) {
            ia();
            var b = a[Symbol.iterator];
            return b ? b.call(a) : ha(a)
        };
    var __jsm;
    (function() {
        (function(a) {
            __jsm = a;
            __jsm.a = "jsm";
            __jsm.b = ["customScripts"];
            __jsm.c = !0
        })(function(a) {
            if (void 0 !== a["21"]) {
                var b = a["21"];
                try {
                    var c = q("google_tag_manager");
                    return c && c.e && c.e(b)
                } catch (d) {}
            }
        })
    })();
    var __e;
    (function() {
        (function(a) {
            __e = a;
            __e.a = "e";
            __e.b = ["google"];
            __e.c = !0
        })(function() {
            return La
        })
    })();
    var __f;
    (function() {
        (function(a) {
            __f = a;
            __f.a = "f";
            __f.b = ["google"];
            __f.c = !0
        })(function(a) {
            var b = T("gtm.referrer", 1) || J.referrer,
                c;
            if (b) {
                var d;
                if (a["11"] && "URL" != a["11"]) {
                    var e = U(String(b));
                    d = V(e, a["11"], a[""], a[""], a[""])
                } else d = Ma(U(String(b)));
                c = d
            } else c = String(b);
            return c
        })
    })();
    var __cl;
    (function() {
        function a(a) {
            var b = a.target;
            if (b) {
                var d = Na(b);
                d.event = "gtm.click";
                xa(d)
            }
        }(function(a) {
            __cl = a;
            __cl.a = "cl";
            __cl.b = ["google"];
            __cl.c = !0
        })(function(b) {
            if (!Aa("cl")) {
                var c = q("document");
                P(c, "click", a, !0);
                Ea("cl");
                var d = Da("cl", "legacyTeardown", void 0);
                d && d()
            }
            w(b["33"])
        })
    })();


    var __u;
    (function() {
        (function(a) {
            __u = a;
            __u.a = "u";
            __u.b = ["google"];
            __u.c = !0
        })(function(a) {
            var b;
            b = (b = a[""] ? a[""] : T("gtm.url", 1)) || oa();
            var c = a["11"],
                d;
            if (c && "URL" != c) {
                var e = U(String(b));
                d = V(e, c, "HOST" == c ? a[""] : void 0, "PATH" == c ? a[""] : void 0, "QUERY" == c ? a[""] : void 0)
            } else d = Ma(U(String(b)));
            return d
        })
    })();
    var __v;
    (function() {
        (function(a) {
            __v = a;
            __v.a = "v";
            __v.b = ["google"];
            __v.c = !0
        })(function(a) {
            var b = T(a["22"].replace(/\\\./g, "."), a["12"] || 1);
            return void 0 !== b ? b : a["13"]
        })
    })();
    var __ua;
    (function() {
        var a;
        (function(a) {
            __ua = a;
            __ua.a = "ua";
            __ua.b = ["google"];
            __ua.c = !0
        })(function(b) {
            var c = {},
                d = {},
                e = {},
                f = {},
                g = {};
            if (b[""]) {
                var h = b[""];
                Sa(Q(h[""], "fieldName", "value"), d);
                Sa(Q(h[""], "index", "group"), e);
                Sa(Q(h[""], "index", "dimension"), f);
                Sa(Q(h[""], "index", "metric"), g);
                b[""] = null;
                h[""] = void 0;
                h[""] =
                    void 0;
                h[""] = void 0;
                h[""] = void 0;
                var k = Ta(h, void 0);
                b = Ta(b, k)
            }
            Sa(Q(b[""], "fieldName", "value"), d);
            Sa(Q(b[""], "index", "group"), e);
            Sa(Q(b[""], "index", "dimension"), f);
            Sa(Q(b[""], "index", "metric"), g);
            var l = Ua(b[""]),
                m = "",
                n = "";
            b[""] && "string" == typeof b[""] ? "" !== b[""] && (n = b[""],
                m = n + ".") : (n = Va(), m = n + ".");
            var p = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0
                },
                r = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0
                },
                t = function(a) {
                    var b = [].slice.call(arguments, 0);
                    b[0] = m + b[0];
                    l.apply(window, b)
                },
                v = function(a, b) {
                    return void 0 === b ? b : a(b)
                },
                z = function(a, b) {
                    if (b)
                        for (var c in b) b.hasOwnProperty(c) && t("set", a + c, b[c])
                },
                H = function() {},
                E = function(a, b, c) {
                    var d = 0;
                    if (a)
                        for (var e in a)
                            if (a.hasOwnProperty(e) && (c && p[e] || !c && void 0 === p[e])) {
                                var f = r[e] ? Ya(a[e]) : a[e];
                                "anonymizeIp" != e || f || (f = void 0);
                                b[e] = f;
                                d++
                            }
                    return d
                },
                F = {
                    name: n
                };
            E(d, F, !0);
            l("create", b["30"] || c.trackingId, F);
            t("set", "&gtm", Ha(!0));
            (function(a, c) {
                void 0 !== b[c] && t("set", a, b[c])
            })("nonInteraction", "23");
            z("contentGroup",
                e);
            z("dimension", f);
            z("metric", g);
            var L = {};
            E(d, L, !1) && t("set", L);
            var B;
            b[""] && t("require", "linkid", "linkid.js");
            t("set", "hitCallback", function() {
                var a = d && d.hitCallback;
                S(a) && a();
                b["33"]()
            });
            if ("TRACK_EVENT" == b["28"]) {
                b[""] && (t("require", "ec", "ec.js"), H());
                var D = {
                    hitType: "event",
                    eventCategory: String(b["18"] || c.category),
                    eventAction: String(b["17"] || c.action),
                    eventLabel: v(String, b["19"] || c.label),
                    eventValue: v(Za, b[""] || c.value)
                };
                E(B, D, !1);
                t("send", D);
            } else if ("TRACK_SOCIAL" == b["28"]) {} else if ("TRACK_TRANSACTION" == b["28"]) {} else if ("TRACK_TIMING" == b["28"]) {} else if ("DECORATE_LINK" == b["28"]) {} else if ("DECORATE_FORM" == b["28"]) {} else if ("TRACK_DATA" == b["28"]) {} else {
                b[""] && (t("require", "ec", "ec.js"), H());
                if (b[""] || "DISPLAY_FEATURES" ==
                    b[""]) {
                    var R = "_dc_gtm_" + String(b["30"]).replace(/[^A-Za-z0-9-]/g, "");
                    t("require", "displayfeatures", void 0, {
                        cookieName: R
                    })
                }
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == b[""] && (R = "_dc_gtm_" + String(b["30"]).replace(/[^A-Za-z0-9-]/g, ""), t("require", "adfeatures", {
                    cookieName: R
                }));
                B ? t("send", "pageview", B) : t("send", "pageview");
            }
            if (!a) {
                var M = b[""] ? "u/analytics_debug.js" : "analytics.js";
                b[""] && !b[""] && (M = "internal/" + M);
                a = !0;
                bb(x("https:", "http:", "//www.google-analytics.com/" + M, d && d.forceSSL), function() {
                    var a = $a();
                    a && a.loaded ||
                        b["34"]();
                }, b["34"])
            }
        })
    })();
    var __ytl;
    (function() {
        function a() {
            var b = Math.round(1E9 * Math.random()) + "";
            return ra(b) ? a() : b
        }

        function b(a) {
            var b = -1 !== a.indexOf("?") ? "&" : "?";
            if (-1 < a.indexOf("origin=")) return a + b + "enablejsapi=1";
            if (!m) {
                var c = q("document");
                m = c.location.protocol + "//" + c.location.hostname;
                c.location.port && (m += ":" + c.location.port)
            }
            return a + b + "enablejsapi=1&origin=" + encodeURIComponent(m)
        }

        function c(a, c) {
            var d = a.getAttribute("src");
            if (d && 0 <= d.indexOf("//www.youtube.com/embed/")) {
                if (0 < d.indexOf("enablejsapi=1")) return !0;
                if (c) return a.setAttribute("src", b(d)), !0
            }
            return !1
        }

        function d(b, d) {
            if (!b.getAttribute("data-gtm-yt-inspected-" + d.Fb) && (b.setAttribute("data-gtm-yt-inspected-" + d.Fb, "true"), c(b, d.Vb))) {
                b.id || (b.id = a());
                var e = q("YT"),
                    g = e.get(b.id);
                g || (g = new e.Player(b.id));
                var h = f(g, d),
                    k = {},
                    l;
                for (l in h) k.key = l, h.hasOwnProperty(k.key) && g.addEventListener(k.key, function(a) {
                    return function(b) {
                        return h[a.key](b.data)
                    }
                }(k)), k = {
                    key: k.key
                }
            }
        }

        function e(a) {
            w(function() {
                function b() {
                    for (var b = c.getElementsByTagName("iframe"),
                            e = b.length, f = 0; f < e; f++) d(b[f], a)
                }
                var c = q("document");
                b();
                lb(b)
            })
        }

        function f(a, b) {
            var c, d;

            function e() {
                C = mb(function() {
                    return {
                        url: O,
                        title: N,
                        Tb: K,
                        Uc: a.getCurrentTime(),
                        playbackRate: R
                    }
                }, b.Fb, a.getIframe());
                K = 0;
                N = O = "";
                R = 1;
                return f
            }

            function f(c) {
                switch (c) {
                    case l.PLAYING:
                        K = Math.round(a.getDuration());
                        O = a.getVideoUrl();
                        if (a.getVideoData) {
                            var d = a.getVideoData();
                            N = d ? d.title : ""
                        }
                        R = a.getPlaybackRate();
                        b.Sc ? C.Ka("start") : C.Va();
                        I = k(b.ud, b.td, a.getDuration());
                        return g(c);
                    default:
                        return f
                }
            }

            function g() {
                M = a.getCurrentTime();
                ma = (new Date).getTime();
                C.Ad();
                A();
                return h
            }

            function h(c) {
                var d;
                switch (c) {
                    case l.ENDED:
                        return n(c);
                    case l.PAUSED:
                        d = "pause";
                    case l.BUFFERING:
                        return d = 1 < Math.abs(((new Date).getTime() - ma) / 1E3 * R - (a.getCurrentTime() - M)) ? "seek" : d || "buffering", a.getCurrentTime() && (b.Rc ? C.Ka(d) : C.Va()), D(), m;
                    case l.UNSTARTED:
                        return e(c);
                    default:
                        return h
                }
            }

            function m(a) {
                switch (a) {
                    case l.ENDED:
                        return n(a);
                    case l.PLAYING:
                        return g(a);
                    case l.UNSTARTED:
                        return e(a);
                    default:
                        return m
                }
            }

            function n() {
                for (; d;) {
                    var a = c;
                    y.clearTimeout(d);
                    a()
                }
                b.Qc && C.Ka("complete", 1);
                return e(l.UNSTARTED)
            }

            function p() {}

            function D() {
                d && (y.clearTimeout(d), d = 0, c = p)
            }

            function A() {
                if (I.length && 0 !== R) {
                    var b = -1,
                        e;
                    do {
                        e = I[0];
                        if (e.V > a.getDuration()) return;
                        b = (e.V - a.getCurrentTime()) / R;
                        if (0 > b && (I.shift(), 0 === I.length)) return
                    } while (0 > b);
                    c = function() {
                        d = 0;
                        c = p;
                        0 < I.length && I[0].V === e.V && (I.shift(), C.Ka("progress", e.fc, e.kc));
                        A()
                    };
                    d = va(c, 1E3 * b)
                }
            }
            var C, I = [],
                K, O, N, R, M, ma, da = e(l.UNSTARTED);
            d = 0;
            c = p;
            return {
                onStateChange: function(a) {
                    da = da(a)
                },
                onPlaybackRateChange: function(b) {
                    M =
                        a.getCurrentTime();
                    ma = (new Date).getTime();
                    C.Va();
                    R = b;
                    D();
                    A()
                }
            }
        }

        function g(a) {
            for (var b = a.split(","), c = b.length, d = [], e = 0; e < c; e++) {
                var f = parseInt(b[e], 10);
                isNaN(f) || 100 < f || 0 > f || d.push(f / 100)
            }
            d.sort(function(a, b) {
                return a - b
            });
            return d
        }

        function h(a) {
            for (var b = a.split(","), c = b.length, d = [], e = 0; e < c; e++) {
                var f = parseInt(b[e], 10);
                isNaN(f) || 0 > f || d.push(f)
            }
            d.sort(function(a, b) {
                return a - b
            });
            return d
        }

        function k(a, b, c) {
            var d = a.map(function(a) {
                return {
                    V: a,
                    kc: a,
                    fc: void 0
                }
            });
            if (!b.length) return d;
            var e = b.map(function(a) {
                return {
                    V: a *
                        c,
                    kc: void 0,
                    fc: a
                }
            });
            if (!d.length) return e;
            var f = d.concat(e);
            f.sort(function(a, b) {
                return a.V - b.V
            });
            return f
        }
        var l = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            },
            m;
        (function(a) {
            __ytl = a;
            __ytl.a = "ytl";
            __ytl.b = ["google"];
            __ytl.c = !0
        })(function(a) {
            var b = !!a["10"],
                d = !!a["7"],
                f = !!a["8"],
                k = g(a["25"] + ""),
                l = h(a[""] + ""),
                m = !!a["20"];
            if (b || d || f || k.length || l.length) {
                var n = {
                        Sc: b,
                        Qc: d,
                        Rc: f,
                        td: k,
                        ud: l,
                        Vb: m,
                        Fb: void 0 === a["31"] ? "" : a["31"]
                    },
                    F = q("YT"),
                    L = function() {
                        e(n)
                    };
                w(a["33"]);
                if (F) F.ready && F.ready(L);
                else {
                    var B = q("onYouTubeIframeAPIReady");
                    la("onYouTubeIframeAPIReady", function() {
                        B && B();
                        L()
                    });
                    w(function() {
                        for (var a = q("document"), b = a.getElementsByTagName("script"), d = b.length, e = 0; e < d; e++) {
                            var f = b[e].getAttribute("src");
                            if (f && (-1 < f.indexOf("//www.youtube.com/iframe_api") ||
                                    -1 < f.indexOf("//www.youtube.com/player_api"))) return
                        }
                        for (var g = a.getElementsByTagName("iframe"), h = g.length, k = 0; k < h; k++)
                            if (c(g[k], n.Vb)) {
                                bb("https://www.youtube.com/iframe_api");
                                break
                            }
                    })
                }
            } else w(a["33"])
        })
    })();
    var __aev;
    (function() {
        var a = void 0,
            b = "",
            c = 0,
            d = void 0,
            e = {
                ATTRIBUTE: "gtm.elementAttribute",
                CLASSES: "gtm.elementClasses",
                ELEMENT: "gtm.element",
                ID: "gtm.elementId",
                HISTORY_CHANGE_SOURCE: "gtm.historyChangeSource",
                HISTORY_NEW_STATE: "gtm.newHistoryState",
                HISTORY_NEW_URL_FRAGMENT: "gtm.newUrlFragment",
                HISTORY_OLD_STATE: "gtm.oldHistoryState",
                HISTORY_OLD_URL_FRAGMENT: "gtm.oldUrlFragment",
                TARGET: "gtm.elementTarget"
            },
            f = function(a) {
                var b = T(e[a["32"]], 1);
                return void 0 !== b ? b : a["13"]
            };
        (function(a) {
            __aev = a;
            __aev.a = "aev";
            __aev.b = ["google"];
            __aev.c = !0
        })(function(e) {
            switch (e["32"]) {
                case "TEXT":
                    var g, k = T("gtm.element", 1),
                        l = T("event", 1),
                        m = Number(new Date);
                    a === k && b === l && c > m - 250 ? g = d : (d = g = k ? Ja(k) : "", a = k, b = l);
                    c = m;
                    return g || e["13"];
                case "URL":
                    var n = String(T("gtm.elementUrl", 1) || e["13"] || ""),
                        p = U(n);
                    return e["11"] && "URL" != e["11"] ? V(p, e["11"], e[""],
                        e[""], e[""]) : n;
                case "ATTRIBUTE":
                    var r;
                    if (void 0 === e[""]) r = f(e);
                    else {
                        var t = T("gtm.element", 1);
                        r = Ia(t, e[""]) || e["13"] || ""
                    }
                    return r;
                default:
                    return f(e)
            }
        })
    })();








    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Yb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Zb = function(a) {
            if (null == a) return String(a);
            var b = Yb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        $b = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Wa = function(a) {
            if (!a || "object" != Zb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !$b(a, "constructor") && !$b(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || $b(a, b)
        },
        Ta = function(a, b) {
            var c = b || ("array" == Zb(a) ? [] : {}),
                d;
            for (d in a)
                if ($b(a, d)) {
                    var e = a[d];
                    "array" == Zb(e) ? ("array" != Zb(c[d]) && (c[d] = []), c[d] = Ta(e, c[d])) : Wa(e) ? (Wa(c[d]) || (c[d] = {}), c[d] = Ta(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ra = {},
        Kb = null,
        ac = Math.random();
    Ra.f = "GTM-P5ZG3LK";
    var bc = null,
        La = null,
        Bb = !1,
        cc = "//www.googletagmanager.com/a?id=" + Ra.f + "&cv=3",
        dc = {},
        ec = {},
        Cb = {};
    var fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, qb, Rd, Sd, Td, Vd, Wd, Xd, Yd, Zd, $d, ae, be, rb, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf,
        mf, nf, of , pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, Vf, Wf, Xf, Yf, Zf, $f, ag, bg, cg;
    (function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a
                }
            }
        };
        fc = a("");
        gc = a("");
        hc = "";
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("0");
        rc = a("1");
        sc = a("");
        tc = a("");
        uc = a("");
        vc = a("");
        wc = a("");
        xc = a("");
        yc = a("");
        zc = a("");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        ad = a("");
        bd = a("");
        cd = a("");
        dd = a("");
        ed = a("");
        fd = a("");
        gd = a("");
        hd = a("");
        id = a("");
        jd = a("");
        kd = a("");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        qb = a("2");
        Rd = a("");
        Sd = a("33");
        Td = a("34");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        rb = a("3");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = a("");
        We = a("");
        Xe = a("");
        Ye = a("");
        Ze = a("");
        $e = a("");
        af = a("");
        bf = a("");
        cf = a("");
        df = a("");
        ef = a("");
        ff = a("");
        gf = a("");
        hf = a("");
        jf = a("");
        kf = a("");
        lf = a("");
        mf = a("");
        nf = a(""); of = a("");
        pf = a("");
        qf = a("5");
        rf =
            a("");
        sf = a("");
        tf = a("");
        uf = a("");
        vf = a("");
        wf = a("");
        xf = a("");
        yf = a("");
        zf = a("");
        Af = a("");
        Bf = a("");
        Cf = a("");
        Df = a("");
        Ef = a("");
        Ff = a("");
        Gf = a("");
        Hf = a("");
        If = a("");
        Jf = a("");
        Kf = a("");
        Lf = a("");
        Mf = a("");
        Nf = "";
        Of = a("");
        Pf = a("");
        Qf = a("");
        Rf = a("");
        Sf = a("");
        Tf = a("");
        Uf = a("");
        Vf = a("");
        Wf = a("");
        Xf = a("");
        Yf = a("");
        Zf =
            a("");
        $f = a("");
        ag = a("");
        bg = a("");
        cg = a("")
    })();
    var Xb = function(a, b) {
            Ta(a, b)
        },
        dg = function() {},
        S = function(a) {
            return "function" == typeof a
        },
        sb = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        eg = function(a) {
            return "number" == Zb(a) && !isNaN(a)
        },
        fg = function(a) {
            return /^[0-9]+$/.test(a)
        },
        Fb = function(a) {
            return "string" == Zb(a)
        },
        gg = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        hg = function(a, b) {
            if (a && sb(a) && 0 != a.length)
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ka = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        W = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ya = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        ig = function(a) {
            var b = [];
            if (sb(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Y = function() {
            return new Date
        },
        Qa = function(a, b) {
            if (!eg(a) || !eg(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        jg = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    jg.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    jg.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    jg.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var kg = function(a, b, c, d) {
            try {
                if (!a[re]) return a[qb](a, b || dg, c || dg);
                c && c()
            } catch (e) {
                d && d()
            }
            return !1
        },
        lg = function(a, b) {
            function c(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }
            for (var d = Ka(b).split("&"), e = 0; e < d.length; e++)
                if (d[e]) {
                    var f = d[e].indexOf("=");
                    0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
                }
        },
        mg = function(a) {
            var b = a ? a.length : 0;
            return 0 < b ? a[b - 1] : ""
        },
        pg = function(a) {
            var b = Ra.f;
            return function() {
                return a(b)
            }
        },
        qg = function(a) {
            for (var b = 0; b < a.length; b++) a[b]()
        },
        Va = function() {
            return "gtm" +
                rg()
        },
        rg = function() {
            var a = Kb.sequence || 0;
            Kb.sequence = a + 1;
            return a
        },
        Xa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        sg = function(a) {
            return null !== a && void 0 !== a && void 0 !== a.length
        },
        tg = function(a, b) {
            0 == b ? a.nc = !0 : a.la = !0;
            var c = a.i;
            a.G && (a.G.zb[c] = b);
            dc[c] && (dc[c].state = b)
        },
        ug = function(a, b) {
            return "function" != typeof String.prototype.startsWith ? 0 === a.indexOf(b) : a.startsWith(b)
        },
        vg = function(a, b) {
            a.sort(function(a, d) {
                return b(a, d) ? -1 : b(d, a) ? 1 : 0
            })
        };
    var y = window,
        J = document,
        xg = navigator,
        zb = function(a, b) {
            var c = y[a];
            y[a] = void 0 === c ? b : c;
            return y[a]
        },
        Ab = function(a, b, c, d) {
            return (d || "http:" != y.location.protocol ? a : b) + c
        },
        Mb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        u = function(a, b, c) {
            var d = J.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Mb(d, b);
            c && (d.onerror = c);
            var e = J.getElementsByTagName("script")[0] || J.body || J.head;
            e.parentNode.insertBefore(d,
                e);
            return d
        },
        nb = function(a, b) {
            var c = J.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = J.body && J.body.lastChild || J.body || J.head;
            d.parentNode.insertBefore(c, d);
            Mb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        G = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        P = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ba = function(a,
            b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        w = function(a) {
            y.setTimeout(a, 0)
        },
        yg = !1,
        zg = [],
        Ag = function(a) {
            if (!yg) {
                var b = J.createEventObject,
                    c = "complete" == J.readyState,
                    d = "interactive" == J.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    yg = !0;
                    for (var e = 0; e < zg.length; e++) w(zg[e])
                }
                zg.push = function() {
                    for (var a = 0; a < arguments.length; a++) w(arguments[a]);
                    return 0
                }
            }
        },
        Bg = 0,
        Cg = function() {
            if (!yg && 140 > Bg) {
                Bg++;
                try {
                    J.documentElement.doScroll("left"), Ag()
                } catch (a) {
                    y.setTimeout(Cg,
                        50)
                }
            }
        },
        ra = function(a) {
            var b = J.getElementById(a);
            if (b && Ia(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (Ia(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        Ia = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Dg = function(a) {
            return a.target || a.srcElement || {}
        },
        Ja = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Rb = function(a) {
            var b =
                J.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Eg = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            var f = a;
            for (e = 0; f && e <= c; e++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Fg = !1,
        Gg = [],
        Hg = function() {
            if (!Fg) {
                Fg = !0;
                for (var a = 0; a < Gg.length; a++) w(Gg[a])
            }
        },
        Ig = function(a) {
            a = a || y;
            var b = a.location.href,
                c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        },
        Lb = function(a) {
            window.console &&
                window.console.log && window.console.log(a)
        };
    var Jg = function(a, b) {
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ")
            }
        },
        V = function(a, b, c, d, e) {
            var f, g = (a.protocol.replace(":", "") || y.location.protocol.replace(":", "")).toLowerCase();
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = (a.hostname || y.location.hostname).split(":")[0].toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f =
                            f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : y.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= gg(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Jg(f, e));
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ma = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0,
                    c)
            }
            return b
        },
        U = function(a) {
            var b = J.createElement("a");
            a && (b.href = a);
            return b
        };
    var Fa = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Gb = function(a) {
            return encodeURIComponent(a)
        },
        pa = function(a) {
            var b = ["veinteractive.com", "ve-interactive.cn"];
            if (!a) return !1;
            var c = V(U(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        };
    var Q = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        },
        Sa = function(a, b) {
            Ta(a, b)
        },
        Za = function(a) {
            return W(a)
        },
        Sb = function(a, b) {
            return gg(a, b)
        };
    var Mg = /(^|\.)doubleclick\.net$/i,
        Ng = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Pa = function(a, b, c) {
            for (var d = String(b || J.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
                var g = d[f].split("="),
                    h = Ka(g[0]);
                if (h && h == a) {
                    var k = Ka(g.slice(1).join("="));
                    k && !1 !== c && (k = decodeURIComponent(k));
                    e.push(k)
                }
            }
            return e
        },
        kb = function(a, b, c, d, e, f) {
            f && (b = encodeURIComponent(b));
            var g = a + "=" + b + "; ";
            c && (g += "path=" + c + "; ");
            e && (g += "expires=" + e.toGMTString() + "; ");
            var h;
            h = "auto" == d ? Og() : [d || "none"];
            for (var k = 0; k < h.length; k++) {
                var l =
                    g,
                    m = h[k],
                    n = c;
                if (Mg.test(y.location.hostname) || "/" == n && Ng.test(m)) break;
                "none" != h[k] && (l += "domain=" + h[k] + ";");
                var p = J.cookie;
                J.cookie = l;
                if (p != J.cookie || 0 <= gg(Pa(a), b)) return !0
            }
            return !1
        },
        Pg = function(a) {
            if ("none" == a) return 0;
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        Qg = function(a) {
            var b = a;
            b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
            return "/" == a ? 1 : a.split("/").length
        },
        Og = function() {
            var a = V(y.location, "host", !0).split(".");
            if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
            for (var b = [], c = a.length - 2; 0 <= c; c--) b.push(a.slice(c).join("."));
            b.push("none");
            return b
        };
    var eh = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var h = bh(g),
                    k = h.rules.length;
                h.insertRule(f, k);
                return function() {
                    h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                    h.insertRule("x {}", k)
                }
            }
            var l = ch(f, g);
            dh(l, g);
            var m = l.parentNode;
            return function() {
                m.removeChild(l)
            }
        },
        fh = null,
        bh = function(a) {
            if (fh) return fh;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b],
                    d = c.ownerNode;
                if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return fh =
                    c
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return fh = a.styleSheets[0]
        },
        ch = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        dh = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        };
    var qa = function(a) {
            var b = J;
            return mh ? b.querySelectorAll(a) : null
        },
        nh = !1;
    if (J.querySelectorAll) try {
        var oh = J.querySelectorAll(":root");
        oh && 1 == oh.length && oh[0] == J.documentElement && (nh = !0)
    } catch (a) {}
    var mh = nh;
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var Ch = {
        event: function(a) {
            var b = a[1];
            if (Fb(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Wa(a[2])) return;
                    c = a[2]
                }
                var d = c,
                    e = {
                        event: b
                    };
                d && (d = Ta(d, void 0), e.eventModel = d, e.eventCallback = d.eventCallback);
                return e
            }
        },
        set: function(a) {
            var b;
            2 == a.length && Wa(a[1]) ? b = Ta(a[1], void 0) : 3 == a.length && Fb(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b._clear = !0, b
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) return {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            }
        }
    };
    var Dh = new jg,
        Eh = {},
        Gh = {
            set: function(a, b) {
                Ta(Fh(a, b), Eh)
            },
            get: function(a) {
                return Z(a, 2)
            },
            reset: function() {
                Dh = new jg;
                Eh = {}
            }
        },
        Z = function(a, b) {
            return 2 != b ? Dh.get(a) : Hh(a)
        },
        Hh = function(a) {
            for (var b = a.split("."), c = 0, d = Eh.eventModel; void 0 !== d && c < b.length; c++) {
                if (null === d) return !1;
                d = d[b[c]]
            }
            if (void 0 !== d || 1 < c) return d;
            var e = Eh;
            for (c = 0; c < b.length; c++) {
                if (null === e) return !1;
                if (void 0 === e[b[c]]) return;
                e = e[b[c]]
            }
            return e
        },
        Ih = function(a, b) {
            Dh.set(a, b);
            Ta(Fh(a, b), Eh)
        },
        Fh = function(a, b) {
            for (var c = {}, d = c, e = a.split("."),
                    f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    var Jh = !1,
        Kh = !1;
    var Ua = function(a) {
            var b = y;
            b.GoogleAnalyticsObject || (b.GoogleAnalyticsObject = a || "ga");
            var c = b.GoogleAnalyticsObject;
            if (!b[c]) {
                var d = function() {
                    d.q = d.q || [];
                    d.q.push(arguments)
                };
                d.l = Number(Y());
                b[c] = d
            }
            return b[c]
        },
        $a = function() {
            var a = y;
            return a.GoogleAnalyticsObject && a[a.GoogleAnalyticsObject]
        },
        ab = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = $a();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Lh = Math.random(),
        Mh = "0.050000" > Lh;
    var Nh = function(a, b) {
            if (Mh) {
                var c = cc,
                    d = function(a, b) {
                        b && (c += a + encodeURIComponent(b))
                    };
                d("&v=", "t");
                d("&n=", a);
                d("&s=", b && b.state);
                d("&h=", b && b.hideLatency);
                d("&g=", b && b.gaLatency);
                d("&p=", b && b.loadBy);
                d("&o=", b && b.timeout);
                d("&l=", Y().getTime() - W(bc));
                c += "&sr=0.050000";
                d("&ps=", Lh);
                d("&cb=", Qa());
                G(c)
            }
        },
        Oh = dg,
        Ph = function() {
            var a = !1;
        };
    var Rh = function(a) {
            var b = Kb.zones;
            return b ? b.checkState(Ra.f, a) : Qh
        },
        Ib = function(a) {
            var b = Kb.zones;
            !b && a && (b = Kb.zones = a());
            return b
        },
        Qh = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        };
    var Sh = dg,
        Th = [],
        Uh = !1,
        Vh = function(a) {
            return y["dataLayer"].push(a)
        },
        Wh = function(a) {
            var b = !1;
            return function() {
                !b && S(a) && w(pg(a));
                b = !0
            }
        },
        ei = function() {
            for (var a = !1; !Uh && 0 < Th.length;) {
                Uh = !0;
                delete Eh.eventModel;
                var b = Th.shift();
                if (S(b)) try {
                    b.call(Gh)
                } catch (Oa) {} else if (sb(b)) a: {
                    var c = b;
                    if (Fb(c[0])) {
                        for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = Eh, h = 0; h < d.length; h++) {
                            if (void 0 === g[d[h]]) break a;
                            g = g[d[h]]
                        }
                        try {
                            g[e].apply(g, f)
                        } catch (Oa) {}
                    }
                }
                else {
                    var k = b;
                    if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                            Object.prototype.hasOwnProperty.call(k, "callee"))) {
                        a: {
                            var l = b;
                            if (l.length && Fb(l[0])) {
                                var m = Ch[l[0]];
                                if (m) {
                                    b = m(l);
                                    break a
                                }
                            }
                            b = void 0
                        }
                        if (!b) {
                            Uh = !1;
                            continue
                        }
                    }
                    var n = void 0,
                        p = void 0,
                        r = b,
                        t = r._clear;
                    for (p in r) r.hasOwnProperty(p) && "_clear" !== p && (t && Ih(p, void 0), Ih(p, r[p]));
                    var v = !1,
                        z = r.event;
                    if (z) {
                        r.hasOwnProperty("gtm.uniqueEventId") || (r["gtm.uniqueEventId"] = rg(), Ih("gtm.uniqueEventId", r["gtm.uniqueEventId"]));
                        n = r["gtm.uniqueEventId"];
                        La = z;
                        var H = Rh(n);
                        if (H.active) {
                            var E = Wh(r.eventCallback),
                                F = r.eventTimeout;
                            F && y.setTimeout(E, Number(F));
                            v = Sh(n, z, H.isWhitelisted, E, r.eventReporter)
                        }
                    }
                    bc || (bc = r["gtm.start"]) && Oh();
                    var L, B = r,
                        D = n,
                        A = z,
                        C = Eh;
                    La = null;
                    a = v || a
                }
                Uh = !1
            }
            return !a
        },
        fi = function() {
            var a = ei();
            try {
                var b = y["dataLayer"].hide;
                if (b && void 0 !== b[Ra.f] && b.end) {
                    b[Ra.f] = !1;
                    var c = !0,
                        d;
                    for (d in b)
                        if (b.hasOwnProperty(d) && !0 === b[d]) {
                            c = !1;
                            break
                        }
                    c && (b.end(), b.end = null)
                }
            } catch (e) {}
            return a
        },
        gi = function() {
            var a = zb("dataLayer", []),
                b = zb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            zg.push(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Gg.push(function() {
                b.gtmLoad ||
                    (b.gtmLoad = !0, a.push({
                        event: "gtm.load"
                    }))
            });
            var c = a.push;
            a.push = function() {
                var b = [].slice.call(arguments, 0);
                c.apply(a, b);
                for (Th.push.apply(Th, b); 300 < this.length;) this.shift();
                return ei()
            };
            Th.push.apply(Th, a.slice(0));
            w(fi)
        };
    var hi, ii, ji;
    var Na = function(a, b) {
            var c = {
                "gtm.element": a,
                "gtm.elementClasses": a.className,
                "gtm.elementId": a["for"] || Ia(a, "id") || "",
                "gtm.elementTarget": a.formTarget || a.target || ""
            };
            if (b && li)
                if ("LINK_CLICK" == b) c["gtm.elementUrl"] = a.href;
                else if ("FORM_SUBMIT" == b) {
                var d = a.action;
                d && d.tagName && (d = a.cloneNode(!1).action);
                c["gtm.elementUrl"] = d
            }
            c.hasOwnProperty("gtm.elementUrl") || (c["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "");
            return c
        },
        Ai =
        function(a) {
            Kb.hasOwnProperty("autoEventsSettings") || (Kb.autoEventsSettings = {});
            var b = Kb.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        za = function(a, b, c) {
            Ai(a)[b] = c
        },
        yb = function(a, b, c, d) {
            var e = Ai(a),
                f = Xa(e, b, d);
            e[b] = c(f)
        },
        Da = function(a, b, c) {
            var d = Ai(a);
            return Xa(d, b, c)
        },
        Aa = function(a) {
            return !!Da(a, "init", !1)
        },
        Ea = function(a) {
            za(a, "init", !0)
        },
        Bi = function() {};
    var Ci = function(a) {
        for (var b = [], c = J.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var g = [];
        if (!b || 0 == b.length) return g;
        for (var h = 0; h < b.length; h++) {
            var k = b[h].split(".");
            3 == k.length && "GCL" == k[0] && k[1] && g.push(k[2])
        }
        return g
    };
    var Di = /^\w+$/,
        Ei = /^[\w-]+$/,
        Fi = /^\d+\.fls\.doubleclick\.net$/;

    function Gi(a) {
        return a && "string" == typeof a && a.match(Di) ? a : "_gcl"
    }

    function Hi(a) {
        if (a) {
            if ("string" == typeof a) {
                var b = Gi(a);
                return {
                    ma: b,
                    ka: b
                }
            }
            if (a && "object" == typeof a) return {
                ma: Gi(a.dc),
                ka: Gi(a.aw)
            }
        }
        return {
            ma: "_gcl",
            ka: "_gcl"
        }
    }

    function Ii(a) {
        var b = U(y.location.href),
            c = V(b, "host", !1);
        if (c && c.match(Fi)) {
            var d = V(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Ji(a) {
        return a.filter(function(a) {
            return Ei.test(a)
        })
    }
    var Li = function(a) {
            var b = Ii("gclaw");
            if (b) return b.split(".");
            var c = Hi(a);
            if ("_gcl" == c.ka) {
                var d = Ki();
                if (d && (null == d.K || "aw.ds" == d.K)) return [d.pa]
            }
            return Ji(Ci(c.ka + "_aw"))
        },
        Mi = function(a) {
            var b = Ii("gcldc");
            if (b) return b.split(".");
            var c = Hi(a);
            if ("_gcl" == c.ma) {
                var d = Ki();
                if (d && ("ds" == d.K || "aw.ds" == d.K)) return [d.pa]
            }
            return Ji(Ci(c.ma + "_dc"))
        };

    function Ki() {
        var a = U(y.location.href),
            b = V(a, "query", !1, void 0, "gclid"),
            c = V(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = V(a, "fragment");
            b = b || Jg(d, "gclid");
            c = c || Jg(d, "gclsrc")
        }
        return void 0 !== b && b.match(Ei) ? {
            pa: b,
            K: c
        } : null
    }
    var ob = function(a, b, c) {
            var d = Hi(a);
            c = c || "auto";
            b = b || "/";
            var e = Ki();
            if (null !== e) {
                var f = (new Date).getTime(),
                    g = new Date(f + 7776E6),
                    h = ["GCL", Math.round(f / 1E3), e.pa].join(".");
                e.K && "aw.ds" != e.K || kb(d.ka + "_aw", h, b, c, g, !0);
                "aw.ds" != e.K && "ds" != e.K || kb(d.ma + "_dc", h, b, c, g, !0)
            }
        },
        Ni = function() {
            var a = Ii("gac");
            if (a) return decodeURIComponent(a);
            for (var b = [], c = J.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({
                    Bb: f[1],
                    value: f[2]
                })
            }
            var g = {};
            if (b && b.length)
                for (var h =
                        0; h < b.length; h++) {
                    var k = b[h].value.split(".");
                    "1" == k[0] && 3 == k.length && k[1] && (g[b[h].Bb] || (g[b[h].Bb] = []), g[b[h].Bb].push({
                        timestamp: k[1],
                        pa: k[2]
                    }))
                }
            var l = [],
                m;
            for (m in g)
                if (g.hasOwnProperty(m)) {
                    for (var n = [], p = g[m], r = 0; r < p.length; r++) n.push(p[r].pa);
                    n = Ji(n);
                    n.length && l.push(m + ":" + n.join(","))
                }
            return l.join(";")
        };
    var Oi;
    a: {
        Oi = "G"
    }
    var Pi = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            GTM: Oi
        },
        Ha = function(a) {
            var b = Ra.f.split("-"),
                c = b[0].toUpperCase();
            return (Pi[c] || "i") + "4r" + (a && "GTM" === c ? b[1] : "")
        };
    var Db = new String("undefined"),
        Ti = function(a) {
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Db ? b : a[d]);
                return c.join("")
            }
        };
    Ti.prototype.toString = function() {
        return this.resolve("undefined")
    };
    Ti.prototype.valueOf = Ti.prototype.toString;
    var Ui = {},
        Vi = function(a, b) {
            var c = rg();
            Ui[c] = [a, b];
            return c
        },
        Wi = function(a) {
            var b = a ? 0 : 1;
            return function(a) {
                var c = Ui[a];
                if (c && S(c[b])) c[b]();
                Ui[a] = void 0
            }
        };
    var Xi = {},
        Yi, Zi;
    var hj = function() {};
    var ij = !!y.MutationObserver,
        Wb = void 0,
        lb = function(a) {
            if (!Wb) {
                var b = function() {
                    var a = J.body;
                    if (a)
                        if (ij)(new MutationObserver(function() {
                            for (var a = 0; a < Wb.length; a++) w(Wb[a])
                        })).observe(a, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var b = !1;
                            P(a, "DOMNodeInserted", function() {
                                b || (b = !0, w(function() {
                                    b = !1;
                                    for (var a = 0; a < Wb.length; a++) w(Wb[a])
                                }))
                            })
                        }
                };
                Wb = [];
                J.body ? b() : w(b)
            }
            Wb.push(a)
        };
    var wa = function() {
            var a = J.body,
                b = J.documentElement || a && a.parentElement,
                c, d;
            if (J.compatMode && "BackCompat" !== J.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(a, b) {
                    return a && b ? Math.min(a, b) : Math.max(a, b)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                sb: d,
                rb: c
            }
        },
        jj = function(a) {
            var b = wa(),
                c = b.rb,
                d = b.sb,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) /
                g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        },
        kj = function(a) {
            if (J.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !y.getComputedStyle) return !0;
            var c = y.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (void 0 !== g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = y.getComputedStyle(d, null))
            }
            return !1
        };
    var pj = function(a, b, c) {
        function d() {
            var b = a();
            f += e ? (Y().getTime() - e) * b.playbackRate / 1E3 : 0;
            e = Y().getTime()
        }
        var e = 0,
            f = 0;
        return {
            Ka: function(e, h, k) {
                var g = a(),
                    m = g.Tb,
                    n = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(g.Tb * h) : Math.round(g.Uc),
                    p = void 0 !== h ? Math.round(100 * h) : 0 >= m ? 0 : Math.round(n / m * 100),
                    r = J.hidden ? !1 : .5 <= jj(c);
                d();
                var t = Na(c);
                t.event = "gtm.video";
                t["gtm.videoProvider"] = "youtube";
                t["gtm.videoStatus"] = e;
                t["gtm.videoUrl"] = g.url;
                t["gtm.videoTitle"] = g.title;
                t["gtm.videoDuration"] = Math.round(m);
                t["gtm.videoCurrentTime"] =
                    Math.round(n);
                t["gtm.videoElapsedTime"] = Math.round(f);
                t["gtm.videoPercent"] = p;
                t["gtm.videoVisible"] = r;
                t["gtm.triggers"] = b;
                Vh(t)
            },
            Ad: function() {
                e = Y().getTime()
            },
            Va: function() {
                d()
            }
        }
    };
    var tb = function(a, b, c, d) {
            P(a, b, c, d)
        },
        va = function(a, b) {
            return y.setTimeout(a, b)
        },
        na = function(a, b, c) {
            u(a, b, c)
        },
        vb = {},
        bb = function(a, b, c) {
            var d = vb[a];
            if (void 0 === d) {
                var e = function(a, b) {
                    return function() {
                        a.status = b;
                        for (var c = 2 == b ? a.wb : a.bb, d = 0; d < c.length; d++) y.setTimeout(c[d], 0)
                    }
                };
                d = {
                    status: 1,
                    wb: [],
                    bb: [],
                    jc: void 0
                };
                d.Cd = u(a, e(d, 2), e(d, 3));
                vb[a] = d
            }
            0 === d.status && (d.jc(), d.status = 2);
            2 === d.status ? b && b() : 3 === d.status ? c && c() : 1 === d.status && (b && d.wb.push(b), c && d.bb.push(c))
        },
        qj = function(a, b) {
            vb[a] = {
                status: 0,
                wb: [],
                bb: [],
                jc: b,
                Cd: null
            }
        },
        oa = function() {
            return y.location.href
        },
        ub = function(a) {
            return V(U(a), "fragment")
        },
        T = function(a, b) {
            return Z(a, b || 2)
        },
        xa = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Vh(a)
        },
        la = function(a, b) {
            y[a] = b
        },
        q = function(a, b, c) {
            var d = y;
            b && (void 0 === d[a] || c && !d[a]) && (d[a] = b);
            return d[a]
        },
        wb = function(a, b) {
            return Eg(a, b, 100)
        },
        x = function(a, b, c, d) {
            var e = !d && "http:" == y.location.protocol;
            e && (e = 2 !== Hb());
            return (e ? b : a) + c
        },
        Nb = function(a) {
            yg ? a() : zg.push(a)
        };
    var sa = function(a) {
            var b = 0;
            b = jj(a);
            return b
        },
        Ub = function(a) {},
        ta = function(a) {
            var b = !1;
            b = kj(a);
            return b
        },
        xb = function(a, b) {
            return hg(a,
                b)
        },
        ya = function(a, b, c, d) {
            yb(a, b, c, d)
        },
        Ca = function(a, b, c) {
            return Da(a, b, c)
        };
    var mb = function(a, b, c) {
        return pj(a, b, c)
    };
    var Hb = function() {
        var a;
        a = "www.googletagmanager.com/gtm.js";
        for (var b = "https://" + a, c = "http://" + a, d = 1, e = J.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var g = e[f].src;
            if (g) {
                g = g.toLowerCase();
                if (ug(g, c)) return 3;
                1 === d && ug(g, b) && (d = 2)
            }
        }
        return d
    };
    var Tb = function() {
        return $a()
    };
    var Jb = function(a) {
        var b = "www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(a) + "&l=dataLayer";
        u(x("https://", "http://", b), void 0, void 0)
    };
    var Pb = function(a, b, c) {
        a instanceof Ti && (a = a.resolve(Vi(b, c)), b = dg);
        return {
            hb: a,
            w: b
        }
    };
    var rj = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        sj = {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        tj = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        uj = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Yh = function(a) {
            var b = Z("gtm.whitelist");
            var c = b && uj(ig(b), sj),
                d = Z("gtm.blacklist") || Z("tagTypeBlacklist") || [];
            rj.test(y.location && y.location.hostname) && (d = ig(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            var e = d && uj(ig(d), tj),
                f = {};
            return function(g) {
                var h = g && g[qb];
                if (!h) return !0;
                if (void 0 !== f[h.a]) return f[h.a];
                var k = a(h.a);
                if (b) {
                    var l;
                    if (l = k) a: {
                        if (0 > gg(c, h.a))
                            if (h.b && 0 < h.b.length)
                                for (var m = 0; m < h.b.length; m++) {
                                    if (0 >
                                        gg(c, h.b[m])) {
                                        l = !1;
                                        break a
                                    }
                                } else {
                                    l = !1;
                                    break a
                                }
                        l = !0
                    }
                    k = l
                }
                var n = !1;
                if (d) {
                    var p;
                    if (!(p = 0 <= gg(e, h.a))) a: {
                        for (var r = h.b || [], t = new jg, v = 0; v < e.length; v++) t.set(e[v], !0);
                        for (v = 0; v < r.length; v++)
                            if (t.get(r[v])) {
                                p = !0;
                                break a
                            }
                        p = !1
                    }
                    n = p
                }
                return f[h.a] = !k || n
            }
        };
    var _eu = function(a) {
        var b = String(Z("gtm.elementUrl") || a[od] || ""),
            c = U(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _f = function(a) {
        var b = String(Z("gtm.referrer") || J.referrer);
        if (!b) return b;
        var c = U(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var Cj = function(a) {
            var b = y.location,
                c;
            (c = a[dd] ? a[dd] : Z("gtm.url")) && (b = U(String(c)));
            var d = b.href,
                e = d.indexOf("#"),
                f = 0 > e ? d : d.substr(0, e);
            return f
        },
        _u = Cj;
    _u.a = "u";
    _u.b = ["google"];
    var _eq = function(a) {
        return String(a[qc]) == String(a[rc])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var _re = function(a) {
        return (new RegExp(a[rc], a[Zd] ? "i" : void 0)).test(a[qc])
    };
    _re.a = "re";
    _re.b = ["google"];
    var mk = [],
        nk = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        ok = function(a) {
            return nk[a]
        },
        pk = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var tk = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        uk = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        vk = function(a) {
            return uk[a]
        };
    mk[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(tk, vk) + "'"
        }
    };
    var Dk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ek = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Fk = function(a) {
            return Ek[a]
        };
    mk[16] = function(a) {
        return a
    };
    var Hk = function(a) {
        if (!a) return !1;
        if (a[pc] && sb(a[rc])) {
            for (var b = a[rc], c = 0; c < b.length; c++)
                if (a[rc] = b[c], kg(a)) return !0;
            return !1
        }
        return kg(a)
    };
    var Ik = 94,
        Jk = [],
        Kk = [],
        Zh = [],
        Lk = new jg,
        Mk = [],
        Nk = [],
        xi = [],
        yi = [],
        Ok = function() {
            this.U = []
        };
    Ok.prototype.set = function(a, b) {
        this.U.push([a, b]);
        return this
    };
    Ok.prototype.resolve = function(a, b) {
        for (var c = {}, d = 0; d < this.U.length; d++) {
            var e = bi(this.U[d][0], a, b),
                f = bi(this.U[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Pk = function(a) {
        this.index = a
    };
    Pk.prototype.resolve = function(a, b) {
        var c = Zh[this.index];
        if (c && !b(c)) {
            var d = c[rb];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = bi(c, a, b);
            a && a.set(d, !1);
            return kg(c)
        }
    };
    var _M = function(a) {
            return new Pk(a)
        },
        Qk = function(a) {
            this.resolve = function(b, c) {
                for (var d = [], e = !1, f = 0; f < a.length; f++) {
                    var g = bi(Jk[a[f]], b, c);
                    g === Db && (e = !0);
                    d.push(g)
                }
                return e ? new Ti(d) : d.join("")
            }
        },
        _T = function(a) {
            return new Qk(arguments)
        },
        Rk = function(a) {
            function b(b) {
                for (var c = 1; c < a.length; c++)
                    if (a[c] == b) return !0;
                return !1
            }
            this.resolve =
                function(c, d) {
                    var e = bi(a[0], c, d);
                    if (a[0] instanceof Pk && b(8) && b(16)) {
                        if (e === Db) return e;
                        var f = Va();
                        Lk.set(f, e);
                        return 'google_tag_manager["' + Ra.f + "\"].macro('" + f + "')"
                    }
                    e = String(e);
                    for (var g = 1; g < a.length; g++) e = mk[a[g]](e);
                    return e
                }
        },
        _E = function(a, b) {
            return new Rk(arguments)
        },
        Sk = function(a, b) {
            this.A = a;
            this.xa = b
        },
        _R = function(a, b) {
            return new Sk(a, b)
        };
    var bi = function(a, b, c) {
            var d = a;
            if (a instanceof Pk || a instanceof Ok || a instanceof Qk || a instanceof Rk) return a.resolve(b, c);
            if (!(a instanceof Sk))
                if (sb(a)) {
                    d = [];
                    for (var e = 0; e < a.length; e++) d[e] = bi(a[e], b, c)
                } else if (a && "object" == typeof a) {
                d = {};
                for (var f in a) a.hasOwnProperty(f) && (d[f] = bi(a[f], b, c))
            }
            return d
        },
        Vk = function() {
            for (var a = [__jsm, 'Video Action', '1', '(function(){var a\x3d', __v, 'Video Status', 'gtm.videoStatus', 1, _E(_M(0), 8, 16), ';switch(a){case \x22start\x22:return\x22Play\x22;case \x22pause\x22:return\x22Pause\x22;case \x22buffering\x22:return\x22Buffering\x22;case \x22progress\x22:return+', 'Video Percent', 'gtm.videoPercent', _E(_M(1), 8, 16), '+\x22% Watched\x22;case \x22Complete\x22:return\x22100% Watched\x22}})();', _T(3, 8, 9, 12, 13), _eq, __e, '_event', _M(3), 'gtm.js', '8739813_2147479553', __ua, true, 'TRACK_PAGEVIEW', 'UA-112934538-2', false, 2, 'gtm.video', _re, '_triggers', 'gtm.triggers', '', _M(4), '(^$|((^|,)8739813_8($|,)))', '8739813_8', 'YouTube', 'TRACK_EVENT', _M(2), 'Video Title', 'gtm.videoTitle', _M(5), 3, __aev, 'Click Text', 'TEXT', _M(6), '^(TOP|PRODUCTS|MOVIE)$', 'gtm.click', '8739813_11', 'nav', 'click', 4, '8739813_12', __ytl, '10,50,100', 'PERCENTAGE', 5, '8739813_13', __cl, 6, __u, 'Page URL', 'URL', 'Page Hostname', 'HOST', 'Page Path', 'PATH', __f, 'Referrer', 'Event', 'Click Element', 'gtm.element', 'Click Classes', 'gtm.elementClasses', 'Click ID', 'gtm.elementId', 'Click Target', 'gtm.elementTarget', 'Click URL', 'gtm.elementUrl', 'Video Provider', 'gtm.videoProvider', 'Video URL', 'gtm.videoUrl', 'Video Duration', 'gtm.videoDuration', 'Video Visible', 'gtm.videoVisible', 'Video Current Time', 'gtm.videoCurrentTime'], b = [], c = 0; c < a.length; c++) b[c] =
                Uk(c, a);
            return b
        },
        Uk = function(a, b) {
            var c = b[a],
                d = c;
            if (c instanceof Pk || c instanceof Rk || c instanceof Qk || c instanceof Sk) d = c;
            else if (sb(c)) {
                d = [];
                for (var e = 0; e < c.length; e++) d[e] = Uk(c[e], b)
            } else if ("object" == typeof c) {
                d = new Ok;
                for (var f in c) c.hasOwnProperty(f) && d.set(b[f], Uk(c[f], b))
            }
            return d
        },
        Xk = function(a, b) {
            for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
                var e = c[d] = c[d].split(":");
                0 == a && (e[1] =
                    Jk[e[1]]);
                if (1 == a) {
                    var f = Wk(e[0]);
                    e = c[d] = {};
                    for (var g = 0; g < f.length; g++) {
                        var h = Kk[f[g]];
                        e[h[0]] = h[1]
                    }
                }
                if (2 == a)
                    for (g = 0; 4 > g; g++) e[g] = Wk(e[g]);
                3 == a && (c[d] = Jk[e[0]]);
                if (4 == a)
                    for (g = 0; 2 > g; g++)
                        if (e[g]) {
                            e[g] = e[g].split(".");
                            for (var k = 0; k < e[g].length; k++) e[g][k] = Jk[e[g][k]]
                        } else e[g] = [];
                5 == a && (c[d] = e[0])
            }
            return c
        },
        Wk = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length && c < Ik; c += 6, d++) {
                var e = a && a.charCodeAt(d) || 65;
                if (65 != e) {
                    var f;
                    f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                    1 &
                        f && b.push(c);
                    2 & f && b.push(c + 1);
                    4 & f && b.push(c + 2);
                    8 & f && b.push(c + 3);
                    16 & f && b.push(c + 4);
                    32 & f && b.push(c + 5)
                }
            }
            return b
        },
        Yk = function(a, b, c) {
            a.push.apply(a, Xk(b, c))
        };
    var Zk;
    var ai = function(a, b) {
            if (null === a || void 0 === a) return a;
            if (b.propertyRenamingRequired) {
                var c = {},
                    d;
                for (d in a)
                    if (a.hasOwnProperty(d)) {
                        var e = bl[d];
                        e && 0 == e.indexOf("vtp_") && (c[e] = a[d])
                    }
                c.__metadata = b;
                return c
            }
            return a
        },
        el = function(a) {},
        fl = function(a, b) {},
        gl = function(a, b) {},
        di = function(a) {};
    var hl, il, jl;
    var kl = function() {
            return "&tc=" + Nk.filter(function(a) {
                return a
            }).length
        },
        ll = "0.005000" > Math.random(),
        ml = function() {
            hl = [cc, "&v=3&t=t", "&pid=" + Qa(), "&rv=4r&r=1"].join("")
        },
        nl = {},
        ol = "",
        pl = {},
        ql = {},
        rl = 2,
        sl = 1E3,
        tl = function() {
            rl = 2
        },
        ul = function() {
            var a = il;
            return void 0 === a ? "" : [hl, nl[a] ? "" : "&es=1", pl[a], kl(), ol, "&z=0"].join("")
        },
        vl = function() {
            jl && (y.clearTimeout(jl), jl = void 0);
            void 0 === il || nl[il] && !ol || (ql[il] || 0 >= rl-- || 0 >= sl-- ? ql[il] = !0 : (G(ul()), nl[il] = !0, ol = ""))
        },
        wl = function(a,
            b, c) {
            if (ll && !ql[a] && b) {
                a !== il && (vl(), il = a);
                var d = c + String(b[qb] ? b[qb].a : "").replace(/_/g, "");
                ol = ol ? ol + "." + d : "&tr=" + d;
                jl || (jl = y.setTimeout(vl, 500));
                2022 <= ul().length && vl()
            }
        };
    var xl = function(a) {
            var b = this;
            this.i = a;
            this.la = this.nc = !1;
            this.xb = [];
            this.cb = [];
            this.w = function() {
                b.la || qg(b.xb);
                tg(b, 1);
                if (ec[a])
                    for (var c = 0; c < ec[a].length; c++) ec[a].shift().w()
            };
            this.D = function() {
                b.la || qg(b.cb);
                tg(b, 2);
                if (ec[a])
                    for (var c = 0; c < ec[a].length; c++) ec[a].shift().D()
            };
            this.H = dg
        },
        yl = function(a, b) {
            a.xb.push(b)
        },
        zl = function(a, b) {
            a.cb.push(b)
        },
        Al = function(a) {
            this.P = [];
            this.yb = [];
            this.Sb = {};
            this.$b = [];
            this.ba = 0;
            this.ub = {};
            this.Ab = {};
            this.zb = {};
            this.event = a
        };
    Al.prototype.addListener = function(a) {
        this.$b.push(a)
    };
    var Bl = function(a) {
            0 < a.ba || qg(a.$b)
        },
        Cl = function(a, b, c, d, e, f) {
            if (!c.la) {
                a.P[b] = c;
                void 0 == d && (d = []);
                void 0 == e && (e = []);
                void 0 == f && (f = []);
                d = sb(d) ? d.slice() : ["or", d];
                e = sb(e) ? e.slice() : [e];
                f = sb(f) ? f.slice() : [f];
                a.Sb[b] = d;
                a.ub[b] = 0 < e.length;
                a.Ab[b] = 0 < f.length;
                a.ba++;
                var g = function() {
                    0 < a.ba && !a.ub[b] && !a.Ab[b] && a.ba--;
                    Bl(a)
                };
                yl(c, g);
                zl(c, g)
            }
        },
        Hl = function(a) {
            for (var b = [], c = {}, d = 0; d < a.P.length; c = {
                    W: c.W
                }, d++)
                if (c.W = a.P[d], c.W) {
                    var e = a.Sb[d],
                        f = a.ub[d],
                        g = a.Ab[d];
                    if (0 != e.length || f || g) {
                        if (0 < e.length)
                            for (var h =
                                    Dl(e, c.W.H), k = 0; k < e.length; k++) e[k] instanceof Sk && e[k].A != d && El(a, e[k].A, h);
                        (f || g) && Fl(a, d, function(a) {
                            return function() {
                                0 < a.W.G.ba && a.W.G.ba--;
                                Bl(a.W.G)
                            }
                        }(c))
                    } else b.push(d)
                }
            for (d = 0; d < b.length; d++) a.P[b[d]].H();
            for (d = 0; d < a.yb.length; d++) {
                var l = a.yb[d];
                Gl(l);
                0 < l.length && l[0].H()
            }
        },
        El = function(a, b, c) {
            a.P[b] && (yl(a.P[b], function() {
                c(b, !0)
            }), zl(a.P[b], function() {
                c(b, !1)
            }))
        },
        Dl = function(a, b) {
            var c = !1;
            return function(d, e) {
                var f;
                a: {
                    for (var g = 0; g < a.length; g++)
                        if (a[g] instanceof Sk && a[g].A === d || a[g] === d) {
                            f =
                                g;
                            break a
                        }
                    f = -1
                }
                c || 0 > f || ("or" == a[0] ? e ? (c = !0, b()) : (a.splice(f, 1), 1 == a.length && (c = !0)) : e ? (a.splice(f, 1), 1 == a.length && (c = !0, b())) : c = !0)
            }
        },
        Fl = function(a, b, c) {
            var d = [],
                e = !1,
                f = function(b) {
                    var c, g, h = Nk[b];
                    if (a.event.g(h)) {} else g = Il(h, b, a.event.g, a);
                    if (c = g) {
                        var k = Jl(b, !0);
                        0 < k.length && f(k[0].A);
                        d.push(c);
                        var l = Jl(b, !1);
                        0 < l.length && f(l[0].A)
                    } else e = !0
                };
            f(b);
            if (e) Kl(b, a.event);
            else {
                for (var g = 0; g < d.length; g++) {
                    var h = d[g],
                        k = Jl(h.i, !0);
                    if (0 < k.length) {
                        var l = d[g - 1],
                            m = Ll(h);
                        yl(l, m);
                        0 == k[0].xa ? zl(l, m) : zl(l, c)
                    }
                    var n = Jl(h.i, !1);
                    0 < n.length && (m = Ll(d[g + 1]), yl(h, m), 0 == n[0].xa ? zl(h, m) : zl(h, c))
                }
                yl(d[d.length - 1], c);
                zl(d[d.length - 1], c);
                a.yb.push(d)
            }
        },
        Jl = function(a, b) {
            var c = b ? gf : yf,
                d = Nk[a],
                e = void 0 === d[c] ? [] : d[c];
            return sb(e) ? e : [e]
        },
        Ll = function(a) {
            return function() {
                a.H()
            }
        },
        Gl = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.i,
                    f = dc[e],
                    g = f.firingOption;
                if (0 != g && (1 == g && void 0 !== d.G.zb[e] || 2 == g && void 0 !== f.state) && (b.push(d), 2 == f.state &&
                        c != a.length - 1)) {
                    var h = Jl(a[c + 1].i, !0);
                    if (0 < h.length && 1 == h[0].xa)
                        for (++c; c < a.length; c++) b.push(a[c])
                }
            }
            var k = Ml(b),
                l;
            for (l in k)
                if (k.hasOwnProperty(l)) {
                    for (var m = void 0, n = void 0, p = k[l], r = p[0], t = p[p.length - 1], v, z = 0; z < a.length; z++) {
                        var H = a[z];
                        !m && H.i == r && 0 < z && (m = a[z - 1]);
                        H.i == t && z < a.length - 1 && (n = a[z + 1]);
                        if (-1 < gg(p, H.i))
                            if (v = a.splice(z, 1)[0], H.i == t) break;
                            else z--
                    }
                    if (v) {
                        var E = Number(l),
                            F = m,
                            L = n;
                        if (F) {
                            var B = F;
                            B.xb = [];
                            B.cb = []
                        }
                        if (F && L) {
                            var D = Ll(L);
                            yl(F, D);
                            var A = Jl(F.i, !1);
                            0 < A.length && A[0].A != E && 0 == A[0].xa &&
                                zl(F, D);
                            var C = Jl(L.i, !0);
                            0 < C.length && C[0].A != E && 0 == C[0].xa && zl(F, D)
                        }
                    }
                }
        },
        Ml = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [],
                    f = function(a) {
                        var b = Jl(a, !0);
                        0 < b.length && f(b[0].A);
                        e.push(a);
                        var c = Jl(a, !1);
                        0 < c.length && f(c[0].A)
                    };
                f(d.i);
                b[d.i] = e
            }
            Nl(a, b);
            return b
        },
        Nl = function(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c].i,
                    e;
                for (e in b)
                    if (b.hasOwnProperty(e) && e != d && -1 < gg(b[e], d)) {
                        delete b[d];
                        break
                    }
            }
        },
        Kl = function(a, b) {
            if (!ll) return;
            var c = function(a) {
                    return sb(a) ?
                        a[0] : a
                },
                d = function(a) {
                    var e = Nk[a];
                    if (e) {
                        var g = c(void 0 === e[gf] ? [] : e[gf]);
                        g && d(g.A);
                        var h = b.g(Nk[a]) ? "3" : "4";
                        wl(b.id, Nk[a], h);
                        var k = c(void 0 === e[yf] ? [] : e[yf]);
                        k && d(k.A)
                    }
                };
            d(a);
        };
    var Ol = function(a, b, c) {
            return function() {
                var d = b.G ? b.G.event : void 0;
                a[Sd] = function() {
                    d && wl(d.id, a, "5");
                    b.w()
                };
                a[Td] = function() {
                    d && wl(d.id, a, "6");
                    b.D()
                };
                var e = b.i,
                    f = b.G && b.G.zb[e],
                    g = dc[e] && dc[e].state,
                    h = f ? void 0 !== f : b.nc || b.la,
                    k = dc[e] && dc[e].firingOption,
                    l = k && 2 == k,
                    m = k && 1 == k;
                if (!h && void 0 === g || !h && !l || !l && !m) {
                    tg(b, 0);
                    a = bi(a, new jg, c);
                    var n = dg;
                    if (d) {
                        wl(d.id, a, "1"), n = function() {
                            wl(d.id, a, "7")
                        };
                        fl(d, e)
                    }
                    kg(a, b.w, b.D, n)
                } else l && 0 == g || m && 0 == f ? ec[e].push(b) : l && 1 == g || m && 1 == f ? b.w() : b.D()
            }
        },
        Il = function(a, b, c, d) {
            function e(a) {
                return a.i === b
            }
            var f = function() {
                var a = d && d.P;
                return a && hg(a, e)
            }() || new xl(b);
            f.G = d;
            f.H = Ol(a, f, c);
            return f
        };
    var Vl = function() {
            var a = [];
            return function(b, c) {
                if (void 0 === a[b]) {
                    var d = Mk[b] && bi(Mk[b], new jg, c),
                        e = d;
                    d && (e = Hk(d));
                    a[b] = [e, d]
                }
                return a[b]
            }
        },
        Wl = function(a, b) {
            for (var c = b[0], d = 0; d < c.length; d++)
                if (!a.aa(c[d], a.g)[0]) return !1;
            var e = b[2];
            for (d = 0; d < e.length; d++)
                if (a.aa(e[d], a.g)[0]) return !1;
            return !0
        },
        Xl = !1;
    Sh = function(a, b, c, d, e) {
        switch (b) {
            case "gtm.js":
                if (Xl) return !1;
                Xl = !0;
                break;
            case "gtm.sync":
                if (Z("gtm.snippet") != ac) return !1
        }
        for (var f = {
                id: a,
                name: b,
                Fa: d || dg,
                ja: Wk(),
                Pa: Wk(),
                aa: Vl(),
                g: Yh(c)
            }, g = [], h = 0; h < xi.length; h++)
            if (Wl(f, xi[h])) {
                g[h] = !0;
                for (var k = f, l = xi[h], m = l[1], n = 0; n < m.length; n++) k.ja[m[n]] = !0;
                var p = l[3];
                for (n = 0; n < p.length; n++) k.Pa[p[n]] = !0
            } else g[h] = !1;
        !ll || 0 >= sl || il === a || (vl(), il = a, ol = "", pl[a] = "&e=" + (0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*") + "&eid=" + a, jl || (jl = y.setTimeout(vl, 500)));
        for (var R = [], M = 0; M < Ik; M++) !f.ja[M] ||
            f.Pa[M] || f.g(Nk[M]) || (R[M] = Nk[M]);
        f.ua = R;
        for (var ma = new Al(f), da = 0; da < Ik; da++)
            if (f.ja[da] && !f.Pa[da])
                if (f.g(Nk[da])) {
                    Kl(da, f)
                } else {
                    var Oa = f.ua[da],
                        ek = Il(Oa, da, f.g, ma);
                    Cl(ma, da, ek, Oa[pd], Oa[gf], Oa[yf]);
                    if (Oa[fc]) break
                }
        ma.addListener(f.Fa);
        Hl(ma);
        Bl(ma);
        e && S(e) && e({
            passingRules: g,
            resolvedTags: f.ua
        });
        if ("gtm.js" == b || "gtm.sync" == b) a: {}
        var dk = {
                cl: !0,
                evl: !0,
                fsl: !0,
                hl: !0,
                jel: !0,
                lcl: !0,
                sdl: !0,
                tl: !0,
                ytl: !0
            },
            Ud;
        for (Ud in f.ua)
            if (f.ua.hasOwnProperty(Ud) && !dk[f.ua[Ud][qb].a.replace(/_/g, "")]) return !0;
        return !1
    };
    var Zl = function() {};
    var $l = {};
    var em = function() {};
    var Yl = {
        macro: function(a) {
            if (Lk.contains(a)) return Lk.get(a)
        }
    };
    Yl.dataLayer = Gh;
    Yl.onHtmlSuccess = Wi(!0);
    Yl.onHtmlFailure = Wi(!1);
    Yl.callback = function(a) {
        Cb.hasOwnProperty(a) && S(Cb[a]) && Cb[a]();
        delete Cb[a]
    };
    Yl.Jc = function() {
        var a = y.google_tag_manager;
        a || (a = y.google_tag_manager = {});
        Kb = a;
        if (a[Ra.f]) {
            var b = Kb.zones;
            b && b.unregisterChild(Ra.f)
        } else {
            a[Ra.f] = Yl;
            hj();
            Bi();
            Jk.push.apply(Jk, Vk());
            Yk(Kk, 0, "2:0,3:1,6:2,2:4,3:5,22:6,12:7,3:10,22:11,21:14,2:15,2:16,3:17,0:18,1:19,2:21,4:22,24:22,28:23,30:24,15:25,16:25,14:22,5:26,1:27,2:28,3:29,22:30,12:26,27:22,13:31,0:32,1:33,23:25,18:35,28:36,17:37,3:38,22:39,19:40,29:22,5:41,2:42,3:43,32:44,0:45,1:46,1:47,18:49,17:50,19:45,5:51,2:53,25:54,7:22,10:22,20:22,26:55,8:22,9:22,31:34,5:56,2:58,5:59,2:60,3:61,11:62,3:63,11:64,3:65,11:66,2:67,3:68,3:69,3:70,22:71,3:72,22:73,3:74,22:75,3:76,22:77,3:78,22:79,3:80,22:81,3:82,22:83,3:84,22:85,3:86,22:87,3:88,22:89");
            Yk(Zh, 1, "8B,MH,HI,EgB,MAAA8B,MBAAAAG,EAAAAAAH,EAAAAAAAAAwB,EAAAAAAAAAQG,EAAAAAAAAAQY,EAAAAAAAAAAhB,EgAAAAAAAAAAC,MBAAAAAAAAAAM,MBAAAAAAAAAAw,MBAAAAAAAAAAAD,MBAAAAAAAAAAAM,MBAAAAAAAAAAAw,MBAAAAAAAAAAAAD,MBAAAAAAAAAAAAM,MBAAAAAAAAAAAAw,MBAAAAAAAAAAAAAD,MBAAAAAAAAAAAAAM");
            Yk(Mk, 1, "AQG,AQCAB,AAAACG,AAAACAAY,AQCAAAAg");
            Yk(Nk, 1, "EA4_,EA4eA45,EA4eAoQAP,EAAAAAAAw_D,EAAAAAAAAAM");
            Yk(xi, 2, "B:Z::,G:C::,Y:E::");
            Yk(yi, 4, "20.52.57:,34:,48:");
            for (var c = 0; c < Nk.length; c++) {
                var d = Nk[c],
                    e = 1;
                d[Ee] ? e = 2 :
                    d[Qf] && (e = 0);
                dc[c] = {
                    firingOption: e,
                    state: void 0
                };
                ec[c] = []
            }
            Ph();
            gi();
            var n = y;
            if ("interactive" == J.readyState && !J.createEventObject || "complete" == J.readyState) Ag();
            else {
                P(J, "DOMContentLoaded", Ag);
                P(J, "readystatechange", Ag);
                if (J.createEventObject && J.documentElement.doScroll) {
                    var p = !0;
                    try {
                        p = !n.frameElement
                    } catch (H) {}
                    p && Cg()
                }
                P(n, "load", Ag)
            }
            "complete" === J.readyState ? Hg() : P(y, "load", Hg);
            a: {
                if (!ll) break a;ml();rl = 2;il = void 0;pl = {};nl = {};jl = void 0;ql = {};ol = "";y.setInterval(ml, 864E5);y.setInterval(tl, 1E3);
            }
            em();
            Zl();
            a: {}
        }
    };
    Yl.Jc();
    var _vs = "res_ts:1523462519978000,srv_cl:195219953,ds:live,cv:3";
})()
