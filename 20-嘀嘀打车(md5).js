var jQuery = {};
!function(n) {
    function r(n, r) {
        var t = (65535 & n) + (65535 & r)
          , u = (n >> 16) + (r >> 16) + (t >> 16);
        return u << 16 | 65535 & t
    }
    function t(n, r) {
        return n << r | n >>> 32 - r
    }
    function u(n, u, e, o, c, f) {
        return r(t(r(r(u, n), r(o, f)), c), e)
    }
    function e(n, r, t, e, o, c, f) {
        return u(r & t | ~r & e, n, r, o, c, f)
    }
    function o(n, r, t, e, o, c, f) {
        return u(r & e | t & ~e, n, r, o, c, f)
    }
    function c(n, r, t, e, o, c, f) {
        return u(r ^ t ^ e, n, r, o, c, f)
    }
    function f(n, r, t, e, o, c, f) {
        return u(t ^ (r | ~e), n, r, o, c, f)
    }
    function i(n, t) {
        n[t >> 5] |= 128 << t % 32,
        n[(t + 64 >>> 9 << 4) + 14] = t;
        var u, i, a, h, g, l = 1732584193, d = -271733879, v = -1732584194, C = 271733878;
        for (u = 0; u < n.length; u += 16)
            i = l,
            a = d,
            h = v,
            g = C,
            l = e(l, d, v, C, n[u], 7, -680876936),
            C = e(C, l, d, v, n[u + 1], 12, -389564586),
            v = e(v, C, l, d, n[u + 2], 17, 606105819),
            d = e(d, v, C, l, n[u + 3], 22, -1044525330),
            l = e(l, d, v, C, n[u + 4], 7, -176418897),
            C = e(C, l, d, v, n[u + 5], 12, 1200080426),
            v = e(v, C, l, d, n[u + 6], 17, -1473231341),
            d = e(d, v, C, l, n[u + 7], 22, -45705983),
            l = e(l, d, v, C, n[u + 8], 7, 1770035416),
            C = e(C, l, d, v, n[u + 9], 12, -1958414417),
            v = e(v, C, l, d, n[u + 10], 17, -42063),
            d = e(d, v, C, l, n[u + 11], 22, -1990404162),
            l = e(l, d, v, C, n[u + 12], 7, 1804603682),
            C = e(C, l, d, v, n[u + 13], 12, -40341101),
            v = e(v, C, l, d, n[u + 14], 17, -1502002290),
            d = e(d, v, C, l, n[u + 15], 22, 1236535329),
            l = o(l, d, v, C, n[u + 1], 5, -165796510),
            C = o(C, l, d, v, n[u + 6], 9, -1069501632),
            v = o(v, C, l, d, n[u + 11], 14, 643717713),
            d = o(d, v, C, l, n[u], 20, -373897302),
            l = o(l, d, v, C, n[u + 5], 5, -701558691),
            C = o(C, l, d, v, n[u + 10], 9, 38016083),
            v = o(v, C, l, d, n[u + 15], 14, -660478335),
            d = o(d, v, C, l, n[u + 4], 20, -405537848),
            l = o(l, d, v, C, n[u + 9], 5, 568446438),
            C = o(C, l, d, v, n[u + 14], 9, -1019803690),
            v = o(v, C, l, d, n[u + 3], 14, -187363961),
            d = o(d, v, C, l, n[u + 8], 20, 1163531501),
            l = o(l, d, v, C, n[u + 13], 5, -1444681467),
            C = o(C, l, d, v, n[u + 2], 9, -51403784),
            v = o(v, C, l, d, n[u + 7], 14, 1735328473),
            d = o(d, v, C, l, n[u + 12], 20, -1926607734),
            l = c(l, d, v, C, n[u + 5], 4, -378558),
            C = c(C, l, d, v, n[u + 8], 11, -2022574463),
            v = c(v, C, l, d, n[u + 11], 16, 1839030562),
            d = c(d, v, C, l, n[u + 14], 23, -35309556),
            l = c(l, d, v, C, n[u + 1], 4, -1530992060),
            C = c(C, l, d, v, n[u + 4], 11, 1272893353),
            v = c(v, C, l, d, n[u + 7], 16, -155497632),
            d = c(d, v, C, l, n[u + 10], 23, -1094730640),
            l = c(l, d, v, C, n[u + 13], 4, 681279174),
            C = c(C, l, d, v, n[u], 11, -358537222),
            v = c(v, C, l, d, n[u + 3], 16, -722521979),
            d = c(d, v, C, l, n[u + 6], 23, 76029189),
            l = c(l, d, v, C, n[u + 9], 4, -640364487),
            C = c(C, l, d, v, n[u + 12], 11, -421815835),
            v = c(v, C, l, d, n[u + 15], 16, 530742520),
            d = c(d, v, C, l, n[u + 2], 23, -995338651),
            l = f(l, d, v, C, n[u], 6, -198630844),
            C = f(C, l, d, v, n[u + 7], 10, 1126891415),
            v = f(v, C, l, d, n[u + 14], 15, -1416354905),
            d = f(d, v, C, l, n[u + 5], 21, -57434055),
            l = f(l, d, v, C, n[u + 12], 6, 1700485571),
            C = f(C, l, d, v, n[u + 3], 10, -1894986606),
            v = f(v, C, l, d, n[u + 10], 15, -1051523),
            d = f(d, v, C, l, n[u + 1], 21, -2054922799),
            l = f(l, d, v, C, n[u + 8], 6, 1873313359),
            C = f(C, l, d, v, n[u + 15], 10, -30611744),
            v = f(v, C, l, d, n[u + 6], 15, -1560198380),
            d = f(d, v, C, l, n[u + 13], 21, 1309151649),
            l = f(l, d, v, C, n[u + 4], 6, -145523070),
            C = f(C, l, d, v, n[u + 11], 10, -1120210379),
            v = f(v, C, l, d, n[u + 2], 15, 718787259),
            d = f(d, v, C, l, n[u + 9], 21, -343485551),
            l = r(l, i),
            d = r(d, a),
            v = r(v, h),
            C = r(C, g);
        return [l, d, v, C]
    }
    function a(n) {
        var r, t = "";
        for (r = 0; r < 32 * n.length; r += 8)
            t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
        return t
    }
    function h(n) {
        var r, t = [];
        for (t[(n.length >> 2) - 1] = void 0,
        r = 0; r < t.length; r += 1)
            t[r] = 0;
        for (r = 0; r < 8 * n.length; r += 8)
            t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
        return t
    }
    function g(n) {
        return a(i(h(n), 8 * n.length))
    }
    function l(n, r) {
        var t, u, e = h(n), o = [], c = [];
        for (o[15] = c[15] = void 0,
        e.length > 16 && (e = i(e, 8 * n.length)),
        t = 0; 16 > t; t += 1)
            o[t] = 909522486 ^ e[t],
            c[t] = 1549556828 ^ e[t];
        return u = i(o.concat(h(r)), 512 + 8 * r.length),
        a(i(c.concat(u), 640))
    }
    function d(n) {
        var r, t, u = "0123456789abcdef", e = "";
        for (t = 0; t < n.length; t += 1)
            r = n.charCodeAt(t),
            e += u.charAt(r >>> 4 & 15) + u.charAt(15 & r);
        return e
    }
    function v(n) {
        return unescape(encodeURIComponent(n))
    }
    function C(n) {
        return g(v(n))
    }
    function A(n) {
        return d(C(n))
    }
    function m(n, r) {
        return l(v(n), v(r))
    }
    function p(n, r) {
        return d(m(n, r))
    }
    function b(n, r, t) {
        return r ? t ? m(r, n) : p(r, n) : t ? C(n) : A(n)
    }
    n.md5 = b
}(jQuery);

var testmd5 = jQuery.md5;
//方法一 把封闭函数去掉,所有函数暴露在外面
function test(pwd){	
        return  b(pwd);

}

//方法二 保留封闭函数 (function(n){name:"张三", age:16})(jquery)
function test2(pwd){

     return  testmd5(pwd);

}