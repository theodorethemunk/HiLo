(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [950], {
        40725: function(t, e, n) {
            var r;
            "undefined" != typeof self && self, t.exports = (r = n(67294), function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var s = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var s in t) n.d(r, s, function(e) {
                            return t[e]
                        }.bind(null, s));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 2)
            }([function(t, e) {
                t.exports = r
            }, function(t, e, n) {
                "use strict";
                var r = {
                    linear: function(t, e, n, r) {
                        return (n - e) * t / r + e
                    },
                    easeInQuad: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t + e
                    },
                    easeOutQuad: function(t, e, n, r) {
                        return -(n - e) * (t /= r) * (t - 2) + e
                    },
                    easeInOutQuad: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e
                    },
                    easeInCubic: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t + e
                    },
                    easeOutCubic: function(t, e, n, r) {
                        return (n - e) * ((t = t / r - 1) * t * t + 1) + e
                    },
                    easeInOutCubic: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e
                    },
                    easeInQuart: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t * t + e
                    },
                    easeOutQuart: function(t, e, n, r) {
                        return -(n - e) * ((t = t / r - 1) * t * t * t - 1) + e
                    },
                    easeInOutQuart: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e
                    },
                    easeInQuint: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t * t * t + e
                    },
                    easeOutQuint: function(t, e, n, r) {
                        return (n - e) * ((t = t / r - 1) * t * t * t * t + 1) + e
                    },
                    easeInOutQuint: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e
                    },
                    easeInSine: function(t, e, n, r) {
                        var s = n - e;
                        return -s * Math.cos(t / r * (Math.PI / 2)) + s + e
                    },
                    easeOutSine: function(t, e, n, r) {
                        return (n - e) * Math.sin(t / r * (Math.PI / 2)) + e
                    },
                    easeInOutSine: function(t, e, n, r) {
                        return -(n - e) / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                    },
                    easeInExpo: function(t, e, n, r) {
                        return 0 == t ? e : (n - e) * Math.pow(2, 10 * (t / r - 1)) + e
                    },
                    easeOutExpo: function(t, e, n, r) {
                        var s = n - e;
                        return t == r ? e + s : s * (1 - Math.pow(2, -10 * t / r)) + e
                    },
                    easeInOutExpo: function(t, e, n, r) {
                        var s = n - e;
                        return 0 === t ? e : t === r ? e + s : (t /= r / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e : s / 2 * (2 - Math.pow(2, -10 * --t)) + e
                    },
                    easeInCirc: function(t, e, n, r) {
                        return -(n - e) * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                    },
                    easeOutCirc: function(t, e, n, r) {
                        return (n - e) * Math.sqrt(1 - (t = t / r - 1) * t) + e
                    },
                    easeInOutCirc: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                    },
                    easeInElastic: function(t, e, n, r) {
                        var s, i, a, o = n - e;
                        return a = 1.70158, 0 === t ? e : 1 == (t /= r) ? e + o : ((i = 0) || (i = .3 * r), (s = o) < Math.abs(o) ? (s = o, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(o / s), -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) + e)
                    },
                    easeOutElastic: function(t, e, n, r) {
                        var s, i, a, o = n - e;
                        return a = 1.70158, 0 === t ? e : 1 == (t /= r) ? e + o : ((i = 0) || (i = .3 * r), (s = o) < Math.abs(o) ? (s = o, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(o / s), s * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / i) + o + e)
                    },
                    easeInOutElastic: function(t, e, n, r) {
                        var s, i, a, o = n - e;
                        return a = 1.70158, 0 === t ? e : 2 == (t /= r / 2) ? e + o : ((i = 0) || (i = r * (.3 * 1.5)), (s = o) < Math.abs(o) ? (s = o, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(o / s), t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) * -.5 + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) * .5 + o + e)
                    },
                    easeInBack: function(t, e, n, r, s) {
                        return void 0 === s && (s = 1.70158), (n - e) * (t /= r) * t * ((s + 1) * t - s) + e
                    },
                    easeOutBack: function(t, e, n, r, s) {
                        return void 0 === s && (s = 1.70158), (n - e) * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + e
                    },
                    easeInOutBack: function(t, e, n, r, s) {
                        var i = n - e;
                        return void 0 === s && (s = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + e : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + e
                    },
                    easeInBounce: function(t, e, n, s) {
                        var i = n - e;
                        return i - r.easeOutBounce(s - t, 0, i, s) + e
                    },
                    easeOutBounce: function(t, e, n, r) {
                        var s = n - e;
                        return (t /= r) < 1 / 2.75 ? s * (7.5625 * t * t) + e : t < 2 / 2.75 ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                    },
                    easeInOutBounce: function(t, e, n, s) {
                        var i = n - e;
                        return t < s / 2 ? .5 * r.easeInBounce(2 * t, 0, i, s) + e : .5 * r.easeOutBounce(2 * t - s, 0, i, s) + .5 * i + e
                    }
                };
                t.exports = r
            }, function(t, e, n) {
                t.exports = n(3)
            }, function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, "ReactConfetti", (function() {
                    return j
                }));
                var r, s, i = n(0),
                    a = n.n(i),
                    o = n(1),
                    c = n.n(o);

                function u(t, e) {
                    return t + Math.random() * (e - t)
                }

                function l(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function h(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }! function(t) {
                    t[t.Circle = 0] = "Circle", t[t.Square = 1] = "Square", t[t.Strip = 2] = "Strip"
                }(r || (r = {})),
                function(t) {
                    t[t.Positive = 1] = "Positive", t[t.Negative = -1] = "Negative"
                }(s || (s = {}));
                var f = function() {
                    function t(e, n, r, i) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), h(this, "context", void 0), h(this, "radius", void 0), h(this, "x", void 0), h(this, "y", void 0), h(this, "w", void 0), h(this, "h", void 0), h(this, "vx", void 0), h(this, "vy", void 0), h(this, "shape", void 0), h(this, "angle", void 0), h(this, "angularSpin", void 0), h(this, "color", void 0), h(this, "rotateY", void 0), h(this, "rotationDirection", void 0), h(this, "getOptions", void 0), this.getOptions = n;
                        var a, o, c = this.getOptions(),
                            l = c.colors,
                            f = c.initialVelocityX,
                            d = c.initialVelocityY;
                        this.context = e, this.x = r, this.y = i, this.w = u(5, 20), this.h = u(5, 20), this.radius = u(5, 10), this.vx = "number" == typeof f ? u(-f, f) : u(f.min, f.max), this.vy = "number" == typeof d ? u(-d, 0) : u(d.min, d.max), this.shape = (a = 0, o = 2, Math.floor(a + Math.random() * (o - a + 1))), this.angle = u(0, 360) * Math.PI / 180, this.angularSpin = u(-.2, .2), this.color = l[Math.floor(Math.random() * l.length)], this.rotateY = u(0, 1), this.rotationDirection = u(0, 1) ? s.Positive : s.Negative
                    }
                    var e, n, i;
                    return e = t, (n = [{
                        key: "update",
                        value: function() {
                            var t = this.getOptions(),
                                e = t.gravity,
                                n = t.wind,
                                i = t.friction,
                                a = t.opacity,
                                o = t.drawShape;
                            this.x += this.vx, this.y += this.vy, this.vy += e, this.vx += n, this.vx *= i, this.vy *= i, this.rotateY >= 1 && this.rotationDirection === s.Positive ? this.rotationDirection = s.Negative : this.rotateY <= -1 && this.rotationDirection === s.Negative && (this.rotationDirection = s.Positive);
                            var c = .1 * this.rotationDirection;
                            if (this.rotateY += c, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a, this.context.lineCap = "round", this.context.lineWidth = 2, o && "function" == typeof o) o.call(this, this.context);
                            else switch (this.shape) {
                                case r.Circle:
                                    this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                                    break;
                                case r.Square:
                                    this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                                    break;
                                case r.Strip:
                                    this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h)
                            }
                            this.context.closePath(), this.context.restore()
                        }
                    }]) && l(e.prototype, n), i && l(e, i), t
                }();

                function d(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var p = function t(e, n) {
                    var r = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), d(this, "canvas", void 0), d(this, "context", void 0), d(this, "getOptions", void 0), d(this, "x", 0), d(this, "y", 0), d(this, "w", 0), d(this, "h", 0), d(this, "lastNumberOfPieces", 0), d(this, "tweenInitTime", Date.now()), d(this, "particles", []), d(this, "particlesGenerated", 0), d(this, "removeParticleAt", (function(t) {
                        r.particles.splice(t, 1)
                    })), d(this, "getParticle", (function() {
                        var t = u(r.x, r.w + r.x),
                            e = u(r.y, r.h + r.y);
                        return new f(r.context, r.getOptions, t, e)
                    })), d(this, "animate", (function() {
                        var t = r.canvas,
                            e = r.context,
                            n = r.particlesGenerated,
                            s = r.lastNumberOfPieces,
                            i = r.getOptions(),
                            a = i.run,
                            o = i.recycle,
                            c = i.numberOfPieces,
                            u = i.debug,
                            l = i.tweenFunction,
                            h = i.tweenDuration;
                        if (!a) return !1;
                        var f = r.particles.length,
                            d = o ? f : n,
                            p = Date.now();
                        if (d < c) {
                            s !== c && (r.tweenInitTime = p, r.lastNumberOfPieces = c);
                            for (var g = r.tweenInitTime, y = l(p - g > h ? h : Math.max(0, p - g), d, c, h), m = Math.round(y - d), w = 0; w < m; w++) r.particles.push(r.getParticle());
                            r.particlesGenerated += m
                        }
                        return u && (e.font = "12px sans-serif", e.fillStyle = "#333", e.textAlign = "right", e.fillText("Particles: ".concat(f), t.width - 10, t.height - 20)), r.particles.forEach((function(e, n) {
                            e.update(), (e.y > t.height || e.y < -100 || e.x > t.width + 100 || e.x < -100) && (o && d <= c ? r.particles[n] = r.getParticle() : r.removeParticleAt(n))
                        })), f > 0 || d < c
                    })), this.canvas = e;
                    var s = this.canvas.getContext("2d");
                    if (!s) throw new Error("Could not get canvas context");
                    this.context = s, this.getOptions = n
                };

                function g(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function y(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? g(Object(n), !0).forEach((function(e) {
                            w(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function m(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function w(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var A = {
                        width: "undefined" != typeof window ? window.innerWidth : 300,
                        height: "undefined" != typeof window ? window.innerHeight : 200,
                        numberOfPieces: 200,
                        friction: .99,
                        wind: 0,
                        gravity: .1,
                        initialVelocityX: 4,
                        initialVelocityY: 10,
                        colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
                        opacity: 1,
                        debug: !1,
                        tweenFunction: c.a.easeInOutQuad,
                        tweenDuration: 5e3,
                        recycle: !0,
                        run: !0
                    },
                    b = function() {
                        function t(e, n) {
                            var r = this;
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), w(this, "canvas", void 0), w(this, "context", void 0), w(this, "_options", void 0), w(this, "generator", void 0), w(this, "rafId", void 0), w(this, "setOptionsWithDefaults", (function(t) {
                                var e = {
                                    confettiSource: {
                                        x: 0,
                                        y: 0,
                                        w: r.canvas.width,
                                        h: 0
                                    }
                                };
                                r._options = y(y(y({}, e), A), t), Object.assign(r, t.confettiSource)
                            })), w(this, "update", (function() {
                                var t = r.options,
                                    e = t.run,
                                    n = t.onConfettiComplete,
                                    s = r.canvas,
                                    i = r.context;
                                e && (i.fillStyle = "white", i.clearRect(0, 0, s.width, s.height)), r.generator.animate() ? r.rafId = requestAnimationFrame(r.update) : (n && "function" == typeof n && r.generator.particlesGenerated > 0 && n.call(r, r), r._options.run = !1)
                            })), w(this, "reset", (function() {
                                r.generator && r.generator.particlesGenerated > 0 && (r.generator.particlesGenerated = 0, r.generator.particles = [], r.generator.lastNumberOfPieces = 0)
                            })), w(this, "stop", (function() {
                                r.options = {
                                    run: !1
                                }, r.rafId && (cancelAnimationFrame(r.rafId), r.rafId = void 0)
                            })), this.canvas = e;
                            var s = this.canvas.getContext("2d");
                            if (!s) throw new Error("Could not get canvas context");
                            this.context = s, this.generator = new p(this.canvas, (function() {
                                return r.options
                            })), this.options = n, this.update()
                        }
                        var e, n, r;
                        return e = t, (n = [{
                            key: "options",
                            get: function() {
                                return this._options
                            },
                            set: function(t) {
                                var e = this._options && this._options.run,
                                    n = this._options && this._options.recycle;
                                this.setOptionsWithDefaults(t), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof t.recycle && t.recycle && !1 === n && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof t.run && t.run && !1 === e && this.update()
                            }
                        }]) && m(e.prototype, n), r && m(e, r), t
                    }();

                function v(t) {
                    return function(t) {
                        if (Array.isArray(t)) return I(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || O(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function E(t) {
                    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function P() {
                    return (P = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function x(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function C(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? x(Object(n), !0).forEach((function(e) {
                            U(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function k(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                            var n = [],
                                r = !0,
                                s = !1,
                                i = void 0;
                            try {
                                for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                s = !0, i = t
                            } finally {
                                try {
                                    r || null == o.return || o.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return n
                        }
                    }(t, e) || O(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function O(t, e) {
                    if (t) {
                        if ("string" == typeof t) return I(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(t, e) : void 0
                    }
                }

                function I(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function N(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function B(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function T(t, e) {
                    return (T = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function S(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = L(t);
                        if (e) {
                            var s = L(this).constructor;
                            n = Reflect.construct(r, arguments, s)
                        } else n = r.apply(this, arguments);
                        return R(this, n)
                    }
                }

                function R(t, e) {
                    return !e || "object" !== E(e) && "function" != typeof e ? D(t) : e
                }

                function D(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function L(t) {
                    return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function U(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var F = a.a.createRef(),
                    M = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && T(t, e)
                        }(i, t);
                        var e, n, r, s = S(i);

                        function i(t) {
                            var e;
                            N(this, i);
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return U(D(e = s.call.apply(s, [this, t].concat(r))), "canvas", a.a.createRef()), U(D(e), "confetti", void 0), e.canvas = t.canvasRef || F, e
                        }
                        return e = i, (n = [{
                            key: "componentDidMount",
                            value: function() {
                                if (this.canvas.current) {
                                    var t = G(this.props)[0];
                                    this.confetti = new b(this.canvas.current, t)
                                }
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function() {
                                var t = G(this.props)[0];
                                this.confetti && (this.confetti.options = t)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.confetti && this.confetti.stop(), this.confetti = void 0
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = k(G(this.props), 2),
                                    e = t[0],
                                    n = t[1],
                                    r = C({
                                        zIndex: 2,
                                        position: "absolute",
                                        pointerEvents: "none",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }, n.style);
                                return a.a.createElement("canvas", P({
                                    width: e.width,
                                    height: e.height,
                                    ref: this.canvas
                                }, n, {
                                    style: r
                                }))
                            }
                        }]) && B(e.prototype, n), r && B(e, r), i
                    }(i.Component);

                function G(t) {
                    var e = {},
                        n = {},
                        r = [].concat(v(Object.keys(A)), ["confettiSource", "drawShape", "onConfettiComplete"]),
                        s = ["canvasRef"];
                    for (var i in t) {
                        var a = t[i];
                        r.includes(i) ? e[i] = a : s.includes(i) ? s[i] = a : n[i] = a
                    }
                    return [e, n, {}]
                }
                U(M, "defaultProps", C({}, A)), U(M, "displayName", "ReactConfetti");
                var j = a.a.forwardRef((function(t, e) {
                    return a.a.createElement(M, P({
                        canvasRef: e
                    }, t))
                }));
                e.default = j
            }]).default)
        },
        66018: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var r = n(67294),
                s = function(t) {
                    (0, r.useEffect)(t, [])
                },
                i = function(t) {
                    var e = (0, r.useRef)(t);
                    e.current = t, s((function() {
                        return function() {
                            return e.current()
                        }
                    }))
                },
                a = function(t) {
                    var e = (0, r.useRef)(0),
                        n = (0, r.useState)(t),
                        s = n[0],
                        a = n[1],
                        o = (0, r.useCallback)((function(t) {
                            cancelAnimationFrame(e.current), e.current = requestAnimationFrame((function() {
                                a(t)
                            }))
                        }), []);
                    return i((function() {
                        cancelAnimationFrame(e.current)
                    })), [s, o]
                };
            var o = "undefined" !== typeof window,
                c = function(t, e) {
                    void 0 === t && (t = 1 / 0), void 0 === e && (e = 1 / 0);
                    var n = a({
                            width: o ? window.innerWidth : t,
                            height: o ? window.innerHeight : e
                        }),
                        s = n[0],
                        i = n[1];
                    return (0, r.useEffect)((function() {
                        if (o) {
                            var t = function() {
                                i({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            };
                            return function(t) {
                                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                    t && t.addEventListener && t.addEventListener.apply(t, e)
                                }(window, "resize", t),
                                function() {
                                    ! function(t) {
                                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                        t && t.removeEventListener && t.removeEventListener.apply(t, e)
                                    }(window, "resize", t)
                                }
                        }
                    }), []), s
                }
        },
        39613: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return R
                }
            });
            var r = n(32423),
                s = n(78135),
                i = n(5556),
                a = n(12229),
                o = n(64249);
            class c extends s.XI {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, e) {
                    let n = o._.dereference(e, "string");
                    try {
                        n = (0, i.K)(n)
                    } catch (r) {
                        return this._throwError(r.message, e)
                    }
                    return t.writeValue(n)
                }
                decode(t) {
                    return (0, i.K)((0, a.m9)(t.readValue(), 20))
                }
            }
            var u = n(5857);
            class l extends s.XI {
                coder;
                constructor(t) {
                    super(t.name, t.type, "_", t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }

            function h(t, e, n) {
                let i = [];
                if (Array.isArray(n)) i = n;
                else if (n && "object" === typeof n) {
                    let t = {};
                    i = e.map((e => {
                        const s = e.localName;
                        return (0, r.hu)(s, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: e
                            },
                            value: n
                        }), (0, r.hu)(!t[s], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: e
                            },
                            value: n
                        }), t[s] = !0, n[s]
                    }))
                } else(0, r.en)(!1, "invalid tuple value", "tuple", n);
                (0, r.en)(e.length === i.length, "types/value length mismatch", "tuple", n);
                let a = new s.QV,
                    o = new s.QV,
                    c = [];
                e.forEach(((t, e) => {
                    let n = i[e];
                    if (t.dynamic) {
                        let e = o.length;
                        t.encode(o, n);
                        let r = a.writeUpdatableValue();
                        c.push((t => {
                            r(t + e)
                        }))
                    } else t.encode(a, n)
                })), c.forEach((t => {
                    t(a.length)
                }));
                let u = t.appendWriter(a);
                return u += t.appendWriter(o), u
            }

            function f(t, e) {
                let n = [],
                    i = [],
                    a = t.subReader(0);
                return e.forEach((e => {
                    let s = null;
                    if (e.dynamic) {
                        let n = t.readIndex(),
                            i = a.subReader(n);
                        try {
                            s = e.decode(i)
                        } catch (o) {
                            if ((0, r.VZ)(o, "BUFFER_OVERRUN")) throw o;
                            s = o, s.baseType = e.name, s.name = e.localName, s.type = e.type
                        }
                    } else try {
                        s = e.decode(t)
                    } catch (o) {
                        if ((0, r.VZ)(o, "BUFFER_OVERRUN")) throw o;
                        s = o, s.baseType = e.name, s.name = e.localName, s.type = e.type
                    }
                    if (void 0 == s) throw new Error("investigate");
                    n.push(s), i.push(e.localName || null)
                })), s.x4.fromItems(n, i)
            }
            class d extends s.XI {
                coder;
                length;
                constructor(t, e, n) {
                    super("array", t.type + "[" + (e >= 0 ? e : "") + "]", n, -1 === e || t.dynamic), (0, u.h)(this, {
                        coder: t,
                        length: e
                    })
                }
                defaultValue() {
                    const t = this.coder.defaultValue(),
                        e = [];
                    for (let n = 0; n < this.length; n++) e.push(t);
                    return e
                }
                encode(t, e) {
                    const n = o._.dereference(e, "array");
                    Array.isArray(n) || this._throwError("expected array value", n);
                    let s = this.length; - 1 === s && (s = n.length, t.writeValue(n.length)), (0, r.fG)(n.length, s, "coder array" + (this.localName ? " " + this.localName : ""));
                    let i = [];
                    for (let r = 0; r < n.length; r++) i.push(this.coder);
                    return h(t, i, n)
                }
                decode(t) {
                    let e = this.length; - 1 === e && (e = t.readIndex(), (0, r.hu)(e * s.Bx <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
                        buffer: t.bytes,
                        offset: e * s.Bx,
                        length: t.dataLength
                    }));
                    let n = [];
                    for (let r = 0; r < e; r++) n.push(new l(this.coder));
                    return f(t, n)
                }
            }
            class p extends s.XI {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, e) {
                    const n = o._.dereference(e, "bool");
                    return t.writeValue(n ? 1 : 0)
                }
                decode(t) {
                    return !!t.readValue()
                }
            }
            var g = n(455);
            class y extends s.XI {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, e) {
                    e = (0, g.h_)(e);
                    let n = t.writeValue(e.length);
                    return n += t.writeBytes(e), n
                }
                decode(t) {
                    return t.readBytes(t.readIndex(), !0)
                }
            }
            class m extends y {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return (0, g.Dv)(super.decode(t))
                }
            }
            class w extends s.XI {
                size;
                constructor(t, e) {
                    let n = "bytes" + String(t);
                    super(n, n, e, !1), (0, u.h)(this, {
                        size: t
                    }, {
                        size: "number"
                    })
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, e) {
                    let n = (0, g.h_)(o._.dereference(e, this.type));
                    return n.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(n)
                }
                decode(t) {
                    return (0, g.Dv)(t.readBytes(this.size))
                }
            }
            const A = new Uint8Array([]);
            class b extends s.XI {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes(A)
                }
                decode(t) {
                    return t.readBytes(0), null
                }
            }
            const v = BigInt(0),
                E = BigInt(1),
                P = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            class x extends s.XI {
                size;
                signed;
                constructor(t, e, n) {
                    const r = (e ? "int" : "uint") + 8 * t;
                    super(r, r, n, !1), (0, u.h)(this, {
                        size: t,
                        signed: e
                    }, {
                        size: "number",
                        signed: "boolean"
                    })
                }
                defaultValue() {
                    return 0
                }
                encode(t, e) {
                    let n = (0, a.yT)(o._.dereference(e, this.type)),
                        r = (0, a.sS)(P, 8 * s.Bx);
                    if (this.signed) {
                        let t = (0, a.sS)(r, 8 * this.size - 1);
                        (n > t || n < -(t + E)) && this._throwError("value out-of-bounds", e), n = (0, a.$j)(n, 8 * s.Bx)
                    } else(n < v || n > (0, a.sS)(r, 8 * this.size)) && this._throwError("value out-of-bounds", e);
                    return t.writeValue(n)
                }
                decode(t) {
                    let e = (0, a.sS)(t.readValue(), 8 * this.size);
                    return this.signed && (e = (0, a._Y)(e, 8 * this.size)), e
                }
            }
            var C = n(97155);
            class k extends y {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, e) {
                    return super.encode(t, (0, C.Y0)(o._.dereference(e, "string")))
                }
                decode(t) {
                    return (0, C.ZN)(super.decode(t))
                }
            }
            class O extends s.XI {
                coders;
                constructor(t, e) {
                    let n = !1;
                    const r = [];
                    t.forEach((t => {
                        t.dynamic && (n = !0), r.push(t.type)
                    }));
                    super("tuple", "tuple(" + r.join(",") + ")", e, n), (0, u.h)(this, {
                        coders: Object.freeze(t.slice())
                    })
                }
                defaultValue() {
                    const t = [];
                    this.coders.forEach((e => {
                        t.push(e.defaultValue())
                    }));
                    const e = this.coders.reduce(((t, e) => {
                        const n = e.localName;
                        return n && (t[n] || (t[n] = 0), t[n]++), t
                    }), {});
                    return this.coders.forEach(((n, r) => {
                        let s = n.localName;
                        s && 1 === e[s] && ("length" === s && (s = "_length"), null == t[s] && (t[s] = t[r]))
                    })), Object.freeze(t)
                }
                encode(t, e) {
                    const n = o._.dereference(e, "tuple");
                    return h(t, this.coders, n)
                }
                decode(t) {
                    return f(t, this.coders)
                }
            }
            var I = n(26052);
            const N = new Map;
            N.set(0, "GENERIC_PANIC"), N.set(1, "ASSERT_FALSE"), N.set(17, "OVERFLOW"), N.set(18, "DIVIDE_BY_ZERO"), N.set(33, "ENUM_RANGE_ERROR"), N.set(34, "BAD_STORAGE_DATA"), N.set(49, "STACK_UNDERFLOW"), N.set(50, "ARRAY_RANGE_ERROR"), N.set(65, "OUT_OF_MEMORY"), N.set(81, "UNINITIALIZED_FUNCTION_CALL");
            const B = new RegExp(/^bytes([0-9]*)$/),
                T = new RegExp(/^(u?int)([0-9]*)$/);
            let S = null;
            class R {#
                t(t) {
                    if (t.isArray()) return new d(this.#t(t.arrayChildren), t.arrayLength, t.name);
                    if (t.isTuple()) return new O(t.components.map((t => this.#t(t))), t.name);
                    switch (t.baseType) {
                        case "address":
                            return new c(t.name);
                        case "bool":
                            return new p(t.name);
                        case "string":
                            return new k(t.name);
                        case "bytes":
                            return new m(t.name);
                        case "":
                            return new b(t.name)
                    }
                    let e = t.type.match(T);
                    if (e) {
                        let n = parseInt(e[2] || "256");
                        return (0, r.en)(0 !== n && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new x(n / 8, "int" === e[1], t.name)
                    }
                    if (e = t.type.match(B), e) {
                        let n = parseInt(e[1]);
                        return (0, r.en)(0 !== n && n <= 32, "invalid bytes length", "param", t), new w(n, t.name)
                    }(0, r.en)(!1, "invalid type", "type", t.type)
                }
                getDefaultValue(t) {
                    const e = t.map((t => this.#t(I._R.from(t))));
                    return new O(e, "_").defaultValue()
                }
                encode(t, e) {
                    (0, r.fG)(e.length, t.length, "types/values length mismatch");
                    const n = t.map((t => this.#t(I._R.from(t)))),
                        i = new O(n, "_"),
                        a = new s.QV;
                    return i.encode(a, e), a.data
                }
                decode(t, e, n) {
                    const r = t.map((t => this.#t(I._R.from(t))));
                    return new O(r, "_").decode(new s.Ej(e, n))
                }
                static defaultAbiCoder() {
                    return null == S && (S = new R), S
                }
                static getBuiltinCallException(t, e, n) {
                    return function(t, e, n, s) {
                        let a = "missing revert data",
                            o = null,
                            c = null;
                        if (n) {
                            a = "execution reverted";
                            const t = (0, g.Pw)(n);
                            if (n = (0, g.Dv)(n), 0 === t.length) a += " (no data present; likely require(false) occurred", o = "require(false)";
                            else if (t.length % 32 !== 4) a += " (could not decode reason; invalid data length)";
                            else if ("0x08c379a0" === (0, g.Dv)(t.slice(0, 4))) try {
                                o = s.decode(["string"], t.slice(4))[0], c = {
                                    signature: "Error(string)",
                                    name: "Error",
                                    args: [o]
                                }, a += `: ${JSON.stringify(o)}`
                            } catch (l) {
                                a += " (could not decode reason; invalid string data)"
                            } else if ("0x4e487b71" === (0, g.Dv)(t.slice(0, 4))) try {
                                const e = Number(s.decode(["uint256"], t.slice(4))[0]);
                                c = {
                                    signature: "Panic(uint256)",
                                    name: "Panic",
                                    args: [e]
                                }, o = `Panic due to ${N.get(e)||"UNKNOWN"}(${e})`, a += `: ${o}`
                            } catch (l) {
                                a += " (could not decode panic code)"
                            } else a += " (unknown custom error)"
                        }
                        const u = {
                            to: e.to ? (0, i.K)(e.to) : null,
                            data: e.data || "0x"
                        };
                        return e.from && (u.from = (0, i.K)(e.from)), (0, r.wf)(a, "CALL_EXCEPTION", {
                            action: t,
                            data: n,
                            reason: o,
                            transaction: u,
                            invocation: null,
                            revert: c
                        })
                    }(t, e, n, R.defaultAbiCoder())
                }
            }
        },
        78135: function(t, e, n) {
            "use strict";
            n.d(e, {
                Bx: function() {
                    return o
                },
                Ej: function() {
                    return y
                },
                QV: function() {
                    return g
                },
                XI: function() {
                    return p
                },
                x4: function() {
                    return f
                }
            });
            var r = n(12229),
                s = n(32423),
                i = n(455),
                a = n(5857);
            const o = 32,
                c = new Uint8Array(o),
                u = ["then"],
                l = {};

            function h(t, e) {
                const n = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
                throw n.error = e, n
            }
            class f extends Array {#
                e;
                constructor(...t) {
                    const e = t[0];
                    let n = t[1],
                        s = (t[2] || []).slice(),
                        i = !0;
                    e !== l && (n = t, s = [], i = !1), super(n.length), n.forEach(((t, e) => {
                        this[e] = t
                    }));
                    const a = s.reduce(((t, e) => ("string" === typeof e && t.set(e, (t.get(e) || 0) + 1), t)), new Map);
                    if (this.#e = Object.freeze(n.map(((t, e) => {
                            const n = s[e];
                            return null != n && 1 === a.get(n) ? n : null
                        }))), i) return Object.freeze(this), new Proxy(this, {
                        get: (t, e, n) => {
                            if ("string" === typeof e) {
                                if (e.match(/^[0-9]+$/)) {
                                    const n = (0, r.Dx)(e, "%index");
                                    if (n < 0 || n >= this.length) throw new RangeError("out of result range");
                                    const s = t[n];
                                    return s instanceof Error && h(`index ${n}`, s), s
                                }
                                if (u.indexOf(e) >= 0) return Reflect.get(t, e, n);
                                const s = t[e];
                                if (s instanceof Function) return function(...e) {
                                    return s.apply(this === n ? t : this, e)
                                };
                                if (!(e in t)) return t.getValue.apply(this === n ? t : this, [e])
                            }
                            return Reflect.get(t, e, n)
                        }
                    })
                }
                toArray() {
                    const t = [];
                    return this.forEach(((e, n) => {
                        e instanceof Error && h(`index ${n}`, e), t.push(e)
                    })), t
                }
                toObject() {
                    return this.#e.reduce(((t, e, n) => ((0, s.hu)(null != e, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
                        operation: "toObject()"
                    }), e in t || (t[e] = this.getValue(e)), t)), {})
                }
                slice(t, e) {
                    null == t && (t = 0), t < 0 && (t += this.length) < 0 && (t = 0), null == e && (e = this.length), e < 0 && (e += this.length) < 0 && (e = 0), e > this.length && (e = this.length);
                    const n = [],
                        r = [];
                    for (let s = t; s < e; s++) n.push(this[s]), r.push(this.#e[s]);
                    return new f(l, n, r)
                }
                filter(t, e) {
                    const n = [],
                        r = [];
                    for (let s = 0; s < this.length; s++) {
                        const i = this[s];
                        i instanceof Error && h(`index ${s}`, i), t.call(e, i, s, this) && (n.push(i), r.push(this.#e[s]))
                    }
                    return new f(l, n, r)
                }
                map(t, e) {
                    const n = [];
                    for (let r = 0; r < this.length; r++) {
                        const s = this[r];
                        s instanceof Error && h(`index ${r}`, s), n.push(t.call(e, s, r, this))
                    }
                    return n
                }
                getValue(t) {
                    const e = this.#e.indexOf(t);
                    if (-1 === e) return;
                    const n = this[e];
                    return n instanceof Error && h(`property ${JSON.stringify(t)}`, n.error), n
                }
                static fromItems(t, e) {
                    return new f(l, t, e)
                }
            }

            function d(t) {
                let e = (0, r.ot)(t);
                return (0, s.hu)(e.length <= o, "value out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: e,
                    length: o,
                    offset: e.length
                }), e.length !== o && (e = (0, i.h_)((0, i.zo)([c.slice(e.length % o), e]))), e
            }
            class p {
                name;
                type;
                localName;
                dynamic;
                constructor(t, e, n, r) {
                    (0, a.h)(this, {
                        name: t,
                        type: e,
                        localName: n,
                        dynamic: r
                    }, {
                        name: "string",
                        type: "string",
                        localName: "string",
                        dynamic: "boolean"
                    })
                }
                _throwError(t, e) {
                    (0, s.en)(!1, t, this.localName, e)
                }
            }
            class g {#
                n;#
                r;
                constructor() {
                    this.#n = [], this.#r = 0
                }
                get data() {
                    return (0, i.zo)(this.#n)
                }
                get length() {
                    return this.#r
                }#
                s(t) {
                    return this.#n.push(t), this.#r += t.length, t.length
                }
                appendWriter(t) {
                    return this.#s((0, i.h_)(t.data))
                }
                writeBytes(t) {
                    let e = (0, i.h_)(t);
                    const n = e.length % o;
                    return n && (e = (0, i.h_)((0, i.zo)([e, c.slice(n)]))), this.#s(e)
                }
                writeValue(t) {
                    return this.#s(d(t))
                }
                writeUpdatableValue() {
                    const t = this.#n.length;
                    return this.#n.push(c), this.#r += o, e => {
                        this.#n[t] = d(e)
                    }
                }
            }
            class y {
                allowLoose;#
                n;#
                i;
                constructor(t, e) {
                    (0, a.h)(this, {
                        allowLoose: !!e
                    }), this.#n = (0, i.h_)(t), this.#i = 0
                }
                get data() {
                    return (0, i.Dv)(this.#n)
                }
                get dataLength() {
                    return this.#n.length
                }
                get consumed() {
                    return this.#i
                }
                get bytes() {
                    return new Uint8Array(this.#n)
                }#
                a(t, e, n) {
                    let r = Math.ceil(e / o) * o;
                    return this.#i + r > this.#n.length && (this.allowLoose && n && this.#i + e <= this.#n.length ? r = e : (0, s.hu)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                        buffer: (0, i.h_)(this.#n),
                        length: this.#n.length,
                        offset: this.#i + r
                    })), this.#n.slice(this.#i, this.#i + r)
                }
                subReader(t) {
                    return new y(this.#n.slice(this.#i + t), this.allowLoose)
                }
                readBytes(t, e) {
                    let n = this.#a(0, t, !!e);
                    return this.#i += n.length, n.slice(0, t)
                }
                readValue() {
                    return (0, r.Gh)(this.readBytes(o))
                }
                readIndex() {
                    return (0, r.He)(this.readBytes(o))
                }
            }
        },
        26052: function(t, e, n) {
            "use strict";
            n.d(e, {
                HY: function() {
                    return V
                },
                IC: function() {
                    return J
                },
                QV: function() {
                    return Z
                },
                Xg: function() {
                    return _
                },
                YW: function() {
                    return Y
                },
                _R: function() {
                    return Q
                }
            });
            var r = n(12229),
                s = n(32423),
                i = n(5857),
                a = n(32186);

            function o(t) {
                const e = new Set;
                return t.forEach((t => e.add(t))), Object.freeze(e)
            }
            const c = o("external public payable".split(" ")),
                u = "constant external internal payable private public pure view",
                l = o(u.split(" ")),
                h = "constructor error event fallback function receive struct",
                f = o(h.split(" ")),
                d = "calldata memory storage payable indexed",
                p = o(d.split(" ")),
                g = o([h, d, "tuple returns", u].join(" ").split(" ")),
                y = {
                    "(": "OPEN_PAREN",
                    ")": "CLOSE_PAREN",
                    "[": "OPEN_BRACKET",
                    "]": "CLOSE_BRACKET",
                    ",": "COMMA",
                    "@": "AT"
                },
                m = new RegExp("^(\\s*)"),
                w = new RegExp("^([0-9]+)"),
                A = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
                b = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
                v = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
            class E {#
                i;#
                o;
                get offset() {
                    return this.#i
                }
                get length() {
                    return this.#o.length - this.#i
                }
                constructor(t) {
                    this.#i = 0, this.#o = t.slice()
                }
                clone() {
                    return new E(this.#o)
                }
                reset() {
                    this.#i = 0
                }#
                c(t = 0, e = 0) {
                    return new E(this.#o.slice(t, e).map((e => Object.freeze(Object.assign({}, e, {
                        match: e.match - t,
                        linkBack: e.linkBack - t,
                        linkNext: e.linkNext - t
                    })))))
                }
                popKeyword(t) {
                    const e = this.peek();
                    if ("KEYWORD" !== e.type || !t.has(e.text)) throw new Error(`expected keyword ${e.text}`);
                    return this.pop().text
                }
                popType(t) {
                    if (this.peek().type !== t) throw new Error(`expected ${t}; got ${JSON.stringify(this.peek())}`);
                    return this.pop().text
                }
                popParen() {
                    const t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
                    const e = this.#c(this.#i + 1, t.match + 1);
                    return this.#i = t.match + 1, e
                }
                popParams() {
                    const t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
                    const e = [];
                    for (; this.#i < t.match - 1;) {
                        const t = this.peek().linkNext;
                        e.push(this.#c(this.#i + 1, t)), this.#i = t
                    }
                    return this.#i = t.match + 1, e
                }
                peek() {
                    if (this.#i >= this.#o.length) throw new Error("out-of-bounds");
                    return this.#o[this.#i]
                }
                peekKeyword(t) {
                    const e = this.peekType("KEYWORD");
                    return null != e && t.has(e) ? e : null
                }
                peekType(t) {
                    if (0 === this.length) return null;
                    const e = this.peek();
                    return e.type === t ? e.text : null
                }
                pop() {
                    const t = this.peek();
                    return this.#i++, t
                }
                toString() {
                    const t = [];
                    for (let e = this.#i; e < this.#o.length; e++) {
                        const n = this.#o[e];
                        t.push(`${n.type}:${n.text}`)
                    }
                    return `<TokenString ${t.join(" ")}>`
                }
            }

            function P(t) {
                const e = [],
                    n = e => {
                        const n = a < t.length ? JSON.stringify(t[a]) : "$EOI";
                        throw new Error(`invalid token ${n} at ${a}: ${e}`)
                    };
                let s = [],
                    i = [],
                    a = 0;
                for (; a < t.length;) {
                    let o = t.substring(a),
                        c = o.match(m);
                    c && (a += c[1].length, o = t.substring(a));
                    const u = {
                        depth: s.length,
                        linkBack: -1,
                        linkNext: -1,
                        match: -1,
                        type: "",
                        text: "",
                        offset: a,
                        value: -1
                    };
                    e.push(u);
                    let l = y[o[0]] || "";
                    if (l) {
                        if (u.type = l, u.text = o[0], a++, "OPEN_PAREN" === l) s.push(e.length - 1), i.push(e.length - 1);
                        else if ("CLOSE_PAREN" == l) 0 === s.length && n("no matching open bracket"), u.match = s.pop(), e[u.match].match = e.length - 1, u.depth--, u.linkBack = i.pop(), e[u.linkBack].linkNext = e.length - 1;
                        else if ("COMMA" === l) u.linkBack = i.pop(), e[u.linkBack].linkNext = e.length - 1, i.push(e.length - 1);
                        else if ("OPEN_BRACKET" === l) u.type = "BRACKET";
                        else if ("CLOSE_BRACKET" === l) {
                            let t = e.pop().text;
                            if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                                const n = e.pop().text;
                                t = n + t, e[e.length - 1].value = (0, r.Dx)(n)
                            }
                            if (0 === e.length || "BRACKET" !== e[e.length - 1].type) throw new Error("missing opening bracket");
                            e[e.length - 1].text += t
                        }
                    } else if (c = o.match(A), c) {
                        if (u.text = c[1], a += u.text.length, g.has(u.text)) {
                            u.type = "KEYWORD";
                            continue
                        }
                        if (u.text.match(v)) {
                            u.type = "TYPE";
                            continue
                        }
                        u.type = "ID"
                    } else {
                        if (c = o.match(w), !c) throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${a}`);
                        u.text = c[1], u.type = "NUMBER", a += u.text.length
                    }
                }
                return new E(e.map((t => Object.freeze(t))))
            }

            function x(t, e) {
                let n = [];
                for (const r in e.keys()) t.has(r) && n.push(r);
                if (n.length > 1) throw new Error(`conflicting types: ${n.join(", ")}`)
            }

            function C(t, e) {
                if (e.peekKeyword(f)) {
                    const n = e.pop().text;
                    if (n !== t) throw new Error(`expected ${t}, got ${n}`)
                }
                return e.popType("ID")
            }

            function k(t, e) {
                const n = new Set;
                for (;;) {
                    const r = t.peekType("KEYWORD");
                    if (null == r || e && !e.has(r)) break;
                    if (t.pop(), n.has(r)) throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
                    n.add(r)
                }
                return Object.freeze(n)
            }

            function O(t) {
                let e = k(t, l);
                return x(e, o("constant payable nonpayable".split(" "))), x(e, o("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
            }

            function I(t, e) {
                return t.popParams().map((t => Q.from(t, e)))
            }

            function N(t) {
                if (t.peekType("AT")) {
                    if (t.pop(), t.peekType("NUMBER")) return (0, r.yT)(t.pop().text);
                    throw new Error("invalid gas")
                }
                return null
            }

            function B(t) {
                if (t.length) throw new Error(`unexpected tokens: ${t.toString()}`)
            }
            const T = new RegExp(/^(.*)\[([0-9]*)\]$/);

            function S(t) {
                const e = t.match(v);
                if ((0, s.en)(e, "invalid type", "type", t), "uint" === t) return "uint256";
                if ("int" === t) return "int256";
                if (e[2]) {
                    const n = parseInt(e[2]);
                    (0, s.en)(0 !== n && n <= 32, "invalid bytes length", "type", t)
                } else if (e[3]) {
                    const n = parseInt(e[3]);
                    (0, s.en)(0 !== n && n <= 256 && n % 8 === 0, "invalid numeric width", "type", t)
                }
                return t
            }
            const R = {},
                D = Symbol.for("_ethers_internal"),
                L = "_ParamTypeInternal",
                U = "_ErrorInternal",
                F = "_EventInternal",
                M = "_ConstructorInternal",
                G = "_FallbackInternal",
                j = "_FunctionInternal",
                H = "_StructInternal";
            class Q {
                name;
                type;
                baseType;
                indexed;
                components;
                arrayLength;
                arrayChildren;
                constructor(t, e, n, r, a, o, c, u) {
                    if ((0, s.NK)(t, R, "ParamType"), Object.defineProperty(this, D, {
                            value: L
                        }), o && (o = Object.freeze(o.slice())), "array" === r) {
                        if (null == c || null == u) throw new Error("")
                    } else if (null != c || null != u) throw new Error("");
                    if ("tuple" === r) {
                        if (null == o) throw new Error("")
                    } else if (null != o) throw new Error("");
                    (0, i.h)(this, {
                        name: e,
                        type: n,
                        baseType: r,
                        indexed: a,
                        components: o,
                        arrayLength: c,
                        arrayChildren: u
                    })
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) {
                        const e = this.name || "";
                        if (this.isArray()) {
                            const t = JSON.parse(this.arrayChildren.format("json"));
                            return t.name = e, t.type += `[${this.arrayLength<0?"":String(this.arrayLength)}]`, JSON.stringify(t)
                        }
                        const n = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: e
                        };
                        return "boolean" === typeof this.indexed && (n.indexed = this.indexed), this.isTuple() && (n.components = this.components.map((e => JSON.parse(e.format(t))))), JSON.stringify(n)
                    }
                    let e = "";
                    return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength<0?"":String(this.arrayLength)}]`) : this.isTuple() ? ("sighash" !== t && (e += this.type), e += "(" + this.components.map((e => e.format(t))).join("full" === t ? ", " : ",") + ")") : e += this.type, "sighash" !== t && (!0 === this.indexed && (e += " indexed"), "full" === t && this.name && (e += " " + this.name)), e
                }
                isArray() {
                    return "array" === this.baseType
                }
                isTuple() {
                    return "tuple" === this.baseType
                }
                isIndexable() {
                    return null != this.indexed
                }
                walk(t, e) {
                    if (this.isArray()) {
                        if (!Array.isArray(t)) throw new Error("invalid array value");
                        if (-1 !== this.arrayLength && t.length !== this.arrayLength) throw new Error("array is wrong length");
                        const n = this;
                        return t.map((t => n.arrayChildren.walk(t, e)))
                    }
                    if (this.isTuple()) {
                        if (!Array.isArray(t)) throw new Error("invalid tuple value");
                        if (t.length !== this.components.length) throw new Error("array is wrong length");
                        const n = this;
                        return t.map(((t, r) => n.components[r].walk(t, e)))
                    }
                    return e(this.type, t)
                }#
                u(t, e, n, r) {
                    if (this.isArray()) {
                        if (!Array.isArray(e)) throw new Error("invalid array value");
                        if (-1 !== this.arrayLength && e.length !== this.arrayLength) throw new Error("array is wrong length");
                        const s = this.arrayChildren,
                            i = e.slice();
                        return i.forEach(((e, r) => {
                            s.#u(t, e, n, (t => {
                                i[r] = t
                            }))
                        })), void r(i)
                    }
                    if (this.isTuple()) {
                        const s = this.components;
                        let i;
                        if (Array.isArray(e)) i = e.slice();
                        else {
                            if (null == e || "object" !== typeof e) throw new Error("invalid tuple value");
                            i = s.map((t => {
                                if (!t.name) throw new Error("cannot use object value with unnamed components");
                                if (!(t.name in e)) throw new Error(`missing value for component ${t.name}`);
                                return e[t.name]
                            }))
                        }
                        if (i.length !== this.components.length) throw new Error("array is wrong length");
                        return i.forEach(((e, r) => {
                            s[r].#u(t, e, n, (t => {
                                i[r] = t
                            }))
                        })), void r(i)
                    }
                    const s = n(this.type, e);
                    s.then ? t.push(async function() {
                        r(await s)
                    }()) : r(s)
                }
                async walkAsync(t, e) {
                    const n = [],
                        r = [t];
                    return this.#u(n, t, e, (t => {
                        r[0] = t
                    })), n.length && await Promise.all(n), r[0]
                }
                static from(t, e) {
                    if (Q.isParamType(t)) return t;
                    if ("string" === typeof t) try {
                        return Q.from(P(t), e)
                    } catch (c) {
                        (0, s.en)(!1, "invalid param type", "obj", t)
                    } else if (t instanceof E) {
                        let n = "",
                            r = "",
                            s = null;
                        k(t, o(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (r = "tuple", s = t.popParams().map((t => Q.from(t))), n = `tuple(${s.map((t=>t.format())).join(",")})`) : (n = S(t.popType("TYPE")), r = n);
                        let i = null,
                            a = null;
                        for (; t.length && t.peekType("BRACKET");) {
                            const e = t.pop();
                            i = new Q(R, "", n, r, null, s, a, i), a = e.value, n += e.text, r = "array", s = null
                        }
                        let c = null;
                        if (k(t, p).has("indexed")) {
                            if (!e) throw new Error("");
                            c = !0
                        }
                        const u = t.peekType("ID") ? t.pop().text : "";
                        if (t.length) throw new Error("leftover tokens");
                        return new Q(R, u, n, r, c, s, a, i)
                    }
                    const n = t.name;
                    (0, s.en)(!n || "string" === typeof n && n.match(b), "invalid name", "obj.name", n);
                    let r = t.indexed;
                    null != r && ((0, s.en)(e, "parameter cannot be indexed", "obj.indexed", t.indexed), r = !!r);
                    let i = t.type,
                        a = i.match(T);
                    if (a) {
                        const e = parseInt(a[2] || "-1"),
                            s = Q.from({
                                type: a[1],
                                components: t.components
                            });
                        return new Q(R, n || "", i, "array", r, null, e, s)
                    }
                    if ("tuple" === i || i.startsWith("tuple(") || i.startsWith("(")) {
                        const e = null != t.components ? t.components.map((t => Q.from(t))) : null;
                        return new Q(R, n || "", i, "tuple", r, e, null, null)
                    }
                    return i = S(t.type), new Q(R, n || "", i, i, r, null, null, null)
                }
                static isParamType(t) {
                    return t && t[D] === L
                }
            }
            class V {
                type;
                inputs;
                constructor(t, e, n) {
                    (0, s.NK)(t, R, "Fragment"), n = Object.freeze(n.slice()), (0, i.h)(this, {
                        type: e,
                        inputs: n
                    })
                }
                static from(t) {
                    if ("string" === typeof t) {
                        try {
                            V.from(JSON.parse(t))
                        } catch (e) {}
                        return V.from(P(t))
                    }
                    if (t instanceof E) {
                        switch (t.peekKeyword(f)) {
                            case "constructor":
                                return _.from(t);
                            case "error":
                                return J.from(t);
                            case "event":
                                return Z.from(t);
                            case "fallback":
                            case "receive":
                                return q.from(t);
                            case "function":
                                return Y.from(t);
                            case "struct":
                                return W.from(t)
                        }
                    } else if ("object" === typeof t) {
                        switch (t.type) {
                            case "constructor":
                                return _.from(t);
                            case "error":
                                return J.from(t);
                            case "event":
                                return Z.from(t);
                            case "fallback":
                            case "receive":
                                return q.from(t);
                            case "function":
                                return Y.from(t);
                            case "struct":
                                return W.from(t)
                        }(0, s.hu)(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
                            operation: "Fragment.from"
                        })
                    }(0, s.en)(!1, "unsupported frgament object", "obj", t)
                }
                static isConstructor(t) {
                    return _.isFragment(t)
                }
                static isError(t) {
                    return J.isFragment(t)
                }
                static isEvent(t) {
                    return Z.isFragment(t)
                }
                static isFunction(t) {
                    return Y.isFragment(t)
                }
                static isStruct(t) {
                    return W.isFragment(t)
                }
            }
            class K extends V {
                name;
                constructor(t, e, n, r) {
                    super(t, e, r), (0, s.en)("string" === typeof n && n.match(b), "invalid identifier", "name", n), r = Object.freeze(r.slice()), (0, i.h)(this, {
                        name: n
                    })
                }
            }

            function z(t, e) {
                return "(" + e.map((e => e.format(t))).join("full" === t ? ", " : ",") + ")"
            }
            class J extends K {
                constructor(t, e, n) {
                    super(t, "error", e, n), Object.defineProperty(this, D, {
                        value: U
                    })
                }
                get selector() {
                    return (0, a.id)(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map((e => JSON.parse(e.format(t))))
                    });
                    const e = [];
                    return "sighash" !== t && e.push("error"), e.push(this.name + z(t, this.inputs)), e.join(" ")
                }
                static from(t) {
                    if (J.isFragment(t)) return t;
                    if ("string" === typeof t) return J.from(P(t));
                    if (t instanceof E) {
                        const e = C("error", t),
                            n = I(t);
                        return B(t), new J(R, e, n)
                    }
                    return new J(R, t.name, t.inputs ? t.inputs.map(Q.from) : [])
                }
                static isFragment(t) {
                    return t && t[D] === U
                }
            }
            class Z extends K {
                anonymous;
                constructor(t, e, n, r) {
                    super(t, "event", e, n), Object.defineProperty(this, D, {
                        value: F
                    }), (0, i.h)(this, {
                        anonymous: r
                    })
                }
                get topicHash() {
                    return (0, a.id)(this.format("sighash"))
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map((e => JSON.parse(e.format(t))))
                    });
                    const e = [];
                    return "sighash" !== t && e.push("event"), e.push(this.name + z(t, this.inputs)), "sighash" !== t && this.anonymous && e.push("anonymous"), e.join(" ")
                }
                static getTopicHash(t, e) {
                    e = (e || []).map((t => Q.from(t)));
                    return new Z(R, t, e, !1).topicHash
                }
                static from(t) {
                    if (Z.isFragment(t)) return t;
                    if ("string" === typeof t) try {
                        return Z.from(P(t))
                    } catch (e) {
                        (0, s.en)(!1, "invalid event fragment", "obj", t)
                    } else if (t instanceof E) {
                        const e = C("event", t),
                            n = I(t, !0),
                            r = !!k(t, o(["anonymous"])).has("anonymous");
                        return B(t), new Z(R, e, n, r)
                    }
                    return new Z(R, t.name, t.inputs ? t.inputs.map((t => Q.from(t, !0))) : [], !!t.anonymous)
                }
                static isFragment(t) {
                    return t && t[D] === F
                }
            }
            class _ extends V {
                payable;
                gas;
                constructor(t, e, n, r, s) {
                    super(t, e, n), Object.defineProperty(this, D, {
                        value: M
                    }), (0, i.h)(this, {
                        payable: r,
                        gas: s
                    })
                }
                format(t) {
                    if ((0, s.hu)(null != t && "sighash" !== t, "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
                            operation: "format(sighash)"
                        }), "json" === t) return JSON.stringify({
                        type: "constructor",
                        stateMutability: this.payable ? "payable" : "undefined",
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map((e => JSON.parse(e.format(t))))
                    });
                    const e = [`constructor${z(t,this.inputs)}`];
                    return e.push(this.payable ? "payable" : "nonpayable"), null != this.gas && e.push(`@${this.gas.toString()}`), e.join(" ")
                }
                static from(t) {
                    if (_.isFragment(t)) return t;
                    if ("string" === typeof t) try {
                        return _.from(P(t))
                    } catch (e) {
                        (0, s.en)(!1, "invalid constuctor fragment", "obj", t)
                    } else if (t instanceof E) {
                        k(t, o(["constructor"]));
                        const e = I(t),
                            n = !!k(t, c).has("payable"),
                            r = N(t);
                        return B(t), new _(R, "constructor", e, n, r)
                    }
                    return new _(R, "constructor", t.inputs ? t.inputs.map(Q.from) : [], !!t.payable, null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[D] === M
                }
            }
            class q extends V {
                payable;
                constructor(t, e, n) {
                    super(t, "fallback", e), Object.defineProperty(this, D, {
                        value: G
                    }), (0, i.h)(this, {
                        payable: n
                    })
                }
                format(t) {
                    const e = 0 === this.inputs.length ? "receive" : "fallback";
                    if ("json" === t) {
                        const t = this.payable ? "payable" : "nonpayable";
                        return JSON.stringify({
                            type: e,
                            stateMutability: t
                        })
                    }
                    return `${e}()${this.payable?" payable":""}`
                }
                static from(t) {
                    if (q.isFragment(t)) return t;
                    if ("string" === typeof t) try {
                        return q.from(P(t))
                    } catch (e) {
                        (0, s.en)(!1, "invalid fallback fragment", "obj", t)
                    } else if (t instanceof E) {
                        const e = t.toString(),
                            n = t.peekKeyword(o(["fallback", "receive"]));
                        (0, s.en)(n, "type must be fallback or receive", "obj", e);
                        if ("receive" === t.popKeyword(o(["fallback", "receive"]))) {
                            const e = I(t);
                            return (0, s.en)(0 === e.length, "receive cannot have arguments", "obj.inputs", e), k(t, o(["payable"])), B(t), new q(R, [], !0)
                        }
                        let r = I(t);
                        r.length ? (0, s.en)(1 === r.length && "bytes" === r[0].type, "invalid fallback inputs", "obj.inputs", r.map((t => t.format("minimal"))).join(", ")) : r = [Q.from("bytes")];
                        const i = O(t);
                        if ((0, s.en)("nonpayable" === i || "payable" === i, "fallback cannot be constants", "obj.stateMutability", i), k(t, o(["returns"])).has("returns")) {
                            const e = I(t);
                            (0, s.en)(1 === e.length && "bytes" === e[0].type, "invalid fallback outputs", "obj.outputs", e.map((t => t.format("minimal"))).join(", "))
                        }
                        return B(t), new q(R, r, "payable" === i)
                    }
                    if ("receive" === t.type) return new q(R, [], !0);
                    if ("fallback" === t.type) {
                        const e = [Q.from("bytes")],
                            n = "payable" === t.stateMutability;
                        return new q(R, e, n)
                    }(0, s.en)(!1, "invalid fallback description", "obj", t)
                }
                static isFragment(t) {
                    return t && t[D] === G
                }
            }
            class Y extends K {
                constant;
                outputs;
                stateMutability;
                payable;
                gas;
                constructor(t, e, n, r, s, a) {
                    super(t, "function", e, r), Object.defineProperty(this, D, {
                        value: j
                    }), s = Object.freeze(s.slice());
                    const o = "view" === n || "pure" === n,
                        c = "payable" === n;
                    (0, i.h)(this, {
                        constant: o,
                        gas: a,
                        outputs: s,
                        payable: c,
                        stateMutability: n
                    })
                }
                get selector() {
                    return (0, a.id)(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map((e => JSON.parse(e.format(t)))),
                        outputs: this.outputs.map((e => JSON.parse(e.format(t))))
                    });
                    const e = [];
                    return "sighash" !== t && e.push("function"), e.push(this.name + z(t, this.inputs)), "sighash" !== t && ("nonpayable" !== this.stateMutability && e.push(this.stateMutability), this.outputs && this.outputs.length && (e.push("returns"), e.push(z(t, this.outputs))), null != this.gas && e.push(`@${this.gas.toString()}`)), e.join(" ")
                }
                static getSelector(t, e) {
                    e = (e || []).map((t => Q.from(t)));
                    return new Y(R, t, "view", e, [], null).selector
                }
                static from(t) {
                    if (Y.isFragment(t)) return t;
                    if ("string" === typeof t) try {
                        return Y.from(P(t))
                    } catch (n) {
                        (0, s.en)(!1, "invalid function fragment", "obj", t)
                    } else if (t instanceof E) {
                        const e = C("function", t),
                            n = I(t),
                            r = O(t);
                        let s = [];
                        k(t, o(["returns"])).has("returns") && (s = I(t));
                        const i = N(t);
                        return B(t), new Y(R, e, r, n, s, i)
                    }
                    let e = t.stateMutability;
                    return null == e && (e = "payable", "boolean" === typeof t.constant ? (e = "view", t.constant || (e = "payable", "boolean" !== typeof t.payable || t.payable || (e = "nonpayable"))) : "boolean" !== typeof t.payable || t.payable || (e = "nonpayable")), new Y(R, t.name, e, t.inputs ? t.inputs.map(Q.from) : [], t.outputs ? t.outputs.map(Q.from) : [], null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[D] === j
                }
            }
            class W extends K {
                constructor(t, e, n) {
                    super(t, "struct", e, n), Object.defineProperty(this, D, {
                        value: H
                    })
                }
                format() {
                    throw new Error("@TODO")
                }
                static from(t) {
                    if ("string" === typeof t) try {
                        return W.from(P(t))
                    } catch (e) {
                        (0, s.en)(!1, "invalid struct fragment", "obj", t)
                    } else if (t instanceof E) {
                        const e = C("struct", t),
                            n = I(t);
                        return B(t), new W(R, e, n)
                    }
                    return new W(R, t.name, t.inputs ? t.inputs.map(Q.from) : [])
                }
                static isFragment(t) {
                    return t && t[D] === H
                }
            }
        },
        64249: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return u
                }
            });
            var r = n(32423),
                s = n(5857);
            const i = {};

            function a(t, e) {
                let n = !1;
                return e < 0 && (n = !0, e *= -1), new u(i, `${n?"":"u"}int${e}`, t, {
                    signed: n,
                    width: e
                })
            }

            function o(t, e) {
                return new u(i, `bytes${e||""}`, t, {
                    size: e
                })
            }
            const c = Symbol.for("_ethers_typed");
            class u {
                type;
                value;#
                l;
                _typedSymbol;
                constructor(t, e, n, a) {
                    null == a && (a = null), (0, r.NK)(i, t, "Typed"), (0, s.h)(this, {
                        _typedSymbol: c,
                        type: e,
                        value: n
                    }), this.#l = a, this.format()
                }
                format() {
                    if ("array" === this.type) throw new Error("");
                    if ("dynamicArray" === this.type) throw new Error("");
                    return "tuple" === this.type ? `tuple(${this.value.map((t=>t.format())).join(",")})` : this.type
                }
                defaultValue() {
                    return 0
                }
                minValue() {
                    return 0
                }
                maxValue() {
                    return 0
                }
                isBigInt() {
                    return !!this.type.match(/^u?int[0-9]+$/)
                }
                isData() {
                    return this.type.startsWith("bytes")
                }
                isString() {
                    return "string" === this.type
                }
                get tupleName() {
                    if ("tuple" !== this.type) throw TypeError("not a tuple");
                    return this.#l
                }
                get arrayLength() {
                    if ("array" !== this.type) throw TypeError("not an array");
                    return !0 === this.#l ? -1 : !1 === this.#l ? this.value.length : null
                }
                static from(t, e) {
                    return new u(i, t, e)
                }
                static uint8(t) {
                    return a(t, 8)
                }
                static uint16(t) {
                    return a(t, 16)
                }
                static uint24(t) {
                    return a(t, 24)
                }
                static uint32(t) {
                    return a(t, 32)
                }
                static uint40(t) {
                    return a(t, 40)
                }
                static uint48(t) {
                    return a(t, 48)
                }
                static uint56(t) {
                    return a(t, 56)
                }
                static uint64(t) {
                    return a(t, 64)
                }
                static uint72(t) {
                    return a(t, 72)
                }
                static uint80(t) {
                    return a(t, 80)
                }
                static uint88(t) {
                    return a(t, 88)
                }
                static uint96(t) {
                    return a(t, 96)
                }
                static uint104(t) {
                    return a(t, 104)
                }
                static uint112(t) {
                    return a(t, 112)
                }
                static uint120(t) {
                    return a(t, 120)
                }
                static uint128(t) {
                    return a(t, 128)
                }
                static uint136(t) {
                    return a(t, 136)
                }
                static uint144(t) {
                    return a(t, 144)
                }
                static uint152(t) {
                    return a(t, 152)
                }
                static uint160(t) {
                    return a(t, 160)
                }
                static uint168(t) {
                    return a(t, 168)
                }
                static uint176(t) {
                    return a(t, 176)
                }
                static uint184(t) {
                    return a(t, 184)
                }
                static uint192(t) {
                    return a(t, 192)
                }
                static uint200(t) {
                    return a(t, 200)
                }
                static uint208(t) {
                    return a(t, 208)
                }
                static uint216(t) {
                    return a(t, 216)
                }
                static uint224(t) {
                    return a(t, 224)
                }
                static uint232(t) {
                    return a(t, 232)
                }
                static uint240(t) {
                    return a(t, 240)
                }
                static uint248(t) {
                    return a(t, 248)
                }
                static uint256(t) {
                    return a(t, 256)
                }
                static uint(t) {
                    return a(t, 256)
                }
                static int8(t) {
                    return a(t, -8)
                }
                static int16(t) {
                    return a(t, -16)
                }
                static int24(t) {
                    return a(t, -24)
                }
                static int32(t) {
                    return a(t, -32)
                }
                static int40(t) {
                    return a(t, -40)
                }
                static int48(t) {
                    return a(t, -48)
                }
                static int56(t) {
                    return a(t, -56)
                }
                static int64(t) {
                    return a(t, -64)
                }
                static int72(t) {
                    return a(t, -72)
                }
                static int80(t) {
                    return a(t, -80)
                }
                static int88(t) {
                    return a(t, -88)
                }
                static int96(t) {
                    return a(t, -96)
                }
                static int104(t) {
                    return a(t, -104)
                }
                static int112(t) {
                    return a(t, -112)
                }
                static int120(t) {
                    return a(t, -120)
                }
                static int128(t) {
                    return a(t, -128)
                }
                static int136(t) {
                    return a(t, -136)
                }
                static int144(t) {
                    return a(t, -144)
                }
                static int152(t) {
                    return a(t, -152)
                }
                static int160(t) {
                    return a(t, -160)
                }
                static int168(t) {
                    return a(t, -168)
                }
                static int176(t) {
                    return a(t, -176)
                }
                static int184(t) {
                    return a(t, -184)
                }
                static int192(t) {
                    return a(t, -192)
                }
                static int200(t) {
                    return a(t, -200)
                }
                static int208(t) {
                    return a(t, -208)
                }
                static int216(t) {
                    return a(t, -216)
                }
                static int224(t) {
                    return a(t, -224)
                }
                static int232(t) {
                    return a(t, -232)
                }
                static int240(t) {
                    return a(t, -240)
                }
                static int248(t) {
                    return a(t, -248)
                }
                static int256(t) {
                    return a(t, -256)
                }
                static int(t) {
                    return a(t, -256)
                }
                static bytes1(t) {
                    return o(t, 1)
                }
                static bytes2(t) {
                    return o(t, 2)
                }
                static bytes3(t) {
                    return o(t, 3)
                }
                static bytes4(t) {
                    return o(t, 4)
                }
                static bytes5(t) {
                    return o(t, 5)
                }
                static bytes6(t) {
                    return o(t, 6)
                }
                static bytes7(t) {
                    return o(t, 7)
                }
                static bytes8(t) {
                    return o(t, 8)
                }
                static bytes9(t) {
                    return o(t, 9)
                }
                static bytes10(t) {
                    return o(t, 10)
                }
                static bytes11(t) {
                    return o(t, 11)
                }
                static bytes12(t) {
                    return o(t, 12)
                }
                static bytes13(t) {
                    return o(t, 13)
                }
                static bytes14(t) {
                    return o(t, 14)
                }
                static bytes15(t) {
                    return o(t, 15)
                }
                static bytes16(t) {
                    return o(t, 16)
                }
                static bytes17(t) {
                    return o(t, 17)
                }
                static bytes18(t) {
                    return o(t, 18)
                }
                static bytes19(t) {
                    return o(t, 19)
                }
                static bytes20(t) {
                    return o(t, 20)
                }
                static bytes21(t) {
                    return o(t, 21)
                }
                static bytes22(t) {
                    return o(t, 22)
                }
                static bytes23(t) {
                    return o(t, 23)
                }
                static bytes24(t) {
                    return o(t, 24)
                }
                static bytes25(t) {
                    return o(t, 25)
                }
                static bytes26(t) {
                    return o(t, 26)
                }
                static bytes27(t) {
                    return o(t, 27)
                }
                static bytes28(t) {
                    return o(t, 28)
                }
                static bytes29(t) {
                    return o(t, 29)
                }
                static bytes30(t) {
                    return o(t, 30)
                }
                static bytes31(t) {
                    return o(t, 31)
                }
                static bytes32(t) {
                    return o(t, 32)
                }
                static address(t) {
                    return new u(i, "address", t)
                }
                static bool(t) {
                    return new u(i, "bool", !!t)
                }
                static bytes(t) {
                    return new u(i, "bytes", t)
                }
                static string(t) {
                    return new u(i, "string", t)
                }
                static array(t, e) {
                    throw new Error("not implemented yet")
                }
                static tuple(t, e) {
                    throw new Error("not implemented yet")
                }
                static overrides(t) {
                    return new u(i, "overrides", Object.assign({}, t))
                }
                static isTyped(t) {
                    return t && "object" === typeof t && "_typedSymbol" in t && t._typedSymbol === c
                }
                static dereference(t, e) {
                    if (u.isTyped(t)) {
                        if (t.type !== e) throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
                        return t.value
                    }
                    return t
                }
            }
        },
        5556: function(t, e, n) {
            "use strict";
            n.d(e, {
                K: function() {
                    return f
                }
            });
            var r = n(92314),
                s = n(455),
                i = n(32423);
            const a = BigInt(0),
                o = BigInt(36);

            function c(t) {
                const e = (t = t.toLowerCase()).substring(2).split(""),
                    n = new Uint8Array(40);
                for (let r = 0; r < 40; r++) n[r] = e[r].charCodeAt(0);
                const i = (0, s.Pw)((0, r.w)(n));
                for (let r = 0; r < 40; r += 2) i[r >> 1] >> 4 >= 8 && (e[r] = e[r].toUpperCase()), (15 & i[r >> 1]) >= 8 && (e[r + 1] = e[r + 1].toUpperCase());
                return "0x" + e.join("")
            }
            const u = {};
            for (let d = 0; d < 10; d++) u[String(d)] = String(d);
            for (let d = 0; d < 26; d++) u[String.fromCharCode(65 + d)] = String(10 + d);

            function l(t) {
                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => u[t])).join("");
                for (; e.length >= 15;) {
                    let t = e.substring(0, 15);
                    e = parseInt(t, 10) % 97 + e.substring(t.length)
                }
                let n = String(98 - parseInt(e, 10) % 97);
                for (; n.length < 2;) n = "0" + n;
                return n
            }
            const h = function() {
                const t = {};
                for (let e = 0; e < 36; e++) {
                    t["0123456789abcdefghijklmnopqrstuvwxyz" [e]] = BigInt(e)
                }
                return t
            }();

            function f(t) {
                if ((0, i.en)("string" === typeof t, "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
                    t.startsWith("0x") || (t = "0x" + t);
                    const e = c(t);
                    return (0, i.en)(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e
                }
                if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    (0, i.en)(t.substring(2, 4) === l(t), "bad icap checksum", "address", t);
                    let e = function(t) {
                        t = t.toLowerCase();
                        let e = a;
                        for (let n = 0; n < t.length; n++) e = e * o + h[t[n]];
                        return e
                    }(t.substring(4)).toString(16);
                    for (; e.length < 40;) e = "0" + e;
                    return c("0x" + e)
                }(0, i.en)(!1, "invalid address", "address", t)
            }
        },
        79554: function(t, e, n) {
            "use strict";
            n.d(e, {
                RC: function() {
                    return i
                },
                ru: function() {
                    return o
                }
            });
            var r = n(32423),
                s = n(5556);

            function i(t) {
                return t && "function" === typeof t.getAddress
            }
            async function a(t, e) {
                const n = await e;
                return null != n && "0x0000000000000000000000000000000000000000" !== n || ((0, r.hu)("string" !== typeof t, "unconfigured name", "UNCONFIGURED_NAME", {
                    value: t
                }), (0, r.en)(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), (0, s.K)(n)
            }

            function o(t, e) {
                return "string" === typeof t ? t.match(/^0x[0-9a-f]{40}$/i) ? (0, s.K)(t) : ((0, r.hu)(null != e, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
                    operation: "resolveName"
                }), a(t, e.resolveName(t))) : i(t) ? a(t, t.getAddress()) : t && "function" === typeof t.then ? a(t, t) : void(0, r.en)(!1, "unsupported addressable value", "target", t)
            }
        },
        7583: function(t, e, n) {
            "use strict";
            n.d(e, {
                CH: function() {
                    return Y
                }
            });
            var r = n(64249),
                s = n(92314),
                i = n(32186),
                a = n(5857),
                o = n(32423),
                c = n(455),
                u = n(12229),
                l = n(39613),
                h = n(78135),
                f = n(26052);
            class d {
                fragment;
                name;
                signature;
                topic;
                args;
                constructor(t, e, n) {
                    const r = t.name,
                        s = t.format();
                    (0, a.h)(this, {
                        fragment: t,
                        name: r,
                        signature: s,
                        topic: e,
                        args: n
                    })
                }
            }
            class p {
                fragment;
                name;
                args;
                signature;
                selector;
                value;
                constructor(t, e, n, r) {
                    const s = t.name,
                        i = t.format();
                    (0, a.h)(this, {
                        fragment: t,
                        name: s,
                        args: n,
                        signature: i,
                        selector: e,
                        value: r
                    })
                }
            }
            class g {
                fragment;
                name;
                args;
                signature;
                selector;
                constructor(t, e, n) {
                    const r = t.name,
                        s = t.format();
                    (0, a.h)(this, {
                        fragment: t,
                        name: r,
                        args: n,
                        signature: s,
                        selector: e
                    })
                }
            }
            class y {
                hash;
                _isIndexed;
                static isIndexed(t) {
                    return !(!t || !t._isIndexed)
                }
                constructor(t) {
                    (0, a.h)(this, {
                        hash: t,
                        _isIndexed: !0
                    })
                }
            }
            const m = {
                    0: "generic panic",
                    1: "assert(false)",
                    17: "arithmetic overflow",
                    18: "division or modulo by zero",
                    33: "enum overflow",
                    34: "invalid encoded storage byte array accessed",
                    49: "out-of-bounds array access; popping on an empty array",
                    50: "out-of-bounds access of an array or bytesN",
                    65: "out of memory",
                    81: "uninitialized function"
                },
                w = {
                    "0x08c379a0": {
                        signature: "Error(string)",
                        name: "Error",
                        inputs: ["string"],
                        reason: t => `reverted with reason string ${JSON.stringify(t)}`
                    },
                    "0x4e487b71": {
                        signature: "Panic(uint256)",
                        name: "Panic",
                        inputs: ["uint256"],
                        reason: t => {
                            let e = "unknown panic code";
                            return t >= 0 && t <= 255 && m[t.toString()] && (e = m[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`
                        }
                    }
                };
            class A {
                fragments;
                deploy;
                fallback;
                receive;#
                h;#
                f;#
                d;#
                p;
                constructor(t) {
                    let e = [];
                    e = "string" === typeof t ? JSON.parse(t) : t, this.#d = new Map, this.#h = new Map, this.#f = new Map;
                    const n = [];
                    for (const a of e) try {
                        n.push(f.HY.from(a))
                    } catch (i) {
                        console.log("EE", i)
                    }(0, a.h)(this, {
                        fragments: Object.freeze(n)
                    });
                    let r = null,
                        s = !1;
                    this.#p = this.getAbiCoder(), this.fragments.forEach(((t, e) => {
                        let n;
                        switch (t.type) {
                            case "constructor":
                                return this.deploy ? void console.log("duplicate definition - constructor") : void(0, a.h)(this, {
                                    deploy: t
                                });
                            case "fallback":
                                return void(0 === t.inputs.length ? s = !0 : ((0, o.en)(!r || t.payable !== r.payable, "conflicting fallback fragments", `fragments[${e}]`, t), r = t, s = r.payable));
                            case "function":
                                n = this.#d;
                                break;
                            case "event":
                                n = this.#f;
                                break;
                            case "error":
                                n = this.#h;
                                break;
                            default:
                                return
                        }
                        const i = t.format();
                        n.has(i) || n.set(i, t)
                    })), this.deploy || (0, a.h)(this, {
                        deploy: f.Xg.from("constructor()")
                    }), (0, a.h)(this, {
                        fallback: r,
                        receive: s
                    })
                }
                format(t) {
                    const e = t ? "minimal" : "full";
                    return this.fragments.map((t => t.format(e)))
                }
                formatJson() {
                    const t = this.fragments.map((t => t.format("json")));
                    return JSON.stringify(t.map((t => JSON.parse(t))))
                }
                getAbiCoder() {
                    return l.R.defaultAbiCoder()
                }#
                g(t, e, n) {
                    if ((0, c.A7)(t)) {
                        const e = t.toLowerCase();
                        for (const t of this.#d.values())
                            if (e === t.selector) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        const s = [];
                        for (const [e, n] of this.#d) e.split("(")[0] === t && s.push(n);
                        if (e) {
                            const t = e.length > 0 ? e[e.length - 1] : null;
                            let n = e.length,
                                i = !0;
                            r._.isTyped(t) && "overrides" === t.type && (i = !1, n--);
                            for (let e = s.length - 1; e >= 0; e--) {
                                const t = s[e].inputs.length;
                                t === n || i && t === n - 1 || s.splice(e, 1)
                            }
                            for (let a = s.length - 1; a >= 0; a--) {
                                const t = s[a].inputs;
                                for (let n = 0; n < e.length; n++)
                                    if (r._.isTyped(e[n])) {
                                        if (n >= t.length) {
                                            if ("overrides" === e[n].type) continue;
                                            s.splice(a, 1);
                                            break
                                        }
                                        if (e[n].type !== t[n].baseType) {
                                            s.splice(a, 1);
                                            break
                                        }
                                    }
                            }
                        }
                        if (1 === s.length && e && e.length !== s[0].inputs.length) {
                            const t = e[e.length - 1];
                            (null == t || Array.isArray(t) || "object" !== typeof t) && s.splice(0, 1)
                        }
                        if (0 === s.length) return null;
                        if (s.length > 1 && n) {
                            const e = s.map((t => JSON.stringify(t.format()))).join(", ");
                            (0, o.en)(!1, `ambiguous function description (i.e. matches ${e})`, "key", t)
                        }
                        return s[0]
                    }
                    const s = this.#d.get(f.YW.from(t).format());
                    return s || null
                }
                getFunctionName(t) {
                    const e = this.#g(t, null, !1);
                    return (0, o.en)(e, "no matching function", "key", t), e.name
                }
                hasFunction(t) {
                    return !!this.#g(t, null, !1)
                }
                getFunction(t, e) {
                    return this.#g(t, e || null, !0)
                }
                forEachFunction(t) {
                    const e = Array.from(this.#d.keys());
                    e.sort(((t, e) => t.localeCompare(e)));
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        t(this.#d.get(r), n)
                    }
                }#
                y(t, e, n) {
                    if ((0, c.A7)(t)) {
                        const e = t.toLowerCase();
                        for (const t of this.#f.values())
                            if (e === t.topicHash) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        const s = [];
                        for (const [e, n] of this.#f) e.split("(")[0] === t && s.push(n);
                        if (e) {
                            for (let t = s.length - 1; t >= 0; t--) s[t].inputs.length < e.length && s.splice(t, 1);
                            for (let t = s.length - 1; t >= 0; t--) {
                                const n = s[t].inputs;
                                for (let i = 0; i < e.length; i++)
                                    if (r._.isTyped(e[i]) && e[i].type !== n[i].baseType) {
                                        s.splice(t, 1);
                                        break
                                    }
                            }
                        }
                        if (0 === s.length) return null;
                        if (s.length > 1 && n) {
                            const e = s.map((t => JSON.stringify(t.format()))).join(", ");
                            (0, o.en)(!1, `ambiguous event description (i.e. matches ${e})`, "key", t)
                        }
                        return s[0]
                    }
                    const s = this.#f.get(f.QV.from(t).format());
                    return s || null
                }
                getEventName(t) {
                    const e = this.#y(t, null, !1);
                    return (0, o.en)(e, "no matching event", "key", t), e.name
                }
                hasEvent(t) {
                    return !!this.#y(t, null, !1)
                }
                getEvent(t, e) {
                    return this.#y(t, e || null, !0)
                }
                forEachEvent(t) {
                    const e = Array.from(this.#f.keys());
                    e.sort(((t, e) => t.localeCompare(e)));
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        t(this.#f.get(r), n)
                    }
                }
                getError(t, e) {
                    if ((0, c.A7)(t)) {
                        const e = t.toLowerCase();
                        if (w[e]) return f.IC.from(w[e].signature);
                        for (const t of this.#h.values())
                            if (e === t.selector) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        const e = [];
                        for (const [n, r] of this.#h) n.split("(")[0] === t && e.push(r);
                        if (0 === e.length) return "Error" === t ? f.IC.from("error Error(string)") : "Panic" === t ? f.IC.from("error Panic(uint256)") : null;
                        if (e.length > 1) {
                            const n = e.map((t => JSON.stringify(t.format()))).join(", ");
                            (0, o.en)(!1, `ambiguous error description (i.e. ${n})`, "name", t)
                        }
                        return e[0]
                    }
                    if ("Error(string)" === (t = f.IC.from(t).format())) return f.IC.from("error Error(string)");
                    if ("Panic(uint256)" === t) return f.IC.from("error Panic(uint256)");
                    const n = this.#h.get(t);
                    return n || null
                }
                forEachError(t) {
                    const e = Array.from(this.#h.keys());
                    e.sort(((t, e) => t.localeCompare(e)));
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        t(this.#h.get(r), n)
                    }
                }
                _decodeParams(t, e) {
                    return this.#p.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this.#p.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getError(t);
                        (0, o.en)(e, "unknown error", "fragment", t), t = e
                    }
                    return (0, o.en)((0, c.QB)(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, (0, c.QB)(e, 4))
                }
                encodeErrorResult(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getError(t);
                        (0, o.en)(e, "unknown error", "fragment", t), t = e
                    }
                    return (0, c.zo)([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionData(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getFunction(t);
                        (0, o.en)(e, "unknown function", "fragment", t), t = e
                    }
                    return (0, o.en)((0, c.QB)(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, (0, c.QB)(e, 4))
                }
                encodeFunctionData(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getFunction(t);
                        (0, o.en)(e, "unknown function", "fragment", t), t = e
                    }
                    return (0, c.zo)([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionResult(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getFunction(t);
                        (0, o.en)(e, "unknown function", "fragment", t), t = e
                    }
                    let n = "invalid length for result data";
                    const r = (0, c.h_)(e);
                    if (r.length % 32 === 0) try {
                        return this.#p.decode(t.outputs, r)
                    } catch (s) {
                        n = "could not decode result data"
                    }(0, o.hu)(!1, n, "BAD_DATA", {
                        value: (0, c.Dv)(r),
                        info: {
                            method: t.name,
                            signature: t.format()
                        }
                    })
                }
                makeError(t, e) {
                    const n = (0, c.Pw)(t, "data"),
                        r = l.R.getBuiltinCallException("call", e, n);
                    if (r.message.startsWith("execution reverted (unknown custom error)")) {
                        const t = (0, c.Dv)(n.slice(0, 4)),
                            e = this.getError(t);
                        if (e) try {
                            const t = this.#p.decode(e.inputs, n.slice(4));
                            r.revert = {
                                name: e.name,
                                signature: e.format(),
                                args: t
                            }, r.reason = r.revert.signature, r.message = `execution reverted: ${r.reason}`
                        } catch (i) {
                            r.message = "execution reverted (coult not decode custom error)"
                        }
                    }
                    const s = this.parseTransaction(e);
                    return s && (r.invocation = {
                        method: s.name,
                        signature: s.signature,
                        args: s.args
                    }), r
                }
                encodeFunctionResult(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getFunction(t);
                        (0, o.en)(e, "unknown function", "fragment", t), t = e
                    }
                    return (0, c.Dv)(this.#p.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getEvent(t);
                        (0, o.en)(e, "unknown event", "eventFragment", t), t = e
                    }(0, o.hu)(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", {
                        count: e.length,
                        expectedCount: t.inputs.length
                    });
                    const n = [];
                    t.anonymous || n.push(t.topicHash);
                    const r = (t, e) => "string" === t.type ? (0, i.id)(e) : "bytes" === t.type ? (0, s.w)((0, c.Dv)(e)) : ("bool" === t.type && "boolean" === typeof e ? e = e ? "0x01" : "0x00" : t.type.match(/^u?int/) ? e = (0, u.m9)(e) : t.type.match(/^bytes/) ? e = (0, c.SK)(e, 32) : "address" === t.type && this.#p.encode(["address"], [e]), (0, c.U3)((0, c.Dv)(e), 32));
                    for (e.forEach(((e, s) => {
                            const i = t.inputs[s];
                            i.indexed ? null == e ? n.push(null) : "array" === i.baseType || "tuple" === i.baseType ? (0, o.en)(!1, "filtering with tuples or arrays not supported", "contract." + i.name, e) : Array.isArray(e) ? n.push(e.map((t => r(i, t)))) : n.push(r(i, e)) : (0, o.en)(null == e, "cannot filter non-indexed parameters; must be null", "contract." + i.name, e)
                        })); n.length && null === n[n.length - 1];) n.pop();
                    return n
                }
                encodeEventLog(t, e) {
                    if ("string" === typeof t) {
                        const e = this.getEvent(t);
                        (0, o.en)(e, "unknown event", "eventFragment", t), t = e
                    }
                    const n = [],
                        r = [],
                        a = [];
                    return t.anonymous || n.push(t.topicHash), (0, o.en)(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach(((t, o) => {
                        const c = e[o];
                        if (t.indexed)
                            if ("string" === t.type) n.push((0, i.id)(c));
                            else if ("bytes" === t.type) n.push((0, s.w)(c));
                        else {
                            if ("tuple" === t.baseType || "array" === t.baseType) throw new Error("not implemented");
                            n.push(this.#p.encode([t.type], [c]))
                        } else r.push(t), a.push(c)
                    })), {
                        data: this.#p.encode(r, a),
                        topics: n
                    }
                }
                decodeEventLog(t, e, n) {
                    if ("string" === typeof t) {
                        const e = this.getEvent(t);
                        (0, o.en)(e, "unknown event", "eventFragment", t), t = e
                    }
                    if (null != n && !t.anonymous) {
                        const e = t.topicHash;
                        (0, o.en)((0, c.A7)(n[0], 32) && n[0].toLowerCase() === e, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1)
                    }
                    const r = [],
                        s = [],
                        i = [];
                    t.inputs.forEach(((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (r.push(f._R.from({
                            type: "bytes32",
                            name: t.name
                        })), i.push(!0)) : (r.push(t), i.push(!1)) : (s.push(t), i.push(!1))
                    }));
                    const a = null != n ? this.#p.decode(r, (0, c.zo)(n)) : null,
                        u = this.#p.decode(s, e, !0),
                        l = [],
                        d = [];
                    let p = 0,
                        g = 0;
                    return t.inputs.forEach(((t, e) => {
                        let n = null;
                        if (t.indexed)
                            if (null == a) n = new y(null);
                            else if (i[e]) n = new y(a[g++]);
                        else try {
                            n = a[g++]
                        } catch (r) {
                            n = r
                        } else try {
                            n = u[p++]
                        } catch (r) {
                            n = r
                        }
                        l.push(n), d.push(t.name || null)
                    })), h.x4.fromItems(l, d)
                }
                parseTransaction(t) {
                    const e = (0, c.Pw)(t.data, "tx.data"),
                        n = (0, u.yT)(null != t.value ? t.value : 0, "tx.value"),
                        r = this.getFunction((0, c.Dv)(e.slice(0, 4)));
                    if (!r) return null;
                    const s = this.#p.decode(r.inputs, e.slice(4));
                    return new p(r, r.selector, s, n)
                }
                parseCallResult(t) {
                    throw new Error("@TODO")
                }
                parseLog(t) {
                    const e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new d(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics))
                }
                parseError(t) {
                    const e = (0, c.Dv)(t),
                        n = this.getError((0, c.QB)(e, 0, 4));
                    if (!n) return null;
                    const r = this.#p.decode(n.inputs, (0, c.QB)(e, 4));
                    return new g(n, n.selector, r)
                }
                static from(t) {
                    return t instanceof A ? t : "string" === typeof t ? new A(JSON.parse(t)) : "function" === typeof t.format ? new A(t.format("json")) : new A(t)
                }
            }
            var b = n(79554),
                v = n(54101),
                E = n(56539);
            class P extends v.Zb {
                interface;
                fragment;
                args;
                constructor(t, e, n) {
                    super(t, t.provider);
                    const r = e.decodeEventLog(n, t.data, t.topics);
                    (0, a.h)(this, {
                        args: r,
                        fragment: n,
                        interface: e
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            class x extends v.Zb {
                error;
                constructor(t, e) {
                    super(t, t.provider), (0, a.h)(this, {
                        error: e
                    })
                }
            }
            class C extends v.IX {#
                m;
                constructor(t, e, n) {
                    super(n, e), this.#m = t
                }
                get logs() {
                    return super.logs.map((t => {
                        const e = t.topics.length ? this.#m.getEvent(t.topics[0]) : null;
                        if (e) try {
                            return new P(t, this.#m, e)
                        } catch (n) {
                            return new x(t, n)
                        }
                        return t
                    }))
                }
            }
            class k extends v.Mw {#
                m;
                constructor(t, e, n) {
                    super(n, e), this.#m = t
                }
                async wait(t) {
                    const e = await super.wait(t);
                    return null == e ? null : new C(this.#m, this.provider, e)
                }
            }
            class O extends E.Z {
                log;
                constructor(t, e, n, r) {
                    super(t, e, n), (0, a.h)(this, {
                        log: r
                    })
                }
                async getBlock() {
                    return await this.log.getBlock()
                }
                async getTransaction() {
                    return await this.log.getTransaction()
                }
                async getTransactionReceipt() {
                    return await this.log.getTransactionReceipt()
                }
            }
            class I extends O {
                constructor(t, e, n, r, s) {
                    super(t, e, n, new P(s, t.interface, r));
                    const i = t.interface.decodeEventLog(r, this.log.data, this.log.topics);
                    (0, a.h)(this, {
                        args: i,
                        fragment: r
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            const N = BigInt(0);

            function B(t) {
                return t && "function" === typeof t.call
            }

            function T(t) {
                return t && "function" === typeof t.estimateGas
            }

            function S(t) {
                return t && "function" === typeof t.resolveName
            }

            function R(t) {
                return t && "function" === typeof t.sendTransaction
            }
            class D {#
                w;
                fragment;
                constructor(t, e, n) {
                    if ((0, a.h)(this, {
                            fragment: e
                        }), e.inputs.length < n.length) throw new Error("too many arguments");
                    const r = L(t.runner, "resolveName"),
                        s = S(r) ? r : null;
                    this.#w = async function() {
                        const r = await Promise.all(e.inputs.map(((t, e) => null == n[e] ? null : t.walkAsync(n[e], ((t, e) => "address" === t ? Array.isArray(e) ? Promise.all(e.map((t => (0, b.ru)(t, s)))) : (0, b.ru)(e, s) : e)))));
                        return t.interface.encodeFilterTopics(e, r)
                    }()
                }
                getTopicFilter() {
                    return this.#w
                }
            }

            function L(t, e) {
                return null == t ? null : "function" === typeof t[e] ? t : t.provider && "function" === typeof t.provider[e] ? t.provider : null
            }

            function U(t) {
                return null == t ? null : t.provider || null
            }
            async function F(t, e) {
                const n = r._.dereference(t, "overrides");
                (0, o.en)("object" === typeof n, "invalid overrides parameter", "overrides", t);
                const s = (0, v.kK)(n);
                return (0, o.en)(null == s.to || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", s.to), (0, o.en)(null == s.data || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", s.data), s.from && (s.from = await (0, b.ru)(s.from)), s
            }

            function M(t) {
                const e = async function(e) {
                        const n = await F(e, ["data"]);
                        n.to = await t.getAddress();
                        const r = t.interface,
                            s = (0, u.yT)(n.value || N, "overrides.value") === N,
                            i = "0x" === (n.data || "0x");
                        !r.fallback || r.fallback.payable || !r.receive || i || s || (0, o.en)(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", e), (0, o.en)(r.fallback || i, "cannot send data to receive-only contract", "overrides.data", n.data);
                        const a = r.receive || r.fallback && r.fallback.payable;
                        return (0, o.en)(a || s, "cannot send value to non-payable fallback", "overrides.value", n.value), (0, o.en)(r.fallback || i, "cannot send data to receive-only contract", "overrides.data", n.data), n
                    },
                    n = async function(n) {
                        const r = t.runner;
                        (0, o.hu)(R(r), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                            operation: "sendTransaction"
                        });
                        const s = await r.sendTransaction(await e(n)),
                            i = U(t.runner);
                        return new k(t.interface, i, s)
                    },
                    r = async t => await n(t);
                return (0, a.h)(r, {
                    _contract: t,
                    estimateGas: async function(n) {
                        const r = L(t.runner, "estimateGas");
                        return (0, o.hu)(T(r), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                            operation: "estimateGas"
                        }), await r.estimateGas(await e(n))
                    },
                    populateTransaction: e,
                    send: n,
                    staticCall: async function(n) {
                        const r = L(t.runner, "call");
                        (0, o.hu)(B(r), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                            operation: "call"
                        });
                        const s = await e(n);
                        try {
                            return await r.call(s)
                        } catch (i) {
                            if ((0, o.Hl)(i) && i.data) throw t.interface.makeError(i.data, s);
                            throw i
                        }
                    }
                }), r
            }

            function G(t, e) {
                const n = function(...n) {
                        const r = t.interface.getFunction(e, n);
                        return (0, o.hu)(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                            operation: "fragment",
                            info: {
                                key: e,
                                args: n
                            }
                        }), r
                    },
                    s = async function(...e) {
                        const s = n(...e);
                        let i = {};
                        if (s.inputs.length + 1 === e.length && (i = await F(e.pop())), s.inputs.length !== e.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
                        const o = await async function(t, e, n) {
                            const s = L(t, "resolveName"),
                                i = S(s) ? s : null;
                            return await Promise.all(e.map(((t, e) => t.walkAsync(n[e], ((t, e) => (e = r._.dereference(e, t), "address" === t ? (0, b.ru)(e, i) : e))))))
                        }(t.runner, s.inputs, e);
                        return Object.assign({}, i, await (0, a.m)({
                            to: t.getAddress(),
                            data: t.interface.encodeFunctionData(s, o)
                        }))
                    },
                    i = async function(...t) {
                        const e = await u(...t);
                        return 1 === e.length ? e[0] : e
                    },
                    c = async function(...e) {
                        const n = t.runner;
                        (0, o.hu)(R(n), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                            operation: "sendTransaction"
                        });
                        const r = await n.sendTransaction(await s(...e)),
                            i = U(t.runner);
                        return new k(t.interface, i, r)
                    },
                    u = async function(...e) {
                        const r = L(t.runner, "call");
                        (0, o.hu)(B(r), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                            operation: "call"
                        });
                        const i = await s(...e);
                        let a = "0x";
                        try {
                            a = await r.call(i)
                        } catch (u) {
                            if ((0, o.Hl)(u) && u.data) throw t.interface.makeError(u.data, i);
                            throw u
                        }
                        const c = n(...e);
                        return t.interface.decodeFunctionResult(c, a)
                    },
                    l = async (...t) => n(...t).constant ? await i(...t) : await c(...t);
                return (0, a.h)(l, {
                    name: t.interface.getFunctionName(e),
                    _contract: t,
                    _key: e,
                    getFragment: n,
                    estimateGas: async function(...e) {
                        const n = L(t.runner, "estimateGas");
                        return (0, o.hu)(T(n), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                            operation: "estimateGas"
                        }), await n.estimateGas(await s(...e))
                    },
                    populateTransaction: s,
                    send: c,
                    staticCall: i,
                    staticCallResult: u
                }), Object.defineProperty(l, "fragment", {
                    configurable: !1,
                    enumerable: !0,
                    get: () => {
                        const n = t.interface.getFunction(e);
                        return (0, o.hu)(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                            operation: "fragment",
                            info: {
                                key: e
                            }
                        }), n
                    }
                }), l
            }
            const j = Symbol.for("_ethersInternal_contract"),
                H = new WeakMap;

            function Q(t) {
                return H.get(t[j])
            }
            async function V(t, e) {
                let n, r = null;
                if (Array.isArray(e)) {
                    const r = function(e) {
                        if ((0, c.A7)(e, 32)) return e;
                        const n = t.interface.getEvent(e);
                        return (0, o.en)(n, "unknown fragment", "name", e), n.topicHash
                    };
                    n = e.map((t => null == t ? null : Array.isArray(t) ? t.map(r) : r(t)))
                } else "*" === e ? n = [null] : "string" === typeof e ? (0, c.A7)(e, 32) ? n = [e] : (r = t.interface.getEvent(e), (0, o.en)(r, "unknown fragment", "event", e), n = [r.topicHash]) : (s = e) && "object" === typeof s && "getTopicFilter" in s && "function" === typeof s.getTopicFilter && s.fragment ? n = await e.getTopicFilter() : "fragment" in e ? (r = e.fragment, n = [r.topicHash]) : (0, o.en)(!1, "unknown event name", "event", e);
                var s;
                n = n.map((t => {
                    if (null == t) return null;
                    if (Array.isArray(t)) {
                        const e = Array.from(new Set(t.map((t => t.toLowerCase()))).values());
                        return 1 === e.length ? e[0] : (e.sort(), e)
                    }
                    return t.toLowerCase()
                }));
                return {
                    fragment: r,
                    tag: n.map((t => null == t ? "null" : Array.isArray(t) ? t.join("|") : t)).join("&"),
                    topics: n
                }
            }
            async function K(t, e) {
                const {
                    subs: n
                } = Q(t);
                return n.get((await V(t, e)).tag) || null
            }
            async function z(t, e, n) {
                const r = U(t.runner);
                (0, o.hu)(r, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
                    operation: e
                });
                const {
                    fragment: s,
                    tag: i,
                    topics: a
                } = await V(t, n), {
                    addr: c,
                    subs: u
                } = Q(t);
                let l = u.get(i);
                if (!l) {
                    const e = {
                            address: c || t,
                            topics: a
                        },
                        o = e => {
                            let r = s;
                            if (null == r) try {
                                r = t.interface.getEvent(e.topics[0])
                            } catch (i) {}
                            if (r) {
                                const i = r,
                                    a = s ? t.interface.decodeEventLog(s, e.data, e.topics) : [];
                                Z(t, n, a, (r => new I(t, r, n, i, e)))
                            } else Z(t, n, [], (r => new O(t, r, n, e)))
                        };
                    let h = [];
                    l = {
                        tag: i,
                        listeners: [],
                        start: () => {
                            h.length || h.push(r.on(e, o))
                        },
                        stop: async () => {
                            if (0 == h.length) return;
                            let t = h;
                            h = [], await Promise.all(t), r.off(e, o)
                        }
                    }, u.set(i, l)
                }
                return l
            }
            let J = Promise.resolve();
            async function Z(t, e, n, r) {
                try {
                    await J
                } catch (i) {}
                const s = async function(t, e, n, r) {
                    await J;
                    const s = await K(t, e);
                    if (!s) return !1;
                    const a = s.listeners.length;
                    return s.listeners = s.listeners.filter((({
                        listener: e,
                        once: s
                    }) => {
                        const a = Array.from(n);
                        r && a.push(r(s ? null : e));
                        try {
                            e.call(t, ...a)
                        } catch (i) {}
                        return !s
                    })), 0 === s.listeners.length && (s.stop(), Q(t).subs.delete(s.tag)), a > 0
                }(t, e, n, r);
                return J = s, await s
            }
            const _ = ["then"];
            class q {
                target;
                interface;
                runner;
                filters;
                [j];
                fallback;
                constructor(t, e, n, r) {
                    (0, o.en)("string" === typeof t || (0, b.RC)(t), "invalid value for Contract target", "target", t), null == n && (n = null);
                    const s = A.from(e);
                    let i;
                    (0, a.h)(this, {
                        target: t,
                        runner: n,
                        interface: s
                    }), Object.defineProperty(this, j, {
                        value: {}
                    });
                    let u = null,
                        l = null;
                    if (r) {
                        const t = U(n);
                        l = new k(this.interface, t, r)
                    }
                    let h = new Map;
                    if ("string" === typeof t)
                        if ((0, c.A7)(t)) u = t, i = Promise.resolve(t);
                        else {
                            const e = L(n, "resolveName");
                            if (!S(e)) throw (0, o.wf)("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                                operation: "resolveName"
                            });
                            i = e.resolveName(t).then((e => {
                                if (null == e) throw (0, o.wf)("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                                    value: t
                                });
                                return Q(this).addr = e, e
                            }))
                        }
                    else i = t.getAddress().then((t => {
                        if (null == t) throw new Error("TODO");
                        return Q(this).addr = t, t
                    }));
                    var f, d;
                    f = this, d = {
                        addrPromise: i,
                        addr: u,
                        deployTx: l,
                        subs: h
                    }, H.set(f[j], d);
                    const p = new Proxy({}, {
                        get: (t, e, n) => {
                            if ("symbol" === typeof e || _.indexOf(e) >= 0) return Reflect.get(t, e, n);
                            try {
                                return this.getEvent(e)
                            } catch (r) {
                                if (!(0, o.VZ)(r, "INVALID_ARGUMENT") || "key" !== r.argument) throw r
                            }
                        },
                        has: (t, e) => _.indexOf(e) >= 0 ? Reflect.has(t, e) : Reflect.has(t, e) || this.interface.hasEvent(String(e))
                    });
                    return (0, a.h)(this, {
                        filters: p
                    }), (0, a.h)(this, {
                        fallback: s.receive || s.fallback ? M(this) : null
                    }), new Proxy(this, {
                        get: (t, e, n) => {
                            if ("symbol" === typeof e || e in t || _.indexOf(e) >= 0) return Reflect.get(t, e, n);
                            try {
                                return t.getFunction(e)
                            } catch (r) {
                                if (!(0, o.VZ)(r, "INVALID_ARGUMENT") || "key" !== r.argument) throw r
                            }
                        },
                        has: (t, e) => "symbol" === typeof e || e in t || _.indexOf(e) >= 0 ? Reflect.has(t, e) : t.interface.hasFunction(e)
                    })
                }
                connect(t) {
                    return new q(this.target, this.interface, t)
                }
                attach(t) {
                    return new q(t, this.interface, this.runner)
                }
                async getAddress() {
                    return await Q(this).addrPromise
                }
                async getDeployedCode() {
                    const t = U(this.runner);
                    (0, o.hu)(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "getDeployedCode"
                    });
                    const e = await t.getCode(await this.getAddress());
                    return "0x" === e ? null : e
                }
                async waitForDeployment() {
                    const t = this.deploymentTransaction();
                    if (t) return await t.wait(), this;
                    if (null != await this.getDeployedCode()) return this;
                    const e = U(this.runner);
                    return (0, o.hu)(null != e, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "waitForDeployment"
                    }), new Promise(((t, n) => {
                        const r = async () => {
                            try {
                                if (null != await this.getDeployedCode()) return t(this);
                                e.once("block", r)
                            } catch (s) {
                                n(s)
                            }
                        };
                        r()
                    }))
                }
                deploymentTransaction() {
                    return Q(this).deployTx
                }
                getFunction(t) {
                    "string" !== typeof t && (t = t.format());
                    return G(this, t)
                }
                getEvent(t) {
                    return "string" !== typeof t && (t = t.format()),
                        function(t, e) {
                            const n = function(...n) {
                                    const r = t.interface.getEvent(e, n);
                                    return (0, o.hu)(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e,
                                            args: n
                                        }
                                    }), r
                                },
                                r = function(...e) {
                                    return new D(t, n(...e), e)
                                };
                            return (0, a.h)(r, {
                                name: t.interface.getEventName(e),
                                _contract: t,
                                _key: e,
                                getFragment: n
                            }), Object.defineProperty(r, "fragment", {
                                configurable: !1,
                                enumerable: !0,
                                get: () => {
                                    const n = t.interface.getEvent(e);
                                    return (0, o.hu)(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e
                                        }
                                    }), n
                                }
                            }), r
                        }(this, t)
                }
                async queryTransaction(t) {
                    throw new Error("@TODO")
                }
                async queryFilter(t, e, n) {
                    null == e && (e = 0), null == n && (n = "latest");
                    const {
                        addr: r,
                        addrPromise: s
                    } = Q(this), i = r || await s, {
                        fragment: a,
                        topics: c
                    } = await V(this, t), u = {
                        address: i,
                        topics: c,
                        fromBlock: e,
                        toBlock: n
                    }, l = U(this.runner);
                    return (0, o.hu)(l, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
                        operation: "queryFilter"
                    }), (await l.getLogs(u)).map((t => {
                        let e = a;
                        if (null == e) try {
                            e = this.interface.getEvent(t.topics[0])
                        } catch (n) {}
                        if (e) try {
                            return new P(t, this.interface, e)
                        } catch (n) {
                            return new x(t, n)
                        }
                        return new v.Zb(t, l)
                    }))
                }
                async on(t, e) {
                    const n = await z(this, "on", t);
                    return n.listeners.push({
                        listener: e,
                        once: !1
                    }), n.start(), this
                }
                async once(t, e) {
                    const n = await z(this, "once", t);
                    return n.listeners.push({
                        listener: e,
                        once: !0
                    }), n.start(), this
                }
                async emit(t, ...e) {
                    return await Z(this, t, e, null)
                }
                async listenerCount(t) {
                    if (t) {
                        const e = await K(this, t);
                        return e ? e.listeners.length : 0
                    }
                    const {
                        subs: e
                    } = Q(this);
                    let n = 0;
                    for (const {
                            listeners: r
                        } of e.values()) n += r.length;
                    return n
                }
                async listeners(t) {
                    if (t) {
                        const e = await K(this, t);
                        return e ? e.listeners.map((({
                            listener: t
                        }) => t)) : []
                    }
                    const {
                        subs: e
                    } = Q(this);
                    let n = [];
                    for (const {
                            listeners: r
                        } of e.values()) n = n.concat(r.map((({
                        listener: t
                    }) => t)));
                    return n
                }
                async off(t, e) {
                    const n = await K(this, t);
                    if (!n) return this;
                    if (e) {
                        const t = n.listeners.map((({
                            listener: t
                        }) => t)).indexOf(e);
                        t >= 0 && n.listeners.splice(t, 1)
                    }
                    return null != e && 0 !== n.listeners.length || (n.stop(), Q(this).subs.delete(n.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        const e = await K(this, t);
                        if (!e) return this;
                        e.stop(), Q(this).subs.delete(e.tag)
                    } else {
                        const {
                            subs: t
                        } = Q(this);
                        for (const {
                                tag: e,
                                stop: n
                            } of t.values()) n(), t.delete(e)
                    }
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return await this.off(t, e)
                }
                static buildClass(t) {
                    return class extends q {
                        constructor(e, n = null) {
                            super(e, t, n)
                        }
                    }
                }
                static from(t, e, n) {
                    null == n && (n = null);
                    return new this(t, e, n)
                }
            }
            class Y extends(function() {
                return q
            }()) {}
        },
        92314: function(t, e, n) {
            "use strict";
            n.d(e, {
                w: function() {
                    return O
                }
            });
            var r = n(26678),
                s = n(79903),
                i = n(49606);
            const [a, o, c] = [
                [],
                [],
                []
            ], u = BigInt(0), l = BigInt(1), h = BigInt(2), f = BigInt(7), d = BigInt(256), p = BigInt(113);
            for (let I = 0, N = l, B = 1, T = 0; I < 24; I++) {
                [B, T] = [T, (2 * B + 3 * T) % 5], a.push(2 * (5 * T + B)), o.push((I + 1) * (I + 2) / 2 % 64);
                let t = u;
                for (let e = 0; e < 7; e++) N = (N << l ^ (N >> f) * p) % d, N & h && (t ^= l << (l << BigInt(e)) - l);
                c.push(t)
            }
            const [g, y] = s.ZP.split(c, !0), m = (t, e, n) => n > 32 ? s.ZP.rotlBH(t, e, n) : s.ZP.rotlSH(t, e, n), w = (t, e, n) => n > 32 ? s.ZP.rotlBL(t, e, n) : s.ZP.rotlSL(t, e, n);
            class A extends i.kb {
                constructor(t, e, n, s = !1, a = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, r.ZP.number(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, i.Jq)(this.state)
                }
                keccak() {
                    ! function(t, e = 24) {
                        const n = new Uint32Array(10);
                        for (let r = 24 - e; r < 24; r++) {
                            for (let r = 0; r < 10; r++) n[r] = t[r] ^ t[r + 10] ^ t[r + 20] ^ t[r + 30] ^ t[r + 40];
                            for (let r = 0; r < 10; r += 2) {
                                const e = (r + 8) % 10,
                                    s = (r + 2) % 10,
                                    i = n[s],
                                    a = n[s + 1],
                                    o = m(i, a, 1) ^ n[e],
                                    c = w(i, a, 1) ^ n[e + 1];
                                for (let n = 0; n < 50; n += 10) t[r + n] ^= o, t[r + n + 1] ^= c
                            }
                            let e = t[2],
                                s = t[3];
                            for (let n = 0; n < 24; n++) {
                                const r = o[n],
                                    i = m(e, s, r),
                                    c = w(e, s, r),
                                    u = a[n];
                                e = t[u], s = t[u + 1], t[u] = i, t[u + 1] = c
                            }
                            for (let r = 0; r < 50; r += 10) {
                                for (let e = 0; e < 10; e++) n[e] = t[r + e];
                                for (let e = 0; e < 10; e++) t[r + e] ^= ~n[(e + 2) % 10] & n[(e + 4) % 10]
                            }
                            t[0] ^= g[r], t[1] ^= y[r]
                        }
                        n.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    r.ZP.exists(this);
                    const {
                        blockLen: e,
                        state: n
                    } = this, s = (t = (0, i.O0)(t)).length;
                    for (let r = 0; r < s;) {
                        const i = Math.min(e - this.pos, s - r);
                        for (let e = 0; e < i; e++) n[this.pos++] ^= t[r++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    const {
                        state: t,
                        suffix: e,
                        pos: n,
                        blockLen: r
                    } = this;
                    t[n] ^= e, 0 !== (128 & e) && n === r - 1 && this.keccak(), t[r - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    r.ZP.exists(this, !1), r.ZP.bytes(t), this.finish();
                    const e = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, s = t.length; r < s;) {
                        this.posOut >= n && this.keccak();
                        const i = Math.min(n - this.posOut, s - r);
                        t.set(e.subarray(this.posOut, this.posOut + i), r), this.posOut += i, r += i
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return r.ZP.number(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (r.ZP.output(t, this), this.finished) throw new Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    const {
                        blockLen: e,
                        suffix: n,
                        outputLen: r,
                        rounds: s,
                        enableXOF: i
                    } = this;
                    return t || (t = new A(e, n, r, i, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = r, t.enableXOF = i, t.destroyed = this.destroyed, t
                }
            }
            const b = (t, e, n) => (0, i.hE)((() => new A(e, t, n))),
                v = (b(6, 144, 28), b(6, 136, 32), b(6, 104, 48), b(6, 72, 64), b(1, 144, 28), b(1, 136, 32)),
                E = (b(1, 104, 48), b(1, 72, 64), (t, e, n) => (0, i.K$)(((r = {}) => new A(e, t, void 0 === r.dkLen ? n : r.dkLen, !0))));
            E(31, 168, 16), E(31, 136, 32);
            var P = n(455);
            let x = !1;
            const C = function(t) {
                return v(t)
            };
            let k = C;

            function O(t) {
                const e = (0, P.Pw)(t, "data");
                return (0, P.Dv)(k(e))
            }
            O._ = C, O.lock = function() {
                x = !0
            }, O.register = function(t) {
                if (x) throw new TypeError("keccak256 is locked");
                k = t
            }, Object.freeze(O)
        },
        32186: function(t, e, n) {
            "use strict";
            n.d(e, {
                id: function() {
                    return i
                }
            });
            var r = n(92314),
                s = n(97155);

            function i(t) {
                return (0, r.w)((0, s.Y0)(t))
            }
        },
        8706: function(t, e, n) {
            "use strict";
            n.d(e, {
                Q: function() {
                    return Ss
                }
            });
            var r = n(32423),
                s = n(39613),
                i = n(5556),
                a = n(79554),
                o = n(92314),
                c = n(455),
                u = n(12229),
                l = n(5857),
                h = n(32186);
            const f = new Uint8Array(32);
            f.fill(0);
            const d = BigInt(-1),
                p = BigInt(0),
                g = BigInt(1),
                y = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const m = (0, u.m9)(g, 32),
                w = (0, u.m9)(p, 32),
                A = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                b = ["name", "version", "chainId", "verifyingContract", "salt"];

            function v(t) {
                return function(e) {
                    return (0, r.en)("string" === typeof e, `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            const E = {
                name: v("name"),
                version: v("version"),
                chainId: function(t) {
                    const e = (0, u.yT)(t, "domain.chainId");
                    return (0, r.en)(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e) ? Number(e) : (0, u.B4)(e)
                },
                verifyingContract: function(t) {
                    try {
                        return (0, i.K)(t).toLowerCase()
                    } catch (e) {}(0, r.en)(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    const e = (0, c.Pw)(t, "domain.salt");
                    return (0, r.en)(32 === e.length, 'invalid domain value "salt"', "domain.salt", t), (0, c.Dv)(e)
                }
            };

            function P(t) {
                {
                    const e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        const n = "" === e[1],
                            s = parseInt(e[2] || "256");
                        (0, r.en)(s % 8 === 0 && 0 !== s && s <= 256 && (null == e[2] || e[2] === String(s)), "invalid numeric width", "type", t);
                        const i = (0, u.sS)(y, n ? s - 1 : s),
                            a = n ? (i + g) * d : p;
                        return function(e) {
                            const s = (0, u.yT)(e, "value");
                            return (0, r.en)(s >= a && s <= i, `value out-of-bounds for ${t}`, "value", s), (0, u.m9)(n ? (0, u.$j)(s, 256) : s, 32)
                        }
                    }
                } {
                    const e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        const n = parseInt(e[1]);
                        return (0, r.en)(0 !== n && n <= 32 && e[1] === String(n), "invalid bytes width", "type", t),
                            function(e) {
                                const s = (0, c.Pw)(e);
                                return (0, r.en)(s.length === n, `invalid length for ${t}`, "value", e),
                                    function(t) {
                                        const e = (0, c.Pw)(t),
                                            n = e.length % 32;
                                        return n ? (0, c.zo)([e, f.slice(n)]) : (0, c.Dv)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return (0, c.U3)((0, i.K)(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? m : w
                        };
                    case "bytes":
                        return function(t) {
                            return (0, o.w)(t)
                        };
                    case "string":
                        return function(t) {
                            return (0, h.id)(t)
                        }
                }
                return null
            }

            function x(t, e) {
                return `${t}(${e.map((({name:t,type:e})=>e+" "+t)).join(",")})`
            }
            class C {
                primaryType;#
                A;
                get types() {
                    return JSON.parse(this.#A)
                }#
                b;#
                v;
                constructor(t) {
                    this.#A = JSON.stringify(t), this.#b = new Map, this.#v = new Map;
                    const e = new Map,
                        n = new Map,
                        s = new Map;
                    Object.keys(t).forEach((t => {
                        e.set(t, new Set), n.set(t, []), s.set(t, new Set)
                    }));
                    for (const a in t) {
                        const s = new Set;
                        for (const i of t[a]) {
                            (0, r.en)(!s.has(i.name), `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(a)}`, "types", t), s.add(i.name);
                            const o = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
                            (0, r.en)(o !== a, `circular type reference to ${JSON.stringify(o)}`, "types", t);
                            P(o) || ((0, r.en)(n.has(o), `unknown type ${JSON.stringify(o)}`, "types", t), n.get(o).push(a), e.get(a).add(o))
                        }
                    }
                    const i = Array.from(n.keys()).filter((t => 0 === n.get(t).length));
                    (0, r.en)(0 !== i.length, "missing primary type", "types", t), (0, r.en)(1 === i.length, `ambiguous primary types or unused types: ${i.map((t=>JSON.stringify(t))).join(", ")}`, "types", t), (0, l.h)(this, {
                        primaryType: i[0]
                    }),
                    function i(a, o) {
                        (0, r.en)(!o.has(a), `circular type reference to ${JSON.stringify(a)}`, "types", t), o.add(a);
                        for (const t of e.get(a))
                            if (n.has(t)) {
                                i(t, o);
                                for (const e of o) s.get(e).add(t)
                            }
                        o.delete(a)
                    }(this.primaryType, new Set);
                    for (const [r, a] of s) {
                        const e = Array.from(a);
                        e.sort(), this.#b.set(r, x(r, t[r]) + e.map((e => x(e, t[e]))).join(""))
                    }
                }
                getEncoder(t) {
                    let e = this.#v.get(t);
                    return e || (e = this.#E(t), this.#v.set(t, e)), e
                }#
                E(t) {
                    {
                        const e = P(t);
                        if (e) return e
                    }
                    const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (e) {
                        const t = e[1],
                            n = this.getEncoder(t);
                        return s => {
                            (0, r.en)(!e[3] || parseInt(e[3]) === s.length, `array length mismatch; expected length ${parseInt(e[3])}`, "value", s);
                            let i = s.map(n);
                            return this.#b.has(t) && (i = i.map(o.w)), (0, o.w)((0, c.zo)(i))
                        }
                    }
                    const n = this.types[t];
                    if (n) {
                        const e = (0, h.id)(this.#b.get(t));
                        return t => {
                            const r = n.map((({
                                name: e,
                                type: n
                            }) => {
                                const r = this.getEncoder(n)(t[e]);
                                return this.#b.has(n) ? (0, o.w)(r) : r
                            }));
                            return r.unshift(e), (0, c.zo)(r)
                        }
                    }(0, r.en)(!1, `unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    const e = this.#b.get(t);
                    return (0, r.en)(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return (0, o.w)(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, n) {
                    if (P(t)) return n(t, e);
                    const s = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (s) return (0, r.en)(!s[3] || parseInt(s[3]) === e.length, `array length mismatch; expected length ${parseInt(s[3])}`, "value", e), e.map((t => this._visit(s[1], t, n)));
                    const i = this.types[t];
                    if (i) return i.reduce(((t, {
                        name: r,
                        type: s
                    }) => (t[r] = this._visit(s, e[r], n), t)), {});
                    (0, r.en)(!1, `unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new C(t)
                }
                static getPrimaryType(t) {
                    return C.from(t).primaryType
                }
                static hashStruct(t, e, n) {
                    return C.from(e).hashStruct(t, n)
                }
                static hashDomain(t) {
                    const e = [];
                    for (const n in t) {
                        if (null == t[n]) continue;
                        const s = A[n];
                        (0, r.en)(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({
                            name: n,
                            type: s
                        })
                    }
                    return e.sort(((t, e) => b.indexOf(t.name) - b.indexOf(e.name))), C.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, n) {
                    return (0, c.zo)(["0x1901", C.hashDomain(t), C.from(e).hash(n)])
                }
                static hash(t, e, n) {
                    return (0, o.w)(C.encode(t, e, n))
                }
                static async resolveNames(t, e, n, r) {
                    t = Object.assign({}, t);
                    for (const a in t) null == t[a] && delete t[a];
                    const s = {};
                    t.verifyingContract && !(0, c.A7)(t.verifyingContract, 20) && (s[t.verifyingContract] = "0x");
                    const i = C.from(e);
                    i.visit(n, ((t, e) => ("address" !== t || (0, c.A7)(e, 20) || (s[e] = "0x"), e)));
                    for (const a in s) s[a] = await r(a);
                    return t.verifyingContract && s[t.verifyingContract] && (t.verifyingContract = s[t.verifyingContract]), {
                        domain: t,
                        value: n = i.visit(n, ((t, e) => "address" === t && s[e] ? s[e] : e))
                    }
                }
                static getPayload(t, e, n) {
                    C.hashDomain(t);
                    const s = {},
                        i = [];
                    b.forEach((e => {
                        const n = t[e];
                        null != n && (s[e] = E[e](n), i.push({
                            name: e,
                            type: A[e]
                        }))
                    }));
                    const a = C.from(e),
                        o = Object.assign({}, e);
                    return (0, r.en)(null == o.EIP712Domain, "types must not contain EIP712Domain type", "types.EIP712Domain", e), o.EIP712Domain = i, a.encode(n), {
                        types: o,
                        domain: s,
                        primaryType: a.primaryType,
                        message: a.visit(n, ((t, e) => {
                            if (t.match(/^bytes(\d*)/)) return (0, c.Dv)((0, c.Pw)(e));
                            if (t.match(/^u?int/)) return (0, u.yT)(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return (0, r.en)("string" === typeof e, "invalid string", "value", e), e
                            }(0, r.en)(!1, "unsupported type", "type", t)
                        }))
                    }
                }
            }
            var k = n(1891),
                O = n(97155);
            const I = "0x0000000000000000000000000000000000000000";
            var N = n(7583);

            function B(t) {
                return function(t) {
                    let e = 0;
                    return () => t[e++]
                }(function(t) {
                    let e = 0;

                    function n() {
                        return t[e++] << 8 | t[e++]
                    }
                    let r = n(),
                        s = 1,
                        i = [0, 1];
                    for (let A = 1; A < r; A++) i.push(s += n());
                    let a = n(),
                        o = e;
                    e += a;
                    let c = 0,
                        u = 0;

                    function l() {
                        return 0 == c && (u = u << 8 | t[e++], c = 8), u >> --c & 1
                    }
                    const h = 2 ** 31,
                        f = h >>> 1,
                        d = h - 1;
                    let p = 0;
                    for (let A = 0; A < 31; A++) p = p << 1 | l();
                    let g = [],
                        y = 0,
                        m = h;
                    for (;;) {
                        let t = Math.floor(((p - y + 1) * s - 1) / m),
                            e = 0,
                            n = r;
                        for (; n - e > 1;) {
                            let r = e + n >>> 1;
                            t < i[r] ? n = r : e = r
                        }
                        if (0 == e) break;
                        g.push(e);
                        let a = y + Math.floor(m * i[e] / s),
                            o = y + Math.floor(m * i[e + 1] / s) - 1;
                        for (; 0 == ((a ^ o) & f);) p = p << 1 & d | l(), a = a << 1 & d, o = o << 1 & d | 1;
                        for (; a & ~o & 536870912;) p = p & f | p << 1 & d >>> 1 | l(), a = a << 1 ^ f, o = (o ^ f) << 1 | f | 1;
                        y = a, m = 1 + o - a
                    }
                    let w = r - 4;
                    return g.map((e => {
                        switch (e - w) {
                            case 3:
                                return w + 65792 + (t[o++] << 16 | t[o++] << 8 | t[o++]);
                            case 2:
                                return w + 256 + (t[o++] << 8 | t[o++]);
                            case 1:
                                return w + t[o++];
                            default:
                                return e - 1
                        }
                    }))
                }(function(t) {
                    let e = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach(((t, n) => e[t.charCodeAt(0)] = n));
                    let n = t.length,
                        r = new Uint8Array(6 * n >> 3);
                    for (let s = 0, i = 0, a = 0, o = 0; s < n; s++) o = o << 6 | e[t.charCodeAt(s)], a += 6, a >= 8 && (r[i++] = o >> (a -= 8));
                    return r
                }(t)))
            }

            function T(t) {
                return 1 & t ? ~t >> 1 : t >> 1
            }

            function S(t, e) {
                let n = Array(t);
                for (let r = 0, s = 0; r < t; r++) n[r] = s += T(e());
                return n
            }

            function R(t, e = 0) {
                let n = [];
                for (;;) {
                    let r = t(),
                        s = t();
                    if (!s) break;
                    e += r;
                    for (let t = 0; t < s; t++) n.push(e + t);
                    e += s + 1
                }
                return n
            }

            function D(t) {
                return U((() => {
                    let e = R(t);
                    if (e.length) return e
                }))
            }

            function L(t) {
                let e = [];
                for (;;) {
                    let n = t();
                    if (0 == n) break;
                    e.push(M(n, t))
                }
                for (;;) {
                    let n = t() - 1;
                    if (n < 0) break;
                    e.push(G(n, t))
                }
                return e.flat()
            }

            function U(t) {
                let e = [];
                for (;;) {
                    let n = t(e.length);
                    if (!n) break;
                    e.push(n)
                }
                return e
            }

            function F(t, e, n) {
                let r = Array(t).fill().map((() => []));
                for (let s = 0; s < e; s++) S(t, n).forEach(((t, e) => r[e].push(t)));
                return r
            }

            function M(t, e) {
                let n = 1 + e(),
                    r = e(),
                    s = U(e);
                return F(s.length, 1 + t, e).flatMap(((t, e) => {
                    let [i, ...a] = t;
                    return Array(s[e]).fill().map(((t, e) => {
                        let s = e * r;
                        return [i + e * n, a.map((t => t + s))]
                    }))
                }))
            }

            function G(t, e) {
                return F(1 + e(), 1 + t, e).map((t => [t[0], t.slice(1)]))
            }
            var j = B("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");
            const H = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function Q(t) {
                return `{${function(t){return t.toString(16).toUpperCase().padStart(2,"0")}(t)}}`
            }

            function V(t) {
                let e = [];
                for (let n = 0, r = t.length; n < r;) {
                    let r = t.codePointAt(n);
                    n += r < 65536 ? 1 : 2, e.push(r)
                }
                return e
            }

            function K(t) {
                let e = t.length;
                if (e < 4096) return String.fromCodePoint(...t);
                let n = [];
                for (let r = 0; r < e;) n.push(String.fromCodePoint(...t.slice(r, r += 4096)));
                return n.join("")
            }
            var z = B("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");

            function J(t) {
                return t >> 24 & 255
            }

            function Z(t) {
                return 16777215 & t
            }
            const _ = new Map(D(z).flatMap(((t, e) => t.map((t => [t, e + 1 << 24]))))),
                q = new Set(R(z)),
                Y = new Map,
                W = new Map;
            for (let [Rs, Ds] of L(z)) {
                if (!q.has(Rs) && 2 == Ds.length) {
                    let [t, e] = Ds, n = W.get(t);
                    n || (n = new Map, W.set(t, n)), n.set(e, Rs)
                }
                Y.set(Rs, Ds.reverse())
            }
            const X = 44032,
                $ = 4352,
                tt = 4449,
                et = 4519,
                nt = 28,
                rt = 588;

            function st(t) {
                return t >= X && t < 55204
            }

            function it(t, e) {
                if (t >= $ && t < 4371 && e >= tt && e < 4470) return X + (t - $) * rt + (e - tt) * nt;
                if (st(t) && e > et && e < 4547 && (t - X) % nt == 0) return t + (e - et); {
                    let n = W.get(t);
                    return n && (n = n.get(e), n) ? n : -1
                }
            }

            function at(t) {
                let e = [],
                    n = [],
                    r = !1;

                function s(t) {
                    let n = _.get(t);
                    n && (r = !0, t |= n), e.push(t)
                }
                for (let i of t)
                    for (;;) {
                        if (i < 128) e.push(i);
                        else if (st(i)) {
                            let t = i - X,
                                e = t % rt / nt | 0,
                                n = t % nt;
                            s($ + (t / rt | 0)), s(tt + e), n > 0 && s(et + n)
                        } else {
                            let t = Y.get(i);
                            t ? n.push(...t) : s(i)
                        }
                        if (!n.length) break;
                        i = n.pop()
                    }
                if (r && e.length > 1) {
                    let t = J(e[0]);
                    for (let n = 1; n < e.length; n++) {
                        let r = J(e[n]);
                        if (0 == r || t <= r) {
                            t = r;
                            continue
                        }
                        let s = n - 1;
                        for (;;) {
                            let n = e[s + 1];
                            if (e[s + 1] = e[s], e[s] = n, !s) break;
                            if (t = J(e[--s]), t <= r) break
                        }
                        t = J(e[n])
                    }
                }
                return e
            }

            function ot(t) {
                return at(t).map(Z)
            }

            function ct(t) {
                return function(t) {
                    let e = [],
                        n = [],
                        r = -1,
                        s = 0;
                    for (let i of t) {
                        let t = J(i),
                            a = Z(i);
                        if (-1 == r) 0 == t ? r = a : e.push(a);
                        else if (s > 0 && s >= t) 0 == t ? (e.push(r, ...n), n.length = 0, r = a) : n.push(a), s = t;
                        else {
                            let i = it(r, a);
                            i >= 0 ? r = i : 0 == s && 0 == t ? (e.push(r), r = a) : (n.push(a), s = t)
                        }
                    }
                    return r >= 0 && e.push(r, ...n), e
                }(at(t))
            }
            const ut = 65039,
                lt = ".";

            function ht() {
                return new Set(R(j))
            }
            const ft = new Map(L(j)),
                dt = ht(),
                pt = ht(),
                gt = new Set(R(j).map((function(t) {
                    return this[t]
                }), [...pt])),
                yt = ht(),
                mt = (ht(), D(j));

            function wt() {
                return new Set([R(j).map((t => mt[t])), R(j)].flat(2))
            }
            const At = j(),
                bt = U((t => {
                    let e = U(j).map((t => t + 96));
                    if (e.length) {
                        let n = t >= At;
                        e[0] -= 32, e = K(e), n && (e = `Restricted[${e}]`);
                        let r = wt(),
                            s = wt(),
                            i = [...r, ...s].sort(((t, e) => t - e));
                        return {
                            N: e,
                            P: r,
                            M: !j(),
                            R: n,
                            V: new Set(i)
                        }
                    }
                })),
                vt = ht(),
                Et = new Map;
            [...vt, ...ht()].sort(((t, e) => t - e)).map(((t, e, n) => {
                let r = j(),
                    s = n[e] = r ? n[e - r] : {
                        V: [],
                        M: new Map
                    };
                s.V.push(t), vt.has(t) || Et.set(t, s)
            }));
            for (let {
                    V: Rs,
                    M: Ds
                } of new Set(Et.values())) {
                let t = [];
                for (let n of Rs) {
                    let e = bt.filter((t => t.V.has(n))),
                        r = t.find((({
                            G: t
                        }) => e.some((e => t.has(e)))));
                    r || (r = {
                        G: new Set,
                        V: []
                    }, t.push(r)), r.V.push(n), e.forEach((t => r.G.add(t)))
                }
                let e = t.flatMap((({
                    G: t
                }) => [...t]));
                for (let {
                        G: n,
                        V: r
                    } of t) {
                    let t = new Set(e.filter((t => !n.has(t))));
                    for (let e of r) Ds.set(e, t)
                }
            }
            let Pt = new Set,
                xt = new Set;
            for (let Rs of bt)
                for (let t of Rs.V)(Pt.has(t) ? xt : Pt).add(t);
            for (let Rs of Pt) Et.has(Rs) || xt.has(Rs) || Et.set(Rs, 1);
            const Ct = new Set([...Pt, ...ot(Pt)]),
                kt = R(j),
                Ot = function t(e) {
                    let n = U((() => {
                            let e = R(j).map((t => kt[t]));
                            if (e.length) return t(e)
                        })).sort(((t, e) => e.Q.size - t.Q.size)),
                        r = j(),
                        s = r % 3;
                    r = r / 3 | 0;
                    let i = 1 & r;
                    return r >>= 1, {
                        B: n,
                        V: s,
                        F: i,
                        S: 1 & r,
                        C: 2 & r,
                        Q: new Set(e)
                    }
                }([]);
            class It extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function Nt(t, e = Q) {
                let n = [];
                var r;
                r = t[0], pt.has(r) && n.push("\u25cc");
                let s = 0,
                    i = t.length;
                for (let a = 0; a < i; a++) {
                    let r = t[a];
                    Rt(r) && (n.push(K(t.slice(s, a))), n.push(e(r)), s = a + 1)
                }
                return n.push(K(t.slice(s, i))), n.join("")
            }

            function Bt(t) {
                return (Rt(t) ? "" : `${Tt(Nt([t]))} `) + Q(t)
            }

            function Tt(t) {
                return `"${t}"\u200e`
            }

            function St(t) {
                for (let e = t.lastIndexOf(95); e > 0;)
                    if (95 !== t[--e]) throw new Error("underscore allowed only at start")
            }

            function Rt(t) {
                return yt.has(t)
            }

            function Dt(t, e) {
                let n = 0;
                return t.split(lt).map((t => {
                    let r, s = V(t),
                        i = {
                            input: s,
                            offset: n
                        };
                    n += s.length + 1;
                    try {
                        let t, n = i.tokens = Gt(s, ct),
                            a = n.length;
                        if (!a) throw new Error("empty label"); {
                            let s = n[0],
                                o = a > 1 || s.is_emoji;
                            if (!o && s.every((t => t < 128))) r = s, St(r),
                                function(t) {
                                    if (t.length >= 4 && 45 == t[2] && 45 == t[3]) throw new Error("invalid label extension")
                                }(r), t = "ASCII";
                            else if (o && (i.emoji = !0, s = n.flatMap((t => t.is_emoji ? [] : t))), r = n.flatMap((t => !e && t.is_emoji ? jt(t) : t)), St(r), s.length) {
                                if (pt.has(r[0])) throw Mt("leading combining mark");
                                for (let t = 1; t < a; t++) {
                                    let e = n[t];
                                    if (!e.is_emoji && pt.has(e[0])) throw Mt(`emoji + combining mark: "${K(n[t-1])} + ${Nt([e[0]])}"`)
                                }! function(t) {
                                    let e = t[0],
                                        n = H.get(e);
                                    if (n) throw Mt(`leading ${n}`);
                                    let r = t.length,
                                        s = -1;
                                    for (let i = 1; i < r; i++) {
                                        e = t[i];
                                        let r = H.get(e);
                                        if (r) {
                                            if (s == i) throw Mt(`${n} + ${r}`);
                                            s = i + 1, n = r
                                        }
                                    }
                                    if (s == r) throw Mt(`trailing ${n}`)
                                }(r);
                                let e = [...new Set(s)],
                                    [i] = function(t) {
                                        let e = bt;
                                        for (let n of t) {
                                            let t = e.filter((t => t.V.has(n)));
                                            if (!t.length) throw e === bt ? Ut(n) : Ft(e[0], n);
                                            if (e = t, 1 == t.length) break
                                        }
                                        return e
                                    }(e);
                                ! function(t, e) {
                                    let {
                                        V: n,
                                        M: r
                                    } = t;
                                    for (let s of e)
                                        if (!n.has(s)) throw Ft(t, s);
                                    if (r) {
                                        let t = ot(e);
                                        for (let e = 1, n = t.length; e < n; e++)
                                            if (gt.has(t[e])) {
                                                let r, s = e + 1;
                                                for (; s < n && gt.has(r = t[s]); s++)
                                                    for (let n = e; n < s; n++)
                                                        if (t[n] == r) throw new Error(`non-spacing marks: repeated ${Bt(r)}`);
                                                if (s - e > 4) throw new Error(`non-spacing marks: too many ${Tt(Nt(t.slice(e-1,s)))} (${s-e}/4)`);
                                                e = s
                                            }
                                    }
                                }(i, s),
                                function(t, e) {
                                    let n, r = [];
                                    for (let s of e) {
                                        let t = Et.get(s);
                                        if (1 === t) return;
                                        if (t) {
                                            let e = t.M.get(s);
                                            if (n = n ? n.filter((t => e.has(t))) : [...e], !n.length) return
                                        } else r.push(s)
                                    }
                                    if (n)
                                        for (let s of n)
                                            if (r.every((t => s.V.has(t)))) throw new Error(`whole-script confusable: ${t.N}/${s.N}`)
                                }(i, e), t = i.N
                            } else t = "Emoji"
                        }
                        i.type = t
                    } catch (a) {
                        i.error = a
                    }
                    return i.output = r, i
                }))
            }

            function Lt(t) {
                return t.map((({
                    input: e,
                    error: n,
                    output: r
                }) => {
                    if (n) {
                        let r = n.message;
                        throw new Error(1 == t.length ? r : `Invalid label ${Tt(Nt(e))}: ${r}`)
                    }
                    return K(r)
                })).join(lt)
            }

            function Ut(t) {
                return new Error(`disallowed character: ${Bt(t)}`)
            }

            function Ft(t, e) {
                let n = Bt(e),
                    r = bt.find((t => t.P.has(e)));
                return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${t.N} + ${n}`)
            }

            function Mt(t) {
                return new Error(`illegal placement: ${t}`)
            }

            function Gt(t, e) {
                let n = [],
                    r = [];
                for (t = t.slice().reverse(); t.length;) {
                    let s = Ht(t);
                    if (s) r.length && (n.push(e(r)), r = []), n.push(s);
                    else {
                        let e = t.pop();
                        if (Ct.has(e)) r.push(e);
                        else {
                            let t = ft.get(e);
                            if (t) r.push(...t);
                            else if (!dt.has(e)) throw Ut(e)
                        }
                    }
                }
                return r.length && n.push(e(r)), n
            }

            function jt(t) {
                return t.filter((t => t != ut))
            }

            function Ht(t, e) {
                let n, r, s = Ot,
                    i = [],
                    a = t.length;
                for (e && (e.length = 0); a;) {
                    let o = t[--a];
                    if (s = s.B.find((t => t.Q.has(o))), !s) break;
                    if (s.S) r = o;
                    else if (s.C && o === r) break;
                    i.push(o), s.F && (i.push(ut), a > 0 && t[a - 1] == ut && a--), s.V && (n = Qt(i, s), e && e.push(...t.slice(a).reverse()), t.length = a)
                }
                return n
            }

            function Qt(t, e) {
                let n = It.from(t);
                return 2 == e.V && n.splice(1, 1), n
            }
            const Vt = new Uint8Array(32);

            function Kt(t) {
                return (0, r.en)(0 !== t.length, "invalid ENS name; empty component", "comp", t), t
            }

            function zt(t) {
                const e = (0, O.Y0)(function(t) {
                        try {
                            return function(t) {
                                return Lt(Dt(t))
                            }(t)
                        } catch (e) {
                            (0, r.en)(!1, `invalid ENS name (${e.message})`, "name", t)
                        }
                    }(t)),
                    n = [];
                if (0 === t.length) return n;
                let s = 0;
                for (let r = 0; r < e.length; r++) {
                    46 === e[r] && (n.push(Kt(e.slice(s, r))), s = r + 1)
                }
                return (0, r.en)(s < e.length, "invalid ENS name; empty component", "name", t), n.push(Kt(e.slice(s))), n
            }

            function Jt(t) {
                (0, r.en)("string" === typeof t, "invalid ENS name; not a string", "name", t);
                let e = Vt;
                const n = zt(t);
                for (; n.length;) e = (0, o.w)((0, c.zo)([e, (0, o.w)(n.pop())]));
                return (0, c.Dv)(e)
            }
            Vt.fill(0);
            const Zt = "0x0000000000000000000000000000000000000000000000000000000000000000",
                _t = BigInt(0),
                qt = BigInt(1),
                Yt = BigInt(2),
                Wt = BigInt(27),
                Xt = BigInt(28),
                $t = BigInt(35),
                te = {};

            function ee(t) {
                return (0, c.U3)((0, u.ot)(t), 32)
            }
            class ne {#
                P;#
                x;#
                C;#
                k;
                get r() {
                    return this.#P
                }
                set r(t) {
                    (0, r.en)(32 === (0, c.M5)(t), "invalid r", "value", t), this.#P = (0, c.Dv)(t)
                }
                get s() {
                    return this.#x
                }
                set s(t) {
                    (0, r.en)(32 === (0, c.M5)(t), "invalid s", "value", t);
                    const e = (0, c.Dv)(t);
                    (0, r.en)(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), this.#x = e
                }
                get v() {
                    return this.#C
                }
                set v(t) {
                    const e = (0, u.Dx)(t, "value");
                    (0, r.en)(27 === e || 28 === e, "invalid v", "v", t), this.#C = e
                }
                get networkV() {
                    return this.#k
                }
                get legacyChainId() {
                    const t = this.networkV;
                    return null == t ? null : ne.getChainId(t)
                }
                get yParity() {
                    return 27 === this.v ? 0 : 1
                }
                get yParityAndS() {
                    const t = (0, c.Pw)(this.s);
                    return this.yParity && (t[0] |= 128), (0, c.Dv)(t)
                }
                get compactSerialized() {
                    return (0, c.zo)([this.r, this.yParityAndS])
                }
                get serialized() {
                    return (0, c.zo)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
                }
                constructor(t, e, n, s) {
                    (0, r.NK)(t, te, "Signature"), this.#P = e, this.#x = n, this.#C = s, this.#k = null
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
                }
                clone() {
                    const t = new ne(te, this.r, this.s, this.v);
                    return this.networkV && (t.#k = this.networkV), t
                }
                toJSON() {
                    const t = this.networkV;
                    return {
                        _type: "signature",
                        networkV: null != t ? t.toString() : null,
                        r: this.r,
                        s: this.s,
                        v: this.v
                    }
                }
                static getChainId(t) {
                    const e = (0, u.yT)(t, "v");
                    return e == Wt || e == Xt ? _t : ((0, r.en)(e >= $t, "invalid EIP-155 v", "v", t), (e - $t) / Yt)
                }
                static getChainIdV(t, e) {
                    return (0, u.yT)(t) * Yt + BigInt(35 + e - 27)
                }
                static getNormalizedV(t) {
                    const e = (0, u.yT)(t);
                    return e === _t || e === Wt ? 27 : e === qt || e === Xt ? 28 : ((0, r.en)(e >= $t, "invalid v", "v", t), e & qt ? 27 : 28)
                }
                static from(t) {
                    function e(e, n) {
                        (0, r.en)(e, n, "signature", t)
                    }
                    if (null == t) return new ne(te, Zt, Zt, 27);
                    if ("string" === typeof t) {
                        const n = (0, c.Pw)(t, "signature");
                        if (64 === n.length) {
                            const t = (0, c.Dv)(n.slice(0, 32)),
                                e = n.slice(32, 64),
                                r = 128 & e[0] ? 28 : 27;
                            return e[0] &= 127, new ne(te, t, (0, c.Dv)(e), r)
                        }
                        if (65 === n.length) {
                            const t = (0, c.Dv)(n.slice(0, 32)),
                                r = n.slice(32, 64);
                            e(0 === (128 & r[0]), "non-canonical s");
                            const s = ne.getNormalizedV(n[64]);
                            return new ne(te, t, (0, c.Dv)(r), s)
                        }
                        e(!1, "invalid raw signature length")
                    }
                    if (t instanceof ne) return t.clone();
                    const n = t.r;
                    e(null != n, "missing r");
                    const s = ee(n),
                        i = function(t, n) {
                            if (null != t) return ee(t);
                            if (null != n) {
                                e((0, c.A7)(n, 32), "invalid yParityAndS");
                                const t = (0, c.Pw)(n);
                                return t[0] &= 127, (0, c.Dv)(t)
                            }
                            e(!1, "missing s")
                        }(t.s, t.yParityAndS);
                    e(0 == (128 & (0, c.Pw)(i)[0]), "non-canonical s");
                    const {
                        networkV: a,
                        v: o
                    } = function(t, n, r) {
                        if (null != t) {
                            const e = (0, u.yT)(t);
                            return {
                                networkV: e >= $t ? e : void 0,
                                v: ne.getNormalizedV(e)
                            }
                        }
                        if (null != n) return e((0, c.A7)(n, 32), "invalid yParityAndS"), {
                            v: 128 & (0, c.Pw)(n)[0] ? 28 : 27
                        };
                        if (null != r) {
                            switch ((0, u.Dx)(r, "sig.yParity")) {
                                case 0:
                                    return {
                                        v: 27
                                    };
                                case 1:
                                    return {
                                        v: 28
                                    }
                            }
                            e(!1, "invalid yParity")
                        }
                        e(!1, "missing v")
                    }(t.v, t.yParityAndS, t.yParity), l = new ne(te, s, i, o);
                    return a && (l.#k = a), e(null == t.yParity || (0, u.Dx)(t.yParity, "sig.yParity") === l.yParity, "yParity mismatch"), e(null == t.yParityAndS || t.yParityAndS === l.yParityAndS, "yParityAndS mismatch"), l
                }
            }
            var re = n(95856),
                se = n.t(re, 2);
            const ie = BigInt(0),
                ae = BigInt(1),
                oe = BigInt(2),
                ce = BigInt(3),
                ue = BigInt(8),
                le = Object.freeze({
                    a: ie,
                    b: BigInt(7),
                    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                    h: ae,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
                }),
                he = (t, e) => (t + e / oe) / e,
                fe = {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar(t) {
                        const {
                            n: e
                        } = le, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -ae * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = n, a = BigInt("0x100000000000000000000000000000000"), o = he(i * t, e), c = he(-r * t, e);
                        let u = Me(t - o * n - c * s, e),
                            l = Me(-o * r - c * i, e);
                        const h = u > a,
                            f = l > a;
                        if (h && (u = e - u), f && (l = e - l), u > a || l > a) throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
                        return {
                            k1neg: h,
                            k1: u,
                            k2neg: f,
                            k2: l
                        }
                    }
                },
                de = 32,
                pe = 32;

            function ge(t) {
                const {
                    a: e,
                    b: n
                } = le, r = Me(t * t), s = Me(r * t);
                return Me(s + e * t + n)
            }
            const ye = le.a === ie;
            class me extends Error {
                constructor(t) {
                    super(t)
                }
            }

            function we(t) {
                if (!(t instanceof Ae)) throw new TypeError("JacobianPoint expected")
            }
            class Ae {
                constructor(t, e, n) {
                    this.x = t, this.y = e, this.z = n
                }
                static fromAffine(t) {
                    if (!(t instanceof Ee)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
                    return t.equals(Ee.ZERO) ? Ae.ZERO : new Ae(t.x, t.y, ae)
                }
                static toAffineBatch(t) {
                    const e = function(t, e = le.P) {
                        const n = new Array(t.length),
                            r = je(t.reduce(((t, r, s) => r === ie ? t : (n[s] = t, Me(t * r, e))), ae), e);
                        return t.reduceRight(((t, r, s) => r === ie ? t : (n[s] = Me(t * n[s], e), Me(t * r, e))), r), n
                    }(t.map((t => t.z)));
                    return t.map(((t, n) => t.toAffine(e[n])))
                }
                static normalizeZ(t) {
                    return Ae.toAffineBatch(t).map(Ae.fromAffine)
                }
                equals(t) {
                    we(t);
                    const {
                        x: e,
                        y: n,
                        z: r
                    } = this, {
                        x: s,
                        y: i,
                        z: a
                    } = t, o = Me(r * r), c = Me(a * a), u = Me(e * c), l = Me(s * o), h = Me(Me(n * a) * c), f = Me(Me(i * r) * o);
                    return u === l && h === f
                }
                negate() {
                    return new Ae(this.x, Me(-this.y), this.z)
                }
                double() {
                    const {
                        x: t,
                        y: e,
                        z: n
                    } = this, r = Me(t * t), s = Me(e * e), i = Me(s * s), a = t + s, o = Me(oe * (Me(a * a) - r - i)), c = Me(ce * r), u = Me(c * c), l = Me(u - oe * o), h = Me(c * (o - l) - ue * i), f = Me(oe * e * n);
                    return new Ae(l, h, f)
                }
                add(t) {
                    we(t);
                    const {
                        x: e,
                        y: n,
                        z: r
                    } = this, {
                        x: s,
                        y: i,
                        z: a
                    } = t;
                    if (s === ie || i === ie) return this;
                    if (e === ie || n === ie) return t;
                    const o = Me(r * r),
                        c = Me(a * a),
                        u = Me(e * c),
                        l = Me(s * o),
                        h = Me(Me(n * a) * c),
                        f = Me(Me(i * r) * o),
                        d = Me(l - u),
                        p = Me(f - h);
                    if (d === ie) return p === ie ? this.double() : Ae.ZERO;
                    const g = Me(d * d),
                        y = Me(d * g),
                        m = Me(u * g),
                        w = Me(p * p - y - oe * m),
                        A = Me(p * (m - w) - h * y),
                        b = Me(r * a * d);
                    return new Ae(w, A, b)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiplyUnsafe(t) {
                    const e = Ae.ZERO;
                    if ("bigint" === typeof t && t === ie) return e;
                    let n = Fe(t);
                    if (n === ae) return this;
                    if (!ye) {
                        let t = e,
                            r = this;
                        for (; n > ie;) n & ae && (t = t.add(r)), r = r.double(), n >>= ae;
                        return t
                    }
                    let {
                        k1neg: r,
                        k1: s,
                        k2neg: i,
                        k2: a
                    } = fe.splitScalar(n), o = e, c = e, u = this;
                    for (; s > ie || a > ie;) s & ae && (o = o.add(u)), a & ae && (c = c.add(u)), u = u.double(), s >>= ae, a >>= ae;
                    return r && (o = o.negate()), i && (c = c.negate()), c = new Ae(Me(c.x * fe.beta), c.y, c.z), o.add(c)
                }
                precomputeWindow(t) {
                    const e = ye ? 128 / t + 1 : 256 / t + 1,
                        n = [];
                    let r = this,
                        s = r;
                    for (let i = 0; i < e; i++) {
                        s = r, n.push(s);
                        for (let e = 1; e < 2 ** (t - 1); e++) s = s.add(r), n.push(s);
                        r = s.double()
                    }
                    return n
                }
                wNAF(t, e) {
                    !e && this.equals(Ae.BASE) && (e = Ee.BASE);
                    const n = e && e._WINDOW_SIZE || 1;
                    if (256 % n) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let r = e && ve.get(e);
                    r || (r = this.precomputeWindow(n), e && 1 !== n && (r = Ae.normalizeZ(r), ve.set(e, r)));
                    let s = Ae.ZERO,
                        i = Ae.BASE;
                    const a = 1 + (ye ? 128 / n : 256 / n),
                        o = 2 ** (n - 1),
                        c = BigInt(2 ** n - 1),
                        u = 2 ** n,
                        l = BigInt(n);
                    for (let h = 0; h < a; h++) {
                        const e = h * o;
                        let n = Number(t & c);
                        t >>= l, n > o && (n -= u, t += ae);
                        const a = e,
                            f = e + Math.abs(n) - 1,
                            d = h % 2 !== 0,
                            p = n < 0;
                        0 === n ? i = i.add(be(d, r[a])) : s = s.add(be(p, r[f]))
                    }
                    return {
                        p: s,
                        f: i
                    }
                }
                multiply(t, e) {
                    let n, r, s = Fe(t);
                    if (ye) {
                        const {
                            k1neg: t,
                            k1: i,
                            k2neg: a,
                            k2: o
                        } = fe.splitScalar(s);
                        let {
                            p: c,
                            f: u
                        } = this.wNAF(i, e), {
                            p: l,
                            f: h
                        } = this.wNAF(o, e);
                        c = be(t, c), l = be(a, l), l = new Ae(Me(l.x * fe.beta), l.y, l.z), n = c.add(l), r = u.add(h)
                    } else {
                        const {
                            p: t,
                            f: i
                        } = this.wNAF(s, e);
                        n = t, r = i
                    }
                    return Ae.normalizeZ([n, r])[0]
                }
                toAffine(t) {
                    const {
                        x: e,
                        y: n,
                        z: r
                    } = this, s = this.equals(Ae.ZERO);
                    null == t && (t = s ? ue : je(r));
                    const i = t,
                        a = Me(i * i),
                        o = Me(a * i),
                        c = Me(e * a),
                        u = Me(n * o),
                        l = Me(r * i);
                    if (s) return Ee.ZERO;
                    if (l !== ae) throw new Error("invZ was invalid");
                    return new Ee(c, u)
                }
            }

            function be(t, e) {
                const n = e.negate();
                return t ? n : e
            }
            Ae.BASE = new Ae(le.Gx, le.Gy, ae), Ae.ZERO = new Ae(ie, ae, ie);
            const ve = new WeakMap;
            class Ee {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, ve.delete(this)
                }
                hasEvenY() {
                    return this.y % oe === ie
                }
                static fromCompressedHex(t) {
                    const e = 32 === t.length,
                        n = Le(e ? t : t.subarray(1));
                    if (!Je(n)) throw new Error("Point is not on curve");
                    let r = function(t) {
                        const {
                            P: e
                        } = le, n = BigInt(6), r = BigInt(11), s = BigInt(22), i = BigInt(23), a = BigInt(44), o = BigInt(88), c = t * t * t % e, u = c * c * t % e, l = Ge(u, ce) * u % e, h = Ge(l, ce) * u % e, f = Ge(h, oe) * c % e, d = Ge(f, r) * f % e, p = Ge(d, s) * d % e, g = Ge(p, a) * p % e, y = Ge(g, o) * g % e, m = Ge(y, a) * p % e, w = Ge(m, ce) * u % e, A = Ge(w, i) * d % e, b = Ge(A, n) * c % e, v = Ge(b, oe);
                        if (v * v % e !== t) throw new Error("Cannot find square root");
                        return v
                    }(ge(n));
                    const s = (r & ae) === ae;
                    if (e) s && (r = Me(-r));
                    else {
                        1 === (1 & t[0]) !== s && (r = Me(-r))
                    }
                    const i = new Ee(n, r);
                    return i.assertValidity(), i
                }
                static fromUncompressedHex(t) {
                    const e = Le(t.subarray(1, 33)),
                        n = Le(t.subarray(33, 65)),
                        r = new Ee(e, n);
                    return r.assertValidity(), r
                }
                static fromHex(t) {
                    const e = Ue(t),
                        n = e.length,
                        r = e[0];
                    if (n === de) return this.fromCompressedHex(e);
                    if (33 === n && (2 === r || 3 === r)) return this.fromCompressedHex(e);
                    if (65 === n && 4 === r) return this.fromUncompressedHex(e);
                    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${n}`)
                }
                static fromPrivateKey(t) {
                    return Ee.BASE.multiply(_e(t))
                }
                static fromSignature(t, e, n) {
                    const {
                        r: r,
                        s: s
                    } = Ye(e);
                    if (![0, 1, 2, 3].includes(n)) throw new Error("Cannot recover: invalid recovery bit");
                    const i = He(Ue(t)),
                        {
                            n: a
                        } = le,
                        o = 2 === n || 3 === n ? r + a : r,
                        c = je(o, a),
                        u = Me(-i * c, a),
                        l = Me(s * c, a),
                        h = 1 & n ? "03" : "02",
                        f = Ee.fromHex(h + Be(o)),
                        d = Ee.BASE.multiplyAndAddUnsafe(f, u, l);
                    if (!d) throw new Error("Cannot recover signature: point at infinify");
                    return d.assertValidity(), d
                }
                toRawBytes(t = !1) {
                    return De(this.toHex(t))
                }
                toHex(t = !1) {
                    const e = Be(this.x);
                    if (t) {
                        return `${this.hasEvenY()?"02":"03"}${e}`
                    }
                    return `04${e}${Be(this.y)}`
                }
                toHexX() {
                    return this.toHex(!0).slice(2)
                }
                toRawX() {
                    return this.toRawBytes(!0).slice(1)
                }
                assertValidity() {
                    const t = "Point is not on elliptic curve",
                        {
                            x: e,
                            y: n
                        } = this;
                    if (!Je(e) || !Je(n)) throw new Error(t);
                    const r = Me(n * n);
                    if (Me(r - ge(e)) !== ie) throw new Error(t)
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new Ee(this.x, Me(-this.y))
                }
                double() {
                    return Ae.fromAffine(this).double().toAffine()
                }
                add(t) {
                    return Ae.fromAffine(this).add(Ae.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return Ae.fromAffine(this).multiply(t, this).toAffine()
                }
                multiplyAndAddUnsafe(t, e, n) {
                    const r = Ae.fromAffine(this),
                        s = e === ie || e === ae || this !== Ee.BASE ? r.multiplyUnsafe(e) : r.multiply(e),
                        i = Ae.fromAffine(t).multiplyUnsafe(n),
                        a = s.add(i);
                    return a.equals(Ae.ZERO) ? void 0 : a.toAffine()
                }
            }

            function Pe(t) {
                return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t
            }

            function xe(t) {
                if (t.length < 2 || 2 !== t[0]) throw new Error(`Invalid signature integer tag: ${Ie(t)}`);
                const e = t[1],
                    n = t.subarray(2, e + 2);
                if (!e || n.length !== e) throw new Error("Invalid signature integer: wrong length");
                if (0 === n[0] && n[1] <= 127) throw new Error("Invalid signature integer: trailing length");
                return {
                    data: Le(n),
                    left: t.subarray(e + 2)
                }
            }
            Ee.BASE = new Ee(le.Gx, le.Gy), Ee.ZERO = new Ee(ie, ie);
            class Ce {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromCompact(t) {
                    const e = t instanceof Uint8Array,
                        n = "Signature.fromCompact";
                    if ("string" !== typeof t && !e) throw new TypeError(`${n}: Expected string or Uint8Array`);
                    const r = e ? Ie(t) : t;
                    if (128 !== r.length) throw new Error(`${n}: Expected 64-byte hex`);
                    return new Ce(Re(r.slice(0, 64)), Re(r.slice(64, 128)))
                }
                static fromDER(t) {
                    const e = t instanceof Uint8Array;
                    if ("string" !== typeof t && !e) throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
                    const {
                        r: n,
                        s: r
                    } = function(t) {
                        if (t.length < 2 || 48 != t[0]) throw new Error(`Invalid signature tag: ${Ie(t)}`);
                        if (t[1] !== t.length - 2) throw new Error("Invalid signature: incorrect length");
                        const {
                            data: e,
                            left: n
                        } = xe(t.subarray(2)), {
                            data: r,
                            left: s
                        } = xe(n);
                        if (s.length) throw new Error(`Invalid signature: left bytes after parsing: ${Ie(s)}`);
                        return {
                            r: e,
                            s: r
                        }
                    }(e ? t : De(t));
                    return new Ce(n, r)
                }
                static fromHex(t) {
                    return this.fromDER(t)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!ze(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
                    if (!ze(e)) throw new Error("Invalid Signature: s must be 0 < s < n")
                }
                hasHighS() {
                    const t = le.n >> ae;
                    return this.s > t
                }
                normalizeS() {
                    return this.hasHighS() ? new Ce(this.r, Me(-this.s, le.n)) : this
                }
                toDERRawBytes() {
                    return De(this.toDERHex())
                }
                toDERHex() {
                    const t = Pe(Se(this.s)),
                        e = Pe(Se(this.r)),
                        n = t.length / 2,
                        r = e.length / 2,
                        s = Se(n),
                        i = Se(r);
                    return `30${Se(r+n+4)}02${i}${e}02${s}${t}`
                }
                toRawBytes() {
                    return this.toDERRawBytes()
                }
                toHex() {
                    return this.toDERHex()
                }
                toCompactRawBytes() {
                    return De(this.toCompactHex())
                }
                toCompactHex() {
                    return Be(this.r) + Be(this.s)
                }
            }

            function ke(...t) {
                if (!t.every((t => t instanceof Uint8Array))) throw new Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                const e = t.reduce(((t, e) => t + e.length), 0),
                    n = new Uint8Array(e);
                for (let r = 0, s = 0; r < t.length; r++) {
                    const e = t[r];
                    n.set(e, s), s += e.length
                }
                return n
            }
            const Oe = Array.from({
                length: 256
            }, ((t, e) => e.toString(16).padStart(2, "0")));

            function Ie(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
                let e = "";
                for (let n = 0; n < t.length; n++) e += Oe[t[n]];
                return e
            }
            const Ne = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");

            function Be(t) {
                if ("bigint" !== typeof t) throw new Error("Expected bigint");
                if (!(ie <= t && t < Ne)) throw new Error("Expected number 0 <= n < 2^256");
                return t.toString(16).padStart(64, "0")
            }

            function Te(t) {
                const e = De(Be(t));
                if (32 !== e.length) throw new Error("Error: expected 32 bytes");
                return e
            }

            function Se(t) {
                const e = t.toString(16);
                return 1 & e.length ? `0${e}` : e
            }

            function Re(t) {
                if ("string" !== typeof t) throw new TypeError("hexToNumber: expected string, got " + typeof t);
                return BigInt(`0x${t}`)
            }

            function De(t) {
                if ("string" !== typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + t.length);
                const e = new Uint8Array(t.length / 2);
                for (let n = 0; n < e.length; n++) {
                    const r = 2 * n,
                        s = t.slice(r, r + 2),
                        i = Number.parseInt(s, 16);
                    if (Number.isNaN(i) || i < 0) throw new Error("Invalid byte sequence");
                    e[n] = i
                }
                return e
            }

            function Le(t) {
                return Re(Ie(t))
            }

            function Ue(t) {
                return t instanceof Uint8Array ? Uint8Array.from(t) : De(t)
            }

            function Fe(t) {
                if ("number" === typeof t && Number.isSafeInteger(t) && t > 0) return BigInt(t);
                if ("bigint" === typeof t && ze(t)) return t;
                throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")
            }

            function Me(t, e = le.P) {
                const n = t % e;
                return n >= ie ? n : e + n
            }

            function Ge(t, e) {
                const {
                    P: n
                } = le;
                let r = t;
                for (; e-- > ie;) r *= r, r %= n;
                return r
            }

            function je(t, e = le.P) {
                if (t === ie || e <= ie) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let n = Me(t, e),
                    r = e,
                    s = ie,
                    i = ae,
                    a = ae,
                    o = ie;
                for (; n !== ie;) {
                    const t = r / n,
                        e = r % n,
                        c = s - a * t,
                        u = i - o * t;
                    r = n, n = e, s = a, i = o, a = c, o = u
                }
                if (r !== ae) throw new Error("invert: does not exist");
                return Me(s, e)
            }

            function He(t, e = !1) {
                const n = function(t) {
                    const e = 8 * t.length - 256,
                        n = Le(t);
                    return e > 0 ? n >> BigInt(e) : n
                }(t);
                if (e) return n;
                const {
                    n: r
                } = le;
                return n >= r ? n - r : n
            }
            let Qe, Ve;
            class Ke {
                constructor(t, e) {
                    if (this.hashLen = t, this.qByteLen = e, "number" !== typeof t || t < 2) throw new Error("hashLen must be a number");
                    if ("number" !== typeof e || e < 2) throw new Error("qByteLen must be a number");
                    this.v = new Uint8Array(t).fill(1), this.k = new Uint8Array(t).fill(0), this.counter = 0
                }
                hmac(...t) {
                    return an.hmacSha256(this.k, ...t)
                }
                hmacSync(...t) {
                    return Ve(this.k, ...t)
                }
                checkSync() {
                    if ("function" !== typeof Ve) throw new me("hmacSha256Sync needs to be set")
                }
                incr() {
                    if (this.counter >= 1e3) throw new Error("Tried 1,000 k values for sign(), all were invalid");
                    this.counter += 1
                }
                async reseed(t = new Uint8Array) {
                    this.k = await this.hmac(this.v, Uint8Array.from([0]), t), this.v = await this.hmac(this.v), 0 !== t.length && (this.k = await this.hmac(this.v, Uint8Array.from([1]), t), this.v = await this.hmac(this.v))
                }
                reseedSync(t = new Uint8Array) {
                    this.checkSync(), this.k = this.hmacSync(this.v, Uint8Array.from([0]), t), this.v = this.hmacSync(this.v), 0 !== t.length && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), t), this.v = this.hmacSync(this.v))
                }
                async generate() {
                    this.incr();
                    let t = 0;
                    const e = [];
                    for (; t < this.qByteLen;) {
                        this.v = await this.hmac(this.v);
                        const n = this.v.slice();
                        e.push(n), t += this.v.length
                    }
                    return ke(...e)
                }
                generateSync() {
                    this.checkSync(), this.incr();
                    let t = 0;
                    const e = [];
                    for (; t < this.qByteLen;) {
                        this.v = this.hmacSync(this.v);
                        const n = this.v.slice();
                        e.push(n), t += this.v.length
                    }
                    return ke(...e)
                }
            }

            function ze(t) {
                return ie < t && t < le.n
            }

            function Je(t) {
                return ie < t && t < le.P
            }

            function Ze(t, e, n, r = !0) {
                const {
                    n: s
                } = le, i = He(t, !0);
                if (!ze(i)) return;
                const a = je(i, s),
                    o = Ee.BASE.multiply(i),
                    c = Me(o.x, s);
                if (c === ie) return;
                const u = Me(a * Me(e + n * c, s), s);
                if (u === ie) return;
                let l = new Ce(c, u),
                    h = (o.x === l.r ? 0 : 2) | Number(o.y & ae);
                return r && l.hasHighS() && (l = l.normalizeS(), h ^= 1), {
                    sig: l,
                    recovery: h
                }
            }

            function _e(t) {
                let e;
                if ("bigint" === typeof t) e = t;
                else if ("number" === typeof t && Number.isSafeInteger(t) && t > 0) e = BigInt(t);
                else if ("string" === typeof t) {
                    if (64 !== t.length) throw new Error("Expected 32 bytes of private key");
                    e = Re(t)
                } else {
                    if (!(t instanceof Uint8Array)) throw new TypeError("Expected valid private key");
                    if (t.length !== pe) throw new Error("Expected 32 bytes of private key");
                    e = Le(t)
                }
                if (!ze(e)) throw new Error("Expected private key: 0 < key < n");
                return e
            }

            function qe(t) {
                return t instanceof Ee ? (t.assertValidity(), t) : Ee.fromHex(t)
            }

            function Ye(t) {
                if (t instanceof Ce) return t.assertValidity(), t;
                try {
                    return Ce.fromDER(t)
                } catch (e) {
                    return Ce.fromCompact(t)
                }
            }

            function We(t) {
                const e = t instanceof Uint8Array,
                    n = "string" === typeof t,
                    r = (e || n) && t.length;
                return e ? 33 === r || 65 === r : n ? 66 === r || 130 === r : t instanceof Ee
            }

            function Xe(t) {
                return Le(t.length > de ? t.slice(0, de) : t)
            }

            function $e(t) {
                const e = Xe(t),
                    n = Me(e, le.n);
                return tn(n < ie ? e : n)
            }

            function tn(t) {
                return Te(t)
            }

            function en(t, e, n) {
                if (null == t) throw new Error(`sign: expected valid message hash, not "${t}"`);
                const r = Ue(t),
                    s = _e(e),
                    i = [tn(s), $e(r)];
                if (null != n) {
                    !0 === n && (n = an.randomBytes(de));
                    const t = Ue(n);
                    if (t.length !== de) throw new Error("sign: Expected 32 bytes of extra data");
                    i.push(t)
                }
                return {
                    seed: ke(...i),
                    m: Xe(r),
                    d: s
                }
            }

            function nn(t, e) {
                const {
                    sig: n,
                    recovery: r
                } = t, {
                    der: s,
                    recovered: i
                } = Object.assign({
                    canonical: !0,
                    der: !0
                }, e), a = s ? n.toDERRawBytes() : n.toCompactRawBytes();
                return i ? [a, r] : a
            }
            Ee.BASE._setWindowSize(8);
            const rn = {
                    node: se,
                    web: "object" === typeof self && "crypto" in self ? self.crypto : void 0
                },
                sn = {},
                an = {
                    bytesToHex: Ie,
                    hexToBytes: De,
                    concatBytes: ke,
                    mod: Me,
                    invert: je,
                    isValidPrivateKey(t) {
                        try {
                            return _e(t), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    _bigintTo32Bytes: Te,
                    _normalizePrivateKey: _e,
                    hashToPrivateKey: t => {
                        if ((t = Ue(t)).length < 40 || t.length > 1024) throw new Error("Expected valid bytes of private key as per FIPS 186");
                        return Te(Me(Le(t), le.n - ae) + ae)
                    },
                    randomBytes: (t = 32) => {
                        if (rn.web) return rn.web.getRandomValues(new Uint8Array(t));
                        if (rn.node) {
                            const {
                                randomBytes: e
                            } = rn.node;
                            return Uint8Array.from(e(t))
                        }
                        throw new Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => an.hashToPrivateKey(an.randomBytes(40)),
                    precompute(t = 8, e = Ee.BASE) {
                        const n = e === Ee.BASE ? e : new Ee(e.x, e.y);
                        return n._setWindowSize(t), n.multiply(ce), n
                    },
                    sha256: async (...t) => {
                        if (rn.web) {
                            const e = await rn.web.subtle.digest("SHA-256", ke(...t));
                            return new Uint8Array(e)
                        }
                        if (rn.node) {
                            const {
                                createHash: e
                            } = rn.node, n = e("sha256");
                            return t.forEach((t => n.update(t))), Uint8Array.from(n.digest())
                        }
                        throw new Error("The environment doesn't have sha256 function")
                    },
                    hmacSha256: async (t, ...e) => {
                        if (rn.web) {
                            const n = await rn.web.subtle.importKey("raw", t, {
                                    name: "HMAC",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, !1, ["sign"]),
                                r = ke(...e),
                                s = await rn.web.subtle.sign("HMAC", n, r);
                            return new Uint8Array(s)
                        }
                        if (rn.node) {
                            const {
                                createHmac: n
                            } = rn.node, r = n("sha256", t);
                            return e.forEach((t => r.update(t))), Uint8Array.from(r.digest())
                        }
                        throw new Error("The environment doesn't have hmac-sha256 function")
                    },
                    sha256Sync: void 0,
                    hmacSha256Sync: void 0,
                    taggedHash: async (t, ...e) => {
                        let n = sn[t];
                        if (void 0 === n) {
                            const e = await an.sha256(Uint8Array.from(t, (t => t.charCodeAt(0))));
                            n = ke(e, e), sn[t] = n
                        }
                        return an.sha256(n, ...e)
                    },
                    taggedHashSync: (t, ...e) => {
                        if ("function" !== typeof Qe) throw new me("sha256Sync is undefined, you need to set it");
                        let n = sn[t];
                        if (void 0 === n) {
                            const e = Qe(Uint8Array.from(t, (t => t.charCodeAt(0))));
                            n = ke(e, e), sn[t] = n
                        }
                        return Qe(n, ...e)
                    },
                    _JacobianPoint: Ae
                };
            Object.defineProperties(an, {
                sha256Sync: {
                    configurable: !1,
                    get: () => Qe,
                    set(t) {
                        Qe || (Qe = t)
                    }
                },
                hmacSha256Sync: {
                    configurable: !1,
                    get: () => Ve,
                    set(t) {
                        Ve || (Ve = t)
                    }
                }
            });
            var on = n(26678),
                cn = n(49606);
            class un extends cn.kb {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, on.ZP.hash(t);
                    const n = (0, cn.O0)(e);
                    if (this.iHash = t.create(), !(this.iHash instanceof cn.kb)) throw new TypeError("Expected instance of class which extends utils.Hash");
                    const r = this.blockLen = this.iHash.blockLen;
                    this.outputLen = this.iHash.outputLen;
                    const s = new Uint8Array(r);
                    s.set(n.length > this.iHash.blockLen ? t.create().update(n).digest() : n);
                    for (let i = 0; i < s.length; i++) s[i] ^= 54;
                    this.iHash.update(s), this.oHash = t.create();
                    for (let i = 0; i < s.length; i++) s[i] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(t) {
                    return on.ZP.exists(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    on.ZP.exists(this), on.ZP.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    const t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: e,
                        iHash: n,
                        finished: r,
                        destroyed: s,
                        blockLen: i,
                        outputLen: a
                    } = this;
                    return t.finished = r, t.destroyed = s, t.blockLen = i, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            const ln = (t, e, n) => new un(t, e).update(n).digest();
            ln.create = (t, e) => new un(t, e);
            class hn extends cn.kb {
                constructor(t, e, n, r) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, cn.GL)(this.buffer)
                }
                update(t) {
                    on.ZP.exists(this);
                    const {
                        view: e,
                        buffer: n,
                        blockLen: r
                    } = this, s = (t = (0, cn.O0)(t)).length;
                    for (let i = 0; i < s;) {
                        const a = Math.min(r - this.pos, s - i);
                        if (a !== r) n.set(t.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === r && (this.process(e, 0), this.pos = 0);
                        else {
                            const e = (0, cn.GL)(t);
                            for (; r <= s - i; i += r) this.process(e, i)
                        }
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    on.ZP.exists(this), on.ZP.output(t, this), this.finished = !0;
                    const {
                        buffer: e,
                        view: n,
                        blockLen: r,
                        isLE: s
                    } = this;
                    let {
                        pos: i
                    } = this;
                    e[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > r - i && (this.process(n, 0), i = 0);
                    for (let o = i; o < r; o++) e[o] = 0;
                    ! function(t, e, n, r) {
                        if ("function" === typeof t.setBigUint64) return t.setBigUint64(e, n, r);
                        const s = BigInt(32),
                            i = BigInt(4294967295),
                            a = Number(n >> s & i),
                            o = Number(n & i),
                            c = r ? 4 : 0,
                            u = r ? 0 : 4;
                        t.setUint32(e + c, a, r), t.setUint32(e + u, o, r)
                    }(n, r - 8, BigInt(8 * this.length), s), this.process(n, 0);
                    const a = (0, cn.GL)(t);
                    this.get().forEach(((t, e) => a.setUint32(4 * e, t, s)))
                }
                digest() {
                    const {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    const n = t.slice(0, e);
                    return this.destroy(), n
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    const {
                        blockLen: e,
                        buffer: n,
                        length: r,
                        finished: s,
                        destroyed: i,
                        pos: a
                    } = this;
                    return t.length = r, t.pos = a, t.finished = s, t.destroyed = i, r % e && t.buffer.set(n), t
                }
            }
            const fn = (t, e, n) => t & e ^ t & n ^ e & n,
                dn = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                pn = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                gn = new Uint32Array(64);
            class yn extends hn {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | pn[0], this.B = 0 | pn[1], this.C = 0 | pn[2], this.D = 0 | pn[3], this.E = 0 | pn[4], this.F = 0 | pn[5], this.G = 0 | pn[6], this.H = 0 | pn[7]
                }
                get() {
                    const {
                        A: t,
                        B: e,
                        C: n,
                        D: r,
                        E: s,
                        F: i,
                        G: a,
                        H: o
                    } = this;
                    return [t, e, n, r, s, i, a, o]
                }
                set(t, e, n, r, s, i, a, o) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | n, this.D = 0 | r, this.E = 0 | s, this.F = 0 | i, this.G = 0 | a, this.H = 0 | o
                }
                process(t, e) {
                    for (let h = 0; h < 16; h++, e += 4) gn[h] = t.getUint32(e, !1);
                    for (let h = 16; h < 64; h++) {
                        const t = gn[h - 15],
                            e = gn[h - 2],
                            n = (0, cn.np)(t, 7) ^ (0, cn.np)(t, 18) ^ t >>> 3,
                            r = (0, cn.np)(e, 17) ^ (0, cn.np)(e, 19) ^ e >>> 10;
                        gn[h] = r + gn[h - 7] + n + gn[h - 16] | 0
                    }
                    let {
                        A: n,
                        B: r,
                        C: s,
                        D: i,
                        E: a,
                        F: o,
                        G: c,
                        H: u
                    } = this;
                    for (let h = 0; h < 64; h++) {
                        const t = u + ((0, cn.np)(a, 6) ^ (0, cn.np)(a, 11) ^ (0, cn.np)(a, 25)) + ((l = a) & o ^ ~l & c) + dn[h] + gn[h] | 0,
                            e = ((0, cn.np)(n, 2) ^ (0, cn.np)(n, 13) ^ (0, cn.np)(n, 22)) + fn(n, r, s) | 0;
                        u = c, c = o, o = a, a = i + t | 0, i = s, s = r, r = n, n = t + e | 0
                    }
                    var l;
                    n = n + this.A | 0, r = r + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, o = o + this.F | 0, c = c + this.G | 0, u = u + this.H | 0, this.set(n, r, s, i, a, o, c, u)
                }
                roundClean() {
                    gn.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            const mn = (0, cn.hE)((() => new yn));
            var wn = n(79903);
            const [An, bn] = wn.ZP.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t => BigInt(t)))), vn = new Uint32Array(80), En = new Uint32Array(80);
            class Pn extends hn {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    const {
                        Ah: t,
                        Al: e,
                        Bh: n,
                        Bl: r,
                        Ch: s,
                        Cl: i,
                        Dh: a,
                        Dl: o,
                        Eh: c,
                        El: u,
                        Fh: l,
                        Fl: h,
                        Gh: f,
                        Gl: d,
                        Hh: p,
                        Hl: g
                    } = this;
                    return [t, e, n, r, s, i, a, o, c, u, l, h, f, d, p, g]
                }
                set(t, e, n, r, s, i, a, o, c, u, l, h, f, d, p, g) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | n, this.Bl = 0 | r, this.Ch = 0 | s, this.Cl = 0 | i, this.Dh = 0 | a, this.Dl = 0 | o, this.Eh = 0 | c, this.El = 0 | u, this.Fh = 0 | l, this.Fl = 0 | h, this.Gh = 0 | f, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | g
                }
                process(t, e) {
                    for (let w = 0; w < 16; w++, e += 4) vn[w] = t.getUint32(e), En[w] = t.getUint32(e += 4);
                    for (let w = 16; w < 80; w++) {
                        const t = 0 | vn[w - 15],
                            e = 0 | En[w - 15],
                            n = wn.ZP.rotrSH(t, e, 1) ^ wn.ZP.rotrSH(t, e, 8) ^ wn.ZP.shrSH(t, e, 7),
                            r = wn.ZP.rotrSL(t, e, 1) ^ wn.ZP.rotrSL(t, e, 8) ^ wn.ZP.shrSL(t, e, 7),
                            s = 0 | vn[w - 2],
                            i = 0 | En[w - 2],
                            a = wn.ZP.rotrSH(s, i, 19) ^ wn.ZP.rotrBH(s, i, 61) ^ wn.ZP.shrSH(s, i, 6),
                            o = wn.ZP.rotrSL(s, i, 19) ^ wn.ZP.rotrBL(s, i, 61) ^ wn.ZP.shrSL(s, i, 6),
                            c = wn.ZP.add4L(r, o, En[w - 7], En[w - 16]),
                            u = wn.ZP.add4H(c, n, a, vn[w - 7], vn[w - 16]);
                        vn[w] = 0 | u, En[w] = 0 | c
                    }
                    let {
                        Ah: n,
                        Al: r,
                        Bh: s,
                        Bl: i,
                        Ch: a,
                        Cl: o,
                        Dh: c,
                        Dl: u,
                        Eh: l,
                        El: h,
                        Fh: f,
                        Fl: d,
                        Gh: p,
                        Gl: g,
                        Hh: y,
                        Hl: m
                    } = this;
                    for (let w = 0; w < 80; w++) {
                        const t = wn.ZP.rotrSH(l, h, 14) ^ wn.ZP.rotrSH(l, h, 18) ^ wn.ZP.rotrBH(l, h, 41),
                            e = wn.ZP.rotrSL(l, h, 14) ^ wn.ZP.rotrSL(l, h, 18) ^ wn.ZP.rotrBL(l, h, 41),
                            A = l & f ^ ~l & p,
                            b = h & d ^ ~h & g,
                            v = wn.ZP.add5L(m, e, b, bn[w], En[w]),
                            E = wn.ZP.add5H(v, y, t, A, An[w], vn[w]),
                            P = 0 | v,
                            x = wn.ZP.rotrSH(n, r, 28) ^ wn.ZP.rotrBH(n, r, 34) ^ wn.ZP.rotrBH(n, r, 39),
                            C = wn.ZP.rotrSL(n, r, 28) ^ wn.ZP.rotrBL(n, r, 34) ^ wn.ZP.rotrBL(n, r, 39),
                            k = n & s ^ n & a ^ s & a,
                            O = r & i ^ r & o ^ i & o;
                        y = 0 | p, m = 0 | g, p = 0 | f, g = 0 | d, f = 0 | l, d = 0 | h, ({
                            h: l,
                            l: h
                        } = wn.ZP.add(0 | c, 0 | u, 0 | E, 0 | P)), c = 0 | a, u = 0 | o, a = 0 | s, o = 0 | i, s = 0 | n, i = 0 | r;
                        const I = wn.ZP.add3L(P, C, O);
                        n = wn.ZP.add3H(I, E, x, k), r = 0 | I
                    }({
                        h: n,
                        l: r
                    } = wn.ZP.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)), ({
                        h: s,
                        l: i
                    } = wn.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | i)), ({
                        h: a,
                        l: o
                    } = wn.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)), ({
                        h: c,
                        l: u
                    } = wn.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | u)), ({
                        h: l,
                        l: h
                    } = wn.ZP.add(0 | this.Eh, 0 | this.El, 0 | l, 0 | h)), ({
                        h: f,
                        l: d
                    } = wn.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | d)), ({
                        h: p,
                        l: g
                    } = wn.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)), ({
                        h: y,
                        l: m
                    } = wn.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | m)), this.set(n, r, s, i, a, o, c, u, l, h, f, d, p, g, y, m)
                }
                roundClean() {
                    vn.fill(0), En.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            class xn extends Pn {
                constructor() {
                    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32
                }
            }
            class Cn extends Pn {
                constructor() {
                    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48
                }
            }
            const kn = (0, cn.hE)((() => new Pn));
            (0, cn.hE)((() => new xn)), (0, cn.hE)((() => new Cn));
            const On = function() {
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                throw new Error("unable to locate global object")
            }();
            On.crypto || On.msCrypto;
            let In = !1;
            const Nn = function(t, e, n) {
                return function(t, e) {
                    const n = {
                        sha256: mn,
                        sha512: kn
                    }[t];
                    return (0, r.en)(null != n, "invalid hmac algorithm", "algorithm", t), ln.create(n, e)
                }(t, e).update(n).digest()
            };
            let Bn = Nn;

            function Tn(t, e, n) {
                const r = (0, c.Pw)(e, "key"),
                    s = (0, c.Pw)(n, "data");
                return (0, c.Dv)(Bn(t, r, s))
            }
            Tn._ = Nn, Tn.lock = function() {
                In = !0
            }, Tn.register = function(t) {
                if (In) throw new Error("computeHmac is locked");
                Bn = t
            }, Object.freeze(Tn), an.hmacSha256Sync = function(t, ...e) {
                return (0, c.Pw)(Tn("sha256", t, (0, c.zo)(e)))
            };
            class Sn {#
                O;
                constructor(t) {
                    (0, r.en)(32 === (0, c.M5)(t), "invalid private key", "privateKey", "[REDACTED]"), this.#O = (0, c.Dv)(t)
                }
                get privateKey() {
                    return this.#O
                }
                get publicKey() {
                    return Sn.computePublicKey(this.#O)
                }
                get compressedPublicKey() {
                    return Sn.computePublicKey(this.#O, !0)
                }
                sign(t) {
                    (0, r.en)(32 === (0, c.M5)(t), "invalid digest length", "digest", t);
                    const [e, n] = function(t, e, n = {}) {
                        const {
                            seed: r,
                            m: s,
                            d: i
                        } = en(t, e, n.extraEntropy), a = new Ke(32, pe);
                        let o;
                        for (a.reseedSync(r); !(o = Ze(a.generateSync(), s, i, n.canonical));) a.reseedSync();
                        return nn(o, n)
                    }((0, c.h_)(t), (0, c.h_)(this.#O), {
                        recovered: !0,
                        canonical: !0
                    }), s = Ce.fromHex(e);
                    return ne.from({
                        r: (0, u.m9)("0x" + s.r.toString(16), 32),
                        s: (0, u.m9)("0x" + s.s.toString(16), 32),
                        v: n ? 28 : 27
                    })
                }
                computeSharedSecret(t) {
                    const e = Sn.computePublicKey(t);
                    return (0, c.Dv)(function(t, e, n = !1) {
                        if (We(t)) throw new TypeError("getSharedSecret: first arg must be private key");
                        if (!We(e)) throw new TypeError("getSharedSecret: second arg must be public key");
                        const r = qe(e);
                        return r.assertValidity(), r.multiply(_e(t)).toRawBytes(n)
                    }((0, c.h_)(this.#O), (0, c.Pw)(e)))
                }
                static computePublicKey(t, e) {
                    let n = (0, c.Pw)(t, "key");
                    if (32 === n.length) {
                        const t = function(t, e = !1) {
                            return Ee.fromPrivateKey(t).toRawBytes(e)
                        }(n, !!e);
                        return (0, c.Dv)(t)
                    }
                    if (64 === n.length) {
                        const t = new Uint8Array(65);
                        t[0] = 4, t.set(n, 1), n = t
                    }
                    const r = Ee.fromHex(n);
                    return (0, c.Dv)(r.toRawBytes(e))
                }
                static recoverPublicKey(t, e) {
                    (0, r.en)(32 === (0, c.M5)(t), "invalid digest length", "digest", t);
                    const n = ne.from(e),
                        s = Ce.fromCompact((0, c.h_)((0, c.zo)([n.r, n.s]))).toDERRawBytes(),
                        i = function(t, e, n, r = !1) {
                            return Ee.fromSignature(t, e, n).toRawBytes(r)
                        }((0, c.h_)(t), s, n.yParity);
                    return (0, r.en)(null != i, "invalid signature for digest", "signature", e), (0, c.Dv)(i)
                }
                static addPoints(t, e, n) {
                    const r = Ee.fromHex(Sn.computePublicKey(t).substring(2)),
                        s = Ee.fromHex(Sn.computePublicKey(e).substring(2));
                    return "0x" + r.add(s).toHex(!!n)
                }
            }

            function Rn(t) {
                let e = t.toString(16);
                for (; e.length < 2;) e = "0" + e;
                return "0x" + e
            }

            function Dn(t, e, n) {
                let r = 0;
                for (let s = 0; s < n; s++) r = 256 * r + t[e + s];
                return r
            }

            function Ln(t, e, n, s) {
                const i = [];
                for (; n < e + 1 + s;) {
                    const a = Un(t, n);
                    i.push(a.result), n += a.consumed, (0, r.hu)(n <= e + 1 + s, "child data too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: s,
                        offset: e
                    })
                }
                return {
                    consumed: 1 + s,
                    result: i
                }
            }

            function Un(t, e) {
                (0, r.hu)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
                    buffer: t,
                    length: 0,
                    offset: 1
                });
                const n = e => {
                    (0, r.hu)(e <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: t.length,
                        offset: e
                    })
                };
                if (t[e] >= 248) {
                    const r = t[e] - 247;
                    n(e + 1 + r);
                    const s = Dn(t, e + 1, r);
                    return n(e + 1 + r + s), Ln(t, e, e + 1 + r, r + s)
                }
                if (t[e] >= 192) {
                    const r = t[e] - 192;
                    return n(e + 1 + r), Ln(t, e, e + 1, r)
                }
                if (t[e] >= 184) {
                    const r = t[e] - 183;
                    n(e + 1 + r);
                    const s = Dn(t, e + 1, r);
                    n(e + 1 + r + s);
                    return {
                        consumed: 1 + r + s,
                        result: (0, c.Dv)(t.slice(e + 1 + r, e + 1 + r + s))
                    }
                }
                if (t[e] >= 128) {
                    const r = t[e] - 128;
                    n(e + 1 + r);
                    return {
                        consumed: 1 + r,
                        result: (0, c.Dv)(t.slice(e + 1, e + 1 + r))
                    }
                }
                return {
                    consumed: 1,
                    result: Rn(t[e])
                }
            }

            function Fn(t) {
                const e = (0, c.Pw)(t, "data"),
                    n = Un(e, 0);
                return (0, r.en)(n.consumed === e.length, "unexpected junk after rlp payload", "data", t), n.result
            }

            function Mn(t) {
                const e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }

            function Gn(t) {
                if (Array.isArray(t)) {
                    let e = [];
                    if (t.forEach((function(t) {
                            e = e.concat(Gn(t))
                        })), e.length <= 55) return e.unshift(192 + e.length), e;
                    const n = Mn(e.length);
                    return n.unshift(247 + n.length), n.concat(e)
                }
                const e = Array.prototype.slice.call((0, c.Pw)(t, "object"));
                if (1 === e.length && e[0] <= 127) return e;
                if (e.length <= 55) return e.unshift(128 + e.length), e;
                const n = Mn(e.length);
                return n.unshift(183 + n.length), n.concat(e)
            }
            const jn = "0123456789abcdef";

            function Hn(t) {
                let e = "0x";
                for (const n of Gn(t)) e += jn[n >> 4], e += jn[15 & n];
                return e
            }

            function Qn(t, e) {
                return function(t) {
                    let e;
                    return e = "string" === typeof t ? Sn.computePublicKey(t, !1) : t.publicKey, (0, i.K)((0, o.w)("0x" + e.substring(4)).substring(26))
                }(Sn.recoverPublicKey(t, e))
            }
            const Vn = BigInt(0),
                Kn = BigInt(2),
                zn = BigInt(27),
                Jn = BigInt(28),
                Zn = BigInt(35),
                _n = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function qn(t) {
                return "0x" === t ? null : (0, i.K)(t)
            }

            function Yn(t, e) {
                try {
                    return (0, k.z)(t)
                } catch (n) {
                    (0, r.en)(!1, n.message, e, t)
                }
            }

            function Wn(t, e) {
                return "0x" === t ? 0 : (0, u.Dx)(t, e)
            }

            function Xn(t, e) {
                if ("0x" === t) return Vn;
                const n = (0, u.yT)(t, e);
                return (0, r.en)(n <= _n, "value exceeds uint size", e, n), n
            }

            function $n(t, e) {
                const n = (0, u.yT)(t, "value"),
                    s = (0, u.ot)(n);
                return (0, r.en)(s.length <= 32, "value too large", `tx.${e}`, n), s
            }

            function tr(t) {
                return (0, k.z)(t).map((t => [t.address, t.storageKeys]))
            }

            function er(t, e) {
                const n = [$n(t.nonce || 0, "nonce"), $n(t.gasPrice || 0, "gasPrice"), $n(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, i.K)(t.to) : "0x", $n(t.value || 0, "value"), t.data || "0x"];
                let s = Vn;
                if (t.chainId != Vn) s = (0, u.yT)(t.chainId, "tx.chainId"), (0, r.en)(!e || null == e.networkV || e.legacyChainId === s, "tx.chainId/sig.v mismatch", "sig", e);
                else if (t.signature) {
                    const e = t.signature.legacyChainId;
                    null != e && (s = e)
                }
                if (!e) return s !== Vn && (n.push((0, u.ot)(s)), n.push("0x"), n.push("0x")), Hn(n);
                let a = BigInt(27 + e.yParity);
                return s !== Vn ? a = ne.getChainIdV(s, e.v) : BigInt(e.v) !== a && (0, r.en)(!1, "tx.chainId/sig.v mismatch", "sig", e), n.push((0, u.ot)(a)), n.push((0, u.ot)(e.r)), n.push((0, u.ot)(e.s)), Hn(n)
            }

            function nr(t, e) {
                let n;
                try {
                    if (n = Wn(e[0], "yParity"), 0 !== n && 1 !== n) throw new Error("bad yParity")
                } catch (o) {
                    (0, r.en)(!1, "invalid yParity", "yParity", e[0])
                }
                const s = (0, c.U3)(e[1], 32),
                    i = (0, c.U3)(e[2], 32),
                    a = ne.from({
                        r: s,
                        s: i,
                        yParity: n
                    });
                t.signature = a
            }

            function rr(t, e) {
                const n = [$n(t.chainId || 0, "chainId"), $n(t.nonce || 0, "nonce"), $n(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), $n(t.maxFeePerGas || 0, "maxFeePerGas"), $n(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, i.K)(t.to) : "0x", $n(t.value || 0, "value"), t.data || "0x", tr(t.accessList || [])];
                return e && (n.push($n(e.yParity, "yParity")), n.push((0, u.ot)(e.r)), n.push((0, u.ot)(e.s))), (0, c.zo)(["0x02", Hn(n)])
            }

            function sr(t, e) {
                const n = [$n(t.chainId || 0, "chainId"), $n(t.nonce || 0, "nonce"), $n(t.gasPrice || 0, "gasPrice"), $n(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, i.K)(t.to) : "0x", $n(t.value || 0, "value"), t.data || "0x", tr(t.accessList || [])];
                return e && (n.push($n(e.yParity, "recoveryParam")), n.push((0, u.ot)(e.r)), n.push((0, u.ot)(e.s))), (0, c.zo)(["0x01", Hn(n)])
            }
            class ir {#
                I;#
                N;#
                n;#
                B;#
                T;#
                S;#
                R;#
                D;#
                L;#
                U;#
                F;#
                M;
                get type() {
                    return this.#I
                }
                set type(t) {
                    switch (t) {
                        case null:
                            this.#I = null;
                            break;
                        case 0:
                        case "legacy":
                            this.#I = 0;
                            break;
                        case 1:
                        case "berlin":
                        case "eip-2930":
                            this.#I = 1;
                            break;
                        case 2:
                        case "london":
                        case "eip-1559":
                            this.#I = 2;
                            break;
                        default:
                            (0, r.en)(!1, "unsupported transaction type", "type", t)
                    }
                }
                get typeName() {
                    switch (this.type) {
                        case 0:
                            return "legacy";
                        case 1:
                            return "eip-2930";
                        case 2:
                            return "eip-1559"
                    }
                    return null
                }
                get to() {
                    return this.#N
                }
                set to(t) {
                    this.#N = null == t ? null : (0, i.K)(t)
                }
                get nonce() {
                    return this.#B
                }
                set nonce(t) {
                    this.#B = (0, u.Dx)(t, "value")
                }
                get gasLimit() {
                    return this.#T
                }
                set gasLimit(t) {
                    this.#T = (0, u.yT)(t)
                }
                get gasPrice() {
                    const t = this.#S;
                    return null != t || 0 !== this.type && 1 !== this.type ? t : Vn
                }
                set gasPrice(t) {
                    this.#S = null == t ? null : (0, u.yT)(t, "gasPrice")
                }
                get maxPriorityFeePerGas() {
                    const t = this.#R;
                    return null == t ? 2 === this.type ? Vn : null : t
                }
                set maxPriorityFeePerGas(t) {
                    this.#R = null == t ? null : (0, u.yT)(t, "maxPriorityFeePerGas")
                }
                get maxFeePerGas() {
                    const t = this.#D;
                    return null == t ? 2 === this.type ? Vn : null : t
                }
                set maxFeePerGas(t) {
                    this.#D = null == t ? null : (0, u.yT)(t, "maxFeePerGas")
                }
                get data() {
                    return this.#n
                }
                set data(t) {
                    this.#n = (0, c.Dv)(t)
                }
                get value() {
                    return this.#L
                }
                set value(t) {
                    this.#L = (0, u.yT)(t, "value")
                }
                get chainId() {
                    return this.#U
                }
                set chainId(t) {
                    this.#U = (0, u.yT)(t)
                }
                get signature() {
                    return this.#F || null
                }
                set signature(t) {
                    this.#F = null == t ? null : ne.from(t)
                }
                get accessList() {
                    const t = this.#M || null;
                    return null == t ? 1 === this.type || 2 === this.type ? [] : null : t
                }
                set accessList(t) {
                    this.#M = null == t ? null : (0, k.z)(t)
                }
                constructor() {
                    this.#I = null, this.#N = null, this.#B = 0, this.#T = BigInt(0), this.#S = null, this.#R = null, this.#D = null, this.#n = "0x", this.#L = BigInt(0), this.#U = BigInt(0), this.#F = null, this.#M = null
                }
                get hash() {
                    return null == this.signature ? null : (0, o.w)(this.serialized)
                }
                get unsignedHash() {
                    return (0, o.w)(this.unsignedSerialized)
                }
                get from() {
                    return null == this.signature ? null : Qn(this.unsignedHash, this.signature)
                }
                get fromPublicKey() {
                    return null == this.signature ? null : Sn.recoverPublicKey(this.unsignedHash, this.signature)
                }
                isSigned() {
                    return null != this.signature
                }
                get serialized() {
                    switch ((0, r.hu)(null != this.signature, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    }), this.inferType()) {
                        case 0:
                            return er(this, this.signature);
                        case 1:
                            return sr(this, this.signature);
                        case 2:
                            return rr(this, this.signature)
                    }(0, r.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    })
                }
                get unsignedSerialized() {
                    switch (this.inferType()) {
                        case 0:
                            return er(this);
                        case 1:
                            return sr(this);
                        case 2:
                            return rr(this)
                    }(0, r.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                        operation: ".unsignedSerialized"
                    })
                }
                inferType() {
                    return this.inferTypes().pop()
                }
                inferTypes() {
                    const t = null != this.gasPrice,
                        e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
                        n = null != this.accessList;
                    null != this.maxFeePerGas && null != this.maxPriorityFeePerGas && (0, r.hu)(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
                        value: this
                    }), (0, r.hu)(!e || 0 !== this.type && 1 !== this.type, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
                        value: this
                    }), (0, r.hu)(0 !== this.type || !n, "legacy transaction cannot have accessList", "BAD_DATA", {
                        value: this
                    });
                    const s = [];
                    return null != this.type ? s.push(this.type) : e ? s.push(2) : t ? (s.push(1), n || s.push(0)) : n ? (s.push(1), s.push(2)) : (s.push(0), s.push(1), s.push(2)), s.sort(), s
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                clone() {
                    return ir.from(this)
                }
                toJSON() {
                    const t = t => null == t ? null : t.toString();
                    return {
                        type: this.type,
                        to: this.to,
                        data: this.data,
                        nonce: this.nonce,
                        gasLimit: t(this.gasLimit),
                        gasPrice: t(this.gasPrice),
                        maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
                        maxFeePerGas: t(this.maxFeePerGas),
                        value: t(this.value),
                        chainId: t(this.chainId),
                        sig: this.signature ? this.signature.toJSON() : null,
                        accessList: this.accessList
                    }
                }
                static from(t) {
                    if (null == t) return new ir;
                    if ("string" === typeof t) {
                        const e = (0, c.Pw)(t);
                        if (e[0] >= 127) return ir.from(function(t) {
                            const e = Fn(t);
                            (0, r.en)(Array.isArray(e) && (9 === e.length || 6 === e.length), "invalid field count for legacy transaction", "data", t);
                            const n = {
                                type: 0,
                                nonce: Wn(e[0], "nonce"),
                                gasPrice: Xn(e[1], "gasPrice"),
                                gasLimit: Xn(e[2], "gasLimit"),
                                to: qn(e[3]),
                                value: Xn(e[4], "value"),
                                data: (0, c.Dv)(e[5]),
                                chainId: Vn
                            };
                            if (6 === e.length) return n;
                            const s = Xn(e[6], "v"),
                                i = Xn(e[7], "r"),
                                a = Xn(e[8], "s");
                            if (i === Vn && a === Vn) n.chainId = s;
                            else {
                                let i = (s - Zn) / Kn;
                                i < Vn && (i = Vn), n.chainId = i, (0, r.en)(i !== Vn || s === zn || s === Jn, "non-canonical legacy v", "v", e[6]), n.signature = ne.from({
                                    r: (0, c.U3)(e[7], 32),
                                    s: (0, c.U3)(e[8], 32),
                                    v: s
                                }), n.hash = (0, o.w)(t)
                            }
                            return n
                        }(e));
                        switch (e[0]) {
                            case 1:
                                return ir.from(function(t) {
                                    const e = Fn((0, c.Pw)(t).slice(1));
                                    (0, r.en)(Array.isArray(e) && (8 === e.length || 11 === e.length), "invalid field count for transaction type: 1", "data", (0, c.Dv)(t));
                                    const n = {
                                        type: 1,
                                        chainId: Xn(e[0], "chainId"),
                                        nonce: Wn(e[1], "nonce"),
                                        gasPrice: Xn(e[2], "gasPrice"),
                                        gasLimit: Xn(e[3], "gasLimit"),
                                        to: qn(e[4]),
                                        value: Xn(e[5], "value"),
                                        data: (0, c.Dv)(e[6]),
                                        accessList: Yn(e[7], "accessList")
                                    };
                                    return 8 === e.length || (n.hash = (0, o.w)(t), nr(n, e.slice(8))), n
                                }(e));
                            case 2:
                                return ir.from(function(t) {
                                    const e = Fn((0, c.Pw)(t).slice(1));
                                    (0, r.en)(Array.isArray(e) && (9 === e.length || 12 === e.length), "invalid field count for transaction type: 2", "data", (0, c.Dv)(t));
                                    const n = Xn(e[2], "maxPriorityFeePerGas"),
                                        s = Xn(e[3], "maxFeePerGas"),
                                        i = {
                                            type: 2,
                                            chainId: Xn(e[0], "chainId"),
                                            nonce: Wn(e[1], "nonce"),
                                            maxPriorityFeePerGas: n,
                                            maxFeePerGas: s,
                                            gasPrice: null,
                                            gasLimit: Xn(e[4], "gasLimit"),
                                            to: qn(e[5]),
                                            value: Xn(e[6], "value"),
                                            data: (0, c.Dv)(e[7]),
                                            accessList: Yn(e[8], "accessList")
                                        };
                                    return 9 === e.length || (i.hash = (0, o.w)(t), nr(i, e.slice(9))), i
                                }(e))
                        }(0, r.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                            operation: "from"
                        })
                    }
                    const e = new ir;
                    return null != t.type && (e.type = t.type), null != t.to && (e.to = t.to), null != t.nonce && (e.nonce = t.nonce), null != t.gasLimit && (e.gasLimit = t.gasLimit), null != t.gasPrice && (e.gasPrice = t.gasPrice), null != t.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null != t.data && (e.data = t.data), null != t.value && (e.value = t.value), null != t.chainId && (e.chainId = t.chainId), null != t.signature && (e.signature = ne.from(t.signature)), null != t.accessList && (e.accessList = t.accessList), null != t.hash && ((0, r.en)(e.isSigned(), "unsigned transaction cannot define hash", "tx", t), (0, r.en)(e.hash === t.hash, "hash mismatch", "tx", t)), null != t.from && ((0, r.en)(e.isSigned(), "unsigned transaction cannot define from", "tx", t), (0, r.en)(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e
                }
            }
            let ar = async function(t, e) {
                const n = t.url.split(":")[0].toLowerCase();
                let s;
                if ((0, r.hu)("http" === n || "https" === n, `unsupported protocol ${n}`, "UNSUPPORTED_OPERATION", {
                        info: {
                            protocol: n
                        },
                        operation: "request"
                    }), (0, r.hu)("https" === n || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
                        operation: "request"
                    }), e) {
                    const t = new AbortController;
                    s = t.signal, e.addListener((() => {
                        t.abort()
                    }))
                }
                const i = {
                        method: t.method,
                        headers: new Headers(Array.from(t)),
                        body: t.body || void 0,
                        signal: s
                    },
                    a = await fetch(t.url, i),
                    o = {};
                a.headers.forEach(((t, e) => {
                    o[e.toLowerCase()] = t
                }));
                const c = await a.arrayBuffer(),
                    u = null == c ? null : new Uint8Array(c);
                return {
                    statusCode: a.status,
                    statusMessage: a.statusText,
                    headers: o,
                    body: u
                }
            };
            const or = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                cr = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
            let ur = !1;
            async function lr(t, e) {
                try {
                    const e = t.match(or);
                    if (!e) throw new Error("invalid data");
                    return new mr(200, "OK", {
                        "content-type": e[1] || "text/plain"
                    }, e[2] ? function(t) {
                        t = atob(t);
                        const e = new Uint8Array(t.length);
                        for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                        return (0, c.Pw)(e)
                    }(e[3]) : (n = e[3], (0, O.Y0)(n.replace(/%([0-9a-f][0-9a-f])/gi, ((t, e) => String.fromCharCode(parseInt(e, 16)))))))
                } catch (r) {
                    return new mr(599, "BAD REQUEST (invalid data: URI)", {}, null, new yr(t))
                }
                var n
            }

            function hr(t) {
                return async function(e, n) {
                    try {
                        const n = e.match(cr);
                        if (!n) throw new Error("invalid link");
                        return new yr(`${t}${n[2]}`)
                    } catch (r) {
                        return new mr(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new yr(e))
                    }
                }
            }
            const fr = {
                    data: lr,
                    ipfs: hr("https://gateway.ipfs.io/ipfs/")
                },
                dr = new WeakMap;
            class pr {#
                G;#
                j;
                constructor(t) {
                    this.#G = [], this.#j = !1, dr.set(t, (() => {
                        if (!this.#j) {
                            this.#j = !0;
                            for (const t of this.#G) setTimeout((() => {
                                t()
                            }), 0);
                            this.#G = []
                        }
                    }))
                }
                addListener(t) {
                    (0, r.hu)(!this.#j, "singal already cancelled", "UNSUPPORTED_OPERATION", {
                        operation: "fetchCancelSignal.addCancelListener"
                    }), this.#G.push(t)
                }
                get cancelled() {
                    return this.#j
                }
                checkSignal() {
                    (0, r.hu)(!this.cancelled, "cancelled", "CANCELLED", {})
                }
            }

            function gr(t) {
                if (null == t) throw new Error("missing signal; should not happen");
                return t.checkSignal(), t
            }
            class yr {#
                H;#
                Q;#
                V;#
                K;#
                z;#
                J;#
                Z;#
                _;#
                q;#
                Y;#
                W;#
                X;#
                $;#
                tt;
                get url() {
                    return this.#J
                }
                set url(t) {
                    this.#J = String(t)
                }
                get body() {
                    return null == this.#Z ? null : new Uint8Array(this.#Z)
                }
                set body(t) {
                    if (null == t) this.#Z = void 0, this.#_ = void 0;
                    else if ("string" === typeof t) this.#Z = (0, O.Y0)(t), this.#_ = "text/plain";
                    else if (t instanceof Uint8Array) this.#Z = t, this.#_ = "application/octet-stream";
                    else {
                        if ("object" !== typeof t) throw new Error("invalid body");
                        this.#Z = (0, O.Y0)(JSON.stringify(t)), this.#_ = "application/json"
                    }
                }
                hasBody() {
                    return null != this.#Z
                }
                get method() {
                    return this.#K ? this.#K : this.hasBody() ? "POST" : "GET"
                }
                set method(t) {
                    null == t && (t = ""), this.#K = String(t).toUpperCase()
                }
                get headers() {
                    const t = Object.assign({}, this.#V);
                    return this.#q && (t.authorization = `Basic ${function(t){const e=(0,c.Pw)(t);let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return btoa(n)}((0,O.Y0)(this.#q))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), null == t["content-type"] && this.#_ && (t["content-type"] = this.#_), this.body && (t["content-length"] = String(this.body.length)), t
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                setHeader(t, e) {
                    this.#V[String(t).toLowerCase()] = String(e)
                }
                clearHeaders() {
                    this.#V = {}
                }[Symbol.iterator]() {
                    const t = this.headers,
                        e = Object.keys(t);
                    let n = 0;
                    return {
                        next: () => {
                            if (n < e.length) {
                                const r = e[n++];
                                return {
                                    value: [r, t[r]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                get credentials() {
                    return this.#q || null
                }
                setCredentials(t, e) {
                    (0, r.en)(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), this.#q = `${t}:${e}`
                }
                get allowGzip() {
                    return this.#Q
                }
                set allowGzip(t) {
                    this.#Q = !!t
                }
                get allowInsecureAuthentication() {
                    return !!this.#H
                }
                set allowInsecureAuthentication(t) {
                    this.#H = !!t
                }
                get timeout() {
                    return this.#z
                }
                set timeout(t) {
                    (0, r.en)(t >= 0, "timeout must be non-zero", "timeout", t), this.#z = t
                }
                get preflightFunc() {
                    return this.#Y || null
                }
                set preflightFunc(t) {
                    this.#Y = t
                }
                get processFunc() {
                    return this.#W || null
                }
                set processFunc(t) {
                    this.#W = t
                }
                get retryFunc() {
                    return this.#X || null
                }
                set retryFunc(t) {
                    this.#X = t
                }
                constructor(t) {
                    this.#J = String(t), this.#H = !1, this.#Q = !0, this.#V = {}, this.#K = "", this.#z = 3e5, this.#tt = {
                        slotInterval: 250,
                        maxAttempts: 12
                    }
                }
                toString() {
                    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#Z?(0,c.Dv)(this.#Z):"null"}>`
                }
                setThrottleParams(t) {
                    null != t.slotInterval && (this.#tt.slotInterval = t.slotInterval), null != t.maxAttempts && (this.#tt.maxAttempts = t.maxAttempts)
                }
                async# et(t, e, n, s, i) {
                    if (t >= this.#tt.maxAttempts) return i.makeServerError("exceeded maximum retry limit");
                    (0, r.hu)(wr() <= e, "timeout", "TIMEOUT", {
                        operation: "request.send",
                        reason: "timeout",
                        request: s
                    }), n > 0 && await
                    function(t) {
                        return new Promise((e => setTimeout(e, t)))
                    }(n);
                    let a = this.clone();
                    const o = (a.url.split(":")[0] || "").toLowerCase();
                    if (o in fr) {
                        const t = await fr[o](a.url, gr(s.#$));
                        if (t instanceof mr) {
                            let e = t;
                            if (this.processFunc) {
                                gr(s.#$);
                                try {
                                    e = await this.processFunc(a, e)
                                } catch (l) {
                                    null != l.throttle && "number" === typeof l.stall || e.makeServerError("error in post-processing function", l).assertOk()
                                }
                            }
                            return e
                        }
                        a = t
                    }
                    this.preflightFunc && (a = await this.preflightFunc(a));
                    const c = await ar(a, gr(s.#$));
                    let u = new mr(c.statusCode, c.statusMessage, c.headers, c.body, s);
                    if (301 === u.statusCode || 302 === u.statusCode) {
                        try {
                            const n = u.headers.location || "";
                            return a.redirect(n).#et(t + 1, e, 0, s, u)
                        } catch (l) {}
                        return u
                    }
                    if (429 === u.statusCode && (null == this.retryFunc || await this.retryFunc(a, u, t))) {
                        const n = u.headers["retry-after"];
                        let r = this.#tt.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
                        return "string" === typeof n && n.match(/^[1-9][0-9]*$/) && (r = parseInt(n)), a.clone().#et(t + 1, e, r, s, u)
                    }
                    if (this.processFunc) {
                        gr(s.#$);
                        try {
                            u = await this.processFunc(a, u)
                        } catch (l) {
                            null != l.throttle && "number" === typeof l.stall || u.makeServerError("error in post-processing function", l).assertOk();
                            let n = this.#tt.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
                            return l.stall >= 0 && (n = l.stall), a.clone().#et(t + 1, e, n, s, u)
                        }
                    }
                    return u
                }
                send() {
                    return (0, r.hu)(null == this.#$, "request already sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.send"
                    }), this.#$ = new pr(this), this.#et(0, wr() + this.timeout, 0, this, new mr(0, "", {}, null, this))
                }
                cancel() {
                    (0, r.hu)(null != this.#$, "request has not been sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.cancel"
                    });
                    const t = dr.get(this);
                    if (!t) throw new Error("missing signal; should not happen");
                    t()
                }
                redirect(t) {
                    const e = this.url.split(":")[0].toLowerCase(),
                        n = t.split(":")[0].toLowerCase();
                    (0, r.hu)("GET" === this.method && ("https" !== e || "http" !== n) && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
                        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
                    });
                    const s = new yr(t);
                    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, s.#V = Object.assign({}, this.#V), this.#Z && (s.#Z = new Uint8Array(this.#Z)), s.#_ = this.#_, s
                }
                clone() {
                    const t = new yr(this.url);
                    return t.#K = this.#K, this.#Z && (t.#Z = this.#Z), t.#_ = this.#_, t.#V = Object.assign({}, this.#V), t.#q = this.#q, this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), t.#Y = this.#Y, t.#W = this.#W, t.#X = this.#X, t
                }
                static lockConfig() {
                    ur = !0
                }
                static getGateway(t) {
                    return fr[t.toLowerCase()] || null
                }
                static registerGateway(t, e) {
                    if ("http" === (t = t.toLowerCase()) || "https" === t) throw new Error(`cannot intercept ${t}; use registerGetUrl`);
                    if (ur) throw new Error("gateways locked");
                    fr[t] = e
                }
                static registerGetUrl(t) {
                    if (ur) throw new Error("gateways locked");
                    ar = t
                }
                static createDataGateway() {
                    return lr
                }
                static createIpfsGatewayFunc(t) {
                    return hr(t)
                }
            }
            class mr {#
                nt;#
                rt;#
                V;#
                Z;#
                st;#
                it;
                toString() {
                    return `<FetchResponse status=${this.statusCode} body=${this.#Z?(0,c.Dv)(this.#Z):"null"}>`
                }
                get statusCode() {
                    return this.#nt
                }
                get statusMessage() {
                    return this.#rt
                }
                get headers() {
                    return Object.assign({}, this.#V)
                }
                get body() {
                    return null == this.#Z ? null : new Uint8Array(this.#Z)
                }
                get bodyText() {
                    try {
                        return null == this.#Z ? "" : (0, O.ZN)(this.#Z)
                    } catch (t) {
                        (0, r.hu)(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                            operation: "bodyText",
                            info: {
                                response: this
                            }
                        })
                    }
                }
                get bodyJson() {
                    try {
                        return JSON.parse(this.bodyText)
                    } catch (t) {
                        (0, r.hu)(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                            operation: "bodyJson",
                            info: {
                                response: this
                            }
                        })
                    }
                }[Symbol.iterator]() {
                    const t = this.headers,
                        e = Object.keys(t);
                    let n = 0;
                    return {
                        next: () => {
                            if (n < e.length) {
                                const r = e[n++];
                                return {
                                    value: [r, t[r]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                constructor(t, e, n, r, s) {
                    this.#nt = t, this.#rt = e, this.#V = Object.keys(n).reduce(((t, e) => (t[e.toLowerCase()] = String(n[e]), t)), {}), this.#Z = null == r ? null : new Uint8Array(r), this.#st = s || null, this.#it = {
                        message: ""
                    }
                }
                makeServerError(t, e) {
                    let n;
                    n = t ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : `CLIENT ESCALATED SERVER ERROR (${t=`${this.statusCode} ${this.statusMessage}`})`;
                    const r = new mr(599, n, this.headers, this.body, this.#st || void 0);
                    return r.#it = {
                        message: t,
                        error: e
                    }, r
                }
                throwThrottleError(t, e) {
                    null == e ? e = -1 : (0, r.en)(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
                    const n = new Error(t || "throttling requests");
                    throw (0, l.h)(n, {
                        stall: e,
                        throttle: !0
                    }), n
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                hasBody() {
                    return null != this.#Z
                }
                get request() {
                    return this.#st
                }
                ok() {
                    return "" === this.#it.message && this.statusCode >= 200 && this.statusCode < 300
                }
                assertOk() {
                    if (this.ok()) return;
                    let {
                        message: t,
                        error: e
                    } = this.#it;
                    "" === t && (t = `server response ${this.statusCode} ${this.statusMessage}`), (0, r.hu)(!1, t, "SERVER_ERROR", {
                        request: this.request || "unknown request",
                        response: this,
                        error: e
                    })
                }
            }

            function wr() {
                return (new Date).getTime()
            }
            var Ar = n(56539);
            const br = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            BigInt(0);
            const vr = BigInt(58);

            function Er(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : (0, r.en)(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }
            class Pr {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                connect(t) {
                    return this
                }
                supportsCoinType(t) {
                    return !1
                }
                async encodeAddress(t, e) {
                    throw new Error("unsupported coin")
                }
                async decodeAddress(t, e) {
                    throw new Error("unsupported coin")
                }
            }
            const xr = new RegExp("^(ipfs)://(.*)$", "i"),
                Cr = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), xr, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
            class kr {
                provider;
                address;
                name;#
                at;#
                ot;
                constructor(t, e, n) {
                    (0, l.h)(this, {
                        provider: t,
                        address: e,
                        name: n
                    }), this.#at = null, this.#ot = new N.CH(e, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], t)
                }
                async supportsWildcard() {
                    return null == this.#at && (this.#at = (async () => {
                        try {
                            return await this.#ot.supportsInterface("0x9061b923")
                        } catch (t) {
                            if ((0, r.VZ)(t, "CALL_EXCEPTION")) return !1;
                            throw this.#at = null, t
                        }
                    })()), await this.#at
                }
                async# ct(t, e) {
                    e = (e || []).slice();
                    const n = this.#ot.interface;
                    e.unshift(Jt(this.name));
                    let s = null;
                    var i;
                    await this.supportsWildcard() && (s = n.getFunction(t), (0, r.hu)(s, "missing fragment", "UNKNOWN_ERROR", {
                        info: {
                            funcName: t
                        }
                    }), e = [(i = this.name, (0, c.Dv)((0, c.zo)(zt(i).map((t => {
                        if (t.length > 63) throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
                        const e = new Uint8Array(t.length + 1);
                        return e.set(t, 1), e[0] = e.length - 1, e
                    })))) + "00"), n.encodeFunctionData(s, e)], t = "resolve(bytes,bytes)"), e.push({
                        enableCcipRead: !0
                    });
                    try {
                        const r = await this.#ot[t](...e);
                        return s ? n.decodeFunctionResult(s, r)[0] : r
                    } catch (a) {
                        if (!(0, r.VZ)(a, "CALL_EXCEPTION")) throw a
                    }
                    return null
                }
                async getAddress(t) {
                    if (null == t && (t = 60), 60 === t) try {
                        const t = await this.#ct("addr(bytes32)");
                        return null == t || t === I ? null : t
                    } catch (a) {
                        if ((0, r.VZ)(a, "CALL_EXCEPTION")) return null;
                        throw a
                    }
                    if (t >= 0 && t < 2147483648) {
                        let e = t + 2147483648;
                        const n = await this.#ct("addr(bytes32,uint)", [e]);
                        if ((0, c.A7)(n, 20)) return (0, i.K)(n)
                    }
                    let e = null;
                    for (const r of this.provider.plugins)
                        if (r instanceof Pr && r.supportsCoinType(t)) {
                            e = r;
                            break
                        }
                    if (null == e) return null;
                    const n = await this.#ct("addr(bytes32,uint)", [t]);
                    if (null == n || "0x" === n) return null;
                    const s = await e.decodeAddress(t, n);
                    if (null != s) return s;
                    (0, r.hu)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
                        operation: `getAddress(${t})`,
                        info: {
                            coinType: t,
                            data: n
                        }
                    })
                }
                async getText(t) {
                    const e = await this.#ct("text(bytes32,string)", [t]);
                    return null == e || "0x" === e ? null : e
                }
                async getContentHash() {
                    const t = await this.#ct("contenthash(bytes32)");
                    if (null == t || "0x" === t) return null;
                    const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (e) {
                        const t = "e3010170" === e[1] ? "ipfs" : "ipns",
                            n = parseInt(e[4], 16);
                        if (e[5].length === 2 * n) return `${t}://${function(t){let e=(0,u.Gh)((0,c.Pw)(t)),n="";for(;e;)n=br[Number(e%vr)]+n,e/=vr;return n}("0x"+e[2])}`
                    }
                    const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    if (n && 64 === n[1].length) return `bzz://${n[1]}`;
                    (0, r.hu)(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
                        operation: "getContentHash()",
                        info: {
                            data: t
                        }
                    })
                }
                async getAvatar() {
                    return (await this._getAvatar()).url
                }
                async _getAvatar() {
                    const t = [{
                        type: "name",
                        value: this.name
                    }];
                    try {
                        const n = await this.getText("avatar");
                        if (null == n) return t.push({
                            type: "!avatar",
                            value: ""
                        }), {
                            url: null,
                            linkage: t
                        };
                        t.push({
                            type: "avatar",
                            value: n
                        });
                        for (let r = 0; r < Cr.length; r++) {
                            const s = n.match(Cr[r]);
                            if (null == s) continue;
                            const i = s[1].toLowerCase();
                            switch (i) {
                                case "https":
                                case "data":
                                    return t.push({
                                        type: "url",
                                        value: n
                                    }), {
                                        linkage: t,
                                        url: n
                                    };
                                case "ipfs":
                                    {
                                        const e = Er(n);
                                        return t.push({
                                            type: "ipfs",
                                            value: n
                                        }),
                                        t.push({
                                            type: "url",
                                            value: e
                                        }),
                                        {
                                            linkage: t,
                                            url: e
                                        }
                                    }
                                case "erc721":
                                case "erc1155":
                                    {
                                        const r = "erc721" === i ? "tokenURI(uint256)" : "uri(uint256)";t.push({
                                            type: i,
                                            value: n
                                        });
                                        const a = await this.getAddress();
                                        if (null == a) return t.push({
                                            type: "!owner",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        const o = (s[2] || "").split("/");
                                        if (2 !== o.length) return t.push({
                                            type: `!${i}caip`,
                                            value: s[2] || ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        const l = o[1],
                                            h = new N.CH(o[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                                        if ("erc721" === i) {
                                            const e = await h.ownerOf(l);
                                            if (a !== e) return t.push({
                                                type: "!owner",
                                                value: e
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "owner",
                                                value: e
                                            })
                                        } else if ("erc1155" === i) {
                                            const e = await h.balanceOf(a, l);
                                            if (!e) return t.push({
                                                type: "!balance",
                                                value: "0"
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "balance",
                                                value: e.toString()
                                            })
                                        }
                                        let f = await h[r](l);
                                        if (null == f || "0x" === f) return t.push({
                                            type: "!metadata-url",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata-url-base",
                                            value: f
                                        }),
                                        "erc1155" === i && (f = f.replace("{id}", (0, u.m9)(l, 32).substring(2)), t.push({
                                            type: "metadata-url-expanded",
                                            value: f
                                        })),
                                        f.match(/^ipfs:/i) && (f = Er(f)),
                                        t.push({
                                            type: "metadata-url",
                                            value: f
                                        });
                                        let d = {};
                                        const p = await new yr(f).send();p.assertOk();
                                        try {
                                            d = p.bodyJson
                                        } catch (e) {
                                            try {
                                                t.push({
                                                    type: "!metadata",
                                                    value: p.bodyText
                                                })
                                            } catch (e) {
                                                const n = p.body;
                                                return n && t.push({
                                                    type: "!metadata",
                                                    value: (0, c.Dv)(n)
                                                }), {
                                                    url: null,
                                                    linkage: t
                                                }
                                            }
                                            return {
                                                url: null,
                                                linkage: t
                                            }
                                        }
                                        if (!d) return t.push({
                                            type: "!metadata",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata",
                                            value: JSON.stringify(d)
                                        });
                                        let g = d.image;
                                        if ("string" !== typeof g) return t.push({
                                            type: "!imageUrl",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        if (g.match(/^(https:\/\/|data:)/i));
                                        else {
                                            if (null == g.match(xr)) return t.push({
                                                type: "!imageUrl-ipfs",
                                                value: g
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "imageUrl-ipfs",
                                                value: g
                                            }), g = Er(g)
                                        }
                                        return t.push({
                                            type: "url",
                                            value: g
                                        }),
                                        {
                                            linkage: t,
                                            url: g
                                        }
                                    }
                            }
                        }
                    } catch (e) {}
                    return {
                        linkage: t,
                        url: null
                    }
                }
                static async getEnsAddress(t) {
                    const e = await t.getNetwork(),
                        n = e.getPlugin("org.ethers.plugins.network.Ens");
                    return (0, r.hu)(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
                        operation: "getEnsAddress",
                        info: {
                            network: e
                        }
                    }), n.address
                }
                static async# ut(t, e) {
                    const n = await kr.getEnsAddress(t);
                    try {
                        const r = new N.CH(n, ["function resolver(bytes32) view returns (address)"], t),
                            s = await r.resolver(Jt(e), {
                                enableCcipRead: !0
                            });
                        return s === I ? null : s
                    } catch (r) {
                        throw r
                    }
                    return null
                }
                static async fromName(t, e) {
                    let n = e;
                    for (;;) {
                        if ("" === n || "." === n) return null;
                        if ("eth" !== e && "eth" === n) return null;
                        const r = await kr.#ut(t, n);
                        if (null != r) {
                            const s = new kr(t, r, e);
                            return n === e || await s.supportsWildcard() ? s : null
                        }
                        n = n.split(".").slice(1).join(".")
                    }
                }
            }
            const Or = BigInt(0);

            function Ir(t, e) {
                return function(n) {
                    return null == n ? e : t(n)
                }
            }

            function Nr(t) {
                return e => {
                    if (!Array.isArray(e)) throw new Error("not an array");
                    return e.map((e => t(e)))
                }
            }

            function Br(t, e) {
                return n => {
                    const s = {};
                    for (const a in t) {
                        let o = a;
                        if (e && a in e && !(o in n))
                            for (const t of e[a])
                                if (t in n) {
                                    o = t;
                                    break
                                }
                        try {
                            const e = t[a](n[o]);
                            void 0 !== e && (s[a] = e)
                        } catch (i) {
                            const t = i instanceof Error ? i.message : "not-an-error";
                            (0, r.hu)(!1, `invalid value for value.${a} (${t})`, "BAD_DATA", {
                                value: n
                            })
                        }
                    }
                    return s
                }
            }

            function Tr(t) {
                return (0, r.en)((0, c.A7)(t, !0), "invalid data", "value", t), t
            }

            function Sr(t) {
                return (0, r.en)((0, c.A7)(t, 32), "invalid hash", "value", t), t
            }
            const Rr = Br({
                address: i.K,
                blockHash: Sr,
                blockNumber: u.Dx,
                data: Tr,
                index: u.Dx,
                removed: Ir((function(t) {
                    switch (t) {
                        case !0:
                        case "true":
                            return !0;
                        case !1:
                        case "false":
                            return !1
                    }(0, r.en)(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
                }), !1),
                topics: Nr(Sr),
                transactionHash: Sr,
                transactionIndex: u.Dx
            }, {
                index: ["logIndex"]
            });
            const Dr = Br({
                hash: Ir(Sr),
                parentHash: Sr,
                number: u.Dx,
                timestamp: u.Dx,
                nonce: Ir(Tr),
                difficulty: u.yT,
                gasLimit: u.yT,
                gasUsed: u.yT,
                miner: Ir(i.K),
                extraData: Tr,
                baseFeePerGas: Ir(u.yT)
            });
            const Lr = Br({
                transactionIndex: u.Dx,
                blockNumber: u.Dx,
                transactionHash: Sr,
                address: i.K,
                topics: Nr(Sr),
                data: Tr,
                index: u.Dx,
                blockHash: Sr
            }, {
                index: ["logIndex"]
            });
            const Ur = Br({
                to: Ir(i.K, null),
                from: Ir(i.K, null),
                contractAddress: Ir(i.K, null),
                index: u.Dx,
                root: Ir(c.Dv),
                gasUsed: u.yT,
                logsBloom: Ir(Tr),
                blockHash: Sr,
                hash: Sr,
                logs: Nr((function(t) {
                    return Lr(t)
                })),
                blockNumber: u.Dx,
                cumulativeGasUsed: u.yT,
                effectiveGasPrice: Ir(u.yT),
                status: Ir(u.Dx),
                type: Ir(u.Dx, 0)
            }, {
                effectiveGasPrice: ["gasPrice"],
                hash: ["transactionHash"],
                index: ["transactionIndex"]
            });

            function Fr(t) {
                t.to && (0, u.yT)(t.to) === Or && (t.to = "0x0000000000000000000000000000000000000000");
                const e = Br({
                    hash: Sr,
                    type: t => "0x" === t || null == t ? 0 : (0, u.Dx)(t),
                    accessList: Ir(k.z, null),
                    blockHash: Ir(Sr, null),
                    blockNumber: Ir(u.Dx, null),
                    transactionIndex: Ir(u.Dx, null),
                    from: i.K,
                    gasPrice: Ir(u.yT),
                    maxPriorityFeePerGas: Ir(u.yT),
                    maxFeePerGas: Ir(u.yT),
                    gasLimit: u.yT,
                    to: Ir(i.K, null),
                    value: u.yT,
                    nonce: u.Dx,
                    data: Tr,
                    creates: Ir(i.K, null),
                    chainId: Ir(u.yT, null)
                }, {
                    data: ["input"],
                    gasLimit: ["gas"]
                })(t);
                if (null == e.to && null == e.creates && (e.creates = function(t) {
                        const e = (0, i.K)(t.from);
                        let n = (0, u.yT)(t.nonce, "tx.nonce").toString(16);
                        return n = "0" === n ? "0x" : n.length % 2 ? "0x0" + n : "0x" + n, (0, i.K)((0, c.QB)((0, o.w)(Hn([e, n])), 12))
                    }(e)), 1 !== t.type && 2 !== t.type || null != t.accessList || (e.accessList = []), t.signature ? e.signature = ne.from(t.signature) : e.signature = ne.from(t), null == e.chainId) {
                    const t = e.signature.legacyChainId;
                    null != t && (e.chainId = t)
                }
                return e.blockHash && (0, u.yT)(e.blockHash) === Or && (e.blockHash = null), e
            }
            class Mr {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                clone() {
                    return new Mr(this.name)
                }
            }
            class Gr extends Mr {
                effectiveBlock;
                txBase;
                txCreate;
                txDataZero;
                txDataNonzero;
                txAccessListStorageKey;
                txAccessListAddress;
                constructor(t, e) {
                    null == t && (t = 0), super(`org.ethers.network.plugins.GasCost#${t||0}`);
                    const n = {
                        effectiveBlock: t
                    };

                    function s(t, s) {
                        let i = (e || {})[t];
                        null == i && (i = s), (0, r.en)("number" === typeof i, `invalud value for ${t}`, "costs", e), n[t] = i
                    }
                    s("txBase", 21e3), s("txCreate", 32e3), s("txDataZero", 4), s("txDataNonzero", 16), s("txAccessListStorageKey", 1900), s("txAccessListAddress", 2400), (0, l.h)(this, n)
                }
                clone() {
                    return new Gr(this.effectiveBlock, this)
                }
            }
            class jr extends Mr {
                address;
                targetNetwork;
                constructor(t, e) {
                    super("org.ethers.plugins.network.Ens"), (0, l.h)(this, {
                        address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        targetNetwork: null == e ? 1 : e
                    })
                }
                clone() {
                    return new jr(this.address, this.targetNetwork)
                }
            }
            class Hr extends Mr {#
                J;#
                lt;
                get url() {
                    return this.#J
                }
                get processFunc() {
                    return this.#lt
                }
                constructor(t, e) {
                    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"), this.#J = t, this.#lt = e
                }
                clone() {
                    return this
                }
            }
            const Qr = new Map;
            class Vr {#
                ht;#
                U;#
                ft;
                constructor(t, e) {
                    this.#ht = t, this.#U = (0, u.yT)(e), this.#ft = new Map
                }
                toJSON() {
                    return {
                        name: this.name,
                        chainId: String(this.chainId)
                    }
                }
                get name() {
                    return this.#ht
                }
                set name(t) {
                    this.#ht = t
                }
                get chainId() {
                    return this.#U
                }
                set chainId(t) {
                    this.#U = (0, u.yT)(t, "chainId")
                }
                matches(t) {
                    if (null == t) return !1;
                    if ("string" === typeof t) {
                        try {
                            return this.chainId === (0, u.yT)(t)
                        } catch (e) {}
                        return this.name === t
                    }
                    if ("number" === typeof t || "bigint" === typeof t) {
                        try {
                            return this.chainId === (0, u.yT)(t)
                        } catch (e) {}
                        return !1
                    }
                    if ("object" === typeof t) {
                        if (null != t.chainId) {
                            try {
                                return this.chainId === (0, u.yT)(t.chainId)
                            } catch (e) {}
                            return !1
                        }
                        return null != t.name && this.name === t.name
                    }
                    return !1
                }
                get plugins() {
                    return Array.from(this.#ft.values())
                }
                attachPlugin(t) {
                    if (this.#ft.get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#ft.set(t.name, t.clone()), this
                }
                getPlugin(t) {
                    return this.#ft.get(t) || null
                }
                getPlugins(t) {
                    return this.plugins.filter((e => e.name.split("#")[0] === t))
                }
                clone() {
                    const t = new Vr(this.name, this.chainId);
                    return this.plugins.forEach((e => {
                        t.attachPlugin(e.clone())
                    })), t
                }
                computeIntrinsicGas(t) {
                    const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new Gr;
                    let n = e.txBase;
                    if (null == t.to && (n += e.txCreate), t.data)
                        for (let r = 2; r < t.data.length; r += 2) "00" === t.data.substring(r, r + 2) ? n += e.txDataZero : n += e.txDataNonzero;
                    if (t.accessList) {
                        const r = (0, k.z)(t.accessList);
                        for (const t in r) n += e.txAccessListAddress + e.txAccessListStorageKey * r[t].storageKeys.length
                    }
                    return n
                }
                static from(t) {
                    if (function() {
                            if (Zr) return;

                            function t(t, e, n) {
                                const r = function() {
                                    const r = new Vr(t, e);
                                    return null != n.ensNetwork && r.attachPlugin(new jr(null, n.ensNetwork)), r.attachPlugin(new Gr), (n.plugins || []).forEach((t => {
                                        r.attachPlugin(t)
                                    })), r
                                };
                                Vr.register(t, r), Vr.register(e, r), n.altNames && n.altNames.forEach((t => {
                                    Vr.register(t, r)
                                }))
                            }
                            Zr = !0, t("mainnet", 1, {
                                ensNetwork: 1,
                                altNames: ["homestead"]
                            }), t("ropsten", 3, {
                                ensNetwork: 3
                            }), t("rinkeby", 4, {
                                ensNetwork: 4
                            }), t("goerli", 5, {
                                ensNetwork: 5
                            }), t("kovan", 42, {
                                ensNetwork: 42
                            }), t("sepolia", 11155111, {}), t("classic", 61, {}), t("classicKotti", 6, {}), t("arbitrum", 42161, {
                                ensNetwork: 1
                            }), t("arbitrum-goerli", 421613, {}), t("bnb", 56, {
                                ensNetwork: 1
                            }), t("bnbt", 97, {}), t("linea", 59144, {
                                ensNetwork: 1
                            }), t("linea-goerli", 59140, {}), t("matic", 137, {
                                ensNetwork: 1,
                                plugins: [zr("https://gasstation.polygon.technology/v2")]
                            }), t("matic-mumbai", 80001, {
                                altNames: ["maticMumbai", "maticmum"],
                                plugins: [zr("https://gasstation-testnet.polygon.technology/v2")]
                            }), t("optimism", 10, {
                                ensNetwork: 1,
                                plugins: [Jr(BigInt("1000000"))]
                            }), t("optimism-goerli", 420, {}), t("xdai", 100, {
                                ensNetwork: 1
                            })
                        }(), null == t) return Vr.from("mainnet");
                    if ("number" === typeof t && (t = BigInt(t)), "string" === typeof t || "bigint" === typeof t) {
                        const e = Qr.get(t);
                        if (e) return e();
                        if ("bigint" === typeof t) return new Vr("unknown", t);
                        (0, r.en)(!1, "unknown network", "network", t)
                    }
                    if ("function" === typeof t.clone) {
                        return t.clone()
                    }
                    if ("object" === typeof t) {
                        (0, r.en)("string" === typeof t.name && "number" === typeof t.chainId, "invalid network object name or chainId", "network", t);
                        const e = new Vr(t.name, t.chainId);
                        return (t.ensAddress || null != t.ensNetwork) && e.attachPlugin(new jr(t.ensAddress, t.ensNetwork)), e
                    }(0, r.en)(!1, "invalid network", "network", t)
                }
                static register(t, e) {
                    "number" === typeof t && (t = BigInt(t));
                    const n = Qr.get(t);
                    n && (0, r.en)(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), Qr.set(t, e)
                }
            }

            function Kr(t, e) {
                const n = String(t);
                if (!n.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`);
                const r = n.split(".");
                if (1 === r.length && r.push(""), 2 !== r.length) throw new Error(`invalid gwei value: ${t}`);
                for (; r[1].length < e;) r[1] += "0";
                if (r[1].length > 9) {
                    let t = BigInt(r[1].substring(0, 9));
                    r[1].substring(9).match(/^0+$/) || t++, r[1] = t.toString()
                }
                return BigInt(r[0] + r[1])
            }

            function zr(t) {
                return new Hr(t, (async (t, e, n) => {
                    let s;
                    n.setHeader("User-Agent", "ethers");
                    try {
                        const [e, r] = await Promise.all([n.send(), t()]);
                        s = e;
                        const i = s.bodyJson.standard;
                        return {
                            gasPrice: r.gasPrice,
                            maxFeePerGas: Kr(i.maxFee, 9),
                            maxPriorityFeePerGas: Kr(i.maxPriorityFee, 9)
                        }
                    } catch (i) {
                        (0, r.hu)(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", {
                            request: n,
                            response: s,
                            error: i
                        })
                    }
                }))
            }

            function Jr(t) {
                return new Hr("data:", (async (e, n, r) => {
                    const s = await e();
                    if (null == s.maxFeePerGas || null == s.maxPriorityFeePerGas) return s;
                    const i = s.maxFeePerGas - s.maxPriorityFeePerGas;
                    return {
                        gasPrice: s.gasPrice,
                        maxFeePerGas: i + t,
                        maxPriorityFeePerGas: t
                    }
                }))
            }
            let Zr = !1;
            var _r = n(54101);

            function qr(t) {
                return JSON.parse(JSON.stringify(t))
            }
            class Yr {#
                dt;#
                pt;#
                gt;#
                yt;
                constructor(t) {
                    this.#dt = t, this.#pt = null, this.#gt = 4e3, this.#yt = -2
                }
                get pollingInterval() {
                    return this.#gt
                }
                set pollingInterval(t) {
                    this.#gt = t
                }
                async# mt() {
                    try {
                        const t = await this.#dt.getBlockNumber();
                        if (-2 === this.#yt) return void(this.#yt = t);
                        if (t !== this.#yt) {
                            for (let e = this.#yt + 1; e <= t; e++) {
                                if (null == this.#pt) return;
                                await this.#dt.emit("block", e)
                            }
                            this.#yt = t
                        }
                    } catch (t) {}
                    null != this.#pt && (this.#pt = this.#dt._setTimeout(this.#mt.bind(this), this.#gt))
                }
                start() {
                    this.#pt || (this.#pt = this.#dt._setTimeout(this.#mt.bind(this), this.#gt), this.#mt())
                }
                stop() {
                    this.#pt && (this.#dt._clearTimeout(this.#pt), this.#pt = null)
                }
                pause(t) {
                    this.stop(), t && (this.#yt = -2)
                }
                resume() {
                    this.start()
                }
            }
            class Wr {#
                dt;#
                mt;#
                wt;
                constructor(t) {
                    this.#dt = t, this.#wt = !1, this.#mt = t => {
                        this._poll(t, this.#dt)
                    }
                }
                async _poll(t, e) {
                    throw new Error("sub-classes must override this")
                }
                start() {
                    this.#wt || (this.#wt = !0, this.#mt(-2), this.#dt.on("block", this.#mt))
                }
                stop() {
                    this.#wt && (this.#wt = !1, this.#dt.off("block", this.#mt))
                }
                pause(t) {
                    this.stop()
                }
                resume() {
                    this.start()
                }
            }
            class Xr extends Wr {#
                w;
                constructor(t, e) {
                    super(t), this.#w = qr(e)
                }
                async _poll(t, e) {
                    throw new Error("@TODO")
                }
            }
            class $r extends Wr {#
                At;
                constructor(t, e) {
                    super(t), this.#At = e
                }
                async _poll(t, e) {
                    const n = await e.getTransactionReceipt(this.#At);
                    n && e.emit(this.#At, n)
                }
            }
            class ts {#
                dt;#
                w;#
                pt;#
                wt;#
                yt;
                constructor(t, e) {
                    this.#dt = t, this.#w = qr(e), this.#pt = this.#mt.bind(this), this.#wt = !1, this.#yt = -2
                }
                async# mt(t) {
                    if (-2 === this.#yt) return;
                    const e = qr(this.#w);
                    e.fromBlock = this.#yt + 1, e.toBlock = t;
                    const n = await this.#dt.getLogs(e);
                    if (0 !== n.length)
                        for (const r of n) this.#dt.emit(this.#w, r), this.#yt = r.blockNumber;
                    else this.#yt < t - 60 && (this.#yt = t - 60)
                }
                start() {
                    this.#wt || (this.#wt = !0, -2 === this.#yt && this.#dt.getBlockNumber().then((t => {
                        this.#yt = t
                    })), this.#dt.on("block", this.#pt))
                }
                stop() {
                    this.#wt && (this.#wt = !1, this.#dt.off("block", this.#pt))
                }
                pause(t) {
                    this.stop(), t && (this.#yt = -2)
                }
                resume() {
                    this.start()
                }
            }
            const es = BigInt(2);

            function ns(t) {
                return t && "function" === typeof t.then
            }

            function rs(t, e) {
                return t + ":" + JSON.stringify(e, ((t, e) => {
                    if (null == e) return "null";
                    if ("bigint" === typeof e) return `bigint:${e.toString()}`;
                    if ("string" === typeof e) return e.toLowerCase();
                    if ("object" === typeof e && !Array.isArray(e)) {
                        const t = Object.keys(e);
                        return t.sort(), t.reduce(((t, n) => (t[n] = e[n], t)), {})
                    }
                    return e
                }))
            }
            class ss {
                name;
                constructor(t) {
                    (0, l.h)(this, {
                        name: t
                    })
                }
                start() {}
                stop() {}
                pause(t) {}
                resume() {}
            }

            function is(t) {
                return (t = Array.from(new Set(t).values())).sort(), t
            }
            async function as(t, e) {
                if (null == t) throw new Error("invalid event");
                if (Array.isArray(t) && (t = {
                        topics: t
                    }), "string" === typeof t) switch (t) {
                    case "block":
                    case "pending":
                    case "debug":
                    case "error":
                    case "network":
                        return {
                            type: t,
                            tag: t
                        }
                }
                if ((0, c.A7)(t, 32)) {
                    const e = t.toLowerCase();
                    return {
                        type: "transaction",
                        tag: rs("tx", {
                            hash: e
                        }),
                        hash: e
                    }
                }
                if (t.orphan) {
                    const e = t;
                    return {
                        type: "orphan",
                        tag: rs("orphan", e),
                        filter: (n = e, JSON.parse(JSON.stringify(n)))
                    }
                }
                var n;
                if (t.address || t.topics) {
                    const n = t,
                        r = {
                            topics: (n.topics || []).map((t => null == t ? null : Array.isArray(t) ? is(t.map((t => t.toLowerCase()))) : t.toLowerCase()))
                        };
                    if (n.address) {
                        const t = [],
                            s = [],
                            i = n => {
                                (0, c.A7)(n) ? t.push(n): s.push((async () => {
                                    t.push(await (0, a.ru)(n, e))
                                })())
                            };
                        Array.isArray(n.address) ? n.address.forEach(i) : i(n.address), s.length && await Promise.all(s), r.address = is(t.map((t => t.toLowerCase())))
                    }
                    return {
                        filter: r,
                        tag: rs("event", r),
                        type: "event"
                    }
                }(0, r.en)(!1, "unknown ProviderEvent", "event", t)
            }

            function os() {
                return (new Date).getTime()
            }
            const cs = {
                cacheTimeout: 250,
                pollingInterval: 4e3
            };

            function us(t, e) {
                try {
                    const n = ls(t, e);
                    if (n) return (0, O.ZN)(n)
                } catch (n) {}
                return null
            }

            function ls(t, e) {
                if ("0x" === t) return null;
                try {
                    const n = (0, u.Dx)((0, c.QB)(t, e, e + 32)),
                        r = (0, u.Dx)((0, c.QB)(t, n, n + 32));
                    return (0, c.QB)(t, n + 32, n + 32 + r)
                } catch (n) {}
                return null
            }

            function hs(t) {
                const e = (0, u.ot)(t);
                if (e.length > 32) throw new Error("internal; should not happen");
                const n = new Uint8Array(32);
                return n.set(e, 32 - e.length), n
            }

            function fs(t) {
                if (t.length % 32 === 0) return t;
                const e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e
            }
            const ds = new Uint8Array([]);

            function ps(t) {
                const e = [];
                let n = 0;
                for (let r = 0; r < t.length; r++) e.push(ds), n += 32;
                for (let r = 0; r < t.length; r++) {
                    const s = (0, c.Pw)(t[r]);
                    e[r] = hs(n), e.push(hs(s.length)), e.push(fs(s)), n += 32 + 32 * Math.ceil(s.length / 32)
                }
                return (0, c.zo)(e)
            }
            const gs = "0x0000000000000000000000000000000000000000000000000000000000000000";

            function ys(t, e) {
                if (t.provider) return t.provider;
                (0, r.hu)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
                    operation: e
                })
            }
            async function ms(t, e) {
                let n = (0, _r.kK)(e);
                if (null != n.to && (n.to = (0, a.ru)(n.to, t)), null != n.from) {
                    const e = n.from;
                    n.from = Promise.all([t.getAddress(), (0, a.ru)(e, t)]).then((([t, e]) => ((0, r.en)(t.toLowerCase() === e.toLowerCase(), "transaction from mismatch", "tx.from", e), t)))
                } else n.from = t.getAddress();
                return await (0, l.m)(n)
            }
            class ws {
                provider;
                constructor(t) {
                    (0, l.h)(this, {
                        provider: t || null
                    })
                }
                async getNonce(t) {
                    return ys(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t)
                }
                async populateCall(t) {
                    return await ms(this, t)
                }
                async populateTransaction(t) {
                    const e = ys(this, "populateTransaction"),
                        n = await ms(this, t);
                    null == n.nonce && (n.nonce = await this.getNonce("pending")), null == n.gasLimit && (n.gasLimit = await this.estimateGas(n));
                    const s = await this.provider.getNetwork();
                    if (null != n.chainId) {
                        const e = (0, u.yT)(n.chainId);
                        (0, r.en)(e === s.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId)
                    } else n.chainId = s.chainId;
                    const i = null != n.maxFeePerGas || null != n.maxPriorityFeePerGas;
                    if (null == n.gasPrice || 2 !== n.type && !i ? 0 !== n.type && 1 !== n.type || !i || (0, r.en)(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t) : (0, r.en)(!1, "eip-1559 transaction do not support gasPrice", "tx", t), 2 !== n.type && null != n.type || null == n.maxFeePerGas || null == n.maxPriorityFeePerGas)
                        if (0 === n.type || 1 === n.type) {
                            const t = await e.getFeeData();
                            (0, r.hu)(null != t.gasPrice, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                                operation: "getGasPrice"
                            }), null == n.gasPrice && (n.gasPrice = t.gasPrice)
                        } else {
                            const t = await e.getFeeData();
                            if (null == n.type)
                                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                    if (n.type = 2, null != n.gasPrice) {
                                        const t = n.gasPrice;
                                        delete n.gasPrice, n.maxFeePerGas = t, n.maxPriorityFeePerGas = t
                                    } else null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas), null == n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                            else null != t.gasPrice ? ((0, r.hu)(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                                operation: "populateTransaction"
                            }), null == n.gasPrice && (n.gasPrice = t.gasPrice), n.type = 0) : (0, r.hu)(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                                operation: "signer.getFeeData"
                            });
                            else 2 === n.type && (null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas), null == n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                        }
                    else n.type = 2;
                    return await (0, l.m)(n)
                }
                async estimateGas(t) {
                    return ys(this, "estimateGas").estimateGas(await this.populateCall(t))
                }
                async call(t) {
                    return ys(this, "call").call(await this.populateCall(t))
                }
                async resolveName(t) {
                    const e = ys(this, "resolveName");
                    return await e.resolveName(t)
                }
                async sendTransaction(t) {
                    const e = ys(this, "sendTransaction"),
                        n = await this.populateTransaction(t);
                    delete n.from;
                    const r = ir.from(n);
                    return await e.broadcastTransaction(await this.signTransaction(r))
                }
            }
            class As {#
                dt;#
                bt;#
                pt;#
                wt;#
                vt;#
                Et;
                constructor(t) {
                    this.#dt = t, this.#bt = null, this.#pt = this.#mt.bind(this), this.#wt = !1, this.#vt = null, this.#Et = !1
                }
                _subscribe(t) {
                    throw new Error("subclasses must override this")
                }
                _emitResults(t, e) {
                    throw new Error("subclasses must override this")
                }
                _recover(t) {
                    throw new Error("subclasses must override this")
                }
                async# mt(t) {
                    try {
                        null == this.#bt && (this.#bt = this._subscribe(this.#dt));
                        let t = null;
                        try {
                            t = await this.#bt
                        } catch (e) {
                            if (!(0, r.VZ)(e, "UNSUPPORTED_OPERATION") || "eth_newFilter" !== e.operation) throw e
                        }
                        if (null == t) return this.#bt = null, void this.#dt._recoverSubscriber(this, this._recover(this.#dt));
                        const n = await this.#dt.getNetwork();
                        if (this.#vt || (this.#vt = n), this.#vt.chainId !== n.chainId) throw new Error("chaid changed");
                        if (this.#Et) return;
                        const s = await this.#dt.send("eth_getFilterChanges", [t]);
                        await this._emitResults(this.#dt, s)
                    } catch (e) {
                        console.log("@TODO", e)
                    }
                    this.#dt.once("block", this.#pt)
                }#
                Pt() {
                    const t = this.#bt;
                    t && (this.#bt = null, t.then((t => {
                        this.#dt.send("eth_uninstallFilter", [t])
                    })))
                }
                start() {
                    this.#wt || (this.#wt = !0, this.#mt(-2))
                }
                stop() {
                    this.#wt && (this.#wt = !1, this.#Et = !0, this.#Pt(), this.#dt.off("block", this.#pt))
                }
                pause(t) {
                    t && this.#Pt(), this.#dt.off("block", this.#pt)
                }
                resume() {
                    this.start()
                }
            }
            class bs extends As {#
                xt;
                constructor(t, e) {
                    var n;
                    super(t), this.#xt = (n = e, JSON.parse(JSON.stringify(n)))
                }
                _recover(t) {
                    return new ts(t, this.#xt)
                }
                async _subscribe(t) {
                    return await t.send("eth_newFilter", [this.#xt])
                }
                async _emitResults(t, e) {
                    for (const n of e) t.emit(this.#xt, t._wrapLog(n, t._network))
                }
            }
            class vs extends As {
                async _subscribe(t) {
                    return await t.send("eth_newPendingTransactionFilter", [])
                }
                async _emitResults(t, e) {
                    for (const n of e) t.emit("pending", n)
                }
            }
            const Es = "bigint,boolean,function,number,string,symbol".split(/,/g);

            function Ps(t) {
                if (null == t || Es.indexOf(typeof t) >= 0) return t;
                if ("function" === typeof t.getAddress) return t;
                if (Array.isArray(t)) return t.map(Ps);
                if ("object" === typeof t) return Object.keys(t).reduce(((e, n) => (e[n] = t[n], e)), {});
                throw new Error(`should not happen: ${t} (${typeof t})`)
            }

            function xs(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }

            function Cs(t) {
                return t ? t.toLowerCase() : t
            }

            function ks(t) {
                return t && "number" === typeof t.pollingInterval
            }
            const Os = {
                polling: !1,
                staticNetwork: null,
                batchStallTime: 10,
                batchMaxSize: 1 << 20,
                batchMaxCount: 100,
                cacheTimeout: 250,
                pollingInterval: 4e3
            };
            class Is extends ws {
                address;
                constructor(t, e) {
                    super(t), e = (0, i.K)(e), (0, l.h)(this, {
                        address: e
                    })
                }
                connect(t) {
                    (0, r.hu)(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
                        operation: "signer.connect"
                    })
                }
                async getAddress() {
                    return this.address
                }
                async populateTransaction(t) {
                    return await this.populateCall(t)
                }
                async sendUncheckedTransaction(t) {
                    const e = Ps(t),
                        n = [];
                    if (e.from) {
                        const s = e.from;
                        n.push((async () => {
                            const n = await (0, a.ru)(s, this.provider);
                            (0, r.en)(null != n && n.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = n
                        })())
                    } else e.from = this.address;
                    if (null == e.gasLimit && n.push((async () => {
                            e.gasLimit = await this.provider.estimateGas({ ...e,
                                from: this.address
                            })
                        })()), null != e.to) {
                        const t = e.to;
                        n.push((async () => {
                            e.to = await (0, a.ru)(t, this.provider)
                        })())
                    }
                    n.length && await Promise.all(n);
                    const s = this.provider.getRpcTransaction(e);
                    return this.provider.send("eth_sendTransaction", [s])
                }
                async sendTransaction(t) {
                    const e = await this.provider.getBlockNumber(),
                        n = await this.sendUncheckedTransaction(t);
                    return await new Promise(((t, r) => {
                        const s = [1e3, 100],
                            i = async () => {
                                const r = await this.provider.getTransaction(n);
                                null == r ? this.provider._setTimeout((() => {
                                    i()
                                }), s.pop() || 4e3) : t(r.replaceableTransaction(e))
                            };
                        i()
                    }))
                }
                async signTransaction(t) {
                    const e = Ps(t);
                    if (e.from) {
                        const n = await (0, a.ru)(e.from, this.provider);
                        (0, r.en)(null != n && n.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = n
                    } else e.from = this.address;
                    const n = this.provider.getRpcTransaction(e);
                    return await this.provider.send("eth_signTransaction", [n])
                }
                async signMessage(t) {
                    const e = "string" === typeof t ? (0, O.Y0)(t) : t;
                    return await this.provider.send("personal_sign", [(0, c.Dv)(e), this.address.toLowerCase()])
                }
                async signTypedData(t, e, n) {
                    const s = Ps(n),
                        i = await C.resolveNames(t, e, s, (async t => {
                            const e = await (0, a.ru)(t);
                            return (0, r.en)(null != e, "TypedData does not support null address", "value", t), e
                        }));
                    return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(C.getPayload(i.domain, e, i.value))])
                }
                async unlock(t) {
                    return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), t, null])
                }
                async _legacySignMessage(t) {
                    const e = "string" === typeof t ? (0, O.Y0)(t) : t;
                    return await this.provider.send("eth_sign", [this.address.toLowerCase(), (0, c.Dv)(e)])
                }
            }
            class Ns extends class extends class {#
                Ct;#
                ft;#
                kt;#
                Ot;#
                It;#
                Nt;#
                Bt;#
                Tt;#
                St;#
                Rt;#
                Dt;#
                l;
                constructor(t, e) {
                    if (this.#l = Object.assign({}, cs, e || {}), "any" === t) this.#Nt = !0, this.#It = null;
                    else if (t) {
                        const e = Vr.from(t);
                        this.#Nt = !1, this.#It = Promise.resolve(e), setTimeout((() => {
                            this.emit("network", e, null)
                        }), 0)
                    } else this.#Nt = !1, this.#It = null;
                    this.#Tt = -1, this.#Bt = new Map, this.#Ct = new Map, this.#ft = new Map, this.#kt = null, this.#Ot = !1, this.#St = 1, this.#Rt = new Map, this.#Dt = !1
                }
                get pollingInterval() {
                    return this.#l.pollingInterval
                }
                get provider() {
                    return this
                }
                get plugins() {
                    return Array.from(this.#ft.values())
                }
                attachPlugin(t) {
                    if (this.#ft.get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#ft.set(t.name, t.connect(this)), this
                }
                getPlugin(t) {
                    return this.#ft.get(t) || null
                }
                get disableCcipRead() {
                    return this.#Dt
                }
                set disableCcipRead(t) {
                    this.#Dt = !!t
                }
                async# Lt(t) {
                    const e = this.#l.cacheTimeout;
                    if (e < 0) return await this._perform(t);
                    const n = rs(t.method, t);
                    let r = this.#Bt.get(n);
                    return r || (r = this._perform(t), this.#Bt.set(n, r), setTimeout((() => {
                        this.#Bt.get(n) === r && this.#Bt.delete(n)
                    }), e)), await r
                }
                async ccipReadFetch(t, e, n) {
                    if (this.disableCcipRead || 0 === n.length || null == t.to) return null;
                    const s = t.to.toLowerCase(),
                        i = e.toLowerCase(),
                        a = [];
                    for (let c = 0; c < n.length; c++) {
                        const e = n[c],
                            u = e.replace("{sender}", s).replace("{data}", i),
                            l = new yr(u); - 1 === e.indexOf("{data}") && (l.body = {
                            data: i,
                            sender: s
                        }), this.emit("debug", {
                            action: "sendCcipReadFetchRequest",
                            request: l,
                            index: c,
                            urls: n
                        });
                        let h = "unknown error";
                        const f = await l.send();
                        try {
                            const t = f.bodyJson;
                            if (t.data) return this.emit("debug", {
                                action: "receiveCcipReadFetchResult",
                                request: l,
                                result: t
                            }), t.data;
                            t.message && (h = t.message), this.emit("debug", {
                                action: "receiveCcipReadFetchError",
                                request: l,
                                result: t
                            })
                        } catch (o) {}(0, r.hu)(f.statusCode < 400 || f.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", {
                            reason: "404_MISSING_RESOURCE",
                            transaction: t,
                            info: {
                                url: e,
                                errorMessage: h
                            }
                        }), a.push(h)
                    }(0, r.hu)(!1, `error encountered during CCIP fetch: ${a.map((t=>JSON.stringify(t))).join(", ")}`, "OFFCHAIN_FAULT", {
                        reason: "500_SERVER_ERROR",
                        transaction: t,
                        info: {
                            urls: n,
                            errorMessages: a
                        }
                    })
                }
                _wrapBlock(t, e) {
                    return new _r.gO(function(t) {
                        const e = Dr(t);
                        return e.transactions = t.transactions.map((t => "string" === typeof t ? t : Fr(t))), e
                    }(t), this)
                }
                _wrapLog(t, e) {
                    return new _r.Zb(function(t) {
                        return Rr(t)
                    }(t), this)
                }
                _wrapTransactionReceipt(t, e) {
                    return new _r.IX(function(t) {
                        return Ur(t)
                    }(t), this)
                }
                _wrapTransactionResponse(t, e) {
                    return new _r.Mw(Fr(t), this)
                }
                _detectNetwork() {
                    (0, r.hu)(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
                        operation: "_detectNetwork"
                    })
                }
                async _perform(t) {
                    (0, r.hu)(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: t
                    })
                }
                async getBlockNumber() {
                    const t = (0, u.Dx)(await this.#Lt({
                        method: "getBlockNumber"
                    }), "%response");
                    return this.#Tt >= 0 && (this.#Tt = t), t
                }
                _getAddress(t) {
                    return (0, a.ru)(t, this)
                }
                _getBlockTag(t) {
                    if (null == t) return "latest";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    return (0, c.A7)(t) ? (0, c.A7)(t, 32) ? t : (0, u.B4)(t) : ("bigint" === typeof t && (t = (0, u.Dx)(t, "blockTag")), "number" === typeof t ? t >= 0 ? (0, u.B4)(t) : this.#Tt >= 0 ? (0, u.B4)(this.#Tt + t) : this.getBlockNumber().then((e => (0, u.B4)(e + t))) : void(0, r.en)(!1, "invalid blockTag", "blockTag", t))
                }
                _getFilter(t) {
                    const e = (t.topics || []).map((t => null == t ? null : Array.isArray(t) ? is(t.map((t => t.toLowerCase()))) : t.toLowerCase())),
                        n = "blockHash" in t ? t.blockHash : void 0,
                        r = (t, r, s) => {
                            let i;
                            switch (t.length) {
                                case 0:
                                    break;
                                case 1:
                                    i = t[0];
                                    break;
                                default:
                                    t.sort(), i = t
                            }
                            if (n && (null != r || null != s)) throw new Error("invalid filter");
                            const a = {};
                            return i && (a.address = i), e.length && (a.topics = e), r && (a.fromBlock = r), s && (a.toBlock = s), n && (a.blockHash = n), a
                        };
                    let s, i, a = [];
                    if (t.address)
                        if (Array.isArray(t.address))
                            for (const o of t.address) a.push(this._getAddress(o));
                        else a.push(this._getAddress(t.address));
                    return "fromBlock" in t && (s = this._getBlockTag(t.fromBlock)), "toBlock" in t && (i = this._getBlockTag(t.toBlock)), a.filter((t => "string" !== typeof t)).length || null != s && "string" !== typeof s || null != i && "string" !== typeof i ? Promise.all([Promise.all(a), s, i]).then((t => r(t[0], t[1], t[2]))) : r(a, s, i)
                }
                _getTransactionRequest(t) {
                    const e = (0, _r.kK)(t),
                        n = [];
                    if (["to", "from"].forEach((t => {
                            if (null == e[t]) return;
                            const r = (0, a.ru)(e[t]);
                            ns(r) ? n.push(async function() {
                                e[t] = await r
                            }()) : e[t] = r
                        })), null != e.blockTag) {
                        const t = this._getBlockTag(e.blockTag);
                        ns(t) ? n.push(async function() {
                            e.blockTag = await t
                        }()) : e.blockTag = t
                    }
                    return n.length ? async function() {
                        return await Promise.all(n), e
                    }() : e
                }
                async getNetwork() {
                    if (null == this.#It) {
                        const t = this._detectNetwork().then((t => (this.emit("network", t, null), t)), (e => {
                            throw this.#It === t && (this.#It = null), e
                        }));
                        return this.#It = t, (await t).clone()
                    }
                    const t = this.#It,
                        [e, n] = await Promise.all([t, this._detectNetwork()]);
                    return e.chainId !== n.chainId && (this.#Nt ? (this.emit("network", n, e), this.#It === t && (this.#It = Promise.resolve(n))) : (0, r.hu)(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
                        event: "changed"
                    })), e.clone()
                }
                async getFeeData() {
                    const t = await this.getNetwork(),
                        e = async () => {
                            const {
                                _block: e,
                                gasPrice: n
                            } = await (0, l.m)({
                                _block: this.#Ut("latest", !1),
                                gasPrice: (async () => {
                                    try {
                                        const t = await this.#Lt({
                                            method: "getGasPrice"
                                        });
                                        return (0, u.yT)(t, "%response")
                                    } catch (t) {}
                                    return null
                                })()
                            });
                            let r = null,
                                s = null;
                            const i = this._wrapBlock(e, t);
                            return i && i.baseFeePerGas && (s = BigInt("1000000000"), r = i.baseFeePerGas * es + s), new _r.jW(n, r, s)
                        },
                        n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
                    if (n) {
                        const t = new yr(n.url),
                            r = await n.processFunc(e, this, t);
                        return new _r.jW(r.gasPrice, r.maxFeePerGas, r.maxPriorityFeePerGas)
                    }
                    return await e()
                }
                async estimateGas(t) {
                    let e = this._getTransactionRequest(t);
                    return ns(e) && (e = await e), (0, u.yT)(await this.#Lt({
                        method: "estimateGas",
                        transaction: e
                    }), "%response")
                }
                async# Ft(t, e, n) {
                    (0, r.hu)(n < 10, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
                        reason: "TOO_MANY_REDIRECTS",
                        transaction: Object.assign({}, t, {
                            blockTag: e,
                            enableCcipRead: !0
                        })
                    });
                    const s = (0, _r.kK)(t);
                    try {
                        return (0, c.Dv)(await this._perform({
                            method: "call",
                            transaction: s,
                            blockTag: e
                        }))
                    } catch (i) {
                        if (!this.disableCcipRead && (0, r.Hl)(i) && i.data && n >= 0 && "latest" === e && null != s.to && "0x556f1830" === (0, c.QB)(i.data, 0, 4)) {
                            const t = i.data,
                                o = await (0, a.ru)(s.to, this);
                            let l;
                            try {
                                l = function(t) {
                                    const e = {
                                        sender: "",
                                        urls: [],
                                        calldata: "",
                                        selector: "",
                                        extraData: "",
                                        errorArgs: []
                                    };
                                    (0, r.hu)((0, c.M5)(t) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
                                        reason: "insufficient OffchainLookup data"
                                    });
                                    const n = (0, c.QB)(t, 0, 32);
                                    (0, r.hu)((0, c.QB)(n, 0, 12) === (0, c.QB)(gs, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup sender"
                                    }), e.sender = (0, c.QB)(n, 12);
                                    try {
                                        const n = [],
                                            r = (0, u.Dx)((0, c.QB)(t, 32, 64)),
                                            s = (0, u.Dx)((0, c.QB)(t, r, r + 32)),
                                            i = (0, c.QB)(t, r + 32);
                                        for (let t = 0; t < s; t++) {
                                            const e = us(i, 32 * t);
                                            if (null == e) throw new Error("abort");
                                            n.push(e)
                                        }
                                        e.urls = n
                                    } catch (i) {
                                        (0, r.hu)(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup urls"
                                        })
                                    }
                                    try {
                                        const n = ls(t, 64);
                                        if (null == n) throw new Error("abort");
                                        e.calldata = n
                                    } catch (i) {
                                        (0, r.hu)(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup calldata"
                                        })
                                    }(0, r.hu)((0, c.QB)(t, 100, 128) === (0, c.QB)(gs, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup callbaackSelector"
                                    }), e.selector = (0, c.QB)(t, 96, 100);
                                    try {
                                        const n = ls(t, 128);
                                        if (null == n) throw new Error("abort");
                                        e.extraData = n
                                    } catch (i) {
                                        (0, r.hu)(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup extraData"
                                        })
                                    }
                                    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((t => e[t])), e
                                }((0, c.QB)(i.data, 4))
                            } catch (i) {
                                (0, r.hu)(!1, i.message, "OFFCHAIN_FAULT", {
                                    reason: "BAD_DATA",
                                    transaction: s,
                                    info: {
                                        data: t
                                    }
                                })
                            }(0, r.hu)(l.sender.toLowerCase() === o.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                                action: "call",
                                data: t,
                                reason: "OffchainLookup",
                                transaction: s,
                                invocation: null,
                                revert: {
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    name: "OffchainLookup",
                                    args: l.errorArgs
                                }
                            });
                            const h = await this.ccipReadFetch(s, l.calldata, l.urls);
                            (0, r.hu)(null != h, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                                reason: "FETCH_FAILED",
                                transaction: s,
                                info: {
                                    data: i.data,
                                    errorArgs: l.errorArgs
                                }
                            });
                            const f = {
                                to: o,
                                data: (0, c.zo)([l.selector, ps([h, l.extraData])])
                            };
                            this.emit("debug", {
                                action: "sendCcipReadCall",
                                transaction: f
                            });
                            try {
                                const t = await this.#Ft(f, e, n + 1);
                                return this.emit("debug", {
                                    action: "receiveCcipReadCallResult",
                                    transaction: Object.assign({}, f),
                                    result: t
                                }), t
                            } catch (i) {
                                throw this.emit("debug", {
                                    action: "receiveCcipReadCallError",
                                    transaction: Object.assign({}, f),
                                    error: i
                                }), i
                            }
                        }
                        throw i
                    }
                }
                async# Mt(t) {
                    const {
                        value: e
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        value: t
                    });
                    return e
                }
                async call(t) {
                    const {
                        tx: e,
                        blockTag: n
                    } = await (0, l.m)({
                        tx: this._getTransactionRequest(t),
                        blockTag: this._getBlockTag(t.blockTag)
                    });
                    return await this.#Mt(this.#Ft(e, n, t.enableCcipRead ? 0 : -1))
                }
                async# Gt(t, e, n) {
                    let r = this._getAddress(e),
                        s = this._getBlockTag(n);
                    return "string" === typeof r && "string" === typeof s || ([r, s] = await Promise.all([r, s])), await this.#Mt(this.#Lt(Object.assign(t, {
                        address: r,
                        blockTag: s
                    })))
                }
                async getBalance(t, e) {
                    return (0, u.yT)(await this.#Gt({
                        method: "getBalance"
                    }, t, e), "%response")
                }
                async getTransactionCount(t, e) {
                    return (0, u.Dx)(await this.#Gt({
                        method: "getTransactionCount"
                    }, t, e), "%response")
                }
                async getCode(t, e) {
                    return (0, c.Dv)(await this.#Gt({
                        method: "getCode"
                    }, t, e))
                }
                async getStorage(t, e, n) {
                    const r = (0, u.yT)(e, "position");
                    return (0, c.Dv)(await this.#Gt({
                        method: "getStorage",
                        position: r
                    }, t, n))
                }
                async broadcastTransaction(t) {
                    const {
                        blockNumber: e,
                        hash: n,
                        network: r
                    } = await (0, l.m)({
                        blockNumber: this.getBlockNumber(),
                        hash: this._perform({
                            method: "broadcastTransaction",
                            signedTransaction: t
                        }),
                        network: this.getNetwork()
                    }), s = ir.from(t);
                    if (s.hash !== n) throw new Error("@TODO: the returned hash did not match");
                    return this._wrapTransactionResponse(s, r).replaceableTransaction(e)
                }
                async# Ut(t, e) {
                    if ((0, c.A7)(t, 32)) return await this.#Lt({
                        method: "getBlock",
                        blockHash: t,
                        includeTransactions: e
                    });
                    let n = this._getBlockTag(t);
                    return "string" !== typeof n && (n = await n), await this.#Lt({
                        method: "getBlock",
                        blockTag: n,
                        includeTransactions: e
                    })
                }
                async getBlock(t, e) {
                    const {
                        network: n,
                        params: r
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#Ut(t, !!e)
                    });
                    return null == r ? null : this._wrapBlock(r, n)
                }
                async getTransaction(t) {
                    const {
                        network: e,
                        params: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#Lt({
                            method: "getTransaction",
                            hash: t
                        })
                    });
                    return null == n ? null : this._wrapTransactionResponse(n, e)
                }
                async getTransactionReceipt(t) {
                    const {
                        network: e,
                        params: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#Lt({
                            method: "getTransactionReceipt",
                            hash: t
                        })
                    });
                    if (null == n) return null;
                    if (null == n.gasPrice && null == n.effectiveGasPrice) {
                        const e = await this.#Lt({
                            method: "getTransaction",
                            hash: t
                        });
                        if (null == e) throw new Error("report this; could not find tx or effectiveGasPrice");
                        n.effectiveGasPrice = e.gasPrice
                    }
                    return this._wrapTransactionReceipt(n, e)
                }
                async getTransactionResult(t) {
                    const {
                        result: e
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        result: this.#Lt({
                            method: "getTransactionResult",
                            hash: t
                        })
                    });
                    return null == e ? null : (0, c.Dv)(e)
                }
                async getLogs(t) {
                    let e = this._getFilter(t);
                    ns(e) && (e = await e);
                    const {
                        network: n,
                        params: r
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        params: this.#Lt({
                            method: "getLogs",
                            filter: e
                        })
                    });
                    return r.map((t => this._wrapLog(t, n)))
                }
                _getProvider(t) {
                    (0, r.hu)(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
                        operation: "_getProvider()"
                    })
                }
                async getResolver(t) {
                    return await kr.fromName(this, t)
                }
                async getAvatar(t) {
                    const e = await this.getResolver(t);
                    return e ? await e.getAvatar() : null
                }
                async resolveName(t) {
                    const e = await this.getResolver(t);
                    return e ? await e.getAddress() : null
                }
                async lookupAddress(t) {
                    const e = Jt((t = (0, i.K)(t)).substring(2).toLowerCase() + ".addr.reverse");
                    try {
                        const n = await kr.getEnsAddress(this),
                            r = new N.CH(n, ["function resolver(bytes32) view returns (address)"], this),
                            s = await r.resolver(e);
                        if (null == s || s === I) return null;
                        const i = new N.CH(s, ["function name(bytes32) view returns (string)"], this),
                            a = await i.name(e);
                        return await this.resolveName(a) !== t ? null : a
                    } catch (n) {
                        if ((0, r.VZ)(n, "BAD_DATA") && "0x" === n.value) return null;
                        if ((0, r.VZ)(n, "CALL_EXCEPTION")) return null;
                        throw n
                    }
                    return null
                }
                async waitForTransaction(t, e, n) {
                    const s = null != e ? e : 1;
                    return 0 === s ? this.getTransactionReceipt(t) : new Promise((async (e, i) => {
                        let a = null;
                        const o = async n => {
                            try {
                                const r = await this.getTransactionReceipt(t);
                                if (null != r && n - r.blockNumber + 1 >= s) return e(r), void(a && (clearTimeout(a), a = null))
                            } catch (r) {
                                console.log("EEE", r)
                            }
                            this.once("block", o)
                        };
                        null != n && (a = setTimeout((() => {
                            null != a && (a = null, this.off("block", o), i((0, r.wf)("timeout", "TIMEOUT", {
                                reason: "timeout"
                            })))
                        }), n)), o(await this.getBlockNumber())
                    }))
                }
                async waitForBlock(t) {
                    (0, r.hu)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
                        operation: "waitForBlock"
                    })
                }
                _clearTimeout(t) {
                    const e = this.#Rt.get(t);
                    e && (e.timer && clearTimeout(e.timer), this.#Rt.delete(t))
                }
                _setTimeout(t, e) {
                    null == e && (e = 0);
                    const n = this.#St++,
                        r = () => {
                            this.#Rt.delete(n), t()
                        };
                    if (this.paused) this.#Rt.set(n, {
                        timer: null,
                        func: r,
                        time: e
                    });
                    else {
                        const t = setTimeout(r, e);
                        this.#Rt.set(n, {
                            timer: t,
                            func: r,
                            time: os()
                        })
                    }
                    return n
                }
                _forEachSubscriber(t) {
                    for (const e of this.#Ct.values()) t(e.subscriber)
                }
                _getSubscriber(t) {
                    switch (t.type) {
                        case "debug":
                        case "error":
                        case "network":
                            return new ss(t.type);
                        case "block":
                            {
                                const t = new Yr(this);
                                return t.pollingInterval = this.pollingInterval,
                                t
                            }
                        case "event":
                            return new ts(this, t.filter);
                        case "transaction":
                            return new $r(this, t.hash);
                        case "orphan":
                            return new Xr(this, t.filter)
                    }
                    throw new Error(`unsupported event: ${t.type}`)
                }
                _recoverSubscriber(t, e) {
                    for (const n of this.#Ct.values())
                        if (n.subscriber === t) {
                            n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), null != this.#kt && e.pause(this.#kt);
                            break
                        }
                }
                async# jt(t, e) {
                    let n = await as(t, this);
                    return "event" === n.type && e && e.length > 0 && !0 === e[0].removed && (n = await as({
                        orphan: "drop-log",
                        log: e[0]
                    }, this)), this.#Ct.get(n.tag) || null
                }
                async# Ht(t) {
                    const e = await as(t, this),
                        n = e.tag;
                    let r = this.#Ct.get(n);
                    if (!r) {
                        r = {
                            subscriber: this._getSubscriber(e),
                            tag: n,
                            addressableMap: new WeakMap,
                            nameMap: new Map,
                            started: !1,
                            listeners: []
                        }, this.#Ct.set(n, r)
                    }
                    return r
                }
                async on(t, e) {
                    const n = await this.#Ht(t);
                    return n.listeners.push({
                        listener: e,
                        once: !1
                    }), n.started || (n.subscriber.start(), n.started = !0, null != this.#kt && n.subscriber.pause(this.#kt)), this
                }
                async once(t, e) {
                    const n = await this.#Ht(t);
                    return n.listeners.push({
                        listener: e,
                        once: !0
                    }), n.started || (n.subscriber.start(), n.started = !0, null != this.#kt && n.subscriber.pause(this.#kt)), this
                }
                async emit(t, ...e) {
                    const n = await this.#jt(t, e);
                    if (!n || 0 === n.listeners.length) return !1;
                    const r = n.listeners.length;
                    return n.listeners = n.listeners.filter((({
                        listener: n,
                        once: r
                    }) => {
                        const s = new Ar.Z(this, r ? null : n, t);
                        try {
                            n.call(this, ...e, s)
                        } catch (i) {}
                        return !r
                    })), 0 === n.listeners.length && (n.started && n.subscriber.stop(), this.#Ct.delete(n.tag)), r > 0
                }
                async listenerCount(t) {
                    if (t) {
                        const e = await this.#jt(t);
                        return e ? e.listeners.length : 0
                    }
                    let e = 0;
                    for (const {
                            listeners: n
                        } of this.#Ct.values()) e += n.length;
                    return e
                }
                async listeners(t) {
                    if (t) {
                        const e = await this.#jt(t);
                        return e ? e.listeners.map((({
                            listener: t
                        }) => t)) : []
                    }
                    let e = [];
                    for (const {
                            listeners: n
                        } of this.#Ct.values()) e = e.concat(n.map((({
                        listener: t
                    }) => t)));
                    return e
                }
                async off(t, e) {
                    const n = await this.#jt(t);
                    if (!n) return this;
                    if (e) {
                        const t = n.listeners.map((({
                            listener: t
                        }) => t)).indexOf(e);
                        t >= 0 && n.listeners.splice(t, 1)
                    }
                    return e && 0 !== n.listeners.length || (n.started && n.subscriber.stop(), this.#Ct.delete(n.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        const {
                            tag: e,
                            started: n,
                            subscriber: r
                        } = await this.#Ht(t);
                        n && r.stop(), this.#Ct.delete(e)
                    } else
                        for (const [e, {
                                started: n,
                                subscriber: r
                            }] of this.#Ct) n && r.stop(), this.#Ct.delete(e);
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return this.off(t, e)
                }
                get destroyed() {
                    return this.#Ot
                }
                destroy() {
                    this.removeAllListeners();
                    for (const t of this.#Rt.keys()) this._clearTimeout(t);
                    this.#Ot = !0
                }
                get paused() {
                    return null != this.#kt
                }
                set paused(t) {
                    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1))
                }
                pause(t) {
                    if (this.#Tt = -1, null != this.#kt) {
                        if (this.#kt == !!t) return;
                        (0, r.hu)(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                            operation: "pause"
                        })
                    }
                    this._forEachSubscriber((e => e.pause(t))), this.#kt = !!t;
                    for (const e of this.#Rt.values()) e.timer && clearTimeout(e.timer), e.time = os() - e.time
                }
                resume() {
                    if (null != this.#kt) {
                        this._forEachSubscriber((t => t.resume())), this.#kt = null;
                        for (const t of this.#Rt.values()) {
                            let e = t.time;
                            e < 0 && (e = 0), t.time = os(), setTimeout(t.func, e)
                        }
                    }
                }
            } {#
                l;#
                Qt;#
                Vt;#
                Kt;#
                zt;#
                vt;#
                Jt() {
                    if (this.#Kt) return;
                    const t = 1 === this._getOption("batchMaxCount") ? 0 : this._getOption("batchStallTime");
                    this.#Kt = setTimeout((() => {
                        this.#Kt = null;
                        const t = this.#Vt;
                        for (this.#Vt = []; t.length;) {
                            const e = [t.shift()];
                            for (; t.length && e.length !== this.#l.batchMaxCount;) {
                                e.push(t.shift());
                                if (JSON.stringify(e.map((t => t.payload))).length > this.#l.batchMaxSize) {
                                    t.unshift(e.pop());
                                    break
                                }
                            }(async () => {
                                const t = 1 === e.length ? e[0].payload : e.map((t => t.payload));
                                this.emit("debug", {
                                    action: "sendRpcPayload",
                                    payload: t
                                });
                                try {
                                    const n = await this._send(t);
                                    this.emit("debug", {
                                        action: "receiveRpcResult",
                                        result: n
                                    });
                                    for (const {
                                            resolve: t,
                                            reject: s,
                                            payload: i
                                        } of e) {
                                        if (this.destroyed) {
                                            s((0, r.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                                operation: i.method
                                            }));
                                            continue
                                        }
                                        const e = n.filter((t => t.id === i.id))[0];
                                        if (null != e) "error" in e ? s(this.getRpcError(i, e)) : t(e.result);
                                        else {
                                            const t = (0, r.wf)("missing response for request", "BAD_DATA", {
                                                value: n,
                                                info: {
                                                    payload: i
                                                }
                                            });
                                            this.emit("error", t), s(t)
                                        }
                                    }
                                } catch (n) {
                                    this.emit("debug", {
                                        action: "receiveRpcError",
                                        error: n
                                    });
                                    for (const {
                                            reject: t
                                        } of e) t(n)
                                }
                            })()
                        }
                    }), t)
                }
                constructor(t, e) {
                    super(t, e), this.#Qt = 1, this.#l = Object.assign({}, Os, e || {}), this.#Vt = [], this.#Kt = null, this.#vt = null; {
                        let t = null;
                        const e = new Promise((e => {
                            t = e
                        }));
                        this.#zt = {
                            promise: e,
                            resolve: t
                        }
                    }
                    const n = this._getOption("staticNetwork");
                    n && ((0, r.en)(null == t || n.matches(t), "staticNetwork MUST match network object", "options", e), this.#vt = n)
                }
                _getOption(t) {
                    return this.#l[t]
                }
                get _network() {
                    return (0, r.hu)(this.#vt, "network is not available yet", "NETWORK_ERROR"), this.#vt
                }
                async _perform(t) {
                    if ("call" === t.method || "estimateGas" === t.method) {
                        let e = t.transaction;
                        if (e && null != e.type && (0, u.yT)(e.type) && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                            const n = await this.getFeeData();
                            null == n.maxFeePerGas && null == n.maxPriorityFeePerGas && (t = Object.assign({}, t, {
                                transaction: Object.assign({}, e, {
                                    type: void 0
                                })
                            }))
                        }
                    }
                    const e = this.getRpcRequest(t);
                    return null != e ? await this.send(e.method, e.args) : super._perform(t)
                }
                async _detectNetwork() {
                    const t = this._getOption("staticNetwork");
                    if (t) return t;
                    if (this.ready) return Vr.from((0, u.yT)(await this.send("eth_chainId", [])));
                    const e = {
                        id: this.#Qt++,
                        method: "eth_chainId",
                        params: [],
                        jsonrpc: "2.0"
                    };
                    let n;
                    this.emit("debug", {
                        action: "sendRpcPayload",
                        payload: e
                    });
                    try {
                        n = (await this._send(e))[0]
                    } catch (r) {
                        throw this.emit("debug", {
                            action: "receiveRpcError",
                            error: r
                        }), r
                    }
                    if (this.emit("debug", {
                            action: "receiveRpcResult",
                            result: n
                        }), "result" in n) return Vr.from((0, u.yT)(n.result));
                    throw this.getRpcError(e, n)
                }
                _start() {
                    null != this.#zt && null != this.#zt.resolve && (this.#zt.resolve(), this.#zt = null, (async () => {
                        for (; null == this.#vt && !this.destroyed;) try {
                            this.#vt = await this._detectNetwork()
                        } catch (t) {
                            if (this.destroyed) break;
                            console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", (0, r.wf)("failed to bootstrap network detection", "NETWORK_ERROR", {
                                event: "initial-network-discovery",
                                info: {
                                    error: t
                                }
                            })), await xs(1e3)
                        }
                        this.#Jt()
                    })())
                }
                async _waitUntilReady() {
                    if (null != this.#zt) return await this.#zt.promise
                }
                _getSubscriber(t) {
                    return "pending" === t.type ? new vs(this) : "event" === t.type ? this._getOption("polling") ? new ts(this, t.filter) : new bs(this, t.filter) : "orphan" === t.type && "drop-log" === t.filter.orphan ? new ss("orphan") : super._getSubscriber(t)
                }
                get ready() {
                    return null == this.#zt
                }
                getRpcTransaction(t) {
                    const e = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((n => {
                        if (null == t[n]) return;
                        let r = n;
                        "gasLimit" === n && (r = "gas"), e[r] = (0, u.B4)((0, u.yT)(t[n], `tx.${n}`))
                    })), ["from", "to", "data"].forEach((n => {
                        null != t[n] && (e[n] = (0, c.Dv)(t[n]))
                    })), t.accessList && (e.accessList = (0, k.z)(t.accessList)), e
                }
                getRpcRequest(t) {
                    switch (t.method) {
                        case "chainId":
                            return {
                                method: "eth_chainId",
                                args: []
                            };
                        case "getBlockNumber":
                            return {
                                method: "eth_blockNumber",
                                args: []
                            };
                        case "getGasPrice":
                            return {
                                method: "eth_gasPrice",
                                args: []
                            };
                        case "getBalance":
                            return {
                                method: "eth_getBalance",
                                args: [Cs(t.address), t.blockTag]
                            };
                        case "getTransactionCount":
                            return {
                                method: "eth_getTransactionCount",
                                args: [Cs(t.address), t.blockTag]
                            };
                        case "getCode":
                            return {
                                method: "eth_getCode",
                                args: [Cs(t.address), t.blockTag]
                            };
                        case "getStorage":
                            return {
                                method: "eth_getStorageAt",
                                args: [Cs(t.address), "0x" + t.position.toString(16), t.blockTag]
                            };
                        case "broadcastTransaction":
                            return {
                                method: "eth_sendRawTransaction",
                                args: [t.signedTransaction]
                            };
                        case "getBlock":
                            if ("blockTag" in t) return {
                                method: "eth_getBlockByNumber",
                                args: [t.blockTag, !!t.includeTransactions]
                            };
                            if ("blockHash" in t) return {
                                method: "eth_getBlockByHash",
                                args: [t.blockHash, !!t.includeTransactions]
                            };
                            break;
                        case "getTransaction":
                            return {
                                method: "eth_getTransactionByHash",
                                args: [t.hash]
                            };
                        case "getTransactionReceipt":
                            return {
                                method: "eth_getTransactionReceipt",
                                args: [t.hash]
                            };
                        case "call":
                            return {
                                method: "eth_call",
                                args: [this.getRpcTransaction(t.transaction), t.blockTag]
                            };
                        case "estimateGas":
                            return {
                                method: "eth_estimateGas",
                                args: [this.getRpcTransaction(t.transaction)]
                            };
                        case "getLogs":
                            return t.filter && null != t.filter.address && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(Cs) : t.filter.address = Cs(t.filter.address)), {
                                method: "eth_getLogs",
                                args: [t.filter]
                            }
                    }
                    return null
                }
                getRpcError(t, e) {
                    const {
                        method: n
                    } = t, {
                        error: i
                    } = e;
                    if ("eth_estimateGas" === n && i.message) {
                        const e = i.message;
                        if (!e.match(/revert/i) && e.match(/insufficient funds/i)) return (0, r.wf)("insufficient funds", "INSUFFICIENT_FUNDS", {
                            transaction: t.params[0],
                            info: {
                                payload: t,
                                error: i
                            }
                        })
                    }
                    if ("eth_call" === n || "eth_estimateGas" === n) {
                        const e = Bs(i),
                            r = s.R.getBuiltinCallException("eth_call" === n ? "call" : "estimateGas", t.params[0], e ? e.data : null);
                        return r.info = {
                            error: i,
                            payload: t
                        }, r
                    }
                    const a = JSON.stringify(function(t) {
                        const e = [];
                        return Ts(t, e), e
                    }(i));
                    if ("string" === typeof i.message && i.message.match(/user denied|ethers-user-denied/i)) {
                        const e = {
                            eth_sign: "signMessage",
                            personal_sign: "signMessage",
                            eth_signTypedData_v4: "signTypedData",
                            eth_signTransaction: "signTransaction",
                            eth_sendTransaction: "sendTransaction",
                            eth_requestAccounts: "requestAccess",
                            wallet_requestAccounts: "requestAccess"
                        };
                        return (0, r.wf)("user rejected action", "ACTION_REJECTED", {
                            action: e[n] || "unknown",
                            reason: "rejected",
                            info: {
                                payload: t,
                                error: i
                            }
                        })
                    }
                    if ("eth_sendRawTransaction" === n || "eth_sendTransaction" === n) {
                        const e = t.params[0];
                        if (a.match(/insufficient funds|base fee exceeds gas limit/i)) return (0, r.wf)("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                            transaction: e,
                            info: {
                                error: i
                            }
                        });
                        if (a.match(/nonce/i) && a.match(/too low/i)) return (0, r.wf)("nonce has already been used", "NONCE_EXPIRED", {
                            transaction: e,
                            info: {
                                error: i
                            }
                        });
                        if (a.match(/replacement transaction/i) && a.match(/underpriced/i)) return (0, r.wf)("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                            transaction: e,
                            info: {
                                error: i
                            }
                        });
                        if (a.match(/only replay-protected/i)) return (0, r.wf)("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                            operation: n,
                            info: {
                                transaction: e,
                                info: {
                                    error: i
                                }
                            }
                        })
                    }
                    let o = !!a.match(/the method .* does not exist/i);
                    return o || i && i.details && i.details.startsWith("Unauthorized method:") && (o = !0), o ? (0, r.wf)("unsupported operation", "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: {
                            error: i,
                            payload: t
                        }
                    }) : (0, r.wf)("could not coalesce error", "UNKNOWN_ERROR", {
                        error: i,
                        payload: t
                    })
                }
                send(t, e) {
                    if (this.destroyed) return Promise.reject((0, r.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t
                    }));
                    const n = this.#Qt++,
                        s = new Promise(((r, s) => {
                            this.#Vt.push({
                                resolve: r,
                                reject: s,
                                payload: {
                                    method: t,
                                    params: e,
                                    id: n,
                                    jsonrpc: "2.0"
                                }
                            })
                        }));
                    return this.#Jt(), s
                }
                async getSigner(t) {
                    null == t && (t = 0);
                    const e = this.send("eth_accounts", []);
                    if ("number" === typeof t) {
                        const n = await e;
                        if (t >= n.length) throw new Error("no such account");
                        return new Is(this, n[t])
                    }
                    const {
                        accounts: n
                    } = await (0, l.m)({
                        network: this.getNetwork(),
                        accounts: e
                    });
                    t = (0, i.K)(t);
                    for (const r of n)
                        if ((0, i.K)(r) === t) return new Is(this, t);
                    throw new Error("invalid account")
                }
                async listAccounts() {
                    return (await this.send("eth_accounts", [])).map((t => new Is(this, t)))
                }
                destroy() {
                    this.#Kt && (clearTimeout(this.#Kt), this.#Kt = null);
                    for (const {
                            payload: t,
                            reject: e
                        } of this.#Vt) e((0, r.wf)("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t.method
                    }));
                    this.#Vt = [], super.destroy()
                }
            } {#
                Zt;
                constructor(t, e) {
                    super(t, e), this.#Zt = 4e3
                }
                _getSubscriber(t) {
                    const e = super._getSubscriber(t);
                    return ks(e) && (e.pollingInterval = this.#Zt), e
                }
                get pollingInterval() {
                    return this.#Zt
                }
                set pollingInterval(t) {
                    if (!Number.isInteger(t) || t < 0) throw new Error("invalid interval");
                    this.#Zt = t, this._forEachSubscriber((t => {
                        ks(t) && (t.pollingInterval = this.#Zt)
                    }))
                }
            }

            function Bs(t) {
                if (null == t) return null;
                if ("string" === typeof t.message && t.message.match(/revert/i) && (0, c.A7)(t.data)) return {
                    message: t.message,
                    data: t.data
                };
                if ("object" === typeof t) {
                    for (const e in t) {
                        const n = Bs(t[e]);
                        if (n) return n
                    }
                    return null
                }
                if ("string" === typeof t) try {
                    return Bs(JSON.parse(t))
                } catch (e) {}
                return null
            }

            function Ts(t, e) {
                if (null != t) {
                    if ("string" === typeof t.message && e.push(t.message), "object" === typeof t)
                        for (const n in t) Ts(t[n], e);
                    if ("string" === typeof t) try {
                        return Ts(JSON.parse(t), e)
                    } catch (n) {}
                }
            }
            class Ss extends Ns {#
                st;
                constructor(t, e) {
                    super(e, {
                        batchMaxCount: 1
                    }), this.#st = async (e, n) => {
                        const r = {
                            method: e,
                            params: n
                        };
                        this.emit("debug", {
                            action: "sendEip1193Request",
                            payload: r
                        });
                        try {
                            const e = await t.request(r);
                            return this.emit("debug", {
                                action: "receiveEip1193Result",
                                result: e
                            }), e
                        } catch (s) {
                            const t = new Error(s.message);
                            throw t.code = s.code, t.data = s.data, t.payload = r, this.emit("debug", {
                                action: "receiveEip1193Error",
                                error: t
                            }), t
                        }
                    }
                }
                async send(t, e) {
                    return await this._start(), await super.send(t, e)
                }
                async _send(t) {
                    (0, r.en)(!Array.isArray(t), "EIP-1193 does not support batch request", "payload", t);
                    try {
                        const e = await this.#st(t.method, t.params || []);
                        return [{
                            id: t.id,
                            result: e
                        }]
                    } catch (e) {
                        return [{
                            id: t.id,
                            error: {
                                code: e.code,
                                data: e.data,
                                message: e.message
                            }
                        }]
                    }
                }
                getRpcError(t, e) {
                    switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
                        case 4001:
                            e.error.message = `ethers-user-denied: ${e.error.message}`;
                            break;
                        case 4200:
                            e.error.message = `ethers-unsupported: ${e.error.message}`
                    }
                    return super.getRpcError(t, e)
                }
                async hasSigner(t) {
                    null == t && (t = 0);
                    const e = await this.send("eth_accounts", []);
                    return "number" === typeof t ? e.length > t : (t = t.toLowerCase(), 0 !== e.filter((e => e.toLowerCase() === t)).length)
                }
                async getSigner(t) {
                    if (null == t && (t = 0), !(await this.hasSigner(t))) try {
                        await this.#st("eth_requestAccounts", [])
                    } catch (e) {
                        const t = e.payload;
                        throw this.getRpcError(t, {
                            id: t.id,
                            error: e
                        })
                    }
                    return await super.getSigner(t)
                }
            }
        },
        54101: function(t, e, n) {
            "use strict";
            n.d(e, {
                IX: function() {
                    return g
                },
                Mw: function() {
                    return y
                },
                Zb: function() {
                    return p
                },
                gO: function() {
                    return d
                },
                jW: function() {
                    return h
                },
                kK: function() {
                    return f
                }
            });
            var r = n(5857),
                s = n(455),
                i = n(12229),
                a = n(32423),
                o = n(1891);
            const c = BigInt(0);

            function u(t) {
                return null == t ? null : t
            }

            function l(t) {
                return null == t ? null : t.toString()
            }
            class h {
                gasPrice;
                maxFeePerGas;
                maxPriorityFeePerGas;
                constructor(t, e, n) {
                    (0, r.h)(this, {
                        gasPrice: u(t),
                        maxFeePerGas: u(e),
                        maxPriorityFeePerGas: u(n)
                    })
                }
                toJSON() {
                    const {
                        gasPrice: t,
                        maxFeePerGas: e,
                        maxPriorityFeePerGas: n
                    } = this;
                    return {
                        _type: "FeeData",
                        gasPrice: l(t),
                        maxFeePerGas: l(e),
                        maxPriorityFeePerGas: l(n)
                    }
                }
            }

            function f(t) {
                const e = {};
                t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = (0, s.Dv)(t.data));
                const n = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
                for (const s of n) s in t && null != t[s] && (e[s] = (0, i.yT)(t[s], `request.${s}`));
                const r = "type,nonce".split(/,/);
                for (const s of r) s in t && null != t[s] && (e[s] = (0, i.Dx)(t[s], `request.${s}`));
                return t.accessList && (e.accessList = (0, o.z)(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), e
            }
            class d {
                provider;
                number;
                hash;
                timestamp;
                parentHash;
                nonce;
                difficulty;
                gasLimit;
                gasUsed;
                miner;
                extraData;
                baseFeePerGas;#
                _t;
                constructor(t, e) {
                    this.#_t = t.transactions.map((t => "string" !== typeof t ? new y(t, e) : t)), (0, r.h)(this, {
                        provider: e,
                        hash: u(t.hash),
                        number: t.number,
                        timestamp: t.timestamp,
                        parentHash: t.parentHash,
                        nonce: t.nonce,
                        difficulty: t.difficulty,
                        gasLimit: t.gasLimit,
                        gasUsed: t.gasUsed,
                        miner: t.miner,
                        extraData: t.extraData,
                        baseFeePerGas: u(t.baseFeePerGas)
                    })
                }
                get transactions() {
                    return this.#_t.map((t => "string" === typeof t ? t : t.hash))
                }
                get prefetchedTransactions() {
                    const t = this.#_t.slice();
                    return 0 === t.length ? [] : ((0, a.hu)("object" === typeof t[0], "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
                        operation: "transactionResponses()"
                    }), t)
                }
                toJSON() {
                    const {
                        baseFeePerGas: t,
                        difficulty: e,
                        extraData: n,
                        gasLimit: r,
                        gasUsed: s,
                        hash: i,
                        miner: a,
                        nonce: o,
                        number: c,
                        parentHash: u,
                        timestamp: h,
                        transactions: f
                    } = this;
                    return {
                        _type: "Block",
                        baseFeePerGas: l(t),
                        difficulty: l(e),
                        extraData: n,
                        gasLimit: l(r),
                        gasUsed: l(s),
                        hash: i,
                        miner: a,
                        nonce: o,
                        number: c,
                        parentHash: u,
                        timestamp: h,
                        transactions: f
                    }
                }[Symbol.iterator]() {
                    let t = 0;
                    const e = this.transactions;
                    return {
                        next: () => t < this.length ? {
                            value: e[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get length() {
                    return this.#_t.length
                }
                get date() {
                    return null == this.timestamp ? null : new Date(1e3 * this.timestamp)
                }
                async getTransaction(t) {
                    let e;
                    if ("number" === typeof t) e = this.#_t[t];
                    else {
                        const n = t.toLowerCase();
                        for (const t of this.#_t) {
                            if ("string" === typeof t) {
                                if (t !== n) continue;
                                e = t;
                                break
                            }
                            if (t.hash !== n) {
                                e = t;
                                break
                            }
                        }
                    }
                    if (null == e) throw new Error("no such tx");
                    return "string" === typeof e ? await this.provider.getTransaction(e) : e
                }
                getPrefetchedTransaction(t) {
                    const e = this.prefetchedTransactions;
                    if ("number" === typeof t) return e[t];
                    t = t.toLowerCase();
                    for (const n of e)
                        if (n.hash === t) return n;
                    (0, a.en)(!1, "no matching transaction", "indexOrHash", t)
                }
                isMined() {
                    return !!this.hash
                }
                isLondon() {
                    return !!this.baseFeePerGas
                }
                orphanedEvent() {
                    if (!this.isMined()) throw new Error("");
                    return {
                        orphan: "drop-block",
                        hash: (t = this).hash,
                        number: t.number
                    };
                    var t
                }
            }
            class p {
                provider;
                transactionHash;
                blockHash;
                blockNumber;
                removed;
                address;
                data;
                topics;
                index;
                transactionIndex;
                constructor(t, e) {
                    this.provider = e;
                    const n = Object.freeze(t.topics.slice());
                    (0, r.h)(this, {
                        transactionHash: t.transactionHash,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        removed: t.removed,
                        address: t.address,
                        data: t.data,
                        topics: n,
                        index: t.index,
                        transactionIndex: t.transactionIndex
                    })
                }
                toJSON() {
                    const {
                        address: t,
                        blockHash: e,
                        blockNumber: n,
                        data: r,
                        index: s,
                        removed: i,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: c
                    } = this;
                    return {
                        _type: "log",
                        address: t,
                        blockHash: e,
                        blockNumber: n,
                        data: r,
                        index: s,
                        removed: i,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: c
                    }
                }
                async getBlock() {
                    const t = await this.provider.getBlock(this.blockHash);
                    return (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransaction() {
                    const t = await this.provider.getTransaction(this.transactionHash);
                    return (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransactionReceipt() {
                    const t = await this.provider.getTransactionReceipt(this.transactionHash);
                    return (0, a.hu)(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t
                }
                removedEvent() {
                    return {
                        orphan: "drop-log",
                        log: {
                            transactionHash: (t = this).transactionHash,
                            blockHash: t.blockHash,
                            blockNumber: t.blockNumber,
                            address: t.address,
                            data: t.data,
                            topics: Object.freeze(t.topics.slice()),
                            index: t.index
                        }
                    };
                    var t
                }
            }
            class g {
                provider;
                to;
                from;
                contractAddress;
                hash;
                index;
                blockHash;
                blockNumber;
                logsBloom;
                gasUsed;
                cumulativeGasUsed;
                gasPrice;
                type;
                status;
                root;#
                qt;
                constructor(t, e) {
                    this.#qt = Object.freeze(t.logs.map((t => new p(t, e))));
                    let n = c;
                    null != t.effectiveGasPrice ? n = t.effectiveGasPrice : null != t.gasPrice && (n = t.gasPrice), (0, r.h)(this, {
                        provider: e,
                        to: t.to,
                        from: t.from,
                        contractAddress: t.contractAddress,
                        hash: t.hash,
                        index: t.index,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        logsBloom: t.logsBloom,
                        gasUsed: t.gasUsed,
                        cumulativeGasUsed: t.cumulativeGasUsed,
                        gasPrice: n,
                        type: t.type,
                        status: t.status,
                        root: t.root
                    })
                }
                get logs() {
                    return this.#qt
                }
                toJSON() {
                    const {
                        to: t,
                        from: e,
                        contractAddress: n,
                        hash: r,
                        index: s,
                        blockHash: i,
                        blockNumber: a,
                        logsBloom: o,
                        logs: c,
                        status: u,
                        root: h
                    } = this;
                    return {
                        _type: "TransactionReceipt",
                        blockHash: i,
                        blockNumber: a,
                        contractAddress: n,
                        cumulativeGasUsed: l(this.cumulativeGasUsed),
                        from: e,
                        gasPrice: l(this.gasPrice),
                        gasUsed: l(this.gasUsed),
                        hash: r,
                        index: s,
                        logs: c,
                        logsBloom: o,
                        root: h,
                        status: u,
                        to: t
                    }
                }
                get length() {
                    return this.logs.length
                }[Symbol.iterator]() {
                    let t = 0;
                    return {
                        next: () => t < this.length ? {
                            value: this.logs[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get fee() {
                    return this.gasUsed * this.gasPrice
                }
                async getBlock() {
                    const t = await this.provider.getBlock(this.blockHash);
                    if (null == t) throw new Error("TODO");
                    return t
                }
                async getTransaction() {
                    const t = await this.provider.getTransaction(this.hash);
                    if (null == t) throw new Error("TODO");
                    return t
                }
                async getResult() {
                    return await this.provider.getTransactionResult(this.hash)
                }
                async confirmations() {
                    return await this.provider.getBlockNumber() - this.blockNumber + 1
                }
                removedEvent() {
                    return w(this)
                }
                reorderedEvent(t) {
                    return (0, a.hu)(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "reorderedEvent(other)"
                    }), m(this, t)
                }
            }
            class y {
                provider;
                blockNumber;
                blockHash;
                index;
                hash;
                type;
                to;
                from;
                nonce;
                gasLimit;
                gasPrice;
                maxPriorityFeePerGas;
                maxFeePerGas;
                data;
                value;
                chainId;
                signature;
                accessList;#
                Yt;
                constructor(t, e) {
                    this.provider = e, this.blockNumber = null != t.blockNumber ? t.blockNumber : null, this.blockHash = null != t.blockHash ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = null != t.maxFeePerGas ? t.maxFeePerGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = null != t.accessList ? t.accessList : null, this.#Yt = -1
                }
                toJSON() {
                    const {
                        blockNumber: t,
                        blockHash: e,
                        index: n,
                        hash: r,
                        type: s,
                        to: i,
                        from: a,
                        nonce: o,
                        data: c,
                        signature: u,
                        accessList: h
                    } = this;
                    return {
                        _type: "TransactionReceipt",
                        accessList: h,
                        blockNumber: t,
                        blockHash: e,
                        chainId: l(this.chainId),
                        data: c,
                        from: a,
                        gasLimit: l(this.gasLimit),
                        gasPrice: l(this.gasPrice),
                        hash: r,
                        maxFeePerGas: l(this.maxFeePerGas),
                        maxPriorityFeePerGas: l(this.maxPriorityFeePerGas),
                        nonce: o,
                        signature: u,
                        to: i,
                        index: n,
                        type: s,
                        value: l(this.value)
                    }
                }
                async getBlock() {
                    let t = this.blockNumber;
                    if (null == t) {
                        const e = await this.getTransaction();
                        e && (t = e.blockNumber)
                    }
                    if (null == t) return null;
                    const e = this.provider.getBlock(t);
                    if (null == e) throw new Error("TODO");
                    return e
                }
                async getTransaction() {
                    return this.provider.getTransaction(this.hash)
                }
                async confirmations() {
                    if (null == this.blockNumber) {
                        const {
                            tx: t,
                            blockNumber: e
                        } = await (0, r.m)({
                            tx: this.getTransaction(),
                            blockNumber: this.provider.getBlockNumber()
                        });
                        return null == t || null == t.blockNumber ? 0 : e - t.blockNumber + 1
                    }
                    return await this.provider.getBlockNumber() - this.blockNumber + 1
                }
                async wait(t, e) {
                    const n = null == t ? 1 : t,
                        s = null == e ? 0 : e;
                    let i = this.#Yt,
                        o = -1,
                        u = -1 === i;
                    const l = async () => {
                            if (u) return null;
                            const {
                                blockNumber: t,
                                nonce: e
                            } = await (0, r.m)({
                                blockNumber: this.provider.getBlockNumber(),
                                nonce: this.provider.getTransactionCount(this.from)
                            });
                            if (e < this.nonce) return void(i = t);
                            if (u) return null;
                            const s = await this.getTransaction();
                            if (!s || null == s.blockNumber)
                                for (-1 === o && (o = i - 3, o < this.#Yt && (o = this.#Yt)); o <= t;) {
                                    if (u) return null;
                                    const e = await this.provider.getBlock(o, !0);
                                    if (null == e) return;
                                    for (const t of e)
                                        if (t === this.hash) return;
                                    for (let r = 0; r < e.length; r++) {
                                        const s = await e.getTransaction(r);
                                        if (s.from === this.from && s.nonce === this.nonce) {
                                            if (u) return null;
                                            const e = await this.provider.getTransactionReceipt(s.hash);
                                            if (null == e) return;
                                            if (t - e.blockNumber + 1 < n) return;
                                            let r = "replaced";
                                            s.data === this.data && s.to === this.to && s.value === this.value ? r = "repriced" : "0x" === s.data && s.from === s.to && s.value === c && (r = "cancelled"), (0, a.hu)(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                                cancelled: "replaced" === r || "cancelled" === r,
                                                reason: r,
                                                replacement: s.replaceableTransaction(i),
                                                hash: s.hash,
                                                receipt: e
                                            })
                                        }
                                    }
                                    o++
                                }
                        },
                        h = t => {
                            if (null == t || 0 !== t.status) return t;
                            (0, a.hu)(!1, "transaction execution reverted", "CALL_EXCEPTION", {
                                action: "sendTransaction",
                                data: null,
                                reason: null,
                                invocation: null,
                                revert: null,
                                transaction: {
                                    to: t.to,
                                    from: t.from,
                                    data: ""
                                },
                                receipt: t
                            })
                        },
                        f = await this.provider.getTransactionReceipt(this.hash);
                    if (0 === n) return h(f);
                    if (f) {
                        if (await f.confirmations() >= n) return h(f)
                    } else if (await l(), 0 === n) return null;
                    const d = new Promise(((t, e) => {
                        const r = [],
                            o = () => {
                                r.forEach((t => t()))
                            };
                        if (r.push((() => {
                                u = !0
                            })), s > 0) {
                            const t = setTimeout((() => {
                                o(), e((0, a.wf)("wait for transaction timeout", "TIMEOUT"))
                            }), s);
                            r.push((() => {
                                clearTimeout(t)
                            }))
                        }
                        const c = async r => {
                            if (await r.confirmations() >= n) {
                                o();
                                try {
                                    t(h(r))
                                } catch (s) {
                                    e(s)
                                }
                            }
                        };
                        if (r.push((() => {
                                this.provider.off(this.hash, c)
                            })), this.provider.on(this.hash, c), i >= 0) {
                            const t = async () => {
                                try {
                                    await l()
                                } catch (n) {
                                    if ((0, a.VZ)(n, "TRANSACTION_REPLACED")) return o(), void e(n)
                                }
                                u || this.provider.once("block", t)
                            };
                            r.push((() => {
                                this.provider.off("block", t)
                            })), this.provider.once("block", t)
                        }
                    }));
                    return await d
                }
                isMined() {
                    return null != this.blockHash
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                removedEvent() {
                    return (0, a.hu)(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), w(this)
                }
                reorderedEvent(t) {
                    return (0, a.hu)(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), (0, a.hu)(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), m(this, t)
                }
                replaceableTransaction(t) {
                    (0, a.en)(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
                    const e = new y(this, this.provider);
                    return e.#Yt = t, e
                }
            }

            function m(t, e) {
                return {
                    orphan: "reorder-transaction",
                    tx: t,
                    other: e
                }
            }

            function w(t) {
                return {
                    orphan: "drop-transaction",
                    tx: t
                }
            }
        },
        1891: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return o
                }
            });
            var r = n(5556),
                s = n(32423),
                i = n(455);

            function a(t, e) {
                return {
                    address: (0, r.K)(t),
                    storageKeys: e.map(((t, e) => ((0, s.en)((0, i.A7)(t, 32), "invalid slot", `storageKeys[${e}]`, t), t.toLowerCase())))
                }
            }

            function o(t) {
                if (Array.isArray(t)) return t.map(((e, n) => Array.isArray(e) ? ((0, s.en)(2 === e.length, "invalid slot set", `value[${n}]`, e), a(e[0], e[1])) : ((0, s.en)(null != e && "object" === typeof e, "invalid address-slot set", "value", t), a(e.address, e.storageKeys))));
                (0, s.en)(null != t && "object" === typeof t, "invalid access list", "value", t);
                const e = Object.keys(t).map((e => {
                    const n = t[e].reduce(((t, e) => (t[e] = !0, t)), {});
                    return a(e, Object.keys(n).sort())
                }));
                return e.sort(((t, e) => t.address.localeCompare(e.address))), e
            }
        },
        455: function(t, e, n) {
            "use strict";
            n.d(e, {
                A7: function() {
                    return o
                },
                Dv: function() {
                    return l
                },
                M5: function() {
                    return f
                },
                Pw: function() {
                    return i
                },
                QB: function() {
                    return d
                },
                SK: function() {
                    return y
                },
                U3: function() {
                    return g
                },
                Zq: function() {
                    return c
                },
                h_: function() {
                    return a
                },
                zo: function() {
                    return h
                }
            });
            var r = n(32423);

            function s(t, e, n) {
                if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
                if ("string" === typeof t && t.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
                    const e = new Uint8Array((t.length - 2) / 2);
                    let n = 2;
                    for (let r = 0; r < e.length; r++) e[r] = parseInt(t.substring(n, n + 2), 16), n += 2;
                    return e
                }(0, r.en)(!1, "invalid BytesLike value", e || "value", t)
            }

            function i(t, e) {
                return s(t, e, !1)
            }

            function a(t, e) {
                return s(t, e, !0)
            }

            function o(t, e) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (("number" !== typeof e || t.length === 2 + 2 * e) && (!0 !== e || t.length % 2 === 0))
            }

            function c(t) {
                return o(t, !0) || t instanceof Uint8Array
            }
            const u = "0123456789abcdef";

            function l(t) {
                const e = i(t);
                let n = "0x";
                for (let r = 0; r < e.length; r++) {
                    const t = e[r];
                    n += u[(240 & t) >> 4] + u[15 & t]
                }
                return n
            }

            function h(t) {
                return "0x" + t.map((t => l(t).substring(2))).join("")
            }

            function f(t) {
                return o(t, !0) ? (t.length - 2) / 2 : i(t).length
            }

            function d(t, e, n) {
                const s = i(t);
                return null != n && n > s.length && (0, r.hu)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
                    buffer: s,
                    length: s.length,
                    offset: n
                }), l(s.slice(null == e ? 0 : e, null == n ? s.length : n))
            }

            function p(t, e, n) {
                const s = i(t);
                (0, r.hu)(e >= s.length, "padding exceeds data length", "BUFFER_OVERRUN", {
                    buffer: new Uint8Array(s),
                    length: e,
                    offset: e + 1
                });
                const a = new Uint8Array(e);
                return a.fill(0), n ? a.set(s, e - s.length) : a.set(s, 0), l(a)
            }

            function g(t, e) {
                return p(t, e, !0)
            }

            function y(t, e) {
                return p(t, e, !1)
            }
        },
        32423: function(t, e, n) {
            "use strict";
            n.d(e, {
                hu: function() {
                    return c
                },
                en: function() {
                    return u
                },
                fG: function() {
                    return l
                },
                fA: function() {
                    return f
                },
                NK: function() {
                    return d
                },
                Hl: function() {
                    return a
                },
                VZ: function() {
                    return i
                },
                wf: function() {
                    return o
                }
            });
            var r = n(5857);

            function s(t) {
                if (null == t) return "null";
                if (Array.isArray(t)) return "[ " + t.map(s).join(", ") + " ]";
                if (t instanceof Uint8Array) {
                    const e = "0123456789abcdef";
                    let n = "0x";
                    for (let r = 0; r < t.length; r++) n += e[t[r] >> 4], n += e[15 & t[r]];
                    return n
                }
                if ("object" === typeof t && "function" === typeof t.toJSON) return s(t.toJSON());
                switch (typeof t) {
                    case "boolean":
                    case "symbol":
                    case "number":
                        return t.toString();
                    case "bigint":
                        return BigInt(t).toString();
                    case "string":
                        return JSON.stringify(t);
                    case "object":
                        {
                            const e = Object.keys(t);
                            return e.sort(),
                            "{ " + e.map((e => `${s(e)}: ${s(t[e])}`)).join(", ") + " }"
                        }
                }
                return "[ COULD NOT SERIALIZE ]"
            }

            function i(t, e) {
                return t && t.code === e
            }

            function a(t) {
                return i(t, "CALL_EXCEPTION")
            }

            function o(t, e, n) {
                {
                    const r = [];
                    if (n) {
                        if ("message" in n || "code" in n || "name" in n) throw new Error(`value will overwrite populated values: ${s(n)}`);
                        for (const t in n) {
                            const e = n[t];
                            r.push(t + "=" + s(e))
                        }
                    }
                    r.push(`code=${e}`), r.push("version=6.7.1"), r.length && (t += " (" + r.join(", ") + ")")
                }
                let i;
                switch (e) {
                    case "INVALID_ARGUMENT":
                        i = new TypeError(t);
                        break;
                    case "NUMERIC_FAULT":
                    case "BUFFER_OVERRUN":
                        i = new RangeError(t);
                        break;
                    default:
                        i = new Error(t)
                }
                return (0, r.h)(i, {
                    code: e
                }), n && Object.assign(i, n), i
            }

            function c(t, e, n, r) {
                if (!t) throw o(e, n, r)
            }

            function u(t, e, n, r) {
                c(t, e, "INVALID_ARGUMENT", {
                    argument: n,
                    value: r
                })
            }

            function l(t, e, n) {
                null == n && (n = ""), n && (n = ": " + n), c(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
                    count: t,
                    expectedCount: e
                }), c(t <= e, "too many arguemnts" + n, "UNEXPECTED_ARGUMENT", {
                    count: t,
                    expectedCount: e
                })
            }
            const h = ["NFD", "NFC", "NFKD", "NFKC"].reduce(((t, e) => {
                try {
                    if ("test" !== "test".normalize(e)) throw new Error("bad");
                    if ("NFD" === e) {
                        const t = String.fromCharCode(233).normalize("NFD");
                        if (t !== String.fromCharCode(101, 769)) throw new Error("broken")
                    }
                    t.push(e)
                } catch (n) {}
                return t
            }), []);

            function f(t) {
                c(h.indexOf(t) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
                    operation: "String.prototype.normalize",
                    info: {
                        form: t
                    }
                })
            }

            function d(t, e, n) {
                if (null == n && (n = ""), t !== e) {
                    let t = n,
                        e = "new";
                    n && (t += ".", e += " " + n), c(!1, `private constructor; use ${t}from* methods`, "UNSUPPORTED_OPERATION", {
                        operation: e
                    })
                }
            }
        },
        56539: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return s
                }
            });
            var r = n(5857);
            class s {
                filter;
                emitter;#
                Wt;
                constructor(t, e, n) {
                    this.#Wt = e, (0, r.h)(this, {
                        emitter: t,
                        filter: n
                    })
                }
                async removeListener() {
                    null != this.#Wt && await this.emitter.off(this.filter, this.#Wt)
                }
            }
        },
        12229: function(t, e, n) {
            "use strict";
            n.d(e, {
                $j: function() {
                    return u
                },
                B4: function() {
                    return A
                },
                Dx: function() {
                    return g
                },
                Gh: function() {
                    return p
                },
                He: function() {
                    return y
                },
                _Y: function() {
                    return c
                },
                m9: function() {
                    return m
                },
                ot: function() {
                    return w
                },
                sS: function() {
                    return l
                },
                yT: function() {
                    return h
                }
            });
            var r = n(455),
                s = n(32423);
            const i = BigInt(0),
                a = BigInt(1),
                o = 9007199254740991;

            function c(t, e) {
                const n = f(t, "value"),
                    r = BigInt(g(e, "width"));
                if ((0, s.hu)(n >> r === i, "overflow", "NUMERIC_FAULT", {
                        operation: "fromTwos",
                        fault: "overflow",
                        value: t
                    }), n >> r - a) {
                    return -((~n & (a << r) - a) + a)
                }
                return n
            }

            function u(t, e) {
                let n = h(t, "value");
                const r = BigInt(g(e, "width")),
                    o = a << r - a;
                if (n < i) {
                    n = -n, (0, s.hu)(n <= o, "too low", "NUMERIC_FAULT", {
                        operation: "toTwos",
                        fault: "overflow",
                        value: t
                    });
                    return (~n & (a << r) - a) + a
                }
                return (0, s.hu)(n < o, "too high", "NUMERIC_FAULT", {
                    operation: "toTwos",
                    fault: "overflow",
                    value: t
                }), n
            }

            function l(t, e) {
                const n = f(t, "value"),
                    r = BigInt(g(e, "bits"));
                return n & (a << r) - a
            }

            function h(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return t;
                    case "number":
                        return (0, s.en)(Number.isInteger(t), "underflow", e || "value", t), (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t), BigInt(t);
                    case "string":
                        try {
                            if ("" === t) throw new Error("empty string");
                            return "-" === t[0] && "-" !== t[1] ? -BigInt(t.substring(1)) : BigInt(t)
                        } catch (n) {
                            (0, s.en)(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t)
                        }
                }(0, s.en)(!1, "invalid BigNumberish value", e || "value", t)
            }

            function f(t, e) {
                const n = h(t, e);
                return (0, s.hu)(n >= i, "unsigned value cannot be negative", "NUMERIC_FAULT", {
                    fault: "overflow",
                    operation: "getUint",
                    value: t
                }), n
            }
            const d = "0123456789abcdef";

            function p(t) {
                if (t instanceof Uint8Array) {
                    let e = "0x0";
                    for (const n of t) e += d[n >> 4], e += d[15 & n];
                    return BigInt(e)
                }
                return h(t)
            }

            function g(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t), Number(t);
                    case "number":
                        return (0, s.en)(Number.isInteger(t), "underflow", e || "value", t), (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t), t;
                    case "string":
                        try {
                            if ("" === t) throw new Error("empty string");
                            return g(BigInt(t), e)
                        } catch (n) {
                            (0, s.en)(!1, `invalid numeric string: ${n.message}`, e || "value", t)
                        }
                }(0, s.en)(!1, "invalid numeric value", e || "value", t)
            }

            function y(t) {
                return g(p(t))
            }

            function m(t, e) {
                let n = f(t, "value").toString(16);
                if (null == e) n.length % 2 && (n = "0" + n);
                else {
                    const r = g(e, "width");
                    for ((0, s.hu)(2 * r >= n.length, `value exceeds width (${r} bits)`, "NUMERIC_FAULT", {
                            operation: "toBeHex",
                            fault: "overflow",
                            value: t
                        }); n.length < 2 * r;) n = "0" + n
                }
                return "0x" + n
            }

            function w(t) {
                const e = f(t, "value");
                if (e === i) return new Uint8Array([]);
                let n = e.toString(16);
                n.length % 2 && (n = "0" + n);
                const r = new Uint8Array(n.length / 2);
                for (let s = 0; s < r.length; s++) {
                    const t = 2 * s;
                    r[s] = parseInt(n.substring(t, t + 2), 16)
                }
                return r
            }

            function A(t) {
                let e = (0, r.Dv)((0, r.Zq)(t) ? t : w(t)).substring(2);
                for (; e.startsWith("0");) e = e.substring(1);
                return "" === e && (e = "0"), "0x" + e
            }
        },
        5857: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                const r = e.split("|").map((t => t.trim()));
                for (let i = 0; i < r.length; i++) switch (e) {
                    case "any":
                        return;
                    case "bigint":
                    case "boolean":
                    case "number":
                    case "string":
                        if (typeof t === e) return
                }
                const s = new Error(`invalid value for type ${e}`);
                throw s.code = "INVALID_ARGUMENT", s.argument = `value.${n}`, s.value = t, s
            }
            async function s(t) {
                const e = Object.keys(t);
                return (await Promise.all(e.map((e => Promise.resolve(t[e]))))).reduce(((t, n, r) => (t[e[r]] = n, t)), {})
            }

            function i(t, e, n) {
                for (let s in e) {
                    let i = e[s];
                    const a = n ? n[s] : null;
                    a && r(i, a, s), Object.defineProperty(t, s, {
                        enumerable: !0,
                        value: i,
                        writable: !1
                    })
                }
            }
            n.d(e, {
                h: function() {
                    return i
                },
                m: function() {
                    return s
                }
            })
        },
        97155: function(t, e, n) {
            "use strict";
            n.d(e, {
                Y0: function() {
                    return c
                },
                ZN: function() {
                    return u
                }
            });
            var r = n(455),
                s = n(32423);

            function i(t, e, n, r, s) {
                if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
                    let t = 0;
                    for (let r = e + 1; r < n.length && n[r] >> 6 === 2; r++) t++;
                    return t
                }
                return "OVERRUN" === t ? n.length - e - 1 : 0
            }
            const a = Object.freeze({
                error: function(t, e, n, r, i) {
                    (0, s.en)(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", n)
                },
                ignore: i,
                replace: function(t, e, n, r, a) {
                    return "OVERLONG" === t ? ((0, s.en)("number" === typeof a, "invalid bad code point for replacement", "badCodepoint", a), r.push(a), 0) : (r.push(65533), i(t, e, n))
                }
            });

            function o(t, e) {
                null == e && (e = a.error);
                const n = (0, r.Pw)(t, "bytes"),
                    s = [];
                let i = 0;
                for (; i < n.length;) {
                    const t = n[i++];
                    if (t >> 7 === 0) {
                        s.push(t);
                        continue
                    }
                    let r = null,
                        a = null;
                    if (192 === (224 & t)) r = 1, a = 127;
                    else if (224 === (240 & t)) r = 2, a = 2047;
                    else {
                        if (240 !== (248 & t)) {
                            i += e(128 === (192 & t) ? "UNEXPECTED_CONTINUE" : "BAD_PREFIX", i - 1, n, s);
                            continue
                        }
                        r = 3, a = 65535
                    }
                    if (i - 1 + r >= n.length) {
                        i += e("OVERRUN", i - 1, n, s);
                        continue
                    }
                    let o = t & (1 << 8 - r - 1) - 1;
                    for (let c = 0; c < r; c++) {
                        let t = n[i];
                        if (128 != (192 & t)) {
                            i += e("MISSING_CONTINUE", i, n, s), o = null;
                            break
                        }
                        o = o << 6 | 63 & t, i++
                    }
                    null !== o && (o > 1114111 ? i += e("OUT_OF_RANGE", i - 1 - r, n, s, o) : o >= 55296 && o <= 57343 ? i += e("UTF16_SURROGATE", i - 1 - r, n, s, o) : o <= a ? i += e("OVERLONG", i - 1 - r, n, s, o) : s.push(o))
                }
                return s
            }

            function c(t, e) {
                null != e && ((0, s.fA)(e), t = t.normalize(e));
                let n = [];
                for (let r = 0; r < t.length; r++) {
                    const e = t.charCodeAt(r);
                    if (e < 128) n.push(e);
                    else if (e < 2048) n.push(e >> 6 | 192), n.push(63 & e | 128);
                    else if (55296 == (64512 & e)) {
                        r++;
                        const i = t.charCodeAt(r);
                        (0, s.en)(r < t.length && 56320 === (64512 & i), "invalid surrogate pair", "str", t);
                        const a = 65536 + ((1023 & e) << 10) + (1023 & i);
                        n.push(a >> 18 | 240), n.push(a >> 12 & 63 | 128), n.push(a >> 6 & 63 | 128), n.push(63 & a | 128)
                    } else n.push(e >> 12 | 224), n.push(e >> 6 & 63 | 128), n.push(63 & e | 128)
                }
                return new Uint8Array(n)
            }

            function u(t, e) {
                return o(t, e).map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("")
            }
        },
        26678: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`)
            }

            function s(t, ...e) {
                if (!(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }
            const i = {
                number: r,
                bool: function(t) {
                    if ("boolean" !== typeof t) throw new Error(`Expected boolean, not ${t}`)
                },
                bytes: s,
                hash: function(t) {
                    if ("function" !== typeof t || "function" !== typeof t.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
                    r(t.outputLen), r(t.blockLen)
                },
                exists: function(t, e = !0) {
                    if (t.destroyed) throw new Error("Hash instance has been destroyed");
                    if (e && t.finished) throw new Error("Hash#digest() has already been called")
                },
                output: function(t, e) {
                    s(t);
                    const n = e.outputLen;
                    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`)
                }
            };
            e.ZP = i
        },
        79903: function(t, e, n) {
            "use strict";
            const r = BigInt(2 ** 32 - 1),
                s = BigInt(32);

            function i(t, e = !1) {
                return e ? {
                    h: Number(t & r),
                    l: Number(t >> s & r)
                } : {
                    h: 0 | Number(t >> s & r),
                    l: 0 | Number(t & r)
                }
            }
            const a = {
                fromBig: i,
                split: function(t, e = !1) {
                    let n = new Uint32Array(t.length),
                        r = new Uint32Array(t.length);
                    for (let s = 0; s < t.length; s++) {
                        const {
                            h: a,
                            l: o
                        } = i(t[s], e);
                        [n[s], r[s]] = [a, o]
                    }
                    return [n, r]
                },
                toBig: (t, e) => BigInt(t >>> 0) << s | BigInt(e >>> 0),
                shrSH: (t, e, n) => t >>> n,
                shrSL: (t, e, n) => t << 32 - n | e >>> n,
                rotrSH: (t, e, n) => t >>> n | e << 32 - n,
                rotrSL: (t, e, n) => t << 32 - n | e >>> n,
                rotrBH: (t, e, n) => t << 64 - n | e >>> n - 32,
                rotrBL: (t, e, n) => t >>> n - 32 | e << 64 - n,
                rotr32H: (t, e) => e,
                rotr32L: (t, e) => t,
                rotlSH: (t, e, n) => t << n | e >>> 32 - n,
                rotlSL: (t, e, n) => e << n | t >>> 32 - n,
                rotlBH: (t, e, n) => e << n - 32 | t >>> 64 - n,
                rotlBL: (t, e, n) => t << n - 32 | e >>> 64 - n,
                add: function(t, e, n, r) {
                    const s = (e >>> 0) + (r >>> 0);
                    return {
                        h: t + n + (s / 2 ** 32 | 0) | 0,
                        l: 0 | s
                    }
                },
                add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
                add3H: (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0,
                add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
                add4H: (t, e, n, r, s) => e + n + r + s + (t / 2 ** 32 | 0) | 0,
                add5H: (t, e, n, r, s, i) => e + n + r + s + i + (t / 2 ** 32 | 0) | 0,
                add5L: (t, e, n, r, s) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0)
            };
            e.ZP = a
        },
        49606: function(t, e, n) {
            "use strict";
            n.d(e, {
                kb: function() {
                    return o
                },
                GL: function() {
                    return s
                },
                np: function() {
                    return i
                },
                O0: function() {
                    return a
                },
                Jq: function() {
                    return r
                },
                hE: function() {
                    return c
                },
                K$: function() {
                    return u
                }
            });
            "object" === typeof self && "crypto" in self && self.crypto;
            const r = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
                s = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
                i = (t, e) => t << 32 - e | t >>> e;
            if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])) throw new Error("Non little-endian hardware is not supported");
            Array.from({
                length: 256
            }, ((t, e) => e.toString(16).padStart(2, "0")));

            function a(t) {
                if ("string" === typeof t && (t = function(t) {
                        if ("string" !== typeof t) throw new TypeError("utf8ToBytes expected string, got " + typeof t);
                        return (new TextEncoder).encode(t)
                    }(t)), !(t instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
                return t
            }
            class o {
                clone() {
                    return this._cloneInto()
                }
            }

            function c(t) {
                const e = e => t().update(a(e)).digest(),
                    n = t();
                return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e
            }

            function u(t) {
                const e = (e, n) => t(n).update(a(e)).digest(),
                    n = t({});
                return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = e => t(e), e
            }
        }
    }
]);