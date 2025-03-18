/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var $v = Object.create;
  var Dr = Object.defineProperty;
  var Zv = Object.getOwnPropertyDescriptor;
  var Jv = Object.getOwnPropertyNames;
  var em = Object.getPrototypeOf,
    tm = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ne = (e, t) => {
      for (var r in t) Dr(e, r, { get: t[r], enumerable: !0 });
    },
    ga = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Jv(t))
          !tm.call(e, i) &&
            i !== r &&
            Dr(e, i, {
              get: () => t[i],
              enumerable: !(n = Zv(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? $v(em(e)) : {}),
      ga(
        t || !e || !e.__esModule
          ? Dr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Qe = (e) => ga(Dr({}, "__esModule", { value: !0 }), e);
  var Qn = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, b) {
        var x = new _.Bare();
        return x.init(f, b);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(f) {
        var b = parseInt(f.slice(1), 16),
          x = (b >> 16) & 255,
          P = (b >> 8) & 255,
          O = 255 & b;
        return [x, P, O];
      }
      function i(f, b, x) {
        return (
          "#" + ((1 << 24) | (f << 16) | (b << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, b) {
        l("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b);
      }
      function u(f, b, x) {
        l("Units do not match [" + f + "]: " + b + ", " + x);
      }
      function s(f, b, x) {
        if ((b !== void 0 && (x = b), f === void 0)) return x;
        var P = x;
        return (
          Le.test(f) || !Xe.test(f)
            ? (P = parseInt(f, 10))
            : Xe.test(f) && (P = 1e3 * parseFloat(f)),
          0 > P && (P = 0),
          P === P ? P : x
        );
      }
      function l(f) {
        oe.debug && window && window.console.warn(f);
      }
      function y(f) {
        for (var b = -1, x = f ? f.length : 0, P = []; ++b < x; ) {
          var O = f[b];
          O && P.push(O);
        }
        return P;
      }
      var h = (function (f, b, x) {
          function P(ae) {
            return typeof ae == "object";
          }
          function O(ae) {
            return typeof ae == "function";
          }
          function q() {}
          function te(ae, he) {
            function Q() {
              var Oe = new se();
              return O(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function se() {}
            he === x && ((he = ae), (ae = Object)), (Q.Bare = se);
            var ue,
              _e = (q[f] = ae[f]),
              Ye = (se[f] = Q[f] = new q());
            return (
              (Ye.constructor = Q),
              (Q.mixin = function (Oe) {
                return (se[f] = Q[f] = te(Q, Oe)[f]), Q;
              }),
              (Q.open = function (Oe) {
                if (
                  ((ue = {}),
                  O(Oe) ? (ue = Oe.call(Q, Ye, _e, Q, ae)) : P(Oe) && (ue = Oe),
                  P(ue))
                )
                  for (var ir in ue) b.call(ue, ir) && (Ye[ir] = ue[ir]);
                return O(Ye.init) || (Ye.init = ae), Q;
              }),
              Q.open(he)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (f, b, x, P) {
              var O = (f /= P) * f,
                q = O * f;
              return (
                b +
                x * (-2.75 * q * O + 11 * O * O + -15.5 * q + 8 * O + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, b, x, P) {
              var O = (f /= P) * f,
                q = O * f;
              return b + x * (-1 * q * O + 3 * O * O + -3 * q + 2 * O);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, b, x, P) {
              var O = (f /= P) * f,
                q = O * f;
              return (
                b +
                x * (0.3 * q * O + -1.6 * O * O + 2.2 * q + -1.8 * O + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, b, x, P) {
              var O = (f /= P) * f,
                q = O * f;
              return b + x * (2 * q * O + -5 * O * O + 2 * q + 2 * O);
            },
          ],
          linear: [
            "linear",
            function (f, b, x, P) {
              return (x * f) / P + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, b, x, P) {
              return x * (f /= P) * f + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, b, x, P) {
              return -x * (f /= P) * (f - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, b, x, P) {
              return (f /= P / 2) < 1
                ? (x / 2) * f * f + b
                : (-x / 2) * (--f * (f - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, b, x, P) {
              return x * (f /= P) * f * f + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, b, x, P) {
              return x * ((f = f / P - 1) * f * f + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, b, x, P) {
              return (f /= P / 2) < 1
                ? (x / 2) * f * f * f + b
                : (x / 2) * ((f -= 2) * f * f + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, b, x, P) {
              return x * (f /= P) * f * f * f + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, b, x, P) {
              return -x * ((f = f / P - 1) * f * f * f - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, b, x, P) {
              return (f /= P / 2) < 1
                ? (x / 2) * f * f * f * f + b
                : (-x / 2) * ((f -= 2) * f * f * f - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, b, x, P) {
              return x * (f /= P) * f * f * f * f + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, b, x, P) {
              return x * ((f = f / P - 1) * f * f * f * f + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, b, x, P) {
              return (f /= P / 2) < 1
                ? (x / 2) * f * f * f * f * f + b
                : (x / 2) * ((f -= 2) * f * f * f * f + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, b, x, P) {
              return -x * Math.cos((f / P) * (Math.PI / 2)) + x + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, b, x, P) {
              return x * Math.sin((f / P) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, b, x, P) {
              return (-x / 2) * (Math.cos((Math.PI * f) / P) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, b, x, P) {
              return f === 0 ? b : x * Math.pow(2, 10 * (f / P - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, b, x, P) {
              return f === P
                ? b + x
                : x * (-Math.pow(2, (-10 * f) / P) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, b, x, P) {
              return f === 0
                ? b
                : f === P
                ? b + x
                : (f /= P / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (f - 1)) + b
                : (x / 2) * (-Math.pow(2, -10 * --f) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, b, x, P) {
              return -x * (Math.sqrt(1 - (f /= P) * f) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, b, x, P) {
              return x * Math.sqrt(1 - (f = f / P - 1) * f) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, b, x, P) {
              return (f /= P / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - f * f) - 1) + b
                : (x / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, b, x, P, O) {
              return (
                O === void 0 && (O = 1.70158),
                x * (f /= P) * f * ((O + 1) * f - O) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, b, x, P, O) {
              return (
                O === void 0 && (O = 1.70158),
                x * ((f = f / P - 1) * f * ((O + 1) * f + O) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, b, x, P, O) {
              return (
                O === void 0 && (O = 1.70158),
                (f /= P / 2) < 1
                  ? (x / 2) * f * f * (((O *= 1.525) + 1) * f - O) + b
                  : (x / 2) *
                      ((f -= 2) * f * (((O *= 1.525) + 1) * f + O) + 2) +
                    b
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        w = window,
        R = "bkwld-tram",
        A = /[\-\.0-9]/g,
        N = /[A-Z]/,
        C = "number",
        M = /^(rgb|#)/,
        k = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        j = "unitless",
        $ = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        V = " ",
        S = T.createElement("a"),
        E = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (f) {
          if (f in S.style) return { dom: f, css: f };
          var b,
            x,
            P = "",
            O = f.split("-");
          for (b = 0; b < O.length; b++)
            P += O[b].charAt(0).toUpperCase() + O[b].slice(1);
          for (b = 0; b < E.length; b++)
            if (((x = E[b] + P), x in S.style))
              return { dom: x, css: D[b] + f };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function"),
        });
      if (H.transition) {
        var J = H.timing.dom;
        if (((S.style[J] = g["ease-in-back"][0]), !S.style[J]))
          for (var re in m) g[re][0] = m[re];
      }
      var U = (t.frame = (function () {
          var f =
            w.requestAnimationFrame ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame ||
            w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame;
          return f && H.bind
            ? f.bind(w)
            : function (b) {
                w.setTimeout(b, 16);
              };
        })()),
        z = (t.now = (function () {
          var f = w.performance,
            b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return b && H.bind
            ? b.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = h(function (f) {
          function b(ne, ce) {
            var Ee = y(("" + ne).split(V)),
              pe = Ee[0];
            ce = ce || {};
            var xe = Y[pe];
            if (!xe) return l("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var Ue = xe[0],
                Pe = this.props[pe];
              return (
                Pe || (Pe = this.props[pe] = new Ue.Bare()),
                Pe.init(this.$el, Ee, xe, ce),
                Pe
              );
            }
          }
          function x(ne, ce, Ee) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: q,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    Q.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    b.call(this, ne, Ee && Ee[1]);
                }
                return q.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var xe = 0;
                Ye.call(
                  this,
                  ne,
                  function (Ie, Qv) {
                    Ie.span > xe && (xe = Ie.span), Ie.stop(), Ie.animate(Qv);
                  },
                  function (Ie) {
                    "wait" in Ie && (xe = s(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  xe > 0 &&
                    ((this.timer = new ie({ duration: xe, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = q));
                var Ue = this,
                  Pe = !1,
                  Nr = {};
                U(function () {
                  Ye.call(Ue, ne, function (Ie) {
                    Ie.active && ((Pe = !0), (Nr[Ie.name] = Ie.nextStyle));
                  }),
                    Pe && Ue.$el.css(Nr);
                });
              }
            }
          }
          function P(ne) {
            (ne = s(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: q,
                  })),
                  (this.active = !0));
          }
          function O(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = q))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function q() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              x.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              Ye.call(this, ce, Oe),
              _e.call(this);
          }
          function ae(ne) {
            te.call(this, ne), Ye.call(this, ne, ir, jv);
          }
          function he(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function Q() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, R),
              (this.$el = this.el = null);
          }
          function _e() {
            var ne,
              ce,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && Ee.push(ce.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[H.transition.dom] = Ee));
          }
          function Ye(ne, ce, Ee) {
            var pe,
              xe,
              Ue,
              Pe,
              Nr = ce !== Oe,
              Ie = {};
            for (pe in ne)
              (Ue = ne[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = Ue))
                  : (N.test(pe) && (pe = r(pe)),
                    pe in Y ? (Ie[pe] = Ue) : (Pe || (Pe = {}), (Pe[pe] = Ue)));
            for (pe in Ie) {
              if (((Ue = Ie[pe]), (xe = this.props[pe]), !xe)) {
                if (!Nr) continue;
                xe = b.call(this, pe);
              }
              ce.call(this, xe, Ue);
            }
            Ee && Pe && Ee.call(this, Pe);
          }
          function Oe(ne) {
            ne.stop();
          }
          function ir(ne, ce) {
            ne.set(ce);
          }
          function jv(ne) {
            this.$el.css(ne);
          }
          function Ge(ne, ce) {
            f[ne] = function () {
              return this.children
                ? Yv.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function Yv(ne, ce) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) ne.apply(this.children[Ee], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = B(this.el, "transition");
              ce && !$.test(ce) && (this.upstream = ce);
            }
            H.backface &&
              oe.hideBackface &&
              v(this.el, H.backface.css, "hidden");
          }),
            Ge("add", b),
            Ge("start", x),
            Ge("wait", P),
            Ge("then", O),
            Ge("next", q),
            Ge("stop", te),
            Ge("set", ae),
            Ge("show", he),
            Ge("hide", Q),
            Ge("redraw", se),
            Ge("destroy", ue);
        }),
        _ = h(p, function (f) {
          function b(x, P) {
            var O = e.data(x, R) || e.data(x, R, new p.Bare());
            return O.el || O.init(x), P ? O.start(P) : O;
          }
          f.init = function (x, P) {
            var O = e(x);
            if (!O.length) return this;
            if (O.length === 1) return b(O[0], P);
            var q = [];
            return (
              O.each(function (te, ae) {
                q.push(b(ae, P));
              }),
              (this.children = q),
              this
            );
          };
        }),
        I = h(function (f) {
          function b() {
            var q = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(q), te;
          }
          function x(q, te, ae) {
            return te !== void 0 && (ae = te), q in g ? q : ae;
          }
          function P(q) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
            return (te ? i(te[1], te[2], te[3]) : q).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var O = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (q, te, ae, he) {
            (this.$el = q), (this.el = q[0]);
            var Q = te[0];
            ae[2] && (Q = ae[2]),
              Z[Q] && (Q = Z[Q]),
              (this.name = Q),
              (this.type = ae[1]),
              (this.duration = s(te[1], this.duration, O.duration)),
              (this.ease = x(te[2], this.ease, O.ease)),
              (this.delay = s(te[3], this.delay, O.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = he.unit || this.unit || oe.defaultUnit),
              (this.angle = he.angle || this.angle || oe.defaultAngle),
              oe.fallback || he.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + g[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (f.set = function (q) {
              (q = this.convert(q, this.type)), this.update(q), this.redraw();
            }),
            (f.transition = function (q) {
              (this.active = !0),
                (q = this.convert(q, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  q == "auto" && (q = b.call(this))),
                (this.nextStyle = q);
            }),
            (f.fallback = function (q) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (q = this.convert(q, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  q == "auto" && (q = b.call(this))),
                (this.tween = new L({
                  from: te,
                  to: q,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return B(this.el, this.name);
            }),
            (f.update = function (q) {
              v(this.el, this.name, q);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                v(this.el, this.name, this.get()));
              var q = this.tween;
              q && q.context && q.destroy();
            }),
            (f.convert = function (q, te) {
              if (q == "auto" && this.auto) return q;
              var ae,
                he = typeof q == "number",
                Q = typeof q == "string";
              switch (te) {
                case C:
                  if (he) return q;
                  if (Q && q.replace(A, "") === "") return +q;
                  ae = "number(unitless)";
                  break;
                case M:
                  if (Q) {
                    if (q === "" && this.original) return this.original;
                    if (te.test(q))
                      return q.charAt(0) == "#" && q.length == 7 ? q : P(q);
                  }
                  ae = "hex or rgb string";
                  break;
                case k:
                  if (he) return q + this.unit;
                  if (Q && te.test(q)) return q;
                  ae = "number(px) or string(unit)";
                  break;
                case F:
                  if (he) return q + this.unit;
                  if (Q && te.test(q)) return q;
                  ae = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (he) return q + this.angle;
                  if (Q && te.test(q)) return q;
                  ae = "number(deg) or string(angle)";
                  break;
                case j:
                  if (he || (Q && F.test(q))) return q;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, q), q;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = h(I, function (f, b) {
          f.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        X = h(I, function (f, b) {
          (f.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        W = h(I, function (f, b) {
          function x(P, O) {
            var q, te, ae, he, Q;
            for (q in P)
              (he = de[q]),
                (ae = he[0]),
                (te = he[1] || q),
                (Q = this.convert(P[q], ae)),
                O.call(this, te, Q, ae);
          }
          (f.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  v(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (P) {
              x.call(this, P, function (O, q) {
                this.current[O] = q;
              }),
                v(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (P) {
              var O = this.values(P);
              this.tween = new fe({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var q,
                te = {};
              for (q in this.current) te[q] = q in O ? O[q] : this.current[q];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (f.fallback = function (P) {
              var O = this.values(P);
              this.tween = new fe({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              v(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (P) {
              var O,
                q = "";
              for (O in P) q += O + "(" + P[O] + ") ";
              return q;
            }),
            (f.values = function (P) {
              var O,
                q = {};
              return (
                x.call(this, P, function (te, ae, he) {
                  (q[te] = ae),
                    this.current[te] === void 0 &&
                      ((O = 0),
                      ~te.indexOf("scale") && (O = 1),
                      (this.current[te] = this.convert(O, he)));
                }),
                q
              );
            });
        }),
        L = h(function (f) {
          function b(Q) {
            ae.push(Q) === 1 && U(x);
          }
          function x() {
            var Q,
              se,
              ue,
              _e = ae.length;
            if (_e)
              for (U(x), se = z(), Q = _e; Q--; )
                (ue = ae[Q]), ue && ue.render(se);
          }
          function P(Q) {
            var se,
              ue = e.inArray(Q, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function O(Q) {
            return Math.round(Q * he) / he;
          }
          function q(Q, se, ue) {
            return i(
              Q[0] + ue * (se[0] - Q[0]),
              Q[1] + ue * (se[1] - Q[1]),
              Q[2] + ue * (se[2] - Q[2])
            );
          }
          var te = { ease: g.ease[1], from: 0, to: 1 };
          (f.init = function (Q) {
            (this.duration = Q.duration || 0), (this.delay = Q.delay || 0);
            var se = Q.ease || te.ease;
            g[se] && (se = g[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = Q.update || o),
              (this.complete = Q.complete || o),
              (this.context = Q.context || this),
              (this.name = Q.name);
            var ue = Q.from,
              _e = Q.to;
            ue === void 0 && (ue = te.from),
              _e === void 0 && (_e = te.to),
              (this.unit = Q.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = z()),
              Q.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = z()), (this.active = !0), b(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), P(this));
            }),
            (f.render = function (Q) {
              var se,
                ue = Q - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? q(this.startRGB, this.endRGB, _e)
                    : O(this.begin + _e * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (Q, se) {
              if (((se += ""), (Q += ""), Q.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(Q)),
                  (this.endHex = Q),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(A, ""),
                  _e = Q.replace(A, "");
                ue !== _e && u("tween", se, Q), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (Q = parseFloat(Q)),
                (this.begin = this.value = se),
                (this.change = Q - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            he = 1e3;
        }),
        ie = h(L, function (f) {
          (f.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || o),
              (this.context = b.context),
              this.play();
          }),
            (f.render = function (b) {
              var x = b - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = h(L, function (f, b) {
          (f.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var P, O;
            for (P in x.values)
              (O = x.values[P]),
                this.current[P] !== O &&
                  this.tweens.push(
                    new L({
                      name: P,
                      from: this.current[P],
                      to: O,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (x) {
              var P,
                O,
                q = this.tweens.length,
                te = !1;
              for (P = q; P--; )
                (O = this.tweens[P]),
                  O.context &&
                    (O.render(x), (this.current[O.name] = O.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var x,
                  P = this.tweens.length;
                for (x = P; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!H.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var b = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new L(f);
        }),
        (t.delay = function (f, b, x) {
          return new ie({ complete: b, duration: f, context: x });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var v = e.style,
        B = e.css,
        Z = { transform: H.transform && H.transform.css },
        Y = {
          color: [c, M],
          background: [c, M, "background-color"],
          "outline-color": [c, M],
          "border-color": [c, M],
          "border-top-color": [c, M],
          "border-right-color": [c, M],
          "border-bottom-color": [c, M],
          "border-left-color": [c, M],
          "border-width": [I, k],
          "border-top-width": [I, k],
          "border-right-width": [I, k],
          "border-bottom-width": [I, k],
          "border-left-width": [I, k],
          "border-spacing": [I, k],
          "letter-spacing": [I, k],
          margin: [I, k],
          "margin-top": [I, k],
          "margin-right": [I, k],
          "margin-bottom": [I, k],
          "margin-left": [I, k],
          padding: [I, k],
          "padding-top": [I, k],
          "padding-right": [I, k],
          "padding-bottom": [I, k],
          "padding-left": [I, k],
          "outline-width": [I, k],
          opacity: [I, C],
          top: [I, F],
          right: [I, F],
          bottom: [I, F],
          left: [I, F],
          "font-size": [I, F],
          "text-indent": [I, F],
          "word-spacing": [I, F],
          width: [I, F],
          "min-width": [I, F],
          "max-width": [I, F],
          height: [I, F],
          "min-height": [I, F],
          "max-height": [I, F],
          "line-height": [I, j],
          "scroll-top": [X, C, "scrollTop"],
          "scroll-left": [X, C, "scrollLeft"],
        },
        de = {};
      H.transform &&
        ((Y.transform = [W]),
        (de = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: [C],
          scaleX: [C],
          scaleY: [C],
          skew: [K],
          skewX: [K],
          skewY: [K],
        })),
        H.transform &&
          H.backface &&
          ((de.z = [F, "translateZ"]),
          (de.rotateZ = [K]),
          (de.scaleZ = [C]),
          (de.perspective = [k]));
      var Le = /ms/,
        Xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var va = d((kF, ha) => {
    "use strict";
    var rm = window.$,
      nm = Qn() && rm.tram;
    ha.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        l = n.hasOwnProperty,
        y = r.forEach,
        h = r.map,
        g = r.reduce,
        m = r.reduceRight,
        T = r.filter,
        w = r.every,
        R = r.some,
        A = r.indexOf,
        N = r.lastIndexOf,
        C = Array.isArray,
        M = Object.keys,
        k = i.bind,
        F =
          (e.each =
          e.forEach =
            function (E, D, G) {
              if (E == null) return E;
              if (y && E.forEach === y) E.forEach(D, G);
              else if (E.length === +E.length) {
                for (var H = 0, J = E.length; H < J; H++)
                  if (D.call(G, E[H], H, E) === t) return;
              } else
                for (var re = e.keys(E), H = 0, J = re.length; H < J; H++)
                  if (D.call(G, E[re[H]], re[H], E) === t) return;
              return E;
            });
      (e.map = e.collect =
        function (E, D, G) {
          var H = [];
          return E == null
            ? H
            : h && E.map === h
            ? E.map(D, G)
            : (F(E, function (J, re, U) {
                H.push(D.call(G, J, re, U));
              }),
              H);
        }),
        (e.find = e.detect =
          function (E, D, G) {
            var H;
            return (
              K(E, function (J, re, U) {
                if (D.call(G, J, re, U)) return (H = J), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (E, D, G) {
            var H = [];
            return E == null
              ? H
              : T && E.filter === T
              ? E.filter(D, G)
              : (F(E, function (J, re, U) {
                  D.call(G, J, re, U) && H.push(J);
                }),
                H);
          });
      var K =
        (e.some =
        e.any =
          function (E, D, G) {
            D || (D = e.identity);
            var H = !1;
            return E == null
              ? H
              : R && E.some === R
              ? E.some(D, G)
              : (F(E, function (J, re, U) {
                  if (H || (H = D.call(G, J, re, U))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (E, D) {
          return E == null
            ? !1
            : A && E.indexOf === A
            ? E.indexOf(D) != -1
            : K(E, function (G) {
                return G === D;
              });
        }),
        (e.delay = function (E, D) {
          var G = a.call(arguments, 2);
          return setTimeout(function () {
            return E.apply(null, G);
          }, D);
        }),
        (e.defer = function (E) {
          return e.delay.apply(e, [E, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (E) {
          var D, G, H;
          return function () {
            D ||
              ((D = !0),
              (G = arguments),
              (H = this),
              nm.frame(function () {
                (D = !1), E.apply(H, G);
              }));
          };
        }),
        (e.debounce = function (E, D, G) {
          var H,
            J,
            re,
            U,
            z,
            p = function () {
              var _ = e.now() - U;
              _ < D
                ? (H = setTimeout(p, D - _))
                : ((H = null), G || ((z = E.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (U = e.now());
            var _ = G && !H;
            return (
              H || (H = setTimeout(p, D)),
              _ && ((z = E.apply(re, J)), (re = J = null)),
              z
            );
          };
        }),
        (e.defaults = function (E) {
          if (!e.isObject(E)) return E;
          for (var D = 1, G = arguments.length; D < G; D++) {
            var H = arguments[D];
            for (var J in H) E[J] === void 0 && (E[J] = H[J]);
          }
          return E;
        }),
        (e.keys = function (E) {
          if (!e.isObject(E)) return [];
          if (M) return M(E);
          var D = [];
          for (var G in E) e.has(E, G) && D.push(G);
          return D;
        }),
        (e.has = function (E, D) {
          return l.call(E, D);
        }),
        (e.isObject = function (E) {
          return E === Object(E);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (E) {
          return "\\" + $[E];
        },
        S = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (E, D, G) {
          !D && G && (D = G), (D = e.defaults({}, D, e.templateSettings));
          var H = RegExp(
              [
                (D.escape || j).source,
                (D.interpolate || j).source,
                (D.evaluate || j).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          E.replace(H, function (_, I, c, X, W) {
            return (
              (re += E.slice(J, W).replace(ee, V)),
              (J = W + _.length),
              I
                ? (re +=
                    `'+
((__t=(` +
                    I +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (re +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : X &&
                  (re +=
                    `';
` +
                    X +
                    `
__p+='`),
              _
            );
          }),
            (re += `';
`);
          var U = D.variable;
          if (U) {
            if (!S.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (U = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var z;
          try {
            z = new Function(D.variable || "obj", "_", re);
          } catch (_) {
            throw ((_.source = re), _);
          }
          var p = function (_) {
            return z.call(this, _, e);
          };
          return (
            (p.source =
              "function(" +
              U +
              `){
` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Se = d((XF, wa) => {
    "use strict";
    var ge = {},
      St = {},
      Rt = [],
      Zn = window.Webflow || [],
      lt = window.jQuery,
      Ve = lt(window),
      im = lt(document),
      $e = lt.isFunction,
      We = (ge._ = va()),
      Ea = (ge.tram = Qn() && lt.tram),
      Fr = !1,
      Jn = !1;
    Ea.config.hideBackface = !1;
    Ea.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      St[e] && _a(St[e]);
      var n = (St[e] = t(lt, We, r) || {});
      return ya(n), n;
    };
    ge.require = function (e) {
      return St[e];
    };
    function ya(e) {
      ge.env() &&
        ($e(e.design) && Ve.on("__wf_design", e.design),
        $e(e.preview) && Ve.on("__wf_preview", e.preview)),
        $e(e.destroy) && Ve.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && om(e);
    }
    function om(e) {
      if (Fr) {
        e.ready();
        return;
      }
      We.contains(Rt, e.ready) || Rt.push(e.ready);
    }
    function _a(e) {
      $e(e.design) && Ve.off("__wf_design", e.design),
        $e(e.preview) && Ve.off("__wf_preview", e.preview),
        $e(e.destroy) && Ve.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && am(e);
    }
    function am(e) {
      Rt = We.filter(Rt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (Fr) {
        $e(e) && e();
        return;
      }
      Zn.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Mr = navigator.userAgent.toLowerCase(),
      Ia = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      sm = (ge.env.chrome =
        /chrome/.test(Mr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Mr.match(/chrome\/(\d+)\./)[1], 10)),
      um = (ge.env.ios = /(ipod|iphone|ipad)/.test(Mr));
    ge.env.safari = /safari/.test(Mr) && !sm && !um;
    var $n;
    Ia &&
      im.on("touchstart mousedown", function (e) {
        $n = e.target;
      });
    ge.validClick = Ia
      ? function (e) {
          return e === $n || lt.contains(e, $n);
        }
      : function () {
          return !0;
        };
    var Ta = "resize.webflow orientationchange.webflow load.webflow",
      cm = "scroll.webflow " + Ta;
    ge.resize = ei(Ve, Ta);
    ge.scroll = ei(Ve, cm);
    ge.redraw = ei();
    function ei(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = We.throttle(function (i) {
          We.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (We.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = We.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (Fr = !0), Jn ? lm() : We.each(Rt, ma), We.each(Zn, ma), ge.resize.up();
    };
    function ma(e) {
      $e(e) && e();
    }
    function lm() {
      (Jn = !1), We.each(St, ya);
    }
    var yt;
    ge.load = function (e) {
      yt.then(e);
    };
    function ba() {
      yt && (yt.reject(), Ve.off("load", yt.resolve)),
        (yt = new lt.Deferred()),
        Ve.on("load", yt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Jn = !0),
        Ve.triggerHandler("__wf_destroy"),
        e.domready != null && (Fr = e.domready),
        We.each(St, _a),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (Rt = []),
        (Zn = []),
        yt.state() === "pending" && ba();
    };
    lt(ge.ready);
    ba();
    wa.exports = window.Webflow = ge;
  });
  var xa = d((GF, Oa) => {
    "use strict";
    var Aa = Se();
    Aa.define(
      "brand",
      (Oa.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            T = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (m = !0),
            m &&
              !u &&
              ((l = l || h()),
              g(),
              setTimeout(g, 500),
              e(r).off(s, y).on(s, y));
        };
        function y() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", m ? "display: none !important;" : "");
        }
        function h() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            w = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(T, w), m[0];
        }
        function g() {
          var m = i.children(o),
            T = m.length && m.get(0) === l,
            w = Aa.env("editor");
          if (T) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(l);
        }
        return t;
      })
    );
  });
  var Ra = d((UF, Sa) => {
    "use strict";
    var ti = Se();
    ti.define(
      "edit",
      (Sa.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ti.env("test") || ti.env("frame")) && !r.fixture && !fm())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          l = r.load || g,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(u, h).triggerHandler(u);
        function h() {
          s || (/\?edit/.test(a.hash) && l());
        }
        function g() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, h),
            N(function (M) {
              e.ajax({
                url: A("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(M),
              });
            });
        }
        function m(M) {
          return function (k) {
            if (!k) {
              console.error("Could not load editor data");
              return;
            }
            (k.thirdPartyCookiesSupported = M),
              T(R(k.scriptPath), function () {
                window.WebflowEditor(k);
              });
          };
        }
        function T(M, k) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            k,
            w
          );
        }
        function w(M, k, F) {
          throw (console.error("Could not load editor script: " + k), F);
        }
        function R(M) {
          return M.indexOf("//") >= 0
            ? M
            : A("https://editor-api.webflow.com" + M);
        }
        function A(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function N(M) {
          var k = window.document.createElement("iframe");
          (k.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (k.style.display = "none"),
            (k.sandbox = "allow-scripts allow-same-origin");
          var F = function (K) {
            K.data === "WF_third_party_cookies_unsupported"
              ? (C(k, F), M(!1))
              : K.data === "WF_third_party_cookies_supported" &&
                (C(k, F), M(!0));
          };
          (k.onerror = function () {
            C(k, F), M(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(k);
        }
        function C(M, k) {
          window.removeEventListener("message", k, !1), M.remove();
        }
        return n;
      })
    );
    function fm() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var La = d((WF, Ca) => {
    "use strict";
    var dm = Se();
    dm.define(
      "focus-visible",
      (Ca.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function s(C) {
            var M = C.type,
              k = C.tagName;
            return !!(
              (k === "INPUT" && a[M] && !C.readOnly) ||
              (k === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function l(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function y(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function h(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (u(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function m(C) {
            u(C.target) && (n || s(C.target)) && l(C.target);
          }
          function T(C) {
            u(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(C.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), R());
          }
          function R() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function A() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", w, !0),
            R(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Da = d((VF, Na) => {
    "use strict";
    var Pa = Se();
    Pa.define(
      "focus",
      (Na.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Pa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var qa = d((HF, Fa) => {
    "use strict";
    var ri = window.jQuery,
      Ze = {},
      qr = [],
      Ma = ".w-ix",
      kr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ri(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ri(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + Ma, OUTRO: "w-ix-outro" + Ma };
    Ze.init = function () {
      for (var e = qr.length, t = 0; t < e; t++) {
        var r = qr[t];
        r[0](0, r[1]);
      }
      (qr = []), ri.extend(Ze.triggers, kr);
    };
    Ze.async = function () {
      for (var e in kr) {
        var t = kr[e];
        kr.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (r, n) {
            qr.push([t, n]);
          });
      }
    };
    Ze.async();
    Fa.exports = Ze;
  });
  var Ct = d((BF, Ga) => {
    "use strict";
    var ni = qa();
    function ka(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var pm = window.jQuery,
      Xr = {},
      Xa = ".w-ix",
      gm = {
        reset: function (e, t) {
          ni.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ni.triggers.intro(e, t), ka(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ni.triggers.outro(e, t), ka(t, "COMPONENT_INACTIVE");
        },
      };
    Xr.triggers = {};
    Xr.types = { INTRO: "w-ix-intro" + Xa, OUTRO: "w-ix-outro" + Xa };
    pm.extend(Xr.triggers, gm);
    Ga.exports = Xr;
  });
  var ii = d((zF, Ua) => {
    var hm =
      typeof global == "object" && global && global.Object === Object && global;
    Ua.exports = hm;
  });
  var He = d((KF, Wa) => {
    var vm = ii(),
      mm = typeof self == "object" && self && self.Object === Object && self,
      Em = vm || mm || Function("return this")();
    Wa.exports = Em;
  });
  var Lt = d((jF, Va) => {
    var ym = He(),
      _m = ym.Symbol;
    Va.exports = _m;
  });
  var Ka = d((YF, za) => {
    var Ha = Lt(),
      Ba = Object.prototype,
      Im = Ba.hasOwnProperty,
      Tm = Ba.toString,
      or = Ha ? Ha.toStringTag : void 0;
    function bm(e) {
      var t = Im.call(e, or),
        r = e[or];
      try {
        e[or] = void 0;
        var n = !0;
      } catch {}
      var i = Tm.call(e);
      return n && (t ? (e[or] = r) : delete e[or]), i;
    }
    za.exports = bm;
  });
  var Ya = d((QF, ja) => {
    var wm = Object.prototype,
      Am = wm.toString;
    function Om(e) {
      return Am.call(e);
    }
    ja.exports = Om;
  });
  var ft = d(($F, Za) => {
    var Qa = Lt(),
      xm = Ka(),
      Sm = Ya(),
      Rm = "[object Null]",
      Cm = "[object Undefined]",
      $a = Qa ? Qa.toStringTag : void 0;
    function Lm(e) {
      return e == null
        ? e === void 0
          ? Cm
          : Rm
        : $a && $a in Object(e)
        ? xm(e)
        : Sm(e);
    }
    Za.exports = Lm;
  });
  var oi = d((ZF, Ja) => {
    function Pm(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Ja.exports = Pm;
  });
  var ai = d((JF, es) => {
    var Nm = oi(),
      Dm = Nm(Object.getPrototypeOf, Object);
    es.exports = Dm;
  });
  var ot = d((e1, ts) => {
    function Mm(e) {
      return e != null && typeof e == "object";
    }
    ts.exports = Mm;
  });
  var si = d((t1, ns) => {
    var Fm = ft(),
      qm = ai(),
      km = ot(),
      Xm = "[object Object]",
      Gm = Function.prototype,
      Um = Object.prototype,
      rs = Gm.toString,
      Wm = Um.hasOwnProperty,
      Vm = rs.call(Object);
    function Hm(e) {
      if (!km(e) || Fm(e) != Xm) return !1;
      var t = qm(e);
      if (t === null) return !0;
      var r = Wm.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && rs.call(r) == Vm;
    }
    ns.exports = Hm;
  });
  var is = d((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.default = Bm;
    function Bm(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var os = d((li, ci) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    var zm = is(),
      Km = jm(zm);
    function jm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Pt;
    typeof self < "u"
      ? (Pt = self)
      : typeof window < "u"
      ? (Pt = window)
      : typeof global < "u"
      ? (Pt = global)
      : typeof ci < "u"
      ? (Pt = ci)
      : (Pt = Function("return this")());
    var Ym = (0, Km.default)(Pt);
    li.default = Ym;
  });
  var fi = d((ar) => {
    "use strict";
    ar.__esModule = !0;
    ar.ActionTypes = void 0;
    ar.default = cs;
    var Qm = si(),
      $m = us(Qm),
      Zm = os(),
      as = us(Zm);
    function us(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ss = (ar.ActionTypes = { INIT: "@@redux/INIT" });
    function cs(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(cs)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function l() {
        u === a && (u = a.slice());
      }
      function y() {
        return o;
      }
      function h(w) {
        if (typeof w != "function")
          throw new Error("Expected listener to be a function.");
        var R = !0;
        return (
          l(),
          u.push(w),
          function () {
            if (R) {
              (R = !1), l();
              var N = u.indexOf(w);
              u.splice(N, 1);
            }
          }
        );
      }
      function g(w) {
        if (!(0, $m.default)(w))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof w.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, w));
        } finally {
          s = !1;
        }
        for (var R = (a = u), A = 0; A < R.length; A++) R[A]();
        return w;
      }
      function m(w) {
        if (typeof w != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = w), g({ type: ss.INIT });
      }
      function T() {
        var w,
          R = h;
        return (
          (w = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                N.next && N.next(y());
              }
              C();
              var M = R(C);
              return { unsubscribe: M };
            },
          }),
          (w[as.default] = function () {
            return this;
          }),
          w
        );
      }
      return (
        g({ type: ss.INIT }),
        (n = { dispatch: g, subscribe: h, getState: y, replaceReducer: m }),
        (n[as.default] = T),
        n
      );
    }
  });
  var pi = d((di) => {
    "use strict";
    di.__esModule = !0;
    di.default = Jm;
    function Jm(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ds = d((gi) => {
    "use strict";
    gi.__esModule = !0;
    gi.default = iE;
    var ls = fi(),
      eE = si(),
      o1 = fs(eE),
      tE = pi(),
      a1 = fs(tE);
    function fs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function rE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function nE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: ls.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                ls.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function iE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        nE(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (u) throw u;
        if (!1) var h;
        for (var g = !1, m = {}, T = 0; T < o.length; T++) {
          var w = o[T],
            R = r[w],
            A = l[w],
            N = R(A, y);
          if (typeof N > "u") {
            var C = rE(w, y);
            throw new Error(C);
          }
          (m[w] = N), (g = g || N !== A);
        }
        return g ? m : l;
      };
    }
  });
  var gs = d((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = oE;
    function ps(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function oE(e, t) {
      if (typeof e == "function") return ps(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = ps(a, t));
      }
      return n;
    }
  });
  var mi = d((vi) => {
    "use strict";
    vi.__esModule = !0;
    vi.default = aE;
    function aE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var hs = d((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    var sE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ei.default = fE;
    var uE = mi(),
      cE = lE(uE);
    function lE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function fE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            l = [],
            y = {
              getState: u.getState,
              dispatch: function (g) {
                return s(g);
              },
            };
          return (
            (l = t.map(function (h) {
              return h(y);
            })),
            (s = cE.default.apply(void 0, l)(u.dispatch)),
            sE({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var yi = d((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var dE = fi(),
      pE = Nt(dE),
      gE = ds(),
      hE = Nt(gE),
      vE = gs(),
      mE = Nt(vE),
      EE = hs(),
      yE = Nt(EE),
      _E = mi(),
      IE = Nt(_E),
      TE = pi(),
      f1 = Nt(TE);
    function Nt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = pE.default;
    ke.combineReducers = hE.default;
    ke.bindActionCreators = mE.default;
    ke.applyMiddleware = yE.default;
    ke.compose = IE.default;
  });
  var Be,
    _i,
    Je,
    bE,
    wE,
    Gr,
    AE,
    Ii = me(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (_i = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (bE = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (wE = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Gr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (AE = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var De,
    OE,
    Ur = me(() => {
      "use strict";
      (De = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (OE = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var xE,
    vs = me(() => {
      "use strict";
      xE = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var SE,
    RE,
    CE,
    LE,
    PE,
    NE,
    DE,
    Ti,
    ms = me(() => {
      "use strict";
      Ur();
      ({
        TRANSFORM_MOVE: SE,
        TRANSFORM_SCALE: RE,
        TRANSFORM_ROTATE: CE,
        TRANSFORM_SKEW: LE,
        STYLE_SIZE: PE,
        STYLE_FILTER: NE,
        STYLE_FONT_VARIATION: DE,
      } = De),
        (Ti = {
          [SE]: !0,
          [RE]: !0,
          [CE]: !0,
          [LE]: !0,
          [PE]: !0,
          [NE]: !0,
          [DE]: !0,
        });
    });
  var Te = {};
  Ne(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => $E,
    IX2_ANIMATION_FRAME_CHANGED: () => BE,
    IX2_CLEAR_REQUESTED: () => WE,
    IX2_ELEMENT_STATE_CHANGED: () => QE,
    IX2_EVENT_LISTENER_ADDED: () => VE,
    IX2_EVENT_STATE_CHANGED: () => HE,
    IX2_INSTANCE_ADDED: () => KE,
    IX2_INSTANCE_REMOVED: () => YE,
    IX2_INSTANCE_STARTED: () => jE,
    IX2_MEDIA_QUERIES_DEFINED: () => JE,
    IX2_PARAMETER_CHANGED: () => zE,
    IX2_PLAYBACK_REQUESTED: () => GE,
    IX2_PREVIEW_REQUESTED: () => XE,
    IX2_RAW_DATA_IMPORTED: () => ME,
    IX2_SESSION_INITIALIZED: () => FE,
    IX2_SESSION_STARTED: () => qE,
    IX2_SESSION_STOPPED: () => kE,
    IX2_STOP_REQUESTED: () => UE,
    IX2_TEST_FRAME_RENDERED: () => ey,
    IX2_VIEWPORT_WIDTH_CHANGED: () => ZE,
  });
  var ME,
    FE,
    qE,
    kE,
    XE,
    GE,
    UE,
    WE,
    VE,
    HE,
    BE,
    zE,
    KE,
    jE,
    YE,
    QE,
    $E,
    ZE,
    JE,
    ey,
    Es = me(() => {
      "use strict";
      (ME = "IX2_RAW_DATA_IMPORTED"),
        (FE = "IX2_SESSION_INITIALIZED"),
        (qE = "IX2_SESSION_STARTED"),
        (kE = "IX2_SESSION_STOPPED"),
        (XE = "IX2_PREVIEW_REQUESTED"),
        (GE = "IX2_PLAYBACK_REQUESTED"),
        (UE = "IX2_STOP_REQUESTED"),
        (WE = "IX2_CLEAR_REQUESTED"),
        (VE = "IX2_EVENT_LISTENER_ADDED"),
        (HE = "IX2_EVENT_STATE_CHANGED"),
        (BE = "IX2_ANIMATION_FRAME_CHANGED"),
        (zE = "IX2_PARAMETER_CHANGED"),
        (KE = "IX2_INSTANCE_ADDED"),
        (jE = "IX2_INSTANCE_STARTED"),
        (YE = "IX2_INSTANCE_REMOVED"),
        (QE = "IX2_ELEMENT_STATE_CHANGED"),
        ($E = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (ZE = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (JE = "IX2_MEDIA_QUERIES_DEFINED"),
        (ey = "IX2_TEST_FRAME_RENDERED");
    });
  var Ae = {};
  Ne(Ae, {
    ABSTRACT_NODE: () => Zy,
    AUTO: () => Uy,
    BACKGROUND: () => My,
    BACKGROUND_COLOR: () => Dy,
    BAR_DELIMITER: () => Hy,
    BORDER_COLOR: () => Fy,
    BOUNDARY_SELECTOR: () => oy,
    CHILDREN: () => By,
    COLON_DELIMITER: () => Vy,
    COLOR: () => qy,
    COMMA_DELIMITER: () => Wy,
    CONFIG_UNIT: () => py,
    CONFIG_VALUE: () => cy,
    CONFIG_X_UNIT: () => ly,
    CONFIG_X_VALUE: () => ay,
    CONFIG_Y_UNIT: () => fy,
    CONFIG_Y_VALUE: () => sy,
    CONFIG_Z_UNIT: () => dy,
    CONFIG_Z_VALUE: () => uy,
    DISPLAY: () => ky,
    FILTER: () => Cy,
    FLEX: () => Xy,
    FONT_VARIATION_SETTINGS: () => Ly,
    HEIGHT: () => Ny,
    HTML_ELEMENT: () => Qy,
    IMMEDIATE_CHILDREN: () => zy,
    IX2_ID_DELIMITER: () => ty,
    OPACITY: () => Ry,
    PARENT: () => jy,
    PLAIN_OBJECT: () => $y,
    PRESERVE_3D: () => Yy,
    RENDER_GENERAL: () => e_,
    RENDER_PLUGIN: () => r_,
    RENDER_STYLE: () => t_,
    RENDER_TRANSFORM: () => Jy,
    ROTATE_X: () => by,
    ROTATE_Y: () => wy,
    ROTATE_Z: () => Ay,
    SCALE_3D: () => Ty,
    SCALE_X: () => yy,
    SCALE_Y: () => _y,
    SCALE_Z: () => Iy,
    SIBLINGS: () => Ky,
    SKEW: () => Oy,
    SKEW_X: () => xy,
    SKEW_Y: () => Sy,
    TRANSFORM: () => gy,
    TRANSLATE_3D: () => Ey,
    TRANSLATE_X: () => hy,
    TRANSLATE_Y: () => vy,
    TRANSLATE_Z: () => my,
    WF_PAGE: () => ry,
    WIDTH: () => Py,
    WILL_CHANGE: () => Gy,
    W_MOD_IX: () => iy,
    W_MOD_JS: () => ny,
  });
  var ty,
    ry,
    ny,
    iy,
    oy,
    ay,
    sy,
    uy,
    cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    my,
    Ey,
    yy,
    _y,
    Iy,
    Ty,
    by,
    wy,
    Ay,
    Oy,
    xy,
    Sy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Xy,
    Gy,
    Uy,
    Wy,
    Vy,
    Hy,
    By,
    zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    e_,
    t_,
    r_,
    ys = me(() => {
      "use strict";
      (ty = "|"),
        (ry = "data-wf-page"),
        (ny = "w-mod-js"),
        (iy = "w-mod-ix"),
        (oy = ".w-dyn-item"),
        (ay = "xValue"),
        (sy = "yValue"),
        (uy = "zValue"),
        (cy = "value"),
        (ly = "xUnit"),
        (fy = "yUnit"),
        (dy = "zUnit"),
        (py = "unit"),
        (gy = "transform"),
        (hy = "translateX"),
        (vy = "translateY"),
        (my = "translateZ"),
        (Ey = "translate3d"),
        (yy = "scaleX"),
        (_y = "scaleY"),
        (Iy = "scaleZ"),
        (Ty = "scale3d"),
        (by = "rotateX"),
        (wy = "rotateY"),
        (Ay = "rotateZ"),
        (Oy = "skew"),
        (xy = "skewX"),
        (Sy = "skewY"),
        (Ry = "opacity"),
        (Cy = "filter"),
        (Ly = "font-variation-settings"),
        (Py = "width"),
        (Ny = "height"),
        (Dy = "backgroundColor"),
        (My = "background"),
        (Fy = "borderColor"),
        (qy = "color"),
        (ky = "display"),
        (Xy = "flex"),
        (Gy = "willChange"),
        (Uy = "AUTO"),
        (Wy = ","),
        (Vy = ":"),
        (Hy = "|"),
        (By = "CHILDREN"),
        (zy = "IMMEDIATE_CHILDREN"),
        (Ky = "SIBLINGS"),
        (jy = "PARENT"),
        (Yy = "preserve-3d"),
        (Qy = "HTML_ELEMENT"),
        ($y = "PLAIN_OBJECT"),
        (Zy = "ABSTRACT_NODE"),
        (Jy = "RENDER_TRANSFORM"),
        (e_ = "RENDER_GENERAL"),
        (t_ = "RENDER_STYLE"),
        (r_ = "RENDER_PLUGIN");
    });
  var _s = {};
  Ne(_s, {
    ActionAppliesTo: () => OE,
    ActionTypeConsts: () => De,
    EventAppliesTo: () => _i,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => bE,
    EventLimitAffectedElements: () => wE,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Ae,
    InteractionTypeConsts: () => xE,
    QuickEffectDirectionConsts: () => AE,
    QuickEffectIds: () => Gr,
    ReducedMotionTypes: () => Ti,
  });
  var Me = me(() => {
    "use strict";
    Ii();
    Ur();
    vs();
    ms();
    Es();
    ys();
    Ur();
    Ii();
  });
  var n_,
    Is,
    Ts = me(() => {
      "use strict";
      Me();
      ({ IX2_RAW_DATA_IMPORTED: n_ } = Te),
        (Is = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case n_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Dt = d((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var i_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = Vr;
    ye.addLast = As;
    ye.addFirst = Os;
    ye.removeLast = xs;
    ye.removeFirst = Ss;
    ye.insert = Rs;
    ye.removeAt = Cs;
    ye.replaceAt = Ls;
    ye.getIn = Hr;
    ye.set = Br;
    ye.setIn = zr;
    ye.update = Ns;
    ye.updateIn = Ds;
    ye.merge = Ms;
    ye.mergeDeep = Fs;
    ye.mergeIn = qs;
    ye.omit = ks;
    ye.addDefaults = Xs;
    var bs = "INVALID_ARGS";
    function ws(e) {
      throw new Error(e);
    }
    function bi(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var o_ = {}.hasOwnProperty;
    function Vr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = bi(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Fe(e, t, r) {
      var n = r;
      n == null && ws(bs);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        if (l != null) {
          var y = bi(l);
          if (y.length)
            for (var h = 0; h <= y.length; h++) {
              var g = y[h];
              if (!(e && n[g] !== void 0)) {
                var m = l[g];
                t && Wr(n[g]) && Wr(m) && (m = Fe(e, t, n[g], m)),
                  !(m === void 0 || m === n[g]) &&
                    (i || ((i = !0), (n = Vr(n))), (n[g] = m));
              }
            }
        }
      }
      return n;
    }
    function Wr(e) {
      var t = typeof e > "u" ? "undefined" : i_(e);
      return e != null && (t === "object" || t === "function");
    }
    function As(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Os(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function xs(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ss(e) {
      return e.length ? e.slice(1) : e;
    }
    function Rs(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Cs(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ls(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Hr(e, t) {
      if ((!Array.isArray(t) && ws(bs), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Br(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Vr(i);
      return (o[t] = r), o;
    }
    function Ps(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Wr(e) && Wr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Ps(a, t, r, n + 1);
      }
      return Br(e, o, i);
    }
    function zr(e, t, r) {
      return t.length ? Ps(e, t, r, 0) : r;
    }
    function Ns(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Br(e, t, i);
    }
    function Ds(e, t, r) {
      var n = Hr(e, t),
        i = r(n);
      return zr(e, t, i);
    }
    function Ms(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : Fe(!1, !1, e, t, r, n, i, o);
    }
    function Fs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : Fe(!1, !0, e, t, r, n, i, o);
    }
    function qs(e, t, r, n, i, o, a) {
      var u = Hr(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          l = arguments.length,
          y = Array(l > 7 ? l - 7 : 0),
          h = 7;
        h < l;
        h++
      )
        y[h - 7] = arguments[h];
      return (
        y.length
          ? (s = Fe.call.apply(Fe, [null, !1, !1, u, r, n, i, o, a].concat(y)))
          : (s = Fe(!1, !1, u, r, n, i, o, a)),
        zr(e, t, s)
      );
    }
    function ks(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (o_.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = bi(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Xs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : Fe(!0, !1, e, t, r, n, i, o);
    }
    var a_ = {
      clone: Vr,
      addLast: As,
      addFirst: Os,
      removeLast: xs,
      removeFirst: Ss,
      insert: Rs,
      removeAt: Cs,
      replaceAt: Ls,
      getIn: Hr,
      set: Br,
      setIn: zr,
      update: Ns,
      updateIn: Ds,
      merge: Ms,
      mergeDeep: Fs,
      mergeIn: qs,
      omit: ks,
      addDefaults: Xs,
    };
    ye.default = a_;
  });
  var Us,
    s_,
    u_,
    c_,
    l_,
    f_,
    Gs,
    Ws,
    Vs = me(() => {
      "use strict";
      Me();
      (Us = le(Dt())),
        ({
          IX2_PREVIEW_REQUESTED: s_,
          IX2_PLAYBACK_REQUESTED: u_,
          IX2_STOP_REQUESTED: c_,
          IX2_CLEAR_REQUESTED: l_,
        } = Te),
        (f_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Gs = Object.create(null, {
          [s_]: { value: "preview" },
          [u_]: { value: "playback" },
          [c_]: { value: "stop" },
          [l_]: { value: "clear" },
        })),
        (Ws = (e = f_, t) => {
          if (t.type in Gs) {
            let r = [Gs[t.type]];
            return (0, Us.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Re,
    d_,
    p_,
    g_,
    h_,
    v_,
    m_,
    E_,
    y_,
    __,
    I_,
    Hs,
    T_,
    Bs,
    zs = me(() => {
      "use strict";
      Me();
      (Re = le(Dt())),
        ({
          IX2_SESSION_INITIALIZED: d_,
          IX2_SESSION_STARTED: p_,
          IX2_TEST_FRAME_RENDERED: g_,
          IX2_SESSION_STOPPED: h_,
          IX2_EVENT_LISTENER_ADDED: v_,
          IX2_EVENT_STATE_CHANGED: m_,
          IX2_ANIMATION_FRAME_CHANGED: E_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: y_,
          IX2_VIEWPORT_WIDTH_CHANGED: __,
          IX2_MEDIA_QUERIES_DEFINED: I_,
        } = Te),
        (Hs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (T_ = 20),
        (Bs = (e = Hs, t) => {
          switch (t.type) {
            case d_: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Re.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case p_:
              return (0, Re.set)(e, "active", !0);
            case g_: {
              let {
                payload: { step: r = T_ },
              } = t;
              return (0, Re.set)(e, "tick", e.tick + r);
            }
            case h_:
              return Hs;
            case E_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Re.set)(e, "tick", r);
            }
            case v_: {
              let r = (0, Re.addLast)(e.eventListeners, t.payload);
              return (0, Re.set)(e, "eventListeners", r);
            }
            case m_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Re.setIn)(e, ["eventState", r], n);
            }
            case y_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Re.setIn)(e, ["playbackState", r], n);
            }
            case __: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: l } = n[a];
                if (r >= s && r <= l) {
                  o = u;
                  break;
                }
              }
              return (0, Re.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case I_:
              return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var js = d((L1, Ks) => {
    function b_() {
      (this.__data__ = []), (this.size = 0);
    }
    Ks.exports = b_;
  });
  var Kr = d((P1, Ys) => {
    function w_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ys.exports = w_;
  });
  var sr = d((N1, Qs) => {
    var A_ = Kr();
    function O_(e, t) {
      for (var r = e.length; r--; ) if (A_(e[r][0], t)) return r;
      return -1;
    }
    Qs.exports = O_;
  });
  var Zs = d((D1, $s) => {
    var x_ = sr(),
      S_ = Array.prototype,
      R_ = S_.splice;
    function C_(e) {
      var t = this.__data__,
        r = x_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : R_.call(t, r, 1), --this.size, !0;
    }
    $s.exports = C_;
  });
  var eu = d((M1, Js) => {
    var L_ = sr();
    function P_(e) {
      var t = this.__data__,
        r = L_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Js.exports = P_;
  });
  var ru = d((F1, tu) => {
    var N_ = sr();
    function D_(e) {
      return N_(this.__data__, e) > -1;
    }
    tu.exports = D_;
  });
  var iu = d((q1, nu) => {
    var M_ = sr();
    function F_(e, t) {
      var r = this.__data__,
        n = M_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    nu.exports = F_;
  });
  var ur = d((k1, ou) => {
    var q_ = js(),
      k_ = Zs(),
      X_ = eu(),
      G_ = ru(),
      U_ = iu();
    function Mt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Mt.prototype.clear = q_;
    Mt.prototype.delete = k_;
    Mt.prototype.get = X_;
    Mt.prototype.has = G_;
    Mt.prototype.set = U_;
    ou.exports = Mt;
  });
  var su = d((X1, au) => {
    var W_ = ur();
    function V_() {
      (this.__data__ = new W_()), (this.size = 0);
    }
    au.exports = V_;
  });
  var cu = d((G1, uu) => {
    function H_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    uu.exports = H_;
  });
  var fu = d((U1, lu) => {
    function B_(e) {
      return this.__data__.get(e);
    }
    lu.exports = B_;
  });
  var pu = d((W1, du) => {
    function z_(e) {
      return this.__data__.has(e);
    }
    du.exports = z_;
  });
  var et = d((V1, gu) => {
    function K_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    gu.exports = K_;
  });
  var wi = d((H1, hu) => {
    var j_ = ft(),
      Y_ = et(),
      Q_ = "[object AsyncFunction]",
      $_ = "[object Function]",
      Z_ = "[object GeneratorFunction]",
      J_ = "[object Proxy]";
    function eI(e) {
      if (!Y_(e)) return !1;
      var t = j_(e);
      return t == $_ || t == Z_ || t == Q_ || t == J_;
    }
    hu.exports = eI;
  });
  var mu = d((B1, vu) => {
    var tI = He(),
      rI = tI["__core-js_shared__"];
    vu.exports = rI;
  });
  var _u = d((z1, yu) => {
    var Ai = mu(),
      Eu = (function () {
        var e = /[^.]+$/.exec((Ai && Ai.keys && Ai.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function nI(e) {
      return !!Eu && Eu in e;
    }
    yu.exports = nI;
  });
  var Oi = d((K1, Iu) => {
    var iI = Function.prototype,
      oI = iI.toString;
    function aI(e) {
      if (e != null) {
        try {
          return oI.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Iu.exports = aI;
  });
  var bu = d((j1, Tu) => {
    var sI = wi(),
      uI = _u(),
      cI = et(),
      lI = Oi(),
      fI = /[\\^$.*+?()[\]{}|]/g,
      dI = /^\[object .+?Constructor\]$/,
      pI = Function.prototype,
      gI = Object.prototype,
      hI = pI.toString,
      vI = gI.hasOwnProperty,
      mI = RegExp(
        "^" +
          hI
            .call(vI)
            .replace(fI, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function EI(e) {
      if (!cI(e) || uI(e)) return !1;
      var t = sI(e) ? mI : dI;
      return t.test(lI(e));
    }
    Tu.exports = EI;
  });
  var Au = d((Y1, wu) => {
    function yI(e, t) {
      return e?.[t];
    }
    wu.exports = yI;
  });
  var dt = d((Q1, Ou) => {
    var _I = bu(),
      II = Au();
    function TI(e, t) {
      var r = II(e, t);
      return _I(r) ? r : void 0;
    }
    Ou.exports = TI;
  });
  var jr = d(($1, xu) => {
    var bI = dt(),
      wI = He(),
      AI = bI(wI, "Map");
    xu.exports = AI;
  });
  var cr = d((Z1, Su) => {
    var OI = dt(),
      xI = OI(Object, "create");
    Su.exports = xI;
  });
  var Lu = d((J1, Cu) => {
    var Ru = cr();
    function SI() {
      (this.__data__ = Ru ? Ru(null) : {}), (this.size = 0);
    }
    Cu.exports = SI;
  });
  var Nu = d((e2, Pu) => {
    function RI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Pu.exports = RI;
  });
  var Mu = d((t2, Du) => {
    var CI = cr(),
      LI = "__lodash_hash_undefined__",
      PI = Object.prototype,
      NI = PI.hasOwnProperty;
    function DI(e) {
      var t = this.__data__;
      if (CI) {
        var r = t[e];
        return r === LI ? void 0 : r;
      }
      return NI.call(t, e) ? t[e] : void 0;
    }
    Du.exports = DI;
  });
  var qu = d((r2, Fu) => {
    var MI = cr(),
      FI = Object.prototype,
      qI = FI.hasOwnProperty;
    function kI(e) {
      var t = this.__data__;
      return MI ? t[e] !== void 0 : qI.call(t, e);
    }
    Fu.exports = kI;
  });
  var Xu = d((n2, ku) => {
    var XI = cr(),
      GI = "__lodash_hash_undefined__";
    function UI(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = XI && t === void 0 ? GI : t),
        this
      );
    }
    ku.exports = UI;
  });
  var Uu = d((i2, Gu) => {
    var WI = Lu(),
      VI = Nu(),
      HI = Mu(),
      BI = qu(),
      zI = Xu();
    function Ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ft.prototype.clear = WI;
    Ft.prototype.delete = VI;
    Ft.prototype.get = HI;
    Ft.prototype.has = BI;
    Ft.prototype.set = zI;
    Gu.exports = Ft;
  });
  var Hu = d((o2, Vu) => {
    var Wu = Uu(),
      KI = ur(),
      jI = jr();
    function YI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Wu(),
          map: new (jI || KI)(),
          string: new Wu(),
        });
    }
    Vu.exports = YI;
  });
  var zu = d((a2, Bu) => {
    function QI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Bu.exports = QI;
  });
  var lr = d((s2, Ku) => {
    var $I = zu();
    function ZI(e, t) {
      var r = e.__data__;
      return $I(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Ku.exports = ZI;
  });
  var Yu = d((u2, ju) => {
    var JI = lr();
    function eT(e) {
      var t = JI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ju.exports = eT;
  });
  var $u = d((c2, Qu) => {
    var tT = lr();
    function rT(e) {
      return tT(this, e).get(e);
    }
    Qu.exports = rT;
  });
  var Ju = d((l2, Zu) => {
    var nT = lr();
    function iT(e) {
      return nT(this, e).has(e);
    }
    Zu.exports = iT;
  });
  var tc = d((f2, ec) => {
    var oT = lr();
    function aT(e, t) {
      var r = oT(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ec.exports = aT;
  });
  var Yr = d((d2, rc) => {
    var sT = Hu(),
      uT = Yu(),
      cT = $u(),
      lT = Ju(),
      fT = tc();
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    qt.prototype.clear = sT;
    qt.prototype.delete = uT;
    qt.prototype.get = cT;
    qt.prototype.has = lT;
    qt.prototype.set = fT;
    rc.exports = qt;
  });
  var ic = d((p2, nc) => {
    var dT = ur(),
      pT = jr(),
      gT = Yr(),
      hT = 200;
    function vT(e, t) {
      var r = this.__data__;
      if (r instanceof dT) {
        var n = r.__data__;
        if (!pT || n.length < hT - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new gT(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    nc.exports = vT;
  });
  var xi = d((g2, oc) => {
    var mT = ur(),
      ET = su(),
      yT = cu(),
      _T = fu(),
      IT = pu(),
      TT = ic();
    function kt(e) {
      var t = (this.__data__ = new mT(e));
      this.size = t.size;
    }
    kt.prototype.clear = ET;
    kt.prototype.delete = yT;
    kt.prototype.get = _T;
    kt.prototype.has = IT;
    kt.prototype.set = TT;
    oc.exports = kt;
  });
  var sc = d((h2, ac) => {
    var bT = "__lodash_hash_undefined__";
    function wT(e) {
      return this.__data__.set(e, bT), this;
    }
    ac.exports = wT;
  });
  var cc = d((v2, uc) => {
    function AT(e) {
      return this.__data__.has(e);
    }
    uc.exports = AT;
  });
  var fc = d((m2, lc) => {
    var OT = Yr(),
      xT = sc(),
      ST = cc();
    function Qr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new OT(); ++t < r; ) this.add(e[t]);
    }
    Qr.prototype.add = Qr.prototype.push = xT;
    Qr.prototype.has = ST;
    lc.exports = Qr;
  });
  var pc = d((E2, dc) => {
    function RT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    dc.exports = RT;
  });
  var hc = d((y2, gc) => {
    function CT(e, t) {
      return e.has(t);
    }
    gc.exports = CT;
  });
  var Si = d((_2, vc) => {
    var LT = fc(),
      PT = pc(),
      NT = hc(),
      DT = 1,
      MT = 2;
    function FT(e, t, r, n, i, o) {
      var a = r & DT,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var l = o.get(e),
        y = o.get(t);
      if (l && y) return l == t && y == e;
      var h = -1,
        g = !0,
        m = r & MT ? new LT() : void 0;
      for (o.set(e, t), o.set(t, e); ++h < u; ) {
        var T = e[h],
          w = t[h];
        if (n) var R = a ? n(w, T, h, t, e, o) : n(T, w, h, e, t, o);
        if (R !== void 0) {
          if (R) continue;
          g = !1;
          break;
        }
        if (m) {
          if (
            !PT(t, function (A, N) {
              if (!NT(m, N) && (T === A || i(T, A, r, n, o))) return m.push(N);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(T === w || i(T, w, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    vc.exports = FT;
  });
  var Ec = d((I2, mc) => {
    var qT = He(),
      kT = qT.Uint8Array;
    mc.exports = kT;
  });
  var _c = d((T2, yc) => {
    function XT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    yc.exports = XT;
  });
  var Tc = d((b2, Ic) => {
    function GT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ic.exports = GT;
  });
  var xc = d((w2, Oc) => {
    var bc = Lt(),
      wc = Ec(),
      UT = Kr(),
      WT = Si(),
      VT = _c(),
      HT = Tc(),
      BT = 1,
      zT = 2,
      KT = "[object Boolean]",
      jT = "[object Date]",
      YT = "[object Error]",
      QT = "[object Map]",
      $T = "[object Number]",
      ZT = "[object RegExp]",
      JT = "[object Set]",
      eb = "[object String]",
      tb = "[object Symbol]",
      rb = "[object ArrayBuffer]",
      nb = "[object DataView]",
      Ac = bc ? bc.prototype : void 0,
      Ri = Ac ? Ac.valueOf : void 0;
    function ib(e, t, r, n, i, o, a) {
      switch (r) {
        case nb:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case rb:
          return !(e.byteLength != t.byteLength || !o(new wc(e), new wc(t)));
        case KT:
        case jT:
        case $T:
          return UT(+e, +t);
        case YT:
          return e.name == t.name && e.message == t.message;
        case ZT:
        case eb:
          return e == t + "";
        case QT:
          var u = VT;
        case JT:
          var s = n & BT;
          if ((u || (u = HT), e.size != t.size && !s)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= zT), a.set(e, t);
          var y = WT(u(e), u(t), n, i, o, a);
          return a.delete(e), y;
        case tb:
          if (Ri) return Ri.call(e) == Ri.call(t);
      }
      return !1;
    }
    Oc.exports = ib;
  });
  var $r = d((A2, Sc) => {
    function ob(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Sc.exports = ob;
  });
  var be = d((O2, Rc) => {
    var ab = Array.isArray;
    Rc.exports = ab;
  });
  var Ci = d((x2, Cc) => {
    var sb = $r(),
      ub = be();
    function cb(e, t, r) {
      var n = t(e);
      return ub(e) ? n : sb(n, r(e));
    }
    Cc.exports = cb;
  });
  var Pc = d((S2, Lc) => {
    function lb(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Lc.exports = lb;
  });
  var Li = d((R2, Nc) => {
    function fb() {
      return [];
    }
    Nc.exports = fb;
  });
  var Pi = d((C2, Mc) => {
    var db = Pc(),
      pb = Li(),
      gb = Object.prototype,
      hb = gb.propertyIsEnumerable,
      Dc = Object.getOwnPropertySymbols,
      vb = Dc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                db(Dc(e), function (t) {
                  return hb.call(e, t);
                }));
          }
        : pb;
    Mc.exports = vb;
  });
  var qc = d((L2, Fc) => {
    function mb(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Fc.exports = mb;
  });
  var Xc = d((P2, kc) => {
    var Eb = ft(),
      yb = ot(),
      _b = "[object Arguments]";
    function Ib(e) {
      return yb(e) && Eb(e) == _b;
    }
    kc.exports = Ib;
  });
  var fr = d((N2, Wc) => {
    var Gc = Xc(),
      Tb = ot(),
      Uc = Object.prototype,
      bb = Uc.hasOwnProperty,
      wb = Uc.propertyIsEnumerable,
      Ab = Gc(
        (function () {
          return arguments;
        })()
      )
        ? Gc
        : function (e) {
            return Tb(e) && bb.call(e, "callee") && !wb.call(e, "callee");
          };
    Wc.exports = Ab;
  });
  var Hc = d((D2, Vc) => {
    function Ob() {
      return !1;
    }
    Vc.exports = Ob;
  });
  var Zr = d((dr, Xt) => {
    var xb = He(),
      Sb = Hc(),
      Kc = typeof dr == "object" && dr && !dr.nodeType && dr,
      Bc = Kc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
      Rb = Bc && Bc.exports === Kc,
      zc = Rb ? xb.Buffer : void 0,
      Cb = zc ? zc.isBuffer : void 0,
      Lb = Cb || Sb;
    Xt.exports = Lb;
  });
  var Jr = d((M2, jc) => {
    var Pb = 9007199254740991,
      Nb = /^(?:0|[1-9]\d*)$/;
    function Db(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Pb),
        !!t &&
          (r == "number" || (r != "symbol" && Nb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    jc.exports = Db;
  });
  var en = d((F2, Yc) => {
    var Mb = 9007199254740991;
    function Fb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mb;
    }
    Yc.exports = Fb;
  });
  var $c = d((q2, Qc) => {
    var qb = ft(),
      kb = en(),
      Xb = ot(),
      Gb = "[object Arguments]",
      Ub = "[object Array]",
      Wb = "[object Boolean]",
      Vb = "[object Date]",
      Hb = "[object Error]",
      Bb = "[object Function]",
      zb = "[object Map]",
      Kb = "[object Number]",
      jb = "[object Object]",
      Yb = "[object RegExp]",
      Qb = "[object Set]",
      $b = "[object String]",
      Zb = "[object WeakMap]",
      Jb = "[object ArrayBuffer]",
      ew = "[object DataView]",
      tw = "[object Float32Array]",
      rw = "[object Float64Array]",
      nw = "[object Int8Array]",
      iw = "[object Int16Array]",
      ow = "[object Int32Array]",
      aw = "[object Uint8Array]",
      sw = "[object Uint8ClampedArray]",
      uw = "[object Uint16Array]",
      cw = "[object Uint32Array]",
      ve = {};
    ve[tw] =
      ve[rw] =
      ve[nw] =
      ve[iw] =
      ve[ow] =
      ve[aw] =
      ve[sw] =
      ve[uw] =
      ve[cw] =
        !0;
    ve[Gb] =
      ve[Ub] =
      ve[Jb] =
      ve[Wb] =
      ve[ew] =
      ve[Vb] =
      ve[Hb] =
      ve[Bb] =
      ve[zb] =
      ve[Kb] =
      ve[jb] =
      ve[Yb] =
      ve[Qb] =
      ve[$b] =
      ve[Zb] =
        !1;
    function lw(e) {
      return Xb(e) && kb(e.length) && !!ve[qb(e)];
    }
    Qc.exports = lw;
  });
  var Jc = d((k2, Zc) => {
    function fw(e) {
      return function (t) {
        return e(t);
      };
    }
    Zc.exports = fw;
  });
  var tl = d((pr, Gt) => {
    var dw = ii(),
      el = typeof pr == "object" && pr && !pr.nodeType && pr,
      gr = el && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
      pw = gr && gr.exports === el,
      Ni = pw && dw.process,
      gw = (function () {
        try {
          var e = gr && gr.require && gr.require("util").types;
          return e || (Ni && Ni.binding && Ni.binding("util"));
        } catch {}
      })();
    Gt.exports = gw;
  });
  var tn = d((X2, il) => {
    var hw = $c(),
      vw = Jc(),
      rl = tl(),
      nl = rl && rl.isTypedArray,
      mw = nl ? vw(nl) : hw;
    il.exports = mw;
  });
  var Di = d((G2, ol) => {
    var Ew = qc(),
      yw = fr(),
      _w = be(),
      Iw = Zr(),
      Tw = Jr(),
      bw = tn(),
      ww = Object.prototype,
      Aw = ww.hasOwnProperty;
    function Ow(e, t) {
      var r = _w(e),
        n = !r && yw(e),
        i = !r && !n && Iw(e),
        o = !r && !n && !i && bw(e),
        a = r || n || i || o,
        u = a ? Ew(e.length, String) : [],
        s = u.length;
      for (var l in e)
        (t || Aw.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              Tw(l, s))
          ) &&
          u.push(l);
      return u;
    }
    ol.exports = Ow;
  });
  var rn = d((U2, al) => {
    var xw = Object.prototype;
    function Sw(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || xw;
      return e === r;
    }
    al.exports = Sw;
  });
  var ul = d((W2, sl) => {
    var Rw = oi(),
      Cw = Rw(Object.keys, Object);
    sl.exports = Cw;
  });
  var nn = d((V2, cl) => {
    var Lw = rn(),
      Pw = ul(),
      Nw = Object.prototype,
      Dw = Nw.hasOwnProperty;
    function Mw(e) {
      if (!Lw(e)) return Pw(e);
      var t = [];
      for (var r in Object(e)) Dw.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    cl.exports = Mw;
  });
  var _t = d((H2, ll) => {
    var Fw = wi(),
      qw = en();
    function kw(e) {
      return e != null && qw(e.length) && !Fw(e);
    }
    ll.exports = kw;
  });
  var hr = d((B2, fl) => {
    var Xw = Di(),
      Gw = nn(),
      Uw = _t();
    function Ww(e) {
      return Uw(e) ? Xw(e) : Gw(e);
    }
    fl.exports = Ww;
  });
  var pl = d((z2, dl) => {
    var Vw = Ci(),
      Hw = Pi(),
      Bw = hr();
    function zw(e) {
      return Vw(e, Bw, Hw);
    }
    dl.exports = zw;
  });
  var vl = d((K2, hl) => {
    var gl = pl(),
      Kw = 1,
      jw = Object.prototype,
      Yw = jw.hasOwnProperty;
    function Qw(e, t, r, n, i, o) {
      var a = r & Kw,
        u = gl(e),
        s = u.length,
        l = gl(t),
        y = l.length;
      if (s != y && !a) return !1;
      for (var h = s; h--; ) {
        var g = u[h];
        if (!(a ? g in t : Yw.call(t, g))) return !1;
      }
      var m = o.get(e),
        T = o.get(t);
      if (m && T) return m == t && T == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var R = a; ++h < s; ) {
        g = u[h];
        var A = e[g],
          N = t[g];
        if (n) var C = a ? n(N, A, g, t, e, o) : n(A, N, g, e, t, o);
        if (!(C === void 0 ? A === N || i(A, N, r, n, o) : C)) {
          w = !1;
          break;
        }
        R || (R = g == "constructor");
      }
      if (w && !R) {
        var M = e.constructor,
          k = t.constructor;
        M != k &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    hl.exports = Qw;
  });
  var El = d((j2, ml) => {
    var $w = dt(),
      Zw = He(),
      Jw = $w(Zw, "DataView");
    ml.exports = Jw;
  });
  var _l = d((Y2, yl) => {
    var eA = dt(),
      tA = He(),
      rA = eA(tA, "Promise");
    yl.exports = rA;
  });
  var Tl = d((Q2, Il) => {
    var nA = dt(),
      iA = He(),
      oA = nA(iA, "Set");
    Il.exports = oA;
  });
  var Mi = d(($2, bl) => {
    var aA = dt(),
      sA = He(),
      uA = aA(sA, "WeakMap");
    bl.exports = uA;
  });
  var on = d((Z2, Cl) => {
    var Fi = El(),
      qi = jr(),
      ki = _l(),
      Xi = Tl(),
      Gi = Mi(),
      Rl = ft(),
      Ut = Oi(),
      wl = "[object Map]",
      cA = "[object Object]",
      Al = "[object Promise]",
      Ol = "[object Set]",
      xl = "[object WeakMap]",
      Sl = "[object DataView]",
      lA = Ut(Fi),
      fA = Ut(qi),
      dA = Ut(ki),
      pA = Ut(Xi),
      gA = Ut(Gi),
      It = Rl;
    ((Fi && It(new Fi(new ArrayBuffer(1))) != Sl) ||
      (qi && It(new qi()) != wl) ||
      (ki && It(ki.resolve()) != Al) ||
      (Xi && It(new Xi()) != Ol) ||
      (Gi && It(new Gi()) != xl)) &&
      (It = function (e) {
        var t = Rl(e),
          r = t == cA ? e.constructor : void 0,
          n = r ? Ut(r) : "";
        if (n)
          switch (n) {
            case lA:
              return Sl;
            case fA:
              return wl;
            case dA:
              return Al;
            case pA:
              return Ol;
            case gA:
              return xl;
          }
        return t;
      });
    Cl.exports = It;
  });
  var kl = d((J2, ql) => {
    var Ui = xi(),
      hA = Si(),
      vA = xc(),
      mA = vl(),
      Ll = on(),
      Pl = be(),
      Nl = Zr(),
      EA = tn(),
      yA = 1,
      Dl = "[object Arguments]",
      Ml = "[object Array]",
      an = "[object Object]",
      _A = Object.prototype,
      Fl = _A.hasOwnProperty;
    function IA(e, t, r, n, i, o) {
      var a = Pl(e),
        u = Pl(t),
        s = a ? Ml : Ll(e),
        l = u ? Ml : Ll(t);
      (s = s == Dl ? an : s), (l = l == Dl ? an : l);
      var y = s == an,
        h = l == an,
        g = s == l;
      if (g && Nl(e)) {
        if (!Nl(t)) return !1;
        (a = !0), (y = !1);
      }
      if (g && !y)
        return (
          o || (o = new Ui()),
          a || EA(e) ? hA(e, t, r, n, i, o) : vA(e, t, s, r, n, i, o)
        );
      if (!(r & yA)) {
        var m = y && Fl.call(e, "__wrapped__"),
          T = h && Fl.call(t, "__wrapped__");
        if (m || T) {
          var w = m ? e.value() : e,
            R = T ? t.value() : t;
          return o || (o = new Ui()), i(w, R, r, n, o);
        }
      }
      return g ? (o || (o = new Ui()), mA(e, t, r, n, i, o)) : !1;
    }
    ql.exports = IA;
  });
  var Wi = d((eq, Ul) => {
    var TA = kl(),
      Xl = ot();
    function Gl(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Xl(e) && !Xl(t))
        ? e !== e && t !== t
        : TA(e, t, r, n, Gl, i);
    }
    Ul.exports = Gl;
  });
  var Vl = d((tq, Wl) => {
    var bA = xi(),
      wA = Wi(),
      AA = 1,
      OA = 2;
    function xA(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          l = e[s],
          y = u[1];
        if (a && u[2]) {
          if (l === void 0 && !(s in e)) return !1;
        } else {
          var h = new bA();
          if (n) var g = n(l, y, s, e, t, h);
          if (!(g === void 0 ? wA(y, l, AA | OA, n, h) : g)) return !1;
        }
      }
      return !0;
    }
    Wl.exports = xA;
  });
  var Vi = d((rq, Hl) => {
    var SA = et();
    function RA(e) {
      return e === e && !SA(e);
    }
    Hl.exports = RA;
  });
  var zl = d((nq, Bl) => {
    var CA = Vi(),
      LA = hr();
    function PA(e) {
      for (var t = LA(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, CA(i)];
      }
      return t;
    }
    Bl.exports = PA;
  });
  var Hi = d((iq, Kl) => {
    function NA(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Kl.exports = NA;
  });
  var Yl = d((oq, jl) => {
    var DA = Vl(),
      MA = zl(),
      FA = Hi();
    function qA(e) {
      var t = MA(e);
      return t.length == 1 && t[0][2]
        ? FA(t[0][0], t[0][1])
        : function (r) {
            return r === e || DA(r, e, t);
          };
    }
    jl.exports = qA;
  });
  var vr = d((aq, Ql) => {
    var kA = ft(),
      XA = ot(),
      GA = "[object Symbol]";
    function UA(e) {
      return typeof e == "symbol" || (XA(e) && kA(e) == GA);
    }
    Ql.exports = UA;
  });
  var sn = d((sq, $l) => {
    var WA = be(),
      VA = vr(),
      HA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      BA = /^\w*$/;
    function zA(e, t) {
      if (WA(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        VA(e)
        ? !0
        : BA.test(e) || !HA.test(e) || (t != null && e in Object(t));
    }
    $l.exports = zA;
  });
  var ef = d((uq, Jl) => {
    var Zl = Yr(),
      KA = "Expected a function";
    function Bi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(KA);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Bi.Cache || Zl)()), r;
    }
    Bi.Cache = Zl;
    Jl.exports = Bi;
  });
  var rf = d((cq, tf) => {
    var jA = ef(),
      YA = 500;
    function QA(e) {
      var t = jA(e, function (n) {
          return r.size === YA && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    tf.exports = QA;
  });
  var of = d((lq, nf) => {
    var $A = rf(),
      ZA =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      JA = /\\(\\)?/g,
      e0 = $A(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(ZA, function (r, n, i, o) {
            t.push(i ? o.replace(JA, "$1") : n || r);
          }),
          t
        );
      });
    nf.exports = e0;
  });
  var zi = d((fq, af) => {
    function t0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    af.exports = t0;
  });
  var df = d((dq, ff) => {
    var sf = Lt(),
      r0 = zi(),
      n0 = be(),
      i0 = vr(),
      o0 = 1 / 0,
      uf = sf ? sf.prototype : void 0,
      cf = uf ? uf.toString : void 0;
    function lf(e) {
      if (typeof e == "string") return e;
      if (n0(e)) return r0(e, lf) + "";
      if (i0(e)) return cf ? cf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -o0 ? "-0" : t;
    }
    ff.exports = lf;
  });
  var gf = d((pq, pf) => {
    var a0 = df();
    function s0(e) {
      return e == null ? "" : a0(e);
    }
    pf.exports = s0;
  });
  var mr = d((gq, hf) => {
    var u0 = be(),
      c0 = sn(),
      l0 = of(),
      f0 = gf();
    function d0(e, t) {
      return u0(e) ? e : c0(e, t) ? [e] : l0(f0(e));
    }
    hf.exports = d0;
  });
  var Wt = d((hq, vf) => {
    var p0 = vr(),
      g0 = 1 / 0;
    function h0(e) {
      if (typeof e == "string" || p0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -g0 ? "-0" : t;
    }
    vf.exports = h0;
  });
  var un = d((vq, mf) => {
    var v0 = mr(),
      m0 = Wt();
    function E0(e, t) {
      t = v0(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[m0(t[r++])];
      return r && r == n ? e : void 0;
    }
    mf.exports = E0;
  });
  var cn = d((mq, Ef) => {
    var y0 = un();
    function _0(e, t, r) {
      var n = e == null ? void 0 : y0(e, t);
      return n === void 0 ? r : n;
    }
    Ef.exports = _0;
  });
  var _f = d((Eq, yf) => {
    function I0(e, t) {
      return e != null && t in Object(e);
    }
    yf.exports = I0;
  });
  var Tf = d((yq, If) => {
    var T0 = mr(),
      b0 = fr(),
      w0 = be(),
      A0 = Jr(),
      O0 = en(),
      x0 = Wt();
    function S0(e, t, r) {
      t = T0(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = x0(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && O0(i) && A0(a, i) && (w0(e) || b0(e)));
    }
    If.exports = S0;
  });
  var wf = d((_q, bf) => {
    var R0 = _f(),
      C0 = Tf();
    function L0(e, t) {
      return e != null && C0(e, t, R0);
    }
    bf.exports = L0;
  });
  var Of = d((Iq, Af) => {
    var P0 = Wi(),
      N0 = cn(),
      D0 = wf(),
      M0 = sn(),
      F0 = Vi(),
      q0 = Hi(),
      k0 = Wt(),
      X0 = 1,
      G0 = 2;
    function U0(e, t) {
      return M0(e) && F0(t)
        ? q0(k0(e), t)
        : function (r) {
            var n = N0(r, e);
            return n === void 0 && n === t ? D0(r, e) : P0(t, n, X0 | G0);
          };
    }
    Af.exports = U0;
  });
  var ln = d((Tq, xf) => {
    function W0(e) {
      return e;
    }
    xf.exports = W0;
  });
  var Ki = d((bq, Sf) => {
    function V0(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Sf.exports = V0;
  });
  var Cf = d((wq, Rf) => {
    var H0 = un();
    function B0(e) {
      return function (t) {
        return H0(t, e);
      };
    }
    Rf.exports = B0;
  });
  var Pf = d((Aq, Lf) => {
    var z0 = Ki(),
      K0 = Cf(),
      j0 = sn(),
      Y0 = Wt();
    function Q0(e) {
      return j0(e) ? z0(Y0(e)) : K0(e);
    }
    Lf.exports = Q0;
  });
  var pt = d((Oq, Nf) => {
    var $0 = Yl(),
      Z0 = Of(),
      J0 = ln(),
      eO = be(),
      tO = Pf();
    function rO(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? J0
        : typeof e == "object"
        ? eO(e)
          ? Z0(e[0], e[1])
          : $0(e)
        : tO(e);
    }
    Nf.exports = rO;
  });
  var ji = d((xq, Df) => {
    var nO = pt(),
      iO = _t(),
      oO = hr();
    function aO(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!iO(t)) {
          var o = nO(r, 3);
          (t = oO(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Df.exports = aO;
  });
  var Yi = d((Sq, Mf) => {
    function sO(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Mf.exports = sO;
  });
  var qf = d((Rq, Ff) => {
    var uO = /\s/;
    function cO(e) {
      for (var t = e.length; t-- && uO.test(e.charAt(t)); );
      return t;
    }
    Ff.exports = cO;
  });
  var Xf = d((Cq, kf) => {
    var lO = qf(),
      fO = /^\s+/;
    function dO(e) {
      return e && e.slice(0, lO(e) + 1).replace(fO, "");
    }
    kf.exports = dO;
  });
  var fn = d((Lq, Wf) => {
    var pO = Xf(),
      Gf = et(),
      gO = vr(),
      Uf = 0 / 0,
      hO = /^[-+]0x[0-9a-f]+$/i,
      vO = /^0b[01]+$/i,
      mO = /^0o[0-7]+$/i,
      EO = parseInt;
    function yO(e) {
      if (typeof e == "number") return e;
      if (gO(e)) return Uf;
      if (Gf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Gf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = pO(e);
      var r = vO.test(e);
      return r || mO.test(e) ? EO(e.slice(2), r ? 2 : 8) : hO.test(e) ? Uf : +e;
    }
    Wf.exports = yO;
  });
  var Bf = d((Pq, Hf) => {
    var _O = fn(),
      Vf = 1 / 0,
      IO = 17976931348623157e292;
    function TO(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = _O(e)), e === Vf || e === -Vf)) {
        var t = e < 0 ? -1 : 1;
        return t * IO;
      }
      return e === e ? e : 0;
    }
    Hf.exports = TO;
  });
  var Qi = d((Nq, zf) => {
    var bO = Bf();
    function wO(e) {
      var t = bO(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    zf.exports = wO;
  });
  var jf = d((Dq, Kf) => {
    var AO = Yi(),
      OO = pt(),
      xO = Qi(),
      SO = Math.max;
    function RO(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : xO(r);
      return i < 0 && (i = SO(n + i, 0)), AO(e, OO(t, 3), i);
    }
    Kf.exports = RO;
  });
  var $i = d((Mq, Yf) => {
    var CO = ji(),
      LO = jf(),
      PO = CO(LO);
    Yf.exports = PO;
  });
  var Zf = {};
  Ne(Zf, {
    ELEMENT_MATCHES: () => NO,
    FLEX_PREFIXED: () => Zi,
    IS_BROWSER_ENV: () => ze,
    TRANSFORM_PREFIXED: () => gt,
    TRANSFORM_STYLE_PREFIXED: () => pn,
    withBrowser: () => dn,
  });
  var $f,
    ze,
    dn,
    NO,
    Zi,
    gt,
    Qf,
    pn,
    gn = me(() => {
      "use strict";
      ($f = le($i())),
        (ze = typeof window < "u"),
        (dn = (e, t) => (ze ? e() : t)),
        (NO = dn(() =>
          (0, $f.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Zi = dn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (gt = dn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Qf = gt.split("transform")[0]),
        (pn = Qf ? Qf + "TransformStyle" : "transformStyle");
    });
  var Ji = d((Fq, nd) => {
    var DO = 4,
      MO = 0.001,
      FO = 1e-7,
      qO = 10,
      Er = 11,
      hn = 1 / (Er - 1),
      kO = typeof Float32Array == "function";
    function Jf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ed(e, t) {
      return 3 * t - 6 * e;
    }
    function td(e) {
      return 3 * e;
    }
    function vn(e, t, r) {
      return ((Jf(t, r) * e + ed(t, r)) * e + td(t)) * e;
    }
    function rd(e, t, r) {
      return 3 * Jf(t, r) * e * e + 2 * ed(t, r) * e + td(t);
    }
    function XO(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = vn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > FO && ++u < qO);
      return a;
    }
    function GO(e, t, r, n) {
      for (var i = 0; i < DO; ++i) {
        var o = rd(t, r, n);
        if (o === 0) return t;
        var a = vn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    nd.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = kO ? new Float32Array(Er) : new Array(Er);
      if (t !== r || n !== i)
        for (var a = 0; a < Er; ++a) o[a] = vn(a * hn, t, n);
      function u(s) {
        for (var l = 0, y = 1, h = Er - 1; y !== h && o[y] <= s; ++y) l += hn;
        --y;
        var g = (s - o[y]) / (o[y + 1] - o[y]),
          m = l + g * hn,
          T = rd(m, t, n);
        return T >= MO ? GO(s, m, t, n) : T === 0 ? m : XO(s, l, l + hn, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : vn(u(l), r, i);
      };
    };
  });
  var _r = {};
  Ne(_r, {
    bounce: () => Tx,
    bouncePast: () => bx,
    ease: () => UO,
    easeIn: () => WO,
    easeInOut: () => HO,
    easeOut: () => VO,
    inBack: () => px,
    inCirc: () => cx,
    inCubic: () => jO,
    inElastic: () => vx,
    inExpo: () => ax,
    inOutBack: () => hx,
    inOutCirc: () => fx,
    inOutCubic: () => QO,
    inOutElastic: () => Ex,
    inOutExpo: () => ux,
    inOutQuad: () => KO,
    inOutQuart: () => JO,
    inOutQuint: () => rx,
    inOutSine: () => ox,
    inQuad: () => BO,
    inQuart: () => $O,
    inQuint: () => ex,
    inSine: () => nx,
    outBack: () => gx,
    outBounce: () => dx,
    outCirc: () => lx,
    outCubic: () => YO,
    outElastic: () => mx,
    outExpo: () => sx,
    outQuad: () => zO,
    outQuart: () => ZO,
    outQuint: () => tx,
    outSine: () => ix,
    swingFrom: () => _x,
    swingFromTo: () => yx,
    swingTo: () => Ix,
  });
  function BO(e) {
    return Math.pow(e, 2);
  }
  function zO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function KO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function jO(e) {
    return Math.pow(e, 3);
  }
  function YO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function QO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function $O(e) {
    return Math.pow(e, 4);
  }
  function ZO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function JO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function ex(e) {
    return Math.pow(e, 5);
  }
  function tx(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function rx(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function nx(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function ix(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function ox(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function ax(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function sx(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function ux(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function cx(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function lx(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function fx(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function dx(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function px(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function gx(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function hx(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function vx(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function mx(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Ex(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function yx(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function _x(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function Ix(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Tx(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function bx(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var yr,
    at,
    UO,
    WO,
    VO,
    HO,
    eo = me(() => {
      "use strict";
      (yr = le(Ji())),
        (at = 1.70158),
        (UO = (0, yr.default)(0.25, 0.1, 0.25, 1)),
        (WO = (0, yr.default)(0.42, 0, 1, 1)),
        (VO = (0, yr.default)(0, 0, 0.58, 1)),
        (HO = (0, yr.default)(0.42, 0, 0.58, 1));
    });
  var od = {};
  Ne(od, {
    applyEasing: () => Ax,
    createBezierEasing: () => wx,
    optimizeFloat: () => Ir,
  });
  function Ir(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function wx(e) {
    return (0, id.default)(...e);
  }
  function Ax(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Ir(r ? (t > 0 ? r(t) : t) : t > 0 && e && _r[e] ? _r[e](t) : t);
  }
  var id,
    to = me(() => {
      "use strict";
      eo();
      id = le(Ji());
    });
  var ud = {};
  Ne(ud, {
    createElementState: () => sd,
    ixElements: () => Xx,
    mergeActionState: () => ro,
  });
  function sd(e, t, r, n, i) {
    let o =
      r === Ox ? (0, Vt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Vt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function ro(e, t, r, n, i) {
    let o = Ux(i);
    return (0, Vt.mergeIn)(e, [t, kx, r], n, o);
  }
  function Ux(e) {
    let { config: t } = e;
    return Gx.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var Vt,
    kq,
    Ox,
    Xq,
    xx,
    Sx,
    Rx,
    Cx,
    Lx,
    Px,
    Nx,
    Dx,
    Mx,
    Fx,
    qx,
    ad,
    kx,
    Xx,
    Gx,
    cd = me(() => {
      "use strict";
      Vt = le(Dt());
      Me();
      ({
        HTML_ELEMENT: kq,
        PLAIN_OBJECT: Ox,
        ABSTRACT_NODE: Xq,
        CONFIG_X_VALUE: xx,
        CONFIG_Y_VALUE: Sx,
        CONFIG_Z_VALUE: Rx,
        CONFIG_VALUE: Cx,
        CONFIG_X_UNIT: Lx,
        CONFIG_Y_UNIT: Px,
        CONFIG_Z_UNIT: Nx,
        CONFIG_UNIT: Dx,
      } = Ae),
        ({
          IX2_SESSION_STOPPED: Mx,
          IX2_INSTANCE_ADDED: Fx,
          IX2_ELEMENT_STATE_CHANGED: qx,
        } = Te),
        (ad = {}),
        (kx = "refState"),
        (Xx = (e = ad, t = {}) => {
          switch (t.type) {
            case Mx:
              return ad;
            case Fx: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, Vt.getIn)(s, [r, n]) !== n && (s = sd(s, n, a, r, o)),
                ro(s, r, u, i, o)
              );
            }
            case qx: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return ro(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      Gx = [
        [xx, Lx],
        [Sx, Px],
        [Rx, Nx],
        [Cx, Dx],
      ];
    });
  var ld = d((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    function Wx(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    Wx(no, {
      clearPlugin: function () {
        return Yx;
      },
      createPluginInstance: function () {
        return Kx;
      },
      getPluginConfig: function () {
        return Vx;
      },
      getPluginDestination: function () {
        return zx;
      },
      getPluginDuration: function () {
        return Hx;
      },
      getPluginOrigin: function () {
        return Bx;
      },
      renderPlugin: function () {
        return jx;
      },
    });
    var Vx = (e) => e.value,
      Hx = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      Bx = (e) => e || { value: 0 },
      zx = (e) => ({ value: e.value }),
      Kx = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      jx = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      Yx = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var dd = d((io) => {
    "use strict";
    Object.defineProperty(io, "__esModule", { value: !0 });
    function Qx(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    Qx(io, {
      clearPlugin: function () {
        return aS;
      },
      createPluginInstance: function () {
        return iS;
      },
      getPluginConfig: function () {
        return eS;
      },
      getPluginDestination: function () {
        return nS;
      },
      getPluginDuration: function () {
        return tS;
      },
      getPluginOrigin: function () {
        return rS;
      },
      renderPlugin: function () {
        return oS;
      },
    });
    var $x = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Zx = () => window.Webflow.require("spline"),
      Jx = (e, t) => e.filter((r) => !t.includes(r)),
      eS = (e, t) => e.value[t],
      tS = () => null,
      fd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      rS = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = Jx(n, o);
          return a.length ? a.reduce((s, l) => ((s[l] = fd[l]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = fd[a]), o), {});
      },
      nS = (e) => e.value,
      iS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? $x(r) : null;
      },
      oS = (e, t, r) => {
        let n = Zx(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = o && u.findObjectById(o);
            if (!s) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (s.position.x = l.positionX),
              l.positionY != null && (s.position.y = l.positionY),
              l.positionZ != null && (s.position.z = l.positionZ),
              l.rotationX != null && (s.rotation.x = l.rotationX),
              l.rotationY != null && (s.rotation.y = l.rotationY),
              l.rotationZ != null && (s.rotation.z = l.rotationZ),
              l.scaleX != null && (s.scale.x = l.scaleX),
              l.scaleY != null && (s.scale.y = l.scaleY),
              l.scaleZ != null && (s.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      aS = () => null;
  });
  var pd = d((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    function sS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    sS(so, {
      clearPlugin: function () {
        return vS;
      },
      createPluginInstance: function () {
        return gS;
      },
      getPluginConfig: function () {
        return lS;
      },
      getPluginDestination: function () {
        return pS;
      },
      getPluginDuration: function () {
        return fS;
      },
      getPluginOrigin: function () {
        return dS;
      },
      renderPlugin: function () {
        return hS;
      },
    });
    var oo = "--wf-rive-fit",
      ao = "--wf-rive-alignment",
      uS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      cS = () => window.Webflow.require("rive"),
      lS = (e, t) => e.value.inputs[t],
      fS = () => null,
      dS = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      pS = (e) => e.value.inputs ?? {},
      gS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? uS(r) : null;
      },
      hS = (e, { PLUGIN_RIVE: t }, r) => {
        let n = cS(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = r.config.value || {};
        function s(l) {
          if (l.loaded) y();
          else {
            let h = () => {
              y(), l?.off("load", h);
            };
            l?.on("load", h);
          }
          function y() {
            let h = l.stateMachineInputs(a);
            if (h != null) {
              if ((l.isPlaying || l.play(a, !1), oo in u || ao in u)) {
                let g = l.layout,
                  m = u[oo] ?? g.fit,
                  T = u[ao] ?? g.alignment;
                (m !== g.fit || T !== g.alignment) &&
                  (l.layout = g.copyWith({ fit: m, alignment: T }));
              }
              for (let g in u) {
                if (g === oo || g === ao) continue;
                let m = h.find((T) => T.name === g);
                if (m != null)
                  switch (m.type) {
                    case o.Boolean: {
                      if (u[g] != null) {
                        let T = !!u[g];
                        m.value = T;
                      }
                      break;
                    }
                    case o.Number: {
                      let T = t[g];
                      T != null && (m.value = T);
                      break;
                    }
                    case o.Trigger: {
                      u[g] && m.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? s(i.rive) : n.setLoadHandler(e, s);
      },
      vS = (e, t) => null;
  });
  var co = d((uo) => {
    "use strict";
    Object.defineProperty(uo, "__esModule", { value: !0 });
    Object.defineProperty(uo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return mS;
      },
    });
    var gd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function mS(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof gd[o] == "string" ? gd[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let g = (1 - Math.abs(2 * h - 1)) * y,
          m = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          T = h - g / 2,
          w,
          R,
          A;
        l >= 0 && l < 60
          ? ((w = g), (R = m), (A = 0))
          : l >= 60 && l < 120
          ? ((w = m), (R = g), (A = 0))
          : l >= 120 && l < 180
          ? ((w = 0), (R = g), (A = m))
          : l >= 180 && l < 240
          ? ((w = 0), (R = m), (A = g))
          : l >= 240 && l < 300
          ? ((w = m), (R = 0), (A = g))
          : ((w = g), (R = 0), (A = m)),
          (t = Math.round((w + T) * 255)),
          (r = Math.round((R + T) * 255)),
          (n = Math.round((A + T) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * h - 1)) * y,
          m = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          T = h - g / 2,
          w,
          R,
          A;
        l >= 0 && l < 60
          ? ((w = g), (R = m), (A = 0))
          : l >= 60 && l < 120
          ? ((w = m), (R = g), (A = 0))
          : l >= 120 && l < 180
          ? ((w = 0), (R = g), (A = m))
          : l >= 180 && l < 240
          ? ((w = 0), (R = m), (A = g))
          : l >= 240 && l < 300
          ? ((w = m), (R = 0), (A = g))
          : ((w = g), (R = 0), (A = m)),
          (t = Math.round((w + T) * 255)),
          (r = Math.round((R + T) * 255)),
          (n = Math.round((A + T) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var hd = d((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    function ES(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    ES(lo, {
      clearPlugin: function () {
        return OS;
      },
      createPluginInstance: function () {
        return wS;
      },
      getPluginConfig: function () {
        return _S;
      },
      getPluginDestination: function () {
        return bS;
      },
      getPluginDuration: function () {
        return IS;
      },
      getPluginOrigin: function () {
        return TS;
      },
      renderPlugin: function () {
        return AS;
      },
    });
    var yS = co(),
      _S = (e, t) => e.value[t],
      IS = () => null,
      TS = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, yS.normalizeColor)(i);
      },
      bS = (e) => e.value,
      wS = () => null,
      AS = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: u, green: s, blue: l, alpha: y } = o,
          h;
        a != null && (h = a + i),
          u != null &&
            l != null &&
            s != null &&
            y != null &&
            (h = `rgba(${u}, ${s}, ${l}, ${y})`),
          h != null && document.documentElement.style.setProperty(n, h);
      },
      OS = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var md = d((fo) => {
    "use strict";
    Object.defineProperty(fo, "__esModule", { value: !0 });
    Object.defineProperty(fo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return LS;
      },
    });
    var mn = (Me(), Qe(_s)),
      xS = En(ld()),
      SS = En(dd()),
      RS = En(pd()),
      CS = En(hd());
    function vd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (vd = function (n) {
        return n ? r : t;
      })(e);
    }
    function En(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = vd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var LS = new Map([
      [mn.ActionTypeConsts.PLUGIN_LOTTIE, { ...xS }],
      [mn.ActionTypeConsts.PLUGIN_SPLINE, { ...SS }],
      [mn.ActionTypeConsts.PLUGIN_RIVE, { ...RS }],
      [mn.ActionTypeConsts.PLUGIN_VARIABLE, { ...CS }],
    ]);
  });
  var Ed = {};
  Ne(Ed, {
    clearPlugin: () => Eo,
    createPluginInstance: () => NS,
    getPluginConfig: () => go,
    getPluginDestination: () => vo,
    getPluginDuration: () => PS,
    getPluginOrigin: () => ho,
    isPluginType: () => Tt,
    renderPlugin: () => mo,
  });
  function Tt(e) {
    return po.pluginMethodMap.has(e);
  }
  var po,
    bt,
    go,
    ho,
    PS,
    vo,
    NS,
    mo,
    Eo,
    yo = me(() => {
      "use strict";
      gn();
      po = le(md());
      (bt = (e) => (t) => {
        if (!ze) return () => null;
        let r = po.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (go = bt("getPluginConfig")),
        (ho = bt("getPluginOrigin")),
        (PS = bt("getPluginDuration")),
        (vo = bt("getPluginDestination")),
        (NS = bt("createPluginInstance")),
        (mo = bt("renderPlugin")),
        (Eo = bt("clearPlugin"));
    });
  var _d = d((Kq, yd) => {
    function DS(e, t) {
      return e == null || e !== e ? t : e;
    }
    yd.exports = DS;
  });
  var Td = d((jq, Id) => {
    function MS(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Id.exports = MS;
  });
  var wd = d((Yq, bd) => {
    function FS(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    bd.exports = FS;
  });
  var Od = d((Qq, Ad) => {
    var qS = wd(),
      kS = qS();
    Ad.exports = kS;
  });
  var _o = d(($q, xd) => {
    var XS = Od(),
      GS = hr();
    function US(e, t) {
      return e && XS(e, t, GS);
    }
    xd.exports = US;
  });
  var Rd = d((Zq, Sd) => {
    var WS = _t();
    function VS(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!WS(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Sd.exports = VS;
  });
  var Io = d((Jq, Cd) => {
    var HS = _o(),
      BS = Rd(),
      zS = BS(HS);
    Cd.exports = zS;
  });
  var Pd = d((ek, Ld) => {
    function KS(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Ld.exports = KS;
  });
  var Dd = d((tk, Nd) => {
    var jS = Td(),
      YS = Io(),
      QS = pt(),
      $S = Pd(),
      ZS = be();
    function JS(e, t, r) {
      var n = ZS(e) ? jS : $S,
        i = arguments.length < 3;
      return n(e, QS(t, 4), r, i, YS);
    }
    Nd.exports = JS;
  });
  var Fd = d((rk, Md) => {
    var eR = Yi(),
      tR = pt(),
      rR = Qi(),
      nR = Math.max,
      iR = Math.min;
    function oR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = rR(r)), (i = r < 0 ? nR(n + i, 0) : iR(i, n - 1))),
        eR(e, tR(t, 3), i, !0)
      );
    }
    Md.exports = oR;
  });
  var kd = d((nk, qd) => {
    var aR = ji(),
      sR = Fd(),
      uR = aR(sR);
    qd.exports = uR;
  });
  function Xd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function cR(e, t) {
    if (Xd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Xd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var To,
    Gd = me(() => {
      "use strict";
      To = cR;
    });
  var ip = {};
  Ne(ip, {
    cleanupHTMLElement: () => aC,
    clearAllStyles: () => oC,
    clearObjectCache: () => OR,
    getActionListProgress: () => uC,
    getAffectedElements: () => xo,
    getComputedStyle: () => DR,
    getDestinationValues: () => UR,
    getElementId: () => CR,
    getInstanceId: () => SR,
    getInstanceOrigin: () => qR,
    getItemConfigByKey: () => GR,
    getMaxDurationItemIndex: () => np,
    getNamespacedParameterId: () => fC,
    getRenderType: () => ep,
    getStyleProp: () => WR,
    mediaQueriesEqual: () => pC,
    observeStore: () => NR,
    reduceListToGroup: () => cC,
    reifyState: () => LR,
    renderHTMLElement: () => VR,
    shallowEqual: () => To,
    shouldAllowMediaQuery: () => dC,
    shouldNamespaceEventParameter: () => lC,
    stringifyTarget: () => gC,
  });
  function OR() {
    yn.clear();
  }
  function SR() {
    return "i" + xR++;
  }
  function CR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + RR++;
  }
  function LR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, bn.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function NR({ store: e, select: t, onChange: r, comparator: n = PR }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, u) || ((u = l), r(u, e));
    }
    return a;
  }
  function Vd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function xo({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (S, E) =>
          S.concat(
            xo({
              config: { target: E },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: l,
        getSiblingElements: y,
        matchSelector: h,
        elementContains: g,
        isSiblingNode: m,
      } = i,
      { target: T } = e;
    if (!T) return [];
    let {
      id: w,
      objectId: R,
      selector: A,
      selectorGuids: N,
      appliesTo: C,
      useEventTarget: M,
    } = Vd(T);
    if (R) return [yn.has(R) ? yn.get(R) : yn.set(R, {}).get(R)];
    if (C === _i.PAGE) {
      let S = a(w);
      return S ? [S] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[w || A] || {},
      K = !!(F.id || F.selector),
      j,
      $,
      ee,
      V = t && u(Vd(t.target));
    if (
      (K
        ? ((j = F.limitAffectedElements), ($ = V), (ee = u(F)))
        : ($ = ee = u({ id: w, selector: A, selectorGuids: N })),
      t && M)
    ) {
      let S = r && (ee || M === !0) ? [r] : s(V);
      if (ee) {
        if (M === bR) return s(ee).filter((E) => S.some((D) => g(E, D)));
        if (M === Ud) return s(ee).filter((E) => S.some((D) => g(D, E)));
        if (M === Wd) return s(ee).filter((E) => S.some((D) => m(D, E)));
      }
      return S;
    }
    return $ == null || ee == null
      ? []
      : ze && n
      ? s(ee).filter((S) => n.contains(S))
      : j === Ud
      ? s($, ee)
      : j === TR
      ? l(s($)).filter(h(ee))
      : j === Wd
      ? y(s($)).filter(h(ee))
      : s(ee);
  }
  function DR({ element: e, actionItem: t }) {
    if (!ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case jt:
      case Yt:
      case Qt:
      case $t:
      case An:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function qR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Tt(a)) return ho(a)(t[a], n);
    switch (n.actionTypeId) {
      case Bt:
      case zt:
      case Kt:
      case Ar:
        return t[n.actionTypeId] || So[n.actionTypeId];
      case Or:
        return MR(t[n.actionTypeId], n.config.filters);
      case xr:
        return FR(t[n.actionTypeId], n.config.fontVariations);
      case $d:
        return { value: (0, st.default)(parseFloat(o(e, In)), 1) };
      case jt: {
        let u = o(e, tt),
          s = o(e, rt),
          l,
          y;
        return (
          n.config.widthUnit === ht
            ? (l = Hd.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (l = (0, st.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === ht
            ? (y = Hd.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (y = (0, st.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: l, heightValue: y }
        );
      }
      case Yt:
      case Qt:
      case $t:
        return rC({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case An:
        return { value: (0, st.default)(o(e, Tn), r.display) };
      case AR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function UR({ element: e, actionItem: t, elementApi: r }) {
    if (Tt(t.actionTypeId)) return vo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Bt:
      case zt:
      case Kt:
      case Ar: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case jt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: l } = t.config;
        if (!ze) return { widthValue: s, heightValue: l };
        if (a === ht) {
          let y = n(e, tt);
          i(e, tt, ""), (s = o(e, "offsetWidth")), i(e, tt, y);
        }
        if (u === ht) {
          let y = n(e, rt);
          i(e, rt, ""), (l = o(e, "offsetHeight")), i(e, rt, y);
        }
        return { widthValue: s, heightValue: l };
      }
      case Yt:
      case Qt:
      case $t: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            l = s(e, u),
            y = (0, Kd.normalizeColor)(l);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Or:
        return t.config.filters.reduce(kR, {});
      case xr:
        return t.config.fontVariations.reduce(XR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function ep(e) {
    if (/^TRANSFORM_/.test(e)) return Yd;
    if (/^STYLE_/.test(e)) return Ao;
    if (/^GENERAL_/.test(e)) return wo;
    if (/^PLUGIN_/.test(e)) return Qd;
  }
  function WR(e, t) {
    return e === Ao ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function VR(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case Yd:
        return jR(e, t, r, i, a);
      case Ao:
        return nC(e, t, r, i, o, a);
      case wo:
        return iC(e, i, a);
      case Qd: {
        let { actionTypeId: l } = i;
        if (Tt(l)) return mo(l)(s, t, i);
      }
    }
  }
  function jR(e, t, r, n, i) {
    let o = KR.map((u) => {
        let s = So[u],
          {
            xValue: l = s.xValue,
            yValue: y = s.yValue,
            zValue: h = s.zValue,
            xUnit: g = "",
            yUnit: m = "",
            zUnit: T = "",
          } = t[u] || {};
        switch (u) {
          case Bt:
            return `${dR}(${l}${g}, ${y}${m}, ${h}${T})`;
          case zt:
            return `${pR}(${l}${g}, ${y}${m}, ${h}${T})`;
          case Kt:
            return `${gR}(${l}${g}) ${hR}(${y}${m}) ${vR}(${h}${T})`;
          case Ar:
            return `${mR}(${l}${g}, ${y}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    wt(e, gt, i), a(e, gt, o), $R(n, r) && a(e, pn, ER);
  }
  function YR(e, t, r, n) {
    let i = (0, bn.default)(t, (a, u, s) => `${a} ${s}(${u}${zR(s, r)})`, ""),
      { setStyle: o } = n;
    wt(e, Tr, n), o(e, Tr, i);
  }
  function QR(e, t, r, n) {
    let i = (0, bn.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    wt(e, br, n), o(e, br, i);
  }
  function $R({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Bt && n !== void 0) ||
      (e === zt && n !== void 0) ||
      (e === Kt && (t !== void 0 || r !== void 0))
    );
  }
  function tC(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function rC({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Oo[t],
      o = n(e, i),
      a = JR.test(o) ? o : r[i],
      u = tC(eC, a).split(wr);
    return {
      rValue: (0, st.default)(parseInt(u[0], 10), 255),
      gValue: (0, st.default)(parseInt(u[1], 10), 255),
      bValue: (0, st.default)(parseInt(u[2], 10), 255),
      aValue: (0, st.default)(parseFloat(u[3]), 1),
    };
  }
  function nC(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case jt: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: l, heightValue: y } = r;
        l !== void 0 && (u === ht && (u = "px"), wt(e, tt, o), a(e, tt, l + u)),
          y !== void 0 &&
            (s === ht && (s = "px"), wt(e, rt, o), a(e, rt, y + s));
        break;
      }
      case Or: {
        YR(e, r, n.config, o);
        break;
      }
      case xr: {
        QR(e, r, n.config, o);
        break;
      }
      case Yt:
      case Qt:
      case $t: {
        let u = Oo[n.actionTypeId],
          s = Math.round(r.rValue),
          l = Math.round(r.gValue),
          y = Math.round(r.bValue),
          h = r.aValue;
        wt(e, u, o),
          a(e, u, h >= 1 ? `rgb(${s},${l},${y})` : `rgba(${s},${l},${y},${h})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        wt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function iC(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case An: {
        let { value: i } = t.config;
        i === yR && ze ? n(e, Tn, Zi) : n(e, Tn, i);
        return;
      }
    }
  }
  function wt(e, t, r) {
    if (!ze) return;
    let n = Jd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Ht);
    if (!a) {
      o(e, Ht, n);
      return;
    }
    let u = a.split(wr).map(Zd);
    u.indexOf(n) === -1 && o(e, Ht, u.concat(n).join(wr));
  }
  function tp(e, t, r) {
    if (!ze) return;
    let n = Jd[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Ht);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Ht,
        a
          .split(wr)
          .map(Zd)
          .filter((u) => u !== n)
          .join(wr)
      );
  }
  function oC({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        l = i[s];
      l && Bd({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Bd({ actionList: i[o], elementApi: t });
      });
  }
  function Bd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        zd({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            zd({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function zd({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      Tt(o)
        ? (u = (s) => Eo(o)(s, i))
        : (u = rp({ effect: sC, actionTypeId: o, elementApi: r })),
        xo({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function aC(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === jt) {
      let { config: a } = t;
      a.widthUnit === ht && n(e, tt, ""), a.heightUnit === ht && n(e, rt, "");
    }
    i(e, Ht) && rp({ effect: tp, actionTypeId: o, elementApi: r })(e);
  }
  function sC(e, t, r) {
    let { setStyle: n } = r;
    tp(e, t, r), n(e, t, ""), t === gt && n(e, pn, "");
  }
  function np(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function uC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, l) => {
        if (n && l === 0) return;
        let { actionItems: y } = s,
          h = y[np(y)],
          { config: g, actionTypeId: m } = h;
        i.id === h.id && (u = a + o);
        let T = ep(m) === wo ? 0 : g.duration;
        a += g.delay + T;
      }),
      a > 0 ? Ir(u / a) : 0
    );
  }
  function cC({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, wn.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: l }) => l.some(a));
        }),
      (0, wn.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function lC(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function fC(e, t) {
    return e + wR + t;
  }
  function dC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function pC(e, t) {
    return To(e && e.sort(), t && t.sort());
  }
  function gC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + bo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + bo + r + bo + n;
  }
  var st,
    bn,
    _n,
    wn,
    Kd,
    lR,
    fR,
    dR,
    pR,
    gR,
    hR,
    vR,
    mR,
    ER,
    yR,
    In,
    Tr,
    br,
    tt,
    rt,
    jd,
    _R,
    IR,
    Ud,
    TR,
    Wd,
    bR,
    Tn,
    Ht,
    ht,
    wr,
    wR,
    bo,
    Yd,
    wo,
    Ao,
    Qd,
    Bt,
    zt,
    Kt,
    Ar,
    $d,
    Or,
    xr,
    jt,
    Yt,
    Qt,
    $t,
    An,
    AR,
    Zd,
    Oo,
    Jd,
    yn,
    xR,
    RR,
    PR,
    Hd,
    MR,
    FR,
    kR,
    XR,
    GR,
    So,
    HR,
    BR,
    zR,
    KR,
    ZR,
    JR,
    eC,
    rp,
    op = me(() => {
      "use strict";
      (st = le(_d())), (bn = le(Dd())), (_n = le(kd())), (wn = le(Dt()));
      Me();
      Gd();
      to();
      Kd = le(co());
      yo();
      gn();
      ({
        BACKGROUND: lR,
        TRANSFORM: fR,
        TRANSLATE_3D: dR,
        SCALE_3D: pR,
        ROTATE_X: gR,
        ROTATE_Y: hR,
        ROTATE_Z: vR,
        SKEW: mR,
        PRESERVE_3D: ER,
        FLEX: yR,
        OPACITY: In,
        FILTER: Tr,
        FONT_VARIATION_SETTINGS: br,
        WIDTH: tt,
        HEIGHT: rt,
        BACKGROUND_COLOR: jd,
        BORDER_COLOR: _R,
        COLOR: IR,
        CHILDREN: Ud,
        IMMEDIATE_CHILDREN: TR,
        SIBLINGS: Wd,
        PARENT: bR,
        DISPLAY: Tn,
        WILL_CHANGE: Ht,
        AUTO: ht,
        COMMA_DELIMITER: wr,
        COLON_DELIMITER: wR,
        BAR_DELIMITER: bo,
        RENDER_TRANSFORM: Yd,
        RENDER_GENERAL: wo,
        RENDER_STYLE: Ao,
        RENDER_PLUGIN: Qd,
      } = Ae),
        ({
          TRANSFORM_MOVE: Bt,
          TRANSFORM_SCALE: zt,
          TRANSFORM_ROTATE: Kt,
          TRANSFORM_SKEW: Ar,
          STYLE_OPACITY: $d,
          STYLE_FILTER: Or,
          STYLE_FONT_VARIATION: xr,
          STYLE_SIZE: jt,
          STYLE_BACKGROUND_COLOR: Yt,
          STYLE_BORDER: Qt,
          STYLE_TEXT_COLOR: $t,
          GENERAL_DISPLAY: An,
          OBJECT_VALUE: AR,
        } = De),
        (Zd = (e) => e.trim()),
        (Oo = Object.freeze({ [Yt]: jd, [Qt]: _R, [$t]: IR })),
        (Jd = Object.freeze({
          [gt]: fR,
          [jd]: lR,
          [In]: In,
          [Tr]: Tr,
          [tt]: tt,
          [rt]: rt,
          [br]: br,
        })),
        (yn = new Map());
      xR = 1;
      RR = 1;
      PR = (e, t) => e === t;
      (Hd = /px/),
        (MR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = HR[n.type]), r),
            e || {}
          )),
        (FR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = BR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (kR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (XR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (GR = (e, t, r) => {
          if (Tt(e)) return go(e)(r, t);
          switch (e) {
            case Or: {
              let n = (0, _n.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case xr: {
              let n = (0, _n.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (So = {
        [Bt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [zt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Kt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ar]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (HR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (BR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (zR = (e, t) => {
          let r = (0, _n.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (KR = Object.keys(So));
      (ZR = "\\(([^)]+)\\)"), (JR = /^rgb/), (eC = RegExp(`rgba?${ZR}`));
      rp =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Bt:
            case zt:
            case Kt:
            case Ar:
              e(n, gt, r);
              break;
            case Or:
              e(n, Tr, r);
              break;
            case xr:
              e(n, br, r);
              break;
            case $d:
              e(n, In, r);
              break;
            case jt:
              e(n, tt, r), e(n, rt, r);
              break;
            case Yt:
            case Qt:
            case $t:
              e(n, Oo[t], r);
              break;
            case An:
              e(n, Tn, r);
              break;
          }
        };
    });
  var At = d((Ro) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    function hC(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    hC(Ro, {
      IX2BrowserSupport: function () {
        return vC;
      },
      IX2EasingUtils: function () {
        return EC;
      },
      IX2Easings: function () {
        return mC;
      },
      IX2ElementsReducer: function () {
        return yC;
      },
      IX2VanillaPlugins: function () {
        return _C;
      },
      IX2VanillaUtils: function () {
        return IC;
      },
    });
    var vC = Zt((gn(), Qe(Zf))),
      mC = Zt((eo(), Qe(_r))),
      EC = Zt((to(), Qe(od))),
      yC = Zt((cd(), Qe(ud))),
      _C = Zt((yo(), Qe(Ed))),
      IC = Zt((op(), Qe(ip)));
    function ap(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ap = function (n) {
        return n ? r : t;
      })(e);
    }
    function Zt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = ap(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var xn,
    ut,
    TC,
    bC,
    wC,
    AC,
    OC,
    xC,
    On,
    sp,
    SC,
    RC,
    Co,
    CC,
    LC,
    PC,
    NC,
    up,
    cp = me(() => {
      "use strict";
      Me();
      (xn = le(At())),
        (ut = le(Dt())),
        ({
          IX2_RAW_DATA_IMPORTED: TC,
          IX2_SESSION_STOPPED: bC,
          IX2_INSTANCE_ADDED: wC,
          IX2_INSTANCE_STARTED: AC,
          IX2_INSTANCE_REMOVED: OC,
          IX2_ANIMATION_FRAME_CHANGED: xC,
        } = Te),
        ({
          optimizeFloat: On,
          applyEasing: sp,
          createBezierEasing: SC,
        } = xn.IX2EasingUtils),
        ({ RENDER_GENERAL: RC } = Ae),
        ({
          getItemConfigByKey: Co,
          getRenderType: CC,
          getStyleProp: LC,
        } = xn.IX2VanillaUtils),
        (PC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: l,
              skipMotion: y,
              skipToValue: h,
            } = e,
            { parameters: g } = t.payload,
            m = Math.max(1 - a, 0.01),
            T = g[n];
          T == null && ((m = 1), (T = u));
          let w = Math.max(T, 0) || 0,
            R = On(w - r),
            A = y ? h : On(r + R * m),
            N = A * 100;
          if (A === r && e.current) return e;
          let C, M, k, F;
          for (let j = 0, { length: $ } = i; j < $; j++) {
            let { keyframe: ee, actionItems: V } = i[j];
            if ((j === 0 && (C = V[0]), N >= ee)) {
              C = V[0];
              let S = i[j + 1],
                E = S && N !== ee;
              (M = E ? S.actionItems[0] : null),
                E && ((k = ee / 100), (F = (S.keyframe - ee) / 100));
            }
          }
          let K = {};
          if (C && !M)
            for (let j = 0, { length: $ } = o; j < $; j++) {
              let ee = o[j];
              K[ee] = Co(s, ee, C.config);
            }
          else if (C && M && k !== void 0 && F !== void 0) {
            let j = (A - k) / F,
              $ = C.config.easing,
              ee = sp($, j, l);
            for (let V = 0, { length: S } = o; V < S; V++) {
              let E = o[V],
                D = Co(s, E, C.config),
                J = (Co(s, E, M.config) - D) * ee + D;
              K[E] = J;
            }
          }
          return (0, ut.merge)(e, { position: A, current: K });
        }),
        (NC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: l,
              destinationKeys: y,
              pluginDuration: h,
              instanceDelay: g,
              customEasingFn: m,
              skipMotion: T,
            } = e,
            w = s.config.easing,
            { duration: R, delay: A } = s.config;
          h != null && (R = h),
            (A = g ?? A),
            a === RC ? (R = 0) : (o || T) && (R = A = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let C = N - (i + A);
            if (u) {
              let j = N - i,
                $ = R + A,
                ee = On(Math.min(Math.max(0, j / $), 1));
              e = (0, ut.set)(e, "verboseTimeElapsed", $ * ee);
            }
            if (C < 0) return e;
            let M = On(Math.min(Math.max(0, C / R), 1)),
              k = sp(w, M, m),
              F = {},
              K = null;
            return (
              y.length &&
                (K = y.reduce((j, $) => {
                  let ee = l[$],
                    V = parseFloat(n[$]) || 0,
                    E = (parseFloat(ee) - V) * k + V;
                  return (j[$] = E), j;
                }, {})),
              (F.current = K),
              (F.position = M),
              M === 1 && ((F.active = !1), (F.complete = !0)),
              (0, ut.merge)(e, F)
            );
          }
          return e;
        }),
        (up = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case TC:
              return t.payload.ixInstances || Object.freeze({});
            case bC:
              return Object.freeze({});
            case wC: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: l,
                  isCarrier: y,
                  origin: h,
                  destination: g,
                  immediate: m,
                  verbose: T,
                  continuous: w,
                  parameterId: R,
                  actionGroups: A,
                  smoothing: N,
                  restingValue: C,
                  pluginInstance: M,
                  pluginDuration: k,
                  instanceDelay: F,
                  skipMotion: K,
                  skipToValue: j,
                } = t.payload,
                { actionTypeId: $ } = i,
                ee = CC($),
                V = LC(ee, $),
                S = Object.keys(g).filter(
                  (D) => g[D] != null && typeof g[D] != "string"
                ),
                { easing: E } = i.config;
              return (0, ut.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: h,
                destination: g,
                destinationKeys: S,
                immediate: m,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: l,
                renderType: ee,
                isCarrier: y,
                styleProp: V,
                continuous: w,
                parameterId: R,
                actionGroups: A,
                smoothing: N,
                restingValue: C,
                pluginInstance: M,
                pluginDuration: k,
                instanceDelay: F,
                skipMotion: K,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(E) && E.length === 4 ? SC(E) : void 0,
              });
            }
            case AC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ut.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case OC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case xC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? PC : NC;
                r = (0, ut.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var DC,
    MC,
    FC,
    lp,
    fp = me(() => {
      "use strict";
      Me();
      ({
        IX2_RAW_DATA_IMPORTED: DC,
        IX2_SESSION_STOPPED: MC,
        IX2_PARAMETER_CHANGED: FC,
      } = Te),
        (lp = (e = {}, t) => {
          switch (t.type) {
            case DC:
              return t.payload.ixParameters || {};
            case MC:
              return {};
            case FC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var gp = {};
  Ne(gp, { default: () => kC });
  var dp,
    pp,
    qC,
    kC,
    hp = me(() => {
      "use strict";
      dp = le(yi());
      Ts();
      Vs();
      zs();
      pp = le(At());
      cp();
      fp();
      ({ ixElements: qC } = pp.IX2ElementsReducer),
        (kC = (0, dp.combineReducers)({
          ixData: Is,
          ixRequest: Ws,
          ixSession: Bs,
          ixElements: qC,
          ixInstances: up,
          ixParameters: lp,
        }));
    });
  var mp = d((Ik, vp) => {
    var XC = ft(),
      GC = be(),
      UC = ot(),
      WC = "[object String]";
    function VC(e) {
      return typeof e == "string" || (!GC(e) && UC(e) && XC(e) == WC);
    }
    vp.exports = VC;
  });
  var yp = d((Tk, Ep) => {
    var HC = Ki(),
      BC = HC("length");
    Ep.exports = BC;
  });
  var Ip = d((bk, _p) => {
    var zC = "\\ud800-\\udfff",
      KC = "\\u0300-\\u036f",
      jC = "\\ufe20-\\ufe2f",
      YC = "\\u20d0-\\u20ff",
      QC = KC + jC + YC,
      $C = "\\ufe0e\\ufe0f",
      ZC = "\\u200d",
      JC = RegExp("[" + ZC + zC + QC + $C + "]");
    function eL(e) {
      return JC.test(e);
    }
    _p.exports = eL;
  });
  var Cp = d((wk, Rp) => {
    var bp = "\\ud800-\\udfff",
      tL = "\\u0300-\\u036f",
      rL = "\\ufe20-\\ufe2f",
      nL = "\\u20d0-\\u20ff",
      iL = tL + rL + nL,
      oL = "\\ufe0e\\ufe0f",
      aL = "[" + bp + "]",
      Lo = "[" + iL + "]",
      Po = "\\ud83c[\\udffb-\\udfff]",
      sL = "(?:" + Lo + "|" + Po + ")",
      wp = "[^" + bp + "]",
      Ap = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Op = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      uL = "\\u200d",
      xp = sL + "?",
      Sp = "[" + oL + "]?",
      cL = "(?:" + uL + "(?:" + [wp, Ap, Op].join("|") + ")" + Sp + xp + ")*",
      lL = Sp + xp + cL,
      fL = "(?:" + [wp + Lo + "?", Lo, Ap, Op, aL].join("|") + ")",
      Tp = RegExp(Po + "(?=" + Po + ")|" + fL + lL, "g");
    function dL(e) {
      for (var t = (Tp.lastIndex = 0); Tp.test(e); ) ++t;
      return t;
    }
    Rp.exports = dL;
  });
  var Pp = d((Ak, Lp) => {
    var pL = yp(),
      gL = Ip(),
      hL = Cp();
    function vL(e) {
      return gL(e) ? hL(e) : pL(e);
    }
    Lp.exports = vL;
  });
  var Dp = d((Ok, Np) => {
    var mL = nn(),
      EL = on(),
      yL = _t(),
      _L = mp(),
      IL = Pp(),
      TL = "[object Map]",
      bL = "[object Set]";
    function wL(e) {
      if (e == null) return 0;
      if (yL(e)) return _L(e) ? IL(e) : e.length;
      var t = EL(e);
      return t == TL || t == bL ? e.size : mL(e).length;
    }
    Np.exports = wL;
  });
  var Fp = d((xk, Mp) => {
    var AL = "Expected a function";
    function OL(e) {
      if (typeof e != "function") throw new TypeError(AL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Mp.exports = OL;
  });
  var No = d((Sk, qp) => {
    var xL = dt(),
      SL = (function () {
        try {
          var e = xL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    qp.exports = SL;
  });
  var Do = d((Rk, Xp) => {
    var kp = No();
    function RL(e, t, r) {
      t == "__proto__" && kp
        ? kp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Xp.exports = RL;
  });
  var Up = d((Ck, Gp) => {
    var CL = Do(),
      LL = Kr(),
      PL = Object.prototype,
      NL = PL.hasOwnProperty;
    function DL(e, t, r) {
      var n = e[t];
      (!(NL.call(e, t) && LL(n, r)) || (r === void 0 && !(t in e))) &&
        CL(e, t, r);
    }
    Gp.exports = DL;
  });
  var Hp = d((Lk, Vp) => {
    var ML = Up(),
      FL = mr(),
      qL = Jr(),
      Wp = et(),
      kL = Wt();
    function XL(e, t, r, n) {
      if (!Wp(e)) return e;
      t = FL(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = kL(t[i]),
          l = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var y = u[s];
          (l = n ? n(y, s, u) : void 0),
            l === void 0 && (l = Wp(y) ? y : qL(t[i + 1]) ? [] : {});
        }
        ML(u, s, l), (u = u[s]);
      }
      return e;
    }
    Vp.exports = XL;
  });
  var zp = d((Pk, Bp) => {
    var GL = un(),
      UL = Hp(),
      WL = mr();
    function VL(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = GL(e, a);
        r(u, a) && UL(o, WL(a, e), u);
      }
      return o;
    }
    Bp.exports = VL;
  });
  var jp = d((Nk, Kp) => {
    var HL = $r(),
      BL = ai(),
      zL = Pi(),
      KL = Li(),
      jL = Object.getOwnPropertySymbols,
      YL = jL
        ? function (e) {
            for (var t = []; e; ) HL(t, zL(e)), (e = BL(e));
            return t;
          }
        : KL;
    Kp.exports = YL;
  });
  var Qp = d((Dk, Yp) => {
    function QL(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Yp.exports = QL;
  });
  var Zp = d((Mk, $p) => {
    var $L = et(),
      ZL = rn(),
      JL = Qp(),
      eP = Object.prototype,
      tP = eP.hasOwnProperty;
    function rP(e) {
      if (!$L(e)) return JL(e);
      var t = ZL(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !tP.call(e, n))) || r.push(n);
      return r;
    }
    $p.exports = rP;
  });
  var eg = d((Fk, Jp) => {
    var nP = Di(),
      iP = Zp(),
      oP = _t();
    function aP(e) {
      return oP(e) ? nP(e, !0) : iP(e);
    }
    Jp.exports = aP;
  });
  var rg = d((qk, tg) => {
    var sP = Ci(),
      uP = jp(),
      cP = eg();
    function lP(e) {
      return sP(e, cP, uP);
    }
    tg.exports = lP;
  });
  var ig = d((kk, ng) => {
    var fP = zi(),
      dP = pt(),
      pP = zp(),
      gP = rg();
    function hP(e, t) {
      if (e == null) return {};
      var r = fP(gP(e), function (n) {
        return [n];
      });
      return (
        (t = dP(t)),
        pP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ng.exports = hP;
  });
  var ag = d((Xk, og) => {
    var vP = pt(),
      mP = Fp(),
      EP = ig();
    function yP(e, t) {
      return EP(e, mP(vP(t)));
    }
    og.exports = yP;
  });
  var ug = d((Gk, sg) => {
    var _P = nn(),
      IP = on(),
      TP = fr(),
      bP = be(),
      wP = _t(),
      AP = Zr(),
      OP = rn(),
      xP = tn(),
      SP = "[object Map]",
      RP = "[object Set]",
      CP = Object.prototype,
      LP = CP.hasOwnProperty;
    function PP(e) {
      if (e == null) return !0;
      if (
        wP(e) &&
        (bP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          AP(e) ||
          xP(e) ||
          TP(e))
      )
        return !e.length;
      var t = IP(e);
      if (t == SP || t == RP) return !e.size;
      if (OP(e)) return !_P(e).length;
      for (var r in e) if (LP.call(e, r)) return !1;
      return !0;
    }
    sg.exports = PP;
  });
  var lg = d((Uk, cg) => {
    var NP = Do(),
      DP = _o(),
      MP = pt();
    function FP(e, t) {
      var r = {};
      return (
        (t = MP(t, 3)),
        DP(e, function (n, i, o) {
          NP(r, i, t(n, i, o));
        }),
        r
      );
    }
    cg.exports = FP;
  });
  var dg = d((Wk, fg) => {
    function qP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    fg.exports = qP;
  });
  var gg = d((Vk, pg) => {
    var kP = ln();
    function XP(e) {
      return typeof e == "function" ? e : kP;
    }
    pg.exports = XP;
  });
  var vg = d((Hk, hg) => {
    var GP = dg(),
      UP = Io(),
      WP = gg(),
      VP = be();
    function HP(e, t) {
      var r = VP(e) ? GP : UP;
      return r(e, WP(t));
    }
    hg.exports = HP;
  });
  var Eg = d((Bk, mg) => {
    var BP = He(),
      zP = function () {
        return BP.Date.now();
      };
    mg.exports = zP;
  });
  var Ig = d((zk, _g) => {
    var KP = et(),
      Mo = Eg(),
      yg = fn(),
      jP = "Expected a function",
      YP = Math.max,
      QP = Math.min;
    function $P(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        l = 0,
        y = !1,
        h = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(jP);
      (t = yg(t) || 0),
        KP(r) &&
          ((y = !!r.leading),
          (h = "maxWait" in r),
          (o = h ? YP(yg(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function m(F) {
        var K = n,
          j = i;
        return (n = i = void 0), (l = F), (a = e.apply(j, K)), a;
      }
      function T(F) {
        return (l = F), (u = setTimeout(A, t)), y ? m(F) : a;
      }
      function w(F) {
        var K = F - s,
          j = F - l,
          $ = t - K;
        return h ? QP($, o - j) : $;
      }
      function R(F) {
        var K = F - s,
          j = F - l;
        return s === void 0 || K >= t || K < 0 || (h && j >= o);
      }
      function A() {
        var F = Mo();
        if (R(F)) return N(F);
        u = setTimeout(A, w(F));
      }
      function N(F) {
        return (u = void 0), g && n ? m(F) : ((n = i = void 0), a);
      }
      function C() {
        u !== void 0 && clearTimeout(u), (l = 0), (n = s = i = u = void 0);
      }
      function M() {
        return u === void 0 ? a : N(Mo());
      }
      function k() {
        var F = Mo(),
          K = R(F);
        if (((n = arguments), (i = this), (s = F), K)) {
          if (u === void 0) return T(s);
          if (h) return clearTimeout(u), (u = setTimeout(A, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(A, t)), a;
      }
      return (k.cancel = C), (k.flush = M), k;
    }
    _g.exports = $P;
  });
  var bg = d((Kk, Tg) => {
    var ZP = Ig(),
      JP = et(),
      eN = "Expected a function";
    function tN(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(eN);
      return (
        JP(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        ZP(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Tg.exports = tN;
  });
  var Ag = {};
  Ne(Ag, {
    actionListPlaybackChanged: () => er,
    animationFrameChanged: () => Rn,
    clearRequested: () => ON,
    elementStateChanged: () => Vo,
    eventListenerAdded: () => Sn,
    eventStateChanged: () => Go,
    instanceAdded: () => Uo,
    instanceRemoved: () => Wo,
    instanceStarted: () => Cn,
    mediaQueriesDefined: () => Bo,
    parameterChanged: () => Jt,
    playbackRequested: () => wN,
    previewRequested: () => bN,
    rawDataImported: () => Fo,
    sessionInitialized: () => qo,
    sessionStarted: () => ko,
    sessionStopped: () => Xo,
    stopRequested: () => AN,
    testFrameRendered: () => xN,
    viewportWidthChanged: () => Ho,
  });
  var wg,
    rN,
    nN,
    iN,
    oN,
    aN,
    sN,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    gN,
    hN,
    vN,
    mN,
    EN,
    yN,
    _N,
    IN,
    TN,
    Fo,
    qo,
    ko,
    Xo,
    bN,
    wN,
    AN,
    ON,
    Sn,
    xN,
    Go,
    Rn,
    Jt,
    Uo,
    Cn,
    Wo,
    Vo,
    er,
    Ho,
    Bo,
    Ln = me(() => {
      "use strict";
      Me();
      (wg = le(At())),
        ({
          IX2_RAW_DATA_IMPORTED: rN,
          IX2_SESSION_INITIALIZED: nN,
          IX2_SESSION_STARTED: iN,
          IX2_SESSION_STOPPED: oN,
          IX2_PREVIEW_REQUESTED: aN,
          IX2_PLAYBACK_REQUESTED: sN,
          IX2_STOP_REQUESTED: uN,
          IX2_CLEAR_REQUESTED: cN,
          IX2_EVENT_LISTENER_ADDED: lN,
          IX2_TEST_FRAME_RENDERED: fN,
          IX2_EVENT_STATE_CHANGED: dN,
          IX2_ANIMATION_FRAME_CHANGED: pN,
          IX2_PARAMETER_CHANGED: gN,
          IX2_INSTANCE_ADDED: hN,
          IX2_INSTANCE_STARTED: vN,
          IX2_INSTANCE_REMOVED: mN,
          IX2_ELEMENT_STATE_CHANGED: EN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: yN,
          IX2_VIEWPORT_WIDTH_CHANGED: _N,
          IX2_MEDIA_QUERIES_DEFINED: IN,
        } = Te),
        ({ reifyState: TN } = wg.IX2VanillaUtils),
        (Fo = (e) => ({ type: rN, payload: { ...TN(e) } })),
        (qo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: nN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ko = () => ({ type: iN })),
        (Xo = () => ({ type: oN })),
        (bN = ({ rawData: e, defer: t }) => ({
          type: aN,
          payload: { defer: t, rawData: e },
        })),
        (wN = ({
          actionTypeId: e = De.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: sN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (AN = (e) => ({ type: uN, payload: { actionListId: e } })),
        (ON = () => ({ type: cN })),
        (Sn = (e, t) => ({
          type: lN,
          payload: { target: e, listenerParams: t },
        })),
        (xN = (e = 1) => ({ type: fN, payload: { step: e } })),
        (Go = (e, t) => ({ type: dN, payload: { stateKey: e, newState: t } })),
        (Rn = (e, t) => ({ type: pN, payload: { now: e, parameters: t } })),
        (Jt = (e, t) => ({ type: gN, payload: { key: e, value: t } })),
        (Uo = (e) => ({ type: hN, payload: { ...e } })),
        (Cn = (e, t) => ({ type: vN, payload: { instanceId: e, time: t } })),
        (Wo = (e) => ({ type: mN, payload: { instanceId: e } })),
        (Vo = (e, t, r, n) => ({
          type: EN,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (er = ({ actionListId: e, isPlaying: t }) => ({
          type: yN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Ho = ({ width: e, mediaQueries: t }) => ({
          type: _N,
          payload: { width: e, mediaQueries: t },
        })),
        (Bo = () => ({ type: IN }));
    });
  var Ce = {};
  Ne(Ce, {
    elementContains: () => jo,
    getChildElements: () => qN,
    getClosestElement: () => Sr,
    getProperty: () => PN,
    getQuerySelector: () => Ko,
    getRefType: () => Yo,
    getSiblingElements: () => kN,
    getStyle: () => LN,
    getValidDocument: () => DN,
    isSiblingNode: () => FN,
    matchSelector: () => NN,
    queryDocument: () => MN,
    setStyle: () => CN,
  });
  function CN(e, t, r) {
    e.style[t] = r;
  }
  function LN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function PN(e, t) {
    return e[t];
  }
  function NN(e) {
    return (t) => t[zo](e);
  }
  function Ko({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Og) !== -1) {
        let n = e.split(Og),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Sg)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function DN(e) {
    return e == null || e === document.documentElement.getAttribute(Sg)
      ? document
      : null;
  }
  function MN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function jo(e, t) {
    return e.contains(t);
  }
  function FN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function qN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function kN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Yo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? SN
        : RN
      : null;
  }
  var xg,
    zo,
    Og,
    SN,
    RN,
    Sg,
    Sr,
    Rg = me(() => {
      "use strict";
      xg = le(At());
      Me();
      ({ ELEMENT_MATCHES: zo } = xg.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Og,
          HTML_ELEMENT: SN,
          PLAIN_OBJECT: RN,
          WF_PAGE: Sg,
        } = Ae);
      Sr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[zo] && r[zo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Qo = d((Qk, Lg) => {
    var XN = et(),
      Cg = Object.create,
      GN = (function () {
        function e() {}
        return function (t) {
          if (!XN(t)) return {};
          if (Cg) return Cg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Lg.exports = GN;
  });
  var Pn = d(($k, Pg) => {
    function UN() {}
    Pg.exports = UN;
  });
  var Dn = d((Zk, Ng) => {
    var WN = Qo(),
      VN = Pn();
    function Nn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Nn.prototype = WN(VN.prototype);
    Nn.prototype.constructor = Nn;
    Ng.exports = Nn;
  });
  var qg = d((Jk, Fg) => {
    var Dg = Lt(),
      HN = fr(),
      BN = be(),
      Mg = Dg ? Dg.isConcatSpreadable : void 0;
    function zN(e) {
      return BN(e) || HN(e) || !!(Mg && e && e[Mg]);
    }
    Fg.exports = zN;
  });
  var Gg = d((eX, Xg) => {
    var KN = $r(),
      jN = qg();
    function kg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = jN), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? kg(u, t - 1, r, n, i)
            : KN(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    Xg.exports = kg;
  });
  var Wg = d((tX, Ug) => {
    var YN = Gg();
    function QN(e) {
      var t = e == null ? 0 : e.length;
      return t ? YN(e, 1) : [];
    }
    Ug.exports = QN;
  });
  var Hg = d((rX, Vg) => {
    function $N(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Vg.exports = $N;
  });
  var Kg = d((nX, zg) => {
    var ZN = Hg(),
      Bg = Math.max;
    function JN(e, t, r) {
      return (
        (t = Bg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Bg(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), ZN(e, this, u);
        }
      );
    }
    zg.exports = JN;
  });
  var Yg = d((iX, jg) => {
    function eD(e) {
      return function () {
        return e;
      };
    }
    jg.exports = eD;
  });
  var Zg = d((oX, $g) => {
    var tD = Yg(),
      Qg = No(),
      rD = ln(),
      nD = Qg
        ? function (e, t) {
            return Qg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: tD(t),
              writable: !0,
            });
          }
        : rD;
    $g.exports = nD;
  });
  var eh = d((aX, Jg) => {
    var iD = 800,
      oD = 16,
      aD = Date.now;
    function sD(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = aD(),
          i = oD - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= iD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Jg.exports = sD;
  });
  var rh = d((sX, th) => {
    var uD = Zg(),
      cD = eh(),
      lD = cD(uD);
    th.exports = lD;
  });
  var ih = d((uX, nh) => {
    var fD = Wg(),
      dD = Kg(),
      pD = rh();
    function gD(e) {
      return pD(dD(e, void 0, fD), e + "");
    }
    nh.exports = gD;
  });
  var sh = d((cX, ah) => {
    var oh = Mi(),
      hD = oh && new oh();
    ah.exports = hD;
  });
  var ch = d((lX, uh) => {
    function vD() {}
    uh.exports = vD;
  });
  var $o = d((fX, fh) => {
    var lh = sh(),
      mD = ch(),
      ED = lh
        ? function (e) {
            return lh.get(e);
          }
        : mD;
    fh.exports = ED;
  });
  var ph = d((dX, dh) => {
    var yD = {};
    dh.exports = yD;
  });
  var Zo = d((pX, hh) => {
    var gh = ph(),
      _D = Object.prototype,
      ID = _D.hasOwnProperty;
    function TD(e) {
      for (
        var t = e.name + "", r = gh[t], n = ID.call(gh, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    hh.exports = TD;
  });
  var Fn = d((gX, vh) => {
    var bD = Qo(),
      wD = Pn(),
      AD = 4294967295;
    function Mn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = AD),
        (this.__views__ = []);
    }
    Mn.prototype = bD(wD.prototype);
    Mn.prototype.constructor = Mn;
    vh.exports = Mn;
  });
  var Eh = d((hX, mh) => {
    function OD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    mh.exports = OD;
  });
  var _h = d((vX, yh) => {
    var xD = Fn(),
      SD = Dn(),
      RD = Eh();
    function CD(e) {
      if (e instanceof xD) return e.clone();
      var t = new SD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = RD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    yh.exports = CD;
  });
  var bh = d((mX, Th) => {
    var LD = Fn(),
      Ih = Dn(),
      PD = Pn(),
      ND = be(),
      DD = ot(),
      MD = _h(),
      FD = Object.prototype,
      qD = FD.hasOwnProperty;
    function qn(e) {
      if (DD(e) && !ND(e) && !(e instanceof LD)) {
        if (e instanceof Ih) return e;
        if (qD.call(e, "__wrapped__")) return MD(e);
      }
      return new Ih(e);
    }
    qn.prototype = PD.prototype;
    qn.prototype.constructor = qn;
    Th.exports = qn;
  });
  var Ah = d((EX, wh) => {
    var kD = Fn(),
      XD = $o(),
      GD = Zo(),
      UD = bh();
    function WD(e) {
      var t = GD(e),
        r = UD[t];
      if (typeof r != "function" || !(t in kD.prototype)) return !1;
      if (e === r) return !0;
      var n = XD(r);
      return !!n && e === n[0];
    }
    wh.exports = WD;
  });
  var Rh = d((yX, Sh) => {
    var Oh = Dn(),
      VD = ih(),
      HD = $o(),
      Jo = Zo(),
      BD = be(),
      xh = Ah(),
      zD = "Expected a function",
      KD = 8,
      jD = 32,
      YD = 128,
      QD = 256;
    function $D(e) {
      return VD(function (t) {
        var r = t.length,
          n = r,
          i = Oh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(zD);
          if (i && !a && Jo(o) == "wrapper") var a = new Oh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = Jo(o),
            s = u == "wrapper" ? HD(o) : void 0;
          s &&
          xh(s[0]) &&
          s[1] == (YD | KD | jD | QD) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[Jo(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && xh(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            y = l[0];
          if (a && l.length == 1 && BD(y)) return a.plant(y).value();
          for (var h = 0, g = r ? t[h].apply(this, l) : y; ++h < r; )
            g = t[h].call(this, g);
          return g;
        };
      });
    }
    Sh.exports = $D;
  });
  var Lh = d((_X, Ch) => {
    var ZD = Rh(),
      JD = ZD();
    Ch.exports = JD;
  });
  var Nh = d((IX, Ph) => {
    function eM(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Ph.exports = eM;
  });
  var Mh = d((TX, Dh) => {
    var tM = Nh(),
      ea = fn();
    function rM(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ea(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ea(t)), (t = t === t ? t : 0)),
        tM(ea(e), t, r)
      );
    }
    Dh.exports = rM;
  });
  var Hh,
    Bh,
    zh,
    Kh,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    dM,
    pM,
    gM,
    hM,
    vM,
    mM,
    jh,
    Yh,
    EM,
    yM,
    _M,
    Qh,
    IM,
    TM,
    $h,
    bM,
    ta,
    Zh,
    Fh,
    qh,
    Jh,
    Cr,
    wM,
    nt,
    ev,
    AM,
    qe,
    Ke,
    Lr,
    tv,
    ra,
    kh,
    na,
    OM,
    Rr,
    xM,
    SM,
    RM,
    rv,
    Xh,
    CM,
    Gh,
    LM,
    PM,
    NM,
    Uh,
    kn,
    Xn,
    Wh,
    Vh,
    nv,
    iv = me(() => {
      "use strict";
      (Hh = le(Lh())), (Bh = le(cn())), (zh = le(Mh()));
      Me();
      ia();
      Ln();
      (Kh = le(At())),
        ({
          MOUSE_CLICK: nM,
          MOUSE_SECOND_CLICK: iM,
          MOUSE_DOWN: oM,
          MOUSE_UP: aM,
          MOUSE_OVER: sM,
          MOUSE_OUT: uM,
          DROPDOWN_CLOSE: cM,
          DROPDOWN_OPEN: lM,
          SLIDER_ACTIVE: fM,
          SLIDER_INACTIVE: dM,
          TAB_ACTIVE: pM,
          TAB_INACTIVE: gM,
          NAVBAR_CLOSE: hM,
          NAVBAR_OPEN: vM,
          MOUSE_MOVE: mM,
          PAGE_SCROLL_DOWN: jh,
          SCROLL_INTO_VIEW: Yh,
          SCROLL_OUT_OF_VIEW: EM,
          PAGE_SCROLL_UP: yM,
          SCROLLING_IN_VIEW: _M,
          PAGE_FINISH: Qh,
          ECOMMERCE_CART_CLOSE: IM,
          ECOMMERCE_CART_OPEN: TM,
          PAGE_START: $h,
          PAGE_SCROLL: bM,
        } = Be),
        (ta = "COMPONENT_ACTIVE"),
        (Zh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Fh } = Ae),
        ({ getNamespacedParameterId: qh } = Kh.IX2VanillaUtils),
        (Jh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Cr = Jh(({ element: e, nativeEvent: t }) => e === t.target)),
        (wM = Jh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, Hh.default)([Cr, wM])),
        (ev = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !OM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (AM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!ev(e, n);
        }),
        (qe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            l = ev(e, s);
          return (
            l &&
              tr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Fh + n.split(Fh)[1],
                actionListId: (0, Bh.default)(l, "action.config.actionListId"),
              }),
            tr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            Pr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Lr = { handler: Ke(nt, qe) }),
        (tv = { ...Lr, types: [ta, Zh].join(" ") }),
        (ra = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (kh = "mouseover mouseout"),
        (na = { types: ra }),
        (OM = { PAGE_START: $h, PAGE_FINISH: Qh }),
        (Rr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, zh.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (xM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (SM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (RM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Rr(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return xM(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (rv = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ta, Zh].indexOf(n) !== -1 ? n === ta : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Xh = (e) => (t, r) => {
          let n = { elementHovered: SM(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (CM = (e) => (t, r) => {
          let n = { ...r, elementVisible: RM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Rr(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: l } = a,
              y = l === "PX",
              h = i - o,
              g = Number((n / h).toFixed(2));
            if (r && r.percentTop === g) return r;
            let m = (y ? s : (o * (s || 0)) / 100) / h,
              T,
              w,
              R = 0;
            r &&
              ((T = g > r.percentTop),
              (w = r.scrollingDown !== T),
              (R = w ? g : r.anchorTop));
            let A = u === jh ? g >= R + m : g <= R - m,
              N = {
                ...r,
                percentTop: g,
                inBounds: A,
                anchorTop: R,
                scrollingDown: T,
              };
            return (r && A && (w || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (LM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (PM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (NM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Uh =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (kn = (e = !0) => ({
          ...tv,
          handler: Ke(
            e ? nt : Cr,
            rv((t, r) => (r.isActive ? Lr.handler(t, r) : r))
          ),
        })),
        (Xn = (e = !0) => ({
          ...tv,
          handler: Ke(
            e ? nt : Cr,
            rv((t, r) => (r.isActive ? r : Lr.handler(t, r)))
          ),
        })),
        (Wh = {
          ...na,
          handler: CM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Yh) === r
              ? (qe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Vh = 0.05),
        (nv = {
          [fM]: kn(),
          [dM]: Xn(),
          [lM]: kn(),
          [cM]: Xn(),
          [vM]: kn(!1),
          [hM]: Xn(!1),
          [pM]: kn(),
          [gM]: Xn(),
          [TM]: { types: "ecommerce-cart-open", handler: Ke(nt, qe) },
          [IM]: { types: "ecommerce-cart-close", handler: Ke(nt, qe) },
          [nM]: {
            types: "click",
            handler: Ke(
              nt,
              Uh((e, { clickCount: t }) => {
                AM(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [iM]: {
            types: "click",
            handler: Ke(
              nt,
              Uh((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [oM]: { ...Lr, types: "mousedown" },
          [aM]: { ...Lr, types: "mouseup" },
          [sM]: {
            types: kh,
            handler: Ke(
              nt,
              Xh((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [uM]: {
            types: kh,
            handler: Ke(
              nt,
              Xh((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [mM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: l,
                  restingState: y = 0,
                } = r,
                {
                  clientX: h = o.clientX,
                  clientY: g = o.clientY,
                  pageX: m = o.pageX,
                  pageY: T = o.pageY,
                } = n,
                w = u === "X_AXIS",
                R = n.type === "mouseout",
                A = y / 100,
                N = s,
                C = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  A = w
                    ? Math.min(h, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: k,
                    scrollWidth: F,
                    scrollHeight: K,
                  } = Rr();
                  A = w ? Math.min(M + m, F) / F : Math.min(k + T, K) / K;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  N = qh(i, s);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && nt({ element: t, nativeEvent: n }) !== !0) break;
                  let k = t.getBoundingClientRect(),
                    { left: F, top: K, width: j, height: $ } = k;
                  if (!M && !LM({ left: h, top: g }, k)) break;
                  (C = !0), (A = w ? (h - F) / j : (g - K) / $);
                  break;
                }
              }
              return (
                R && (A > 1 - Vh || A < Vh) && (A = Math.round(A)),
                (a !== Je.ELEMENT || C || C !== o.elementHovered) &&
                  ((A = l ? 1 - A : A), e.dispatch(Jt(N, A))),
                {
                  elementHovered: C,
                  clientX: h,
                  clientY: g,
                  pageX: m,
                  pageY: T,
                }
              );
            },
          },
          [bM]: {
            types: ra,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Rr(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(Jt(r, u));
            },
          },
          [_M]: {
            types: ra,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: l,
                } = Rr(),
                {
                  basedOn: y,
                  selectedAxis: h,
                  continuousParameterGroupId: g,
                  startsEntering: m,
                  startsExiting: T,
                  addEndOffset: w,
                  addStartOffset: R,
                  addOffsetValue: A = 0,
                  endOffsetValue: N = 0,
                } = r,
                C = h === "X_AXIS";
              if (y === Je.VIEWPORT) {
                let M = C ? o / u : a / s;
                return (
                  M !== i.scrollPercent && t.dispatch(Jt(g, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = qh(n, g),
                  k = e.getBoundingClientRect(),
                  F = (R ? A : 0) / 100,
                  K = (w ? N : 0) / 100;
                (F = m ? F : 1 - F), (K = T ? K : 1 - K);
                let j = k.top + Math.min(k.height * F, l),
                  ee = k.top + k.height * K - j,
                  V = Math.min(l + ee, s),
                  E = Math.min(Math.max(0, l - j), V) / V;
                return (
                  E !== i.scrollPercent && t.dispatch(Jt(M, E)),
                  { scrollPercent: E }
                );
              }
            },
          },
          [Yh]: Wh,
          [EM]: Wh,
          [jh]: {
            ...na,
            handler: Gh((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [yM]: {
            ...na,
            handler: Gh((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [Qh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Cr, PM(qe)),
          },
          [$h]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Cr, NM(qe)),
          },
        });
    });
  var Iv = {};
  Ne(Iv, {
    observeRequests: () => JM,
    startActionGroup: () => Pr,
    startEngine: () => Bn,
    stopActionGroup: () => tr,
    stopAllActionGroups: () => Ev,
    stopEngine: () => zn,
  });
  function JM(e) {
    Ot({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: rF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: nF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: iF }),
      Ot({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: oF });
  }
  function eF(e) {
    Ot({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        zn(e),
          gv({ store: e, elementApi: Ce }),
          Bn({ store: e, allowEvents: !0 }),
          hv();
      },
    });
  }
  function tF(e, t) {
    let r = Ot({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function rF({ rawData: e, defer: t }, r) {
    let n = () => {
      Bn({ store: r, rawData: e, allowEvents: !0 }), hv();
    };
    t ? setTimeout(n, 0) : n();
  }
  function hv() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function nF(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: l = !0,
      } = e,
      { rawData: y } = e;
    if (n && i && y && u) {
      let h = y.actionLists[n];
      h && (y = WM({ actionList: h, actionItemId: i, rawData: y }));
    }
    if (
      (Bn({ store: t, rawData: y, allowEvents: a, testManual: s }),
      (n && r === De.GENERAL_START_ACTION) || oa(r))
    ) {
      tr({ store: t, actionListId: n }),
        mv({ store: t, actionListId: n, eventId: o });
      let h = Pr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: l,
      });
      l && h && t.dispatch(er({ actionListId: n, isPlaying: !u }));
    }
  }
  function iF({ actionListId: e }, t) {
    e ? tr({ store: t, actionListId: e }) : Ev({ store: t }), zn(t);
  }
  function oF(e, t) {
    zn(t), gv({ store: t, elementApi: Ce });
  }
  function Bn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Fo(t)),
      i.active ||
        (e.dispatch(
          qo({
            hasBoundaryNodes: !!document.querySelector(Un),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (fF(e), aF(), e.getState().ixSession.hasDefinedMediaQueries && eF(e)),
        e.dispatch(ko()),
        sF(e, n));
  }
  function aF() {
    let { documentElement: e } = document;
    e.className.indexOf(ov) === -1 && (e.className += ` ${ov}`);
  }
  function sF(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Rn(n, o)), t ? tF(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function zn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(uF), zM(), e.dispatch(Xo());
    }
  }
  function uF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function cF({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: l, ixSession: y } = e.getState(),
      { events: h } = l,
      g = h[n],
      { eventTypeId: m } = g,
      T = {},
      w = {},
      R = [],
      { continuousActionGroups: A } = a,
      { id: N } = a;
    VM(m, i) && (N = HM(t, N));
    let C = y.hasBoundaryNodes && r ? Sr(r, Un) : null;
    A.forEach((M) => {
      let { keyframe: k, actionItems: F } = M;
      F.forEach((K) => {
        let { actionTypeId: j } = K,
          { target: $ } = K.config;
        if (!$) return;
        let ee = $.boundaryMode ? C : null,
          V = KM($) + aa + j;
        if (((w[V] = lF(w[V], k, K)), !T[V])) {
          T[V] = !0;
          let { config: S } = K;
          Wn({
            config: S,
            event: g,
            eventTarget: r,
            elementRoot: ee,
            elementApi: Ce,
          }).forEach((E) => {
            R.push({ element: E, key: V });
          });
        }
      });
    }),
      R.forEach(({ element: M, key: k }) => {
        let F = w[k],
          K = (0, ct.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: j } = K,
          $ = Hn(j) ? ua(j)(M, K) : null,
          ee = sa({ element: M, actionItem: K, elementApi: Ce }, $);
        ca({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: K,
          destination: ee,
          continuous: !0,
          parameterId: N,
          actionGroups: F,
          smoothing: u,
          restingValue: s,
          pluginInstance: $,
        });
      });
  }
  function lF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function fF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    vv(e),
      (0, rr.default)(r, (i, o) => {
        let a = nv[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        mF({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && pF(e);
  }
  function pF(e) {
    let t = () => {
      vv(e);
    };
    dF.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(Sn(window, [r, t]));
    }),
      t();
  }
  function vv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Ho({ width: n, mediaQueries: i }));
    }
  }
  function mF({ logic: e, store: t, events: r }) {
    EF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = gF(r, vF);
    if (!(0, uv.default)(u)) return;
    (0, rr.default)(u, (h, g) => {
      let m = r[g],
        { action: T, id: w, mediaQueries: R = o.mediaQueryKeys } = m,
        { actionListId: A } = T.config;
      jM(R, o.mediaQueryKeys) || t.dispatch(Bo()),
        T.actionTypeId === De.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((C) => {
            let { continuousParameterGroupId: M } = C,
              k = (0, ct.default)(a, `${A}.continuousParameterGroups`, []),
              F = (0, sv.default)(k, ({ id: $ }) => $ === M),
              K = (C.smoothing || 0) / 100,
              j = (C.restingState || 0) / 100;
            F &&
              h.forEach(($, ee) => {
                let V = w + aa + ee;
                cF({
                  store: t,
                  eventStateKey: V,
                  eventTarget: $,
                  eventId: w,
                  eventConfig: C,
                  actionListId: A,
                  parameterGroup: F,
                  smoothing: K,
                  restingValue: j,
                });
              });
          }),
        (T.actionTypeId === De.GENERAL_START_ACTION || oa(T.actionTypeId)) &&
          mv({ store: t, actionListId: A, eventId: w });
    });
    let s = (h) => {
        let { ixSession: g } = t.getState();
        hF(u, (m, T, w) => {
          let R = r[T],
            A = g.eventState[w],
            { action: N, mediaQueries: C = o.mediaQueryKeys } = R;
          if (!Vn(C, g.mediaQueryKey)) return;
          let M = (k = {}) => {
            let F = i(
              {
                store: t,
                element: m,
                event: R,
                eventConfig: k,
                nativeEvent: h,
                eventStateKey: w,
              },
              A
            );
            YM(F, A) || t.dispatch(Go(w, F));
          };
          N.actionTypeId === De.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(M)
            : M();
        });
      },
      l = (0, dv.default)(s, ZM),
      y = ({ target: h = document, types: g, throttle: m }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((T) => {
            let w = m ? l : s;
            h.addEventListener(T, w), t.dispatch(Sn(h, [T, w]));
          });
      };
    Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
  }
  function EF(e) {
    if (!$M) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Ko(o);
      t[a] ||
        ((i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function mv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let l = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
        y = (0, ct.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Vn(y, i.mediaQueryKey)) return;
      l.forEach((h) => {
        let { config: g, actionTypeId: m } = h,
          T =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : g,
          w = Wn({ config: T, event: u, elementApi: Ce }),
          R = Hn(m);
        w.forEach((A) => {
          let N = R ? ua(m)(A, h) : null;
          ca({
            destination: sa({ element: A, actionItem: h, elementApi: Ce }, N),
            immediate: !0,
            store: e,
            element: A,
            eventId: r,
            actionItem: h,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function Ev({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, rr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        la(r, e), i && e.dispatch(er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function tr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? Sr(r, Un) : null;
    (0, rr.default)(o, (s) => {
      let l = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
        y = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && y) {
        if (u && l && !jo(u, s.element)) return;
        la(s, e),
          s.verbose && e.dispatch(er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Pr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: l } = e.getState(),
      { events: y } = s,
      h = y[t] || {},
      { mediaQueries: g = s.mediaQueryKeys } = h,
      m = (0, ct.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: w } = m;
    if (!T || !T.length) return !1;
    o >= T.length && (0, ct.default)(h, "config.loop") && (o = 0),
      o === 0 && w && o++;
    let A =
        (o === 0 || (o === 1 && w)) && oa(h.action?.actionTypeId)
          ? h.config.delay
          : void 0,
      N = (0, ct.default)(T, [o, "actionItems"], []);
    if (!N.length || !Vn(g, l.mediaQueryKey)) return !1;
    let C = l.hasBoundaryNodes && r ? Sr(r, Un) : null,
      M = XM(N),
      k = !1;
    return (
      N.forEach((F, K) => {
        let { config: j, actionTypeId: $ } = F,
          ee = Hn($),
          { target: V } = j;
        if (!V) return;
        let S = V.boundaryMode ? C : null;
        Wn({
          config: j,
          event: h,
          eventTarget: r,
          elementRoot: S,
          elementApi: Ce,
        }).forEach((D, G) => {
          let H = ee ? ua($)(D, F) : null,
            J = ee ? QM($)(D, F) : null;
          k = !0;
          let re = M === K && G === 0,
            U = GM({ element: D, actionItem: F }),
            z = sa({ element: D, actionItem: F, elementApi: Ce }, H);
          ca({
            store: e,
            element: D,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: U,
            destination: z,
            immediate: a,
            verbose: u,
            pluginInstance: H,
            pluginDuration: J,
            instanceDelay: A,
          });
        });
      }),
      k
    );
  }
  function ca(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: l,
        eventId: y,
      } = n,
      h = !s,
      g = qM(),
      { ixElements: m, ixSession: T, ixData: w } = t.getState(),
      R = FM(m, i),
      { refState: A } = m[R] || {},
      N = Yo(i),
      C = T.reducedMotion && Ti[o.actionTypeId],
      M;
    if (C && s)
      switch (w.events[y]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          M = l;
          break;
        default:
          M = 0.5;
          break;
      }
    let k = UM(i, A, r, o, Ce, u);
    if (
      (t.dispatch(
        Uo({
          instanceId: g,
          elementId: R,
          origin: k,
          refType: N,
          skipMotion: C,
          skipToValue: M,
          ...n,
        })
      ),
      yv(document.body, "ix2-animation-started", g),
      a)
    ) {
      yF(t, g);
      return;
    }
    Ot({ store: t, select: ({ ixInstances: F }) => F[g], onChange: _v }),
      h && t.dispatch(Cn(g, T.tick));
  }
  function la(e, t) {
    yv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === pv && BM(o, n, Ce), t.dispatch(Wo(e.id));
  }
  function yv(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function yF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Cn(t, 0)), e.dispatch(Rn(performance.now(), r));
    let { ixInstances: n } = e.getState();
    _v(n[t], e);
  }
  function _v(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: l,
        groupIndex: y,
        eventId: h,
        eventTarget: g,
        eventStateKey: m,
        actionListId: T,
        isCarrier: w,
        styleProp: R,
        verbose: A,
        pluginInstance: N,
      } = e,
      { ixData: C, ixSession: M } = t.getState(),
      { events: k } = C,
      F = k && k[h] ? k[h] : {},
      { mediaQueries: K = C.mediaQueryKeys } = F;
    if (Vn(K, M.mediaQueryKey) && (n || r || i)) {
      if (l || (s === MM && i)) {
        t.dispatch(Vo(o, u, l, a));
        let { ixElements: j } = t.getState(),
          { ref: $, refType: ee, refState: V } = j[o] || {},
          S = V && V[u];
        (ee === pv || Hn(u)) && kM($, V, S, h, a, R, Ce, s, N);
      }
      if (i) {
        if (w) {
          let j = Pr({
            store: t,
            eventId: h,
            eventTarget: g,
            eventStateKey: m,
            actionListId: T,
            groupIndex: y + 1,
            verbose: A,
          });
          A && !j && t.dispatch(er({ actionListId: T, isPlaying: !1 }));
        }
        la(e, t);
      }
    }
  }
  var sv,
    ct,
    uv,
    cv,
    lv,
    fv,
    rr,
    dv,
    Gn,
    DM,
    oa,
    aa,
    Un,
    pv,
    MM,
    ov,
    Wn,
    FM,
    sa,
    Ot,
    qM,
    kM,
    gv,
    XM,
    GM,
    UM,
    WM,
    VM,
    HM,
    Vn,
    BM,
    zM,
    KM,
    jM,
    YM,
    Hn,
    ua,
    QM,
    av,
    $M,
    ZM,
    dF,
    gF,
    hF,
    vF,
    ia = me(() => {
      "use strict";
      (sv = le($i())),
        (ct = le(cn())),
        (uv = le(Dp())),
        (cv = le(ag())),
        (lv = le(ug())),
        (fv = le(lg())),
        (rr = le(vg())),
        (dv = le(bg()));
      Me();
      Gn = le(At());
      Ln();
      Rg();
      iv();
      (DM = Object.keys(Gr)),
        (oa = (e) => DM.includes(e)),
        ({
          COLON_DELIMITER: aa,
          BOUNDARY_SELECTOR: Un,
          HTML_ELEMENT: pv,
          RENDER_GENERAL: MM,
          W_MOD_IX: ov,
        } = Ae),
        ({
          getAffectedElements: Wn,
          getElementId: FM,
          getDestinationValues: sa,
          observeStore: Ot,
          getInstanceId: qM,
          renderHTMLElement: kM,
          clearAllStyles: gv,
          getMaxDurationItemIndex: XM,
          getComputedStyle: GM,
          getInstanceOrigin: UM,
          reduceListToGroup: WM,
          shouldNamespaceEventParameter: VM,
          getNamespacedParameterId: HM,
          shouldAllowMediaQuery: Vn,
          cleanupHTMLElement: BM,
          clearObjectCache: zM,
          stringifyTarget: KM,
          mediaQueriesEqual: jM,
          shallowEqual: YM,
        } = Gn.IX2VanillaUtils),
        ({
          isPluginType: Hn,
          createPluginInstance: ua,
          getPluginDuration: QM,
        } = Gn.IX2VanillaPlugins),
        (av = navigator.userAgent),
        ($M = av.match(/iPad/i) || av.match(/iPhone/)),
        (ZM = 12);
      dF = ["resize", "orientationchange"];
      (gF = (e, t) => (0, cv.default)((0, fv.default)(e, t), lv.default)),
        (hF = (e, t) => {
          (0, rr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + aa + o;
              t(i, n, a);
            });
          });
        }),
        (vF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Wn({ config: t, elementApi: Ce });
        });
    });
  var wv = d((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    function _F(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    _F(da, {
      actions: function () {
        return bF;
      },
      destroy: function () {
        return bv;
      },
      init: function () {
        return xF;
      },
      setEnv: function () {
        return OF;
      },
      store: function () {
        return Kn;
      },
    });
    var IF = yi(),
      TF = wF((hp(), Qe(gp))),
      fa = (ia(), Qe(Iv)),
      bF = AF((Ln(), Qe(Ag)));
    function wF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Tv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Tv = function (n) {
        return n ? r : t;
      })(e);
    }
    function AF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Tv(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Kn = (0, IF.createStore)(TF.default);
    function OF(e) {
      e() && (0, fa.observeRequests)(Kn);
    }
    function xF(e) {
      bv(), (0, fa.startEngine)({ store: Kn, rawData: e, allowEvents: !0 });
    }
    function bv() {
      (0, fa.stopEngine)(Kn);
    }
  });
  var Sv = d((PX, xv) => {
    "use strict";
    var Av = Se(),
      Ov = wv();
    Ov.setEnv(Av.env);
    Av.define(
      "ix2",
      (xv.exports = function () {
        return Ov;
      })
    );
  });
  var Cv = d((NX, Rv) => {
    "use strict";
    var nr = Se();
    nr.define(
      "links",
      (Rv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = nr.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          l = /index\.(html|php)$/,
          y = /\/$/,
          h,
          g;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && nr.env("design")),
            (g = nr.env("slug") || a.pathname || ""),
            nr.scroll.off(w),
            (h = []);
          for (var A = document.links, N = 0; N < A.length; ++N) T(A[N]);
          h.length && (nr.scroll.on(w), w());
        }
        function T(A) {
          if (!A.getAttribute("hreflang")) {
            var N =
              (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
            if (((u.href = N), !(N.indexOf(":") >= 0))) {
              var C = e(A);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var M = e(u.hash);
                M.length && h.push({ link: C, sec: M, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var k =
                  u.href === a.href || N === g || (l.test(N) && y.test(g));
                R(C, s, k);
              }
            }
          }
        }
        function w() {
          var A = n.scrollTop(),
            N = n.height();
          t.each(h, function (C) {
            if (!C.link.attr("hreflang")) {
              var M = C.link,
                k = C.sec,
                F = k.offset().top,
                K = k.outerHeight(),
                j = N * 0.5,
                $ = k.is(":visible") && F + K - j >= A && F + j <= A + N;
              C.active !== $ && ((C.active = $), R(M, s, $));
            }
          });
        }
        function R(A, N, C) {
          var M = A.hasClass(N);
          (C && M) || (!C && !M) || (C ? A.addClass(N) : A.removeClass(N));
        }
        return r;
      })
    );
  });
  var Pv = d((DX, Lv) => {
    "use strict";
    var jn = Se();
    jn.define(
      "scroll",
      (Lv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (S) {
              window.setTimeout(S, 15);
            },
          s = jn.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(g));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function R(S) {
          return w.test(S.hash) && S.host + S.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function C(S, E) {
          var D;
          switch (E) {
            case "add":
              (D = S.attr("tabindex")),
                D
                  ? S.attr("data-wf-tabindex-swap", D)
                  : S.attr("tabindex", "-1");
              break;
            case "remove":
              (D = S.attr("data-wf-tabindex-swap")),
                D
                  ? (S.attr("tabindex", D),
                    S.removeAttr("data-wf-tabindex-swap"))
                  : S.removeAttr("tabindex");
              break;
          }
          S.toggleClass("wf-force-outline-none", E === "add");
        }
        function M(S) {
          var E = S.currentTarget;
          if (
            !(
              jn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(E.className))
            )
          ) {
            var D = R(E) ? E.hash : "";
            if (D !== "") {
              var G = e(D);
              G.length &&
                (S && (S.preventDefault(), S.stopPropagation()),
                k(D, S),
                window.setTimeout(
                  function () {
                    F(G, function () {
                      C(G, "add"),
                        G.get(0).focus({ preventScroll: !0 }),
                        C(G, "remove");
                    });
                  },
                  S ? 0 : 300
                ));
            }
          }
        }
        function k(S) {
          if (
            r.hash !== S &&
            n &&
            n.pushState &&
            !(jn.env.chrome && r.protocol === "file:")
          ) {
            var E = n.state && n.state.hash;
            E !== S && n.pushState({ hash: S }, "", S);
          }
        }
        function F(S, E) {
          var D = i.scrollTop(),
            G = K(S);
          if (D !== G) {
            var H = j(S, D, G),
              J = Date.now(),
              re = function () {
                var U = Date.now() - J;
                window.scroll(0, $(D, G, U, H)),
                  U <= H ? u(re) : typeof E == "function" && E();
              };
            u(re);
          }
        }
        function K(S) {
          var E = e(l),
            D = E.css("position") === "fixed" ? E.outerHeight() : 0,
            G = S.offset().top - D;
          if (S.data("scroll") === "mid") {
            var H = i.height() - D,
              J = S.outerHeight();
            J < H && (G -= Math.round((H - J) / 2));
          }
          return G;
        }
        function j(S, E, D) {
          if (N()) return 0;
          var G = 1;
          return (
            a.add(S).each(function (H, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (G = re);
            }),
            (472.143 * Math.log(Math.abs(E - D) + 125) - 2e3) * G
          );
        }
        function $(S, E, D, G) {
          return D > G ? E : S + (E - S) * ee(D / G);
        }
        function ee(S) {
          return S < 0.5
            ? 4 * S * S * S
            : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: S, WF_CLICK_SCROLL: E } = t;
          o.on(E, h, M),
            o.on(S, y, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var Dv = d((MX, Nv) => {
    "use strict";
    var SF = Se();
    SF.define(
      "touch",
      (Nv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            y;
          o.addEventListener("touchstart", h, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", T, !1),
            o.addEventListener("mousedown", h, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", T, !1);
          function h(R) {
            var A = R.touches;
            (A && A.length > 1) ||
              ((a = !0),
              A ? ((u = !0), (l = A[0].clientX)) : (l = R.clientX),
              (y = l));
          }
          function g(R) {
            if (a) {
              if (u && R.type === "mousemove") {
                R.preventDefault(), R.stopPropagation();
                return;
              }
              var A = R.touches,
                N = A ? A[0].clientX : R.clientX,
                C = N - y;
              (y = N),
                Math.abs(C) > s &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", R, { direction: C > 0 ? "right" : "left" }), T());
            }
          }
          function m(R) {
            if (a && ((a = !1), u && R.type === "mouseup")) {
              R.preventDefault(), R.stopPropagation(), (u = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function w() {
            o.removeEventListener("touchstart", h, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", T, !1),
              o.removeEventListener("mousedown", h, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", T, !1),
              (o = null);
          }
          this.destroy = w;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var qv = d((FX, Fv) => {
    "use strict";
    var xt = Se(),
      RF = Ct(),
      je = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Mv = !0,
      CF = /^#[a-zA-Z0-9\-_]+$/;
    xt.define(
      "dropdown",
      (Fv.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = xt.env(),
          o = !1,
          a,
          u = xt.env.touch,
          s = ".w-dropdown",
          l = "w--open",
          y = RF.triggers,
          h = 900,
          g = "focusout" + s,
          m = "keydown" + s,
          T = "mouseenter" + s,
          w = "mousemove" + s,
          R = "mouseleave" + s,
          A = (u ? "click" : "mouseup") + s,
          N = "w-close" + s,
          C = "setting" + s,
          M = e(document),
          k;
        (n.ready = F),
          (n.design = function () {
            o && E(), (o = !1), F();
          }),
          (n.preview = function () {
            (o = !0), F();
          });
        function F() {
          (a = i && xt.env("design")), (k = M.find(s)), k.each(K);
        }
        function K(c, X) {
          var W = e(X),
            L = e.data(X, s);
          L ||
            (L = e.data(X, s, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (L.toggle = L.el.children(".w-dropdown-toggle")),
            (L.list = L.el.children(".w-dropdown-list")),
            (L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (L.complete = H(L)),
            (L.mouseLeave = re(L)),
            (L.mouseUpOutside = G(L)),
            (L.mouseMoveOutside = U(L)),
            j(L);
          var ie = L.toggle.attr("id"),
            fe = L.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + c),
            fe || (fe = "w-dropdown-list-" + c),
            L.toggle.attr("id", ie),
            L.toggle.attr("aria-controls", fe),
            L.toggle.attr("aria-haspopup", "menu"),
            L.toggle.attr("aria-expanded", "false"),
            L.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            L.toggle.prop("tagName") !== "BUTTON" &&
              (L.toggle.attr("role", "button"),
              L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")),
            L.list.attr("id", fe),
            L.list.attr("aria-labelledby", ie),
            L.links.each(function (v, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                CF.test(B.hash) && B.addEventListener("click", S.bind(null, L));
            }),
            L.el.off(s),
            L.toggle.off(s),
            L.nav && L.nav.off(s);
          var oe = ee(L, Mv);
          a && L.el.on(C, $(L)),
            a ||
              (i && ((L.hovering = !1), S(L)),
              L.config.hover && L.toggle.on(T, J(L)),
              L.el.on(N, oe),
              L.el.on(m, z(L)),
              L.el.on(g, I(L)),
              L.toggle.on(A, oe),
              L.toggle.on(m, _(L)),
              (L.nav = L.el.closest(".w-nav")),
              L.nav.on(N, oe));
        }
        function j(c) {
          var X = Number(c.el.css("z-index"));
          (c.manageZ = X === h || X === h + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !u,
              delay: c.el.attr("data-delay"),
            });
        }
        function $(c) {
          return function (X, W) {
            (W = W || {}),
              j(c),
              W.open === !0 && V(c, !0),
              W.open === !1 && S(c, { immediate: !0 });
          };
        }
        function ee(c, X) {
          return r(function (W) {
            if (c.open || (W && W.type === "w-close"))
              return S(c, { forceClose: X });
            V(c);
          });
        }
        function V(c) {
          if (!c.open) {
            D(c),
              (c.open = !0),
              c.list.addClass(l),
              c.toggle.addClass(l),
              c.toggle.attr("aria-expanded", "true"),
              y.intro(0, c.el[0]),
              xt.redraw.up(),
              c.manageZ && c.el.css("z-index", h + 1);
            var X = xt.env("editor");
            a || M.on(A, c.mouseUpOutside),
              c.hovering && !X && c.el.on(R, c.mouseLeave),
              c.hovering && X && M.on(w, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function S(c, { immediate: X, forceClose: W } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !W)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var L = c.config;
            if (
              (y.outro(0, c.el[0]),
              M.off(A, c.mouseUpOutside),
              M.off(w, c.mouseMoveOutside),
              c.el.off(R, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !L.delay || X)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, L.delay);
          }
        }
        function E() {
          M.find(s).each(function (c, X) {
            e(X).triggerHandler(N);
          });
        }
        function D(c) {
          var X = c.el[0];
          k.each(function (W, L) {
            var ie = e(L);
            ie.is(X) || ie.has(X).length || ie.triggerHandler(N);
          });
        }
        function G(c) {
          return (
            c.mouseUpOutside && M.off(A, c.mouseUpOutside),
            r(function (X) {
              if (c.open) {
                var W = e(X.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var L = e.inArray(c.el[0], W.parents(s)) === -1,
                    ie = xt.env("editor");
                  if (L) {
                    if (ie) {
                      var fe =
                          W.parents().length === 1 &&
                          W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (fe || oe) return;
                    }
                    S(c);
                  }
                }
              }
            })
          );
        }
        function H(c) {
          return function () {
            c.list.removeClass(l),
              c.toggle.removeClass(l),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function J(c) {
          return function () {
            (c.hovering = !0), V(c);
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || S(c);
          };
        }
        function U(c) {
          return r(function (X) {
            if (c.open) {
              var W = e(X.target),
                L = e.inArray(c.el[0], W.parents(s)) === -1;
              if (L) {
                var ie = W.parents(".w-editor-bem-EditorHoverControls").length,
                  fe = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  v =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || fe || v) return;
                (c.hovering = !1), S(c);
              }
            }
          });
        }
        function z(c) {
          return function (X) {
            if (!(a || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case je.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), p(c), X.preventDefault())
                    : void 0;
                case je.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      p(c),
                      X.preventDefault())
                    : void 0;
                case je.ESCAPE:
                  return S(c), c.toggle.focus(), X.stopPropagation();
                case je.ARROW_RIGHT:
                case je.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    p(c),
                    X.preventDefault()
                  );
                case je.ARROW_LEFT:
                case je.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    p(c),
                    X.preventDefault()
                  );
              }
          };
        }
        function p(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function _(c) {
          var X = ee(c, Mv);
          return function (W) {
            if (!a) {
              if (!c.open)
                switch (W.keyCode) {
                  case je.ARROW_UP:
                  case je.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case je.SPACE:
                case je.ENTER:
                  return X(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function I(c) {
          return r(function (X) {
            var { relatedTarget: W, target: L } = X,
              ie = c.el[0],
              fe = ie.contains(W) || ie.contains(L);
            return fe || S(c), X.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var kv = d((pa) => {
    "use strict";
    Object.defineProperty(pa, "__esModule", { value: !0 });
    Object.defineProperty(pa, "default", {
      enumerable: !0,
      get: function () {
        return LF;
      },
    });
    function LF(e, t, r, n, i, o, a, u, s, l, y, h, g) {
      return function (m) {
        e(m);
        var T = m.form,
          w = {
            name: T.attr("data-name") || T.attr("name") || "Untitled Form",
            pageId: T.attr("data-wf-page-id") || "",
            elementId: T.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              T.html()
            ),
            trackingCookies: n(),
          };
        let R = T.attr("data-wf-flow");
        R && (w.wfFlow = R), i(m);
        var A = o(T, w.fields);
        if (A) return a(A);
        if (((w.fileUploads = u(T)), s(m), !l)) {
          y(m);
          return;
        }
        h.ajax({
          url: g,
          type: "POST",
          data: w,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (m.success = !0), y(m);
          })
          .fail(function () {
            y(m);
          });
      };
    }
  });
  var Gv = d((kX, Xv) => {
    "use strict";
    var Yn = Se();
    Yn.define(
      "forms",
      (Xv.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          l = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          h = window.alert,
          g = Yn.env(),
          m,
          T,
          w,
          R = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !g && !m && M();
            };
        function N() {
          (s = e("html").attr("data-wf-site")),
            (T = "https://webflow.com/api/v1/form/" + s),
            a &&
              T.indexOf("https://webflow.com") >= 0 &&
              (T = T.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (w = `${T}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(C);
        }
        function C(U, z) {
          var p = e(z),
            _ = e.data(z, u);
          _ || (_ = e.data(z, u, { form: p })), k(_);
          var I = p.closest("div.w-form");
          (_.done = I.find("> .w-form-done")),
            (_.fail = I.find("> .w-form-fail")),
            (_.fileUploads = I.find(".w-file-upload")),
            _.fileUploads.each(function (W) {
              H(W, _);
            });
          var c =
            _.form.attr("aria-label") || _.form.attr("data-name") || "Form";
          _.done.attr("aria-label") || _.form.attr("aria-label", c),
            _.done.attr("tabindex", "-1"),
            _.done.attr("role", "region"),
            _.done.attr("aria-label") ||
              _.done.attr("aria-label", c + " success"),
            _.fail.attr("tabindex", "-1"),
            _.fail.attr("role", "region"),
            _.fail.attr("aria-label") ||
              _.fail.attr("aria-label", c + " failure");
          var X = (_.action = p.attr("action"));
          if (
            ((_.handler = null),
            (_.redirect = p.attr("data-redirect")),
            R.test(X))
          ) {
            _.handler = E;
            return;
          }
          if (!X) {
            if (s) {
              _.handler = (() => {
                let W = kv().default;
                return W(k, o, Yn, ee, G, K, h, j, F, s, D, e, T);
              })();
              return;
            }
            A();
          }
        }
        function M() {
          (m = !0),
            n.on("submit", u + " form", function (W) {
              var L = e.data(this, u);
              L.handler && ((L.evt = W), L.handler(L));
            });
          let U = ".w-checkbox-input",
            z = ".w-radio-input",
            p = "w--redirected-checked",
            _ = "w--redirected-focus",
            I = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            X = [
              ["checkbox", U],
              ["radio", z],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + U + ")",
            (W) => {
              e(W.target).siblings(U).toggleClass(p);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${U})`).map((ie, fe) =>
                e(fe).siblings(z).removeClass(p)
              );
              let L = e(W.target);
              L.hasClass("w-radio-input") || L.siblings(z).addClass(p);
            }),
            X.forEach(([W, L]) => {
              n.on(
                "focus",
                u + ` form input[type="${W}"]:not(` + L + ")",
                (ie) => {
                  e(ie.target).siblings(L).addClass(_),
                    e(ie.target).filter(c).siblings(L).addClass(I);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${W}"]:not(` + L + ")",
                  (ie) => {
                    e(ie.target).siblings(L).removeClass(`${_} ${I}`);
                  }
                );
            });
        }
        function k(U) {
          var z = (U.btn = U.form.find(':input[type="submit"]'));
          (U.wait = U.btn.attr("data-wait") || null),
            (U.success = !1),
            z.prop("disabled", !1),
            U.label && z.val(U.label);
        }
        function F(U) {
          var z = U.btn,
            p = U.wait;
          z.prop("disabled", !0), p && ((U.label = z.val()), z.val(p));
        }
        function K(U, z) {
          var p = null;
          return (
            (z = z || {}),
            U.find(':input:not([type="submit"]):not([type="file"])').each(
              function (_, I) {
                var c = e(I),
                  X = c.attr("type"),
                  W =
                    c.attr("data-name") || c.attr("name") || "Field " + (_ + 1);
                W = encodeURIComponent(W);
                var L = c.val();
                if (X === "checkbox") L = c.is(":checked");
                else if (X === "radio") {
                  if (z[W] === null || typeof z[W] == "string") return;
                  L =
                    U.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof L == "string" && (L = e.trim(L)),
                  (z[W] = L),
                  (p = p || V(c, X, W, L));
              }
            ),
            p
          );
        }
        function j(U) {
          var z = {};
          return (
            U.find(':input[type="file"]').each(function (p, _) {
              var I = e(_),
                c = I.attr("data-name") || I.attr("name") || "File " + (p + 1),
                X = I.attr("data-value");
              typeof X == "string" && (X = e.trim(X)), (z[c] = X);
            }),
            z
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (z, p) {
            let _ = p.split("="),
              I = _[0];
            if (I in $) {
              let c = $[I],
                X = _.slice(1).join("=");
              z[c] = X;
            }
            return z;
          }, {});
        }
        function V(U, z, p, _) {
          var I = null;
          return (
            z === "password"
              ? (I = "Passwords cannot be submitted.")
              : U.attr("required")
              ? _
                ? l.test(U.attr("type")) &&
                  (y.test(_) ||
                    (I = "Please enter a valid email address for: " + p))
                : (I = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !_ &&
                (I = "Please confirm you\u2019re not a robot."),
            I
          );
        }
        function S(U) {
          G(U), D(U);
        }
        function E(U) {
          k(U);
          var z = U.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(U.action)) {
            z.attr("method", "post");
            return;
          }
          G(U);
          var _ = K(z, p);
          if (_) return h(_);
          F(U);
          var I;
          t.each(p, function (L, ie) {
            l.test(ie) && (p.EMAIL = L),
              /^((full[ _-]?)?name)$/i.test(ie) && (I = L),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = L),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = L);
          }),
            I &&
              !p.FNAME &&
              ((I = I.split(" ")),
              (p.FNAME = I[0]),
              (p.LNAME = p.LNAME || I[1]));
          var c = U.action.replace("/post?", "/post-json?") + "&c=?",
            X = c.indexOf("u=") + 2;
          X = c.substring(X, c.indexOf("&", X));
          var W = c.indexOf("id=") + 3;
          (W = c.substring(W, c.indexOf("&", W))),
            (p["b_" + X + "_" + W] = ""),
            e
              .ajax({ url: c, data: p, dataType: "jsonp" })
              .done(function (L) {
                (U.success = L.result === "success" || /already/.test(L.msg)),
                  U.success || console.info("MailChimp error: " + L.msg),
                  D(U);
              })
              .fail(function () {
                D(U);
              });
        }
        function D(U) {
          var z = U.form,
            p = U.redirect,
            _ = U.success;
          if (_ && p) {
            Yn.location(p);
            return;
          }
          U.done.toggle(_),
            U.fail.toggle(!_),
            _ ? U.done.focus() : U.fail.focus(),
            z.toggle(!_),
            k(U);
        }
        function G(U) {
          U.evt && U.evt.preventDefault(), (U.evt = null);
        }
        function H(U, z) {
          if (!z.fileUploads || !z.fileUploads[U]) return;
          var p,
            _ = e(z.fileUploads[U]),
            I = _.find("> .w-file-upload-default"),
            c = _.find("> .w-file-upload-uploading"),
            X = _.find("> .w-file-upload-success"),
            W = _.find("> .w-file-upload-error"),
            L = I.find(".w-file-upload-input"),
            ie = I.find(".w-file-upload-label"),
            fe = ie.children(),
            oe = W.find(".w-file-upload-error-msg"),
            v = X.find(".w-file-upload-file"),
            B = X.find(".w-file-remove-link"),
            Z = v.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Le = oe.attr("data-w-generic-error");
          if (
            (g ||
              ie.on("click keydown", function (O) {
                (O.type === "keydown" && O.which !== 13 && O.which !== 32) ||
                  (O.preventDefault(), L.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            L.on("click", function (O) {
              O.preventDefault();
            }),
              ie.on("click", function (O) {
                O.preventDefault();
              }),
              fe.on("click", function (O) {
                O.preventDefault();
              });
          else {
            B.on("click keydown", function (O) {
              if (O.type === "keydown") {
                if (O.which !== 13 && O.which !== 32) return;
                O.preventDefault();
              }
              L.removeAttr("data-value"),
                L.val(""),
                Z.html(""),
                I.toggle(!0),
                X.toggle(!1),
                ie.focus();
            }),
              L.on("change", function (O) {
                (p = O.target && O.target.files && O.target.files[0]),
                  p &&
                    (I.toggle(!1),
                    W.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    Z.text(p.name),
                    P() || F(z),
                    (z.fileUploads[U].uploading = !0),
                    J(p, b));
              });
            var Xe = ie.outerHeight();
            L.height(Xe), L.width(1);
          }
          function f(O) {
            var q = O.responseJSON && O.responseJSON.msg,
              te = Le;
            typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0
              ? (te = de)
              : typeof q == "string" &&
                q.indexOf("MaxFileSizeError") === 0 &&
                (te = Y),
              oe.text(te),
              L.removeAttr("data-value"),
              L.val(""),
              c.toggle(!1),
              I.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (z.fileUploads[U].uploading = !1),
              P() || k(z);
          }
          function b(O, q) {
            if (O) return f(O);
            var te = q.fileName,
              ae = q.postData,
              he = q.fileId,
              Q = q.s3Url;
            L.attr("data-value", he), re(Q, ae, p, te, x);
          }
          function x(O) {
            if (O) return f(O);
            c.toggle(!1),
              X.css("display", "inline-block"),
              X.focus(),
              (z.fileUploads[U].uploading = !1),
              P() || k(z);
          }
          function P() {
            var O = (z.fileUploads && z.fileUploads.toArray()) || [];
            return O.some(function (q) {
              return q.uploading;
            });
          }
        }
        function J(U, z) {
          var p = new URLSearchParams({ name: U.name, size: U.size });
          e.ajax({ type: "GET", url: `${w}?${p}`, crossDomain: !0 })
            .done(function (_) {
              z(null, _);
            })
            .fail(function (_) {
              z(_);
            });
        }
        function re(U, z, p, _, I) {
          var c = new FormData();
          for (var X in z) c.append(X, z[X]);
          c.append("file", p, _),
            e
              .ajax({
                type: "POST",
                url: U,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                I(null);
              })
              .fail(function (W) {
                I(W);
              });
        }
        return r;
      })
    );
  });
  var Wv = d((XX, Uv) => {
    "use strict";
    var vt = Se(),
      PF = Ct(),
      we = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    vt.define(
      "navbar",
      (Uv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          l,
          y,
          h = vt.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          T = "w--open",
          w = "w--nav-dropdown-open",
          R = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          C = PF.triggers,
          M = e();
        (r.ready = r.design = r.preview = k),
          (r.destroy = function () {
            (M = e()), F(), s && s.length && s.each(ee);
          });
        function k() {
          (l = h && vt.env("design")),
            (y = vt.env("editor")),
            (u = e(document.body)),
            (s = o.find(m)),
            s.length && (s.each($), F(), K());
        }
        function F() {
          vt.resize.off(j);
        }
        function K() {
          vt.resize.on(j);
        }
        function j() {
          s.each(I);
        }
        function $(v, B) {
          var Z = e(B),
            Y = e.data(B, m);
          Y ||
            (Y = e.data(B, m, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = Z.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = Z.find(".w-nav-button")),
            (Y.container = Z.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + v),
            (Y.outside = p(Y));
          var de = Z.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(m),
            Y.button.off(m),
            Y.menu.off(m),
            E(Y),
            l
              ? (V(Y), Y.el.on("setting" + m, D(Y)))
              : (S(Y),
                Y.button.on("click" + m, U(Y)),
                Y.menu.on("click" + m, "a", z(Y)),
                Y.button.on("keydown" + m, G(Y)),
                Y.el.on("keydown" + m, H(Y))),
            I(v, B);
        }
        function ee(v, B) {
          var Z = e.data(B, m);
          Z && (V(Z), e.removeData(B, m));
        }
        function V(v) {
          v.overlay && (oe(v, !0), v.overlay.remove(), (v.overlay = null));
        }
        function S(v) {
          v.overlay ||
            ((v.overlay = e(g).appendTo(v.el)),
            v.overlay.attr("id", v.overlayContainerId),
            (v.parent = v.menu.parent()),
            oe(v, !0));
        }
        function E(v) {
          var B = {},
            Z = v.config || {},
            Y = (B.animation = v.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(Y)),
            (B.animDirect = /left$/.test(Y) ? -1 : 1),
            Z.animation !== Y && v.open && t.defer(re, v),
            (B.easing = v.el.attr("data-easing") || "ease"),
            (B.easing2 = v.el.attr("data-easing2") || "ease");
          var de = v.el.attr("data-duration");
          (B.duration = de != null ? Number(de) : 400),
            (B.docHeight = v.el.attr("data-doc-height")),
            (v.config = B);
        }
        function D(v) {
          return function (B, Z) {
            Z = Z || {};
            var Y = i.width();
            E(v),
              Z.open === !0 && ie(v, !0),
              Z.open === !1 && oe(v, !0),
              v.open &&
                t.defer(function () {
                  Y !== i.width() && re(v);
                });
          };
        }
        function G(v) {
          return function (B) {
            switch (B.keyCode) {
              case we.SPACE:
              case we.ENTER:
                return U(v)(), B.preventDefault(), B.stopPropagation();
              case we.ESCAPE:
                return oe(v), B.preventDefault(), B.stopPropagation();
              case we.ARROW_RIGHT:
              case we.ARROW_DOWN:
              case we.HOME:
              case we.END:
                return v.open
                  ? (B.keyCode === we.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function H(v) {
          return function (B) {
            if (v.open)
              switch (
                ((v.selectedIdx = v.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case we.HOME:
                case we.END:
                  return (
                    B.keyCode === we.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case we.ESCAPE:
                  return (
                    oe(v),
                    v.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case we.ARROW_LEFT:
                case we.ARROW_UP:
                  return (
                    (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case we.ARROW_RIGHT:
                case we.ARROW_DOWN:
                  return (
                    (v.selectedIdx = Math.min(
                      v.links.length - 1,
                      v.selectedIdx + 1
                    )),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function J(v) {
          if (v.links[v.selectedIdx]) {
            var B = v.links[v.selectedIdx];
            B.focus(), z(B);
          }
        }
        function re(v) {
          v.open && (oe(v, !0), ie(v, !0));
        }
        function U(v) {
          return a(function () {
            v.open ? oe(v) : ie(v);
          });
        }
        function z(v) {
          return function (B) {
            var Z = e(this),
              Y = Z.attr("href");
            if (!vt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && v.open && oe(v);
          };
        }
        function p(v) {
          return (
            v.outside && o.off("click" + m, v.outside),
            function (B) {
              var Z = e(B.target);
              (y && Z.closest(".w-editor-bem-EditorOverlay").length) || _(v, Z);
            }
          );
        }
        var _ = a(function (v, B) {
          if (v.open) {
            var Z = B.closest(".w-nav-menu");
            v.menu.is(Z) || oe(v);
          }
        });
        function I(v, B) {
          var Z = e.data(B, m),
            Y = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !Y && !l && oe(Z, !0), Z.container.length)) {
            var de = X(Z);
            Z.links.each(de), Z.dropdowns.each(de);
          }
          Z.open && fe(Z);
        }
        var c = "max-width";
        function X(v) {
          var B = v.container.css(c);
          return (
            B === "none" && (B = ""),
            function (Z, Y) {
              (Y = e(Y)), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B);
            }
          );
        }
        function W(v, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function L(v, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function ie(v, B) {
          if (v.open) return;
          (v.open = !0),
            v.menu.each(W),
            v.links.addClass(N),
            v.dropdowns.addClass(w),
            v.dropdownToggle.addClass(R),
            v.dropdownList.addClass(A),
            v.button.addClass(T);
          var Z = v.config,
            Y = Z.animation;
          (Y === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
          var de = fe(v),
            Le = v.menu.outerHeight(!0),
            Xe = v.menu.outerWidth(!0),
            f = v.el.height(),
            b = v.el[0];
          if (
            (I(0, b),
            C.intro(0, b),
            vt.redraw.up(),
            l || o.on("click" + m, v.outside),
            B)
          ) {
            O();
            return;
          }
          var x = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (v.overlay &&
              ((M = v.menu.prev()), v.overlay.show().append(v.menu)),
            Z.animOver)
          ) {
            n(v.menu)
              .add(x)
              .set({ x: Z.animDirect * Xe, height: de })
              .start({ x: 0 })
              .then(O),
              v.overlay && v.overlay.width(Xe);
            return;
          }
          var P = f + Le;
          n(v.menu).add(x).set({ y: -P }).start({ y: 0 }).then(O);
          function O() {
            v.button.attr("aria-expanded", "true");
          }
        }
        function fe(v) {
          var B = v.config,
            Z = B.docHeight ? o.height() : u.height();
          return (
            B.animOver
              ? v.menu.height(Z)
              : v.el.css("position") !== "fixed" && (Z -= v.el.outerHeight(!0)),
            v.overlay && v.overlay.height(Z),
            Z
          );
        }
        function oe(v, B) {
          if (!v.open) return;
          (v.open = !1), v.button.removeClass(T);
          var Z = v.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (B = !0),
            C.outro(0, v.el[0]),
            o.off("click" + m, v.outside),
            B)
          ) {
            n(v.menu).stop(), b();
            return;
          }
          var Y = "transform " + Z.duration + "ms " + Z.easing2,
            de = v.menu.outerHeight(!0),
            Le = v.menu.outerWidth(!0),
            Xe = v.el.height();
          if (Z.animOver) {
            n(v.menu)
              .add(Y)
              .start({ x: Le * Z.animDirect })
              .then(b);
            return;
          }
          var f = Xe + de;
          n(v.menu).add(Y).start({ y: -f }).then(b);
          function b() {
            v.menu.height(""),
              n(v.menu).set({ x: 0, y: 0 }),
              v.menu.each(L),
              v.links.removeClass(N),
              v.dropdowns.removeClass(w),
              v.dropdownToggle.removeClass(R),
              v.dropdownList.removeClass(A),
              v.overlay &&
                v.overlay.children().length &&
                (M.length ? v.menu.insertAfter(M) : v.menu.prependTo(v.parent),
                v.overlay.attr("style", "").hide()),
              v.el.triggerHandler("w-close"),
              v.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Bv = d((GX, Hv) => {
    "use strict";
    var mt = Se(),
      NF = Ct(),
      it = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Vv =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    mt.define(
      "slider",
      (Hv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = mt.env(),
          s = ".w-slider",
          l = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          g = NF.triggers,
          m,
          T = !1;
        (r.ready = function () {
          (a = mt.env("design")), w();
        }),
          (r.design = function () {
            (a = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (a = !1), w();
          }),
          (r.redraw = function () {
            (T = !0), w(), (T = !1);
          }),
          (r.destroy = R);
        function w() {
          (o = i.find(s)), o.length && (o.each(C), !m && (R(), A()));
        }
        function R() {
          mt.resize.off(N), mt.redraw.off(r.redraw);
        }
        function A() {
          mt.resize.on(N), mt.redraw.on(r.redraw);
        }
        function N() {
          o.filter(":visible").each(H);
        }
        function C(p, _) {
          var I = e(_),
            c = e.data(_, s);
          c ||
            (c = e.data(_, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: I,
              config: {},
            })),
            (c.mask = I.children(".w-slider-mask")),
            (c.left = I.children(".w-slider-arrow-left")),
            (c.right = I.children(".w-slider-arrow-right")),
            (c.nav = I.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(g.reset),
            T && (c.maskWidth = 0),
            I.attr("role") === void 0 && I.attr("role", "region"),
            I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
          var X = c.mask.attr("id");
          if (
            (X || ((X = "w-slider-mask-" + p), c.mask.attr("id", X)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(y).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", X),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", X),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            M(c),
            a
              ? (c.el.on("setting" + s, E(c)), S(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, E(c)),
                c.left.on("click" + s, j(c)),
                c.right.on("click" + s, $(c)),
                c.left.on("keydown" + s, K(c, j)),
                c.right.on("keydown" + s, K(c, $)),
                c.nav.on("keydown" + s, "> div", E(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), V(c)),
                c.el.on("mouseenter" + s, F(c, !0, "mouse")),
                c.el.on("focusin" + s, F(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, F(c, !1, "mouse")),
                c.el.on("focusout" + s, F(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", E(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var W = I.filter(":hidden");
          W.addClass(h);
          var L = I.parents(":hidden");
          L.addClass(h), T || H(p, _), W.removeClass(h), L.removeClass(h);
        }
        function M(p) {
          var _ = {};
          (_.crossOver = 0),
            (_.animation = p.el.attr("data-animation") || "slide"),
            _.animation === "outin" &&
              ((_.animation = "cross"), (_.crossOver = 0.5)),
            (_.easing = p.el.attr("data-easing") || "ease");
          var I = p.el.attr("data-duration");
          if (
            ((_.duration = I != null ? parseInt(I, 10) : 500),
            k(p.el.attr("data-infinite")) && (_.infinite = !0),
            k(p.el.attr("data-disable-swipe")) && (_.disableSwipe = !0),
            k(p.el.attr("data-hide-arrows"))
              ? (_.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            k(p.el.attr("data-autoplay")))
          ) {
            (_.autoplay = !0),
              (_.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (_.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            a ||
              p.el.off(c).one(c, function () {
                S(p);
              });
          }
          var X = p.right.width();
          (_.edge = X ? X + 40 : 100), (p.config = _);
        }
        function k(p) {
          return p === "1" || p === "true";
        }
        function F(p, _, I) {
          return function (c) {
            if (_) p.hasFocus[I] = _;
            else if (
              e.contains(p.el.get(0), c.relatedTarget) ||
              ((p.hasFocus[I] = _),
              (p.hasFocus.mouse && I === "keyboard") ||
                (p.hasFocus.keyboard && I === "mouse"))
            )
              return;
            _
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && S(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && V(p));
          };
        }
        function K(p, _) {
          return function (I) {
            switch (I.keyCode) {
              case it.SPACE:
              case it.ENTER:
                return _(p)(), I.preventDefault(), I.stopPropagation();
            }
          };
        }
        function j(p) {
          return function () {
            G(p, { index: p.index - 1, vector: -1 });
          };
        }
        function $(p) {
          return function () {
            G(p, { index: p.index + 1, vector: 1 });
          };
        }
        function ee(p, _) {
          var I = null;
          _ === p.slides.length && (w(), J(p)),
            t.each(p.anchors, function (c, X) {
              e(c.els).each(function (W, L) {
                e(L).index() === _ && (I = X);
              });
            }),
            I != null && G(p, { index: I, immediate: !0 });
        }
        function V(p) {
          S(p);
          var _ = p.config,
            I = _.timerMax;
          (I && p.timerCount++ > I) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || ($(p)(), V(p));
            }, _.delay));
        }
        function S(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function E(p) {
          return function (_, I) {
            I = I || {};
            var c = p.config;
            if (a && _.type === "setting") {
              if (I.select === "prev") return j(p)();
              if (I.select === "next") return $(p)();
              if ((M(p), J(p), I.select == null)) return;
              ee(p, I.select);
              return;
            }
            if (_.type === "swipe")
              return c.disableSwipe || mt.env("editor")
                ? void 0
                : I.direction === "left"
                ? $(p)()
                : I.direction === "right"
                ? j(p)()
                : void 0;
            if (p.nav.has(_.target).length) {
              var X = e(_.target).index();
              if (
                (_.type === "click" && G(p, { index: X }), _.type === "keydown")
              )
                switch (_.keyCode) {
                  case it.ENTER:
                  case it.SPACE: {
                    G(p, { index: X }), _.preventDefault();
                    break;
                  }
                  case it.ARROW_LEFT:
                  case it.ARROW_UP: {
                    D(p.nav, Math.max(X - 1, 0)), _.preventDefault();
                    break;
                  }
                  case it.ARROW_RIGHT:
                  case it.ARROW_DOWN: {
                    D(p.nav, Math.min(X + 1, p.pages)), _.preventDefault();
                    break;
                  }
                  case it.HOME: {
                    D(p.nav, 0), _.preventDefault();
                    break;
                  }
                  case it.END: {
                    D(p.nav, p.pages), _.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(p, _) {
          var I = p.children().eq(_).focus();
          p.children().not(I);
        }
        function G(p, _) {
          _ = _ || {};
          var I = p.config,
            c = p.anchors;
          p.previous = p.index;
          var X = _.index,
            W = {};
          X < 0
            ? ((X = c.length - 1),
              I.infinite &&
                ((W.x = -p.endX), (W.from = 0), (W.to = c[0].width)))
            : X >= c.length &&
              ((X = 0),
              I.infinite &&
                ((W.x = c[c.length - 1].width),
                (W.from = -c[c.length - 1].x),
                (W.to = W.from - W.x))),
            (p.index = X);
          var L = p.nav
            .children()
            .eq(X)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(L)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            I.hideArrows &&
              (p.index === c.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            fe = (p.offsetX = -c[p.index].x),
            oe = { x: fe, opacity: 1, visibility: "" },
            v = e(c[p.index].els),
            B = e(c[p.previous] && c[p.previous].els),
            Z = p.slides.not(v),
            Y = I.animation,
            de = I.easing,
            Le = Math.round(I.duration),
            Xe = _.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + Le + "ms " + de,
            b = "transform " + Le + "ms " + de;
          if (
            (v.find(Vv).removeAttr("tabindex"),
            v.removeAttr("aria-hidden"),
            v.find("*").removeAttr("aria-hidden"),
            Z.find(Vv).attr("tabindex", "-1"),
            Z.attr("aria-hidden", "true"),
            Z.find("*").attr("aria-hidden", "true"),
            a || (v.each(g.intro), Z.each(g.outro)),
            _.immediate && !T)
          ) {
            n(v).set(oe), O();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${X + 1} of ${c.length}.`),
            Y === "cross")
          ) {
            var x = Math.round(Le - Le * I.crossOver),
              P = Math.round(Le - x);
            (f = "opacity " + x + "ms " + de),
              n(B).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(v)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(P)
                .then({ opacity: 1 })
                .then(O);
            return;
          }
          if (Y === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(v)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(O);
            return;
          }
          if (Y === "over") {
            (oe = { x: p.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(v)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: fe + c[p.index].width * Xe,
                })
                .add(b)
                .start({ x: fe })
                .then(O);
            return;
          }
          I.infinite && W.x
            ? (n(p.slides.not(B))
                .set({ visibility: "", x: W.x })
                .add(b)
                .start({ x: fe }),
              n(B).set({ visibility: "", x: W.from }).add(b).start({ x: W.to }),
              (p.shifted = B))
            : (I.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(b).start({ x: fe }));
          function O() {
            (v = e(c[p.index].els)),
              (Z = p.slides.not(v)),
              Y !== "slide" && (oe.visibility = "hidden"),
              n(Z).set(oe);
          }
        }
        function H(p, _) {
          var I = e.data(_, s);
          if (I) {
            if (U(I)) return J(I);
            a && z(I) && J(I);
          }
        }
        function J(p) {
          var _ = 1,
            I = 0,
            c = 0,
            X = 0,
            W = p.maskWidth,
            L = W - p.config.edge;
          L < 0 && (L = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (fe, oe) {
              c - I > L &&
                (_++,
                (I += W),
                (p.anchors[_ - 1] = { els: [], x: c, width: 0 })),
                (X = e(oe).outerWidth(!0)),
                (c += X),
                (p.anchors[_ - 1].width += X),
                p.anchors[_ - 1].els.push(oe);
              var v = fe + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", v), e(oe).attr("role", "group");
            }),
            (p.endX = c),
            a && (p.pages = null),
            p.nav.length && p.pages !== _ && ((p.pages = _), re(p));
          var ie = p.index;
          ie >= _ && (ie = _ - 1), G(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var _ = [],
            I,
            c = p.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var X = 0, W = p.pages; X < W; X++)
            (I = e(l)),
              I.attr("aria-label", "Show slide " + (X + 1) + " of " + W)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && I.text(X + 1),
              c != null && I.css({ "margin-left": c, "margin-right": c }),
              _.push(I);
          p.nav.empty().append(_);
        }
        function U(p) {
          var _ = p.mask.width();
          return p.maskWidth !== _ ? ((p.maskWidth = _), !0) : !1;
        }
        function z(p) {
          var _ = 0;
          return (
            p.slides.each(function (I, c) {
              _ += e(c).outerWidth(!0);
            }),
            p.slidesWidth !== _ ? ((p.slidesWidth = _), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var Kv = d((UX, zv) => {
    "use strict";
    var Et = Se(),
      DF = Ct();
    Et.define(
      "tabs",
      (zv.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Et.env,
          u = a.safari,
          s = a(),
          l = "data-w-tab",
          y = "data-w-pane",
          h = ".w-tabs",
          g = "w--current",
          m = "w--tab-active",
          T = DF.triggers,
          w = !1;
        (t.ready = t.design = t.preview = R),
          (t.redraw = function () {
            (w = !0), R(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(h)), i.length && (i.each(C), A());
          });
        function R() {
          (o = s && Et.env("design")),
            (i = n.find(h)),
            i.length &&
              (i.each(M), Et.env("preview") && !w && i.each(C), A(), N());
        }
        function A() {
          Et.redraw.off(t.redraw);
        }
        function N() {
          Et.redraw.on(t.redraw);
        }
        function C(V, S) {
          var E = e.data(S, h);
          E &&
            (E.links && E.links.each(T.reset),
            E.panes && E.panes.each(T.reset));
        }
        function M(V, S) {
          var E = h.substr(1) + "-" + V,
            D = e(S),
            G = e.data(S, h);
          if (
            (G || (G = e.data(S, h, { el: D, config: {} })),
            (G.current = null),
            (G.tabIdentifier = E + "-" + l),
            (G.paneIdentifier = E + "-" + y),
            (G.menu = D.children(".w-tab-menu")),
            (G.links = G.menu.children(".w-tab-link")),
            (G.content = D.children(".w-tab-content")),
            (G.panes = G.content.children(".w-tab-pane")),
            G.el.off(h),
            G.links.off(h),
            G.menu.attr("role", "tablist"),
            G.links.attr("tabindex", "-1"),
            k(G),
            !o)
          ) {
            G.links.on("click" + h, K(G)), G.links.on("keydown" + h, j(G));
            var H = G.links.filter("." + g),
              J = H.attr(l);
            J && $(G, { tab: J, immediate: !0 });
          }
        }
        function k(V) {
          var S = {};
          S.easing = V.el.attr("data-easing") || "ease";
          var E = parseInt(V.el.attr("data-duration-in"), 10);
          E = S.intro = E === E ? E : 0;
          var D = parseInt(V.el.attr("data-duration-out"), 10);
          (D = S.outro = D === D ? D : 0),
            (S.immediate = !E && !D),
            (V.config = S);
        }
        function F(V) {
          var S = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (E) => E.getAttribute(l) === S,
            null
          );
        }
        function K(V) {
          return function (S) {
            S.preventDefault();
            var E = S.currentTarget.getAttribute(l);
            E && $(V, { tab: E });
          };
        }
        function j(V) {
          return function (S) {
            var E = F(V),
              D = S.key,
              G = {
                ArrowLeft: E - 1,
                ArrowUp: E - 1,
                ArrowRight: E + 1,
                ArrowDown: E + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (D in G) {
              S.preventDefault();
              var H = G[D];
              H === -1 && (H = V.links.length - 1),
                H === V.links.length && (H = 0);
              var J = V.links[H],
                re = J.getAttribute(l);
              re && $(V, { tab: re });
            }
          };
        }
        function $(V, S) {
          S = S || {};
          var E = V.config,
            D = E.easing,
            G = S.tab;
          if (G !== V.current) {
            V.current = G;
            var H;
            V.links.each(function (I, c) {
              var X = e(c);
              if (S.immediate || E.immediate) {
                var W = V.panes[I];
                c.id || (c.id = V.tabIdentifier + "-" + I),
                  W.id || (W.id = V.paneIdentifier + "-" + I),
                  (c.href = "#" + W.id),
                  c.setAttribute("role", "tab"),
                  c.setAttribute("aria-controls", W.id),
                  c.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(l) === G
                ? ((H = c),
                  X.addClass(g)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(T.intro))
                : X.hasClass(g) &&
                  X.removeClass(g)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(T.outro);
            });
            var J = [],
              re = [];
            V.panes.each(function (I, c) {
              var X = e(c);
              c.getAttribute(l) === G ? J.push(c) : X.hasClass(m) && re.push(c);
            });
            var U = e(J),
              z = e(re);
            if (S.immediate || E.immediate) {
              U.addClass(m).each(T.intro),
                z.removeClass(m),
                w || Et.redraw.up();
              return;
            } else {
              var p = window.scrollX,
                _ = window.scrollY;
              H.focus(), window.scrollTo(p, _);
            }
            z.length && E.outro
              ? (z.each(T.outro),
                r(z)
                  .add("opacity " + E.outro + "ms " + D, { fallback: u })
                  .start({ opacity: 0 })
                  .then(() => ee(E, z, U)))
              : ee(E, z, U);
          }
        }
        function ee(V, S, E) {
          if (
            (S.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            E.addClass(m).each(T.intro),
            Et.redraw.up(),
            !V.intro)
          )
            return r(E).set({ opacity: 1 });
          r(E)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: u })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  xa();
  Ra();
  La();
  Da();
  Ct();
  Sv();
  Cv();
  Pv();
  Dv();
  qv();
  Gv();
  Wv();
  Bv();
  Kv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1689047478917,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1689047478920,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1689222373411,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|ad93cb1c-8e5c-3f2f-b64c-097081178748",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|ad93cb1c-8e5c-3f2f-b64c-097081178748",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690427990236,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|ad93cb1c-8e5c-3f2f-b64c-097081178748",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|ad93cb1c-8e5c-3f2f-b64c-097081178748",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690427990290,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|248a446c-ad93-6d94-ebab-b5a6fba70d7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|248a446c-ad93-6d94-ebab-b5a6fba70d7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428262121,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|248a446c-ad93-6d94-ebab-b5a6fba70d7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|248a446c-ad93-6d94-ebab-b5a6fba70d7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428262122,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|6af77cc0-7a4b-7379-b446-5ab095cf5998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|6af77cc0-7a4b-7379-b446-5ab095cf5998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428413839,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|6af77cc0-7a4b-7379-b446-5ab095cf5998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|6af77cc0-7a4b-7379-b446-5ab095cf5998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428413895,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|73bf7294-6d53-fbe9-b859-a62770b5cfbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|73bf7294-6d53-fbe9-b859-a62770b5cfbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428449847,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|73bf7294-6d53-fbe9-b859-a62770b5cfbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|73bf7294-6d53-fbe9-b859-a62770b5cfbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428449849,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|d1fdcf8d-1bed-21c4-b00e-44a35e19ca5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|d1fdcf8d-1bed-21c4-b00e-44a35e19ca5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428477689,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|d1fdcf8d-1bed-21c4-b00e-44a35e19ca5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|d1fdcf8d-1bed-21c4-b00e-44a35e19ca5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428477765,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|398c1c3a-8da5-8f5f-1cbf-0271daf04cef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|398c1c3a-8da5-8f5f-1cbf-0271daf04cef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428501617,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|398c1c3a-8da5-8f5f-1cbf-0271daf04cef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|398c1c3a-8da5-8f5f-1cbf-0271daf04cef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428501672,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|78530988-c3b2-4b00-2156-937cd33e88c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|78530988-c3b2-4b00-2156-937cd33e88c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428524326,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|78530988-c3b2-4b00-2156-937cd33e88c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|78530988-c3b2-4b00-2156-937cd33e88c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428524331,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|6419c0a9-1afd-b0dc-eafd-77a325e8d6e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|6419c0a9-1afd-b0dc-eafd-77a325e8d6e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428551897,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|6419c0a9-1afd-b0dc-eafd-77a325e8d6e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|6419c0a9-1afd-b0dc-eafd-77a325e8d6e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428551899,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|af15f645-38e9-b01e-32e0-d3116b650379",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|af15f645-38e9-b01e-32e0-d3116b650379",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428574366,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|af15f645-38e9-b01e-32e0-d3116b650379",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|af15f645-38e9-b01e-32e0-d3116b650379",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428574367,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|2c6adda8-b04b-2ca0-51e6-525b9148d9b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|2c6adda8-b04b-2ca0-51e6-525b9148d9b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428589797,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|2c6adda8-b04b-2ca0-51e6-525b9148d9b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|2c6adda8-b04b-2ca0-51e6-525b9148d9b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428589857,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|3d1dd364-2a69-024d-e904-10c63275390c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|3d1dd364-2a69-024d-e904-10c63275390c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428615977,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|3d1dd364-2a69-024d-e904-10c63275390c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|3d1dd364-2a69-024d-e904-10c63275390c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428616105,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|df354bc9-a801-4766-1142-a2d0e0022044",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|df354bc9-a801-4766-1142-a2d0e0022044",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428651161,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|df354bc9-a801-4766-1142-a2d0e0022044",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|df354bc9-a801-4766-1142-a2d0e0022044",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428651223,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|3e848582-90cc-0573-e3e0-8d13ed4a1fee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|3e848582-90cc-0573-e3e0-8d13ed4a1fee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428671352,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|3e848582-90cc-0573-e3e0-8d13ed4a1fee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|3e848582-90cc-0573-e3e0-8d13ed4a1fee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428671426,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|ff8b5f82-1924-9051-c88d-e19a1b2c36b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|ff8b5f82-1924-9051-c88d-e19a1b2c36b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428704163,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|ff8b5f82-1924-9051-c88d-e19a1b2c36b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|ff8b5f82-1924-9051-c88d-e19a1b2c36b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428704166,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|4fae2f6f-0691-62a6-dd64-ab7f422bb449",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|4fae2f6f-0691-62a6-dd64-ab7f422bb449",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428723162,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64aac2cf3e57b0b94358bac6|4fae2f6f-0691-62a6-dd64-ab7f422bb449",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64aac2cf3e57b0b94358bac6|4fae2f6f-0691-62a6-dd64-ab7f422bb449",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690428723241,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20e7964b91d6bd0045325",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20e7964b91d6bd0045325",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690515551995,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20e935be66bd1bddc5592",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20e935be66bd1bddc5592",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690517183451,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f54f28c42e30c26608e|5971f904-47ba-7b3d-db93-e470a902e884",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f54f28c42e30c26608e|5971f904-47ba-7b3d-db93-e470a902e884",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690796287838,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f54f28c42e30c26608e|99505996-b17f-8015-6370-9fbb5b6428c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f54f28c42e30c26608e|99505996-b17f-8015-6370-9fbb5b6428c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690796737792,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f54f28c42e30c26608e|99505996-b17f-8015-6370-9fbb5b6428c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f54f28c42e30c26608e|99505996-b17f-8015-6370-9fbb5b6428c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690796737793,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f886c291b57a5c0ebdc",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f886c291b57a5c0ebdc",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690872857907,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f54f28c42e30c26608e|15c5c9da-f6c0-e72c-b6bb-c8f60cf7a970",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f54f28c42e30c26608e|15c5c9da-f6c0-e72c-b6bb-c8f60cf7a970",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690888361451,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f9564b91d6bd005a4fb|ff32dece-936b-5055-e404-c87221e696db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f9564b91d6bd005a4fb|ff32dece-936b-5055-e404-c87221e696db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690888873652,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20f9564b91d6bd005a4fb|ff32dece-936b-5055-e404-c87221e696db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20f9564b91d6bd005a4fb|ff32dece-936b-5055-e404-c87221e696db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690888873652,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20e935be66bd1bddc5592|89638597-c7d2-1547-1d12-3a7e04ab44ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20e935be66bd1bddc5592|89638597-c7d2-1547-1d12-3a7e04ab44ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690888930397,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c20e935be66bd1bddc5592|89638597-c7d2-1547-1d12-3a7e04ab44ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c20e935be66bd1bddc5592|89638597-c7d2-1547-1d12-3a7e04ab44ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690888930434,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Navbar Menu Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
                },
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
                },
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-humburger-icon",
                  selectorGuids: ["ba21c623-a7ef-0285-8fbc-ff4c935a4434"],
                },
                value: "none",
              },
            },
            {
              id: "a-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-close-icon",
                  selectorGuids: ["5cafa67f-255c-b615-8274-9eaf7af24a33"],
                },
                value: "block",
              },
            },
            {
              id: "a-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-brand-dark",
                  selectorGuids: ["5f757b93-0069-0a61-889b-07950c9de0ee"],
                },
                value: "none",
              },
            },
            {
              id: "a-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-brand-light",
                  selectorGuids: ["1d1db58a-0c3b-ecb3-9721-8995e0f52453"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1689047487583,
    },
    "a-2": {
      id: "a-2",
      title: "Navbar Menu Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
                },
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "c87e6653-5d09-b97b-2d6a-ee93d9db713c",
                },
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.button-s",
                  selectorGuids: [
                    "22eb8811-f81e-432c-cd45-ba103a2a8186",
                    "85c47886-1f62-2eb4-c59e-c01a92ad759c",
                  ],
                },
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "78211473",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "5bf7e96c",
                rValue: 3,
                bValue: 18,
                gValue: 7,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-humburger-icon",
                  selectorGuids: ["ba21c623-a7ef-0285-8fbc-ff4c935a4434"],
                },
                value: "block",
              },
            },
            {
              id: "a-2-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-close-icon",
                  selectorGuids: ["5cafa67f-255c-b615-8274-9eaf7af24a33"],
                },
                value: "none",
              },
            },
            {
              id: "a-2-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-brand-dark",
                  selectorGuids: ["5f757b93-0069-0a61-889b-07950c9de0ee"],
                },
                value: "block",
              },
            },
            {
              id: "a-2-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".navbar-brand-light",
                  selectorGuids: ["1d1db58a-0c3b-ecb3-9721-8995e0f52453"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1689047487583,
    },
    "a-3": {
      id: "a-3",
      title: "Content Marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".content-to-marquee",
                  selectorGuids: ["393bda1d-27ec-c9af-479a-689baa3407a8"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 65000,
                target: {
                  selector: ".content-to-marquee",
                  selectorGuids: ["393bda1d-27ec-c9af-479a-689baa3407a8"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".content-to-marquee",
                  selectorGuids: ["393bda1d-27ec-c9af-479a-689baa3407a8"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1689222383026,
    },
    "a-6": {
      id: "a-6",
      title: "Preview Page Card On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["4ae05e2f-f727-4cf5-df70-8f737cc33ca9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["4ae05e2f-f727-4cf5-df70-8f737cc33ca9"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["4ae05e2f-f727-4cf5-df70-8f737cc33ca9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1690428001335,
    },
    "a-7": {
      id: "a-7",
      title: "Preview Page Card On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["4ae05e2f-f727-4cf5-df70-8f737cc33ca9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1690428207532,
    },
    "a-8": {
      id: "a-8",
      title: "More Blogs Shown",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "64c20f54f28c42e30c26608e|69a7ab4a-c7e5-6857-862c-86e5df82ec3e",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  id: "64c20f54f28c42e30c26608e|009c6861-f48f-2524-300f-0764b7e22882",
                },
                value: "block",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "64c20f54f28c42e30c26608e|15c5c9da-f6c0-e72c-b6bb-c8f60cf7a970",
                },
                value: "block",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "64c20f54f28c42e30c26608e|69a7ab4a-c7e5-6857-862c-86e5df82ec3e",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1690796087066,
    },
    "a-9": {
      id: "a-9",
      title: "More Blogs Hiden",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  id: "64c20f54f28c42e30c26608e|009c6861-f48f-2524-300f-0764b7e22882",
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "64c20f54f28c42e30c26608e|15c5c9da-f6c0-e72c-b6bb-c8f60cf7a970",
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  id: "64c20f54f28c42e30c26608e|69a7ab4a-c7e5-6857-862c-86e5df82ec3e",
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1690796434243,
    },
    "a-4": {
      id: "a-4",
      title: "Dropdown Menu Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon._24x24",
                  selectorGuids: [
                    "1118da6d-10cc-be99-9bf3-f1e6396a955e",
                    "ffccca10-9703-30a0-0394-f2d752c8e5c3",
                  ],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1689232947560,
    },
    "a-5": {
      id: "a-5",
      title: "Dropdown Menu Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon._24x24",
                  selectorGuids: [
                    "1118da6d-10cc-be99-9bf3-f1e6396a955e",
                    "ffccca10-9703-30a0-0394-f2d752c8e5c3",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1689232947560,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
