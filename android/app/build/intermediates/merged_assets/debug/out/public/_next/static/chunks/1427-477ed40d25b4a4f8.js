"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1427],
  {
    29509: function (e, n, t) {
      var i = t(85893),
        r = (t(67294), t(48263)),
        s = t(87357),
        o = t(23972),
        l = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
        a = {
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "32px",
        };
      n.Z = function (e) {
        var n = e.small,
          t = e.sx,
          x = e.children;
        return (0, i.jsxs)(r.ZP, {
          container: !0,
          wrap: "nowrap",
          spacing: 2,
          sx: t,
          children: [
            (0, i.jsx)(r.ZP, {
              item: !0,
              children: (0, i.jsx)(s.Z, {
                sx: {
                  mt: "3px",
                  ml: n ? "0" : "36px",
                  width: "8px",
                  height: "95%",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                },
              }),
            }),
            (0, i.jsx)(r.ZP, {
              item: !0,
              zeroMinWidth: !0,
              children: (0, i.jsx)(o.Z, {
                component: "p",
                sx: n ? l : a,
                children: x,
              }),
            }),
          ],
        });
      };
    },
    43487: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      });
      var i = t(85893),
        r = t(98396),
        s = t(23972),
        o = t(69397),
        l = t(48263),
        a = t(87357),
        x = t(46574),
        c = t(93619),
        d = t(93516),
        h = t(17098),
        p = t(13056),
        m = t.n(p),
        u = t(2734);
      function g(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function j(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            i.forEach(function (n) {
              g(e, n, t[n]);
            });
        }
        return e;
      }
      var f = {
          fontSize: "48px",
          fontWeight: "400",
          lineHeight: "116.7%",
          mb: "24px",
          color: d.Cs.palette.text.primary,
          textTransform: "uppercase",
          fontFamily: '"Viga", sans-serif',
        },
        b = {
          fontSize: "34px",
          lineHeight: "41px",
          fontWeight: "700",
          color: d.Cs.palette.text.primary,
          fontFamily: '"Space Grotesk", sans-serif',
          mb: "16px",
        },
        Z = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
          mb: "16px",
        };
      function v(e) {
        var n = (0, u.Z)();
        return (0, i.jsx)(m(), {
          autoPlay: !0,
          animation: "slide",
          height: (0, r.Z)(n.breakpoints.up("md")) ? "558px" : void 0,
          navButtonsAlwaysVisible: !!(0, r.Z)(n.breakpoints.up("md")),
          navButtonsProps: {
            style: { backgroundColor: d.ib.palette.primary.main },
          },
          sx: { zIndex: "2", maxWidth: "xl", mx: "auto" },
          children: [
            {
              label: "Gaming",
              title: "Using paideia in the gaming world",
              content:
                "ErgoGames.io took root in the idea that the Ergo Blockchain has tremendous potential to become a leading layer-1 solution, and that blockchain-based games will play an integral role in the network's growth.",
              link: "/",
              image: "/images/highlight.png",
            },
            {
              label: "Art Media",
              title: "Teams of artists can combine forces",
              content:
                "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
              link: "/",
              image: "/images/highlight.png",
            },
            {
              label: "Music DAOs",
              title: "Want to collaborate with other musicians? ",
              content: "Do it with Paideia",
              link: "/",
              image: "/images/highlight.png",
            },
            {
              label: "Music DAOs",
              title: "Want to collaborate with other musicians? ",
              content: "Do it with Paideia",
              link: "/",
              image: "/images/highlight.png",
            },
            {
              label: "Art Media",
              title: "Teams of artists can combine forces",
              content:
                "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
              link: "/",
              image: "/images/highlight.png",
            },
          ].map(function (e, n) {
            return (0, i.jsx)(y, { item: e }, n);
          }),
        });
      }
      function y(e) {
        var n = (0, u.Z)(),
          t = (0, r.Z)(n.breakpoints.up("md")),
          d = (0, r.Z)(n.breakpoints.up("lg")),
          h = function () {
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(s.Z, { sx: b, children: e.item.title }),
                (0, i.jsx)(s.Z, { sx: Z, children: e.item.content }),
                (0, i.jsx)(o.Z, {
                  href: e.item.link,
                  endIcon: (0, i.jsx)(c.Z, {}),
                  children: "Check it out",
                }),
              ],
            });
          };
        return (0, r.Z)(n.breakpoints.up("xl"))
          ? (0, i.jsxs)(l.ZP, {
              container: !0,
              spacing: 12,
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              sx: { overflow: "hidden", mr: "96px" },
              children: [
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  children: (0, i.jsx)(a.Z, {
                    sx: {
                      position: "relative",
                      width: "100%",
                      height: "558px",
                    },
                    children: (0, i.jsx)(a.Z, {
                      sx: {
                        position: "absolute",
                        right: "0",
                        top: "0",
                        overflow: "visible",
                        zIndex: "1",
                      },
                      children: (0, i.jsx)(a.Z, {
                        sx: {
                          backgroundImage: "url(".concat(e.item.image, ")"),
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          width: "768px",
                          height: "558px",
                          zIndex: "2",
                        },
                        children: (0, i.jsx)(a.Z, {
                          sx: {
                            width: "100%",
                            height: "100%",
                            background: "rgba(111,161,169,1)",
                            mixBlendMode: "hard-light",
                          },
                        }),
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  children: (0, i.jsx)(a.Z, {
                    maxWidth: "520px",
                    children: (0, i.jsx)(h, {}),
                  }),
                }),
              ],
            })
          : d
          ? (0, i.jsxs)(l.ZP, {
              container: !0,
              spacing: 6,
              maxWidth: "100vw",
              alignItems: "center",
              sx: { overflow: "hidden", mx: "auto", px: "24px" },
              children: [
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  children: (0, i.jsx)(a.Z, {
                    sx: {
                      position: "relative",
                      width: "100%",
                      height: "558px",
                    },
                    children: (0, i.jsx)(a.Z, {
                      sx: {
                        position: { xs: "relative", md: "absolute" },
                        right: "0",
                        top: "0",
                        overflow: "visible",
                        zIndex: "1",
                      },
                      children: (0, i.jsx)(a.Z, {
                        sx: {
                          backgroundImage: "url(".concat(e.item.image, ")"),
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          width: "768px",
                          height: "558px",
                          zIndex: "2",
                        },
                        children: (0, i.jsx)(a.Z, {
                          sx: {
                            width: "100%",
                            height: "100%",
                            background: "rgba(111,161,169,1)",
                            mixBlendMode: "hard-light",
                          },
                        }),
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  children: (0, i.jsx)(a.Z, {
                    sx: { maxWidth: "480px" },
                    children: (0, i.jsx)(h, {}),
                  }),
                }),
              ],
            })
          : t
          ? (0, i.jsxs)(l.ZP, {
              container: !0,
              spacing: 6,
              maxWidth: "lg",
              alignItems: "center",
              sx: { overflow: "hidden" },
              children: [
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  children: (0, i.jsx)(a.Z, {
                    sx: {
                      backgroundImage: "url(".concat(e.item.image, ")"),
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      height: "558px",
                      zIndex: "2",
                    },
                    children: (0, i.jsx)(a.Z, {
                      sx: {
                        width: "100%",
                        height: "100%",
                        background: "rgba(111,161,169,1)",
                        mixBlendMode: "hard-light",
                      },
                    }),
                  }),
                }),
                (0, i.jsx)(l.ZP, {
                  item: !0,
                  md: 6,
                  sx: { pr: "63px" },
                  children: (0, i.jsx)(h, {}),
                }),
              ],
            })
          : (0, i.jsxs)(x.Z, {
              sx: { display: "block", positoin: "relative" },
              children: [
                (0, i.jsx)(a.Z, {
                  sx: {
                    height: "400px",
                    top: "0",
                    left: "0",
                    width: "100vw",
                    position: "absolute",
                    zIndex: "-2",
                    maskImage: "linear-gradient(black 40%, transparent 100%)",
                  },
                  children: (0, i.jsx)(a.Z, {
                    sx: {
                      backgroundImage: "url(".concat(e.item.image, ")"),
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      width: "100vw",
                      height: "400px",
                      zIndex: "2",
                    },
                    children: (0, i.jsx)(a.Z, {
                      sx: {
                        width: "100%",
                        height: "100%",
                        background: "rgba(111,161,169,1)",
                        mixBlendMode: "hard-light",
                      },
                    }),
                  }),
                }),
                (0, i.jsx)(a.Z, {
                  sx: { pt: "300px", position: "relative", display: "block" },
                  children: (0, i.jsx)(h, {}),
                }),
              ],
            });
      }
      function w() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(x.Z, {
              sx: { flexGrow: 1, px: "24px", position: "relative" },
              children: (0, i.jsxs)(l.ZP, {
                container: !0,
                sx: { mt: "120px" },
                children: [
                  (0, i.jsxs)(l.ZP, {
                    item: !0,
                    md: 6,
                    children: [
                      (0, i.jsx)(h.Z, {
                        marginBottom: "24px",
                        children: "Featured",
                      }),
                      (0, i.jsx)(s.Z, {
                        sx: j({}, f, { mb: "64px" }),
                        children: "You can't miss these highlights",
                      }),
                    ],
                  }),
                  (0, i.jsx)(l.ZP, { item: !0, md: 6 }),
                ],
              }),
            }),
            (0, i.jsx)(v, {}),
          ],
        });
      }
    },
    40475: function (e, n, t) {
      var i = t(85893),
        r = (t(67294), t(46574)),
        s = t(87357),
        o = t(48263),
        l = t(23972),
        a = t(93516),
        x = t(17098),
        c = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        };
      n.Z = function (e) {
        var n = e.bgUrl,
          t = e.sectionTitle,
          d = e.titleLineOne,
          h = e.titleLineTwo,
          p = e.subTitleOne,
          m = e.subTitleTwo;
        return (0, i.jsxs)(r.Z, {
          sx: { px: "24px" },
          children: [
            (0, i.jsx)(s.Z, {
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
              children: (0, i.jsx)("img", { src: n }),
            }),
            (0, i.jsxs)(o.ZP, {
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
                (0, i.jsx)(o.ZP, { item: !0, xs: 0, sm: 1, lg: 3 }),
                (0, i.jsxs)(o.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 11,
                  lg: 9,
                  children: [
                    (0, i.jsx)(x.Z, { marginBottom: "80px", children: t }),
                    (0, i.jsx)(l.Z, {
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
                      children: d,
                    }),
                    (0, i.jsx)(l.Z, {
                      sx: {
                        fontSize: { xs: "60px", sm: "80px", md: "100px" },
                        fontWeight: { xs: "400", sm: "600" },
                        color: a.Cs.palette.text.primary,
                        textTransform: "uppercase",
                        fontFamily: '"Viga", sans-serif',
                        letterSpacing: "-1.5px",
                        lineHeight: "100%",
                        mb: "40px",
                      },
                      children: h,
                    }),
                    (0, i.jsx)(o.ZP, {
                      container: !0,
                      wrap: "nowrap",
                      spacing: 2,
                      sx: { mb: "120px" },
                      children:
                        p &&
                        m &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(o.ZP, {
                              item: !0,
                              children: (0, i.jsx)(s.Z, {
                                sx: {
                                  mt: "3px",
                                  width: "8px",
                                  height: "90%",
                                  background:
                                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                                },
                              }),
                            }),
                            (0, i.jsxs)(o.ZP, {
                              item: !0,
                              zeroMinWidth: !0,
                              children: [
                                (0, i.jsx)(l.Z, {
                                  component: "p",
                                  sx: c,
                                  children: p,
                                }),
                                (0, i.jsx)(l.Z, {
                                  component: "p",
                                  sx: c,
                                  children: m,
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
    52264: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Y;
        },
      });
      var i = t(85893),
        r = t(67294),
        s = t(87357),
        o = t(48263),
        l = t(16003),
        a = t(87952),
        x = t(23972),
        c = t(69397),
        d = t(53640),
        h = t(60076),
        p = t(63931),
        m = t(57709),
        u = t(91057),
        g = t(64666),
        j = t(37645),
        f = t(35713),
        b = t(91894),
        Z = t(98396),
        v = t(68162),
        y = t(2734),
        w = t(69587),
        k = t(14957),
        P = t(93619),
        S = t(42761),
        z = t(86532),
        O = t(61250),
        I = t(63083),
        A = t(70785),
        M = t(67720),
        W = t(20847),
        C = t(58128),
        F = t(64986),
        D = t(75716);
      var T = {
          p: "0 0 6px 0",
          minHeight: 0,
          "& .Mui-expanded": { m: "0px", minHeight: 0 },
          "& .MuiAccordionSummary-content": { m: "0 0 0 6px" },
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        },
        H = function (e) {
          var n = e.title,
            t = e.children,
            r = e.noDivider;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(z.Z, {
                sx: {
                  background: "transparent",
                  boxShadow: "none",
                  "&:before": { background: "transparent" },
                },
                disableGutters: !0,
                children: [
                  (0, i.jsx)(O.Z, {
                    expandIcon: (0, i.jsx)(D.Z, { sx: { fontSize: "14px" } }),
                    "aria-controls": "panel-".concat(n.replace(/\s/g, "")),
                    id: "panel-".concat(n.replace(/\s/g, ""), "-header"),
                    sx: T,
                    children: (0, i.jsx)(x.Z, { children: n }),
                  }),
                  (0, i.jsx)(I.Z, {
                    sx: { p: 0 },
                    children: (0, i.jsx)(A.Z, {
                      sx: {
                        "& .MuiFormControlLabel-root .MuiTypography-root": {
                          fontSize: "16px",
                        },
                      },
                      children: t,
                    }),
                  }),
                ],
              }),
              !r &&
                (0, i.jsx)(M.Z, {
                  sx: { background: "rgba(255,255,255,0.005)", my: "12px" },
                }),
            ],
          });
        },
        E = function (e) {
          e =
            null !== e
              ? e
              : (function (e) {
                  throw e;
                })(new TypeError("Cannot destructure undefined"));
          var n = [3, 4520],
            t = (0, r.useState)(n),
            o = t[0],
            l = t[1];
          return (0, i.jsxs)(s.Z, {
            sx: { border: "1px solid #666", p: "12px" },
            children: [
              (0, i.jsx)(x.Z, { sx: { color: "#bbb" }, children: "Filters" }),
              (0, i.jsx)(M.Z, {
                sx: { background: "rgba(255,255,255,0.3)", my: "12px" },
              }),
              (0, i.jsx)(H, {
                title: "Categories",
                children: (0, i.jsxs)(s.Z, {
                  sx: { mx: "6px" },
                  children: [
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Music",
                    }),
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Finance",
                    }),
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Gaming",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(H, {
                title: "Members",
                children: (0, i.jsx)(s.Z, {
                  sx: { mx: "12px" },
                  children: (0, i.jsx)(F.ZP, {
                    getAriaLabel: function () {
                      return "DAO Members";
                    },
                    value: o,
                    onChange: function (e, n) {
                      l(n);
                    },
                    valueLabelDisplay: "auto",
                    min: n[0],
                    max: n[1],
                  }),
                }),
              }),
              (0, i.jsx)(H, {
                title: "Initiation Date",
                children: (0, i.jsxs)(s.Z, {
                  sx: { mx: "6px" },
                  children: [
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Past month",
                    }),
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Past year",
                    }),
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "All time",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(H, {
                title: "Governance",
                noDivider: !0,
                children: (0, i.jsxs)(s.Z, {
                  sx: { mx: "6px" },
                  children: [
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Optimistic",
                    }),
                    (0, i.jsx)(W.Z, {
                      control: (0, i.jsx)(C.Z, {
                        sx: { p: "6px 9px" },
                        size: "small",
                      }),
                      label: "Standard Quorum",
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      function B(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i;
      }
      function G(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function L(e, n) {
        if (null == e) return {};
        var t,
          i,
          r = (function (e, n) {
            if (null == e) return {};
            var t,
              i,
              r = {},
              s = Object.keys(e);
            for (i = 0; i < s.length; i++)
              (t = s[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++)
            (t = s[i]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      function N(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var i,
                r,
                s = [],
                o = !0,
                l = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (i = t.next()).done) &&
                  (s.push(i.value), !n || s.length !== n);
                  o = !0
                );
              } catch (a) {
                (l = !0), (r = a);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (l) throw r;
                }
              }
              return s;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return B(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return B(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var R = function (e) {
          var n = e.dao;
          return (0, i.jsx)(s.Z, {
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
                  sx: { textAlign: "left" },
                  children: [
                    (null === n || void 0 === n ? void 0 : n.category) &&
                      (0, i.jsx)(s.Z, {
                        sx: {
                          position: "absolute",
                          top: "-4px",
                          right: "-6px",
                          fontSize: "12px",
                        },
                        children: (0, i.jsx)(l.Z, {
                          icon: (0, i.jsx)(k.Z, { sx: { fontSize: 16 } }),
                          label: n.category,
                          size: "small",
                          sx: {
                            color: "#bbb",
                            background: "#111827",
                            fontSize: "14px",
                            mb: "24px",
                            border: "1px solid #999",
                          },
                        }),
                      }),
                    (0, i.jsx)(a.Z, {
                      src: null === n || void 0 === n ? void 0 : n.image,
                      sx: {
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: "12px",
                        border: "1px solid #000",
                        boxShadow: "0 0 0 2px #666",
                      },
                      alt: n.name,
                    }),
                    (0, i.jsx)(x.Z, {
                      sx: {
                        fontWeight: "700",
                        lineHeight: "42px",
                        mb: "24px",
                        color: "#fff",
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: "34px",
                        letterSpacing: "0.225543px",
                      },
                      children: n.name,
                    }),
                    (0, i.jsx)(x.Z, {
                      sx: { fontSize: "14px", mb: "24px" },
                      children: n.description,
                    }),
                  ],
                }),
                (0, i.jsx)(o.ZP, {
                  item: !0,
                  children: (0, i.jsx)(c.Z, {
                    endIcon: (0, i.jsx)(P.Z, {}),
                    href: n.link,
                    sx: { py: "2px", ml: "-6px" },
                    children: "Learn More",
                  }),
                }),
              ],
            }),
          });
        },
        V = function (e) {
          var n = e.sx,
            t = N(r.useState(""), 2),
            s = t[0],
            o = t[1];
          return (0, i.jsxs)(d.Z, {
            fullWidth: !0,
            sx: n,
            children: [
              (0, i.jsx)(h.Z, {
                id: "sort-select-box-input",
                children: "Sort By",
              }),
              (0, i.jsxs)(w.Z, {
                labelId: "sort-select-box-label",
                id: "sort-select-box",
                value: s,
                label: "Sort By",
                onChange: function (e) {
                  o(e.target.value);
                },
                children: [
                  (0, i.jsx)(p.Z, {
                    value: "",
                    children: (0, i.jsx)("em", { children: "None" }),
                  }),
                  (0, i.jsx)(p.Z, { value: "oldest", children: "Oldest" }),
                  (0, i.jsx)(p.Z, { value: "newest", children: "Newest" }),
                  (0, i.jsx)(p.Z, {
                    value: "most members",
                    children: "Most Members",
                  }),
                  (0, i.jsx)(p.Z, {
                    value: "least members",
                    children: "Least Members",
                  }),
                ],
              }),
            ],
          });
        },
        _ = function (e) {
          var n = e.sx;
          return (0, i.jsxs)(d.Z, {
            fullWidth: !0,
            variant: "outlined",
            sx: n,
            children: [
              (0, i.jsx)(h.Z, {
                htmlFor: "outlined-adornment-search",
                children: "Search",
              }),
              (0, i.jsx)(m.Z, {
                id: "outlined-adornment-search",
                endAdornment: (0, i.jsx)(u.Z, {
                  position: "start",
                  children: (0, i.jsx)(S.Z, {}),
                }),
                label: "Search",
              }),
            ],
          });
        };
      function U(e) {
        var n = e.onClose,
          t = e.value,
          s = e.open,
          o = L(e, ["onClose", "value", "open"]),
          l = N(r.useState(t), 2),
          a = l[0],
          x = l[1],
          d = r.useRef(null);
        r.useEffect(
          function () {
            s || x(t);
          },
          [t, s]
        );
        return (0, i.jsxs)(
          g.Z,
          (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  G(e, n, t[n]);
                });
            }
            return e;
          })(
            {
              sx: {
                "& .MuiDialog-paper": {
                  background: "rgb(14, 20, 33)",
                  width: "100%",
                  maxWidth: "400px",
                  maxHeight: "80vh",
                },
              },
              maxWidth: "xs",
              TransitionProps: {
                onEntering: function () {
                  null != d.current && d.current.focus();
                },
              },
              open: s,
            },
            o,
            {
              children: [
                (0, i.jsx)(j.Z, { children: "Filter & Sort" }),
                (0, i.jsxs)(f.Z, {
                  dividers: !0,
                  children: [
                    (0, i.jsx)(V, { sx: { mb: "24px" } }),
                    (0, i.jsx)(E, {}),
                  ],
                }),
                (0, i.jsxs)(b.Z, {
                  children: [
                    (0, i.jsx)(c.Z, {
                      autoFocus: !0,
                      onClick: function () {
                        n();
                      },
                      children: "Cancel",
                    }),
                    (0, i.jsx)(c.Z, {
                      onClick: function () {
                        n(a);
                      },
                      children: "Ok",
                    }),
                  ],
                }),
              ],
            }
          )
        );
      }
      var Y = function (e) {
        var n = e.daos,
          t = e.sx,
          s = N(r.useState(!1), 2),
          l = s[0],
          a = s[1],
          x = N(r.useState("Dione"), 2),
          d = x[0],
          h = x[1],
          p = (0, y.Z)();
        return (0, i.jsxs)(o.ZP, {
          container: !0,
          sx: t,
          children: [
            (0, i.jsx)(o.ZP, {
              item: !0,
              lg: 3,
              sx: { pr: "24px", display: { xs: "none", lg: "block" } },
              children: (0, i.jsx)(E, {}),
            }),
            (0, i.jsxs)(o.ZP, {
              item: !0,
              lg: 9,
              xs: 12,
              sx: { textAlign: "center" },
              children: [
                (0, Z.Z)(p.breakpoints.up("lg"))
                  ? (0, i.jsxs)(o.ZP, {
                      container: !0,
                      sx: { mb: "32px" },
                      spacing: 3,
                      children: [
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          md: 7,
                          children: (0, i.jsx)(_, {}),
                        }),
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          md: 5,
                          children: (0, i.jsx)(V, {}),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(o.ZP, {
                      container: !0,
                      sx: { mb: "32px" },
                      spacing: 3,
                      direction: "row",
                      children: [
                        (0, i.jsx)(o.ZP, {
                          item: !0,
                          xs: !0,
                          children: (0, i.jsx)(_, {}),
                        }),
                        (0, i.jsxs)(o.ZP, {
                          item: !0,
                          xs: "auto",
                          children: [
                            (0, i.jsx)(c.Z, {
                              sx: { height: "100%" },
                              variant: "outlined",
                              "aria-label": "filter",
                              onClick: function () {
                                a(!0);
                              },
                              children: (0, i.jsx)(v.Z, {}),
                            }),
                            (0, i.jsx)(U, {
                              id: "ringtone-menu",
                              keepMounted: !0,
                              open: l,
                              onClose: function (e) {
                                a(!1), e && h(e);
                              },
                              value: d,
                            }),
                          ],
                        }),
                      ],
                    }),
                (0, i.jsx)(o.ZP, {
                  container: !0,
                  spacing: 4,
                  columns: { xs: 1, sm: 2, sm3: 3, md: 3, md2: 4, lg: 3 },
                  sx: { mb: "24px" },
                  children: n.map(function (e, n) {
                    return (0,
                    i.jsx)(o.ZP, { item: !0, xs: 1, sx: { textAlign: "center" }, children: (0, i.jsx)(R, { dao: e }) }, n);
                  }),
                }),
                (0, i.jsx)(c.Z, {
                  variant: "contained",
                  children: "Load more...",
                }),
              ],
            }),
          ],
        });
      };
    },
    81849: function (e, n, t) {
      var i = t(85893),
        r = (t(67294), t(48263)),
        s = t(23972),
        o = t(17098),
        l = t(29509);
      n.Z = function (e) {
        var n = e.category,
          t = e.title,
          a = e.children,
          x = e.sx;
        return (0, i.jsxs)(r.ZP, {
          container: !0,
          direction: "column",
          spacing: 3,
          sx: x || { mb: "64px" },
          children: [
            (0, i.jsx)(r.ZP, {
              item: !0,
              children: (0, i.jsx)(o.Z, { children: n }),
            }),
            (0, i.jsx)(r.ZP, {
              item: !0,
              children: (0, i.jsx)(s.Z, {
                sx: {
                  fontSize: "48px",
                  fontWeight: "400",
                  lineHeight: "116.7%",
                  textTransform: "uppercase",
                  fontFamily: '"Viga", sans-serif',
                },
                children: t,
              }),
            }),
            a
              ? (0, i.jsx)(r.ZP, {
                  item: !0,
                  children: (0, i.jsxs)(r.ZP, {
                    container: !0,
                    children: [
                      (0, i.jsx)(r.ZP, {
                        item: !0,
                        md: 8,
                        children: (0, i.jsx)(l.Z, { small: !0, children: a }),
                      }),
                      (0, i.jsx)(r.ZP, { item: !0, md: 4 }),
                    ],
                  }),
                })
              : null,
          ],
        });
      };
    },
    17098: function (e, n, t) {
      var i = t(85893),
        r = (t(67294), t(48263)),
        s = t(23972),
        o = t(13282);
      n.Z = function (e) {
        var n = e.marginBottom,
          t = e.children;
        return (0, i.jsxs)(r.ZP, {
          container: !0,
          spacing: 1,
          direction: "row",
          alignItems: "flex-start",
          sx: { mb: n },
          children: [
            (0, i.jsx)(r.ZP, {
              item: !0,
              sx: { fontSize: "13px" },
              children: (0, i.jsx)(o.Z, { fontSize: "inherit" }),
            }),
            (0, i.jsx)(r.ZP, {
              item: !0,
              children: (0, i.jsx)(s.Z, {
                sx: { textTransform: "uppercase", fontSize: "12px" },
                children: t,
              }),
            }),
          ],
        });
      };
    },
  },
]);
