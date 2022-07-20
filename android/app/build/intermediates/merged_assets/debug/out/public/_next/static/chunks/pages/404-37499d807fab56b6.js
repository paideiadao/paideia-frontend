(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2197],
  {
    13282: function (e, t, n) {
      "use strict";
      var i = n(64836);
      t.Z = void 0;
      var s = i(n(64938)),
        r = n(85893),
        x = (0, s.default)(
          (0, r.jsx)("path", { d: "M3 3h18v18H3z" }),
          "Square"
        );
      t.Z = x;
    },
    9014: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return n(27492);
        },
      ]);
    },
    40475: function (e, t, n) {
      "use strict";
      var i = n(85893),
        s = (n(67294), n(46574)),
        r = n(87357),
        x = n(48263),
        o = n(23972),
        a = n(93516),
        c = n(17098),
        l = {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        };
      t.Z = function (e) {
        var t = e.bgUrl,
          n = e.sectionTitle,
          p = e.titleLineOne,
          h = e.titleLineTwo,
          m = e.subTitleOne,
          d = e.subTitleTwo;
        return (0, i.jsxs)(s.Z, {
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
            (0, i.jsxs)(x.ZP, {
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
                (0, i.jsx)(x.ZP, { item: !0, xs: 0, sm: 1, lg: 3 }),
                (0, i.jsxs)(x.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 11,
                  lg: 9,
                  children: [
                    (0, i.jsx)(c.Z, { marginBottom: "80px", children: n }),
                    (0, i.jsx)(o.Z, {
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
                      children: p,
                    }),
                    (0, i.jsx)(o.Z, {
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
                    (0, i.jsx)(x.ZP, {
                      container: !0,
                      wrap: "nowrap",
                      spacing: 2,
                      sx: { mb: "120px" },
                      children:
                        m &&
                        d &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(x.ZP, {
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
                            (0, i.jsxs)(x.ZP, {
                              item: !0,
                              zeroMinWidth: !0,
                              children: [
                                (0, i.jsx)(o.Z, {
                                  component: "p",
                                  sx: l,
                                  children: m,
                                }),
                                (0, i.jsx)(o.Z, {
                                  component: "p",
                                  sx: l,
                                  children: d,
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
    17098: function (e, t, n) {
      "use strict";
      var i = n(85893),
        s = (n(67294), n(48263)),
        r = n(23972),
        x = n(13282);
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
              children: (0, i.jsx)(x.Z, { fontSize: "inherit" }),
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
    27492: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n(85893),
        s = n(40475);
      function r() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.Z, {
            bgUrl: "/about-header-bg.png",
            sectionTitle: "Page Not Found",
            titleLineOne: "Error 404",
            titleLineTwo: "Not Found",
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (t = 9014), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
