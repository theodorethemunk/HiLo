(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83], {
        65987: function(t) {
            "use strict";
            var e = {
                single_source_shortest_paths: function(t, n, i) {
                    var r = {},
                        o = {};
                    o[n] = 0;
                    var s, a, l, u, c, h, d, f = e.PriorityQueue.make();
                    for (f.push(n, 0); !f.empty();)
                        for (l in a = (s = f.pop()).value, u = s.cost, c = t[a] || {}) c.hasOwnProperty(l) && (h = u + c[l], d = o[l], ("undefined" === typeof o[l] || d > h) && (o[l] = h, f.push(l, h), r[l] = a));
                    if ("undefined" !== typeof i && "undefined" === typeof o[i]) {
                        var p = ["Could not find a path from ", n, " to ", i, "."].join("");
                        throw new Error(p)
                    }
                    return r
                },
                extract_shortest_path_from_predecessor_list: function(t, e) {
                    for (var n = [], i = e; i;) n.push(i), t[i], i = t[i];
                    return n.reverse(), n
                },
                find_path: function(t, n, i) {
                    var r = e.single_source_shortest_paths(t, n, i);
                    return e.extract_shortest_path_from_predecessor_list(r, i)
                },
                PriorityQueue: {
                    make: function(t) {
                        var n, i = e.PriorityQueue,
                            r = {};
                        for (n in t = t || {}, i) i.hasOwnProperty(n) && (r[n] = i[n]);
                        return r.queue = [], r.sorter = t.sorter || i.default_sorter, r
                    },
                    default_sorter: function(t, e) {
                        return t.cost - e.cost
                    },
                    push: function(t, e) {
                        var n = {
                            value: t,
                            cost: e
                        };
                        this.queue.push(n), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = e
        },
        62378: function(t) {
            "use strict";
            t.exports = function(t) {
                for (var e = [], n = t.length, i = 0; i < n; i++) {
                    var r = t.charCodeAt(i);
                    if (r >= 55296 && r <= 56319 && n > i + 1) {
                        var o = t.charCodeAt(i + 1);
                        o >= 56320 && o <= 57343 && (r = 1024 * (r - 55296) + o - 56320 + 65536, i += 1)
                    }
                    r < 128 ? e.push(r) : r < 2048 ? (e.push(r >> 6 | 192), e.push(63 & r | 128)) : r < 55296 || r >= 57344 && r < 65536 ? (e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)) : r >= 65536 && r <= 1114111 ? (e.push(r >> 18 | 240), e.push(r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)) : e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        55817: function(t, e, n) {
            "use strict";
            n.d(e, {
                j: function() {
                    return at
                }
            });
            const i = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                r = t => 1e3 * t,
                o = t => t / 1e3,
                s = () => {},
                a = t => t;

            function l(t, e = !0) {
                if (t && "finished" !== t.playState) try {
                    t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
                } catch (n) {}
            }
            const u = t => t(),
                c = (t, e, n = i.duration) => new Proxy({
                    animations: t.map(u).filter(Boolean),
                    duration: n,
                    options: e
                }, h),
                h = {
                    get: (t, e) => {
                        const n = t.animations[0];
                        switch (e) {
                            case "duration":
                                return t.duration;
                            case "currentTime":
                                return o((null === n || void 0 === n ? void 0 : n[e]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null === n || void 0 === n ? void 0 : n[e];
                            case "finished":
                                return t.finished || (t.finished = Promise.all(t.animations.map(d)).catch(s)), t.finished;
                            case "stop":
                                return () => {
                                    t.animations.forEach((t => l(t)))
                                };
                            case "forEachNative":
                                return e => {
                                    t.animations.forEach((n => e(n, t)))
                                };
                            default:
                                return "undefined" === typeof(null === n || void 0 === n ? void 0 : n[e]) ? void 0 : () => t.animations.forEach((t => t[e]()))
                        }
                    },
                    set: (t, e, n) => {
                        switch (e) {
                            case "currentTime":
                                n = r(n);
                            case "currentTime":
                            case "playbackRate":
                                for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = n;
                                return !0
                        }
                        return !1
                    }
                },
                d = t => t.finished,
                f = t => "object" === typeof t && Boolean(t.createAnimation),
                p = t => "number" === typeof t,
                g = t => Array.isArray(t) && !p(t[0]),
                m = (t, e, n) => -n * t + n * e + t,
                y = (t, e, n) => e - t === 0 ? 1 : (n - t) / (e - t);

            function v(t, e) {
                const n = t[t.length - 1];
                for (let i = 1; i <= e; i++) {
                    const r = y(0, e, i);
                    t.push(m(n, 1, r))
                }
            }
            const A = (t, e, n) => Math.min(Math.max(n, t), e);

            function w(t, e = function(t) {
                const e = [0];
                return v(e, t - 1), e
            }(t.length), n = a) {
                const i = t.length,
                    r = i - e.length;
                return r > 0 && v(e, r), r => {
                    let o = 0;
                    for (; o < i - 2 && !(r < e[o + 1]); o++);
                    let s = A(0, 1, y(e[o], e[o + 1], r));
                    const a = function(t, e) {
                        return g(t) ? t[((t, e, n) => {
                            const i = e - t;
                            return ((n - t) % i + i) % i + t
                        })(0, t.length, e)] : t
                    }(n, o);
                    return s = a(s), m(t[o], t[o + 1], s)
                }
            }
            const E = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

            function $(t, e, n, i) {
                if (t === e && n === i) return a;
                const r = e => function(t, e, n, i, r) {
                    let o, s, a = 0;
                    do {
                        s = e + (n - e) / 2, o = E(s, i, r) - t, o > 0 ? n = s : e = s
                    } while (Math.abs(o) > 1e-7 && ++a < 12);
                    return s
                }(e, 0, 1, t, n);
                return t => 0 === t || 1 === t ? t : E(r(t), e, i)
            }
            const _ = t => "function" === typeof t,
                b = t => Array.isArray(t) && p(t[0]),
                C = {
                    ease: $(.25, .1, .25, 1),
                    "ease-in": $(.42, 0, 1, 1),
                    "ease-in-out": $(.42, 0, .58, 1),
                    "ease-out": $(0, 0, .58, 1)
                },
                S = /\((.*?)\)/;

            function T(t) {
                if (_(t)) return t;
                if (b(t)) return $(...t);
                if (C[t]) return C[t];
                if (t.startsWith("steps")) {
                    const e = S.exec(t);
                    if (e) {
                        const t = e[1].split(",");
                        return ((t, e = "end") => n => {
                            const i = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t,
                                r = "end" === e ? Math.floor(i) : Math.ceil(i);
                            return A(0, 1, r / t)
                        })(parseFloat(t[0]), t[1].trim())
                    }
                }
                return a
            }
            class P {
                constructor(t, e = [0, 1], {
                    easing: n,
                    duration: r = i.duration,
                    delay: o = i.delay,
                    endDelay: s = i.endDelay,
                    repeat: l = i.repeat,
                    offset: u,
                    direction: c = "normal"
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = a, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise(((t, e) => {
                            this.resolve = t, this.reject = e
                        })), n = n || i.easing, f(n)) {
                        const t = n.createAnimation(e);
                        n = t.easing, e = t.keyframes || e, r = t.duration || r
                    }
                    this.repeat = l, this.easing = g(n) ? a : T(n), this.updateDuration(r);
                    const h = w(e, u, g(n) ? n.map(T) : a);
                    this.tick = e => {
                        var n;
                        let i = 0;
                        i = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate, this.t = i, i /= 1e3, i = Math.max(i - o, 0), "finished" === this.playState && void 0 === this.pauseTime && (i = this.totalDuration);
                        const r = i / this.duration;
                        let a = Math.floor(r),
                            l = r % 1;
                        !l && r >= 1 && (l = 1), 1 === l && a--;
                        const u = a % 2;
                        ("reverse" === c || "alternate" === c && u || "alternate-reverse" === c && !u) && (l = 1 - l);
                        const d = i >= this.totalDuration ? 1 : Math.min(l, 1),
                            f = h(this.easing(d));
                        t(f);
                        void 0 === this.pauseTime && ("finished" === this.playState || i >= this.totalDuration + s) ? (this.playState = "finished", null === (n = this.resolve) || void 0 === n || n.call(this, f)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    const t = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var t;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (t = this.reject) || void 0 === t || t.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(t) {
                    this.duration = t, this.totalDuration = t * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(t) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(t) {
                    this.rate = t
                }
            }
            class M {
                setAnimation(t) {
                    this.animation = t, null === t || void 0 === t || t.finished.then((() => this.clearAnimation())).catch((() => {}))
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            const x = new WeakMap;

            function N(t) {
                return x.has(t) || x.set(t, {
                    transforms: [],
                    values: new Map
                }), x.get(t)
            }
            const R = ["", "X", "Y", "Z"],
                B = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                U = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: t => t + "deg"
                },
                I = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: t => t + "px"
                    },
                    rotate: U,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: a
                    },
                    skew: U
                },
                k = new Map,
                L = t => `--motion-${t}`,
                H = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach((t => {
                R.forEach((e => {
                    H.push(t + e), k.set(L(t + e), I[t])
                }))
            }));
            const O = (t, e) => H.indexOf(t) - H.indexOf(e),
                D = new Set(H),
                z = t => D.has(t),
                j = t => t.sort(O).reduce(V, "").trim(),
                V = (t, e) => `${t} ${e}(var(${L(e)}))`,
                F = t => t.startsWith("--"),
                Y = new Set;
            const J = (t, e) => document.createElement("div").animate(t, e),
                K = {
                    cssRegisterProperty: () => "undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            J({
                                opacity: [1]
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => Boolean(J({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished),
                    linearEasing: () => {
                        try {
                            J({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                },
                q = {},
                W = {};
            for (const lt in K) W[lt] = () => (void 0 === q[lt] && (q[lt] = K[lt]()), q[lt]);
            const Q = (t, e) => _(t) ? W.linearEasing() ? `linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let r=0;r<i;r++)n+=t(y(0,i-1,r))+", ";return n.substring(0,n.length-2)})(t,e)})` : i.easing : b(t) ? Z(t) : t,
                Z = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`;

            function X(t) {
                return B[t] && (t = B[t]), z(t) ? L(t) : t
            }
            const G = (t, e) => {
                    e = X(e);
                    let n = F(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                    if (!n && 0 !== n) {
                        const t = k.get(e);
                        t && (n = t.initialValue)
                    }
                    return n
                },
                tt = (t, e, n) => {
                    e = X(e), F(e) ? t.style.setProperty(e, n) : t.style[e] = n
                };

            function et(t, e, n, o = {}, u) {
                const c = window.__MOTION_DEV_TOOLS_RECORD,
                    h = !1 !== o.record && c;
                let d, {
                    duration: m = i.duration,
                    delay: y = i.delay,
                    endDelay: v = i.endDelay,
                    repeat: A = i.repeat,
                    easing: w = i.easing,
                    persist: E = !1,
                    direction: $,
                    offset: b,
                    allowWebkitAcceleration: C = !1
                } = o;
                const S = N(t),
                    T = z(e);
                let P = W.waapi();
                T && ((t, e) => {
                    B[e] && (e = B[e]);
                    const {
                        transforms: n
                    } = N(t);
                    var i, r;
                    r = e, -1 === (i = n).indexOf(r) && i.push(r), t.style.transform = j(n)
                })(t, e);
                const x = X(e),
                    R = function(t, e) {
                        return t.has(e) || t.set(e, new M), t.get(e)
                    }(S.values, x),
                    U = k.get(x);
                return l(R.animation, !(f(w) && R.generator) && !1 !== o.record), () => {
                    const i = () => {
                        var e, n;
                        return null !== (n = null !== (e = G(t, x)) && void 0 !== e ? e : null === U || void 0 === U ? void 0 : U.initialValue) && void 0 !== n ? n : 0
                    };
                    let l = function(t, e) {
                        for (let n = 0; n < t.length; n++) null === t[n] && (t[n] = n ? t[n - 1] : e());
                        return t
                    }((t => Array.isArray(t) ? t : [t])(n), i);
                    const S = function(t, e) {
                        var n;
                        let i = (null === e || void 0 === e ? void 0 : e.toDefaultUnit) || a;
                        const r = t[t.length - 1];
                        if ("string" === typeof r) {
                            const t = (null === (n = r.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n ? void 0 : n[2]) || "";
                            t && (i = e => e + t)
                        }
                        return i
                    }(l, U);
                    if (f(w)) {
                        const t = w.createAnimation(l, "opacity" !== e, i, x, R);
                        w = t.easing, l = t.keyframes || l, m = t.duration || m
                    }
                    if (F(x) && (W.cssRegisterProperty() ? function(t) {
                            if (!Y.has(t)) {
                                Y.add(t);
                                try {
                                    const {
                                        syntax: e,
                                        initialValue: n
                                    } = k.has(t) ? k.get(t) : {};
                                    CSS.registerProperty({
                                        name: t,
                                        inherits: !1,
                                        syntax: e,
                                        initialValue: n
                                    })
                                } catch (e) {}
                            }
                        }(x) : P = !1), T && !W.linearEasing() && (_(w) || g(w) && w.some(_)) && (P = !1), P) {
                        U && (l = l.map((t => p(t) ? U.toDefaultUnit(t) : t))), 1 !== l.length || W.partialKeyframes() && !h || l.unshift(i());
                        const e = {
                            delay: r(y),
                            duration: r(m),
                            endDelay: r(v),
                            easing: g(w) ? void 0 : Q(w, m),
                            direction: $,
                            iterations: A + 1,
                            fill: "both"
                        };
                        d = t.animate({
                            [x]: l,
                            offset: b,
                            easing: g(w) ? w.map((t => Q(t, m))) : void 0
                        }, e), d.finished || (d.finished = new Promise(((t, e) => {
                            d.onfinish = t, d.oncancel = e
                        })));
                        const n = l[l.length - 1];
                        d.finished.then((() => {
                            E || (tt(t, x, n), d.cancel())
                        })).catch(s), C || (d.playbackRate = 1.000001)
                    } else if (u && T) l = l.map((t => "string" === typeof t ? parseFloat(t) : t)), 1 === l.length && l.unshift(parseFloat(i())), d = new u((e => {
                        tt(t, x, S ? S(e) : e)
                    }), l, Object.assign(Object.assign({}, o), {
                        duration: m,
                        easing: w
                    }));
                    else {
                        const e = l[l.length - 1];
                        tt(t, x, U && p(e) ? U.toDefaultUnit(e) : e)
                    }
                    return h && c(t, e, l, {
                        duration: m,
                        delay: y,
                        easing: w,
                        repeat: A,
                        offset: b
                    }, "motion-one"), R.setAnimation(d), d
                }
            }
            const nt = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

            function it(t, e, n) {
                return _(t) ? t(e, n) : t
            }
            const rt = (ot = P, function(t, e, n = {}) {
                const i = (t = function(t, e) {
                    var n;
                    return "string" === typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
                }(t)).length;
                Boolean(i), Boolean(e);
                const r = [];
                for (let o = 0; o < i; o++) {
                    const s = t[o];
                    for (const t in e) {
                        const a = nt(n, t);
                        a.delay = it(a.delay, o, i);
                        const l = et(s, t, e[t], a, ot);
                        r.push(l)
                    }
                }
                return c(r, n, n.duration)
            });
            var ot;

            function st(t, e = {}) {
                return c([() => {
                    const n = new P(t, [0, 1], e);
                    return n.finished.catch((() => {})), n
                }], e, e.duration)
            }

            function at(t, e, n) {
                return (_(t) ? st : rt)(t, e, n)
            }
        },
        92592: function(t, e, n) {
            const i = n(47138),
                r = n(95115),
                o = n(6907),
                s = n(93776);

            function a(t, e, n, o, s) {
                const a = [].slice.call(arguments, 1),
                    l = a.length,
                    u = "function" === typeof a[l - 1];
                if (!u && !i()) throw new Error("Callback required as last argument");
                if (!u) {
                    if (l < 1) throw new Error("Too few arguments provided");
                    return 1 === l ? (n = e, e = o = void 0) : 2 !== l || e.getContext || (o = n, n = e, e = void 0), new Promise((function(i, s) {
                        try {
                            const s = r.create(n, o);
                            i(t(s, e, o))
                        } catch (a) {
                            s(a)
                        }
                    }))
                }
                if (l < 2) throw new Error("Too few arguments provided");
                2 === l ? (s = n, n = e, e = o = void 0) : 3 === l && (e.getContext && "undefined" === typeof s ? (s = o, o = void 0) : (s = o, o = n, n = e, e = void 0));
                try {
                    const i = r.create(n, o);
                    s(null, t(i, e, o))
                } catch (c) {
                    s(c)
                }
            }
            e.create = r.create, e.toCanvas = a.bind(null, o.render), e.toDataURL = a.bind(null, o.renderToDataURL), e.toString = a.bind(null, (function(t, e, n) {
                return s.render(t, n)
            }))
        },
        47138: function(t) {
            t.exports = function() {
                return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        21845: function(t, e, n) {
            const i = n(10242).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                const e = Math.floor(t / 7) + 2,
                    n = i(t),
                    r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
                    o = [n - 7];
                for (let i = 1; i < e - 1; i++) o[i] = o[i - 1] - r;
                return o.push(6), o.reverse()
            }, e.getPositions = function(t) {
                const n = [],
                    i = e.getRowColCoords(t),
                    r = i.length;
                for (let e = 0; e < r; e++)
                    for (let t = 0; t < r; t++) 0 === e && 0 === t || 0 === e && t === r - 1 || e === r - 1 && 0 === t || n.push([i[e], i[t]]);
                return n
            }
        },
        8260: function(t, e, n) {
            const i = n(76910),
                r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(t) {
                this.mode = i.ALPHANUMERIC, this.data = t
            }
            o.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let n = 45 * r.indexOf(this.data[e]);
                    n += r.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(r.indexOf(this.data[e]), 6)
            }, t.exports = o
        },
        97245: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    const e = Math.floor(t / 8);
                    return 1 === (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (let n = 0; n < e; n++) this.putBit(1 === (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    const e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        73280: function(t) {
            function e(t) {
                if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
            }
            e.prototype.set = function(t, e, n, i) {
                const r = t * this.size + e;
                this.data[r] = n, i && (this.reservedBit[r] = !0)
            }, e.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, e.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, e.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = e
        },
        43424: function(t, e, n) {
            const i = n(62378),
                r = n(76910);

            function o(t) {
                this.mode = r.BYTE, "string" === typeof t && (t = i(t)), this.data = new Uint8Array(t)
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = o
        },
        35393: function(t, e, n) {
            const i = n(64908),
                r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case i.L:
                        return r[4 * (t - 1) + 0];
                    case i.M:
                        return r[4 * (t - 1) + 1];
                    case i.Q:
                        return r[4 * (t - 1) + 2];
                    case i.H:
                        return r[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case i.L:
                        return o[4 * (t - 1) + 0];
                    case i.M:
                        return o[4 * (t - 1) + 1];
                    case i.Q:
                        return o[4 * (t - 1) + 2];
                    case i.H:
                        return o[4 * (t - 1) + 3];
                    default:
                        return
                }
            }
        },
        64908: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" !== typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw new Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (i) {
                    return n
                }
            }
        },
        76526: function(t, e, n) {
            const i = n(10242).getSymbolSize;
            e.getPositions = function(t) {
                const e = i(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        61642: function(t, e, n) {
            const i = n(10242),
                r = i.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                const n = t.bit << 3 | e;
                let o = n << 10;
                for (; i.getBCHDigit(o) - r >= 0;) o ^= 1335 << i.getBCHDigit(o) - r;
                return 21522 ^ (n << 10 | o)
            }
        },
        69729: function(t, e) {
            const n = new Uint8Array(512),
                i = new Uint8Array(256);
            ! function() {
                let t = 1;
                for (let e = 0; e < 255; e++) n[e] = t, i[t] = e, t <<= 1, 256 & t && (t ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), e.log = function(t) {
                if (t < 1) throw new Error("log(" + t + ")");
                return i[t]
            }, e.exp = function(t) {
                return n[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : n[i[t] + i[e]]
            }
        },
        35442: function(t, e, n) {
            const i = n(76910),
                r = n(10242);

            function o(t) {
                this.mode = i.KANJI, this.data = t
            }
            o.getBitsLength = function(t) {
                return 13 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let n = r.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else {
                        if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
                }
            }, t.exports = o
        },
        27126: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            const n = 3,
                i = 3,
                r = 40,
                o = 10;

            function s(t, n, i) {
                switch (t) {
                    case e.Patterns.PATTERN000:
                        return (n + i) % 2 === 0;
                    case e.Patterns.PATTERN001:
                        return n % 2 === 0;
                    case e.Patterns.PATTERN010:
                        return i % 3 === 0;
                    case e.Patterns.PATTERN011:
                        return (n + i) % 3 === 0;
                    case e.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 === 0;
                    case e.Patterns.PATTERN101:
                        return n * i % 2 + n * i % 3 === 0;
                    case e.Patterns.PATTERN110:
                        return (n * i % 2 + n * i % 3) % 2 === 0;
                    case e.Patterns.PATTERN111:
                        return (n * i % 3 + (n + i) % 2) % 2 === 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            }
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                const e = t.size;
                let i = 0,
                    r = 0,
                    o = 0,
                    s = null,
                    a = null;
                for (let l = 0; l < e; l++) {
                    r = o = 0, s = a = null;
                    for (let u = 0; u < e; u++) {
                        let e = t.get(l, u);
                        e === s ? r++ : (r >= 5 && (i += n + (r - 5)), s = e, r = 1), e = t.get(u, l), e === a ? o++ : (o >= 5 && (i += n + (o - 5)), a = e, o = 1)
                    }
                    r >= 5 && (i += n + (r - 5)), o >= 5 && (i += n + (o - 5))
                }
                return i
            }, e.getPenaltyN2 = function(t) {
                const e = t.size;
                let n = 0;
                for (let i = 0; i < e - 1; i++)
                    for (let r = 0; r < e - 1; r++) {
                        const e = t.get(i, r) + t.get(i, r + 1) + t.get(i + 1, r) + t.get(i + 1, r + 1);
                        4 !== e && 0 !== e || n++
                    }
                return n * i
            }, e.getPenaltyN3 = function(t) {
                const e = t.size;
                let n = 0,
                    i = 0,
                    o = 0;
                for (let r = 0; r < e; r++) {
                    i = o = 0;
                    for (let s = 0; s < e; s++) i = i << 1 & 2047 | t.get(r, s), s >= 10 && (1488 === i || 93 === i) && n++, o = o << 1 & 2047 | t.get(s, r), s >= 10 && (1488 === o || 93 === o) && n++
                }
                return n * r
            }, e.getPenaltyN4 = function(t) {
                let e = 0;
                const n = t.data.length;
                for (let i = 0; i < n; i++) e += t.data[i];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * o
            }, e.applyMask = function(t, e) {
                const n = e.size;
                for (let i = 0; i < n; i++)
                    for (let r = 0; r < n; r++) e.isReserved(r, i) || e.xor(r, i, s(t, r, i))
            }, e.getBestMask = function(t, n) {
                const i = Object.keys(e.Patterns).length;
                let r = 0,
                    o = 1 / 0;
                for (let s = 0; s < i; s++) {
                    n(s), e.applyMask(s, t);
                    const i = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(s, t), i < o && (o = i, r = s)
                }
                return r
            }
        },
        76910: function(t, e, n) {
            const i = n(43114),
                r = n(7007);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw new Error("Invalid mode: " + t);
                if (!i.isValid(e)) throw new Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return r.testNumeric(t) ? e.NUMERIC : r.testAlphanumeric(t) ? e.ALPHANUMERIC : r.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw new Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" !== typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw new Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (i) {
                    return n
                }
            }
        },
        41085: function(t, e, n) {
            const i = n(76910);

            function r(t) {
                this.mode = i.NUMERIC, this.data = t.toString()
            }
            r.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, r.prototype.getLength = function() {
                return this.data.length
            }, r.prototype.getBitsLength = function() {
                return r.getBitsLength(this.data.length)
            }, r.prototype.write = function(t) {
                let e, n, i;
                for (e = 0; e + 3 <= this.data.length; e += 3) n = this.data.substr(e, 3), i = parseInt(n, 10), t.put(i, 10);
                const r = this.data.length - e;
                r > 0 && (n = this.data.substr(e), i = parseInt(n, 10), t.put(i, 3 * r + 1))
            }, t.exports = r
        },
        26143: function(t, e, n) {
            const i = n(69729);
            e.mul = function(t, e) {
                const n = new Uint8Array(t.length + e.length - 1);
                for (let r = 0; r < t.length; r++)
                    for (let o = 0; o < e.length; o++) n[r + o] ^= i.mul(t[r], e[o]);
                return n
            }, e.mod = function(t, e) {
                let n = new Uint8Array(t);
                for (; n.length - e.length >= 0;) {
                    const t = n[0];
                    for (let o = 0; o < e.length; o++) n[o] ^= i.mul(e[o], t);
                    let r = 0;
                    for (; r < n.length && 0 === n[r];) r++;
                    n = n.slice(r)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                let n = new Uint8Array([1]);
                for (let r = 0; r < t; r++) n = e.mul(n, new Uint8Array([1, i.exp(r)]));
                return n
            }
        },
        95115: function(t, e, n) {
            const i = n(10242),
                r = n(64908),
                o = n(97245),
                s = n(73280),
                a = n(21845),
                l = n(76526),
                u = n(27126),
                c = n(35393),
                h = n(52882),
                d = n(23103),
                f = n(61642),
                p = n(76910),
                g = n(16130);

            function m(t, e, n) {
                const i = t.size,
                    r = f.getEncodedBits(e, n);
                let o, s;
                for (o = 0; o < 15; o++) s = 1 === (r >> o & 1), o < 6 ? t.set(o, 8, s, !0) : o < 8 ? t.set(o + 1, 8, s, !0) : t.set(i - 15 + o, 8, s, !0), o < 8 ? t.set(8, i - o - 1, s, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, s, !0) : t.set(8, 15 - o - 1, s, !0);
                t.set(i - 8, 8, 1, !0)
            }

            function y(t, e, n) {
                const r = new o;
                n.forEach((function(e) {
                    r.put(e.mode.bit, 4), r.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(r)
                }));
                const s = 8 * (i.getSymbolTotalCodewords(t) - c.getTotalCodewordsCount(t, e));
                for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 !== 0;) r.putBit(0);
                const a = (s - r.getLengthInBits()) / 8;
                for (let i = 0; i < a; i++) r.put(i % 2 ? 17 : 236, 8);
                return function(t, e, n) {
                    const r = i.getSymbolTotalCodewords(e),
                        o = c.getTotalCodewordsCount(e, n),
                        s = r - o,
                        a = c.getBlocksCount(e, n),
                        l = a - r % a,
                        u = Math.floor(r / a),
                        d = Math.floor(s / a),
                        f = d + 1,
                        p = u - d,
                        g = new h(p);
                    let m = 0;
                    const y = new Array(a),
                        v = new Array(a);
                    let A = 0;
                    const w = new Uint8Array(t.buffer);
                    for (let i = 0; i < a; i++) {
                        const t = i < l ? d : f;
                        y[i] = w.slice(m, m + t), v[i] = g.encode(y[i]), m += t, A = Math.max(A, t)
                    }
                    const E = new Uint8Array(r);
                    let $, _, b = 0;
                    for ($ = 0; $ < A; $++)
                        for (_ = 0; _ < a; _++) $ < y[_].length && (E[b++] = y[_][$]);
                    for ($ = 0; $ < p; $++)
                        for (_ = 0; _ < a; _++) E[b++] = v[_][$];
                    return E
                }(r, t, e)
            }

            function v(t, e, n, r) {
                let o;
                if (Array.isArray(t)) o = g.fromArray(t);
                else {
                    if ("string" !== typeof t) throw new Error("Invalid data"); {
                        let i = e;
                        if (!i) {
                            const e = g.rawSplit(t);
                            i = d.getBestVersionForData(e, n)
                        }
                        o = g.fromString(t, i || 40)
                    }
                }
                const c = d.getBestVersionForData(o, n);
                if (!c) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < c) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n")
                } else e = c;
                const h = y(e, n, o),
                    f = i.getSymbolSize(e),
                    p = new s(f);
                return function(t, e) {
                        const n = t.size,
                            i = l.getPositions(e);
                        for (let r = 0; r < i.length; r++) {
                            const e = i[r][0],
                                o = i[r][1];
                            for (let i = -1; i <= 7; i++)
                                if (!(e + i <= -1 || n <= e + i))
                                    for (let r = -1; r <= 7; r++) o + r <= -1 || n <= o + r || (i >= 0 && i <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && r >= 2 && r <= 4 ? t.set(e + i, o + r, !0, !0) : t.set(e + i, o + r, !1, !0))
                        }
                    }(p, e),
                    function(t) {
                        const e = t.size;
                        for (let n = 8; n < e - 8; n++) {
                            const e = n % 2 === 0;
                            t.set(n, 6, e, !0), t.set(6, n, e, !0)
                        }
                    }(p),
                    function(t, e) {
                        const n = a.getPositions(e);
                        for (let i = 0; i < n.length; i++) {
                            const e = n[i][0],
                                r = n[i][1];
                            for (let n = -2; n <= 2; n++)
                                for (let i = -2; i <= 2; i++) - 2 === n || 2 === n || -2 === i || 2 === i || 0 === n && 0 === i ? t.set(e + n, r + i, !0, !0) : t.set(e + n, r + i, !1, !0)
                        }
                    }(p, e), m(p, n, 0), e >= 7 && function(t, e) {
                        const n = t.size,
                            i = d.getEncodedBits(e);
                        let r, o, s;
                        for (let a = 0; a < 18; a++) r = Math.floor(a / 3), o = a % 3 + n - 8 - 3, s = 1 === (i >> a & 1), t.set(r, o, s, !0), t.set(o, r, s, !0)
                    }(p, e),
                    function(t, e) {
                        const n = t.size;
                        let i = -1,
                            r = n - 1,
                            o = 7,
                            s = 0;
                        for (let a = n - 1; a > 0; a -= 2)
                            for (6 === a && a--;;) {
                                for (let n = 0; n < 2; n++)
                                    if (!t.isReserved(r, a - n)) {
                                        let i = !1;
                                        s < e.length && (i = 1 === (e[s] >>> o & 1)), t.set(r, a - n, i), o--, -1 === o && (s++, o = 7)
                                    }
                                if (r += i, r < 0 || n <= r) {
                                    r -= i, i = -i;
                                    break
                                }
                            }
                    }(p, h), isNaN(r) && (r = u.getBestMask(p, m.bind(null, p, n))), u.applyMask(r, p), m(p, n, r), {
                        modules: p,
                        version: e,
                        errorCorrectionLevel: n,
                        maskPattern: r,
                        segments: o
                    }
            }
            e.create = function(t, e) {
                if ("undefined" === typeof t || "" === t) throw new Error("No input text");
                let n, o, s = r.M;
                return "undefined" !== typeof e && (s = r.from(e.errorCorrectionLevel, r.M), n = d.from(e.version), o = u.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)), v(t, n, s, o)
            }
        },
        52882: function(t, e, n) {
            const i = n(26143);

            function r(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            r.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = i.generateECPolynomial(this.degree)
            }, r.prototype.encode = function(t) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                const e = new Uint8Array(t.length + this.degree);
                e.set(t);
                const n = i.mod(e, this.genPoly),
                    r = this.degree - n.length;
                if (r > 0) {
                    const t = new Uint8Array(this.degree);
                    return t.set(n, r), t
                }
                return n
            }, t.exports = r
        },
        7007: function(t, e) {
            const n = "[0-9]+";
            let i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            i = i.replace(/u/g, "\\u");
            const r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + ")(?:.|[\r\n]))+";
            e.KANJI = new RegExp(i, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(r, "g"), e.NUMERIC = new RegExp(n, "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            const o = new RegExp("^" + i + "$"),
                s = new RegExp("^[0-9]+$"),
                a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return o.test(t)
            }, e.testNumeric = function(t) {
                return s.test(t)
            }, e.testAlphanumeric = function(t) {
                return a.test(t)
            }
        },
        16130: function(t, e, n) {
            const i = n(76910),
                r = n(41085),
                o = n(8260),
                s = n(43424),
                a = n(35442),
                l = n(7007),
                u = n(10242),
                c = n(65987);

            function h(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function d(t, e, n) {
                const i = [];
                let r;
                for (; null !== (r = t.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return i
            }

            function f(t) {
                const e = d(l.NUMERIC, i.NUMERIC, t),
                    n = d(l.ALPHANUMERIC, i.ALPHANUMERIC, t);
                let r, o;
                u.isKanjiModeEnabled() ? (r = d(l.BYTE, i.BYTE, t), o = d(l.KANJI, i.KANJI, t)) : (r = d(l.BYTE_KANJI, i.BYTE, t), o = []);
                return e.concat(n, r, o).sort((function(t, e) {
                    return t.index - e.index
                })).map((function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }))
            }

            function p(t, e) {
                switch (e) {
                    case i.NUMERIC:
                        return r.getBitsLength(t);
                    case i.ALPHANUMERIC:
                        return o.getBitsLength(t);
                    case i.KANJI:
                        return a.getBitsLength(t);
                    case i.BYTE:
                        return s.getBitsLength(t)
                }
            }

            function g(t, e) {
                let n;
                const l = i.getBestModeForData(t);
                if (n = i.from(e, l), n !== i.BYTE && n.bit < l.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + i.toString(n) + ".\n Suggested mode is: " + i.toString(l));
                switch (n !== i.KANJI || u.isKanjiModeEnabled() || (n = i.BYTE), n) {
                    case i.NUMERIC:
                        return new r(t);
                    case i.ALPHANUMERIC:
                        return new o(t);
                    case i.KANJI:
                        return new a(t);
                    case i.BYTE:
                        return new s(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce((function(t, e) {
                    return "string" === typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t
                }), [])
            }, e.fromString = function(t, n) {
                const r = function(t) {
                        const e = [];
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n];
                            switch (r.mode) {
                                case i.NUMERIC:
                                    e.push([r, {
                                        data: r.data,
                                        mode: i.ALPHANUMERIC,
                                        length: r.length
                                    }, {
                                        data: r.data,
                                        mode: i.BYTE,
                                        length: r.length
                                    }]);
                                    break;
                                case i.ALPHANUMERIC:
                                    e.push([r, {
                                        data: r.data,
                                        mode: i.BYTE,
                                        length: r.length
                                    }]);
                                    break;
                                case i.KANJI:
                                    e.push([r, {
                                        data: r.data,
                                        mode: i.BYTE,
                                        length: h(r.data)
                                    }]);
                                    break;
                                case i.BYTE:
                                    e.push([{
                                        data: r.data,
                                        mode: i.BYTE,
                                        length: h(r.data)
                                    }])
                            }
                        }
                        return e
                    }(f(t, u.isKanjiModeEnabled())),
                    o = function(t, e) {
                        const n = {},
                            r = {
                                start: {}
                            };
                        let o = ["start"];
                        for (let s = 0; s < t.length; s++) {
                            const a = t[s],
                                l = [];
                            for (let t = 0; t < a.length; t++) {
                                const u = a[t],
                                    c = "" + s + t;
                                l.push(c), n[c] = {
                                    node: u,
                                    lastCount: 0
                                }, r[c] = {};
                                for (let t = 0; t < o.length; t++) {
                                    const s = o[t];
                                    n[s] && n[s].node.mode === u.mode ? (r[s][c] = p(n[s].lastCount + u.length, u.mode) - p(n[s].lastCount, u.mode), n[s].lastCount += u.length) : (n[s] && (n[s].lastCount = u.length), r[s][c] = p(u.length, u.mode) + 4 + i.getCharCountIndicator(u.mode, e))
                                }
                            }
                            o = l
                        }
                        for (let i = 0; i < o.length; i++) r[o[i]].end = 0;
                        return {
                            map: r,
                            table: n
                        }
                    }(r, n),
                    s = c.find_path(o.map, "start", "end"),
                    a = [];
                for (let e = 1; e < s.length - 1; e++) a.push(o.table[s[e]].node);
                return e.fromArray(function(t) {
                    return t.reduce((function(t, e) {
                        const n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                    }), [])
                }(a))
            }, e.rawSplit = function(t) {
                return e.fromArray(f(t, u.isKanjiModeEnabled()))
            }
        },
        10242: function(t, e) {
            let n;
            const i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return i[t]
            }, e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" !== typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return "undefined" !== typeof n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        43114: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        23103: function(t, e, n) {
            const i = n(10242),
                r = n(35393),
                o = n(64908),
                s = n(76910),
                a = n(43114),
                l = i.getBCHDigit(7973);

            function u(t, e) {
                return s.getCharCountIndicator(t, e) + 4
            }

            function c(t, e) {
                let n = 0;
                return t.forEach((function(t) {
                    const i = u(t.mode, e);
                    n += i + t.getBitsLength()
                })), n
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!a.isValid(t)) throw new Error("Invalid QR Code version");
                "undefined" === typeof n && (n = s.BYTE);
                const o = 8 * (i.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, e));
                if (n === s.MIXED) return o;
                const l = o - u(n, t);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(l / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(l / 11 * 2);
                    case s.KANJI:
                        return Math.floor(l / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(l / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                let i;
                const r = o.from(n, o.M);
                if (Array.isArray(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (let i = 1; i <= 40; i++)
                            if (c(t, i) <= e.getCapacity(i, n, s.MIXED)) return i
                    }(t, r);
                    if (0 === t.length) return 1;
                    i = t[0]
                } else i = t;
                return function(t, n, i) {
                    for (let r = 1; r <= 40; r++)
                        if (n <= e.getCapacity(r, i, t)) return r
                }(i.mode, i.getLength(), r)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                let e = t << 12;
                for (; i.getBCHDigit(e) - l >= 0;) e ^= 7973 << i.getBCHDigit(e) - l;
                return t << 12 | e
            }
        },
        6907: function(t, e, n) {
            const i = n(89653);
            e.render = function(t, e, n) {
                let r = n,
                    o = e;
                "undefined" !== typeof r || e && e.getContext || (r = e, e = void 0), e || (o = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), r = i.getOptions(r);
                const s = i.getImageWidth(t.modules.size, r),
                    a = o.getContext("2d"),
                    l = a.createImageData(s, s);
                return i.qrToImageData(l.data, t, r),
                    function(t, e, n) {
                        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = n, e.width = n, e.style.height = n + "px", e.style.width = n + "px"
                    }(a, o, s), a.putImageData(l, 0, 0), o
            }, e.renderToDataURL = function(t, n, i) {
                let r = i;
                "undefined" !== typeof r || n && n.getContext || (r = n, n = void 0), r || (r = {});
                const o = e.render(t, n, r),
                    s = r.type || "image/png",
                    a = r.rendererOpts || {};
                return o.toDataURL(s, a.quality)
            }
        },
        93776: function(t, e, n) {
            const i = n(89653);

            function r(t, e) {
                const n = t.a / 255,
                    i = e + '="' + t.hex + '"';
                return n < 1 ? i + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : i
            }

            function o(t, e, n) {
                let i = t + e;
                return "undefined" !== typeof n && (i += " " + n), i
            }
            e.render = function(t, e, n) {
                const s = i.getOptions(e),
                    a = t.modules.size,
                    l = t.modules.data,
                    u = a + 2 * s.margin,
                    c = s.color.light.a ? "<path " + r(s.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    h = "<path " + r(s.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        let i = "",
                            r = 0,
                            s = !1,
                            a = 0;
                        for (let l = 0; l < t.length; l++) {
                            const u = Math.floor(l % e),
                                c = Math.floor(l / e);
                            u || s || (s = !0), t[l] ? (a++, l > 0 && u > 0 && t[l - 1] || (i += s ? o("M", u + n, .5 + c + n) : o("m", r, 0), r = 0, s = !1), u + 1 < e && t[l + 1] || (i += o("h", a), a = 0)) : r++
                        }
                        return i
                    }(l, a, s.margin) + '"/>',
                    d = 'viewBox="0 0 ' + u + " " + u + '"',
                    f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + c + h + "</svg>\n";
                return "function" === typeof n && n(null, f), f
            }
        },
        89653: function(t, e) {
            function n(t) {
                if ("number" === typeof t && (t = t.toString()), "string" !== typeof t) throw new Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
                3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                    return [t, t]
                })))), 6 === e.length && e.push("F", "F");
                const n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                const e = "undefined" === typeof t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    i = t.width && t.width >= 21 ? t.width : void 0,
                    r = t.scale || 4;
                return {
                    width: i,
                    scale: i ? 4 : r,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                const i = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * i)
            }, e.qrToImageData = function(t, n, i) {
                const r = n.modules.size,
                    o = n.modules.data,
                    s = e.getScale(r, i),
                    a = Math.floor((r + 2 * i.margin) * s),
                    l = i.margin * s,
                    u = [i.color.light, i.color.dark];
                for (let e = 0; e < a; e++)
                    for (let n = 0; n < a; n++) {
                        let c = 4 * (e * a + n),
                            h = i.color.light;
                        if (e >= l && n >= l && e < a - l && n < a - l) {
                            h = u[o[Math.floor((e - l) / s) * r + Math.floor((n - l) / s)] ? 1 : 0]
                        }
                        t[c++] = h.r, t[c++] = h.g, t[c++] = h.b, t[c] = h.a
                    }
            }
        },
        33692: function(t, e, n) {
            "use strict";
            var i;
            n.d(e, {
                Jb: function() {
                    return T
                },
                Ld: function() {
                    return P
                },
                YP: function() {
                    return S
                },
                dy: function() {
                    return C
                },
                sY: function() {
                    return F
                }
            });
            const r = window,
                o = r.trustedTypes,
                s = o ? o.createPolicy("lit-html", {
                    createHTML: t => t
                }) : void 0,
                a = "$lit$",
                l = `lit$${(Math.random()+"").slice(9)}$`,
                u = "?" + l,
                c = `<${u}>`,
                h = document,
                d = () => h.createComment(""),
                f = t => null === t || "object" != typeof t && "function" != typeof t,
                p = Array.isArray,
                g = t => p(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
                m = "[ \t\n\f\r]",
                y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                v = /-->/g,
                A = />/g,
                w = RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
                E = /'/g,
                $ = /"/g,
                _ = /^(?:script|style|textarea|title)$/i,
                b = t => (e, ...n) => ({
                    _$litType$: t,
                    strings: e,
                    values: n
                }),
                C = b(1),
                S = b(2),
                T = Symbol.for("lit-noChange"),
                P = Symbol.for("lit-nothing"),
                M = new WeakMap,
                x = h.createTreeWalker(h, 129, null, !1);

            function N(t, e) {
                if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== s ? s.createHTML(e) : e
            }
            const R = (t, e) => {
                const n = t.length - 1,
                    i = [];
                let r, o = 2 === e ? "<svg>" : "",
                    s = y;
                for (let u = 0; u < n; u++) {
                    const e = t[u];
                    let n, h, d = -1,
                        f = 0;
                    for (; f < e.length && (s.lastIndex = f, h = s.exec(e), null !== h);) f = s.lastIndex, s === y ? "!--" === h[1] ? s = v : void 0 !== h[1] ? s = A : void 0 !== h[2] ? (_.test(h[2]) && (r = RegExp("</" + h[2], "g")), s = w) : void 0 !== h[3] && (s = w) : s === w ? ">" === h[0] ? (s = null != r ? r : y, d = -1) : void 0 === h[1] ? d = -2 : (d = s.lastIndex - h[2].length, n = h[1], s = void 0 === h[3] ? w : '"' === h[3] ? $ : E) : s === $ || s === E ? s = w : s === v || s === A ? s = y : (s = w, r = void 0);
                    const p = s === w && t[u + 1].startsWith("/>") ? " " : "";
                    o += s === y ? e + c : d >= 0 ? (i.push(n), e.slice(0, d) + a + e.slice(d) + l + p) : e + l + (-2 === d ? (i.push(void 0), u) : p)
                }
                return [N(t, o + (t[n] || "<?>") + (2 === e ? "</svg>" : "")), i]
            };
            class B {
                constructor({
                    strings: t,
                    _$litType$: e
                }, n) {
                    let i;
                    this.parts = [];
                    let r = 0,
                        s = 0;
                    const c = t.length - 1,
                        h = this.parts,
                        [f, p] = R(t, e);
                    if (this.el = B.createElement(f, n), x.currentNode = this.el.content, 2 === e) {
                        const t = this.el.content,
                            e = t.firstChild;
                        e.remove(), t.append(...e.childNodes)
                    }
                    for (; null !== (i = x.nextNode()) && h.length < c;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes()) {
                                const t = [];
                                for (const e of i.getAttributeNames())
                                    if (e.endsWith(a) || e.startsWith(l)) {
                                        const n = p[s++];
                                        if (t.push(e), void 0 !== n) {
                                            const t = i.getAttribute(n.toLowerCase() + a).split(l),
                                                e = /([.?@])?(.*)/.exec(n);
                                            h.push({
                                                type: 1,
                                                index: r,
                                                name: e[2],
                                                strings: t,
                                                ctor: "." === e[1] ? H : "?" === e[1] ? D : "@" === e[1] ? z : L
                                            })
                                        } else h.push({
                                            type: 6,
                                            index: r
                                        })
                                    }
                                for (const e of t) i.removeAttribute(e)
                            }
                            if (_.test(i.tagName)) {
                                const t = i.textContent.split(l),
                                    e = t.length - 1;
                                if (e > 0) {
                                    i.textContent = o ? o.emptyScript : "";
                                    for (let n = 0; n < e; n++) i.append(t[n], d()), x.nextNode(), h.push({
                                        type: 2,
                                        index: ++r
                                    });
                                    i.append(t[e], d())
                                }
                            }
                        } else if (8 === i.nodeType)
                            if (i.data === u) h.push({
                                type: 2,
                                index: r
                            });
                            else {
                                let t = -1;
                                for (; - 1 !== (t = i.data.indexOf(l, t + 1));) h.push({
                                    type: 7,
                                    index: r
                                }), t += l.length - 1
                            }
                        r++
                    }
                }
                static createElement(t, e) {
                    const n = h.createElement("template");
                    return n.innerHTML = t, n
                }
            }

            function U(t, e, n = t, i) {
                var r, o, s, a;
                if (e === T) return e;
                let l = void 0 !== i ? null === (r = n._$Co) || void 0 === r ? void 0 : r[i] : n._$Cl;
                const u = f(e) ? void 0 : e._$litDirective$;
                return (null == l ? void 0 : l.constructor) !== u && (null === (o = null == l ? void 0 : l._$AO) || void 0 === o || o.call(l, !1), void 0 === u ? l = void 0 : (l = new u(t), l._$AT(t, n, i)), void 0 !== i ? (null !== (s = (a = n)._$Co) && void 0 !== s ? s : a._$Co = [])[i] = l : n._$Cl = l), void 0 !== l && (e = U(t, l._$AS(t, e.values), l, i)), e
            }
            class I {
                constructor(t, e) {
                    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(t) {
                    var e;
                    const {
                        el: {
                            content: n
                        },
                        parts: i
                    } = this._$AD, r = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : h).importNode(n, !0);
                    x.currentNode = r;
                    let o = x.nextNode(),
                        s = 0,
                        a = 0,
                        l = i[0];
                    for (; void 0 !== l;) {
                        if (s === l.index) {
                            let e;
                            2 === l.type ? e = new k(o, o.nextSibling, this, t) : 1 === l.type ? e = new l.ctor(o, l.name, l.strings, this, t) : 6 === l.type && (e = new j(o, this, t)), this._$AV.push(e), l = i[++a]
                        }
                        s !== (null == l ? void 0 : l.index) && (o = x.nextNode(), s++)
                    }
                    return x.currentNode = h, r
                }
                v(t) {
                    let e = 0;
                    for (const n of this._$AV) void 0 !== n && (void 0 !== n.strings ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++
                }
            }
            class k {
                constructor(t, e, n, i) {
                    var r;
                    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = i, this._$Cp = null === (r = null == i ? void 0 : i.isConnected) || void 0 === r || r
                }
                get _$AU() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }
                get parentNode() {
                    let t = this._$AA.parentNode;
                    const e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(t, e = this) {
                    t = U(this, t, e), f(t) ? t === P || null == t || "" === t ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : g(t) ? this.T(t) : this._(t)
                }
                k(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
                $(t) {
                    this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
                }
                _(t) {
                    this._$AH !== P && f(this._$AH) ? this._$AA.nextSibling.data = t : this.$(h.createTextNode(t)), this._$AH = t
                }
                g(t) {
                    var e;
                    const {
                        values: n,
                        _$litType$: i
                    } = t, r = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = B.createElement(N(i.h, i.h[0]), this.options)), i);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r) this._$AH.v(n);
                    else {
                        const t = new I(r, this),
                            e = t.u(this.options);
                        t.v(n), this.$(e), this._$AH = t
                    }
                }
                _$AC(t) {
                    let e = M.get(t.strings);
                    return void 0 === e && M.set(t.strings, e = new B(t)), e
                }
                T(t) {
                    p(this._$AH) || (this._$AH = [], this._$AR());
                    const e = this._$AH;
                    let n, i = 0;
                    for (const r of t) i === e.length ? e.push(n = new k(this.k(d()), this.k(d()), this, this.options)) : n = e[i], n._$AI(r), i++;
                    i < e.length && (this._$AR(n && n._$AB.nextSibling, i), e.length = i)
                }
                _$AR(t = this._$AA.nextSibling, e) {
                    var n;
                    for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e); t && t !== this._$AB;) {
                        const e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
                setConnected(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }
            class L {
                constructor(t, e, n, i, r) {
                    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = P
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t, e = this, n, i) {
                    const r = this.strings;
                    let o = !1;
                    if (void 0 === r) t = U(this, t, e, 0), o = !f(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
                    else {
                        const i = t;
                        let s, a;
                        for (t = r[0], s = 0; s < r.length - 1; s++) a = U(this, i[n + s], e, s), a === T && (a = this._$AH[s]), o || (o = !f(a) || a !== this._$AH[s]), a === P ? t = P : t !== P && (t += (null != a ? a : "") + r[s + 1]), this._$AH[s] = a
                    }
                    o && !i && this.j(t)
                }
                j(t) {
                    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }
            class H extends L {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(t) {
                    this.element[this.name] = t === P ? void 0 : t
                }
            }
            const O = o ? o.emptyScript : "";
            class D extends L {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(t) {
                    t && t !== P ? this.element.setAttribute(this.name, O) : this.element.removeAttribute(this.name)
                }
            }
            class z extends L {
                constructor(t, e, n, i, r) {
                    super(t, e, n, i, r), this.type = 5
                }
                _$AI(t, e = this) {
                    var n;
                    if ((t = null !== (n = U(this, t, e, 0)) && void 0 !== n ? n : P) === T) return;
                    const i = this._$AH,
                        r = t === P && i !== P || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive,
                        o = t !== P && (i === P || r);
                    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
                handleEvent(t) {
                    var e, n;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== n ? n : this.element, t) : this._$AH.handleEvent(t)
                }
            }
            class j {
                constructor(t, e, n) {
                    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t) {
                    U(this, t)
                }
            }
            const V = r.litHtmlPolyfillSupport;
            null == V || V(B, k), (null !== (i = r.litHtmlVersions) && void 0 !== i ? i : r.litHtmlVersions = []).push("2.8.0");
            const F = (t, e, n) => {
                var i, r;
                const o = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : e;
                let s = o._$litPart$;
                if (void 0 === s) {
                    const t = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : null;
                    o._$litPart$ = s = new k(e.insertBefore(d(), t), t, void 0, null != n ? n : {})
                }
                return s._$AI(t), s
            }
        },
        69065: function(t, e, n) {
            "use strict";
            n.d(e, {
                Mo: function() {
                    return i
                },
                Cb: function() {
                    return o
                },
                SB: function() {
                    return s
                }
            });
            const i = t => e => "function" == typeof e ? ((t, e) => (customElements.define(t, e), e))(t, e) : ((t, e) => {
                    const {
                        kind: n,
                        elements: i
                    } = e;
                    return {
                        kind: n,
                        elements: i,
                        finisher(e) {
                            customElements.define(t, e)
                        }
                    }
                })(t, e),
                r = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,
                    finisher(n) {
                        n.createProperty(e.key, t)
                    }
                } : {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: e.key,
                    initializer() {
                        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                    },
                    finisher(n) {
                        n.createProperty(e.key, t)
                    }
                };

            function o(t) {
                return (e, n) => void 0 !== n ? ((t, e, n) => {
                    e.constructor.createProperty(n, t)
                })(t, e, n) : r(t, e)
            }

            function s(t) {
                return o({ ...t,
                    state: !0
                })
            }
            var a;
            null === (a = window.HTMLSlotElement) || void 0 === a || a.prototype.assignedElements
        },
        8109: function(t, e, n) {
            "use strict";
            n.d(e, {
                $: function() {
                    return o
                }
            });
            var i = n(33692);
            const r = 1;
            const o = (t => (...e) => ({
                _$litDirective$: t,
                values: e
            }))(class extends class {
                constructor(t) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(t, e, n) {
                    this._$Ct = t, this._$AM = e, this._$Ci = n
                }
                _$AS(t, e) {
                    return this.update(t, e)
                }
                update(t, e) {
                    return this.render(...e)
                }
            } {
                constructor(t) {
                    var e;
                    if (super(t), t.type !== r || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(t) {
                    return " " + Object.keys(t).filter((e => t[e])).join(" ") + " "
                }
                update(t, [e]) {
                    var n, r;
                    if (void 0 === this.it) {
                        this.it = new Set, void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((t => "" !== t))));
                        for (const t in e) e[t] && !(null === (n = this.nt) || void 0 === n ? void 0 : n.has(t)) && this.it.add(t);
                        return this.render(e)
                    }
                    const o = t.element.classList;
                    this.it.forEach((t => {
                        t in e || (o.remove(t), this.it.delete(t))
                    }));
                    for (const i in e) {
                        const t = !!e[i];
                        t === this.it.has(i) || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(i)) || (t ? (o.add(i), this.it.add(i)) : (o.remove(i), this.it.delete(i)))
                    }
                    return i.Jb
                }
            })
        },
        35162: function(t, e, n) {
            "use strict";
            n.d(e, {
                o: function() {
                    return r
                }
            });
            var i = n(33692);
            const r = t => null != t ? t : i.Ld
        },
        43265: function(t, e, n) {
            "use strict";
            n.d(e, {
                oi: function() {
                    return _
                },
                iv: function() {
                    return l
                },
                dy: function() {
                    return $.dy
                },
                YP: function() {
                    return $.YP
                }
            });
            const i = window,
                r = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                o = Symbol(),
                s = new WeakMap;
            class a {
                constructor(t, e, n) {
                    if (this._$cssResult$ = !0, n !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = t, this.t = e
                }
                get styleSheet() {
                    let t = this.o;
                    const e = this.t;
                    if (r && void 0 === t) {
                        const n = void 0 !== e && 1 === e.length;
                        n && (t = s.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), n && s.set(e, t))
                    }
                    return t
                }
                toString() {
                    return this.cssText
                }
            }
            const l = (t, ...e) => {
                    const n = 1 === t.length ? t[0] : e.reduce(((e, n, i) => e + (t => {
                        if (!0 === t._$cssResult$) return t.cssText;
                        if ("number" == typeof t) return t;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(n) + t[i + 1]), t[0]);
                    return new a(n, t, o)
                },
                u = r ? t => t : t => t instanceof CSSStyleSheet ? (t => {
                    let e = "";
                    for (const n of t.cssRules) e += n.cssText;
                    return (t => new a("string" == typeof t ? t : t + "", void 0, o))(e)
                })(t) : t;
            var c;
            const h = window,
                d = h.trustedTypes,
                f = d ? d.emptyScript : "",
                p = h.reactiveElementPolyfillSupport,
                g = {
                    toAttribute(t, e) {
                        switch (e) {
                            case Boolean:
                                t = t ? f : null;
                                break;
                            case Object:
                            case Array:
                                t = null == t ? t : JSON.stringify(t)
                        }
                        return t
                    },
                    fromAttribute(t, e) {
                        let n = t;
                        switch (e) {
                            case Boolean:
                                n = null !== t;
                                break;
                            case Number:
                                n = null === t ? null : Number(t);
                                break;
                            case Object:
                            case Array:
                                try {
                                    n = JSON.parse(t)
                                } catch (t) {
                                    n = null
                                }
                        }
                        return n
                    }
                },
                m = (t, e) => e !== t && (e == e || t == t),
                y = {
                    attribute: !0,
                    type: String,
                    converter: g,
                    reflect: !1,
                    hasChanged: m
                },
                v = "finalized";
            class A extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
                }
                static addInitializer(t) {
                    var e;
                    this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
                }
                static get observedAttributes() {
                    this.finalize();
                    const t = [];
                    return this.elementProperties.forEach(((e, n) => {
                        const i = this._$Ep(n, e);
                        void 0 !== i && (this._$Ev.set(i, n), t.push(i))
                    })), t
                }
                static createProperty(t, e = y) {
                    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        const n = "symbol" == typeof t ? Symbol() : "__" + t,
                            i = this.getPropertyDescriptor(t, n, e);
                        void 0 !== i && Object.defineProperty(this.prototype, t, i)
                    }
                }
                static getPropertyDescriptor(t, e, n) {
                    return {
                        get() {
                            return this[e]
                        },
                        set(i) {
                            const r = this[t];
                            this[e] = i, this.requestUpdate(t, r, n)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(t) {
                    return this.elementProperties.get(t) || y
                }
                static finalize() {
                    if (this.hasOwnProperty(v)) return !1;
                    this[v] = !0;
                    const t = Object.getPrototypeOf(this);
                    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        const t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                        for (const n of e) this.createProperty(n, t[n])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(t) {
                    const e = [];
                    if (Array.isArray(t)) {
                        const n = new Set(t.flat(1 / 0).reverse());
                        for (const t of n) e.unshift(u(t))
                    } else void 0 !== t && e.push(u(t));
                    return e
                }
                static _$Ep(t, e) {
                    const n = e.attribute;
                    return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof t ? t.toLowerCase() : void 0
                }
                _$Eu() {
                    var t;
                    this._$E_ = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t => t(this)))
                }
                addController(t) {
                    var e, n;
                    (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (n = t.hostConnected) || void 0 === n || n.call(t))
                }
                removeController(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach(((t, e) => {
                        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
                    }))
                }
                createRenderRoot() {
                    var t;
                    const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return ((t, e) => {
                        r ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
                            const n = document.createElement("style"),
                                r = i.litNonce;
                            void 0 !== r && n.setAttribute("nonce", r), n.textContent = e.cssText, t.appendChild(n)
                        }))
                    })(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                enableUpdating(t) {}
                disconnectedCallback() {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                attributeChangedCallback(t, e, n) {
                    this._$AK(t, n)
                }
                _$EO(t, e, n = y) {
                    var i;
                    const r = this.constructor._$Ep(t, n);
                    if (void 0 !== r && !0 === n.reflect) {
                        const o = (void 0 !== (null === (i = n.converter) || void 0 === i ? void 0 : i.toAttribute) ? n.converter : g).toAttribute(e, n.type);
                        this._$El = t, null == o ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null
                    }
                }
                _$AK(t, e) {
                    var n;
                    const i = this.constructor,
                        r = i._$Ev.get(t);
                    if (void 0 !== r && this._$El !== r) {
                        const t = i.getPropertyOptions(r),
                            o = "function" == typeof t.converter ? {
                                fromAttribute: t.converter
                            } : void 0 !== (null === (n = t.converter) || void 0 === n ? void 0 : n.fromAttribute) ? t.converter : g;
                        this._$El = r, this[r] = o.fromAttribute(e, t.type), this._$El = null
                    }
                }
                requestUpdate(t, e, n) {
                    let i = !0;
                    void 0 !== t && (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || m)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === n.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (t) {
                        Promise.reject(t)
                    }
                    const t = this.scheduleUpdate();
                    return null != t && await t, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var t;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach(((t, e) => this[e] = t)), this._$Ei = void 0);
                    let e = !1;
                    const n = this._$AL;
                    try {
                        e = this.shouldUpdate(n), e ? (this.willUpdate(n), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                            var e;
                            return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                        })), this.update(n)) : this._$Ek()
                    } catch (t) {
                        throw e = !1, this._$Ek(), t
                    }
                    e && this._$AE(n)
                }
                willUpdate(t) {}
                _$AE(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach((t => {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(t) {
                    return !0
                }
                update(t) {
                    void 0 !== this._$EC && (this._$EC.forEach(((t, e) => this._$EO(e, this[e], t))), this._$EC = void 0), this._$Ek()
                }
                updated(t) {}
                firstUpdated(t) {}
            }
            A[v] = !0, A.elementProperties = new Map, A.elementStyles = [], A.shadowRootOptions = {
                mode: "open"
            }, null == p || p({
                ReactiveElement: A
            }), (null !== (c = h.reactiveElementVersions) && void 0 !== c ? c : h.reactiveElementVersions = []).push("1.6.3");
            var w, E, $ = n(33692);
            class _ extends A {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var t, e;
                    const n = super.createRenderRoot();
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = n.firstChild), n
                }
                update(t) {
                    const e = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $.sY)(e, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var t;
                    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
                }
                disconnectedCallback() {
                    var t;
                    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
                }
                render() {
                    return $.Jb
                }
            }
            _.finalized = !0, _._$litElement$ = !0, null === (w = globalThis.litElementHydrateSupport) || void 0 === w || w.call(globalThis, {
                LitElement: _
            });
            const b = globalThis.litElementPolyfillSupport;
            null == b || b({
                LitElement: _
            });
            (null !== (E = globalThis.litElementVersions) && void 0 !== E ? E : globalThis.litElementVersions = []).push("3.3.3")
        }
    }
]);