(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    20724: function (e, t, n) {
      "use strict";
      var i = n(64836);
      t.Z = void 0;
      var s = i(n(64938)),
        r = n(85893),
        o = (0, s.default)(
          (0, r.jsx)("path", {
            d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z",
          }),
          "ArrowBackIos"
        );
      t.Z = o;
    },
    13379: function (e, t, n) {
      "use strict";
      var i = n(64836);
      t.Z = void 0;
      var s = i(n(64938)),
        r = n(85893),
        o = (0, s.default)(
          (0, r.jsx)("path", {
            d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z",
          }),
          "ArrowForwardIos"
        );
      t.Z = o;
    },
    13282: function (e, t, n) {
      "use strict";
      var i = n(64836);
      t.Z = void 0;
      var s = i(n(64938)),
        r = n(85893),
        o = (0, s.default)(
          (0, r.jsx)("path", { d: "M3 3h18v18H3z" }),
          "Square"
        );
      t.Z = o;
    },
    45301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(56648);
        },
      ]);
    },
    5173: function (e, t, n) {
      "use strict";
      var i = n(85893),
        s = n(67294),
        r = n(46574),
        o = n(87357),
        a = n(69397),
        x = n(20724),
        l = n(13379);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.children,
          n = e.buttonTop,
          c = e.uniqueId,
          m = e.addMargin,
          p = e.contained,
          h = (0, s.useState)({ px: "0px" }),
          u = h[0],
          f = h[1],
          g = (0, s.useState)(0),
          j = g[0],
          Z = g[1],
          b = (0, s.useState)(!1),
          P = b[0],
          v = b[1],
          y = (0, s.useState)(!1),
          w = y[0],
          S = y[1],
          z = (0, s.useState)(460),
          k = z[0],
          E = z[1],
          I = function () {
            var e = document.getElementById(c + "pnProductNav").scrollLeft;
            Z(e);
          },
          T = function () {
            var e = document.getElementById(c + "pnArrowContainer"),
              t = 24;
            p || (t = e.getBoundingClientRect().left + (m || 0)),
              f(d({}, u, { px: t.toString() + "px" }));
            var n = document.getElementById("setWidth").offsetWidth;
            E(n - t);
          };
        (0, s.useEffect)(function () {
          var e = document.getElementById(c + "pnProductNav");
          return (
            e.addEventListener("scroll", I),
            function () {
              e.removeEventListener("scroll", I);
            }
          );
        }, []),
          (0, s.useEffect)(
            function () {
              var e = document.getElementById(c + "pnProductNav");
              !(function (e, t) {
                var n = t.getBoundingClientRect(),
                  i = Math.floor(n.right),
                  s = Math.floor(n.left),
                  r = e.getBoundingClientRect(),
                  o = Math.floor(r.right),
                  a = Math.floor(r.left);
                s > a && i < o
                  ? (v(!1), S(!1))
                  : a < s
                  ? S(!0)
                  : o > i
                  ? v(!0)
                  : (v(!0), S(!0));
              })(document.getElementById(c + "pnProductNavContents"), e);
            },
            [j]
          ),
          (0, s.useEffect)(function () {
            return (
              window.addEventListener("resize", T),
              T(),
              function () {
                return window.removeEventListener("resize", T);
              }
            );
          }, []),
          (0, s.useEffect)(function () {
            var e = setTimeout(function () {
              T();
            }, 1e3);
            return function () {
              clearTimeout(e);
            };
          }, []);
        var A = (0, s.useState)({ left: void 0, x: void 0 }),
          W = A[0],
          F = A[1],
          O = (0, s.useRef)({ left: void 0, x: void 0 });
        O.current = W;
        var C = function (e) {
            document.getElementById(c + "pnProductNav").scrollLeft =
              O.current.left - (e.clientX - O.current.x);
          },
          D = function (e) {
            var t = document.getElementById(c + "pnProductNav");
            (t.style.cursor = "grab"),
              (t.style.userSelect = "none"),
              document.removeEventListener("mousemove", C),
              document.removeEventListener("mouseup", D);
          },
          H = function () {
            document
              .getElementById(c + "pnProductNav")
              .scrollTo({ left: j - k, behavior: "smooth" });
          },
          B = function () {
            document
              .getElementById(c + "pnProductNav")
              .scrollTo({ left: j + k, behavior: "smooth" });
          },
          M = function () {
            return (0, i.jsx)(r.Z, {
              id: c + "pnArrowContainer",
              maxWidth: "lg",
              sx: { my: "32px" },
              children: (0, i.jsxs)(o.Z, {
                sx: n ? { display: "flex", justifyContent: "flex-end" } : null,
                children: [
                  (0, i.jsx)(a.Z, {
                    onClick: H,
                    disabled: P,
                    children: (0, i.jsx)(x.Z, {}),
                  }),
                  (0, i.jsx)(a.Z, {
                    onClick: B,
                    disabled: w,
                    children: (0, i.jsx)(l.Z, {}),
                  }),
                ],
              }),
            });
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.Z, {
              maxWidth: "lg",
              id: "setWidth",
              sx: { zIndex: "1", width: "100vw" },
            }),
            n ? (0, i.jsx)(M, {}) : null,
            (0, i.jsx)(o.Z, {
              sx: {
                overflowX: "auto",
                overflowY: "hidden",
                cursor: "grab",
                msOverflowStyle: "-ms-autohiding-scrollbar",
                WebkitOverflowScrolling: "touch",
                whiteSpace: "nowrap",
                "&::-webkit-scrollbar": { display: "none" },
                maxWidth: "100vw",
                ml: p ? "-24px" : "0",
              },
              id: c + "pnProductNav",
              onMouseDown: function (e) {
                return (function (e) {
                  var t = document.getElementById(c + "pnProductNav");
                  (t.style.cursor = "grabbing"),
                    (t.style.userSelect = "none"),
                    F({ left: j, x: e.clientX }),
                    document.addEventListener("mousemove", C),
                    document.addEventListener("mouseup", D);
                })(e);
              },
              children: (0, i.jsx)(o.Z, {
                id: c + "pnProductNavContents",
                display: "flex",
                sx: d({ width: "min-content", gap: "24px" }, u),
                children: t,
              }),
            }),
            n ? null : (0, i.jsx)(M, {}),
          ],
        });
      };
    },
    17098: function (e, t, n) {
      "use strict";
      var i = n(85893),
        s = (n(67294), n(48263)),
        r = n(23972),
        o = n(13282);
      t.Z = function (e) {
        var t = e.marginBottom,
          n = e.children;
        return (0, i.jsxs)(s.ZP, {
          container: !0,
          spacing: 1,
          direction: "row",
          alignItems: "flex-start",
          sx: { mb: t },
          children: [
            (0, i.jsx)(s.ZP, {
              item: !0,
              sx: { fontSize: "13px" },
              children: (0, i.jsx)(o.Z, { fontSize: "inherit" }),
            }),
            (0, i.jsx)(s.ZP, {
              item: !0,
              children: (0, i.jsx)(r.Z, {
                sx: { textTransform: "uppercase", fontSize: "12px" },
                children: n,
              }),
            }),
          ],
        });
      };
    },
    33828: function (e, t, n) {
      "use strict";
      var i = n(85893),
        s = (n(67294), n(87357)),
        r = n(46574),
        o = n(48263),
        a = n(23972),
        x = n(69397),
        l = n(93619);
      t.Z = function (e) {
        var t = e.sx;
        return (0, i.jsx)(s.Z, {
          sx: t,
          children: (0, i.jsxs)(r.Z, {
            sx: {
              position: "relative",
              px: "24px",
              pl: { xs: "60px", md: "24px" },
            },
            children: [
              (0, i.jsx)(s.Z, {
                sx: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  height: "730px",
                  width: "1467px",
                  transform: "translate(-50%, -50%)",
                  overflow: "hidden",
                  zIndex: "-1",
                  ml: "-24px",
                  display: { xs: "none", sm: "block" },
                },
                children: (0, i.jsx)("img", { src: "/quote-bg.png" }),
              }),
              (0, i.jsx)(s.Z, {
                sx: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  height: "730px",
                  width: "1467px",
                  transform: "translate(-50%, -50%)",
                  overflow: "hidden",
                  zIndex: "-1",
                  ml: "-24px",
                  display: { xs: "block", sm: "none" },
                },
                children: (0, i.jsx)("img", { src: "/quote-small.png" }),
              }),
              (0, i.jsxs)(o.ZP, {
                container: !0,
                sx: { pt: "120px", pb: "40px" },
                children: [
                  (0, i.jsx)(o.ZP, { item: !0, md: 3 }),
                  (0, i.jsx)(o.ZP, {
                    item: !0,
                    md: 7,
                    children: (0, i.jsx)(a.Z, {
                      sx: {
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: "400",
                        fontSize: { xs: "24px", md: "33px" },
                        lineHeight: { xs: "24px", md: "36px" },
                      },
                      children:
                        "Using our tools, individuals who don't have fair access to financial systems may take control and compete in a society that is imbalanced and stacked against them, without needing the approval of the wealthy or elite.",
                    }),
                  }),
                  (0, i.jsx)(o.ZP, { item: !0, md: 2 }),
                ],
              }),
              (0, i.jsxs)(o.ZP, {
                container: !0,
                sx: { pb: "120px" },
                children: [
                  (0, i.jsx)(o.ZP, { item: !0, md: 4 }),
                  (0, i.jsx)(o.ZP, {
                    item: !0,
                    md: 6,
                    children: (0, i.jsxs)(o.ZP, {
                      container: !0,
                      justifyContent: "flex-end",
                      rowSpacing: 2,
                      sx: { borderTop: "1px solid white" },
                      children: [
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          md: 6,
                          children: (0, i.jsx)(a.Z, {
                            sx: {
                              fontFamily: '"Inter", sans-serif',
                              fontSize: "10px",
                              fontWeight: "400",
                              lineHeight: "12px",
                              letterSpacing: "0.17px",
                            },
                            children:
                              "Through Paideia, DAOs can distribute governance tokens, raise funds, manage their treasury, create proposals on expenditures or governance, have a forum for stakeholders to discuss all ideas and proposals, and easily deploy their funds to achieve their goals.",
                          }),
                        }),
                        (0, i.jsxs)(o.ZP, {
                          item: !0,
                          md: 6,
                          sx: { textAlign: "right" },
                          children: [
                            (0, i.jsx)(a.Z, {
                              sx: {
                                fontFamily: '"Inter", sans-serif',
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0.17px",
                                textTransform: "uppercase",
                                mb: "12px",
                              },
                              children: "Paideia Whitepaper",
                            }),
                            (0, i.jsx)(x.Z, {
                              endIcon: (0, i.jsx)(l.Z, {}),
                              sx: { color: "#FC9E4F" },
                              href: "https://docs.paideia.im",
                              target: "_blank",
                              children: "Read More",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(o.ZP, { item: !0, md: 2 }),
                ],
              }),
            ],
          }),
        });
      };
    },
    56648: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var i = n(85893),
        s = n(46574),
        r = n(87357),
        o = n(48263),
        a = n(23972),
        x = n(47034),
        l = n(69397),
        c = n(93516),
        d = n(17098),
        m = n(34173);
      function p() {
        return (0, i.jsxs)(s.Z, {
          sx: { flexGrow: 1, px: "24px", mt: "-56px" },
          children: [
            (0, i.jsx)(r.Z, {
              sx: {
                position: "absolute",
                top: "0",
                left: { xs: "40%", sm: "50%", md: "45%", lg: "50%" },
                height: { xs: "100vh", md: "1261px" },
                minHeight: "600px",
                width: { xs: "2160px", md: "2160px" },
                transform: {
                  xs: "translate(-50%, 0)",
                  sm: "translate(-50%, 0)",
                  md: "translate(-50%, 0)",
                },
                overflow: "hidden",
                zIndex: "-1",
                ml: "-24px",
              },
              children: (0, i.jsx)("img", { src: "/hero-bg.png" }),
            }),
            (0, i.jsxs)(o.ZP, {
              container: !0,
              sx: {
                height: { xs: "100vh", md: "1000px" },
                minHeight: "600px",
                maxHeight: { xs: "1000px", md: "1200px" },
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "flex-end", md: "space-between" },
                alignItems: { xs: "flex-start", md: "center" },
              },
              children: [
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  children: [
                    (0, i.jsx)(d.Z, {
                      marginBottom: "80px",
                      children: "A Web3 DAO Management Software Suite",
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: {
                        fontSize: { xs: "3.5rem", md: "5rem" },
                        fontWeight: "500",
                        color: "rgba(0,0,0,0.0)",
                        lineHeight: 0.5,
                        textTransform: "uppercase",
                        fontFamily: '"Viga", sans-serif',
                      },
                      className: "outlineText",
                      children: ">>Create",
                    }),
                    (0, i.jsxs)(a.Z, {
                      sx: {
                        fontSize: { xs: "3.5rem", md: "5rem" },
                        fontWeight: "500",
                        color: "rgba(0,0,0,0.0)",
                        textTransform: "uppercase",
                        fontFamily: '"Viga", sans-serif',
                      },
                      className: "outlineText",
                      children: [
                        "Your",
                        " ",
                        (0, i.jsx)(a.Z, {
                          component: "span",
                          sx: {
                            fontSize: { xs: "3.5rem", md: "5rem" },
                            fontWeight: "500",
                            color: c.Cs.palette.text.primary,
                            textTransform: "uppercase",
                            fontFamily: '"Viga", sans-serif',
                          },
                          children: "DAO",
                        }),
                      ],
                    }),
                    (0, i.jsx)(x.Z, {
                      href: "/creation",
                      children: (0, i.jsx)(l.Z, {
                        variant: "contained",
                        children: "Create your dao",
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  children: [
                    (0, i.jsx)(a.Z, {
                      sx: {
                        transform: "rotate(-90deg)",
                        textTransform: "uppercase",
                        transformOrigin: "top left",
                        position: "absolute",
                        fontSize: "12px",
                        width: "100%",
                        display: { xs: "none", md: "inline-block" },
                      },
                      children: "Keep up with our socials",
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: {
                        fontSize: "14px",
                        mt: "64px",
                        textTransform: "uppercase",
                        display: { xs: "block", md: "none" },
                      },
                      children: "Follow our socials",
                    }),
                    (0, i.jsx)(o.ZP, {
                      container: !0,
                      spacing: { xs: 4, md: 0.5 },
                      direction: { xs: "row", md: "column" },
                      sx: {
                        pt: 3,
                        pb: { xs: 3, md: 0 },
                        fontSize: { xs: "24px", md: "16px" },
                      },
                      children: (0, i.jsx)(m.Z, {}),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(o.ZP, {
              container: !0,
              spacing: 3,
              sx: { mb: "120px", mt: { xs: 6, md: 0 } },
              children: [
                (0, i.jsx)(o.ZP, {
                  item: !0,
                  children: (0, i.jsxs)(o.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, i.jsx)(o.ZP, {
                        item: !0,
                        children: (0, i.jsx)(r.Z, {
                          sx: {
                            width: "6px",
                            minHeight: "100%",
                            background:
                              "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                          },
                        }),
                      }),
                      (0, i.jsxs)(o.ZP, {
                        item: !0,
                        children: [
                          (0, i.jsx)(a.Z, {
                            sx: {
                              textTransform: "uppercase",
                              fontSize: "12px",
                            },
                            children: "Strategic",
                          }),
                          (0, i.jsx)(a.Z, {
                            sx: {
                              textTransform: "uppercase",
                              fontSize: "12px",
                            },
                            children: "Partners",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.ZP, {
                  item: !0,
                  children: (0, i.jsxs)(o.ZP, {
                    container: !0,
                    justifyContent: "space-around",
                    spacing: 2,
                    sx: { color: "#777" },
                    children: [
                      (0, i.jsx)(o.ZP, {
                        item: !0,
                        children: "Ergo Foundation",
                      }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "ErgoDEX" }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "Azorus" }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "AnetaBTC" }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "Ergo-Lend" }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "ErgoGames.io" }),
                      (0, i.jsx)(o.ZP, { item: !0, children: "Swamp Audio" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var h = n(93619),
        u = {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "133%",
          color: c.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Space Grotesk", sans-serif',
          mt: "2px",
          mb: "16px",
        },
        f = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        };
      function g() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Z, {
              maxWidth: "xl",
              sx: { position: "relative", height: "100%", minWidth: "1500px" },
              children: (0, i.jsx)(r.Z, {
                sx: {
                  zIndex: "-1",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  height: "341px",
                  width: "20px",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                },
              }),
            }),
            (0, i.jsxs)(s.Z, {
              sx: { flexGrow: 1, px: "24px", position: "relative" },
              children: [
                (0, i.jsx)(r.Z, {
                  sx: {
                    position: "absolute",
                    top: "45%",
                    left: "35%",
                    height: "730px",
                    width: "1467px",
                    transform: "translate(-50%, 0)",
                    overflow: "hidden",
                    zIndex: "-1",
                    ml: "-24px",
                  },
                  children: (0, i.jsx)("img", { src: "/perks-bg.png" }),
                }),
                (0, i.jsxs)(o.ZP, {
                  container: !0,
                  sx: { pt: "60px", pb: "120px" },
                  children: [
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      md: 5,
                      children: (0, i.jsxs)(o.ZP, {
                        container: !0,
                        spacing: 3,
                        children: [
                          (0, i.jsx)(o.ZP, {
                            item: !0,
                            children: (0, i.jsx)(d.Z, { children: "Perks" }),
                          }),
                          (0, i.jsx)(o.ZP, {
                            item: !0,
                            children: (0, i.jsx)(a.Z, {
                              sx: {
                                fontSize: "48px",
                                fontWeight: "400",
                                lineHeight: "116.7%",
                                color: c.Cs.palette.text.primary,
                                textTransform: "uppercase",
                                fontFamily: '"Viga", sans-serif',
                              },
                              children: "Why create your DAO on Paideia?<",
                            }),
                          }),
                          (0, i.jsx)(o.ZP, {
                            item: !0,
                            children: (0, i.jsxs)(o.ZP, {
                              container: !0,
                              wrap: "nowrap",
                              spacing: 2,
                              children: [
                                (0, i.jsx)(o.ZP, {
                                  item: !0,
                                  children: (0, i.jsx)(r.Z, {
                                    sx: {
                                      mt: "3px",
                                      width: "8px",
                                      height: "90%",
                                      background:
                                        "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                                    },
                                  }),
                                }),
                                (0, i.jsx)(o.ZP, {
                                  item: !0,
                                  zeroMinWidth: !0,
                                  children: (0, i.jsx)(a.Z, {
                                    component: "p",
                                    sx: f,
                                    children:
                                      "Blockchain provides several advantages over legacy financial systems. Transparency, decentralization, and fair access are some of the hallmarks of the technology. DAOs are an extension of these features. Paideia can help with that.",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(o.ZP, { item: !0, md: 7 }),
                  ],
                }),
                (0, i.jsxs)(o.ZP, {
                  container: !0,
                  rowSpacing: 12,
                  columnSpacing: { xs: "0", sm: 12, md: "0" },
                  sx: { mb: "60px" },
                  children: [
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 4,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsxs)(o.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 3,
                      children: [
                        (0, i.jsx)("img", {
                          src: "/icons/StackIcon.svg",
                          width: 35,
                          height: 35,
                        }),
                        (0, i.jsx)(a.Z, { sx: u, children: "Simple to Use" }),
                        (0, i.jsx)(a.Z, {
                          component: "p",
                          sx: f,
                          children:
                            "The Paideia UX/UI was designed with ease-of-use in mind, removing the complexity so you can focus on what matters: participating in DAOs.",
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsxs)(o.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 3,
                      children: [
                        (0, i.jsx)("img", {
                          src: "/icons/CubeIcon.svg",
                          width: 35,
                          height: 35,
                        }),
                        (0, i.jsx)(a.Z, { sx: u, children: "Secure" }),
                        (0, i.jsx)(a.Z, {
                          component: "p",
                          sx: f,
                          children:
                            "Smart contracts written in Ergoscript maintain secure, predictable voting structures, which ensures your treasury is spent according to fair voting.",
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 4,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsxs)(o.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 3,
                      children: [
                        (0, i.jsx)("img", {
                          src: "/icons/PyramidIcon.svg",
                          width: 35,
                          height: 35,
                        }),
                        (0, i.jsx)(a.Z, { sx: u, children: "Flexible" }),
                        (0, i.jsx)(a.Z, {
                          component: "p",
                          sx: f,
                          children:
                            "Not all DAOs have the same needs. Paideia offers various governance structures and voting mechanisms, so you can get organized in the most productive way possible.",
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsxs)(o.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 3,
                      children: [
                        (0, i.jsx)("img", {
                          src: "/icons/TokenIcon.svg",
                          width: 35,
                          height: 35,
                        }),
                        (0, i.jsx)(a.Z, { sx: u, children: "Inexpensive" }),
                        (0, i.jsx)(a.Z, {
                          component: "p",
                          sx: f,
                          children:
                            "Paideia is built on Ergo, so transaction fees are miniscule, and the platform fees will always remain low. You'll never pay hundreds in gas fees here.",
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 4,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 12,
                      md: 3,
                      children: (0, i.jsx)(l.Z, {
                        variant: "outlined",
                        endIcon: (0, i.jsx)(h.Z, {}),
                        children: "Learn More",
                      }),
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 3,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                    (0, i.jsx)(o.ZP, {
                      item: !0,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      sx: { display: { xs: "none", md: "flex" } },
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(r.Z, { height: "100px" }),
            (0, i.jsx)(s.Z, {
              maxWidth: "xl",
              sx: { position: "relative", minWidth: "1500px" },
              children: (0, i.jsx)(r.Z, {
                sx: {
                  zIndex: "-1",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "341px",
                  width: "20px",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                  transform: "rotate(90deg)",
                  transformOrigin: "bottom left",
                },
              }),
            }),
            (0, i.jsx)(r.Z, { height: "60px" }),
          ],
        });
      }
      var j = n(33828),
        Z = {
          fontSize: "48px",
          fontWeight: "400",
          lineHeight: "116.7%",
          mb: "24px",
          color: c.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Viga", sans-serif',
        },
        b = {
          fontSize: "20px",
          fontWeight: "700",
          color: c.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Space Grotesk", sans-serif',
        },
        P = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
        v = [
          {
            title: "DAOs initiated on Paideia",
            value: "0",
            subTitle: "Organizations",
          },
          {
            title: "Participants in DAOs",
            value: "0",
            subTitle: "Unique wallets",
          },
          { title: "TVL on Paideia", value: "$0", subTitle: "SigUSD Locked" },
          {
            title: "Paideia Token Price",
            value: "$0.0169",
            subTitle: "SigUSD",
          },
        ];
      function y() {
        return (0, i.jsxs)(s.Z, {
          sx: {
            flexGrow: 1,
            px: "24px",
            pt: { xs: "0", md: "240px" },
            mt: { xs: "120px", md: "-60px" },
            minHeight: "2200px",
            position: "relative",
            zIndex: "-1",
          },
          children: [
            (0, i.jsx)(r.Z, {
              sx: {
                position: "absolute",
                top: { xs: "-160px", sm: "-400px", md: "-160px" },
                left: { sm: "27%", md: "42%" },
                width: "2160px",
                transform: "translate(-50%, -60px)",
                overflow: "visible",
                zIndex: "-5",
                ml: "-24px",
                display: { xs: "none", sm: "block" },
              },
              children: (0, i.jsx)("img", {
                src: "/stats-bg.png",
                width: 2299,
                height: 2687,
              }),
            }),
            (0, i.jsx)(r.Z, {
              sx: {
                position: "absolute",
                top: "-160px",
                right: "-15%",
                height: "100%",
                width: "900px",
                overflow: "visible",
                zIndex: "-5",
                ml: "-24px",
                display: { xs: "block", sm: "none" },
              },
              children: (0, i.jsx)("img", {
                src: "/stats-small.png",
                width: 900,
                height: 2484,
              }),
            }),
            (0, i.jsxs)(o.ZP, {
              container: !0,
              children: [
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  md: 4,
                  children: [
                    (0, i.jsx)(d.Z, {
                      marginBottom: "24px",
                      children: "Statistics",
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: Z,
                      children: "Some Numbers to Look At <",
                    }),
                  ],
                }),
                (0, i.jsx)(o.ZP, { item: !0, md: 3 }),
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  md: 4,
                  children: [
                    (0, i.jsxs)(o.ZP, {
                      container: !0,
                      wrap: "nowrap",
                      spacing: 2,
                      sx: { mb: "120px" },
                      children: [
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          children: (0, i.jsx)(r.Z, {
                            sx: {
                              width: "8px",
                              height: "100%",
                              background:
                                "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                            },
                          }),
                        }),
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          zeroMinWidth: !0,
                          children: (0, i.jsx)(a.Z, {
                            component: "p",
                            sx: P,
                            children:
                              "Many projects use NFTs as the analogical equivalent of a key being and open a door to a home. We strive to bring utility to our NFTs through exclusive access to a blockchain related game, along with offering other smaller utilities within our social media platforms, including Discord",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.ZP, {
                      container: !0,
                      direction: "column",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      spacing: 12,
                      sx: { maxWidth: "500px", float: "right", mb: "240px" },
                      children: v.map(function (e, t) {
                        return (0,
                        i.jsxs)(o.ZP, { item: !0, children: [(0, i.jsxs)(o.ZP, { container: !0, spacing: 2, direction: "row", children: [(0, i.jsx)(o.ZP, { item: !0, children: (0, i.jsx)("img", { src: "/stats/".concat(t + 1, ".svg"), width: 25, height: 25 }) }), (0, i.jsx)(o.ZP, { item: !0, children: (0, i.jsx)(a.Z, { sx: b, children: e.title }) })] }), (0, i.jsx)(a.Z, { sx: { fontFamily: '"Viga", sans-serif', fontSize: "100px", lineHeight: "100px" }, children: e.value }), (0, i.jsxs)(o.ZP, { container: !0, direction: "row", justifyContent: "flex-start", alignItems: "stretch", children: [(0, i.jsx)(o.ZP, { item: !0, flexGrow: 1, sx: { position: "relative", maxWidth: "100%", minHeight: "100%" }, children: (0, i.jsxs)(o.ZP, { container: !0, direction: "column", sx: { height: "100%", pr: "12px" }, children: [(0, i.jsx)(o.ZP, { item: !0, xs: 6, sx: { borderBottom: "1px solid white" } }), (0, i.jsx)(o.ZP, { item: !0, xs: 6 })] }) }), (0, i.jsx)(o.ZP, { item: !0, xs: "auto", children: (0, i.jsx)(a.Z, { sx: { fontFamily: '"Inter", sans-serif', fontSize: "16px", textTransform: "uppercase" }, children: e.subTitle }) })] })] }, t);
                      }),
                    }),
                    (0, i.jsxs)(r.Z, {
                      children: [
                        (0, i.jsx)(d.Z, {
                          marginBottom: "24px",
                          children: "How to begin",
                        }),
                        (0, i.jsxs)(o.ZP, {
                          container: !0,
                          wrap: "nowrap",
                          spacing: 2,
                          sx: { mb: "24px" },
                          children: [
                            (0, i.jsx)(o.ZP, {
                              item: !0,
                              children: (0, i.jsx)(r.Z, {
                                sx: {
                                  width: "8px",
                                  height: "100%",
                                  background: "#fff",
                                },
                              }),
                            }),
                            (0, i.jsx)(o.ZP, {
                              item: !0,
                              zeroMinWidth: !0,
                              children: (0, i.jsx)(a.Z, {
                                component: "p",
                                sx: {
                                  fontFamily: '"Viga", sans-serif',
                                  fontSize: { xs: "48px", md: "56px" },
                                  lineHeight: "120%",
                                  letterSpacing: "-0.5px",
                                  textTransform: "uppercase",
                                  textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
                                },
                                children: "Ready to try Paideia?",
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(l.Z, {
                          disabled: !0,
                          variant: "contained",
                          sx: {},
                          children: "Coming Soon",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(o.ZP, { item: !0, md: 1 }),
              ],
            }),
          ],
        });
      }
      var w = n(16003),
        S = n(98396),
        z = n(2734),
        k = n(14957),
        E = n(5173);
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              I(e, t, n[t]);
            });
        }
        return e;
      }
      var A = {
          fontSize: "48px",
          fontWeight: "400",
          lineHeight: "116.7%",
          mb: "24px",
          color: c.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Viga", sans-serif',
        },
        W = {
          fontSize: "20px",
          fontWeight: "700",
          color: c.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Space Grotesk", sans-serif',
        },
        F = {
          fontSize: "34px",
          fontFamily: '"Viga", sans-serif',
          lineHeight: "41px",
        },
        O = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
        C = [
          {
            title: "Ergo-Lend",
            subtitle: "P2P Lending Platform",
            body: "A person-to-person (P2P) lending platform with easy to use tools to borrow and lend money",
            members: 550,
            link: "/",
          },
          {
            title: "Azorus",
            subtitle: "Data Analysis dApp",
            body: "A web3 data intelligence suite for all UTXO blockchains.",
            members: 320,
            link: "/",
          },
          {
            title: "Swamp Audio",
            subtitle: "DRM Management & Music Label",
            body: "An open-source framework to replace existing legacy media monetization & management platforms.",
            members: 440,
            link: "/",
          },
        ],
        D = function (e) {
          var t = e.dao;
          return (0, i.jsx)(r.Z, {
            sx: { height: "100%" },
            className: "border-grad",
            children: (0, i.jsxs)(o.ZP, {
              container: !0,
              sx: { height: "100%", p: "24px" },
              direction: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              children: [
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  children: [
                    (0, i.jsx)(w.Z, {
                      icon: (0, i.jsx)(k.Z, { color: "secondary" }),
                      label: "Sponsored",
                      sx: {
                        color: c.Cs.palette.secondary.main,
                        background: "#fff",
                        fontSize: "16px",
                        mb: "24px",
                      },
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: T({}, A, { mb: "0px", fontSize: "24px" }),
                      children: t.title,
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: { fontSize: "14px", mb: "16px" },
                      children: t.subtitle,
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: T({}, W, {
                        lineHeight: "23px",
                        textTransform: "none",
                        fontSize: "16px",
                        mb: "16px",
                      }),
                      children: t.body,
                    }),
                  ],
                }),
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  children: [
                    (0, i.jsx)(a.Z, { sx: T({}, F), children: t.members }),
                    (0, i.jsx)(a.Z, {
                      sx: {
                        fontSize: "14px",
                        fontFamily: '"Space Grotesk", sans-serif',
                        textTransform: "uppercase",
                        mb: "16px",
                      },
                      children: "DAO Members",
                    }),
                    (0, i.jsx)(l.Z, {
                      endIcon: (0, i.jsx)(h.Z, {}),
                      href: t.link,
                      children: "Learn More",
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function H() {
        var e = (0, z.Z)();
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(s.Z, {
            sx: { px: "24px", position: "relative" },
            children: [
              (0, i.jsx)(r.Z, {
                sx: {
                  position: "absolute",
                  top: "-300px",
                  left: "50%",
                  width: "2160px",
                  transform: "translate(-50%, -60px)",
                  zIndex: "-8",
                  ml: "-24px",
                  maxHeight: "calc(100% + 400px)",
                  overflow: "hidden",
                },
                children: (0, i.jsx)("img", {
                  src: "/featured-bg.png",
                  width: 2039,
                  height: 2116,
                }),
              }),
              (0, i.jsxs)(o.ZP, {
                container: !0,
                sx: { mt: { xs: "120px", md: "0" } },
                children: [
                  (0, i.jsxs)(o.ZP, {
                    item: !0,
                    md: 6,
                    children: [
                      (0, i.jsx)(d.Z, {
                        marginBottom: "24px",
                        children: "Sponsored DAOs",
                      }),
                      (0, i.jsx)(a.Z, {
                        sx: T({}, A, { mb: "64px" }),
                        children: "Don't miss out on these projects",
                      }),
                    ],
                  }),
                  (0, i.jsx)(o.ZP, { item: !0, md: 6 }),
                ],
              }),
              (0, i.jsxs)(o.ZP, {
                container: !0,
                sx: { pb: "100px" },
                spacing: 3,
                children: [
                  (0, i.jsx)(o.ZP, {
                    item: !0,
                    md: 6,
                    children: (0, i.jsxs)(o.ZP, {
                      container: !0,
                      wrap: "nowrap",
                      spacing: 2,
                      children: [
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          children: (0, i.jsx)(r.Z, {
                            sx: {
                              width: "8px",
                              height: "100%",
                              background:
                                "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                            },
                          }),
                        }),
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          zeroMinWidth: !0,
                          children: (0, i.jsx)(a.Z, {
                            component: "p",
                            sx: O,
                            children:
                              "If you want to learn more about some of the best projects in our platform, you can click here to see all. Find something you like!",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(o.ZP, { item: !0, md: 6 }),
                  (0, i.jsx)(o.ZP, {
                    item: !0,
                    md: 12,
                    children: (0, i.jsx)(l.Z, {
                      variant: "contained",
                      sx: {},
                      children: "All Projects",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(o.ZP, {
                container: !0,
                sx: (0, S.Z)(e.breakpoints.down("md"))
                  ? { display: "none" }
                  : null,
                children: [
                  (0, i.jsx)(o.ZP, { item: !0, xs: 1, lg: 2 }),
                  (0, i.jsx)(o.ZP, {
                    item: !0,
                    xs: 12,
                    lg: 10,
                    children: (0, i.jsx)(o.ZP, {
                      container: !0,
                      alignItems: "stretch",
                      spacing: 5,
                      sx: { pt: "32px", pb: "72px" },
                      children: C.map(function (e, t) {
                        return (0,
                        i.jsx)(o.ZP, { item: !0, xs: 12, sm: 6, md: 4, children: (0, i.jsx)(D, { dao: e }) }, t);
                      }),
                    }),
                  }),
                ],
              }),
              (0, S.Z)(e.breakpoints.down("md"))
                ? (0, i.jsx)(r.Z, {
                    sx: { mx: "-24px" },
                    children: (0, i.jsx)(E.Z, {
                      uniqueId: "featured",
                      addMargin: 24,
                      children: C.map(function (e, t) {
                        return (0,
                        i.jsx)(r.Z, { sx: { maxWidth: "calc(100vw - 48px)", display: "inline-flex", whiteSpace: "normal", minWidth: "300px" }, children: (0, i.jsx)(D, { dao: e }) }, t);
                      }),
                    }),
                  })
                : null,
            ],
          }),
        });
      }
      function B() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(p, {}),
            (0, i.jsx)(j.Z, {}),
            (0, i.jsx)(g, {}),
            (0, i.jsx)(y, {}),
            (0, i.jsx)(H, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (t = 45301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
