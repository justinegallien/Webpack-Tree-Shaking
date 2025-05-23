(() => {
  "use strict";
  var e = {
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var s = e[i],
              u = r.base ? s[0] + r.base : s[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var p = t(l),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = i),
                n.splice(i, 0, { identifier: l, updater: m, references: 1 });
            }
            c.push(l);
          }
          return c;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = t(a[c]);
              n[i].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var d = t(a[u]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = s;
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (c[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var d = [].concat(e[u]);
                (r && c[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      365: (e, n, t) => {
        t.d(n, { A: () => i });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          c = t.n(a)()(o());
        c.push([
          e.id,
          "body{\n    margin: 0;\n    background-color: #f3ddf0;;\n    font-family: 'Times New Roman', Times, serif;\n    color: #aef3d1;\n}\n.card{\n    border: 1px solid #770067;\n    border-radius: 5px;\n    margin: 1rem;\n}\n\n.card h2{\n    margin: 0.25rem;\n    color: rgb(0, 100, 100);\n}",
          "",
        ]);
        const i = c;
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    a = t(825),
    c = t.n(a),
    i = t(659),
    s = t.n(i),
    u = t(56),
    d = t.n(u),
    l = t(540),
    p = t.n(l),
    f = t(113),
    m = t.n(f),
    v = t(365),
    y = {};
  (y.styleTagTransform = m()),
    (y.setAttributes = d()),
    (y.insert = s().bind(null, "head")),
    (y.domAPI = c()),
    (y.insertStyleElement = p()),
    o()(v.A, y),
    v.A && v.A.locals && v.A.locals,
    (async function () {
      document.body.prepend(
        (function () {
          const e = document.createElement("header");
          (e.style.padding = "1rem"),
            (e.style.backgroundColor = "teal"),
            (e.style.color = "purple");
          const n = document.createElement("h1");
          return (n.innerText = "Webpack Demo"), e.appendChild(n), e;
        })()
      ),
        document.body.appendChild(
          (function () {
            const e = document.createElement("footer");
            (e.style.padding = "1rem"),
              (e.style.backgroundColor = "teal"),
              (e.style.color = "purple"),
              (e.style.textAlign = "center");
            const n = document.createElement("p");
            return (
              (n.innerText = " &copy; Justine Gallien 2025"),
              e.appendChild(n),
              e
            );
          })()
        );
      const e = document.createElement("main");
      document.body.insertBefore(e, document.querySelector("footer")),
        (
          await (async function () {
            return Promise.resolve([
              { name: "Treasure", age: 7 },
              { name: "Unique", age: 12 },
              { name: "Star", age: 20 },
            ]);
          })()
        ).forEach((n) =>
          e.appendChild(
            (function ({ name: e, age: n }) {
              const t = document.createElement("div");
              t.classList = "card";
              const r = document.createElement("h2");
              r.innerText = e;
              const o = document.createElement("p");
              return (o.innerText = n), t.appendChild(r), t.appendChild(o), t;
            })(n)
          )
        );
    })();
})();
