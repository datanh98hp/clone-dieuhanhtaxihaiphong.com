(window.flatsomeJsonp = window.flatsomeJsonp || []).push([
  [0],
  {
    56: function (t, i, a) {
      "use strict";
      a.r(i),
        a.d(i, "CountUp", function () {
          return n;
        });
      var s = function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var i, a = 1, s = arguments.length; a < s; a++)
                for (var n in (i = arguments[a]))
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              return t;
            }).apply(this, arguments);
        },
        n = (function () {
          function t(t, i, a) {
            var n = this;
            (this.target = t),
              (this.endVal = i),
              (this.options = a),
              (this.version = "2.0.8"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.count = function (t) {
                n.startTime || (n.startTime = t);
                var i = t - n.startTime;
                (n.remaining = n.duration - i),
                  n.useEasing
                    ? n.countDown
                      ? (n.frameVal =
                          n.startVal -
                          n.easingFn(i, 0, n.startVal - n.endVal, n.duration))
                      : (n.frameVal = n.easingFn(
                          i,
                          n.startVal,
                          n.endVal - n.startVal,
                          n.duration
                        ))
                    : n.countDown
                    ? (n.frameVal =
                        n.startVal - (n.startVal - n.endVal) * (i / n.duration))
                    : (n.frameVal =
                        n.startVal +
                        (n.endVal - n.startVal) * (i / n.duration)),
                  n.countDown
                    ? (n.frameVal =
                        n.frameVal < n.endVal ? n.endVal : n.frameVal)
                    : (n.frameVal =
                        n.frameVal > n.endVal ? n.endVal : n.frameVal),
                  (n.frameVal = Number(
                    n.frameVal.toFixed(n.options.decimalPlaces)
                  )),
                  n.printValue(n.frameVal),
                  i < n.duration
                    ? (n.rAF = requestAnimationFrame(n.count))
                    : null !== n.finalEndVal
                    ? n.update(n.finalEndVal)
                    : n.callback && n.callback();
              }),
              (this.formatNumber = function (t) {
                var i,
                  a,
                  s,
                  e,
                  r = t < 0 ? "-" : "";
                i = Math.abs(t).toFixed(n.options.decimalPlaces);
                var o = (i += "").split(".");
                if (
                  ((a = o[0]),
                  (s = o.length > 1 ? n.options.decimal + o[1] : ""),
                  n.options.useGrouping)
                ) {
                  e = "";
                  for (var l = 0, h = a.length; l < h; ++l)
                    0 !== l && l % 3 == 0 && (e = n.options.separator + e),
                      (e = a[h - l - 1] + e);
                  a = e;
                }
                return (
                  n.options.numerals &&
                    n.options.numerals.length &&
                    ((a = a.replace(/[0-9]/g, function (t) {
                      return n.options.numerals[+t];
                    })),
                    (s = s.replace(/[0-9]/g, function (t) {
                      return n.options.numerals[+t];
                    }))),
                  r + n.options.prefix + a + s + n.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, i, a, s) {
                return (a * (1 - Math.pow(2, (-10 * t) / s)) * 1024) / 1023 + i;
              }),
              (this.options = s(s({}, this.defaults), a)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(i)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined");
          }
          return (
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              this.countDown = this.startVal > t;
              var i = t - this.startVal;
              if (Math.abs(i) > this.options.smartEasingThreshold) {
                this.finalEndVal = t;
                var a = this.countDown ? 1 : -1;
                (this.endVal = t + a * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                ((this.callback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  this.finalEndVal || this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var i = this.formattingFn(t);
              "INPUT" === this.el.tagName
                ? (this.el.value = i)
                : "text" === this.el.tagName || "tspan" === this.el.tagName
                ? (this.el.textContent = i)
                : (this.el.innerHTML = i);
            }),
            (t.prototype.ensureNumber = function (t) {
              return "number" == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function (t) {
              var i = Number(t);
              return this.ensureNumber(i)
                ? i
                : ((this.error = "[CountUp] invalid start or end value: " + t),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
  },
]);
