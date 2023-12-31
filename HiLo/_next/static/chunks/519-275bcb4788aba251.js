"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [519], {
        78986: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = s(41799),
                n = s(85893),
                a = s(9008),
                i = s.n(a),
                l = s(11163);
            var o = {
                title: "Just Coin Flip - 2.5X Your Solana",
                siteName: "Just Coin Flip",
                description: "Play now for the chance to 2.5X your $SOL on a single coin flip.",
                url: "https://coinflip-gold.vercel.app",
                type: "website",
                robots: "follow, index",
                image: ""
            };

            function c(e) {
                var t = (0, l.useRouter)(),
                    s = (0, r.Z)({}, o, e);
                return s.title = "Home" !== e.templateTitle ? "".concat(e.templateTitle, " - ").concat(s.siteName) : "Home" === e.templateTitle ? "".concat(s.siteName, " - ").concat(s.description) : s.title, s.image = function(e) {
                    var t = e.siteName,
                        s = e.templateTitle,
                        r = e.description,
                        n = e.logo,
                        a = encodeURIComponent(void 0 === n ? "https://og.thcl.dev/images/logo.jpg" : n),
                        i = encodeURIComponent(t.trim()),
                        l = s ? encodeURIComponent(s.trim()) : void 0,
                        o = encodeURIComponent(r.trim());
                    return "https://og.thcl.dev/api/general?siteName=".concat(i, "&description=").concat(o, "&logo=").concat(a).concat(l ? "&templateTitle=".concat(l) : "")
                }({
                    description: s.description,
                    siteName: e.templateTitle ? s.siteName : s.title,
                    templateTitle: e.templateTitle
                }), (0, n.jsxs)(i(), {
                    children: [(0, n.jsx)("title", {
                        children: s.title
                    }), (0, n.jsx)("meta", {
                        name: "robots",
                        content: s.robots
                    }), (0, n.jsx)("meta", {
                        content: s.description,
                        name: "description"
                    }), (0, n.jsx)("meta", {
                        property: "og:url",
                        content: "".concat(s.url).concat(t.asPath)
                    }), (0, n.jsx)("link", {
                        rel: "canonical",
                        href: "".concat(s.url).concat(t.asPath)
                    }), (0, n.jsx)("meta", {
                        property: "og:type",
                        content: s.type
                    }), (0, n.jsx)("meta", {
                        property: "og:site_name",
                        content: s.siteName
                    }), (0, n.jsx)("meta", {
                        property: "og:description",
                        content: s.description
                    }), (0, n.jsx)("meta", {
                        property: "og:title",
                        content: s.title
                    }), (0, n.jsx)("meta", {
                        name: "image",
                        property: "og:image",
                        content: s.image
                    }), (0, n.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, n.jsx)("meta", {
                        name: "twitter:site",
                        content: "@justcoinflip"
                    }), (0, n.jsx)("meta", {
                        name: "twitter:title",
                        content: s.title
                    }), (0, n.jsx)("meta", {
                        name: "twitter:description",
                        content: s.description
                    }), (0, n.jsx)("meta", {
                        name: "twitter:image",
                        content: s.image
                    }), s.date && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("meta", {
                            property: "article:published_time",
                            content: s.date
                        }), (0, n.jsx)("meta", {
                            name: "publish_date",
                            property: "og:publish_date",
                            content: s.date
                        }), (0, n.jsx)("meta", {
                            name: "author",
                            property: "article:author",
                            content: "Theodorus Clarence"
                        })]
                    }), x.map((function(e) {
                        return (0, n.jsx)("link", (0, r.Z)({}, e), e.href)
                    })), (0, n.jsx)("link", {
                        rel: "mask-icon",
                        href: "/favicon/safari-pinned-tab.svg",
                        color: "#5bbad5"
                    }), (0, n.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }), (0, n.jsx)("meta", {
                        name: "theme-color",
                        content: "#141b2b"
                    })]
                })
            }
            var x = [{
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicon/apple-icon-57x57.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/favicon/apple-icon-60x60.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicon/apple-icon-72x72.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicon/apple-icon-76x76.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicon/apple-icon-114x114.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicon/apple-icon-120x120.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicon/apple-icon-144x144.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicon/apple-icon-152x152.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-icon-180x180.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicon/android-icon-192x192.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/favicon/favicon-96x96.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }, {
                rel: "manifest",
                href: "/favicon/manifest.json"
            }]
        },
        18519: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return w
                }
            });
            var r = s(85893),
                n = s(67294),
                a = s(47568),
                i = s(828),
                l = s(10092);

            function o(e) {
                var t = e.width,
                    s = e.height,
                    n = e.className;
                return (0, r.jsxs)("svg", {
                    id: "Livello_1",
                    "data-name": "Livello 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    width: t || 37,
                    height: s || 37,
                    viewBox: "0 0 240 240",
                    children: [(0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: "linear-gradient",
                            x1: "120",
                            y1: "240",
                            x2: "120",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                "stop-color": "#1d93d2"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#38b0e3"
                            })]
                        })
                    }), (0, r.jsx)("title", {
                        children: "Telegram_logo"
                    }), (0, r.jsx)("circle", {
                        cx: "120",
                        cy: "120",
                        r: "120",
                        fill: "url(#linear-gradient)"
                    }), (0, r.jsx)("path", {
                        d: "M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z",
                        fill: "#c8daea"
                    }), (0, r.jsx)("path", {
                        d: "M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763",
                        fill: "#a9c6d8"
                    }), (0, r.jsx)("path", {
                        d: "M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z",
                        fill: "#fff"
                    })]
                })
            }

            function c(e) {
                var t = e.width,
                    s = e.height,
                    n = e.className;
                return (0, r.jsxs)("svg", {
                    className: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    x: "0px",
                    y: "0px",
                    width: t || 37,
                    height: s || 37,
                    viewBox: "0 0 48 48",
                    style: {
                        fill: "#undefined"
                    },
                    children: [(0, r.jsxs)("linearGradient", {
                        id: "_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1",
                        x1: "10.341",
                        x2: "40.798",
                        y1: "8.312",
                        y2: "38.769",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, r.jsx)("stop", {
                            offset: 0,
                            stopColor: "#2aa4f4"
                        }), (0, r.jsx)("stop", {
                            offset: 1,
                            stopColor: "#007ad9"
                        })]
                    }), (0, r.jsx)("path", {
                        fill: "url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)",
                        d: "M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758 c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582 c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322 c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419 c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963 c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41 c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                    })]
                })
            }
            var x = s(41612);

            function d(e) {
                var t = e.width,
                    s = e.height,
                    n = e.className;
                return (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t || 403,
                    height: s || 55,
                    className: (0, x.Z)("", n),
                    viewBox: "0 0 403 69",
                    children: [(0, r.jsxs)("defs", {
                        children: [(0, r.jsx)("path", {
                            d: "M30.71 45.655c12.864 0 23.293-8.775 23.293-19.599 0-10.823-10.429-19.598-23.293-19.598-12.864 0-23.293 8.775-23.293 19.598 0 10.824 10.429 19.599 23.293 19.599z",
                            id: "a"
                        }), (0, r.jsx)("mask", {
                            id: "b",
                            maskContentUnits: "userSpaceOnUse",
                            maskUnits: "objectBoundingBox",
                            x: 0,
                            y: 0,
                            width: 46.5851703,
                            height: 39.1961017,
                            fill: "#fff",
                            children: (0, r.jsx)("use", {
                                xlinkHref: "#a"
                            })
                        }), (0, r.jsx)("path", {
                            d: "M0 0c1.424 4.255 3.534 6.383 6.33 6.383 2.796 0 4.906-2.128 6.33-6.383H0z",
                            id: "c"
                        }), (0, r.jsxs)("filter", {
                            x: "-11.3%",
                            y: "-13.6%",
                            width: "122.6%",
                            height: "127.2%",
                            filterUnits: "objectBoundingBox",
                            id: "e",
                            children: [(0, r.jsx)("feOffset", { in: "SourceAlpha",
                                result: "shadowOffsetOuter1"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: 1,
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                            }), (0, r.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0.5 0",
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1"
                            }), (0, r.jsxs)("feMerge", {
                                children: [(0, r.jsx)("feMergeNode", { in: "shadowMatrixOuter1"
                                }), (0, r.jsx)("feMergeNode", { in: "SourceGraphic"
                                })]
                            })]
                        }), (0, r.jsxs)("filter", {
                            x: "-21.2%",
                            y: "-9.7%",
                            width: "142.4%",
                            height: "119.4%",
                            filterUnits: "objectBoundingBox",
                            id: "f",
                            children: [(0, r.jsx)("feOffset", { in: "SourceAlpha",
                                result: "shadowOffsetOuter1"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: 1,
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                            }), (0, r.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0.5 0",
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1"
                            }), (0, r.jsxs)("feMerge", {
                                children: [(0, r.jsx)("feMergeNode", { in: "shadowMatrixOuter1"
                                }), (0, r.jsx)("feMergeNode", { in: "SourceGraphic"
                                })]
                            })]
                        }), (0, r.jsxs)("filter", {
                            x: "-12.1%",
                            y: "-13.8%",
                            width: "124.2%",
                            height: "127.7%",
                            filterUnits: "objectBoundingBox",
                            id: "g",
                            children: [(0, r.jsx)("feOffset", { in: "SourceAlpha",
                                result: "shadowOffsetOuter1"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: 1,
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                            }), (0, r.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0 0.872763813 0 0 0 0.5 0",
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1"
                            }), (0, r.jsxs)("feMerge", {
                                children: [(0, r.jsx)("feMergeNode", { in: "shadowMatrixOuter1"
                                }), (0, r.jsx)("feMergeNode", { in: "SourceGraphic"
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("g", {
                        stroke: "none",
                        strokeWidth: 1,
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsxs)("g", {
                            transform: "translate(3 3)",
                            children: [(0, r.jsx)("ellipse", {
                                fill: "#07A05E",
                                cx: 30.7100476,
                                cy: 30.0651916,
                                rx: 29.1438626,
                                ry: 24.4975636
                            }), (0, r.jsx)("ellipse", {
                                fill: "#26E08F",
                                cx: 30.7100476,
                                cy: 26.2792046,
                                rx: 29.1438626,
                                ry: 24.4975636
                            }), (0, r.jsx)("use", {
                                stroke: "#40EDA2",
                                mask: "url(#b)",
                                strokeWidth: 2.88069729,
                                strokeDasharray: 2.160523018238056,
                                xlinkHref: "#a"
                            }), (0, r.jsxs)("g", {
                                transform: "translate(20.47 18.707)",
                                children: [(0, r.jsx)("ellipse", {
                                    fill: "#1A2C38",
                                    cx: 19.4513054,
                                    cy: 1.90660331,
                                    rx: 1.92836217,
                                    ry: 1.90660331
                                }), (0, r.jsx)("ellipse", {
                                    fill: "#1A2C38",
                                    cx: 1.92836217,
                                    cy: 1.90660331,
                                    rx: 1.92836217,
                                    ry: 1.90660331
                                }), (0, r.jsxs)("g", {
                                    transform: "translate(4.527 8.538)",
                                    children: [(0, r.jsx)("mask", {
                                        id: "d",
                                        fill: "#fff",
                                        children: (0, r.jsx)("use", {
                                            xlinkHref: "#c"
                                        })
                                    }), (0, r.jsx)("use", {
                                        fill: "#1A2C38",
                                        xlinkHref: "#c"
                                    }), (0, r.jsx)("ellipse", {
                                        fill: "#DC4F58",
                                        mask: "url(#d)",
                                        cx: 4.30169393,
                                        cy: 9.63082744,
                                        rx: 8.93401249,
                                        ry: 8.6969679
                                    })]
                                })]
                            }), (0, r.jsxs)("g", {
                                filter: "url(#e)",
                                fill: "#FFF",
                                children: [(0, r.jsx)("path", {
                                    d: "M26.26 4.416c1.069-.247 2.27-.37 3.602-.37 1.33 0 2.533.122 3.611.368a1.059 1.059 0 001.276-.837l.375-1.994A1.06 1.06 0 0034.245.34 28.835 28.835 0 0029.862 0c-1.477 0-2.967.182-4.469.546a1.058 1.058 0 00-.787 1.245l.38 1.81a1.059 1.059 0 001.274.815z"
                                }), (0, r.jsx)("path", {
                                    d: "M7.916 11.202c1.06-.24 2.252-.356 3.576-.346 1.313.01 2.504.14 3.573.394a1.057 1.057 0 001.28-.846l.36-2.012a1.059 1.059 0 00-.856-1.229l-.015-.002a28.392 28.392 0 00-4.373-.377 18.455 18.455 0 00-4.416.512c-.56.132-.913.688-.792 1.251l.396 1.849a1.06 1.06 0 001.267.806z",
                                    transform: "rotate(-41 11.466 9.171)"
                                }), (0, r.jsx)("path", {
                                    d: "M-.485 25.85c1.047-.245 2.221-.366 3.523-.364 1.3.003 2.477.127 3.533.375a1.058 1.058 0 001.28-.841l.373-2.057a1.058 1.058 0 00-.857-1.227l-.017-.004a27.615 27.615 0 00-4.32-.352 18.086 18.086 0 00-4.394.544c-.552.135-.899.683-.785 1.24l.385 1.87c.12.573.68.94 1.253.821l.026-.006z",
                                    transform: "rotate(-83 3.032 23.774)"
                                })]
                            }), (0, r.jsxs)("g", {
                                filter: "url(#f)",
                                transform: "matrix(-1 0 0 1 61.194 2.426)",
                                fill: "#FFF",
                                children: [(0, r.jsx)("path", {
                                    d: "M9.581 7.187c1.055-.242 2.24-.361 3.555-.356 1.309.004 2.495.13 3.558.378a1.058 1.058 0 001.269-.795l.01-.044.365-2.005a1.057 1.057 0 00-.854-1.23l-.018-.003a28.238 28.238 0 00-4.344-.356 18.446 18.446 0 00-4.41.529 1.059 1.059 0 00-.786 1.247l.384 1.824a1.06 1.06 0 001.271.811z",
                                    transform: "rotate(-37 13.124 5.144)"
                                }), (0, r.jsx)("path", {
                                    d: "M-.252 21.82c1.048-.245 2.224-.366 3.529-.364 1.298.001 2.476.124 3.532.37a1.06 1.06 0 001.282-.844l.368-2.016a1.06 1.06 0 00-.875-1.238 27.807 27.807 0 00-4.313-.347 18.222 18.222 0 00-4.392.543c-.553.134-.9.681-.786 1.239l.38 1.84a1.059 1.059 0 001.275.816z",
                                    transform: "rotate(-80 3.272 19.755)"
                                }), (0, r.jsx)("path", {
                                    d: "M3.134 37.457c1.05-.248 2.226-.374 3.53-.378 1.304-.005 2.485.114 3.543.354a1.06 1.06 0 001.27-.794l.009-.039.38-2.022a1.058 1.058 0 00-.845-1.236l-.033-.006a27.881 27.881 0 00-4.31-.325c-1.46.005-2.931.193-4.416.565-.548.139-.891.683-.779 1.237l.371 1.828a1.06 1.06 0 001.28.816z",
                                    transform: "rotate(-120 6.676 35.386)"
                                })]
                            }), (0, r.jsxs)("g", {
                                filter: "url(#g)",
                                transform: "scale(1 -1) rotate(25 147.628 4.164)",
                                fill: "#FFF",
                                children: [(0, r.jsx)("path", {
                                    d: "M23.861 5.054c1.063-.245 2.256-.367 3.58-.365 1.319.002 2.513.126 3.583.372a1.058 1.058 0 001.277-.841l.37-1.993A1.058 1.058 0 0031.796.99a28.542 28.542 0 00-4.36-.346 18.69 18.69 0 00-4.437.539 1.058 1.058 0 00-.787 1.244l.381 1.811a1.057 1.057 0 001.27.816z",
                                    transform: "rotate(-7 27.436 3.002)"
                                }), (0, r.jsx)("path", {
                                    d: "M8.682 12.16c1.054-.24 2.239-.358 3.554-.352 1.31.007 2.496.135 3.56.384a1.058 1.058 0 001.28-.846l.362-2a1.06 1.06 0 00-.875-1.236 28.243 28.243 0 00-4.347-.363 18.417 18.417 0 00-4.405.522c-.56.132-.91.687-.791 1.25l.387 1.828c.12.572.682.937 1.255.817l.02-.004z",
                                    transform: "rotate(-41 12.219 10.122)"
                                }), (0, r.jsx)("path", {
                                    d: "M-.246 25.257c1.048-.244 2.225-.366 3.53-.363 1.3.002 2.477.126 3.533.372a1.057 1.057 0 001.27-.792l.01-.045.37-2.037a1.057 1.057 0 00-.854-1.229l-.018-.003a27.75 27.75 0 00-4.317-.35 18.175 18.175 0 00-4.394.542 1.058 1.058 0 00-.783 1.241l.38 1.844a1.057 1.057 0 001.273.82z",
                                    transform: "rotate(-80 3.279 23.19)"
                                })]
                            })]
                        }), (0, r.jsx)("text", {
                            fontFamily: "Gore-Regular",
                            fontSize: 40.5502804,
                            fontWeight: "normal",
                            letterSpacing: -.323324774,
                            fill: "#FFF",
                            transform: "translate(3 3)",
                            children: (0, r.jsx)("tspan", {
                                x: 71.3608928,
                                y: 41.7389833,
                                children: "Hilo"
                            })
                        })]
                    })]
                })
            }

            function f(e) {
                var t = e.width,
                    s = e.height,
                    n = e.className;
                return (0, r.jsx)("svg", {
                    fill: "none",
                    className: n,
                    viewBox: "0 -.058 754.779 867.058",
                    width: t || 37,
                    height: s || 37,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        "clip-rule": "evenodd",
                        d: "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z",
                        fill: "#05a3c9",
                        "fill-rule": "evenodd"
                    })
                })
            }

            function h() {
                var e = (0, i.Z)(n.useState(""), 2),
                    t = e[0],
                    s = e[1];
                n.useEffect((function() {
                    x(), setInterval(x, 3e4)
                }), []);
                var x = function() {
                    var e = (0, a.Z)((function() {
                        var e, t, r;
                        return (0, l.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 3, , 4]), [4, fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")];
                                case 1:
                                    return [4, n.sent().json()];
                                case 2:
                                    return e = n.sent(), t = null === e || void 0 === e ? void 0 : e.price.slice(0, (null === e || void 0 === e ? void 0 : e.price.indexOf(".")) + 3), s(t), [3, 4];
                                case 3:
                                    return r = n.sent(), console.log(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, r.jsx)("footer", {
                    className: "footer ",
                    children: (0, r.jsxs)("div", {
                        className: "container mx-auto grid grid-cols-12 gap-5 lg:gap-0",
                        children: [(0, r.jsx)("div", {
                            className: "col-span-12 flex justify-center lg:col-span-3 lg:justify-start",
                            children: (0, r.jsx)("span", {
                                className: "logoText flex select-none",
                                children: (0, r.jsx)(d, {
                                    className: "py-1",
                                    width: 250,
                                    height: 55
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "col-span-12 flex justify-center lg:col-span-4 lg:justify-start",
                            children: (0, r.jsx)("span", {
                                className: "footerText flex items-center text-[4vw] text-white lg:text-xl",
                                children: "\xa9 2023 $HILO | All Rights Reserved."
                            })
                        }), (0, r.jsx)("div", {
                            className: "col-span-12 flex justify-center lg:col-span-3 lg:justify-start",
                            children: (0, r.jsxs)("span", {
                                className: "footerText footerGradient flex items-center",
                                children: ["1 ETH = $", t]
                            })
                        }), (0, r.jsx)("div", {
                            className: "col-span-12 flex justify-center lg:col-span-2 lg:justify-center",
                            children: (0, r.jsxs)("div", {
                                className: "social-icon-cn flex justify-evenly",
                                children: [(0, r.jsx)("a", {
                                    href: "https://twitter.com/HiloGameio",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, r.jsx)("span", {
                                        children: (0, r.jsx)(c, {
                                            className: "mx-2 pb-1"
                                        })
                                    })
                                }), (0, r.jsx)("a", {
                                    href: "https://t.me/HiloGameio",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, r.jsx)("span", {
                                        children: (0, r.jsx)(o, {
                                            className: "mx-2 pb-1"
                                        })
                                    })
                                }), (0, r.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, r.jsx)("span", {
                                        children: (0, r.jsx)(f, {
                                            className: "mx-2 pb-1"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
            var p = s(84463),
                u = s(11163),
                m = s(50555),
                j = "https://docs.hilogame.io/";

            function g() {
                var e = (0, u.useRouter)(),
                    t = (0, i.Z)(n.useState(!1), 2),
                    s = t[0],
                    a = t[1];
                return (0, r.jsxs)("nav", {
                    className: "navbar sticky top-0 z-20 mx-auto bg-gray-800",
                    children: [(0, r.jsx)("div", {
                        className: "mx-auto px-4 sm:px-6 lg:px-8",
                        children: (0, r.jsxs)("div", {
                            className: "container mx-auto flex h-16 items-center justify-between",
                            children: [(0, r.jsx)("div", {
                                className: "flex items-center justify-between",
                                children: (0, r.jsx)("div", {
                                    className: "flex-shrink-0 cursor-pointer select-none",
                                    onClick: function() {
                                        return e.push("/")
                                    },
                                    children: (0, r.jsx)(d, {
                                        className: "w-40 py-1 md:w-64"
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: "-mr-2 flex items-center lg:hidden",
                                children: [(0, r.jsx)("a", {
                                    href: j,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, r.jsx)("div", {
                                        className: "flex cursor-pointer items-center py-3",
                                        children: (0, r.jsx)("p", {
                                            className: "mt-1 ml-2 flex items-center rounded-lg px-3 py-1 text-base font-bold text-white hover:bg-gray-700",
                                            children: "Guide"
                                        })
                                    })
                                }), (0, r.jsxs)("button", {
                                    onClick: function() {
                                        return a(!s)
                                    },
                                    type: "button",
                                    className: "inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                    "aria-controls": "mobile-menu",
                                    "aria-expanded": "false",
                                    children: [(0, r.jsx)("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }), s ? (0, r.jsx)("svg", {
                                        className: "block h-6 w-6",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    }) : (0, r.jsx)("svg", {
                                        className: "block h-6 w-6",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, r.jsxs)("div", {
                                    className: "ml-10 flex items-center space-x-4",
                                    children: [(0, r.jsx)("a", {
                                        href: j,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, r.jsx)("div", {
                                            className: "flex cursor-pointer items-center py-3",
                                            children: (0, r.jsx)("p", {
                                                className: "mt-1 ml-2 flex items-center rounded-lg px-3 py-1 text-base font-bold text-white hover:bg-gray-700",
                                                children: "Guide"
                                            })
                                        })
                                    }), (0, r.jsx)(m.tn, {
                                        icon: "show",
                                        label: "Connect Wallet",
                                        balance: "show"
                                    })]
                                })
                            })]
                        })
                    }), (0, r.jsx)(p.u, {
                        show: s,
                        enter: "transition ease-out duration-100 transform",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition ease-in duration-75 transform",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: function(e) {
                            return (0, r.jsx)("div", {
                                className: "lg:hidden",
                                id: "mobile-menu",
                                children: (0, r.jsx)("div", {
                                    ref: e,
                                    className: "space-y-1 px-2 pt-2 pb-3 sm:px-3",
                                    children: (0, r.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0, r.jsx)(m.tn, {
                                            icon: "show",
                                            label: "Connect Wallet",
                                            balance: "show"
                                        })
                                    })
                                })
                            })
                        }
                    })]
                })
            }
            var v = s(78986);

            function w(e) {
                var t = e.children,
                    s = e.title;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(v.Z, {
                        templateTitle: s
                    }), (0, r.jsx)(g, {}), (0, r.jsx)("div", {
                        className: "container mx-auto",
                        children: t
                    }), (0, r.jsx)(h, {})]
                })
            }
        },
        41612: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = s(29815),
                n = s(86010),
                a = s(57851);

            function i() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.m)(n.Z.apply(void 0, (0, r.Z)(t)))
            }
        }
    }
]);