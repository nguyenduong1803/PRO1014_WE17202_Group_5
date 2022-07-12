export default function formatNumber(a, b, c, d) {
    var n;
    var e = isNaN(b = Math.abs(b)) ? 2 : b;
    b = void 0 === c ? "," : c;
    d = void 0 === d ? "," : d;
    c = 0 > a ? "-" : "";
    var g = parseInt(a = Math.abs(+a || 0).toFixed(e)) + "",// eslint-disable-next-line 
    n = 3 < (n = g.length) ? n % 3 : 0;
    return c + (n ? g.substr(0, n) + d : "") + g.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d) + (e ? b + Math.abs(a - g).toFixed(e).slice(2) : "")
}
