(this.webpackJsonpcontacts = this.webpackJsonpcontacts || []).push([
        [0], {
                13: function (e, t, c) {},
                14: function (e, t, c) {},
                16: function (e, t, c) {
                        "use strict";
                        c.r(t);
                        var s = c(1),
                                n = c.n(s),
                                a = c(7),
                                i = c.n(a),
                                l = (c(13), c(14), c(2)),
                                r = c(8),
                                o = c(0),
                                j = Object(s.createContext)([]),
                                d = function (e) {
                                        var t = Object(s.useState)(r.a),
                                                c = Object(l.a)(t, 2),
                                                n = c[0],
                                                a = c[1];
                                        return Object(s.useEffect)((function () {
                                                console.log("Save State here")
                                        })),
                                        Object(o.jsx)(j.Provider, {
                                                value: [n, a],
                                                children: e.children
                                        })
                                },
                                u = {
                                        phone: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                                        whatsApp: "Whats App",
                                        telegram: "Telegram",
                                        viber: "Viber"
                                },
                                b = function () {
                                        var e = Object(s.useContext)(j),
                                                t = Object(l.a)(e, 1)[0].filter((function (e) {
                                                        return "products" === e.type
                                                }))[0];
                                        return t && t.blocksDividers ? Object(o.jsx)("div", {
                                                className: "check-divider"
                                        }) : ""
                                },
                                m = function () {
                                        var e = Object(s.useContext)(j);
                                        return Object(l.a)(e, 1)[0].filter((function (e) {
                                                return "products" === e.type
                                        }))[0].selfDividers ? Object(o.jsx)("div", {
                                                className: "check-divider"
                                        }) : ""
                                },
                                p = function (e) {
                                        var t = e.itemProps,
                                                c = t.visible,
                                                s = t.image;
                                        return c ? Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsx)("div", {
                                                        className: "check-logo",
                                                        children: Object(o.jsx)("img", {
                                                                className: "check-logo-img",
                                                                src: s,
                                                                alt: ""
                                                        })
                                                }), Object(o.jsx)(b, {})]
                                        }) : ""
                                },
                                // x = function () {
                                //         return Object(o.jsx)("div", {
                                //                 className: "check-entry entry-qr",
                                //                 children: Object(o.jsx)("div", {
                                //                         className: "entry-qr",
                                //                         children: Object(o.jsx)("img", {
                                //                                 className: "entry-qr-img",
                                //                                 src: "assets/qr-prod.svg",
                                //                                 alt: ""
                                //                         })
                                //                 })
                                //         })
                                // },
                                h = function (e) {
                                        var t = e.itemProps,
                                                c = t.visible,
                                                s = t.message,
                                                n = t.title;
                                        return c ? Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsxs)("div", {
                                                        className: "check-entry",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "entry-title",
                                                                children: n
                                                        }), Object(o.jsx)("div", {
                                                                children: s
                                                        })]
                                                }), Object(o.jsx)(b, {})]
                                        }) : ""
                                },
                                v = function (e) {
                                        var t = e.itemProps,
                                                c = t.visible,
                                                s = t.fields,
                                                n = t.title,
                                                a = t.key;
                                        return c ? Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsxs)("div", {
                                                        className: "check-entry entry-contacts",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "entry-title",
                                                                children: n
                                                        }), null === s || void 0 === s ? void 0 : s.map((function (e) {
                                                                var t = e.relatives && e.relatives.length ? e.relatives.map((function (e) {
                                                                        return u[e]
                                                                })).join(", ") : e.label;
                                                                return Object(o.jsx)(O, {
                                                                        label: t,
                                                                        value: null === e || void 0 === e ? void 0 : e.value
                                                                })
                                                        }))]
                                                }, a), Object(o.jsx)(b, {})]
                                        }) : ""
                                },
                                O = function (e) {
                                        var t = e.label,
                                                c = e.value;
                                        return Object(o.jsxs)("div", {
                                                className: "entry-contact",
                                                children: [Object(o.jsx)("div", {
                                                        className: "entry-contact-label",
                                                        children: t
                                                }), Object(o.jsx)("div", {
                                                        className: "entry-contact-value",
                                                        children: c
                                                })]
                                        })
                                },
                                f = function (e) {
                                        var t = e.itemProps,
                                                c = t.visible,
                                                s = t.url,
                                                n = t.title;
                                        return c ? Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsxs)("div", {
                                                        className: "check-entry entry-site",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "entry-title",
                                                                children: n
                                                        }), Object(o.jsxs)("div", {
                                                                className: "entry-site-qr",
                                                                children: [Object(o.jsx)("img", {
                                                                        className: "entry-site-qr-img",
                                                                        src: "assets/qr-site.svg",
                                                                        alt: ""
                                                                }), Object(o.jsx)("div", {
                                                                        className: "entry-site-url",
                                                                        children: s
                                                                })]
                                                        })]
                                                }), Object(o.jsx)(b, {})]
                                        }) : ""
                                },
                                g = function (e) {
                                        var t = e.label,
                                                c = e.value;
                                        return Object(o.jsxs)("div", {
                                                className: "check-entry entry-columns",
                                                children: [Object(o.jsx)("div", {
                                                        className: "entry-label",
                                                        children: t
                                                }), Object(o.jsx)("div", {
                                                        className: "entry-right",
                                                        children: c
                                                })]
                                        })
                                },
                                C = function () {
                                        return Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsxs)("div", {
                                                        className: "check-entry",
                                                        children: [Object(o.jsx)("div", { 
                                                                className: "entry-title", 
                                                                children: "\u041a\u0410\u0421\u0421\u041e\u0412\u042b\u0419 \u0427\u0415\u041a" 
                                                        })] 
                                                }), Object(o.jsx)(g, {
                                                        label: "\u0422\u043e\u0432\u0430\u0440 1",
                                                        value: "150 \u20bd"
                                                }), Object(o.jsx)(m, {}), Object(o.jsx)(g, {
                                                        label: "\u0422\u043e\u0432\u0430\u0440 2",
                                                        value: "250 \u20bd"
                                                }), Object(o.jsx)(m, {}), Object(o.jsx)(g, {
                                                        label: "\u0422\u043e\u0432\u0430\u0440 3",
                                                        value: "1200 \u20bd"
                                                }), Object(o.jsx)(m, {}), Object(o.jsx)(g, {
                                                        label: "\u0418\u0422\u041e\u0413",
                                                        value: "1550 \u20bd"
                                                }), Object(o.jsx)(b, {})]
                                        })
                                },
                                y = function () {
                                        var e = Object(s.useContext)(j),
                                                t = Object(l.a)(e, 1)[0];
                                        return Object(o.jsx)("div", {
                                                className: "check-view",
                                                children: [Object(o.jsx)("div", {
                                                        className: "check-letter",
                                                        children: null === t || void 0 === t ? void 0 : t.map((function (e) {
                                                                switch (e.type) {
                                                                case "logo":
                                                                        return Object(o.jsx)(p, {
                                                                                itemProps: e
                                                                        });
                                                                case "products":
                                                                        return Object(o.jsx)(C, {});
                                                                case "message":
                                                                        return Object(o.jsx)(h, {
                                                                                itemProps: e
                                                                        });
                                                                case "contacts":
                                                                        return Object(o.jsx)(v, {
                                                                                itemProps: e
                                                                        });
                                                                case "site":
                                                                        return Object(o.jsx)(f, {
                                                                                itemProps: e
                                                                        })
                                                                }
                                                        }))
                                                }), Object(o.jsx)("button", { // добавила кнопку
                                                        className: "button-toggle button--close",
                                                        type: "button",
                                                        children: "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f\u0020\u043a\u0020\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c"
                                                })]
                                        })
                                },
                                L = function (e) {
                                        var t = e.removeDisabled,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = !c,
                                                u = i.length - 1 === c;
                                        return Object(o.jsxs)("div", {
                                                className: "control-actions",
                                                children: [t ? null : Object(o.jsx)("button", {
                                                        className: "action action-remove",
                                                        onClick: function () {
                                                                var e = i.filter((function (e, t) {
                                                                        return t !== c
                                                                }));
                                                                r(e)
                                                        }
                                                }), Object(o.jsx)("button", {
                                                        className: "action action-up",
                                                        onClick: function () {
                                                                var e = i.map((function (e, t) {
                                                                        return t === c - 1 ? i[c] : t === c ? i[c - 1] : e
                                                                }));
                                                                r(e)
                                                        },
                                                        hidden: d
                                                }), Object(o.jsx)("button", {
                                                        className: "action action-down",
                                                        onClick: function () {
                                                                var e = i.map((function (e, t) {
                                                                        return t === c ? i[c + 1] : t === c + 1 ? i[c] : e
                                                                }));
                                                                r(e)
                                                        },
                                                        hidden: u
                                                })]
                                        })
                                },
                                N = function (e, t, c, s, n) {
                                        n(s.map((function (t) {
                                                return t.key === c && (t.visible = e.target.checked),
                                                t
                                        })))
                                },
                                k = function (e) {
                                        var t = e.itemProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = Object(s.useState)(null),
                                                u = Object(l.a)(d, 2),
                                                b = u[0],
                                                m = u[1],
                                                p = Object(s.useState)(null),
                                                x = Object(l.a)(p, 2),
                                                h = x[0],
                                                v = x[1],
                                                O = Object(s.useRef)(),
                                                f = t.type,
                                                g = t.key,
                                                C = t.image,
                                                y = t.displayName;
                                        return Object(s.useEffect)((function () {
                                                if (b) {
                                                        var e = new FileReader;
                                                        e.onloadend = function () {
                                                                v(e.result)
                                                        },
                                                        e.readAsDataURL(b)
                                                }
                                        }), [b]),
                                        Object(s.useEffect)((function () {
                                                if (h) {
                                                        var e = i.map((function (e, t) {
                                                                return e.key === g && (e.image = h),
                                                                e
                                                        }));
                                                        r(e)
                                                }
                                        }), [h]),
                                        Object(o.jsxs)("div", {
                                                className: "control-item",
                                                children: [Object(o.jsx)(L, {
                                                        index: c
                                                }), Object(o.jsx)("div", {
                                                        className: "control-item-title",
                                                        children: Object(o.jsx)("div", {
                                                                className: "item-trigger",
                                                                children: Object(o.jsxs)("label", {
                                                                        className: "trigger",
                                                                        children: [Object(o.jsx)("input", {
                                                                                type: "checkbox",
                                                                                defaultChecked: !0,
                                                                                onChange: function (e) {
                                                                                        N(e, f, g, i, r)
                                                                                },
                                                                                className: "trigger-input"
                                                                        }), Object(o.jsx)("div", {
                                                                                className: "trigger-shape"
                                                                        }), Object(o.jsx)("span", {
                                                                                className: "trigger-label",
                                                                                children: y
                                                                        })]
                                                                })
                                                        })
                                                }), Object(o.jsxs)("div", {
                                                        className: "control-logo",
                                                        children: [Object(o.jsx)("img", {
                                                                className: "control-logo-img",
                                                                src: C,
                                                                alt: ""
                                                        }), Object(o.jsxs)("form", {
                                                                children: [Object(o.jsx)("input", {
                                                                        type: "file",
                                                                        name: "image",
                                                                        ref: O,
                                                                        style: {
                                                                                display: "none"
                                                                        },
                                                                        accept: "image/*",
                                                                        onChange: function (e) {
                                                                                var t = e.target.files[0];
                                                                                t && "image" === t.type.substr(0, 5) && m(t)
                                                                        }
                                                                }), Object(o.jsx)("button", {
                                                                        className: "button",
                                                                        onClick: function (e) {
                                                                                e.preventDefault(),
                                                                                O.current.click()
                                                                        },
                                                                        children: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"
                                                                })]
                                                        })]
                                                })]
                                        })
                                },
                                E = function (e) {
                                        var t = e.blockKey,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = i.filter((function (e) {
                                                        return e.key === t
                                                }))[0].fields,
                                                u = !c,
                                                b = d.length - 1 === c;
                                        return Object(o.jsxs)("div", {
                                                className: "control-actions",
                                                children: [Object(o.jsx)("button", {
                                                        className: "action action-remove",
                                                        type: "button",
                                                        onClick: function () {
                                                                var e = i.map((function (e) {
                                                                        return e.key === t && (e.fields = e.fields.filter((function (e, t) {
                                                                                return t !== c
                                                                        }))),
                                                                        e
                                                                }));
                                                                r(e)
                                                        }
                                                }), Object(o.jsx)("button", {
                                                        className: "action action-up",
                                                        type: "button",
                                                        onClick: function () {
                                                                var e = i.map((function (e) {
                                                                        return e.key === t && (e.fields = e.fields.map((function (t, s) {
                                                                                return s === c - 1 ? e.fields[c] : s === c ? e.fields[c - 1] : t
                                                                        }))),
                                                                        e
                                                                }));
                                                                r(e)
                                                        },
                                                        hidden: u
                                                }), Object(o.jsx)("button", {
                                                        className: "action action-down",
                                                        type: "button",
                                                        onClick: function () {
                                                                var e = i.map((function (e) {
                                                                        return e.key === t && (e.fields = e.fields.map((function (t, s) {
                                                                                return s === c ? e.fields[c + 1] : s === c + 1 ? e.fields[c] : t
                                                                        }))),
                                                                        e
                                                                }));
                                                                r(e)
                                                        },
                                                        hidden: b
                                                })]
                                        })
                                },
                                w = function (e, t, c, s, n) {
                                        n(s.map((function (s) {
                                                return s.key === t && s.fields.map((function (t) {
                                                        t.key === c && (t.relatives.includes(e.target.name) ? t.relatives = t.relatives.filter((function (t) {
                                                                return t !== e.target.name
                                                        })) : t.relatives.push(e.target.name))
                                                })),
                                                s
                                        })))
                                },
                                F = function (e) {
                                        var t = e.props,
                                                c = Object(s.useContext)(j),
                                                n = Object(l.a)(c, 2),
                                                a = n[0],
                                                i = n[1],
                                                r = t.objKey,
                                                d = t.blockKey,
                                                b = t.key,
                                                m = t.checked;
                                        return Object(o.jsxs)("label", {
                                                className: "checkbox",
                                                children: [Object(o.jsx)("input", {
                                                        type: "checkbox",
                                                        name: r,
                                                        checked: m,
                                                        className: "checkbox-input",
                                                        onChange: function (e) {
                                                                w(e, d, b, a, i)
                                                        }
                                                }), Object(o.jsx)("div", {
                                                        className: "checkbox-shape"
                                                }), Object(o.jsx)("span", {
                                                        className: "checkbox-label",
                                                        children: u[r]
                                                })]
                                        })
                                },
                                M = function (e, t, c, s, n, a) {
                                        a(n.map((function (t) {
                                                return t.key === s && (null === t || void 0 === t || t.fields.map((function (t) {
                                                        t.key === c && (t.value = e.target.value)
                                                }))),
                                                t
                                        })))
                                },
                                Z = function (e) {
                                        var t = e.fieldProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = t.type,
                                                b = t.key,
                                                m = t.blockKey,
                                                p = t.label,
                                                x = t.value,
                                                h = t.relatives;
                                        return Object(o.jsxs)(o.Fragment, {
                                                children: [Object(o.jsxs)("div", {
                                                        className: "field",
                                                        children: [Object(o.jsx)(E, {
                                                                index: c,
                                                                blockKey: m
                                                        }), Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: p
                                                        }), Object(o.jsx)("input", {
                                                                className: "field-input",
                                                                name: d,
                                                                type: "text",
                                                                value: x,
                                                                onChange: function (e) {
                                                                        M(e, d, b, m, i, r)
                                                                }
                                                        })]
                                                }), "phone" === d ? Object(o.jsx)("div", {
                                                        className: "phone-relations",
                                                        children: Object.keys(u).map((function (e) {
                                                                return Object(o.jsx)(F, {
                                                                        props: {
                                                                                objKey: e,
                                                                                blockKey: m,
                                                                                key: b,
                                                                                checked: h.includes(e)
                                                                        }
                                                                })
                                                        }))
                                                }) : ""]
                                        })
                                },
                                P = c(5),
                                _ = function (e) {
                                        var t = e.blockKey,
                                                c = Object(s.useContext)(j),
                                                n = Object(l.a)(c, 2),
                                                a = n[0],
                                                i = n[1],
                                                r = [{
                                                        type: "phone",
                                                        label: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                                                        value: "",
                                                        relatives: ["phone"]
                                                },
                                                {
                                                        type: "email",
                                                        label: "Email",
                                                        value: ""
                                                },
                                                {
                                                        type: "adress",
                                                        label: "\u0410\u0434\u0440\u0435\u0441",
                                                        value: ""
                                                },
                                                {
                                                        type: "comment",
                                                        label: "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                                                        value: ""
                                                },
                                                {
                                                        type: "fb",
                                                        label: "Facebook",
                                                        value: ""
                                                },
                                                {
                                                        type: "instagram",
                                                        label: "Instagram",
                                                        value: ""
                                                },
                                                {
                                                        type: "vk",
                                                        label: "VKontakte",
                                                        value: ""
                                                }];
                                        return Object(o.jsxs)("div", {
                                                className: "add-field",
                                                children: [Object(o.jsx)("button", {
                                                        className: "add",
                                                        children: Object(o.jsx)("span", {
                                                                className: "add-label add-label--field",
                                                                children: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u0435"
                                                        })
                                                }), Object(o.jsxs)("select", {
                                                        className: "add-select",
                                                        defaultValue: !1,
                                                        value: !1,
                                                        onChange: function (e) {
                                                                !
                                                                function (e, t) {
                                                                        if (e && t) {
                                                                                var c = a.map((function (c) {
                                                                                        return c.key === t && (c.fields = [].concat(Object(P.a)(c.fields), [null === r || void 0 === r ? void 0 : r.filter((function (c) {
                                                                                                if (c.type === e.target.value) return c.key = "".concat(c.type, "_").concat((new Date).getTime()),
                                                                                                c.blockKey = t,
                                                                                                c
                                                                                        }))[0]])),
                                                                                        c
                                                                                }));
                                                                                i(c)
                                                                        }
                                                                }(e, t)
                                                        },
                                                        children: [Object(o.jsx)("option", {
                                                                defaultChecked: !0
                                                        }), r.map((function (e) {
                                                                return Object(o.jsx)("option", {
                                                                        value: null === e || void 0 === e ? void 0 : e.type,
                                                                        children: null === e || void 0 === e ? void 0 : e.label
                                                                })
                                                        }))]
                                                })]
                                        })
                                },
                                K = function (e, t, c, s, n) {
                                        n(s.map((function (t) {
                                                return t.key === c && (t[e.target.name] = e.target.value),
                                                t
                                        })))
                                },
                                D = function (e) {
                                        var t = e.itemProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = t.type,
                                                u = t.key,
                                                b = t.title,
                                                m = t.fields,
                                                p = t.displayName;
                                        return Object(o.jsxs)("div", {
                                                className: "control-item",
                                                children: [Object(o.jsx)(L, {
                                                        index: c
                                                }), Object(o.jsx)("div", {
                                                        className: "control-item-title",
                                                        children: Object(o.jsx)("div", {
                                                                className: "item-trigger",
                                                                children: Object(o.jsxs)("label", {
                                                                        className: "trigger",
                                                                        children: [Object(o.jsx)("input", {
                                                                                type: "checkbox",
                                                                                defaultChecked: !0,
                                                                                onChange: function (e) {
                                                                                        N(e, d, u, i, r)
                                                                                },
                                                                                className: "trigger-input"
                                                                        }), Object(o.jsx)("div", {
                                                                                className: "trigger-shape"
                                                                        }), Object(o.jsx)("span", {
                                                                                className: "trigger-label",
                                                                                children: p
                                                                        })]
                                                                })
                                                        })
                                                }), Object(o.jsxs)("label", {
                                                        className: "field field--all-width",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: "\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438 (\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)"
                                                        }), Object(o.jsx)("input", {
                                                                className: "field-input",
                                                                name: "title",
                                                                type: "text",
                                                                value: b,
                                                                onChange: function (e) {
                                                                        K(e, d, u, i, r)
                                                                }
                                                        })]
                                                }), m.map((function (e, t) {
                                                        return Object(o.jsx)(Z, {
                                                                fieldProps: e,
                                                                index: t
                                                        })
                                                })), Object(o.jsx)(_, {
                                                        blockKey: u
                                                })]
                                        })
                                },
                                R = function (e) {
                                        var t = e.itemProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = t.type,
                                                u = t.key,
                                                b = t.title,
                                                m = t.message,
                                                p = t.displayName;
                                        return Object(o.jsxs)("div", {
                                                className: "control-item",
                                                children: [Object(o.jsx)(L, {
                                                        index: c
                                                }), Object(o.jsx)("div", {
                                                        className: "control-item-title",
                                                        children: Object(o.jsx)("div", {
                                                                className: "item-trigger",
                                                                children: Object(o.jsxs)("label", {
                                                                        className: "trigger",
                                                                        children: [Object(o.jsx)("input", {
                                                                                type: "checkbox",
                                                                                defaultChecked: !0,
                                                                                onChange: function (e) {
                                                                                        N(e, d, u, i, r)
                                                                                },
                                                                                className: "trigger-input"
                                                                        }), Object(o.jsx)("div", {
                                                                                className: "trigger-shape"
                                                                        }), Object(o.jsx)("span", {
                                                                                className: "trigger-label",
                                                                                children: p
                                                                        })]
                                                                })
                                                        })
                                                }), Object(o.jsxs)("label", {
                                                        className: "field field--all-width",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438 (\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)"
                                                        }), Object(o.jsx)("textarea", {
                                                                className: "field-input field-input--title",
                                                                name: "title",
                                                                // type: "text",
                                                                value: b,
                                                                onChange: function (e) {
                                                                        K(e, d, u, i, r)
                                                                }
                                                        })]
                                                }), Object(o.jsxs)("label", {
                                                        className: "field field--all-width",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0447\u0435\u043a\u0435"
                                                        }), Object(o.jsx)("textarea", {
                                                                className: "field-input",
                                                                value: m,
                                                                name: "message",
                                                                onChange: function (e) {
                                                                        K(e, d, u, i, r)
                                                                }
                                                        })]
                                                })]
                                        })
                                },
                                q = function (e, t, c) {
                                        c(t.map((function (t) {
                                                return "products" === t.type && (t[e.target.name] = e.target.checked),
                                                t
                                        })))
                                },
                                S = function (e) {
                                        var t = e.itemProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = t.displayName;
                                        return Object(o.jsxs)("div", {
                                                className: "control-item",
                                                children: [Object(o.jsx)(L, {
                                                        removeDisabled: !0,
                                                        index: c
                                                }), Object(o.jsx)("div", {
                                                        className: "control-item-title control-item-title--goods",
                                                        children: d
                                                }), Object(o.jsx)("div", {
                                                        className: "item-trigger item-trigger--goods",
                                                        children: Object(o.jsxs)("label", {
                                                                className: "trigger",
                                                                children: [Object(o.jsx)("input", {
                                                                        type: "checkbox",
                                                                        name: "selfDividers",
                                                                        defaultChecked: !0,
                                                                        onChange: function (e) {
                                                                                q(e, i, r)
                                                                        },
                                                                        className: "trigger-input"
                                                                }), Object(o.jsx)("div", {
                                                                        className: "trigger-shape"
                                                                }), Object(o.jsx)("span", {
                                                                        className: "trigger-label trigger-label--goods",
                                                                        children: "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438 \u043c\u0435\u0436\u0434\u0443 \u0442\u043e\u0432\u0430\u0440\u0430\u043c\u0438 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0431\u043b\u043e\u043a\u0435"
                                                                })]
                                                        })
                                                }), Object(o.jsx)("div", {
                                                        className: "item-trigger item-trigger--goods",
                                                        children: Object(o.jsxs)("label", {
                                                                className: "trigger",
                                                                children: [Object(o.jsx)("input", {
                                                                        type: "checkbox",
                                                                        name: "discount",
                                                                        defaultChecked: !0,
                                                                        onChange: function (e) {
                                                                                q(e, i, r)
                                                                        },
                                                                        className: "trigger-input"
                                                                }), Object(o.jsx)("div", {
                                                                        className: "trigger-shape"
                                                                }), Object(o.jsx)("span", {
                                                                        className: "trigger-label trigger-label--goods",
                                                                        children: "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043e\u0431\u0449\u0443\u044e \u0441\u043a\u0438\u0434\u043a\u0443 \u043d\u0430 \u0447\u0435\u043a, \u0441\u0443\u043c\u043c\u0443 \u0447\u0435\u043a\u0430 \u0434\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043a\u0438\u0434\u043e\u043a \u0438 \u0446\u0435\u043d\u044b \u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u044b \u0434\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043a\u0438\u0434\u043e\u043a"
                                                                })]
                                                        })
                                                }), Object(o.jsx)("div", {
                                                        className: "item-trigger item-trigger--goods",
                                                        children: Object(o.jsxs)("label", {
                                                                className: "trigger",
                                                                children: [Object(o.jsx)("input", {
                                                                        type: "checkbox",
                                                                        name: "blocksDividers",
                                                                        defaultChecked: !0,
                                                                        onChange: function (e) {
                                                                                q(e, i, r)
                                                                        },
                                                                        className: "trigger-input"
                                                                }), Object(o.jsx)("div", {
                                                                        className: "trigger-shape"
                                                                }), Object(o.jsx)("span", {
                                                                        className: "trigger-label trigger-label--goods",
                                                                        children: "\u041f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u044b\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438 \u043c\u0435\u0436\u0434\u0443 \u0431\u043b\u043e\u043a\u0430\u043c\u0438 \u0432 \u0447\u0435\u043a\u0435"
                                                                })]
                                                        })
                                                })]
                                        })
                                },
                                T = function (e) {
                                        var t = e.itemProps,
                                                c = e.index,
                                                n = Object(s.useContext)(j),
                                                a = Object(l.a)(n, 2),
                                                i = a[0],
                                                r = a[1],
                                                d = t.type,
                                                u = t.key,
                                                b = t.title,
                                                m = t.url,
                                                p = t.displayName;
                                        return Object(o.jsxs)("div", {
                                                className: "control-item",
                                                children: [Object(o.jsx)(L, {
                                                        index: c
                                                }), Object(o.jsx)("div", {
                                                        className: "control-item-title",
                                                        children: Object(o.jsx)("div", {
                                                                className: "item-trigger",
                                                                children: Object(o.jsxs)("label", {
                                                                        className: "trigger",
                                                                        children: [Object(o.jsx)("input", {
                                                                                type: "checkbox",
                                                                                defaultChecked: !0,
                                                                                onChange: function (e) {
                                                                                        N(e, d, u, i, r)
                                                                                },
                                                                                className: "trigger-input"
                                                                        }), Object(o.jsx)("div", {
                                                                                className: "trigger-shape"
                                                                        }), Object(o.jsx)("span", {
                                                                                className: "trigger-label",
                                                                                children: p
                                                                        })]
                                                                })
                                                        })
                                                }), Object(o.jsxs)("label", {
                                                        className: "field field--all-width",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438"
                                                        }), Object(o.jsx)("input", {
                                                                className: "field-input",
                                                                name: "title",
                                                                type: "text",
                                                                value: b,
                                                                onChange: function (e) {
                                                                        K(e, d, u, i, r)
                                                                }
                                                        })]
                                                }), Object(o.jsxs)("label", {
                                                        className: "field field--all-width",
                                                        children: [Object(o.jsx)("div", {
                                                                className: "field-label",
                                                                children: "URL \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0441 QR"
                                                        }), Object(o.jsx)("input", {
                                                                className: "field-input",
                                                                name: "url",
                                                                type: "text",
                                                                value: m,
                                                                onChange: function (e) {
                                                                        K(e, d, u, i, r)
                                                                }
                                                        })]
                                                })]
                                        })
                                },
                                G = function () {
                                        var e = Object(s.useContext)(j),
                                                t = Object(l.a)(e, 2),
                                                c = t[0],
                                                n = t[1],
                                                a = [{
                                                        type: "logo",
                                                        visible: "true",
                                                        displayName: "\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 / \u043b\u043e\u0433\u043e",
                                                        image: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='428px' height='150px' viewBox='0 0 428 150' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EGroup%3C/title%3E%3Cg id='\u043c\u0435\u043d\u044e\u0448\u043a\u0438' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2-copy-2' transform='translate(-147.000000, -299.000000)'%3E%3Cg id='Group' transform='translate(147.000000, 299.000000)'%3E%3Crect id='Rectangle' fill='%23FFFFFF' x='0' y='0' width='428' height='150'%3E%3C/rect%3E%3Cpath d='M88.7740715,60.8581616 L88.7740715,90 L94.873,90 L101.678877,90 C103.765726,90 105.559743,89.6600455 107.060928,88.9801366 C108.562114,88.3002277 109.719978,87.3409503 110.534523,86.1023044 C111.349067,84.8636584 111.756339,83.3961323 111.756339,81.6997259 L111.756339,81.6593352 C111.756339,80.3802987 111.456775,79.2325316 110.857648,78.2160342 C110.25852,77.1995367 109.433878,76.3782606 108.383722,75.7522058 C107.333565,75.1261511 106.128578,74.7660013 104.76876,74.6717565 L104.76876,74.5505846 C105.845844,74.4024857 106.808487,74.0288724 107.65669,73.4297447 C108.504893,72.830617 109.174705,72.0766587 109.666124,71.1678695 C110.157543,70.2590804 110.403253,69.2728759 110.403253,68.209256 L110.403253,68.1688654 C110.403253,66.6744121 110.039737,65.3785461 109.312706,64.2812674 C108.585675,63.1839886 107.555714,62.3391513 106.222823,61.7467554 C104.889932,61.1543596 103.301234,60.8581616 101.456729,60.8581616 L94.8730564,60.8581616 L91.8235639,60.8581616 L88.7740715,60.8581616 Z M94.873,65.382 L99.8814943,65.381912 C101.30863,65.381912 102.419372,65.7016711 103.213721,66.3411894 C104.00807,66.9807077 104.405245,67.8793992 104.405245,69.0372639 L104.405245,69.0776545 C104.405245,70.329764 103.957582,71.3025049 103.062256,71.9958774 C102.166931,72.6892498 100.857601,73.036 99.1342677,73.036 L94.873,73.036 L94.873,65.382 Z M94.873,77.1759755 L99.861299,77.1759755 C101.099945,77.1759755 102.140004,77.3308062 102.981475,77.6404677 C103.822946,77.9501292 104.459099,78.4112555 104.889932,79.0238467 C105.320766,79.6364379 105.536182,80.3870304 105.536182,81.2756243 L105.536182,81.3160149 C105.536182,82.6623692 105.07169,83.6889643 104.142706,84.3958003 C103.213721,85.1026363 101.874099,85.4560543 100.123838,85.4560543 L94.873,85.457 L94.873,77.1759755 Z M121.833801,90.3433203 C122.789712,90.3433203 123.671574,90.1985873 124.479387,89.9091211 C125.2872,89.6196549 126.010865,89.2090169 126.650383,88.6772069 C127.289902,88.145397 127.811614,87.5092446 128.21552,86.7687497 L128.336692,86.7687497 L128.336692,90 L134.233724,90 L134.233724,75.1564441 C134.233724,73.7023814 133.853379,72.4300767 133.092688,71.3395297 C132.331998,70.2489827 131.265013,69.4041454 129.891731,68.8050178 C128.51845,68.2058901 126.896093,67.9063263 125.02466,67.9063263 C123.126301,67.9063263 121.487115,68.1991583 120.107101,68.7848224 C118.727088,69.3704865 117.650005,70.181665 116.875851,71.2183578 C116.101697,72.2550506 115.660766,73.4398424 115.553058,74.7727331 L115.532863,75.0150769 L120.925012,75.0150769 L120.965402,74.833319 C121.113501,74.1332148 121.510676,73.5542825 122.156926,73.096522 C122.803176,72.6387616 123.678306,72.4098813 124.782317,72.4098813 C125.940181,72.4098813 126.822043,72.6892498 127.427903,73.2479869 C128.033762,73.8067239 128.336692,74.5640482 128.336692,75.5199597 L128.336,76.843 L122.984934,77.1759755 C120.305689,77.3510015 118.232303,78.0006175 116.764777,79.1248233 C115.297251,80.2490291 114.563488,81.7939707 114.563488,83.7596479 L114.563488,83.8000385 C114.563488,85.0656116 114.869783,86.1931833 115.482375,87.1827537 C116.094966,88.1723241 116.946535,88.9464778 118.037082,89.5052148 C119.127629,90.0639518 120.393202,90.3433203 121.833801,90.3433203 Z M123.752356,86.0417184 C122.729126,86.0417184 121.914582,85.8162041 121.308723,85.3651754 C120.702863,84.9141467 120.399934,84.2914579 120.399934,83.4971088 L120.399934,83.4567182 C120.399934,82.6892963 120.696131,82.0733392 121.288527,81.608847 C121.880923,81.1443547 122.74259,80.8784498 123.873528,80.811132 L128.336,80.525 L128.336692,82.0834368 C128.336692,82.8373952 128.138105,83.5139383 127.74093,84.1130659 C127.343756,84.7121936 126.798482,85.1834176 126.10511,85.5267379 C125.411737,85.8700582 124.627486,86.0417184 123.752356,86.0417184 Z M168.464781,90 L168.464781,68.3506232 L162.56775,68.3506232 L162.56775,85.4762496 L156.549546,85.4762496 L156.549546,68.3506232 L150.652514,68.3506232 L150.652514,85.4762496 L144.654506,85.4762496 L144.654506,68.3506232 L138.757474,68.3506232 L138.757474,90 L168.464781,90 Z M182.298572,90.2019531 C184.075759,90.2019531 185.469236,89.7845833 186.479002,88.9498437 C187.488767,88.115104 188.229262,86.9303122 188.700486,85.3954684 C189.17171,83.8606245 189.467908,82.049778 189.58908,79.9629288 L190.033377,72.8137876 L195.990995,72.8137876 L195.990995,90 L201.888026,90 L201.888026,68.3506232 L184.964353,68.3506232 L184.318103,79.4782413 C184.250785,80.7707414 184.112784,81.8343613 183.904099,82.6691009 C183.695414,83.5038406 183.382387,84.1197977 182.965017,84.5169722 C182.547647,84.9141467 181.98891,85.112734 181.288806,85.112734 C181.019535,85.112734 180.783923,85.0992704 180.58197,85.0723433 C180.380017,85.0454163 180.218454,85.0184892 180.097282,84.9915621 L180.097282,89.9394141 C180.272308,90.0067318 180.548311,90.0673177 180.92529,90.1211719 C181.302269,90.1750261 181.76003,90.2019531 182.298572,90.2019531 Z M216.388262,90.4442969 C218.569356,90.4442969 220.460984,89.9966341 222.063145,89.1013085 C223.665307,88.2059829 224.907319,86.9168487 225.789181,85.2339058 C226.671043,83.550963 227.111974,81.5314316 227.111974,79.1753116 L227.111974,79.134921 C227.111974,76.7922645 226.667677,74.7828308 225.779083,73.1066197 C224.890489,71.4304086 223.641746,70.1446403 222.032852,69.2493147 C220.423959,68.3539891 218.535697,67.9063263 216.368067,67.9063263 C214.2139,67.9063263 212.335735,68.357355 210.733574,69.2594123 C209.131412,70.1614697 207.886035,71.4506039 206.997441,73.126815 C206.108847,74.8030261 205.66455,76.8057281 205.66455,79.134921 L205.66455,79.1753116 C205.66455,81.517968 206.102115,83.5307677 206.977245,85.2137105 C207.852376,86.8966534 209.091022,88.1891535 210.693183,89.0912109 C212.295345,89.9932682 214.193704,90.4442969 216.388262,90.4442969 Z M216.408457,85.81957 C215.439082,85.81957 214.597611,85.5603968 213.884043,85.0420504 C213.170475,84.523704 212.621836,83.7697456 212.238125,82.7801752 C211.854414,81.7906048 211.662558,80.5889836 211.662558,79.1753116 L211.662558,79.134921 C211.662558,77.7347125 211.85778,76.543189 212.248222,75.5603504 C212.638665,74.5775117 213.187305,73.8269192 213.894141,73.3085728 C214.600977,72.7902264 215.425619,72.5310532 216.368067,72.5310532 C217.323978,72.5310532 218.158718,72.7902264 218.872286,73.3085728 C219.585853,73.8269192 220.137859,74.5775117 220.528301,75.5603504 C220.918744,76.543189 221.113965,77.7347125 221.113965,79.134921 L221.113965,79.1753116 C221.113965,80.5889836 220.92211,81.7906048 220.538399,82.7801752 C220.154688,83.7697456 219.609414,84.523704 218.902578,85.0420504 C218.195742,85.5603968 217.364369,85.81957 216.408457,85.81957 Z M236.765334,90 L236.765334,72.7935923 L245.954202,72.7935923 L245.954202,68.3506232 L230.868302,68.3506232 L230.868302,90 L236.765334,90 Z M255.48639,90 L264.009,76.308 L264.230961,76.307577 L264.230961,90 L270.027016,90 L270.027016,68.3506232 L264.251157,68.3506232 L255.709,81.862 L255.506585,81.8612884 L255.506585,68.3506232 L249.71053,68.3506232 L249.71053,90 L255.48639,90 Z M285.718776,90 L285.718776,72.8137876 L292.161081,72.8137876 L292.161081,68.3506232 L273.379439,68.3506232 L273.379439,72.8137876 L279.821744,72.8137876 L279.821744,90 L285.718776,90 Z M301.309558,90 L309.832,76.308 L310.054129,76.307577 L310.054129,90 L315.850184,90 L315.850184,68.3506232 L310.074324,68.3506232 L301.532,81.862 L301.329753,81.8612884 L301.329753,68.3506232 L295.533698,68.3506232 L295.533698,90 L301.309558,90 Z M326.331552,90 L326.331552,72.7935923 L334.409678,72.7935923 L334.409678,90 L340.30671,90 L340.30671,68.3506232 L320.434521,68.3506232 L320.434521,90 L326.331552,90 Z' id='\u0412\u0430\u0448\u043b\u043e\u0433\u0438\u0442\u0438\u043f' fill='%23000000' fill-rule='nonzero' opacity='0.400000006'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                                                },
                                                {
                                                        type: "message",
                                                        visible: !0,
                                                        title: "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",
                                                        message: "\u0422\u0435\u043a\u0441\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026",
                                                        displayName: "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0447\u0435\u043a\u0435"
                                                },
                                                {
                                                        type: "contacts",
                                                        visible: !0,
                                                        title: "\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
                                                        displayName: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
                                                        fields: [{
                                                                type: "phone",
                                                                label: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                                                                value: "",
                                                                relatives: ["phone"]
                                                        },
                                                        {
                                                                type: "email",
                                                                label: "Email",
                                                                value: ""
                                                        }]
                                                },
                                                {
                                                        type: "site",
                                                        visible: !0,
                                                        title: "\u041d\u0430\u0448 \u0441\u0430\u0439\u0442",
                                                        url: "",
                                                        displayName: "QR-\u043a\u043e\u0434"
                                                }];
                                        return Object(o.jsxs)("div", {
                                                className: "control-item add-item",
                                                children: [Object(o.jsx)("button", {
                                                        className: "add",
                                                        children: Object(o.jsx)("span", {
                                                                className: "add-label add-label--block",
                                                                children: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u043e\u043a"
                                                        })
                                                }), Object(o.jsxs)("select", {
                                                        className: "add-select",
                                                        defaultValue: !1,
                                                        value: !1,
                                                        onChange: function (e) {
                                                                !
                                                                function (e) {
                                                                        e && n([].concat(Object(P.a)(c), [a.filter((function (t) {
                                                                                if (t.type === e.target.value) return t.key = "".concat(t.type, "_").concat((new Date).getTime()),
                                                                                "contacts" === t.type && (t.fields = t.fields.map((function (e) {
                                                                                        return e.blockKey = t.key,
                                                                                        e.key = "".concat(e.type, "_").concat((new Date).getTime()),
                                                                                        e
                                                                                }))),
                                                                                t
                                                                        }))[0]]))
                                                                }(e)
                                                        },
                                                        children: [Object(o.jsx)("option", {
                                                                defaultChecked: !0
                                                        }), a.map((function (e) {
                                                                return Object(o.jsx)("option", {
                                                                        value: e.type,
                                                                        children: e.displayName
                                                                })
                                                        }))]
                                                })]
                                        })
                                },
                                V = function () {
                                        var e = Object(s.useContext)(j),
                                                t = Object(l.a)(e, 1)[0];
                                        return Object(o.jsxs)("div", {
                                                className: "check-control",
                                                children: [Object(o.jsx)("h1", {
                                                        className: "check-control-caption",
                                                        children: "\u0411\u041b\u041e\u041a\u0418 \u0418 \u0418\u0425 \u041f\u041e\u0420\u042f\u0414\u041e\u041a"
                                                }), null === t || void 0 === t ? void 0 : t.map((function (e, t) {
                                                        switch (e.type) {
                                                        case "logo":
                                                                return Object(o.jsx)(k, {
                                                                        itemProps: e,
                                                                        index: t
                                                                });
                                                        case "products":
                                                                return Object(o.jsx)(S, {
                                                                        itemProps: e,
                                                                        index: t
                                                                });
                                                        case "message":
                                                                return Object(o.jsx)(R, {
                                                                        itemProps: e,
                                                                        index: t
                                                                });
                                                        case "contacts":
                                                                return Object(o.jsx)(D, {
                                                                        itemProps: e,
                                                                        index: t
                                                                });
                                                        case "site":
                                                                return Object(o.jsx)(T, {
                                                                        itemProps: e,
                                                                        index: t
                                                                })
                                                        }
                                                })), Object(o.jsx)(G, {
                                                }), Object(o.jsx)("button", { // добавила кнопку
                                                        className: "button-toggle button--show-example",
                                                        type: "button",
                                                        children: "\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0020\u0447\u0435\u043a\u0430"
                                                })]
                                        })
                                };
                        var z = function () {
                                return Object(o.jsx)("div", {
                                        className: "layout",
                                        children: Object(o.jsxs)(d, {
                                                children: [Object(o.jsx)(y, {}), Object(o.jsx)(V, {})]
                                        })
                                })
                        };
                        i.a.render(Object(o.jsx)(n.a.StrictMode, {
                                children: Object(o.jsx)(z, {})
                        }), document.getElementById("root"))
                },
                8: function (e) {
                        e.exports = JSON.parse('{"a":[{"type":"logo","key":"logo_1620095088711","visible":"true","displayName":"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 / \u043b\u043e\u0433\u043e","image":"data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg width=\'428px\' height=\'150px\' viewBox=\'0 0 428 150\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3E%3Ctitle%3EGroup%3C/title%3E%3Cg id=\'\u043c\u0435\u043d\u044e\u0448\u043a\u0438\' stroke=\'none\' stroke-width=\'1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'2-copy\' transform=\'translate(-147.000000, -299.000000)\'%3E%3Cg id=\'Group\' transform=\'translate(147.000000, 299.000000)\'%3E%3Crect id=\'Rectangle\' fill=\'%23FFFFFF\' x=\'0\' y=\'0\' width=\'428\' height=\'150\'%3E%3C/rect%3E%3Cpath d=\'M120,91.848 L120,66.396 L126.12,66.396 L126.12,76.728 L136.92,76.728 L136.92,66.396 L143.04,66.396 L143.04,91.848 L136.92,91.848 L136.92,81.372 L126.12,81.372 L126.12,91.848 L120,91.848 Z M170.056,92.28 C161.128,92.28 156.736,87.24 156.736,79.068 C156.736,71.04 162.064,66 170.74,66 C179.992,66 183.988,71.544 183.988,79.14 C183.988,87.24 179.128,92.28 170.056,92.28 Z M170.164,87.456 C175.78,87.456 177.76,83.856 177.76,79.104 C177.76,74.352 175.564,70.824 170.416,70.824 C165.016,70.824 162.928,74.352 162.928,79.032 C162.928,83.676 164.98,87.456 170.164,87.456 Z M197.684,91.848 L197.684,66.396 L203.804,66.396 L203.804,87.024 L214.856,87.024 L214.856,91.848 L197.684,91.848 Z M231.36,91.848 L231.36,83.676 L221.964,66.396 L229.02,66.396 L234.636,78.528 L240.612,66.396 L247.488,66.396 L237.48,83.46 L237.48,91.848 L231.36,91.848 Z M259.636001,91.848 L259.636001,66.396 L268.564001,66.396 C274.792001,66.396 278.032001,68.628 278.032001,73.416 C278.032001,75.54 276.772001,77.124 275.476001,77.952 L275.476001,78.024 C277.204001,78.636 279.868001,80.508 279.868001,84 C279.868001,88.644 277.132001,91.848 269.644001,91.848 L259.636001,91.848 Z M265.792001,87.06 L268.888001,87.06 C272.128001,87.06 273.748001,86.196 273.748001,84.144 C273.748001,81.84 271.984001,81.012 268.456001,81.012 L265.792001,81.012 L265.792001,87.06 Z M265.792001,76.836 L267.988001,76.836 C270.652001,76.836 271.984001,76.368 271.984001,74.1 C271.984001,71.94 270.544001,71.076 267.664001,71.076 L265.792001,71.076 L265.792001,76.836 Z M293.384001,91.848 L293.384001,66.396 L310.088001,66.396 L310.088001,71.184 L299.504001,71.184 L299.504001,76.836 L309.296001,76.836 L309.296001,81.3 L299.504001,81.3 L299.504001,87.06 L310.916001,87.06 L310.916001,91.848 L293.384001,91.848 Z M324.792001,91.848 L324.792001,66.396 L333.900001,66.396 C342.720001,66.396 348.768001,70.176 348.768001,79.032 C348.768001,87.852 343.296001,91.848 334.116001,91.848 L324.792001,91.848 Z M330.876001,87.06 L334.512001,87.06 C340.380001,87.06 342.648001,84.396 342.648001,79.392 C342.648001,73.92 339.912001,71.184 333.792001,71.184 L330.876001,71.184 L330.876001,87.06 Z\' id=\'HOLYBED-Copy-3\' fill=\'%23000000\' fill-rule=\'nonzero\'%3E%3C/path%3E%3Cg id=\'Group-Copy-15\' transform=\'translate(68.000000, 67.000000)\'%3E%3Cpolygon id=\'Rectangle-Copy-76\' fill=\'%23000000\' fill-rule=\'nonzero\' points=\'2.84217094e-14 19.2073171 31 19.2073171 31 24.695122 2.84217094e-14 24.695122\'%3E%3C/polygon%3E%3Cpolygon id=\'Rectangle-Copy-75\' fill=\'%23000000\' fill-rule=\'nonzero\' points=\'2.84217094e-14 5.18292683 31 5.18292683 31 8.23170732 2.84217094e-14 8.23170732\'%3E%3C/polygon%3E%3Cpath d=\'M1.36068934e-12,-1.59872116e-14 C0.0350869692,-1.59872116e-14 2.62719204,-1.59872116e-14 7.77631523,-1.59872116e-14 C15.5,-1.59872116e-14 9.53846154,14.6341463 17.8846154,14.6341463 C23.4487179,14.6341463 27.8205128,14.6341463 31,14.6341463\' id=\'Path-2-Copy-3\' stroke=\'%23000000\' stroke-width=\'2.99999982\' stroke-linejoin=\'round\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"},{"type":"products","key":"products_1620095088711","selfDividers":true,"discount":true,"blocksDividers":true,"displayName":"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0431\u043b\u043e\u043a \u0441 \u0442\u043e\u0432\u0430\u0440\u0430\u043c\u0438"},{"type":"message","key":"message_1620095088711","visible":true,"title":"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!","message":"\u0422\u0435\u043a\u0441\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026","displayName":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0447\u0435\u043a\u0435"},{"type":"contacts","key":"contacts_1620095088711","visible":true,"title":"\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","displayName":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","fields":[{"type":"phone","key":"phone_1620095088711","blockKey":"contacts_1620095088711","label":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","value":"+7 (495) 138-40-32","relatives":["phone"]},{"type":"email","key":"email_1620095088711","blockKey":"contacts_1620095088711","label":"Email","value":"info@holybed.ru"},{"type":"adress","key":"adress_1620095088711","blockKey":"contacts_1620095088711","label":"\u0410\u0434\u0440\u0435\u0441","value":"\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u043e\u0435 \u0448\u043e\u0441\u0441\u0435, 39 \u0410\u0421 2"},{"type":"comment","key":"comment_1620095088711","blockKey":"contacts_1620095088711","label":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439","value":"\u043e\u0444\u0438\u0441 13"},{"type":"fb","key":"fb_1620095088711","blockKey":"contacts_1620095088711","label":"Facebook","value":"@holybed.ru"},{"type":"instagram","key":"instagram_1620095088711","blockKey":"contacts_1620095088711","label":"Instagram","value":"@holybed.ru"},{"type":"vk","key":"vk_1620095088711","blockKey":"contacts_1620095088711","label":"VKontakte","value":"holybed"}]},{"type":"site","key":"site_1620095088711","visible":true,"title":"\u041d\u0430\u0448 \u0441\u0430\u0439\u0442","url":"holybed.ru","displayName":"QR-\u043a\u043e\u0434"}]}')
                }
        },
        [
                [16, 1, 2]
        ]
]);
//# sourceMappingURL=main.68e0a306.chunk.js.map