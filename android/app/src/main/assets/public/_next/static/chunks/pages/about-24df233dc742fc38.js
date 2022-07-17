(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2521],
  {
    74613: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(75978);
        },
      ]);
    },
    29509: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = (n(67294), n(48263)),
        r = n(87357),
        s = n(23972),
        a = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
        l = {
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "32px",
        };
      t.Z = function (e) {
        var t = e.small,
          n = e.sx,
          c = e.children;
        return (0, i.jsxs)(o.ZP, {
          container: !0,
          wrap: "nowrap",
          spacing: 2,
          sx: n,
          children: [
            (0, i.jsx)(o.ZP, {
              item: !0,
              children: (0, i.jsx)(r.Z, {
                sx: {
                  mt: "3px",
                  ml: t ? "0" : "36px",
                  width: "8px",
                  height: "95%",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                },
              }),
            }),
            (0, i.jsx)(o.ZP, {
              item: !0,
              zeroMinWidth: !0,
              children: (0, i.jsx)(s.Z, {
                component: "p",
                sx: t ? a : l,
                children: c,
              }),
            }),
          ],
        });
      };
    },
    5173: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = n(67294),
        r = n(46574),
        s = n(87357),
        a = n(69397),
        l = n(20724),
        c = n(13379);
      function d(e, t, n) {
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
      function u(e) {
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
              d(e, t, n[t]);
            });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.children,
          n = e.buttonTop,
          d = e.uniqueId,
          m = e.addMargin,
          p = e.contained,
          x = (0, o.useState)({ px: "0px" }),
          h = x[0],
          f = x[1],
          g = (0, o.useState)(0),
          b = g[0],
          j = g[1],
          v = (0, o.useState)(!1),
          w = v[0],
          y = v[1],
          Z = (0, o.useState)(!1),
          k = Z[0],
          P = Z[1],
          S = (0, o.useState)(460),
          E = S[0],
          O = S[1],
          z = function () {
            var e = document.getElementById(d + "pnProductNav").scrollLeft;
            j(e);
          },
          I = function () {
            var e = document.getElementById(d + "pnArrowContainer"),
              t = 24;
            p || (t = e.getBoundingClientRect().left + (m || 0)),
              f(u({}, h, { px: t.toString() + "px" }));
            var n = document.getElementById("setWidth").offsetWidth;
            O(n - t);
          };
        (0, o.useEffect)(function () {
          var e = document.getElementById(d + "pnProductNav");
          return (
            e.addEventListener("scroll", z),
            function () {
              e.removeEventListener("scroll", z);
            }
          );
        }, []),
          (0, o.useEffect)(
            function () {
              var e = document.getElementById(d + "pnProductNav");
              !(function (e, t) {
                var n = t.getBoundingClientRect(),
                  i = Math.floor(n.right),
                  o = Math.floor(n.left),
                  r = e.getBoundingClientRect(),
                  s = Math.floor(r.right),
                  a = Math.floor(r.left);
                o > a && i < s
                  ? (y(!1), P(!1))
                  : a < o
                  ? P(!0)
                  : s > i
                  ? y(!0)
                  : (y(!0), P(!0));
              })(document.getElementById(d + "pnProductNavContents"), e);
            },
            [b]
          ),
          (0, o.useEffect)(function () {
            return (
              window.addEventListener("resize", I),
              I(),
              function () {
                return window.removeEventListener("resize", I);
              }
            );
          }, []),
          (0, o.useEffect)(function () {
            var e = setTimeout(function () {
              I();
            }, 1e3);
            return function () {
              clearTimeout(e);
            };
          }, []);
        var T = (0, o.useState)({ left: void 0, x: void 0 }),
          D = T[0],
          C = T[1],
          A = (0, o.useRef)({ left: void 0, x: void 0 });
        A.current = D;
        var F = function (e) {
            document.getElementById(d + "pnProductNav").scrollLeft =
              A.current.left - (e.clientX - A.current.x);
          },
          M = function (e) {
            var t = document.getElementById(d + "pnProductNav");
            (t.style.cursor = "grab"),
              (t.style.userSelect = "none"),
              document.removeEventListener("mousemove", F),
              document.removeEventListener("mouseup", M);
          },
          B = function () {
            document
              .getElementById(d + "pnProductNav")
              .scrollTo({ left: b - E, behavior: "smooth" });
          },
          W = function () {
            document
              .getElementById(d + "pnProductNav")
              .scrollTo({ left: b + E, behavior: "smooth" });
          },
          L = function () {
            return (0, i.jsx)(r.Z, {
              id: d + "pnArrowContainer",
              maxWidth: "lg",
              sx: { my: "32px" },
              children: (0, i.jsxs)(s.Z, {
                sx: n ? { display: "flex", justifyContent: "flex-end" } : null,
                children: [
                  (0, i.jsx)(a.Z, {
                    onClick: B,
                    disabled: w,
                    children: (0, i.jsx)(l.Z, {}),
                  }),
                  (0, i.jsx)(a.Z, {
                    onClick: W,
                    disabled: k,
                    children: (0, i.jsx)(c.Z, {}),
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
            n ? (0, i.jsx)(L, {}) : null,
            (0, i.jsx)(s.Z, {
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
              id: d + "pnProductNav",
              onMouseDown: function (e) {
                return (function (e) {
                  var t = document.getElementById(d + "pnProductNav");
                  (t.style.cursor = "grabbing"),
                    (t.style.userSelect = "none"),
                    C({ left: b, x: e.clientX }),
                    document.addEventListener("mousemove", F),
                    document.addEventListener("mouseup", M);
                })(e);
              },
              children: (0, i.jsx)(s.Z, {
                id: d + "pnProductNavContents",
                display: "flex",
                sx: u({ width: "min-content", gap: "24px" }, h),
                children: t,
              }),
            }),
            n ? null : (0, i.jsx)(L, {}),
          ],
        });
      };
    },
    40475: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = (n(67294), n(46574)),
        r = n(87357),
        s = n(48263),
        a = n(23972),
        l = n(93516),
        c = n(17098),
        d = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        };
      t.Z = function (e) {
        var t = e.bgUrl,
          n = e.sectionTitle,
          u = e.titleLineOne,
          m = e.titleLineTwo,
          p = e.subTitleOne,
          x = e.subTitleTwo;
        return (0, i.jsxs)(o.Z, {
          sx: { px: "24px" },
          children: [
            (0, i.jsx)(r.Z, {
              sx: {
                position: "absolute",
                top: "200px",
                left: "50%",
                height: { xs: "100vh", md: "1261px" },
                minHeight: "600px",
                width: "1716px",
                transform: "translate(-50%, 0)",
                overflow: "hidden",
                zIndex: "-1",
                ml: "-24px",
              },
              children: (0, i.jsx)("img", { src: t }),
            }),
            (0, i.jsxs)(s.ZP, {
              container: !0,
              sx: {
                height: { xs: "100vh", sm: "1000px" },
                minHeight: "600px",
                maxHeight: { xs: "1000px", sm: "1200px" },
                flexDirection: { xs: "row", sm: "row" },
                justifyContent: { xs: "flex-end", sm: "space-between" },
                alignItems: { xs: "flex-end", sm: "center" },
              },
              children: [
                (0, i.jsx)(s.ZP, { item: !0, xs: 0, sm: 1, lg: 3 }),
                (0, i.jsxs)(s.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 11,
                  lg: 9,
                  children: [
                    (0, i.jsx)(c.Z, { marginBottom: "80px", children: n }),
                    (0, i.jsx)(a.Z, {
                      sx: {
                        fontSize: { xs: "60px", sm: "80px", md: "100px" },
                        fontWeight: "500",
                        color: "rgba(0,0,0,0.0)",
                        lineHeight: "100%",
                        textTransform: "uppercase",
                        fontFamily: '"Viga", sans-serif',
                        letterSpacing: "-1.5px",
                      },
                      className: "outlineText",
                      children: u,
                    }),
                    (0, i.jsx)(a.Z, {
                      sx: {
                        fontSize: { xs: "60px", sm: "80px", md: "100px" },
                        fontWeight: { xs: "400", sm: "600" },
                        color: l.Cs.palette.text.primary,
                        textTransform: "uppercase",
                        fontFamily: '"Viga", sans-serif',
                        letterSpacing: "-1.5px",
                        lineHeight: "100%",
                        mb: "40px",
                      },
                      children: m,
                    }),
                    (0, i.jsx)(s.ZP, {
                      container: !0,
                      wrap: "nowrap",
                      spacing: 2,
                      sx: { mb: "120px" },
                      children:
                        p &&
                        x &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(s.ZP, {
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
                            (0, i.jsxs)(s.ZP, {
                              item: !0,
                              zeroMinWidth: !0,
                              children: [
                                (0, i.jsx)(a.Z, {
                                  component: "p",
                                  sx: d,
                                  children: p,
                                }),
                                (0, i.jsx)(a.Z, {
                                  component: "p",
                                  sx: d,
                                  children: x,
                                }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    81849: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = (n(67294), n(48263)),
        r = n(23972),
        s = n(17098),
        a = n(29509);
      t.Z = function (e) {
        var t = e.category,
          n = e.title,
          l = e.children,
          c = e.sx;
        return (0, i.jsxs)(o.ZP, {
          container: !0,
          direction: "column",
          spacing: 3,
          sx: c || { mb: "64px" },
          children: [
            (0, i.jsx)(o.ZP, {
              item: !0,
              children: (0, i.jsx)(s.Z, { children: t }),
            }),
            (0, i.jsx)(o.ZP, {
              item: !0,
              children: (0, i.jsx)(r.Z, {
                sx: {
                  fontSize: "48px",
                  fontWeight: "400",
                  lineHeight: "116.7%",
                  textTransform: "uppercase",
                  fontFamily: '"Viga", sans-serif',
                },
                children: n,
              }),
            }),
            l
              ? (0, i.jsx)(o.ZP, {
                  item: !0,
                  children: (0, i.jsxs)(o.ZP, {
                    container: !0,
                    children: [
                      (0, i.jsx)(o.ZP, {
                        item: !0,
                        md: 8,
                        children: (0, i.jsx)(a.Z, { small: !0, children: l }),
                      }),
                      (0, i.jsx)(o.ZP, { item: !0, md: 4 }),
                    ],
                  }),
                })
              : null,
          ],
        });
      };
    },
    17098: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = (n(67294), n(48263)),
        r = n(23972),
        s = n(13282);
      t.Z = function (e) {
        var t = e.marginBottom,
          n = e.children;
        return (0, i.jsxs)(o.ZP, {
          container: !0,
          spacing: 1,
          direction: "row",
          alignItems: "flex-start",
          sx: { mb: t },
          children: [
            (0, i.jsx)(o.ZP, {
              item: !0,
              sx: { fontSize: "13px" },
              children: (0, i.jsx)(s.Z, { fontSize: "inherit" }),
            }),
            (0, i.jsx)(o.ZP, {
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
        o = (n(67294), n(87357)),
        r = n(46574),
        s = n(48263),
        a = n(23972),
        l = n(69397),
        c = n(93619);
      t.Z = function (e) {
        var t = e.sx;
        return (0, i.jsx)(o.Z, {
          sx: t,
          children: (0, i.jsxs)(r.Z, {
            sx: {
              position: "relative",
              px: "24px",
              pl: { xs: "60px", md: "24px" },
            },
            children: [
              (0, i.jsx)(o.Z, {
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
              (0, i.jsx)(o.Z, {
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
              (0, i.jsxs)(s.ZP, {
                container: !0,
                sx: { pt: "120px", pb: "40px" },
                children: [
                  (0, i.jsx)(s.ZP, { item: !0, md: 3 }),
                  (0, i.jsx)(s.ZP, {
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
                  (0, i.jsx)(s.ZP, { item: !0, md: 2 }),
                ],
              }),
              (0, i.jsxs)(s.ZP, {
                container: !0,
                sx: { pb: "120px" },
                children: [
                  (0, i.jsx)(s.ZP, { item: !0, md: 4 }),
                  (0, i.jsx)(s.ZP, {
                    item: !0,
                    md: 6,
                    children: (0, i.jsxs)(s.ZP, {
                      container: !0,
                      justifyContent: "flex-end",
                      rowSpacing: 2,
                      sx: { borderTop: "1px solid white" },
                      children: [
                        (0, i.jsx)(s.ZP, {
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
                        (0, i.jsxs)(s.ZP, {
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
                            (0, i.jsx)(l.Z, {
                              endIcon: (0, i.jsx)(c.Z, {}),
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
                  (0, i.jsx)(s.ZP, { item: !0, md: 2 }),
                ],
              }),
            ],
          }),
        });
      };
    },
    75978: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Oe;
          },
        });
      var i = n(85893),
        o = n(67294),
        r = n(40475),
        s = n(8298),
        a = n(6585),
        l = n(87357),
        c = n(18843),
        d = n(29861),
        u = n(48885),
        m = n(51190),
        p = n(59334),
        x = n(98396),
        h = n(48263),
        f = n(16628),
        g = n(98850),
        b = n(87253);
      function j(e, t, n) {
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
      function v(e) {
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
              j(e, t, n[t]);
            });
        }
        return e;
      }
      var w = {
        "&:hover": {
          "& .MuiTypography-root": {
            fontWeight: "700",
            textDecoration: "underline",
          },
        },
      };
      function y(e) {
        var t = (0, s.Z)({ disableHysteresis: !0, threshold: 100 });
        return (0, i.jsx)(a.Z, {
          in: t,
          children: (0, i.jsx)(l.Z, {
            role: "presentation",
            sx: {
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: e.navOpen ? "61" : "5",
            },
            children: e.children,
          }),
        });
      }
      var Z = function (e) {
          var t = e.navLinks,
            n = e.children,
            r = (0, o.useState)({ mt: void 0, height: void 0 }),
            s = r[0],
            a = r[1],
            j = (0, o.useRef)({ mt: void 0, height: void 0 });
          j.current = s;
          var Z = (0, o.useState)({ top: 0, bottom: 0 }),
            k = Z[0],
            P = Z[1],
            S = (0, o.useRef)({ top: 0, bottom: 0 });
          S.current = k;
          var E = function () {
              var e = document.getElementById("navContainer"),
                n = e.offsetTop,
                i = e.getBoundingClientRect().height,
                o = n + i;
              t.forEach(function (e) {
                var t = document.getElementById(e.link).offsetTop - 85;
                e.position = t;
              });
              var r = window.innerHeight,
                l = document.getElementById("navPositionBar"),
                c =
                  null === l || void 0 === l
                    ? void 0
                    : l.getBoundingClientRect().height,
                d = (r / i) * c;
              a(v({}, s, { height: d < c ? d : c })),
                P(function (e) {
                  return v({}, e, { top: n, bottom: o });
                }),
                O();
            },
            O = function () {
              var e = window.scrollY,
                t = document.getElementById("navPositionBar"),
                n =
                  null === t || void 0 === t
                    ? void 0
                    : t.getBoundingClientRect().height;
              if (
                (e <= S.current.top &&
                  a(function (e) {
                    return v({}, e, { mt: 0 });
                  }),
                e > S.current.top && e < S.current.bottom - window.innerHeight)
              ) {
                var i = S.current.bottom - S.current.top,
                  o = ((e - S.current.top) / i) * n - 2;
                a(function (e) {
                  return v({}, e, { mt: o.toString() + "px" });
                });
              }
              if (e > S.current.bottom - window.innerHeight) {
                var r = n - j.current.height;
                a(function (e) {
                  return v({}, e, { mt: r.toString() + "px" });
                });
              }
            },
            z = function (e) {
              scrollTo({ top: e, behavior: "smooth" });
            };
          (0, o.useEffect)(function () {
            return (
              window.addEventListener("scroll", O),
              function () {
                window.removeEventListener("scroll", O);
              }
            );
          }, []),
            (0, o.useEffect)(function () {
              return (
                window.addEventListener("resize", E),
                E(),
                function () {
                  window.removeEventListener("resize", E);
                }
              );
            }, []),
            (0, o.useEffect)(function () {
              var e = setInterval(function () {
                E();
              }, 200);
              return function () {
                return clearInterval(e);
              };
            }, []);
          var I = (0, o.useContext)(b.f).setInPageNav;
          (0, o.useEffect)(function () {
            I(!0);
          }, []);
          var T = (0, o.useState)(!1),
            D = T[0],
            C = T[1],
            A = (0, i.jsx)(c.Z, {
              sx: { p: 0 },
              children: t.map(function (e, t) {
                var n = e.icon,
                  o = e.name,
                  r = e.position;
                return (0, i.jsxs)(
                  d.ZP,
                  {
                    button: !0,
                    sx: w,
                    onClick: function () {
                      z(r);
                    },
                    children: [
                      (0, i.jsx)(u.Z, {
                        children: (0, i.jsx)(m.Z, { children: n }),
                      }),
                      (0, i.jsx)(p.Z, {
                        primary: o,
                        sx: {
                          "& .MuiTypography-root": {
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: "400",
                            fontSize: "20px",
                          },
                        },
                      }),
                    ],
                  },
                  t
                );
              }),
            }),
            F = (0, i.jsx)(c.Z, {
              sx: { p: 0, position: "absolute", bottom: 80, right: 16 },
              children: t.map(function (e, t) {
                var n = e.icon,
                  o = e.name,
                  r = e.position;
                return (0, i.jsxs)(
                  d.ZP,
                  {
                    button: !0,
                    sx: w,
                    onClick: function () {
                      z(r), C(!D);
                    },
                    children: [
                      (0, i.jsx)(p.Z, {
                        primary: o,
                        sx: {
                          "& .MuiTypography-root": {
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: "400",
                            fontSize: "20px",
                          },
                        },
                      }),
                      (0, i.jsx)(u.Z, {
                        sx: { justifyContent: "flex-end" },
                        children: (0, i.jsx)(m.Z, { children: n }),
                      }),
                    ],
                  },
                  t
                );
              }),
            });
          return (0, x.Z)("(min-width:1100px)")
            ? (0, i.jsxs)(h.ZP, {
                container: !0,
                spacing: 4,
                children: [
                  (0, i.jsx)(h.ZP, {
                    item: !0,
                    md: 3,
                    children: (0, i.jsx)(l.Z, {
                      sx: {
                        position: "sticky",
                        top: 100,
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "12px",
                        zIndex: 3,
                        p: "12px",
                      },
                      children: (0, i.jsxs)(h.ZP, {
                        container: !0,
                        children: [
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            sx: { width: "3px", background: "#F8F8F8" },
                            id: "navPositionBar",
                            children: (0, i.jsx)(l.Z, {
                              sx: v({ background: "#ED7E21", zIndex: "2" }, s),
                            }),
                          }),
                          (0, i.jsx)(h.ZP, { item: !0, children: A }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.ZP, { item: !0, md: 9, children: n }),
                ],
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  n,
                  (0, i.jsx)(f.Z, {
                    in: D,
                    style: { transitionDuration: "400ms" },
                    children: (0, i.jsxs)(l.Z, {
                      sx: {
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        zIndex: D ? "60" : "15",
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(55px)",
                        p: "24px",
                      },
                      children: [
                        F,
                        (0, i.jsx)(l.Z, {
                          sx: {
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            height: "45vh",
                            width: "100vw",
                            zIndex: "-1",
                            background:
                              "linear-gradient(359.63deg, #ED7E21 10.26%, rgba(237, 126, 33, 0) 76.79%)",
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(y, {
                    navOpen: D,
                    children: (0, i.jsx)(g.Z, {
                      sx: {
                        bgcolor: D ? "#FFFFFF" : "#ED7E21",
                        "&:hover:focus": { background: D ? "#fff" : "#ED7E21" },
                      },
                      "aria-label": "open in page navigation",
                      onClick: function () {
                        C(!D);
                      },
                      children: (0, i.jsx)(l.Z, {
                        sx: {
                          position: "absolute",
                          width: "6px",
                          height: "6px",
                          borderRadius: "20px",
                          backgroundColor: "#fff",
                          transform: "rotate(270deg)",
                          cursor: "pointer",
                          "&::before, &::after": {
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            borderRadius: "20px",
                            backgroundColor: "#fff",
                            transform: "rotate(270deg)",
                            cursor: "pointer",
                            content: '""',
                            transition:
                              "transform 100ms ease-in-out, background-color 100ms ease-in-out",
                          },
                          "&::before": v(
                            { right: "10px" },
                            D && {
                              right: "-12px",
                              width: "30px",
                              backgroundColor: "#ED7E21",
                              transform: "rotate(225deg)",
                            }
                          ),
                          "&::after": v(
                            { left: "10px" },
                            D && {
                              left: "-12px",
                              width: "30px",
                              backgroundColor: "#ED7E21",
                              transform: "rotate(135deg)",
                            }
                          ),
                        },
                      }),
                    }),
                  }),
                ],
              });
        },
        k = n(29509),
        P = n(62623),
        S = n(28492),
        E = n(87952),
        O = n(23972),
        z = n(47034),
        I = n(46574),
        T = n(67720),
        D = n(33828),
        C = n(81849),
        A = n(17098),
        F = n(86532),
        M = n(61250),
        B = n(63083),
        W = n(75716),
        L = n(36599),
        N = n(36270),
        R = n(54123),
        H = n(9601),
        q = n(51221),
        G = n(72162),
        _ = n(17494),
        V = [
          {
            title: "Q1/ 2022",
            image: "Q1",
            panel: "panel1",
            content: [
              {
                title: "Begin UX development",
                body: "Design UX in Figma and procude prototypes to show the community",
                completed: !0,
              },
              {
                title: "Whitepaper",
                body: "Complete first draft of the Whitepaper",
                completed: !0,
              },
              {
                title: "Community Outreach",
                body: "Create social media accounts and begin posting",
                completed: !0,
              },
              {
                title: "Raise Funds",
                body: "Using the Ergopad platform, raise funds from DAO members to develop the platform",
                completed: !0,
              },
              {
                title: "Smart Contract Design",
                body: "Begin conceptualizing the smart contracts",
                completed: !0,
              },
              {
                title: "Front-end Design",
                body: "Work on front-end designs with the UX team and graphic designer for a Figma prototype",
                completed: !0,
              },
            ],
          },
          {
            title: "Q2/ 2022",
            image: "Q2",
            panel: "panel2",
            content: [
              {
                title: "TGE and IDO",
                body: "Generate the tokens and complete the IDO, adding liquidity to Ergodex",
                completed: !0,
              },
              {
                title: "Staking V1",
                body: "Launch the temporary staking contracts that will run until MVP and platform fees can be distributed",
                completed: !0,
              },
              {
                title: "Front-end Code",
                body: "Complete the code for the front-end for both the dApp and website",
                completed: !1,
              },
            ],
          },
          {
            title: "Q3/ 2022",
            image: "Q3",
            panel: "panel3",
            content: [
              {
                title: "Front- and Back-end consolidation",
                body: "Teams will collaborate to create the necessary API endpoints and get the front-end functioning",
                completed: !1,
              },
              {
                title: "Alpha Test",
                body: "Begin testing how the platform works. Test user flows. If smart contracts are ready, use test tokens to try them out. ",
                completed: !1,
              },
            ],
          },
          {
            title: "Q4/ 2022",
            image: "Q4",
            panel: "panel4",
            content: [
              {
                title: "Public MVP Release",
                body: "Once tests and code audit are complete, launch the MVP of the platform",
                completed: !1,
              },
              {
                title: "Extra Features",
                body: "Developers can now start working on additional features outlined in the whitepaper, including new governance structures. ",
                completed: !1,
              },
              {
                title: "Token Issuance Development",
                body: "At MVP, token issuance is only airdrops. Begin adding functions to allow seed funds, adding liquidity to the dex, and other distribution methods. ",
                completed: !1,
              },
            ],
          },
          {
            title: "2023 & Beyond",
            image: "2023",
            panel: "panel5",
            content: [
              {
                title: "Cross-chain functionality",
                body: "Implement cross-chain functionality between Ergo, Ada, and other UTXO blockchains, to allow DAOs to hold multi-asset treasuries. ",
                completed: !1,
              },
              {
                title: "Stand-alone tools",
                body: "Build software that users can run on their local machines so they can easily interact with DAOs without requiring the Paideia website to be live. ",
                completed: !1,
              },
              {
                title: "Community Outreach",
                body: "Potentially utilize funds where possible and explore outreach programs in areas that will benefit most from crypto governance solutions",
                completed: !1,
              },
              {
                title: "Charitible Foundation",
                body: "Establish a not-for-profit foundation that can educate and empower people in developing nations using the Paideia toolset",
                completed: !1,
              },
            ],
          },
        ],
        U = function (e) {
          var t = e.sx;
          return (0, i.jsxs)(l.Z, {
            sx: t,
            children: [
              (0, i.jsx)(A.Z, { marginBottom: "120px", children: "Roadmap" }),
              V.map(function (e, t) {
                return (0, i.jsxs)(
                  F.Z,
                  {
                    disableGutters: !0,
                    elevation: 0,
                    square: !0,
                    sx: {
                      minHeight: "300px",
                      backgroundImage: "url(/".concat(e.image, ".png)"),
                      backgroundRepeat: "no-repeat",
                      "&:not(:last-child)": { borderBottom: 0 },
                      "&:before": { display: "none" },
                    },
                    children: [
                      (0, i.jsx)(M.Z, {
                        expandIcon: (0, i.jsx)(W.Z, {
                          sx: { fontSize: "2rem" },
                        }),
                        "aria-controls": e.panel + "d-content",
                        id: e.panel + "d-header",
                        sx: {
                          justifyContent: "flex-start",
                          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            { transform: "rotate(90deg)" },
                          "& .MuiAccordionSummary-content": {
                            marginLeft: "12px",
                            flexGrow: "0",
                          },
                        },
                        children: (0, i.jsxs)(O.Z, {
                          sx: {
                            fontSize: "48px",
                            fontWeight: "400",
                            lineHeight: "116.7%",
                            textTransform: "uppercase",
                            fontFamily: '"Viga", sans-serif',
                          },
                          children: [e.title, "\xa0"],
                        }),
                      }),
                      (0, i.jsx)(B.Z, {
                        children: (0, i.jsx)(L.Z, {
                          sx: {
                            "& li:last-child": {
                              "& .MuiTimelineConnector-root": {
                                display: "none",
                              },
                            },
                          },
                          children: e.content.map(function (e, t) {
                            return (0,
                            i.jsxs)(N.Z, { children: [(0, i.jsx)(R.Z, { sx: { flexGrow: 0 } }), (0, i.jsxs)(H.Z, { children: [(0, i.jsx)(_.Z, { sx: { background: "linear-gradient(180deg, #F2CA83 0%, #6A8C90 100%)", border: "none", color: "#000" }, children: (0, i.jsx)(m.Z, { color: "inherit", children: e.completed ? "done" : "history" }) }), (0, i.jsx)(q.Z, { sx: { width: "1px" } })] }), (0, i.jsxs)(G.Z, { sx: { color: e.completed ? "rgba(255, 255, 255, 0.7)" : "#fff" }, children: [(0, i.jsxs)(h.ZP, { container: !0, direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0, i.jsx)(h.ZP, { item: !0, children: (0, i.jsx)(O.Z, { sx: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: "700", fontSize: "24px", lineHeight: "32px", my: "6px", mr: "6px" }, children: e.title }) }), (0, i.jsx)(h.ZP, { item: !0, children: (0, i.jsx)(m.Z, { color: "inherit", sx: { fontSize: "16px !important" }, children: "calendar_today" }) }), (0, i.jsx)(h.ZP, { item: !0, children: (0, i.jsx)(O.Z, { sx: { fontSize: "14px", letterSpacing: "1px" }, children: e.completed ? "COMPLETED" : "COMING SOON" }) })] }), (0, i.jsx)(O.Z, { sx: { fontSize: "16px", mb: "32px" }, children: e.body })] })] }, t);
                          }),
                        }),
                      }),
                    ],
                  },
                  t
                );
              }),
            ],
          });
        },
        X = n(4592),
        Q = n(13614),
        Y = n(37858),
        J = n(75921),
        K = n(98102),
        $ = n(58439),
        ee = function (e) {
          var t = e.rows,
            n = e.heading,
            r = (0, o.useState)("en-US"),
            s = r[0],
            a = r[1];
          (0, o.useEffect)(function () {
            a(navigator.language);
          }, []);
          var l = (0, x.Z)("(min-width:700px)");
          return (0, i.jsx)(X.Z, {
            sx: {
              border: "2px solid rgba(255, 255, 255, 0.12)",
              borderRadius: l ? "8px" : "0",
              overflowX: "auto",
              width: l ? "100%" : "100vw",
              maxWidth: "100vw",
              ml: l ? "0" : "-24px",
            },
            children: (0, i.jsxs)(Q.Z, {
              "aria-label": "customized table",
              sx: {
                position: "sticky",
                top: "0",
                width: "100%",
                "& tr:last-child": { border: "none" },
              },
              children: [
                (0, i.jsx)(Y.Z, {
                  children: (0, i.jsx)(J.Z, {
                    sx: {
                      background: "rgba(255, 255, 255, 0.09)",
                      borderBottom:
                        "1px solid rgba(255, 255, 255, 0.12) !important",
                    },
                    children: n.map(function (e) {
                      return (0,
                      i.jsx)(K.Z, { align: e.align ? e.align : "left", sx: { border: "none", fontWeight: "700", letterSpacing: "1px" }, children: e.name }, e.id);
                    }),
                  }),
                }),
                (0, i.jsx)($.Z, {
                  children: t.map(function (e, t) {
                    return (0, i.jsx)(
                      J.Z,
                      {
                        sx: {
                          background: "rgba(255, 255, 255, 0.05)",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                          "&:nth-of-type(odd)": {
                            background: "rgba(255, 255, 255, 0.02)",
                          },
                          "&:last-child td, &:last-child th": {
                            borderBottom: "none",
                          },
                        },
                        children: Object.keys(e).map(function (t, n) {
                          return (0,
                          i.jsx)(K.Z, { sx: { border: "none" }, children: e[t].toLocaleString(s, { maximumFractionDigits: 0 }) }, t);
                        }),
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          });
        },
        te = n(13264),
        ne = n(73584),
        ie = n(37934),
        oe = n(52924),
        re = n(59622);
      function se(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ae() {
        var e = se([
          "\n  display: inline-flex;\n  border-radius: 4px;\n  .Mui-selected {\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    background-color: rgba(159, 210, 219, 0.08);\n    border: 1px solid #9fd2db;\n  }\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = se([
          '\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: inherit;\n  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Helvetica Neue", sans-serif;\n  font-weight: 500;\n  font-size: 0.8125rem;\n  line-height: 1.75;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 3px 9px;\n  border-radius: 4px;\n  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  border: 1px solid rgba(159, 210, 219, 0.5);\n  color: #9fd2db;\n  min-width: 40px;\n  :not(:last-of-type) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right-color: transparent;\n  }\n  :last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: -1px;\n  }\n  :hover {\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    background-color: rgba(159, 210, 219, 0.08);\n    border: 1px solid #9fd2db;\n  }\n',
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      var ce = (0, te.Z)(ie.Z)(ae()),
        de = (0, te.Z)(re.Z)(le()),
        ue = function (e) {
          var t = e.tabs,
            n = e.headline;
          return (0, i.jsxs)(ne.Z, {
            defaultValue: 0,
            children: [
              (0, i.jsxs)(h.ZP, {
                container: !0,
                spacing: 3,
                sx: {
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", md: "flex-start" },
                  marginBottom: "24px",
                },
                children: [
                  (0, i.jsx)(h.ZP, {
                    item: !0,
                    md: 8,
                    children: (0, i.jsx)(O.Z, {
                      sx: {
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "23px",
                      },
                      children: n,
                    }),
                  }),
                  (0, i.jsx)(h.ZP, {
                    item: !0,
                    md: "auto",
                    children: (0, i.jsx)(ce, {
                      children: t.map(function (e, t) {
                        return (0,
                        i.jsxs)(de, { type: "button", children: [e.title, (0, i.jsx)("span", { className: "MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" })] }, t);
                      }),
                    }),
                  }),
                ],
              }),
              t.map(function (e, t) {
                return (0, i.jsx)(oe.Z, { value: t, children: e.fragment }, t);
              }),
            ],
          });
        },
        me = n(5173),
        pe = n(83152),
        xe = n(2373);
      function he(e, t, n) {
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
      function fe(e) {
        return (0, i.jsx)(
          xe.Z,
          (function (e) {
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
                  he(e, t, n[t]);
                });
            }
            return e;
          })({}, e, {
            children: (0, i.jsx)("path", {
              d: "M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z",
            }),
          })
        );
      }
      var ge = n(93516);
      function be(e, t, n) {
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
      function je(e) {
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
              be(e, t, n[t]);
            });
        }
        return e;
      }
      var ve = [
          {
            name: "Introduction",
            icon: "waving_hand",
            link: "introduction",
            position: void 0,
          },
          {
            name: "Whitepaper",
            icon: "description",
            link: "whitepaper",
            position: void 0,
          },
          {
            name: "The Problem",
            icon: "warning",
            link: "theproblem",
            position: void 0,
          },
          {
            name: "The Solution",
            icon: "emoji_objects",
            link: "thesolution",
            position: void 0,
          },
          {
            name: "Roadmap",
            icon: "signpost",
            link: "roadmap",
            position: void 0,
          },
          {
            name: "Tokenomics",
            icon: "toll",
            link: "tokenomics",
            position: void 0,
          },
          { name: "Team", icon: "groups", link: "team", position: void 0 },
        ],
        we = [
          {
            text: "Existing DAOs that need on-chain voting",
            icon: "/icons/StrongHandshakeIcon.svg",
          },
          {
            text: "Investment groups that pool their resources to meet minimums",
            icon: "/icons/GoldBarsIcon.svg",
          },
          {
            text: "Developer teams that need to protect funding runway",
            icon: "/icons/DevIcon.svg",
          },
          {
            text: "Startups looking to raise funds",
            icon: "/icons/TokenIcon.svg",
          },
          {
            text: "Blockchain Projects that need to provide transparency and rugpull resistance",
            icon: "/icons/CubesIcon.svg",
          },
          {
            text: "P2E gaming guilds that want to play in shifts",
            icon: "/icons/GamingIcon.svg",
          },
        ],
        ye = [
          {
            num: "01",
            title: "Standard Functionality and Governance Options",
            body: "A software suite that offers a selection of pre-defined governance options and capabilities that simplifies the whole process of creating and participating in a DAO, with clear documentation that eliminates the need to read the DAO smart contracts and open source code for those with the desire and ability to review the code themselves.",
          },
          {
            num: "02",
            title: "Support",
            body: "DAOs are a new type of organization. The concept will evolve. Individual groups will grow and change. DAOs are going to need membership support and developers that can implement new features to meet the needs of the DAO.",
          },
          {
            num: "03",
            title: "Security",
            body: "All smart contracts are reviewed by independent third parties familiar with Ergoscript to make sure it conforms to the best practices. Further, smart contracts will be tested extensively to ensure funds are secure, and vote tallies are fair, transparent, and untamperable. ",
          },
        ],
        Ze = [
          {
            title: "Distribution",
            fragment: (0, i.jsx)(ee, {
              rows: [
                {
                  name: "Ergopad Staker Round",
                  amount: 28e6,
                  value: "0.001",
                  tge: "",
                  freq: "Daily",
                  length: "12 Months",
                  cliff: "None",
                },
                {
                  name: "Seed Round",
                  amount: 36e6,
                  value: "0.005",
                  tge: "",
                  freq: "Daily",
                  length: "9 Months",
                  cliff: "None",
                },
                {
                  name: "Strategic Round",
                  amount: 2e7,
                  value: "0.008",
                  tge: "",
                  freq: "Daily",
                  length: "6 Months",
                  cliff: "None",
                },
                {
                  name: "Liquidity (Locked)",
                  amount: 16e6,
                  value: "0.01",
                  tge: "100%",
                  freq: "",
                  length: "",
                  cliff: "",
                },
                {
                  name: "Marketing",
                  amount: 2e7,
                  value: "",
                  tge: "10%",
                  freq: "Monthly",
                  length: "24 Months",
                  cliff: "1 Month",
                },
                {
                  name: "Staking Rewards",
                  amount: 4e7,
                  value: "",
                  tge: "",
                  freq: "Daily",
                  length: "48 Months",
                  cliff: "",
                },
                {
                  name: "Airdrops",
                  amount: 2e6,
                  value: "",
                  tge: "",
                  freq: "",
                  length: "",
                  cliff: "",
                },
                {
                  name: "DAO Reserve",
                  amount: 16e6,
                  value: "",
                  tge: "10%",
                  freq: "Quarterly",
                  length: "5 Quarters",
                  cliff: "1 Quarter",
                },
                {
                  name: "Advisors",
                  amount: 6e6,
                  value: "",
                  tge: "5%",
                  freq: "Monthly",
                  length: "6 Months",
                  cliff: "3 Months",
                },
                {
                  name: "Team",
                  amount: 16e6,
                  value: "",
                  tge: "5%",
                  freq: "Monthly",
                  length: "12 Months",
                  cliff: "6 Months",
                },
              ],
              heading: [
                { id: "name", name: "Name" },
                { id: "amount", name: "Amount" },
                { id: "value", name: "Value" },
                { id: "tge", name: "TGE" },
                { id: "freq", name: "Frequency" },
                { id: "length", name: "Length" },
                { id: "cliff", name: "Cliff" },
              ],
            }),
          },
          {
            title: "Chart",
            fragment: (0, i.jsx)(l.Z, {
              sx: { p: "24px", minHeight: "600px" },
              children: "Hello",
            }),
          },
        ],
        ke = {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          fontFamily: '"Inter", sans-serif',
          mb: "12px",
          textAlign: "center",
        },
        Pe = {
          color: ge.Cs.palette.text.primary,
          fontSize: "inherit",
          "&:hover": { color: ge.Cs.palette.primary.main },
        },
        Se = function (e) {
          var t = e.person;
          return (0, i.jsx)(P.Z, {
            sx: {
              background: "rgba(255, 255, 255, 0.02)",
              width: "196px",
              maxWidth: "calc(100vw - 48px)",
              whiteSpace: "normal",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            },
            children: (0, i.jsx)(S.Z, {
              sx: { height: "100%" },
              children: (0, i.jsxs)(h.ZP, {
                container: !0,
                direction: "column",
                justifyContent: "space-between",
                alignItems: "center",
                sx: { height: "100%" },
                children: [
                  (0, i.jsxs)(h.ZP, {
                    item: !0,
                    children: [
                      (0, i.jsx)(E.Z, {
                        src: null === t || void 0 === t ? void 0 : t.image,
                        sx: { width: 80, height: 80, mx: "auto" },
                        alt: t.name,
                      }),
                      (0, i.jsx)(O.Z, {
                        sx: je({}, ke, { mt: "12px" }),
                        children: t.name,
                      }),
                      (0, i.jsx)(O.Z, {
                        sx: je({}, ke, { color: "#aaa" }),
                        children: t.title,
                      }),
                    ],
                  }),
                  (0, i.jsx)(h.ZP, {
                    item: !0,
                    children: (0, i.jsxs)(h.ZP, {
                      container: !0,
                      spacing: 2,
                      children: [
                        t.linkedin
                          ? (0, i.jsx)(h.ZP, {
                              item: !0,
                              children: (0, i.jsx)(z.Z, {
                                href: t.linkedin,
                                target: "_blank",
                                sx: Pe,
                                rel: "noreferrer",
                                children: (0, i.jsx)(fe, {
                                  fontSize: "inherit",
                                }),
                              }),
                            })
                          : null,
                        t.twitter
                          ? (0, i.jsx)(h.ZP, {
                              item: !0,
                              children: (0, i.jsx)(z.Z, {
                                href: t.twitter,
                                target: "_blank",
                                sx: Pe,
                                rel: "noreferrer",
                                children: (0, i.jsx)(pe.Z, {
                                  fontSize: "inherit",
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Ee = [
          {
            name: "Marty C.",
            title: "CEO",
            image: "",
            linkedin: "",
            twitter: "https://twitter.com/esot321c",
          },
          {
            name: "Leif Erickson",
            title: "CTO",
            image: "",
            linkedin: "",
            twitter: "https://twitter.com/leiferiqson",
          },
          {
            name: "Nicolas Bondancia Girard",
            title: "UX/UI Designer",
            image: "/images/team/nico.png",
            linkedin:
              "https://linkedin.com/in/nicolas-bondancia-girard-aa39a0197/",
            twitter: "https://twitter.com/NicoUXUI",
          },
          {
            name: "Ornella Manes",
            title: "Graphic Designer",
            image: "/images/team/orne.jpeg",
            linkedin: "https://linkedin.com/in/ornellamanes/",
            twitter: "",
          },
          {
            name: "Robert Pieter van Leeuwen - Luivatra",
            title: "Lead Ergoscript Dev",
            image: "",
            linkedin:
              "https://linkedin.com/in/robert-pieter-van-leeuwen-28b8b853/",
            twitter: "https://twitter.com/Luivatra",
          },
          {
            name: "Abhishek Pal - noob77777",
            title: "Full Stack Dev",
            image: "/images/team/noob.jpg",
            linkedin: "",
            twitter: "https://twitter.com/abhishekpc3po",
          },
          {
            name: "Trapper T",
            title: "Front End Dev",
            image: "",
            linkedin: "",
            twitter: "",
          },
          {
            name: "Alexis Ekici",
            title: "Marketing Manager",
            image: "/images/team/alexis.jpg",
            linkedin: "",
            twitter: "https://twitter.com/AlexisEkici",
          },
        ];
      function Oe() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.Z, {
              bgUrl: "/about-header-bg.png",
              sectionTitle: "About",
              titleLineOne: "What Is",
              titleLineTwo: "Paideia<",
              subTitleOne: "A Web3 DAO Management",
              subTitleTwo: "Software Suite",
            }),
            (0, i.jsx)(I.Z, {
              sx: { px: "24px", py: "60px" },
              id: "navContainer",
              children: (0, i.jsxs)(Z, {
                navLinks: ve,
                children: [
                  (0, i.jsxs)(l.Z, {
                    component: "section",
                    id: "introduction",
                    children: [
                      (0, i.jsxs)(h.ZP, {
                        container: !0,
                        children: [
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            md: 7,
                            children: (0, i.jsx)(k.Z, {
                              small: !0,
                              sx: { mb: "48px" },
                              children:
                                "Paideia is an organization whose purpose is to create a functional, secure, and well-documented DAO software suite that supports DAOs as they form and develop. It will make it easy for anyone to initiate a DAO, distribute tokens using various methods, create proposals and collect votes. It will help various organizations share funds in a secure and fair way.",
                            }),
                          }),
                          (0, i.jsx)(h.ZP, { item: !0, md: 5 }),
                        ],
                      }),
                      (0, i.jsxs)(h.ZP, {
                        container: !0,
                        children: [
                          (0, i.jsx)(h.ZP, { item: !0, md: 3 }),
                          (0, i.jsxs)(h.ZP, {
                            item: !0,
                            md: 7,
                            children: [
                              (0, i.jsx)(O.Z, {
                                sx: { fontWeight: "700", mb: "48px" },
                                children:
                                  "Anyone who needs to manage a treasury as a group will benefit from these tools. Examples include:",
                              }),
                              (0, i.jsx)(h.ZP, {
                                container: !0,
                                justifyContent: "center",
                                spacing: 6,
                                sx: { mb: "48px" },
                                children: we.map(function (e, t) {
                                  var n = e.text,
                                    o = e.icon;
                                  return (0,
                                  i.jsxs)(h.ZP, { item: !0, md: 6, sx: { maxWidth: "320px" }, children: [(0, i.jsx)("img", { src: o, width: 35, height: 35 }), (0, i.jsx)(O.Z, { sx: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: "600", fontSize: "18px" }, children: n })] }, t);
                                }),
                              }),
                              (0, i.jsx)(h.ZP, { item: !0, md: 2 }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(l.Z, {
                    component: "section",
                    id: "whitepaper",
                    children: (0, i.jsx)(D.Z, { sx: { my: "64px" } }),
                  }),
                  (0, i.jsxs)(l.Z, {
                    component: "section",
                    id: "theproblem",
                    children: [
                      (0, i.jsx)(C.Z, {
                        category: "The Problem",
                        title: "Functionality, Security, and Support",
                        sx: { mb: "120px" },
                        children:
                          "People do not join DAOs to create software. They join them to accomplish something in the real world that benefits them or their communities. But, a DAO needs software to enable it to function as a decentralized, autonomous organization. DAOs need an off-the-shelf DAO toolkit, one that provides:",
                      }),
                      (0, i.jsxs)(h.ZP, {
                        container: !0,
                        sx: { mb: "200px" },
                        children: [
                          (0, i.jsx)(h.ZP, { item: !0, md: 3 }),
                          (0, i.jsx)(h.ZP, {
                            item: !0,
                            md: 7,
                            children: (0, i.jsx)(h.ZP, {
                              container: !0,
                              direction: "column",
                              spacing: 12,
                              children: ye.map(function (e, t) {
                                var n = e.num,
                                  o = e.title,
                                  r = e.body;
                                return (0,
                                i.jsx)(h.ZP, { item: !0, children: (0, i.jsxs)(h.ZP, { container: !0, children: [(0, i.jsx)(h.ZP, { item: !0, xs: 4, children: (0, i.jsxs)(O.Z, { sx: { fontFamily: '"Viga", sans-serif', fontSize: "100px", lineHeight: "100px" }, children: [n, "/"] }) }), (0, i.jsxs)(h.ZP, { item: !0, xs: 8, children: [(0, i.jsx)(O.Z, { sx: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: "700", fontSize: "24px" }, children: o }), (0, i.jsx)(T.Z, { sx: { my: "12px" } }), (0, i.jsx)(O.Z, { children: r })] })] }) }, t);
                              }),
                            }),
                          }),
                          (0, i.jsx)(h.ZP, { item: !0, md: 2 }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)(l.Z, {
                    component: "section",
                    id: "thesolution",
                    children: [
                      (0, i.jsx)(l.Z, {
                        sx: { mb: "48px" },
                        children: (0, i.jsx)("img", {
                          src: "/exclamation.svg",
                          height: 266,
                          width: 60,
                        }),
                      }),
                      (0, i.jsx)(C.Z, {
                        category: "The Solution",
                        title: "Paideia is a DAO management software suite",
                        sx: { mb: "280px" },
                        children:
                          "It is designed to make it easy for anyone to create, manage and be involved in a DAO, as well as facilitate the distribution of governance tokens and allow the ability to raise funds. The technical goal is to provide a secure DAO tool set that is open, easy to use, inexpensive, and allows for use in any environment. With Paideia in the hands of anyone that wishes to use it, this software suite can open new ways for people to work together, to change their lives and the world for the better.",
                      }),
                    ],
                  }),
                  (0, i.jsx)(l.Z, {
                    component: "section",
                    id: "roadmap",
                    children: (0, i.jsx)(U, { sx: { mb: "280px" } }),
                  }),
                  (0, i.jsxs)(l.Z, {
                    component: "section",
                    id: "tokenomics",
                    children: [
                      (0, i.jsx)(C.Z, {
                        category: "Paideia Token",
                        title: "Tokenomics",
                        sx: { mb: "100px" },
                      }),
                      (0, i.jsx)(l.Z, {
                        sx: { width: "100%", mb: "280px" },
                        children: (0, i.jsx)(ue, {
                          tabs: Ze,
                          headline:
                            "There will be a max supply of 200M Paideia tokens distributed as follows: ",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(l.Z, {
                    component: "section",
                    id: "team",
                    children: [
                      (0, i.jsx)(C.Z, {
                        category: "Get to know us",
                        title: "Our Team",
                        sx: { mb: "100px" },
                      }),
                      (0, i.jsx)(me.Z, {
                        uniqueId: "team",
                        contained: !0,
                        children: Ee.map(function (e, t) {
                          return (0, i.jsx)(Se, { person: e }, t);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [2034, 2829, 9774, 2888, 179], function () {
      return (t = 74613), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
