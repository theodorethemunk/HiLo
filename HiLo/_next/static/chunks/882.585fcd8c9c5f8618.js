(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [882], {
        31050: function(t, e, r) {
            "use strict";
            e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
            const i = r(31416),
                n = r(93350),
                s = r(17309);

            function o(t) {
                const e = new Float64Array(16);
                if (t)
                    for (let r = 0; r < t.length; r++) e[r] = t[r];
                return e
            }
            e.jQ = 64, e.KS = 64, e.aP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                h = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                u = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(t, e) {
                for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
            }

            function g(t) {
                let e = 1;
                for (let r = 0; r < 16; r++) {
                    let i = t[r] + e + 65535;
                    e = Math.floor(i / 65536), t[r] = i - 65536 * e
                }
                t[0] += e - 1 + 37 * (e - 1)
            }

            function v(t, e, r) {
                const i = ~(r - 1);
                for (let n = 0; n < 16; n++) {
                    const r = i & (t[n] ^ e[n]);
                    t[n] ^= r, e[n] ^= r
                }
            }

            function y(t, e) {
                const r = o(),
                    i = o();
                for (let n = 0; n < 16; n++) i[n] = e[n];
                g(i), g(i), g(i);
                for (let n = 0; n < 2; n++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    const t = r[15] >> 16 & 1;
                    r[14] &= 65535, v(i, r, 1 - t)
                }
                for (let n = 0; n < 16; n++) t[2 * n] = 255 & i[n], t[2 * n + 1] = i[n] >> 8
            }

            function m(t, e) {
                let r = 0;
                for (let i = 0; i < 32; i++) r |= t[i] ^ e[i];
                return (1 & r - 1 >>> 8) - 1
            }

            function w(t, e) {
                const r = new Uint8Array(32),
                    i = new Uint8Array(32);
                return y(r, t), y(i, e), m(r, i)
            }

            function _(t) {
                const e = new Uint8Array(32);
                return y(e, t), 1 & e[0]
            }

            function b(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] + r[i]
            }

            function E(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] - r[i]
            }

            function I(t, e, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    u = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    v = 0,
                    y = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    E = 0,
                    I = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    C = 0,
                    R = 0,
                    A = 0,
                    j = 0,
                    N = 0,
                    T = 0,
                    L = 0,
                    M = 0,
                    D = r[0],
                    q = r[1],
                    z = r[2],
                    k = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    B = r[8],
                    K = r[9],
                    F = r[10],
                    Z = r[11],
                    W = r[12],
                    G = r[13],
                    J = r[14],
                    Y = r[15];
                i = e[0], s += i * D, o += i * q, a += i * z, c += i * k, h += i * $, u += i * U, l += i * H, p += i * V, f += i * B, d += i * K, g += i * F, v += i * Z, y += i * W, m += i * G, w += i * J, _ += i * Y, i = e[1], o += i * D, a += i * q, c += i * z, h += i * k, u += i * $, l += i * U, p += i * H, f += i * V, d += i * B, g += i * K, v += i * F, y += i * Z, m += i * W, w += i * G, _ += i * J, b += i * Y, i = e[2], a += i * D, c += i * q, h += i * z, u += i * k, l += i * $, p += i * U, f += i * H, d += i * V, g += i * B, v += i * K, y += i * F, m += i * Z, w += i * W, _ += i * G, b += i * J, E += i * Y, i = e[3], c += i * D, h += i * q, u += i * z, l += i * k, p += i * $, f += i * U, d += i * H, g += i * V, v += i * B, y += i * K, m += i * F, w += i * Z, _ += i * W, b += i * G, E += i * J, I += i * Y, i = e[4], h += i * D, u += i * q, l += i * z, p += i * k, f += i * $, d += i * U, g += i * H, v += i * V, y += i * B, m += i * K, w += i * F, _ += i * Z, b += i * W, E += i * G, I += i * J, P += i * Y, i = e[5], u += i * D, l += i * q, p += i * z, f += i * k, d += i * $, g += i * U, v += i * H, y += i * V, m += i * B, w += i * K, _ += i * F, b += i * Z, E += i * W, I += i * G, P += i * J, S += i * Y, i = e[6], l += i * D, p += i * q, f += i * z, d += i * k, g += i * $, v += i * U, y += i * H, m += i * V, w += i * B, _ += i * K, b += i * F, E += i * Z, I += i * W, P += i * G, S += i * J, O += i * Y, i = e[7], p += i * D, f += i * q, d += i * z, g += i * k, v += i * $, y += i * U, m += i * H, w += i * V, _ += i * B, b += i * K, E += i * F, I += i * Z, P += i * W, S += i * G, O += i * J, x += i * Y, i = e[8], f += i * D, d += i * q, g += i * z, v += i * k, y += i * $, m += i * U, w += i * H, _ += i * V, b += i * B, E += i * K, I += i * F, P += i * Z, S += i * W, O += i * G, x += i * J, C += i * Y, i = e[9], d += i * D, g += i * q, v += i * z, y += i * k, m += i * $, w += i * U, _ += i * H, b += i * V, E += i * B, I += i * K, P += i * F, S += i * Z, O += i * W, x += i * G, C += i * J, R += i * Y, i = e[10], g += i * D, v += i * q, y += i * z, m += i * k, w += i * $, _ += i * U, b += i * H, E += i * V, I += i * B, P += i * K, S += i * F, O += i * Z, x += i * W, C += i * G, R += i * J, A += i * Y, i = e[11], v += i * D, y += i * q, m += i * z, w += i * k, _ += i * $, b += i * U, E += i * H, I += i * V, P += i * B, S += i * K, O += i * F, x += i * Z, C += i * W, R += i * G, A += i * J, j += i * Y, i = e[12], y += i * D, m += i * q, w += i * z, _ += i * k, b += i * $, E += i * U, I += i * H, P += i * V, S += i * B, O += i * K, x += i * F, C += i * Z, R += i * W, A += i * G, j += i * J, N += i * Y, i = e[13], m += i * D, w += i * q, _ += i * z, b += i * k, E += i * $, I += i * U, P += i * H, S += i * V, O += i * B, x += i * K, C += i * F, R += i * Z, A += i * W, j += i * G, N += i * J, T += i * Y, i = e[14], w += i * D, _ += i * q, b += i * z, E += i * k, I += i * $, P += i * U, S += i * H, O += i * V, x += i * B, C += i * K, R += i * F, A += i * Z, j += i * W, N += i * G, T += i * J, L += i * Y, i = e[15], _ += i * D, b += i * q, E += i * z, I += i * k, P += i * $, S += i * U, O += i * H, x += i * V, C += i * B, R += i * K, A += i * F, j += i * Z, N += i * W, T += i * G, L += i * J, M += i * Y, s += 38 * b, o += 38 * E, a += 38 * I, c += 38 * P, h += 38 * S, u += 38 * O, l += 38 * x, p += 38 * C, f += 38 * R, d += 38 * A, g += 38 * j, v += 38 * N, y += 38 * T, m += 38 * L, w += 38 * M, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = c, t[4] = h, t[5] = u, t[6] = l, t[7] = p, t[8] = f, t[9] = d, t[10] = g, t[11] = v, t[12] = y, t[13] = m, t[14] = w, t[15] = _
            }

            function P(t, e) {
                I(t, e, e)
            }

            function S(t, e) {
                const r = o();
                let i;
                for (i = 0; i < 16; i++) r[i] = e[i];
                for (i = 253; i >= 0; i--) P(r, r), 2 !== i && 4 !== i && I(r, r, e);
                for (i = 0; i < 16; i++) t[i] = r[i]
            }

            function O(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    h = o(),
                    l = o(),
                    p = o();
                E(r, t[1], t[0]), E(p, e[1], e[0]), I(r, r, p), b(i, t[0], t[1]), b(p, e[0], e[1]), I(i, i, p), I(n, t[3], e[3]), I(n, n, u), I(s, t[2], e[2]), b(s, s, s), E(a, i, r), E(c, s, n), b(h, s, n), b(l, i, r), I(t[0], a, c), I(t[1], l, h), I(t[2], h, c), I(t[3], a, l)
            }

            function x(t, e, r) {
                for (let i = 0; i < 4; i++) v(t[i], e[i], r)
            }

            function C(t, e) {
                const r = o(),
                    i = o(),
                    n = o();
                S(n, e[2]), I(r, e[0], n), I(i, e[1], n), y(t, i), t[31] ^= _(r) << 7
            }

            function R(t, e, r) {
                d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a);
                for (let i = 255; i >= 0; --i) {
                    const n = r[i / 8 | 0] >> (7 & i) & 1;
                    x(t, e, n), O(e, t), O(t, t), x(t, e, n)
                }
            }

            function A(t, e) {
                const r = [o(), o(), o(), o()];
                d(r[0], l), d(r[1], p), d(r[2], c), I(r[3], l, p), R(t, r, e)
            }

            function j(t) {
                if (t.length !== e.aP) throw new Error(`ed25519: seed must be ${e.aP} bytes`);
                const r = (0, n.hash)(t);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                const i = new Uint8Array(32),
                    s = [o(), o(), o(), o()];
                A(s, r), C(i, s);
                const a = new Uint8Array(64);
                return a.set(t), a.set(i, 32), {
                    publicKey: i,
                    secretKey: a
                }
            }
            e._w = j;
            const N = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function T(t, e) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) e[n] += r - 16 * e[i] * N[n - (i - 32)], r = Math.floor((e[n] + 128) / 256), e[n] -= 256 * r;
                    e[n] += r, e[i] = 0
                }
                for (r = 0, n = 0; n < 32; n++) e[n] += r - (e[31] >> 4) * N[n], r = e[n] >> 8, e[n] &= 255;
                for (n = 0; n < 32; n++) e[n] -= r * N[n];
                for (i = 0; i < 32; i++) e[i + 1] += e[i] >> 8, t[i] = 255 & e[i]
            }

            function L(t) {
                const e = new Float64Array(64);
                for (let r = 0; r < 64; r++) e[r] = t[r];
                for (let r = 0; r < 64; r++) t[r] = 0;
                T(t, e)
            }

            function M(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    u = o(),
                    l = o(),
                    p = o();
                return d(t[2], c),
                    function(t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                        t[15] &= 32767
                    }(t[1], e), P(n, t[1]), I(s, n, h), E(n, n, t[2]), b(s, t[2], s), P(u, s), P(l, u), I(p, l, u), I(r, p, n), I(r, r, s),
                    function(t, e) {
                        const r = o();
                        let i;
                        for (i = 0; i < 16; i++) r[i] = e[i];
                        for (i = 250; i >= 0; i--) P(r, r), 1 !== i && I(r, r, e);
                        for (i = 0; i < 16; i++) t[i] = r[i]
                    }(r, r), I(r, r, n), I(r, r, s), I(r, r, s), I(t[0], r, s), P(i, t[0]), I(i, i, s), w(i, n) && I(t[0], t[0], f), P(i, t[0]), I(i, i, s), w(i, n) ? -1 : (_(t[0]) === e[31] >> 7 && E(t[0], a, t[0]), I(t[3], t[0], t[1]), 0)
            }
            e.Xx = function(t, e) {
                const r = new Float64Array(64),
                    i = [o(), o(), o(), o()],
                    s = (0, n.hash)(t.subarray(0, 32));
                s[0] &= 248, s[31] &= 127, s[31] |= 64;
                const a = new Uint8Array(64);
                a.set(s.subarray(32), 32);
                const c = new n.SHA512;
                c.update(a.subarray(32)), c.update(e);
                const h = c.digest();
                c.clean(), L(h), A(i, h), C(a, i), c.reset(), c.update(a.subarray(0, 32)), c.update(t.subarray(32)), c.update(e);
                const u = c.digest();
                L(u);
                for (let n = 0; n < 32; n++) r[n] = h[n];
                for (let n = 0; n < 32; n++)
                    for (let t = 0; t < 32; t++) r[n + t] += u[n] * s[t];
                return T(a.subarray(32), r), a
            }
        },
        93350: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(98099),
                n = r(17309);
            e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
            var s = function() {
                function t() {
                    this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return t.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, t.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, t.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, t.prototype.update = function(t, r) {
                    if (void 0 === r && (r = t.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < e.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                    return this
                }, t.prototype.finish = function(t) {
                    if (!this._finished) {
                        var e = this._bytesHashed,
                            r = this._bufferLength,
                            n = e / 536870912 | 0,
                            s = e << 3,
                            o = e % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        i.writeUint32BE(n, this._buffer, o - 8), i.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) i.writeUint32BE(this._stateHi[c], t, 8 * c), i.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
                    return this
                }, t.prototype.digest = function() {
                    var t = new Uint8Array(this.digestLength);
                    return this.finish(t), t
                }, t.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, t.prototype.restoreState = function(t) {
                    return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
                }, t.prototype.cleanSavedState = function(t) {
                    n.wipe(t.stateHi), n.wipe(t.stateLo), t.buffer && n.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
                }, t
            }();
            e.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(t, e, r, n, s, a, c) {
                for (var h, u, l, p, f, d, g, v, y = r[0], m = r[1], w = r[2], _ = r[3], b = r[4], E = r[5], I = r[6], P = r[7], S = n[0], O = n[1], x = n[2], C = n[3], R = n[4], A = n[5], j = n[6], N = n[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var L = 8 * T + a;
                        t[T] = i.readUint32BE(s, L), e[T] = i.readUint32BE(s, L + 4)
                    }
                    for (T = 0; T < 80; T++) {
                        var M, D, q = y,
                            z = m,
                            k = w,
                            $ = _,
                            U = b,
                            H = E,
                            V = I,
                            B = S,
                            K = O,
                            F = x,
                            Z = C,
                            W = R,
                            G = A,
                            J = j;
                        if (f = 65535 & (u = N), d = u >>> 16, g = 65535 & (h = P), v = h >>> 16, f += 65535 & (u = (R >>> 14 | b << 18) ^ (R >>> 18 | b << 14) ^ (b >>> 9 | R << 23)), d += u >>> 16, g += 65535 & (h = (b >>> 14 | R << 18) ^ (b >>> 18 | R << 14) ^ (R >>> 9 | b << 23)), v += h >>> 16, f += 65535 & (u = R & A ^ ~R & j), d += u >>> 16, g += 65535 & (h = b & E ^ ~b & I), v += h >>> 16, h = o[2 * T], f += 65535 & (u = o[2 * T + 1]), d += u >>> 16, g += 65535 & h, v += h >>> 16, h = t[T % 16], d += (u = e[T % 16]) >>> 16, g += 65535 & h, v += h >>> 16, g += (d += (f += 65535 & u) >>> 16) >>> 16, f = 65535 & (u = p = 65535 & f | d << 16), d = u >>> 16, g = 65535 & (h = l = 65535 & g | (v += g >>> 16) << 16), v = h >>> 16, f += 65535 & (u = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)), d += u >>> 16, g += 65535 & (h = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)), v += h >>> 16, d += (u = S & O ^ S & x ^ O & x) >>> 16, g += 65535 & (h = y & m ^ y & w ^ m & w), v += h >>> 16, M = 65535 & (g += (d += (f += 65535 & u) >>> 16) >>> 16) | (v += g >>> 16) << 16, D = 65535 & f | d << 16, f = 65535 & (u = Z), d = u >>> 16, g = 65535 & (h = $), v = h >>> 16, d += (u = p) >>> 16, g += 65535 & (h = l), v += h >>> 16, m = q, w = z, _ = k, b = $ = 65535 & (g += (d += (f += 65535 & u) >>> 16) >>> 16) | (v += g >>> 16) << 16, E = U, I = H, P = V, y = M, O = B, x = K, C = F, R = Z = 65535 & f | d << 16, A = W, j = G, N = J, S = D, T % 16 === 15)
                            for (L = 0; L < 16; L++) h = t[L], f = 65535 & (u = e[L]), d = u >>> 16, g = 65535 & h, v = h >>> 16, h = t[(L + 9) % 16], f += 65535 & (u = e[(L + 9) % 16]), d += u >>> 16, g += 65535 & h, v += h >>> 16, l = t[(L + 1) % 16], f += 65535 & (u = ((p = e[(L + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), d += u >>> 16, g += 65535 & (h = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7), v += h >>> 16, l = t[(L + 14) % 16], d += (u = ((p = e[(L + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16, g += 65535 & (h = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6), v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, t[L] = 65535 & g | v << 16, e[L] = 65535 & f | d << 16
                    }
                    f = 65535 & (u = S), d = u >>> 16, g = 65535 & (h = y), v = h >>> 16, h = r[0], d += (u = n[0]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[0] = y = 65535 & g | v << 16, n[0] = S = 65535 & f | d << 16, f = 65535 & (u = O), d = u >>> 16, g = 65535 & (h = m), v = h >>> 16, h = r[1], d += (u = n[1]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[1] = m = 65535 & g | v << 16, n[1] = O = 65535 & f | d << 16, f = 65535 & (u = x), d = u >>> 16, g = 65535 & (h = w), v = h >>> 16, h = r[2], d += (u = n[2]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[2] = w = 65535 & g | v << 16, n[2] = x = 65535 & f | d << 16, f = 65535 & (u = C), d = u >>> 16, g = 65535 & (h = _), v = h >>> 16, h = r[3], d += (u = n[3]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[3] = _ = 65535 & g | v << 16, n[3] = C = 65535 & f | d << 16, f = 65535 & (u = R), d = u >>> 16, g = 65535 & (h = b), v = h >>> 16, h = r[4], d += (u = n[4]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[4] = b = 65535 & g | v << 16, n[4] = R = 65535 & f | d << 16, f = 65535 & (u = A), d = u >>> 16, g = 65535 & (h = E), v = h >>> 16, h = r[5], d += (u = n[5]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[5] = E = 65535 & g | v << 16, n[5] = A = 65535 & f | d << 16, f = 65535 & (u = j), d = u >>> 16, g = 65535 & (h = I), v = h >>> 16, h = r[6], d += (u = n[6]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[6] = I = 65535 & g | v << 16, n[6] = j = 65535 & f | d << 16, f = 65535 & (u = N), d = u >>> 16, g = 65535 & (h = P), v = h >>> 16, h = r[7], d += (u = n[7]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[7] = P = 65535 & g | v << 16, n[7] = N = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            e.hash = function(t) {
                var e = new s;
                e.update(t);
                var r = e.digest();
                return e.clean(), r
            }
        },
        40926: function(t, e, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                const t = i();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = i, e.getSubtleCrypto = n, e.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        88618: function(t, e, r) {
            "use strict";
            var i = r(34155);

            function n() {
                return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return "undefined" !== typeof i && "undefined" !== typeof i.versions && "undefined" !== typeof i.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = n, e.isNode = s, e.isBrowser = function() {
                return !n() && !s()
            }
        },
        1468: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(70655);
            i.__exportStar(r(40926), e), i.__exportStar(r(88618), e)
        },
        20882: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                EthereumProvider: function() {
                    return kn
                },
                OPTIONAL_EVENTS: function() {
                    return On
                },
                OPTIONAL_METHODS: function() {
                    return Pn
                },
                REQUIRED_EVENTS: function() {
                    return Sn
                },
                REQUIRED_METHODS: function() {
                    return In
                },
                default: function() {
                    return zn
                }
            });
            var i = r(17187),
                n = r.n(i),
                s = r(5015),
                o = r(85150),
                a = r(90772),
                c = r(9107),
                h = r(38200);
            class u extends h.q {
                constructor(t) {
                    super(), this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class l extends h.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e, this.records = new Map
                }
            }
            class p extends h.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class f extends h.q {
                constructor(t) {
                    super()
                }
            }
            class d extends h.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class g extends h.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e
                }
            }

            function v(t) {
                if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return (t => {
                        const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                        return JSON.parse(e, ((t, e) => "string" === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
                    })(t)
                } catch (e) {
                    return t
                }
            }

            function y(t) {
                return "string" === typeof t ? t : (e = t, JSON.stringify(e, ((t, e) => "bigint" === typeof e ? e.toString() + "n" : e)) || "");
                var e
            }
            var m = r(31050),
                w = r(31416),
                _ = r(66736);
            const b = "base64url",
                E = "did",
                I = "key",
                P = "base58btc";
            var S = r(20605),
                O = r(92263),
                x = r(52217);

            function C(t) {
                return (0, O.B)((0, x.m)(y(t), "utf8"), b)
            }

            function R(t) {
                const e = (0, x.m)("K36", P),
                    r = "z" + (0, O.B)((0, S.z)([e, t]), P);
                return [E, I, r].join(":")
            }

            function A(t = (0, w.randomBytes)(32)) {
                return m._w(t)
            }
            async function j(t, e, r, i, n = (0, _.fromMiliseconds)(Date.now())) {
                const s = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: R(i.publicKey),
                        sub: t,
                        aud: e,
                        iat: n,
                        exp: n + r
                    },
                    a = (c = {
                        header: s,
                        payload: o
                    }, (0, x.m)([C(c.header), C(c.payload)].join("."), "utf8"));
                var c;
                return function(t) {
                    return [C(t.header), C(t.payload), (e = t.signature, (0, O.B)(e, b))].join(".");
                    var e
                }({
                    header: s,
                    payload: o,
                    signature: m.Xx(i.secretKey, a)
                })
            }
            r(43014);
            var N = r(37466);
            const T = "INTERNAL_ERROR",
                L = "SERVER_ERROR",
                M = [-32700, -32600, -32601, -32602, -32603],
                D = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [T]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [L]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function q(t) {
                return M.includes(t)
            }

            function z(t) {
                return Object.keys(D).includes(t) ? D[t] : D.SERVER_ERROR
            }

            function k(t) {
                const e = Object.values(D).find((e => e.code === t));
                return e || D.SERVER_ERROR
            }

            function $(t, e, r) {
                return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t
            }
            var U = r(1468);

            function H(t = 3) {
                return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
            }

            function V(t = 6) {
                return BigInt(H(t))
            }

            function B(t, e, r) {
                return {
                    id: r || H(),
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                }
            }

            function K(t, e) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function F(t, e, r) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: Z(e, r)
                }
            }

            function Z(t, e) {
                return "undefined" === typeof t ? z(T) : ("string" === typeof t && (t = Object.assign(Object.assign({}, z(L)), {
                    message: t
                })), "undefined" !== typeof e && (t.data = e), q(t.code) && (t = k(t.code)), t)
            }

            function W(t, e) {
                const r = function(t) {
                    const e = t.match(new RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(t);
                return "undefined" !== typeof r && new RegExp(e).test(r)
            }

            function G(t) {
                return W(t, "^https?:")
            }

            function J(t) {
                return W(t, "^wss?:")
            }

            function Y(t) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(t)
            }

            function Q(t) {
                return "object" === typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
            }

            function X(t) {
                return Q(t) && "method" in t
            }

            function tt(t) {
                return Q(t) && (et(t) || rt(t))
            }

            function et(t) {
                return "result" in t
            }

            function rt(t) {
                return "error" in t
            }
            class it extends class extends class extends class {} {
                constructor() {
                    super()
                }
            } {
                constructor(t) {
                    super()
                }
            } {
                constructor(t) {
                    super(t), this.events = new i.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect(t = this.connection) {
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict(B(t.method, t.params || [], t.id || V().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise((async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (n) {
                            i(n)
                        }
                        this.events.on(`${t.id}`, (t => {
                            rt(t) ? i(t.error) : r(t.result)
                        }));
                        try {
                            await this.connection.send(t, e)
                        } catch (n) {
                            i(n)
                        }
                    }))
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), tt(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(t = this.connection) {
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (t => this.onPayload(t))), this.connection.on("close", (t => this.onClose(t))), this.connection.on("error", (t => this.events.emit("error", t))), this.connection.on("register_error", (t => this.onClose())), this.hasRegisteredEventListeners = !0)
                }
            }
            const nt = t => t.split("?")[0],
                st = "undefined" !== typeof WebSocket ? WebSocket : "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket ? r.g.WebSocket : "undefined" !== typeof window && "undefined" !== typeof window.WebSocket ? window.WebSocket : "undefined" !== typeof self && "undefined" !== typeof self.WebSocket ? self.WebSocket : r(57026);
            var ot = class {
                    constructor(t) {
                        if (this.url = t, this.events = new i.EventEmitter, this.registering = !1, !J(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                        this.url = t
                    }
                    get connected() {
                        return "undefined" !== typeof this.socket
                    }
                    get connecting() {
                        return this.registering
                    }
                    on(t, e) {
                        this.events.on(t, e)
                    }
                    once(t, e) {
                        this.events.once(t, e)
                    }
                    off(t, e) {
                        this.events.off(t, e)
                    }
                    removeListener(t, e) {
                        this.events.removeListener(t, e)
                    }
                    async open(t = this.url) {
                        await this.register(t)
                    }
                    async close() {
                        return new Promise(((t, e) => {
                            "undefined" !== typeof this.socket ? (this.socket.onclose = e => {
                                this.onClose(e), t()
                            }, this.socket.close()) : e(new Error("Connection already closed"))
                        }))
                    }
                    async send(t, e) {
                        "undefined" === typeof this.socket && (this.socket = await this.register());
                        try {
                            this.socket.send(y(t))
                        } catch (r) {
                            this.onError(t.id, r)
                        }
                    }
                    register(t = this.url) {
                        if (!J(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                        if (this.registering) {
                            const t = this.events.getMaxListeners();
                            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                                this.events.once("register_error", (t => {
                                    this.resetMaxListeners(), e(t)
                                })), this.events.once("open", (() => {
                                    if (this.resetMaxListeners(), "undefined" === typeof this.socket) return e(new Error("WebSocket connection is missing or invalid"));
                                    t(this.socket)
                                }))
                            }))
                        }
                        return this.url = t, this.registering = !0, new Promise(((e, i) => {
                            const n = (0, U.isReactNative)() ? void 0 : {
                                    rejectUnauthorized: !Y(t)
                                },
                                s = new st(t, [], n);
                            "undefined" !== typeof WebSocket || "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket || "undefined" !== typeof window && "undefined" !== typeof window.WebSocket || "undefined" !== typeof self && "undefined" !== typeof self.WebSocket ? s.onerror = t => {
                                const e = t;
                                i(this.emitError(e.error))
                            } : s.on("error", (t => {
                                i(this.emitError(t))
                            })), s.onopen = () => {
                                this.onOpen(s), e(s)
                            }
                        }))
                    }
                    onOpen(t) {
                        t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
                    }
                    onClose(t) {
                        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
                    }
                    onPayload(t) {
                        if ("undefined" === typeof t.data) return;
                        const e = "string" === typeof t.data ? v(t.data) : t.data;
                        this.events.emit("payload", e)
                    }
                    onError(t, e) {
                        const r = this.parseError(e),
                            i = F(t, r.message || r.toString());
                        this.events.emit("payload", i)
                    }
                    parseError(t, e = this.url) {
                        return $(t, nt(e), "WS")
                    }
                    resetMaxListeners() {
                        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                    }
                    emitError(t) {
                        const e = this.parseError(new Error((null === t || void 0 === t ? void 0 : t.message) || `WebSocket connection failed for host: ${nt(this.url)}`));
                        return this.events.emit("register_error", e), e
                    }
                },
                at = r(72307),
                ct = r.n(at),
                ht = r(34155);
            var ut = function(t, e) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < t.length; n++) {
                        var s = t.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = t.length,
                        c = t.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        u = Math.log(256) / Math.log(a);

                    function l(t) {
                        if ("string" != typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var e = 0;
                        if (" " !== t[e]) {
                            for (var i = 0, n = 0; t[e] === c;) i++, e++;
                            for (var s = (t.length - e) * h + 1 >>> 0, o = new Uint8Array(s); t[e];) {
                                var u = r[t.charCodeAt(e)];
                                if (255 === u) return;
                                for (var l = 0, p = s - 1;
                                    (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                                if (0 !== u) throw new Error("Non-zero carry");
                                n = l, e++
                            }
                            if (" " !== t[e]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(e) {
                            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === e.length) return "";
                            for (var r = 0, i = 0, n = 0, s = e.length; n !== s && 0 === e[n];) n++, r++;
                            for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                                for (var l = e[n], p = 0, f = o - 1;
                                    (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === h[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += t.charAt(h[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(t) {
                            var r = l(t);
                            if (r) return r;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                },
                lt = ut;
            const pt = t => {
                if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class ft {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class dt {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return vt(this, t)
                }
            }
            class gt {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return vt(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const vt = (t, e) => new gt({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class yt {
                constructor(t, e, r, i) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = i, this.encoder = new ft(t, e, r), this.decoder = new dt(t, e, i)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const mt = ({
                    name: t,
                    prefix: e,
                    encode: r,
                    decode: i
                }) => new yt(t, e, r, i),
                wt = ({
                    prefix: t,
                    name: e,
                    alphabet: r
                }) => {
                    const {
                        encode: i,
                        decode: n
                    } = lt(r, e);
                    return mt({
                        prefix: t,
                        name: e,
                        encode: i,
                        decode: t => pt(n(t))
                    })
                },
                _t = ({
                    name: t,
                    prefix: e,
                    bitsPerChar: r,
                    alphabet: i
                }) => mt({
                    prefix: e,
                    name: t,
                    encode: t => ((t, e, r) => {
                        const i = "=" === e[e.length - 1],
                            n = (1 << r) - 1;
                        let s = "",
                            o = 0,
                            a = 0;
                        for (let c = 0; c < t.length; ++c)
                            for (a = a << 8 | t[c], o += 8; o > r;) o -= r, s += e[n & a >> o];
                        if (o && (s += e[n & a << r - o]), i)
                            for (; s.length * r & 7;) s += "=";
                        return s
                    })(t, i, r),
                    decode: e => ((t, e, r, i) => {
                        const n = {};
                        for (let u = 0; u < e.length; ++u) n[e[u]] = u;
                        let s = t.length;
                        for (;
                            "=" === t[s - 1];) --s;
                        const o = new Uint8Array(s * r / 8 | 0);
                        let a = 0,
                            c = 0,
                            h = 0;
                        for (let u = 0; u < s; ++u) {
                            const e = n[t[u]];
                            if (void 0 === e) throw new SyntaxError(`Non-${i} character`);
                            c = c << r | e, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                        }
                        if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return o
                    })(e, i, r, t)
                }),
                bt = mt({
                    prefix: "\0",
                    name: "identity",
                    encode: t => (t => (new TextDecoder).decode(t))(t),
                    decode: t => (t => (new TextEncoder).encode(t))(t)
                });
            var Et = Object.freeze({
                __proto__: null,
                identity: bt
            });
            const It = _t({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Pt = Object.freeze({
                __proto__: null,
                base2: It
            });
            const St = _t({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Ot = Object.freeze({
                __proto__: null,
                base8: St
            });
            const xt = wt({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Ct = Object.freeze({
                __proto__: null,
                base10: xt
            });
            const Rt = _t({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                At = _t({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var jt = Object.freeze({
                __proto__: null,
                base16: Rt,
                base16upper: At
            });
            const Nt = _t({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Tt = _t({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Lt = _t({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Mt = _t({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Dt = _t({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                qt = _t({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                zt = _t({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                kt = _t({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                $t = _t({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Ut = Object.freeze({
                __proto__: null,
                base32: Nt,
                base32upper: Tt,
                base32pad: Lt,
                base32padupper: Mt,
                base32hex: Dt,
                base32hexupper: qt,
                base32hexpad: zt,
                base32hexpadupper: kt,
                base32z: $t
            });
            const Ht = wt({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Vt = wt({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Bt = Object.freeze({
                __proto__: null,
                base36: Ht,
                base36upper: Vt
            });
            const Kt = wt({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                Ft = wt({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var Zt = Object.freeze({
                __proto__: null,
                base58btc: Kt,
                base58flickr: Ft
            });
            const Wt = _t({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Gt = _t({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Jt = _t({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Yt = _t({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Qt = Object.freeze({
                __proto__: null,
                base64: Wt,
                base64pad: Gt,
                base64url: Jt,
                base64urlpad: Yt
            });
            const Xt = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                te = Xt.reduce(((t, e, r) => (t[r] = e, t)), []),
                ee = Xt.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
            const re = mt({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(t) {
                    return t.reduce(((t, e) => t += te[e]), "")
                },
                decode: function(t) {
                    const e = [];
                    for (const r of t) {
                        const t = ee[r.codePointAt(0)];
                        if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            });
            var ie = Object.freeze({
                    __proto__: null,
                    base256emoji: re
                }),
                ne = function t(e, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; e >= se;) r[i++] = 255 & e | 128, e /= 128;
                    for (; - 128 & e;) r[i++] = 255 & e | 128, e >>>= 7;
                    return r[i] = 0 | e, t.bytes = i - n + 1, r
                },
                se = Math.pow(2, 31);
            var oe = function t(e, r) {
                var i, n = 0,
                    s = 0,
                    o = r = r || 0,
                    a = e.length;
                do {
                    if (o >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                    i = e[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                } while (i >= 128);
                return t.bytes = o - r, n
            };
            var ae = Math.pow(2, 7),
                ce = Math.pow(2, 14),
                he = Math.pow(2, 21),
                ue = Math.pow(2, 28),
                le = Math.pow(2, 35),
                pe = Math.pow(2, 42),
                fe = Math.pow(2, 49),
                de = Math.pow(2, 56),
                ge = Math.pow(2, 63),
                ve = {
                    encode: ne,
                    decode: oe,
                    encodingLength: function(t) {
                        return t < ae ? 1 : t < ce ? 2 : t < he ? 3 : t < ue ? 4 : t < le ? 5 : t < pe ? 6 : t < fe ? 7 : t < de ? 8 : t < ge ? 9 : 10
                    }
                };
            const ye = (t, e, r = 0) => (ve.encode(t, e, r), e),
                me = t => ve.encodingLength(t),
                we = (t, e) => {
                    const r = e.byteLength,
                        i = me(t),
                        n = i + me(r),
                        s = new Uint8Array(n + r);
                    return ye(t, s, 0), ye(r, s, i), s.set(e, n), new _e(t, r, e, s)
                };
            class _e {
                constructor(t, e, r, i) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = i
                }
            }
            const be = ({
                name: t,
                code: e,
                encode: r
            }) => new Ee(t, e, r);
            class Ee {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t);
                        return e instanceof Uint8Array ? we(this.code, e) : e.then((t => we(this.code, t)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Ie = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                Pe = be({
                    name: "sha2-256",
                    code: 18,
                    encode: Ie("SHA-256")
                }),
                Se = be({
                    name: "sha2-512",
                    code: 19,
                    encode: Ie("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Pe,
                sha512: Se
            });
            const Oe = pt,
                xe = {
                    code: 0,
                    name: "identity",
                    encode: Oe,
                    digest: t => we(0, Oe(t))
                };
            Object.freeze({
                __proto__: null,
                identity: xe
            });
            new TextEncoder, new TextDecoder;
            const Ce = { ...Et,
                ...Pt,
                ...Ot,
                ...Ct,
                ...jt,
                ...Ut,
                ...Bt,
                ...Zt,
                ...Qt,
                ...ie
            };

            function Re(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }

            function Ae(t, e, r, i) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            const je = Ae("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                Ne = Ae("ascii", "a", (t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }), (t => {
                    const e = function(t = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Re(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
                    }((t = t.substring(1)).length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                })),
                Te = {
                    utf8: je,
                    "utf-8": je,
                    hex: Ce.base16,
                    latin1: Ne,
                    ascii: Ne,
                    binary: Ne,
                    ...Ce
                };
            const Le = "core",
                Me = "wc@2:core:",
                De = "error",
                qe = {
                    database: ":memory:"
                },
                ze = "client_ed25519_seed",
                ke = _.ONE_DAY,
                $e = _.SIX_HOURS,
                Ue = "wss://relay.walletconnect.com",
                He = "wss://relay.walletconnect.org",
                Ve = "relayer_message",
                Be = "relayer_message_ack",
                Ke = "relayer_connect",
                Fe = "relayer_disconnect",
                Ze = "relayer_error",
                We = "relayer_connection_stalled",
                Ge = "relayer_transport_closed",
                Je = "relayer_publish",
                Ye = "payload",
                Qe = "connect",
                Xe = "disconnect",
                tr = "error",
                er = _.ONE_SECOND / 2,
                rr = "subscription_created",
                ir = "subscription_deleted",
                nr = "subscription_sync",
                sr = "subscription_resubscribed",
                or = 1e3 * _.FIVE_SECONDS,
                ar = {
                    wc_pairingDelete: {
                        req: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: _.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: _.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                cr = "history_created",
                hr = "history_updated",
                ur = "history_deleted",
                lr = "history_sync",
                pr = "expirer_created",
                fr = "expirer_deleted",
                dr = "expirer_expired",
                gr = "expirer_sync",
                vr = "verify-api",
                yr = "https://verify.walletconnect.com";
            class mr {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Me, this.init = async () => {
                        if (!this.initialized) {
                            const t = await this.getKeyChain();
                            typeof t < "u" && (this.keychain = t), this.initialized = !0
                        }
                    }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
                        this.isInitialized(), this.keychain.set(t, e), await this.persist()
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.keychain.get(t);
                        if (typeof e > "u") {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                            throw new Error(e)
                        }
                        return e
                    }, this.del = async t => {
                        this.isInitialized(), this.keychain.delete(t), await this.persist()
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setKeyChain(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getKeyChain() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class wr {
                constructor(t, e, r) {
                    this.core = t, this.logger = e, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
                        this.isInitialized();
                        return R(A(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const t = (0, s.Au)();
                        return this.setPrivateKey(t.publicKey, t.privateKey)
                    }, this.signJWT = async t => {
                        this.isInitialized();
                        const e = A(await this.getClientSeed()),
                            r = (0, s.jd)(),
                            i = ke;
                        return await j(r, t, i, e)
                    }, this.generateSharedKey = (t, e, r) => {
                        this.isInitialized();
                        const i = this.getPrivateKey(t),
                            n = (0, s.m$)(i, e);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (t, e) => {
                        this.isInitialized();
                        const r = e || (0, s.Ym)(t);
                        return await this.keychain.set(r, t), r
                    }, this.deleteKeyPair = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.deleteSymKey = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.encode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.EN)(r),
                            n = y(e);
                        if ((0, s.Q8)(i)) {
                            const e = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        const o = this.getSymKey(t),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, s.HI)({
                            type: a,
                            symKey: o,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.Ll)(e, r);
                        if ((0, s.Q8)(i)) {
                            const e = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        try {
                            const r = this.getSymKey(t);
                            return v((0, s.pe)({
                                symKey: r,
                                encoded: e
                            }))
                        } catch (l) {
                            this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(l)
                        }
                    }, this.getPayloadType = t => {
                        const e = (0, s.vB)(t);
                        return (0, s.WG)(e.type)
                    }, this.getPayloadSenderPublicKey = t => {
                        const e = (0, s.vB)(t);
                        return e.senderPublicKey ? (0, N.BB)(e.senderPublicKey, s.AW) : void 0
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.keychain = r || new mr(this.core, this.logger)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async setPrivateKey(t, e) {
                    return await this.keychain.set(t, e), t
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                async getClientSeed() {
                    let t = "";
                    try {
                        t = this.keychain.get(ze)
                    } catch {
                        t = (0, s.jd)(), await this.keychain.set(ze, t)
                    }
                    return function(t, e = "utf8") {
                        const r = Te[e];
                        if (!r) throw new Error(`Unsupported encoding "${e}"`);
                        return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : Re(globalThis.Buffer.from(t, "utf-8"))
                    }(t, "base16")
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class _r extends class {
                constructor(t, e) {
                    this.logger = t, this.core = e
                }
            } {
                constructor(t, e) {
                    super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Me, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const t = await this.getRelayerMessages();
                                typeof t < "u" && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (t) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (t, e) => {
                        this.isInitialized();
                        const r = (0, s.rj)(e);
                        let i = this.messages.get(t);
                        return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = e, this.messages.set(t, i), await this.persist()), r
                    }, this.get = t => {
                        this.isInitialized();
                        let e = this.messages.get(t);
                        return typeof e > "u" && (e = {}), e
                    }, this.has = (t, e) => {
                        this.isInitialized();
                        return typeof this.get(t)[(0, s.rj)(e)] < "u"
                    }, this.del = async t => {
                        this.isInitialized(), this.messages.delete(t), await this.persist()
                    }, this.logger = (0, c.generateChildLogger)(t, this.name), this.core = e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setRelayerMessages(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getRelayerMessages() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class br extends p {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.events = new i.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, _.toMiliseconds)(_.TEN_SECONDS), this.queueTimeout = (0, _.toMiliseconds)(_.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (t, e, r) => {
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: t,
                                message: e,
                                opts: r
                            }
                        });
                        try {
                            const i = r ? .ttl || $e,
                                n = (0, s._H)(r),
                                o = r ? .prompt || !1,
                                a = r ? .tag || 0,
                                c = r ? .id || V().toString(),
                                h = {
                                    topic: t,
                                    message: e,
                                    opts: {
                                        ttl: i,
                                        relay: n,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                u = setTimeout((() => this.queue.set(c, h)), this.queueTimeout);
                            try {
                                await await (0, s.hF)(this.rpcPublish(t, e, i, n, o, a, c), this.publishTimeout), clearTimeout(u), this.relayer.events.emit(Je, h)
                            } catch {
                                return this.logger.debug("Publishing Payload stalled"), void(this.needsTransportRestart = !0)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: t,
                                    message: e,
                                    opts: r
                                }
                            })
                        } catch (i) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(i), i
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.relayer = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                rpcPublish(t, e, r, i, n, o, a) {
                    var c, h, u, l;
                    const p = {
                        method: (0, s.cO)(i.protocol).publish,
                        params: {
                            topic: t,
                            message: e,
                            ttl: r,
                            prompt: n,
                            tag: o
                        },
                        id: a
                    };
                    return (0, s.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (h = p.params) || delete h.prompt), (0, s.o8)(null == (u = p.params) ? void 0 : u.tag) && (null == (l = p.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                onPublish(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    this.queue.forEach((async t => {
                        const {
                            topic: e,
                            message: r,
                            opts: i
                        } = t;
                        await this.publish(e, r, i)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(We);
                        this.checkQueue()
                    })), this.relayer.on(Be, (t => {
                        this.onPublish(t.id.toString())
                    }))
                }
            }
            class Er {
                constructor() {
                    this.map = new Map, this.set = (t, e) => {
                        const r = this.get(t);
                        this.exists(t, e) || this.map.set(t, [...r, e])
                    }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
                        if (typeof e > "u") return void this.map.delete(t);
                        if (!this.map.has(t)) return;
                        const r = this.get(t);
                        if (!this.exists(t, e)) return;
                        const i = r.filter((t => t !== e));
                        i.length ? this.map.set(t, i) : this.map.delete(t)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Ir = Object.defineProperty,
                Pr = Object.defineProperties,
                Sr = Object.getOwnPropertyDescriptors,
                Or = Object.getOwnPropertySymbols,
                xr = Object.prototype.hasOwnProperty,
                Cr = Object.prototype.propertyIsEnumerable,
                Rr = (t, e, r) => e in t ? Ir(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Ar = (t, e) => {
                    for (var r in e || (e = {})) xr.call(e, r) && Rr(t, r, e[r]);
                    if (Or)
                        for (var r of Or(e)) Cr.call(e, r) && Rr(t, r, e[r]);
                    return t
                },
                jr = (t, e) => Pr(t, Sr(e));
            class Nr extends d {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new Er, this.events = new i.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Me, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: t,
                                opts: e
                            }
                        });
                        try {
                            const r = (0, s._H)(e),
                                i = {
                                    topic: t,
                                    relay: r
                                };
                            this.pending.set(t, i);
                            const n = await this.rpcSubscribe(t, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: t,
                                    opts: e
                                }
                            }), n
                        } catch (u) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(u), u
                        }
                    }, this.unsubscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), typeof e ? .id < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
                    }, this.isSubscribed = async t => !!this.topics.includes(t) || await new Promise(((e, r) => {
                        const i = new _.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        const n = setInterval((() => {
                            !this.pending.has(t) && this.topics.includes(t) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), e(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= or && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")))
                        }), this.pollingInterval)
                    })).catch((() => !1)), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.clientId = ""
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, e) {
                    let r = !1;
                    try {
                        r = this.getSubscription(t).topic === e
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(t, e) {
                    const r = this.topicMap.get(t);
                    await Promise.all(r.map((async r => await this.unsubscribeById(t, r, e))))
                }
                async unsubscribeById(t, e, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: t,
                            id: e,
                            opts: r
                        }
                    });
                    try {
                        const i = (0, s._H)(r);
                        await this.rpcUnsubscribe(t, e, i);
                        const n = (0, s.D6)("USER_DISCONNECTED", `${this.name}, ${t}`);
                        await this.onUnsubscribe(t, e, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: t,
                                id: e,
                                opts: r
                            }
                        })
                    } catch (i) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i
                    }
                }
                async rpcSubscribe(t, e) {
                    const r = {
                        method: (0, s.cO)(e.protocol).subscribe,
                        params: {
                            topic: t
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(We)
                    }
                    return (0, s.rj)(t + this.clientId)
                }
                async rpcBatchSubscribe(t) {
                    if (!t.length) return;
                    const e = t[0].relay,
                        r = {
                            method: (0, s.cO)(e.protocol).batchSubscribe,
                            params: {
                                topics: t.map((t => t.topic))
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(We)
                    }
                }
                rpcUnsubscribe(t, e, r) {
                    const i = {
                        method: (0, s.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: t,
                            id: e
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(t, e) {
                    this.setSubscription(t, jr(Ar({}, e), {
                        id: t
                    })), this.pending.delete(e.topic)
                }
                onBatchSubscribe(t) {
                    t.length && t.forEach((t => {
                        this.setSubscription(t.id, Ar({}, t)), this.pending.delete(t.topic)
                    }))
                }
                async onUnsubscribe(t, e, r) {
                    this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
                }
                async setRelayerSubscriptions(t) {
                    await this.relayer.core.storage.setItem(this.storageKey, t)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(t, e) {
                    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: t,
                        subscription: e
                    }), this.addSubscription(t, e))
                }
                addSubscription(t, e) {
                    this.subscriptions.set(t, Ar({}, e)), this.topicMap.set(e.topic, t), this.events.emit(rr, e)
                }
                getSubscription(t) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: t
                    });
                    const e = this.subscriptions.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                deleteSubscription(t, e) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: t,
                        reason: e
                    });
                    const r = this.getSubscription(t);
                    this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(ir, jr(Ar({}, r), {
                        reason: e
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(nr)
                }
                async reset() {
                    if (this.cached.length) {
                        const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let e = 0; e < t; e++) {
                            const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(t)
                        }
                    }
                    this.events.emit(sr)
                }
                async restore() {
                    try {
                        const t = await this.getRelayerSubscriptions();
                        if (typeof t > "u" || !t.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
                    }
                }
                async batchSubscribe(t) {
                    if (!t.length) return;
                    const e = await this.rpcBatchSubscribe(t);
                    (0, s.qt)(e) && this.onBatchSubscribe(e.map(((e, r) => jr(Ar({}, t[r]), {
                        id: e
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (this.relayer.transportExplicitlyClosed) return;
                    const t = [];
                    this.pending.forEach((e => {
                        t.push(e)
                    })), await this.batchSubscribe(t)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(Ke, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(Fe, (() => {
                        this.onDisconnect()
                    })), this.events.on(rr, (async t => {
                        const e = rr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    })), this.events.on(ir, (async t => {
                        const e = ir;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((t => {
                        const e = setInterval((() => {
                            this.restartInProgress || (clearInterval(e), t())
                        }), this.pollingInterval)
                    }))
                }
            }
            var Tr = Object.defineProperty,
                Lr = Object.getOwnPropertySymbols,
                Mr = Object.prototype.hasOwnProperty,
                Dr = Object.prototype.propertyIsEnumerable,
                qr = (t, e, r) => e in t ? Tr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r;
            class zr extends f {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.events = new i.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async t => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(t)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? (0, c.generateChildLogger)(t.logger, this.name) : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: t.logger || "error"
                    })), this.messages = new _r(this.logger, t.core), this.subscriber = new Nr(this, this.logger), this.publisher = new br(this, this.logger), this.relayUrl = t ? .relayUrl || Ue, this.projectId = t.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${He}...`), await this.restartTransport(He)
                    }
                    this.registerEventListeners(), this.initialized = !0, setTimeout((async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }), 1e4)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(t, e, r) {
                    this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
                        topic: t,
                        message: e,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(t, e) {
                    var r;
                    this.isInitialized();
                    let i = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
                    return i || (await Promise.all([new Promise((e => {
                        this.subscriber.once(rr, (r => {
                            r.topic === t && e()
                        }))
                    })), new Promise((async r => {
                        i = await this.subscriber.subscribe(t, e), r()
                    }))]), i)
                }
                async unsubscribe(t, e) {
                    this.isInitialized(), await this.subscriber.unsubscribe(t, e)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Ge))
                }
                async transportOpen(t) {
                    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
                        this.relayUrl = t || this.relayUrl, this.reconnecting = !0;
                        try {
                            await Promise.all([new Promise((t => {
                                this.initialized || t(), this.subscriber.once(sr, (() => {
                                    t()
                                }))
                            })), await Promise.race([new Promise((async (t, e) => {
                                await (0, s.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((t => e(t))).then((() => t())).finally((() => this.removeListener(Ge, this.rejectTransportOpen)))
                            })), new Promise((t => this.once(Ge, this.rejectTransportOpen)))])])
                        } catch (e) {
                            this.logger.error(e);
                            const t = e;
                            if (!this.isConnectionStalled(t.message)) throw e;
                            this.events.emit(Ge)
                        } finally {
                            this.reconnecting = !1
                        }
                    }
                }
                async restartTransport(t) {
                    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([new Promise((t => {
                        this.provider.once(Xe, (() => {
                            t()
                        }))
                    })), this.transportClose()]), await this.createProvider(), await this.transportOpen())
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some((e => t.includes(e)))
                }
                rejectTransportOpen() {
                    throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
                }
                async createProvider() {
                    const t = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new it(new ot((0, s.$0)({
                        sdkVersion: "2.9.2",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: t,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    await this.messages.set(e, r)
                }
                async shouldIgnoreMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!(await this.subscriber.isSubscribed(e))) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
                    const i = this.messages.has(e, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(t) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: t
                        }), X(t)) {
                        if (!t.method.endsWith("_subscription")) return;
                        const e = t.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = e.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
                            for (var r in e || (e = {})) Mr.call(e, r) && qr(t, r, e[r]);
                            if (Lr)
                                for (var r of Lr(e)) Dr.call(e, r) && qr(t, r, e[r]);
                            return t
                        })({
                            type: "event",
                            event: e.id
                        }, s)), this.events.emit(e.id, s), await this.acknowledgePayload(t), await this.onMessageEvent(s)
                    } else tt(t) && this.events.emit(Be, t)
                }
                async onMessageEvent(t) {
                    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Ve, t), await this.recordMessageEvent(t))
                }
                async acknowledgePayload(t) {
                    const e = K(t.id, !0);
                    await this.provider.connection.send(e)
                }
                registerProviderListeners() {
                    this.provider.on(Ye, (t => this.onProviderPayload(t))), this.provider.on(Qe, (() => {
                        this.events.emit(Ke)
                    })), this.provider.on(Xe, (() => {
                        this.onProviderDisconnect()
                    })), this.provider.on(tr, (t => {
                        this.logger.error(t), this.events.emit(Ze, t)
                    }))
                }
                registerEventListeners() {
                    this.events.on(We, (async () => {
                        await this.restartTransport()
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit(Fe), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || setTimeout((async () => {
                        await this.restartTransport()
                    }), (0, _.toMiliseconds)(er))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async toEstablishConnection() {
                    if (!this.connected) {
                        if (this.connecting) return await new Promise((t => {
                            const e = setInterval((() => {
                                this.connected && (clearInterval(e), t())
                            }), this.connectionStatusPollingInterval)
                        }));
                        await this.restartTransport()
                    }
                }
            }
            var kr = Object.defineProperty,
                $r = Object.getOwnPropertySymbols,
                Ur = Object.prototype.hasOwnProperty,
                Hr = Object.prototype.propertyIsEnumerable,
                Vr = (t, e, r) => e in t ? kr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Br = (t, e) => {
                    for (var r in e || (e = {})) Ur.call(e, r) && Vr(t, r, e[r]);
                    if ($r)
                        for (var r of $r(e)) Hr.call(e, r) && Vr(t, r, e[r]);
                    return t
                };
            class Kr extends class {
                constructor(t, e, r, i) {
                    this.core = t, this.logger = e, this.name = r
                }
            } {
                constructor(t, e, r, i = Me, n) {
                    super(t, e, r, i), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Me, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => {
                            this.getKey && null !== t && !(0, s.o8)(t) ? this.map.set(this.getKey(t), t) : (0, s.xW)(t) ? this.map.set(t.id, t) : (0, s.h1)(t) && this.map.set(t.topic, t)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (t, e) => {
                        this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: t,
                            value: e
                        }), this.map.set(t, e), await this.persist())
                    }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: t
                    }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter((e => Object.keys(t).every((r => ct()(e[r], t[r]))))) : this.values), this.update = async (t, e) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: t,
                            update: e
                        });
                        const r = Br(Br({}, this.getData(t)), e);
                        this.map.set(t, r), await this.persist()
                    }, this.delete = async (t, e) => {
                        this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: t,
                            reason: e
                        }), this.map.delete(t), await this.persist())
                    }, this.logger = (0, c.generateChildLogger)(e, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(t) {
                    const e = this.map.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const t = await this.getDataStore();
                        if (typeof t > "u" || !t.length) return;
                        if (this.map.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Fr {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new(n()), this.initialized = !1, this.storagePrefix = Me, this.ignoredPayloadTypes = [s.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: t
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const t = (0, s.jd)(),
                            e = await this.core.crypto.setSymKey(t),
                            r = (0, s.gn)(_.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = {
                                topic: e,
                                expiry: r,
                                relay: i,
                                active: !1
                            },
                            o = (0, s.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: e,
                                symKey: t,
                                relay: i
                            });
                        return await this.pairings.set(e, n), await this.core.relayer.subscribe(e), this.core.expirer.set(e, r), {
                            topic: e,
                            uri: o
                        }
                    }, this.pair = async t => {
                        this.isInitialized(), this.isValidPair(t);
                        const {
                            topic: e,
                            symKey: r,
                            relay: i
                        } = (0, s.he)(t.uri);
                        if (this.pairings.keys.includes(e)) throw new Error(`Pairing already exists: ${e}`);
                        if (this.core.crypto.hasKeys(e)) throw new Error(`Keychain already exists: ${e}`);
                        const n = (0, s.gn)(_.FIVE_MINUTES),
                            o = {
                                topic: e,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(e, o), await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, {
                            relay: i
                        }), this.core.expirer.set(e, n), t.activatePairing && await this.activate({
                            topic: e
                        }), o
                    }, this.activate = async ({
                        topic: t
                    }) => {
                        this.isInitialized();
                        const e = (0, s.gn)(_.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: e
                        }), this.core.expirer.set(t, e)
                    }, this.ping = async t => {
                        this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.pairings.keys.includes(e)) {
                            const t = await this.sendRequest(e, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("pairing_ping", t), (({
                                error: t
                            }) => {
                                t ? n(t) : i()
                            })), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: t,
                        expiry: e
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: e
                        })
                    }, this.updateMetadata = async ({
                        topic: t,
                        metadata: e
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: e
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
                        this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", (0, s.D6)("USER_DISCONNECTED")), await this.deletePairing(e))
                    }, this.sendRequest = async (t, e, r) => {
                        const i = B(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = ar[e].req;
                        return this.core.history.set(t, i), this.core.relayer.publish(t, n, s), i.id
                    }, this.sendResult = async (t, e, r) => {
                        const i = K(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = ar[s.request.method].res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (t, e, r) => {
                        const i = F(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = ar[s.request.method] ? ar[s.request.method].res : ar.unregistered_method.res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (t, e) => {
                        await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
                    }, this.cleanup = async () => {
                        const t = this.pairings.getAll().filter((t => (0, s.Bw)(t.expiry)));
                        await Promise.all(t.map((t => this.deletePairing(t.topic))))
                    }, this.onRelayEventRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(e, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(e, r);
                            default:
                                return this.onUnknownRpcMethodRequest(e, r)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.core.history.get(e, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult(r, t, !0), this.events.emit("pairing_ping", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onPairingPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            et(e) ? this.events.emit((0, s.E0)("pairing_ping", r), {}) : rt(e) && this.events.emit((0, s.E0)("pairing_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t
                            }), await this.deletePairing(t), this.events.emit("pairing_delete", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onUnknownRpcMethodRequest = async (t, e) => {
                        const {
                            id: r,
                            method: i
                        } = e;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            const e = (0, s.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, t, e), this.logger.error(e)
                        } catch (n) {
                            await this.sendError(r, t, n), this.logger.error(n)
                        }
                    }, this.onUnknownRpcMethodResponse = t => {
                        this.registeredMethods.includes(t) || this.logger.error((0, s.D6)("WC_METHOD_UNSUPPORTED", t))
                    }, this.isValidPair = t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() params: ${t}`);
                            throw new Error(e)
                        }
                        if (!(0, s.jv)(t.uri)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                            throw new Error(e)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidPairingTopic = async t => {
                        if (!(0, s.M_)(t, !1)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                            throw new Error(e)
                        }
                        if (!this.pairings.keys.includes(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                            throw new Error(e)
                        }
                        if ((0, s.Bw)(this.pairings.get(t).expiry)) {
                            await this.deletePairing(t);
                            const {
                                message: e
                            } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                            throw new Error(e)
                        }
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.pairings = new Kr(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(Ve, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        const i = await this.core.crypto.decode(e, r);
                        try {
                            X(i) ? (this.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : tt(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.core.history.delete(e, i.id))
                        } catch (u) {
                            this.logger.error(u)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(dr, (async t => {
                        const {
                            topic: e
                        } = (0, s.iP)(t.target);
                        e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit("pairing_expire", {
                            topic: e
                        }))
                    }))
                }
            }
            class Zr extends l {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new i.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Me, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.records.set(t.id, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (t, e, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: t,
                                request: e,
                                chainId: r
                            }), this.records.has(e.id)) return;
                        const i = {
                            id: e.id,
                            topic: t,
                            request: {
                                method: e.method,
                                params: e.params || null
                            },
                            chainId: r,
                            expiry: (0, s.gn)(_.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(cr, i)
                    }, this.resolve = async t => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: t
                            }), !this.records.has(t.id)) return;
                        const e = await this.getRecord(t.id);
                        typeof e.response > "u" && (e.response = rt(t) ? {
                            error: t.error
                        } : {
                            result: t.result
                        }, this.records.set(e.id, e), this.events.emit(hr, e))
                    }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: t,
                        id: e
                    }), await this.getRecord(e)), this.delete = (t, e) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: e
                        }), this.values.forEach((r => {
                            if (r.topic === t) {
                                if (typeof e < "u" && r.id !== e) return;
                                this.records.delete(r.id), this.events.emit(ur, r)
                            }
                        }))
                    }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const t = [];
                    return this.values.forEach((e => {
                        if (typeof e.response < "u") return;
                        const r = {
                            topic: e.topic,
                            request: B(e.request.method, e.request.params, e.id),
                            chainId: e.chainId
                        };
                        return t.push(r)
                    })), t
                }
                async setJsonRpcRecords(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(t) {
                    this.isInitialized();
                    const e = this.records.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(lr)
                }
                async restore() {
                    try {
                        const t = await this.getJsonRpcRecords();
                        if (typeof t > "u" || !t.length) return;
                        if (this.records.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                    }
                }
                registerEventListeners() {
                    this.events.on(cr, (t => {
                        const e = cr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(hr, (t => {
                        const e = hr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(ur, (t => {
                        const e = ur;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => {
                        this.cleanup()
                    }))
                }
                cleanup() {
                    try {
                        this.records.forEach((t => {
                            (0, _.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
                        }))
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Wr extends g {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new i.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Me, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.expirations.set(t.target, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = t => {
                        try {
                            const e = this.formatTarget(t);
                            return typeof this.getExpiration(e) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (t, e) => {
                        this.isInitialized();
                        const r = this.formatTarget(t),
                            i = {
                                target: r,
                                expiry: e
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(pr, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.formatTarget(t);
                        return this.getExpiration(e)
                    }, this.del = t => {
                        if (this.isInitialized(), this.has(t)) {
                            const e = this.formatTarget(t),
                                r = this.getExpiration(e);
                            this.expirations.delete(e), this.events.emit(fr, {
                                target: e,
                                expiration: r
                            })
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ("string" == typeof t) return (0, s.Z4)(t);
                    if ("number" == typeof t) return (0, s.Gq)(t);
                    const {
                        message: e
                    } = (0, s.Z7)("UNKNOWN_TYPE", "Target type: " + typeof t);
                    throw new Error(e)
                }
                async setExpirations(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(gr)
                }
                async restore() {
                    try {
                        const t = await this.getExpirations();
                        if (typeof t > "u" || !t.length) return;
                        if (this.expirations.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
                    }
                }
                getExpiration(t) {
                    const e = this.expirations.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                checkExpiry(t, e) {
                    const {
                        expiry: r
                    } = e;
                    (0, _.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
                }
                expire(t, e) {
                    this.expirations.delete(t), this.events.emit(dr, {
                        target: t,
                        expiration: e
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((t, e) => this.checkExpiry(e, t)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(pr, (t => {
                        const e = pr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(dr, (t => {
                        const e = dr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(fr, (t => {
                        const e = fr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Gr extends class {
                constructor(t, e) {
                    this.projectId = t, this.logger = e
                }
            } {
                constructor(t, e) {
                    super(t, e), this.projectId = t, this.logger = e, this.name = vr, this.initialized = !1, this.init = async t => {
                        (0, s.b$)() || !(0, s.jU)() || (this.verifyUrl = t ? .verifyUrl || yr, await this.createIframe())
                    }, this.register = async t => {
                        var e;
                        if (this.initialized || await this.init(), this.iframe) try {
                            null == (e = this.iframe.contentWindow) || e.postMessage(t.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${t.attestationId} ${this.verifyUrl}`)
                        } catch {}
                    }, this.resolve = async t => {
                        var e;
                        if (this.isDevEnv) return "";
                        this.logger.info(`resolving attestation: ${t.attestationId}`);
                        const r = this.startAbortTimer(_.FIVE_SECONDS),
                            i = await fetch(`${this.verifyUrl}/attestation/${t.attestationId}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? null == (e = await i.json()) ? void 0 : e.origin : ""
                    }, this.createIframe = async () => {
                        try {
                            await Promise.race([new Promise(((t, e) => {
                                if (document.getElementById(vr)) return t();
                                const r = document.createElement("iframe");
                                r.setAttribute("id", vr), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", (() => {
                                    this.initialized = !0, t()
                                })), r.addEventListener("error", (t => {
                                    e(t)
                                })), document.body.append(r), this.iframe = r
                            })), new Promise((t => {
                                setTimeout((() => t("iframe load timeout")), (0, _.toMiliseconds)(_.ONE_SECOND / 2))
                            }))])
                        } catch (t) {
                            this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(t)
                        }
                    }, this.logger = (0, c.generateChildLogger)(e, this.name), this.verifyUrl = yr, this.abortController = new AbortController, this.isDevEnv = (0, s.UG)() && ht.env.IS_VITEST
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                startAbortTimer(t) {
                    return setTimeout((() => this.abortController.abort()), (0, _.toMiliseconds)(t))
                }
            }
            var Jr = Object.defineProperty,
                Yr = Object.getOwnPropertySymbols,
                Qr = Object.prototype.hasOwnProperty,
                Xr = Object.prototype.propertyIsEnumerable,
                ti = (t, e, r) => e in t ? Jr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                ei = (t, e) => {
                    for (var r in e || (e = {})) Qr.call(e, r) && ti(t, r, e[r]);
                    if (Yr)
                        for (var r of Yr(e)) Xr.call(e, r) && ti(t, r, e[r]);
                    return t
                };
            class ri extends u {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = Le, this.events = new i.EventEmitter, this.initialized = !1, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || Ue;
                    const e = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: t ? .logger || De
                    }));
                    this.logger = (0, c.generateChildLogger)(e, this.name), this.heartbeat = new a.HeartBeat, this.crypto = new wr(this, this.logger, t ? .keychain), this.history = new Zr(this, this.logger), this.expirer = new Wr(this, this.logger), this.storage = null != t && t.storage ? t.storage : new o.ZP(ei(ei({}, qe), t ? .storageOptions)), this.relayer = new zr({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new Fr(this, this.logger), this.verify = new Gr(this.projectId || "", this.logger)
                }
                static async init(t) {
                    const e = new ri(t);
                    await e.initialize();
                    const r = await e.crypto.getClientId();
                    return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (t) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
                    }
                }
            }
            const ii = ri,
                ni = "client",
                si = "wc@2:client:",
                oi = ni,
                ai = "error",
                ci = "WALLETCONNECT_DEEPLINK_CHOICE",
                hi = "Proposal expired",
                ui = _.SEVEN_DAYS,
                li = {
                    wc_sessionPropose: {
                        req: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: _.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: _.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: _.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: _.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                pi = {
                    min: _.FIVE_MINUTES,
                    max: _.SEVEN_DAYS
                },
                fi = "idle",
                di = "active",
                gi = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var vi = Object.defineProperty,
                yi = Object.defineProperties,
                mi = Object.getOwnPropertyDescriptors,
                wi = Object.getOwnPropertySymbols,
                _i = Object.prototype.hasOwnProperty,
                bi = Object.prototype.propertyIsEnumerable,
                Ei = (t, e, r) => e in t ? vi(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Ii = (t, e) => {
                    for (var r in e || (e = {})) _i.call(e, r) && Ei(t, r, e[r]);
                    if (wi)
                        for (var r of wi(e)) bi.call(e, r) && Ei(t, r, e[r]);
                    return t
                },
                Pi = (t, e) => yi(t, mi(e));
            class Si extends class {
                constructor(t) {
                    this.client = t
                }
            } {
                constructor(t) {
                    super(t), this.name = "engine", this.events = new(n()), this.initialized = !1, this.ignoredPayloadTypes = [s.rV], this.requestQueue = {
                        state: fi,
                        requests: []
                    }, this.requestQueueDelay = _.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                            methods: Object.keys(li)
                        }), this.initialized = !0, setTimeout((() => {
                            this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue()
                        }), (0, _.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async t => {
                        this.isInitialized();
                        const e = Pi(Ii({}, t), {
                            requiredNamespaces: t.requiredNamespaces || {},
                            optionalNamespaces: t.optionalNamespaces || {}
                        });
                        await this.isValidConnect(e);
                        const {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: o,
                            relays: a
                        } = e;
                        let c, h = r,
                            u = !1;
                        if (h && (u = this.client.core.pairing.pairings.get(h).active), !h || !u) {
                            const {
                                topic: t,
                                uri: e
                            } = await this.client.core.pairing.create();
                            h = t, c = e
                        }
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = Ii({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, o && {
                                sessionProperties: o
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = (0, s.H1)(_.FIVE_MINUTES, hi);
                        if (this.events.once((0, s.E0)("session_connect"), (async ({
                                error: t,
                                session: e
                            }) => {
                                if (t) f(t);
                                else if (e) {
                                    e.self.publicKey = l;
                                    const t = Pi(Ii({}, e), {
                                        requiredNamespaces: e.requiredNamespaces,
                                        optionalNamespaces: e.optionalNamespaces
                                    });
                                    await this.client.session.set(e.topic, t), await this.setExpiry(e.topic, e.expiry), h && await this.client.core.pairing.updateMetadata({
                                        topic: h,
                                        metadata: e.peer.metadata
                                    }), d(t)
                                }
                            })), !h) {
                            const {
                                message: t
                            } = (0, s.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
                            throw new Error(t)
                        }
                        const v = await this.sendRequest(h, "wc_sessionPropose", p),
                            y = (0, s.gn)(_.FIVE_MINUTES);
                        return await this.setProposal(v, Ii({
                            id: v,
                            expiry: y
                        }, p)), {
                            uri: c,
                            approval: g
                        }
                    }, this.pair = async t => (this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
                        this.isInitialized(), await this.isValidApprove(t);
                        const {
                            id: e,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = t, o = this.client.proposal.get(e);
                        let {
                            pairingTopic: a,
                            proposer: c,
                            requiredNamespaces: h,
                            optionalNamespaces: u
                        } = o;
                        a = a || "", (0, s.L5)(h) || (h = (0, s.fc)(i, "approve()"));
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = c.publicKey,
                            f = await this.client.core.crypto.generateSharedKey(l, p);
                        a && e && (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: c.metadata
                        }), await this.sendResult(e, a, {
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            responderPublicKey: l
                        }), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: a
                        }));
                        const d = Ii({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: h,
                            optionalNamespaces: u,
                            pairingTopic: a,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: (0, s.gn)(ui)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(f), await this.sendRequest(f, "wc_sessionSettle", d);
                        const g = Pi(Ii({}, d), {
                            topic: f,
                            pairingTopic: a,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: c.publicKey,
                                metadata: c.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(f, g), await this.setExpiry(f, (0, s.gn)(ui)), {
                            topic: f,
                            acknowledged: () => new Promise((t => setTimeout((() => t(this.client.session.get(f))), 500)))
                        }
                    }, this.reject = async t => {
                        this.isInitialized(), await this.isValidReject(t);
                        const {
                            id: e,
                            reason: r
                        } = t, {
                            pairingTopic: i
                        } = this.client.proposal.get(e);
                        i && (await this.sendError(e, i, r), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")))
                    }, this.update = async t => {
                        this.isInitialized(), await this.isValidUpdate(t);
                        const {
                            topic: e,
                            namespaces: r
                        } = t, i = await this.sendRequest(e, "wc_sessionUpdate", {
                            namespaces: r
                        }), {
                            done: n,
                            resolve: o,
                            reject: a
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_update", i), (({
                            error: t
                        }) => {
                            t ? a(t) : o()
                        })), await this.client.session.update(e, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async t => {
                        this.isInitialized(), await this.isValidExtend(t);
                        const {
                            topic: e
                        } = t, r = await this.sendRequest(e, "wc_sessionExtend", {}), {
                            done: i,
                            resolve: n,
                            reject: o
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_extend", r), (({
                            error: t
                        }) => {
                            t ? o(t) : n()
                        })), await this.setExpiry(e, (0, s.gn)(ui)), {
                            acknowledged: i
                        }
                    }, this.request = async t => {
                        this.isInitialized(), await this.isValidRequest(t);
                        const {
                            chainId: e,
                            request: r,
                            topic: i,
                            expiry: n
                        } = t, o = await this.sendRequest(i, "wc_sessionRequest", {
                            request: r,
                            chainId: e
                        }, n), {
                            done: a,
                            resolve: c,
                            reject: h
                        } = (0, s.H1)(n);
                        this.events.once((0, s.E0)("session_request", o), (({
                            error: t,
                            result: e
                        }) => {
                            t ? h(t) : c(e)
                        })), this.client.events.emit("session_request_sent", {
                            topic: i,
                            request: r,
                            chainId: e,
                            id: o
                        });
                        const u = await this.client.core.storage.getItem(ci);
                        return (0, s.Hh)({
                            id: o,
                            topic: i,
                            wcDeepLink: u
                        }), await a()
                    }, this.respond = async t => {
                        this.isInitialized(), await this.isValidRespond(t);
                        const {
                            topic: e,
                            response: r
                        } = t, {
                            id: i
                        } = r;
                        et(r) ? await this.sendResult(i, e, r.result) : rt(r) && await this.sendError(i, e, r.error), this.cleanupAfterResponse(t)
                    }, this.ping = async t => {
                        this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.client.session.keys.includes(e)) {
                            const t = await this.sendRequest(e, "wc_sessionPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("session_ping", t), (({
                                error: t
                            }) => {
                                t ? n(t) : i()
                            })), await r()
                        } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                            topic: e
                        })
                    }, this.emit = async t => {
                        this.isInitialized(), await this.isValidEmit(t);
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.sendRequest(e, "wc_sessionEvent", {
                            event: r,
                            chainId: i
                        })
                    }, this.disconnect = async t => {
                        this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        if (this.client.session.keys.includes(e)) {
                            const t = V().toString();
                            let r;
                            const i = e => {
                                e ? .id.toString() === t && (this.client.core.relayer.events.removeListener(Be, i), r())
                            };
                            await Promise.all([new Promise((t => {
                                r = t, this.client.core.relayer.on(Be, i)
                            })), this.sendRequest(e, "wc_sessionDelete", (0, s.D6)("USER_DISCONNECTED"), void 0, t)]), await this.deleteSession(e)
                        } else await this.client.core.pairing.disconnect({
                            topic: e
                        })
                    }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter((e => (0, s.Ih)(e, t)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async t => {
                        if (t.pairingTopic) try {
                            const e = this.client.core.pairing.pairings.get(t.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter((r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                                }));
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((t => this.client.core.pairing.disconnect({
                                topic: t.topic
                            })))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (t, e) => {
                        const {
                            self: r
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), e || this.client.core.expirer.del(t), this.client.core.storage.removeItem(ci).catch((t => this.client.logger.warn(t)))
                    }, this.deleteProposal = async (t, e) => {
                        await Promise.all([this.client.proposal.delete(t, (0, s.D6)("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)])
                    }, this.deletePendingSessionRequest = async (t, e, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.requestQueue.requests = this.requestQueue.requests.filter((e => e.id !== t)), r && (this.requestQueue.state = fi)
                    }, this.setExpiry = async (t, e) => {
                        this.client.session.keys.includes(t) && await this.client.session.update(t, {
                            expiry: e
                        }), this.client.core.expirer.set(t, e)
                    }, this.setProposal = async (t, e) => {
                        await this.client.proposal.set(t, e), this.client.core.expirer.set(t, e.expiry)
                    }, this.setPendingSessionRequest = async t => {
                        const e = li.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n
                            } = t;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n
                        }), e && this.client.core.expirer.set(r, (0, s.gn)(e))
                    }, this.sendRequest = async (t, e, r, i, n) => {
                        const o = B(e, r);
                        if ((0, s.jU)() && gi.includes(e)) {
                            const t = (0, s.rj)(JSON.stringify(o));
                            await this.client.core.verify.register({
                                attestationId: t
                            })
                        }
                        const a = await this.client.core.crypto.encode(t, o),
                            c = li[e].req;
                        return i && (c.ttl = i), n && (c.id = n), this.client.core.history.set(t, o), this.client.core.relayer.publish(t, a, c), o.id
                    }, this.sendResult = async (t, e, r) => {
                        const i = K(t, r),
                            n = await this.client.core.crypto.encode(e, i),
                            s = await this.client.core.history.get(e, t),
                            o = li[s.request.method].res;
                        this.client.core.relayer.publish(e, n, o), await this.client.core.history.resolve(i)
                    }, this.sendError = async (t, e, r) => {
                        const i = F(t, r),
                            n = await this.client.core.crypto.encode(e, i),
                            s = await this.client.core.history.get(e, t),
                            o = li[s.request.method].res;
                        this.client.core.relayer.publish(e, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        const t = [],
                            e = [];
                        this.client.session.getAll().forEach((e => {
                            (0, s.Bw)(e.expiry) && t.push(e.topic)
                        })), this.client.proposal.getAll().forEach((t => {
                            (0, s.Bw)(t.expiry) && e.push(t.id)
                        })), await Promise.all([...t.map((t => this.deleteSession(t))), ...e.map((t => this.deleteProposal(t)))])
                    }, this.onRelayEventRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(e, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(e, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(e, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.client.core.history.get(e, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(e, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = t => {
                        const {
                            topic: e
                        } = t, {
                            message: r
                        } = (0, s.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(r)
                    }, this.onSessionProposeRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            this.isValidConnect(Ii({}, e.params));
                            const n = (0, s.gn)(_.FIVE_MINUTES),
                                o = Ii({
                                    id: i,
                                    pairingTopic: t,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, o);
                            const a = (0, s.rj)(JSON.stringify(e)),
                                c = await this.getVerifyContext(a, o.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: o,
                                verifyContext: c
                            })
                        } catch (u) {
                            await this.sendError(i, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionProposeResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        if (et(e)) {
                            const {
                                result: i
                            } = e;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            const n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            const s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            const o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: t
                            })
                        } else rt(e) && (await this.client.proposal.delete(r, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_connect"), {
                            error: e.error
                        }))
                    }, this.onSessionSettleRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidSessionSettleRequest(i);
                            const {
                                relay: r,
                                controller: n,
                                expiry: o,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                sessionProperties: u,
                                pairingTopic: l
                            } = e.params, p = Ii({
                                topic: t,
                                relay: r,
                                expiry: o,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult(e.id, t, !0), this.events.emit((0, s.E0)("session_connect"), {
                                session: p
                            }), this.cleanupDuplicatePairings(p)
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionSettleResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        et(e) ? (await this.client.session.update(t, {
                            acknowledged: !0
                        }), this.events.emit((0, s.E0)("session_approve", r), {})) : rt(e) && (await this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_approve", r), {
                            error: e.error
                        }))
                    }, this.onSessionUpdateRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            this.isValidUpdate(Ii({
                                topic: t
                            }, r)), await this.client.session.update(t, {
                                namespaces: r.namespaces
                            }), await this.sendResult(i, t, !0), this.client.events.emit("session_update", {
                                id: i,
                                topic: t,
                                params: r
                            })
                        } catch (u) {
                            await this.sendError(i, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionUpdateResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        et(e) ? this.events.emit((0, s.E0)("session_update", r), {}) : rt(e) && this.events.emit((0, s.E0)("session_update", r), {
                            error: e.error
                        })
                    }, this.onSessionExtendRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidExtend({
                                topic: t
                            }), await this.setExpiry(t, (0, s.gn)(ui)), await this.sendResult(r, t, !0), this.client.events.emit("session_extend", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionExtendResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        et(e) ? this.events.emit((0, s.E0)("session_extend", r), {}) : rt(e) && this.events.emit((0, s.E0)("session_extend", r), {
                            error: e.error
                        })
                    }, this.onSessionPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult(r, t, !0), this.client.events.emit("session_ping", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            et(e) ? this.events.emit((0, s.E0)("session_ping", r), {}) : rt(e) && this.events.emit((0, s.E0)("session_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t,
                                reason: e.params
                            }), await Promise.all([new Promise((e => {
                                this.client.core.relayer.once(Je, (async () => {
                                    e(await this.deleteSession(t))
                                }))
                            })), this.sendResult(r, t, !0)]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }, this.onSessionRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidRequest(Ii({
                                topic: t
                            }, i)), await this.setPendingSessionRequest({
                                id: r,
                                topic: t,
                                params: i
                            }), this.addRequestToQueue({
                                id: r,
                                topic: t,
                                params: i
                            }), await this.processRequestQueue()
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionRequestResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        et(e) ? this.events.emit((0, s.E0)("session_request", r), {
                            result: e.result
                        }) : rt(e) && this.events.emit((0, s.E0)("session_request", r), {
                            error: e.error
                        })
                    }, this.onSessionEventRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidEmit(Ii({
                                topic: t
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: t,
                                params: i
                            })
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.addRequestToQueue = t => {
                        this.requestQueue.requests.push(t)
                    }, this.cleanupAfterResponse = t => {
                        this.deletePendingSessionRequest(t.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout((() => {
                            this.requestQueue.state = fi, this.processRequestQueue()
                        }), (0, _.toMiliseconds)(this.requestQueueDelay))
                    }, this.processRequestQueue = async () => {
                        if (this.requestQueue.state === di) return void this.client.logger.info("session request queue is already active.");
                        const t = this.requestQueue.requests[0];
                        if (t) try {
                            const {
                                id: e,
                                topic: r,
                                params: i
                            } = t, n = (0, s.rj)(JSON.stringify({
                                id: e,
                                params: i
                            })), o = this.client.session.get(r), a = await this.getVerifyContext(n, o.peer.metadata);
                            this.requestQueue.state = di, this.client.events.emit("session_request", {
                                id: e,
                                topic: r,
                                params: i,
                                verifyContext: a
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.isValidConnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                            throw new Error(e)
                        }
                        const {
                            pairingTopic: e,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: o
                        } = t;
                        if ((0, s.o8)(e) || await this.isValidPairingTopic(e), !(0, s.PM)(o, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw new Error(t)
                        }!(0, s.o8)(r) && 0 !== (0, s.L5)(r) && this.validateNamespaces(r, "requiredNamespaces"), !(0, s.o8)(i) && 0 !== (0, s.L5)(i) && this.validateNamespaces(i, "optionalNamespaces"), (0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (t, e) => {
                        const r = (0, s.n)(t, "connect()", e);
                        if (r) throw new Error(r.message)
                    }, this.isValidApprove = async t => {
                        if (!(0, s.EJ)(t)) throw new Error((0, s.Z7)("MISSING_OR_INVALID", `approve() params: ${t}`).message);
                        const {
                            id: e,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = t;
                        await this.isValidProposalId(e);
                        const o = this.client.proposal.get(e),
                            a = (0, s.in)(r, "approve()");
                        if (a) throw new Error(a.message);
                        const c = (0, s.rF)(o.requiredNamespaces, r, "approve()");
                        if (c) throw new Error(c.message);
                        if (!(0, s.M_)(i, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw new Error(t)
                        }(0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            id: e,
                            reason: r
                        } = t;
                        if (await this.isValidProposalId(e), !(0, s.$t)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidSessionSettleRequest = t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            relay: e,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = t;
                        if (!(0, s.Z2)(e)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(t)
                        }
                        const o = (0, s.Dd)(r, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        const a = (0, s.in)(i, "onSessionSettleRequest()");
                        if (a) throw new Error(a.message);
                        if ((0, s.Bw)(n)) {
                            const {
                                message: t
                            } = (0, s.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(t)
                        }
                    }, this.isValidUpdate = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `update() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            namespaces: r
                        } = t;
                        await this.isValidSessionTopic(e);
                        const i = this.client.session.get(e),
                            n = (0, s.in)(r, "update()");
                        if (n) throw new Error(n.message);
                        const o = (0, s.rF)(i.requiredNamespaces, r, "update()");
                        if (o) throw new Error(o.message)
                    }, this.isValidExtend = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `extend() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionTopic(e)
                    }, this.isValidRequest = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: o
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(o, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.hH)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.al)(o, i, r.method)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw new Error(t)
                        }
                        if (n && !(0, s.ON)(n, pi)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${pi.min} and ${pi.max}`);
                            throw new Error(t)
                        }
                    }, this.isValidRespond = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            response: r
                        } = t;
                        if (await this.isValidSessionTopic(e), !(0, s.JT)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.isValidEmit = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: n
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(n, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.nf)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.sI)(n, i, r.name)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.getVerifyContext = async (t, e) => {
                        const r = {
                            verified: {
                                verifyUrl: e.verifyUrl || "",
                                validation: "UNKNOWN",
                                origin: e.url || ""
                            }
                        };
                        try {
                            const i = await this.client.core.verify.resolve({
                                attestationId: t,
                                verifyUrl: e.verifyUrl
                            });
                            i && (r.verified.origin = i, r.verified.validation = i === e.url ? "VALID" : "INVALID")
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (t, e) => {
                        Object.values(t).forEach((t => {
                            if (!(0, s.M_)(t, !1)) {
                                const {
                                    message: r
                                } = (0, s.Z7)("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                                throw new Error(r)
                            }
                        }))
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(Ve, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        const i = await this.client.core.crypto.decode(e, r);
                        try {
                            X(i) ? (this.client.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : tt(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.client.core.history.delete(e, i.id)) : this.onRelayEventUnknownPayload({
                                topic: e,
                                payload: i
                            })
                        } catch (n) {
                            this.client.logger.error(n)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(dr, (async t => {
                        const {
                            topic: e,
                            id: r
                        } = (0, s.iP)(t.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, s.Z7)("EXPIRED"), !0);
                        e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
                            topic: e
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    }))
                }
                isValidPairingTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.session.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.session.get(t).expiry)) {
                        await this.deleteSession(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `session topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionOrPairingTopic(t) {
                    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(t)) {
                            if ((0, s.M_)(t, !1)) {
                                const {
                                    message: e
                                } = (0, s.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                                throw new Error(e)
                            } {
                                const {
                                    message: e
                                } = (0, s.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                                throw new Error(e)
                            }
                        }
                        this.isValidPairingTopic(t)
                    }
                }
                async isValidProposalId(t) {
                    if (!(0, s.Q0)(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.proposal.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.proposal.get(t).expiry)) {
                        await this.deleteProposal(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `proposal id: ${t}`);
                        throw new Error(e)
                    }
                }
            }
            class Oi extends Kr {
                constructor(t, e) {
                    super(t, e, "proposal", si), this.core = t, this.logger = e
                }
            }
            class xi extends Kr {
                constructor(t, e) {
                    super(t, e, "session", si), this.core = t, this.logger = e
                }
            }
            class Ci extends Kr {
                constructor(t, e) {
                    super(t, e, "request", si, (t => t.id)), this.core = t, this.logger = e
                }
            }
            class Ri extends class {
                constructor(t) {
                    this.opts = t, this.protocol = "wc", this.version = 2
                }
            } {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = oi, this.events = new i.EventEmitter, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
                        try {
                            return await this.engine.connect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async t => {
                        try {
                            return await this.engine.pair(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async t => {
                        try {
                            return await this.engine.approve(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async t => {
                        try {
                            return await this.engine.reject(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async t => {
                        try {
                            return await this.engine.update(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async t => {
                        try {
                            return await this.engine.extend(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async t => {
                        try {
                            return await this.engine.request(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async t => {
                        try {
                            return await this.engine.respond(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async t => {
                        try {
                            return await this.engine.ping(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async t => {
                        try {
                            return await this.engine.emit(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async t => {
                        try {
                            return await this.engine.disconnect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = t => {
                        try {
                            return this.engine.find(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.name = t ? .name || oi, this.metadata = t ? .metadata || (0, s.D)();
                    const e = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: t ? .logger || ai
                    }));
                    this.core = t ? .core || new ii(t), this.logger = (0, c.generateChildLogger)(e, this.name), this.session = new xi(this.core, this.logger), this.proposal = new Oi(this.core, this.logger), this.pendingRequest = new Ci(this.core, this.logger), this.engine = new Si(this)
                }
                static async init(t) {
                    const e = new Ri(t);
                    return await e.initialize(), e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (t) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
                    }
                }
            }
            var Ai = r(54098),
                ji = r.n(Ai);
            const Ni = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class Ti {
                constructor(t, e = !1) {
                    if (this.url = t, this.disableProviderPing = e, this.events = new i.EventEmitter, this.isAvailable = !1, this.registering = !1, !G(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        const e = y(t),
                            r = await ji()(this.url, Object.assign(Object.assign({}, Ni), {
                                body: e
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (r) {
                        this.onError(t.id, r)
                    }
                }
                async register(t = this.url) {
                    if (!G(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                            this.events.once("register_error", (t => {
                                this.resetMaxListeners(), e(t)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return e(new Error("HTTP connection is missing or invalid"));
                                t()
                            }))
                        }))
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            const e = y({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await ji()(t, Object.assign(Object.assign({}, Ni), {
                                body: e
                            }))
                        }
                        this.onOpen()
                    } catch (e) {
                        const t = this.parseError(e);
                        throw this.events.emit("register_error", t), this.onClose(), t
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if ("undefined" === typeof t.data) return;
                    const e = "string" === typeof t.data ? v(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        i = F(t, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(t, e = this.url) {
                    return $(t, e, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var Li = Ti;
            const Mi = "error",
                Di = "wc@2:universal_provider:",
                qi = "default_chain_changed";
            var zi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                ki = {
                    exports: {}
                };
            ! function(t, e) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 16,
                        a = 32,
                        c = 64,
                        h = 128,
                        u = 256,
                        l = 1 / 0,
                        p = 9007199254740991,
                        f = NaN,
                        d = 4294967295,
                        g = [
                            ["ary", h],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", o],
                            ["flip", 512],
                            ["partial", a],
                            ["partialRight", c],
                            ["rearg", u]
                        ],
                        v = "[object Arguments]",
                        y = "[object Array]",
                        m = "[object Boolean]",
                        w = "[object Date]",
                        _ = "[object Error]",
                        b = "[object Function]",
                        E = "[object GeneratorFunction]",
                        I = "[object Map]",
                        P = "[object Number]",
                        S = "[object Object]",
                        O = "[object Promise]",
                        x = "[object RegExp]",
                        C = "[object Set]",
                        R = "[object String]",
                        A = "[object Symbol]",
                        j = "[object WeakMap]",
                        N = "[object ArrayBuffer]",
                        T = "[object DataView]",
                        L = "[object Float32Array]",
                        M = "[object Float64Array]",
                        D = "[object Int8Array]",
                        q = "[object Int16Array]",
                        z = "[object Int32Array]",
                        k = "[object Uint8Array]",
                        $ = "[object Uint8ClampedArray]",
                        U = "[object Uint16Array]",
                        H = "[object Uint32Array]",
                        V = /\b__p \+= '';/g,
                        B = /\b(__p \+=) '' \+/g,
                        K = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        F = /&(?:amp|lt|gt|quot|#39);/g,
                        Z = /[&<>"']/g,
                        W = RegExp(F.source),
                        G = RegExp(Z.source),
                        J = /<%-([\s\S]+?)%>/g,
                        Y = /<%([\s\S]+?)%>/g,
                        Q = /<%=([\s\S]+?)%>/g,
                        X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        tt = /^\w*$/,
                        et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        rt = /[\\^$.*+?()[\]{}|]/g,
                        it = RegExp(rt.source),
                        nt = /^\s+/,
                        st = /\s/,
                        ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        at = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ct = /,? & /,
                        ht = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ut = /[()=,{}\[\]\/\s]/,
                        lt = /\\(\\)?/g,
                        pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        ft = /\w*$/,
                        dt = /^[-+]0x[0-9a-f]+$/i,
                        gt = /^0b[01]+$/i,
                        vt = /^\[object .+?Constructor\]$/,
                        yt = /^0o[0-7]+$/i,
                        mt = /^(?:0|[1-9]\d*)$/,
                        wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        _t = /($^)/,
                        bt = /['\n\r\u2028\u2029\\]/g,
                        Et = "\\ud800-\\udfff",
                        It = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Pt = "\\u2700-\\u27bf",
                        St = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Ot = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        xt = "\\ufe0e\\ufe0f",
                        Ct = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Rt = "['\u2019]",
                        At = "[" + Et + "]",
                        jt = "[" + Ct + "]",
                        Nt = "[" + It + "]",
                        Tt = "\\d+",
                        Lt = "[" + Pt + "]",
                        Mt = "[" + St + "]",
                        Dt = "[^" + Et + Ct + Tt + Pt + St + Ot + "]",
                        qt = "\\ud83c[\\udffb-\\udfff]",
                        zt = "[^" + Et + "]",
                        kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        $t = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Ut = "[" + Ot + "]",
                        Ht = "\\u200d",
                        Vt = "(?:" + Mt + "|" + Dt + ")",
                        Bt = "(?:" + Ut + "|" + Dt + ")",
                        Kt = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Ft = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Zt = "(?:" + Nt + "|" + qt + ")" + "?",
                        Wt = "[" + xt + "]?",
                        Gt = Wt + Zt + ("(?:\\u200d(?:" + [zt, kt, $t].join("|") + ")" + Wt + Zt + ")*"),
                        Jt = "(?:" + [Lt, kt, $t].join("|") + ")" + Gt,
                        Yt = "(?:" + [zt + Nt + "?", Nt, kt, $t, At].join("|") + ")",
                        Qt = RegExp(Rt, "g"),
                        Xt = RegExp(Nt, "g"),
                        te = RegExp(qt + "(?=" + qt + ")|" + Yt + Gt, "g"),
                        ee = RegExp([Ut + "?" + Mt + "+" + Kt + "(?=" + [jt, Ut, "$"].join("|") + ")", Bt + "+" + Ft + "(?=" + [jt, Ut + Vt, "$"].join("|") + ")", Ut + "?" + Vt + "+" + Kt, Ut + "+" + Ft, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Tt, Jt].join("|"), "g"),
                        re = RegExp("[" + Ht + Et + It + xt + "]"),
                        ie = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        ne = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        se = -1,
                        oe = {};
                    oe[L] = oe[M] = oe[D] = oe[q] = oe[z] = oe[k] = oe[$] = oe[U] = oe[H] = !0, oe[v] = oe[y] = oe[N] = oe[m] = oe[T] = oe[w] = oe[_] = oe[b] = oe[I] = oe[P] = oe[S] = oe[x] = oe[C] = oe[R] = oe[j] = !1;
                    var ae = {};
                    ae[v] = ae[y] = ae[N] = ae[T] = ae[m] = ae[w] = ae[L] = ae[M] = ae[D] = ae[q] = ae[z] = ae[I] = ae[P] = ae[S] = ae[x] = ae[C] = ae[R] = ae[A] = ae[k] = ae[$] = ae[U] = ae[H] = !0, ae[_] = ae[b] = ae[j] = !1;
                    var ce = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        he = parseFloat,
                        ue = parseInt,
                        le = "object" == typeof zi && zi && zi.Object === Object && zi,
                        pe = "object" == typeof self && self && self.Object === Object && self,
                        fe = le || pe || Function("return this")(),
                        de = e && !e.nodeType && e,
                        ge = de && t && !t.nodeType && t,
                        ve = ge && ge.exports === de,
                        ye = ve && le.process,
                        me = function() {
                            try {
                                return ge && ge.require && ge.require("util").types || ye && ye.binding && ye.binding("util")
                            } catch {}
                        }(),
                        we = me && me.isArrayBuffer,
                        _e = me && me.isDate,
                        be = me && me.isMap,
                        Ee = me && me.isRegExp,
                        Ie = me && me.isSet,
                        Pe = me && me.isTypedArray;

                    function Se(t, e, r) {
                        switch (r.length) {
                            case 0:
                                return t.call(e);
                            case 1:
                                return t.call(e, r[0]);
                            case 2:
                                return t.call(e, r[0], r[1]);
                            case 3:
                                return t.call(e, r[0], r[1], r[2])
                        }
                        return t.apply(e, r)
                    }

                    function Oe(t, e, r, i) {
                        for (var n = -1, s = null == t ? 0 : t.length; ++n < s;) {
                            var o = t[n];
                            e(i, o, r(o), t)
                        }
                        return i
                    }

                    function xe(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i && !1 !== e(t[r], r, t););
                        return t
                    }

                    function Ce(t, e) {
                        for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
                        return t
                    }

                    function Re(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (!e(t[r], r, t)) return !1;
                        return !0
                    }

                    function Ae(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }

                    function je(t, e) {
                        return !!(null == t ? 0 : t.length) && Ue(t, e, 0) > -1
                    }

                    function Ne(t, e, r) {
                        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                            if (r(e, t[i])) return !0;
                        return !1
                    }

                    function Te(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
                        return n
                    }

                    function Le(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }

                    function Me(t, e, r, i) {
                        var n = -1,
                            s = null == t ? 0 : t.length;
                        for (i && s && (r = t[++n]); ++n < s;) r = e(r, t[n], n, t);
                        return r
                    }

                    function De(t, e, r, i) {
                        var n = null == t ? 0 : t.length;
                        for (i && n && (r = t[--n]); n--;) r = e(r, t[n], n, t);
                        return r
                    }

                    function qe(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (e(t[r], r, t)) return !0;
                        return !1
                    }
                    var ze = Ke("length");

                    function ke(t, e, r) {
                        var i;
                        return r(t, (function(t, r, n) {
                            if (e(t, r, n)) return i = r, !1
                        })), i
                    }

                    function $e(t, e, r, i) {
                        for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (e(t[s], s, t)) return s;
                        return -1
                    }

                    function Ue(t, e, r) {
                        return e === e ? function(t, e, r) {
                            for (var i = r - 1, n = t.length; ++i < n;)
                                if (t[i] === e) return i;
                            return -1
                        }(t, e, r) : $e(t, Ve, r)
                    }

                    function He(t, e, r, i) {
                        for (var n = r - 1, s = t.length; ++n < s;)
                            if (i(t[n], e)) return n;
                        return -1
                    }

                    function Ve(t) {
                        return t !== t
                    }

                    function Be(t, e) {
                        var r = null == t ? 0 : t.length;
                        return r ? We(t, e) / r : f
                    }

                    function Ke(t) {
                        return function(e) {
                            return null == e ? r : e[t]
                        }
                    }

                    function Fe(t) {
                        return function(e) {
                            return null == t ? r : t[e]
                        }
                    }

                    function Ze(t, e, r, i, n) {
                        return n(t, (function(t, n, s) {
                            r = i ? (i = !1, t) : e(r, t, n, s)
                        })), r
                    }

                    function We(t, e) {
                        for (var i, n = -1, s = t.length; ++n < s;) {
                            var o = e(t[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function Ge(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }

                    function Je(t) {
                        return t && t.slice(0, fr(t) + 1).replace(nt, "")
                    }

                    function Ye(t) {
                        return function(e) {
                            return t(e)
                        }
                    }

                    function Qe(t, e) {
                        return Te(e, (function(e) {
                            return t[e]
                        }))
                    }

                    function Xe(t, e) {
                        return t.has(e)
                    }

                    function tr(t, e) {
                        for (var r = -1, i = t.length; ++r < i && Ue(e, t[r], 0) > -1;);
                        return r
                    }

                    function er(t, e) {
                        for (var r = t.length; r-- && Ue(e, t[r], 0) > -1;);
                        return r
                    }

                    function rr(t, e) {
                        for (var r = t.length, i = 0; r--;) t[r] === e && ++i;
                        return i
                    }
                    var ir = Fe({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        nr = Fe({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function sr(t) {
                        return "\\" + ce[t]
                    }

                    function or(t) {
                        return re.test(t)
                    }

                    function ar(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t, i) {
                            r[++e] = [i, t]
                        })), r
                    }

                    function cr(t, e) {
                        return function(r) {
                            return t(e(r))
                        }
                    }

                    function hr(t, e) {
                        for (var r = -1, i = t.length, n = 0, o = []; ++r < i;) {
                            var a = t[r];
                            (a === e || a === s) && (t[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function ur(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t) {
                            r[++e] = t
                        })), r
                    }

                    function lr(t) {
                        return or(t) ? function(t) {
                            for (var e = te.lastIndex = 0; te.test(t);) ++e;
                            return e
                        }(t) : ze(t)
                    }

                    function pr(t) {
                        return or(t) ? function(t) {
                            return t.match(te) || []
                        }(t) : function(t) {
                            return t.split("")
                        }(t)
                    }

                    function fr(t) {
                        for (var e = t.length; e-- && st.test(t.charAt(e)););
                        return e
                    }
                    var dr = Fe({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var gr = function t(e) {
                        var st = (e = null == e ? fe : gr.defaults(fe.Object(), e, gr.pick(fe, ne))).Array,
                            Et = e.Date,
                            It = e.Error,
                            Pt = e.Function,
                            St = e.Math,
                            Ot = e.Object,
                            xt = e.RegExp,
                            Ct = e.String,
                            Rt = e.TypeError,
                            At = st.prototype,
                            jt = Pt.prototype,
                            Nt = Ot.prototype,
                            Tt = e["__core-js_shared__"],
                            Lt = jt.toString,
                            Mt = Nt.hasOwnProperty,
                            Dt = 0,
                            qt = function() {
                                var t = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
                                return t ? "Symbol(src)_1." + t : ""
                            }(),
                            zt = Nt.toString,
                            kt = Lt.call(Ot),
                            $t = fe._,
                            Ut = xt("^" + Lt.call(Mt).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ht = ve ? e.Buffer : r,
                            Vt = e.Symbol,
                            Bt = e.Uint8Array,
                            Kt = Ht ? Ht.allocUnsafe : r,
                            Ft = cr(Ot.getPrototypeOf, Ot),
                            Zt = Ot.create,
                            Wt = Nt.propertyIsEnumerable,
                            Gt = At.splice,
                            Jt = Vt ? Vt.isConcatSpreadable : r,
                            Yt = Vt ? Vt.iterator : r,
                            te = Vt ? Vt.toStringTag : r,
                            re = function() {
                                try {
                                    var t = ls(Ot, "defineProperty");
                                    return t({}, "", {}), t
                                } catch {}
                            }(),
                            ce = e.clearTimeout !== fe.clearTimeout && e.clearTimeout,
                            le = Et && Et.now !== fe.Date.now && Et.now,
                            pe = e.setTimeout !== fe.setTimeout && e.setTimeout,
                            de = St.ceil,
                            ge = St.floor,
                            ye = Ot.getOwnPropertySymbols,
                            me = Ht ? Ht.isBuffer : r,
                            ze = e.isFinite,
                            Fe = At.join,
                            vr = cr(Ot.keys, Ot),
                            yr = St.max,
                            mr = St.min,
                            wr = Et.now,
                            _r = e.parseInt,
                            br = St.random,
                            Er = At.reverse,
                            Ir = ls(e, "DataView"),
                            Pr = ls(e, "Map"),
                            Sr = ls(e, "Promise"),
                            Or = ls(e, "Set"),
                            xr = ls(e, "WeakMap"),
                            Cr = ls(Ot, "create"),
                            Rr = xr && new xr,
                            Ar = {},
                            jr = zs(Ir),
                            Nr = zs(Pr),
                            Tr = zs(Sr),
                            Lr = zs(Or),
                            Mr = zs(xr),
                            Dr = Vt ? Vt.prototype : r,
                            qr = Dr ? Dr.valueOf : r,
                            zr = Dr ? Dr.toString : r;

                        function kr(t) {
                            if (ra(t) && !Ko(t) && !(t instanceof Vr)) {
                                if (t instanceof Hr) return t;
                                if (Mt.call(t, "__wrapped__")) return ks(t)
                            }
                            return new Hr(t)
                        }
                        var $r = function() {
                            function t() {}
                            return function(e) {
                                if (!ea(e)) return {};
                                if (Zt) return Zt(e);
                                t.prototype = e;
                                var i = new t;
                                return t.prototype = r, i
                            }
                        }();

                        function Ur() {}

                        function Hr(t, e) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r
                        }

                        function Vr(t) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Br(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Kr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Fr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Zr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.__data__ = new Fr; ++e < r;) this.add(t[e])
                        }

                        function Wr(t) {
                            var e = this.__data__ = new Kr(t);
                            this.size = e.size
                        }

                        function Gr(t, e) {
                            var r = Ko(t),
                                i = !r && Bo(t),
                                n = !r && !i && Go(t),
                                s = !r && !i && !n && ua(t),
                                o = r || i || n || s,
                                a = o ? Ge(t.length, Ct) : [],
                                c = a.length;
                            for (var h in t)(e || Mt.call(t, h)) && (!o || !("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || ms(h, c))) && a.push(h);
                            return a
                        }

                        function Jr(t) {
                            var e = t.length;
                            return e ? t[Zi(0, e - 1)] : r
                        }

                        function Yr(t, e) {
                            return Ms(Rn(t), oi(e, 0, t.length))
                        }

                        function Qr(t) {
                            return Ms(Rn(t))
                        }

                        function Xr(t, e, i) {
                            (i !== r && !Uo(t[e], i) || i === r && !(e in t)) && ni(t, e, i)
                        }

                        function ti(t, e, i) {
                            var n = t[e];
                            (!Mt.call(t, e) || !Uo(n, i) || i === r && !(e in t)) && ni(t, e, i)
                        }

                        function ei(t, e) {
                            for (var r = t.length; r--;)
                                if (Uo(t[r][0], e)) return r;
                            return -1
                        }

                        function ri(t, e, r, i) {
                            return li(t, (function(t, n, s) {
                                e(i, t, r(t), s)
                            })), i
                        }

                        function ii(t, e) {
                            return t && An(e, Na(e), t)
                        }

                        function ni(t, e, r) {
                            "__proto__" == e && re ? re(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : t[e] = r
                        }

                        function si(t, e) {
                            for (var i = -1, n = e.length, s = st(n), o = null == t; ++i < n;) s[i] = o ? r : xa(t, e[i]);
                            return s
                        }

                        function oi(t, e, i) {
                            return t === t && (i !== r && (t = t <= i ? t : i), e !== r && (t = t >= e ? t : e)), t
                        }

                        function ai(t, e, i, n, s, o) {
                            var a, c = 1 & e,
                                h = 2 & e,
                                u = 4 & e;
                            if (i && (a = s ? i(t, n, s, o) : i(t)), a !== r) return a;
                            if (!ea(t)) return t;
                            var l = Ko(t);
                            if (l) {
                                if (a = function(t) {
                                        var e = t.length,
                                            r = new t.constructor(e);
                                        return e && "string" == typeof t[0] && Mt.call(t, "index") && (r.index = t.index, r.input = t.input), r
                                    }(t), !c) return Rn(t, a)
                            } else {
                                var p = ds(t),
                                    f = p == b || p == E;
                                if (Go(t)) return In(t, c);
                                if (p == S || p == v || f && !s) {
                                    if (a = h || f ? {} : vs(t), !c) return h ? function(t, e) {
                                        return An(t, fs(t), e)
                                    }(t, function(t, e) {
                                        return t && An(e, Ta(e), t)
                                    }(a, t)) : function(t, e) {
                                        return An(t, ps(t), e)
                                    }(t, ii(a, t))
                                } else {
                                    if (!ae[p]) return s ? t : {};
                                    a = function(t, e, r) {
                                        var i = t.constructor;
                                        switch (e) {
                                            case N:
                                                return Pn(t);
                                            case m:
                                            case w:
                                                return new i(+t);
                                            case T:
                                                return function(t, e) {
                                                    var r = e ? Pn(t.buffer) : t.buffer;
                                                    return new t.constructor(r, t.byteOffset, t.byteLength)
                                                }(t, r);
                                            case L:
                                            case M:
                                            case D:
                                            case q:
                                            case z:
                                            case k:
                                            case $:
                                            case U:
                                            case H:
                                                return Sn(t, r);
                                            case I:
                                                return new i;
                                            case P:
                                            case R:
                                                return new i(t);
                                            case x:
                                                return function(t) {
                                                    var e = new t.constructor(t.source, ft.exec(t));
                                                    return e.lastIndex = t.lastIndex, e
                                                }(t);
                                            case C:
                                                return new i;
                                            case A:
                                                return function(t) {
                                                    return qr ? Ot(qr.call(t)) : {}
                                                }(t)
                                        }
                                    }(t, p, c)
                                }
                            }
                            o || (o = new Wr);
                            var d = o.get(t);
                            if (d) return d;
                            o.set(t, a), aa(t) ? t.forEach((function(r) {
                                a.add(ai(r, e, i, r, t, o))
                            })) : ia(t) && t.forEach((function(r, n) {
                                a.set(n, ai(r, e, i, n, t, o))
                            }));
                            var g = l ? r : (u ? h ? ns : is : h ? Ta : Na)(t);
                            return xe(g || t, (function(r, n) {
                                g && (r = t[n = r]), ti(a, n, ai(r, e, i, n, t, o))
                            })), a
                        }

                        function ci(t, e, i) {
                            var n = i.length;
                            if (null == t) return !n;
                            for (t = Ot(t); n--;) {
                                var s = i[n],
                                    o = e[s],
                                    a = t[s];
                                if (a === r && !(s in t) || !o(a)) return !1
                            }
                            return !0
                        }

                        function hi(t, e, n) {
                            if ("function" != typeof t) throw new Rt(i);
                            return js((function() {
                                t.apply(r, n)
                            }), e)
                        }

                        function ui(t, e, r, i) {
                            var n = -1,
                                s = je,
                                o = !0,
                                a = t.length,
                                c = [],
                                h = e.length;
                            if (!a) return c;
                            r && (e = Te(e, Ye(r))), i ? (s = Ne, o = !1) : e.length >= 200 && (s = Xe, o = !1, e = new Zr(e));
                            t: for (; ++n < a;) {
                                var u = t[n],
                                    l = null == r ? u : r(u);
                                if (u = i || 0 !== u ? u : 0, o && l === l) {
                                    for (var p = h; p--;)
                                        if (e[p] === l) continue t;
                                    c.push(u)
                                } else s(e, l, i) || c.push(u)
                            }
                            return c
                        }
                        kr.templateSettings = {
                            escape: J,
                            evaluate: Y,
                            interpolate: Q,
                            variable: "",
                            imports: {
                                _: kr
                            }
                        }, kr.prototype = Ur.prototype, kr.prototype.constructor = kr, Hr.prototype = $r(Ur.prototype), Hr.prototype.constructor = Hr, Vr.prototype = $r(Ur.prototype), Vr.prototype.constructor = Vr, Br.prototype.clear = function() {
                            this.__data__ = Cr ? Cr(null) : {}, this.size = 0
                        }, Br.prototype.delete = function(t) {
                            var e = this.has(t) && delete this.__data__[t];
                            return this.size -= e ? 1 : 0, e
                        }, Br.prototype.get = function(t) {
                            var e = this.__data__;
                            if (Cr) {
                                var i = e[t];
                                return i === n ? r : i
                            }
                            return Mt.call(e, t) ? e[t] : r
                        }, Br.prototype.has = function(t) {
                            var e = this.__data__;
                            return Cr ? e[t] !== r : Mt.call(e, t)
                        }, Br.prototype.set = function(t, e) {
                            var i = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, i[t] = Cr && e === r ? n : e, this
                        }, Kr.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Kr.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = ei(e, t);
                            return !(r < 0) && (r == e.length - 1 ? e.pop() : Gt.call(e, r, 1), --this.size, !0)
                        }, Kr.prototype.get = function(t) {
                            var e = this.__data__,
                                i = ei(e, t);
                            return i < 0 ? r : e[i][1]
                        }, Kr.prototype.has = function(t) {
                            return ei(this.__data__, t) > -1
                        }, Kr.prototype.set = function(t, e) {
                            var r = this.__data__,
                                i = ei(r, t);
                            return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
                        }, Fr.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Br,
                                map: new(Pr || Kr),
                                string: new Br
                            }
                        }, Fr.prototype.delete = function(t) {
                            var e = hs(this, t).delete(t);
                            return this.size -= e ? 1 : 0, e
                        }, Fr.prototype.get = function(t) {
                            return hs(this, t).get(t)
                        }, Fr.prototype.has = function(t) {
                            return hs(this, t).has(t)
                        }, Fr.prototype.set = function(t, e) {
                            var r = hs(this, t),
                                i = r.size;
                            return r.set(t, e), this.size += r.size == i ? 0 : 1, this
                        }, Zr.prototype.add = Zr.prototype.push = function(t) {
                            return this.__data__.set(t, n), this
                        }, Zr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Wr.prototype.clear = function() {
                            this.__data__ = new Kr, this.size = 0
                        }, Wr.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = e.delete(t);
                            return this.size = e.size, r
                        }, Wr.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, Wr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Wr.prototype.set = function(t, e) {
                            var r = this.__data__;
                            if (r instanceof Kr) {
                                var i = r.__data__;
                                if (!Pr || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                                r = this.__data__ = new Fr(i)
                            }
                            return r.set(t, e), this.size = r.size, this
                        };
                        var li = Tn(wi),
                            pi = Tn(_i, !0);

                        function fi(t, e) {
                            var r = !0;
                            return li(t, (function(t, i, n) {
                                return r = !!e(t, i, n)
                            })), r
                        }

                        function di(t, e, i) {
                            for (var n = -1, s = t.length; ++n < s;) {
                                var o = t[n],
                                    a = e(o);
                                if (null != a && (c === r ? a === a && !ha(a) : i(a, c))) var c = a,
                                    h = o
                            }
                            return h
                        }

                        function gi(t, e) {
                            var r = [];
                            return li(t, (function(t, i, n) {
                                e(t, i, n) && r.push(t)
                            })), r
                        }

                        function vi(t, e, r, i, n) {
                            var s = -1,
                                o = t.length;
                            for (r || (r = ys), n || (n = []); ++s < o;) {
                                var a = t[s];
                                e > 0 && r(a) ? e > 1 ? vi(a, e - 1, r, i, n) : Le(n, a) : i || (n[n.length] = a)
                            }
                            return n
                        }
                        var yi = Ln(),
                            mi = Ln(!0);

                        function wi(t, e) {
                            return t && yi(t, e, Na)
                        }

                        function _i(t, e) {
                            return t && mi(t, e, Na)
                        }

                        function bi(t, e) {
                            return Ae(e, (function(e) {
                                return Qo(t[e])
                            }))
                        }

                        function Ei(t, e) {
                            for (var i = 0, n = (e = wn(e, t)).length; null != t && i < n;) t = t[qs(e[i++])];
                            return i && i == n ? t : r
                        }

                        function Ii(t, e, r) {
                            var i = e(t);
                            return Ko(t) ? i : Le(i, r(t))
                        }

                        function Pi(t) {
                            return null == t ? t === r ? "[object Undefined]" : "[object Null]" : te && te in Ot(t) ? function(t) {
                                var e = Mt.call(t, te),
                                    i = t[te];
                                try {
                                    t[te] = r;
                                    var n = !0
                                } catch {}
                                var s = zt.call(t);
                                return n && (e ? t[te] = i : delete t[te]), s
                            }(t) : function(t) {
                                return zt.call(t)
                            }(t)
                        }

                        function Si(t, e) {
                            return t > e
                        }

                        function Oi(t, e) {
                            return null != t && Mt.call(t, e)
                        }

                        function xi(t, e) {
                            return null != t && e in Ot(t)
                        }

                        function Ci(t, e, i) {
                            for (var n = i ? Ne : je, s = t[0].length, o = t.length, a = o, c = st(o), h = 1 / 0, u = []; a--;) {
                                var l = t[a];
                                a && e && (l = Te(l, Ye(e))), h = mr(l.length, h), c[a] = !i && (e || s >= 120 && l.length >= 120) ? new Zr(a && l) : r
                            }
                            l = t[0];
                            var p = -1,
                                f = c[0];
                            t: for (; ++p < s && u.length < h;) {
                                var d = l[p],
                                    g = e ? e(d) : d;
                                if (d = i || 0 !== d ? d : 0, !(f ? Xe(f, g) : n(u, g, i))) {
                                    for (a = o; --a;) {
                                        var v = c[a];
                                        if (!(v ? Xe(v, g) : n(t[a], g, i))) continue t
                                    }
                                    f && f.push(g), u.push(d)
                                }
                            }
                            return u
                        }

                        function Ri(t, e, i) {
                            var n = null == (t = xs(t, e = wn(e, t))) ? t : t[qs(Js(e))];
                            return null == n ? r : Se(n, t, i)
                        }

                        function Ai(t) {
                            return ra(t) && Pi(t) == v
                        }

                        function ji(t, e, i, n, s) {
                            return t === e || (null == t || null == e || !ra(t) && !ra(e) ? t !== t && e !== e : function(t, e, i, n, s, o) {
                                var a = Ko(t),
                                    c = Ko(e),
                                    h = a ? y : ds(t),
                                    u = c ? y : ds(e),
                                    l = (h = h == v ? S : h) == S,
                                    p = (u = u == v ? S : u) == S,
                                    f = h == u;
                                if (f && Go(t)) {
                                    if (!Go(e)) return !1;
                                    a = !0, l = !1
                                }
                                if (f && !l) return o || (o = new Wr), a || ua(t) ? es(t, e, i, n, s, o) : function(t, e, r, i, n, s, o) {
                                    switch (r) {
                                        case T:
                                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                            t = t.buffer, e = e.buffer;
                                        case N:
                                            return !(t.byteLength != e.byteLength || !s(new Bt(t), new Bt(e)));
                                        case m:
                                        case w:
                                        case P:
                                            return Uo(+t, +e);
                                        case _:
                                            return t.name == e.name && t.message == e.message;
                                        case x:
                                        case R:
                                            return t == e + "";
                                        case I:
                                            var a = ar;
                                        case C:
                                            var c = 1 & i;
                                            if (a || (a = ur), t.size != e.size && !c) return !1;
                                            var h = o.get(t);
                                            if (h) return h == e;
                                            i |= 2, o.set(t, e);
                                            var u = es(a(t), a(e), i, n, s, o);
                                            return o.delete(t), u;
                                        case A:
                                            if (qr) return qr.call(t) == qr.call(e)
                                    }
                                    return !1
                                }(t, e, h, i, n, s, o);
                                if (!(1 & i)) {
                                    var d = l && Mt.call(t, "__wrapped__"),
                                        g = p && Mt.call(e, "__wrapped__");
                                    if (d || g) {
                                        var b = d ? t.value() : t,
                                            E = g ? e.value() : e;
                                        return o || (o = new Wr), s(b, E, i, n, o)
                                    }
                                }
                                return !!f && (o || (o = new Wr), function(t, e, i, n, s, o) {
                                    var a = 1 & i,
                                        c = is(t),
                                        h = c.length,
                                        u = is(e).length;
                                    if (h != u && !a) return !1;
                                    for (var l = h; l--;) {
                                        var p = c[l];
                                        if (!(a ? p in e : Mt.call(e, p))) return !1
                                    }
                                    var f = o.get(t),
                                        d = o.get(e);
                                    if (f && d) return f == e && d == t;
                                    var g = !0;
                                    o.set(t, e), o.set(e, t);
                                    for (var v = a; ++l < h;) {
                                        var y = t[p = c[l]],
                                            m = e[p];
                                        if (n) var w = a ? n(m, y, p, e, t, o) : n(y, m, p, t, e, o);
                                        if (!(w === r ? y === m || s(y, m, i, n, o) : w)) {
                                            g = !1;
                                            break
                                        }
                                        v || (v = "constructor" == p)
                                    }
                                    if (g && !v) {
                                        var _ = t.constructor,
                                            b = e.constructor;
                                        _ != b && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (g = !1)
                                    }
                                    return o.delete(t), o.delete(e), g
                                }(t, e, i, n, s, o))
                            }(t, e, i, n, ji, s))
                        }

                        function Ni(t, e, i, n) {
                            var s = i.length,
                                o = s,
                                a = !n;
                            if (null == t) return !o;
                            for (t = Ot(t); s--;) {
                                var c = i[s];
                                if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                            }
                            for (; ++s < o;) {
                                var h = (c = i[s])[0],
                                    u = t[h],
                                    l = c[1];
                                if (a && c[2]) {
                                    if (u === r && !(h in t)) return !1
                                } else {
                                    var p = new Wr;
                                    if (n) var f = n(u, l, h, t, e, p);
                                    if (!(f === r ? ji(l, u, 3, n, p) : f)) return !1
                                }
                            }
                            return !0
                        }

                        function Ti(t) {
                            return !(!ea(t) || function(t) {
                                return !!qt && qt in t
                            }(t)) && (Qo(t) ? Ut : vt).test(zs(t))
                        }

                        function Li(t) {
                            return "function" == typeof t ? t : null == t ? nc : "object" == typeof t ? Ko(t) ? $i(t[0], t[1]) : ki(t) : fc(t)
                        }

                        function Mi(t) {
                            if (!Is(t)) return vr(t);
                            var e = [];
                            for (var r in Ot(t)) Mt.call(t, r) && "constructor" != r && e.push(r);
                            return e
                        }

                        function Di(t) {
                            if (!ea(t)) return function(t) {
                                var e = [];
                                if (null != t)
                                    for (var r in Ot(t)) e.push(r);
                                return e
                            }(t);
                            var e = Is(t),
                                r = [];
                            for (var i in t) "constructor" == i && (e || !Mt.call(t, i)) || r.push(i);
                            return r
                        }

                        function qi(t, e) {
                            return t < e
                        }

                        function zi(t, e) {
                            var r = -1,
                                i = Zo(t) ? st(t.length) : [];
                            return li(t, (function(t, n, s) {
                                i[++r] = e(t, n, s)
                            })), i
                        }

                        function ki(t) {
                            var e = us(t);
                            return 1 == e.length && e[0][2] ? Ss(e[0][0], e[0][1]) : function(r) {
                                return r === t || Ni(r, t, e)
                            }
                        }

                        function $i(t, e) {
                            return _s(t) && Ps(e) ? Ss(qs(t), e) : function(i) {
                                var n = xa(i, t);
                                return n === r && n === e ? Ca(i, t) : ji(e, n, 3)
                            }
                        }

                        function Ui(t, e, i, n, s) {
                            t !== e && yi(e, (function(o, a) {
                                if (s || (s = new Wr), ea(o)) ! function(t, e, i, n, s, o, a) {
                                    var c = Rs(t, i),
                                        h = Rs(e, i),
                                        u = a.get(h);
                                    if (u) return void Xr(t, i, u);
                                    var l = o ? o(c, h, i + "", t, e, a) : r,
                                        p = l === r;
                                    if (p) {
                                        var f = Ko(h),
                                            d = !f && Go(h),
                                            g = !f && !d && ua(h);
                                        l = h, f || d || g ? Ko(c) ? l = c : Wo(c) ? l = Rn(c) : d ? (p = !1, l = In(h, !0)) : g ? (p = !1, l = Sn(h, !0)) : l = [] : sa(h) || Bo(h) ? (l = c, Bo(c) ? l = ma(c) : (!ea(c) || Qo(c)) && (l = vs(h))) : p = !1
                                    }
                                    p && (a.set(h, l), s(l, h, n, o, a), a.delete(h)), Xr(t, i, l)
                                }(t, e, a, i, Ui, n, s);
                                else {
                                    var c = n ? n(Rs(t, a), o, a + "", t, e, s) : r;
                                    c === r && (c = o), Xr(t, a, c)
                                }
                            }), Ta)
                        }

                        function Hi(t, e) {
                            var i = t.length;
                            if (i) return ms(e += e < 0 ? i : 0, i) ? t[e] : r
                        }

                        function Vi(t, e, r) {
                            e = e.length ? Te(e, (function(t) {
                                return Ko(t) ? function(e) {
                                    return Ei(e, 1 === t.length ? t[0] : t)
                                } : t
                            })) : [nc];
                            var i = -1;
                            e = Te(e, Ye(cs()));
                            var n = zi(t, (function(t, r, n) {
                                var s = Te(e, (function(e) {
                                    return e(t)
                                }));
                                return {
                                    criteria: s,
                                    index: ++i,
                                    value: t
                                }
                            }));
                            return function(t, e) {
                                var r = t.length;
                                for (t.sort(e); r--;) t[r] = t[r].value;
                                return t
                            }(n, (function(t, e) {
                                return function(t, e, r) {
                                    for (var i = -1, n = t.criteria, s = e.criteria, o = n.length, a = r.length; ++i < o;) {
                                        var c = On(n[i], s[i]);
                                        if (c) return i >= a ? c : c * ("desc" == r[i] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                }(t, e, r)
                            }))
                        }

                        function Bi(t, e, r) {
                            for (var i = -1, n = e.length, s = {}; ++i < n;) {
                                var o = e[i],
                                    a = Ei(t, o);
                                r(a, o) && Qi(s, wn(o, t), a)
                            }
                            return s
                        }

                        function Ki(t, e, r, i) {
                            var n = i ? He : Ue,
                                s = -1,
                                o = e.length,
                                a = t;
                            for (t === e && (e = Rn(e)), r && (a = Te(t, Ye(r))); ++s < o;)
                                for (var c = 0, h = e[s], u = r ? r(h) : h;
                                    (c = n(a, u, c, i)) > -1;) a !== t && Gt.call(a, c, 1), Gt.call(t, c, 1);
                            return t
                        }

                        function Fi(t, e) {
                            for (var r = t ? e.length : 0, i = r - 1; r--;) {
                                var n = e[r];
                                if (r == i || n !== s) {
                                    var s = n;
                                    ms(n) ? Gt.call(t, n, 1) : ln(t, n)
                                }
                            }
                            return t
                        }

                        function Zi(t, e) {
                            return t + ge(br() * (e - t + 1))
                        }

                        function Wi(t, e) {
                            var r = "";
                            if (!t || e < 1 || e > p) return r;
                            do {
                                e % 2 && (r += t), (e = ge(e / 2)) && (t += t)
                            } while (e);
                            return r
                        }

                        function Gi(t, e) {
                            return Ns(Os(t, e, nc), t + "")
                        }

                        function Ji(t) {
                            return Jr(Ua(t))
                        }

                        function Yi(t, e) {
                            var r = Ua(t);
                            return Ms(r, oi(e, 0, r.length))
                        }

                        function Qi(t, e, i, n) {
                            if (!ea(t)) return t;
                            for (var s = -1, o = (e = wn(e, t)).length, a = o - 1, c = t; null != c && ++s < o;) {
                                var h = qs(e[s]),
                                    u = i;
                                if ("__proto__" === h || "constructor" === h || "prototype" === h) return t;
                                if (s != a) {
                                    var l = c[h];
                                    (u = n ? n(l, h, c) : r) === r && (u = ea(l) ? l : ms(e[s + 1]) ? [] : {})
                                }
                                ti(c, h, u), c = c[h]
                            }
                            return t
                        }
                        var Xi = Rr ? function(t, e) {
                                return Rr.set(t, e), t
                            } : nc,
                            tn = re ? function(t, e) {
                                return re(t, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: ec(e),
                                    writable: !0
                                })
                            } : nc;

                        function en(t) {
                            return Ms(Ua(t))
                        }

                        function rn(t, e, r) {
                            var i = -1,
                                n = t.length;
                            e < 0 && (e = -e > n ? 0 : n + e), (r = r > n ? n : r) < 0 && (r += n), n = e > r ? 0 : r - e >>> 0, e >>>= 0;
                            for (var s = st(n); ++i < n;) s[i] = t[i + e];
                            return s
                        }

                        function nn(t, e) {
                            var r;
                            return li(t, (function(t, i, n) {
                                return !(r = e(t, i, n))
                            })), !!r
                        }

                        function sn(t, e, r) {
                            var i = 0,
                                n = null == t ? i : t.length;
                            if ("number" == typeof e && e === e && n <= 2147483647) {
                                for (; i < n;) {
                                    var s = i + n >>> 1,
                                        o = t[s];
                                    null !== o && !ha(o) && (r ? o <= e : o < e) ? i = s + 1 : n = s
                                }
                                return n
                            }
                            return on(t, e, nc, r)
                        }

                        function on(t, e, i, n) {
                            var s = 0,
                                o = null == t ? 0 : t.length;
                            if (0 === o) return 0;
                            for (var a = (e = i(e)) !== e, c = null === e, h = ha(e), u = e === r; s < o;) {
                                var l = ge((s + o) / 2),
                                    p = i(t[l]),
                                    f = p !== r,
                                    d = null === p,
                                    g = p === p,
                                    v = ha(p);
                                if (a) var y = n || g;
                                else y = u ? g && (n || f) : c ? g && f && (n || !d) : h ? g && f && !d && (n || !v) : !d && !v && (n ? p <= e : p < e);
                                y ? s = l + 1 : o = l
                            }
                            return mr(o, 4294967294)
                        }

                        function an(t, e) {
                            for (var r = -1, i = t.length, n = 0, s = []; ++r < i;) {
                                var o = t[r],
                                    a = e ? e(o) : o;
                                if (!r || !Uo(a, c)) {
                                    var c = a;
                                    s[n++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }

                        function cn(t) {
                            return "number" == typeof t ? t : ha(t) ? f : +t
                        }

                        function hn(t) {
                            if ("string" == typeof t) return t;
                            if (Ko(t)) return Te(t, hn) + "";
                            if (ha(t)) return zr ? zr.call(t) : "";
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function un(t, e, r) {
                            var i = -1,
                                n = je,
                                s = t.length,
                                o = !0,
                                a = [],
                                c = a;
                            if (r) o = !1, n = Ne;
                            else if (s >= 200) {
                                var h = e ? null : Gn(t);
                                if (h) return ur(h);
                                o = !1, n = Xe, c = new Zr
                            } else c = e ? [] : a;
                            t: for (; ++i < s;) {
                                var u = t[i],
                                    l = e ? e(u) : u;
                                if (u = r || 0 !== u ? u : 0, o && l === l) {
                                    for (var p = c.length; p--;)
                                        if (c[p] === l) continue t;
                                    e && c.push(l), a.push(u)
                                } else n(c, l, r) || (c !== a && c.push(l), a.push(u))
                            }
                            return a
                        }

                        function ln(t, e) {
                            return null == (t = xs(t, e = wn(e, t))) || delete t[qs(Js(e))]
                        }

                        function pn(t, e, r, i) {
                            return Qi(t, e, r(Ei(t, e)), i)
                        }

                        function fn(t, e, r, i) {
                            for (var n = t.length, s = i ? n : -1;
                                (i ? s-- : ++s < n) && e(t[s], s, t););
                            return r ? rn(t, i ? 0 : s, i ? s + 1 : n) : rn(t, i ? s + 1 : 0, i ? n : s)
                        }

                        function dn(t, e) {
                            var r = t;
                            return r instanceof Vr && (r = r.value()), Me(e, (function(t, e) {
                                return e.func.apply(e.thisArg, Le([t], e.args))
                            }), r)
                        }

                        function gn(t, e, r) {
                            var i = t.length;
                            if (i < 2) return i ? un(t[0]) : [];
                            for (var n = -1, s = st(i); ++n < i;)
                                for (var o = t[n], a = -1; ++a < i;) a != n && (s[n] = ui(s[n] || o, t[a], e, r));
                            return un(vi(s, 1), e, r)
                        }

                        function vn(t, e, i) {
                            for (var n = -1, s = t.length, o = e.length, a = {}; ++n < s;) {
                                var c = n < o ? e[n] : r;
                                i(a, t[n], c)
                            }
                            return a
                        }

                        function yn(t) {
                            return Wo(t) ? t : []
                        }

                        function mn(t) {
                            return "function" == typeof t ? t : nc
                        }

                        function wn(t, e) {
                            return Ko(t) ? t : _s(t, e) ? [t] : Ds(wa(t))
                        }
                        var _n = Gi;

                        function bn(t, e, i) {
                            var n = t.length;
                            return i = i === r ? n : i, !e && i >= n ? t : rn(t, e, i)
                        }
                        var En = ce || function(t) {
                            return fe.clearTimeout(t)
                        };

                        function In(t, e) {
                            if (e) return t.slice();
                            var r = t.length,
                                i = Kt ? Kt(r) : new t.constructor(r);
                            return t.copy(i), i
                        }

                        function Pn(t) {
                            var e = new t.constructor(t.byteLength);
                            return new Bt(e).set(new Bt(t)), e
                        }

                        function Sn(t, e) {
                            var r = e ? Pn(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.length)
                        }

                        function On(t, e) {
                            if (t !== e) {
                                var i = t !== r,
                                    n = null === t,
                                    s = t === t,
                                    o = ha(t),
                                    a = e !== r,
                                    c = null === e,
                                    h = e === e,
                                    u = ha(e);
                                if (!c && !u && !o && t > e || o && a && h && !c && !u || n && a && h || !i && h || !s) return 1;
                                if (!n && !o && !u && t < e || u && i && s && !n && !o || c && i && s || !a && s || !h) return -1
                            }
                            return 0
                        }

                        function xn(t, e, r, i) {
                            for (var n = -1, s = t.length, o = r.length, a = -1, c = e.length, h = yr(s - o, 0), u = st(c + h), l = !i; ++a < c;) u[a] = e[a];
                            for (; ++n < o;)(l || n < s) && (u[r[n]] = t[n]);
                            for (; h--;) u[a++] = t[n++];
                            return u
                        }

                        function Cn(t, e, r, i) {
                            for (var n = -1, s = t.length, o = -1, a = r.length, c = -1, h = e.length, u = yr(s - a, 0), l = st(u + h), p = !i; ++n < u;) l[n] = t[n];
                            for (var f = n; ++c < h;) l[f + c] = e[c];
                            for (; ++o < a;)(p || n < s) && (l[f + r[o]] = t[n++]);
                            return l
                        }

                        function Rn(t, e) {
                            var r = -1,
                                i = t.length;
                            for (e || (e = st(i)); ++r < i;) e[r] = t[r];
                            return e
                        }

                        function An(t, e, i, n) {
                            var s = !i;
                            i || (i = {});
                            for (var o = -1, a = e.length; ++o < a;) {
                                var c = e[o],
                                    h = n ? n(i[c], t[c], c, i, t) : r;
                                h === r && (h = t[c]), s ? ni(i, c, h) : ti(i, c, h)
                            }
                            return i
                        }

                        function jn(t, e) {
                            return function(r, i) {
                                var n = Ko(r) ? Oe : ri,
                                    s = e ? e() : {};
                                return n(r, t, cs(i, 2), s)
                            }
                        }

                        function Nn(t) {
                            return Gi((function(e, i) {
                                var n = -1,
                                    s = i.length,
                                    o = s > 1 ? i[s - 1] : r,
                                    a = s > 2 ? i[2] : r;
                                for (o = t.length > 3 && "function" == typeof o ? (s--, o) : r, a && ws(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), e = Ot(e); ++n < s;) {
                                    var c = i[n];
                                    c && t(e, c, n, o)
                                }
                                return e
                            }))
                        }

                        function Tn(t, e) {
                            return function(r, i) {
                                if (null == r) return r;
                                if (!Zo(r)) return t(r, i);
                                for (var n = r.length, s = e ? n : -1, o = Ot(r);
                                    (e ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                return r
                            }
                        }

                        function Ln(t) {
                            return function(e, r, i) {
                                for (var n = -1, s = Ot(e), o = i(e), a = o.length; a--;) {
                                    var c = o[t ? a : ++n];
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return e
                            }
                        }

                        function Mn(t) {
                            return function(e) {
                                var i = or(e = wa(e)) ? pr(e) : r,
                                    n = i ? i[0] : e.charAt(0),
                                    s = i ? bn(i, 1).join("") : e.slice(1);
                                return n[t]() + s
                            }
                        }

                        function Dn(t) {
                            return function(e) {
                                return Me(Qa(Ba(e).replace(Qt, "")), t, "")
                            }
                        }

                        function qn(t) {
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e[0]);
                                    case 2:
                                        return new t(e[0], e[1]);
                                    case 3:
                                        return new t(e[0], e[1], e[2]);
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3]);
                                    case 5:
                                        return new t(e[0], e[1], e[2], e[3], e[4]);
                                    case 6:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                    case 7:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                }
                                var r = $r(t.prototype),
                                    i = t.apply(r, e);
                                return ea(i) ? i : r
                            }
                        }

                        function zn(t) {
                            return function(e, i, n) {
                                var s = Ot(e);
                                if (!Zo(e)) {
                                    var o = cs(i, 3);
                                    e = Na(e), i = function(t) {
                                        return o(s[t], t, s)
                                    }
                                }
                                var a = t(e, i, n);
                                return a > -1 ? s[o ? e[a] : a] : r
                            }
                        }

                        function kn(t) {
                            return rs((function(e) {
                                var n = e.length,
                                    s = n,
                                    o = Hr.prototype.thru;
                                for (t && e.reverse(); s--;) {
                                    var a = e[s];
                                    if ("function" != typeof a) throw new Rt(i);
                                    if (o && !c && "wrapper" == os(a)) var c = new Hr([], !0)
                                }
                                for (s = c ? s : n; ++s < n;) {
                                    var h = os(a = e[s]),
                                        u = "wrapper" == h ? ss(a) : r;
                                    c = u && bs(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[os(u[0])].apply(c, u[3]) : 1 == a.length && bs(a) ? c[h]() : c.thru(a)
                                }
                                return function() {
                                    var t = arguments,
                                        r = t[0];
                                    if (c && 1 == t.length && Ko(r)) return c.plant(r).value();
                                    for (var i = 0, s = n ? e[i].apply(this, t) : r; ++i < n;) s = e[i].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function $n(t, e, i, n, s, o, a, c, u, l) {
                            var p = e & h,
                                f = 1 & e,
                                d = 2 & e,
                                g = 24 & e,
                                v = 512 & e,
                                y = d ? r : qn(t);
                            return function r() {
                                for (var h = arguments.length, m = st(h), w = h; w--;) m[w] = arguments[w];
                                if (g) var _ = as(r),
                                    b = rr(m, _);
                                if (n && (m = xn(m, n, s, g)), o && (m = Cn(m, o, a, g)), h -= b, g && h < l) {
                                    var E = hr(m, _);
                                    return Zn(t, e, $n, r.placeholder, i, m, E, c, u, l - h)
                                }
                                var I = f ? i : this,
                                    P = d ? I[t] : t;
                                return h = m.length, c ? m = Cs(m, c) : v && h > 1 && m.reverse(), p && u < h && (m.length = u), this && this !== fe && this instanceof r && (P = y || qn(P)), P.apply(I, m)
                            }
                        }

                        function Un(t, e) {
                            return function(r, i) {
                                return function(t, e, r, i) {
                                    return wi(t, (function(t, n, s) {
                                        e(i, r(t), n, s)
                                    })), i
                                }(r, t, e(i), {})
                            }
                        }

                        function Hn(t, e) {
                            return function(i, n) {
                                var s;
                                if (i === r && n === r) return e;
                                if (i !== r && (s = i), n !== r) {
                                    if (s === r) return n;
                                    "string" == typeof i || "string" == typeof n ? (i = hn(i), n = hn(n)) : (i = cn(i), n = cn(n)), s = t(i, n)
                                }
                                return s
                            }
                        }

                        function Vn(t) {
                            return rs((function(e) {
                                return e = Te(e, Ye(cs())), Gi((function(r) {
                                    var i = this;
                                    return t(e, (function(t) {
                                        return Se(t, i, r)
                                    }))
                                }))
                            }))
                        }

                        function Bn(t, e) {
                            var i = (e = e === r ? " " : hn(e)).length;
                            if (i < 2) return i ? Wi(e, t) : e;
                            var n = Wi(e, de(t / lr(e)));
                            return or(e) ? bn(pr(n), 0, t).join("") : n.slice(0, t)
                        }

                        function Kn(t) {
                            return function(e, i, n) {
                                return n && "number" != typeof n && ws(e, i, n) && (i = n = r), e = da(e), i === r ? (i = e, e = 0) : i = da(i),
                                    function(t, e, r, i) {
                                        for (var n = -1, s = yr(de((e - t) / (r || 1)), 0), o = st(s); s--;) o[i ? s : ++n] = t, t += r;
                                        return o
                                    }(e, i, n = n === r ? e < i ? 1 : -1 : da(n), t)
                            }
                        }

                        function Fn(t) {
                            return function(e, r) {
                                return "string" == typeof e && "string" == typeof r || (e = ya(e), r = ya(r)), t(e, r)
                            }
                        }

                        function Zn(t, e, i, n, s, o, h, u, l, p) {
                            var f = 8 & e;
                            e |= f ? a : c, 4 & (e &= ~(f ? c : a)) || (e &= -4);
                            var d = [t, e, s, f ? o : r, f ? h : r, f ? r : o, f ? r : h, u, l, p],
                                g = i.apply(r, d);
                            return bs(t) && As(g, d), g.placeholder = n, Ts(g, t, e)
                        }

                        function Wn(t) {
                            var e = St[t];
                            return function(t, r) {
                                if (t = ya(t), (r = null == r ? 0 : mr(ga(r), 292)) && ze(t)) {
                                    var i = (wa(t) + "e").split("e");
                                    return +((i = (wa(e(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                }
                                return e(t)
                            }
                        }
                        var Gn = Or && 1 / ur(new Or([, -0]))[1] == l ? function(t) {
                            return new Or(t)
                        } : hc;

                        function Jn(t) {
                            return function(e) {
                                var r = ds(e);
                                return r == I ? ar(e) : r == C ? function(t) {
                                    var e = -1,
                                        r = Array(t.size);
                                    return t.forEach((function(t) {
                                        r[++e] = [t, t]
                                    })), r
                                }(e) : function(t, e) {
                                    return Te(e, (function(e) {
                                        return [e, t[e]]
                                    }))
                                }(e, t(e))
                            }
                        }

                        function Yn(t, e, n, l, p, f, d, g) {
                            var v = 2 & e;
                            if (!v && "function" != typeof t) throw new Rt(i);
                            var y = l ? l.length : 0;
                            if (y || (e &= -97, l = p = r), d = d === r ? d : yr(ga(d), 0), g = g === r ? g : ga(g), y -= p ? p.length : 0, e & c) {
                                var m = l,
                                    w = p;
                                l = p = r
                            }
                            var _ = v ? r : ss(t),
                                b = [t, e, n, l, p, m, w, f, d, g];
                            if (_ && function(t, e) {
                                    var r = t[1],
                                        i = e[1],
                                        n = r | i,
                                        o = n < 131,
                                        a = i == h && 8 == r || i == h && r == u && t[7].length <= e[8] || 384 == i && e[7].length <= e[8] && 8 == r;
                                    if (!o && !a) return t;
                                    1 & i && (t[2] = e[2], n |= 1 & r ? 0 : 4);
                                    var c = e[3];
                                    if (c) {
                                        var l = t[3];
                                        t[3] = l ? xn(l, c, e[4]) : c, t[4] = l ? hr(t[3], s) : e[4]
                                    }(c = e[5]) && (l = t[5], t[5] = l ? Cn(l, c, e[6]) : c, t[6] = l ? hr(t[5], s) : e[6]), (c = e[7]) && (t[7] = c), i & h && (t[8] = null == t[8] ? e[8] : mr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = n
                                }(b, _), t = b[0], e = b[1], n = b[2], l = b[3], p = b[4], !(g = b[9] = b[9] === r ? v ? 0 : t.length : yr(b[9] - y, 0)) && 24 & e && (e &= -25), e && 1 != e) E = 8 == e || e == o ? function(t, e, i) {
                                var n = qn(t);
                                return function s() {
                                    for (var o = arguments.length, a = st(o), c = o, h = as(s); c--;) a[c] = arguments[c];
                                    var u = o < 3 && a[0] !== h && a[o - 1] !== h ? [] : hr(a, h);
                                    return (o -= u.length) < i ? Zn(t, e, $n, s.placeholder, r, a, u, r, r, i - o) : Se(this && this !== fe && this instanceof s ? n : t, this, a)
                                }
                            }(t, e, g) : e != a && 33 != e || p.length ? $n.apply(r, b) : function(t, e, r, i) {
                                var n = 1 & e,
                                    s = qn(t);
                                return function e() {
                                    for (var o = -1, a = arguments.length, c = -1, h = i.length, u = st(h + a), l = this && this !== fe && this instanceof e ? s : t; ++c < h;) u[c] = i[c];
                                    for (; a--;) u[c++] = arguments[++o];
                                    return Se(l, n ? r : this, u)
                                }
                            }(t, e, n, l);
                            else var E = function(t, e, r) {
                                var i = 1 & e,
                                    n = qn(t);
                                return function e() {
                                    return (this && this !== fe && this instanceof e ? n : t).apply(i ? r : this, arguments)
                                }
                            }(t, e, n);
                            return Ts((_ ? Xi : As)(E, b), t, e)
                        }

                        function Qn(t, e, i, n) {
                            return t === r || Uo(t, Nt[i]) && !Mt.call(n, i) ? e : t
                        }

                        function Xn(t, e, i, n, s, o) {
                            return ea(t) && ea(e) && (o.set(e, t), Ui(t, e, r, Xn, o), o.delete(e)), t
                        }

                        function ts(t) {
                            return sa(t) ? r : t
                        }

                        function es(t, e, i, n, s, o) {
                            var a = 1 & i,
                                c = t.length,
                                h = e.length;
                            if (c != h && !(a && h > c)) return !1;
                            var u = o.get(t),
                                l = o.get(e);
                            if (u && l) return u == e && l == t;
                            var p = -1,
                                f = !0,
                                d = 2 & i ? new Zr : r;
                            for (o.set(t, e), o.set(e, t); ++p < c;) {
                                var g = t[p],
                                    v = e[p];
                                if (n) var y = a ? n(v, g, p, e, t, o) : n(g, v, p, t, e, o);
                                if (y !== r) {
                                    if (y) continue;
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!qe(e, (function(t, e) {
                                            if (!Xe(d, e) && (g === t || s(g, t, i, n, o))) return d.push(e)
                                        }))) {
                                        f = !1;
                                        break
                                    }
                                } else if (g !== v && !s(g, v, i, n, o)) {
                                    f = !1;
                                    break
                                }
                            }
                            return o.delete(t), o.delete(e), f
                        }

                        function rs(t) {
                            return Ns(Os(t, r, Ks), t + "")
                        }

                        function is(t) {
                            return Ii(t, Na, ps)
                        }

                        function ns(t) {
                            return Ii(t, Ta, fs)
                        }
                        var ss = Rr ? function(t) {
                            return Rr.get(t)
                        } : hc;

                        function os(t) {
                            for (var e = t.name + "", r = Ar[e], i = Mt.call(Ar, e) ? r.length : 0; i--;) {
                                var n = r[i],
                                    s = n.func;
                                if (null == s || s == t) return n.name
                            }
                            return e
                        }

                        function as(t) {
                            return (Mt.call(kr, "placeholder") ? kr : t).placeholder
                        }

                        function cs() {
                            var t = kr.iteratee || sc;
                            return t = t === sc ? Li : t, arguments.length ? t(arguments[0], arguments[1]) : t
                        }

                        function hs(t, e) {
                            var r = t.__data__;
                            return function(t) {
                                var e = typeof t;
                                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                            }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                        }

                        function us(t) {
                            for (var e = Na(t), r = e.length; r--;) {
                                var i = e[r],
                                    n = t[i];
                                e[r] = [i, n, Ps(n)]
                            }
                            return e
                        }

                        function ls(t, e) {
                            var i = function(t, e) {
                                return null == t ? r : t[e]
                            }(t, e);
                            return Ti(i) ? i : r
                        }
                        var ps = ye ? function(t) {
                                return null == t ? [] : (t = Ot(t), Ae(ye(t), (function(e) {
                                    return Wt.call(t, e)
                                })))
                            } : vc,
                            fs = ye ? function(t) {
                                for (var e = []; t;) Le(e, ps(t)), t = Ft(t);
                                return e
                            } : vc,
                            ds = Pi;

                        function gs(t, e, r) {
                            for (var i = -1, n = (e = wn(e, t)).length, s = !1; ++i < n;) {
                                var o = qs(e[i]);
                                if (!(s = null != t && r(t, o))) break;
                                t = t[o]
                            }
                            return s || ++i != n ? s : !!(n = null == t ? 0 : t.length) && ta(n) && ms(o, n) && (Ko(t) || Bo(t))
                        }

                        function vs(t) {
                            return "function" != typeof t.constructor || Is(t) ? {} : $r(Ft(t))
                        }

                        function ys(t) {
                            return Ko(t) || Bo(t) || !!(Jt && t && t[Jt])
                        }

                        function ms(t, e) {
                            var r = typeof t;
                            return !!(e = e ? ? p) && ("number" == r || "symbol" != r && mt.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function ws(t, e, r) {
                            if (!ea(r)) return !1;
                            var i = typeof e;
                            return !!("number" == i ? Zo(r) && ms(e, r.length) : "string" == i && e in r) && Uo(r[e], t)
                        }

                        function _s(t, e) {
                            if (Ko(t)) return !1;
                            var r = typeof t;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !ha(t)) || (tt.test(t) || !X.test(t) || null != e && t in Ot(e))
                        }

                        function bs(t) {
                            var e = os(t),
                                r = kr[e];
                            if ("function" != typeof r || !(e in Vr.prototype)) return !1;
                            if (t === r) return !0;
                            var i = ss(r);
                            return !!i && t === i[0]
                        }(Ir && ds(new Ir(new ArrayBuffer(1))) != T || Pr && ds(new Pr) != I || Sr && ds(Sr.resolve()) != O || Or && ds(new Or) != C || xr && ds(new xr) != j) && (ds = function(t) {
                            var e = Pi(t),
                                i = e == S ? t.constructor : r,
                                n = i ? zs(i) : "";
                            if (n) switch (n) {
                                case jr:
                                    return T;
                                case Nr:
                                    return I;
                                case Tr:
                                    return O;
                                case Lr:
                                    return C;
                                case Mr:
                                    return j
                            }
                            return e
                        });
                        var Es = Tt ? Qo : yc;

                        function Is(t) {
                            var e = t && t.constructor;
                            return t === ("function" == typeof e && e.prototype || Nt)
                        }

                        function Ps(t) {
                            return t === t && !ea(t)
                        }

                        function Ss(t, e) {
                            return function(i) {
                                return null != i && (i[t] === e && (e !== r || t in Ot(i)))
                            }
                        }

                        function Os(t, e, i) {
                            return e = yr(e === r ? t.length - 1 : e, 0),
                                function() {
                                    for (var r = arguments, n = -1, s = yr(r.length - e, 0), o = st(s); ++n < s;) o[n] = r[e + n];
                                    n = -1;
                                    for (var a = st(e + 1); ++n < e;) a[n] = r[n];
                                    return a[e] = i(o), Se(t, this, a)
                                }
                        }

                        function xs(t, e) {
                            return e.length < 2 ? t : Ei(t, rn(e, 0, -1))
                        }

                        function Cs(t, e) {
                            for (var i = t.length, n = mr(e.length, i), s = Rn(t); n--;) {
                                var o = e[n];
                                t[n] = ms(o, i) ? s[o] : r
                            }
                            return t
                        }

                        function Rs(t, e) {
                            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                        }
                        var As = Ls(Xi),
                            js = pe || function(t, e) {
                                return fe.setTimeout(t, e)
                            },
                            Ns = Ls(tn);

                        function Ts(t, e, r) {
                            var i = e + "";
                            return Ns(t, function(t, e) {
                                var r = e.length;
                                if (!r) return t;
                                var i = r - 1;
                                return e[i] = (r > 1 ? "& " : "") + e[i], e = e.join(r > 2 ? ", " : " "), t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                            }(i, function(t, e) {
                                return xe(g, (function(r) {
                                    var i = "_." + r[0];
                                    e & r[1] && !je(t, i) && t.push(i)
                                })), t.sort()
                            }(function(t) {
                                var e = t.match(at);
                                return e ? e[1].split(ct) : []
                            }(i), r)))
                        }

                        function Ls(t) {
                            var e = 0,
                                i = 0;
                            return function() {
                                var n = wr(),
                                    s = 16 - (n - i);
                                if (i = n, s > 0) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0;
                                return t.apply(r, arguments)
                            }
                        }

                        function Ms(t, e) {
                            var i = -1,
                                n = t.length,
                                s = n - 1;
                            for (e = e === r ? n : e; ++i < e;) {
                                var o = Zi(i, s),
                                    a = t[o];
                                t[o] = t[i], t[i] = a
                            }
                            return t.length = e, t
                        }
                        var Ds = function(t) {
                            var e = Mo(t, (function(t) {
                                    return 500 === r.size && r.clear(), t
                                })),
                                r = e.cache;
                            return e
                        }((function(t) {
                            var e = [];
                            return 46 === t.charCodeAt(0) && e.push(""), t.replace(et, (function(t, r, i, n) {
                                e.push(i ? n.replace(lt, "$1") : r || t)
                            })), e
                        }));

                        function qs(t) {
                            if ("string" == typeof t || ha(t)) return t;
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function zs(t) {
                            if (null != t) {
                                try {
                                    return Lt.call(t)
                                } catch {}
                                try {
                                    return t + ""
                                } catch {}
                            }
                            return ""
                        }

                        function ks(t) {
                            if (t instanceof Vr) return t.clone();
                            var e = new Hr(t.__wrapped__, t.__chain__);
                            return e.__actions__ = Rn(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                        }
                        var $s = Gi((function(t, e) {
                                return Wo(t) ? ui(t, vi(e, 1, Wo, !0)) : []
                            })),
                            Us = Gi((function(t, e) {
                                var i = Js(e);
                                return Wo(i) && (i = r), Wo(t) ? ui(t, vi(e, 1, Wo, !0), cs(i, 2)) : []
                            })),
                            Hs = Gi((function(t, e) {
                                var i = Js(e);
                                return Wo(i) && (i = r), Wo(t) ? ui(t, vi(e, 1, Wo, !0), r, i) : []
                            }));

                        function Vs(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : ga(r);
                            return n < 0 && (n = yr(i + n, 0)), $e(t, cs(e, 3), n)
                        }

                        function Bs(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n - 1;
                            return i !== r && (s = ga(i), s = i < 0 ? yr(n + s, 0) : mr(s, n - 1)), $e(t, cs(e, 3), s, !0)
                        }

                        function Ks(t) {
                            return (null == t ? 0 : t.length) ? vi(t, 1) : []
                        }

                        function Fs(t) {
                            return t && t.length ? t[0] : r
                        }
                        var Zs = Gi((function(t) {
                                var e = Te(t, yn);
                                return e.length && e[0] === t[0] ? Ci(e) : []
                            })),
                            Ws = Gi((function(t) {
                                var e = Js(t),
                                    i = Te(t, yn);
                                return e === Js(i) ? e = r : i.pop(), i.length && i[0] === t[0] ? Ci(i, cs(e, 2)) : []
                            })),
                            Gs = Gi((function(t) {
                                var e = Js(t),
                                    i = Te(t, yn);
                                return (e = "function" == typeof e ? e : r) && i.pop(), i.length && i[0] === t[0] ? Ci(i, r, e) : []
                            }));

                        function Js(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? t[e - 1] : r
                        }
                        var Ys = Gi(Qs);

                        function Qs(t, e) {
                            return t && t.length && e && e.length ? Ki(t, e) : t
                        }
                        var Xs = rs((function(t, e) {
                            var r = null == t ? 0 : t.length,
                                i = si(t, e);
                            return Fi(t, Te(e, (function(t) {
                                return ms(t, r) ? +t : t
                            })).sort(On)), i
                        }));

                        function to(t) {
                            return null == t ? t : Er.call(t)
                        }
                        var eo = Gi((function(t) {
                                return un(vi(t, 1, Wo, !0))
                            })),
                            ro = Gi((function(t) {
                                var e = Js(t);
                                return Wo(e) && (e = r), un(vi(t, 1, Wo, !0), cs(e, 2))
                            })),
                            io = Gi((function(t) {
                                var e = Js(t);
                                return e = "function" == typeof e ? e : r, un(vi(t, 1, Wo, !0), r, e)
                            }));

                        function no(t) {
                            if (!t || !t.length) return [];
                            var e = 0;
                            return t = Ae(t, (function(t) {
                                if (Wo(t)) return e = yr(t.length, e), !0
                            })), Ge(e, (function(e) {
                                return Te(t, Ke(e))
                            }))
                        }

                        function so(t, e) {
                            if (!t || !t.length) return [];
                            var i = no(t);
                            return null == e ? i : Te(i, (function(t) {
                                return Se(e, r, t)
                            }))
                        }
                        var oo = Gi((function(t, e) {
                                return Wo(t) ? ui(t, e) : []
                            })),
                            ao = Gi((function(t) {
                                return gn(Ae(t, Wo))
                            })),
                            co = Gi((function(t) {
                                var e = Js(t);
                                return Wo(e) && (e = r), gn(Ae(t, Wo), cs(e, 2))
                            })),
                            ho = Gi((function(t) {
                                var e = Js(t);
                                return e = "function" == typeof e ? e : r, gn(Ae(t, Wo), r, e)
                            })),
                            uo = Gi(no);
                        var lo = Gi((function(t) {
                            var e = t.length,
                                i = e > 1 ? t[e - 1] : r;
                            return i = "function" == typeof i ? (t.pop(), i) : r, so(t, i)
                        }));

                        function po(t) {
                            var e = kr(t);
                            return e.__chain__ = !0, e
                        }

                        function fo(t, e) {
                            return e(t)
                        }
                        var go = rs((function(t) {
                            var e = t.length,
                                i = e ? t[0] : 0,
                                n = this.__wrapped__,
                                s = function(e) {
                                    return si(e, t)
                                };
                            return !(e > 1 || this.__actions__.length) && n instanceof Vr && ms(i) ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
                                func: fo,
                                args: [s],
                                thisArg: r
                            }), new Hr(n, this.__chain__).thru((function(t) {
                                return e && !t.length && t.push(r), t
                            }))) : this.thru(s)
                        }));
                        var vo = jn((function(t, e, r) {
                            Mt.call(t, r) ? ++t[r] : ni(t, r, 1)
                        }));
                        var yo = zn(Vs),
                            mo = zn(Bs);

                        function wo(t, e) {
                            return (Ko(t) ? xe : li)(t, cs(e, 3))
                        }

                        function _o(t, e) {
                            return (Ko(t) ? Ce : pi)(t, cs(e, 3))
                        }
                        var bo = jn((function(t, e, r) {
                            Mt.call(t, r) ? t[r].push(e) : ni(t, r, [e])
                        }));
                        var Eo = Gi((function(t, e, r) {
                                var i = -1,
                                    n = "function" == typeof e,
                                    s = Zo(t) ? st(t.length) : [];
                                return li(t, (function(t) {
                                    s[++i] = n ? Se(e, t, r) : Ri(t, e, r)
                                })), s
                            })),
                            Io = jn((function(t, e, r) {
                                ni(t, r, e)
                            }));

                        function Po(t, e) {
                            return (Ko(t) ? Te : zi)(t, cs(e, 3))
                        }
                        var So = jn((function(t, e, r) {
                            t[r ? 0 : 1].push(e)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var Oo = Gi((function(t, e) {
                                if (null == t) return [];
                                var r = e.length;
                                return r > 1 && ws(t, e[0], e[1]) ? e = [] : r > 2 && ws(e[0], e[1], e[2]) && (e = [e[0]]), Vi(t, vi(e, 1), [])
                            })),
                            xo = le || function() {
                                return fe.Date.now()
                            };

                        function Co(t, e, i) {
                            return e = i ? r : e, e = t && null == e ? t.length : e, Yn(t, h, r, r, r, r, e)
                        }

                        function Ro(t, e) {
                            var n;
                            if ("function" != typeof e) throw new Rt(i);
                            return t = ga(t),
                                function() {
                                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n
                                }
                        }
                        var Ao = Gi((function(t, e, r) {
                                var i = 1;
                                if (r.length) {
                                    var n = hr(r, as(Ao));
                                    i |= a
                                }
                                return Yn(t, i, e, r, n)
                            })),
                            jo = Gi((function(t, e, r) {
                                var i = 3;
                                if (r.length) {
                                    var n = hr(r, as(jo));
                                    i |= a
                                }
                                return Yn(e, i, t, r, n)
                            }));

                        function No(t, e, n) {
                            var s, o, a, c, h, u, l = 0,
                                p = !1,
                                f = !1,
                                d = !0;
                            if ("function" != typeof t) throw new Rt(i);

                            function g(e) {
                                var i = s,
                                    n = o;
                                return s = o = r, l = e, c = t.apply(n, i)
                            }

                            function v(t) {
                                return l = t, h = js(m, e), p ? g(t) : c
                            }

                            function y(t) {
                                var i = t - u;
                                return u === r || i >= e || i < 0 || f && t - l >= a
                            }

                            function m() {
                                var t = xo();
                                if (y(t)) return w(t);
                                h = js(m, function(t) {
                                    var r = e - (t - u);
                                    return f ? mr(r, a - (t - l)) : r
                                }(t))
                            }

                            function w(t) {
                                return h = r, d && s ? g(t) : (s = o = r, c)
                            }

                            function _() {
                                var t = xo(),
                                    i = y(t);
                                if (s = arguments, o = this, u = t, i) {
                                    if (h === r) return v(u);
                                    if (f) return En(h), h = js(m, e), g(u)
                                }
                                return h === r && (h = js(m, e)), c
                            }
                            return e = ya(e) || 0, ea(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? yr(ya(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function() {
                                h !== r && En(h), l = 0, s = u = o = h = r
                            }, _.flush = function() {
                                return h === r ? c : w(xo())
                            }, _
                        }
                        var To = Gi((function(t, e) {
                                return hi(t, 1, e)
                            })),
                            Lo = Gi((function(t, e, r) {
                                return hi(t, ya(e) || 0, r)
                            }));

                        function Mo(t, e) {
                            if ("function" != typeof t || null != e && "function" != typeof e) throw new Rt(i);
                            var r = function() {
                                var i = arguments,
                                    n = e ? e.apply(this, i) : i[0],
                                    s = r.cache;
                                if (s.has(n)) return s.get(n);
                                var o = t.apply(this, i);
                                return r.cache = s.set(n, o) || s, o
                            };
                            return r.cache = new(Mo.Cache || Fr), r
                        }

                        function Do(t) {
                            if ("function" != typeof t) throw new Rt(i);
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return !t.call(this);
                                    case 1:
                                        return !t.call(this, e[0]);
                                    case 2:
                                        return !t.call(this, e[0], e[1]);
                                    case 3:
                                        return !t.call(this, e[0], e[1], e[2])
                                }
                                return !t.apply(this, e)
                            }
                        }
                        Mo.Cache = Fr;
                        var qo = _n((function(t, e) {
                                var r = (e = 1 == e.length && Ko(e[0]) ? Te(e[0], Ye(cs())) : Te(vi(e, 1), Ye(cs()))).length;
                                return Gi((function(i) {
                                    for (var n = -1, s = mr(i.length, r); ++n < s;) i[n] = e[n].call(this, i[n]);
                                    return Se(t, this, i)
                                }))
                            })),
                            zo = Gi((function(t, e) {
                                var i = hr(e, as(zo));
                                return Yn(t, a, r, e, i)
                            })),
                            ko = Gi((function(t, e) {
                                var i = hr(e, as(ko));
                                return Yn(t, c, r, e, i)
                            })),
                            $o = rs((function(t, e) {
                                return Yn(t, u, r, r, r, e)
                            }));

                        function Uo(t, e) {
                            return t === e || t !== t && e !== e
                        }
                        var Ho = Fn(Si),
                            Vo = Fn((function(t, e) {
                                return t >= e
                            })),
                            Bo = Ai(function() {
                                return arguments
                            }()) ? Ai : function(t) {
                                return ra(t) && Mt.call(t, "callee") && !Wt.call(t, "callee")
                            },
                            Ko = st.isArray,
                            Fo = we ? Ye(we) : function(t) {
                                return ra(t) && Pi(t) == N
                            };

                        function Zo(t) {
                            return null != t && ta(t.length) && !Qo(t)
                        }

                        function Wo(t) {
                            return ra(t) && Zo(t)
                        }
                        var Go = me || yc,
                            Jo = _e ? Ye(_e) : function(t) {
                                return ra(t) && Pi(t) == w
                            };

                        function Yo(t) {
                            if (!ra(t)) return !1;
                            var e = Pi(t);
                            return e == _ || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !sa(t)
                        }

                        function Qo(t) {
                            if (!ea(t)) return !1;
                            var e = Pi(t);
                            return e == b || e == E || "[object AsyncFunction]" == e || "[object Proxy]" == e
                        }

                        function Xo(t) {
                            return "number" == typeof t && t == ga(t)
                        }

                        function ta(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= p
                        }

                        function ea(t) {
                            var e = typeof t;
                            return null != t && ("object" == e || "function" == e)
                        }

                        function ra(t) {
                            return null != t && "object" == typeof t
                        }
                        var ia = be ? Ye(be) : function(t) {
                            return ra(t) && ds(t) == I
                        };

                        function na(t) {
                            return "number" == typeof t || ra(t) && Pi(t) == P
                        }

                        function sa(t) {
                            if (!ra(t) || Pi(t) != S) return !1;
                            var e = Ft(t);
                            if (null === e) return !0;
                            var r = Mt.call(e, "constructor") && e.constructor;
                            return "function" == typeof r && r instanceof r && Lt.call(r) == kt
                        }
                        var oa = Ee ? Ye(Ee) : function(t) {
                            return ra(t) && Pi(t) == x
                        };
                        var aa = Ie ? Ye(Ie) : function(t) {
                            return ra(t) && ds(t) == C
                        };

                        function ca(t) {
                            return "string" == typeof t || !Ko(t) && ra(t) && Pi(t) == R
                        }

                        function ha(t) {
                            return "symbol" == typeof t || ra(t) && Pi(t) == A
                        }
                        var ua = Pe ? Ye(Pe) : function(t) {
                            return ra(t) && ta(t.length) && !!oe[Pi(t)]
                        };
                        var la = Fn(qi),
                            pa = Fn((function(t, e) {
                                return t <= e
                            }));

                        function fa(t) {
                            if (!t) return [];
                            if (Zo(t)) return ca(t) ? pr(t) : Rn(t);
                            if (Yt && t[Yt]) return function(t) {
                                for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                                return r
                            }(t[Yt]());
                            var e = ds(t);
                            return (e == I ? ar : e == C ? ur : Ua)(t)
                        }

                        function da(t) {
                            return t ? (t = ya(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0
                        }

                        function ga(t) {
                            var e = da(t),
                                r = e % 1;
                            return e === e ? r ? e - r : e : 0
                        }

                        function va(t) {
                            return t ? oi(ga(t), 0, d) : 0
                        }

                        function ya(t) {
                            if ("number" == typeof t) return t;
                            if (ha(t)) return f;
                            if (ea(t)) {
                                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = ea(e) ? e + "" : e
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = Je(t);
                            var r = gt.test(t);
                            return r || yt.test(t) ? ue(t.slice(2), r ? 2 : 8) : dt.test(t) ? f : +t
                        }

                        function ma(t) {
                            return An(t, Ta(t))
                        }

                        function wa(t) {
                            return null == t ? "" : hn(t)
                        }
                        var _a = Nn((function(t, e) {
                                if (Is(e) || Zo(e)) An(e, Na(e), t);
                                else
                                    for (var r in e) Mt.call(e, r) && ti(t, r, e[r])
                            })),
                            ba = Nn((function(t, e) {
                                An(e, Ta(e), t)
                            })),
                            Ea = Nn((function(t, e, r, i) {
                                An(e, Ta(e), t, i)
                            })),
                            Ia = Nn((function(t, e, r, i) {
                                An(e, Na(e), t, i)
                            })),
                            Pa = rs(si);
                        var Sa = Gi((function(t, e) {
                                t = Ot(t);
                                var i = -1,
                                    n = e.length,
                                    s = n > 2 ? e[2] : r;
                                for (s && ws(e[0], e[1], s) && (n = 1); ++i < n;)
                                    for (var o = e[i], a = Ta(o), c = -1, h = a.length; ++c < h;) {
                                        var u = a[c],
                                            l = t[u];
                                        (l === r || Uo(l, Nt[u]) && !Mt.call(t, u)) && (t[u] = o[u])
                                    }
                                return t
                            })),
                            Oa = Gi((function(t) {
                                return t.push(r, Xn), Se(Ma, r, t)
                            }));

                        function xa(t, e, i) {
                            var n = null == t ? r : Ei(t, e);
                            return n === r ? i : n
                        }

                        function Ca(t, e) {
                            return null != t && gs(t, e, xi)
                        }
                        var Ra = Un((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = zt.call(e)), t[e] = r
                            }), ec(nc)),
                            Aa = Un((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = zt.call(e)), Mt.call(t, e) ? t[e].push(r) : t[e] = [r]
                            }), cs),
                            ja = Gi(Ri);

                        function Na(t) {
                            return Zo(t) ? Gr(t) : Mi(t)
                        }

                        function Ta(t) {
                            return Zo(t) ? Gr(t, !0) : Di(t)
                        }
                        var La = Nn((function(t, e, r) {
                                Ui(t, e, r)
                            })),
                            Ma = Nn((function(t, e, r, i) {
                                Ui(t, e, r, i)
                            })),
                            Da = rs((function(t, e) {
                                var r = {};
                                if (null == t) return r;
                                var i = !1;
                                e = Te(e, (function(e) {
                                    return e = wn(e, t), i || (i = e.length > 1), e
                                })), An(t, ns(t), r), i && (r = ai(r, 7, ts));
                                for (var n = e.length; n--;) ln(r, e[n]);
                                return r
                            }));
                        var qa = rs((function(t, e) {
                            return null == t ? {} : function(t, e) {
                                return Bi(t, e, (function(e, r) {
                                    return Ca(t, r)
                                }))
                            }(t, e)
                        }));

                        function za(t, e) {
                            if (null == t) return {};
                            var r = Te(ns(t), (function(t) {
                                return [t]
                            }));
                            return e = cs(e), Bi(t, r, (function(t, r) {
                                return e(t, r[0])
                            }))
                        }
                        var ka = Jn(Na),
                            $a = Jn(Ta);

                        function Ua(t) {
                            return null == t ? [] : Qe(t, Na(t))
                        }
                        var Ha = Dn((function(t, e, r) {
                            return e = e.toLowerCase(), t + (r ? Va(e) : e)
                        }));

                        function Va(t) {
                            return Ya(wa(t).toLowerCase())
                        }

                        function Ba(t) {
                            return (t = wa(t)) && t.replace(wt, ir).replace(Xt, "")
                        }
                        var Ka = Dn((function(t, e, r) {
                                return t + (r ? "-" : "") + e.toLowerCase()
                            })),
                            Fa = Dn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toLowerCase()
                            })),
                            Za = Mn("toLowerCase");
                        var Wa = Dn((function(t, e, r) {
                            return t + (r ? "_" : "") + e.toLowerCase()
                        }));
                        var Ga = Dn((function(t, e, r) {
                            return t + (r ? " " : "") + Ya(e)
                        }));
                        var Ja = Dn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toUpperCase()
                            })),
                            Ya = Mn("toUpperCase");

                        function Qa(t, e, i) {
                            return t = wa(t), (e = i ? r : e) === r ? function(t) {
                                return ie.test(t)
                            }(t) ? function(t) {
                                return t.match(ee) || []
                            }(t) : function(t) {
                                return t.match(ht) || []
                            }(t) : t.match(e) || []
                        }
                        var Xa = Gi((function(t, e) {
                                try {
                                    return Se(t, r, e)
                                } catch (i) {
                                    return Yo(i) ? i : new It(i)
                                }
                            })),
                            tc = rs((function(t, e) {
                                return xe(e, (function(e) {
                                    e = qs(e), ni(t, e, Ao(t[e], t))
                                })), t
                            }));

                        function ec(t) {
                            return function() {
                                return t
                            }
                        }
                        var rc = kn(),
                            ic = kn(!0);

                        function nc(t) {
                            return t
                        }

                        function sc(t) {
                            return Li("function" == typeof t ? t : ai(t, 1))
                        }
                        var oc = Gi((function(t, e) {
                                return function(r) {
                                    return Ri(r, t, e)
                                }
                            })),
                            ac = Gi((function(t, e) {
                                return function(r) {
                                    return Ri(t, r, e)
                                }
                            }));

                        function cc(t, e, r) {
                            var i = Na(e),
                                n = bi(e, i);
                            null == r && (!ea(e) || !n.length && i.length) && (r = e, e = t, t = this, n = bi(e, Na(e)));
                            var s = !(ea(r) && "chain" in r) || !!r.chain,
                                o = Qo(t);
                            return xe(n, (function(r) {
                                var i = e[r];
                                t[r] = i, o && (t.prototype[r] = function() {
                                    var e = this.__chain__;
                                    if (s || e) {
                                        var r = t(this.__wrapped__),
                                            n = r.__actions__ = Rn(this.__actions__);
                                        return n.push({
                                            func: i,
                                            args: arguments,
                                            thisArg: t
                                        }), r.__chain__ = e, r
                                    }
                                    return i.apply(t, Le([this.value()], arguments))
                                })
                            })), t
                        }

                        function hc() {}
                        var uc = Vn(Te),
                            lc = Vn(Re),
                            pc = Vn(qe);

                        function fc(t) {
                            return _s(t) ? Ke(qs(t)) : function(t) {
                                return function(e) {
                                    return Ei(e, t)
                                }
                            }(t)
                        }
                        var dc = Kn(),
                            gc = Kn(!0);

                        function vc() {
                            return []
                        }

                        function yc() {
                            return !1
                        }
                        var mc = Hn((function(t, e) {
                                return t + e
                            }), 0),
                            wc = Wn("ceil"),
                            _c = Hn((function(t, e) {
                                return t / e
                            }), 1),
                            bc = Wn("floor");
                        var Ec = Hn((function(t, e) {
                                return t * e
                            }), 1),
                            Ic = Wn("round"),
                            Pc = Hn((function(t, e) {
                                return t - e
                            }), 0);
                        return kr.after = function(t, e) {
                            if ("function" != typeof e) throw new Rt(i);
                            return t = ga(t),
                                function() {
                                    if (--t < 1) return e.apply(this, arguments)
                                }
                        }, kr.ary = Co, kr.assign = _a, kr.assignIn = ba, kr.assignInWith = Ea, kr.assignWith = Ia, kr.at = Pa, kr.before = Ro, kr.bind = Ao, kr.bindAll = tc, kr.bindKey = jo, kr.castArray = function() {
                            if (!arguments.length) return [];
                            var t = arguments[0];
                            return Ko(t) ? t : [t]
                        }, kr.chain = po, kr.chunk = function(t, e, i) {
                            e = (i ? ws(t, e, i) : e === r) ? 1 : yr(ga(e), 0);
                            var n = null == t ? 0 : t.length;
                            if (!n || e < 1) return [];
                            for (var s = 0, o = 0, a = st(de(n / e)); s < n;) a[o++] = rn(t, s, s += e);
                            return a
                        }, kr.compact = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = 0, n = []; ++e < r;) {
                                var s = t[e];
                                s && (n[i++] = s)
                            }
                            return n
                        }, kr.concat = function() {
                            var t = arguments.length;
                            if (!t) return [];
                            for (var e = st(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                            return Le(Ko(r) ? Rn(r) : [r], vi(e, 1))
                        }, kr.cond = function(t) {
                            var e = null == t ? 0 : t.length,
                                r = cs();
                            return t = e ? Te(t, (function(t) {
                                if ("function" != typeof t[1]) throw new Rt(i);
                                return [r(t[0]), t[1]]
                            })) : [], Gi((function(r) {
                                for (var i = -1; ++i < e;) {
                                    var n = t[i];
                                    if (Se(n[0], this, r)) return Se(n[1], this, r)
                                }
                            }))
                        }, kr.conforms = function(t) {
                            return function(t) {
                                var e = Na(t);
                                return function(r) {
                                    return ci(r, t, e)
                                }
                            }(ai(t, 1))
                        }, kr.constant = ec, kr.countBy = vo, kr.create = function(t, e) {
                            var r = $r(t);
                            return null == e ? r : ii(r, e)
                        }, kr.curry = function t(e, i, n) {
                            var s = Yn(e, 8, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, kr.curryRight = function t(e, i, n) {
                            var s = Yn(e, o, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, kr.debounce = No, kr.defaults = Sa, kr.defaultsDeep = Oa, kr.defer = To, kr.delay = Lo, kr.difference = $s, kr.differenceBy = Us, kr.differenceWith = Hs, kr.drop = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, (e = i || e === r ? 1 : ga(e)) < 0 ? 0 : e, n) : []
                        }, kr.dropRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, 0, (e = n - (e = i || e === r ? 1 : ga(e))) < 0 ? 0 : e) : []
                        }, kr.dropRightWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !0, !0) : []
                        }, kr.dropWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !0) : []
                        }, kr.fill = function(t, e, i, n) {
                            var s = null == t ? 0 : t.length;
                            return s ? (i && "number" != typeof i && ws(t, e, i) && (i = 0, n = s), function(t, e, i, n) {
                                var s = t.length;
                                for ((i = ga(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : ga(n)) < 0 && (n += s), n = i > n ? 0 : va(n); i < n;) t[i++] = e;
                                return t
                            }(t, e, i, n)) : []
                        }, kr.filter = function(t, e) {
                            return (Ko(t) ? Ae : gi)(t, cs(e, 3))
                        }, kr.flatMap = function(t, e) {
                            return vi(Po(t, e), 1)
                        }, kr.flatMapDeep = function(t, e) {
                            return vi(Po(t, e), l)
                        }, kr.flatMapDepth = function(t, e, i) {
                            return i = i === r ? 1 : ga(i), vi(Po(t, e), i)
                        }, kr.flatten = Ks, kr.flattenDeep = function(t) {
                            return (null == t ? 0 : t.length) ? vi(t, l) : []
                        }, kr.flattenDepth = function(t, e) {
                            return (null == t ? 0 : t.length) ? vi(t, e = e === r ? 1 : ga(e)) : []
                        }, kr.flip = function(t) {
                            return Yn(t, 512)
                        }, kr.flow = rc, kr.flowRight = ic, kr.fromPairs = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = {}; ++e < r;) {
                                var n = t[e];
                                i[n[0]] = n[1]
                            }
                            return i
                        }, kr.functions = function(t) {
                            return null == t ? [] : bi(t, Na(t))
                        }, kr.functionsIn = function(t) {
                            return null == t ? [] : bi(t, Ta(t))
                        }, kr.groupBy = bo, kr.initial = function(t) {
                            return (null == t ? 0 : t.length) ? rn(t, 0, -1) : []
                        }, kr.intersection = Zs, kr.intersectionBy = Ws, kr.intersectionWith = Gs, kr.invert = Ra, kr.invertBy = Aa, kr.invokeMap = Eo, kr.iteratee = sc, kr.keyBy = Io, kr.keys = Na, kr.keysIn = Ta, kr.map = Po, kr.mapKeys = function(t, e) {
                            var r = {};
                            return e = cs(e, 3), wi(t, (function(t, i, n) {
                                ni(r, e(t, i, n), t)
                            })), r
                        }, kr.mapValues = function(t, e) {
                            var r = {};
                            return e = cs(e, 3), wi(t, (function(t, i, n) {
                                ni(r, i, e(t, i, n))
                            })), r
                        }, kr.matches = function(t) {
                            return ki(ai(t, 1))
                        }, kr.matchesProperty = function(t, e) {
                            return $i(t, ai(e, 1))
                        }, kr.memoize = Mo, kr.merge = La, kr.mergeWith = Ma, kr.method = oc, kr.methodOf = ac, kr.mixin = cc, kr.negate = Do, kr.nthArg = function(t) {
                            return t = ga(t), Gi((function(e) {
                                return Hi(e, t)
                            }))
                        }, kr.omit = Da, kr.omitBy = function(t, e) {
                            return za(t, Do(cs(e)))
                        }, kr.once = function(t) {
                            return Ro(2, t)
                        }, kr.orderBy = function(t, e, i, n) {
                            return null == t ? [] : (Ko(e) || (e = null == e ? [] : [e]), Ko(i = n ? r : i) || (i = null == i ? [] : [i]), Vi(t, e, i))
                        }, kr.over = uc, kr.overArgs = qo, kr.overEvery = lc, kr.overSome = pc, kr.partial = zo, kr.partialRight = ko, kr.partition = So, kr.pick = qa, kr.pickBy = za, kr.property = fc, kr.propertyOf = function(t) {
                            return function(e) {
                                return null == t ? r : Ei(t, e)
                            }
                        }, kr.pull = Ys, kr.pullAll = Qs, kr.pullAllBy = function(t, e, r) {
                            return t && t.length && e && e.length ? Ki(t, e, cs(r, 2)) : t
                        }, kr.pullAllWith = function(t, e, i) {
                            return t && t.length && e && e.length ? Ki(t, e, r, i) : t
                        }, kr.pullAt = Xs, kr.range = dc, kr.rangeRight = gc, kr.rearg = $o, kr.reject = function(t, e) {
                            return (Ko(t) ? Ae : gi)(t, Do(cs(e, 3)))
                        }, kr.remove = function(t, e) {
                            var r = [];
                            if (!t || !t.length) return r;
                            var i = -1,
                                n = [],
                                s = t.length;
                            for (e = cs(e, 3); ++i < s;) {
                                var o = t[i];
                                e(o, i, t) && (r.push(o), n.push(i))
                            }
                            return Fi(t, n), r
                        }, kr.rest = function(t, e) {
                            if ("function" != typeof t) throw new Rt(i);
                            return Gi(t, e = e === r ? e : ga(e))
                        }, kr.reverse = to, kr.sampleSize = function(t, e, i) {
                            return e = (i ? ws(t, e, i) : e === r) ? 1 : ga(e), (Ko(t) ? Yr : Yi)(t, e)
                        }, kr.set = function(t, e, r) {
                            return null == t ? t : Qi(t, e, r)
                        }, kr.setWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : Qi(t, e, i, n)
                        }, kr.shuffle = function(t) {
                            return (Ko(t) ? Qr : en)(t)
                        }, kr.slice = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? (i && "number" != typeof i && ws(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : ga(e), i = i === r ? n : ga(i)), rn(t, e, i)) : []
                        }, kr.sortBy = Oo, kr.sortedUniq = function(t) {
                            return t && t.length ? an(t) : []
                        }, kr.sortedUniqBy = function(t, e) {
                            return t && t.length ? an(t, cs(e, 2)) : []
                        }, kr.split = function(t, e, i) {
                            return i && "number" != typeof i && ws(t, e, i) && (e = i = r), (i = i === r ? d : i >>> 0) ? (t = wa(t)) && ("string" == typeof e || null != e && !oa(e)) && (!(e = hn(e)) && or(t)) ? bn(pr(t), 0, i) : t.split(e, i) : []
                        }, kr.spread = function(t, e) {
                            if ("function" != typeof t) throw new Rt(i);
                            return e = null == e ? 0 : yr(ga(e), 0), Gi((function(r) {
                                var i = r[e],
                                    n = bn(r, 0, e);
                                return i && Le(n, i), Se(t, this, n)
                            }))
                        }, kr.tail = function(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? rn(t, 1, e) : []
                        }, kr.take = function(t, e, i) {
                            return t && t.length ? rn(t, 0, (e = i || e === r ? 1 : ga(e)) < 0 ? 0 : e) : []
                        }, kr.takeRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, (e = n - (e = i || e === r ? 1 : ga(e))) < 0 ? 0 : e, n) : []
                        }, kr.takeRightWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !1, !0) : []
                        }, kr.takeWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3)) : []
                        }, kr.tap = function(t, e) {
                            return e(t), t
                        }, kr.throttle = function(t, e, r) {
                            var n = !0,
                                s = !0;
                            if ("function" != typeof t) throw new Rt(i);
                            return ea(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), No(t, e, {
                                leading: n,
                                maxWait: e,
                                trailing: s
                            })
                        }, kr.thru = fo, kr.toArray = fa, kr.toPairs = ka, kr.toPairsIn = $a, kr.toPath = function(t) {
                            return Ko(t) ? Te(t, qs) : ha(t) ? [t] : Rn(Ds(wa(t)))
                        }, kr.toPlainObject = ma, kr.transform = function(t, e, r) {
                            var i = Ko(t),
                                n = i || Go(t) || ua(t);
                            if (e = cs(e, 4), null == r) {
                                var s = t && t.constructor;
                                r = n ? i ? new s : [] : ea(t) && Qo(s) ? $r(Ft(t)) : {}
                            }
                            return (n ? xe : wi)(t, (function(t, i, n) {
                                return e(r, t, i, n)
                            })), r
                        }, kr.unary = function(t) {
                            return Co(t, 1)
                        }, kr.union = eo, kr.unionBy = ro, kr.unionWith = io, kr.uniq = function(t) {
                            return t && t.length ? un(t) : []
                        }, kr.uniqBy = function(t, e) {
                            return t && t.length ? un(t, cs(e, 2)) : []
                        }, kr.uniqWith = function(t, e) {
                            return e = "function" == typeof e ? e : r, t && t.length ? un(t, r, e) : []
                        }, kr.unset = function(t, e) {
                            return null == t || ln(t, e)
                        }, kr.unzip = no, kr.unzipWith = so, kr.update = function(t, e, r) {
                            return null == t ? t : pn(t, e, mn(r))
                        }, kr.updateWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : pn(t, e, mn(i), n)
                        }, kr.values = Ua, kr.valuesIn = function(t) {
                            return null == t ? [] : Qe(t, Ta(t))
                        }, kr.without = oo, kr.words = Qa, kr.wrap = function(t, e) {
                            return zo(mn(e), t)
                        }, kr.xor = ao, kr.xorBy = co, kr.xorWith = ho, kr.zip = uo, kr.zipObject = function(t, e) {
                            return vn(t || [], e || [], ti)
                        }, kr.zipObjectDeep = function(t, e) {
                            return vn(t || [], e || [], Qi)
                        }, kr.zipWith = lo, kr.entries = ka, kr.entriesIn = $a, kr.extend = ba, kr.extendWith = Ea, cc(kr, kr), kr.add = mc, kr.attempt = Xa, kr.camelCase = Ha, kr.capitalize = Va, kr.ceil = wc, kr.clamp = function(t, e, i) {
                            return i === r && (i = e, e = r), i !== r && (i = (i = ya(i)) === i ? i : 0), e !== r && (e = (e = ya(e)) === e ? e : 0), oi(ya(t), e, i)
                        }, kr.clone = function(t) {
                            return ai(t, 4)
                        }, kr.cloneDeep = function(t) {
                            return ai(t, 5)
                        }, kr.cloneDeepWith = function(t, e) {
                            return ai(t, 5, e = "function" == typeof e ? e : r)
                        }, kr.cloneWith = function(t, e) {
                            return ai(t, 4, e = "function" == typeof e ? e : r)
                        }, kr.conformsTo = function(t, e) {
                            return null == e || ci(t, e, Na(e))
                        }, kr.deburr = Ba, kr.defaultTo = function(t, e) {
                            return null == t || t !== t ? e : t
                        }, kr.divide = _c, kr.endsWith = function(t, e, i) {
                            t = wa(t), e = hn(e);
                            var n = t.length,
                                s = i = i === r ? n : oi(ga(i), 0, n);
                            return (i -= e.length) >= 0 && t.slice(i, s) == e
                        }, kr.eq = Uo, kr.escape = function(t) {
                            return (t = wa(t)) && G.test(t) ? t.replace(Z, nr) : t
                        }, kr.escapeRegExp = function(t) {
                            return (t = wa(t)) && it.test(t) ? t.replace(rt, "\\$&") : t
                        }, kr.every = function(t, e, i) {
                            var n = Ko(t) ? Re : fi;
                            return i && ws(t, e, i) && (e = r), n(t, cs(e, 3))
                        }, kr.find = yo, kr.findIndex = Vs, kr.findKey = function(t, e) {
                            return ke(t, cs(e, 3), wi)
                        }, kr.findLast = mo, kr.findLastIndex = Bs, kr.findLastKey = function(t, e) {
                            return ke(t, cs(e, 3), _i)
                        }, kr.floor = bc, kr.forEach = wo, kr.forEachRight = _o, kr.forIn = function(t, e) {
                            return null == t ? t : yi(t, cs(e, 3), Ta)
                        }, kr.forInRight = function(t, e) {
                            return null == t ? t : mi(t, cs(e, 3), Ta)
                        }, kr.forOwn = function(t, e) {
                            return t && wi(t, cs(e, 3))
                        }, kr.forOwnRight = function(t, e) {
                            return t && _i(t, cs(e, 3))
                        }, kr.get = xa, kr.gt = Ho, kr.gte = Vo, kr.has = function(t, e) {
                            return null != t && gs(t, e, Oi)
                        }, kr.hasIn = Ca, kr.head = Fs, kr.identity = nc, kr.includes = function(t, e, r, i) {
                            t = Zo(t) ? t : Ua(t), r = r && !i ? ga(r) : 0;
                            var n = t.length;
                            return r < 0 && (r = yr(n + r, 0)), ca(t) ? r <= n && t.indexOf(e, r) > -1 : !!n && Ue(t, e, r) > -1
                        }, kr.indexOf = function(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : ga(r);
                            return n < 0 && (n = yr(i + n, 0)), Ue(t, e, n)
                        }, kr.inRange = function(t, e, i) {
                            return e = da(e), i === r ? (i = e, e = 0) : i = da(i),
                                function(t, e, r) {
                                    return t >= mr(e, r) && t < yr(e, r)
                                }(t = ya(t), e, i)
                        }, kr.invoke = ja, kr.isArguments = Bo, kr.isArray = Ko, kr.isArrayBuffer = Fo, kr.isArrayLike = Zo, kr.isArrayLikeObject = Wo, kr.isBoolean = function(t) {
                            return !0 === t || !1 === t || ra(t) && Pi(t) == m
                        }, kr.isBuffer = Go, kr.isDate = Jo, kr.isElement = function(t) {
                            return ra(t) && 1 === t.nodeType && !sa(t)
                        }, kr.isEmpty = function(t) {
                            if (null == t) return !0;
                            if (Zo(t) && (Ko(t) || "string" == typeof t || "function" == typeof t.splice || Go(t) || ua(t) || Bo(t))) return !t.length;
                            var e = ds(t);
                            if (e == I || e == C) return !t.size;
                            if (Is(t)) return !Mi(t).length;
                            for (var r in t)
                                if (Mt.call(t, r)) return !1;
                            return !0
                        }, kr.isEqual = function(t, e) {
                            return ji(t, e)
                        }, kr.isEqualWith = function(t, e, i) {
                            var n = (i = "function" == typeof i ? i : r) ? i(t, e) : r;
                            return n === r ? ji(t, e, r, i) : !!n
                        }, kr.isError = Yo, kr.isFinite = function(t) {
                            return "number" == typeof t && ze(t)
                        }, kr.isFunction = Qo, kr.isInteger = Xo, kr.isLength = ta, kr.isMap = ia, kr.isMatch = function(t, e) {
                            return t === e || Ni(t, e, us(e))
                        }, kr.isMatchWith = function(t, e, i) {
                            return i = "function" == typeof i ? i : r, Ni(t, e, us(e), i)
                        }, kr.isNaN = function(t) {
                            return na(t) && t != +t
                        }, kr.isNative = function(t) {
                            if (Es(t)) throw new It("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Ti(t)
                        }, kr.isNil = function(t) {
                            return null == t
                        }, kr.isNull = function(t) {
                            return null === t
                        }, kr.isNumber = na, kr.isObject = ea, kr.isObjectLike = ra, kr.isPlainObject = sa, kr.isRegExp = oa, kr.isSafeInteger = function(t) {
                            return Xo(t) && t >= -p && t <= p
                        }, kr.isSet = aa, kr.isString = ca, kr.isSymbol = ha, kr.isTypedArray = ua, kr.isUndefined = function(t) {
                            return t === r
                        }, kr.isWeakMap = function(t) {
                            return ra(t) && ds(t) == j
                        }, kr.isWeakSet = function(t) {
                            return ra(t) && "[object WeakSet]" == Pi(t)
                        }, kr.join = function(t, e) {
                            return null == t ? "" : Fe.call(t, e)
                        }, kr.kebabCase = Ka, kr.last = Js, kr.lastIndexOf = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n;
                            return i !== r && (s = (s = ga(i)) < 0 ? yr(n + s, 0) : mr(s, n - 1)), e === e ? function(t, e, r) {
                                for (var i = r + 1; i--;)
                                    if (t[i] === e) return i;
                                return i
                            }(t, e, s) : $e(t, Ve, s, !0)
                        }, kr.lowerCase = Fa, kr.lowerFirst = Za, kr.lt = la, kr.lte = pa, kr.max = function(t) {
                            return t && t.length ? di(t, nc, Si) : r
                        }, kr.maxBy = function(t, e) {
                            return t && t.length ? di(t, cs(e, 2), Si) : r
                        }, kr.mean = function(t) {
                            return Be(t, nc)
                        }, kr.meanBy = function(t, e) {
                            return Be(t, cs(e, 2))
                        }, kr.min = function(t) {
                            return t && t.length ? di(t, nc, qi) : r
                        }, kr.minBy = function(t, e) {
                            return t && t.length ? di(t, cs(e, 2), qi) : r
                        }, kr.stubArray = vc, kr.stubFalse = yc, kr.stubObject = function() {
                            return {}
                        }, kr.stubString = function() {
                            return ""
                        }, kr.stubTrue = function() {
                            return !0
                        }, kr.multiply = Ec, kr.nth = function(t, e) {
                            return t && t.length ? Hi(t, ga(e)) : r
                        }, kr.noConflict = function() {
                            return fe._ === this && (fe._ = $t), this
                        }, kr.noop = hc, kr.now = xo, kr.pad = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            if (!e || i >= e) return t;
                            var n = (e - i) / 2;
                            return Bn(ge(n), r) + t + Bn(de(n), r)
                        }, kr.padEnd = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            return e && i < e ? t + Bn(e - i, r) : t
                        }, kr.padStart = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            return e && i < e ? Bn(e - i, r) + t : t
                        }, kr.parseInt = function(t, e, r) {
                            return r || null == e ? e = 0 : e && (e = +e), _r(wa(t).replace(nt, ""), e || 0)
                        }, kr.random = function(t, e, i) {
                            if (i && "boolean" != typeof i && ws(t, e, i) && (e = i = r), i === r && ("boolean" == typeof e ? (i = e, e = r) : "boolean" == typeof t && (i = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = da(t), e === r ? (e = t, t = 0) : e = da(e)), t > e) {
                                var n = t;
                                t = e, e = n
                            }
                            if (i || t % 1 || e % 1) {
                                var s = br();
                                return mr(t + s * (e - t + he("1e-" + ((s + "").length - 1))), e)
                            }
                            return Zi(t, e)
                        }, kr.reduce = function(t, e, r) {
                            var i = Ko(t) ? Me : Ze,
                                n = arguments.length < 3;
                            return i(t, cs(e, 4), r, n, li)
                        }, kr.reduceRight = function(t, e, r) {
                            var i = Ko(t) ? De : Ze,
                                n = arguments.length < 3;
                            return i(t, cs(e, 4), r, n, pi)
                        }, kr.repeat = function(t, e, i) {
                            return e = (i ? ws(t, e, i) : e === r) ? 1 : ga(e), Wi(wa(t), e)
                        }, kr.replace = function() {
                            var t = arguments,
                                e = wa(t[0]);
                            return t.length < 3 ? e : e.replace(t[1], t[2])
                        }, kr.result = function(t, e, i) {
                            var n = -1,
                                s = (e = wn(e, t)).length;
                            for (s || (s = 1, t = r); ++n < s;) {
                                var o = null == t ? r : t[qs(e[n])];
                                o === r && (n = s, o = i), t = Qo(o) ? o.call(t) : o
                            }
                            return t
                        }, kr.round = Ic, kr.runInContext = t, kr.sample = function(t) {
                            return (Ko(t) ? Jr : Ji)(t)
                        }, kr.size = function(t) {
                            if (null == t) return 0;
                            if (Zo(t)) return ca(t) ? lr(t) : t.length;
                            var e = ds(t);
                            return e == I || e == C ? t.size : Mi(t).length
                        }, kr.snakeCase = Wa, kr.some = function(t, e, i) {
                            var n = Ko(t) ? qe : nn;
                            return i && ws(t, e, i) && (e = r), n(t, cs(e, 3))
                        }, kr.sortedIndex = function(t, e) {
                            return sn(t, e)
                        }, kr.sortedIndexBy = function(t, e, r) {
                            return on(t, e, cs(r, 2))
                        }, kr.sortedIndexOf = function(t, e) {
                            var r = null == t ? 0 : t.length;
                            if (r) {
                                var i = sn(t, e);
                                if (i < r && Uo(t[i], e)) return i
                            }
                            return -1
                        }, kr.sortedLastIndex = function(t, e) {
                            return sn(t, e, !0)
                        }, kr.sortedLastIndexBy = function(t, e, r) {
                            return on(t, e, cs(r, 2), !0)
                        }, kr.sortedLastIndexOf = function(t, e) {
                            if (null == t ? 0 : t.length) {
                                var r = sn(t, e, !0) - 1;
                                if (Uo(t[r], e)) return r
                            }
                            return -1
                        }, kr.startCase = Ga, kr.startsWith = function(t, e, r) {
                            return t = wa(t), r = null == r ? 0 : oi(ga(r), 0, t.length), e = hn(e), t.slice(r, r + e.length) == e
                        }, kr.subtract = Pc, kr.sum = function(t) {
                            return t && t.length ? We(t, nc) : 0
                        }, kr.sumBy = function(t, e) {
                            return t && t.length ? We(t, cs(e, 2)) : 0
                        }, kr.template = function(t, e, i) {
                            var n = kr.templateSettings;
                            i && ws(t, e, i) && (e = r), t = wa(t), e = Ea({}, e, n, Qn);
                            var s, o, a = Ea({}, e.imports, n.imports, Qn),
                                c = Na(a),
                                h = Qe(a, c),
                                u = 0,
                                l = e.interpolate || _t,
                                p = "__p += '",
                                f = xt((e.escape || _t).source + "|" + l.source + "|" + (l === Q ? pt : _t).source + "|" + (e.evaluate || _t).source + "|$", "g"),
                                d = "//# sourceURL=" + (Mt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++se + "]") + "\n";
                            t.replace(f, (function(e, r, i, n, a, c) {
                                return i || (i = n), p += t.slice(u, c).replace(bt, sr), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), u = c + e.length, e
                            })), p += "';\n";
                            var g = Mt.call(e, "variable") && e.variable;
                            if (g) {
                                if (ut.test(g)) throw new It("Invalid `variable` option passed into `_.template`")
                            } else p = "with (obj) {\n" + p + "\n}\n";
                            p = (o ? p.replace(V, "") : p).replace(B, "$1").replace(K, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var v = Xa((function() {
                                return Pt(c, d + "return " + p).apply(r, h)
                            }));
                            if (v.source = p, Yo(v)) throw v;
                            return v
                        }, kr.times = function(t, e) {
                            if ((t = ga(t)) < 1 || t > p) return [];
                            var r = d,
                                i = mr(t, d);
                            e = cs(e), t -= d;
                            for (var n = Ge(i, e); ++r < t;) e(r);
                            return n
                        }, kr.toFinite = da, kr.toInteger = ga, kr.toLength = va, kr.toLower = function(t) {
                            return wa(t).toLowerCase()
                        }, kr.toNumber = ya, kr.toSafeInteger = function(t) {
                            return t ? oi(ga(t), -p, p) : 0 === t ? t : 0
                        }, kr.toString = wa, kr.toUpper = function(t) {
                            return wa(t).toUpperCase()
                        }, kr.trim = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return Je(t);
                            if (!t || !(e = hn(e))) return t;
                            var n = pr(t),
                                s = pr(e);
                            return bn(n, tr(n, s), er(n, s) + 1).join("")
                        }, kr.trimEnd = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return t.slice(0, fr(t) + 1);
                            if (!t || !(e = hn(e))) return t;
                            var n = pr(t);
                            return bn(n, 0, er(n, pr(e)) + 1).join("")
                        }, kr.trimStart = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return t.replace(nt, "");
                            if (!t || !(e = hn(e))) return t;
                            var n = pr(t);
                            return bn(n, tr(n, pr(e))).join("")
                        }, kr.truncate = function(t, e) {
                            var i = 30,
                                n = "...";
                            if (ea(e)) {
                                var s = "separator" in e ? e.separator : s;
                                i = "length" in e ? ga(e.length) : i, n = "omission" in e ? hn(e.omission) : n
                            }
                            var o = (t = wa(t)).length;
                            if (or(t)) {
                                var a = pr(t);
                                o = a.length
                            }
                            if (i >= o) return t;
                            var c = i - lr(n);
                            if (c < 1) return n;
                            var h = a ? bn(a, 0, c).join("") : t.slice(0, c);
                            if (s === r) return h + n;
                            if (a && (c += h.length - c), oa(s)) {
                                if (t.slice(c).search(s)) {
                                    var u, l = h;
                                    for (s.global || (s = xt(s.source, wa(ft.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(l);) var p = u.index;
                                    h = h.slice(0, p === r ? c : p)
                                }
                            } else if (t.indexOf(hn(s), c) != c) {
                                var f = h.lastIndexOf(s);
                                f > -1 && (h = h.slice(0, f))
                            }
                            return h + n
                        }, kr.unescape = function(t) {
                            return (t = wa(t)) && W.test(t) ? t.replace(F, dr) : t
                        }, kr.uniqueId = function(t) {
                            var e = ++Dt;
                            return wa(t) + e
                        }, kr.upperCase = Ja, kr.upperFirst = Ya, kr.each = wo, kr.eachRight = _o, kr.first = Fs, cc(kr, function() {
                            var t = {};
                            return wi(kr, (function(e, r) {
                                Mt.call(kr.prototype, r) || (t[r] = e)
                            })), t
                        }(), {
                            chain: !1
                        }), kr.VERSION = "4.17.21", xe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                            kr[t].placeholder = kr
                        })), xe(["drop", "take"], (function(t, e) {
                            Vr.prototype[t] = function(i) {
                                i = i === r ? 1 : yr(ga(i), 0);
                                var n = this.__filtered__ && !e ? new Vr(this) : this.clone();
                                return n.__filtered__ ? n.__takeCount__ = mr(i, n.__takeCount__) : n.__views__.push({
                                    size: mr(i, d),
                                    type: t + (n.__dir__ < 0 ? "Right" : "")
                                }), n
                            }, Vr.prototype[t + "Right"] = function(e) {
                                return this.reverse()[t](e).reverse()
                            }
                        })), xe(["filter", "map", "takeWhile"], (function(t, e) {
                            var r = e + 1,
                                i = 1 == r || 3 == r;
                            Vr.prototype[t] = function(t) {
                                var e = this.clone();
                                return e.__iteratees__.push({
                                    iteratee: cs(t, 3),
                                    type: r
                                }), e.__filtered__ = e.__filtered__ || i, e
                            }
                        })), xe(["head", "last"], (function(t, e) {
                            var r = "take" + (e ? "Right" : "");
                            Vr.prototype[t] = function() {
                                return this[r](1).value()[0]
                            }
                        })), xe(["initial", "tail"], (function(t, e) {
                            var r = "drop" + (e ? "" : "Right");
                            Vr.prototype[t] = function() {
                                return this.__filtered__ ? new Vr(this) : this[r](1)
                            }
                        })), Vr.prototype.compact = function() {
                            return this.filter(nc)
                        }, Vr.prototype.find = function(t) {
                            return this.filter(t).head()
                        }, Vr.prototype.findLast = function(t) {
                            return this.reverse().find(t)
                        }, Vr.prototype.invokeMap = Gi((function(t, e) {
                            return "function" == typeof t ? new Vr(this) : this.map((function(r) {
                                return Ri(r, t, e)
                            }))
                        })), Vr.prototype.reject = function(t) {
                            return this.filter(Do(cs(t)))
                        }, Vr.prototype.slice = function(t, e) {
                            t = ga(t);
                            var i = this;
                            return i.__filtered__ && (t > 0 || e < 0) ? new Vr(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), e !== r && (i = (e = ga(e)) < 0 ? i.dropRight(-e) : i.take(e - t)), i)
                        }, Vr.prototype.takeRightWhile = function(t) {
                            return this.reverse().takeWhile(t).reverse()
                        }, Vr.prototype.toArray = function() {
                            return this.take(d)
                        }, wi(Vr.prototype, (function(t, e) {
                            var i = /^(?:filter|find|map|reject)|While$/.test(e),
                                n = /^(?:head|last)$/.test(e),
                                s = kr[n ? "take" + ("last" == e ? "Right" : "") : e],
                                o = n || /^find/.test(e);
                            s && (kr.prototype[e] = function() {
                                var e = this.__wrapped__,
                                    a = n ? [1] : arguments,
                                    c = e instanceof Vr,
                                    h = a[0],
                                    u = c || Ko(e),
                                    l = function(t) {
                                        var e = s.apply(kr, Le([t], a));
                                        return n && p ? e[0] : e
                                    };
                                u && i && "function" == typeof h && 1 != h.length && (c = u = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    d = o && !p,
                                    g = c && !f;
                                if (!o && u) {
                                    e = g ? e : new Vr(this);
                                    var v = t.apply(e, a);
                                    return v.__actions__.push({
                                        func: fo,
                                        args: [l],
                                        thisArg: r
                                    }), new Hr(v, p)
                                }
                                return d && g ? t.apply(this, a) : (v = this.thru(l), d ? n ? v.value()[0] : v.value() : v)
                            })
                        })), xe(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                            var e = At[t],
                                r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                i = /^(?:pop|shift)$/.test(t);
                            kr.prototype[t] = function() {
                                var t = arguments;
                                if (i && !this.__chain__) {
                                    var n = this.value();
                                    return e.apply(Ko(n) ? n : [], t)
                                }
                                return this[r]((function(r) {
                                    return e.apply(Ko(r) ? r : [], t)
                                }))
                            }
                        })), wi(Vr.prototype, (function(t, e) {
                            var r = kr[e];
                            if (r) {
                                var i = r.name + "";
                                Mt.call(Ar, i) || (Ar[i] = []), Ar[i].push({
                                    name: e,
                                    func: r
                                })
                            }
                        })), Ar[$n(r, 2).name] = [{
                            name: "wrapper",
                            func: r
                        }], Vr.prototype.clone = function() {
                            var t = new Vr(this.__wrapped__);
                            return t.__actions__ = Rn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Rn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Rn(this.__views__), t
                        }, Vr.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var t = new Vr(this);
                                t.__dir__ = -1, t.__filtered__ = !0
                            } else(t = this.clone()).__dir__ *= -1;
                            return t
                        }, Vr.prototype.value = function() {
                            var t = this.__wrapped__.value(),
                                e = this.__dir__,
                                r = Ko(t),
                                i = e < 0,
                                n = r ? t.length : 0,
                                s = function(t, e, r) {
                                    for (var i = -1, n = r.length; ++i < n;) {
                                        var s = r[i],
                                            o = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                t += o;
                                                break;
                                            case "dropRight":
                                                e -= o;
                                                break;
                                            case "take":
                                                e = mr(e, t + o);
                                                break;
                                            case "takeRight":
                                                t = yr(t, e - o)
                                        }
                                    }
                                    return {
                                        start: t,
                                        end: e
                                    }
                                }(0, n, this.__views__),
                                o = s.start,
                                a = s.end,
                                c = a - o,
                                h = i ? a : o - 1,
                                u = this.__iteratees__,
                                l = u.length,
                                p = 0,
                                f = mr(c, this.__takeCount__);
                            if (!r || !i && n == c && f == c) return dn(t, this.__actions__);
                            var d = [];
                            t: for (; c-- && p < f;) {
                                for (var g = -1, v = t[h += e]; ++g < l;) {
                                    var y = u[g],
                                        m = y.iteratee,
                                        w = y.type,
                                        _ = m(v);
                                    if (2 == w) v = _;
                                    else if (!_) {
                                        if (1 == w) continue t;
                                        break t
                                    }
                                }
                                d[p++] = v
                            }
                            return d
                        }, kr.prototype.at = go, kr.prototype.chain = function() {
                            return po(this)
                        }, kr.prototype.commit = function() {
                            return new Hr(this.value(), this.__chain__)
                        }, kr.prototype.next = function() {
                            this.__values__ === r && (this.__values__ = fa(this.value()));
                            var t = this.__index__ >= this.__values__.length;
                            return {
                                done: t,
                                value: t ? r : this.__values__[this.__index__++]
                            }
                        }, kr.prototype.plant = function(t) {
                            for (var e, i = this; i instanceof Ur;) {
                                var n = ks(i);
                                n.__index__ = 0, n.__values__ = r, e ? s.__wrapped__ = n : e = n;
                                var s = n;
                                i = i.__wrapped__
                            }
                            return s.__wrapped__ = t, e
                        }, kr.prototype.reverse = function() {
                            var t = this.__wrapped__;
                            if (t instanceof Vr) {
                                var e = t;
                                return this.__actions__.length && (e = new Vr(this)), (e = e.reverse()).__actions__.push({
                                    func: fo,
                                    args: [to],
                                    thisArg: r
                                }), new Hr(e, this.__chain__)
                            }
                            return this.thru(to)
                        }, kr.prototype.toJSON = kr.prototype.valueOf = kr.prototype.value = function() {
                            return dn(this.__wrapped__, this.__actions__)
                        }, kr.prototype.first = kr.prototype.head, Yt && (kr.prototype[Yt] = function() {
                            return this
                        }), kr
                    }();
                    ge ? ((ge.exports = gr)._ = gr, de._ = gr) : fe._ = gr
                }).call(zi)
            }(ki, ki.exports);
            var $i = Object.defineProperty,
                Ui = Object.defineProperties,
                Hi = Object.getOwnPropertyDescriptors,
                Vi = Object.getOwnPropertySymbols,
                Bi = Object.prototype.hasOwnProperty,
                Ki = Object.prototype.propertyIsEnumerable,
                Fi = (t, e, r) => e in t ? $i(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Zi = (t, e) => {
                    for (var r in e || (e = {})) Bi.call(e, r) && Fi(t, r, e[r]);
                    if (Vi)
                        for (var r of Vi(e)) Ki.call(e, r) && Fi(t, r, e[r]);
                    return t
                },
                Wi = (t, e) => Ui(t, Hi(e));

            function Gi(t, e, r) {
                let i;
                const n = Ji(t);
                return e.rpcMap && (i = e.rpcMap[n]), i || (i = `https://rpc.walletconnect.com/v1?chainId=eip155:${n}&projectId=${r}`), i
            }

            function Ji(t) {
                return t.includes("eip155") ? Number(t.split(":")[1]) : Number(t)
            }

            function Yi(t) {
                return t.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`))
            }

            function Qi(t) {
                var e, r, i, n;
                const o = {};
                if (!(0, s.L5)(t)) return o;
                for (const [a, c] of Object.entries(t)) {
                    const t = (0, s.gp)(a) ? [a] : c.chains,
                        h = c.methods || [],
                        u = c.events || [],
                        l = c.rpcMap || {},
                        p = (0, s.M)(a);
                    o[p] = Wi(Zi(Zi({}, o[p]), c), {
                        chains: (0, s.eG)(t, null == (e = o[p]) ? void 0 : e.chains),
                        methods: (0, s.eG)(h, null == (r = o[p]) ? void 0 : r.methods),
                        events: (0, s.eG)(u, null == (i = o[p]) ? void 0 : i.events),
                        rpcMap: Zi(Zi({}, l), null == (n = o[p]) ? void 0 : n.rpcMap)
                    })
                }
                return o
            }

            function Xi(t) {
                return t.includes(":") ? t.split(":")[2] : t
            }

            function tn(t) {
                const e = {};
                for (const [r, i] of Object.entries(t)) {
                    const t = i.methods || [],
                        n = i.events || [],
                        o = i.accounts || [],
                        a = (0, s.gp)(r) ? [r] : i.chains ? i.chains : Yi(i.accounts);
                    e[r] = {
                        chains: a,
                        methods: t,
                        events: n,
                        accounts: o
                    }
                }
                return e
            }
            const en = {},
                rn = t => en[t],
                nn = (t, e) => {
                    en[t] = e
                };
            class sn {
                constructor(t) {
                    this.name = "polkadot", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const r = e || Gi(`${this.name}:${t}`, this.namespace);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(t, this.namespace);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            class on {
                constructor(t) {
                    this.name = "eip155", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(t) {
                    switch (t.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(t);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, e) {
                    const r = Ji(t);
                    if (!this.httpProviders[r]) {
                        const t = e || Gi(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
                        if (!t) throw new Error(`No RPC url provided for chainId: ${r}`);
                        this.setHttpProvider(r, t)
                    }
                    this.chainId = r, this.events.emit(qi, `${this.name}:${r}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new it(new Ti(r, rn("disableProviderPing")))
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = Ji(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                getHttpProvider() {
                    const t = this.chainId,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                async handleSwitchChain(t) {
                    var e, r;
                    let i = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    const n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else {
                        if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                        await this.client.request({
                            topic: t.topic,
                            request: {
                                method: t.request.method,
                                params: [{
                                    chainId: i
                                }]
                            },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }), this.setDefaultChain(`${n}`)
                    }
                    return null
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(`${this.name}:${t}`)
                }
            }
            class an {
                constructor(t) {
                    this.name = "solana", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (!this.httpProviders[t]) {
                        const r = e || Gi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.chainId = t, this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(t, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            class cn {
                constructor(t) {
                    this.name = "cosmos", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const r = e || Gi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(t, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            class hn {
                constructor(t) {
                    this.name = "cip34", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const r = e || this.getCardanoRPCUrl(t);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        const r = this.getCardanoRPCUrl(e);
                        t[e] = this.createHttpProvider(e, r)
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                getCardanoRPCUrl(t) {
                    const e = this.namespace.rpcMap;
                    if (e) return e[t]
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || this.getCardanoRPCUrl(t);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            class un {
                constructor(t) {
                    this.name = "elrond", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (!this.httpProviders[t]) {
                        const r = e || Gi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.chainId = t, this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(t, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            class ln {
                constructor(t) {
                    this.name = "multiversx", this.namespace = t.namespace, this.events = rn("events"), this.client = rn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (!this.httpProviders[t]) {
                        const r = e || Gi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.chainId = t, this.events.emit(qi, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Gi(t, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new it(new Li(r, rn("disableProviderPing")))
                }
            }
            var pn = Object.defineProperty,
                fn = Object.defineProperties,
                dn = Object.getOwnPropertyDescriptors,
                gn = Object.getOwnPropertySymbols,
                vn = Object.prototype.hasOwnProperty,
                yn = Object.prototype.propertyIsEnumerable,
                mn = (t, e, r) => e in t ? pn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                wn = (t, e) => {
                    for (var r in e || (e = {})) vn.call(e, r) && mn(t, r, e[r]);
                    if (gn)
                        for (var r of gn(e)) yn.call(e, r) && mn(t, r, e[r]);
                    return t
                },
                _n = (t, e) => fn(t, dn(e));
            class bn {
                constructor(t) {
                    this.events = new(n()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: t ? .logger || Mi
                    })), this.disableProviderPing = t ? .disableProviderPing || !1
                }
                static async init(t) {
                    const e = new bn(t);
                    return await e.initialize(), e
                }
                async request(t, e) {
                    const [r, i] = this.validateChain(e);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: wn({}, t),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(t, e, r) {
                    this.request(t, r).then((t => e(null, t))).catch((t => e(t, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var t;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (t = this.session) ? void 0 : t.topic,
                        reason: (0, s.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(t) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(t) {
                    this.shouldAbortPairingAttempt = !1;
                    let e = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: t,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then((t => {
                            this.session = t, this.namespaces || (this.namespaces = tn(t.namespaces), this.persist("namespaces", this.namespaces))
                        })).catch((t => {
                            if (t.message !== hi) throw t;
                            e++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(t, e) {
                    try {
                        if (!this.session) return;
                        const [r, i] = this.validateChain(t);
                        this.getProvider(r).setDefaultChain(i, e)
                    } catch (r) {
                        if (!/Please call connect/.test(r.message)) throw r
                    }
                }
                async cleanupPendingPairings(t = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    const e = this.client.pairing.getAll();
                    if ((0, s.qt)(e)) {
                        for (const r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${e.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const t = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await Ri.init({
                        logger: this.providerOpts.logger || Mi,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const t = [...new Set(Object.keys(this.session.namespaces).map((t => (0, s.M)(t))))];
                    nn("client", this.client), nn("events", this.events), nn("disableProviderPing", this.disableProviderPing), t.forEach((t => {
                        if (!this.session) return;
                        const e = function(t, e) {
                                const r = Object.keys(e.namespaces).filter((e => e.includes(t)));
                                if (!r.length) return [];
                                const i = [];
                                return r.forEach((t => {
                                    const r = e.namespaces[t].accounts;
                                    i.push(...r)
                                })), i
                            }(t, this.session),
                            r = Yi(e),
                            i = function(t = {}, e = {}) {
                                const r = Qi(t),
                                    i = Qi(e);
                                return ki.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces),
                            n = _n(wn({}, i[t]), {
                                accounts: e,
                                chains: r
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new on({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new an({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new cn({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new sn({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new hn({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new un({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new ln({
                                    namespace: n
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (t => {
                        this.events.emit("session_ping", t)
                    })), this.client.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        if ("accountsChanged" === r.name) {
                            const t = r.data;
                            t && (0, s.qt)(t) && this.events.emit("accountsChanged", t.map(Xi))
                        } else "chainChanged" === r.name ? this.onChainChanged(e.chainId) : this.events.emit(r.name, r.data);
                        this.events.emit("session_event", t)
                    })), this.client.on("session_update", (({
                        topic: t,
                        params: e
                    }) => {
                        var r;
                        const {
                            namespaces: i
                        } = e, n = null == (r = this.client) ? void 0 : r.session.get(t);
                        this.session = _n(wn({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: e
                        })
                    })), this.client.on("session_delete", (async t => {
                        await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", _n(wn({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic
                        }))
                    })), this.on(qi, (t => {
                        this.onChainChanged(t, !0)
                    }))
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((t => {
                        var e;
                        this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
                    }))
                }
                setNamespaces(t) {
                    const {
                        namespaces: e,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = t;
                    e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", e), this.persist("optionalNamespaces", r)
                }
                validateChain(t) {
                    const [e, r] = t ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r];
                    if (e && !Object.keys(this.namespaces || {}).map((t => (0, s.M)(t))).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
                    if (e && r) return [e, r];
                    const i = (0, s.M)(Object.keys(this.namespaces)[0]);
                    return [i, this.rpcProviders[i].getDefaultChain()]
                }
                async requestAccounts() {
                    const [t] = this.validateChain();
                    return await this.getProvider(t).requestAccounts()
                }
                onChainChanged(t, e = !1) {
                    var r;
                    if (!this.namespaces) return;
                    const [i, n] = this.validateChain(t);
                    e || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(t, e) {
                    this.client.core.storage.setItem(`${Di}/${t}`, e)
                }
                async getFromStore(t) {
                    return await this.client.core.storage.getItem(`${Di}/${t}`)
                }
            }
            const En = bn,
                In = ["eth_sendTransaction", "personal_sign"],
                Pn = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Sn = ["chainChanged", "accountsChanged"],
                On = ["message", "disconnect", "connect"];
            var xn = Object.defineProperty,
                Cn = Object.defineProperties,
                Rn = Object.getOwnPropertyDescriptors,
                An = Object.getOwnPropertySymbols,
                jn = Object.prototype.hasOwnProperty,
                Nn = Object.prototype.propertyIsEnumerable,
                Tn = (t, e, r) => e in t ? xn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Ln = (t, e) => {
                    for (var r in e || (e = {})) jn.call(e, r) && Tn(t, r, e[r]);
                    if (An)
                        for (var r of An(e)) Nn.call(e, r) && Tn(t, r, e[r]);
                    return t
                },
                Mn = (t, e) => Cn(t, Rn(e));

            function Dn(t) {
                return Number(t[0].split(":")[1])
            }

            function qn(t) {
                return `0x${t.toString(16)}`
            }
            class zn {
                constructor() {
                    this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
                }
                static async init(t) {
                    const e = new zn;
                    return await e.initialize(t), e
                }
                async request(t) {
                    return await this.signer.request(t, this.formatChainId(this.chainId))
                }
                sendAsync(t, e) {
                    this.signer.sendAsync(t, e, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(t) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(t);
                    const {
                        required: e,
                        optional: r
                    } = function(t) {
                        const {
                            chains: e,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: o,
                            optionalEvents: a,
                            rpcMap: c
                        } = t;
                        if (!(0, s.qt)(e)) throw new Error("Invalid chains");
                        const h = {
                                chains: e,
                                methods: i || In,
                                events: o || Sn,
                                rpcMap: Ln({}, e.length ? {
                                    [Dn(e)]: c[Dn(e)]
                                } : {})
                            },
                            u = o ? .filter((t => !Sn.includes(t))),
                            l = i ? .filter((t => !In.includes(t)));
                        if (!r && !a && !n && (null == u || !u.length) && (null == l || !l.length)) return {
                            required: e.length ? h : void 0
                        };
                        const p = {
                            chains: [...new Set(u ? .length && l ? .length || !r ? h.chains.concat(r || []) : r)],
                            methods: [...new Set(h.methods.concat(null != n && n.length ? n : Pn))],
                            events: [...new Set(h.events.concat(a || On))],
                            rpcMap: c
                        };
                        return {
                            required: e.length ? h : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        const i = await new Promise((async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((t => {
                                !t.open && !this.signer.session && (this.signer.abortPairingAttempt(), n(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(Mn(Ln({
                                namespaces: Ln({}, e && {
                                    [this.namespace]: e
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: t ? .pairingTopic
                            })).then((t => {
                                i(t)
                            })).catch((t => {
                                n(new Error(t.message))
                            }))
                        }));
                        if (!i) return;
                        this.setChainIds(this.rpc.chains);
                        const n = (0, s.gu)(i.namespaces, [this.namespace]);
                        this.setAccounts(n), this.events.emit("connect", {
                            chainId: qn(this.chainId)
                        })
                    } catch (u) {
                        throw this.signer.logger.error(u), u
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
                    })), this.signer.on("chainChanged", (t => {
                        const e = parseInt(t);
                        this.chainId = e, this.events.emit("chainChanged", qn(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (t => {
                        this.events.emit("session_update", t)
                    })), this.signer.on("session_delete", (t => {
                        this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Mn(Ln({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (t => {
                        var e, r;
                        this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: t
                        })), this.events.emit("display_uri", t)
                    }))
                }
                switchEthereumChain(t) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: t.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(t) {
                    return "string" == typeof t && t.startsWith(`${this.namespace}:`)
                }
                formatChainId(t) {
                    return `${this.namespace}:${t}`
                }
                parseChainId(t) {
                    return Number(t.split(":")[1])
                }
                setChainIds(t) {
                    const e = t.filter((t => this.isCompatibleChainId(t))).map((t => this.parseChainId(t)));
                    e.length && (this.chainId = e[0], this.events.emit("chainChanged", qn(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        const e = this.parseChainId(t);
                        this.chainId = e, this.switchEthereumChain(e)
                    }
                }
                parseAccountId(t) {
                    const [e, r, i] = t.split(":");
                    return {
                        chainId: `${e}:${r}`,
                        address: i
                    }
                }
                setAccounts(t) {
                    this.accounts = t.filter((t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)).map((t => this.parseAccountId(t).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(t) {
                    var e, r;
                    const i = null != (e = t ? .chains) ? e : [],
                        n = null != (r = t ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const o = i.length ? t ? .methods || In : [],
                        a = i.length ? t ? .events || Sn : [],
                        c = t ? .optionalMethods || [],
                        h = t ? .optionalEvents || [],
                        u = t ? .rpcMap || this.buildRpcMap(s, t.projectId),
                        l = t ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map((t => this.formatChainId(t))),
                        optionalChains: n.map((t => this.formatChainId(t))),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: h,
                        rpcMap: u,
                        showQrModal: !(null == t || !t.showQrModal),
                        qrModalOptions: l,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, e) {
                    const r = {};
                    return t.forEach((t => {
                        r[t] = this.getRpcUrl(t, e)
                    })), r
                }
                async initialize(t) {
                    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Dn(this.rpc.chains) : Dn(this.rpc.optionalChains), this.signer = await En.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: t.disableProviderPing,
                            relayUrl: t.relayUrl,
                            storageOptions: t.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let t;
                        try {
                            const {
                                WalletConnectModal: e
                            } = await r.e(343).then(r.bind(r, 59343));
                            t = e
                        } catch {
                            throw new Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (t) try {
                            this.modal = new t(Ln({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), new Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(t) {
                    if (!t) return;
                    const {
                        chains: e,
                        optionalChains: r,
                        rpcMap: i
                    } = t;
                    e && (0, s.qt)(e) && (this.rpc.chains = e.map((t => this.formatChainId(t))), e.forEach((t => {
                        this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
                    }))), r && (0, s.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map((t => this.formatChainId(t))), r.forEach((t => {
                        this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
                    })))
                }
                getRpcUrl(t, e) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(t ? [this.formatChainId(t)] : e ? .accounts), this.setAccounts(e ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(t) {
                    return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t => this.parseAccount(t)))
                }
            }
            const kn = zn
        },
        38200: function(t, e, r) {
            "use strict";
            r.d(e, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        30997: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(38200)
        },
        32568: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
            const i = r(66736);
            e.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, e.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        53401: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(70655).__exportStar(r(32568), e)
        },
        38969: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HeartBeat = void 0;
            const i = r(70655),
                n = r(17187),
                s = r(66736),
                o = r(1614),
                a = r(53401);
            class c extends o.IHeartBeat {
                constructor(t) {
                    super(t), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        const e = new c(t);
                        return yield e.init(), e
                    }))
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            e.HeartBeat = c
        },
        90772: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(70655);
            i.__exportStar(r(38969), e), i.__exportStar(r(1614), e), i.__exportStar(r(53401), e)
        },
        44174: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IHeartBeat = void 0;
            const i = r(30997);
            class n extends i.IEvents {
                constructor(t) {
                    super()
                }
            }
            e.IHeartBeat = n
        },
        1614: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(70655).__exportStar(r(44174), e)
        },
        85150: function(t, e, r) {
            "use strict";
            const i = r(70655),
                n = r(63954),
                s = i.__importDefault(r(30653)),
                o = r(59728);
            class a {
                constructor() {
                    this.localStorage = s.default
                }
                getKeys() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        return Object.keys(this.localStorage)
                    }))
                }
                getEntries() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    }))
                }
                getItem(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        const e = this.localStorage.getItem(t);
                        if (null !== e) return n.safeJsonParse(e)
                    }))
                }
                setItem(t, e) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.setItem(t, n.safeJsonStringify(e))
                    }))
                }
                removeItem(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.removeItem(t)
                    }))
                }
            }
            e.ZP = a
        },
        30653: function(t, e, r) {
            "use strict";
            ! function() {
                let e;

                function i() {}
                e = i, e.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, e.prototype.setItem = function(t, e) {
                    this[t] = String(e)
                }, e.prototype.removeItem = function(t) {
                    delete this[t]
                }, e.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach((function(e) {
                        t[e] = void 0, delete t[e]
                    }))
                }, e.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, e.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), "undefined" !== typeof r.g && r.g.localStorage ? t.exports = r.g.localStorage : "undefined" !== typeof window && window.localStorage ? t.exports = window.localStorage : t.exports = new i
            }()
        },
        59728: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(70655);
            i.__exportStar(r(39076), e), i.__exportStar(r(20496), e)
        },
        39076: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IKeyValueStorage = void 0;
            e.IKeyValueStorage = class {}
        },
        20496: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.parseEntry = void 0;
            const i = r(63954);
            e.parseEntry = function(t) {
                var e;
                return [t[0], i.safeJsonParse(null !== (e = t[1]) && void 0 !== e ? e : "")]
            }
        },
        65727: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0, e.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, e.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        9107: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pino = void 0;
            const i = r(70655),
                n = i.__importDefault(r(36559));
            Object.defineProperty(e, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(65727), e), i.__exportStar(r(58048), e)
        },
        58048: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.generateChildLogger = e.formatChildLoggerContext = e.getLoggerContext = e.setBrowserLoggerContext = e.getBrowserLoggerContext = e.getDefaultLoggerOptions = void 0;
            const i = r(65727);

            function n(t, e = i.PINO_CUSTOM_CONTEXT_KEY) {
                return t[e] || ""
            }

            function s(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return t[r] = e, t
            }

            function o(t, e = i.PINO_CUSTOM_CONTEXT_KEY) {
                let r = "";
                return r = "undefined" === typeof t.bindings ? n(t, e) : t.bindings().context || "", r
            }

            function a(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                const n = o(t, r);
                return n.trim() ? `${n}/${e}` : e
            }
            e.getDefaultLoggerOptions = function(t) {
                return Object.assign(Object.assign({}, t), {
                    level: (null === t || void 0 === t ? void 0 : t.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, e.getBrowserLoggerContext = n, e.setBrowserLoggerContext = s, e.getLoggerContext = o, e.formatChildLoggerContext = a, e.generateChildLogger = function(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                const n = a(t, e, r);
                return s(t.child({
                    context: n
                }), n, r)
            }
        },
        43014: function() {},
        54098: function(t, e) {
            var r = "undefined" !== typeof self ? self : this,
                i = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return t.prototype = r, new t
                }();
            ! function(t) {
                ! function(e) {
                    var r = "URLSearchParams" in t,
                        i = "Symbol" in t && "iterator" in Symbol,
                        n = "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        s = "FormData" in t,
                        o = "ArrayBuffer" in t;
                    if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        c = ArrayBuffer.isView || function(t) {
                            return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function h(t) {
                        if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function u(t) {
                        return "string" !== typeof t && (t = String(t)), t
                    }

                    function l(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return i && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function p(t) {
                        this.map = {}, t instanceof p ? t.forEach((function(t, e) {
                            this.append(e, t)
                        }), this) : Array.isArray(t) ? t.forEach((function(t) {
                            this.append(t[0], t[1])
                        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                            this.append(e, t[e])
                        }), this)
                    }

                    function f(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function d(t) {
                        return new Promise((function(e, r) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                r(t.error)
                            }
                        }))
                    }

                    function g(t) {
                        var e = new FileReader,
                            r = d(e);
                        return e.readAsArrayBuffer(t), r
                    }

                    function v(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function y() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            var e;
                            this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o && n && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = v(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = v(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, n && (this.blob = function() {
                            var t = f(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                        }), this.text = function() {
                            var t = f(this);
                            if (t) return t;
                            if (this._bodyBlob) return function(t) {
                                var e = new FileReader,
                                    r = d(e);
                                return e.readAsText(t), r
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), r = new Array(e.length), i = 0; i < e.length; i++) r[i] = String.fromCharCode(e[i]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, s && (this.formData = function() {
                            return this.text().then(_)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    p.prototype.append = function(t, e) {
                        t = h(t), e = u(e);
                        var r = this.map[t];
                        this.map[t] = r ? r + ", " + e : e
                    }, p.prototype.delete = function(t) {
                        delete this.map[h(t)]
                    }, p.prototype.get = function(t) {
                        return t = h(t), this.has(t) ? this.map[t] : null
                    }, p.prototype.has = function(t) {
                        return this.map.hasOwnProperty(h(t))
                    }, p.prototype.set = function(t, e) {
                        this.map[h(t)] = u(e)
                    }, p.prototype.forEach = function(t, e) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                    }, p.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push(r)
                        })), l(t)
                    }, p.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        })), l(t)
                    }, p.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push([r, e])
                        })), l(t)
                    }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
                    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function w(t, e) {
                        var r = (e = e || {}).body;
                        if (t instanceof w) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = function(t) {
                                var e = t.toUpperCase();
                                return m.indexOf(e) > -1 ? e : t
                            }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(r)
                    }

                    function _(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach((function(t) {
                            if (t) {
                                var r = t.split("="),
                                    i = r.shift().replace(/\+/g, " "),
                                    n = r.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(i), decodeURIComponent(n))
                            }
                        })), e
                    }

                    function b(t) {
                        var e = new p;
                        return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                            var r = t.split(":"),
                                i = r.shift().trim();
                            if (i) {
                                var n = r.join(":").trim();
                                e.append(i, n)
                            }
                        })), e
                    }

                    function E(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    w.prototype.clone = function() {
                        return new w(this, {
                            body: this._bodyInit
                        })
                    }, y.call(w.prototype), y.call(E.prototype), E.prototype.clone = function() {
                        return new E(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new p(this.headers),
                            url: this.url
                        })
                    }, E.error = function() {
                        var t = new E(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var I = [301, 302, 303, 307, 308];
                    E.redirect = function(t, e) {
                        if (-1 === I.indexOf(e)) throw new RangeError("Invalid status code");
                        return new E(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, e.DOMException = t.DOMException;
                    try {
                        new e.DOMException
                    } catch (S) {
                        e.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var r = Error(t);
                            this.stack = r.stack
                        }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                    }

                    function P(t, r) {
                        return new Promise((function(i, s) {
                            var o = new w(t, r);
                            if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest;

                            function c() {
                                a.abort()
                            }
                            a.onload = function() {
                                var t = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: b(a.getAllResponseHeaders() || "")
                                };
                                t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                                var e = "response" in a ? a.response : a.responseText;
                                i(new E(e, t))
                            }, a.onerror = function() {
                                s(new TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                s(new TypeError("Network request failed"))
                            }, a.onabort = function() {
                                s(new e.DOMException("Aborted", "AbortError"))
                            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && n && (a.responseType = "blob"), o.headers.forEach((function(t, e) {
                                a.setRequestHeader(e, t)
                            })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                                4 === a.readyState && o.signal.removeEventListener("abort", c)
                            }), a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                        }))
                    }
                    P.polyfill = !0, t.fetch || (t.fetch = P, t.Headers = p, t.Request = w, t.Response = E), e.Headers = p, e.Request = w, e.Response = E, e.fetch = P, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }({})
            }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
            var n = i;
            (e = n.fetch).default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, t.exports = e
        },
        17187: function(t) {
            "use strict";
            var e, r = "object" === typeof Reflect ? Reflect : null,
                i = r && "function" === typeof r.apply ? r.apply : function(t, e, r) {
                    return Function.prototype.apply.call(t, e, r)
                };
            e = r && "function" === typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var n = Number.isNaN || function(t) {
                return t !== t
            };

            function s() {
                s.init.call(this)
            }
            t.exports = s, t.exports.once = function(t, e) {
                return new Promise((function(r, i) {
                    function n(r) {
                        t.removeListener(e, s), i(r)
                    }

                    function s() {
                        "function" === typeof t.removeListener && t.removeListener("error", n), r([].slice.call(arguments))
                    }
                    g(t, e, s, {
                        once: !0
                    }), "error" !== e && function(t, e, r) {
                        "function" === typeof t.on && g(t, "error", e, r)
                    }(t, n, {
                        once: !0
                    })
                }))
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var o = 10;

            function a(t) {
                if ("function" !== typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function c(t) {
                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
            }

            function h(t, e, r, i) {
                var n, s, o, h;
                if (a(r), void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), s = t._events), o = s[e]), void 0 === o) o = s[e] = r, ++t._eventsCount;
                else if ("function" === typeof o ? o = s[e] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = c(t)) > 0 && o.length > n && !o.warned) {
                    o.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = o.length, h = u, console && console.warn && console.warn(h)
                }
                return t
            }

            function u() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(t, e, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: r
                    },
                    n = u.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function p(t, e, r) {
                var i = t._events;
                if (void 0 === i) return [];
                var n = i[e];
                return void 0 === n ? [] : "function" === typeof n ? r ? [n.listener || n] : [n] : r ? function(t) {
                    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
                    return e
                }(n) : d(n, n.length)
            }

            function f(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var r = e[t];
                    if ("function" === typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function d(t, e) {
                for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
                return r
            }

            function g(t, e, r, i) {
                if ("function" === typeof t.on) i.once ? t.once(e, r) : t.on(e, r);
                else {
                    if ("function" !== typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, (function n(s) {
                        i.once && t.removeEventListener(e, n), r(s)
                    }))
                }
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    if ("number" !== typeof t || t < 0 || n(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    o = t
                }
            }), s.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(t) {
                if ("number" !== typeof t || t < 0 || n(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
                var n = "error" === t,
                    s = this._events;
                if (void 0 !== s) n = n && void 0 === s.error;
                else if (!n) return !1;
                if (n) {
                    var o;
                    if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
                    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = s[t];
                if (void 0 === c) return !1;
                if ("function" === typeof c) i(c, this, e);
                else {
                    var h = c.length,
                        u = d(c, h);
                    for (r = 0; r < h; ++r) i(u[r], this, e)
                }
                return !0
            }, s.prototype.addListener = function(t, e) {
                return h(this, t, e, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
                return h(this, t, e, !0)
            }, s.prototype.once = function(t, e) {
                return a(e), this.on(t, l(this, t, e)), this
            }, s.prototype.prependOnceListener = function(t, e) {
                return a(e), this.prependListener(t, l(this, t, e)), this
            }, s.prototype.removeListener = function(t, e) {
                var r, i, n, s, o;
                if (a(e), void 0 === (i = this._events)) return this;
                if (void 0 === (r = i[t])) return this;
                if (r === e || r.listener === e) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || e));
                else if ("function" !== typeof r) {
                    for (n = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === e || r[s].listener === e) {
                            o = r[s].listener, n = s;
                            break
                        }
                    if (n < 0) return this;
                    0 === n ? r.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(r, n), 1 === r.length && (i[t] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", t, o || e)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
                var e, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
                if (0 === arguments.length) {
                    var n, s = Object.keys(r);
                    for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(e = r[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
                return this
            }, s.prototype.listeners = function(t) {
                return p(this, t, !0)
            }, s.prototype.rawListeners = function(t) {
                return p(this, t, !1)
            }, s.listenerCount = function(t, e) {
                return "function" === typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
            }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            }
        },
        72307: function(t, e, r) {
            t = r.nmd(t);
            var i = "__lodash_hash_undefined__",
                n = 9007199254740991,
                s = "[object Arguments]",
                o = "[object Array]",
                a = "[object Boolean]",
                c = "[object Date]",
                h = "[object Error]",
                u = "[object Function]",
                l = "[object Map]",
                p = "[object Number]",
                f = "[object Object]",
                d = "[object Promise]",
                g = "[object RegExp]",
                v = "[object Set]",
                y = "[object String]",
                m = "[object Symbol]",
                w = "[object WeakMap]",
                _ = "[object ArrayBuffer]",
                b = "[object DataView]",
                E = /^\[object .+?Constructor\]$/,
                I = /^(?:0|[1-9]\d*)$/,
                P = {};
            P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P[s] = P[o] = P[_] = P[a] = P[b] = P[c] = P[h] = P[u] = P[l] = P[p] = P[f] = P[g] = P[v] = P[y] = P[w] = !1;
            var S = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                O = "object" == typeof self && self && self.Object === Object && self,
                x = S || O || Function("return this")(),
                C = e && !e.nodeType && e,
                R = C && t && !t.nodeType && t,
                A = R && R.exports === C,
                j = A && S.process,
                N = function() {
                    try {
                        return j && j.binding && j.binding("util")
                    } catch (t) {}
                }(),
                T = N && N.isTypedArray;

            function L(t, e) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }

            function M(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, i) {
                    r[++e] = [i, t]
                })), r
            }

            function D(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
            var q, z, k = Array.prototype,
                $ = Function.prototype,
                U = Object.prototype,
                H = x["__core-js_shared__"],
                V = $.toString,
                B = U.hasOwnProperty,
                K = function() {
                    var t = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }(),
                F = U.toString,
                Z = RegExp("^" + V.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                W = A ? x.Buffer : void 0,
                G = x.Symbol,
                J = x.Uint8Array,
                Y = U.propertyIsEnumerable,
                Q = k.splice,
                X = G ? G.toStringTag : void 0,
                tt = Object.getOwnPropertySymbols,
                et = W ? W.isBuffer : void 0,
                rt = (q = Object.keys, z = Object, function(t) {
                    return q(z(t))
                }),
                it = jt(x, "DataView"),
                nt = jt(x, "Map"),
                st = jt(x, "Promise"),
                ot = jt(x, "Set"),
                at = jt(x, "WeakMap"),
                ct = jt(Object, "create"),
                ht = Mt(it),
                ut = Mt(nt),
                lt = Mt(st),
                pt = Mt(ot),
                ft = Mt(at),
                dt = G ? G.prototype : void 0,
                gt = dt ? dt.valueOf : void 0;

            function vt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function yt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function mt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function wt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new mt; ++e < r;) this.add(t[e])
            }

            function _t(t) {
                var e = this.__data__ = new yt(t);
                this.size = e.size
            }

            function bt(t, e) {
                var r = zt(t),
                    i = !r && qt(t),
                    n = !r && !i && kt(t),
                    s = !r && !i && !n && Bt(t),
                    o = r || i || n || s,
                    a = o ? function(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }(t.length, String) : [],
                    c = a.length;
                for (var h in t) !e && !B.call(t, h) || o && ("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Lt(h, c)) || a.push(h);
                return a
            }

            function Et(t, e) {
                for (var r = t.length; r--;)
                    if (Dt(t[r][0], e)) return r;
                return -1
            }

            function It(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : X && X in Object(t) ? function(t) {
                    var e = B.call(t, X),
                        r = t[X];
                    try {
                        t[X] = void 0;
                        var i = !0
                    } catch (s) {}
                    var n = F.call(t);
                    i && (e ? t[X] = r : delete t[X]);
                    return n
                }(t) : function(t) {
                    return F.call(t)
                }(t)
            }

            function Pt(t) {
                return Vt(t) && It(t) == s
            }

            function St(t, e, r, i, n) {
                return t === e || (null == t || null == e || !Vt(t) && !Vt(e) ? t !== t && e !== e : function(t, e, r, i, n, u) {
                    var d = zt(t),
                        w = zt(e),
                        E = d ? o : Tt(t),
                        I = w ? o : Tt(e),
                        P = (E = E == s ? f : E) == f,
                        S = (I = I == s ? f : I) == f,
                        O = E == I;
                    if (O && kt(t)) {
                        if (!kt(e)) return !1;
                        d = !0, P = !1
                    }
                    if (O && !P) return u || (u = new _t), d || Bt(t) ? Ct(t, e, r, i, n, u) : function(t, e, r, i, n, s, o) {
                        switch (r) {
                            case b:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case _:
                                return !(t.byteLength != e.byteLength || !s(new J(t), new J(e)));
                            case a:
                            case c:
                            case p:
                                return Dt(+t, +e);
                            case h:
                                return t.name == e.name && t.message == e.message;
                            case g:
                            case y:
                                return t == e + "";
                            case l:
                                var u = M;
                            case v:
                                var f = 1 & i;
                                if (u || (u = D), t.size != e.size && !f) return !1;
                                var d = o.get(t);
                                if (d) return d == e;
                                i |= 2, o.set(t, e);
                                var w = Ct(u(t), u(e), i, n, s, o);
                                return o.delete(t), w;
                            case m:
                                if (gt) return gt.call(t) == gt.call(e)
                        }
                        return !1
                    }(t, e, E, r, i, n, u);
                    if (!(1 & r)) {
                        var x = P && B.call(t, "__wrapped__"),
                            C = S && B.call(e, "__wrapped__");
                        if (x || C) {
                            var R = x ? t.value() : t,
                                A = C ? e.value() : e;
                            return u || (u = new _t), n(R, A, r, i, u)
                        }
                    }
                    if (!O) return !1;
                    return u || (u = new _t),
                        function(t, e, r, i, n, s) {
                            var o = 1 & r,
                                a = Rt(t),
                                c = a.length,
                                h = Rt(e).length;
                            if (c != h && !o) return !1;
                            var u = c;
                            for (; u--;) {
                                var l = a[u];
                                if (!(o ? l in e : B.call(e, l))) return !1
                            }
                            var p = s.get(t);
                            if (p && s.get(e)) return p == e;
                            var f = !0;
                            s.set(t, e), s.set(e, t);
                            var d = o;
                            for (; ++u < c;) {
                                var g = t[l = a[u]],
                                    v = e[l];
                                if (i) var y = o ? i(v, g, l, e, t, s) : i(g, v, l, t, e, s);
                                if (!(void 0 === y ? g === v || n(g, v, r, i, s) : y)) {
                                    f = !1;
                                    break
                                }
                                d || (d = "constructor" == l)
                            }
                            if (f && !d) {
                                var m = t.constructor,
                                    w = e.constructor;
                                m == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w || (f = !1)
                            }
                            return s.delete(t), s.delete(e), f
                        }(t, e, r, i, n, u)
                }(t, e, r, i, St, n))
            }

            function Ot(t) {
                return !(!Ht(t) || function(t) {
                    return !!K && K in t
                }(t)) && ($t(t) ? Z : E).test(Mt(t))
            }

            function xt(t) {
                if (! function(t) {
                        var e = t && t.constructor,
                            r = "function" == typeof e && e.prototype || U;
                        return t === r
                    }(t)) return rt(t);
                var e = [];
                for (var r in Object(t)) B.call(t, r) && "constructor" != r && e.push(r);
                return e
            }

            function Ct(t, e, r, i, n, s) {
                var o = 1 & r,
                    a = t.length,
                    c = e.length;
                if (a != c && !(o && c > a)) return !1;
                var h = s.get(t);
                if (h && s.get(e)) return h == e;
                var u = -1,
                    l = !0,
                    p = 2 & r ? new wt : void 0;
                for (s.set(t, e), s.set(e, t); ++u < a;) {
                    var f = t[u],
                        d = e[u];
                    if (i) var g = o ? i(d, f, u, e, t, s) : i(f, d, u, t, e, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        l = !1;
                        break
                    }
                    if (p) {
                        if (!L(e, (function(t, e) {
                                if (o = e, !p.has(o) && (f === t || n(f, t, r, i, s))) return p.push(e);
                                var o
                            }))) {
                            l = !1;
                            break
                        }
                    } else if (f !== d && !n(f, d, r, i, s)) {
                        l = !1;
                        break
                    }
                }
                return s.delete(t), s.delete(e), l
            }

            function Rt(t) {
                return function(t, e, r) {
                    var i = e(t);
                    return zt(t) ? i : function(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }(i, r(t))
                }(t, Kt, Nt)
            }

            function At(t, e) {
                var r = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }

            function jt(t, e) {
                var r = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return Ot(r) ? r : void 0
            }
            vt.prototype.clear = function() {
                this.__data__ = ct ? ct(null) : {}, this.size = 0
            }, vt.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, vt.prototype.get = function(t) {
                var e = this.__data__;
                if (ct) {
                    var r = e[t];
                    return r === i ? void 0 : r
                }
                return B.call(e, t) ? e[t] : void 0
            }, vt.prototype.has = function(t) {
                var e = this.__data__;
                return ct ? void 0 !== e[t] : B.call(e, t)
            }, vt.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = ct && void 0 === e ? i : e, this
            }, yt.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, yt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = Et(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : Q.call(e, r, 1), --this.size, !0)
            }, yt.prototype.get = function(t) {
                var e = this.__data__,
                    r = Et(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, yt.prototype.has = function(t) {
                return Et(this.__data__, t) > -1
            }, yt.prototype.set = function(t, e) {
                var r = this.__data__,
                    i = Et(r, t);
                return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
            }, mt.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new vt,
                    map: new(nt || yt),
                    string: new vt
                }
            }, mt.prototype.delete = function(t) {
                var e = At(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, mt.prototype.get = function(t) {
                return At(this, t).get(t)
            }, mt.prototype.has = function(t) {
                return At(this, t).has(t)
            }, mt.prototype.set = function(t, e) {
                var r = At(this, t),
                    i = r.size;
                return r.set(t, e), this.size += r.size == i ? 0 : 1, this
            }, wt.prototype.add = wt.prototype.push = function(t) {
                return this.__data__.set(t, i), this
            }, wt.prototype.has = function(t) {
                return this.__data__.has(t)
            }, _t.prototype.clear = function() {
                this.__data__ = new yt, this.size = 0
            }, _t.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, _t.prototype.get = function(t) {
                return this.__data__.get(t)
            }, _t.prototype.has = function(t) {
                return this.__data__.has(t)
            }, _t.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof yt) {
                    var i = r.__data__;
                    if (!nt || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new mt(i)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var Nt = tt ? function(t) {
                    return null == t ? [] : (t = Object(t), function(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }(tt(t), (function(e) {
                        return Y.call(t, e)
                    })))
                } : function() {
                    return []
                },
                Tt = It;

            function Lt(t, e) {
                return !!(e = null == e ? n : e) && ("number" == typeof t || I.test(t)) && t > -1 && t % 1 == 0 && t < e
            }

            function Mt(t) {
                if (null != t) {
                    try {
                        return V.call(t)
                    } catch (e) {}
                    try {
                        return t + ""
                    } catch (e) {}
                }
                return ""
            }

            function Dt(t, e) {
                return t === e || t !== t && e !== e
            }(it && Tt(new it(new ArrayBuffer(1))) != b || nt && Tt(new nt) != l || st && Tt(st.resolve()) != d || ot && Tt(new ot) != v || at && Tt(new at) != w) && (Tt = function(t) {
                var e = It(t),
                    r = e == f ? t.constructor : void 0,
                    i = r ? Mt(r) : "";
                if (i) switch (i) {
                    case ht:
                        return b;
                    case ut:
                        return l;
                    case lt:
                        return d;
                    case pt:
                        return v;
                    case ft:
                        return w
                }
                return e
            });
            var qt = Pt(function() {
                    return arguments
                }()) ? Pt : function(t) {
                    return Vt(t) && B.call(t, "callee") && !Y.call(t, "callee")
                },
                zt = Array.isArray;
            var kt = et || function() {
                return !1
            };

            function $t(t) {
                if (!Ht(t)) return !1;
                var e = It(t);
                return e == u || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }

            function Ut(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
            }

            function Ht(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function Vt(t) {
                return null != t && "object" == typeof t
            }
            var Bt = T ? function(t) {
                return function(e) {
                    return t(e)
                }
            }(T) : function(t) {
                return Vt(t) && Ut(t.length) && !!P[It(t)]
            };

            function Kt(t) {
                return null != (e = t) && Ut(e.length) && !$t(e) ? bt(t) : xt(t);
                var e
            }
            t.exports = function(t, e) {
                return St(t, e)
            }
        },
        85346: function(t) {
            "use strict";

            function e(t) {
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            t.exports = function(t, r, i) {
                var n = i && i.stringify || e;
                if ("object" === typeof t && null !== t) {
                    var s = r.length + 1;
                    if (1 === s) return t;
                    var o = new Array(s);
                    o[0] = n(t);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof t) return t;
                var c = r.length;
                if (0 === c) return t;
                for (var h = "", u = 0, l = -1, p = t && t.length || 0, f = 0; f < p;) {
                    if (37 === t.charCodeAt(f) && f + 1 < p) {
                        switch (l = l > -1 ? l : 0, t.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                l < f && (h += t.slice(l, f)), h += Number(r[u]), l = f + 2, f++;
                                break;
                            case 105:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                l < f && (h += t.slice(l, f)), h += Math.floor(Number(r[u])), l = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= c) break;
                                if (void 0 === r[u]) break;
                                l < f && (h += t.slice(l, f));
                                var d = typeof r[u];
                                if ("string" === d) {
                                    h += "'" + r[u] + "'", l = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    h += r[u].name || "<anonymous>", l = f + 2, f++;
                                    break
                                }
                                h += n(r[u]), l = f + 2, f++;
                                break;
                            case 115:
                                if (u >= c) break;
                                l < f && (h += t.slice(l, f)), h += String(r[u]), l = f + 2, f++;
                                break;
                            case 37:
                                l < f && (h += t.slice(l, f)), h += "%", l = f + 2, f++, u--
                        }++u
                    }++f
                }
                if (-1 === l) return t;
                l < p && (h += t.slice(l));
                return h
            }
        },
        63954: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.safeJsonParse = function(t) {
                if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return t
                }
            }, e.safeJsonStringify = function(t) {
                return "string" === typeof t ? t : JSON.stringify(t, ((t, e) => "undefined" === typeof e ? null : e))
            }
        },
        57026: function(t) {
            "use strict";
            t.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        36559: function(t, e, r) {
            "use strict";
            const i = r(85346);
            t.exports = o;
            const n = function() {
                    function t(t) {
                        return "undefined" !== typeof t && t
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (e) {
                        return t(self) || t(window) || t(this) || {}
                    }
                }().console || {},
                s = {
                    mapHttpRequest: d,
                    mapHttpResponse: d,
                    wrapRequestSerializer: g,
                    wrapResponseSerializer: g,
                    wrapErrorSerializer: g,
                    req: d,
                    res: d,
                    err: function(t) {
                        const e = {
                            type: t.constructor.name,
                            msg: t.message,
                            stack: t.stack
                        };
                        for (const r in t) void 0 === e[r] && (e[r] = t[r]);
                        return e
                    }
                };

            function o(t) {
                (t = t || {}).browser = t.browser || {};
                const e = t.browser.transmit;
                if (e && "function" !== typeof e.send) throw Error("pino: transmit option must have a send function");
                const r = t.browser.write || n;
                t.browser.write && (t.browser.asObject = !0);
                const i = t.serializers || {},
                    s = function(t, e) {
                        if (Array.isArray(t)) return t.filter((function(t) {
                            return "!stdSerializers.err" !== t
                        }));
                        return !0 === t && Object.keys(e)
                    }(t.browser.serialize, i);
                let c = t.browser.serialize;
                Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
                "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = "silent");
                const l = t.level || "info",
                    d = Object.create(r);
                d.log || (d.log = v), Object.defineProperty(d, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(d, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(t) {
                        if ("silent" !== t && !this.levels.values[t]) throw Error("unknown level " + t);
                        this._level = t, a(g, d, "error", "log"), a(g, d, "fatal", "error"), a(g, d, "warn", "error"), a(g, d, "info", "log"), a(g, d, "debug", "log"), a(g, d, "trace", "log")
                    }
                });
                const g = {
                    transmit: e,
                    serialize: s,
                    asObject: t.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: f(t)
                };
                return d.levels = o.levels, d.level = l, d.setMaxListeners = d.getMaxListeners = d.emit = d.addListener = d.on = d.prependListener = d.once = d.prependOnceListener = d.removeListener = d.removeAllListeners = d.listeners = d.listenerCount = d.eventNames = d.write = d.flush = v, d.serializers = i, d._serialize = s, d._stdErrSerialize = c, d.child = function(r, n) {
                    if (!r) throw new Error("missing bindings for child Pino");
                    n = n || {}, s && r.serializers && (n.serializers = r.serializers);
                    const o = n.serializers;
                    if (s && o) {
                        var a = Object.assign({}, i, o),
                            c = !0 === t.browser.serialize ? Object.keys(a) : s;
                        delete r.serializers, h([r], c, a, this._stdErrSerialize)
                    }

                    function l(t) {
                        this._childLevel = 1 + (0 | t._childLevel), this.error = u(t, r, "error"), this.fatal = u(t, r, "fatal"), this.warn = u(t, r, "warn"), this.info = u(t, r, "info"), this.debug = u(t, r, "debug"), this.trace = u(t, r, "trace"), a && (this.serializers = a, this._serialize = c), e && (this._logEvent = p([].concat(t._logEvent.bindings, r)))
                    }
                    return l.prototype = this, new l(this)
                }, e && (d._logEvent = p()), d
            }

            function a(t, e, r, i) {
                const s = Object.getPrototypeOf(e);
                e[r] = e.levelVal > e.levels.values[r] ? v : s[r] ? s[r] : n[r] || n[i] || v,
                    function(t, e, r) {
                        if (!t.transmit && e[r] === v) return;
                        e[r] = (i = e[r], function() {
                            const s = t.timestamp(),
                                a = new Array(arguments.length),
                                u = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                            for (var p = 0; p < a.length; p++) a[p] = arguments[p];
                            if (t.serialize && !t.asObject && h(a, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? i.call(u, c(this, r, a, s)) : i.apply(u, a), t.transmit) {
                                const i = t.transmit.level || e.level,
                                    n = o.levels.values[i],
                                    c = o.levels.values[r];
                                if (c < n) return;
                                l(this, {
                                    ts: s,
                                    methodLevel: r,
                                    methodValue: c,
                                    transmitLevel: i,
                                    transmitValue: o.levels.values[t.transmit.level || e.level],
                                    send: t.transmit.send,
                                    val: e.levelVal
                                }, a)
                            }
                        });
                        var i
                    }(t, e, r)
            }

            function c(t, e, r, n) {
                t._serialize && h(r, t._serialize, t.serializers, t._stdErrSerialize);
                const s = r.slice();
                let a = s[0];
                const c = {};
                n && (c.time = n), c.level = o.levels.values[e];
                let u = 1 + (0 | t._childLevel);
                if (u < 1 && (u = 1), null !== a && "object" === typeof a) {
                    for (; u-- && "object" === typeof s[0];) Object.assign(c, s.shift());
                    a = s.length ? i(s.shift(), s) : void 0
                } else "string" === typeof a && (a = i(s.shift(), s));
                return void 0 !== a && (c.msg = a), c
            }

            function h(t, e, r, i) {
                for (const n in t)
                    if (i && t[n] instanceof Error) t[n] = o.stdSerializers.err(t[n]);
                    else if ("object" === typeof t[n] && !Array.isArray(t[n]))
                    for (const i in t[n]) e && e.indexOf(i) > -1 && i in r && (t[n][i] = r[i](t[n][i]))
            }

            function u(t, e, r) {
                return function() {
                    const i = new Array(1 + arguments.length);
                    i[0] = e;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return t[r].apply(this, i)
                }
            }

            function l(t, e, r) {
                const i = e.send,
                    n = e.ts,
                    s = e.methodLevel,
                    o = e.methodValue,
                    a = e.val,
                    c = t._logEvent.bindings;
                h(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = n, t._logEvent.messages = r.filter((function(t) {
                    return -1 === c.indexOf(t)
                })), t._logEvent.level.label = s, t._logEvent.level.value = o, i(s, t._logEvent, a), t._logEvent = p(c)
            }

            function p(t) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: t || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function f(t) {
                return "function" === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? y : m
            }

            function d() {
                return {}
            }

            function g(t) {
                return t
            }

            function v() {}

            function y() {
                return !1
            }

            function m() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
                nullTime: y,
                epochTime: m,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);