(() => {
    "use strict";
    var n = {
            6948: (n, e, t) => {
                t.d(e, {
                    Z: () => r
                });
                var i = t(8081),
                    a = t.n(i),
                    o = t(3645),
                    c = t.n(o)()(a());
                c.push([n.id, '\n/* CSS checkbox buttons for icons */\n\n.btn.checkbtn:focus {\n  outline: none !important;\n}\n\n.btn.checkbtn.disabled > .check-btn-icon-yes {\n\tpointer-events: none;\n}\n.btn.checkbtn.disabled > .check-btn-icon-no {\n\tpointer-events: none;\n}\n\n\n/*** BS3 ***/\n/* show "yes" icon if active */\n.btn.checkbtn .check-btn-icon-yes {\n\topacity: 0; display: none;\n}\n.btn.checkbtn.active .check-btn-icon-yes {\n\topacity: 1; display: inline-block;\n}\n\n/* show "no" icon if not active */\n.btn.checkbtn.active .check-btn-icon-no {\n\topacity: 0; display: none;\n}\n.btn.checkbtn .check-btn-icon-no {\n\topacity: 1; display: inline-block;\n}\n\n\n/*** BS5 ***/\n/* show "yes" icon if checkbox is checked */\n.btn.checkbtn>.check-btn-icon-yes {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn-check:checked+.btn.checkbtn>.check-btn-icon-yes,\n  .btn-check:active+.btn.checkbtn>.check-btn-icon-yes{\n\topacity: 1 !important;\n\tdisplay: inline-block !important;\n}\n\n/* show "no" icon if checkbox not checked */\n.btn-check:checked+.btn.checkbtn>.check-btn-icon-no {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn.checkbtn>.check-btn-icon-no {\n\topacity: 1;\n\tdisplay: inline-block;\n}\n\n\n\n', ""]);
                const r = c
            },
            820: (n, e, t) => {
                t.d(e, {
                    Z: () => r
                });
                var i = t(8081),
                    a = t.n(i),
                    o = t(3645),
                    c = t.n(o)()(a());
                c.push([n.id, '\n/* CSS radio buttons for icons */\n\n.btn.radiobtn:focus {\n  outline: none !important;\n}\n\n.btn.radiobtn.disabled > .radio-btn-icon-yes {\n\tpointer-events: none;\n}\n.btn.radiobtn.disabled > .radio-btn-icon-no {\n\tpointer-events: none;\n}\n\n/*** BS3 ***/\n/* show "yes" icon if active */\n.btn.radiobtn .radio-btn-icon-yes {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn.radiobtn.active .radio-btn-icon-yes {\n\topacity: 1;\n\tdisplay: inline-block;\n}\n\n/* show "no" icon if not active */\n.btn.radiobtn.active .radio-btn-icon-no {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn.radiobtn .radio-btn-icon-no {\n\topacity: 1;\n\tdisplay: inline-block;\n}\n\n\n/*** BS5 ***/\n/* show "yes" icon if radio checked */\n.btn.radiobtn>.radio-btn-icon-yes {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn-check:checked+.btn.radiobtn>.radio-btn-icon-yes,\n  .btn-check:active+.btn.radiobtn>.radio-btn-icon-yes{\n\topacity: 1 !important;\n\tdisplay: inline-block !important;\n}\n\n/* show "no" icon if radio not checked */\n.btn-check:checked+.btn.radiobtn>.radio-btn-icon-no {\n\topacity: 0;\n\tdisplay: none;\n}\n.btn.radiobtn>.radio-btn-icon-no {\n\topacity: 1;\n\tdisplay: inline-block;\n}\n\n', ""]);
                const r = c
            },
            3645: n => {
                n.exports = function(n) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var t = "",
                                i = void 0 !== e[5];
                            return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), i && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), i && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
                        })).join("")
                    }, e.i = function(n, t, i, a, o) {
                        "string" == typeof n && (n = [
                            [null, n, void 0]
                        ]);
                        var c = {};
                        if (i)
                            for (var r = 0; r < this.length; r++) {
                                var s = this[r][0];
                                null != s && (c[s] = !0)
                            }
                        for (var d = 0; d < n.length; d++) {
                            var l = [].concat(n[d]);
                            i && c[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), t && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = t) : l[2] = t), a && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = a) : l[4] = "".concat(a)), e.push(l))
                        }
                    }, e
                }
            },
            8081: n => {
                n.exports = function(n) {
                    return n[1]
                }
            },
            3379: n => {
                var e = [];

                function t(n) {
                    for (var t = -1, i = 0; i < e.length; i++)
                        if (e[i].identifier === n) {
                            t = i;
                            break
                        }
                    return t
                }

                function i(n, i) {
                    for (var o = {}, c = [], r = 0; r < n.length; r++) {
                        var s = n[r],
                            d = i.base ? s[0] + i.base : s[0],
                            l = o[d] || 0,
                            p = "".concat(d, " ").concat(l);
                        o[d] = l + 1;
                        var u = t(p),
                            b = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5]
                            };
                        if (-1 !== u) e[u].references++, e[u].updater(b);
                        else {
                            var h = a(b, i);
                            i.byIndex = r, e.splice(r, 0, {
                                identifier: p,
                                updater: h,
                                references: 1
                            })
                        }
                        c.push(p)
                    }
                    return c
                }

                function a(n, e) {
                    var t = e.domAPI(e);
                    return t.update(n),
                        function(e) {
                            if (e) {
                                if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
                                t.update(n = e)
                            } else t.remove()
                        }
                }
                n.exports = function(n, a) {
                    var o = i(n = n || [], a = a || {});
                    return function(n) {
                        n = n || [];
                        for (var c = 0; c < o.length; c++) {
                            var r = t(o[c]);
                            e[r].references--
                        }
                        for (var s = i(n, a), d = 0; d < o.length; d++) {
                            var l = t(o[d]);
                            0 === e[l].references && (e[l].updater(), e.splice(l, 1))
                        }
                        o = s
                    }
                }
            },
            569: n => {
                var e = {};
                n.exports = function(n, t) {
                    var i = function(n) {
                        if (void 0 === e[n]) {
                            var t = document.querySelector(n);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                t = t.contentDocument.head
                            } catch (n) {
                                t = null
                            }
                            e[n] = t
                        }
                        return e[n]
                    }(n);
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(t)
                }
            },
            9216: n => {
                n.exports = function(n) {
                    var e = document.createElement("style");
                    return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
                }
            },
            3565: (n, e, t) => {
                n.exports = function(n) {
                    var e = t.nc;
                    e && n.setAttribute("nonce", e)
                }
            },
            7795: n => {
                n.exports = function(n) {
                    var e = n.insertStyleElement(n);
                    return {
                        update: function(t) {
                            ! function(n, e, t) {
                                var i = "";
                                t.supports && (i += "@supports (".concat(t.supports, ") {")), t.media && (i += "@media ".concat(t.media, " {"));
                                var a = void 0 !== t.layer;
                                a && (i += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), i += t.css, a && (i += "}"), t.media && (i += "}"), t.supports && (i += "}");
                                var o = t.sourceMap;
                                o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleTagTransform(i, n, e.options)
                            }(e, n, t)
                        },
                        remove: function() {
                            ! function(n) {
                                if (null === n.parentNode) return !1;
                                n.parentNode.removeChild(n)
                            }(e)
                        }
                    }
                }
            },
            4589: n => {
                n.exports = function(n, e) {
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
            }
        },
        e = {};

    function t(i) {
        var a = e[i];
        if (void 0 !== a) return a.exports;
        var o = e[i] = {
            id: i,
            exports: {}
        };
        return n[i](o, o.exports, t), o.exports
    }
    t.n = n => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return t.d(e, {
            a: e
        }), e
    }, t.d = (n, e) => {
        for (var i in e) t.o(e, i) && !t.o(n, i) && Object.defineProperty(n, i, {
            enumerable: !0,
            get: e[i]
        })
    }, t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), t.nc = void 0, (() => {
        const n = jQuery;
        var e = t.n(n);

        function i(n, e) {
            if (void 0 !== n) {
                if (1 !== e.length) throw new Error("labelNode must be of length 1");
                Array.isArray(n) && 0 === n.length ? e.addClass("shiny-label-null") : (e.html(n), e.removeClass("shiny-label-null"))
            }
        }
        // Shiny;
        var a = t(3379),
            o = t.n(a),
            c = t(7795),
            r = t.n(c),
            s = t(569),
            d = t.n(s),
            l = t(3565),
            p = t.n(l),
            u = t(9216),
            b = t.n(u),
            h = t(4589),
            f = t.n(h),
            y = t(6948),
            v = {};
        v.styleTagTransform = f(), v.setAttributes = p(), v.insert = d().bind(null, "head"), v.domAPI = r(), v.insertStyleElement = b(), o()(y.Z, v), y.Z && y.Z.locals && y.Z.locals;
        var m = t(820),
            k = {};
        k.styleTagTransform = f(), k.setAttributes = p(), k.insert = d().bind(null, "head"), k.domAPI = r(), k.insertStyleElement = b(), o()(m.Z, k), m.Z && m.Z.locals && m.Z.locals;
        var g = new Shiny.InputBinding;
        e().extend(g, {
            find: function(n) {
                return e()(n).find(".checkbox-group-buttons")
            },
            getId: function(n) {
                return n.id
            },
            getValue: function(n) {
                for (var t = e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"]:checked'), i = new Array(t.length), a = 0; a < t.length; a++) i[a] = t[a].value;
                return i
            },
            setValue: function(n, t) {
                if (e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"]').prop("checked", !1), e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"]').parent().removeClass("active"), e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"]').parent().blur(), t instanceof Array)
                    for (var i = 0; i < t.length; i++) e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t[i]) + '"]').parent().addClass("active"), e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t[i]) + '"]').prop("checked", !0);
                else e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t) + '"]').parent().addClass("active"), e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t) + '"]').prop("checked", !0)
            },
            subscribe: function(n, t) {
                e()(n).on("change.checkboxGroupButtonsBinding", (function(n) {
                    t()
                }))
            },
            unsubscribe: function(n) {
                e()(n).off(".checkboxGroupButtonsBinding")
            },
            getState: function(n) {
                for (var t = e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"]'), i = new Array(t.length), a = 0; a < i.length; a++) i[a] = {
                    value: t[a].value
                };
                return {
                    value: this.getValue(n),
                    options: i
                }
            },
            receiveMessage: function(n, t) {
                if (t.hasOwnProperty("label")) {
                    var a = e()("#" + n.id + "-label");
                    i(t.label, a)
                }
                var o = e()(n);
                if (t.hasOwnProperty("options") && (o.find("div.btn-group-container-sw").empty(), o.find("div.btn-group-container-sw").append(t.options)), t.hasOwnProperty("selected") && this.setValue(n, t.selected), t.disabled ? (o.find("button").attr("disabled", "disabled"), o.find("button").addClass("disabled"), o.find("label").addClass("disabled")) : (o.find("button").removeAttr("disabled"), o.find("button").removeClass("disabled"), o.find("label").removeClass("disabled")), t.hasOwnProperty("disabledChoices"))
                    for (var c = 0; c < t.disabledChoices.length; c++) {
                        var r = e()('input:checkbox[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t.disabledChoices[c]) + '"]');
                        r.next("label").addClass("disabled"), r.parent().attr("disabled", "disabled").addClass("disabled")
                    }
                e()(n).trigger("change")
            }
        }), Shiny.inputBindings.register(g, "shinyWidgets.checkboxGroupButtonsInput");
        var S = new Shiny.InputBinding;
        e().extend(S, {
            find: function(n) {
                return e()(n).find(".radio-group-buttons")
            },
            getId: function(n) {
                return n.id
            },
            getValue: function(n) {
                var t = e()('input:radio[name="' + Shiny.$escape(n.id) + '"]:checked').val();
                return void 0 === t ? null : t
            },
            setValue: function(n, t) {
                e()('input:radio[name="' + Shiny.$escape(n.id) + '"]').parent().removeClass("active"), e()('input:radio[name="' + Shiny.$escape(n.id) + '"]').prop("checked", !1), t.length > 0 && (e()('input:radio[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t) + '"]').prop("checked", !0), e()('input:radio[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t) + '"]').parent().addClass("active"))
            },
            subscribe: function(n, t) {
                e()(n).on("change.radioGroupButtonsBinding", (function(n) {
                    t()
                }))
            },
            unsubscribe: function(n) {
                e()(n).off(".radioGroupButtonsBinding")
            },
            getState: function(n) {
                for (var t = e()('input:radio[name="' + Shiny.$escape(n.id) + '"]'), i = new Array(t.length), a = 0; a < i.length; a++) i[a] = {
                    value: t[a].value,
                    label: this._getLabel(t[a])
                };
                return {
                    label: e()(n).parent().find('label[for="' + Shiny.$escape(n.id) + '"]').text(),
                    value: this.getValue(n),
                    options: i
                }
            },
            receiveMessage: function(n, t) {
                if (t.hasOwnProperty("label")) {
                    var a = e()("#" + n.id + "-label");
                    i(t.label, a)
                }
                var o = e()(n);
                if (t.hasOwnProperty("options") && (o.find("div.btn-group-container-sw").empty(), o.find("div.btn-group-container-sw").append(t.options)), t.hasOwnProperty("selected") && this.setValue(n, t.selected), t.disabled ? (o.find("button").attr("disabled", "disabled"), o.find("button").addClass("disabled"), o.find("label").addClass("disabled")) : (o.find("button").removeAttr("disabled"), o.find("button").removeClass("disabled"), o.find("label").removeClass("disabled")), t.hasOwnProperty("disabledChoices"))
                    for (var c = 0; c < t.disabledChoices.length; c++) {
                        var r = e()('input:radio[name="' + Shiny.$escape(n.id) + '"][value="' + Shiny.$escape(t.disabledChoices[c]) + '"]');
                        r.next("label").addClass("disabled"), r.parent().attr("disabled", "disabled").addClass("disabled")
                    }
                e()(n).trigger("change")
            }
        }), Shiny.inputBindings.register(S, "shinyWidgets.radioGroupButtonsInput")
    })()
})();