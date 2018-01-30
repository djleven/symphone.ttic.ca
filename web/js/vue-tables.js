//from @matfish2 https://github.com/matfish2/vue-tables-2 MIT license 
// https://rawgit.com/matfish2/vue-tables-2/master/dist/vue-tables-2.min.js
var VueTables = function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/dist/", e(e.s = 30)
}([function(t, e, r) {
    (function(t) {
        ! function(e) {
            function r(t, e) {
                if ("object" !== i(t)) return e;
                for (var n in e) "object" === i(t[n]) && "object" === i(e[n]) ? t[n] = r(t[n], e[n]) : t[n] = e[n];
                return t
            }

            function n(t, e, n) {
                var s = n[0],
                    a = n.length;
                (t || "object" !== i(s)) && (s = {});
                for (var u = 0; u < a; ++u) {
                    var c = n[u];
                    if ("object" === i(c))
                        for (var l in c) {
                            var f = t ? o.clone(c[l]) : c[l];
                            s[l] = e ? r(s[l], f) : f
                        }
                }
                return s
            }

            function i(t) {
                return {}.toString.call(t).slice(8, -1).toLowerCase()
            }
            var o = function(t) {
                return n(!0 === t, !1, arguments)
            };
            o.recursive = function(t) {
                return n(!0 === t, !0, arguments)
            }, o.clone = function(t) {
                var e, r, n = t,
                    s = i(t);
                if ("array" === s)
                    for (n = [], r = t.length, e = 0; e < r; ++e) n[e] = o.clone(t[e]);
                else if ("object" === s) {
                    n = {};
                    for (e in t) n[e] = o.clone(t[e])
                }
                return n
            }, e ? t.exports = o : window.merge = o
        }("object" == typeof t && t && "object" == typeof t.exports && t.exports)
    }).call(e, r(37)(t))
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(10),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        o = new i.default;
    e.default = o
}, function(t, e) {
    function r(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function n(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0))
    }
    t.exports = function(t) {
        return null != t && (r(t) || n(t) || !!t._isBuffer)
    }
}, function(t, e) {
    t.exports = function(t) {
        return "string" == typeof t && /[@?!+*]\(/.test(t)
    }
}, function(t, e, r) {
    var n = r(3);
    t.exports = function(t) {
        return "string" == typeof t && (/[*!?{}(|)[\]]/.test(t) || n(t))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return t && "function" == typeof t.isValid && t.isValid()
    }
}, function(t, e, r) {
    "use strict";
    (function(e) {
        var n = e && "win32" === e.platform,
            i = r(8),
            o = r(73),
            s = t.exports;
        s.diff = r(74), s.unique = r(20), s.braces = r(76), s.brackets = r(88), s.extglob = r(90), s.isExtglob = r(3), s.isGlob = r(4), s.typeOf = r(91), s.normalize = r(92), s.omit = r(94), s.parseGlob = r(97), s.cache = r(101), s.filename = function(t) {
            var e = t.match(o());
            return e && e[0]
        }, s.isPath = function(t, e) {
            return e = e || {},
                function(r) {
                    var n = s.unixify(r, e);
                    return e.nocase ? t.toLowerCase() === n.toLowerCase() : t === n
                }
        }, s.hasPath = function(t, e) {
            return function(r) {
                return -1 !== s.unixify(t, e).indexOf(r)
            }
        }, s.matchPath = function(t, e) {
            return e && e.contains ? s.hasPath(t, e) : s.isPath(t, e)
        }, s.hasFilename = function(t) {
            return function(e) {
                var r = s.filename(e);
                return r && t.test(r)
            }
        }, s.arrayify = function(t) {
            return Array.isArray(t) ? t : [t]
        }, s.unixify = function(t, e) {
            return e && !1 === e.unixify ? t : e && !0 === e.unixify || n || "\\" === i.sep ? s.normalize(t, !1) : e && !0 === e.unescape ? t ? t.toString().replace(/\\(\w)/g, "$1") : "" : t
        }, s.escapePath = function(t) {
            return t.replace(/[\\.]/g, "\\$&")
        }, s.unescapeGlob = function(t) {
            return t.replace(/[\\"']/g, "")
        }, s.escapeRe = function(t) {
            return t.replace(/[-[\\$*+?.#^\s{}(|)\]]/g, "\\$&")
        }, t.exports = s
    }).call(e, r(7))
}, function(t, e) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === n || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function s() {
        g && h && (g = !1, h.length ? d = h.concat(d) : y = -1, d.length && a())
    }

    function a() {
        if (!g) {
            var t = i(s);
            g = !0;
            for (var e = d.length; e;) {
                for (h = d, d = []; ++y < e;) h && h[y].run();
                y = -1, e = d.length
            }
            h = null, g = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var l, f, p = t.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            l = r
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            f = n
        }
    }();
    var h, d = [],
        g = !1,
        y = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        d.push(new u(t, e)), 1 !== d.length || g || i(a)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function(t) {
        return []
    }, p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(t, e, r) {
    (function(t) {
        function r(t, e) {
            for (var r = 0, n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--)
            }
            if (e)
                for (; r--; r) t.unshift("..");
            return t
        }

        function n(t, e) {
            if (t.filter) return t.filter(e);
            for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
            return r
        }
        var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function(t) {
                return i.exec(t).slice(1)
            };
        e.resolve = function() {
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var s = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, i = "/" === s.charAt(0))
            }
            return e = r(n(e.split("/"), function(t) {
                return !!t
            }), !i).join("/"), (i ? "/" : "") + e || "."
        }, e.normalize = function(t) {
            var i = e.isAbsolute(t),
                o = "/" === s(t, -1);
            return t = r(n(t.split("/"), function(t) {
                return !!t
            }), !i).join("/"), t || i || (t = "."), t && o && (t += "/"), (i ? "/" : "") + t
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(n(t, function(t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            }).join("/"))
        }, e.relative = function(t, r) {
            function n(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                return e > r ? [] : t.slice(e, r - e + 1)
            }
            t = e.resolve(t).substr(1), r = e.resolve(r).substr(1);
            for (var i = n(t.split("/")), o = n(r.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++)
                if (i[u] !== o[u]) {
                    a = u;
                    break
                }
            for (var c = [], u = a; u < i.length; u++) c.push("..");
            return c = c.concat(o.slice(a)), c.join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            var e = o(t),
                r = e[0],
                n = e[1];
            return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : "."
        }, e.basename = function(t, e) {
            var r = o(t)[2];
            return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
        }, e.extname = function(t) {
            return o(t)[3]
        };
        var s = "b" === "ab".substr(-1) ? function(t, e, r) {
            return t.substr(e, r)
        } : function(t, e, r) {
            return e < 0 && (e = t.length + e), t.substr(e, r)
        }
    }).call(e, r(7))
}, function(t, e) {
    t.exports = function(t, e, r) {
        function n() {
            var c = Date.now() - a;
            c < e && c >= 0 ? i = setTimeout(n, e - c) : (i = null, r || (u = t.apply(s, o), s = o = null))
        }
        var i, o, s, a, u;
        null == e && (e = 100);
        var c = function() {
            s = this, o = arguments, a = Date.now();
            var c = r && !i;
            return i || (i = setTimeout(n, e)), c && (u = t.apply(s, o), s = o = null), u
        };
        return c.clear = function() {
            i && (clearTimeout(i), i = null)
        }, c.flush = function() {
            i && (u = t.apply(s, o), s = o = null, clearTimeout(i), i = null)
        }, c
    }
}, function(t, e) {
    t.exports = Vue
}, function(t, e, r) {
    "use strict";
    var n = r(32),
        i = r(12);
    t.exports = {
        Pagination: n,
        PaginationEvent: i
    }
}, function(t, e, r) {
    "use strict";
    var n = r(10),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        o = new i.default;
    t.exports = o
}, function(t, e, r) {
    "use strict";

    function n() {
        return {
            methods: {
                setData: function(t) {
                    this.commit("SET_DATA", t), this.commit("LOADED", t), setTimeout(function() {
                        this.dispatch("loaded", t)
                    }.bind(this), 0)
                }
            }
        }
    }

    function i() {
        return {}
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.default = function(t) {
        var e = "server" == t ? n() : i();
        return a.default.recursive(!0, {
            props: {
                name: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                state: function() {
                    return this.$store.state[this.name]
                },
                Page: function() {
                    return this.state.page
                },
                count: function() {
                    return this.state.count
                },
                Columns: function() {
                    return this.state.columns
                },
                tableData: function() {
                    return this.state.data
                },
                page: function() {
                    return this.state.page
                },
                limit: function() {
                    return this.state.limit
                },
                customQueries: function() {
                    return this.state.customQueries
                },
                query: function() {
                    return this.state.query
                },
                orderBy: function() {
                    return {
                        column: this.state.sortBy,
                        ascending: this.state.ascending
                    }
                }
            },
            methods: {
                commit: function(t, e) {
                    return this.$store.commit(this.name + "/" + t, e)
                },
                orderByColumn: function(t, e) {
                    if (this.sortable(t))
                        if (e.shiftKey && this.orderBy.column && this.hasMultiSort) this.setUserMultiSort(t);
                        else {
                            var r = this.orderBy.column !== t || !this.orderBy.ascending,
                                n = {
                                    column: t,
                                    ascending: r
                                };
                            this.updateState("orderBy", n), this.commit("SORT", n), this.dispatch("sorted", n)
                        }
                },
                setLimit: function(t) {
                    var e = "object" === (void 0 === t ? "undefined" : o(t)) ? parseInt(t.target.value) : t;
                    this.updateState("perPage", e), this.commit("SET_LIMIT", e), this.dispatch("limit", e)
                },
                setOrder: function(t, e) {
                    this.updateState("orderBy", {
                        column: t,
                        ascending: e
                    }), this.commit("SORT", {
                        column: t,
                        ascending: e
                    })
                },
                setPage: function(t) {
                    t || (t = this.$refs.page.value), this.opts.pagination.dropdown || (this.$refs.pagination.Page = t), this.commit("PAGINATE", t)
                }
            }
        }, e)
    };
    var s = r(0),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s)
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return {
            computed: {
                Columns: function() {
                    return this.columns
                }
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        return {
            methods: n,
            computed: i,
            directives: o,
            beforeDestroy: s
        }
    };
    var n = r(38),
        i = r(136),
        o = r(147),
        s = r(150)
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (!this.opts.texts) return "";
        var t = this.opts.texts[t];
        if (e)
            for (var r in e) t = t.replace("{" + r + "}", e[r]);
        return t
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        t.vuex ? t.commit("SET_FILTER", e) : (t.initPagination(), t.opts.pagination.dropdown && t.getData())
    }
    t.exports = function(t, e) {
        var r = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;
        if ("Object" == Object.prototype.toString.call(t).slice(8, -1)) {
            r = this.vuex ? JSON.parse(JSON.stringify(t)) : t, this.vuex || (this.query = r);
            var i = e.target.name,
                o = e.target.value;
            i ? (this.dispatch("filter", {
                name: i,
                value: o
            }), this.dispatch("filter::" + i, o)) : this.dispatch("filter", o), this.updateState("query", r)
        } else if (t) {
            var s = this.getName(t.target.name),
                a = t.target.value;
            s ? r[s] = a : r = a, this.vuex || (this.query = r), s ? (this.dispatch("filter", {
                name: s,
                value: a
            }), this.dispatch("filter::" + s, a)) : this.dispatch("filter", a), this.updateState("query", r)
        }
        return n(this, r)
    }
}, function(t, e, r) {
    "use strict";
    (function(t) {
        function n() {
            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function i(t, e) {
            if (n() < e) throw new RangeError("Invalid typed array length");
            return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
        }

        function o(t, e, r) {
            if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, r);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t)
            }
            return s(this, t, e, r)
        }

        function s(t, e, r, n) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? p(t, e, r, n) : "string" == typeof e ? l(t, e, r) : h(t, e)
        }

        function a(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function u(t, e, r, n) {
            return a(e), e <= 0 ? i(t, e) : void 0 !== r ? "string" == typeof n ? i(t, e).fill(r, n) : i(t, e).fill(r) : i(t, e)
        }

        function c(t, e) {
            if (a(e), t = i(t, e < 0 ? 0 : 0 | d(e)), !o.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < e; ++r) t[r] = 0;
            return t
        }

        function l(t, e, r) {
            if ("string" == typeof r && "" !== r || (r = "utf8"), !o.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | y(e, r);
            t = i(t, n);
            var s = t.write(e, r);
            return s !== n && (t = t.slice(0, s)), t
        }

        function f(t, e) {
            var r = e.length < 0 ? 0 : 0 | d(e.length);
            t = i(t, r);
            for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
            return t
        }

        function p(t, e, r, n) {
            if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = f(t, e), t
        }

        function h(t, e) {
            if (o.isBuffer(e)) {
                var r = 0 | d(e.length);
                return t = i(t, r), 0 === t.length ? t : (e.copy(t, 0, 0, r), t)
            }
            if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || W(e.length) ? i(t, 0) : f(t, e);
                if ("Buffer" === e.type && X(e.data)) return f(t, e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function d(t) {
            if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
            return 0 | t
        }

        function g(t) {
            return +t != t && (t = 0), o.alloc(+t)
        }

        function y(t, e) {
            if (o.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;
            for (var n = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return V(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return K(t).length;
                default:
                    if (n) return V(t).length;
                    e = ("" + e).toLowerCase(), n = !0
            }
        }

        function m(t, e, r) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if (r >>>= 0, e >>>= 0, r <= e) return "";
            for (t || (t = "utf8");;) switch (t) {
                case "hex":
                    return R(this, e, r);
                case "utf8":
                case "utf-8":
                    return T(this, e, r);
                case "ascii":
                    return B(this, e, r);
                case "latin1":
                case "binary":
                    return O(this, e, r);
                case "base64":
                    return P(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return k(this, e, r);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0
            }
        }

        function b(t, e, r) {
            var n = t[e];
            t[e] = t[r], t[r] = n
        }

        function v(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (i) return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" == typeof e && (e = o.from(e, n)), o.isBuffer(e)) return 0 === e.length ? -1 : _(t, e, r, n, i);
            if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : _(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function _(t, e, r, n, i) {
            function o(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            var s = 1,
                a = t.length,
                u = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, u /= 2, r /= 2
            }
            var c;
            if (i) {
                var l = -1;
                for (c = r; c < a; c++)
                    if (o(t, c) === o(e, -1 === l ? 0 : c - l)) {
                        if (-1 === l && (l = c), c - l + 1 === u) return l * s
                    } else -1 !== l && (c -= c - l), l = -1
            } else
                for (r + u > a && (r = a - u), c = r; c >= 0; c--) {
                    for (var f = !0, p = 0; p < u; p++)
                        if (o(t, c + p) !== o(e, p)) {
                            f = !1;
                            break
                        }
                    if (f) return c
                }
            return -1
        }

        function w(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = e.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var s = 0; s < n; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[r + s] = a
            }
            return s
        }

        function x(t, e, r, n) {
            return G(V(e, t.length - r), t, r, n)
        }

        function S(t, e, r, n) {
            return G(Q(e), t, r, n)
        }

        function A(t, e, r, n) {
            return S(t, e, r, n)
        }

        function C(t, e, r, n) {
            return G(K(e), t, r, n)
        }

        function E(t, e, r, n) {
            return G(H(e, t.length - r), t, r, n)
        }

        function P(t, e, r) {
            return 0 === e && r === t.length ? z.fromByteArray(t) : z.fromByteArray(t.slice(e, r))
        }

        function T(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r;) {
                var o = t[i],
                    s = null,
                    a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (i + a <= r) {
                    var u, c, l, f;
                    switch (a) {
                        case 1:
                            o < 128 && (s = o);
                            break;
                        case 2:
                            u = t[i + 1], 128 == (192 & u) && (f = (31 & o) << 6 | 63 & u) > 127 && (s = f);
                            break;
                        case 3:
                            u = t[i + 1], c = t[i + 2], 128 == (192 & u) && 128 == (192 & c) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (s = f);
                            break;
                        case 4:
                            u = t[i + 1], c = t[i + 2], l = t[i + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & l) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l) > 65535 && f < 1114112 && (s = f)
                    }
                }
                null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n.push(s), i += a
            }
            return j(n)
        }

        function j(t) {
            var e = t.length;
            if (e <= Z) return String.fromCharCode.apply(String, t);
            for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += Z));
            return r
        }

        function B(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n
        }

        function O(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n
        }

        function R(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = e; o < r; ++o) i += Y(t[o]);
            return i
        }

        function k(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }

        function M(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function D(t, e, r, n, i, s) {
            if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range")
        }

        function F(t, e, r, n) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }

        function $(t, e, r, n) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
        }

        function I(t, e, r, n, i, o) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function U(t, e, r, n, i) {
            return i || I(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(t, e, r, n, 23, 4), r + 4
        }

        function L(t, e, r, n, i) {
            return i || I(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(t, e, r, n, 52, 8), r + 8
        }

        function q(t) {
            if (t = N(t).replace(tt, ""), t.length < 2) return "";
            for (; t.length % 4 != 0;) t += "=";
            return t
        }

        function N(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function Y(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function V(t, e) {
            e = e || 1 / 0;
            for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === n) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }

        function Q(t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e
        }

        function H(t, e) {
            for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
            return o
        }

        function K(t) {
            return z.toByteArray(q(t))
        }

        function G(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
            return i
        }

        function W(t) {
            return t !== t
        }
        var z = r(66),
            J = r(67),
            X = r(19);
        e.Buffer = o, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = n(), o.poolSize = 8192, o._augment = function(t) {
            return t.__proto__ = o.prototype, t
        }, o.from = function(t, e, r) {
            return s(null, t, e, r)
        }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0
        })), o.alloc = function(t, e, r) {
            return u(null, t, e, r)
        }, o.allocUnsafe = function(t) {
            return c(null, t)
        }, o.allocUnsafeSlow = function(t) {
            return c(null, t)
        }, o.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, o.compare = function(t, e) {
            if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
                if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }, o.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, o.concat = function(t, e) {
            if (!X(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return o.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = o.allocUnsafe(e),
                i = 0;
            for (r = 0; r < t.length; ++r) {
                var s = t[r];
                if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, i), i += s.length
            }
            return n
        }, o.byteLength = y, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) b(this, e, e + 1);
            return this
        }, o.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
            return this
        }, o.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
            return this
        }, o.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : m.apply(this, arguments)
        }, o.prototype.equals = function(t) {
            if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === o.compare(this, t)
        }, o.prototype.inspect = function() {
            var t = "",
                r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
        }, o.prototype.compare = function(t, e, r, n, i) {
            if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
            for (var s = i - n, a = r - e, u = Math.min(s, a), c = this.slice(n, i), l = t.slice(e, r), f = 0; f < u; ++f)
                if (c[f] !== l[f]) {
                    s = c[f], a = l[f];
                    break
                }
            return s < a ? -1 : a < s ? 1 : 0
        }, o.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }, o.prototype.indexOf = function(t, e, r) {
            return v(this, t, e, r, !0)
        }, o.prototype.lastIndexOf = function(t, e, r) {
            return v(this, t, e, r, !1)
        }, o.prototype.write = function(t, e, r, n) {
            if (void 0 === e) n = "utf8", r = this.length, e = 0;
            else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1;;) switch (n) {
                case "hex":
                    return w(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return x(this, t, e, r);
                case "ascii":
                    return S(this, t, e, r);
                case "latin1":
                case "binary":
                    return A(this, t, e, r);
                case "base64":
                    return C(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, t, e, r);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0
            }
        }, o.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var Z = 4096;
        o.prototype.slice = function(t, e) {
            var r = this.length;
            t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
            var n;
            if (o.TYPED_ARRAY_SUPPORT) n = this.subarray(t, e), n.__proto__ = o.prototype;
            else {
                var i = e - t;
                n = new o(i, void 0);
                for (var s = 0; s < i; ++s) n[s] = this[s + t]
            }
            return n
        }, o.prototype.readUIntLE = function(t, e, r) {
            t |= 0, e |= 0, r || M(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return n
        }, o.prototype.readUIntBE = function(t, e, r) {
            t |= 0, e |= 0, r || M(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
            return n
        }, o.prototype.readUInt8 = function(t, e) {
            return e || M(t, 1, this.length), this[t]
        }, o.prototype.readUInt16LE = function(t, e) {
            return e || M(t, 2, this.length), this[t] | this[t + 1] << 8
        }, o.prototype.readUInt16BE = function(t, e) {
            return e || M(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, o.prototype.readUInt32LE = function(t, e) {
            return e || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, o.prototype.readUInt32BE = function(t, e) {
            return e || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, o.prototype.readIntLE = function(t, e, r) {
            t |= 0, e |= 0, r || M(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n
        }, o.prototype.readIntBE = function(t, e, r) {
            t |= 0, e |= 0, r || M(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
            return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
        }, o.prototype.readInt8 = function(t, e) {
            return e || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, o.prototype.readInt16LE = function(t, e) {
            e || M(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, o.prototype.readInt16BE = function(t, e) {
            e || M(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, o.prototype.readInt32LE = function(t, e) {
            return e || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, o.prototype.readInt32BE = function(t, e) {
            return e || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, o.prototype.readFloatLE = function(t, e) {
            return e || M(t, 4, this.length), J.read(this, t, !0, 23, 4)
        }, o.prototype.readFloatBE = function(t, e) {
            return e || M(t, 4, this.length), J.read(this, t, !1, 23, 4)
        }, o.prototype.readDoubleLE = function(t, e) {
            return e || M(t, 8, this.length), J.read(this, t, !0, 52, 8)
        }, o.prototype.readDoubleBE = function(t, e) {
            return e || M(t, 8, this.length), J.read(this, t, !1, 52, 8)
        }, o.prototype.writeUIntLE = function(t, e, r, n) {
            if (t = +t, e |= 0, r |= 0, !n) {
                D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            }
            var i = 1,
                o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
            return e + r
        }, o.prototype.writeUIntBE = function(t, e, r, n) {
            if (t = +t, e |= 0, r |= 0, !n) {
                D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            }
            var i = r - 1,
                o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
            return e + r
        }, o.prototype.writeUInt8 = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, o.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2
        }, o.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2
        }, o.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : $(this, t, e, !0), e + 4
        }, o.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : $(this, t, e, !1), e + 4
        }, o.prototype.writeIntLE = function(t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                D(this, t, e, r, i - 1, -i)
            }
            var o = 0,
                s = 1,
                a = 0;
            for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + r
        }, o.prototype.writeIntBE = function(t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                D(this, t, e, r, i - 1, -i)
            }
            var o = r - 1,
                s = 1,
                a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + r
        }, o.prototype.writeInt8 = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, o.prototype.writeInt16LE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2
        }, o.prototype.writeInt16BE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2
        }, o.prototype.writeInt32LE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : $(this, t, e, !0), e + 4
        }, o.prototype.writeInt32BE = function(t, e, r) {
            return t = +t, e |= 0, r || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : $(this, t, e, !1), e + 4
        }, o.prototype.writeFloatLE = function(t, e, r) {
            return U(this, t, e, !0, r)
        }, o.prototype.writeFloatBE = function(t, e, r) {
            return U(this, t, e, !1, r)
        }, o.prototype.writeDoubleLE = function(t, e, r) {
            return L(this, t, e, !0, r)
        }, o.prototype.writeDoubleBE = function(t, e, r) {
            return L(this, t, e, !1, r)
        }, o.prototype.copy = function(t, e, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var i, s = n - r;
            if (this === t && r < e && e < n)
                for (i = s - 1; i >= 0; --i) t[i + e] = this[i + r];
            else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < s; ++i) t[i + e] = this[i + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
            return s
        }, o.prototype.fill = function(t, e, r, n) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0);
            var s;
            if ("number" == typeof t)
                for (s = e; s < r; ++s) this[s] = t;
            else {
                var a = o.isBuffer(t) ? t : V(new o(t, n).toString()),
                    u = a.length;
                for (s = 0; s < r - e; ++s) this[s + e] = a[s % u]
            }
            return this
        };
        var tt = /[^+\/0-9A-Za-z-_]/g
    }).call(e, r(65))
}, function(t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == r.call(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        if (!Array.isArray(t)) throw new TypeError("array-unique expects an array.");
        for (var e = t.length, r = -1; r++ < e;)
            for (var n = r + 1; n < t.length; ++n) t[r] === t[n] && t.splice(n--, 1);
        return t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        for (var r = new Array(e), n = 0; n < e; n++) r[n] = t;
        return r
    }
}, function(t, e, r) {
    "use strict";
    var n = r(96),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r) {
        n(t, function(n, o) {
            if (i.call(t, o)) return e.call(r, t[o], o, t)
        })
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = {
                vuex: !0,
                activeState: !1,
                userColumnsDisplay: [],
                userControlsColumns: !1,
                displayColumnsDropdown: !1
            };
        return t ? n : (n = (0, i.default)(n, {
            vuex: !1,
            count: 0,
            customQueries: {},
            query: null,
            page: r,
            limit: 10,
            windowWidth: window.innerWidth,
            orderBy: {
                column: !1,
                ascending: !0
            }
        }), "server" == e && (n.data = []), n)
    };
    var n = r(0),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n)
}, function(t, e, r) {
    "use strict";

    function n() {
        for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < 5; r++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    }
    t.exports = function() {
        return {
            id: n(),
            openChildRows: [],
            windowWidth: window.innerWidth,
            userMultiSorting: {}
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        var e, r, n, a = {};
        for (var u in t) {
            n = o(t[u]);
            try {
                r = s(t[u]), e = i(r, n), a[u] = e.concat([n])
            } catch (t) {
                console.warn("Unknown device " + r)
            }
        }
        return a
    }

    function i(t, e) {
        var r = {
            desktop: [1024, null],
            tablet: [480, 1024],
            mobile: [0, 480],
            tabletL: [768, 1024],
            tabletP: [480, 768],
            mobileL: [320, 480],
            mobileP: [0, 320]
        };
        switch (e) {
            case "min":
                return [r[t][0], null];
            case "max":
                return [0, r[t][1]];
            default:
                return r[t]
        }
    }

    function o(t) {
        var e = t.split("_");
        return ["not", "min", "max"].indexOf(e[0]) > -1 && e[0]
    }

    function s(t) {
        var e = t.split("_");
        return e.length > 1 ? e[1] : e[0]
    }
    var a = r(151),
        u = r(152);
    t.exports = function(t) {
        t.vuex ? u(t) : t.limit = t.opts.perPage, a(t.opts.columnsDisplay) || (t.columnsDisplay = n(t.opts.columnsDisplay), window.addEventListener("resize", function() {
            t.windowWidth = window.innerWidth
        }.bind(t)))
    }
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function(t, e) {
        var i = {
                bootstrap3: r(155)(),
                bootstrap4: r(156)(),
                bulma: r(157)()
            },
            o = {
                default: r(158),
                footerPagination: r(159)
            };
        return function(s) {
            var a = {
                rows: r(160).call(this, s),
                normalFilter: r(161).call(this, s),
                dropdownPagination: r(162).call(this, s),
                dropdownPaginationCount: r(163).call(this, s),
                columnFilters: r(164).call(this, s),
                pagination: r(168).call(this, s),
                headings: r(169).call(this, s),
                perPage: r(171).call(this, s),
                columnsDropdown: r(172).call(this, s)
            };
            if ("string" == typeof t && (!o[t] || "function" != typeof o[t])) throw 'vue-tables-2: Template "' + t + '" does not exist';
            if ("string" == typeof e && (!i[e] || "object" !== n(i[e]))) throw 'vue-tables-2: Theme "' + e + '" does not exist';
            var u = "string" == typeof t ? o[t] : t,
                c = "string" == typeof e ? i[e] : e(),
                l = r(175).call(this);
            return u.call(this, s, a, c, l)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this,
            r = [];
        return this.opts.perPageValues.every(function(n) {
            var i = n >= e.count,
                o = e.limit == n || i && e.limit > n;
            return r.push(t("option", {
                domProps: {
                    value: n,
                    selected: o
                }
            }, [n])), !i
        }), r
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return Math.ceil(this.count / this.limit)
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t ? "string" == typeof t ? t.toLowerCase() : t : ""
    }

    function i(t, e, r) {
        if (r) return e == t;
        if (["string", "number"].includes(void 0 === e ? "undefined" : s(e))) return String(e).toLowerCase().indexOf(t) > -1;
        if (u(e)) var n = moment(t.start, "YYYY-MM-DD HH:mm:ss"),
            o = moment(t.end, "YYYY-MM-DD HH:mm:ss");
        if ("object" === (void 0 === e ? "undefined" : s(e))) {
            for (var a in e)
                if (i(t, e[a])) return !0;
            return !1
        }
        return e >= n && e <= o
    }

    function o(t, e, r) {
        return u(t) ? e ? t : t.format(r) : t
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = r(179),
        u = r(5),
        c = r(180);
    t.exports = function(t, e) {
        if (e) {
            var r = this.query;
            this.setPage(1, !0);
            var u = this.getName(e.target.name),
                l = "object" === s(e.target.value) ? e.target.value : "" + e.target.value;
            u ? r[u] = l : r = l, this.vuex ? this.commit("SET_FILTER", r) : this.query = r, this.updateState("query", r), u ? (this.dispatch("filter", {
                name: u,
                value: l
            }), this.dispatch("filter::" + u, l)) : this.dispatch("filter", l)
        }
        var f = this.query,
            p = f ? 1 : 0;
        if (!this.opts) return t;
        this.opts.filterByColumn && (p = a(f));
        var l, h, d, g, y, m = this.opts.dateFormat,
            t = c(t, this.opts.customFilters, this.customQueries);
        return p ? t.filter(function(t, e) {
            return h = 0, this.filterableColumns.forEach(function(e) {
                g = this.opts.dateColumns.indexOf(e) > -1 && this.opts.filterByColumn, y = this.isListFilter(e) && this.opts.filterByColumn, l = o(t[e], g, m), d = this.opts.filterByColumn ? f[e] : f, (d = n(d)) && i(d, l, y) && h++
            }.bind(this)), h >= p
        }.bind(this)) : t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        o = r(31),
        s = r(187);
    t.exports = {
        TodoTable: o,
        ServerTable: s,
        Event: i.default
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = r(11),
        o = r(13),
        s = n(o),
        a = r(14),
        u = n(a),
        c = r(0),
        l = n(c),
        f = r(15),
        p = n(f),
        h = r(23),
        d = n(h),
        g = r(24),
        y = r(25),
        m = r(26);
    e.install = function(t, e, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "bootstrap3",
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "default",
            c = l.default.recursive(!0, (0, p.default)(), {
                name: "todo-table",
                components: {
                    Pagination: i.Pagination
                },
                render: m.call(this, a, o),
                props: {
                    columns: {
                        type: Array,
                        required: !0
                    },
                    data: {
                        type: Array,
                        required: !0
                    },
                    name: {
                        type: String,
                        required: !1
                    },
                    options: {
                        type: Object,
                        required: !1,
                        default: function() {
                            return {}
                        }
                    }
                },
                created: function() {
                    y(this), this.vuex || (this.initOrderBy(), this.query = this.initQuery(), this.customQueries = this.initCustomFilters())
                },
                mounted: function() {
                    this.hasDateFilters() && this.initDateFilters(), this.opts.toMomentFormat && this.transformDateStringsToMoment(), this.vuex || (this.registerClientFilters(), this.options.initialPage && this.setPage(this.options.initialPage)), this.opts.groupBy && !this.opts.orderBy && (this.orderBy.column = this.opts.groupBy), this.loadState()
                },
                data: function() {
                    return l.default.recursive(g(), {
                        source: "todo",
                        globalOptions: e,
                        currentlySorting: {},
                        time: Date.now()
                    }, (0, d.default)(n, "todo", this.options.initialPage))
                },
                computed: {
                    q: r(176),
                    customQ: r(177),
                    totalPages: r(28),
                    filteredData: r(178),
                    hasMultiSort: function() {
                        return this.opts.clientMultiSorting
                    }
                },
                filters: {
                    setCount: r(182),
                    date: r(183)
                },
                methods: {
                    transformDateStringsToMoment: r(184),
                    registerClientFilters: r(185),
                    search: r(29),
                    defaultSort: r(186),
                    loadState: function() {
                        if (this.opts.saveState) {
                            if (!this.storage.getItem(this.stateKey)) return this.initState(), void(this.activeState = !0);
                            var t = JSON.parse(this.storage.getItem(this.stateKey));
                            this.opts.filterable && this.setFilter(t.query), this.setOrder(t.orderBy.column, t.orderBy.ascending), this.vuex ? this.commit("SET_LIMIT", t.perPage) : this.limit = t.perPage, this.setPage(t.page), this.activeState = !0
                        }
                    }
                }
            }),
            f = n ? (0, s.default)() : (0, u.default)();
        return c = l.default.recursive(c, f), t.component("v-todo-table", c), c
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function i(t, e) {
        return Array.apply(0, Array(e)).map(function(e, r) {
            return r + t
        })
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : o(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
        },
        a = r(33),
        u = r(12);
    t.exports = {
        render: a.call(void 0),
        props: {
            for: {
                type: String,
                required: !1
            },
            theme: {
                default: "bootstrap3"
            },
            align: {
                type: String,
                default: "center"
            },
            records: {
                type: Number,
                required: !0
            },
            perPage: {
                type: Number,
                required: !1,
                default: 25
            },
            chunk: {
                type: Number,
                required: !1,
                default: 10
            },
            countText: {
                type: String,
                required: !1,
                default: "Showing {from} to {to} of {count} records|{count} records|One record"
            },
            vuex: {
                type: Boolean
            },
            format: {
                type: Boolean,
                default: !0
            }
        },
        created: function() {
            if (this.vuex) {
                if (!this.for) throw new Error('vue-pagination-2: The "for" prop is required when using vuex');
                var t = this.for;
                this.$store.state[t] || this.$store.registerModule(this.for, {
                    state: {
                        page: 1
                    },
                    mutations: n({}, t + "/PAGINATE", function(t, e) {
                        t.page = e
                    })
                })
            }
        },
        data: function() {
            return {
                Page: 1
            }
        },
        computed: {
            Theme: function() {
                if ("object" === s(this.theme)) return this.theme;
                var t = {
                    bootstrap3: r(34),
                    bootstrap4: r(35),
                    bulma: r(36)
                };
                if (void 0 === s(t[this.theme])) throw "vue-pagination-2: the theme " + this.theme + " does not exist";
                return t[this.theme]
            },
            page: function() {
                return this.vuex ? this.$store.state[this.for].page : this.Page
            },
            pages: function() {
                return this.records ? i(this.paginationStart, this.pagesInCurrentChunk) : []
            },
            totalPages: function() {
                return this.records ? Math.ceil(this.records / this.perPage) : 1
            },
            totalChunks: function() {
                return Math.ceil(this.totalPages / this.chunk)
            },
            currentChunk: function() {
                return Math.ceil(this.page / this.chunk)
            },
            paginationStart: function() {
                return (this.currentChunk - 1) * this.chunk + 1
            },
            pagesInCurrentChunk: function() {
                return this.paginationStart + this.chunk <= this.totalPages ? this.chunk : this.totalPages - this.paginationStart + 1
            },
            count: function() {
                var t = (this.page - 1) * this.perPage + 1,
                    e = this.page == this.totalPages ? this.records : t + this.perPage - 1,
                    r = this.countText.split("|");
                return r[Math.min(1 == this.records ? 2 : 1 == this.totalPages ? 1 : 0, r.length - 1)].replace("{count}", this.formatNumber(this.records)).replace("{from}", this.formatNumber(t)).replace("{to}", this.formatNumber(e))
            }
        },
        methods: {
            setPage: function(t) {
                this.allowedPage(t) && this.paginate(t)
            },
            paginate: function(t) {
                this.vuex ? this.$store.commit(this.for+"/PAGINATE", t) : this.Page = t, this.$emit("paginate", t), this.for && u.$emit("vue-pagination::" + this.for, t)
            },
            next: function() {
                return this.setPage(this.page + 1)
            },
            prev: function() {
                return this.setPage(this.page - 1)
            },
            nextChunk: function() {
                return this.setChunk(1)
            },
            prevChunk: function() {
                return this.setChunk(-1)
            },
            setChunk: function(t) {
                this.setPage((this.currentChunk - 1 + t) * this.chunk + 1)
            },
            allowedPage: function(t) {
                return t >= 1 && t <= this.totalPages
            },
            allowedChunk: function(t) {
                return 1 == t && this.currentChunk < this.totalChunks || -1 == t && this.currentChunk > 1
            },
            allowedPageClass: function(t) {
                return this.allowedPage(t) ? "" : "disabled"
            },
            allowedChunkClass: function(t) {
                return this.allowedChunk(t) ? "" : "disabled"
            },
            activeClass: function(t) {
                return this.page == t ? this.Theme.active : ""
            },
            formatNumber: function(t) {
                return this.format ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : t
            }
        },
        beforeDestroy: function() {
            u.$off(), u.$destroy()
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return function(t) {
            var e = this.Theme,
                r = (this.align, []);
            return this.pages.map(function(n) {
                r.push(t("li", {
                    class: "VuePagination__pagination-item " + e.item + " " + this.activeClass(n)
                }, [t("a", {
                    class: e.link + " " + this.activeClass(n),
                    attrs: {
                        href: "javascript:void(0)",
                        role: "button"
                    },
                    on: {
                        click: this.setPage.bind(this, n)
                    }
                }, [n])]))
            }.bind(this)), t("div", {
                class: "VuePagination " + e.wrapper
            }, [t("nav", {
                class: "" + e.nav
            }, [t("ul", {
                directives: [{
                    name: "show",
                    value: this.totalPages > 1
                }],
                class: e.list + " VuePagination__pagination"
            }, [t("li", {
                class: "VuePagination__pagination-item " + e.item + " " + e.prev + " VuePagination__pagination-item-prev-chunk " + this.allowedChunkClass(-1)
            }, [t("a", {
                class: e.link,
                attrs: {
                    href: "javascript:void(0);",
                    disabled: !!this.allowedChunkClass(-1)
                },
                on: {
                    click: this.setChunk.bind(this, -1)
                }
            }, ["<<"])]), t("li", {
                class: "VuePagination__pagination-item " + e.item + " " + e.prev + " VuePagination__pagination-item-prev-page " + this.allowedPageClass(this.page - 1)
            }, [t("a", {
                class: e.link,
                attrs: {
                    href: "javascript:void(0);",
                    disabled: !!this.allowedPageClass(this.page - 1)
                },
                on: {
                    click: this.prev.bind(this)
                }
            }, ["<"])]), r, t("li", {
                class: "VuePagination__pagination-item " + e.item + " " + e.next + " VuePagination__pagination-item-next-page " + this.allowedPageClass(this.page + 1)
            }, [t("a", {
                class: e.link,
                attrs: {
                    href: "javascript:void(0);",
                    disabled: !!this.allowedPageClass(this.page + 1)
                },
                on: {
                    click: this.next.bind(this)
                }
            }, [">"])]), t("li", {
                class: "VuePagination__pagination-item " + e.item + " " + e.next + " VuePagination__pagination-item-next-chunk " + this.allowedChunkClass(1)
            }, [t("a", {
                class: e.link,
                attrs: {
                    href: "javascript:void(0);",
                    disabled: !!this.allowedChunkClass(1)
                },
                on: {
                    click: this.setChunk.bind(this, 1)
                }
            }, [">>"])])]), t("p", {
                directives: [{
                    name: "show",
                    value: parseInt(this.records)
                }],
                class: "VuePagination__count " + e.count
            }, [this.count])])])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        nav: "",
        count: "",
        wrapper: "",
        list: "pagination",
        item: "page-item",
        link: "page-link",
        next: "",
        prev: "",
        active: "active"
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        nav: "",
        count: "",
        wrapper: "",
        list: "pagination",
        item: "page-item",
        link: "page-link",
        next: "",
        prev: "",
        active: "active"
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        nav: "",
        count: "",
        wrapper: "pagination",
        list: "pagination-list",
        item: "",
        link: "pagination-link",
        next: "",
        prev: "",
        active: "is-current"
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var i;
    t.exports = (i = {
        initQuery: r(39),
        initCustomFilters: r(40),
        initOptions: r(41),
        sortableClass: r(42),
        sortableChevronClass: r(43),
        display: r(16),
        orderByColumn: r(44),
        getHeading: r(45),
        getHeadingTooltip: r(47),
        sortable: r(48)
    }, n(i, "display", r(16)), n(i, "serverSearch", r(17)), n(i, "initOrderBy", r(49)), n(i, "initDateFilters", r(50)), n(i, "setFilter", r(51)), n(i, "setPage", r(52)), n(i, "setOrder", r(53)), n(i, "initPagination", r(54)), n(i, "filterable", r(55)), n(i, "isTextFilter", r(56)), n(i, "isDateFilter", r(57)), n(i, "isListFilter", r(58)), n(i, "highlightMatch", r(59)), n(i, "formatDate", r(60)), n(i, "hasDateFilters", r(61)), n(i, "applyFilters", r(110)), n(i, "optionText", r(111)), n(i, "render", r(112)), n(i, "rowWasClicked", r(113)), n(i, "setLimit", r(114)), n(i, "getOpenChildRows", r(115)), n(i, "dispatch", r(116)), n(i, "toggleChildRow", r(117)), n(i, "childRowTogglerClass", r(118)), n(i, "sendRequest", r(119)), n(i, "getResponseData", r(120)), n(i, "getSortFn", r(121)), n(i, "initState", r(122)), n(i, "updateState", r(123)), n(i, "columnClass", r(124)), n(i, "getName", r(125)), n(i, "toggleColumn", r(126)), n(i, "_setFiltersDOM", r(127)), n(i, "_setDateFilterText", r(128)), n(i, "setUserMultiSort", r(129)), n(i, "_currentlySorted", r(130)), n(i, "_getChildRowTemplate", r(131)), n(i, "_toggleColumnsDropdown", r(132)), n(i, "_onlyColumn", r(133)), n(i, "_onPagination", r(134)), n(i, "_toggleGroupDirection", r(135)), i)
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        return t.hasOwnProperty(e) ? void 0 === t[e].start ? t[e] : {
            start: t[e].start.format("YYYY-MM-DD HH:mm:ss"),
            end: t[e].end.format("YYYY-MM-DD HH:mm:ss")
        } : ""
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function() {
        var t = this.opts.initFilters;
        if (!this.opts.filterByColumn) return t.hasOwnProperty("GENERIC") ? t.GENERIC : "";
        var e = {};
        return (this.opts.filterable && "object" == i(this.opts.filterable) ? this.opts.filterable : this.columns).forEach(function(r) {
            e[r] = n(t, r)
        }.bind(this)), e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = {},
            e = this.opts.initFilters,
            r = void 0;
        return this.opts.customFilters.forEach(function(n) {
            r = "todo" == this.source ? n.name : n, t[r] = e.hasOwnProperty(r) ? e[r] : ""
        }.bind(this)), t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t, e, r) {
        return e && (t = n.recursive(t, e)), r = n.recursive(t, r)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this.sortable(t) ? "VueTables__sortable " : "";
        return e += this.columnClass(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this.opts.sortIcon.base + " ";
        if (this.sortable(t)) {
            if (this.opts.sortIcon.is && !this._currentlySorted(t) && (e += this.opts.sortIcon.is + " "), this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
                var r = this.userMultiSorting[this.orderBy.column].filter(function(e) {
                    return e.column === t
                })[0];
                r && (e += r.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down)
            }
            return t == this.orderBy.column && (e += 1 == this.orderBy.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down), e
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        this.sortable(t) && (e.shiftKey && this.orderBy.column && this.hasMultiSort ? this.setUserMultiSort(t) : (this.userMultiSorting = {}, this.orderBy.ascending = t != this.orderBy.column || !this.orderBy.ascending, this.orderBy.column = t, this.updateState("orderBy", this.orderBy), this.dispatch("sorted", JSON.parse(JSON.stringify(this.orderBy)))), "server" == this.source && this.getData())
    }
}, function(t, e, r) {
    "use strict";
    var n = r(46),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function(t, e) {
        if ("string" != typeof t) return "";
        if (this.$scopedSlots && void 0 !== this.$scopedSlots["h__" + t]) return this.$scopedSlots["h__" + t]();
        var r = (0, i.default)(t.split("_").join(" "));
        return this.opts.headings.hasOwnProperty(t) ? "function" == typeof this.opts.headings[t] ? e ? this.opts.headings[t].call(this.$parent, e) : r : this.opts.headings[t] : r
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if ("string" != typeof t) return "";
        return this.opts.headingsTooltips.hasOwnProperty(t) ? "function" == typeof this.opts.headingsTooltips[t] ? e ? this.opts.headingsTooltips[t].call(this.$parent, e) : "" : this.opts.headingsTooltips[t] : ""
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return !("boolean" != typeof this.opts.sortable || !this.opts.sortable) || this.opts.sortable.indexOf(t) > -1
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.opts.orderBy && (this.orderBy.column = this.opts.orderBy.column, this.orderBy.ascending = !this.opts.orderBy.hasOwnProperty("ascending") || this.opts.orderBy.ascending)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function() {
        if ("undefined" == typeof $) return void console.error("Date filters require jquery and daterangepicker");
        var t, e = this,
            r = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query,
            i = function(t, r) {
                return "todo" == e.source ? e.search(e.data, r) : e.serverSearch(t, r)
            },
            o = n.recursive(this.opts.datepickerOptions, {
                autoUpdateInput: !1,
                singleDatePicker: !1,
                locale: {
                    format: this.opts.dateFormat
                }
            });
        e.opts.dateColumns.forEach(function(n) {
            t = $(e.$el).find("#VueTables__" + n + "-filter"), t.daterangepicker(o), t.on("apply.daterangepicker", function(t, o) {
                r[n] = {
                    start: o.startDate.format("YYYY-MM-DD HH:mm:ss"),
                    end: o.endDate.format("YYYY-MM-DD HH:mm:ss")
                }, e.vuex || (e.query = r), $(this).text(o.startDate.format(e.opts.dateFormat) + " - " + o.endDate.format(e.opts.dateFormat)), e.updateState("query", r), i(r, {
                    target: {
                        name: "vf__" + n,
                        value: r[n]
                    }
                })
            }), t.on("cancel.daterangepicker", function(t, o) {
                r[n] = "", e.vuex || (e.query = r), o.setStartDate(moment()), o.setEndDate(moment()), e.updateState("query", r), $(this).html("<span class='VueTables__filter-placeholder'>" + e.display("filterBy", {
                    column: e.getHeading(n)
                }) + "</span>"), i(r, {
                    target: {
                        name: "vf__" + n,
                        value: r[n]
                    }
                })
            })
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t) {
        if (!this.opts.filterable) return void console.warn("vue-tables-2: Unable to set filter. Filtering is disabled (filterable: false)");
        if (this.opts.filterByColumn && "string" == typeof t) return void console.warn("vue-tables-2: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)");
        if (!this.opts.filterByColumn && "string" != typeof t) return void console.warn("vue-tables-2: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)");
        var e = this.opts.filterByColumn ? n(this.query, t) : t;
        this.vuex ? this.commit("SET_FILTER", e) : (this.query = e, this.setPage(1, !0)), this.updateState("query", e), this._setFiltersDOM(t), "server" == this.source && this.getData()
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        t = t || this.$refs.page.value, this.opts.pagination.dropdown || (this.$refs.pagination.Page = t), this.page = t, this.updateState("page", t), "server" != this.source || e || this.getData()
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        this.orderBy.column = t, this.orderBy.ascending = e, this.updateState("orderBy", {
            column: t,
            ascending: e
        }), "server" == this.source && this.getData()
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.page = 1, this.opts.pagination.dropdown || this.$refs.pagination.setPage(1)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return !!this.opts.filterable && ("boolean" == typeof this.opts.filterable && this.opts.filterable || this.opts.filterable.indexOf(t) > -1)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return this.query.hasOwnProperty(t) && -1 == this.opts.dateColumns.indexOf(t) && !this.opts.listColumns.hasOwnProperty(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return this.query.hasOwnProperty(t) && this.opts.dateColumns.indexOf(t) > -1
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return this.query.hasOwnProperty(t) && this.opts.listColumns.hasOwnProperty(t)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return String(t).split(e).map(function(t) {
            return e.test(t) ? r("b", {}, t) : t
        })
    }

    function i(t) {
        return "string" == typeof t ? t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") : t
    }
    t.exports = function(t, e, r) {
        if (!this.opts.highlightMatches || -1 === this.filterableColumns.indexOf(e)) return t;
        var o = this.opts.filterByColumn ? this.query[e] : this.query;
        return o ? (o = new RegExp("(" + i(o) + ")", "i"), r("span", {
            class: "VueTables__highlight"
        }, n(t, o, r))) : t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5);
    t.exports = function(t, e) {
        return n(t) ? t.format(e) : t
    }
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = r(62);
    t.exports = function() {
        var t = this.opts;
        return t.dateColumns.length && t.filterByColumn && ("boolean" == typeof t.filterable && t.filterable || "object" == n(t.filterable) && i(t.filterable, t.dateColumns).length)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(63),
        i = r(106),
        o = r(20),
        s = r(108),
        a = r(109);
    t.exports = function(t) {
        if (null == t) return [];
        if (1 === arguments.length) return o(t);
        var e = s(arguments, 1);
        return n(o(t), function(t) {
            return i(e, function(e) {
                return -1 !== a(e, t)
            })
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(64),
        i = r(68),
        o = r(71);
    t.exports = function(t, e, r) {
        if (0 === t.length) return [];
        if ("function" === n(e) || "regexp" === n(e)) {
            var s = o.matcher(e, r);
            return i(t, function(t) {
                return s(t)
            })
        }
        return "string" === n(e) || "array" === n(e) ? i(t, o.filter(e, r)) : []
    }
}, function(t, e, r) {
    (function(e) {
        var r = Object.prototype.toString;
        t.exports = function(t) {
            if (void 0 === t) return "undefined";
            if (null === t) return "null";
            if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
            if ("object" != typeof t) return typeof t;
            if (Array.isArray(t)) return "array";
            var n = r.call(t);
            return t instanceof RegExp || "[object RegExp]" === n ? "regexp" : t instanceof Date || "[object Date]" === n ? "date" : "[object Function]" === n ? "function" : "[object Arguments]" === n ? "arguments" : void 0 !== e && e.isBuffer(t) ? "buffer" : n.slice(8, -1).toLowerCase()
        }
    }).call(e, r(18).Buffer)
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    "use strict";

    function n(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function i(t) {
        return 3 * t.length / 4 - n(t)
    }

    function o(t) {
        var e, r, i, o, s, a = t.length;
        o = n(t), s = new f(3 * a / 4 - o), r = o > 0 ? a - 4 : a;
        var u = 0;
        for (e = 0; e < r; e += 4) i = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], s[u++] = i >> 16 & 255, s[u++] = i >> 8 & 255, s[u++] = 255 & i;
        return 2 === o ? (i = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, s[u++] = 255 & i) : 1 === o && (i = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, s[u++] = i >> 8 & 255, s[u++] = 255 & i), s
    }

    function s(t) {
        return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
    }

    function a(t, e, r) {
        for (var n, i = [], o = e; o < r; o += 3) n = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(s(n));
        return i.join("")
    }

    function u(t) {
        for (var e, r = t.length, n = r % 3, i = "", o = [], s = 0, u = r - n; s < u; s += 16383) o.push(a(t, s, s + 16383 > u ? u : s + 16383));
        return 1 === n ? (e = t[r - 1], i += c[e >> 2], i += c[e << 4 & 63], i += "==") : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i += c[e >> 10], i += c[e >> 4 & 63], i += c[e << 2 & 63], i += "="), o.push(i), o.join("")
    }
    e.byteLength = i, e.toByteArray = o, e.fromByteArray = u;
    for (var c = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, d = p.length; h < d; ++h) c[h] = p[h], l[p.charCodeAt(h)] = h;
    l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
}, function(t, e) {
    e.read = function(t, e, r, n, i) {
        var o, s, a = 8 * i - n - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            f = r ? i - 1 : 0,
            p = r ? -1 : 1,
            h = t[e + f];
        for (f += p, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += p, l -= 8);
        for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + f], f += p, l -= 8);
        if (0 === o) o = 1 - c;
        else {
            if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
            s += Math.pow(2, n), o -= c
        }
        return (h ? -1 : 1) * s * Math.pow(2, o - n)
    }, e.write = function(t, e, r, n, i, o) {
        var s, a, u, c = 8 * o - i - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : o - 1,
            d = n ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + f >= 1 ? p / u : p * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + h] = 255 & a, h += d, a /= 256, i -= 8);
        for (s = s << i | a, c += i; c > 0; t[r + h] = 255 & s, h += d, s /= 256, c -= 8);
        t[r + h - d] |= 128 * g
    }
}, function(t, e, r) {
    "use strict";
    var n = r(69);
    t.exports = function(t, e, r) {
        if (null == t) return [];
        if ("function" != typeof e) throw new TypeError("expected callback to be a function");
        for (var i = n(e, r), o = t.length, s = t.slice(), a = -1; o--;) i(t[o], a++) || s.splice(o, 1);
        return s
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        for (var r = t.length, n = -1; ++n < r;)
            if (s(t[n], e)) return !0;
        return !1
    }

    function i(t, e) {
        for (var r = e.length, i = -1; ++i < r;)
            if (!n(t, e[i])) return !1;
        return !0
    }

    function o(t, e) {
        for (var r in e)
            if (e.hasOwnProperty(r) && !1 === s(t[r], e[r])) return !1;
        return !0
    }

    function s(t, e) {
        return "object" === c(t) ? Array.isArray(t) && Array.isArray(e) ? i(t, e) : o(t, e) : t === e
    }

    function a(t) {
        return function(e) {
            return e[t]
        }
    }

    function u(t) {
        return t
    }
    var c = r(70);
    t.exports = function(t, e) {
        switch (c(t)) {
            case "undefined":
            case "null":
                return u;
            case "function":
                return void 0 !== e ? function(r, n, i) {
                    return t.call(e, r, n, i)
                } : t;
            case "object":
                return function(e) {
                    return s(e, t)
                };
            case "regexp":
                return function(e) {
                    return t.test(e)
                };
            case "string":
            case "number":
            default:
                return a(t)
        }
    }
}, function(t, e, r) {
    var n = r(2),
        i = Object.prototype.toString;
    t.exports = function(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
        if ("string" == typeof t || t instanceof String) return "string";
        if ("number" == typeof t || t instanceof Number) return "number";
        if ("function" == typeof t || t instanceof Function) return "function";
        if (void 0 !== Array.isArray && Array.isArray(t)) return "array";
        if (t instanceof RegExp) return "regexp";
        if (t instanceof Date) return "date";
        var e = i.call(t);
        return "[object RegExp]" === e ? "regexp" : "[object Date]" === e ? "date" : "[object Arguments]" === e ? "arguments" : "[object Error]" === e ? "error" : n(t) ? "buffer" : "[object Set]" === e ? "set" : "[object WeakSet]" === e ? "weakset" : "[object Map]" === e ? "map" : "[object WeakMap]" === e ? "weakmap" : "[object Symbol]" === e ? "symbol" : "[object Int8Array]" === e ? "int8array" : "[object Uint8Array]" === e ? "uint8array" : "[object Uint8ClampedArray]" === e ? "uint8clampedarray" : "[object Int16Array]" === e ? "int16array" : "[object Uint16Array]" === e ? "uint16array" : "[object Int32Array]" === e ? "int32array" : "[object Uint32Array]" === e ? "uint32array" : "[object Float32Array]" === e ? "float32array" : "[object Float64Array]" === e ? "float64array" : "object"
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        if (!t || !e) return [];
        if (r = r || {}, void 0 === r.cache && (r.cache = !0), !Array.isArray(e)) return i(t, e, r);
        for (var n = e.length, o = 0, s = [], a = []; n--;) {
            var u = e[o++];
            "string" == typeof u && 33 === u.charCodeAt(0) ? s.push.apply(s, i(t, u.slice(1), r)) : a.push.apply(a, i(t, u, r))
        }
        return y.diff(a, s)
    }

    function i(t, e, r) {
        if ("string" !== y.typeOf(t) && !Array.isArray(t)) throw new Error(d("match", "files", "a string or array"));
        t = y.arrayify(t), r = r || {};
        var i = r.negate || !1,
            o = e;
        "string" == typeof e && (i = "!" === e.charAt(0), i && (e = e.slice(1)), !0 === r.nonegate && (i = !1));
        for (var s = l(e, r), a = t.length, u = 0, c = []; u < a;) {
            var f = t[u++],
                p = y.unixify(f, r);
            s(p) && c.push(p)
        }
        if (0 === c.length) {
            if (!0 === r.failglob) throw new Error('micromatch.match() found no matches for: "' + o + '".');
            (r.nonull || r.nullglob) && c.push(y.unescapeGlob(o))
        }
        return i && (c = y.diff(t, c)), r.ignore && r.ignore.length && (e = r.ignore, r = y.omit(r, ["ignore"]), c = y.diff(c, n(c, e, r))), r.nodupes ? y.unique(c) : c
    }

    function o(t, e) {
        if (!Array.isArray(t) && "string" != typeof t) throw new TypeError(d("filter", "patterns", "a string or array"));
        t = y.arrayify(t);
        for (var r = t.length, n = 0, i = Array(r); n < r;) i[n] = l(t[n++], e);
        return function(t) {
            if (null == t) return [];
            var r = i.length,
                n = 0,
                o = !0;
            for (t = y.unixify(t, e); n < r;) {
                if (!(0, i[n++])(t)) {
                    o = !1;
                    break
                }
            }
            return o
        }
    }

    function s(t, e, r) {
        if ("string" != typeof t) throw new TypeError(d("isMatch", "filepath", "a string"));
        return t = y.unixify(t, r), "object" === y.typeOf(e) ? l(t, e) : l(e, r)(t)
    }

    function a(t, e, r) {
        if ("string" != typeof t) throw new TypeError(d("contains", "pattern", "a string"));
        return r = r || {}, r.contains = "" !== e, t = y.unixify(t, r), r.contains && !y.isGlob(e) ? -1 !== t.indexOf(e) : l(e, r)(t)
    }

    function u(t, e, r) {
        if (!Array.isArray(e) && "string" != typeof e) throw new TypeError(d("any", "patterns", "a string or array"));
        e = y.arrayify(e);
        var n = e.length;
        for (t = y.unixify(t, r); n--;) {
            if (l(e[n], r)(t)) return !0
        }
        return !1
    }

    function c(t, e, r) {
        if ("object" !== y.typeOf(t)) throw new TypeError(d("matchKeys", "first argument", "an object"));
        var n = l(e, r),
            i = {};
        for (var o in t) t.hasOwnProperty(o) && n(o) && (i[o] = t[o]);
        return i
    }

    function l(t, e) {
        if ("function" == typeof t) return t;
        if (t instanceof RegExp) return function(e) {
            return t.test(e)
        };
        if ("string" != typeof t) throw new TypeError(d("matcher", "pattern", "a string, regex, or function"));
        if (t = y.unixify(t, e), !y.isGlob(t)) return y.matchPath(t, e);
        var r = h(t, e);
        return e && e.matchBase ? y.hasFilename(r, e) : function(t) {
            return t = y.unixify(t, e), r.test(t)
        }
    }

    function f(t, e) {
        var r = Object.create(e || {}),
            n = r.flags || "";
        r.nocase && -1 === n.indexOf("i") && (n += "i");
        var i = g(t, r);
        r.negated = r.negated || i.negated, r.negate = r.negated, t = p(i.pattern, r);
        var o;
        try {
            return o = new RegExp(t, n)
        } catch (t) {
            if (t.reason = "micromatch invalid regex: (" + o + ")", r.strict) throw new SyntaxError(t)
        }
        return /$^/
    }

    function p(t, e) {
        var r = e && !e.contains ? "^" : "";
        return t = "(?:" + t + ")" + (e && !e.contains ? "$" : ""), e && e.negate ? r + "(?!^" + t + ").*$" : r + t
    }

    function h(t, e) {
        if ("string" !== y.typeOf(t)) throw new Error(d("makeRe", "glob", "a string"));
        return y.cache(f, t, e)
    }

    function d(t, e, r) {
        return "micromatch." + t + "(): " + e + " should be " + r + "."
    }
    var g = r(72),
        y = r(6);
    n.any = u, n.braces = n.braceExpand = y.braces, n.contains = a, n.expand = g, n.filter = o, n.isMatch = s, n.makeRe = h, n.match = i, n.matcher = l, n.matchKeys = c, t.exports = n
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        if ("string" != typeof t) throw new TypeError("micromatch.expand(): argument should be a string.");
        var r = new l(t, e || {}),
            n = r.options;
        if (!c.isGlob(t)) return r.pattern = r.pattern.replace(/([\/.])/g, "\\$1"), r;
        if (r.pattern = r.pattern.replace(/(\+)(?!\()/g, "\\$1"), r.pattern = r.pattern.split("$").join("\\$"), "boolean" != typeof n.braces && "boolean" != typeof n.nobraces && (n.braces = !0), ".*" === r.pattern) return {
            pattern: "\\." + p,
            tokens: d,
            options: n
        };
        if ("*" === r.pattern) return {
            pattern: a(n.dot),
            tokens: d,
            options: n
        };
        r.parse();
        var d = r.tokens;
        return d.is.negated = n.negated, !0 !== n.dotfiles && !d.is.dotfile || !1 === n.dot || (n.dotfiles = !0, n.dot = !0), !0 !== n.dotdirs && !d.is.dotdir || !1 === n.dot || (n.dotdirs = !0, n.dot = !0), /[{,]\./.test(r.pattern) && (n.makeRe = !1, n.dot = !0), !0 !== n.nonegate && (n.negated = r.negated), "." === r.pattern.charAt(0) && "/" !== r.pattern.charAt(1) && (r.pattern = "\\" + r.pattern), r.track("before braces"), d.is.braces && r.braces(), r.track("after braces"), r.track("before extglob"), d.is.extglob && r.extglob(), r.track("after extglob"), r.track("before brackets"), d.is.brackets && r.brackets(), r.track("after brackets"), r._replace("[!", "[^"), r._replace("(?", "(%~"), r._replace(/\[\]/, "\\[\\]"), r._replace("/[", "/" + (n.dot ? g : h) + "[", !0), r._replace("/?", "/" + (n.dot ? g : h) + "[^/]", !0), r._replace("/.", "/(?=.)\\.", !0), r._replace(/^(\w):([\\\/]+?)/gi, "(?=.)$1:$2", !0), -1 !== r.pattern.indexOf("[^") && (r.pattern = o(r.pattern)), !1 !== n.globstar && "**" === r.pattern ? r.pattern = u(n.dot) : (r.pattern = s(r.pattern, "[", "]"), r.escape(r.pattern), d.is.globstar && (r.pattern = i(r.pattern, "/**"), r.pattern = i(r.pattern, "**/"), r._replace("/**/", "(?:/" + u(n.dot) + "/|/)", !0), r._replace(/\*{2,}/g, "**"), r._replace(/(\w+)\*(?!\/)/g, "$1[^/]*?", !0), r._replace(/\*\*\/\*(\w)/g, u(n.dot) + "\\/" + (n.dot ? g : h) + "[^/]*?$1", !0), !0 !== n.dot && r._replace(/\*\*\/(.)/g, "(?:**\\/|)$1"), ("" !== d.path.dirname || /,\*\*|\*\*,/.test(r.orig)) && r._replace("**", u(n.dot), !0)), r._replace(/\/\*$/, "\\/" + a(n.dot), !0), r._replace(/(?!\/)\*$/, p, !0), r._replace(/([^\/]+)\*/, "$1" + a(!0), !0), r._replace("*", a(n.dot), !0), r._replace("?.", "?\\.", !0), r._replace("?:", "?:", !0), r._replace(/\?+/g, function(t) {
            var e = t.length;
            return 1 === e ? f : f + "{" + e + "}"
        }), r._replace(/\.([*\w]+)/g, "\\.$1"), r._replace(/\[\^[\\\/]+\]/g, f), r._replace(/\/+/g, "\\/"), r._replace(/\\{2,}/g, "\\")), r.unescape(r.pattern), r._replace("__UNESC_STAR__", "*"), r._replace("?.", "?\\."), r._replace("[^\\/]", f), r.pattern.length > 1 && /^[\[?*]/.test(r.pattern) && (r.pattern = (n.dot ? g : h) + r.pattern), r
    }

    function i(t, e) {
        var r = t.split(e),
            n = "" === r[0],
            i = "" === r[r.length - 1];
        return r = r.filter(Boolean), n && r.unshift(""), i && r.push(""), r.join(e)
    }

    function o(t) {
        return t.replace(/\[\^([^\]]*?)\]/g, function(t, e) {
            return -1 === e.indexOf("/") && (e = "\\/" + e), "[^" + e + "]"
        })
    }

    function s(t, e, r) {
        var n = t.split(e);
        return n.join("").length !== t.split(r).join("").length ? (t = n.join("\\" + e), t.split(r).join("\\" + r)) : t
    }

    function a(t) {
        return t ? "(?!" + d + ")(?=.)" + p : h + p
    }

    function u(t) {
        return t ? y : "(?:(?!(?:\\/|^)\\.).)*?"
    }
    var c = r(6),
        l = r(104);
    t.exports = n;
    var f = "[^/]",
        p = f + "*?",
        h = "(?!\\.)(?=.)",
        d = "(?:\\/|^)\\.{1,2}($|\\/)",
        g = "(?!" + d + ")(?=.)",
        y = "(?:(?!" + d + ").)*?"
}, function(t, e) {
    t.exports = function() {
        return /([^\\\/]+)$/
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        var e, r = arguments.length,
            n = t.length,
            s = -1,
            a = [];
        if (1 === r) return t;
        for (r > 2 && (e = i(o.call(arguments, 1))); ++s < n;) ~e.indexOf(t[s]) || a.push(t[s]);
        return a
    }
    var i = r(75),
        o = [].slice;
    t.exports = n
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        for (var r, i = 0, o = t.length; i < o; i++) r = t[i], Array.isArray(r) ? n(r, e) : e.push(r);
        return e
    }
    t.exports = function(t) {
        return n(t, [])
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        if ("" === t) return [];
        Array.isArray(e) || (r = e, e = []);
        var m = r || {};
        e = e || [], void 0 === m.nodupes && (m.nodupes = !0);
        var _, A = m.fn;
        switch ("function" == typeof m && (A = m, m = {}), S instanceof RegExp || (S = h()), (t.match(S) || [])[0]) {
            case "\\,":
                return p(t, e, m);
            case "\\.":
                return l(t, e, m);
            case "/.":
                return f(t, e, m);
            case " ":
                return u(t);
            case "{,}":
                return i(t, m, n);
            case "{}":
                return s(t, e, m);
            case "\\{":
            case "\\}":
                return c(t, e, m);
            case "${":
                if (!/\{[^{]+\{/.test(t)) return e.concat(t);
                _ = !0, t = w.before(t, g())
        }
        x instanceof RegExp || (x = d());
        var C = x.exec(t);
        if (null == C) return [t];
        var E = C[1],
            P = C[2];
        if ("" === P) return [t];
        var T, j;
        if (-1 !== P.indexOf("..")) T = v(P, m, A) || P.split(","), j = T.length;
        else {
            if ('"' === P[0] || "'" === P[0]) return e.concat(t.split(/['"]/).join(""));
            if (T = P.split(","), m.makeRe) return n(t.replace(E, o(T, "|")), m);
            1 === (j = T.length) && m.bash && (T[0] = o(T[0], "\\"))
        }
        for (var B, O = T.length, R = 0; O--;) {
            var k = T[R++];
            if (/(\.[^.\/])/.test(k)) return j > 1 ? T : [t];
            if (B = y(t, E, k), /\{[^{}]+?\}/.test(B)) e = n(B, e, m);
            else if ("" !== B) {
                if (m.nodupes && -1 !== e.indexOf(B)) continue;
                e.push(_ ? w.after(B) : B)
            }
        }
        return m.strict ? b(e, a) : e
    }

    function i(t, e, r) {
        "function" == typeof e && (r = e, e = null);
        var n, i = e || {},
            o = "__ESC_EXP__",
            s = 0,
            a = t.split("{,}");
        if (i.nodupes) return r(a.join(""), i);
        s = a.length - 1, n = r(a.join(o), i);
        for (var u = n.length, c = [], l = 0; u--;) {
            var f = n[l++];
            if (-1 === f.indexOf(o)) c.push(f);
            else if ((f = f.split("__ESC_EXP__").join("")) && !1 !== i.nodupes) c.push(f);
            else {
                var p = Math.pow(2, s);
                c.push.apply(c, _(f, p))
            }
        }
        return c
    }

    function o(t, e) {
        return "|" === e ? "(" + t.join(e) + ")" : "," === e ? "{" + t.join(e) + "}" : "-" === e ? "[" + t.join(e) + "]" : "\\" === e ? "\\{" + t + "\\}" : void 0
    }

    function s(t, e, r) {
        return n(t.split("{}").join("\\{\\}"), e, r)
    }

    function a(t) {
        return !!t && "\\" !== t
    }

    function u(t) {
        for (var e = t.split(" "), r = e.length, i = [], o = 0; r--;) i.push.apply(i, n(e[o++]));
        return i
    }

    function c(t, e, r) {
        return /\{[^{]+\{/.test(t) ? (t = t.split("\\{").join("__LT_BRACE__"), t = t.split("\\}").join("__RT_BRACE__"), m(n(t, e, r), function(t) {
            return t = t.split("__LT_BRACE__").join("{"), t.split("__RT_BRACE__").join("}")
        })) : e.concat(t.split("\\").join(""))
    }

    function l(t, e, r) {
        return /[^\\]\..+\\\./.test(t) ? (t = t.split("\\.").join("__ESC_DOT__"), m(n(t, e, r), function(t) {
            return t.split("__ESC_DOT__").join(".")
        })) : e.concat(t.split("\\").join(""))
    }

    function f(t, e, r) {
        return t = t.split("/.").join("__ESC_PATH__"), m(n(t, e, r), function(t) {
            return t.split("__ESC_PATH__").join("/.")
        })
    }

    function p(t, e, r) {
        return /\w,/.test(t) ? (t = t.split("\\,").join("__ESC_COMMA__"), m(n(t, e, r), function(t) {
            return t.split("__ESC_COMMA__").join(",")
        })) : e.concat(t.split("\\").join(""))
    }

    function h() {
        return /\${|( (?=[{,}])|(?=[{,}]) )|{}|{,}|\\,(?=.*[{}])|\/\.(?=.*[{}])|\\\.(?={)|\\{|\\}/
    }

    function d() {
        return /.*(\\?\{([^}]+)\})/
    }

    function g() {
        return /\$\{([^}]+)\}/
    }

    function y(t, e, r) {
        var n = t.indexOf(e);
        return t.substr(0, n) + r + t.substr(n + e.length)
    }

    function m(t, e) {
        if (null == t) return [];
        for (var r = t.length, n = new Array(r), i = -1; ++i < r;) n[i] = e(t[i], i, t);
        return n
    }

    function b(t, e) {
        if (null == t) return [];
        if ("function" != typeof e) throw new TypeError("braces: filter expects a callback function.");
        for (var r = t.length, n = t.slice(), i = 0; r--;) e(t[r], i++) || n.splice(r, 1);
        return n
    }
    var v = r(77),
        _ = r(21),
        w = r(87);
    t.exports = function(t, e) {
        if ("string" != typeof t) throw new Error("braces expects a string");
        return n(t, e)
    };
    var x, S
}, function(t, e, r) {
    "use strict";
    var n = r(78);
    t.exports = function(t, e, r) {
        if ("string" != typeof t) throw new TypeError("expand-range expects a string.");
        "function" == typeof e && (r = e, e = {}), "boolean" == typeof e && (e = {}, e.makeRe = !0);
        var i = e || {},
            o = t.split(".."),
            s = o.length;
        return s > 3 ? t : 1 === s ? o : ("boolean" == typeof r && !0 === r && (i.makeRe = !0), o.push(i), n.apply(null, o.concat(r)))
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r, n, o) {
        if (null == t || null == e) throw new Error("fill-range expects the first and second args to be strings.");
        "function" == typeof r && (o = r, n = {}, r = null), "function" == typeof n && (o = n, n = {}), v(r) && (n = r, r = "");
        var f, y = !1,
            b = "",
            x = n || {};
        void 0 === x.silent && (x.silent = !0), r = r || x.step;
        var A = t,
            C = e;
        if (e = "-0" === e.toString() ? 0 : e, (x.optimize || x.makeRe) && (r = r ? r += "~" : r, f = !0, y = !0, b = "~"), "string" == typeof r) {
            var E = p().exec(r);
            if (E) {
                var P = E.index,
                    T = E[0];
                if ("+" === T) return S(t, e);
                if ("?" === T) return [w(t, e)];
                ">" === T ? (r = r.substr(0, P) + r.substr(P + 1), f = !0) : "|" === T ? (r = r.substr(0, P) + r.substr(P + 1), f = !0, y = !0, b = T) : "~" === T && (r = r.substr(0, P) + r.substr(P + 1), f = !0, y = !0, b = T)
            } else if (!_(r)) {
                if (!x.silent) throw new TypeError("fill-range: invalid step.");
                return null
            }
        }
        if (/[.&*()[\]^%$#@!]/.test(t) || /[.&*()[\]^%$#@!]/.test(e)) {
            if (!x.silent) throw new RangeError("fill-range: invalid range arguments.");
            return null
        }
        if (!h(t) || !h(e) || d(t) || d(e)) {
            if (!x.silent) throw new RangeError("fill-range: invalid range arguments.");
            return null
        }
        var j = _(g(t)),
            B = _(g(e));
        if (!j && B || j && !B) {
            if (!x.silent) throw new TypeError("fill-range: first range argument is incompatible with second.");
            return null
        }
        var O = j,
            R = u(r);
        O ? (t = +t, e = +e) : (t = t.charCodeAt(0), e = e.charCodeAt(0));
        var k = t > e;
        (t < 0 || e < 0) && (f = !1, y = !1);
        var M, D, F = m(A, C),
            $ = [],
            I = 0;
        if (y && s(t, e, R, O, F, x)) return "|" !== b && "~" !== b || (b = a(t, e, R, O, k)), i([A, C], b, x);
        for (; k ? t >= e : t <= e;) F && O && (D = F(t)), M = "function" == typeof o ? o(t, O, D, I++) : O ? c(t, D) : y && l(t) ? null : String.fromCharCode(t), null !== M && $.push(M), k ? t -= R : t += R;
        return !y && !f || x.noexpand ? $ : ("|" !== b && "~" !== b || (b = a(t, e, R, O, k)), 1 === $.length || t < 0 || e < 0 ? $ : i($, b, x))
    }

    function i(t, e, r) {
        "~" === e && (e = "-");
        var n = t.join(e),
            i = r && r.regexPrefix;
        return "|" === e && (n = i ? i + n : n, n = "(" + n + ")"), "-" === e && (n = i && "^" === i ? i + n : n, n = "[" + n + "]"), [n]
    }

    function o(t, e, r, n, i) {
        return !i && (n ? t <= 9 && e <= 9 : t < e && 1 === r)
    }

    function s(t, e, r, n, i, o) {
        return (!n || !(t > 9 || e > 9)) && (!i && 1 === r && t < e)
    }

    function a(t, e, r, n, i) {
        return o(t, e, r, n, i) ? "~" : "|"
    }

    function u(t) {
        return Math.abs(t >> 0) || 1
    }

    function c(t, e) {
        var r = e ? e + t : t;
        return e && "-" === t.toString().charAt(0) && (r = "-" + e + t.toString().substr(1)), r.toString()
    }

    function l(t) {
        var e = f(t);
        return "\\" === e || "[" === e || "]" === e || "^" === e || "(" === e || ")" === e || "`" === e
    }

    function f(t) {
        return String.fromCharCode(t)
    }

    function p() {
        return /\?|>|\||\+|\~/g
    }

    function h(t) {
        return /[a-z0-9]/i.test(t)
    }

    function d(t) {
        return /[a-z][0-9]|[0-9][a-z]/i.test(t)
    }

    function g(t) {
        return /^-*0+$/.test(t.toString()) ? "0" : t
    }

    function y(t) {
        return /[^.]\.|^-*0+[0-9]/.test(t)
    }

    function m(t, e) {
        if (y(t) || y(e)) {
            var r = b(t),
                n = b(e),
                i = r >= n ? r : n;
            return function(t) {
                return x("0", i - b(t))
            }
        }
        return !1
    }

    function b(t) {
        return t.toString().length
    }
    var v = r(79),
        _ = r(80),
        w = r(82),
        x = r(86),
        S = r(21);
    t.exports = n
}, function(t, e, r) {
    "use strict";
    var n = r(19);
    t.exports = function(t) {
        return null != t && "object" == typeof t && !1 === n(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(81);
    t.exports = function(t) {
        var e = n(t);
        if ("number" !== e && "string" !== e) return !1;
        var r = +t;
        return r - r + 1 >= 0 && "" !== t
    }
}, function(t, e, r) {
    var n = r(2),
        i = Object.prototype.toString;
    t.exports = function(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
        if ("string" == typeof t || t instanceof String) return "string";
        if ("number" == typeof t || t instanceof Number) return "number";
        if ("function" == typeof t || t instanceof Function) return "function";
        if (void 0 !== Array.isArray && Array.isArray(t)) return "array";
        if (t instanceof RegExp) return "regexp";
        if (t instanceof Date) return "date";
        var e = i.call(t);
        return "[object RegExp]" === e ? "regexp" : "[object Date]" === e ? "date" : "[object Arguments]" === e ? "arguments" : "[object Error]" === e ? "error" : n(t) ? "buffer" : "[object Set]" === e ? "set" : "[object WeakSet]" === e ? "weakset" : "[object Map]" === e ? "map" : "[object WeakMap]" === e ? "weakmap" : "[object Symbol]" === e ? "symbol" : "[object Int8Array]" === e ? "int8array" : "[object Uint8Array]" === e ? "uint8array" : "[object Uint8ClampedArray]" === e ? "uint8clampedarray" : "[object Int16Array]" === e ? "int16array" : "[object Uint16Array]" === e ? "uint16array" : "[object Int32Array]" === e ? "int32array" : "[object Uint32Array]" === e ? "uint32array" : "[object Float32Array]" === e ? "float32array" : "[object Float64Array]" === e ? "float64array" : "object"
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        if (void 0 === t) throw new Error("randomatic expects a string or number.");
        var n = !1;
        1 === arguments.length && ("string" == typeof t ? e = t.length : i(t) && (r = {}, e = t, t = "*")), "object" === o(e) && e.hasOwnProperty("chars") && (r = e, t = r.chars, e = t.length, n = !0);
        var a = r || {},
            u = "",
            c = "";
        for (-1 !== t.indexOf("?") && (u += a.chars), -1 !== t.indexOf("a") && (u += s.lower), -1 !== t.indexOf("A") && (u += s.upper), -1 !== t.indexOf("0") && (u += s.number), -1 !== t.indexOf("!") && (u += s.special), -1 !== t.indexOf("*") && (u += s.all), n && (u += t); e--;) c += u.charAt(parseInt(Math.random() * u.length, 10));
        return c
    }
    var i = r(83),
        o = r(85);
    t.exports = n;
    var s = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        number: "0123456789",
        special: "~!@#$%^&()_+-={}[];',."
    };
    s.all = s.lower + s.upper + s.number + s.special
}, function(t, e, r) {
    "use strict";
    var n = r(84);
    t.exports = function(t) {
        var e = n(t);
        if ("string" === e) {
            if (!t.trim()) return !1
        } else if ("number" !== e) return !1;
        return t - t + 1 >= 0
    }
}, function(t, e, r) {
    var n = r(2),
        i = Object.prototype.toString;
    t.exports = function(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
        if ("string" == typeof t || t instanceof String) return "string";
        if ("number" == typeof t || t instanceof Number) return "number";
        if ("function" == typeof t || t instanceof Function) return "function";
        if (void 0 !== Array.isArray && Array.isArray(t)) return "array";
        if (t instanceof RegExp) return "regexp";
        if (t instanceof Date) return "date";
        var e = i.call(t);
        return "[object RegExp]" === e ? "regexp" : "[object Date]" === e ? "date" : "[object Arguments]" === e ? "arguments" : "[object Error]" === e ? "error" : n(t) ? "buffer" : "[object Set]" === e ? "set" : "[object WeakSet]" === e ? "weakset" : "[object Map]" === e ? "map" : "[object WeakMap]" === e ? "weakmap" : "[object Symbol]" === e ? "symbol" : "[object Int8Array]" === e ? "int8array" : "[object Uint8Array]" === e ? "uint8array" : "[object Uint8ClampedArray]" === e ? "uint8clampedarray" : "[object Int16Array]" === e ? "int16array" : "[object Uint16Array]" === e ? "uint16array" : "[object Int32Array]" === e ? "int32array" : "[object Uint32Array]" === e ? "uint32array" : "[object Float32Array]" === e ? "float32array" : "[object Float64Array]" === e ? "float64array" : "object"
    }
}, function(t, e, r) {
    var n = r(2),
        i = Object.prototype.toString;
    t.exports = function(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
        if ("string" == typeof t || t instanceof String) return "string";
        if ("number" == typeof t || t instanceof Number) return "number";
        if ("function" == typeof t || t instanceof Function) return "function";
        if (void 0 !== Array.isArray && Array.isArray(t)) return "array";
        if (t instanceof RegExp) return "regexp";
        if (t instanceof Date) return "date";
        var e = i.call(t);
        return "[object RegExp]" === e ? "regexp" : "[object Date]" === e ? "date" : "[object Arguments]" === e ? "arguments" : "[object Error]" === e ? "error" : "[object Promise]" === e ? "promise" : n(t) ? "buffer" : "[object Set]" === e ? "set" : "[object WeakSet]" === e ? "weakset" : "[object Map]" === e ? "map" : "[object WeakMap]" === e ? "weakmap" : "[object Symbol]" === e ? "symbol" : "[object Int8Array]" === e ? "int8array" : "[object Uint8Array]" === e ? "uint8array" : "[object Uint8ClampedArray]" === e ? "uint8clampedarray" : "[object Int16Array]" === e ? "int16array" : "[object Uint16Array]" === e ? "uint16array" : "[object Int32Array]" === e ? "int32array" : "[object Uint32Array]" === e ? "uint32array" : "[object Float32Array]" === e ? "float32array" : "[object Float64Array]" === e ? "float64array" : "object"
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        if ("string" != typeof t) throw new TypeError("expected a string");
        if (1 === e) return t;
        if (2 === e) return t + t;
        var r = t.length * e;
        if (i !== t || void 0 === i) i = t, o = "";
        else if (o.length >= r) return o.substr(0, r);
        for (; r > o.length && e > 1;) 1 & e && (o += t), e >>= 1, t += t;
        return o += t, o = o.substr(0, r)
    }
    var i, o = "";
    t.exports = n
}, function(t, e, r) {
    "use strict";

    function n() {
        return Math.random().toString().slice(2, 7)
    }
    e.before = function(t, e) {
        return t.replace(e, function(t) {
            var e = n();
            return i[e] = t, "__ID" + e + "__"
        })
    }, e.after = function(t) {
        return t.replace(/__ID(.{5})__/g, function(t, e) {
            return i[e]
        })
    };
    var i = {}
}, function(t, e, r) {
    "use strict";

    function n(t) {
        if (!i(t)) return t;
        var e = !1; - 1 !== t.indexOf("[^") && (e = !0, t = t.split("[^").join("[")), -1 !== t.indexOf("[!") && (e = !0, t = t.split("[!").join("["));
        for (var r = t.split("["), n = t.split("]"), s = r.length !== n.length, a = t.split(/(?::\]\[:|\[?\[:|:\]\]?)/), u = a.length, c = 0, l = "", f = "", p = []; u--;) {
            var h = a[c++];
            "^[!" !== h && "[!" !== h || (h = "", e = !0);
            var d = e ? "^" : "",
                g = o[h];
            g ? p.push("[" + d + g + "]") : h && (/^\[?\w-\w\]?$/.test(h) ? c === a.length ? p.push("[" + d + h) : 1 === c ? p.push(d + h + "]") : p.push(d + h) : 1 === c ? f += h : c === a.length ? l += h : p.push("[" + d + h + "]"))
        }
        var y = p.join("|"),
            m = p.length || 1;
        return m > 1 && (y = "(?:" + y + ")", m = 1), f && (m++, "[" === f.charAt(0) && (s ? f = "\\[" + f.slice(1) : f += "]"), y = f + y), l && (m++, "]" === l.slice(-1) && (l = s ? l.slice(0, l.length - 1) + "\\]" : "[" + l), y += l), m > 1 && (y = y.split("][").join("]|["), -1 === y.indexOf("|") || /\(\?/.test(y) || (y = "(?:" + y + ")")), y = y.replace(/\[+=|=\]+/g, "\\b")
    }
    var i = r(89),
        o = {
            alnum: "a-zA-Z0-9",
            alpha: "a-zA-Z",
            blank: " \\t",
            cntrl: "\\x00-\\x1F\\x7F",
            digit: "0-9",
            graph: "\\x21-\\x7E",
            lower: "a-z",
            print: "\\x20-\\x7E",
            punct: "-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
            space: " \\t\\r\\n\\v\\f",
            upper: "A-Z",
            word: "A-Za-z0-9_",
            xdigit: "A-Fa-f0-9"
        };
    t.exports = n, n.makeRe = function(t) {
        try {
            return new RegExp(n(t))
        } catch (t) {}
    }, n.isMatch = function(t, e) {
        try {
            return n.makeRe(e).test(t)
        } catch (t) {
            return !1
        }
    }, n.match = function(t, e) {
        for (var r = t.length, i = 0, o = t.slice(), s = n.makeRe(e); i < r;) {
            var a = t[i++];
            s.test(a) && o.splice(i, 1)
        }
        return o
    }
}, function(t, e) {
    t.exports = function(t) {
        return "string" == typeof t && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(t)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        e = e || {};
        var r = {},
            n = 0;
        t = t.replace(/!\(([^\w*()])/g, "$1!("), t = t.replace(/([*\/])\.!\([*]\)/g, function(t, e) {
            return o("/" === e ? "\\/[^.]+" : "[^.]+")
        });
        var a = t + String(!!e.regex) + String(!!e.contains) + String(!!e.escape);
        if (l.hasOwnProperty(a)) return l[a];
        c instanceof RegExp || (c = s()), e.negate = !1;
        for (var f; f = c.exec(t);) {
            var p = f[1],
                h = f[3];
            "!" === p && (e.negate = !0);
            var d = "__EXTGLOB_" + n++ + "__";
            r[d] = i(h, p, e.escape), t = t.split(f[0]).join(d)
        }
        for (var g = Object.keys(r), y = g.length; y--;) {
            var m = g[y];
            t = t.split(m).join(r[m])
        }
        var b = e.regex ? u(t, e.contains, e.negate) : t;
        return b = b.split(".").join("\\."), l[a] = b
    }

    function i(t, e, r) {
        switch (r && (t = o(t)), e) {
            case "!":
                return "(?!" + t + ")[^/]" + (r ? "%%%~" : "*?");
            case "@":
                return "(?:" + t + ")";
            case "+":
                return "(?:" + t + ")+";
            case "*":
                return "(?:" + t + ")" + (r ? "%%" : "*");
            case "?":
                return "(?:" + t + "|)";
            default:
                return t
        }
    }

    function o(t) {
        return t = t.split("*").join("[^/]%%%~"), t = t.split(".").join("\\.")
    }

    function s() {
        return /(\\?[@?!+*$]\\?)(\(([^()]*?)\))/
    }

    function a(t) {
        return "(?!^" + t + ").*$"
    }

    function u(t, e, r) {
        var n = e ? "^" : "";
        return t = "(?:" + t + ")" + (e ? "$" : ""), r && (t = n + a(t)), new RegExp(n + t)
    }
    var c, l = (r(3), {});
    t.exports = n
}, function(t, e, r) {
    var n = r(2),
        i = Object.prototype.toString;
    t.exports = function(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if (!0 === t || !1 === t || t instanceof Boolean) return "boolean";
        if ("string" == typeof t || t instanceof String) return "string";
        if ("number" == typeof t || t instanceof Number) return "number";
        if ("function" == typeof t || t instanceof Function) return "function";
        if (void 0 !== Array.isArray && Array.isArray(t)) return "array";
        if (t instanceof RegExp) return "regexp";
        if (t instanceof Date) return "date";
        var e = i.call(t);
        return "[object RegExp]" === e ? "regexp" : "[object Date]" === e ? "date" : "[object Arguments]" === e ? "arguments" : "[object Error]" === e ? "error" : n(t) ? "buffer" : "[object Set]" === e ? "set" : "[object WeakSet]" === e ? "weakset" : "[object Map]" === e ? "map" : "[object WeakMap]" === e ? "weakmap" : "[object Symbol]" === e ? "symbol" : "[object Int8Array]" === e ? "int8array" : "[object Uint8Array]" === e ? "uint8array" : "[object Uint8ClampedArray]" === e ? "uint8clampedarray" : "[object Int16Array]" === e ? "int16array" : "[object Uint16Array]" === e ? "uint16array" : "[object Int32Array]" === e ? "int32array" : "[object Uint32Array]" === e ? "uint32array" : "[object Float32Array]" === e ? "float32array" : "[object Float64Array]" === e ? "float64array" : "object"
    }
}, function(t, e, r) {
    var n = r(93);
    t.exports = function(t, e) {
        if ("string" != typeof t) throw new TypeError("expected a string");
        return t = t.replace(/[\\\/]+/g, "/"), !1 !== e && (t = n(t)), t
    }
}, function(t, e, r) {
    (function(e) {
        function r(t, e) {
            var r = t[e];
            return e > 0 && ("/" === r || n && "\\" === r)
        }
        var n = "win32" === e.platform;
        t.exports = function(t) {
            var e = t.length - 1;
            if (e < 2) return t;
            for (; r(t, e);) e--;
            return t.substr(0, e + 1)
        }
    }).call(e, r(7))
}, function(t, e, r) {
    "use strict";
    var n = r(95),
        i = r(22);
    t.exports = function(t, e) {
        if (!n(t)) return {};
        e = [].concat.apply([], [].slice.call(arguments, 1));
        var r, o = e[e.length - 1],
            s = {};
        "function" == typeof o && (r = e.pop());
        var a = "function" == typeof r;
        return e.length || a ? (i(t, function(n, i) {
            -1 === e.indexOf(i) && (a ? r(n, i, t) && (s[i] = n) : s[i] = n)
        }), s) : t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return void 0 !== t && null !== t && ("object" == typeof t || "function" == typeof t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        for (var n in t)
            if (!1 === e.call(r, t[n], n, t)) break
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return -1 !== t.indexOf("/.") || "." === t.charAt(0) && "/" !== t.charAt(1)
    }

    function i(t, e, r) {
        return t && -1 !== e.indexOf(r)
    }

    function o(t) {
        var e = /\{([^{}]*?)}|\(([^()]*?)\)|\[([^\[\]]*?)\]/g;
        return t.replace(e, function(t, e, r, n) {
            var i = e || r || n;
            return i ? t.split(i).join(s(i)) : t
        })
    }

    function s(t) {
        return t = t.split("/").join("__SLASH__"), t = t.split(".").join("__DOT__")
    }

    function a(t) {
        return t = t.split("__SLASH__").join("/"), t = t.split("__DOT__").join(".")
    }
    var u = r(4),
        c = r(98),
        l = r(3),
        f = r(100),
        p = t.exports.cache = {};
    t.exports = function(t) {
        if (p.hasOwnProperty(t)) return p[t];
        var e = {};
        e.orig = t, e.is = {}, t = o(t);
        var r = c(t);
        e.is.glob = r.isGlob, e.glob = r.glob, e.base = r.base;
        var s = /([^\/]*)$/.exec(t);
        e.path = {}, e.path.dirname = "", e.path.basename = s[1] || "", e.path.dirname = t.split(e.path.basename).join("") || "";
        var h = (e.path.basename || "").split(".") || "";
        e.path.filename = h[0] || "", e.path.extname = h.slice(1).join(".") || "", e.path.ext = "", u(e.path.dirname) && !e.path.basename && (/\/$/.test(e.glob) || (e.path.basename = e.glob), e.path.dirname = e.base), -1 !== t.indexOf("/") || e.is.globstar || (e.path.dirname = "", e.path.basename = e.orig);
        var d = e.path.basename.indexOf(".");
        if (-1 !== d && (e.path.filename = e.path.basename.slice(0, d), e.path.extname = e.path.basename.slice(d)), "." === e.path.extname.charAt(0)) {
            var g = e.path.extname.split(".");
            e.path.ext = g[g.length - 1]
        }
        e.glob = a(e.glob), e.path.dirname = a(e.path.dirname), e.path.basename = a(e.path.basename), e.path.filename = a(e.path.filename), e.path.extname = a(e.path.extname);
        var y = t && e.is.glob;
        return e.is.negated = t && "!" === t.charAt(0), e.is.extglob = t && l(t), e.is.braces = i(y, t, "{"), e.is.brackets = i(y, t, "[:"), e.is.globstar = i(y, t, "**"), e.is.dotfile = f(e.path.basename) || f(e.path.filename), e.is.dotdir = n(e.path.dirname), p[t] = e
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return "/" === t.slice(-1) ? t : i.dirname(t)
    }
    var i = r(8),
        o = r(99),
        s = r(4);
    t.exports = function(t) {
        if ("string" != typeof t) throw new TypeError("glob-base expects a string.");
        var e = {};
        return e.base = o(t), e.isGlob = s(t), "." !== e.base ? (e.glob = t.substr(e.base.length), "/" === e.glob.charAt(0) && (e.glob = e.glob.substr(1))) : e.glob = t, e.isGlob || (e.base = n(t), e.glob = "." !== e.base ? t.substr(e.base.length) : t), "./" === e.glob.substr(0, 2) && (e.glob = e.glob.substr(2)), "/" === e.glob.charAt(0) && (e.glob = e.glob.substr(1)), e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(8),
        i = r(4);
    t.exports = function(t) {
        t += "a";
        do {
            t = n.dirname(t)
        } while (i(t));
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        if (46 === t.charCodeAt(0) && -1 === t.indexOf("/", 1)) return !0;
        var e = t.lastIndexOf("/");
        return -1 !== e && 46 === t.charCodeAt(e + 1)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        var n, u, c = "_default_";
        if (!e && !r) return "function" != typeof t ? t : s[c] || (s[c] = t(e));
        if ("string" == typeof e) {
            if (!r) return s[e] || (s[e] = t(e));
            c = e
        } else r = e;
        return (u = a[c]) && o(u.opts, r) ? u.regex : (i(c, r, n = t(e, r)), n)
    }

    function i(t, e, r) {
        a[t] = {
            regex: r,
            opts: e
        }
    }
    var o = r(102),
        s = {},
        a = {};
    t.exports = n, t.exports.cache = a, t.exports.basic = s
}, function(t, e, r) {
    "use strict";
    var n = r(103);
    t.exports = function(t, e) {
        if (!t && !e) return !0;
        if (!t && e || t && !e) return !1;
        var r, i = 0,
            o = 0;
        for (r in e)
            if (o++, !n(e[r]) || !t.hasOwnProperty(r) || t[r] !== e[r]) return !1;
        for (r in t) i++;
        return i === o
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return null == t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t = t.split("?").join("%~"), t = t.split("*").join("%%")
    }

    function i(t) {
        return t = t.split("%~").join("?"), t = t.split("%%").join("*")
    }
    var o = r(105),
        s = r(6),
        a = t.exports = function t(e, r) {
            if (!(this instanceof t)) return new t(e, r);
            this.options = r || {}, this.pattern = e, this.history = [], this.tokens = {}, this.init(e)
        };
    a.prototype.init = function(t) {
        this.orig = t, this.negated = this.isNegated(), this.options.track = this.options.track || !1, this.options.makeRe = !0
    }, a.prototype.track = function(t) {
        this.options.track && this.history.push({
            msg: t,
            pattern: this.pattern
        })
    }, a.prototype.isNegated = function() {
        return 33 === this.pattern.charCodeAt(0) && (this.pattern = this.pattern.slice(1), !0)
    }, a.prototype.braces = function() {
        if (!0 !== this.options.nobraces && !0 !== this.options.nobrace) {
            var t = this.pattern.match(/[\{\(\[]/g),
                e = this.pattern.match(/[\}\)\]]/g);
            t && e && t.length !== e.length && (this.options.makeRe = !1);
            var r = s.braces(this.pattern, this.options);
            this.pattern = r.join("|")
        }
    }, a.prototype.brackets = function() {
        !0 !== this.options.nobrackets && (this.pattern = s.brackets(this.pattern))
    }, a.prototype.extglob = function() {
        !0 !== this.options.noextglob && s.isExtglob(this.pattern) && (this.pattern = s.extglob(this.pattern, {
            escape: !0
        }))
    }, a.prototype.parse = function(t) {
        return this.tokens = s.parseGlob(t || this.pattern, !0), this.tokens
    }, a.prototype._replace = function(t, e, r) {
        this.track('before (find): "' + t + '" (replace with): "' + e + '"'), r && (e = n(e)), this.pattern = t && e && "string" == typeof t ? this.pattern.split(t).join(e) : this.pattern.replace(t, e), this.track("after")
    }, a.prototype.escape = function(t) {
        this.track("before escape: ");
        var e = /["\\](['"]?[^"'\\]['"]?)/g;
        this.pattern = t.replace(e, function(t, e) {
            var r = o.ESC,
                n = r && r[e];
            return n || (/[a-z]/i.test(t) ? t.split("\\").join("") : t)
        }), this.track("after escape: ")
    }, a.prototype.unescape = function(t) {
        var e = /__([A-Z]+)_([A-Z]+)__/g;
        this.pattern = t.replace(e, function(t, e) {
            return o[e][t]
        }), this.pattern = i(this.pattern)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        return Object.keys(t).reduce(function(r, n) {
            var i = e ? e + n : n;
            return r[t[n]] = i, r
        }, {})
    }
    var i, o, s = {};
    s.escapeRegex = {
        "?": /\?/g,
        "@": /\@/g,
        "!": /\!/g,
        "+": /\+/g,
        "*": /\*/g,
        "(": /\(/g,
        ")": /\)/g,
        "[": /\[/g,
        "]": /\]/g
    }, s.ESC = {
        "?": "__UNESC_QMRK__",
        "@": "__UNESC_AMPE__",
        "!": "__UNESC_EXCL__",
        "+": "__UNESC_PLUS__",
        "*": "__UNESC_STAR__",
        ",": "__UNESC_COMMA__",
        "(": "__UNESC_LTPAREN__",
        ")": "__UNESC_RTPAREN__",
        "[": "__UNESC_LTBRACK__",
        "]": "__UNESC_RTBRACK__"
    }, s.UNESC = i || (i = n(s.ESC, "\\")), s.ESC_TEMP = {
        "?": "__TEMP_QMRK__",
        "@": "__TEMP_AMPE__",
        "!": "__TEMP_EXCL__",
        "*": "__TEMP_STAR__",
        "+": "__TEMP_PLUS__",
        ",": "__TEMP_COMMA__",
        "(": "__TEMP_LTPAREN__",
        ")": "__TEMP_RTPAREN__",
        "[": "__TEMP_LTBRACK__",
        "]": "__TEMP_RTBRACK__"
    }, s.TEMP = o || (o = n(s.ESC_TEMP)), t.exports = s
}, function(t, e, r) {
    "use strict";
    var n = r(107);
    t.exports = function(t, e, r) {
        e = n(e, r);
        var i = !0;
        if (null == t) return i;
        for (var o = t.length, s = 0; o--;)
            if (!e(t[s++], s, t)) {
                i = !1;
                break
            }
        return i
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        for (var r = t.length, n = -1; ++n < r;)
            if (s(t[n], e)) return !0;
        return !1
    }

    function i(t, e) {
        for (var r = e.length, i = -1; ++i < r;)
            if (!n(t, e[i])) return !1;
        return !0
    }

    function o(t, e) {
        var r = !0;
        return c(e, function(e, n) {
            if (!s(t[n], e)) return r = !1
        }), r
    }

    function s(t, e) {
        return t && "object" == typeof t ? Array.isArray(t) && Array.isArray(e) ? i(t, e) : o(t, e) : t === e
    }

    function a(t) {
        return function(e) {
            return e[t]
        }
    }

    function u(t) {
        return t
    }
    var c = r(22);
    t.exports = function(t, e) {
        if (null == t) return u;
        switch (typeof t) {
            case "function":
                return void 0 !== e ? function(r, n, i) {
                    return t.call(e, r, n, i)
                } : t;
            case "object":
                return function(e) {
                    return s(e, t)
                };
            case "string":
            case "number":
                return a(t)
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        var n = t.length >>> 0;
        return e = null == e ? r || 0 : e < 0 ? Math.max(n + e, 0) : Math.min(e, n)
    }
    t.exports = function(t, e, r) {
        var i = t.length >>> 0,
            o = [];
        for (e = n(t, e), r = n(t, r, i); e < r;) o.push(t[e++]);
        return o
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        r = r || 0;
        var n = -1;
        if (null == t) return n;
        for (var i = t.length, o = r < 0 ? i + r : r; i--;)
            if (t[o++] === e) {
                n = o - 1;
                break
            }
        return n
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return t.map(function(t) {
            for (var e in t) "todo" === this.source && (t[e] = this.formatDate(t[e], this.opts.dateFormat)), !this.isListFilter(e) || this.opts.templates[e] || this.$scopedSlots[e] || (t[e] = this.optionText(t[e], e));
            return t
        }.bind(this))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var r = this.listColumnsObject[e];
        return void 0 === r[t] ? t : r[t]
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r, n) {
        if (-1 == this.templatesKeys.indexOf(e)) return this.highlightMatch(t[e], e, n);
        var i = this.opts.templates[e];
        return i = "function" == typeof i ? i.apply(this.$root, [n, t, r]) : n(i, {
            attrs: {
                data: t,
                index: r
            }
        }), n("span", {
            class: "VueTables__template"
        }, [i])
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var r, n = this.opts.uniqueKey;
        r = "todo" == this.source && void 0 !== t[n] ? this.tableData.filter(function(e) {
            return t[n] === e[n]
        })[0] : t, this.dispatch("row-click", {
            row: r,
            event: e
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function(t) {
        this.limit = "object" === (void 0 === t ? "undefined" : n(t)) ? t.target.value : t, this.updateState("perPage", this.limit), this.dispatch("limit", parseInt(this.limit)), this.setPage(1)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (!this.opts.childRow || "function" == typeof this.opts.childRow) throw new Error("vue-tables-2: Child row undefined or not a component");
        var r = e ? this.openChildRows.filter(function(t) {
            return e.includes(t)
        }) : this.openChildRows;
        return r.length ? this.$children.filter(function(e) {
            return "ChildRow" === e.$options.name && r.includes(e.data[t.opts.uniqueKey])
        }) : []
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function(t, e) {
        if (this.vuex) {
            if (t.split("::").length > 1) return;
            this.commit(t.toUpperCase().replace("-", "_"), e)
        }
        var r = "vue-tables.";
        this.name && (r += this.name + "."), r += t, i.default.$emit(r, e), this.$emit(t, e)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (e && e.stopPropagation(), this.openChildRows.includes(t)) {
            var r = this.openChildRows.indexOf(t);
            this.openChildRows.splice(r, 1)
        } else this.openChildRows.push(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return this.openChildRows.includes(t) ? "VueTables__child-row-toggler--open" : "VueTables__child-row-toggler--closed"
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        if ("function" == typeof this.opts.requestFunction) return this.opts.requestFunction.call(this, t);
        if ("undefined" != typeof axios) return axios.get(this.url, {
            params: t
        }).catch(function(t) {
            this.dispatch("error", t)
        }.bind(this));
        if (void 0 !== this.$http) return this.$http.get(this.url, {
            params: t
        }).then(function(t) {
            return t.json()
        }.bind(this), function(t) {
            this.dispatch("error", t)
        }.bind(this));
        if ("undefined" != typeof $) return $.getJSON(this.url, t).fail(function(t) {
            this.dispatch("error", t)
        }.bind(this));
        throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)"
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return "undefined" != typeof axios ? t.data : t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this.orderBy.ascending;
        return this.currentlySorting = {
            column: t,
            ascending: e
        }, void 0 === this.opts.customSorting[t] ? this.defaultSort(t, e) : this.opts.customSorting[t](e)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = {
            page: 1,
            query: this.query,
            orderBy: this.orderBy,
            perPage: this.opts.perPage,
            customQueries: this.customQueries
        };
        return this.storage.setItem(this.stateKey, JSON.stringify(t)), t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (this.opts.saveState && this.activeState) {
            try {
                var r = JSON.parse(this.storage.getItem(this.stateKey))
            } catch (t) {
                var r = this.initState()
            }
            r[t] = e, this.storage.setItem(this.stateKey, JSON.stringify(r))
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this.opts.columnsClasses;
        return e.hasOwnProperty(t) ? e[t] : ""
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return t ? (t = t.split("__"), t.shift(), t.join("__")) : t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        if (this.userControlsColumns || (this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns)), this.userControlsColumns = !0), this.userColumnsDisplay.includes(t)) {
            if (1 === this.userColumnsDisplay.length) return;
            var e = this.userColumnsDisplay.indexOf(t);
            this.userColumnsDisplay.splice(e, 1)
        } else this.userColumnsDisplay.push(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e;
        if (this.opts.filterByColumn)
            for (var r in t) this.isDateFilter(r) ? this._setDateFilterText(r, t[r]) : (e = this.$el.querySelector("[name='vf__" + r + "']"), e ? e.value = t[r] : console.error("vue-tables-2: Error in setting filter value. Column '" + r + "' does not exist."));
        else this.$el.querySelector(".VueTables__search input").value = t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var r = $(this.$el).find("#VueTables__" + t + "-filter"),
            n = e ? moment(e.start, "YYYY-MM-DD HH:mm:ss").format(this.opts.dateFormat) + " - " + moment(e.end, "YYYY-MM-DD HH:mm:ss").format(this.opts.dateFormat) : this.opts.texts.filterBy.replace("{column}", t);
        r.text(n)
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        var r = [JSON.parse(JSON.stringify(t))];
        return r = r.concat(e[t.column])
    }
    t.exports = function(t) {
        var e = this.orderBy.column,
            r = this.orderBy.ascending;
        this.userMultiSorting[e] || (this.userMultiSorting[e] = []);
        var i = this.userMultiSorting[e];
        if (e === t) !i.length || r ? this.orderBy.ascending = !this.orderBy.ascending : (this.orderBy = i.shift(), this.userMultiSorting = {}, this.userMultiSorting[this.orderBy.column] = i);
        else {
            var o = i.filter(function(e) {
                return e.column == t
            })[0];
            o ? o.ascending ? o.ascending = !o.ascending : (this.userMultiSorting[e] = i.filter(function(e) {
                return e.column != t
            }), this.userMultiSorting[e].length || (this.userMultiSorting = {})) : i.push({
                column: t,
                ascending: !0
            })
        }
        this.time = Date.now(), this.dispatch("sorted", n(this.orderBy, this.userMultiSorting))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = Object.keys(this.userMultiSorting);
        return e.length && this.orderBy.column !== t ? !!this.userMultiSorting[e[0]].filter(function(e) {
            return e.column == t
        }).length : this.orderBy.column === t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (this.$scopedSlots.child_row) return this.$scopedSlots.child_row({
            row: e
        });
        var r = this.opts.childRow;
        return "function" == typeof r ? r.apply(this, [t, e]) : t(r, {
            attrs: {
                data: e
            }
        })
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.displayColumnsDropdown = !this.displayColumnsDropdown
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return 1 === this.userColumnsDisplay.length && this.userColumnsDisplay[0] === t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        this.vuex || (this.setPage(t), this.dispatch("pagination", t))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.orderBy.column != this.opts.groupBy ? this.setOrder(this.opts.groupBy, !0) : this.setOrder(this.opts.groupBy, !this.orderBy.ascending)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        listColumnsObject: r(137),
        allColumns: r(138),
        templatesKeys: r(139),
        opts: r(140),
        tableData: r(142),
        storage: r(143),
        filterableColumns: r(144),
        hasChildRow: r(145),
        colspan: r(146),
        stateKey: function() {
            return "vuetables_" + (this.name ? this.name : this.id)
        },
        Page: function() {
            return this.page
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = Object.keys(this.opts.listColumns),
            e = {};
        return t.forEach(function(t) {
            e[t] = {}, this.opts.listColumns[t].forEach(function(r) {
                e[t][r.id] = r.text
            })
        }.bind(this)), e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = this,
            e = this.columnsDisplay;
        return e || this.userControlsColumns ? this.userControlsColumns ? this.columns.filter(function(e) {
            return t.userColumnsDisplay.includes(e)
        }) : this.Columns.filter(function(r) {
            if (!e[r]) return !0;
            var n = e[r],
                i = n[2],
                o = (!n[0] || t.windowWidth >= n[0]) && (!n[1] || t.windowWidth < n[1]);
            return "not" == i ? !o : o
        }) : this.Columns
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return Object.keys(this.opts.templates)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        var t = r(141)();
        return this.initOptions(t, this.globalOptions, this.options)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return {
            dateColumns: [],
            listColumns: {},
            datepickerOptions: {
                locale: {
                    cancelLabel: "Clear"
                }
            },
            initialPage: 1,
            perPage: 10,
            perPageValues: [5, 10, 25, 50, 100],
            groupBy: !1,
            params: {},
            sortable: !0,
            filterable: !0,
            initFilters: {},
            customFilters: [],
            templates: {},
            debounce: 250,
            dateFormat: "DD/MM/YYYY",
            toMomentFormat: !1,
            skin: !1,
            columnsDisplay: {},
            columnsDropdown: !1,
            texts: {
                count: "Showing {from} to {to} of {count} records|{count} records|One record",
                filter: "Filter:",
                filterPlaceholder: "Search query",
                limit: "Records:",
                page: "Page:",
                noResults: "No matching records",
                filterBy: "Filter by {column}",
                loading: "Loading...",
                defaultOption: "Select {column}",
                columns: "Columns"
            },
            sortIcon: {
                is: "glyphicon-sort",
                base: "glyphicon",
                up: "glyphicon-chevron-up",
                down: "glyphicon-chevron-down"
            },
            sortingAlgorithm: function(t, e) {
                return t.sort(this.getSortFn(e))
            },
            customSorting: {},
            multiSorting: {},
            clientMultiSorting: !0,
            serverMultiSorting: !1,
            filterByColumn: !1,
            highlightMatches: !1,
            orderBy: !1,
            footerHeadings: !1,
            headings: {},
            headingsTooltips: {},
            pagination: {
                dropdown: !1,
                chunk: 10,
                align: "center"
            },
            childRow: !1,
            childRowTogglerFirst: !0,
            uniqueKey: "id",
            requestFunction: !1,
            requestAdapter: function(t) {
                return t
            },
            responseAdapter: function(t) {
                return {
                    data: t.data,
                    count: t.count
                }
            },
            requestKeys: {
                query: "query",
                limit: "limit",
                orderBy: "orderBy",
                ascending: "ascending",
                page: "page",
                byColumn: "byColumn"
            },
            rowClassCallback: !1,
            preserveState: !1,
            saveState: !1,
            storage: "local",
            columnsClasses: {}
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return this.data
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return "undefined" == typeof localStorage ? {} : "local" === this.opts.storage ? localStorage : sessionStorage
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return this.opts.childRow || this.$scopedSlots.child_row
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        input: r(148),
        select: r(149)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        twoWay: !0,
        bind: function(t, e, r) {
            t.addEventListener("keydown", function(t) {
                r.context[e.value] = t.target.value
            })
        },
        update: function(t, e, r, n) {}
    }
}, function(t, e, r) {
    "use strict";
    t.exports = {
        twoWay: !0,
        bind: function(t, e, r) {
            t.addEventListener("change", function(t) {
                console.log("SELECT CHANGE"), r.context[e.value.name] = t.target.value, e.value.cb.call(this, e.value.params)
            })
        },
        update: function(t, e, r, n) {}
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function() {
        i.default.$off(), i.default.$destroy(), this.vuex && !this.opts.preserveState && this.$store.unregisterModule(this.name)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        if (null == t) return !0;
        if (t.length > 0) return !1;
        if (0 === t.length) return !0;
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = r(153),
        o = n(i),
        s = r(154),
        a = n(s);
    t.exports = function(t) {
        var e = {
            state: (0, o.default)(t),
            mutations: (0, a.default)(t)
        };
        t.$store.registerModule(t.name, e)
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e = {
            page: t.opts.initialPage ? t.opts.initialPage : 1,
            limit: t.opts.perPage,
            count: "server" == t.source ? 0 : t.data.length,
            columns: t.columns,
            data: "todo" == t.source ? t.data : [],
            query: t.initQuery(),
            customQueries: t.initCustomFilters(),
            sortBy: !(!t.opts.orderBy || !t.opts.orderBy.column) && t.opts.orderBy.column,
            ascending: !t.opts.orderBy || !t.opts.orderBy.hasOwnProperty("ascending") || t.opts.orderBy.ascending
        };
        return void 0 !== t.$store.state[t.name] ? (0, i.default)(!0, t.$store.state[t.name], e) : e
    };
    var n = r(0),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n)
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e, r, i = "server" == t.source ? (e = {}, n(e, t.name + "/SET_DATA", function(t, e) {
            var r = e.data,
                n = e.count;
            t.data = r, t.count = parseInt(n)
        }), n(e, t.name + "/LOADING", function(t, e) {}), n(e, t.name + "/LOADED", function(t, e) {}), n(e, t.name + "/ERROR", function(t, e) {}), e) : n({}, t.name + "/SET_COUNT", function(t, e) {
            t.count = e
        });
        return o.default.recursive(!0, (r = {}, n(r, t.name + "/PAGINATE", function(e, r) {
            e.page = r, t.updateState("page", r), "server" == t.source && t.getData(), t.commit("PAGINATION", r)
        }), n(r, t.name + "/SET_FILTER", function(e, r) {
            e.page = 1, t.updateState("page", 1), e.query = r, "server" == t.source && t.getData()
        }), n(r, t.name + "/PAGINATION", function(t, e) {}), n(r, t.name + "/SET_CUSTOM_FILTER", function(e, r) {
            var n = r.filter,
                i = r.value;
            e.page = 1, t.updateState("page", 1), e.customQueries[n] = i, "server" == t.source && t.getData()
        }), n(r, t.name + "/SET_STATE", function(t, e) {
            var r = e.page,
                n = e.query,
                i = e.customQueries,
                o = e.limit,
                s = e.orderBy;
            t.customQueries = i, t.query = n, t.page = r, t.limit = o, t.ascending = s.ascending, t.sortBy = s.column
        }), n(r, t.name + "/SET_LIMIT", function(e, r) {
            e.page = 1, t.updateState("page", 1), e.limit = r, "server" == t.source && t.getData()
        }), n(r, t.name + "/SORT", function(e, r) {
            var n = r.column,
                i = r.ascending;
            e.ascending = i, e.sortBy = n, "server" == t.source && t.getData()
        }), n(r, t.name + "/SORTED", function(t, e) {}), n(r, t.name + "/ROW_CLICK", function(t, e) {}), n(r, t.name + "/FILTER", function(t, e) {}), r), i)
    };
    var i = r(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return {
            framework: "bootstrap3",
            table: "table table-striped table-bordered table-hover",
            row: "row",
            column: "col-md-12",
            label: "",
            input: "form-control",
            select: "form-control",
            field: "form-group",
            inline: "form-inline",
            right: "pull-right",
            left: "pull-left",
            center: "text-center",
            contentCenter: "",
            small: "",
            nomargin: "",
            groupTr: "info",
            button: "btn btn-secondary",
            dropdown: {
                container: "dropdown",
                trigger: "dropdown-toggle",
                menu: "dropdown-menu",
                content: "",
                item: "",
                caret: "caret"
            },
            pagination: {
                nav: "",
                count: "",
                wrapper: "",
                list: "pagination",
                item: "page-item",
                link: "page-link",
                next: "",
                prev: "",
                active: "active"
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return {
            framework: "bootstrap4",
            table: "table table-striped table-bordered table-hover",
            row: "row",
            column: "col-md-12",
            label: "",
            input: "form-control",
            select: "form-control",
            field: "form-group",
            inline: "form-inline",
            right: "float-right",
            left: "float-left",
            center: "text-center",
            contentCenter: "justify-content-center",
            nomargin: "m-0",
            groupTr: "table-info",
            small: "",
            button: "btn btn-secondary",
            dropdown: {
                container: "dropdown",
                trigger: "dropdown-toggle",
                menu: "dropdown-menu",
                content: "",
                item: "dropdown-item",
                caret: "caret"
            },
            pagination: {
                nav: "",
                count: "",
                wrapper: "",
                list: "pagination",
                item: "page-item",
                link: "page-link",
                next: "",
                prev: "",
                active: "active"
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return {
            framework: "bulma",
            table: "table is-bordered is-striped is-hoverable is-fullwidth",
            row: "columns",
            column: "column is-12",
            label: "label",
            input: "input",
            select: "select",
            field: "field",
            inline: "is-horizontal",
            right: "is-pulled-right",
            left: "is-pulled-left",
            center: "has-text-centered",
            contentCenter: "is-centered",
            icon: "icon",
            small: "is-small",
            nomargin: "marginless",
            button: "button",
            groupTr: "is-selected",
            dropdown: {
                container: "dropdown",
                trigger: "dropdown-trigger",
                menu: "dropdown-menu",
                content: "dropdown-content",
                item: "dropdown-item",
                caret: "fa fa-angle-down"
            },
            pagination: {
                nav: "",
                count: "",
                wrapper: "pagination",
                list: "pagination-list",
                item: "",
                link: "pagination-link",
                next: "",
                prev: "",
                active: "is-current"
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function(t, e, n, o) {
        var s = "VueTables__search_" + this.id,
            a = "VueTables__dropdown-pagination_" + this.id,
            u = "VueTables__limit_" + this.id,
            c = r(27).call(this, t),
            l = this.opts.filterByColumn || !this.opts.filterable ? "" : t("div", {
                class: "VueTables__search-field"
            }, [t("label", {
                attrs: {
                    for: s
                },
                class: n.label
            }, [this.display("filter")]), e.normalFilter(n, s)]),
            f = c.length > 1 ? t("div", {
                class: "VueTables__limit-field"
            }, [t("label", {
                class: n.label,
                attrs: {
                    for: u
                }
            }, [this.display("limit")]), e.perPage(c, n.select, u)]) : "",
            p = this.opts.pagination && this.opts.pagination.dropdown ? t("div", {
                class: "VueTables__pagination-wrapper"
            }, [t("div", {
                class: n.field + " " + n.inline + " " + n.right + " VueTables__dropdown-pagination",
                directives: [{
                    name: "show",
                    value: this.totalPages > 1
                }]
            }, [t("label", {
                attrs: {
                    for: a
                }
            }, [this.display("page")]), e.dropdownPagination(n.select, a)])]) : "",
            h = this.opts.columnsDropdown ? t("div", {
                class: "VueTables__columns-dropdown-wrapper"
            }, [e.columnsDropdown(n)]) : "",
            d = this.opts.footerHeadings ? t("tfoot", null, [t("tr", null, [e.headings(n.right)])]) : "";
        return t("div", {
            class: "VueTables VueTables--" + this.source
        }, [t("div", {
            class: n.row
        }, [t("div", {
            class: n.column
        }, [t("div", {
            class: n.field + " " + n.inline + " " + n.left + " VueTables__search"
        }, [o.beforeFilter, l, o.afterFilter]), t("div", {
            class: n.field + " " + n.inline + " " + n.right + " VueTables__limit"
        }, [o.beforeLimit, f, o.afterLimit]), p, h])]), o.beforeTable, t("div", {
            class: "table-responsive"
        }, [t("table", {
            class: "VueTables__table " + (this.opts.skin ? this.opts.skin : n.table)
        }, [t("thead", null, [t("tr", null, [e.headings(n.right)]), o.beforeFilters, e.columnFilters(n), o.afterFilters]), d, o.beforeBody, t("tbody", null, [o.prependBody, e.rows(n), o.appendBody]), o.afterBody])]), e.pagination((0, i.default)(n.pagination, {
            wrapper: n.row + " " + n.column + " " + n.contentCenter,
            nav: n.center,
            count: n.center + " " + n.column
        })), e.dropdownPaginationCount()])
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function(t, e, n, o) {
        var s = "VueTables__search_" + this.id,
            a = "VueTables__limit_" + this.id,
            u = r(27).call(this, t),
            c = this.opts.filterByColumn || !this.opts.filterable ? "" : t("div", {
                class: "VueTables__search-field"
            }, [t("label", {
                attrs: {
                    for: s
                },
                class: n.label
            }, [this.display("filter")]), e.normalFilter(n, s)]),
            l = u.length > 1 ? t("div", {
                class: "VueTables__limit-field"
            }, [t("label", {
                class: n.label,
                attrs: {
                    for: a
                }
            }, [this.display("limit")]), e.perPage(u, n.select, a)]) : "",
            f = this.opts.columnsDropdown ? t("div", {
                class: "VueTables__columns-dropdown-wrapper"
            }, [e.columnsDropdown(n)]) : "";
        return t("div", {
            class: "VueTables VueTables--" + this.source
        }, [t("div", {
            class: n.row
        }, [t("div", {
            class: n.column
        }, [t("div", {
            class: n.field + " " + n.inline + " " + n.left + " VueTables__search"
        }, [o.beforeFilter, c, o.afterFilter]), t("div", {
            class: n.field + " " + n.inline + " " + n.right + " VueTables__limit"
        }, [o.beforeLimit, l, o.afterLimit]), f])]), o.beforeTable, t("div", {
            class: "table-responsive"
        }, [t("table", {
            class: "VueTables__table " + (this.opts.skin ? this.opts.skin : n.table)
        }, [t("thead", null, [t("tr", null, [e.headings(n.right)]), o.beforeFilters, e.columnFilters(n), o.afterFilters]), t("tfoot", null, [t("tr", null, [t("td", {
            attrs: {
                colspan: this.colspan
            }
        }, [e.pagination((0, i.default)(n.pagination, {
            list: n.pagination.list + " " + n.right + " " + n.nomargin,
            count: "" + n.left
        }))])])]), o.beforeBody, t("tbody", null, [o.prependBody, e.rows(n), o.appendBody]), o.afterBody])])])
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function(r) {
            var n = "todo" == e.source ? e.filteredData : e.tableData;
            if (0 === e.count) {
                var i = e.allColumns.length;
                return e.hasChildRow && i++, t("tr", {
                    class: "VueTables__no-results"
                }, [t("td", {
                    class: "text-center",
                    attrs: {
                        colspan: e.colspan
                    }
                }, [e.display(e.loading ? "loading" : "noResults")])])
            }
            var o, s, a, u = [],
                c = e.opts.uniqueKey,
                l = (e.Page - 1) * e.limit;
            return n.map(function(n, i) {
                if (e.opts.groupBy && "todo" === e.source && n[e.opts.groupBy] !== a && (u.push(t("tr", {
                        class: r.groupTr,
                        on: {
                            click: e._toggleGroupDirection.bind(e)
                        }
                    }, [t("td", {
                        attrs: {
                            colspan: e.colspan
                        }
                    }, [n[e.opts.groupBy]])])), a = n[e.opts.groupBy]), i = l + i + 1, o = [], e.hasChildRow) {
                    var f = t("td", null, [t("span", {
                        on: {
                            click: e.toggleChildRow.bind(e, n[c])
                        },
                        class: "VueTables__child-row-toggler " + e.childRowTogglerClass(n[c])
                    }, [])]);
                    e.opts.childRowTogglerFirst && o.push(f)
                }
                e.allColumns.map(function(r) {
                    var s = e.$scopedSlots && e.$scopedSlots[r];
                    o.push(t("td", {
                        class: e.columnClass(r)
                    }, [s ? s({
                        row: n,
                        column: r,
                        index: i
                    }) : e.render(n, r, i, t)]))
                }), e.hasChildRow && !e.opts.childRowTogglerFirst && o.push(f), s = e.opts.rowClassCallback ? e.opts.rowClassCallback(n) : "", u.push(t("tr", {
                    class: s,
                    on: {
                        click: e.rowWasClicked.bind(e, n),
                        dblclick: e.rowWasClicked.bind(e, n)
                    }
                }, [o, " "])), u.push(e.hasChildRow && e.openChildRows.includes(n[c]) ? t("tr", {
                    class: "VueTables__child-row"
                }, [t("td", {
                    attrs: {
                        colspan: e.colspan
                    }
                }, [e._getChildRowTemplate(t, n)])]) : t())
            }), u
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    t.exports = function(t) {
        var e = this;
        return function(r, i) {
            var o = "todo" == e.source ? e.search.bind(e, e.data) : e.serverSearch.bind(e);
            return t("input", {
                class: r.input + " " + r.small,
                attrs: {
                    type: "text",
                    value: e.query,
                    placeholder: e.display("filterPlaceholder"),
                    id: i
                },
                on: {
                    keyup: n(o, e.opts.debounce)
                }
            }, [])
        }
    }
}, function(t, e, r) {
    "use strict";
    r(9);
    t.exports = function(t) {
        var e = this;
        return function(r, n) {
            for (var i, o = [], s = 1; s <= e.totalPages; s++) {
                var i = e.page == s;
                o.push(t("option", {
                    domProps: {
                        value: s,
                        selected: i
                    }
                }, [s]))
            }
            return t("select", {
                class: r + " dropdown-pagination",
                directives: [{
                    name: "show",
                    value: e.totalPages > 1
                }],
                attrs: {
                    name: "page",
                    id: n
                },
                ref: "page",
                domProps: {
                    value: e.page
                },
                on: {
                    change: e.setPage.bind(e, null, !1)
                }
            }, [o])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function() {
            if (e.count > 0 && e.opts.pagination.dropdown) {
                var r = parseInt(e.limit),
                    n = (e.Page - 1) * r + 1,
                    i = e.Page == e.totalPages ? e.count : n + r - 1,
                    o = e.opts.texts.count.split("|"),
                    s = Math.min(1 == e.count ? 2 : 1 == e.totalPages ? 1 : 0, o.length - 1),
                    a = o[s].replace("{count}", e.count).replace("{from}", n).replace("{to}", i);
                return t("div", {
                    class: "VuePagination"
                }, [t("p", {
                    class: "VuePagination__count"
                }, [a])])
            }
            return ""
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var i = r(0);
    ! function(t) {
        t && t.__esModule
    }(i);
    t.exports = function(t) {
        var e = this;
        return function(i) {
            if (!e.opts.filterByColumn || !e.opts.filterable) return "";
            var o = r(165).call(e, t, i.input),
                s = r(166).call(e, t),
                a = r(167).call(e, t, i.select),
                u = [];
            return e.hasChildRow && e.opts.childRowTogglerFirst && u.push(t("th", null, [])), e.allColumns.map(function(r) {
                var i = "";
                if (e.filterable(r)) switch (!0) {
                    case e.isTextFilter(r):
                        i = o(r);
                        break;
                    case e.isDateFilter(r):
                        i = s(r);
                        break;
                    case e.isListFilter(r):
                        i = a(r)
                }
                void 0 !== e.$slots["filter__" + r] && (i = i ? t("div", null, [i, e.$slots["filter__" + r]]) : e.$slots["filter__" + r]), u.push(t("th", {
                    class: e.columnClass(r)
                }, [t("div", n({
                    class: "VueTables__column-filter"
                }, "class", "VueTables__" + r + "-filter-wrapper"), [i])]))
            }), e.hasChildRow && !e.opts.childRowTogglerFirst && u.push(t("th", null, [])), t("tr", {
                class: "VueTables__filters-row"
            }, [u])
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    t.exports = function(t, e) {
        var r = this,
            i = "todo" == this.source ? this.search.bind(this, this.data) : this.serverSearch.bind(this);
        return function(o) {
            return t("input", {
                on: {
                    keyup: n(i, r.opts.debounce)
                },
                class: e,
                attrs: {
                    name: "vf__" + o,
                    type: "text",
                    placeholder: r.display("filterBy", {
                        column: r.getHeading(o)
                    }),
                    value: r.query[o]
                }
            }, [])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function(r) {
            return t("div", {
                class: "VueTables__date-filter",
                attrs: {
                    id: "VueTables__" + r + "-filter"
                }
            }, [t("span", {
                class: "VueTables__filter-placeholder"
            }, [e.display("filterBy", {
                column: e.getHeading(r)
            })])])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var r = this;
        return function(n) {
            var i = [],
                o = void 0,
                s = "todo" == r.source ? r.search.bind(r, r.data) : r.serverSearch.bind(r);
            return r.opts.listColumns[n].filter(function(t) {
                return !t.hide
            }).map(function(e) {
                o = e.id == r.query[n] && "" !== r.query[n], i.push(t("option", {
                    domProps: {
                        value: e.id,
                        selected: o
                    }
                }, [e.text]))
            }), t("div", {
                class: "VueTables__list-filter",
                attrs: {
                    id: "VueTables__" + n + "-filter"
                }
            }, [t("select", {
                class: e,
                on: {
                    change: s
                },
                attrs: {
                    name: "vf__" + n
                },
                domProps: {
                    value: r.query[n]
                }
            }, [t("option", {
                attrs: {
                    value: ""
                }
            }, [r.display("defaultOption", {
                column: r.opts.headings[n] ? r.opts.headings[n] : n
            })]), i])])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function(r) {
            if (e.opts.pagination && e.opts.pagination.dropdown) return "";
            var n = e.vuex ? e.name : e.id;
            return t("pagination", {
                ref: "pagination",
                attrs: {
                    theme: r,
                    for: n,
                    vuex: e.vuex,
                    records: e.count,
                    "per-page": parseInt(e.limit),
                    chunk: e.opts.pagination.chunk,
                    "count-text": e.opts.texts.count
                },
                on: {
                    paginate: e._onPagination.bind(e)
                }
            }, [])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function(n) {
            var i = r(170)(t, n),
                o = [];
            return e.hasChildRow && e.opts.childRowTogglerFirst && o.push(t("th", null, [])), e.allColumns.map(function(e) {
                o.push(t("th", {
                    on: {
                        click: this.orderByColumn.bind(this, e)
                    },
                    class: this.sortableClass(e)
                }, [t("span", {
                    class: "VueTables__heading",
                    attrs: {
                        title: this.getHeadingTooltip(e, t)
                    }
                }, [this.getHeading(e, t)]), i.call(this, e)]))
            }.bind(e)), e.hasChildRow && !e.opts.childRowTogglerFirst && o.push(t("th", null, [])), o
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        return function(r) {
            return this.sortable(r) ? t("span", {
                class: "VueTables__sort-icon " + e + " " + this.sortableChevronClass(r)
            }, []) : ""
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        var e = this;
        return function(r, n, i) {
            return r.length > 1 ? t("select", {
                class: n,
                attrs: {
                    name: "limit",
                    id: i
                },
                domProps: {
                    value: e.limit
                },
                on: {
                    change: e.setLimit.bind(e)
                }
            }, [r]) : ""
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(173),
        i = r(174);
    t.exports = function(t) {
        var e = this;
        return function(r) {
            var o = e.columns.map(function(n) {
                return i(t, r, t("a", {
                    class: r.dropdown.item,
                    attrs: {
                        href: "#"
                    }
                }, [t("input", {
                    attrs: {
                        type: "checkbox",
                        value: n,
                        disabled: e._onlyColumn(n)
                    },
                    on: {
                        change: e.toggleColumn.bind(e, n)
                    },
                    domProps: {
                        checked: e.allColumns.includes(n)
                    }
                }, []), e.getHeading(n)]))
            });
            return t("div", {
                class: r.dropdown.container + " " + r.right + " VueTables__columns-dropdown"
            }, [t("button", {
                attrs: {
                    type: "button"
                },
                class: r.button + " " + r.dropdown.trigger,
                on: {
                    click: e._toggleColumnsDropdown.bind(e)
                }
            }, [e.display("columns"), t("span", {
                class: r.icon + " " + r.small
            }, [t("i", {
                class: r.dropdown.caret
            }, [])])]), n.call(e, t, r, o)])
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        return "bulma" === e.framework ? t("div", {
            class: e.dropdown.menu,
            style: this.displayColumnsDropdown ? "display:block" : "display:none"
        }, [t("div", {
            class: e.dropdown.content
        }, [r])]) : "bootstrap4" === e.framework ? t("div", {
            class: e.dropdown.menu,
            style: this.displayColumnsDropdown ? "display:block" : "display:none"
        }, [r]) : t("ul", {
            class: e.dropdown.menu,
            style: this.displayColumnsDropdown ? "display:block" : "display:none"
        }, [r])
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        return "bulma" === e.framework ? r : t("li", null, [r])
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return {
            beforeFilters: this.$slots.beforeFilters ? this.$slots.beforeFilters : "",
            afterFilters: this.$slots.afterFilters ? this.$slots.afterFilters : "",
            beforeBody: this.$slots.beforeBody ? this.$slots.beforeBody : "",
            prependBody: this.$slots.prependBody ? this.$slots.prependBody : "",
            appendBody: this.$slots.appendBody ? this.$slots.appendBody : "",
            afterBody: this.$slots.afterBody ? this.$slots.afterBody : "",
            beforeFilter: this.$slots.beforeFilter ? this.$slots.beforeFilter : "",
            afterFilter: this.$slots.afterFilter ? this.$slots.afterFilter : "",
            beforeLimit: this.$slots.beforeLimit ? this.$slots.beforeLimit : "",
            afterLimit: this.$slots.afterLimit ? this.$slots.afterLimit : "",
            beforeTable: this.$slots.beforeTable ? this.$slots.beforeTable : ""
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        return JSON.stringify(this.customQueries)
    }
}, function(t, e, r) {
    "use strict";
    var n = (r(29), r(181));
    t.exports = function() {
        var t = n(this.tableData),
            e = this.orderBy.column;
        t = this.search(t), e ? (this.time && (this.time = this.time), t = this.opts.sortingAlgorithm.call(this, t, e)) : this.opts.groupBy && (t = this.opts.sortingAlgorithm.call(this, t, this.opts.groupBy)), this.vuex ? this.count != t.length && this.commit("SET_COUNT", t.length) : this.count = t.length;
        var r = (this.page - 1) * this.limit;
        return t = t.splice(r, this.limit), this.applyFilters(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function(t) {
        var e = 0;
        for (var r in t) {
            ("object" == n(t[r]) || t[r] && (!isNaN(t[r]) || t[r].trim())) && e++
        }
        return e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        var n;
        return t.filter(function(t) {
            return n = !0, e.forEach(function(e) {
                var i = r[e.name];
                i && !e.callback(t, i) && (n = !1)
            }), n
        })
    }
}, function(t, e, r) {
    (function(e) {
        var r = function() {
            "use strict";

            function t(t, e) {
                return null != e && t instanceof e
            }

            function r(n, i, o, s, f) {
                function p(n, o) {
                    if (null === n) return null;
                    if (0 === o) return n;
                    var y, m;
                    if ("object" != typeof n) return n;
                    if (t(n, u)) y = new u;
                    else if (t(n, c)) y = new c;
                    else if (t(n, l)) y = new l(function(t, e) {
                        n.then(function(e) {
                            t(p(e, o - 1))
                        }, function(t) {
                            e(p(t, o - 1))
                        })
                    });
                    else if (r.__isArray(n)) y = [];
                    else if (r.__isRegExp(n)) y = new RegExp(n.source, a(n)), n.lastIndex && (y.lastIndex = n.lastIndex);
                    else if (r.__isDate(n)) y = new Date(n.getTime());
                    else {
                        if (g && e.isBuffer(n)) return y = new e(n.length), n.copy(y), y;
                        t(n, Error) ? y = Object.create(n) : void 0 === s ? (m = Object.getPrototypeOf(n), y = Object.create(m)) : (y = Object.create(s), m = s)
                    }
                    if (i) {
                        var b = h.indexOf(n);
                        if (-1 != b) return d[b];
                        h.push(n), d.push(y)
                    }
                    t(n, u) && n.forEach(function(t, e) {
                        var r = p(e, o - 1),
                            n = p(t, o - 1);
                        y.set(r, n)
                    }), t(n, c) && n.forEach(function(t) {
                        var e = p(t, o - 1);
                        y.add(e)
                    });
                    for (var v in n) {
                        var _;
                        m && (_ = Object.getOwnPropertyDescriptor(m, v)), _ && null == _.set || (y[v] = p(n[v], o - 1))
                    }
                    if (Object.getOwnPropertySymbols)
                        for (var w = Object.getOwnPropertySymbols(n), v = 0; v < w.length; v++) {
                            var x = w[v],
                                S = Object.getOwnPropertyDescriptor(n, x);
                            (!S || S.enumerable || f) && (y[x] = p(n[x], o - 1), S.enumerable || Object.defineProperty(y, x, {
                                enumerable: !1
                            }))
                        }
                    if (f)
                        for (var A = Object.getOwnPropertyNames(n), v = 0; v < A.length; v++) {
                            var C = A[v],
                                S = Object.getOwnPropertyDescriptor(n, C);
                            S && S.enumerable || (y[C] = p(n[C], o - 1), Object.defineProperty(y, C, {
                                enumerable: !1
                            }))
                        }
                    return y
                }
                "object" == typeof i && (o = i.depth, s = i.prototype, f = i.includeNonEnumerable, i = i.circular);
                var h = [],
                    d = [],
                    g = void 0 !== e;
                return void 0 === i && (i = !0), void 0 === o && (o = 1 / 0), p(n, o)
            }

            function n(t) {
                return Object.prototype.toString.call(t)
            }

            function i(t) {
                return "object" == typeof t && "[object Date]" === n(t)
            }

            function o(t) {
                return "object" == typeof t && "[object Array]" === n(t)
            }

            function s(t) {
                return "object" == typeof t && "[object RegExp]" === n(t)
            }

            function a(t) {
                var e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
            }
            var u;
            try {
                u = Map
            } catch (t) {
                u = function() {}
            }
            var c;
            try {
                c = Set
            } catch (t) {
                c = function() {}
            }
            var l;
            try {
                l = Promise
            } catch (t) {
                l = function() {}
            }
            return r.clonePrototype = function(t) {
                if (null === t) return null;
                var e = function() {};
                return e.prototype = t, new e
            }, r.__objToStr = n, r.__isDate = i, r.__isArray = o, r.__isRegExp = s, r.__getRegExpFlags = a, r
        }();
        "object" == typeof t && t.exports && (t.exports = r)
    }).call(e, r(18).Buffer)
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return this.count = t.length, t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5);
    t.exports = function(t) {
        return n(t) ? t.format(this.opts.dateFormat) : t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.data.forEach(function(t, e) {
            this.opts.dateColumns.forEach(function(e) {
                t[e] = moment(t[e], this.opts.toMomentFormat)
            }.bind(this))
        }.bind(this))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function() {
        var t = "vue-tables";
        this.name && (t += "." + this.name), this.opts.customFilters.forEach(function(e) {
            i.default.$off(t + ".filter::" + e.name), i.default.$on(t + ".filter::" + e.name, function(t) {
                this.customQueries[e.name] = t, this.updateState("customQueries", this.customQueries), this.setPage(1), this.search(this.data)
            }.bind(this))
        }.bind(this))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            n = this.defaultSort,
            i = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column],
            o = this.currentlySorting.ascending;
        return function(s, a) {
            var u, c = s[t],
                l = a[t],
                f = e ? 1 : -1;
            if ("string" == typeof c && (c = c.toLowerCase()), "string" == typeof l && (l = l.toLowerCase()), c === l && i && i[r + 1]) {
                var p = i[r + 1];
                return u = void 0 !== p.ascending ? p.ascending : p.matchDir ? o : !o, n(p.column, u, r + 1)(s, a)
            }
            return c > l ? f : -f
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = r(0),
        o = n(i),
        s = r(23),
        a = n(s),
        u = r(13),
        c = n(u),
        l = r(14),
        f = n(l),
        p = r(15),
        h = n(p),
        d = r(11),
        g = r(24),
        y = r(25),
        m = r(26);
    e.install = function(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "bootstrap3",
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "default",
            u = n ? (0, c.default)("server") : (0, f.default)(),
            l = o.default.recursive(!0, (0, h.default)(), {
                name: "server-table",
                components: {
                    Pagination: d.Pagination
                },
                render: m.call(this, s, i),
                props: {
                    columns: {
                        type: Array,
                        required: !0
                    },
                    url: {
                        type: String,
                        required: !0
                    },
                    name: {
                        type: String,
                        required: !1
                    },
                    options: {
                        type: Object,
                        required: !1,
                        default: function() {
                            return {}
                        }
                    }
                },
                created: function() {
                    y(this), this.vuex || (this.query = this.initQuery(), this.initOrderBy(), this.customQueries = this.initCustomFilters()), this.loadState(), this.getData(!0).then(function(t) {
                        var e = this.getResponseData(t);
                        this.setData(this.opts.responseAdapter.call(this.$root, e)), this.loading = !1, this.hasDateFilters() && setTimeout(function() {
                            this.initDateFilters()
                        }.bind(this), 0)
                    }.bind(this))
                },
                mounted: function() {
                    var t = this;
                    if (this.opts.saveState) {
                        var e = JSON.parse(this.storage.getItem(this.stateKey));
                        this.hasDateFilters && this.opts.dateColumns.forEach(function(r) {
                            return t._setDateFilterText(r, e.query[r])
                        })
                    }
                    this.vuex || (this.registerServerFilters(), this.options.initialPage && this.setPage(this.options.initialPage, !0))
                },
                data: function() {
                    return o.default.recursive(g(), {
                        source: "server",
                        loading: !0,
                        lastKeyStrokeAt: !1,
                        globalOptions: e
                    }, (0, a.default)(n, "server", this.options.initialPage))
                },
                methods: {
                    refresh: r(188),
                    getData: r(189),
                    setData: r(190),
                    serverSearch: r(17),
                    registerServerFilters: r(191),
                    loadState: function() {
                        var t = this;
                        if (this.opts.saveState) {
                            if (!this.storage.getItem(this.stateKey)) return this.initState(), void(this.activeState = !0);
                            var e = JSON.parse(this.storage.getItem(this.stateKey));
                            this.vuex ? this.commit("SET_STATE", {
                                query: e.query,
                                customQueries: e.customQueries,
                                page: e.page,
                                limit: e.perPage,
                                orderBy: e.orderBy
                            }) : (this.page = e.page, this.query = e.query, this.customQueries = e.customQueries, this.limit = e.perPage, this.orderBy = e.orderBy), this.opts.pagination.dropdown || setTimeout(function() {
                                t.$refs.pagination.Page = e.page
                            }, 0), this.activeState = !0
                        }
                    }
                },
                computed: {
                    totalPages: r(28),
                    hasMultiSort: function() {
                        return this.opts.serverMultiSorting
                    }
                }
            }, u);
        return t.component("v-server-table", l), l
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        this.serverSearch()
    }
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var i = r(0);
    t.exports = function(t) {
        var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = this.opts.requestKeys,
            s = (e = {}, n(e, o.query, this.query), n(e, o.limit, this.limit), n(e, o.ascending, this.orderBy.ascending ? 1 : 0), n(e, o.page, this.page), n(e, o.byColumn, this.opts.filterByColumn ? 1 : 0), e);
        this.orderBy.hasOwnProperty("column") && this.orderBy.column && (s[o.orderBy] = this.orderBy.column), s = i(s, this.opts.params, this.customQueries, r), this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column] && (s.multiSort = this.userMultiSorting[this.orderBy.column]), s = this.opts.requestAdapter(s), this.dispatch("loading", s);
        var a = this.sendRequest(s);
        return t ? a : a.then(function(t) {
            var e = this.getResponseData(t);
            return this.setData(this.opts.responseAdapter.call(this.$root, e))
        }.bind(this))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        this.data = this.applyFilters(t.data), this.count = parseInt(t.count), setTimeout(function() {
            this.dispatch("loaded", t)
        }.bind(this), 0)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = function() {
        var t = "vue-tables";
        this.name && (t += "." + this.name), this.opts.customFilters.forEach(function(e) {
            i.default.$off(t + ".filter::" + e), i.default.$on(t + ".filter::" + e, function(t) {
                this.customQueries[e] = t, this.updateState("customQueries", this.customQueries), this.refresh()
            }.bind(this))
        }.bind(this))
    }
}]);
