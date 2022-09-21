import { computed as Je, ref as yi, onMounted as Xi, watch as Zi, openBlock as Ki, createElementBlock as Yi, normalizeStyle as xi, unref as Ce, createElementVNode as ze, reactive as Ni, createVNode as Oi, onUnmounted as nr, normalizeClass as rr, defineCustomElement as sr } from "vue";
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(Wt) {
  var ct = Wt.default;
  if (typeof ct == "function") {
    var W = function() {
      return ct.apply(this, arguments);
    };
    W.prototype = ct.prototype;
  } else
    W = {};
  return Object.defineProperty(W, "__esModule", { value: !0 }), Object.keys(Wt).forEach(function(it) {
    var $ = Object.getOwnPropertyDescriptor(Wt, it);
    Object.defineProperty(W, it, $.get ? $ : {
      enumerable: !0,
      get: function() {
        return Wt[it];
      }
    });
  }), W;
}
function ur(Wt) {
  throw new Error('Could not dynamically require "' + Wt + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var yn = { exports: {} };
const or = {}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), _n = /* @__PURE__ */ ar(hr);
var Mi = { exports: {} }, vn;
function lr() {
  return vn || (vn = 1, function(Wt, ct) {
    (function(W, it) {
      it(ct);
    })(xn, function(W) {
      var it = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], $ = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], M = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", ge = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", jt = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      }, Gt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", be = {
        5: Gt,
        "5module": Gt + " export import",
        6: Gt + " const class extends export import super"
      }, Ot = /^in(stanceof)?$/, pt = new RegExp("[" + ge + "]"), Bt = new RegExp("[" + ge + M + "]");
      function z(n, u) {
        for (var b = 65536, A = 0; A < u.length; A += 2) {
          if (b += u[A], b > n)
            return !1;
          if (b += u[A + 1], b >= n)
            return !0;
        }
      }
      function Et(n, u) {
        return n < 65 ? n === 36 : n < 91 ? !0 : n < 97 ? n === 95 : n < 123 ? !0 : n <= 65535 ? n >= 170 && pt.test(String.fromCharCode(n)) : u === !1 ? !1 : z(n, $);
      }
      function nt(n, u) {
        return n < 48 ? n === 36 : n < 58 ? !0 : n < 65 ? !1 : n < 91 ? !0 : n < 97 ? n === 95 : n < 123 ? !0 : n <= 65535 ? n >= 170 && Bt.test(String.fromCharCode(n)) : u === !1 ? !1 : z(n, $) || z(n, it);
      }
      var _t = function(u, b) {
        b === void 0 && (b = {}), this.label = u, this.keyword = b.keyword, this.beforeExpr = !!b.beforeExpr, this.startsExpr = !!b.startsExpr, this.isLoop = !!b.isLoop, this.isAssign = !!b.isAssign, this.prefix = !!b.prefix, this.postfix = !!b.postfix, this.binop = b.binop || null, this.updateContext = null;
      };
      function ot(n, u) {
        return new _t(n, { beforeExpr: !0, binop: u });
      }
      var re = { beforeExpr: !0 }, At = { startsExpr: !0 }, Rt = {};
      function kt(n, u) {
        return u === void 0 && (u = {}), u.keyword = n, Rt[n] = new _t(n, u);
      }
      var I = {
        num: new _t("num", At),
        regexp: new _t("regexp", At),
        string: new _t("string", At),
        name: new _t("name", At),
        privateId: new _t("privateId", At),
        eof: new _t("eof"),
        bracketL: new _t("[", { beforeExpr: !0, startsExpr: !0 }),
        bracketR: new _t("]"),
        braceL: new _t("{", { beforeExpr: !0, startsExpr: !0 }),
        braceR: new _t("}"),
        parenL: new _t("(", { beforeExpr: !0, startsExpr: !0 }),
        parenR: new _t(")"),
        comma: new _t(",", re),
        semi: new _t(";", re),
        colon: new _t(":", re),
        dot: new _t("."),
        question: new _t("?", re),
        questionDot: new _t("?."),
        arrow: new _t("=>", re),
        template: new _t("template"),
        invalidTemplate: new _t("invalidTemplate"),
        ellipsis: new _t("...", re),
        backQuote: new _t("`", At),
        dollarBraceL: new _t("${", { beforeExpr: !0, startsExpr: !0 }),
        eq: new _t("=", { beforeExpr: !0, isAssign: !0 }),
        assign: new _t("_=", { beforeExpr: !0, isAssign: !0 }),
        incDec: new _t("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
        prefix: new _t("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        logicalOR: ot("||", 1),
        logicalAND: ot("&&", 2),
        bitwiseOR: ot("|", 3),
        bitwiseXOR: ot("^", 4),
        bitwiseAND: ot("&", 5),
        equality: ot("==/!=/===/!==", 6),
        relational: ot("</>/<=/>=", 7),
        bitShift: ot("<</>>/>>>", 8),
        plusMin: new _t("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
        modulo: ot("%", 10),
        star: ot("*", 10),
        slash: ot("/", 10),
        starstar: new _t("**", { beforeExpr: !0 }),
        coalesce: ot("??", 1),
        _break: kt("break"),
        _case: kt("case", re),
        _catch: kt("catch"),
        _continue: kt("continue"),
        _debugger: kt("debugger"),
        _default: kt("default", re),
        _do: kt("do", { isLoop: !0, beforeExpr: !0 }),
        _else: kt("else", re),
        _finally: kt("finally"),
        _for: kt("for", { isLoop: !0 }),
        _function: kt("function", At),
        _if: kt("if"),
        _return: kt("return", re),
        _switch: kt("switch"),
        _throw: kt("throw", re),
        _try: kt("try"),
        _var: kt("var"),
        _const: kt("const"),
        _while: kt("while", { isLoop: !0 }),
        _with: kt("with"),
        _new: kt("new", { beforeExpr: !0, startsExpr: !0 }),
        _this: kt("this", At),
        _super: kt("super", At),
        _class: kt("class", At),
        _extends: kt("extends", re),
        _export: kt("export"),
        _import: kt("import", At),
        _null: kt("null", At),
        _true: kt("true", At),
        _false: kt("false", At),
        _in: kt("in", { beforeExpr: !0, binop: 7 }),
        _instanceof: kt("instanceof", { beforeExpr: !0, binop: 7 }),
        _typeof: kt("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _void: kt("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _delete: kt("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
      }, zt = /\r\n?|\n|\u2028|\u2029/, Te = new RegExp(zt.source, "g");
      function Zt(n) {
        return n === 10 || n === 13 || n === 8232 || n === 8233;
      }
      function ke(n, u, b) {
        b === void 0 && (b = n.length);
        for (var A = u; A < b; A++) {
          var O = n.charCodeAt(A);
          if (Zt(O))
            return A < b - 1 && O === 13 && n.charCodeAt(A + 1) === 10 ? A + 2 : A + 1;
        }
        return -1;
      }
      var We = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, ee = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ye = Object.prototype, vt = ye.hasOwnProperty, oi = ye.toString, st = Object.hasOwn || function(n, u) {
        return vt.call(n, u);
      }, xe = Array.isArray || function(n) {
        return oi.call(n) === "[object Array]";
      };
      function ve(n) {
        return new RegExp("^(?:" + n.replace(/ /g, "|") + ")$");
      }
      function Tt(n) {
        return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
      }
      var we = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Be = function(u, b) {
        this.line = u, this.column = b;
      };
      Be.prototype.offset = function(u) {
        return new Be(this.line, this.column + u);
      };
      var He = function(u, b, A) {
        this.start = b, this.end = A, u.sourceFile !== null && (this.source = u.sourceFile);
      };
      function Fe(n, u) {
        for (var b = 1, A = 0; ; ) {
          var O = ke(n, A, u);
          if (O < 0)
            return new Be(b, u - A);
          ++b, A = O;
        }
      }
      var $e = {
        ecmaVersion: null,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: !1,
        allowImportExportEverywhere: !1,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: !1,
        locations: !1,
        onToken: null,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: !1
      }, Jt = !1;
      function ti(n) {
        var u = {};
        for (var b in $e)
          u[b] = n && st(n, b) ? n[b] : $e[b];
        if (u.ecmaVersion === "latest" ? u.ecmaVersion = 1e8 : u.ecmaVersion == null ? (!Jt && typeof console == "object" && console.warn && (Jt = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), u.ecmaVersion = 11) : u.ecmaVersion >= 2015 && (u.ecmaVersion -= 2009), u.allowReserved == null && (u.allowReserved = u.ecmaVersion < 5), n.allowHashBang == null && (u.allowHashBang = u.ecmaVersion >= 14), xe(u.onToken)) {
          var A = u.onToken;
          u.onToken = function(O) {
            return A.push(O);
          };
        }
        return xe(u.onComment) && (u.onComment = hi(u, u.onComment)), u;
      }
      function hi(n, u) {
        return function(b, A, O, H, G, tt) {
          var ut = {
            type: b ? "Block" : "Line",
            value: A,
            start: O,
            end: H
          };
          n.locations && (ut.loc = new He(this, G, tt)), n.ranges && (ut.range = [O, H]), u.push(ut);
        };
      }
      var Re = 1, Dt = 2, Xt = 4, qt = 8, wi = 16, je = 32, li = 64, fi = 128, Ge = 256, ci = Re | Dt | Ge;
      function di(n, u) {
        return Dt | (n ? Xt : 0) | (u ? qt : 0);
      }
      var ei = 0, ii = 1, Ft = 2, ni = 3, Ht = 4, pi = 5, dt = function(u, b, A) {
        this.options = u = ti(u), this.sourceFile = u.sourceFile, this.keywords = ve(be[u.ecmaVersion >= 6 ? 6 : u.sourceType === "module" ? "5module" : 5]);
        var O = "";
        u.allowReserved !== !0 && (O = jt[u.ecmaVersion >= 6 ? 6 : u.ecmaVersion === 5 ? 5 : 3], u.sourceType === "module" && (O += " await")), this.reservedWords = ve(O);
        var H = (O ? O + " " : "") + jt.strict;
        this.reservedWordsStrict = ve(H), this.reservedWordsStrictBind = ve(H + " " + jt.strictBind), this.input = String(b), this.containsEsc = !1, A ? (this.pos = A, this.lineStart = this.input.lastIndexOf(`
`, A - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(zt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = I.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = u.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && u.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Re), this.regexpState = null, this.privateNameStack = [];
      }, t = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
      dt.prototype.parse = function() {
        var u = this.options.program || this.startNode();
        return this.nextToken(), this.parseTopLevel(u);
      }, t.inFunction.get = function() {
        return (this.currentVarScope().flags & Dt) > 0;
      }, t.inGenerator.get = function() {
        return (this.currentVarScope().flags & qt) > 0 && !this.currentVarScope().inClassFieldInit;
      }, t.inAsync.get = function() {
        return (this.currentVarScope().flags & Xt) > 0 && !this.currentVarScope().inClassFieldInit;
      }, t.canAwait.get = function() {
        for (var n = this.scopeStack.length - 1; n >= 0; n--) {
          var u = this.scopeStack[n];
          if (u.inClassFieldInit || u.flags & Ge)
            return !1;
          if (u.flags & Dt)
            return (u.flags & Xt) > 0;
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      }, t.allowSuper.get = function() {
        var n = this.currentThisScope(), u = n.flags, b = n.inClassFieldInit;
        return (u & li) > 0 || b || this.options.allowSuperOutsideMethod;
      }, t.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & fi) > 0;
      }, t.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      }, t.allowNewDotTarget.get = function() {
        var n = this.currentThisScope(), u = n.flags, b = n.inClassFieldInit;
        return (u & (Dt | Ge)) > 0 || b;
      }, t.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & Ge) > 0;
      }, dt.extend = function() {
        for (var u = [], b = arguments.length; b--; )
          u[b] = arguments[b];
        for (var A = this, O = 0; O < u.length; O++)
          A = u[O](A);
        return A;
      }, dt.parse = function(u, b) {
        return new this(b, u).parse();
      }, dt.parseExpressionAt = function(u, b, A) {
        var O = new this(A, u, b);
        return O.nextToken(), O.parseExpression();
      }, dt.tokenizer = function(u, b) {
        return new this(b, u);
      }, Object.defineProperties(dt.prototype, t);
      var e = dt.prototype, i = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
      e.strictDirective = function(n) {
        if (this.options.ecmaVersion < 5)
          return !1;
        for (; ; ) {
          ee.lastIndex = n, n += ee.exec(this.input)[0].length;
          var u = i.exec(this.input.slice(n));
          if (!u)
            return !1;
          if ((u[1] || u[2]) === "use strict") {
            ee.lastIndex = n + u[0].length;
            var b = ee.exec(this.input), A = b.index + b[0].length, O = this.input.charAt(A);
            return O === ";" || O === "}" || zt.test(b[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(O) || O === "!" && this.input.charAt(A + 1) === "=");
          }
          n += u[0].length, ee.lastIndex = n, n += ee.exec(this.input)[0].length, this.input[n] === ";" && n++;
        }
      }, e.eat = function(n) {
        return this.type === n ? (this.next(), !0) : !1;
      }, e.isContextual = function(n) {
        return this.type === I.name && this.value === n && !this.containsEsc;
      }, e.eatContextual = function(n) {
        return this.isContextual(n) ? (this.next(), !0) : !1;
      }, e.expectContextual = function(n) {
        this.eatContextual(n) || this.unexpected();
      }, e.canInsertSemicolon = function() {
        return this.type === I.eof || this.type === I.braceR || zt.test(this.input.slice(this.lastTokEnd, this.start));
      }, e.insertSemicolon = function() {
        if (this.canInsertSemicolon())
          return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
      }, e.semicolon = function() {
        !this.eat(I.semi) && !this.insertSemicolon() && this.unexpected();
      }, e.afterTrailingComma = function(n, u) {
        if (this.type === n)
          return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), u || this.next(), !0;
      }, e.expect = function(n) {
        this.eat(n) || this.unexpected();
      }, e.unexpected = function(n) {
        this.raise(n != null ? n : this.start, "Unexpected token");
      };
      var r = function() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      };
      e.checkPatternErrors = function(n, u) {
        if (!!n) {
          n.trailingComma > -1 && this.raiseRecoverable(n.trailingComma, "Comma is not permitted after the rest element");
          var b = u ? n.parenthesizedAssign : n.parenthesizedBind;
          b > -1 && this.raiseRecoverable(b, u ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      }, e.checkExpressionErrors = function(n, u) {
        if (!n)
          return !1;
        var b = n.shorthandAssign, A = n.doubleProto;
        if (!u)
          return b >= 0 || A >= 0;
        b >= 0 && this.raise(b, "Shorthand property assignments are valid only in destructuring patterns"), A >= 0 && this.raiseRecoverable(A, "Redefinition of __proto__ property");
      }, e.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
      }, e.isSimpleAssignTarget = function(n) {
        return n.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(n.expression) : n.type === "Identifier" || n.type === "MemberExpression";
      };
      var s = dt.prototype;
      s.parseTopLevel = function(n) {
        var u = /* @__PURE__ */ Object.create(null);
        for (n.body || (n.body = []); this.type !== I.eof; ) {
          var b = this.parseStatement(null, !0, u);
          n.body.push(b);
        }
        if (this.inModule)
          for (var A = 0, O = Object.keys(this.undefinedExports); A < O.length; A += 1) {
            var H = O[A];
            this.raiseRecoverable(this.undefinedExports[H].start, "Export '" + H + "' is not defined");
          }
        return this.adaptDirectivePrologue(n.body), this.next(), n.sourceType = this.options.sourceType, this.finishNode(n, "Program");
      };
      var a = { kind: "loop" }, h = { kind: "switch" };
      s.isLet = function(n) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
          return !1;
        ee.lastIndex = this.pos;
        var u = ee.exec(this.input), b = this.pos + u[0].length, A = this.input.charCodeAt(b);
        if (A === 91 || A === 92 || A > 55295 && A < 56320)
          return !0;
        if (n)
          return !1;
        if (A === 123)
          return !0;
        if (Et(A, !0)) {
          for (var O = b + 1; nt(A = this.input.charCodeAt(O), !0); )
            ++O;
          if (A === 92 || A > 55295 && A < 56320)
            return !0;
          var H = this.input.slice(b, O);
          if (!Ot.test(H))
            return !0;
        }
        return !1;
      }, s.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
          return !1;
        ee.lastIndex = this.pos;
        var n = ee.exec(this.input), u = this.pos + n[0].length, b;
        return !zt.test(this.input.slice(this.pos, u)) && this.input.slice(u, u + 8) === "function" && (u + 8 === this.input.length || !(nt(b = this.input.charCodeAt(u + 8)) || b > 55295 && b < 56320));
      }, s.parseStatement = function(n, u, b) {
        var A = this.type, O = this.startNode(), H;
        switch (this.isLet(n) && (A = I._var, H = "let"), A) {
          case I._break:
          case I._continue:
            return this.parseBreakContinueStatement(O, A.keyword);
          case I._debugger:
            return this.parseDebuggerStatement(O);
          case I._do:
            return this.parseDoStatement(O);
          case I._for:
            return this.parseForStatement(O);
          case I._function:
            return n && (this.strict || n !== "if" && n !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(O, !1, !n);
          case I._class:
            return n && this.unexpected(), this.parseClass(O, !0);
          case I._if:
            return this.parseIfStatement(O);
          case I._return:
            return this.parseReturnStatement(O);
          case I._switch:
            return this.parseSwitchStatement(O);
          case I._throw:
            return this.parseThrowStatement(O);
          case I._try:
            return this.parseTryStatement(O);
          case I._const:
          case I._var:
            return H = H || this.value, n && H !== "var" && this.unexpected(), this.parseVarStatement(O, H);
          case I._while:
            return this.parseWhileStatement(O);
          case I._with:
            return this.parseWithStatement(O);
          case I.braceL:
            return this.parseBlock(!0, O);
          case I.semi:
            return this.parseEmptyStatement(O);
          case I._export:
          case I._import:
            if (this.options.ecmaVersion > 10 && A === I._import) {
              ee.lastIndex = this.pos;
              var G = ee.exec(this.input), tt = this.pos + G[0].length, ut = this.input.charCodeAt(tt);
              if (ut === 40 || ut === 46)
                return this.parseExpressionStatement(O, this.parseExpression());
            }
            return this.options.allowImportExportEverywhere || (u || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), A === I._import ? this.parseImport(O) : this.parseExport(O, b);
          default:
            if (this.isAsyncFunction())
              return n && this.unexpected(), this.next(), this.parseFunctionStatement(O, !0, !n);
            var bt = this.value, wt = this.parseExpression();
            return A === I.name && wt.type === "Identifier" && this.eat(I.colon) ? this.parseLabeledStatement(O, bt, wt, n) : this.parseExpressionStatement(O, wt);
        }
      }, s.parseBreakContinueStatement = function(n, u) {
        var b = u === "break";
        this.next(), this.eat(I.semi) || this.insertSemicolon() ? n.label = null : this.type !== I.name ? this.unexpected() : (n.label = this.parseIdent(), this.semicolon());
        for (var A = 0; A < this.labels.length; ++A) {
          var O = this.labels[A];
          if ((n.label == null || O.name === n.label.name) && (O.kind != null && (b || O.kind === "loop") || n.label && b))
            break;
        }
        return A === this.labels.length && this.raise(n.start, "Unsyntactic " + u), this.finishNode(n, b ? "BreakStatement" : "ContinueStatement");
      }, s.parseDebuggerStatement = function(n) {
        return this.next(), this.semicolon(), this.finishNode(n, "DebuggerStatement");
      }, s.parseDoStatement = function(n) {
        return this.next(), this.labels.push(a), n.body = this.parseStatement("do"), this.labels.pop(), this.expect(I._while), n.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(I.semi) : this.semicolon(), this.finishNode(n, "DoWhileStatement");
      }, s.parseForStatement = function(n) {
        this.next();
        var u = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        if (this.labels.push(a), this.enterScope(0), this.expect(I.parenL), this.type === I.semi)
          return u > -1 && this.unexpected(u), this.parseFor(n, null);
        var b = this.isLet();
        if (this.type === I._var || this.type === I._const || b) {
          var A = this.startNode(), O = b ? "let" : this.value;
          return this.next(), this.parseVar(A, !0, O), this.finishNode(A, "VariableDeclaration"), (this.type === I._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && A.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === I._in ? u > -1 && this.unexpected(u) : n.await = u > -1), this.parseForIn(n, A)) : (u > -1 && this.unexpected(u), this.parseFor(n, A));
        }
        var H = this.isContextual("let"), G = !1, tt = new r(), ut = this.parseExpression(u > -1 ? "await" : !0, tt);
        return this.type === I._in || (G = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (this.options.ecmaVersion >= 9 && (this.type === I._in ? u > -1 && this.unexpected(u) : n.await = u > -1), H && G && this.raise(ut.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(ut, !1, tt), this.checkLValPattern(ut), this.parseForIn(n, ut)) : (this.checkExpressionErrors(tt, !0), u > -1 && this.unexpected(u), this.parseFor(n, ut));
      }, s.parseFunctionStatement = function(n, u, b) {
        return this.next(), this.parseFunction(n, l | (b ? 0 : f), !1, u);
      }, s.parseIfStatement = function(n) {
        return this.next(), n.test = this.parseParenExpression(), n.consequent = this.parseStatement("if"), n.alternate = this.eat(I._else) ? this.parseStatement("if") : null, this.finishNode(n, "IfStatement");
      }, s.parseReturnStatement = function(n) {
        return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(I.semi) || this.insertSemicolon() ? n.argument = null : (n.argument = this.parseExpression(), this.semicolon()), this.finishNode(n, "ReturnStatement");
      }, s.parseSwitchStatement = function(n) {
        this.next(), n.discriminant = this.parseParenExpression(), n.cases = [], this.expect(I.braceL), this.labels.push(h), this.enterScope(0);
        for (var u, b = !1; this.type !== I.braceR; )
          if (this.type === I._case || this.type === I._default) {
            var A = this.type === I._case;
            u && this.finishNode(u, "SwitchCase"), n.cases.push(u = this.startNode()), u.consequent = [], this.next(), A ? u.test = this.parseExpression() : (b && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), b = !0, u.test = null), this.expect(I.colon);
          } else
            u || this.unexpected(), u.consequent.push(this.parseStatement(null));
        return this.exitScope(), u && this.finishNode(u, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(n, "SwitchStatement");
      }, s.parseThrowStatement = function(n) {
        return this.next(), zt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), n.argument = this.parseExpression(), this.semicolon(), this.finishNode(n, "ThrowStatement");
      };
      var o = [];
      s.parseTryStatement = function(n) {
        if (this.next(), n.block = this.parseBlock(), n.handler = null, this.type === I._catch) {
          var u = this.startNode();
          if (this.next(), this.eat(I.parenL)) {
            u.param = this.parseBindingAtom();
            var b = u.param.type === "Identifier";
            this.enterScope(b ? je : 0), this.checkLValPattern(u.param, b ? Ht : Ft), this.expect(I.parenR);
          } else
            this.options.ecmaVersion < 10 && this.unexpected(), u.param = null, this.enterScope(0);
          u.body = this.parseBlock(!1), this.exitScope(), n.handler = this.finishNode(u, "CatchClause");
        }
        return n.finalizer = this.eat(I._finally) ? this.parseBlock() : null, !n.handler && !n.finalizer && this.raise(n.start, "Missing catch or finally clause"), this.finishNode(n, "TryStatement");
      }, s.parseVarStatement = function(n, u) {
        return this.next(), this.parseVar(n, !1, u), this.semicolon(), this.finishNode(n, "VariableDeclaration");
      }, s.parseWhileStatement = function(n) {
        return this.next(), n.test = this.parseParenExpression(), this.labels.push(a), n.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(n, "WhileStatement");
      }, s.parseWithStatement = function(n) {
        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), n.object = this.parseParenExpression(), n.body = this.parseStatement("with"), this.finishNode(n, "WithStatement");
      }, s.parseEmptyStatement = function(n) {
        return this.next(), this.finishNode(n, "EmptyStatement");
      }, s.parseLabeledStatement = function(n, u, b, A) {
        for (var O = 0, H = this.labels; O < H.length; O += 1) {
          var G = H[O];
          G.name === u && this.raise(b.start, "Label '" + u + "' is already declared");
        }
        for (var tt = this.type.isLoop ? "loop" : this.type === I._switch ? "switch" : null, ut = this.labels.length - 1; ut >= 0; ut--) {
          var bt = this.labels[ut];
          if (bt.statementStart === n.start)
            bt.statementStart = this.start, bt.kind = tt;
          else
            break;
        }
        return this.labels.push({ name: u, kind: tt, statementStart: this.start }), n.body = this.parseStatement(A ? A.indexOf("label") === -1 ? A + "label" : A : "label"), this.labels.pop(), n.label = b, this.finishNode(n, "LabeledStatement");
      }, s.parseExpressionStatement = function(n, u) {
        return n.expression = u, this.semicolon(), this.finishNode(n, "ExpressionStatement");
      }, s.parseBlock = function(n, u, b) {
        for (n === void 0 && (n = !0), u === void 0 && (u = this.startNode()), u.body = [], this.expect(I.braceL), n && this.enterScope(0); this.type !== I.braceR; ) {
          var A = this.parseStatement(null);
          u.body.push(A);
        }
        return b && (this.strict = !1), this.next(), n && this.exitScope(), this.finishNode(u, "BlockStatement");
      }, s.parseFor = function(n, u) {
        return n.init = u, this.expect(I.semi), n.test = this.type === I.semi ? null : this.parseExpression(), this.expect(I.semi), n.update = this.type === I.parenR ? null : this.parseExpression(), this.expect(I.parenR), n.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(n, "ForStatement");
      }, s.parseForIn = function(n, u) {
        var b = this.type === I._in;
        return this.next(), u.type === "VariableDeclaration" && u.declarations[0].init != null && (!b || this.options.ecmaVersion < 8 || this.strict || u.kind !== "var" || u.declarations[0].id.type !== "Identifier") && this.raise(
          u.start,
          (b ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
        ), n.left = u, n.right = b ? this.parseExpression() : this.parseMaybeAssign(), this.expect(I.parenR), n.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(n, b ? "ForInStatement" : "ForOfStatement");
      }, s.parseVar = function(n, u, b) {
        for (n.declarations = [], n.kind = b; ; ) {
          var A = this.startNode();
          if (this.parseVarId(A, b), this.eat(I.eq) ? A.init = this.parseMaybeAssign(u) : b === "const" && !(this.type === I._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : A.id.type !== "Identifier" && !(u && (this.type === I._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : A.init = null, n.declarations.push(this.finishNode(A, "VariableDeclarator")), !this.eat(I.comma))
            break;
        }
        return n;
      }, s.parseVarId = function(n, u) {
        n.id = this.parseBindingAtom(), this.checkLValPattern(n.id, u === "var" ? ii : Ft, !1);
      };
      var l = 1, f = 2, _ = 4;
      s.parseFunction = function(n, u, b, A, O) {
        this.initFunction(n), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !A) && (this.type === I.star && u & f && this.unexpected(), n.generator = this.eat(I.star)), this.options.ecmaVersion >= 8 && (n.async = !!A), u & l && (n.id = u & _ && this.type !== I.name ? null : this.parseIdent(), n.id && !(u & f) && this.checkLValSimple(n.id, this.strict || n.generator || n.async ? this.treatFunctionsAsVar ? ii : Ft : ni));
        var H = this.yieldPos, G = this.awaitPos, tt = this.awaitIdentPos;
        return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(di(n.async, n.generator)), u & l || (n.id = this.type === I.name ? this.parseIdent() : null), this.parseFunctionParams(n), this.parseFunctionBody(n, b, !1, O), this.yieldPos = H, this.awaitPos = G, this.awaitIdentPos = tt, this.finishNode(n, u & l ? "FunctionDeclaration" : "FunctionExpression");
      }, s.parseFunctionParams = function(n) {
        this.expect(I.parenL), n.params = this.parseBindingList(I.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
      }, s.parseClass = function(n, u) {
        this.next();
        var b = this.strict;
        this.strict = !0, this.parseClassId(n, u), this.parseClassSuper(n);
        var A = this.enterClassBody(), O = this.startNode(), H = !1;
        for (O.body = [], this.expect(I.braceL); this.type !== I.braceR; ) {
          var G = this.parseClassElement(n.superClass !== null);
          G && (O.body.push(G), G.type === "MethodDefinition" && G.kind === "constructor" ? (H && this.raise(G.start, "Duplicate constructor in the same class"), H = !0) : G.key && G.key.type === "PrivateIdentifier" && v(A, G) && this.raiseRecoverable(G.key.start, "Identifier '#" + G.key.name + "' has already been declared"));
        }
        return this.strict = b, this.next(), n.body = this.finishNode(O, "ClassBody"), this.exitClassBody(), this.finishNode(n, u ? "ClassDeclaration" : "ClassExpression");
      }, s.parseClassElement = function(n) {
        if (this.eat(I.semi))
          return null;
        var u = this.options.ecmaVersion, b = this.startNode(), A = "", O = !1, H = !1, G = "method", tt = !1;
        if (this.eatContextual("static")) {
          if (u >= 13 && this.eat(I.braceL))
            return this.parseClassStaticBlock(b), b;
          this.isClassElementNameStart() || this.type === I.star ? tt = !0 : A = "static";
        }
        if (b.static = tt, !A && u >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === I.star) && !this.canInsertSemicolon() ? H = !0 : A = "async"), !A && (u >= 9 || !H) && this.eat(I.star) && (O = !0), !A && !H && !O) {
          var ut = this.value;
          (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? G = ut : A = ut);
        }
        if (A ? (b.computed = !1, b.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), b.key.name = A, this.finishNode(b.key, "Identifier")) : this.parseClassElementName(b), u < 13 || this.type === I.parenL || G !== "method" || O || H) {
          var bt = !b.static && g(b, "constructor"), wt = bt && n;
          bt && G !== "method" && this.raise(b.key.start, "Constructor can't have get/set modifier"), b.kind = bt ? "constructor" : G, this.parseClassMethod(b, O, H, wt);
        } else
          this.parseClassField(b);
        return b;
      }, s.isClassElementNameStart = function() {
        return this.type === I.name || this.type === I.privateId || this.type === I.num || this.type === I.string || this.type === I.bracketL || this.type.keyword;
      }, s.parseClassElementName = function(n) {
        this.type === I.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), n.computed = !1, n.key = this.parsePrivateIdent()) : this.parsePropertyName(n);
      }, s.parseClassMethod = function(n, u, b, A) {
        var O = n.key;
        n.kind === "constructor" ? (u && this.raise(O.start, "Constructor can't be a generator"), b && this.raise(O.start, "Constructor can't be an async method")) : n.static && g(n, "prototype") && this.raise(O.start, "Classes may not have a static property named prototype");
        var H = n.value = this.parseMethod(u, b, A);
        return n.kind === "get" && H.params.length !== 0 && this.raiseRecoverable(H.start, "getter should have no params"), n.kind === "set" && H.params.length !== 1 && this.raiseRecoverable(H.start, "setter should have exactly one param"), n.kind === "set" && H.params[0].type === "RestElement" && this.raiseRecoverable(H.params[0].start, "Setter cannot use rest params"), this.finishNode(n, "MethodDefinition");
      }, s.parseClassField = function(n) {
        if (g(n, "constructor") ? this.raise(n.key.start, "Classes can't have a field named 'constructor'") : n.static && g(n, "prototype") && this.raise(n.key.start, "Classes can't have a static field named 'prototype'"), this.eat(I.eq)) {
          var u = this.currentThisScope(), b = u.inClassFieldInit;
          u.inClassFieldInit = !0, n.value = this.parseMaybeAssign(), u.inClassFieldInit = b;
        } else
          n.value = null;
        return this.semicolon(), this.finishNode(n, "PropertyDefinition");
      }, s.parseClassStaticBlock = function(n) {
        n.body = [];
        var u = this.labels;
        for (this.labels = [], this.enterScope(Ge | li); this.type !== I.braceR; ) {
          var b = this.parseStatement(null);
          n.body.push(b);
        }
        return this.next(), this.exitScope(), this.labels = u, this.finishNode(n, "StaticBlock");
      }, s.parseClassId = function(n, u) {
        this.type === I.name ? (n.id = this.parseIdent(), u && this.checkLValSimple(n.id, Ft, !1)) : (u === !0 && this.unexpected(), n.id = null);
      }, s.parseClassSuper = function(n) {
        n.superClass = this.eat(I._extends) ? this.parseExprSubscripts(!1) : null;
      }, s.enterClassBody = function() {
        var n = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        return this.privateNameStack.push(n), n.declared;
      }, s.exitClassBody = function() {
        for (var n = this.privateNameStack.pop(), u = n.declared, b = n.used, A = this.privateNameStack.length, O = A === 0 ? null : this.privateNameStack[A - 1], H = 0; H < b.length; ++H) {
          var G = b[H];
          st(u, G.name) || (O ? O.used.push(G) : this.raiseRecoverable(G.start, "Private field '#" + G.name + "' must be declared in an enclosing class"));
        }
      };
      function v(n, u) {
        var b = u.key.name, A = n[b], O = "true";
        return u.type === "MethodDefinition" && (u.kind === "get" || u.kind === "set") && (O = (u.static ? "s" : "i") + u.kind), A === "iget" && O === "iset" || A === "iset" && O === "iget" || A === "sget" && O === "sset" || A === "sset" && O === "sget" ? (n[b] = "true", !1) : A ? !0 : (n[b] = O, !1);
      }
      function g(n, u) {
        var b = n.computed, A = n.key;
        return !b && (A.type === "Identifier" && A.name === u || A.type === "Literal" && A.value === u);
      }
      s.parseExport = function(n, u) {
        if (this.next(), this.eat(I.star))
          return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (n.exported = this.parseModuleExportName(), this.checkExport(u, n.exported, this.lastTokStart)) : n.exported = null), this.expectContextual("from"), this.type !== I.string && this.unexpected(), n.source = this.parseExprAtom(), this.semicolon(), this.finishNode(n, "ExportAllDeclaration");
        if (this.eat(I._default)) {
          this.checkExport(u, "default", this.lastTokStart);
          var b;
          if (this.type === I._function || (b = this.isAsyncFunction())) {
            var A = this.startNode();
            this.next(), b && this.next(), n.declaration = this.parseFunction(A, l | _, !1, b);
          } else if (this.type === I._class) {
            var O = this.startNode();
            n.declaration = this.parseClass(O, "nullableID");
          } else
            n.declaration = this.parseMaybeAssign(), this.semicolon();
          return this.finishNode(n, "ExportDefaultDeclaration");
        }
        if (this.shouldParseExportStatement())
          n.declaration = this.parseStatement(null), n.declaration.type === "VariableDeclaration" ? this.checkVariableExport(u, n.declaration.declarations) : this.checkExport(u, n.declaration.id, n.declaration.id.start), n.specifiers = [], n.source = null;
        else {
          if (n.declaration = null, n.specifiers = this.parseExportSpecifiers(u), this.eatContextual("from"))
            this.type !== I.string && this.unexpected(), n.source = this.parseExprAtom();
          else {
            for (var H = 0, G = n.specifiers; H < G.length; H += 1) {
              var tt = G[H];
              this.checkUnreserved(tt.local), this.checkLocalExport(tt.local), tt.local.type === "Literal" && this.raise(tt.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            n.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(n, "ExportNamedDeclaration");
      }, s.checkExport = function(n, u, b) {
        !n || (typeof u != "string" && (u = u.type === "Identifier" ? u.name : u.value), st(n, u) && this.raiseRecoverable(b, "Duplicate export '" + u + "'"), n[u] = !0);
      }, s.checkPatternExport = function(n, u) {
        var b = u.type;
        if (b === "Identifier")
          this.checkExport(n, u, u.start);
        else if (b === "ObjectPattern")
          for (var A = 0, O = u.properties; A < O.length; A += 1) {
            var H = O[A];
            this.checkPatternExport(n, H);
          }
        else if (b === "ArrayPattern")
          for (var G = 0, tt = u.elements; G < tt.length; G += 1) {
            var ut = tt[G];
            ut && this.checkPatternExport(n, ut);
          }
        else
          b === "Property" ? this.checkPatternExport(n, u.value) : b === "AssignmentPattern" ? this.checkPatternExport(n, u.left) : b === "RestElement" ? this.checkPatternExport(n, u.argument) : b === "ParenthesizedExpression" && this.checkPatternExport(n, u.expression);
      }, s.checkVariableExport = function(n, u) {
        if (!!n)
          for (var b = 0, A = u; b < A.length; b += 1) {
            var O = A[b];
            this.checkPatternExport(n, O.id);
          }
      }, s.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      }, s.parseExportSpecifiers = function(n) {
        var u = [], b = !0;
        for (this.expect(I.braceL); !this.eat(I.braceR); ) {
          if (b)
            b = !1;
          else if (this.expect(I.comma), this.afterTrailingComma(I.braceR))
            break;
          var A = this.startNode();
          A.local = this.parseModuleExportName(), A.exported = this.eatContextual("as") ? this.parseModuleExportName() : A.local, this.checkExport(
            n,
            A.exported,
            A.exported.start
          ), u.push(this.finishNode(A, "ExportSpecifier"));
        }
        return u;
      }, s.parseImport = function(n) {
        return this.next(), this.type === I.string ? (n.specifiers = o, n.source = this.parseExprAtom()) : (n.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), n.source = this.type === I.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(n, "ImportDeclaration");
      }, s.parseImportSpecifiers = function() {
        var n = [], u = !0;
        if (this.type === I.name) {
          var b = this.startNode();
          if (b.local = this.parseIdent(), this.checkLValSimple(b.local, Ft), n.push(this.finishNode(b, "ImportDefaultSpecifier")), !this.eat(I.comma))
            return n;
        }
        if (this.type === I.star) {
          var A = this.startNode();
          return this.next(), this.expectContextual("as"), A.local = this.parseIdent(), this.checkLValSimple(A.local, Ft), n.push(this.finishNode(A, "ImportNamespaceSpecifier")), n;
        }
        for (this.expect(I.braceL); !this.eat(I.braceR); ) {
          if (u)
            u = !1;
          else if (this.expect(I.comma), this.afterTrailingComma(I.braceR))
            break;
          var O = this.startNode();
          O.imported = this.parseModuleExportName(), this.eatContextual("as") ? O.local = this.parseIdent() : (this.checkUnreserved(O.imported), O.local = O.imported), this.checkLValSimple(O.local, Ft), n.push(this.finishNode(O, "ImportSpecifier"));
        }
        return n;
      }, s.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === I.string) {
          var n = this.parseLiteral(this.value);
          return we.test(n.value) && this.raise(n.start, "An export name cannot include a lone surrogate."), n;
        }
        return this.parseIdent(!0);
      }, s.adaptDirectivePrologue = function(n) {
        for (var u = 0; u < n.length && this.isDirectiveCandidate(n[u]); ++u)
          n[u].directive = n[u].expression.raw.slice(1, -1);
      }, s.isDirectiveCandidate = function(n) {
        return this.options.ecmaVersion >= 5 && n.type === "ExpressionStatement" && n.expression.type === "Literal" && typeof n.expression.value == "string" && (this.input[n.start] === '"' || this.input[n.start] === "'");
      };
      var d = dt.prototype;
      d.toAssignable = function(n, u, b) {
        if (this.options.ecmaVersion >= 6 && n)
          switch (n.type) {
            case "Identifier":
              this.inAsync && n.name === "await" && this.raise(n.start, "Cannot use 'await' as identifier inside an async function");
              break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
              break;
            case "ObjectExpression":
              n.type = "ObjectPattern", b && this.checkPatternErrors(b, !0);
              for (var A = 0, O = n.properties; A < O.length; A += 1) {
                var H = O[A];
                this.toAssignable(H, u), H.type === "RestElement" && (H.argument.type === "ArrayPattern" || H.argument.type === "ObjectPattern") && this.raise(H.argument.start, "Unexpected token");
              }
              break;
            case "Property":
              n.kind !== "init" && this.raise(n.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(n.value, u);
              break;
            case "ArrayExpression":
              n.type = "ArrayPattern", b && this.checkPatternErrors(b, !0), this.toAssignableList(n.elements, u);
              break;
            case "SpreadElement":
              n.type = "RestElement", this.toAssignable(n.argument, u), n.argument.type === "AssignmentPattern" && this.raise(n.argument.start, "Rest elements cannot have a default value");
              break;
            case "AssignmentExpression":
              n.operator !== "=" && this.raise(n.left.end, "Only '=' operator can be used for specifying default value."), n.type = "AssignmentPattern", delete n.operator, this.toAssignable(n.left, u);
              break;
            case "ParenthesizedExpression":
              this.toAssignable(n.expression, u, b);
              break;
            case "ChainExpression":
              this.raiseRecoverable(n.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              if (!u)
                break;
            default:
              this.raise(n.start, "Assigning to rvalue");
          }
        else
          b && this.checkPatternErrors(b, !0);
        return n;
      }, d.toAssignableList = function(n, u) {
        for (var b = n.length, A = 0; A < b; A++) {
          var O = n[A];
          O && this.toAssignable(O, u);
        }
        if (b) {
          var H = n[b - 1];
          this.options.ecmaVersion === 6 && u && H && H.type === "RestElement" && H.argument.type !== "Identifier" && this.unexpected(H.argument.start);
        }
        return n;
      }, d.parseSpread = function(n) {
        var u = this.startNode();
        return this.next(), u.argument = this.parseMaybeAssign(!1, n), this.finishNode(u, "SpreadElement");
      }, d.parseRestBinding = function() {
        var n = this.startNode();
        return this.next(), this.options.ecmaVersion === 6 && this.type !== I.name && this.unexpected(), n.argument = this.parseBindingAtom(), this.finishNode(n, "RestElement");
      }, d.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6)
          switch (this.type) {
            case I.bracketL:
              var n = this.startNode();
              return this.next(), n.elements = this.parseBindingList(I.bracketR, !0, !0), this.finishNode(n, "ArrayPattern");
            case I.braceL:
              return this.parseObj(!0);
          }
        return this.parseIdent();
      }, d.parseBindingList = function(n, u, b) {
        for (var A = [], O = !0; !this.eat(n); )
          if (O ? O = !1 : this.expect(I.comma), u && this.type === I.comma)
            A.push(null);
          else {
            if (b && this.afterTrailingComma(n))
              break;
            if (this.type === I.ellipsis) {
              var H = this.parseRestBinding();
              this.parseBindingListItem(H), A.push(H), this.type === I.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(n);
              break;
            } else {
              var G = this.parseMaybeDefault(this.start, this.startLoc);
              this.parseBindingListItem(G), A.push(G);
            }
          }
        return A;
      }, d.parseBindingListItem = function(n) {
        return n;
      }, d.parseMaybeDefault = function(n, u, b) {
        if (b = b || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(I.eq))
          return b;
        var A = this.startNodeAt(n, u);
        return A.left = b, A.right = this.parseMaybeAssign(), this.finishNode(A, "AssignmentPattern");
      }, d.checkLValSimple = function(n, u, b) {
        u === void 0 && (u = ei);
        var A = u !== ei;
        switch (n.type) {
          case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(n.name) && this.raiseRecoverable(n.start, (A ? "Binding " : "Assigning to ") + n.name + " in strict mode"), A && (u === Ft && n.name === "let" && this.raiseRecoverable(n.start, "let is disallowed as a lexically bound name"), b && (st(b, n.name) && this.raiseRecoverable(n.start, "Argument name clash"), b[n.name] = !0), u !== pi && this.declareName(n.name, u, n.start));
            break;
          case "ChainExpression":
            this.raiseRecoverable(n.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            A && this.raiseRecoverable(n.start, "Binding member expression");
            break;
          case "ParenthesizedExpression":
            return A && this.raiseRecoverable(n.start, "Binding parenthesized expression"), this.checkLValSimple(n.expression, u, b);
          default:
            this.raise(n.start, (A ? "Binding" : "Assigning to") + " rvalue");
        }
      }, d.checkLValPattern = function(n, u, b) {
        switch (u === void 0 && (u = ei), n.type) {
          case "ObjectPattern":
            for (var A = 0, O = n.properties; A < O.length; A += 1) {
              var H = O[A];
              this.checkLValInnerPattern(H, u, b);
            }
            break;
          case "ArrayPattern":
            for (var G = 0, tt = n.elements; G < tt.length; G += 1) {
              var ut = tt[G];
              ut && this.checkLValInnerPattern(ut, u, b);
            }
            break;
          default:
            this.checkLValSimple(n, u, b);
        }
      }, d.checkLValInnerPattern = function(n, u, b) {
        switch (u === void 0 && (u = ei), n.type) {
          case "Property":
            this.checkLValInnerPattern(n.value, u, b);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(n.left, u, b);
            break;
          case "RestElement":
            this.checkLValPattern(n.argument, u, b);
            break;
          default:
            this.checkLValPattern(n, u, b);
        }
      };
      var w = function(u, b, A, O, H) {
        this.token = u, this.isExpr = !!b, this.preserveSpace = !!A, this.override = O, this.generator = !!H;
      }, m = {
        b_stat: new w("{", !1),
        b_expr: new w("{", !0),
        b_tmpl: new w("${", !1),
        p_stat: new w("(", !1),
        p_expr: new w("(", !0),
        q_tmpl: new w("`", !0, !0, function(n) {
          return n.tryReadTemplateToken();
        }),
        f_stat: new w("function", !1),
        f_expr: new w("function", !0),
        f_expr_gen: new w("function", !0, !1, null, !0),
        f_gen: new w("function", !1, !1, null, !0)
      }, k = dt.prototype;
      k.initialContext = function() {
        return [m.b_stat];
      }, k.curContext = function() {
        return this.context[this.context.length - 1];
      }, k.braceIsBlock = function(n) {
        var u = this.curContext();
        return u === m.f_expr || u === m.f_stat ? !0 : n === I.colon && (u === m.b_stat || u === m.b_expr) ? !u.isExpr : n === I._return || n === I.name && this.exprAllowed ? zt.test(this.input.slice(this.lastTokEnd, this.start)) : n === I._else || n === I.semi || n === I.eof || n === I.parenR || n === I.arrow ? !0 : n === I.braceL ? u === m.b_stat : n === I._var || n === I._const || n === I.name ? !1 : !this.exprAllowed;
      }, k.inGeneratorContext = function() {
        for (var n = this.context.length - 1; n >= 1; n--) {
          var u = this.context[n];
          if (u.token === "function")
            return u.generator;
        }
        return !1;
      }, k.updateContext = function(n) {
        var u, b = this.type;
        b.keyword && n === I.dot ? this.exprAllowed = !1 : (u = b.updateContext) ? u.call(this, n) : this.exprAllowed = b.beforeExpr;
      }, k.overrideContext = function(n) {
        this.curContext() !== n && (this.context[this.context.length - 1] = n);
      }, I.parenR.updateContext = I.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = !0;
          return;
        }
        var n = this.context.pop();
        n === m.b_stat && this.curContext().token === "function" && (n = this.context.pop()), this.exprAllowed = !n.isExpr;
      }, I.braceL.updateContext = function(n) {
        this.context.push(this.braceIsBlock(n) ? m.b_stat : m.b_expr), this.exprAllowed = !0;
      }, I.dollarBraceL.updateContext = function() {
        this.context.push(m.b_tmpl), this.exprAllowed = !0;
      }, I.parenL.updateContext = function(n) {
        var u = n === I._if || n === I._for || n === I._with || n === I._while;
        this.context.push(u ? m.p_stat : m.p_expr), this.exprAllowed = !0;
      }, I.incDec.updateContext = function() {
      }, I._function.updateContext = I._class.updateContext = function(n) {
        n.beforeExpr && n !== I._else && !(n === I.semi && this.curContext() !== m.p_stat) && !(n === I._return && zt.test(this.input.slice(this.lastTokEnd, this.start))) && !((n === I.colon || n === I.braceL) && this.curContext() === m.b_stat) ? this.context.push(m.f_expr) : this.context.push(m.f_stat), this.exprAllowed = !1;
      }, I.backQuote.updateContext = function() {
        this.curContext() === m.q_tmpl ? this.context.pop() : this.context.push(m.q_tmpl), this.exprAllowed = !1;
      }, I.star.updateContext = function(n) {
        if (n === I._function) {
          var u = this.context.length - 1;
          this.context[u] === m.f_expr ? this.context[u] = m.f_expr_gen : this.context[u] = m.f_gen;
        }
        this.exprAllowed = !0;
      }, I.name.updateContext = function(n) {
        var u = !1;
        this.options.ecmaVersion >= 6 && n !== I.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (u = !0), this.exprAllowed = u;
      };
      var p = dt.prototype;
      p.checkPropClash = function(n, u, b) {
        if (!(this.options.ecmaVersion >= 9 && n.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (n.computed || n.method || n.shorthand))) {
          var A = n.key, O;
          switch (A.type) {
            case "Identifier":
              O = A.name;
              break;
            case "Literal":
              O = String(A.value);
              break;
            default:
              return;
          }
          var H = n.kind;
          if (this.options.ecmaVersion >= 6) {
            O === "__proto__" && H === "init" && (u.proto && (b ? b.doubleProto < 0 && (b.doubleProto = A.start) : this.raiseRecoverable(A.start, "Redefinition of __proto__ property")), u.proto = !0);
            return;
          }
          O = "$" + O;
          var G = u[O];
          if (G) {
            var tt;
            H === "init" ? tt = this.strict && G.init || G.get || G.set : tt = G.init || G[H], tt && this.raiseRecoverable(A.start, "Redefinition of property");
          } else
            G = u[O] = {
              init: !1,
              get: !1,
              set: !1
            };
          G[H] = !0;
        }
      }, p.parseExpression = function(n, u) {
        var b = this.start, A = this.startLoc, O = this.parseMaybeAssign(n, u);
        if (this.type === I.comma) {
          var H = this.startNodeAt(b, A);
          for (H.expressions = [O]; this.eat(I.comma); )
            H.expressions.push(this.parseMaybeAssign(n, u));
          return this.finishNode(H, "SequenceExpression");
        }
        return O;
      }, p.parseMaybeAssign = function(n, u, b) {
        if (this.isContextual("yield")) {
          if (this.inGenerator)
            return this.parseYield(n);
          this.exprAllowed = !1;
        }
        var A = !1, O = -1, H = -1, G = -1;
        u ? (O = u.parenthesizedAssign, H = u.trailingComma, G = u.doubleProto, u.parenthesizedAssign = u.trailingComma = -1) : (u = new r(), A = !0);
        var tt = this.start, ut = this.startLoc;
        (this.type === I.parenL || this.type === I.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = n === "await");
        var bt = this.parseMaybeConditional(n, u);
        if (b && (bt = b.call(this, bt, tt, ut)), this.type.isAssign) {
          var wt = this.startNodeAt(tt, ut);
          return wt.operator = this.value, this.type === I.eq && (bt = this.toAssignable(bt, !1, u)), A || (u.parenthesizedAssign = u.trailingComma = u.doubleProto = -1), u.shorthandAssign >= bt.start && (u.shorthandAssign = -1), this.type === I.eq ? this.checkLValPattern(bt) : this.checkLValSimple(bt), wt.left = bt, this.next(), wt.right = this.parseMaybeAssign(n), G > -1 && (u.doubleProto = G), this.finishNode(wt, "AssignmentExpression");
        } else
          A && this.checkExpressionErrors(u, !0);
        return O > -1 && (u.parenthesizedAssign = O), H > -1 && (u.trailingComma = H), bt;
      }, p.parseMaybeConditional = function(n, u) {
        var b = this.start, A = this.startLoc, O = this.parseExprOps(n, u);
        if (this.checkExpressionErrors(u))
          return O;
        if (this.eat(I.question)) {
          var H = this.startNodeAt(b, A);
          return H.test = O, H.consequent = this.parseMaybeAssign(), this.expect(I.colon), H.alternate = this.parseMaybeAssign(n), this.finishNode(H, "ConditionalExpression");
        }
        return O;
      }, p.parseExprOps = function(n, u) {
        var b = this.start, A = this.startLoc, O = this.parseMaybeUnary(u, !1, !1, n);
        return this.checkExpressionErrors(u) || O.start === b && O.type === "ArrowFunctionExpression" ? O : this.parseExprOp(O, b, A, -1, n);
      }, p.parseExprOp = function(n, u, b, A, O) {
        var H = this.type.binop;
        if (H != null && (!O || this.type !== I._in) && H > A) {
          var G = this.type === I.logicalOR || this.type === I.logicalAND, tt = this.type === I.coalesce;
          tt && (H = I.logicalAND.binop);
          var ut = this.value;
          this.next();
          var bt = this.start, wt = this.startLoc, Ut = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, O), bt, wt, H, O), ue = this.buildBinary(u, b, n, Ut, ut, G || tt);
          return (G && this.type === I.coalesce || tt && (this.type === I.logicalOR || this.type === I.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(ue, u, b, A, O);
        }
        return n;
      }, p.buildBinary = function(n, u, b, A, O, H) {
        A.type === "PrivateIdentifier" && this.raise(A.start, "Private identifier can only be left side of binary expression");
        var G = this.startNodeAt(n, u);
        return G.left = b, G.operator = O, G.right = A, this.finishNode(G, H ? "LogicalExpression" : "BinaryExpression");
      }, p.parseMaybeUnary = function(n, u, b, A) {
        var O = this.start, H = this.startLoc, G;
        if (this.isContextual("await") && this.canAwait)
          G = this.parseAwait(A), u = !0;
        else if (this.type.prefix) {
          var tt = this.startNode(), ut = this.type === I.incDec;
          tt.operator = this.value, tt.prefix = !0, this.next(), tt.argument = this.parseMaybeUnary(null, !0, ut, A), this.checkExpressionErrors(n, !0), ut ? this.checkLValSimple(tt.argument) : this.strict && tt.operator === "delete" && tt.argument.type === "Identifier" ? this.raiseRecoverable(tt.start, "Deleting local variable in strict mode") : tt.operator === "delete" && y(tt.argument) ? this.raiseRecoverable(tt.start, "Private fields can not be deleted") : u = !0, G = this.finishNode(tt, ut ? "UpdateExpression" : "UnaryExpression");
        } else if (!u && this.type === I.privateId)
          (A || this.privateNameStack.length === 0) && this.unexpected(), G = this.parsePrivateIdent(), this.type !== I._in && this.unexpected();
        else {
          if (G = this.parseExprSubscripts(n, A), this.checkExpressionErrors(n))
            return G;
          for (; this.type.postfix && !this.canInsertSemicolon(); ) {
            var bt = this.startNodeAt(O, H);
            bt.operator = this.value, bt.prefix = !1, bt.argument = G, this.checkLValSimple(G), this.next(), G = this.finishNode(bt, "UpdateExpression");
          }
        }
        if (!b && this.eat(I.starstar))
          if (u)
            this.unexpected(this.lastTokStart);
          else
            return this.buildBinary(O, H, G, this.parseMaybeUnary(null, !1, !1, A), "**", !1);
        else
          return G;
      };
      function y(n) {
        return n.type === "MemberExpression" && n.property.type === "PrivateIdentifier" || n.type === "ChainExpression" && y(n.expression);
      }
      p.parseExprSubscripts = function(n, u) {
        var b = this.start, A = this.startLoc, O = this.parseExprAtom(n, u);
        if (O.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
          return O;
        var H = this.parseSubscripts(O, b, A, !1, u);
        return n && H.type === "MemberExpression" && (n.parenthesizedAssign >= H.start && (n.parenthesizedAssign = -1), n.parenthesizedBind >= H.start && (n.parenthesizedBind = -1), n.trailingComma >= H.start && (n.trailingComma = -1)), H;
      }, p.parseSubscripts = function(n, u, b, A, O) {
        for (var H = this.options.ecmaVersion >= 8 && n.type === "Identifier" && n.name === "async" && this.lastTokEnd === n.end && !this.canInsertSemicolon() && n.end - n.start === 5 && this.potentialArrowAt === n.start, G = !1; ; ) {
          var tt = this.parseSubscript(n, u, b, A, H, G, O);
          if (tt.optional && (G = !0), tt === n || tt.type === "ArrowFunctionExpression") {
            if (G) {
              var ut = this.startNodeAt(u, b);
              ut.expression = tt, tt = this.finishNode(ut, "ChainExpression");
            }
            return tt;
          }
          n = tt;
        }
      }, p.parseSubscript = function(n, u, b, A, O, H, G) {
        var tt = this.options.ecmaVersion >= 11, ut = tt && this.eat(I.questionDot);
        A && ut && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var bt = this.eat(I.bracketL);
        if (bt || ut && this.type !== I.parenL && this.type !== I.backQuote || this.eat(I.dot)) {
          var wt = this.startNodeAt(u, b);
          wt.object = n, bt ? (wt.property = this.parseExpression(), this.expect(I.bracketR)) : this.type === I.privateId && n.type !== "Super" ? wt.property = this.parsePrivateIdent() : wt.property = this.parseIdent(this.options.allowReserved !== "never"), wt.computed = !!bt, tt && (wt.optional = ut), n = this.finishNode(wt, "MemberExpression");
        } else if (!A && this.eat(I.parenL)) {
          var Ut = new r(), ue = this.yieldPos, Se = this.awaitPos, Le = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var De = this.parseExprList(I.parenR, this.options.ecmaVersion >= 8, !1, Ut);
          if (O && !ut && !this.canInsertSemicolon() && this.eat(I.arrow))
            return this.checkPatternErrors(Ut, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = ue, this.awaitPos = Se, this.awaitIdentPos = Le, this.parseArrowExpression(this.startNodeAt(u, b), De, !0, G);
          this.checkExpressionErrors(Ut, !0), this.yieldPos = ue || this.yieldPos, this.awaitPos = Se || this.awaitPos, this.awaitIdentPos = Le || this.awaitIdentPos;
          var Me = this.startNodeAt(u, b);
          Me.callee = n, Me.arguments = De, tt && (Me.optional = ut), n = this.finishNode(Me, "CallExpression");
        } else if (this.type === I.backQuote) {
          (ut || H) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Ne = this.startNodeAt(u, b);
          Ne.tag = n, Ne.quasi = this.parseTemplate({ isTagged: !0 }), n = this.finishNode(Ne, "TaggedTemplateExpression");
        }
        return n;
      }, p.parseExprAtom = function(n, u) {
        this.type === I.slash && this.readRegexp();
        var b, A = this.potentialArrowAt === this.start;
        switch (this.type) {
          case I._super:
            return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), b = this.startNode(), this.next(), this.type === I.parenL && !this.allowDirectSuper && this.raise(b.start, "super() call outside constructor of a subclass"), this.type !== I.dot && this.type !== I.bracketL && this.type !== I.parenL && this.unexpected(), this.finishNode(b, "Super");
          case I._this:
            return b = this.startNode(), this.next(), this.finishNode(b, "ThisExpression");
          case I.name:
            var O = this.start, H = this.startLoc, G = this.containsEsc, tt = this.parseIdent(!1);
            if (this.options.ecmaVersion >= 8 && !G && tt.name === "async" && !this.canInsertSemicolon() && this.eat(I._function))
              return this.overrideContext(m.f_expr), this.parseFunction(this.startNodeAt(O, H), 0, !1, !0, u);
            if (A && !this.canInsertSemicolon()) {
              if (this.eat(I.arrow))
                return this.parseArrowExpression(this.startNodeAt(O, H), [tt], !1, u);
              if (this.options.ecmaVersion >= 8 && tt.name === "async" && this.type === I.name && !G && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
                return tt = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(I.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(O, H), [tt], !0, u);
            }
            return tt;
          case I.regexp:
            var ut = this.value;
            return b = this.parseLiteral(ut.value), b.regex = { pattern: ut.pattern, flags: ut.flags }, b;
          case I.num:
          case I.string:
            return this.parseLiteral(this.value);
          case I._null:
          case I._true:
          case I._false:
            return b = this.startNode(), b.value = this.type === I._null ? null : this.type === I._true, b.raw = this.type.keyword, this.next(), this.finishNode(b, "Literal");
          case I.parenL:
            var bt = this.start, wt = this.parseParenAndDistinguishExpression(A, u);
            return n && (n.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(wt) && (n.parenthesizedAssign = bt), n.parenthesizedBind < 0 && (n.parenthesizedBind = bt)), wt;
          case I.bracketL:
            return b = this.startNode(), this.next(), b.elements = this.parseExprList(I.bracketR, !0, !0, n), this.finishNode(b, "ArrayExpression");
          case I.braceL:
            return this.overrideContext(m.b_expr), this.parseObj(!1, n);
          case I._function:
            return b = this.startNode(), this.next(), this.parseFunction(b, 0);
          case I._class:
            return this.parseClass(this.startNode(), !1);
          case I._new:
            return this.parseNew();
          case I.backQuote:
            return this.parseTemplate();
          case I._import:
            return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
          default:
            this.unexpected();
        }
      }, p.parseExprImport = function() {
        var n = this.startNode();
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
        var u = this.parseIdent(!0);
        switch (this.type) {
          case I.parenL:
            return this.parseDynamicImport(n);
          case I.dot:
            return n.meta = u, this.parseImportMeta(n);
          default:
            this.unexpected();
        }
      }, p.parseDynamicImport = function(n) {
        if (this.next(), n.source = this.parseMaybeAssign(), !this.eat(I.parenR)) {
          var u = this.start;
          this.eat(I.comma) && this.eat(I.parenR) ? this.raiseRecoverable(u, "Trailing comma is not allowed in import()") : this.unexpected(u);
        }
        return this.finishNode(n, "ImportExpression");
      }, p.parseImportMeta = function(n) {
        this.next();
        var u = this.containsEsc;
        return n.property = this.parseIdent(!0), n.property.name !== "meta" && this.raiseRecoverable(n.property.start, "The only valid meta property for import is 'import.meta'"), u && this.raiseRecoverable(n.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(n.start, "Cannot use 'import.meta' outside a module"), this.finishNode(n, "MetaProperty");
      }, p.parseLiteral = function(n) {
        var u = this.startNode();
        return u.value = n, u.raw = this.input.slice(this.start, this.end), u.raw.charCodeAt(u.raw.length - 1) === 110 && (u.bigint = u.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(u, "Literal");
      }, p.parseParenExpression = function() {
        this.expect(I.parenL);
        var n = this.parseExpression();
        return this.expect(I.parenR), n;
      }, p.parseParenAndDistinguishExpression = function(n, u) {
        var b = this.start, A = this.startLoc, O, H = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var G = this.start, tt = this.startLoc, ut = [], bt = !0, wt = !1, Ut = new r(), ue = this.yieldPos, Se = this.awaitPos, Le;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== I.parenR; )
            if (bt ? bt = !1 : this.expect(I.comma), H && this.afterTrailingComma(I.parenR, !0)) {
              wt = !0;
              break;
            } else if (this.type === I.ellipsis) {
              Le = this.start, ut.push(this.parseParenItem(this.parseRestBinding())), this.type === I.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            } else
              ut.push(this.parseMaybeAssign(!1, Ut, this.parseParenItem));
          var De = this.lastTokEnd, Me = this.lastTokEndLoc;
          if (this.expect(I.parenR), n && !this.canInsertSemicolon() && this.eat(I.arrow))
            return this.checkPatternErrors(Ut, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = ue, this.awaitPos = Se, this.parseParenArrowList(b, A, ut, u);
          (!ut.length || wt) && this.unexpected(this.lastTokStart), Le && this.unexpected(Le), this.checkExpressionErrors(Ut, !0), this.yieldPos = ue || this.yieldPos, this.awaitPos = Se || this.awaitPos, ut.length > 1 ? (O = this.startNodeAt(G, tt), O.expressions = ut, this.finishNodeAt(O, "SequenceExpression", De, Me)) : O = ut[0];
        } else
          O = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Ne = this.startNodeAt(b, A);
          return Ne.expression = O, this.finishNode(Ne, "ParenthesizedExpression");
        } else
          return O;
      }, p.parseParenItem = function(n) {
        return n;
      }, p.parseParenArrowList = function(n, u, b, A) {
        return this.parseArrowExpression(this.startNodeAt(n, u), b, !1, A);
      };
      var c = [];
      p.parseNew = function() {
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var n = this.startNode(), u = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(I.dot)) {
          n.meta = u;
          var b = this.containsEsc;
          return n.property = this.parseIdent(!0), n.property.name !== "target" && this.raiseRecoverable(n.property.start, "The only valid meta property for new is 'new.target'"), b && this.raiseRecoverable(n.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(n.start, "'new.target' can only be used in functions and class static block"), this.finishNode(n, "MetaProperty");
        }
        var A = this.start, O = this.startLoc, H = this.type === I._import;
        return n.callee = this.parseSubscripts(this.parseExprAtom(), A, O, !0, !1), H && n.callee.type === "ImportExpression" && this.raise(A, "Cannot use new with import()"), this.eat(I.parenL) ? n.arguments = this.parseExprList(I.parenR, this.options.ecmaVersion >= 8, !1) : n.arguments = c, this.finishNode(n, "NewExpression");
      }, p.parseTemplateElement = function(n) {
        var u = n.isTagged, b = this.startNode();
        return this.type === I.invalidTemplate ? (u || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), b.value = {
          raw: this.value,
          cooked: null
        }) : b.value = {
          raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
          cooked: this.value
        }, this.next(), b.tail = this.type === I.backQuote, this.finishNode(b, "TemplateElement");
      }, p.parseTemplate = function(n) {
        n === void 0 && (n = {});
        var u = n.isTagged;
        u === void 0 && (u = !1);
        var b = this.startNode();
        this.next(), b.expressions = [];
        var A = this.parseTemplateElement({ isTagged: u });
        for (b.quasis = [A]; !A.tail; )
          this.type === I.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(I.dollarBraceL), b.expressions.push(this.parseExpression()), this.expect(I.braceR), b.quasis.push(A = this.parseTemplateElement({ isTagged: u }));
        return this.next(), this.finishNode(b, "TemplateLiteral");
      }, p.isAsyncProp = function(n) {
        return !n.computed && n.key.type === "Identifier" && n.key.name === "async" && (this.type === I.name || this.type === I.num || this.type === I.string || this.type === I.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === I.star) && !zt.test(this.input.slice(this.lastTokEnd, this.start));
      }, p.parseObj = function(n, u) {
        var b = this.startNode(), A = !0, O = {};
        for (b.properties = [], this.next(); !this.eat(I.braceR); ) {
          if (A)
            A = !1;
          else if (this.expect(I.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(I.braceR))
            break;
          var H = this.parseProperty(n, u);
          n || this.checkPropClash(H, O, u), b.properties.push(H);
        }
        return this.finishNode(b, n ? "ObjectPattern" : "ObjectExpression");
      }, p.parseProperty = function(n, u) {
        var b = this.startNode(), A, O, H, G;
        if (this.options.ecmaVersion >= 9 && this.eat(I.ellipsis))
          return n ? (b.argument = this.parseIdent(!1), this.type === I.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(b, "RestElement")) : (b.argument = this.parseMaybeAssign(!1, u), this.type === I.comma && u && u.trailingComma < 0 && (u.trailingComma = this.start), this.finishNode(b, "SpreadElement"));
        this.options.ecmaVersion >= 6 && (b.method = !1, b.shorthand = !1, (n || u) && (H = this.start, G = this.startLoc), n || (A = this.eat(I.star)));
        var tt = this.containsEsc;
        return this.parsePropertyName(b), !n && !tt && this.options.ecmaVersion >= 8 && !A && this.isAsyncProp(b) ? (O = !0, A = this.options.ecmaVersion >= 9 && this.eat(I.star), this.parsePropertyName(b, u)) : O = !1, this.parsePropertyValue(b, n, A, O, H, G, u, tt), this.finishNode(b, "Property");
      }, p.parsePropertyValue = function(n, u, b, A, O, H, G, tt) {
        if ((b || A) && this.type === I.colon && this.unexpected(), this.eat(I.colon))
          n.value = u ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, G), n.kind = "init";
        else if (this.options.ecmaVersion >= 6 && this.type === I.parenL)
          u && this.unexpected(), n.kind = "init", n.method = !0, n.value = this.parseMethod(b, A);
        else if (!u && !tt && this.options.ecmaVersion >= 5 && !n.computed && n.key.type === "Identifier" && (n.key.name === "get" || n.key.name === "set") && this.type !== I.comma && this.type !== I.braceR && this.type !== I.eq) {
          (b || A) && this.unexpected(), n.kind = n.key.name, this.parsePropertyName(n), n.value = this.parseMethod(!1);
          var ut = n.kind === "get" ? 0 : 1;
          if (n.value.params.length !== ut) {
            var bt = n.value.start;
            n.kind === "get" ? this.raiseRecoverable(bt, "getter should have no params") : this.raiseRecoverable(bt, "setter should have exactly one param");
          } else
            n.kind === "set" && n.value.params[0].type === "RestElement" && this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params");
        } else
          this.options.ecmaVersion >= 6 && !n.computed && n.key.type === "Identifier" ? ((b || A) && this.unexpected(), this.checkUnreserved(n.key), n.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = O), n.kind = "init", u ? n.value = this.parseMaybeDefault(O, H, this.copyNode(n.key)) : this.type === I.eq && G ? (G.shorthandAssign < 0 && (G.shorthandAssign = this.start), n.value = this.parseMaybeDefault(O, H, this.copyNode(n.key))) : n.value = this.copyNode(n.key), n.shorthand = !0) : this.unexpected();
      }, p.parsePropertyName = function(n) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(I.bracketL))
            return n.computed = !0, n.key = this.parseMaybeAssign(), this.expect(I.bracketR), n.key;
          n.computed = !1;
        }
        return n.key = this.type === I.num || this.type === I.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      }, p.initFunction = function(n) {
        n.id = null, this.options.ecmaVersion >= 6 && (n.generator = n.expression = !1), this.options.ecmaVersion >= 8 && (n.async = !1);
      }, p.parseMethod = function(n, u, b) {
        var A = this.startNode(), O = this.yieldPos, H = this.awaitPos, G = this.awaitIdentPos;
        return this.initFunction(A), this.options.ecmaVersion >= 6 && (A.generator = n), this.options.ecmaVersion >= 8 && (A.async = !!u), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(di(u, A.generator) | li | (b ? fi : 0)), this.expect(I.parenL), A.params = this.parseBindingList(I.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(A, !1, !0, !1), this.yieldPos = O, this.awaitPos = H, this.awaitIdentPos = G, this.finishNode(A, "FunctionExpression");
      }, p.parseArrowExpression = function(n, u, b, A) {
        var O = this.yieldPos, H = this.awaitPos, G = this.awaitIdentPos;
        return this.enterScope(di(b, !1) | wi), this.initFunction(n), this.options.ecmaVersion >= 8 && (n.async = !!b), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, n.params = this.toAssignableList(u, !0), this.parseFunctionBody(n, !0, !1, A), this.yieldPos = O, this.awaitPos = H, this.awaitIdentPos = G, this.finishNode(n, "ArrowFunctionExpression");
      }, p.parseFunctionBody = function(n, u, b, A) {
        var O = u && this.type !== I.braceL, H = this.strict, G = !1;
        if (O)
          n.body = this.parseMaybeAssign(A), n.expression = !0, this.checkParams(n, !1);
        else {
          var tt = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(n.params);
          (!H || tt) && (G = this.strictDirective(this.end), G && tt && this.raiseRecoverable(n.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
          var ut = this.labels;
          this.labels = [], G && (this.strict = !0), this.checkParams(n, !H && !G && !u && !b && this.isSimpleParamList(n.params)), this.strict && n.id && this.checkLValSimple(n.id, pi), n.body = this.parseBlock(!1, void 0, G && !H), n.expression = !1, this.adaptDirectivePrologue(n.body.body), this.labels = ut;
        }
        this.exitScope();
      }, p.isSimpleParamList = function(n) {
        for (var u = 0, b = n; u < b.length; u += 1) {
          var A = b[u];
          if (A.type !== "Identifier")
            return !1;
        }
        return !0;
      }, p.checkParams = function(n, u) {
        for (var b = /* @__PURE__ */ Object.create(null), A = 0, O = n.params; A < O.length; A += 1) {
          var H = O[A];
          this.checkLValInnerPattern(H, ii, u ? null : b);
        }
      }, p.parseExprList = function(n, u, b, A) {
        for (var O = [], H = !0; !this.eat(n); ) {
          if (H)
            H = !1;
          else if (this.expect(I.comma), u && this.afterTrailingComma(n))
            break;
          var G = void 0;
          b && this.type === I.comma ? G = null : this.type === I.ellipsis ? (G = this.parseSpread(A), A && this.type === I.comma && A.trailingComma < 0 && (A.trailingComma = this.start)) : G = this.parseMaybeAssign(!1, A), O.push(G);
        }
        return O;
      }, p.checkUnreserved = function(n) {
        var u = n.start, b = n.end, A = n.name;
        if (this.inGenerator && A === "yield" && this.raiseRecoverable(u, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && A === "await" && this.raiseRecoverable(u, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && A === "arguments" && this.raiseRecoverable(u, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (A === "arguments" || A === "await") && this.raise(u, "Cannot use " + A + " in class static initialization block"), this.keywords.test(A) && this.raise(u, "Unexpected keyword '" + A + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(u, b).indexOf("\\") !== -1)) {
          var O = this.strict ? this.reservedWordsStrict : this.reservedWords;
          O.test(A) && (!this.inAsync && A === "await" && this.raiseRecoverable(u, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(u, "The keyword '" + A + "' is reserved"));
        }
      }, p.parseIdent = function(n, u) {
        var b = this.startNode();
        return this.type === I.name ? b.name = this.value : this.type.keyword ? (b.name = this.type.keyword, (b.name === "class" || b.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop()) : this.unexpected(), this.next(!!n), this.finishNode(b, "Identifier"), n || (this.checkUnreserved(b), b.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = b.start)), b;
      }, p.parsePrivateIdent = function() {
        var n = this.startNode();
        return this.type === I.privateId ? n.name = this.value : this.unexpected(), this.next(), this.finishNode(n, "PrivateIdentifier"), this.privateNameStack.length === 0 ? this.raise(n.start, "Private field '#" + n.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(n), n;
      }, p.parseYield = function(n) {
        this.yieldPos || (this.yieldPos = this.start);
        var u = this.startNode();
        return this.next(), this.type === I.semi || this.canInsertSemicolon() || this.type !== I.star && !this.type.startsExpr ? (u.delegate = !1, u.argument = null) : (u.delegate = this.eat(I.star), u.argument = this.parseMaybeAssign(n)), this.finishNode(u, "YieldExpression");
      }, p.parseAwait = function(n) {
        this.awaitPos || (this.awaitPos = this.start);
        var u = this.startNode();
        return this.next(), u.argument = this.parseMaybeUnary(null, !0, !1, n), this.finishNode(u, "AwaitExpression");
      };
      var x = dt.prototype;
      x.raise = function(n, u) {
        var b = Fe(this.input, n);
        u += " (" + b.line + ":" + b.column + ")";
        var A = new SyntaxError(u);
        throw A.pos = n, A.loc = b, A.raisedAt = this.pos, A;
      }, x.raiseRecoverable = x.raise, x.curPosition = function() {
        if (this.options.locations)
          return new Be(this.curLine, this.pos - this.lineStart);
      };
      var C = dt.prototype, P = function(u) {
        this.flags = u, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1;
      };
      C.enterScope = function(n) {
        this.scopeStack.push(new P(n));
      }, C.exitScope = function() {
        this.scopeStack.pop();
      }, C.treatFunctionsAsVarInScope = function(n) {
        return n.flags & Dt || !this.inModule && n.flags & Re;
      }, C.declareName = function(n, u, b) {
        var A = !1;
        if (u === Ft) {
          var O = this.currentScope();
          A = O.lexical.indexOf(n) > -1 || O.functions.indexOf(n) > -1 || O.var.indexOf(n) > -1, O.lexical.push(n), this.inModule && O.flags & Re && delete this.undefinedExports[n];
        } else if (u === Ht) {
          var H = this.currentScope();
          H.lexical.push(n);
        } else if (u === ni) {
          var G = this.currentScope();
          this.treatFunctionsAsVar ? A = G.lexical.indexOf(n) > -1 : A = G.lexical.indexOf(n) > -1 || G.var.indexOf(n) > -1, G.functions.push(n);
        } else
          for (var tt = this.scopeStack.length - 1; tt >= 0; --tt) {
            var ut = this.scopeStack[tt];
            if (ut.lexical.indexOf(n) > -1 && !(ut.flags & je && ut.lexical[0] === n) || !this.treatFunctionsAsVarInScope(ut) && ut.functions.indexOf(n) > -1) {
              A = !0;
              break;
            }
            if (ut.var.push(n), this.inModule && ut.flags & Re && delete this.undefinedExports[n], ut.flags & ci)
              break;
          }
        A && this.raiseRecoverable(b, "Identifier '" + n + "' has already been declared");
      }, C.checkLocalExport = function(n) {
        this.scopeStack[0].lexical.indexOf(n.name) === -1 && this.scopeStack[0].var.indexOf(n.name) === -1 && (this.undefinedExports[n.name] = n);
      }, C.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      }, C.currentVarScope = function() {
        for (var n = this.scopeStack.length - 1; ; n--) {
          var u = this.scopeStack[n];
          if (u.flags & ci)
            return u;
        }
      }, C.currentThisScope = function() {
        for (var n = this.scopeStack.length - 1; ; n--) {
          var u = this.scopeStack[n];
          if (u.flags & ci && !(u.flags & wi))
            return u;
        }
      };
      var S = function(u, b, A) {
        this.type = "", this.start = b, this.end = 0, u.options.locations && (this.loc = new He(u, A)), u.options.directSourceFile && (this.sourceFile = u.options.directSourceFile), u.options.ranges && (this.range = [b, 0]);
      }, E = dt.prototype;
      E.startNode = function() {
        return new S(this, this.start, this.startLoc);
      }, E.startNodeAt = function(n, u) {
        return new S(this, n, u);
      };
      function L(n, u, b, A) {
        return n.type = u, n.end = b, this.options.locations && (n.loc.end = A), this.options.ranges && (n.range[1] = b), n;
      }
      E.finishNode = function(n, u) {
        return L.call(this, n, u, this.lastTokEnd, this.lastTokEndLoc);
      }, E.finishNodeAt = function(n, u, b, A) {
        return L.call(this, n, u, b, A);
      }, E.copyNode = function(n) {
        var u = new S(this, n.start, this.startLoc);
        for (var b in n)
          u[b] = n[b];
        return u;
      };
      var N = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", V = N + " Extended_Pictographic", T = V, R = T + " EBase EComp EMod EPres ExtPict", F = R, U = {
        9: N,
        10: V,
        11: T,
        12: R,
        13: F
      }, q = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", j = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Q = j + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", et = Q + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", rt = et + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", ht = rt + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", X = {
        9: j,
        10: Q,
        11: et,
        12: rt,
        13: ht
      }, K = {};
      function at(n) {
        var u = K[n] = {
          binary: ve(U[n] + " " + q),
          nonBinary: {
            General_Category: ve(q),
            Script: ve(X[n])
          }
        };
        u.nonBinary.Script_Extensions = u.nonBinary.Script, u.nonBinary.gc = u.nonBinary.General_Category, u.nonBinary.sc = u.nonBinary.Script, u.nonBinary.scx = u.nonBinary.Script_Extensions;
      }
      for (var lt = 0, ft = [9, 10, 11, 12, 13]; lt < ft.length; lt += 1) {
        var mt = ft[lt];
        at(mt);
      }
      var J = dt.prototype, gt = function(u) {
        this.parser = u, this.validFlags = "gim" + (u.options.ecmaVersion >= 6 ? "uy" : "") + (u.options.ecmaVersion >= 9 ? "s" : "") + (u.options.ecmaVersion >= 13 ? "d" : ""), this.unicodeProperties = K[u.options.ecmaVersion >= 13 ? 13 : u.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
      };
      gt.prototype.reset = function(u, b, A) {
        var O = A.indexOf("u") !== -1;
        this.start = u | 0, this.source = b + "", this.flags = A, this.switchU = O && this.parser.options.ecmaVersion >= 6, this.switchN = O && this.parser.options.ecmaVersion >= 9;
      }, gt.prototype.raise = function(u) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + u);
      }, gt.prototype.at = function(u, b) {
        b === void 0 && (b = !1);
        var A = this.source, O = A.length;
        if (u >= O)
          return -1;
        var H = A.charCodeAt(u);
        if (!(b || this.switchU) || H <= 55295 || H >= 57344 || u + 1 >= O)
          return H;
        var G = A.charCodeAt(u + 1);
        return G >= 56320 && G <= 57343 ? (H << 10) + G - 56613888 : H;
      }, gt.prototype.nextIndex = function(u, b) {
        b === void 0 && (b = !1);
        var A = this.source, O = A.length;
        if (u >= O)
          return O;
        var H = A.charCodeAt(u), G;
        return !(b || this.switchU) || H <= 55295 || H >= 57344 || u + 1 >= O || (G = A.charCodeAt(u + 1)) < 56320 || G > 57343 ? u + 1 : u + 2;
      }, gt.prototype.current = function(u) {
        return u === void 0 && (u = !1), this.at(this.pos, u);
      }, gt.prototype.lookahead = function(u) {
        return u === void 0 && (u = !1), this.at(this.nextIndex(this.pos, u), u);
      }, gt.prototype.advance = function(u) {
        u === void 0 && (u = !1), this.pos = this.nextIndex(this.pos, u);
      }, gt.prototype.eat = function(u, b) {
        return b === void 0 && (b = !1), this.current(b) === u ? (this.advance(b), !0) : !1;
      }, J.validateRegExpFlags = function(n) {
        for (var u = n.validFlags, b = n.flags, A = 0; A < b.length; A++) {
          var O = b.charAt(A);
          u.indexOf(O) === -1 && this.raise(n.start, "Invalid regular expression flag"), b.indexOf(O, A + 1) > -1 && this.raise(n.start, "Duplicate regular expression flag");
        }
      }, J.validateRegExpPattern = function(n) {
        this.regexp_pattern(n), !n.switchN && this.options.ecmaVersion >= 9 && n.groupNames.length > 0 && (n.switchN = !0, this.regexp_pattern(n));
      }, J.regexp_pattern = function(n) {
        n.pos = 0, n.lastIntValue = 0, n.lastStringValue = "", n.lastAssertionIsQuantifiable = !1, n.numCapturingParens = 0, n.maxBackReference = 0, n.groupNames.length = 0, n.backReferenceNames.length = 0, this.regexp_disjunction(n), n.pos !== n.source.length && (n.eat(41) && n.raise("Unmatched ')'"), (n.eat(93) || n.eat(125)) && n.raise("Lone quantifier brackets")), n.maxBackReference > n.numCapturingParens && n.raise("Invalid escape");
        for (var u = 0, b = n.backReferenceNames; u < b.length; u += 1) {
          var A = b[u];
          n.groupNames.indexOf(A) === -1 && n.raise("Invalid named capture referenced");
        }
      }, J.regexp_disjunction = function(n) {
        for (this.regexp_alternative(n); n.eat(124); )
          this.regexp_alternative(n);
        this.regexp_eatQuantifier(n, !0) && n.raise("Nothing to repeat"), n.eat(123) && n.raise("Lone quantifier brackets");
      }, J.regexp_alternative = function(n) {
        for (; n.pos < n.source.length && this.regexp_eatTerm(n); )
          ;
      }, J.regexp_eatTerm = function(n) {
        return this.regexp_eatAssertion(n) ? (n.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(n) && n.switchU && n.raise("Invalid quantifier"), !0) : (n.switchU ? this.regexp_eatAtom(n) : this.regexp_eatExtendedAtom(n)) ? (this.regexp_eatQuantifier(n), !0) : !1;
      }, J.regexp_eatAssertion = function(n) {
        var u = n.pos;
        if (n.lastAssertionIsQuantifiable = !1, n.eat(94) || n.eat(36))
          return !0;
        if (n.eat(92)) {
          if (n.eat(66) || n.eat(98))
            return !0;
          n.pos = u;
        }
        if (n.eat(40) && n.eat(63)) {
          var b = !1;
          if (this.options.ecmaVersion >= 9 && (b = n.eat(60)), n.eat(61) || n.eat(33))
            return this.regexp_disjunction(n), n.eat(41) || n.raise("Unterminated group"), n.lastAssertionIsQuantifiable = !b, !0;
        }
        return n.pos = u, !1;
      }, J.regexp_eatQuantifier = function(n, u) {
        return u === void 0 && (u = !1), this.regexp_eatQuantifierPrefix(n, u) ? (n.eat(63), !0) : !1;
      }, J.regexp_eatQuantifierPrefix = function(n, u) {
        return n.eat(42) || n.eat(43) || n.eat(63) || this.regexp_eatBracedQuantifier(n, u);
      }, J.regexp_eatBracedQuantifier = function(n, u) {
        var b = n.pos;
        if (n.eat(123)) {
          var A = 0, O = -1;
          if (this.regexp_eatDecimalDigits(n) && (A = n.lastIntValue, n.eat(44) && this.regexp_eatDecimalDigits(n) && (O = n.lastIntValue), n.eat(125)))
            return O !== -1 && O < A && !u && n.raise("numbers out of order in {} quantifier"), !0;
          n.switchU && !u && n.raise("Incomplete quantifier"), n.pos = b;
        }
        return !1;
      }, J.regexp_eatAtom = function(n) {
        return this.regexp_eatPatternCharacters(n) || n.eat(46) || this.regexp_eatReverseSolidusAtomEscape(n) || this.regexp_eatCharacterClass(n) || this.regexp_eatUncapturingGroup(n) || this.regexp_eatCapturingGroup(n);
      }, J.regexp_eatReverseSolidusAtomEscape = function(n) {
        var u = n.pos;
        if (n.eat(92)) {
          if (this.regexp_eatAtomEscape(n))
            return !0;
          n.pos = u;
        }
        return !1;
      }, J.regexp_eatUncapturingGroup = function(n) {
        var u = n.pos;
        if (n.eat(40)) {
          if (n.eat(63) && n.eat(58)) {
            if (this.regexp_disjunction(n), n.eat(41))
              return !0;
            n.raise("Unterminated group");
          }
          n.pos = u;
        }
        return !1;
      }, J.regexp_eatCapturingGroup = function(n) {
        if (n.eat(40)) {
          if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(n) : n.current() === 63 && n.raise("Invalid group"), this.regexp_disjunction(n), n.eat(41))
            return n.numCapturingParens += 1, !0;
          n.raise("Unterminated group");
        }
        return !1;
      }, J.regexp_eatExtendedAtom = function(n) {
        return n.eat(46) || this.regexp_eatReverseSolidusAtomEscape(n) || this.regexp_eatCharacterClass(n) || this.regexp_eatUncapturingGroup(n) || this.regexp_eatCapturingGroup(n) || this.regexp_eatInvalidBracedQuantifier(n) || this.regexp_eatExtendedPatternCharacter(n);
      }, J.regexp_eatInvalidBracedQuantifier = function(n) {
        return this.regexp_eatBracedQuantifier(n, !0) && n.raise("Nothing to repeat"), !1;
      }, J.regexp_eatSyntaxCharacter = function(n) {
        var u = n.current();
        return It(u) ? (n.lastIntValue = u, n.advance(), !0) : !1;
      };
      function It(n) {
        return n === 36 || n >= 40 && n <= 43 || n === 46 || n === 63 || n >= 91 && n <= 94 || n >= 123 && n <= 125;
      }
      J.regexp_eatPatternCharacters = function(n) {
        for (var u = n.pos, b = 0; (b = n.current()) !== -1 && !It(b); )
          n.advance();
        return n.pos !== u;
      }, J.regexp_eatExtendedPatternCharacter = function(n) {
        var u = n.current();
        return u !== -1 && u !== 36 && !(u >= 40 && u <= 43) && u !== 46 && u !== 63 && u !== 91 && u !== 94 && u !== 124 ? (n.advance(), !0) : !1;
      }, J.regexp_groupSpecifier = function(n) {
        if (n.eat(63)) {
          if (this.regexp_eatGroupName(n)) {
            n.groupNames.indexOf(n.lastStringValue) !== -1 && n.raise("Duplicate capture group name"), n.groupNames.push(n.lastStringValue);
            return;
          }
          n.raise("Invalid group");
        }
      }, J.regexp_eatGroupName = function(n) {
        if (n.lastStringValue = "", n.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(n) && n.eat(62))
            return !0;
          n.raise("Invalid capture group name");
        }
        return !1;
      }, J.regexp_eatRegExpIdentifierName = function(n) {
        if (n.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(n)) {
          for (n.lastStringValue += Tt(n.lastIntValue); this.regexp_eatRegExpIdentifierPart(n); )
            n.lastStringValue += Tt(n.lastIntValue);
          return !0;
        }
        return !1;
      }, J.regexp_eatRegExpIdentifierStart = function(n) {
        var u = n.pos, b = this.options.ecmaVersion >= 11, A = n.current(b);
        return n.advance(b), A === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(n, b) && (A = n.lastIntValue), yt(A) ? (n.lastIntValue = A, !0) : (n.pos = u, !1);
      };
      function yt(n) {
        return Et(n, !0) || n === 36 || n === 95;
      }
      J.regexp_eatRegExpIdentifierPart = function(n) {
        var u = n.pos, b = this.options.ecmaVersion >= 11, A = n.current(b);
        return n.advance(b), A === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(n, b) && (A = n.lastIntValue), ie(A) ? (n.lastIntValue = A, !0) : (n.pos = u, !1);
      };
      function ie(n) {
        return nt(n, !0) || n === 36 || n === 95 || n === 8204 || n === 8205;
      }
      J.regexp_eatAtomEscape = function(n) {
        return this.regexp_eatBackReference(n) || this.regexp_eatCharacterClassEscape(n) || this.regexp_eatCharacterEscape(n) || n.switchN && this.regexp_eatKGroupName(n) ? !0 : (n.switchU && (n.current() === 99 && n.raise("Invalid unicode escape"), n.raise("Invalid escape")), !1);
      }, J.regexp_eatBackReference = function(n) {
        var u = n.pos;
        if (this.regexp_eatDecimalEscape(n)) {
          var b = n.lastIntValue;
          if (n.switchU)
            return b > n.maxBackReference && (n.maxBackReference = b), !0;
          if (b <= n.numCapturingParens)
            return !0;
          n.pos = u;
        }
        return !1;
      }, J.regexp_eatKGroupName = function(n) {
        if (n.eat(107)) {
          if (this.regexp_eatGroupName(n))
            return n.backReferenceNames.push(n.lastStringValue), !0;
          n.raise("Invalid named reference");
        }
        return !1;
      }, J.regexp_eatCharacterEscape = function(n) {
        return this.regexp_eatControlEscape(n) || this.regexp_eatCControlLetter(n) || this.regexp_eatZero(n) || this.regexp_eatHexEscapeSequence(n) || this.regexp_eatRegExpUnicodeEscapeSequence(n, !1) || !n.switchU && this.regexp_eatLegacyOctalEscapeSequence(n) || this.regexp_eatIdentityEscape(n);
      }, J.regexp_eatCControlLetter = function(n) {
        var u = n.pos;
        if (n.eat(99)) {
          if (this.regexp_eatControlLetter(n))
            return !0;
          n.pos = u;
        }
        return !1;
      }, J.regexp_eatZero = function(n) {
        return n.current() === 48 && !ae(n.lookahead()) ? (n.lastIntValue = 0, n.advance(), !0) : !1;
      }, J.regexp_eatControlEscape = function(n) {
        var u = n.current();
        return u === 116 ? (n.lastIntValue = 9, n.advance(), !0) : u === 110 ? (n.lastIntValue = 10, n.advance(), !0) : u === 118 ? (n.lastIntValue = 11, n.advance(), !0) : u === 102 ? (n.lastIntValue = 12, n.advance(), !0) : u === 114 ? (n.lastIntValue = 13, n.advance(), !0) : !1;
      }, J.regexp_eatControlLetter = function(n) {
        var u = n.current();
        return $t(u) ? (n.lastIntValue = u % 32, n.advance(), !0) : !1;
      };
      function $t(n) {
        return n >= 65 && n <= 90 || n >= 97 && n <= 122;
      }
      J.regexp_eatRegExpUnicodeEscapeSequence = function(n, u) {
        u === void 0 && (u = !1);
        var b = n.pos, A = u || n.switchU;
        if (n.eat(117)) {
          if (this.regexp_eatFixedHexDigits(n, 4)) {
            var O = n.lastIntValue;
            if (A && O >= 55296 && O <= 56319) {
              var H = n.pos;
              if (n.eat(92) && n.eat(117) && this.regexp_eatFixedHexDigits(n, 4)) {
                var G = n.lastIntValue;
                if (G >= 56320 && G <= 57343)
                  return n.lastIntValue = (O - 55296) * 1024 + (G - 56320) + 65536, !0;
              }
              n.pos = H, n.lastIntValue = O;
            }
            return !0;
          }
          if (A && n.eat(123) && this.regexp_eatHexDigits(n) && n.eat(125) && se(n.lastIntValue))
            return !0;
          A && n.raise("Invalid unicode escape"), n.pos = b;
        }
        return !1;
      };
      function se(n) {
        return n >= 0 && n <= 1114111;
      }
      J.regexp_eatIdentityEscape = function(n) {
        if (n.switchU)
          return this.regexp_eatSyntaxCharacter(n) ? !0 : n.eat(47) ? (n.lastIntValue = 47, !0) : !1;
        var u = n.current();
        return u !== 99 && (!n.switchN || u !== 107) ? (n.lastIntValue = u, n.advance(), !0) : !1;
      }, J.regexp_eatDecimalEscape = function(n) {
        n.lastIntValue = 0;
        var u = n.current();
        if (u >= 49 && u <= 57) {
          do
            n.lastIntValue = 10 * n.lastIntValue + (u - 48), n.advance();
          while ((u = n.current()) >= 48 && u <= 57);
          return !0;
        }
        return !1;
      }, J.regexp_eatCharacterClassEscape = function(n) {
        var u = n.current();
        if (Kt(u))
          return n.lastIntValue = -1, n.advance(), !0;
        if (n.switchU && this.options.ecmaVersion >= 9 && (u === 80 || u === 112)) {
          if (n.lastIntValue = -1, n.advance(), n.eat(123) && this.regexp_eatUnicodePropertyValueExpression(n) && n.eat(125))
            return !0;
          n.raise("Invalid property name");
        }
        return !1;
      };
      function Kt(n) {
        return n === 100 || n === 68 || n === 115 || n === 83 || n === 119 || n === 87;
      }
      J.regexp_eatUnicodePropertyValueExpression = function(n) {
        var u = n.pos;
        if (this.regexp_eatUnicodePropertyName(n) && n.eat(61)) {
          var b = n.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(n)) {
            var A = n.lastStringValue;
            return this.regexp_validateUnicodePropertyNameAndValue(n, b, A), !0;
          }
        }
        if (n.pos = u, this.regexp_eatLoneUnicodePropertyNameOrValue(n)) {
          var O = n.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(n, O), !0;
        }
        return !1;
      }, J.regexp_validateUnicodePropertyNameAndValue = function(n, u, b) {
        st(n.unicodeProperties.nonBinary, u) || n.raise("Invalid property name"), n.unicodeProperties.nonBinary[u].test(b) || n.raise("Invalid property value");
      }, J.regexp_validateUnicodePropertyNameOrValue = function(n, u) {
        n.unicodeProperties.binary.test(u) || n.raise("Invalid property name");
      }, J.regexp_eatUnicodePropertyName = function(n) {
        var u = 0;
        for (n.lastStringValue = ""; Nt(u = n.current()); )
          n.lastStringValue += Tt(u), n.advance();
        return n.lastStringValue !== "";
      };
      function Nt(n) {
        return $t(n) || n === 95;
      }
      J.regexp_eatUnicodePropertyValue = function(n) {
        var u = 0;
        for (n.lastStringValue = ""; Yt(u = n.current()); )
          n.lastStringValue += Tt(u), n.advance();
        return n.lastStringValue !== "";
      };
      function Yt(n) {
        return Nt(n) || ae(n);
      }
      J.regexp_eatLoneUnicodePropertyNameOrValue = function(n) {
        return this.regexp_eatUnicodePropertyValue(n);
      }, J.regexp_eatCharacterClass = function(n) {
        if (n.eat(91)) {
          if (n.eat(94), this.regexp_classRanges(n), n.eat(93))
            return !0;
          n.raise("Unterminated character class");
        }
        return !1;
      }, J.regexp_classRanges = function(n) {
        for (; this.regexp_eatClassAtom(n); ) {
          var u = n.lastIntValue;
          if (n.eat(45) && this.regexp_eatClassAtom(n)) {
            var b = n.lastIntValue;
            n.switchU && (u === -1 || b === -1) && n.raise("Invalid character class"), u !== -1 && b !== -1 && u > b && n.raise("Range out of order in character class");
          }
        }
      }, J.regexp_eatClassAtom = function(n) {
        var u = n.pos;
        if (n.eat(92)) {
          if (this.regexp_eatClassEscape(n))
            return !0;
          if (n.switchU) {
            var b = n.current();
            (b === 99 || Ie(b)) && n.raise("Invalid class escape"), n.raise("Invalid escape");
          }
          n.pos = u;
        }
        var A = n.current();
        return A !== 93 ? (n.lastIntValue = A, n.advance(), !0) : !1;
      }, J.regexp_eatClassEscape = function(n) {
        var u = n.pos;
        if (n.eat(98))
          return n.lastIntValue = 8, !0;
        if (n.switchU && n.eat(45))
          return n.lastIntValue = 45, !0;
        if (!n.switchU && n.eat(99)) {
          if (this.regexp_eatClassControlLetter(n))
            return !0;
          n.pos = u;
        }
        return this.regexp_eatCharacterClassEscape(n) || this.regexp_eatCharacterEscape(n);
      }, J.regexp_eatClassControlLetter = function(n) {
        var u = n.current();
        return ae(u) || u === 95 ? (n.lastIntValue = u % 32, n.advance(), !0) : !1;
      }, J.regexp_eatHexEscapeSequence = function(n) {
        var u = n.pos;
        if (n.eat(120)) {
          if (this.regexp_eatFixedHexDigits(n, 2))
            return !0;
          n.switchU && n.raise("Invalid escape"), n.pos = u;
        }
        return !1;
      }, J.regexp_eatDecimalDigits = function(n) {
        var u = n.pos, b = 0;
        for (n.lastIntValue = 0; ae(b = n.current()); )
          n.lastIntValue = 10 * n.lastIntValue + (b - 48), n.advance();
        return n.pos !== u;
      };
      function ae(n) {
        return n >= 48 && n <= 57;
      }
      J.regexp_eatHexDigits = function(n) {
        var u = n.pos, b = 0;
        for (n.lastIntValue = 0; te(b = n.current()); )
          n.lastIntValue = 16 * n.lastIntValue + _e(b), n.advance();
        return n.pos !== u;
      };
      function te(n) {
        return n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102;
      }
      function _e(n) {
        return n >= 65 && n <= 70 ? 10 + (n - 65) : n >= 97 && n <= 102 ? 10 + (n - 97) : n - 48;
      }
      J.regexp_eatLegacyOctalEscapeSequence = function(n) {
        if (this.regexp_eatOctalDigit(n)) {
          var u = n.lastIntValue;
          if (this.regexp_eatOctalDigit(n)) {
            var b = n.lastIntValue;
            u <= 3 && this.regexp_eatOctalDigit(n) ? n.lastIntValue = u * 64 + b * 8 + n.lastIntValue : n.lastIntValue = u * 8 + b;
          } else
            n.lastIntValue = u;
          return !0;
        }
        return !1;
      }, J.regexp_eatOctalDigit = function(n) {
        var u = n.current();
        return Ie(u) ? (n.lastIntValue = u - 48, n.advance(), !0) : (n.lastIntValue = 0, !1);
      };
      function Ie(n) {
        return n >= 48 && n <= 55;
      }
      J.regexp_eatFixedHexDigits = function(n, u) {
        var b = n.pos;
        n.lastIntValue = 0;
        for (var A = 0; A < u; ++A) {
          var O = n.current();
          if (!te(O))
            return n.pos = b, !1;
          n.lastIntValue = 16 * n.lastIntValue + _e(O), n.advance();
        }
        return !0;
      };
      var fe = function(u) {
        this.type = u.type, this.value = u.value, this.start = u.start, this.end = u.end, u.options.locations && (this.loc = new He(u, u.startLoc, u.endLoc)), u.options.ranges && (this.range = [u.start, u.end]);
      }, St = dt.prototype;
      St.next = function(n) {
        !n && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new fe(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
      }, St.getToken = function() {
        return this.next(), new fe(this);
      }, typeof Symbol < "u" && (St[Symbol.iterator] = function() {
        var n = this;
        return {
          next: function() {
            var u = n.getToken();
            return {
              done: u.type === I.eof,
              value: u
            };
          }
        };
      }), St.nextToken = function() {
        var n = this.curContext();
        if ((!n || !n.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
          return this.finishToken(I.eof);
        if (n.override)
          return n.override(this);
        this.readToken(this.fullCharCodeAtPos());
      }, St.readToken = function(n) {
        return Et(n, this.options.ecmaVersion >= 6) || n === 92 ? this.readWord() : this.getTokenFromCode(n);
      }, St.fullCharCodeAtPos = function() {
        var n = this.input.charCodeAt(this.pos);
        if (n <= 55295 || n >= 56320)
          return n;
        var u = this.input.charCodeAt(this.pos + 1);
        return u <= 56319 || u >= 57344 ? n : (n << 10) + u - 56613888;
      }, St.skipBlockComment = function() {
        var n = this.options.onComment && this.curPosition(), u = this.pos, b = this.input.indexOf("*/", this.pos += 2);
        if (b === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = b + 2, this.options.locations)
          for (var A = void 0, O = u; (A = ke(this.input, O, this.pos)) > -1; )
            ++this.curLine, O = this.lineStart = A;
        this.options.onComment && this.options.onComment(
          !0,
          this.input.slice(u + 2, b),
          u,
          this.pos,
          n,
          this.curPosition()
        );
      }, St.skipLineComment = function(n) {
        for (var u = this.pos, b = this.options.onComment && this.curPosition(), A = this.input.charCodeAt(this.pos += n); this.pos < this.input.length && !Zt(A); )
          A = this.input.charCodeAt(++this.pos);
        this.options.onComment && this.options.onComment(
          !1,
          this.input.slice(u + n, this.pos),
          u,
          this.pos,
          b,
          this.curPosition()
        );
      }, St.skipSpace = function() {
        t:
          for (; this.pos < this.input.length; ) {
            var n = this.input.charCodeAt(this.pos);
            switch (n) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
              case 10:
              case 8232:
              case 8233:
                ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break t;
                }
                break;
              default:
                if (n > 8 && n < 14 || n >= 5760 && We.test(String.fromCharCode(n)))
                  ++this.pos;
                else
                  break t;
            }
          }
      }, St.finishToken = function(n, u) {
        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var b = this.type;
        this.type = n, this.value = u, this.updateContext(b);
      }, St.readToken_dot = function() {
        var n = this.input.charCodeAt(this.pos + 1);
        if (n >= 48 && n <= 57)
          return this.readNumber(!0);
        var u = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && n === 46 && u === 46 ? (this.pos += 3, this.finishToken(I.ellipsis)) : (++this.pos, this.finishToken(I.dot));
      }, St.readToken_slash = function() {
        var n = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed ? (++this.pos, this.readRegexp()) : n === 61 ? this.finishOp(I.assign, 2) : this.finishOp(I.slash, 1);
      }, St.readToken_mult_modulo_exp = function(n) {
        var u = this.input.charCodeAt(this.pos + 1), b = 1, A = n === 42 ? I.star : I.modulo;
        return this.options.ecmaVersion >= 7 && n === 42 && u === 42 && (++b, A = I.starstar, u = this.input.charCodeAt(this.pos + 2)), u === 61 ? this.finishOp(I.assign, b + 1) : this.finishOp(A, b);
      }, St.readToken_pipe_amp = function(n) {
        var u = this.input.charCodeAt(this.pos + 1);
        if (u === n) {
          if (this.options.ecmaVersion >= 12) {
            var b = this.input.charCodeAt(this.pos + 2);
            if (b === 61)
              return this.finishOp(I.assign, 3);
          }
          return this.finishOp(n === 124 ? I.logicalOR : I.logicalAND, 2);
        }
        return u === 61 ? this.finishOp(I.assign, 2) : this.finishOp(n === 124 ? I.bitwiseOR : I.bitwiseAND, 1);
      }, St.readToken_caret = function() {
        var n = this.input.charCodeAt(this.pos + 1);
        return n === 61 ? this.finishOp(I.assign, 2) : this.finishOp(I.bitwiseXOR, 1);
      }, St.readToken_plus_min = function(n) {
        var u = this.input.charCodeAt(this.pos + 1);
        return u === n ? u === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || zt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(I.incDec, 2) : u === 61 ? this.finishOp(I.assign, 2) : this.finishOp(I.plusMin, 1);
      }, St.readToken_lt_gt = function(n) {
        var u = this.input.charCodeAt(this.pos + 1), b = 1;
        return u === n ? (b = n === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + b) === 61 ? this.finishOp(I.assign, b + 1) : this.finishOp(I.bitShift, b)) : u === 33 && n === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (u === 61 && (b = 2), this.finishOp(I.relational, b));
      }, St.readToken_eq_excl = function(n) {
        var u = this.input.charCodeAt(this.pos + 1);
        return u === 61 ? this.finishOp(I.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : n === 61 && u === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(I.arrow)) : this.finishOp(n === 61 ? I.eq : I.prefix, 1);
      }, St.readToken_question = function() {
        var n = this.options.ecmaVersion;
        if (n >= 11) {
          var u = this.input.charCodeAt(this.pos + 1);
          if (u === 46) {
            var b = this.input.charCodeAt(this.pos + 2);
            if (b < 48 || b > 57)
              return this.finishOp(I.questionDot, 2);
          }
          if (u === 63) {
            if (n >= 12) {
              var A = this.input.charCodeAt(this.pos + 2);
              if (A === 61)
                return this.finishOp(I.assign, 3);
            }
            return this.finishOp(I.coalesce, 2);
          }
        }
        return this.finishOp(I.question, 1);
      }, St.readToken_numberSign = function() {
        var n = this.options.ecmaVersion, u = 35;
        if (n >= 13 && (++this.pos, u = this.fullCharCodeAtPos(), Et(u, !0) || u === 92))
          return this.finishToken(I.privateId, this.readWord1());
        this.raise(this.pos, "Unexpected character '" + Tt(u) + "'");
      }, St.getTokenFromCode = function(n) {
        switch (n) {
          case 46:
            return this.readToken_dot();
          case 40:
            return ++this.pos, this.finishToken(I.parenL);
          case 41:
            return ++this.pos, this.finishToken(I.parenR);
          case 59:
            return ++this.pos, this.finishToken(I.semi);
          case 44:
            return ++this.pos, this.finishToken(I.comma);
          case 91:
            return ++this.pos, this.finishToken(I.bracketL);
          case 93:
            return ++this.pos, this.finishToken(I.bracketR);
          case 123:
            return ++this.pos, this.finishToken(I.braceL);
          case 125:
            return ++this.pos, this.finishToken(I.braceR);
          case 58:
            return ++this.pos, this.finishToken(I.colon);
          case 96:
            if (this.options.ecmaVersion < 6)
              break;
            return ++this.pos, this.finishToken(I.backQuote);
          case 48:
            var u = this.input.charCodeAt(this.pos + 1);
            if (u === 120 || u === 88)
              return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
              if (u === 111 || u === 79)
                return this.readRadixNumber(8);
              if (u === 98 || u === 66)
                return this.readRadixNumber(2);
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(!1);
          case 34:
          case 39:
            return this.readString(n);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(n);
          case 124:
          case 38:
            return this.readToken_pipe_amp(n);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(n);
          case 60:
          case 62:
            return this.readToken_lt_gt(n);
          case 61:
          case 33:
            return this.readToken_eq_excl(n);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(I.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + Tt(n) + "'");
      }, St.finishOp = function(n, u) {
        var b = this.input.slice(this.pos, this.pos + u);
        return this.pos += u, this.finishToken(n, b);
      }, St.readRegexp = function() {
        for (var n, u, b = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(b, "Unterminated regular expression");
          var A = this.input.charAt(this.pos);
          if (zt.test(A) && this.raise(b, "Unterminated regular expression"), n)
            n = !1;
          else {
            if (A === "[")
              u = !0;
            else if (A === "]" && u)
              u = !1;
            else if (A === "/" && !u)
              break;
            n = A === "\\";
          }
          ++this.pos;
        }
        var O = this.input.slice(b, this.pos);
        ++this.pos;
        var H = this.pos, G = this.readWord1();
        this.containsEsc && this.unexpected(H);
        var tt = this.regexpState || (this.regexpState = new gt(this));
        tt.reset(b, O, G), this.validateRegExpFlags(tt), this.validateRegExpPattern(tt);
        var ut = null;
        try {
          ut = new RegExp(O, G);
        } catch {
        }
        return this.finishToken(I.regexp, { pattern: O, flags: G, value: ut });
      }, St.readInt = function(n, u, b) {
        for (var A = this.options.ecmaVersion >= 12 && u === void 0, O = b && this.input.charCodeAt(this.pos) === 48, H = this.pos, G = 0, tt = 0, ut = 0, bt = u == null ? 1 / 0 : u; ut < bt; ++ut, ++this.pos) {
          var wt = this.input.charCodeAt(this.pos), Ut = void 0;
          if (A && wt === 95) {
            O && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), tt === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), ut === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), tt = wt;
            continue;
          }
          if (wt >= 97 ? Ut = wt - 97 + 10 : wt >= 65 ? Ut = wt - 65 + 10 : wt >= 48 && wt <= 57 ? Ut = wt - 48 : Ut = 1 / 0, Ut >= n)
            break;
          tt = wt, G = G * n + Ut;
        }
        return A && tt === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === H || u != null && this.pos - H !== u ? null : G;
      };
      function ce(n, u) {
        return u ? parseInt(n, 8) : parseFloat(n.replace(/_/g, ""));
      }
      function de(n) {
        return typeof BigInt != "function" ? null : BigInt(n.replace(/_/g, ""));
      }
      St.readRadixNumber = function(n) {
        var u = this.pos;
        this.pos += 2;
        var b = this.readInt(n);
        return b == null && this.raise(this.start + 2, "Expected number in radix " + n), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (b = de(this.input.slice(u, this.pos)), ++this.pos) : Et(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(I.num, b);
      }, St.readNumber = function(n) {
        var u = this.pos;
        !n && this.readInt(10, void 0, !0) === null && this.raise(u, "Invalid number");
        var b = this.pos - u >= 2 && this.input.charCodeAt(u) === 48;
        b && this.strict && this.raise(u, "Invalid number");
        var A = this.input.charCodeAt(this.pos);
        if (!b && !n && this.options.ecmaVersion >= 11 && A === 110) {
          var O = de(this.input.slice(u, this.pos));
          return ++this.pos, Et(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(I.num, O);
        }
        b && /[89]/.test(this.input.slice(u, this.pos)) && (b = !1), A === 46 && !b && (++this.pos, this.readInt(10), A = this.input.charCodeAt(this.pos)), (A === 69 || A === 101) && !b && (A = this.input.charCodeAt(++this.pos), (A === 43 || A === 45) && ++this.pos, this.readInt(10) === null && this.raise(u, "Invalid number")), Et(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
        var H = ce(this.input.slice(u, this.pos), b);
        return this.finishToken(I.num, H);
      }, St.readCodePoint = function() {
        var n = this.input.charCodeAt(this.pos), u;
        if (n === 123) {
          this.options.ecmaVersion < 6 && this.unexpected();
          var b = ++this.pos;
          u = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, u > 1114111 && this.invalidStringToken(b, "Code point out of bounds");
        } else
          u = this.readHexChar(4);
        return u;
      }, St.readString = function(n) {
        for (var u = "", b = ++this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          var A = this.input.charCodeAt(this.pos);
          if (A === n)
            break;
          A === 92 ? (u += this.input.slice(b, this.pos), u += this.readEscapedChar(!1), b = this.pos) : A === 8232 || A === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Zt(A) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
        }
        return u += this.input.slice(b, this.pos++), this.finishToken(I.string, u);
      };
      var Pe = {};
      St.tryReadTemplateToken = function() {
        this.inTemplateElement = !0;
        try {
          this.readTmplToken();
        } catch (n) {
          if (n === Pe)
            this.readInvalidTemplateToken();
          else
            throw n;
        }
        this.inTemplateElement = !1;
      }, St.invalidStringToken = function(n, u) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9)
          throw Pe;
        this.raise(n, u);
      }, St.readTmplToken = function() {
        for (var n = "", u = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
          var b = this.input.charCodeAt(this.pos);
          if (b === 96 || b === 36 && this.input.charCodeAt(this.pos + 1) === 123)
            return this.pos === this.start && (this.type === I.template || this.type === I.invalidTemplate) ? b === 36 ? (this.pos += 2, this.finishToken(I.dollarBraceL)) : (++this.pos, this.finishToken(I.backQuote)) : (n += this.input.slice(u, this.pos), this.finishToken(I.template, n));
          if (b === 92)
            n += this.input.slice(u, this.pos), n += this.readEscapedChar(!0), u = this.pos;
          else if (Zt(b)) {
            switch (n += this.input.slice(u, this.pos), ++this.pos, b) {
              case 13:
                this.input.charCodeAt(this.pos) === 10 && ++this.pos;
              case 10:
                n += `
`;
                break;
              default:
                n += String.fromCharCode(b);
                break;
            }
            this.options.locations && (++this.curLine, this.lineStart = this.pos), u = this.pos;
          } else
            ++this.pos;
        }
      }, St.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++)
          switch (this.input[this.pos]) {
            case "\\":
              ++this.pos;
              break;
            case "$":
              if (this.input[this.pos + 1] !== "{")
                break;
            case "`":
              return this.finishToken(I.invalidTemplate, this.input.slice(this.start, this.pos));
          }
        this.raise(this.start, "Unterminated template");
      }, St.readEscapedChar = function(n) {
        var u = this.input.charCodeAt(++this.pos);
        switch (++this.pos, u) {
          case 110:
            return `
`;
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return Tt(this.readCodePoint());
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            this.input.charCodeAt(this.pos) === 10 && ++this.pos;
          case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
          case 56:
          case 57:
            if (this.strict && this.invalidStringToken(
              this.pos - 1,
              "Invalid escape sequence"
            ), n) {
              var b = this.pos - 1;
              return this.invalidStringToken(
                b,
                "Invalid escape sequence in template string"
              ), null;
            }
          default:
            if (u >= 48 && u <= 55) {
              var A = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], O = parseInt(A, 8);
              return O > 255 && (A = A.slice(0, -1), O = parseInt(A, 8)), this.pos += A.length - 1, u = this.input.charCodeAt(this.pos), (A !== "0" || u === 56 || u === 57) && (this.strict || n) && this.invalidStringToken(
                this.pos - 1 - A.length,
                n ? "Octal literal in template string" : "Octal literal in strict mode"
              ), String.fromCharCode(O);
            }
            return Zt(u) ? "" : String.fromCharCode(u);
        }
      }, St.readHexChar = function(n) {
        var u = this.pos, b = this.readInt(16, n);
        return b === null && this.invalidStringToken(u, "Bad character escape sequence"), b;
      }, St.readWord1 = function() {
        this.containsEsc = !1;
        for (var n = "", u = !0, b = this.pos, A = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
          var O = this.fullCharCodeAtPos();
          if (nt(O, A))
            this.pos += O <= 65535 ? 1 : 2;
          else if (O === 92) {
            this.containsEsc = !0, n += this.input.slice(b, this.pos);
            var H = this.pos;
            this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
            var G = this.readCodePoint();
            (u ? Et : nt)(G, A) || this.invalidStringToken(H, "Invalid Unicode escape"), n += Tt(G), b = this.pos;
          } else
            break;
          u = !1;
        }
        return n + this.input.slice(b, this.pos);
      }, St.readWord = function() {
        var n = this.readWord1(), u = I.name;
        return this.keywords.test(n) && (u = Rt[n]), this.finishToken(u, n);
      };
      var me = "8.8.0";
      dt.acorn = {
        Parser: dt,
        version: me,
        defaultOptions: $e,
        Position: Be,
        SourceLocation: He,
        getLineInfo: Fe,
        Node: S,
        TokenType: _t,
        tokTypes: I,
        keywordTypes: Rt,
        TokContext: w,
        tokContexts: m,
        isIdentifierChar: nt,
        isIdentifierStart: Et,
        Token: fe,
        isNewLine: Zt,
        lineBreak: zt,
        lineBreakG: Te,
        nonASCIIwhitespace: We
      };
      function ri(n, u) {
        return dt.parse(n, u);
      }
      function Si(n, u, b) {
        return dt.parseExpressionAt(n, u, b);
      }
      function Ci(n, u) {
        return dt.tokenizer(n, u);
      }
      W.Node = S, W.Parser = dt, W.Position = Be, W.SourceLocation = He, W.TokContext = w, W.Token = fe, W.TokenType = _t, W.defaultOptions = $e, W.getLineInfo = Fe, W.isIdentifierChar = nt, W.isIdentifierStart = Et, W.isNewLine = Zt, W.keywordTypes = Rt, W.lineBreak = zt, W.lineBreakG = Te, W.nonASCIIwhitespace = We, W.parse = ri, W.parseExpressionAt = Si, W.tokContexts = m, W.tokTypes = I, W.tokenizer = Ci, W.version = me, Object.defineProperty(W, "__esModule", { value: !0 });
    });
  }(Mi, Mi.exports)), Mi.exports;
}
/*!
 * Paper.js v0.12.15 - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Wed Mar 17 10:49:48 2021 +0100
 *
 ***
 *
 * Straps.js - Class inheritance library with support for bean-style accessors
 *
 * Copyright (c) 2006 - 2020 Jürg Lehni
 * http://juerglehni.com/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Acorn.js
 * https://marijnhaverbeke.nl/acorn/
 *
 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
 * created by Marijn Haverbeke and released under an MIT license.
 *
 */
(function(Wt) {
  (function(ct, W) {
    ct = ct || _n;
    var it = ct.window, $ = ct.document, M = new function() {
      var t = /^(statics|enumerable|beans|preserve)$/, e = [], i = e.slice, r = Object.create, s = Object.getOwnPropertyDescriptor, a = Object.defineProperty, h = e.forEach || function(g, d) {
        for (var w = 0, m = this.length; w < m; w++)
          g.call(d, this[w], w, this);
      }, o = function(g, d) {
        for (var w in this)
          this.hasOwnProperty(w) && g.call(d, this[w], w, this);
      }, l = Object.assign || function(g) {
        for (var d = 1, w = arguments.length; d < w; d++) {
          var m = arguments[d];
          for (var k in m)
            m.hasOwnProperty(k) && (g[k] = m[k]);
        }
        return g;
      }, f = function(g, d, w) {
        if (g) {
          var m = s(g, "length");
          (m && typeof m.value == "number" ? h : o).call(g, d, w = w || g);
        }
        return w;
      };
      function _(g, d, w, m, k) {
        var p = {};
        function y(S, E) {
          E = E || (E = s(d, S)) && (E.get ? E : E.value), typeof E == "string" && E[0] === "#" && (E = g[E.substring(1)] || E);
          var L = typeof E == "function", N = E, V = k || L && !E.base ? E && E.get ? S in g : g[S] : null, T;
          (!k || !V) && (L && V && (E.base = V), L && m !== !1 && (T = S.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (p[T[3].toLowerCase() + T[4]] = T[2]), (!N || L || !N.get || typeof N.get != "function" || !v.isPlainObject(N)) && (N = { value: N, writable: !0 }), (s(g, S) || { configurable: !0 }).configurable && (N.configurable = !0, N.enumerable = w != null ? w : !T), a(g, S, N));
        }
        if (d) {
          for (var c in d)
            d.hasOwnProperty(c) && !t.test(c) && y(c);
          for (var c in p) {
            var x = p[c], C = g["set" + x], P = g["get" + x] || C && g["is" + x];
            P && (m === !0 || P.length === 0) && y(c, { get: P, set: C });
          }
        }
        return g;
      }
      function v() {
        for (var g = 0, d = arguments.length; g < d; g++) {
          var w = arguments[g];
          w && l(this, w);
        }
        return this;
      }
      return _(v, {
        inject: function(g) {
          if (g) {
            var d = g.statics === !0 ? g : g.statics, w = g.beans, m = g.preserve;
            d !== g && _(this.prototype, g, g.enumerable, w, m), _(this, d, null, w, m);
          }
          for (var k = 1, p = arguments.length; k < p; k++)
            this.inject(arguments[k]);
          return this;
        },
        extend: function() {
          for (var g = this, d, w, m = 0, k, p = arguments.length; m < p && !(d && w); m++)
            k = arguments[m], d = d || k.initialize, w = w || k.prototype;
          return d = d || function() {
            g.apply(this, arguments);
          }, w = d.prototype = w || r(this.prototype), a(
            w,
            "constructor",
            { value: d, writable: !0, configurable: !0 }
          ), _(d, this), arguments.length && this.inject.apply(d, arguments), d.base = g, d;
        }
      }).inject({
        enumerable: !1,
        initialize: v,
        set: v,
        inject: function() {
          for (var g = 0, d = arguments.length; g < d; g++) {
            var w = arguments[g];
            w && _(this, w, w.enumerable, w.beans, w.preserve);
          }
          return this;
        },
        extend: function() {
          var g = r(this);
          return g.inject.apply(g, arguments);
        },
        each: function(g, d) {
          return f(this, g, d);
        },
        clone: function() {
          return new this.constructor(this);
        },
        statics: {
          set: l,
          each: f,
          create: r,
          define: a,
          describe: s,
          clone: function(g) {
            return l(new g.constructor(), g);
          },
          isPlainObject: function(g) {
            var d = g != null && g.constructor;
            return d && (d === Object || d === v || d.name === "Object");
          },
          pick: function(g, d) {
            return g !== W ? g : d;
          },
          slice: function(g, d, w) {
            return i.call(g, d, w);
          }
        }
      });
    }();
    Wt.exports = M, M.inject({
      enumerable: !1,
      toString: function() {
        return this._id != null ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + M.each(this, function(t, e) {
          if (!/^_/.test(e)) {
            var i = typeof t;
            this.push(e + ": " + (i === "number" ? Ot.instance.number(t) : i === "string" ? "'" + t + "'" : t));
          }
        }, []).join(", ") + " }";
      },
      getClassName: function() {
        return this._class || "";
      },
      importJSON: function(t) {
        return M.importJSON(t, this);
      },
      exportJSON: function(t) {
        return M.exportJSON(this, t);
      },
      toJSON: function() {
        return M.serialize(this);
      },
      set: function(t, e) {
        return t && M.filter(this, t, e, this._prioritize), this;
      }
    }, {
      beans: !1,
      statics: {
        exports: {},
        extend: function t() {
          var e = t.base.apply(this, arguments), i = e.prototype._class;
          return i && !M.exports[i] && (M.exports[i] = e), e;
        },
        equals: function(t, e) {
          if (t === e)
            return !0;
          if (t && t.equals)
            return t.equals(e);
          if (e && e.equals)
            return e.equals(t);
          if (t && e && typeof t == "object" && typeof e == "object") {
            if (Array.isArray(t) && Array.isArray(e)) {
              var i = t.length;
              if (i !== e.length)
                return !1;
              for (; i--; )
                if (!M.equals(t[i], e[i]))
                  return !1;
            } else {
              var r = Object.keys(t), i = r.length;
              if (i !== Object.keys(e).length)
                return !1;
              for (; i--; ) {
                var s = r[i];
                if (!(e.hasOwnProperty(s) && M.equals(t[s], e[s])))
                  return !1;
              }
            }
            return !0;
          }
          return !1;
        },
        read: function(t, e, i, r) {
          if (this === M) {
            var s = this.peek(t, e);
            return t.__index++, s;
          }
          var a = this.prototype, h = a._readIndex, o = e || h && t.__index || 0, l = t.length, f = t[o];
          if (r = r || l - o, f instanceof this || i && i.readNull && f == null && r <= 1)
            return h && (t.__index = o + 1), f && i && i.clone ? f.clone() : f;
          if (f = M.create(a), h && (f.__read = !0), f = f.initialize.apply(f, o > 0 || o + r < l ? M.slice(t, o, o + r) : t) || f, h) {
            t.__index = o + f.__read;
            var _ = f.__filtered;
            _ && (t.__filtered = _, f.__filtered = W), f.__read = W;
          }
          return f;
        },
        peek: function(t, e) {
          return t[t.__index = e || t.__index || 0];
        },
        remain: function(t) {
          return t.length - (t.__index || 0);
        },
        readList: function(t, e, i, r) {
          for (var s = [], a, h = e || 0, o = r ? h + r : t.length, l = h; l < o; l++)
            s.push(Array.isArray(a = t[l]) ? this.read(a, 0, i) : this.read(t, l, i, 1));
          return s;
        },
        readNamed: function(t, e, i, r, s) {
          var a = this.getNamed(t, e), h = a !== W;
          if (h) {
            var o = t.__filtered;
            if (!o) {
              var l = this.getSource(t);
              o = t.__filtered = M.create(l), o.__unfiltered = l;
            }
            o[e] = W;
          }
          return this.read(h ? [a] : t, i, r, s);
        },
        readSupported: function(t, e) {
          var i = this.getSource(t), r = this, s = !1;
          return i && Object.keys(i).forEach(function(a) {
            if (a in e) {
              var h = r.readNamed(t, a);
              h !== W && (e[a] = h), s = !0;
            }
          }), s;
        },
        getSource: function(t) {
          var e = t.__source;
          if (e === W) {
            var i = t.length === 1 && t[0];
            e = t.__source = i && M.isPlainObject(i) ? i : null;
          }
          return e;
        },
        getNamed: function(t, e) {
          var i = this.getSource(t);
          if (i)
            return e ? i[e] : t.__filtered || i;
        },
        hasNamed: function(t, e) {
          return !!this.getNamed(t, e);
        },
        filter: function(t, e, i, r) {
          var s;
          function a(_) {
            if (!(i && _ in i) && !(s && _ in s)) {
              var v = e[_];
              v !== W && (t[_] = v);
            }
          }
          if (r) {
            for (var h = {}, o = 0, l, f = r.length; o < f; o++)
              (l = r[o]) in e && (a(l), h[l] = !0);
            s = h;
          }
          return Object.keys(e.__unfiltered || e).forEach(a), t;
        },
        isPlainValue: function(t, e) {
          return M.isPlainObject(t) || Array.isArray(t) || e && typeof t == "string";
        },
        serialize: function(t, e, i, r) {
          e = e || {};
          var s = !r, a;
          if (s && (e.formatter = new Ot(e.precision), r = {
            length: 0,
            definitions: {},
            references: {},
            add: function(v, g) {
              var d = "#" + v._id, w = this.references[d];
              if (!w) {
                this.length++;
                var m = g.call(v), k = v._class;
                k && m[0] !== k && m.unshift(k), this.definitions[d] = m, w = this.references[d] = [d];
              }
              return w;
            }
          }), t && t._serialize) {
            a = t._serialize(e, r);
            var h = t._class;
            h && !t._compactSerialize && (s || !i) && a[0] !== h && a.unshift(h);
          } else if (Array.isArray(t)) {
            a = [];
            for (var o = 0, l = t.length; o < l; o++)
              a[o] = M.serialize(t[o], e, i, r);
          } else if (M.isPlainObject(t)) {
            a = {};
            for (var f = Object.keys(t), o = 0, l = f.length; o < l; o++) {
              var _ = f[o];
              a[_] = M.serialize(
                t[_],
                e,
                i,
                r
              );
            }
          } else
            typeof t == "number" ? a = e.formatter.number(t, e.precision) : a = t;
          return s && r.length > 0 ? [["dictionary", r.definitions], a] : a;
        },
        deserialize: function(t, e, i, r, s) {
          var a = t, h = !i, o = h && t && t.length && t[0][0] === "dictionary";
          if (i = i || {}, Array.isArray(t)) {
            var l = t[0], f = l === "dictionary";
            if (t.length == 1 && /^#/.test(l))
              return i.dictionary[l];
            l = M.exports[l], a = [];
            for (var _ = l ? 1 : 0, v = t.length; _ < v; _++)
              a.push(M.deserialize(
                t[_],
                e,
                i,
                f,
                o
              ));
            if (l) {
              var g = a;
              e ? a = e(l, g, h || s) : a = new l(g);
            }
          } else if (M.isPlainObject(t)) {
            a = {}, r && (i.dictionary = a);
            for (var d in t)
              a[d] = M.deserialize(t[d], e, i);
          }
          return o ? a[1] : a;
        },
        exportJSON: function(t, e) {
          var i = M.serialize(t, e);
          return e && e.asString == !1 ? i : JSON.stringify(i);
        },
        importJSON: function(t, e) {
          return M.deserialize(
            typeof t == "string" ? JSON.parse(t) : t,
            function(i, r, s) {
              var a = s && e && e.constructor === i, h = a ? e : M.create(i.prototype);
              if (r.length === 1 && h instanceof I && (a || !(h instanceof Te))) {
                var o = r[0];
                M.isPlainObject(o) && (o.insert = !1, a && (r = r.concat([{ insert: !0 }])));
              }
              return (a ? h.set : i).apply(h, r), a && (e = null), h;
            }
          );
        },
        push: function(t, e) {
          var i = e.length;
          if (i < 4096)
            t.push.apply(t, e);
          else {
            var r = t.length;
            t.length += i;
            for (var s = 0; s < i; s++)
              t[r + s] = e[s];
          }
          return t;
        },
        splice: function(t, e, i, r) {
          var s = e && e.length, a = i === W;
          i = a ? t.length : i, i > t.length && (i = t.length);
          for (var h = 0; h < s; h++)
            e[h]._index = i + h;
          if (a)
            return M.push(t, e), [];
          var o = [i, r];
          e && M.push(o, e);
          for (var l = t.splice.apply(t, o), h = 0, f = l.length; h < f; h++)
            l[h]._index = W;
          for (var h = i + s, f = t.length; h < f; h++)
            t[h]._index = h;
          return l;
        },
        capitalize: function(t) {
          return t.replace(/\b[a-z]/g, function(e) {
            return e.toUpperCase();
          });
        },
        camelize: function(t) {
          return t.replace(/-(.)/g, function(e, i) {
            return i.toUpperCase();
          });
        },
        hyphenate: function(t) {
          return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        }
      }
    });
    var ge = {
      on: function(t, e) {
        if (typeof t != "string")
          M.each(t, function(a, h) {
            this.on(h, a);
          }, this);
        else {
          var i = this._eventTypes, r = i && i[t], s = this._callbacks = this._callbacks || {};
          s = s[t] = s[t] || [], s.indexOf(e) === -1 && (s.push(e), r && r.install && s.length === 1 && r.install.call(this, t));
        }
        return this;
      },
      off: function(t, e) {
        if (typeof t != "string") {
          M.each(t, function(h, o) {
            this.off(o, h);
          }, this);
          return;
        }
        var i = this._eventTypes, r = i && i[t], s = this._callbacks && this._callbacks[t], a;
        return s && (!e || (a = s.indexOf(e)) !== -1 && s.length === 1 ? (r && r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : a !== -1 && s.splice(a, 1)), this;
      },
      once: function(t, e) {
        return this.on(t, function i() {
          e.apply(this, arguments), this.off(t, i);
        });
      },
      emit: function(t, e) {
        var i = this._callbacks && this._callbacks[t];
        if (!i)
          return !1;
        var r = M.slice(arguments, 1), s = e && e.target && !e.currentTarget;
        i = i.slice(), s && (e.currentTarget = this);
        for (var a = 0, h = i.length; a < h; a++)
          if (i[a].apply(this, r) == !1) {
            e && e.stop && e.stop();
            break;
          }
        return s && delete e.currentTarget, !0;
      },
      responds: function(t) {
        return !!(this._callbacks && this._callbacks[t]);
      },
      attach: "#on",
      detach: "#off",
      fire: "#emit",
      _installEvents: function(t) {
        var e = this._eventTypes, i = this._callbacks, r = t ? "install" : "uninstall";
        if (e) {
          for (var s in i)
            if (i[s].length > 0) {
              var a = e[s], h = a && a[r];
              h && h.call(this, s);
            }
        }
      },
      statics: {
        inject: function t(e) {
          var i = e._events;
          if (i) {
            var r = {};
            M.each(i, function(s, a) {
              var h = typeof s == "string", o = h ? s : a, l = M.capitalize(o), f = o.substring(2).toLowerCase();
              r[f] = h ? {} : s, o = "_" + o, e["get" + l] = function() {
                return this[o];
              }, e["set" + l] = function(_) {
                var v = this[o];
                v && this.off(f, v), _ && this.on(f, _), this[o] = _;
              };
            }), e._eventTypes = r;
          }
          return t.base.apply(this, arguments);
        }
      }
    }, jt = M.extend({
      _class: "PaperScope",
      initialize: function t() {
        dt = this, this.settings = new M({
          applyMatrix: !0,
          insertItems: !0,
          handleSize: 4,
          hitTolerance: 0
        }), this.project = null, this.projects = [], this.tools = [], this._id = t._id++, t._scopes[this._id] = this;
        var e = t.prototype;
        if (!this.support) {
          var i = Ft.getContext(1, 1) || {};
          e.support = {
            nativeDash: "setLineDash" in i || "mozDash" in i,
            nativeBlendModes: ni.nativeModes
          }, Ft.release(i);
        }
        if (!this.agent) {
          var r = ct.navigator.userAgent.toLowerCase(), s = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(r) || [])[0], a = s === "darwin" ? "mac" : s, h = e.agent = e.browser = { platform: a };
          a && (h[a] = !0), r.replace(
            /(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
            function(o, l, f, _, v) {
              if (!h.chrome) {
                var g = l === "opera" ? _ : /^(node|trident)$/.test(l) ? v : f;
                h.version = g, h.versionNumber = parseFloat(g), l = { trident: "msie", jsdom: "node" }[l] || l, h.name = l, h[l] = !0;
              }
            }
          ), h.chrome && delete h.webkit, h.atom && delete h.chrome;
        }
      },
      version: "0.12.15",
      getView: function() {
        var t = this.project;
        return t && t._view;
      },
      getPaper: function() {
        return this;
      },
      execute: function(t, e) {
        var i = dt.PaperScript.execute(t, this, e);
        return qt.updateFocus(), i;
      },
      install: function(t) {
        var e = this;
        M.each(["project", "view", "tool"], function(r) {
          M.define(t, r, {
            configurable: !0,
            get: function() {
              return e[r];
            }
          });
        });
        for (var i in this)
          !/^_/.test(i) && this[i] && (t[i] = this[i]);
      },
      setup: function(t) {
        return dt = this, this.project = new kt(t), this;
      },
      createCanvas: function(t, e) {
        return Ft.getCanvas(t, e);
      },
      activate: function() {
        dt = this;
      },
      clear: function() {
        for (var t = this.projects, e = this.tools, i = t.length - 1; i >= 0; i--)
          t[i].remove();
        for (var i = e.length - 1; i >= 0; i--)
          e[i].remove();
      },
      remove: function() {
        this.clear(), delete jt._scopes[this._id];
      },
      statics: new function() {
        function t(e) {
          return e += "Attribute", function(i, r) {
            return i[e](r) || i[e]("data-paper-" + r);
          };
        }
        return {
          _scopes: {},
          _id: 0,
          get: function(e) {
            return this._scopes[e] || null;
          },
          getAttribute: t("get"),
          hasAttribute: t("has")
        };
      }()
    }), Gt = M.extend(ge, {
      initialize: function(t) {
        this._scope = dt, this._index = this._scope[this._list].push(this) - 1, (t || !this._scope[this._reference]) && this.activate();
      },
      activate: function() {
        if (!this._scope)
          return !1;
        var t = this._scope[this._reference];
        return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0;
      },
      isActive: function() {
        return this._scope[this._reference] === this;
      },
      remove: function() {
        return this._index == null ? !1 : (M.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0);
      },
      getView: function() {
        return this._scope.getView();
      }
    }), be = {
      findItemBoundsCollisions: function(t, e, i) {
        function r(h) {
          for (var o = new Array(h.length), l = 0; l < h.length; l++) {
            var f = h[l].getBounds();
            o[l] = [f.left, f.top, f.right, f.bottom];
          }
          return o;
        }
        var s = r(t), a = !e || e === t ? s : r(e);
        return this.findBoundsCollisions(s, a, i || 0);
      },
      findCurveBoundsCollisions: function(t, e, i, r) {
        function s(g) {
          for (var d = Math.min, w = Math.max, m = new Array(g.length), k = 0; k < g.length; k++) {
            var p = g[k];
            m[k] = [
              d(p[0], p[2], p[4], p[6]),
              d(p[1], p[3], p[5], p[7]),
              w(p[0], p[2], p[4], p[6]),
              w(p[1], p[3], p[5], p[7])
            ];
          }
          return m;
        }
        var a = s(t), h = !e || e === t ? a : s(e);
        if (r) {
          for (var o = this.findBoundsCollisions(
            a,
            h,
            i || 0,
            !1,
            !0
          ), l = this.findBoundsCollisions(
            a,
            h,
            i || 0,
            !0,
            !0
          ), f = [], _ = 0, v = o.length; _ < v; _++)
            f[_] = { hor: o[_], ver: l[_] };
          return f;
        }
        return this.findBoundsCollisions(a, h, i || 0);
      },
      findBoundsCollisions: function(t, e, i, r, s) {
        var a = !e || t === e, h = a ? t : t.concat(e), o = t.length, l = h.length;
        function f(et, rt, ht) {
          for (var X = 0, K = et.length; X < K; ) {
            var at = K + X >>> 1;
            h[et[at]][rt] < ht ? X = at + 1 : K = at;
          }
          return X - 1;
        }
        for (var _ = r ? 1 : 0, v = _ + 2, g = r ? 0 : 1, d = g + 2, w = new Array(l), m = 0; m < l; m++)
          w[m] = m;
        w.sort(function(et, rt) {
          return h[et][_] - h[rt][_];
        });
        for (var k = [], p = new Array(o), m = 0; m < l; m++) {
          var y = w[m], c = h[y], x = a ? y : y - o, C = y < o, P = a || !C, S = C ? [] : null;
          if (k.length) {
            var E = f(
              k,
              v,
              c[_] - i
            ) + 1;
            if (k.splice(0, E), a && s) {
              S = S.concat(k);
              for (var L = 0; L < k.length; L++) {
                var N = k[L];
                p[N].push(x);
              }
            } else
              for (var V = c[d], T = c[g], L = 0; L < k.length; L++) {
                var N = k[L], R = h[N], F = N < o, U = a || N >= o;
                (s || (C && U || P && F) && V >= R[g] - i && T <= R[d] + i) && (C && U && S.push(
                  a ? N : N - o
                ), P && F && p[N].push(x));
              }
          }
          if (C && (t === e && S.push(y), p[y] = S), k.length) {
            var q = c[v], j = f(k, v, q);
            k.splice(j + 1, 0, y);
          } else
            k.push(y);
        }
        for (var m = 0; m < p.length; m++) {
          var Q = p[m];
          Q && Q.sort(function(rt, ht) {
            return rt - ht;
          });
        }
        return p;
      }
    }, Ot = M.extend({
      initialize: function(t) {
        this.precision = M.pick(t, 5), this.multiplier = Math.pow(10, this.precision);
      },
      number: function(t) {
        return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t;
      },
      pair: function(t, e, i) {
        return this.number(t) + (i || ",") + this.number(e);
      },
      point: function(t, e) {
        return this.number(t.x) + (e || ",") + this.number(t.y);
      },
      size: function(t, e) {
        return this.number(t.width) + (e || ",") + this.number(t.height);
      },
      rectangle: function(t, e) {
        return this.point(t, e) + (e || ",") + this.size(t, e);
      }
    });
    Ot.instance = new Ot();
    var pt = new function() {
      var t = [
        [0.5773502691896257],
        [0, 0.7745966692414834],
        [0.33998104358485626, 0.8611363115940526],
        [0, 0.5384693101056831, 0.906179845938664],
        [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
        [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
        [0.1834346424956498, 0.525532409916329, 0.7966664774136267, 0.9602898564975363],
        [0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358, 0.9681602395076261],
        [0.14887433898163122, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717],
        [0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494, 0.8870625997680953, 0.978228658146057],
        [0.1252334085114689, 0.3678314989981802, 0.5873179542866175, 0.7699026741943047, 0.9041172563704749, 0.9815606342467192],
        [0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402, 0.8015780907333099, 0.9175983992229779, 0.9841830547185881],
        [0.10805494870734367, 0.31911236892788974, 0.5152486363581541, 0.6872929048116855, 0.827201315069765, 0.9284348836635735, 0.9862838086968123],
        [0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388, 0.7244177313601701, 0.8482065834104272, 0.937273392400706, 0.9879925180204854],
        [0.09501250983763744, 0.2816035507792589, 0.45801677765722737, 0.6178762444026438, 0.755404408355003, 0.8656312023878318, 0.9445750230732326, 0.9894009349916499]
      ], e = [
        [1],
        [0.8888888888888888, 0.5555555555555556],
        [0.6521451548625461, 0.34785484513745385],
        [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
        [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
        [0.4179591836734694, 0.3818300505051189, 0.27970539148927664, 0.1294849661688697],
        [0.362683783378362, 0.31370664587788727, 0.22238103445337448, 0.10122853629037626],
        [0.3302393550012598, 0.31234707704000286, 0.26061069640293544, 0.1806481606948574, 0.08127438836157441],
        [0.29552422471475287, 0.26926671930999635, 0.21908636251598204, 0.1494513491505806, 0.06667134430868814],
        [0.2729250867779006, 0.26280454451024665, 0.23319376459199048, 0.18629021092773426, 0.1255803694649046, 0.05566856711617366],
        [0.24914704581340277, 0.2334925365383548, 0.20316742672306592, 0.16007832854334622, 0.10693932599531843, 0.04717533638651183],
        [0.2325515532308739, 0.22628318026289723, 0.2078160475368885, 0.17814598076194574, 0.13887351021978725, 0.09212149983772845, 0.04048400476531588],
        [0.2152638534631578, 0.2051984637212956, 0.18553839747793782, 0.15720316715819355, 0.12151857068790319, 0.08015808715976021, 0.03511946033175186],
        [0.2025782419255613, 0.19843148532711158, 0.1861610000155622, 0.16626920581699392, 0.13957067792615432, 0.10715922046717194, 0.07036604748810812, 0.03075324199611727],
        [0.1894506104550685, 0.18260341504492358, 0.16915651939500254, 0.14959598881657674, 0.12462897125553388, 0.09515851168249279, 0.062253523938647894, 0.027152459411754096]
      ], i = Math.abs, r = Math.sqrt, s = Math.pow, a = Math.log2 || function(v) {
        return Math.log(v) * Math.LOG2E;
      }, h = 1e-12, o = 112e-18;
      function l(v, g, d) {
        return v < g ? g : v > d ? d : v;
      }
      function f(v, g, d) {
        function w(E) {
          var L = E * 134217729, N = E - L, V = N + L, T = E - V;
          return [V, T];
        }
        var m = g * g - v * d, k = g * g + v * d;
        if (i(m) * 3 < k) {
          var p = w(v), y = w(g), c = w(d), x = g * g, C = y[0] * y[0] - x + 2 * y[0] * y[1] + y[1] * y[1], P = v * d, S = p[0] * c[0] - P + p[0] * c[1] + p[1] * c[0] + p[1] * c[1];
          m = x - P + (C - S);
        }
        return m;
      }
      function _() {
        var v = Math.max.apply(Math, arguments);
        return v && (v < 1e-8 || v > 1e8) ? s(2, -Math.round(a(v))) : 0;
      }
      return {
        EPSILON: h,
        MACHINE_EPSILON: o,
        CURVETIME_EPSILON: 1e-8,
        GEOMETRIC_EPSILON: 1e-7,
        TRIGONOMETRIC_EPSILON: 1e-8,
        KAPPA: 4 * (r(2) - 1) / 3,
        isZero: function(v) {
          return v >= -h && v <= h;
        },
        isMachineZero: function(v) {
          return v >= -o && v <= o;
        },
        clamp: l,
        integrate: function(v, g, d, w) {
          for (var m = t[w - 2], k = e[w - 2], p = (d - g) * 0.5, y = p + g, c = 0, x = w + 1 >> 1, C = w & 1 ? k[c++] * v(y) : 0; c < x; ) {
            var P = p * m[c];
            C += k[c++] * (v(y + P) + v(y - P));
          }
          return p * C;
        },
        findRoot: function(v, g, d, w, m, k, p) {
          for (var y = 0; y < k; y++) {
            var c = v(d), x = c / g(d), C = d - x;
            if (i(x) < p) {
              d = C;
              break;
            }
            c > 0 ? (m = d, d = C <= w ? (w + m) * 0.5 : C) : (w = d, d = C >= m ? (w + m) * 0.5 : C);
          }
          return l(d, w, m);
        },
        solveQuadratic: function(v, g, d, w, m, k) {
          var p, y = 1 / 0;
          if (i(v) < h) {
            if (i(g) < h)
              return i(d) < h ? -1 : 0;
            p = -d / g;
          } else {
            g *= -0.5;
            var c = f(v, g, d);
            if (c && i(c) < o) {
              var x = _(i(v), i(g), i(d));
              x && (v *= x, g *= x, d *= x, c = f(v, g, d));
            }
            if (c >= -o) {
              var C = c < 0 ? 0 : r(c), P = g + (g < 0 ? -C : C);
              P === 0 ? (p = d / v, y = -p) : (p = P / v, y = d / P);
            }
          }
          var S = 0, E = m == null, L = m - h, N = k + h;
          return isFinite(p) && (E || p > L && p < N) && (w[S++] = E ? p : l(p, m, k)), y !== p && isFinite(y) && (E || y > L && y < N) && (w[S++] = E ? y : l(y, m, k)), S;
        },
        solveCubic: function(v, g, d, w, m, k, p) {
          var y = _(i(v), i(g), i(d), i(w)), c, x, C, P, S;
          y && (v *= y, g *= y, d *= y, w *= y);
          function E(j) {
            c = j;
            var Q = v * c;
            x = Q + g, C = x * c + d, P = (Q + x) * c + C, S = C * c + w;
          }
          if (i(v) < h)
            v = g, x = d, C = w, c = 1 / 0;
          else if (i(w) < h)
            x = g, C = d, c = 0;
          else {
            E(-(g / v) / 3);
            var L = S / v, N = s(i(L), 1 / 3), V = L < 0 ? -1 : 1, T = -P / v, R = T > 0 ? 1.324717957244746 * Math.max(N, r(T)) : N, F = c - V * R;
            if (F !== c) {
              do
                E(F), F = P === 0 ? c : c - S / P / (1 + o);
              while (V * F > V * c);
              i(v) * c * c > i(w / c) && (C = -w / c, x = (C - d) / c);
            }
          }
          var U = pt.solveQuadratic(v, x, C, m, k, p), q = k == null;
          return isFinite(c) && (U === 0 || U > 0 && c !== m[0] && c !== m[1]) && (q || c > k - h && c < p + h) && (m[U++] = q ? c : l(c, k, p)), U;
        }
      };
    }(), Bt = {
      _id: 1,
      _pools: {},
      get: function(t) {
        if (t) {
          var e = this._pools[t];
          return e || (e = this._pools[t] = { _id: 1 }), e._id++;
        } else
          return this._id++;
      }
    }, z = M.extend({
      _class: "Point",
      _readIndex: !0,
      initialize: function(e, i) {
        var r = typeof e, s = this.__read, a = 0;
        if (r === "number") {
          var h = typeof i == "number";
          this._set(e, h ? i : e), s && (a = h ? 2 : 1);
        } else if (r === "undefined" || e === null)
          this._set(0, 0), s && (a = e === null ? 1 : 0);
        else {
          var o = r === "string" ? e.split(/[\s,]+/) || [] : e;
          a = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "x" in o ? this._set(o.x || 0, o.y || 0) : "width" in o ? this._set(o.width || 0, o.height || 0) : "angle" in o ? (this._set(o.length || 0, 0), this.setAngle(o.angle || 0)) : (this._set(0, 0), a = 0);
        }
        return s && (this.__read = a), this;
      },
      set: "#initialize",
      _set: function(t, e) {
        return this.x = t, this.y = e, this;
      },
      equals: function(t) {
        return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1;
      },
      clone: function() {
        return new z(this.x, this.y);
      },
      toString: function() {
        var t = Ot.instance;
        return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }";
      },
      _serialize: function(t) {
        var e = t.formatter;
        return [e.number(this.x), e.number(this.y)];
      },
      getLength: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      setLength: function(t) {
        if (this.isZero()) {
          var e = this._angle || 0;
          this._set(
            Math.cos(e) * t,
            Math.sin(e) * t
          );
        } else {
          var i = t / this.getLength();
          pt.isZero(i) && this.getAngle(), this._set(
            this.x * i,
            this.y * i
          );
        }
      },
      getAngle: function() {
        return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI;
      },
      setAngle: function(t) {
        this.setAngleInRadians.call(this, t * Math.PI / 180);
      },
      getAngleInDegrees: "#getAngle",
      setAngleInDegrees: "#setAngle",
      getAngleInRadians: function() {
        if (arguments.length) {
          var t = z.read(arguments), e = this.getLength() * t.getLength();
          if (pt.isZero(e))
            return NaN;
          var i = this.dot(t) / e;
          return Math.acos(i < -1 ? -1 : i > 1 ? 1 : i);
        } else
          return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x);
      },
      setAngleInRadians: function(t) {
        if (this._angle = t, !this.isZero()) {
          var e = this.getLength();
          this._set(
            Math.cos(t) * e,
            Math.sin(t) * e
          );
        }
      },
      getQuadrant: function() {
        return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
      }
    }, {
      beans: !1,
      getDirectedAngle: function() {
        var t = z.read(arguments);
        return Math.atan2(this.cross(t), this.dot(t)) * 180 / Math.PI;
      },
      getDistance: function() {
        var t = arguments, e = z.read(t), i = e.x - this.x, r = e.y - this.y, s = i * i + r * r, a = M.read(t);
        return a ? s : Math.sqrt(s);
      },
      normalize: function(t) {
        t === W && (t = 1);
        var e = this.getLength(), i = e !== 0 ? t / e : 0, r = new z(this.x * i, this.y * i);
        return i >= 0 && (r._angle = this._angle), r;
      },
      rotate: function(t, e) {
        if (t === 0)
          return this.clone();
        t = t * Math.PI / 180;
        var i = e ? this.subtract(e) : this, r = Math.sin(t), s = Math.cos(t);
        return i = new z(
          i.x * s - i.y * r,
          i.x * r + i.y * s
        ), e ? i.add(e) : i;
      },
      transform: function(t) {
        return t ? t._transformPoint(this) : this;
      },
      add: function() {
        var t = z.read(arguments);
        return new z(this.x + t.x, this.y + t.y);
      },
      subtract: function() {
        var t = z.read(arguments);
        return new z(this.x - t.x, this.y - t.y);
      },
      multiply: function() {
        var t = z.read(arguments);
        return new z(this.x * t.x, this.y * t.y);
      },
      divide: function() {
        var t = z.read(arguments);
        return new z(this.x / t.x, this.y / t.y);
      },
      modulo: function() {
        var t = z.read(arguments);
        return new z(this.x % t.x, this.y % t.y);
      },
      negate: function() {
        return new z(-this.x, -this.y);
      },
      isInside: function() {
        return ot.read(arguments).contains(this);
      },
      isClose: function() {
        var t = arguments, e = z.read(t), i = M.read(t);
        return this.getDistance(e) <= i;
      },
      isCollinear: function() {
        var t = z.read(arguments);
        return z.isCollinear(this.x, this.y, t.x, t.y);
      },
      isColinear: "#isCollinear",
      isOrthogonal: function() {
        var t = z.read(arguments);
        return z.isOrthogonal(this.x, this.y, t.x, t.y);
      },
      isZero: function() {
        var t = pt.isZero;
        return t(this.x) && t(this.y);
      },
      isNaN: function() {
        return isNaN(this.x) || isNaN(this.y);
      },
      isInQuadrant: function(t) {
        return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0;
      },
      dot: function() {
        var t = z.read(arguments);
        return this.x * t.x + this.y * t.y;
      },
      cross: function() {
        var t = z.read(arguments);
        return this.x * t.y - this.y * t.x;
      },
      project: function() {
        var t = z.read(arguments), e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
        return new z(
          t.x * e,
          t.y * e
        );
      },
      statics: {
        min: function() {
          var t = arguments, e = z.read(t), i = z.read(t);
          return new z(
            Math.min(e.x, i.x),
            Math.min(e.y, i.y)
          );
        },
        max: function() {
          var t = arguments, e = z.read(t), i = z.read(t);
          return new z(
            Math.max(e.x, i.x),
            Math.max(e.y, i.y)
          );
        },
        random: function() {
          return new z(Math.random(), Math.random());
        },
        isCollinear: function(t, e, i, r) {
          return Math.abs(t * r - e * i) <= Math.sqrt((t * t + e * e) * (i * i + r * r)) * 1e-8;
        },
        isOrthogonal: function(t, e, i, r) {
          return Math.abs(t * i + e * r) <= Math.sqrt((t * t + e * e) * (i * i + r * r)) * 1e-8;
        }
      }
    }, M.each(["round", "ceil", "floor", "abs"], function(t) {
      var e = Math[t];
      this[t] = function() {
        return new z(e(this.x), e(this.y));
      };
    }, {})), Et = z.extend({
      initialize: function(e, i, r, s) {
        this._x = e, this._y = i, this._owner = r, this._setter = s;
      },
      _set: function(t, e, i) {
        return this._x = t, this._y = e, i || this._owner[this._setter](this), this;
      },
      getX: function() {
        return this._x;
      },
      setX: function(t) {
        this._x = t, this._owner[this._setter](this);
      },
      getY: function() {
        return this._y;
      },
      setY: function(t) {
        this._y = t, this._owner[this._setter](this);
      },
      isSelected: function() {
        return !!(this._owner._selection & this._getSelection());
      },
      setSelected: function(t) {
        this._owner._changeSelection(this._getSelection(), t);
      },
      _getSelection: function() {
        return this._setter === "setPosition" ? 4 : 0;
      }
    }), nt = M.extend({
      _class: "Size",
      _readIndex: !0,
      initialize: function(e, i) {
        var r = typeof e, s = this.__read, a = 0;
        if (r === "number") {
          var h = typeof i == "number";
          this._set(e, h ? i : e), s && (a = h ? 2 : 1);
        } else if (r === "undefined" || e === null)
          this._set(0, 0), s && (a = e === null ? 1 : 0);
        else {
          var o = r === "string" ? e.split(/[\s,]+/) || [] : e;
          a = 1, Array.isArray(o) ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0])) : "width" in o ? this._set(o.width || 0, o.height || 0) : "x" in o ? this._set(o.x || 0, o.y || 0) : (this._set(0, 0), a = 0);
        }
        return s && (this.__read = a), this;
      },
      set: "#initialize",
      _set: function(t, e) {
        return this.width = t, this.height = e, this;
      },
      equals: function(t) {
        return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1;
      },
      clone: function() {
        return new nt(this.width, this.height);
      },
      toString: function() {
        var t = Ot.instance;
        return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }";
      },
      _serialize: function(t) {
        var e = t.formatter;
        return [
          e.number(this.width),
          e.number(this.height)
        ];
      },
      add: function() {
        var t = nt.read(arguments);
        return new nt(this.width + t.width, this.height + t.height);
      },
      subtract: function() {
        var t = nt.read(arguments);
        return new nt(this.width - t.width, this.height - t.height);
      },
      multiply: function() {
        var t = nt.read(arguments);
        return new nt(this.width * t.width, this.height * t.height);
      },
      divide: function() {
        var t = nt.read(arguments);
        return new nt(this.width / t.width, this.height / t.height);
      },
      modulo: function() {
        var t = nt.read(arguments);
        return new nt(this.width % t.width, this.height % t.height);
      },
      negate: function() {
        return new nt(-this.width, -this.height);
      },
      isZero: function() {
        var t = pt.isZero;
        return t(this.width) && t(this.height);
      },
      isNaN: function() {
        return isNaN(this.width) || isNaN(this.height);
      },
      statics: {
        min: function(t, e) {
          return new nt(
            Math.min(t.width, e.width),
            Math.min(t.height, e.height)
          );
        },
        max: function(t, e) {
          return new nt(
            Math.max(t.width, e.width),
            Math.max(t.height, e.height)
          );
        },
        random: function() {
          return new nt(Math.random(), Math.random());
        }
      }
    }, M.each(["round", "ceil", "floor", "abs"], function(t) {
      var e = Math[t];
      this[t] = function() {
        return new nt(e(this.width), e(this.height));
      };
    }, {})), _t = nt.extend({
      initialize: function(e, i, r, s) {
        this._width = e, this._height = i, this._owner = r, this._setter = s;
      },
      _set: function(t, e, i) {
        return this._width = t, this._height = e, i || this._owner[this._setter](this), this;
      },
      getWidth: function() {
        return this._width;
      },
      setWidth: function(t) {
        this._width = t, this._owner[this._setter](this);
      },
      getHeight: function() {
        return this._height;
      },
      setHeight: function(t) {
        this._height = t, this._owner[this._setter](this);
      }
    }), ot = M.extend({
      _class: "Rectangle",
      _readIndex: !0,
      beans: !0,
      initialize: function(e, i, r, s) {
        var a = arguments, h = typeof e, o;
        if (h === "number" ? (this._set(e, i, r, s), o = 4) : h === "undefined" || e === null ? (this._set(0, 0, 0, 0), o = e === null ? 1 : 0) : a.length === 1 && (Array.isArray(e) ? (this._set.apply(this, e), o = 1) : e.x !== W || e.width !== W ? (this._set(
          e.x || 0,
          e.y || 0,
          e.width || 0,
          e.height || 0
        ), o = 1) : e.from === W && e.to === W && (this._set(0, 0, 0, 0), M.readSupported(a, this) && (o = 1))), o === W) {
          var l = z.readNamed(a, "from"), f = M.peek(a), _ = l.x, v = l.y, g, d;
          if (f && f.x !== W || M.hasNamed(a, "to")) {
            var w = z.readNamed(a, "to");
            g = w.x - _, d = w.y - v, g < 0 && (_ = w.x, g = -g), d < 0 && (v = w.y, d = -d);
          } else {
            var m = nt.read(a);
            g = m.width, d = m.height;
          }
          this._set(_, v, g, d), o = a.__index;
        }
        var k = a.__filtered;
        return k && (this.__filtered = k), this.__read && (this.__read = o), this;
      },
      set: "#initialize",
      _set: function(t, e, i, r) {
        return this.x = t, this.y = e, this.width = i, this.height = r, this;
      },
      clone: function() {
        return new ot(this.x, this.y, this.width, this.height);
      },
      equals: function(t) {
        var e = M.isPlainValue(t) ? ot.read(arguments) : t;
        return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1;
      },
      toString: function() {
        var t = Ot.instance;
        return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }";
      },
      _serialize: function(t) {
        var e = t.formatter;
        return [
          e.number(this.x),
          e.number(this.y),
          e.number(this.width),
          e.number(this.height)
        ];
      },
      getPoint: function(t) {
        var e = t ? z : Et;
        return new e(this.x, this.y, this, "setPoint");
      },
      setPoint: function() {
        var t = z.read(arguments);
        this.x = t.x, this.y = t.y;
      },
      getSize: function(t) {
        var e = t ? nt : _t;
        return new e(this.width, this.height, this, "setSize");
      },
      _fw: 1,
      _fh: 1,
      setSize: function() {
        var t = nt.read(arguments), e = this._sx, i = this._sy, r = t.width, s = t.height;
        e && (this.x += (this.width - r) * e), i && (this.y += (this.height - s) * i), this.width = r, this.height = s, this._fw = this._fh = 1;
      },
      getLeft: function() {
        return this.x;
      },
      setLeft: function(t) {
        if (!this._fw) {
          var e = t - this.x;
          this.width -= this._sx === 0.5 ? e * 2 : e;
        }
        this.x = t, this._sx = this._fw = 0;
      },
      getTop: function() {
        return this.y;
      },
      setTop: function(t) {
        if (!this._fh) {
          var e = t - this.y;
          this.height -= this._sy === 0.5 ? e * 2 : e;
        }
        this.y = t, this._sy = this._fh = 0;
      },
      getRight: function() {
        return this.x + this.width;
      },
      setRight: function(t) {
        if (!this._fw) {
          var e = t - this.x;
          this.width = this._sx === 0.5 ? e * 2 : e;
        }
        this.x = t - this.width, this._sx = 1, this._fw = 0;
      },
      getBottom: function() {
        return this.y + this.height;
      },
      setBottom: function(t) {
        if (!this._fh) {
          var e = t - this.y;
          this.height = this._sy === 0.5 ? e * 2 : e;
        }
        this.y = t - this.height, this._sy = 1, this._fh = 0;
      },
      getCenterX: function() {
        return this.x + this.width / 2;
      },
      setCenterX: function(t) {
        this._fw || this._sx === 0.5 ? this.x = t - this.width / 2 : (this._sx && (this.x += (t - this.x) * 2 * this._sx), this.width = (t - this.x) * 2), this._sx = 0.5, this._fw = 0;
      },
      getCenterY: function() {
        return this.y + this.height / 2;
      },
      setCenterY: function(t) {
        this._fh || this._sy === 0.5 ? this.y = t - this.height / 2 : (this._sy && (this.y += (t - this.y) * 2 * this._sy), this.height = (t - this.y) * 2), this._sy = 0.5, this._fh = 0;
      },
      getCenter: function(t) {
        var e = t ? z : Et;
        return new e(this.getCenterX(), this.getCenterY(), this, "setCenter");
      },
      setCenter: function() {
        var t = z.read(arguments);
        return this.setCenterX(t.x), this.setCenterY(t.y), this;
      },
      getArea: function() {
        return this.width * this.height;
      },
      isEmpty: function() {
        return this.width === 0 || this.height === 0;
      },
      contains: function(t) {
        return t && t.width !== W || (Array.isArray(t) ? t : arguments).length === 4 ? this._containsRectangle(ot.read(arguments)) : this._containsPoint(z.read(arguments));
      },
      _containsPoint: function(t) {
        var e = t.x, i = t.y;
        return e >= this.x && i >= this.y && e <= this.x + this.width && i <= this.y + this.height;
      },
      _containsRectangle: function(t) {
        var e = t.x, i = t.y;
        return e >= this.x && i >= this.y && e + t.width <= this.x + this.width && i + t.height <= this.y + this.height;
      },
      intersects: function() {
        var t = ot.read(arguments), e = M.read(arguments) || 0;
        return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e;
      },
      intersect: function() {
        var t = ot.read(arguments), e = Math.max(this.x, t.x), i = Math.max(this.y, t.y), r = Math.min(this.x + this.width, t.x + t.width), s = Math.min(this.y + this.height, t.y + t.height);
        return new ot(e, i, r - e, s - i);
      },
      unite: function() {
        var t = ot.read(arguments), e = Math.min(this.x, t.x), i = Math.min(this.y, t.y), r = Math.max(this.x + this.width, t.x + t.width), s = Math.max(this.y + this.height, t.y + t.height);
        return new ot(e, i, r - e, s - i);
      },
      include: function() {
        var t = z.read(arguments), e = Math.min(this.x, t.x), i = Math.min(this.y, t.y), r = Math.max(this.x + this.width, t.x), s = Math.max(this.y + this.height, t.y);
        return new ot(e, i, r - e, s - i);
      },
      expand: function() {
        var t = nt.read(arguments), e = t.width, i = t.height;
        return new ot(
          this.x - e / 2,
          this.y - i / 2,
          this.width + e,
          this.height + i
        );
      },
      scale: function(t, e) {
        return this.expand(
          this.width * t - this.width,
          this.height * (e === W ? t : e) - this.height
        );
      }
    }, M.each(
      [
        ["Top", "Left"],
        ["Top", "Right"],
        ["Bottom", "Left"],
        ["Bottom", "Right"],
        ["Left", "Center"],
        ["Top", "Center"],
        ["Right", "Center"],
        ["Bottom", "Center"]
      ],
      function(t, e) {
        var i = t.join(""), r = /^[RL]/.test(i);
        e >= 4 && (t[1] += r ? "Y" : "X");
        var s = t[r ? 0 : 1], a = t[r ? 1 : 0], h = "get" + s, o = "get" + a, l = "set" + s, f = "set" + a, _ = "get" + i, v = "set" + i;
        this[_] = function(g) {
          var d = g ? z : Et;
          return new d(this[h](), this[o](), this, v);
        }, this[v] = function() {
          var g = z.read(arguments);
          this[l](g.x), this[f](g.y);
        };
      },
      {
        beans: !0
      }
    )), re = ot.extend(
      {
        initialize: function(e, i, r, s, a, h) {
          this._set(e, i, r, s, !0), this._owner = a, this._setter = h;
        },
        _set: function(t, e, i, r, s) {
          return this._x = t, this._y = e, this._width = i, this._height = r, s || this._owner[this._setter](this), this;
        }
      },
      new function() {
        var t = ot.prototype;
        return M.each(
          ["x", "y", "width", "height"],
          function(e) {
            var i = M.capitalize(e), r = "_" + e;
            this["get" + i] = function() {
              return this[r];
            }, this["set" + i] = function(s) {
              this[r] = s, this._dontNotify || this._owner[this._setter](this);
            };
          },
          M.each(
            [
              "Point",
              "Size",
              "Center",
              "Left",
              "Top",
              "Right",
              "Bottom",
              "CenterX",
              "CenterY",
              "TopLeft",
              "TopRight",
              "BottomLeft",
              "BottomRight",
              "LeftCenter",
              "TopCenter",
              "RightCenter",
              "BottomCenter"
            ],
            function(e) {
              var i = "set" + e;
              this[i] = function() {
                this._dontNotify = !0, t[i].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this);
              };
            },
            {
              isSelected: function() {
                return !!(this._owner._selection & 2);
              },
              setSelected: function(e) {
                var i = this._owner;
                i._changeSelection && i._changeSelection(2, e);
              }
            }
          )
        );
      }()
    ), At = M.extend({
      _class: "Matrix",
      initialize: function t(e, i) {
        var r = arguments, s = r.length, a = !0;
        if (s >= 6 ? this._set.apply(this, r) : s === 1 || s === 2 ? e instanceof t ? this._set(
          e._a,
          e._b,
          e._c,
          e._d,
          e._tx,
          e._ty,
          i
        ) : Array.isArray(e) ? this._set.apply(
          this,
          i ? e.concat([i]) : e
        ) : a = !1 : s ? a = !1 : this.reset(), !a)
          throw new Error("Unsupported matrix parameters");
        return this;
      },
      set: "#initialize",
      _set: function(t, e, i, r, s, a, h) {
        return this._a = t, this._b = e, this._c = i, this._d = r, this._tx = s, this._ty = a, h || this._changed(), this;
      },
      _serialize: function(t, e) {
        return M.serialize(this.getValues(), t, !0, e);
      },
      _changed: function() {
        var t = this._owner;
        t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25));
      },
      clone: function() {
        return new At(
          this._a,
          this._b,
          this._c,
          this._d,
          this._tx,
          this._ty
        );
      },
      equals: function(t) {
        return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty;
      },
      toString: function() {
        var t = Ot.instance;
        return "[[" + [
          t.number(this._a),
          t.number(this._c),
          t.number(this._tx)
        ].join(", ") + "], [" + [
          t.number(this._b),
          t.number(this._d),
          t.number(this._ty)
        ].join(", ") + "]]";
      },
      reset: function(t) {
        return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this;
      },
      apply: function(t, e) {
        var i = this._owner;
        return i ? (i.transform(null, M.pick(t, !0), e), this.isIdentity()) : !1;
      },
      translate: function() {
        var t = z.read(arguments), e = t.x, i = t.y;
        return this._tx += e * this._a + i * this._c, this._ty += e * this._b + i * this._d, this._changed(), this;
      },
      scale: function() {
        var t = arguments, e = z.read(t), i = z.read(t, 0, { readNull: !0 });
        return i && this.translate(i), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, i && this.translate(i.negate()), this._changed(), this;
      },
      rotate: function(t) {
        t *= Math.PI / 180;
        var e = z.read(arguments, 1), i = e.x, r = e.y, s = Math.cos(t), a = Math.sin(t), h = i - i * s + r * a, o = r - i * a - r * s, l = this._a, f = this._b, _ = this._c, v = this._d;
        return this._a = s * l + a * _, this._b = s * f + a * v, this._c = -a * l + s * _, this._d = -a * f + s * v, this._tx += h * l + o * _, this._ty += h * f + o * v, this._changed(), this;
      },
      shear: function() {
        var t = arguments, e = z.read(t), i = z.read(t, 0, { readNull: !0 });
        i && this.translate(i);
        var r = this._a, s = this._b;
        return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * r, this._d += e.x * s, i && this.translate(i.negate()), this._changed(), this;
      },
      skew: function() {
        var t = arguments, e = z.read(t), i = z.read(t, 0, { readNull: !0 }), r = Math.PI / 180, s = new z(
          Math.tan(e.x * r),
          Math.tan(e.y * r)
        );
        return this.shear(s, i);
      },
      append: function(t, e) {
        if (t) {
          var i = this._a, r = this._b, s = this._c, a = this._d, h = t._a, o = t._c, l = t._b, f = t._d, _ = t._tx, v = t._ty;
          this._a = h * i + l * s, this._c = o * i + f * s, this._b = h * r + l * a, this._d = o * r + f * a, this._tx += _ * i + v * s, this._ty += _ * r + v * a, e || this._changed();
        }
        return this;
      },
      prepend: function(t, e) {
        if (t) {
          var i = this._a, r = this._b, s = this._c, a = this._d, h = this._tx, o = this._ty, l = t._a, f = t._c, _ = t._b, v = t._d, g = t._tx, d = t._ty;
          this._a = l * i + f * r, this._c = l * s + f * a, this._b = _ * i + v * r, this._d = _ * s + v * a, this._tx = l * h + f * o + g, this._ty = _ * h + v * o + d, e || this._changed();
        }
        return this;
      },
      appended: function(t) {
        return this.clone().append(t);
      },
      prepended: function(t) {
        return this.clone().prepend(t);
      },
      invert: function() {
        var t = this._a, e = this._b, i = this._c, r = this._d, s = this._tx, a = this._ty, h = t * r - e * i, o = null;
        return h && !isNaN(h) && isFinite(s) && isFinite(a) && (this._a = r / h, this._b = -e / h, this._c = -i / h, this._d = t / h, this._tx = (i * a - r * s) / h, this._ty = (e * s - t * a) / h, o = this), o;
      },
      inverted: function() {
        return this.clone().invert();
      },
      concatenate: "#append",
      preConcatenate: "#prepend",
      chain: "#appended",
      _shiftless: function() {
        return new At(this._a, this._b, this._c, this._d, 0, 0);
      },
      _orNullIfIdentity: function() {
        return this.isIdentity() ? null : this;
      },
      isIdentity: function() {
        return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1 && this._tx === 0 && this._ty === 0;
      },
      isInvertible: function() {
        var t = this._a * this._d - this._c * this._b;
        return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty);
      },
      isSingular: function() {
        return !this.isInvertible();
      },
      transform: function(t, e, i) {
        return arguments.length < 3 ? this._transformPoint(z.read(arguments)) : this._transformCoordinates(t, e, i);
      },
      _transformPoint: function(t, e, i) {
        var r = t.x, s = t.y;
        return e || (e = new z()), e._set(
          r * this._a + s * this._c + this._tx,
          r * this._b + s * this._d + this._ty,
          i
        );
      },
      _transformCoordinates: function(t, e, i) {
        for (var r = 0, s = 2 * i; r < s; r += 2) {
          var a = t[r], h = t[r + 1];
          e[r] = a * this._a + h * this._c + this._tx, e[r + 1] = a * this._b + h * this._d + this._ty;
        }
        return e;
      },
      _transformCorners: function(t) {
        var e = t.x, i = t.y, r = e + t.width, s = i + t.height, a = [e, i, r, i, r, s, e, s];
        return this._transformCoordinates(a, a, 4);
      },
      _transformBounds: function(t, e, i) {
        for (var r = this._transformCorners(t), s = r.slice(0, 2), a = s.slice(), h = 2; h < 8; h++) {
          var o = r[h], l = h & 1;
          o < s[l] ? s[l] = o : o > a[l] && (a[l] = o);
        }
        return e || (e = new ot()), e._set(
          s[0],
          s[1],
          a[0] - s[0],
          a[1] - s[1],
          i
        );
      },
      inverseTransform: function() {
        return this._inverseTransform(z.read(arguments));
      },
      _inverseTransform: function(t, e, i) {
        var r = this._a, s = this._b, a = this._c, h = this._d, o = this._tx, l = this._ty, f = r * h - s * a, _ = null;
        if (f && !isNaN(f) && isFinite(o) && isFinite(l)) {
          var v = t.x - this._tx, g = t.y - this._ty;
          e || (e = new z()), _ = e._set(
            (v * h - g * a) / f,
            (g * r - v * s) / f,
            i
          );
        }
        return _;
      },
      decompose: function() {
        var t = this._a, e = this._b, i = this._c, r = this._d, s = t * r - e * i, a = Math.sqrt, h = Math.atan2, o = 180 / Math.PI, l, f, _;
        if (t !== 0 || e !== 0) {
          var v = a(t * t + e * e);
          l = Math.acos(t / v) * (e > 0 ? 1 : -1), f = [v, s / v], _ = [h(t * i + e * r, v * v), 0];
        } else if (i !== 0 || r !== 0) {
          var g = a(i * i + r * r);
          l = Math.asin(i / g) * (r > 0 ? 1 : -1), f = [s / g, g], _ = [0, h(t * i + e * r, g * g)];
        } else
          l = 0, _ = f = [0, 0];
        return {
          translation: this.getTranslation(),
          rotation: l * o,
          scaling: new z(f),
          skewing: new z(_[0] * o, _[1] * o)
        };
      },
      getValues: function() {
        return [this._a, this._b, this._c, this._d, this._tx, this._ty];
      },
      getTranslation: function() {
        return new z(this._tx, this._ty);
      },
      getScaling: function() {
        return this.decompose().scaling;
      },
      getRotation: function() {
        return this.decompose().rotation;
      },
      applyToContext: function(t) {
        this.isIdentity() || t.transform(
          this._a,
          this._b,
          this._c,
          this._d,
          this._tx,
          this._ty
        );
      }
    }, M.each(["a", "b", "c", "d", "tx", "ty"], function(t) {
      var e = M.capitalize(t), i = "_" + t;
      this["get" + e] = function() {
        return this[i];
      }, this["set" + e] = function(r) {
        this[i] = r, this._changed();
      };
    }, {})), Rt = M.extend({
      _class: "Line",
      initialize: function(e, i, r, s, a) {
        var h = !1;
        arguments.length >= 4 ? (this._px = e, this._py = i, this._vx = r, this._vy = s, h = a) : (this._px = e.x, this._py = e.y, this._vx = i.x, this._vy = i.y, h = r), h || (this._vx -= this._px, this._vy -= this._py);
      },
      getPoint: function() {
        return new z(this._px, this._py);
      },
      getVector: function() {
        return new z(this._vx, this._vy);
      },
      getLength: function() {
        return this.getVector().getLength();
      },
      intersect: function(t, e) {
        return Rt.intersect(
          this._px,
          this._py,
          this._vx,
          this._vy,
          t._px,
          t._py,
          t._vx,
          t._vy,
          !0,
          e
        );
      },
      getSide: function(t, e) {
        return Rt.getSide(
          this._px,
          this._py,
          this._vx,
          this._vy,
          t.x,
          t.y,
          !0,
          e
        );
      },
      getDistance: function(t) {
        return Math.abs(this.getSignedDistance(t));
      },
      getSignedDistance: function(t) {
        return Rt.getSignedDistance(
          this._px,
          this._py,
          this._vx,
          this._vy,
          t.x,
          t.y,
          !0
        );
      },
      isCollinear: function(t) {
        return z.isCollinear(this._vx, this._vy, t._vx, t._vy);
      },
      isOrthogonal: function(t) {
        return z.isOrthogonal(this._vx, this._vy, t._vx, t._vy);
      },
      statics: {
        intersect: function(t, e, i, r, s, a, h, o, l, f) {
          l || (i -= t, r -= e, h -= s, o -= a);
          var _ = i * o - r * h;
          if (!pt.isMachineZero(_)) {
            var v = t - s, g = e - a, d = (h * g - o * v) / _, w = (i * g - r * v) / _, m = 1e-12, k = -m, p = 1 + m;
            if (f || k < d && d < p && k < w && w < p)
              return f || (d = d <= 0 ? 0 : d >= 1 ? 1 : d), new z(
                t + d * i,
                e + d * r
              );
          }
        },
        getSide: function(t, e, i, r, s, a, h, o) {
          h || (i -= t, r -= e);
          var l = s - t, f = a - e, _ = l * r - f * i;
          return !o && pt.isMachineZero(_) && (_ = (l * i + l * i) / (i * i + r * r), _ >= 0 && _ <= 1 && (_ = 0)), _ < 0 ? -1 : _ > 0 ? 1 : 0;
        },
        getSignedDistance: function(t, e, i, r, s, a, h) {
          return h || (i -= t, r -= e), i === 0 ? r > 0 ? s - t : t - s : r === 0 ? i < 0 ? a - e : e - a : ((s - t) * r - (a - e) * i) / (r > i ? r * Math.sqrt(1 + i * i / (r * r)) : i * Math.sqrt(1 + r * r / (i * i)));
        },
        getDistance: function(t, e, i, r, s, a, h) {
          return Math.abs(
            Rt.getSignedDistance(t, e, i, r, s, a, h)
          );
        }
      }
    }), kt = Gt.extend({
      _class: "Project",
      _list: "projects",
      _reference: "project",
      _compactSerialize: !0,
      initialize: function(e) {
        Gt.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new Re(null, null, this), this._view = qt.create(
          this,
          e || Ft.getCanvas(1, 1)
        ), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0;
      },
      _serialize: function(t, e) {
        return M.serialize(this._children, t, !0, e);
      },
      _changed: function(t, e) {
        if (t & 1) {
          var i = this._view;
          i && (i._needsUpdate = !0, !i._requested && i._autoUpdate && i.requestUpdate());
        }
        var r = this._changes;
        if (r && e) {
          var s = this._changesById, a = e._id, h = s[a];
          h ? h.flags |= t : r.push(s[a] = { item: e, flags: t });
        }
      },
      clear: function() {
        for (var t = this._children, e = t.length - 1; e >= 0; e--)
          t[e].remove();
      },
      isEmpty: function() {
        return !this._children.length;
      },
      remove: function t() {
        return t.base.call(this) ? (this._view && this._view.remove(), !0) : !1;
      },
      getView: function() {
        return this._view;
      },
      getCurrentStyle: function() {
        return this._currentStyle;
      },
      setCurrentStyle: function(t) {
        this._currentStyle.set(t);
      },
      getIndex: function() {
        return this._index;
      },
      getOptions: function() {
        return this._scope.settings;
      },
      getLayers: function() {
        return this._children;
      },
      getActiveLayer: function() {
        return this._activeLayer || new Te({ project: this, insert: !0 });
      },
      getSymbolDefinitions: function() {
        var t = [], e = {};
        return this.getItems({
          class: We,
          match: function(i) {
            var r = i._definition, s = r._id;
            return e[s] || (e[s] = !0, t.push(r)), !1;
          }
        }), t;
      },
      getSymbols: "getSymbolDefinitions",
      getSelectedItems: function() {
        var t = this._selectionItems, e = [];
        for (var i in t) {
          var r = t[i], s = r._selection;
          s & 1 && r.isInserted() ? e.push(r) : s || this._updateSelection(r);
        }
        return e;
      },
      _updateSelection: function(t) {
        var e = t._id, i = this._selectionItems;
        t._selection ? i[e] !== t && (this._selectionCount++, i[e] = t) : i[e] === t && (this._selectionCount--, delete i[e]);
      },
      selectAll: function() {
        for (var t = this._children, e = 0, i = t.length; e < i; e++)
          t[e].setFullySelected(!0);
      },
      deselectAll: function() {
        var t = this._selectionItems;
        for (var e in t)
          t[e].setFullySelected(!1);
      },
      addLayer: function(t) {
        return this.insertLayer(W, t);
      },
      insertLayer: function(t, e) {
        if (e instanceof Te) {
          e._remove(!1, !0), M.splice(this._children, [e], t, 0), e._setProject(this, !0);
          var i = e._name;
          i && e.setName(i), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e);
        } else
          e = null;
        return e;
      },
      _insertItem: function(t, e, i) {
        return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(
          W,
          new Te(I.NO_INSERT),
          !0
        )).insertChild(t, e), i && e.activate && e.activate(), e;
      },
      getItems: function(t) {
        return I._getItems(this, t);
      },
      getItem: function(t) {
        return I._getItems(this, t, null, null, !0)[0] || null;
      },
      importJSON: function(t) {
        this.activate();
        var e = this._activeLayer;
        return M.importJSON(t, e && e.isEmpty() && e);
      },
      removeOn: function(t) {
        var e = this._removeSets;
        if (e) {
          t === "mouseup" && (e.mousedrag = null);
          var i = e[t];
          if (i) {
            for (var r in i) {
              var s = i[r];
              for (var a in e) {
                var h = e[a];
                h && h != i && delete h[s._id];
              }
              s.remove();
            }
            e[t] = null;
          }
        }
      },
      draw: function(t, e, i) {
        this._updateVersion++, t.save(), e.applyToContext(t);
        for (var r = this._children, s = new M({
          offset: new z(0, 0),
          pixelRatio: i,
          viewMatrix: e.isIdentity() ? null : e,
          matrices: [new At()],
          updateMatrix: !0
        }), a = 0, h = r.length; a < h; a++)
          r[a].draw(t, s);
        if (t.restore(), this._selectionCount > 0) {
          t.save(), t.strokeWidth = 1;
          var o = this._selectionItems, l = this._scope.settings.handleSize, f = this._updateVersion;
          for (var _ in o)
            o[_]._drawSelection(t, e, l, o, f);
          t.restore();
        }
      }
    }), I = M.extend(
      ge,
      {
        statics: {
          extend: function t(e) {
            return e._serializeFields && (e._serializeFields = M.set(
              {},
              this.prototype._serializeFields,
              e._serializeFields
            )), t.base.apply(this, arguments);
          },
          NO_INSERT: { insert: !1 }
        },
        _class: "Item",
        _name: null,
        _applyMatrix: !0,
        _canApplyMatrix: !0,
        _canScaleStroke: !1,
        _pivot: null,
        _visible: !0,
        _blendMode: "normal",
        _opacity: 1,
        _locked: !1,
        _guide: !1,
        _clipMask: !1,
        _selection: 0,
        _selectBounds: !0,
        _selectChildren: !1,
        _serializeFields: {
          name: null,
          applyMatrix: null,
          matrix: new At(),
          pivot: null,
          visible: !0,
          blendMode: "normal",
          opacity: 1,
          locked: !1,
          guide: !1,
          clipMask: !1,
          selected: !1,
          data: {}
        },
        _prioritize: ["applyMatrix"]
      },
      new function() {
        var t = [
          "onMouseDown",
          "onMouseUp",
          "onMouseDrag",
          "onClick",
          "onDoubleClick",
          "onMouseMove",
          "onMouseEnter",
          "onMouseLeave"
        ];
        return M.each(
          t,
          function(e) {
            this._events[e] = {
              install: function(i) {
                this.getView()._countItemEvent(i, 1);
              },
              uninstall: function(i) {
                this.getView()._countItemEvent(i, -1);
              }
            };
          },
          {
            _events: {
              onFrame: {
                install: function() {
                  this.getView()._animateItem(this, !0);
                },
                uninstall: function() {
                  this.getView()._animateItem(this, !1);
                }
              },
              onLoad: {},
              onError: {}
            },
            statics: {
              _itemHandlers: t
            }
          }
        );
      }(),
      {
        initialize: function() {
        },
        _initialize: function(t, e) {
          var i = t && M.isPlainObject(t), r = i && t.internal === !0, s = this._matrix = new At(), a = i && t.project || dt.project, h = dt.settings;
          return this._id = r ? null : Bt.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && h.applyMatrix, e && s.translate(e), s._owner = this, this._style = new Re(a._currentStyle, this, a), r || i && t.insert == !1 || !h.insertItems && !(i && t.insert === !0) ? this._setProject(a) : (i && t.parent || a)._insertItem(W, this, !0), i && t !== I.NO_INSERT && this.set(t, {
            internal: !0,
            insert: !0,
            project: !0,
            parent: !0
          }), i;
        },
        _serialize: function(t, e) {
          var i = {}, r = this;
          function s(a) {
            for (var h in a) {
              var o = r[h];
              M.equals(o, h === "leading" ? a.fontSize * 1.2 : a[h]) || (i[h] = M.serialize(
                o,
                t,
                h !== "data",
                e
              ));
            }
          }
          return s(this._serializeFields), this instanceof zt || s(this._style._defaults), [this._class, i];
        },
        _changed: function(t) {
          var e = this._symbol, i = this._parent || e, r = this._project;
          t & 8 && (this._bounds = this._position = this._decomposed = W), t & 16 && (this._globalMatrix = W), i && t & 72 && I._clearBoundsCache(i), t & 2 && I._clearBoundsCache(this), r && r._changed(t, this), e && e._changed(t);
        },
        getId: function() {
          return this._id;
        },
        getName: function() {
          return this._name;
        },
        setName: function(t) {
          if (this._name && this._removeNamed(), t === +t + "")
            throw new Error(
              "Names consisting only of numbers are not supported."
            );
          var e = this._getOwner();
          if (t && e) {
            var i = e._children, r = e._namedChildren;
            (r[t] = r[t] || []).push(this), t in i || (i[t] = this);
          }
          this._name = t || W, this._changed(256);
        },
        getStyle: function() {
          return this._style;
        },
        setStyle: function(t) {
          this.getStyle().set(t);
        }
      },
      M.each(
        ["locked", "visible", "blendMode", "opacity", "guide"],
        function(t) {
          var e = M.capitalize(t), i = "_" + t, r = {
            locked: 256,
            visible: 265
          };
          this["get" + e] = function() {
            return this[i];
          }, this["set" + e] = function(s) {
            s != this[i] && (this[i] = s, this._changed(r[t] || 257));
          };
        },
        {}
      ),
      {
        beans: !0,
        getSelection: function() {
          return this._selection;
        },
        setSelection: function(t) {
          if (t !== this._selection) {
            this._selection = t;
            var e = this._project;
            e && (e._updateSelection(this), this._changed(257));
          }
        },
        _changeSelection: function(t, e) {
          var i = this._selection;
          this.setSelection(e ? i | t : i & ~t);
        },
        isSelected: function() {
          if (this._selectChildren) {
            for (var t = this._children, e = 0, i = t.length; e < i; e++)
              if (t[e].isSelected())
                return !0;
          }
          return !!(this._selection & 1);
        },
        setSelected: function(t) {
          if (this._selectChildren)
            for (var e = this._children, i = 0, r = e.length; i < r; i++)
              e[i].setSelected(t);
          this._changeSelection(1, t);
        },
        isFullySelected: function() {
          var t = this._children, e = !!(this._selection & 1);
          if (t && e) {
            for (var i = 0, r = t.length; i < r; i++)
              if (!t[i].isFullySelected())
                return !1;
            return !0;
          }
          return e;
        },
        setFullySelected: function(t) {
          var e = this._children;
          if (e)
            for (var i = 0, r = e.length; i < r; i++)
              e[i].setFullySelected(t);
          this._changeSelection(1, t);
        },
        isClipMask: function() {
          return this._clipMask;
        },
        setClipMask: function(t) {
          this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048));
        },
        getData: function() {
          return this._data || (this._data = {}), this._data;
        },
        setData: function(t) {
          this._data = t;
        },
        getPosition: function(t) {
          var e = t ? z : Et, i = this._position || (this._position = this._getPositionFromBounds());
          return new e(i.x, i.y, this, "setPosition");
        },
        setPosition: function() {
          this.translate(z.read(arguments).subtract(this.getPosition(!0)));
        },
        _getPositionFromBounds: function(t) {
          return this._pivot ? this._matrix._transformPoint(this._pivot) : (t || this.getBounds()).getCenter(!0);
        },
        getPivot: function() {
          var t = this._pivot;
          return t ? new Et(t.x, t.y, this, "setPivot") : null;
        },
        setPivot: function() {
          this._pivot = z.read(arguments, 0, { clone: !0, readNull: !0 }), this._position = W;
        }
      },
      M.each(
        {
          getStrokeBounds: { stroke: !0 },
          getHandleBounds: { handle: !0 },
          getInternalBounds: { internal: !0 }
        },
        function(t, e) {
          this[e] = function(i) {
            return this.getBounds(i, t);
          };
        },
        {
          beans: !0,
          getBounds: function(t, e) {
            var i = e || t instanceof At, r = M.set(
              {},
              i ? e : t,
              this._boundsOptions
            );
            (!r.stroke || this.getStrokeScaling()) && (r.cacheItem = this);
            var s = this._getCachedBounds(i && t, r).rect;
            return arguments.length ? s : new re(
              s.x,
              s.y,
              s.width,
              s.height,
              this,
              "setBounds"
            );
          },
          setBounds: function() {
            var t = ot.read(arguments), e = this.getBounds(), i = this._matrix, r = new At(), s = t.getCenter();
            r.translate(s), (t.width != e.width || t.height != e.height) && (i.isInvertible() || (i.set(i._backup || new At().translate(i.getTranslation())), e = this.getBounds()), r.scale(
              e.width !== 0 ? t.width / e.width : 0,
              e.height !== 0 ? t.height / e.height : 0
            )), s = e.getCenter(), r.translate(-s.x, -s.y), this.transform(r);
          },
          _getBounds: function(t, e) {
            var i = this._children;
            return !i || !i.length ? new ot() : (I._updateBoundsCache(this, e.cacheItem), I._getBounds(i, t, e));
          },
          _getBoundsCacheKey: function(t, e) {
            return [
              t.stroke ? 1 : 0,
              t.handle ? 1 : 0,
              e ? 1 : 0
            ].join("");
          },
          _getCachedBounds: function(t, e, i) {
            t = t && t._orNullIfIdentity();
            var r = e.internal && !i, s = e.cacheItem, a = r ? null : this._matrix._orNullIfIdentity(), h = s && (!t || t.equals(a)) && this._getBoundsCacheKey(e, r), o = this._bounds;
            if (I._updateBoundsCache(this._parent || this._symbol, s), h && o && h in o) {
              var l = o[h];
              return {
                rect: l.rect.clone(),
                nonscaling: l.nonscaling
              };
            }
            var f = this._getBounds(t || a, e), _ = f.rect || f, v = this._style, g = f.nonscaling || v.hasStroke() && !v.getStrokeScaling();
            if (h) {
              o || (this._bounds = o = {});
              var l = o[h] = {
                rect: _.clone(),
                nonscaling: g,
                internal: r
              };
            }
            return {
              rect: _,
              nonscaling: g
            };
          },
          _getStrokeMatrix: function(t, e) {
            var i = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item, r = i ? i.getViewMatrix().invert() : t;
            return r && r._shiftless();
          },
          statics: {
            _updateBoundsCache: function(t, e) {
              if (t && e) {
                var i = e._id, r = t._boundsCache = t._boundsCache || {
                  ids: {},
                  list: []
                };
                r.ids[i] || (r.list.push(e), r.ids[i] = e);
              }
            },
            _clearBoundsCache: function(t) {
              var e = t._boundsCache;
              if (e) {
                t._bounds = t._position = t._boundsCache = W;
                for (var i = 0, r = e.list, s = r.length; i < s; i++) {
                  var a = r[i];
                  a !== t && (a._bounds = a._position = W, a._boundsCache && I._clearBoundsCache(a));
                }
              }
            },
            _getBounds: function(t, e, i) {
              var r = 1 / 0, s = -r, a = r, h = s, o = !1;
              i = i || {};
              for (var l = 0, f = t.length; l < f; l++) {
                var _ = t[l];
                if (_._visible && !_.isEmpty(!0)) {
                  var v = _._getCachedBounds(
                    e && e.appended(_._matrix),
                    i,
                    !0
                  ), g = v.rect;
                  r = Math.min(g.x, r), a = Math.min(g.y, a), s = Math.max(g.x + g.width, s), h = Math.max(g.y + g.height, h), v.nonscaling && (o = !0);
                }
              }
              return {
                rect: isFinite(r) ? new ot(r, a, s - r, h - a) : new ot(),
                nonscaling: o
              };
            }
          }
        }
      ),
      {
        beans: !0,
        _decompose: function() {
          return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose());
        },
        getRotation: function() {
          var t = this._decompose();
          return t ? t.rotation : 0;
        },
        setRotation: function(t) {
          var e = this.getRotation();
          if (e != null && t != null) {
            var i = this._decomposed;
            this.rotate(t - e), i && (i.rotation = t, this._decomposed = i);
          }
        },
        getScaling: function() {
          var t = this._decompose(), e = t && t.scaling;
          return new Et(e ? e.x : 1, e ? e.y : 1, this, "setScaling");
        },
        setScaling: function() {
          var t = this.getScaling(), e = z.read(arguments, 0, { clone: !0, readNull: !0 });
          if (t && e && !t.equals(e)) {
            var i = this.getRotation(), r = this._decomposed, s = new At(), a = pt.isZero;
            if (a(t.x) || a(t.y))
              s.translate(r.translation), i && s.rotate(i), s.scale(e.x, e.y), this._matrix.set(s);
            else {
              var h = this.getPosition(!0);
              s.translate(h), i && s.rotate(i), s.scale(e.x / t.x, e.y / t.y), i && s.rotate(-i), s.translate(h.negate()), this.transform(s);
            }
            r && (r.scaling = e, this._decomposed = r);
          }
        },
        getMatrix: function() {
          return this._matrix;
        },
        setMatrix: function() {
          var t = this._matrix;
          t.set.apply(t, arguments);
        },
        getGlobalMatrix: function(t) {
          var e = this._globalMatrix;
          if (e)
            for (var i = this._parent, r = []; i; ) {
              if (!i._globalMatrix) {
                e = null;
                for (var s = 0, a = r.length; s < a; s++)
                  r[s]._globalMatrix = null;
                break;
              }
              r.push(i), i = i._parent;
            }
          if (!e) {
            e = this._globalMatrix = this._matrix.clone();
            var i = this._parent;
            i && e.prepend(i.getGlobalMatrix(!0));
          }
          return t ? e : e.clone();
        },
        getViewMatrix: function() {
          return this.getGlobalMatrix().prepend(this.getView()._matrix);
        },
        getApplyMatrix: function() {
          return this._applyMatrix;
        },
        setApplyMatrix: function(t) {
          (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0);
        },
        getTransformContent: "#getApplyMatrix",
        setTransformContent: "#setApplyMatrix"
      },
      {
        getProject: function() {
          return this._project;
        },
        _setProject: function(t, e) {
          if (this._project !== t) {
            this._project && this._installEvents(!1), this._project = t;
            for (var i = this._children, r = 0, s = i && i.length; r < s; r++)
              i[r]._setProject(t);
            e = !0;
          }
          e && this._installEvents(!0);
        },
        getView: function() {
          return this._project._view;
        },
        _installEvents: function t(e) {
          t.base.call(this, e);
          for (var i = this._children, r = 0, s = i && i.length; r < s; r++)
            i[r]._installEvents(e);
        },
        getLayer: function() {
          for (var t = this; t = t._parent; )
            if (t instanceof Te)
              return t;
          return null;
        },
        getParent: function() {
          return this._parent;
        },
        setParent: function(t) {
          return t.addChild(this);
        },
        _getOwner: "#getParent",
        getChildren: function() {
          return this._children;
        },
        setChildren: function(t) {
          this.removeChildren(), this.addChildren(t);
        },
        getFirstChild: function() {
          return this._children && this._children[0] || null;
        },
        getLastChild: function() {
          return this._children && this._children[this._children.length - 1] || null;
        },
        getNextSibling: function() {
          var t = this._getOwner();
          return t && t._children[this._index + 1] || null;
        },
        getPreviousSibling: function() {
          var t = this._getOwner();
          return t && t._children[this._index - 1] || null;
        },
        getIndex: function() {
          return this._index;
        },
        equals: function(t) {
          return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1;
        },
        _equals: function(t) {
          return M.equals(this._children, t._children);
        },
        clone: function(t) {
          var e = new this.constructor(I.NO_INSERT), i = this._children, r = M.pick(
            t ? t.insert : W,
            t === W || t === !0
          ), s = M.pick(t ? t.deep : W, !0);
          i && e.copyAttributes(this), (!i || s) && e.copyContent(this), i || e.copyAttributes(this), r && e.insertAbove(this);
          var a = this._name, h = this._parent;
          if (a && h) {
            for (var i = h._children, o = a, l = 1; i[a]; )
              a = o + " " + l++;
            a !== o && e.setName(a);
          }
          return e;
        },
        copyContent: function(t) {
          for (var e = t._children, i = 0, r = e && e.length; i < r; i++)
            this.addChild(e[i].clone(!1), !0);
        },
        copyAttributes: function(t, e) {
          this.setStyle(t._style);
          for (var i = [
            "_locked",
            "_visible",
            "_blendMode",
            "_opacity",
            "_clipMask",
            "_guide"
          ], r = 0, s = i.length; r < s; r++) {
            var a = i[r];
            t.hasOwnProperty(a) && (this[a] = t[a]);
          }
          e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
          var h = t._data, o = t._name;
          this._data = h ? M.clone(h) : null, o && this.setName(o);
        },
        rasterize: function(t, e) {
          var i, r, s;
          M.isPlainObject(t) ? (i = t.resolution, r = t.insert, s = t.raster) : (i = t, r = e), s ? s.matrix.reset(!0) : s = new ke(I.NO_INSERT);
          var a = this.getStrokeBounds(), h = (i || this.getView().getResolution()) / 72, o = a.getTopLeft().floor(), l = a.getBottomRight().ceil(), f = new nt(l.subtract(o)), _ = f.multiply(h);
          if (s.setSize(_, !0), !_.isZero()) {
            var v = s.getContext(!0), g = new At().scale(h).translate(o.negate());
            v.save(), g.applyToContext(v), this.draw(v, new M({ matrices: [g] })), v.restore();
          }
          return s.transform(
            new At().translate(o.add(f.divide(2))).scale(1 / h)
          ), (r === W || r) && s.insertAbove(this), s;
        },
        contains: function() {
          var t = this._matrix;
          return t.isInvertible() && !!this._contains(t._inverseTransform(z.read(arguments)));
        },
        _contains: function(t) {
          var e = this._children;
          if (e) {
            for (var i = e.length - 1; i >= 0; i--)
              if (e[i].contains(t))
                return !0;
            return !1;
          }
          return t.isInside(this.getInternalBounds());
        },
        isInside: function() {
          return ot.read(arguments).contains(this.getBounds());
        },
        _asPathItem: function() {
          return new Tt.Rectangle({
            rectangle: this.getInternalBounds(),
            matrix: this._matrix,
            insert: !1
          });
        },
        intersects: function(t, e) {
          return t instanceof I ? this._asPathItem().getIntersections(
            t._asPathItem(),
            null,
            e,
            !0
          ).length > 0 : !1;
        }
      },
      new function() {
        function t() {
          var r = arguments;
          return this._hitTest(
            z.read(r),
            ye.getOptions(r)
          );
        }
        function e() {
          var r = arguments, s = z.read(r), a = ye.getOptions(r), h = [];
          return this._hitTest(s, new M({ all: h }, a)), h;
        }
        function i(r, s, a, h) {
          var o = this._children;
          if (o)
            for (var l = o.length - 1; l >= 0; l--) {
              var f = o[l], _ = f !== h && f._hitTest(
                r,
                s,
                a
              );
              if (_ && !s.all)
                return _;
            }
          return null;
        }
        return kt.inject({
          hitTest: t,
          hitTestAll: e,
          _hitTest: i
        }), {
          hitTest: t,
          hitTestAll: e,
          _hitTestChildren: i
        };
      }(),
      {
        _hitTest: function(t, e, i) {
          if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty())
            return null;
          var r = this._matrix, s = i ? i.appended(r) : this.getGlobalMatrix().prepend(this.getView()._matrix), a = Math.max(e.tolerance, 1e-12), h = e._tolerancePadding = new nt(
            Tt._getStrokePadding(
              a,
              r._shiftless().invert()
            )
          );
          if (t = r._inverseTransform(t), !t || !this._children && !this.getBounds({ internal: !0, stroke: !0, handle: !0 }).expand(h.multiply(2))._containsPoint(t))
            return null;
          var o = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== M.hyphenate(this._class) || e.class && !(this instanceof e.class)), l = e.match, f = this, _, v;
          function g(c) {
            return c && l && !l(c) && (c = null), c && e.all && e.all.push(c), c;
          }
          function d(c, x) {
            var C = x ? _["get" + x]() : f.getPosition();
            if (t.subtract(C).divide(h).length <= 1)
              return new ye(c, f, {
                name: x ? M.hyphenate(x) : c,
                point: C
              });
          }
          var w = e.position, m = e.center, k = e.bounds;
          if (o && this._parent && (w || m || k)) {
            if ((m || k) && (_ = this.getInternalBounds()), v = w && d("position") || m && d("center", "Center"), !v && k)
              for (var p = [
                "TopLeft",
                "TopRight",
                "BottomLeft",
                "BottomRight",
                "LeftCenter",
                "TopCenter",
                "RightCenter",
                "BottomCenter"
              ], y = 0; y < 8 && !v; y++)
                v = d("bounds", p[y]);
            v = g(v);
          }
          return v || (v = this._hitTestChildren(t, e, s) || o && g(this._hitTestSelf(
            t,
            e,
            s,
            this.getStrokeScaling() ? null : s._shiftless().invert()
          )) || null), v && v.point && (v.point = r.transform(v.point)), v;
        },
        _hitTestSelf: function(t, e) {
          if (e.fill && this.hasFill() && this._contains(t))
            return new ye("fill", this);
        },
        matches: function(t, e) {
          function i(h, o) {
            for (var l in h)
              if (h.hasOwnProperty(l)) {
                var f = h[l], _ = o[l];
                if (M.isPlainObject(f) && M.isPlainObject(_)) {
                  if (!i(f, _))
                    return !1;
                } else if (!M.equals(f, _))
                  return !1;
              }
            return !0;
          }
          var r = typeof t;
          if (r === "object") {
            for (var s in t)
              if (t.hasOwnProperty(s) && !this.matches(s, t[s]))
                return !1;
            return !0;
          } else {
            if (r === "function")
              return t(this);
            if (t === "match")
              return e(this);
            var a = /^(empty|editable)$/.test(t) ? this["is" + M.capitalize(t)]() : t === "type" ? M.hyphenate(this._class) : this[t];
            if (t === "class") {
              if (typeof e == "function")
                return this instanceof e;
              a = this._class;
            }
            if (typeof e == "function")
              return !!e(a);
            if (e) {
              if (e.test)
                return e.test(a);
              if (M.isPlainObject(e))
                return i(e, a);
            }
            return M.equals(a, e);
          }
        },
        getItems: function(t) {
          return I._getItems(this, t, this._matrix);
        },
        getItem: function(t) {
          return I._getItems(this, t, this._matrix, null, !0)[0] || null;
        },
        statics: {
          _getItems: function t(e, i, r, s, a) {
            if (!s) {
              var h = typeof i == "object" && i, o = h && h.overlapping, l = h && h.inside, f = o || l, g = f && ot.read([f]);
              s = {
                items: [],
                recursive: h && h.recursive !== !1,
                inside: !!l,
                overlapping: !!o,
                rect: g,
                path: o && new Tt.Rectangle({
                  rectangle: g,
                  insert: !1
                })
              }, h && (i = M.filter({}, i, {
                recursive: !0,
                inside: !0,
                overlapping: !0
              }));
            }
            var _ = e._children, v = s.items, g = s.rect;
            r = g && (r || new At());
            for (var d = 0, w = _ && _.length; d < w; d++) {
              var m = _[d], k = r && r.appended(m._matrix), p = !0;
              if (g) {
                var f = m.getBounds(k);
                if (!g.intersects(f))
                  continue;
                g.contains(f) || s.overlapping && (f.contains(g) || s.path.intersects(m, k)) || (p = !1);
              }
              if (p && m.matches(i) && (v.push(m), a) || (s.recursive !== !1 && t(m, i, k, s, a), a && v.length > 0))
                break;
            }
            return v;
          }
        }
      },
      {
        importJSON: function(t) {
          var e = M.importJSON(t, this);
          return e !== this ? this.addChild(e) : e;
        },
        addChild: function(t) {
          return this.insertChild(W, t);
        },
        insertChild: function(t, e) {
          var i = e ? this.insertChildren(t, [e]) : null;
          return i && i[0];
        },
        addChildren: function(t) {
          return this.insertChildren(this._children.length, t);
        },
        insertChildren: function(t, e) {
          var i = this._children;
          if (i && e && e.length > 0) {
            e = M.slice(e);
            for (var r = {}, s = e.length - 1; s >= 0; s--) {
              var a = e[s], h = a && a._id;
              !a || r[h] ? e.splice(s, 1) : (a._remove(!1, !0), r[h] = !0);
            }
            M.splice(i, e, t, 0);
            for (var o = this._project, l = o._changes, s = 0, f = e.length; s < f; s++) {
              var a = e[s], _ = a._name;
              a._parent = this, a._setProject(o, !0), _ && a.setName(_), l && a._changed(5);
            }
            this._changed(11);
          } else
            e = null;
          return e;
        },
        _insertItem: "#insertChild",
        _insertAt: function(t, e) {
          var i = t && t._getOwner(), r = t !== this && i ? this : null;
          return r && (r._remove(!1, !0), i._insertItem(t._index + e, r)), r;
        },
        insertAbove: function(t) {
          return this._insertAt(t, 1);
        },
        insertBelow: function(t) {
          return this._insertAt(t, 0);
        },
        sendToBack: function() {
          var t = this._getOwner();
          return t ? t._insertItem(0, this) : null;
        },
        bringToFront: function() {
          var t = this._getOwner();
          return t ? t._insertItem(W, this) : null;
        },
        appendTop: "#addChild",
        appendBottom: function(t) {
          return this.insertChild(0, t);
        },
        moveAbove: "#insertAbove",
        moveBelow: "#insertBelow",
        addTo: function(t) {
          return t._insertItem(W, this);
        },
        copyTo: function(t) {
          return this.clone(!1).addTo(t);
        },
        reduce: function(t) {
          var e = this._children;
          if (e && e.length === 1) {
            var i = e[0].reduce(t);
            return this._parent ? (i.insertAbove(this), this.remove()) : i.remove(), i;
          }
          return this;
        },
        _removeNamed: function() {
          var t = this._getOwner();
          if (t) {
            var e = t._children, i = t._namedChildren, r = this._name, s = i[r], a = s ? s.indexOf(this) : -1;
            a !== -1 && (e[r] == this && delete e[r], s.splice(a, 1), s.length ? e[r] = s[0] : delete i[r]);
          }
        },
        _remove: function(t, e) {
          var i = this._getOwner(), r = this._project, s = this._index;
          return this._style && this._style._dispose(), i ? (this._name && this._removeNamed(), s != null && (r._activeLayer === this && (r._activeLayer = this.getNextSibling() || this.getPreviousSibling()), M.splice(i._children, null, s, 1)), this._installEvents(!1), t && r._changes && this._changed(5), e && i._changed(11, this), this._parent = null, !0) : !1;
        },
        remove: function() {
          return this._remove(!0, !0);
        },
        replaceWith: function(t) {
          var e = t && t.insertBelow(this);
          return e && this.remove(), e;
        },
        removeChildren: function(t, e) {
          if (!this._children)
            return null;
          t = t || 0, e = M.pick(e, this._children.length);
          for (var i = M.splice(this._children, null, t, e - t), r = i.length - 1; r >= 0; r--)
            i[r]._remove(!0, !1);
          return i.length > 0 && this._changed(11), i;
        },
        clear: "#removeChildren",
        reverseChildren: function() {
          if (this._children) {
            this._children.reverse();
            for (var t = 0, e = this._children.length; t < e; t++)
              this._children[t]._index = t;
            this._changed(11);
          }
        },
        isEmpty: function(t) {
          var e = this._children, i = e ? e.length : 0;
          if (t) {
            for (var r = 0; r < i; r++)
              if (!e[r].isEmpty(t))
                return !1;
            return !0;
          }
          return !i;
        },
        isEditable: function() {
          for (var t = this; t; ) {
            if (!t._visible || t._locked)
              return !1;
            t = t._parent;
          }
          return !0;
        },
        hasFill: function() {
          return this.getStyle().hasFill();
        },
        hasStroke: function() {
          return this.getStyle().hasStroke();
        },
        hasShadow: function() {
          return this.getStyle().hasShadow();
        },
        _getOrder: function(t) {
          function e(h) {
            var o = [];
            do
              o.unshift(h);
            while (h = h._parent);
            return o;
          }
          for (var i = e(this), r = e(t), s = 0, a = Math.min(i.length, r.length); s < a; s++)
            if (i[s] != r[s])
              return i[s]._index < r[s]._index ? 1 : -1;
          return 0;
        },
        hasChildren: function() {
          return this._children && this._children.length > 0;
        },
        isInserted: function() {
          return this._parent ? this._parent.isInserted() : !1;
        },
        isAbove: function(t) {
          return this._getOrder(t) === -1;
        },
        isBelow: function(t) {
          return this._getOrder(t) === 1;
        },
        isParent: function(t) {
          return this._parent === t;
        },
        isChild: function(t) {
          return t && t._parent === this;
        },
        isDescendant: function(t) {
          for (var e = this; e = e._parent; )
            if (e === t)
              return !0;
          return !1;
        },
        isAncestor: function(t) {
          return t ? t.isDescendant(this) : !1;
        },
        isSibling: function(t) {
          return this._parent === t._parent;
        },
        isGroupedWith: function(t) {
          for (var e = this._parent; e; ) {
            if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e))
              return !0;
            e = e._parent;
          }
          return !1;
        }
      },
      M.each(["rotate", "scale", "shear", "skew"], function(t) {
        var e = t === "rotate";
        this[t] = function() {
          var i = arguments, r = (e ? M : z).read(i), s = z.read(i, 0, { readNull: !0 });
          return this.transform(new At()[t](
            r,
            s || this.getPosition(!0)
          ));
        };
      }, {
        translate: function() {
          var t = new At();
          return this.transform(t.translate.apply(t, arguments));
        },
        transform: function(t, e, i) {
          var r = this._matrix, s = t && !t.isIdentity(), a = i && this._canApplyMatrix || this._applyMatrix && (s || !r.isIdentity() || e && this._children);
          if (!s && !a)
            return this;
          if (s) {
            !t.isInvertible() && r.isInvertible() && (r._backup = r.getValues()), r.prepend(t, !0);
            var h = this._style, o = h.getFillColor(!0), l = h.getStrokeColor(!0);
            o && o.transform(t), l && l.transform(t);
          }
          if (a && (a = this._transformContent(
            r,
            e,
            i
          ))) {
            var f = this._pivot;
            f && r._transformPoint(f, f, !0), r.reset(!0), i && this._canApplyMatrix && (this._applyMatrix = !0);
          }
          var _ = this._bounds, v = this._position;
          (s || a) && this._changed(25);
          var g = s && _ && t.decompose();
          if (g && g.skewing.isZero() && g.rotation % 90 === 0) {
            for (var d in _) {
              var w = _[d];
              if (w.nonscaling)
                delete _[d];
              else if (a || !w.internal) {
                var m = w.rect;
                t._transformBounds(m, m);
              }
            }
            this._bounds = _;
            var k = _[this._getBoundsCacheKey(
              this._boundsOptions || {}
            )];
            k && (this._position = this._getPositionFromBounds(k.rect));
          } else
            s && v && this._pivot && (this._position = t._transformPoint(v, v));
          return this;
        },
        _transformContent: function(t, e, i) {
          var r = this._children;
          if (r) {
            for (var s = 0, a = r.length; s < a; s++)
              r[s].transform(t, e, i);
            return !0;
          }
        },
        globalToLocal: function() {
          return this.getGlobalMatrix(!0)._inverseTransform(
            z.read(arguments)
          );
        },
        localToGlobal: function() {
          return this.getGlobalMatrix(!0)._transformPoint(
            z.read(arguments)
          );
        },
        parentToLocal: function() {
          return this._matrix._inverseTransform(z.read(arguments));
        },
        localToParent: function() {
          return this._matrix._transformPoint(z.read(arguments));
        },
        fitBounds: function(t, e) {
          t = ot.read(arguments);
          var i = this.getBounds(), r = i.height / i.width, s = t.height / t.width, a = (e ? r > s : r < s) ? t.width / i.width : t.height / i.height, h = new ot(
            new z(),
            new nt(i.width * a, i.height * a)
          );
          h.setCenter(t.getCenter()), this.setBounds(h);
        }
      }),
      {
        _setStyles: function(t, e, i) {
          var r = this._style, s = this._matrix;
          if (r.hasFill() && (t.fillStyle = r.getFillColor().toCanvasStyle(t, s)), r.hasStroke()) {
            t.strokeStyle = r.getStrokeColor().toCanvasStyle(t, s), t.lineWidth = r.getStrokeWidth();
            var a = r.getStrokeJoin(), h = r.getStrokeCap(), o = r.getMiterLimit();
            if (a && (t.lineJoin = a), h && (t.lineCap = h), o && (t.miterLimit = o), dt.support.nativeDash) {
              var l = r.getDashArray(), f = r.getDashOffset();
              l && l.length && ("setLineDash" in t ? (t.setLineDash(l), t.lineDashOffset = f) : (t.mozDash = l, t.mozDashOffset = f));
            }
          }
          if (r.hasShadow()) {
            var _ = e.pixelRatio || 1, v = i._shiftless().prepend(
              new At().scale(_, _)
            ), g = v.transform(new z(r.getShadowBlur(), 0)), d = v.transform(this.getShadowOffset());
            t.shadowColor = r.getShadowColor().toCanvasStyle(t), t.shadowBlur = g.getLength(), t.shadowOffsetX = d.x, t.shadowOffsetY = d.y;
          }
        },
        draw: function(t, e, i) {
          if (this._updateVersion = this._project._updateVersion, !(!this._visible || this._opacity === 0)) {
            var r = e.matrices, s = e.viewMatrix, a = this._matrix, h = r[r.length - 1].appended(a);
            if (!!h.isInvertible()) {
              s = s ? s.appended(h) : h, r.push(h), e.updateMatrix && (this._globalMatrix = h);
              var o = this._blendMode, l = pt.clamp(this._opacity, 0, 1), f = o === "normal", _ = ni.nativeModes[o], v = f && l === 1 || e.dontStart || e.clip || (_ || f && l < 1) && this._canComposite(), g = e.pixelRatio || 1, d, w, m;
              if (!v) {
                var k = this.getStrokeBounds(s);
                if (!k.width || !k.height) {
                  r.pop();
                  return;
                }
                m = e.offset, w = e.offset = k.getTopLeft().floor(), d = t, t = Ft.getContext(k.getSize().ceil().add(1).multiply(g)), g !== 1 && t.scale(g, g);
              }
              t.save();
              var p = i ? i.appended(a) : this._canScaleStroke && !this.getStrokeScaling(!0) && s, y = !v && e.clipItem, c = !p || y;
              if (v ? (t.globalAlpha = l, _ && (t.globalCompositeOperation = o)) : c && t.translate(-w.x, -w.y), c && (v ? a : s).applyToContext(t), y && e.clipItem.draw(t, e.extend({ clip: !0 })), p) {
                t.setTransform(g, 0, 0, g, 0, 0);
                var x = e.offset;
                x && t.translate(-x.x, -x.y);
              }
              this._draw(t, e, s, p), t.restore(), r.pop(), e.clip && !e.dontFinish && t.clip(this.getFillRule()), v || (ni.process(
                o,
                t,
                d,
                l,
                w.subtract(m).multiply(g)
              ), Ft.release(t), e.offset = m);
            }
          }
        },
        _isUpdated: function(t) {
          var e = this._parent;
          if (e instanceof we)
            return e._isUpdated(t);
          var i = this._updateVersion === t;
          return !i && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, i = !0), i;
        },
        _drawSelection: function(t, e, i, r, s) {
          var a = this._selection, h = a & 1, o = a & 2 || h && this._selectBounds, l = a & 4;
          if (this._drawSelected || (h = !1), (h || o || l) && this._isUpdated(s)) {
            var f, _ = this.getSelectedColor(!0) || (f = this.getLayer()) && f.getSelectedColor(!0), v = e.appended(this.getGlobalMatrix(!0)), g = i / 2;
            if (t.strokeStyle = t.fillStyle = _ ? _.toCanvasStyle(t) : "#009dec", h && this._drawSelected(t, v, r), l) {
              var d = this.getPosition(!0), w = this._parent, m = w ? w.localToGlobal(d) : d, k = m.x, p = m.y;
              t.beginPath(), t.arc(k, p, g, 0, Math.PI * 2, !0), t.stroke();
              for (var y = [[0, -1], [1, 0], [0, 1], [-1, 0]], c = g, x = i + 1, C = 0; C < 4; C++) {
                var P = y[C], S = P[0], E = P[1];
                t.moveTo(k + S * c, p + E * c), t.lineTo(k + S * x, p + E * x), t.stroke();
              }
            }
            if (o) {
              var L = v._transformCorners(this.getInternalBounds());
              t.beginPath();
              for (var C = 0; C < 8; C++)
                t[C ? "lineTo" : "moveTo"](L[C], L[++C]);
              t.closePath(), t.stroke();
              for (var C = 0; C < 8; C++)
                t.fillRect(
                  L[C] - g,
                  L[++C] - g,
                  i,
                  i
                );
            }
          }
        },
        _canComposite: function() {
          return !1;
        }
      },
      M.each(["down", "drag", "up", "move"], function(t) {
        this["removeOn" + M.capitalize(t)] = function() {
          var e = {};
          return e[t] = !0, this.removeOn(e);
        };
      }, {
        removeOn: function(t) {
          for (var e in t)
            if (t[e]) {
              var i = "mouse" + e, r = this._project, s = r._removeSets = r._removeSets || {};
              s[i] = s[i] || {}, s[i][this._id] = this;
            }
          return this;
        }
      }),
      {
        tween: function(t, e, i) {
          i || (i = e, e = t, t = null, i || (i = e, e = null));
          var r = i && i.easing, s = i && i.start, a = i != null && (typeof i == "number" ? i : i.duration), h = new ei(this, t, e, a, r, s);
          function o(l) {
            h._handleFrame(l.time * 1e3), h.running || this.off("frame", o);
          }
          return a && this.on("frame", o), h;
        },
        tweenTo: function(t, e) {
          return this.tween(null, t, e);
        },
        tweenFrom: function(t, e) {
          return this.tween(t, null, e);
        }
      }
    ), zt = I.extend({
      _class: "Group",
      _selectBounds: !1,
      _selectChildren: !0,
      _serializeFields: {
        children: []
      },
      initialize: function(e) {
        this._children = [], this._namedChildren = {}, this._initialize(e) || this.addChildren(Array.isArray(e) ? e : arguments);
      },
      _changed: function t(e) {
        t.base.call(this, e), e & 2050 && (this._clipItem = W);
      },
      _getClipItem: function() {
        var t = this._clipItem;
        if (t === W) {
          t = null;
          for (var e = this._children, i = 0, r = e.length; i < r; i++)
            if (e[i]._clipMask) {
              t = e[i];
              break;
            }
          this._clipItem = t;
        }
        return t;
      },
      isClipped: function() {
        return !!this._getClipItem();
      },
      setClipped: function(t) {
        var e = this.getFirstChild();
        e && e.setClipMask(t);
      },
      _getBounds: function t(e, i) {
        var r = this._getClipItem();
        return r ? r._getCachedBounds(
          r._matrix.prepended(e),
          M.set({}, i, { stroke: !1 })
        ) : t.base.call(this, e, i);
      },
      _hitTestChildren: function t(e, i, r) {
        var s = this._getClipItem();
        return (!s || s.contains(e)) && t.base.call(
          this,
          e,
          i,
          r,
          s
        );
      },
      _draw: function(t, e) {
        var i = e.clip, r = !i && this._getClipItem();
        e = e.extend({ clipItem: r, clip: !1 }), i ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : r && r.draw(t, e.extend({ clip: !0 }));
        for (var s = this._children, a = 0, h = s.length; a < h; a++) {
          var o = s[a];
          o !== r && o.draw(t, e);
        }
      }
    }), Te = zt.extend({
      _class: "Layer",
      initialize: function() {
        zt.apply(this, arguments);
      },
      _getOwner: function() {
        return this._parent || this._index != null && this._project;
      },
      isInserted: function t() {
        return this._parent ? t.base.call(this) : this._index != null;
      },
      activate: function() {
        this._project._activeLayer = this;
      },
      _hitTestSelf: function() {
      }
    }), Zt = I.extend(
      {
        _class: "Shape",
        _applyMatrix: !1,
        _canApplyMatrix: !1,
        _canScaleStroke: !0,
        _serializeFields: {
          type: null,
          size: null,
          radius: null
        },
        initialize: function(e, i) {
          this._initialize(e, i);
        },
        _equals: function(t) {
          return this._type === t._type && this._size.equals(t._size) && M.equals(this._radius, t._radius);
        },
        copyContent: function(t) {
          this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius);
        },
        getType: function() {
          return this._type;
        },
        setType: function(t) {
          this._type = t;
        },
        getShape: "#getType",
        setShape: "#setType",
        getSize: function() {
          var t = this._size;
          return new _t(t.width, t.height, this, "setSize");
        },
        setSize: function() {
          var t = nt.read(arguments);
          if (!this._size)
            this._size = t.clone();
          else if (!this._size.equals(t)) {
            var e = this._type, i = t.width, r = t.height;
            e === "rectangle" ? this._radius.set(nt.min(this._radius, t.divide(2).abs())) : e === "circle" ? (i = r = (i + r) / 2, this._radius = i / 2) : e === "ellipse" && this._radius._set(i / 2, r / 2), this._size._set(i, r), this._changed(9);
          }
        },
        getRadius: function() {
          var t = this._radius;
          return this._type === "circle" ? t : new _t(t.width, t.height, this, "setRadius");
        },
        setRadius: function(t) {
          var e = this._type;
          if (e === "circle") {
            if (t === this._radius)
              return;
            var i = t * 2;
            this._radius = t, this._size._set(i, i);
          } else if (t = nt.read(arguments), !this._radius)
            this._radius = t.clone();
          else {
            if (this._radius.equals(t))
              return;
            if (this._radius.set(t), e === "rectangle") {
              var i = nt.max(this._size, t.multiply(2));
              this._size.set(i);
            } else
              e === "ellipse" && this._size._set(t.width * 2, t.height * 2);
          }
          this._changed(9);
        },
        isEmpty: function() {
          return !1;
        },
        toPath: function(t) {
          var e = new Tt[M.capitalize(this._type)]({
            center: new z(),
            size: this._size,
            radius: this._radius,
            insert: !1
          });
          return e.copyAttributes(this), dt.settings.applyMatrix && e.setApplyMatrix(!0), (t === W || t) && e.insertAbove(this), e;
        },
        toShape: "#clone",
        _asPathItem: function() {
          return this.toPath(!1);
        },
        _draw: function(t, e, i, r) {
          var s = this._style, a = s.hasFill(), h = s.hasStroke(), o = e.dontFinish || e.clip, l = !r;
          if (a || h || o) {
            var f = this._type, _ = this._radius, v = f === "circle";
            if (e.dontStart || t.beginPath(), l && v)
              t.arc(0, 0, _, 0, Math.PI * 2, !0);
            else {
              var g = v ? _ : _.width, d = v ? _ : _.height, w = this._size, m = w.width, k = w.height;
              if (l && f === "rectangle" && g === 0 && d === 0)
                t.rect(-m / 2, -k / 2, m, k);
              else {
                var p = m / 2, y = k / 2, c = 1 - 0.5522847498307936, x = g * c, C = d * c, P = [
                  -p,
                  -y + d,
                  -p,
                  -y + C,
                  -p + x,
                  -y,
                  -p + g,
                  -y,
                  p - g,
                  -y,
                  p - x,
                  -y,
                  p,
                  -y + C,
                  p,
                  -y + d,
                  p,
                  y - d,
                  p,
                  y - C,
                  p - x,
                  y,
                  p - g,
                  y,
                  -p + g,
                  y,
                  -p + x,
                  y,
                  -p,
                  y - C,
                  -p,
                  y - d
                ];
                r && r.transform(P, P, 32), t.moveTo(P[0], P[1]), t.bezierCurveTo(P[2], P[3], P[4], P[5], P[6], P[7]), p !== g && t.lineTo(P[8], P[9]), t.bezierCurveTo(P[10], P[11], P[12], P[13], P[14], P[15]), y !== d && t.lineTo(P[16], P[17]), t.bezierCurveTo(P[18], P[19], P[20], P[21], P[22], P[23]), p !== g && t.lineTo(P[24], P[25]), t.bezierCurveTo(P[26], P[27], P[28], P[29], P[30], P[31]);
              }
            }
            t.closePath();
          }
          !o && (a || h) && (this._setStyles(t, e, i), a && (t.fill(s.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), h && t.stroke());
        },
        _canComposite: function() {
          return !(this.hasFill() && this.hasStroke());
        },
        _getBounds: function(t, e) {
          var i = new ot(this._size).setCenter(0, 0), r = this._style, s = e.stroke && r.hasStroke() && r.getStrokeWidth();
          return t && (i = t._transformBounds(i)), s ? i.expand(Tt._getStrokePadding(
            s,
            this._getStrokeMatrix(t, e)
          )) : i;
        }
      },
      new function() {
        function t(i, r, s) {
          var a = i._radius;
          if (!a.isZero())
            for (var h = i._size.divide(2), o = 1; o <= 4; o++) {
              var l = new z(o > 1 && o < 4 ? -1 : 1, o > 2 ? -1 : 1), f = l.multiply(h), _ = f.subtract(l.multiply(a)), v = new ot(
                s ? f.add(l.multiply(s)) : f,
                _
              );
              if (v.contains(r))
                return { point: _, quadrant: o };
            }
        }
        function e(i, r, s, a) {
          var h = i.divide(r);
          return (!a || h.isInQuadrant(a)) && h.subtract(h.normalize()).multiply(r).divide(s).length <= 1;
        }
        return {
          _contains: function i(r) {
            if (this._type === "rectangle") {
              var s = t(this, r);
              return s ? r.subtract(s.point).divide(this._radius).getLength() <= 1 : i.base.call(this, r);
            } else
              return r.divide(this.size).getLength() <= 0.5;
          },
          _hitTestSelf: function i(r, s, a, h) {
            var o = !1, l = this._style, f = s.stroke && l.hasStroke(), _ = s.fill && l.hasFill();
            if (f || _) {
              var v = this._type, g = this._radius, d = f ? l.getStrokeWidth() / 2 : 0, w = s._tolerancePadding.add(
                Tt._getStrokePadding(
                  d,
                  !l.getStrokeScaling() && h
                )
              );
              if (v === "rectangle") {
                var m = w.multiply(2), k = t(this, r, m);
                if (k)
                  o = e(
                    r.subtract(k.point),
                    g,
                    w,
                    k.quadrant
                  );
                else {
                  var p = new ot(this._size).setCenter(0, 0), y = p.expand(m), c = p.expand(m.negate());
                  o = y._containsPoint(r) && !c._containsPoint(r);
                }
              } else
                o = e(r, g, w);
            }
            return o ? new ye(f ? "stroke" : "fill", this) : i.base.apply(this, arguments);
          }
        };
      }(),
      {
        statics: new function() {
          function t(e, i, r, s, a) {
            var h = M.create(Zt.prototype);
            return h._type = e, h._size = r, h._radius = s, h._initialize(M.getNamed(a), i), h;
          }
          return {
            Circle: function() {
              var e = arguments, i = z.readNamed(e, "center"), r = M.readNamed(e, "radius");
              return t(
                "circle",
                i,
                new nt(r * 2),
                r,
                e
              );
            },
            Rectangle: function() {
              var e = arguments, i = ot.readNamed(e, "rectangle"), r = nt.min(
                nt.readNamed(e, "radius"),
                i.getSize(!0).divide(2)
              );
              return t(
                "rectangle",
                i.getCenter(!0),
                i.getSize(!0),
                r,
                e
              );
            },
            Ellipse: function() {
              var e = arguments, i = Zt._readEllipse(e), r = i.radius;
              return t(
                "ellipse",
                i.center,
                r.multiply(2),
                r,
                e
              );
            },
            _readEllipse: function(e) {
              var i, r;
              if (M.hasNamed(e, "radius"))
                i = z.readNamed(e, "center"), r = nt.readNamed(e, "radius");
              else {
                var s = ot.readNamed(e, "rectangle");
                i = s.getCenter(!0), r = s.getSize(!0).divide(2);
              }
              return { center: i, radius: r };
            }
          };
        }()
      }
    ), ke = I.extend({
      _class: "Raster",
      _applyMatrix: !1,
      _canApplyMatrix: !1,
      _boundsOptions: { stroke: !1, handle: !1 },
      _serializeFields: {
        crossOrigin: null,
        source: null
      },
      _prioritize: ["crossOrigin"],
      _smoothing: "low",
      beans: !0,
      initialize: function(e, i) {
        if (!this._initialize(
          e,
          i !== W && z.read(arguments)
        )) {
          var r, s = typeof e, a = s === "string" ? $.getElementById(e) : s === "object" ? e : null;
          if (a && a !== I.NO_INSERT) {
            if (a.getContext || a.naturalHeight != null)
              r = a;
            else if (a) {
              var h = nt.read(arguments);
              h.isZero() || (r = Ft.getCanvas(h));
            }
          }
          r ? this.setImage(r) : this.setSource(e);
        }
        this._size || (this._size = new nt(), this._loaded = !1);
      },
      _equals: function(t) {
        return this.getSource() === t.getSource();
      },
      copyContent: function(t) {
        var e = t._image, i = t._canvas;
        if (e)
          this._setImage(e);
        else if (i) {
          var r = Ft.getCanvas(t._size);
          r.getContext("2d").drawImage(i, 0, 0), this._setImage(r);
        }
        this._crossOrigin = t._crossOrigin;
      },
      getSize: function() {
        var t = this._size;
        return new _t(
          t ? t.width : 0,
          t ? t.height : 0,
          this,
          "setSize"
        );
      },
      setSize: function(t, e) {
        var i = nt.read(arguments);
        if (i.equals(this._size))
          e && this.clear();
        else if (i.width > 0 && i.height > 0) {
          var r = !e && this.getElement();
          this._setImage(Ft.getCanvas(i)), r && this.getContext(!0).drawImage(
            r,
            0,
            0,
            i.width,
            i.height
          );
        } else
          this._canvas && Ft.release(this._canvas), this._size = i.clone();
      },
      getWidth: function() {
        return this._size ? this._size.width : 0;
      },
      setWidth: function(t) {
        this.setSize(t, this.getHeight());
      },
      getHeight: function() {
        return this._size ? this._size.height : 0;
      },
      setHeight: function(t) {
        this.setSize(this.getWidth(), t);
      },
      getLoaded: function() {
        return this._loaded;
      },
      isEmpty: function() {
        var t = this._size;
        return !t || t.width === 0 && t.height === 0;
      },
      getResolution: function() {
        var t = this._matrix, e = new z(0, 0).transform(t), i = new z(1, 0).transform(t).subtract(e), r = new z(0, 1).transform(t).subtract(e);
        return new nt(
          72 / i.getLength(),
          72 / r.getLength()
        );
      },
      getPpi: "#getResolution",
      getImage: function() {
        return this._image;
      },
      setImage: function(t) {
        var e = this;
        function i(r) {
          var s = e.getView(), a = r && r.type || "load";
          s && e.responds(a) && (dt = s._scope, e.emit(a, new je(r)));
        }
        this._setImage(t), this._loaded ? setTimeout(i, 0) : t && Xt.add(t, {
          load: function(r) {
            e._setImage(t), i(r);
          },
          error: i
        });
      },
      _setImage: function(t) {
        this._canvas && Ft.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new nt(
          t ? t.naturalWidth || t.width : 0,
          t ? t.naturalHeight || t.height : 0
        ), this._context = null, this._changed(1033);
      },
      getCanvas: function() {
        if (!this._canvas) {
          var t = Ft.getContext(this._size);
          try {
            this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas;
          } catch {
            Ft.release(t);
          }
        }
        return this._canvas;
      },
      setCanvas: "#setImage",
      getContext: function(t) {
        return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(1025)), this._context;
      },
      setContext: function(t) {
        this._context = t;
      },
      getSource: function() {
        var t = this._image;
        return t && t.src || this.toDataURL();
      },
      setSource: function(t) {
        var e = new ct.Image(), i = this._crossOrigin;
        i && (e.crossOrigin = i), t && (e.src = t), this.setImage(e);
      },
      getCrossOrigin: function() {
        var t = this._image;
        return t && t.crossOrigin || this._crossOrigin || "";
      },
      setCrossOrigin: function(t) {
        this._crossOrigin = t;
        var e = this._image;
        e && (e.crossOrigin = t);
      },
      getSmoothing: function() {
        return this._smoothing;
      },
      setSmoothing: function(t) {
        this._smoothing = typeof t == "string" ? t : t ? "low" : "off", this._changed(257);
      },
      getElement: function() {
        return this._canvas || this._loaded && this._image;
      }
    }, {
      beans: !1,
      getSubCanvas: function() {
        var t = ot.read(arguments), e = Ft.getContext(t.getSize());
        return e.drawImage(
          this.getCanvas(),
          t.x,
          t.y,
          t.width,
          t.height,
          0,
          0,
          t.width,
          t.height
        ), e.canvas;
      },
      getSubRaster: function() {
        var t = ot.read(arguments), e = new ke(I.NO_INSERT);
        return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e;
      },
      toDataURL: function() {
        var t = this._image, e = t && t.src;
        if (/^data:/.test(e))
          return e;
        var i = this.getCanvas();
        return i ? i.toDataURL.apply(i, arguments) : null;
      },
      drawImage: function(t) {
        var e = z.read(arguments, 1);
        this.getContext(!0).drawImage(t, e.x, e.y);
      },
      getAverageColor: function(t) {
        var e, i;
        if (t ? t instanceof ve ? (i = t, e = t.getBounds()) : typeof t == "object" && ("width" in t ? e = new ot(t) : "x" in t && (e = new ot(t.x - 0.5, t.y - 0.5, 1, 1))) : e = this.getBounds(), !e)
          return null;
        var r = 32, s = Math.min(e.width, r), a = Math.min(e.height, r), h = ke._sampleContext;
        h ? h.clearRect(0, 0, r + 1, r + 1) : h = ke._sampleContext = Ft.getContext(
          new nt(r)
        ), h.save();
        var o = new At().scale(s / e.width, a / e.height).translate(-e.x, -e.y);
        o.applyToContext(h), i && i.draw(h, new M({ clip: !0, matrices: [o] })), this._matrix.applyToContext(h);
        var l = this.getElement(), f = this._size;
        l && h.drawImage(l, -f.width / 2, -f.height / 2), h.restore();
        for (var _ = h.getImageData(
          0.5,
          0.5,
          Math.ceil(s),
          Math.ceil(a)
        ).data, v = [0, 0, 0], g = 0, d = 0, w = _.length; d < w; d += 4) {
          var m = _[d + 3];
          g += m, m /= 255, v[0] += _[d] * m, v[1] += _[d + 1] * m, v[2] += _[d + 2] * m;
        }
        for (var d = 0; d < 3; d++)
          v[d] /= g;
        return g ? Jt.read(v) : null;
      },
      getPixel: function() {
        var t = z.read(arguments), e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
        return new Jt(
          "rgb",
          [e[0] / 255, e[1] / 255, e[2] / 255],
          e[3] / 255
        );
      },
      setPixel: function() {
        var t = arguments, e = z.read(t), i = Jt.read(t), r = i._convert("rgb"), s = i._alpha, a = this.getContext(!0), h = a.createImageData(1, 1), o = h.data;
        o[0] = r[0] * 255, o[1] = r[1] * 255, o[2] = r[2] * 255, o[3] = s != null ? s * 255 : 255, a.putImageData(h, e.x, e.y);
      },
      clear: function() {
        var t = this._size;
        this.getContext(!0).clearRect(0, 0, t.width + 1, t.height + 1);
      },
      createImageData: function() {
        var t = nt.read(arguments);
        return this.getContext().createImageData(t.width, t.height);
      },
      getImageData: function() {
        var t = ot.read(arguments);
        return t.isEmpty() && (t = new ot(this._size)), this.getContext().getImageData(
          t.x,
          t.y,
          t.width,
          t.height
        );
      },
      setImageData: function(t) {
        var e = z.read(arguments, 1);
        this.getContext(!0).putImageData(t, e.x, e.y);
      },
      _getBounds: function(t, e) {
        var i = new ot(this._size).setCenter(0, 0);
        return t ? t._transformBounds(i) : i;
      },
      _hitTestSelf: function(t) {
        if (this._contains(t)) {
          var e = this;
          return new ye("pixel", e, {
            offset: t.add(e._size.divide(2)).round(),
            color: {
              get: function() {
                return e.getPixel(this.offset);
              }
            }
          });
        }
      },
      _draw: function(t, e, i) {
        var r = this.getElement();
        if (r && r.width > 0 && r.height > 0) {
          t.globalAlpha = pt.clamp(this._opacity, 0, 1), this._setStyles(t, e, i);
          var s = this._smoothing, a = s === "off";
          Dt.setPrefixed(
            t,
            a ? "imageSmoothingEnabled" : "imageSmoothingQuality",
            a ? !1 : s
          ), t.drawImage(
            r,
            -this._size.width / 2,
            -this._size.height / 2
          );
        }
      },
      _canComposite: function() {
        return !0;
      }
    }), We = I.extend({
      _class: "SymbolItem",
      _applyMatrix: !1,
      _canApplyMatrix: !1,
      _boundsOptions: { stroke: !0 },
      _serializeFields: {
        symbol: null
      },
      initialize: function(e, i) {
        this._initialize(
          e,
          i !== W && z.read(arguments, 1)
        ) || this.setDefinition(e instanceof ee ? e : new ee(e));
      },
      _equals: function(t) {
        return this._definition === t._definition;
      },
      copyContent: function(t) {
        this.setDefinition(t._definition);
      },
      getDefinition: function() {
        return this._definition;
      },
      setDefinition: function(t) {
        this._definition = t, this._changed(9);
      },
      getSymbol: "#getDefinition",
      setSymbol: "#setDefinition",
      isEmpty: function() {
        return this._definition._item.isEmpty();
      },
      _getBounds: function(t, e) {
        var i = this._definition._item;
        return i._getCachedBounds(i._matrix.prepended(t), e);
      },
      _hitTestSelf: function(t, e, i) {
        var r = e.extend({ all: !1 }), s = this._definition._item._hitTest(t, r, i);
        return s && (s.item = this), s;
      },
      _draw: function(t, e) {
        this._definition._item.draw(t, e);
      }
    }), ee = M.extend({
      _class: "SymbolDefinition",
      initialize: function(e, i) {
        this._id = Bt.get(), this.project = dt.project, e && this.setItem(e, i);
      },
      _serialize: function(t, e) {
        return e.add(this, function() {
          return M.serialize(
            [this._class, this._item],
            t,
            !1,
            e
          );
        });
      },
      _changed: function(t) {
        t & 8 && I._clearBoundsCache(this), t & 1 && this.project._changed(t);
      },
      getItem: function() {
        return this._item;
      },
      setItem: function(t, e) {
        t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new z()), t._symbol = this, this._changed(9);
      },
      getDefinition: "#getItem",
      setDefinition: "#setItem",
      place: function(t) {
        return new We(this, t);
      },
      clone: function() {
        return new ee(this._item.clone(!1));
      },
      equals: function(t) {
        return t === this || t && this._item.equals(t._item) || !1;
      }
    }), ye = M.extend({
      _class: "HitResult",
      initialize: function(e, i, r) {
        this.type = e, this.item = i, r && this.inject(r);
      },
      statics: {
        getOptions: function(t) {
          var e = t && M.read(t);
          return new M({
            type: null,
            tolerance: dt.settings.hitTolerance,
            fill: !e,
            stroke: !e,
            segments: !e,
            handles: !1,
            ends: !1,
            position: !1,
            center: !1,
            bounds: !1,
            guides: !1,
            selected: !1
          }, e);
        }
      }
    }), vt = M.extend({
      _class: "Segment",
      beans: !0,
      _selection: 0,
      initialize: function(e, i, r, s, a, h) {
        var o = arguments.length, l, f, _, v;
        o > 0 && (e == null || typeof e == "object" ? o === 1 && e && "point" in e ? (l = e.point, f = e.handleIn, _ = e.handleOut, v = e.selection) : (l = e, f = i, _ = r, v = s) : (l = [e, i], f = r !== W ? [r, s] : null, _ = a !== W ? [a, h] : null)), new oi(l, this, "_point"), new oi(f, this, "_handleIn"), new oi(_, this, "_handleOut"), v && this.setSelection(v);
      },
      _serialize: function(t, e) {
        var i = this._point, r = this._selection, s = r || this.hasHandles() ? [i, this._handleIn, this._handleOut] : i;
        return r && s.push(r), M.serialize(s, t, !0, e);
      },
      _changed: function(t) {
        var e = this._path;
        if (!!e) {
          var i = e._curves, r = this._index, s;
          i && ((!t || t === this._point || t === this._handleIn) && (s = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) && s._changed(), (!t || t === this._point || t === this._handleOut) && (s = i[r]) && s._changed()), e._changed(41);
        }
      },
      getPoint: function() {
        return this._point;
      },
      setPoint: function() {
        this._point.set(z.read(arguments));
      },
      getHandleIn: function() {
        return this._handleIn;
      },
      setHandleIn: function() {
        this._handleIn.set(z.read(arguments));
      },
      getHandleOut: function() {
        return this._handleOut;
      },
      setHandleOut: function() {
        this._handleOut.set(z.read(arguments));
      },
      hasHandles: function() {
        return !this._handleIn.isZero() || !this._handleOut.isZero();
      },
      isSmooth: function() {
        var t = this._handleIn, e = this._handleOut;
        return !t.isZero() && !e.isZero() && t.isCollinear(e);
      },
      clearHandles: function() {
        this._handleIn._set(0, 0), this._handleOut._set(0, 0);
      },
      getSelection: function() {
        return this._selection;
      },
      setSelection: function(t) {
        var e = this._selection, i = this._path;
        this._selection = t = t || 0, i && t !== e && (i._updateSelection(this, e, t), i._changed(257));
      },
      _changeSelection: function(t, e) {
        var i = this._selection;
        this.setSelection(e ? i | t : i & ~t);
      },
      isSelected: function() {
        return !!(this._selection & 7);
      },
      setSelected: function(t) {
        this._changeSelection(7, t);
      },
      getIndex: function() {
        return this._index !== W ? this._index : null;
      },
      getPath: function() {
        return this._path || null;
      },
      getCurve: function() {
        var t = this._path, e = this._index;
        return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null;
      },
      getLocation: function() {
        var t = this.getCurve();
        return t ? new xe(t, this === t._segment1 ? 0 : 1) : null;
      },
      getNext: function() {
        var t = this._path && this._path._segments;
        return t && (t[this._index + 1] || this._path._closed && t[0]) || null;
      },
      smooth: function(t, e, i) {
        var r = t || {}, s = r.type, a = r.factor, h = this.getPrevious(), o = this.getNext(), l = (h || this)._point, f = this._point, _ = (o || this)._point, v = l.getDistance(f), g = f.getDistance(_);
        if (!s || s === "catmull-rom") {
          var d = a === W ? 0.5 : a, w = Math.pow(v, d), m = w * w, k = Math.pow(g, d), p = k * k;
          if (!e && h) {
            var y = 2 * p + 3 * k * w + m, c = 3 * k * (k + w);
            this.setHandleIn(c !== 0 ? new z(
              (p * l._x + y * f._x - m * _._x) / c - f._x,
              (p * l._y + y * f._y - m * _._y) / c - f._y
            ) : new z());
          }
          if (!i && o) {
            var y = 2 * m + 3 * w * k + p, c = 3 * w * (w + k);
            this.setHandleOut(c !== 0 ? new z(
              (m * _._x + y * f._x - p * l._x) / c - f._x,
              (m * _._y + y * f._y - p * l._y) / c - f._y
            ) : new z());
          }
        } else if (s === "geometric") {
          if (h && o) {
            var x = l.subtract(_), C = a === W ? 0.4 : a, P = C * v / (v + g);
            e || this.setHandleIn(x.multiply(P)), i || this.setHandleOut(x.multiply(P - C));
          }
        } else
          throw new Error("Smoothing method '" + s + "' not supported.");
      },
      getPrevious: function() {
        var t = this._path && this._path._segments;
        return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null;
      },
      isFirst: function() {
        return !this._index;
      },
      isLast: function() {
        var t = this._path;
        return t && this._index === t._segments.length - 1 || !1;
      },
      reverse: function() {
        var t = this._handleIn, e = this._handleOut, i = t.clone();
        t.set(e), e.set(i);
      },
      reversed: function() {
        return new vt(this._point, this._handleOut, this._handleIn);
      },
      remove: function() {
        return this._path ? !!this._path.removeSegment(this._index) : !1;
      },
      clone: function() {
        return new vt(this._point, this._handleIn, this._handleOut);
      },
      equals: function(t) {
        return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1;
      },
      toString: function() {
        var t = ["point: " + this._point];
        return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }";
      },
      transform: function(t) {
        this._transformCoordinates(t, new Array(6), !0), this._changed();
      },
      interpolate: function(t, e, i) {
        var r = 1 - i, s = i, a = t._point, h = e._point, o = t._handleIn, l = e._handleIn, f = e._handleOut, _ = t._handleOut;
        this._point._set(
          r * a._x + s * h._x,
          r * a._y + s * h._y,
          !0
        ), this._handleIn._set(
          r * o._x + s * l._x,
          r * o._y + s * l._y,
          !0
        ), this._handleOut._set(
          r * _._x + s * f._x,
          r * _._y + s * f._y,
          !0
        ), this._changed();
      },
      _transformCoordinates: function(t, e, i) {
        var r = this._point, s = !i || !this._handleIn.isZero() ? this._handleIn : null, a = !i || !this._handleOut.isZero() ? this._handleOut : null, h = r._x, o = r._y, l = 2;
        return e[0] = h, e[1] = o, s && (e[l++] = s._x + h, e[l++] = s._y + o), a && (e[l++] = a._x + h, e[l++] = a._y + o), t && (t._transformCoordinates(e, e, l / 2), h = e[0], o = e[1], i ? (r._x = h, r._y = o, l = 2, s && (s._x = e[l++] - h, s._y = e[l++] - o), a && (a._x = e[l++] - h, a._y = e[l++] - o)) : (s || (e[l++] = h, e[l++] = o), a || (e[l++] = h, e[l++] = o))), e;
      }
    }), oi = z.extend({
      initialize: function(e, i, r) {
        var s, a, h;
        if (!e)
          s = a = 0;
        else if ((s = e[0]) !== W)
          a = e[1];
        else {
          var o = e;
          (s = o.x) === W && (o = z.read(arguments), s = o.x), a = o.y, h = o.selected;
        }
        this._x = s, this._y = a, this._owner = i, i[r] = this, h && this.setSelected(!0);
      },
      _set: function(t, e) {
        return this._x = t, this._y = e, this._owner._changed(this), this;
      },
      getX: function() {
        return this._x;
      },
      setX: function(t) {
        this._x = t, this._owner._changed(this);
      },
      getY: function() {
        return this._y;
      },
      setY: function(t) {
        this._y = t, this._owner._changed(this);
      },
      isZero: function() {
        var t = pt.isZero;
        return t(this._x) && t(this._y);
      },
      isSelected: function() {
        return !!(this._owner._selection & this._getSelection());
      },
      setSelected: function(t) {
        this._owner._changeSelection(this._getSelection(), t);
      },
      _getSelection: function() {
        var t = this._owner;
        return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0;
      }
    }), st = M.extend(
      {
        _class: "Curve",
        beans: !0,
        initialize: function(e, i, r, s, a, h, o, l) {
          var f = arguments.length, _, v, g, d, w, m;
          f === 3 ? (this._path = e, _ = i, v = r) : f ? f === 1 ? "segment1" in e ? (_ = new vt(e.segment1), v = new vt(e.segment2)) : "point1" in e ? (g = e.point1, w = e.handle1, m = e.handle2, d = e.point2) : Array.isArray(e) && (g = [e[0], e[1]], d = [e[6], e[7]], w = [e[2] - e[0], e[3] - e[1]], m = [e[4] - e[6], e[5] - e[7]]) : f === 2 ? (_ = new vt(e), v = new vt(i)) : f === 4 ? (g = e, w = i, m = r, d = s) : f === 8 && (g = [e, i], d = [o, l], w = [r - e, s - i], m = [a - o, h - l]) : (_ = new vt(), v = new vt()), this._segment1 = _ || new vt(g, null, w), this._segment2 = v || new vt(d, m, null);
        },
        _serialize: function(t, e) {
          return M.serialize(
            this.hasHandles() ? [
              this.getPoint1(),
              this.getHandle1(),
              this.getHandle2(),
              this.getPoint2()
            ] : [this.getPoint1(), this.getPoint2()],
            t,
            !0,
            e
          );
        },
        _changed: function() {
          this._length = this._bounds = W;
        },
        clone: function() {
          return new st(this._segment1, this._segment2);
        },
        toString: function() {
          var t = ["point1: " + this._segment1._point];
          return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }";
        },
        classify: function() {
          return st.classify(this.getValues());
        },
        remove: function() {
          var t = !1;
          if (this._path) {
            var e = this._segment2, i = e._handleOut;
            t = e.remove(), t && this._segment1._handleOut.set(i);
          }
          return t;
        },
        getPoint1: function() {
          return this._segment1._point;
        },
        setPoint1: function() {
          this._segment1._point.set(z.read(arguments));
        },
        getPoint2: function() {
          return this._segment2._point;
        },
        setPoint2: function() {
          this._segment2._point.set(z.read(arguments));
        },
        getHandle1: function() {
          return this._segment1._handleOut;
        },
        setHandle1: function() {
          this._segment1._handleOut.set(z.read(arguments));
        },
        getHandle2: function() {
          return this._segment2._handleIn;
        },
        setHandle2: function() {
          this._segment2._handleIn.set(z.read(arguments));
        },
        getSegment1: function() {
          return this._segment1;
        },
        getSegment2: function() {
          return this._segment2;
        },
        getPath: function() {
          return this._path;
        },
        getIndex: function() {
          return this._segment1._index;
        },
        getNext: function() {
          var t = this._path && this._path._curves;
          return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null;
        },
        getPrevious: function() {
          var t = this._path && this._path._curves;
          return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null;
        },
        isFirst: function() {
          return !this._segment1._index;
        },
        isLast: function() {
          var t = this._path;
          return t && this._segment1._index === t._curves.length - 1 || !1;
        },
        isSelected: function() {
          return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected();
        },
        setSelected: function(t) {
          this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t);
        },
        getValues: function(t) {
          return st.getValues(this._segment1, this._segment2, t);
        },
        getPoints: function() {
          for (var t = this.getValues(), e = [], i = 0; i < 8; i += 2)
            e.push(new z(t[i], t[i + 1]));
          return e;
        }
      },
      {
        getLength: function() {
          return this._length == null && (this._length = st.getLength(this.getValues(), 0, 1)), this._length;
        },
        getArea: function() {
          return st.getArea(this.getValues());
        },
        getLine: function() {
          return new Rt(this._segment1._point, this._segment2._point);
        },
        getPart: function(t, e) {
          return new st(st.getPart(this.getValues(), t, e));
        },
        getPartLength: function(t, e) {
          return st.getLength(this.getValues(), t, e);
        },
        divideAt: function(t) {
          return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t));
        },
        divideAtTime: function(t, e) {
          var i = 1e-8, r = 1 - i, s = null;
          if (t >= i && t <= r) {
            var a = st.subdivide(this.getValues(), t), h = a[0], o = a[1], l = e || this.hasHandles(), f = this._segment1, _ = this._segment2, v = this._path;
            l && (f._handleOut._set(h[2] - h[0], h[3] - h[1]), _._handleIn._set(o[4] - o[6], o[5] - o[7]));
            var g = h[6], d = h[7], w = new vt(
              new z(g, d),
              l && new z(h[4] - g, h[5] - d),
              l && new z(o[2] - g, o[3] - d)
            );
            v ? (v.insert(f._index + 1, w), s = this.getNext()) : (this._segment2 = w, this._changed(), s = new st(w, _));
          }
          return s;
        },
        splitAt: function(t) {
          var e = this._path;
          return e ? e.splitAt(t) : null;
        },
        splitAtTime: function(t) {
          return this.splitAt(this.getLocationAtTime(t));
        },
        divide: function(t, e) {
          return this.divideAtTime(t === W ? 0.5 : e ? t : this.getTimeAt(t));
        },
        split: function(t, e) {
          return this.splitAtTime(t === W ? 0.5 : e ? t : this.getTimeAt(t));
        },
        reversed: function() {
          return new st(this._segment2.reversed(), this._segment1.reversed());
        },
        clearHandles: function() {
          this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0);
        },
        statics: {
          getValues: function(t, e, i, r) {
            var s = t._point, a = t._handleOut, h = e._handleIn, o = e._point, l = s.x, f = s.y, _ = o.x, v = o.y, g = r ? [l, f, l, f, _, v, _, v] : [
              l,
              f,
              l + a._x,
              f + a._y,
              _ + h._x,
              v + h._y,
              _,
              v
            ];
            return i && i._transformCoordinates(g, g, 4), g;
          },
          subdivide: function(t, e) {
            var i = t[0], r = t[1], s = t[2], a = t[3], h = t[4], o = t[5], l = t[6], f = t[7];
            e === W && (e = 0.5);
            var _ = 1 - e, v = _ * i + e * s, g = _ * r + e * a, d = _ * s + e * h, w = _ * a + e * o, m = _ * h + e * l, k = _ * o + e * f, p = _ * v + e * d, y = _ * g + e * w, c = _ * d + e * m, x = _ * w + e * k, C = _ * p + e * c, P = _ * y + e * x;
            return [
              [i, r, v, g, p, y, C, P],
              [C, P, c, x, m, k, l, f]
            ];
          },
          getMonoCurves: function(t, e) {
            var i = [], r = e ? 0 : 1, s = t[r + 0], a = t[r + 2], h = t[r + 4], o = t[r + 6];
            if (s >= a == a >= h && a >= h == h >= o || st.isStraight(t))
              i.push(t);
            else {
              var l = 3 * (a - h) - s + o, f = 2 * (s + h) - 4 * a, _ = a - s, v = 1e-8, g = 1 - v, d = [], w = pt.solveQuadratic(l, f, _, d, v, g);
              if (!w)
                i.push(t);
              else {
                d.sort();
                var m = d[0], k = st.subdivide(t, m);
                i.push(k[0]), w > 1 && (m = (d[1] - m) / (1 - m), k = st.subdivide(k[1], m), i.push(k[0])), i.push(k[1]);
              }
            }
            return i;
          },
          solveCubic: function(t, e, i, r, s, a) {
            var h = t[e], o = t[e + 2], l = t[e + 4], f = t[e + 6], _ = 0;
            if (!(h < i && f < i && o < i && l < i || h > i && f > i && o > i && l > i)) {
              var v = 3 * (o - h), g = 3 * (l - o) - v, d = f - h - v - g;
              _ = pt.solveCubic(d, g, v, h - i, r, s, a);
            }
            return _;
          },
          getTimeOf: function(t, e) {
            var i = new z(t[0], t[1]), r = new z(t[6], t[7]), s = 1e-12, a = 1e-7, h = e.isClose(i, s) ? 0 : e.isClose(r, s) ? 1 : null;
            if (h === null)
              for (var o = [e.x, e.y], l = [], f = 0; f < 2; f++)
                for (var _ = st.solveCubic(t, f, o[f], l, 0, 1), v = 0; v < _; v++) {
                  var g = l[v];
                  if (e.isClose(st.getPoint(t, g), a))
                    return g;
                }
            return e.isClose(i, a) ? 0 : e.isClose(r, a) ? 1 : null;
          },
          getNearestTime: function(t, e) {
            if (st.isStraight(t)) {
              var i = t[0], r = t[1], s = t[6], a = t[7], h = s - i, o = a - r, l = h * h + o * o;
              if (l === 0)
                return 0;
              var f = ((e.x - i) * h + (e.y - r) * o) / l;
              return f < 1e-12 ? 0 : f > 0.999999999999 ? 1 : st.getTimeOf(
                t,
                new z(i + f * h, r + f * o)
              );
            }
            var _ = 100, v = 1 / 0, g = 0;
            function d(k) {
              if (k >= 0 && k <= 1) {
                var p = e.getDistance(st.getPoint(t, k), !0);
                if (p < v)
                  return v = p, g = k, !0;
              }
            }
            for (var w = 0; w <= _; w++)
              d(w / _);
            for (var m = 1 / (_ * 2); m > 1e-8; )
              !d(g - m) && !d(g + m) && (m /= 2);
            return g;
          },
          getPart: function(t, e, i) {
            var r = e > i;
            if (r) {
              var s = e;
              e = i, i = s;
            }
            return e > 0 && (t = st.subdivide(t, e)[1]), i < 1 && (t = st.subdivide(t, (i - e) / (1 - e))[0]), r ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t;
          },
          isFlatEnough: function(t, e) {
            var i = t[0], r = t[1], s = t[2], a = t[3], h = t[4], o = t[5], l = t[6], f = t[7], _ = 3 * s - 2 * i - l, v = 3 * a - 2 * r - f, g = 3 * h - 2 * l - i, d = 3 * o - 2 * f - r;
            return Math.max(_ * _, g * g) + Math.max(v * v, d * d) <= 16 * e * e;
          },
          getArea: function(t) {
            var e = t[0], i = t[1], r = t[2], s = t[3], a = t[4], h = t[5], o = t[6], l = t[7];
            return 3 * ((l - i) * (r + a) - (o - e) * (s + h) + s * (e - a) - r * (i - h) + l * (a + e / 3) - o * (h + i / 3)) / 20;
          },
          getBounds: function(t) {
            for (var e = t.slice(0, 2), i = e.slice(), r = [0, 0], s = 0; s < 2; s++)
              st._addBounds(
                t[s],
                t[s + 2],
                t[s + 4],
                t[s + 6],
                s,
                0,
                e,
                i,
                r
              );
            return new ot(e[0], e[1], i[0] - e[0], i[1] - e[1]);
          },
          _addBounds: function(t, e, i, r, s, a, h, o, l) {
            function f(C, P) {
              var S = C - P, E = C + P;
              S < h[s] && (h[s] = S), E > o[s] && (o[s] = E);
            }
            a /= 2;
            var _ = h[s] + a, v = o[s] - a;
            if (t < _ || e < _ || i < _ || r < _ || t > v || e > v || i > v || r > v)
              if (e < t != e < r && i < t != i < r)
                f(t, 0), f(r, 0);
              else {
                var g = 3 * (e - i) - t + r, d = 2 * (t + i) - 4 * e, w = e - t, m = pt.solveQuadratic(g, d, w, l), k = 1e-8, p = 1 - k;
                f(r, 0);
                for (var y = 0; y < m; y++) {
                  var c = l[y], x = 1 - c;
                  k <= c && c <= p && f(
                    x * x * x * t + 3 * x * x * c * e + 3 * x * c * c * i + c * c * c * r,
                    a
                  );
                }
              }
          }
        }
      },
      M.each(
        ["getBounds", "getStrokeBounds", "getHandleBounds"],
        function(t) {
          this[t] = function() {
            this._bounds || (this._bounds = {});
            var e = this._bounds[t];
            return e || (e = this._bounds[t] = Tt[t](
              [this._segment1, this._segment2],
              !1,
              this._path
            )), e.clone();
          };
        },
        {}
      ),
      M.each({
        isStraight: function(t, e, i, r) {
          if (e.isZero() && i.isZero())
            return !0;
          var s = r.subtract(t);
          if (s.isZero())
            return !1;
          if (s.isCollinear(e) && s.isCollinear(i)) {
            var a = new Rt(t, r), h = 1e-7;
            if (a.getDistance(t.add(e)) < h && a.getDistance(r.add(i)) < h) {
              var o = s.dot(s), l = s.dot(e) / o, f = s.dot(i) / o;
              return l >= 0 && l <= 1 && f <= 0 && f >= -1;
            }
          }
          return !1;
        },
        isLinear: function(t, e, i, r) {
          var s = r.subtract(t).divide(3);
          return e.equals(s) && i.negate().equals(s);
        }
      }, function(t, e) {
        this[e] = function(i) {
          var r = this._segment1, s = this._segment2;
          return t(
            r._point,
            r._handleOut,
            s._handleIn,
            s._point,
            i
          );
        }, this.statics[e] = function(i, r) {
          var s = i[0], a = i[1], h = i[6], o = i[7];
          return t(
            new z(s, a),
            new z(i[2] - s, i[3] - a),
            new z(i[4] - h, i[5] - o),
            new z(h, o),
            r
          );
        };
      }, {
        statics: {},
        hasHandles: function() {
          return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero();
        },
        hasLength: function(t) {
          return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0);
        },
        isCollinear: function(t) {
          return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine());
        },
        isHorizontal: function() {
          return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).y) < 1e-8;
        },
        isVertical: function() {
          return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).x) < 1e-8;
        }
      }),
      {
        beans: !1,
        getLocationAt: function(t, e) {
          return this.getLocationAtTime(
            e ? t : this.getTimeAt(t)
          );
        },
        getLocationAtTime: function(t) {
          return t != null && t >= 0 && t <= 1 ? new xe(this, t) : null;
        },
        getTimeAt: function(t, e) {
          return st.getTimeAt(this.getValues(), t, e);
        },
        getParameterAt: "#getTimeAt",
        getTimesWithTangent: function() {
          var t = z.read(arguments);
          return t.isZero() ? [] : st.getTimesWithTangent(this.getValues(), t);
        },
        getOffsetAtTime: function(t) {
          return this.getPartLength(0, t);
        },
        getLocationOf: function() {
          return this.getLocationAtTime(this.getTimeOf(z.read(arguments)));
        },
        getOffsetOf: function() {
          var t = this.getLocationOf.apply(this, arguments);
          return t ? t.getOffset() : null;
        },
        getTimeOf: function() {
          return st.getTimeOf(this.getValues(), z.read(arguments));
        },
        getParameterOf: "#getTimeOf",
        getNearestLocation: function() {
          var t = z.read(arguments), e = this.getValues(), i = st.getNearestTime(e, t), r = st.getPoint(e, i);
          return new xe(this, i, r, null, t.getDistance(r));
        },
        getNearestPoint: function() {
          var t = this.getNearestLocation.apply(this, arguments);
          return t && t.getPoint();
        }
      },
      new function() {
        var t = [
          "getPoint",
          "getTangent",
          "getNormal",
          "getWeightedTangent",
          "getWeightedNormal",
          "getCurvature"
        ];
        return M.each(
          t,
          function(e) {
            this[e + "At"] = function(i, r) {
              var s = this.getValues();
              return st[e](s, r ? i : st.getTimeAt(s, i));
            }, this[e + "AtTime"] = function(i) {
              return st[e](this.getValues(), i);
            };
          },
          {
            statics: {
              _evaluateMethods: t
            }
          }
        );
      }(),
      new function() {
        function t(r) {
          var s = r[0], a = r[1], h = r[2], o = r[3], l = r[4], f = r[5], _ = r[6], v = r[7], g = 9 * (h - l) + 3 * (_ - s), d = 6 * (s + l) - 12 * h, w = 3 * (h - s), m = 9 * (o - f) + 3 * (v - a), k = 6 * (a + f) - 12 * o, p = 3 * (o - a);
          return function(y) {
            var c = (g * y + d) * y + w, x = (m * y + k) * y + p;
            return Math.sqrt(c * c + x * x);
          };
        }
        function e(r, s) {
          return Math.max(2, Math.min(16, Math.ceil(Math.abs(s - r) * 32)));
        }
        function i(r, s, a, h) {
          if (s == null || s < 0 || s > 1)
            return null;
          var o = r[0], l = r[1], f = r[2], _ = r[3], v = r[4], g = r[5], d = r[6], w = r[7], m = pt.isZero;
          m(f - o) && m(_ - l) && (f = o, _ = l), m(v - d) && m(g - w) && (v = d, g = w);
          var k = 3 * (f - o), p = 3 * (v - f) - k, y = d - o - k - p, c = 3 * (_ - l), x = 3 * (g - _) - c, C = w - l - c - x, P, S;
          if (a === 0)
            P = s === 0 ? o : s === 1 ? d : ((y * s + p) * s + k) * s + o, S = s === 0 ? l : s === 1 ? w : ((C * s + x) * s + c) * s + l;
          else {
            var E = 1e-8, L = 1 - E;
            if (s < E ? (P = k, S = c) : s > L ? (P = 3 * (d - v), S = 3 * (w - g)) : (P = (3 * y * s + 2 * p) * s + k, S = (3 * C * s + 2 * x) * s + c), h) {
              P === 0 && S === 0 && (s < E || s > L) && (P = v - f, S = g - _);
              var N = Math.sqrt(P * P + S * S);
              N && (P /= N, S /= N);
            }
            if (a === 3) {
              var v = 6 * y * s + 2 * p, g = 6 * C * s + 2 * x, V = Math.pow(P * P + S * S, 3 / 2);
              P = V !== 0 ? (P * g - S * v) / V : 0, S = 0;
            }
          }
          return a === 2 ? new z(S, -P) : new z(P, S);
        }
        return { statics: {
          classify: function(r) {
            var s = r[0], a = r[1], h = r[2], o = r[3], l = r[4], f = r[5], _ = r[6], v = r[7], g = s * (v - f) + a * (l - _) + _ * f - v * l, d = h * (a - v) + o * (_ - s) + s * v - a * _, w = l * (o - a) + f * (s - h) + h * a - o * s, m = 3 * w, k = m - d, p = k - d + g, y = Math.sqrt(p * p + k * k + m * m), c = y !== 0 ? 1 / y : 0, x = pt.isZero, C = "serpentine";
            p *= c, k *= c, m *= c;
            function P(N, V, T) {
              var R = V !== W, F = R && V > 0 && V < 1, U = R && T > 0 && T < 1;
              return R && (!(F || U) || N === "loop" && !(F && U)) && (N = "arch", F = U = !1), {
                type: N,
                roots: F || U ? F && U ? V < T ? [V, T] : [T, V] : [F ? V : T] : null
              };
            }
            if (x(p))
              return x(k) ? P(x(m) ? "line" : "quadratic") : P(C, m / (3 * k));
            var S = 3 * k * k - 4 * p * m;
            if (x(S))
              return P("cusp", k / (2 * p));
            var E = S > 0 ? Math.sqrt(S / 3) : Math.sqrt(-S), L = 2 * p;
            return P(
              S > 0 ? C : "loop",
              (k + E) / L,
              (k - E) / L
            );
          },
          getLength: function(r, s, a, h) {
            if (s === W && (s = 0), a === W && (a = 1), st.isStraight(r)) {
              var o = r;
              a < 1 && (o = st.subdivide(o, a)[0], s /= a), s > 0 && (o = st.subdivide(o, s)[1]);
              var l = o[6] - o[0], f = o[7] - o[1];
              return Math.sqrt(l * l + f * f);
            }
            return pt.integrate(
              h || t(r),
              s,
              a,
              e(s, a)
            );
          },
          getTimeAt: function(r, s, a) {
            if (a === W && (a = s < 0 ? 1 : 0), s === 0)
              return a;
            var h = Math.abs, o = 1e-12, l = s > 0, f = l ? a : 0, _ = l ? 1 : a, v = t(r), g = st.getLength(r, f, _, v), d = h(s) - g;
            if (h(d) < o)
              return l ? _ : f;
            if (d > o)
              return null;
            var w = s / g, m = 0;
            function k(p) {
              return m += pt.integrate(
                v,
                a,
                p,
                e(a, p)
              ), a = p, m - s;
            }
            return pt.findRoot(
              k,
              v,
              a + w,
              f,
              _,
              32,
              1e-12
            );
          },
          getPoint: function(r, s) {
            return i(r, s, 0, !1);
          },
          getTangent: function(r, s) {
            return i(r, s, 1, !0);
          },
          getWeightedTangent: function(r, s) {
            return i(r, s, 1, !1);
          },
          getNormal: function(r, s) {
            return i(r, s, 2, !0);
          },
          getWeightedNormal: function(r, s) {
            return i(r, s, 2, !1);
          },
          getCurvature: function(r, s) {
            return i(r, s, 3, !1).x;
          },
          getPeaks: function(r) {
            var s = r[0], a = r[1], h = r[2], o = r[3], l = r[4], f = r[5], _ = r[6], v = r[7], g = -s + 3 * h - 3 * l + _, d = 3 * s - 6 * h + 3 * l, w = -3 * s + 3 * h, m = -a + 3 * o - 3 * f + v, k = 3 * a - 6 * o + 3 * f, p = -3 * a + 3 * o, y = 1e-8, c = 1 - y, x = [];
            return pt.solveCubic(
              9 * (g * g + m * m),
              9 * (g * d + k * m),
              2 * (d * d + k * k) + 3 * (w * g + p * m),
              w * d + k * p,
              x,
              y,
              c
            ), x.sort();
          }
        } };
      }(),
      new function() {
        function t(d, w, m, k, p, y, c) {
          var x = !c && m.getPrevious() === p, C = !c && m !== p && m.getNext() === p, P = 1e-8, S = 1 - P;
          if (k !== null && k >= (x ? P : 0) && k <= (C ? S : 1) && y !== null && y >= (C ? P : 0) && y <= (x ? S : 1)) {
            var E = new xe(m, k, null, c), L = new xe(p, y, null, c);
            E._intersection = L, L._intersection = E, (!w || w(E)) && xe.insert(d, E, !0);
          }
        }
        function e(d, w, m, k, p, y, c, x, C, P, S, E, L) {
          if (++C >= 4096 || ++x >= 40)
            return C;
          var N = 1e-9, V = w[0], T = w[1], R = w[6], F = w[7], U = Rt.getSignedDistance, q = U(V, T, R, F, w[2], w[3]), j = U(V, T, R, F, w[4], w[5]), Q = q * j > 0 ? 3 / 4 : 4 / 9, et = Q * Math.min(0, q, j), rt = Q * Math.max(0, q, j), ht = U(V, T, R, F, d[0], d[1]), X = U(V, T, R, F, d[2], d[3]), K = U(V, T, R, F, d[4], d[5]), at = U(V, T, R, F, d[6], d[7]), lt = i(ht, X, K, at), ft = lt[0], mt = lt[1], J, gt;
          if (q === 0 && j === 0 && ht === 0 && X === 0 && K === 0 && at === 0 || (J = r(ft, mt, et, rt)) == null || (gt = r(
            ft.reverse(),
            mt.reverse(),
            et,
            rt
          )) == null)
            return C;
          var It = P + (S - P) * J, yt = P + (S - P) * gt;
          if (Math.max(L - E, yt - It) < N) {
            var ie = (It + yt) / 2, $t = (E + L) / 2;
            t(
              p,
              y,
              c ? k : m,
              c ? $t : ie,
              c ? m : k,
              c ? ie : $t
            );
          } else {
            d = st.getPart(d, J, gt);
            var se = L - E;
            if (gt - J > 0.8)
              if (yt - It > se) {
                var Kt = st.subdivide(d, 0.5), ie = (It + yt) / 2;
                C = e(
                  w,
                  Kt[0],
                  k,
                  m,
                  p,
                  y,
                  !c,
                  x,
                  C,
                  E,
                  L,
                  It,
                  ie
                ), C = e(
                  w,
                  Kt[1],
                  k,
                  m,
                  p,
                  y,
                  !c,
                  x,
                  C,
                  E,
                  L,
                  ie,
                  yt
                );
              } else {
                var Kt = st.subdivide(w, 0.5), $t = (E + L) / 2;
                C = e(
                  Kt[0],
                  d,
                  k,
                  m,
                  p,
                  y,
                  !c,
                  x,
                  C,
                  E,
                  $t,
                  It,
                  yt
                ), C = e(
                  Kt[1],
                  d,
                  k,
                  m,
                  p,
                  y,
                  !c,
                  x,
                  C,
                  $t,
                  L,
                  It,
                  yt
                );
              }
            else
              se === 0 || se >= N ? C = e(
                w,
                d,
                k,
                m,
                p,
                y,
                !c,
                x,
                C,
                E,
                L,
                It,
                yt
              ) : C = e(
                d,
                w,
                m,
                k,
                p,
                y,
                c,
                x,
                C,
                It,
                yt,
                E,
                L
              );
          }
          return C;
        }
        function i(d, w, m, k) {
          var p = [0, d], y = [1 / 3, w], c = [2 / 3, m], x = [1, k], C = w - (2 * d + k) / 3, P = m - (d + 2 * k) / 3, S;
          if (C * P < 0)
            S = [[p, y, x], [p, c, x]];
          else {
            var E = C / P;
            S = [
              E >= 2 ? [p, y, x] : E <= 0.5 ? [p, c, x] : [p, y, c, x],
              [p, x]
            ];
          }
          return (C || P) < 0 ? S.reverse() : S;
        }
        function r(d, w, m, k) {
          return d[0][1] < m ? s(d, !0, m) : w[0][1] > k ? s(w, !1, k) : d[0][0];
        }
        function s(d, w, m) {
          for (var k = d[0][0], p = d[0][1], y = 1, c = d.length; y < c; y++) {
            var x = d[y][0], C = d[y][1];
            if (w ? C >= m : C <= m)
              return C === m ? x : k + (m - p) * (x - k) / (C - p);
            k = x, p = C;
          }
          return null;
        }
        function a(d, w, m, k, p) {
          var y = pt.isZero;
          if (y(k) && y(p)) {
            var c = st.getTimeOf(d, new z(w, m));
            return c === null ? [] : [c];
          }
          for (var x = Math.atan2(-p, k), C = Math.sin(x), P = Math.cos(x), S = [], E = [], L = 0; L < 8; L += 2) {
            var N = d[L] - w, V = d[L + 1] - m;
            S.push(
              N * P - V * C,
              N * C + V * P
            );
          }
          return st.solveCubic(S, 1, 0, E, 0, 1), E;
        }
        function h(d, w, m, k, p, y, c) {
          for (var x = w[0], C = w[1], P = w[6], S = w[7], E = a(d, x, C, P - x, S - C), L = 0, N = E.length; L < N; L++) {
            var V = E[L], T = st.getPoint(d, V), R = st.getTimeOf(w, T);
            R !== null && t(
              p,
              y,
              c ? k : m,
              c ? R : V,
              c ? m : k,
              c ? V : R
            );
          }
        }
        function o(d, w, m, k, p, y) {
          var c = Rt.intersect(
            d[0],
            d[1],
            d[6],
            d[7],
            w[0],
            w[1],
            w[6],
            w[7]
          );
          c && t(
            p,
            y,
            m,
            st.getTimeOf(d, c),
            k,
            st.getTimeOf(w, c)
          );
        }
        function l(d, w, m, k, p, y) {
          var c = 1e-12, x = Math.min, C = Math.max;
          if (C(d[0], d[2], d[4], d[6]) + c > x(w[0], w[2], w[4], w[6]) && x(d[0], d[2], d[4], d[6]) - c < C(w[0], w[2], w[4], w[6]) && C(d[1], d[3], d[5], d[7]) + c > x(w[1], w[3], w[5], w[7]) && x(d[1], d[3], d[5], d[7]) - c < C(w[1], w[3], w[5], w[7])) {
            var P = v(d, w);
            if (P)
              for (var S = 0; S < 2; S++) {
                var E = P[S];
                t(
                  p,
                  y,
                  m,
                  E[0],
                  k,
                  E[1],
                  !0
                );
              }
            else {
              var L = st.isStraight(d), N = st.isStraight(w), V = L && N, T = L && !N, R = p.length;
              if ((V ? o : L || N ? h : e)(
                T ? w : d,
                T ? d : w,
                T ? k : m,
                T ? m : k,
                p,
                y,
                T,
                0,
                0,
                0,
                1,
                0,
                1
              ), !V || p.length === R)
                for (var S = 0; S < 4; S++) {
                  var F = S >> 1, U = S & 1, q = F * 6, j = U * 6, Q = new z(d[q], d[q + 1]), et = new z(w[j], w[j + 1]);
                  Q.isClose(et, c) && t(
                    p,
                    y,
                    m,
                    F,
                    k,
                    U
                  );
                }
            }
          }
          return p;
        }
        function f(d, w, m, k) {
          var p = st.classify(d);
          if (p.type === "loop") {
            var y = p.roots;
            t(
              m,
              k,
              w,
              y[0],
              w,
              y[1]
            );
          }
          return m;
        }
        function _(d, w, m, k, p, y) {
          var c = 1e-7, x = !w;
          x && (w = d);
          for (var C = d.length, P = w.length, S = new Array(C), E = x ? S : new Array(P), L = [], N = 0; N < C; N++)
            S[N] = d[N].getValues(k);
          if (!x)
            for (var N = 0; N < P; N++)
              E[N] = w[N].getValues(p);
          for (var V = be.findCurveBoundsCollisions(
            S,
            E,
            c
          ), T = 0; T < C; T++) {
            var R = d[T], F = S[T];
            x && f(F, R, L, m);
            var U = V[T];
            if (U)
              for (var q = 0; q < U.length; q++) {
                if (y && L.length)
                  return L;
                var j = U[q];
                if (!x || j > T) {
                  var Q = w[j], et = E[j];
                  l(
                    F,
                    et,
                    R,
                    Q,
                    L,
                    m
                  );
                }
              }
          }
          return L;
        }
        function v(d, w) {
          function m(at) {
            var lt = at[6] - at[0], ft = at[7] - at[1];
            return lt * lt + ft * ft;
          }
          var k = Math.abs, p = Rt.getDistance, y = 1e-8, c = 1e-7, x = st.isStraight(d), C = st.isStraight(w), P = x && C, S = m(d) < m(w), E = S ? w : d, L = S ? d : w, N = E[0], V = E[1], T = E[6] - N, R = E[7] - V;
          if (p(N, V, T, R, L[0], L[1], !0) < c && p(N, V, T, R, L[6], L[7], !0) < c)
            !P && p(N, V, T, R, E[2], E[3], !0) < c && p(N, V, T, R, E[4], E[5], !0) < c && p(N, V, T, R, L[2], L[3], !0) < c && p(N, V, T, R, L[4], L[5], !0) < c && (x = C = P = !0);
          else if (P)
            return null;
          if (x ^ C)
            return null;
          for (var F = [d, w], U = [], q = 0; q < 4 && U.length < 2; q++) {
            var j = q & 1, Q = j ^ 1, et = q >> 1, rt = st.getTimeOf(F[j], new z(
              F[Q][et ? 6 : 0],
              F[Q][et ? 7 : 1]
            ));
            if (rt != null) {
              var ht = j ? [et, rt] : [rt, et];
              (!U.length || k(ht[0] - U[0][0]) > y && k(ht[1] - U[0][1]) > y) && U.push(ht);
            }
            if (q > 2 && !U.length)
              break;
          }
          if (U.length !== 2)
            U = null;
          else if (!P) {
            var X = st.getPart(d, U[0][0], U[1][0]), K = st.getPart(w, U[0][1], U[1][1]);
            (k(K[2] - X[2]) > c || k(K[3] - X[3]) > c || k(K[4] - X[4]) > c || k(K[5] - X[5]) > c) && (U = null);
          }
          return U;
        }
        function g(d, w) {
          var m = d[0], k = d[1], p = d[2], y = d[3], c = d[4], x = d[5], C = d[6], P = d[7], S = w.normalize(), E = S.x, L = S.y, N = 3 * C - 9 * c + 9 * p - 3 * m, V = 3 * P - 9 * x + 9 * y - 3 * k, T = 6 * c - 12 * p + 6 * m, R = 6 * x - 12 * y + 6 * k, F = 3 * p - 3 * m, U = 3 * y - 3 * k, q = 2 * N * L - 2 * V * E, j = [];
          if (Math.abs(q) < pt.CURVETIME_EPSILON) {
            var Q = N * U - V * F, q = N * R - V * T;
            if (q != 0) {
              var et = -Q / q;
              et >= 0 && et <= 1 && j.push(et);
            }
          } else {
            var rt = (T * T - 4 * N * F) * L * L + (-2 * T * R + 4 * V * F + 4 * N * U) * E * L + (R * R - 4 * V * U) * E * E, ht = T * L - R * E;
            if (rt >= 0 && q != 0) {
              var X = Math.sqrt(rt), K = -(ht + X) / q, at = (-ht + X) / q;
              K >= 0 && K <= 1 && j.push(K), at >= 0 && at <= 1 && j.push(at);
            }
          }
          return j;
        }
        return {
          getIntersections: function(d) {
            var w = this.getValues(), m = d && d !== this && d.getValues();
            return m ? l(w, m, this, d, []) : f(w, this, []);
          },
          statics: {
            getOverlaps: v,
            getIntersections: _,
            getCurveLineIntersections: a,
            getTimesWithTangent: g
          }
        };
      }()
    ), xe = M.extend(
      {
        _class: "CurveLocation",
        initialize: function(e, i, r, s, a) {
          if (i >= 0.99999999) {
            var h = e.getNext();
            h && (i = 0, e = h);
          }
          this._setCurve(e), this._time = i, this._point = r || e.getPointAtTime(i), this._overlap = s, this._distance = a, this._intersection = this._next = this._previous = null;
        },
        _setPath: function(t) {
          this._path = t, this._version = t ? t._version : 0;
        },
        _setCurve: function(t) {
          this._setPath(t._path), this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2;
        },
        _setSegment: function(t) {
          var e = t.getCurve();
          e ? this._setCurve(e) : (this._setPath(t._path), this._segment1 = t, this._segment2 = null), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone();
        },
        getSegment: function() {
          var t = this._segment;
          if (!t) {
            var e = this.getCurve(), i = this.getTime();
            i === 0 ? t = e._segment1 : i === 1 ? t = e._segment2 : i != null && (t = e.getPartLength(0, i) < e.getPartLength(i, 1) ? e._segment1 : e._segment2), this._segment = t;
          }
          return t;
        },
        getCurve: function() {
          var t = this._path, e = this;
          t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null);
          function i(r) {
            var s = r && r.getCurve();
            if (s && (e._time = s.getTimeOf(e._point)) != null)
              return e._setCurve(s), s;
          }
          return this._curve || i(this._segment) || i(this._segment1) || i(this._segment2.getPrevious());
        },
        getPath: function() {
          var t = this.getCurve();
          return t && t._path;
        },
        getIndex: function() {
          var t = this.getCurve();
          return t && t.getIndex();
        },
        getTime: function() {
          var t = this.getCurve(), e = this._time;
          return t && e == null ? this._time = t.getTimeOf(this._point) : e;
        },
        getParameter: "#getTime",
        getPoint: function() {
          return this._point;
        },
        getOffset: function() {
          var t = this._offset;
          if (t == null) {
            t = 0;
            var e = this.getPath(), i = this.getIndex();
            if (e && i != null)
              for (var r = e.getCurves(), s = 0; s < i; s++)
                t += r[s].getLength();
            this._offset = t += this.getCurveOffset();
          }
          return t;
        },
        getCurveOffset: function() {
          var t = this._curveOffset;
          if (t == null) {
            var e = this.getCurve(), i = this.getTime();
            this._curveOffset = t = i != null && e && e.getPartLength(0, i);
          }
          return t;
        },
        getIntersection: function() {
          return this._intersection;
        },
        getDistance: function() {
          return this._distance;
        },
        divide: function() {
          var t = this.getCurve(), e = t && t.divideAtTime(this.getTime());
          return e && this._setSegment(e._segment1), e;
        },
        split: function() {
          var t = this.getCurve(), e = t._path, i = t && t.splitAtTime(this.getTime());
          return i && this._setSegment(e.getLastSegment()), i;
        },
        equals: function(t, e) {
          var i = this === t;
          if (!i && t instanceof xe) {
            var r = this.getCurve(), s = t.getCurve(), a = r._path, h = s._path;
            if (a === h) {
              var o = Math.abs, l = 1e-7, f = o(this.getOffset() - t.getOffset()), _ = !e && this._intersection, v = !e && t._intersection;
              i = (f < l || a && o(a.getLength() - f) < l) && (!_ && !v || _ && v && _.equals(v, !0));
            }
          }
          return i;
        },
        toString: function() {
          var t = [], e = this.getPoint(), i = Ot.instance;
          e && t.push("point: " + e);
          var r = this.getIndex();
          r != null && t.push("index: " + r);
          var s = this.getTime();
          return s != null && t.push("time: " + i.number(s)), this._distance != null && t.push("distance: " + i.number(this._distance)), "{ " + t.join(", ") + " }";
        },
        isTouching: function() {
          var t = this._intersection;
          if (t && this.getTangent().isCollinear(t.getTangent())) {
            var e = this.getCurve(), i = t.getCurve();
            return !(e.isStraight() && i.isStraight() && e.getLine().intersect(i.getLine()));
          }
          return !1;
        },
        isCrossing: function() {
          var t = this._intersection;
          if (!t)
            return !1;
          var e = this.getTime(), i = t.getTime(), r = 1e-8, s = 1 - r, a = e >= r && e <= s, h = i >= r && i <= s;
          if (a && h)
            return !this.isTouching();
          var o = this.getCurve(), l = o && e < r ? o.getPrevious() : o, f = t.getCurve(), _ = f && i < r ? f.getPrevious() : f;
          if (e > s && (o = o.getNext()), i > s && (f = f.getNext()), !l || !o || !_ || !f)
            return !1;
          var v = [];
          function g(E, L) {
            var N = E.getValues(), V = st.classify(N).roots || st.getPeaks(N), T = V.length, R = st.getLength(
              N,
              L && T ? V[T - 1] : 0,
              !L && T ? V[0] : 1
            );
            v.push(T ? R : R / 32);
          }
          function d(E, L, N) {
            return L < N ? E > L && E < N : E > L || E < N;
          }
          a || (g(l, !0), g(o, !1)), h || (g(_, !0), g(f, !1));
          var w = this.getPoint(), m = Math.min.apply(Math, v), k = a ? o.getTangentAtTime(e) : o.getPointAt(m).subtract(w), p = a ? k.negate() : l.getPointAt(-m).subtract(w), y = h ? f.getTangentAtTime(i) : f.getPointAt(m).subtract(w), c = h ? y.negate() : _.getPointAt(-m).subtract(w), x = p.getAngle(), C = k.getAngle(), P = c.getAngle(), S = y.getAngle();
          return !!(a ? d(x, P, S) ^ d(C, P, S) && d(x, S, P) ^ d(C, S, P) : d(P, x, C) ^ d(S, x, C) && d(P, C, x) ^ d(S, C, x));
        },
        hasOverlap: function() {
          return !!this._overlap;
        }
      },
      M.each(st._evaluateMethods, function(t) {
        var e = t + "At";
        this[t] = function() {
          var i = this.getCurve(), r = this.getTime();
          return r != null && i && i[e](r, !0);
        };
      }, {
        preserve: !0
      }),
      new function() {
        function t(e, i, r) {
          var s = e.length, a = 0, h = s - 1;
          function o(w, m) {
            for (var k = w + m; k >= -1 && k <= s; k += m) {
              var p = e[(k % s + s) % s];
              if (!i.getPoint().isClose(
                p.getPoint(),
                1e-7
              ))
                break;
              if (i.equals(p))
                return p;
            }
            return null;
          }
          for (; a <= h; ) {
            var l = a + h >>> 1, f = e[l], _;
            if (r && (_ = i.equals(f) ? f : o(l, -1) || o(l, 1)))
              return i._overlap && (_._overlap = _._intersection._overlap = !0), _;
            var v = i.getPath(), g = f.getPath(), d = v !== g ? v._id - g._id : i.getIndex() + i.getTime() - (f.getIndex() + f.getTime());
            d < 0 ? h = l - 1 : a = l + 1;
          }
          return e.splice(a, 0, i), i;
        }
        return { statics: {
          insert: t,
          expand: function(e) {
            for (var i = e.slice(), r = e.length - 1; r >= 0; r--)
              t(i, e[r]._intersection, !1);
            return i;
          }
        } };
      }()
    ), ve = I.extend({
      _class: "PathItem",
      _selectBounds: !1,
      _canScaleStroke: !0,
      beans: !0,
      initialize: function() {
      },
      statics: {
        create: function(t) {
          var e, i, r;
          if (M.isPlainObject(t) ? (i = t.segments, e = t.pathData) : Array.isArray(t) ? i = t : typeof t == "string" && (e = t), i) {
            var s = i[0];
            r = s && Array.isArray(s[0]);
          } else
            e && (r = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
          var a = r ? we : Tt;
          return new a(t);
        }
      },
      _asPathItem: function() {
        return this;
      },
      isClockwise: function() {
        return this.getArea() >= 0;
      },
      setClockwise: function(t) {
        this.isClockwise() != (t = !!t) && this.reverse();
      },
      setPathData: function(t) {
        var e = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig), i, r = !1, s, a, h = new z(), o = new z();
        function l(c, x) {
          var C = +i[c];
          return r && (C += h[x]), C;
        }
        function f(c) {
          return new z(
            l(c, "x"),
            l(c + 1, "y")
          );
        }
        this.clear();
        for (var _ = 0, v = e && e.length; _ < v; _++) {
          var g = e[_], d = g[0], w = d.toLowerCase();
          i = g.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
          var m = i && i.length;
          switch (r = d === w, s === "z" && !/[mz]/.test(w) && this.moveTo(h), w) {
            case "m":
            case "l":
              for (var k = w === "m", p = 0; p < m; p += 2)
                this[k ? "moveTo" : "lineTo"](h = f(p)), k && (o = h, k = !1);
              a = h;
              break;
            case "h":
            case "v":
              var y = w === "h" ? "x" : "y";
              h = h.clone();
              for (var p = 0; p < m; p++)
                h[y] = l(p, y), this.lineTo(h);
              a = h;
              break;
            case "c":
              for (var p = 0; p < m; p += 6)
                this.cubicCurveTo(
                  f(p),
                  a = f(p + 2),
                  h = f(p + 4)
                );
              break;
            case "s":
              for (var p = 0; p < m; p += 4)
                this.cubicCurveTo(
                  /[cs]/.test(s) ? h.multiply(2).subtract(a) : h,
                  a = f(p),
                  h = f(p + 2)
                ), s = w;
              break;
            case "q":
              for (var p = 0; p < m; p += 4)
                this.quadraticCurveTo(
                  a = f(p),
                  h = f(p + 2)
                );
              break;
            case "t":
              for (var p = 0; p < m; p += 2)
                this.quadraticCurveTo(
                  a = /[qt]/.test(s) ? h.multiply(2).subtract(a) : h,
                  h = f(p)
                ), s = w;
              break;
            case "a":
              for (var p = 0; p < m; p += 7)
                this.arcTo(
                  h = f(p + 5),
                  new nt(+i[p], +i[p + 1]),
                  +i[p + 2],
                  +i[p + 4],
                  +i[p + 3]
                );
              break;
            case "z":
              this.closePath(1e-12), h = o;
              break;
          }
          s = w;
        }
      },
      _canComposite: function() {
        return !(this.hasFill() && this.hasStroke());
      },
      _contains: function(t) {
        var e = t.isInside(
          this.getBounds({ internal: !0, handle: !0 })
        ) ? this._getWinding(t) : {};
        return e.onPath || !!(this.getFillRule() === "evenodd" ? e.windingL & 1 || e.windingR & 1 : e.winding);
      },
      getIntersections: function(t, e, i, r) {
        var s = this === t || !t, a = this._matrix._orNullIfIdentity(), h = s ? a : (i || t._matrix)._orNullIfIdentity();
        return s || this.getBounds(a).intersects(
          t.getBounds(h),
          1e-12
        ) ? st.getIntersections(
          this.getCurves(),
          !s && t.getCurves(),
          e,
          a,
          h,
          r
        ) : [];
      },
      getCrossings: function(t) {
        return this.getIntersections(t, function(e) {
          return e.isCrossing();
        });
      },
      getNearestLocation: function() {
        for (var t = z.read(arguments), e = this.getCurves(), i = 1 / 0, r = null, s = 0, a = e.length; s < a; s++) {
          var h = e[s].getNearestLocation(t);
          h._distance < i && (i = h._distance, r = h);
        }
        return r;
      },
      getNearestPoint: function() {
        var t = this.getNearestLocation.apply(this, arguments);
        return t && t.getPoint();
      },
      interpolate: function(t, e, i) {
        var r = !this._children, s = r ? "_segments" : "_children", a = t[s], h = e[s], o = this[s];
        if (!a || !h || a.length !== h.length)
          throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
        var l = o.length, f = h.length;
        if (l < f)
          for (var _ = r ? vt : Tt, v = l; v < f; v++)
            this.add(new _());
        else
          l > f && this[r ? "removeSegments" : "removeChildren"](f, l);
        for (var v = 0; v < f; v++)
          o[v].interpolate(a[v], h[v], i);
        r && (this.setClosed(t._closed), this._changed(9));
      },
      compare: function(t) {
        var e = !1;
        if (t) {
          var i = this._children || [this], r = t._children ? t._children.slice() : [t], s = i.length, a = r.length, h = [], o = 0;
          e = !0;
          for (var l = be.findItemBoundsCollisions(i, r, pt.GEOMETRIC_EPSILON), f = s - 1; f >= 0 && e; f--) {
            var _ = i[f];
            e = !1;
            var v = l[f];
            if (v)
              for (var g = v.length - 1; g >= 0 && !e; g--)
                _.compare(r[v[g]]) && (h[v[g]] || (h[v[g]] = !0, o++), e = !0);
          }
          e = e && o === a;
        }
        return e;
      }
    }), Tt = ve.extend(
      {
        _class: "Path",
        _serializeFields: {
          segments: [],
          closed: !1
        },
        initialize: function(e) {
          this._closed = !1, this._segments = [], this._version = 0;
          var i = arguments, r = Array.isArray(e) ? typeof e[0] == "object" ? e : i : e && e.size === W && (e.x !== W || e.point !== W) ? i : null;
          r && r.length > 0 ? this.setSegments(r) : (this._curves = W, this._segmentSelection = 0, !r && typeof e == "string" && (this.setPathData(e), e = null)), this._initialize(!r && e);
        },
        _equals: function(t) {
          return this._closed === t._closed && M.equals(this._segments, t._segments);
        },
        copyContent: function(t) {
          this.setSegments(t._segments), this._closed = t._closed;
        },
        _changed: function t(e) {
          if (t.base.call(this, e), e & 8) {
            if (this._length = this._area = W, e & 32)
              this._version++;
            else if (this._curves)
              for (var i = 0, r = this._curves.length; i < r; i++)
                this._curves[i]._changed();
          } else
            e & 64 && (this._bounds = W);
        },
        getStyle: function() {
          var t = this._parent;
          return (t instanceof we ? t : this)._style;
        },
        getSegments: function() {
          return this._segments;
        },
        setSegments: function(t) {
          var e = this.isFullySelected(), i = t && t.length;
          if (this._segments.length = 0, this._segmentSelection = 0, this._curves = W, i) {
            var r = t[i - 1];
            typeof r == "boolean" && (this.setClosed(r), i--), this._add(vt.readList(t, 0, {}, i));
          }
          e && this.setFullySelected(!0);
        },
        getFirstSegment: function() {
          return this._segments[0];
        },
        getLastSegment: function() {
          return this._segments[this._segments.length - 1];
        },
        getCurves: function() {
          var t = this._curves, e = this._segments;
          if (!t) {
            var i = this._countCurves();
            t = this._curves = new Array(i);
            for (var r = 0; r < i; r++)
              t[r] = new st(
                this,
                e[r],
                e[r + 1] || e[0]
              );
          }
          return t;
        },
        getFirstCurve: function() {
          return this.getCurves()[0];
        },
        getLastCurve: function() {
          var t = this.getCurves();
          return t[t.length - 1];
        },
        isClosed: function() {
          return this._closed;
        },
        setClosed: function(t) {
          if (this._closed != (t = !!t)) {
            if (this._closed = t, this._curves) {
              var e = this._curves.length = this._countCurves();
              t && (this._curves[e - 1] = new st(
                this,
                this._segments[e - 1],
                this._segments[0]
              ));
            }
            this._changed(41);
          }
        }
      },
      {
        beans: !0,
        getPathData: function(t, e) {
          var i = this._segments, r = i.length, s = new Ot(e), a = new Array(6), h = !0, o, l, f, _, v, g, d, w, m = [];
          function k(y, c) {
            if (y._transformCoordinates(t, a), o = a[0], l = a[1], h)
              m.push("M" + s.pair(o, l)), h = !1;
            else if (v = a[2], g = a[3], v === o && g === l && d === f && w === _) {
              if (!c) {
                var x = o - f, C = l - _;
                m.push(
                  x === 0 ? "v" + s.number(C) : C === 0 ? "h" + s.number(x) : "l" + s.pair(x, C)
                );
              }
            } else
              m.push("c" + s.pair(d - f, w - _) + " " + s.pair(v - f, g - _) + " " + s.pair(o - f, l - _));
            f = o, _ = l, d = a[4], w = a[5];
          }
          if (!r)
            return "";
          for (var p = 0; p < r; p++)
            k(i[p]);
          return this._closed && r > 0 && (k(i[0], !0), m.push("z")), m.join("");
        },
        isEmpty: function() {
          return !this._segments.length;
        },
        _transformContent: function(t) {
          for (var e = this._segments, i = new Array(6), r = 0, s = e.length; r < s; r++)
            e[r]._transformCoordinates(t, i, !0);
          return !0;
        },
        _add: function(t, h) {
          for (var i = this._segments, r = this._curves, s = t.length, a = h == null, h = a ? i.length : h, o = 0; o < s; o++) {
            var l = t[o];
            l._path && (l = t[o] = l.clone()), l._path = this, l._index = h + o, l._selection && this._updateSelection(l, 0, l._selection);
          }
          if (a)
            M.push(i, t);
          else {
            i.splice.apply(i, [h, 0].concat(t));
            for (var o = h + s, f = i.length; o < f; o++)
              i[o]._index = o;
          }
          if (r) {
            var _ = this._countCurves(), v = h > 0 && h + s - 1 === _ ? h - 1 : h, g = v, d = Math.min(v + s, _);
            t._curves && (r.splice.apply(r, [v, 0].concat(t._curves)), g += t._curves.length);
            for (var o = g; o < d; o++)
              r.splice(o, 0, new st(this, null, null));
            this._adjustCurves(v, d);
          }
          return this._changed(41), t;
        },
        _adjustCurves: function(t, e) {
          for (var i = this._segments, r = this._curves, s, a = t; a < e; a++)
            s = r[a], s._path = this, s._segment1 = i[a], s._segment2 = i[a + 1] || i[0], s._changed();
          (s = r[this._closed && !t ? i.length - 1 : t - 1]) && (s._segment2 = i[t] || i[0], s._changed()), (s = r[e]) && (s._segment1 = i[e], s._changed());
        },
        _countCurves: function() {
          var t = this._segments.length;
          return !this._closed && t > 0 ? t - 1 : t;
        },
        add: function(t) {
          var e = arguments;
          return e.length > 1 && typeof t != "number" ? this._add(vt.readList(e)) : this._add([vt.read(e)])[0];
        },
        insert: function(t, e) {
          var i = arguments;
          return i.length > 2 && typeof e != "number" ? this._add(vt.readList(i, 1), t) : this._add([vt.read(i, 1)], t)[0];
        },
        addSegment: function() {
          return this._add([vt.read(arguments)])[0];
        },
        insertSegment: function(t) {
          return this._add([vt.read(arguments, 1)], t)[0];
        },
        addSegments: function(t) {
          return this._add(vt.readList(t));
        },
        insertSegments: function(t, e) {
          return this._add(vt.readList(e), t);
        },
        removeSegment: function(t) {
          return this.removeSegments(t, t + 1)[0] || null;
        },
        removeSegments: function(t, e, i) {
          t = t || 0, e = M.pick(e, this._segments.length);
          var r = this._segments, s = this._curves, a = r.length, h = r.splice(t, e - t), o = h.length;
          if (!o)
            return h;
          for (var l = 0; l < o; l++) {
            var f = h[l];
            f._selection && this._updateSelection(f, f._selection, 0), f._index = f._path = null;
          }
          for (var l = t, _ = r.length; l < _; l++)
            r[l]._index = l;
          if (s) {
            for (var v = t > 0 && e === a + (this._closed ? 1 : 0) ? t - 1 : t, s = s.splice(v, o), l = s.length - 1; l >= 0; l--)
              s[l]._path = null;
            i && (h._curves = s.slice(1)), this._adjustCurves(v, v);
          }
          return this._changed(41), h;
        },
        clear: "#removeSegments",
        hasHandles: function() {
          for (var t = this._segments, e = 0, i = t.length; e < i; e++)
            if (t[e].hasHandles())
              return !0;
          return !1;
        },
        clearHandles: function() {
          for (var t = this._segments, e = 0, i = t.length; e < i; e++)
            t[e].clearHandles();
        },
        getLength: function() {
          if (this._length == null) {
            for (var t = this.getCurves(), e = 0, i = 0, r = t.length; i < r; i++)
              e += t[i].getLength();
            this._length = e;
          }
          return this._length;
        },
        getArea: function() {
          var t = this._area;
          if (t == null) {
            var e = this._segments, i = this._closed;
            t = 0;
            for (var r = 0, s = e.length; r < s; r++) {
              var a = r + 1 === s;
              t += st.getArea(st.getValues(
                e[r],
                e[a ? 0 : r + 1],
                null,
                a && !i
              ));
            }
            this._area = t;
          }
          return t;
        },
        isFullySelected: function() {
          var t = this._segments.length;
          return this.isSelected() && t > 0 && this._segmentSelection === t * 7;
        },
        setFullySelected: function(t) {
          t && this._selectSegments(!0), this.setSelected(t);
        },
        setSelection: function t(e) {
          e & 1 || this._selectSegments(!1), t.base.call(this, e);
        },
        _selectSegments: function(t) {
          var e = this._segments, i = e.length, r = t ? 7 : 0;
          this._segmentSelection = r * i;
          for (var s = 0; s < i; s++)
            e[s]._selection = r;
        },
        _updateSelection: function(t, e, i) {
          t._selection = i;
          var r = this._segmentSelection += i - e;
          r > 0 && this.setSelected(!0);
        },
        divideAt: function(t) {
          var e = this.getLocationAt(t), i;
          return e && (i = e.getCurve().divideAt(e.getCurveOffset())) ? i._segment1 : null;
        },
        splitAt: function(t) {
          var e = this.getLocationAt(t), i = e && e.index, r = e && e.time, s = 1e-8, a = 1 - s;
          r > a && (i++, r = 0);
          var h = this.getCurves();
          if (i >= 0 && i < h.length) {
            r >= s && h[i++].divideAtTime(r);
            var o = this.removeSegments(i, this._segments.length, !0), l;
            return this._closed ? (this.setClosed(!1), l = this) : (l = new Tt(I.NO_INSERT), l.insertAbove(this), l.copyAttributes(this)), l._add(o, 0), this.addSegment(o[0]), l;
          }
          return null;
        },
        split: function(t, e) {
          var i, r = e === W ? t : (i = this.getCurves()[t]) && i.getLocationAtTime(e);
          return r != null ? this.splitAt(r) : null;
        },
        join: function(t, e) {
          var i = e || 0;
          if (t && t !== this) {
            var r = t._segments, s = this.getLastSegment(), a = t.getLastSegment();
            if (!a)
              return this;
            s && s._point.isClose(a._point, i) && t.reverse();
            var h = t.getFirstSegment();
            if (s && s._point.isClose(h._point, i))
              s.setHandleOut(h._handleOut), this._add(r.slice(1));
            else {
              var o = this.getFirstSegment();
              o && o._point.isClose(h._point, i) && t.reverse(), a = t.getLastSegment(), o && o._point.isClose(a._point, i) ? (o.setHandleIn(a._handleIn), this._add(r.slice(0, r.length - 1), 0)) : this._add(r.slice());
            }
            t._closed && this._add([r[0]]), t.remove();
          }
          var l = this.getFirstSegment(), f = this.getLastSegment();
          return l !== f && l._point.isClose(f._point, i) && (l.setHandleIn(f._handleIn), f.remove(), this.setClosed(!0)), this;
        },
        reduce: function(t) {
          for (var e = this.getCurves(), i = t && t.simplify, r = i ? 1e-7 : 0, s = e.length - 1; s >= 0; s--) {
            var a = e[s];
            !a.hasHandles() && (!a.hasLength(r) || i && a.isCollinear(a.getNext())) && a.remove();
          }
          return this;
        },
        reverse: function() {
          this._segments.reverse();
          for (var t = 0, e = this._segments.length; t < e; t++) {
            var i = this._segments[t], r = i._handleIn;
            i._handleIn = i._handleOut, i._handleOut = r, i._index = t;
          }
          this._curves = null, this._changed(9);
        },
        flatten: function(t) {
          for (var e = new Be(this, t || 0.25, 256, !0), i = e.parts, r = i.length, s = [], a = 0; a < r; a++)
            s.push(new vt(i[a].curve.slice(0, 2)));
          !this._closed && r > 0 && s.push(new vt(i[r - 1].curve.slice(6))), this.setSegments(s);
        },
        simplify: function(t) {
          var e = new He(this).fit(t || 2.5);
          return e && this.setSegments(e), !!e;
        },
        smooth: function(t) {
          var e = this, i = t || {}, r = i.type || "asymmetric", s = this._segments, a = s.length, h = this._closed;
          function o(ft, mt) {
            var J = ft && ft.index;
            if (J != null) {
              var gt = ft.path;
              if (gt && gt !== e)
                throw new Error(ft._class + " " + J + " of " + gt + " is not part of " + e);
              mt && ft instanceof st && J++;
            } else
              J = typeof ft == "number" ? ft : mt;
            return Math.min(J < 0 && h ? J % a : J < 0 ? J + a : J, a - 1);
          }
          var l = h && i.from === W && i.to === W, f = o(i.from, 0), _ = o(i.to, a - 1);
          if (f > _)
            if (h)
              f -= a;
            else {
              var v = f;
              f = _, _ = v;
            }
          if (/^(?:asymmetric|continuous)$/.test(r)) {
            var g = r === "asymmetric", d = Math.min, w = _ - f + 1, m = w - 1, k = l ? d(w, 4) : 1, p = k, y = k, c = [];
            if (h || (p = d(1, f), y = d(1, a - _ - 1)), m += p + y, m <= 1)
              return;
            for (var x = 0, C = f - p; x <= m; x++, C++)
              c[x] = s[(C < 0 ? C + a : C) % a]._point;
            for (var P = c[0]._x + 2 * c[1]._x, S = c[0]._y + 2 * c[1]._y, E = 2, L = m - 1, N = [P], V = [S], T = [E], R = [], F = [], x = 1; x < m; x++) {
              var U = x < L, q = U || g ? 1 : 2, j = U ? 4 : g ? 2 : 7, Q = U ? 4 : g ? 3 : 8, et = U ? 2 : g ? 0 : 1, rt = q / E;
              E = T[x] = j - rt, P = N[x] = Q * c[x]._x + et * c[x + 1]._x - rt * P, S = V[x] = Q * c[x]._y + et * c[x + 1]._y - rt * S;
            }
            R[L] = N[L] / T[L], F[L] = V[L] / T[L];
            for (var x = m - 2; x >= 0; x--)
              R[x] = (N[x] - R[x + 1]) / T[x], F[x] = (V[x] - F[x + 1]) / T[x];
            R[m] = (3 * c[m]._x - R[L]) / 2, F[m] = (3 * c[m]._y - F[L]) / 2;
            for (var x = p, ht = m - y, C = f; x <= ht; x++, C++) {
              var X = s[C < 0 ? C + a : C], K = X._point, at = R[x] - K._x, lt = F[x] - K._y;
              (l || x < ht) && X.setHandleOut(at, lt), (l || x > p) && X.setHandleIn(-at, -lt);
            }
          } else
            for (var x = f; x <= _; x++)
              s[x < 0 ? x + a : x].smooth(
                i,
                !l && x === f,
                !l && x === _
              );
        },
        toShape: function(t) {
          if (!this._closed)
            return null;
          var e = this._segments, i, r, s, a;
          function h(g, d) {
            var w = e[g], m = w.getNext(), k = e[d], p = k.getNext();
            return w._handleOut.isZero() && m._handleIn.isZero() && k._handleOut.isZero() && p._handleIn.isZero() && m._point.subtract(w._point).isCollinear(
              p._point.subtract(k._point)
            );
          }
          function o(g) {
            var d = e[g], w = d.getPrevious(), m = d.getNext();
            return w._handleOut.isZero() && d._handleIn.isZero() && d._handleOut.isZero() && m._handleIn.isZero() && d._point.subtract(w._point).isOrthogonal(
              m._point.subtract(d._point)
            );
          }
          function l(g) {
            var d = e[g], w = d.getNext(), m = d._handleOut, k = w._handleIn, p = 0.5522847498307936;
            if (m.isOrthogonal(k)) {
              var y = d._point, c = w._point, x = new Rt(y, m, !0).intersect(
                new Rt(c, k, !0),
                !0
              );
              return x && pt.isZero(m.getLength() / x.subtract(y).getLength() - p) && pt.isZero(k.getLength() / x.subtract(c).getLength() - p);
            }
            return !1;
          }
          function f(g, d) {
            return e[g]._point.getDistance(e[d]._point);
          }
          if (!this.hasHandles() && e.length === 4 && h(0, 2) && h(1, 3) && o(1) ? (i = Zt.Rectangle, r = new nt(f(0, 3), f(0, 1)), a = e[1]._point.add(e[2]._point).divide(2)) : e.length === 8 && l(0) && l(2) && l(4) && l(6) && h(1, 5) && h(3, 7) ? (i = Zt.Rectangle, r = new nt(f(1, 6), f(0, 3)), s = r.subtract(new nt(
            f(0, 7),
            f(1, 2)
          )).divide(2), a = e[3]._point.add(e[4]._point).divide(2)) : e.length === 4 && l(0) && l(1) && l(2) && l(3) && (pt.isZero(f(0, 2) - f(1, 3)) ? (i = Zt.Circle, s = f(0, 2) / 2) : (i = Zt.Ellipse, s = new nt(f(2, 0) / 2, f(3, 1) / 2)), a = e[1]._point), i) {
            var _ = this.getPosition(!0), v = new i({
              center: _,
              size: r,
              radius: s,
              insert: !1
            });
            return v.copyAttributes(this, !0), v._matrix.prepend(this._matrix), v.rotate(a.subtract(_).getAngle() + 90), (t === W || t) && v.insertAbove(this), v;
          }
          return null;
        },
        toPath: "#clone",
        compare: function t(e) {
          if (!e || e instanceof we)
            return t.base.call(this, e);
          var i = this.getCurves(), r = e.getCurves(), s = i.length, a = r.length;
          if (!s || !a)
            return s == a;
          for (var h = i[0].getValues(), o = [], l = 0, f, _ = 0, v, g = 0; g < a; g++) {
            var k = r[g].getValues();
            o.push(k);
            var d = st.getOverlaps(h, k);
            if (d) {
              f = !g && d[0][0] > 0 ? a - 1 : g, v = d[0][1];
              break;
            }
          }
          for (var w = Math.abs, m = 1e-8, k = o[f], p; h && k; ) {
            var d = st.getOverlaps(h, k);
            if (d) {
              var y = d[0][0];
              if (w(y - _) < m) {
                _ = d[1][0], _ === 1 && (h = ++l < s ? i[l].getValues() : null, _ = 0);
                var c = d[0][1];
                if (w(c - v) < m) {
                  if (p || (p = [f, c]), v = d[1][1], v === 1 && (++f >= a && (f = 0), k = o[f] || r[f].getValues(), v = 0), !h)
                    return p[0] === f && p[1] === v;
                  continue;
                }
              }
            }
            break;
          }
          return !1;
        },
        _hitTestSelf: function(t, e, i, r) {
          var s = this, a = this.getStyle(), h = this._segments, o = h.length, l = this._closed, f = e._tolerancePadding, _ = f, v, g, d, w, m, k, p = e.stroke && a.hasStroke(), y = e.fill && a.hasFill(), c = e.curves, x = p ? a.getStrokeWidth() / 2 : y && e.tolerance > 0 || c ? 0 : null;
          x !== null && (x > 0 ? (v = a.getStrokeJoin(), g = a.getStrokeCap(), d = a.getMiterLimit(), _ = _.add(
            Tt._getStrokePadding(x, r)
          )) : v = g = "round");
          function C(R, F) {
            return t.subtract(R).divide(F).length <= 1;
          }
          function P(R, F, U) {
            if (!e.selected || F.isSelected()) {
              var q = R._point;
              if (F !== q && (F = F.add(q)), C(F, _))
                return new ye(U, s, {
                  segment: R,
                  point: F
                });
            }
          }
          function S(R, F) {
            return (F || e.segments) && P(R, R._point, "segment") || !F && e.handles && (P(R, R._handleIn, "handle-in") || P(R, R._handleOut, "handle-out"));
          }
          function E(R) {
            w.add(R);
          }
          function L(R) {
            var F = l || R._index > 0 && R._index < o - 1;
            if ((F ? v : g) === "round")
              return C(R._point, _);
            if (w = new Tt({ internal: !0, closed: !0 }), F ? R.isSmooth() || Tt._addBevelJoin(
              R,
              v,
              x,
              d,
              null,
              r,
              E,
              !0
            ) : g === "square" && Tt._addSquareCap(
              R,
              g,
              x,
              null,
              r,
              E,
              !0
            ), !w.isEmpty()) {
              var U;
              return w.contains(t) || (U = w.getNearestLocation(t)) && C(U.getPoint(), f);
            }
          }
          if (e.ends && !e.segments && !l) {
            if (k = S(h[0], !0) || S(h[o - 1], !0))
              return k;
          } else if (e.segments || e.handles) {
            for (var N = 0; N < o; N++)
              if (k = S(h[N]))
                return k;
          }
          if (x !== null) {
            if (m = this.getNearestLocation(t), m) {
              var V = m.getTime();
              V === 0 || V === 1 && o > 1 ? L(m.getSegment()) || (m = null) : C(m.getPoint(), _) || (m = null);
            }
            if (!m && v === "miter" && o > 1)
              for (var N = 0; N < o; N++) {
                var T = h[N];
                if (t.getDistance(T._point) <= d * x && L(T)) {
                  m = T.getLocation();
                  break;
                }
              }
          }
          return !m && y && this._contains(t) || m && !p && !c ? new ye("fill", this) : m ? new ye(p ? "stroke" : "curve", this, {
            location: m,
            point: m.getPoint()
          }) : null;
        }
      },
      M.each(
        st._evaluateMethods,
        function(t) {
          this[t + "At"] = function(e) {
            var i = this.getLocationAt(e);
            return i && i[t]();
          };
        },
        {
          beans: !1,
          getLocationOf: function() {
            for (var t = z.read(arguments), e = this.getCurves(), i = 0, r = e.length; i < r; i++) {
              var s = e[i].getLocationOf(t);
              if (s)
                return s;
            }
            return null;
          },
          getOffsetOf: function() {
            var t = this.getLocationOf.apply(this, arguments);
            return t ? t.getOffset() : null;
          },
          getLocationAt: function(t) {
            if (typeof t == "number") {
              for (var e = this.getCurves(), i = 0, r = 0, s = e.length; r < s; r++) {
                var a = i, h = e[r];
                if (i += h.getLength(), i > t)
                  return h.getLocationAt(t - a);
              }
              if (e.length > 0 && t <= this.getLength())
                return new xe(e[e.length - 1], 1);
            } else if (t && t.getPath && t.getPath() === this)
              return t;
            return null;
          },
          getOffsetsWithTangent: function() {
            var t = z.read(arguments);
            if (t.isZero())
              return [];
            for (var e = [], i = 0, r = this.getCurves(), s = 0, a = r.length; s < a; s++) {
              for (var h = r[s], o = h.getTimesWithTangent(t), l = 0, f = o.length; l < f; l++) {
                var _ = i + h.getOffsetAtTime(o[l]);
                e.indexOf(_) < 0 && e.push(_);
              }
              i += h.length;
            }
            return e;
          }
        }
      ),
      new function() {
        function t(i, r, s, a) {
          if (a <= 0)
            return;
          var h = a / 2, o = a - 2, l = h - 1, f = new Array(6), _, v;
          function g(y) {
            var c = f[y], x = f[y + 1];
            (_ != c || v != x) && (i.beginPath(), i.moveTo(_, v), i.lineTo(c, x), i.stroke(), i.beginPath(), i.arc(c, x, h, 0, Math.PI * 2, !0), i.fill());
          }
          for (var d = 0, w = r.length; d < w; d++) {
            var m = r[d], k = m._selection;
            if (m._transformCoordinates(s, f), _ = f[0], v = f[1], k & 2 && g(2), k & 4 && g(4), i.fillRect(_ - h, v - h, a, a), o > 0 && !(k & 1)) {
              var p = i.fillStyle;
              i.fillStyle = "#ffffff", i.fillRect(_ - l, v - l, o, o), i.fillStyle = p;
            }
          }
        }
        function e(i, r, s) {
          var a = r._segments, h = a.length, o = new Array(6), l = !0, f, _, v, g, d, w, m, k;
          function p(c) {
            if (s)
              c._transformCoordinates(s, o), f = o[0], _ = o[1];
            else {
              var x = c._point;
              f = x._x, _ = x._y;
            }
            if (l)
              i.moveTo(f, _), l = !1;
            else {
              if (s)
                d = o[2], w = o[3];
              else {
                var C = c._handleIn;
                d = f + C._x, w = _ + C._y;
              }
              d === f && w === _ && m === v && k === g ? i.lineTo(f, _) : i.bezierCurveTo(m, k, d, w, f, _);
            }
            if (v = f, g = _, s)
              m = o[4], k = o[5];
            else {
              var C = c._handleOut;
              m = v + C._x, k = g + C._y;
            }
          }
          for (var y = 0; y < h; y++)
            p(a[y]);
          r._closed && h > 0 && p(a[0]);
        }
        return {
          _draw: function(i, r, s, a) {
            var h = r.dontStart, o = r.dontFinish || r.clip, l = this.getStyle(), f = l.hasFill(), _ = l.hasStroke(), v = l.getDashArray(), g = !dt.support.nativeDash && _ && v && v.length;
            h || i.beginPath(), (f || _ && !g || o) && (e(i, this, a), this._closed && i.closePath());
            function d(c) {
              return v[(c % g + g) % g];
            }
            if (!o && (f || _) && (this._setStyles(i, r, s), f && (i.fill(l.getFillRule()), i.shadowColor = "rgba(0,0,0,0)"), _)) {
              if (g) {
                h || i.beginPath();
                for (var w = new Be(
                  this,
                  0.25,
                  32,
                  !1,
                  a
                ), m = w.length, k = -l.getDashOffset(), p, y = 0; k > 0; )
                  k -= d(y--) + d(y--);
                for (; k < m; )
                  p = k + d(y++), (k > 0 || p > 0) && w.drawPart(
                    i,
                    Math.max(k, 0),
                    Math.max(p, 0)
                  ), k = p + d(y++);
              }
              i.stroke();
            }
          },
          _drawSelected: function(i, r) {
            i.beginPath(), e(i, this, r), i.stroke(), t(i, this._segments, r, dt.settings.handleSize);
          }
        };
      }(),
      new function() {
        function t(e) {
          var i = e._segments;
          if (!i.length)
            throw new Error("Use a moveTo() command first");
          return i[i.length - 1];
        }
        return {
          moveTo: function() {
            var e = this._segments;
            e.length === 1 && this.removeSegment(0), e.length || this._add([new vt(z.read(arguments))]);
          },
          moveBy: function() {
            throw new Error("moveBy() is unsupported on Path items.");
          },
          lineTo: function() {
            this._add([new vt(z.read(arguments))]);
          },
          cubicCurveTo: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = z.read(e), a = t(this);
            a.setHandleOut(i.subtract(a._point)), this._add([new vt(s, r.subtract(s))]);
          },
          quadraticCurveTo: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = t(this)._point;
            this.cubicCurveTo(
              i.add(s.subtract(i).multiply(1 / 3)),
              i.add(r.subtract(i).multiply(1 / 3)),
              r
            );
          },
          curveTo: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = M.pick(M.read(e), 0.5), a = 1 - s, h = t(this)._point, o = i.subtract(h.multiply(a * a)).subtract(r.multiply(s * s)).divide(2 * s * a);
            if (o.isNaN())
              throw new Error(
                "Cannot put a curve through points with parameter = " + s
              );
            this.quadraticCurveTo(o, r);
          },
          arcTo: function() {
            var e = arguments, i = Math.abs, r = Math.sqrt, s = t(this), a = s._point, h = z.read(e), o, l = M.peek(e), f = M.pick(l, !0), _, v, g, d;
            if (typeof f == "boolean")
              var w = a.add(h).divide(2), o = w.add(w.subtract(a).rotate(
                f ? -90 : 90
              ));
            else if (M.remain(e) <= 2)
              o = h, h = z.read(e);
            else if (!a.equals(h)) {
              var m = nt.read(e), k = pt.isZero;
              if (k(m.width) || k(m.height))
                return this.lineTo(h);
              var p = M.read(e), f = !!M.read(e), y = !!M.read(e), w = a.add(h).divide(2), c = a.subtract(w).rotate(-p), x = c.x, C = c.y, P = i(m.width), S = i(m.height), E = P * P, L = S * S, N = x * x, V = C * C, T = r(N / E + V / L);
              if (T > 1 && (P *= T, S *= T, E = P * P, L = S * S), T = (E * L - E * V - L * N) / (E * V + L * N), i(T) < 1e-12 && (T = 0), T < 0)
                throw new Error(
                  "Cannot create an arc with the given arguments"
                );
              _ = new z(P * C / S, -S * x / P).multiply((y === f ? -1 : 1) * r(T)).rotate(p).add(w), d = new At().translate(_).rotate(p).scale(P, S), g = d._inverseTransform(a), v = g.getDirectedAngle(d._inverseTransform(h)), !f && v > 0 ? v -= 360 : f && v < 0 && (v += 360);
            }
            if (o) {
              var R = new Rt(
                a.add(o).divide(2),
                o.subtract(a).rotate(90),
                !0
              ), F = new Rt(
                o.add(h).divide(2),
                h.subtract(o).rotate(90),
                !0
              ), U = new Rt(a, h), q = U.getSide(o);
              if (_ = R.intersect(F, !0), !_) {
                if (!q)
                  return this.lineTo(h);
                throw new Error(
                  "Cannot create an arc with the given arguments"
                );
              }
              g = a.subtract(_), v = g.getDirectedAngle(h.subtract(_));
              var j = U.getSide(_, !0);
              j === 0 ? v = q * i(v) : q === j && (v += v < 0 ? 360 : -360);
            }
            if (v) {
              for (var Q = 1e-7, et = i(v), rt = et >= 360 ? 4 : Math.ceil((et - Q) / 90), ht = v / rt, X = ht * Math.PI / 360, K = 4 / 3 * Math.sin(X) / (1 + Math.cos(X)), at = [], lt = 0; lt <= rt; lt++) {
                var c = h, ft = null;
                if (lt < rt && (ft = g.rotate(90).multiply(K), d ? (c = d._transformPoint(g), ft = d._transformPoint(g.add(ft)).subtract(c)) : c = _.add(g)), !lt)
                  s.setHandleOut(ft);
                else {
                  var mt = g.rotate(-90).multiply(K);
                  d && (mt = d._transformPoint(g.add(mt)).subtract(c)), at.push(new vt(c, mt, ft));
                }
                g = g.rotate(ht);
              }
              this._add(at);
            }
          },
          lineBy: function() {
            var e = z.read(arguments), i = t(this)._point;
            this.lineTo(i.add(e));
          },
          curveBy: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = M.read(e), a = t(this)._point;
            this.curveTo(a.add(i), a.add(r), s);
          },
          cubicCurveBy: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = z.read(e), a = t(this)._point;
            this.cubicCurveTo(
              a.add(i),
              a.add(r),
              a.add(s)
            );
          },
          quadraticCurveBy: function() {
            var e = arguments, i = z.read(e), r = z.read(e), s = t(this)._point;
            this.quadraticCurveTo(s.add(i), s.add(r));
          },
          arcBy: function() {
            var e = arguments, i = t(this)._point, r = i.add(z.read(e)), s = M.pick(M.peek(e), !0);
            typeof s == "boolean" ? this.arcTo(r, s) : this.arcTo(r, i.add(z.read(e)));
          },
          closePath: function(e) {
            this.setClosed(!0), this.join(this, e);
          }
        };
      }(),
      {
        _getBounds: function(t, e) {
          var i = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
          return Tt[i](this._segments, this._closed, this, t, e);
        },
        statics: {
          getBounds: function(t, e, i, r, s, a) {
            var h = t[0];
            if (!h)
              return new ot();
            var o = new Array(6), l = h._transformCoordinates(r, new Array(6)), f = l.slice(0, 2), _ = f.slice(), v = new Array(2);
            function g(m) {
              m._transformCoordinates(r, o);
              for (var k = 0; k < 2; k++)
                st._addBounds(
                  l[k],
                  l[k + 4],
                  o[k + 2],
                  o[k],
                  k,
                  a ? a[k] : 0,
                  f,
                  _,
                  v
                );
              var p = l;
              l = o, o = p;
            }
            for (var d = 1, w = t.length; d < w; d++)
              g(t[d]);
            return e && g(h), new ot(f[0], f[1], _[0] - f[0], _[1] - f[1]);
          },
          getStrokeBounds: function(t, e, i, r, s) {
            var a = i.getStyle(), h = a.hasStroke(), o = a.getStrokeWidth(), l = h && i._getStrokeMatrix(r, s), f = h && Tt._getStrokePadding(
              o,
              l
            ), _ = Tt.getBounds(
              t,
              e,
              i,
              r,
              s,
              f
            );
            if (!h)
              return _;
            var v = o / 2, g = a.getStrokeJoin(), d = a.getStrokeCap(), w = a.getMiterLimit(), m = new ot(new nt(f));
            function k(P) {
              _ = _.include(P);
            }
            function p(P) {
              _ = _.unite(
                m.setCenter(P._point.transform(r))
              );
            }
            function y(P, S) {
              S === "round" || P.isSmooth() ? p(P) : Tt._addBevelJoin(
                P,
                S,
                v,
                w,
                r,
                l,
                k
              );
            }
            function c(P, S) {
              S === "round" ? p(P) : Tt._addSquareCap(
                P,
                S,
                v,
                r,
                l,
                k
              );
            }
            var x = t.length - (e ? 0 : 1);
            if (x > 0) {
              for (var C = 1; C < x; C++)
                y(t[C], g);
              e ? y(t[0], g) : (c(t[0], d), c(t[t.length - 1], d));
            }
            return _;
          },
          _getStrokePadding: function(t, e) {
            if (!e)
              return [t, t];
            var i = new z(t, 0).transform(e), r = new z(0, t).transform(e), s = i.getAngleInRadians(), a = i.getLength(), h = r.getLength(), o = Math.sin(s), l = Math.cos(s), f = Math.tan(s), _ = Math.atan2(h * f, a), v = Math.atan2(h, f * a);
            return [
              Math.abs(a * Math.cos(_) * l + h * Math.sin(_) * o),
              Math.abs(h * Math.sin(v) * l + a * Math.cos(v) * o)
            ];
          },
          _addBevelJoin: function(t, e, i, r, s, a, h, o) {
            var l = t.getCurve(), f = l.getPrevious(), _ = l.getPoint1().transform(s), v = f.getNormalAtTime(1).multiply(i).transform(a), g = l.getNormalAtTime(0).multiply(i).transform(a), d = v.getDirectedAngle(g);
            if ((d < 0 || d >= 180) && (v = v.negate(), g = g.negate()), o && h(_), h(_.add(v)), e === "miter") {
              var w = new Rt(
                _.add(v),
                new z(-v.y, v.x),
                !0
              ).intersect(new Rt(
                _.add(g),
                new z(-g.y, g.x),
                !0
              ), !0);
              w && _.getDistance(w) <= r * i && h(w);
            }
            h(_.add(g));
          },
          _addSquareCap: function(t, e, i, r, s, a, h) {
            var o = t._point.transform(r), l = t.getLocation(), f = l.getNormal().multiply(l.getTime() === 0 ? i : -i).transform(s);
            e === "square" && (h && (a(o.subtract(f)), a(o.add(f))), o = o.add(f.rotate(-90))), a(o.add(f)), a(o.subtract(f));
          },
          getHandleBounds: function(t, e, i, r, s) {
            var a = i.getStyle(), h = s.stroke && a.hasStroke(), o, l;
            if (h) {
              var f = i._getStrokeMatrix(r, s), _ = a.getStrokeWidth() / 2, v = _;
              a.getStrokeJoin() === "miter" && (v = _ * a.getMiterLimit()), a.getStrokeCap() === "square" && (v = Math.max(v, _ * Math.SQRT2)), o = Tt._getStrokePadding(_, f), l = Tt._getStrokePadding(v, f);
            }
            for (var g = new Array(6), d = 1 / 0, w = -d, m = d, k = w, p = 0, y = t.length; p < y; p++) {
              var c = t[p];
              c._transformCoordinates(r, g);
              for (var x = 0; x < 6; x += 2) {
                var C = x ? o : l, P = C ? C[0] : 0, S = C ? C[1] : 0, E = g[x], L = g[x + 1], N = E - P, V = E + P, T = L - S, R = L + S;
                N < d && (d = N), V > w && (w = V), T < m && (m = T), R > k && (k = R);
              }
            }
            return new ot(d, m, w - d, k - m);
          }
        }
      }
    );
    Tt.inject({ statics: new function() {
      var t = 0.5522847498307936, e = [
        new vt([-1, 0], [0, t], [0, -t]),
        new vt([0, -1], [-t, 0], [t, 0]),
        new vt([1, 0], [0, -t], [0, t]),
        new vt([0, 1], [t, 0], [-t, 0])
      ];
      function i(s, a, h) {
        var o = M.getNamed(h), l = new Tt(o && o.insert == !1 && I.NO_INSERT);
        return l._add(s), l._closed = a, l.set(o, { insert: !0 });
      }
      function r(s, a, h) {
        for (var o = new Array(4), l = 0; l < 4; l++) {
          var f = e[l];
          o[l] = new vt(
            f._point.multiply(a).add(s),
            f._handleIn.multiply(a),
            f._handleOut.multiply(a)
          );
        }
        return i(o, !0, h);
      }
      return {
        Line: function() {
          var s = arguments;
          return i([
            new vt(z.readNamed(s, "from")),
            new vt(z.readNamed(s, "to"))
          ], !1, s);
        },
        Circle: function() {
          var s = arguments, a = z.readNamed(s, "center"), h = M.readNamed(s, "radius");
          return r(a, new nt(h), s);
        },
        Rectangle: function() {
          var s = arguments, a = ot.readNamed(s, "rectangle"), h = nt.readNamed(
            s,
            "radius",
            0,
            { readNull: !0 }
          ), o = a.getBottomLeft(!0), l = a.getTopLeft(!0), f = a.getTopRight(!0), _ = a.getBottomRight(!0), v;
          if (!h || h.isZero())
            v = [
              new vt(o),
              new vt(l),
              new vt(f),
              new vt(_)
            ];
          else {
            h = nt.min(h, a.getSize(!0).divide(2));
            var g = h.width, d = h.height, w = g * t, m = d * t;
            v = [
              new vt(o.add(g, 0), null, [-w, 0]),
              new vt(o.subtract(0, d), [0, m]),
              new vt(l.add(0, d), null, [0, -m]),
              new vt(l.add(g, 0), [-w, 0], null),
              new vt(f.subtract(g, 0), null, [w, 0]),
              new vt(f.add(0, d), [0, -m], null),
              new vt(_.subtract(0, d), null, [0, m]),
              new vt(_.subtract(g, 0), [w, 0])
            ];
          }
          return i(v, !0, s);
        },
        RoundRectangle: "#Rectangle",
        Ellipse: function() {
          var s = arguments, a = Zt._readEllipse(s);
          return r(a.center, a.radius, s);
        },
        Oval: "#Ellipse",
        Arc: function() {
          var s = arguments, a = z.readNamed(s, "from"), h = z.readNamed(s, "through"), o = z.readNamed(s, "to"), l = M.getNamed(s), f = new Tt(l && l.insert == !1 && I.NO_INSERT);
          return f.moveTo(a), f.arcTo(h, o), f.set(l);
        },
        RegularPolygon: function() {
          for (var s = arguments, a = z.readNamed(s, "center"), h = M.readNamed(s, "sides"), o = M.readNamed(s, "radius"), l = 360 / h, f = h % 3 === 0, _ = new z(0, f ? -o : o), v = f ? -1 : 0.5, g = new Array(h), d = 0; d < h; d++)
            g[d] = new vt(a.add(
              _.rotate((d + v) * l)
            ));
          return i(g, !0, s);
        },
        Star: function() {
          for (var s = arguments, a = z.readNamed(s, "center"), h = M.readNamed(s, "points") * 2, o = M.readNamed(s, "radius1"), l = M.readNamed(s, "radius2"), f = 360 / h, _ = new z(0, -1), v = new Array(h), g = 0; g < h; g++)
            v[g] = new vt(a.add(_.rotate(f * g).multiply(g % 2 ? l : o)));
          return i(v, !0, s);
        }
      };
    }() });
    var we = ve.extend(
      {
        _class: "CompoundPath",
        _serializeFields: {
          children: []
        },
        beans: !0,
        initialize: function(e) {
          this._children = [], this._namedChildren = {}, this._initialize(e) || (typeof e == "string" ? this.setPathData(e) : this.addChildren(Array.isArray(e) ? e : arguments));
        },
        insertChildren: function t(e, i) {
          var r = i, s = r[0];
          s && typeof s[0] == "number" && (r = [r]);
          for (var a = i.length - 1; a >= 0; a--) {
            var h = r[a];
            r === i && !(h instanceof Tt) && (r = M.slice(r)), Array.isArray(h) ? r[a] = new Tt({ segments: h, insert: !1 }) : h instanceof we && (r.splice.apply(r, [a, 1].concat(h.removeChildren())), h.remove());
          }
          return t.base.call(this, e, r);
        },
        reduce: function t(e) {
          for (var i = this._children, r = i.length - 1; r >= 0; r--) {
            var s = i[r].reduce(e);
            s.isEmpty() && s.remove();
          }
          if (!i.length) {
            var s = new Tt(I.NO_INSERT);
            return s.copyAttributes(this), s.insertAbove(this), this.remove(), s;
          }
          return t.base.call(this);
        },
        isClosed: function() {
          for (var t = this._children, e = 0, i = t.length; e < i; e++)
            if (!t[e]._closed)
              return !1;
          return !0;
        },
        setClosed: function(t) {
          for (var e = this._children, i = 0, r = e.length; i < r; i++)
            e[i].setClosed(t);
        },
        getFirstSegment: function() {
          var t = this.getFirstChild();
          return t && t.getFirstSegment();
        },
        getLastSegment: function() {
          var t = this.getLastChild();
          return t && t.getLastSegment();
        },
        getCurves: function() {
          for (var t = this._children, e = [], i = 0, r = t.length; i < r; i++)
            M.push(e, t[i].getCurves());
          return e;
        },
        getFirstCurve: function() {
          var t = this.getFirstChild();
          return t && t.getFirstCurve();
        },
        getLastCurve: function() {
          var t = this.getLastChild();
          return t && t.getLastCurve();
        },
        getArea: function() {
          for (var t = this._children, e = 0, i = 0, r = t.length; i < r; i++)
            e += t[i].getArea();
          return e;
        },
        getLength: function() {
          for (var t = this._children, e = 0, i = 0, r = t.length; i < r; i++)
            e += t[i].getLength();
          return e;
        },
        getPathData: function(t, e) {
          for (var i = this._children, r = [], s = 0, a = i.length; s < a; s++) {
            var h = i[s], o = h._matrix;
            r.push(h.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e));
          }
          return r.join("");
        },
        _hitTestChildren: function t(e, i, r) {
          return t.base.call(
            this,
            e,
            i.class === Tt || i.type === "path" ? i : M.set({}, i, { fill: !1 }),
            r
          );
        },
        _draw: function(t, e, i, r) {
          var s = this._children;
          if (!!s.length) {
            e = e.extend({ dontStart: !0, dontFinish: !0 }), t.beginPath();
            for (var a = 0, h = s.length; a < h; a++)
              s[a].draw(t, e, r);
            if (!e.clip) {
              this._setStyles(t, e, i);
              var o = this._style;
              o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke();
            }
          }
        },
        _drawSelected: function(t, e, i) {
          for (var r = this._children, s = 0, a = r.length; s < a; s++) {
            var h = r[s], o = h._matrix;
            i[h._id] || h._drawSelected(t, o.isIdentity() ? e : e.appended(o));
          }
        }
      },
      new function() {
        function t(e, i) {
          var r = e._children;
          if (i && !r.length)
            throw new Error("Use a moveTo() command first");
          return r[r.length - 1];
        }
        return M.each(
          [
            "lineTo",
            "cubicCurveTo",
            "quadraticCurveTo",
            "curveTo",
            "arcTo",
            "lineBy",
            "cubicCurveBy",
            "quadraticCurveBy",
            "curveBy",
            "arcBy"
          ],
          function(e) {
            this[e] = function() {
              var i = t(this, !0);
              i[e].apply(i, arguments);
            };
          },
          {
            moveTo: function() {
              var e = t(this), i = e && e.isEmpty() ? e : new Tt(I.NO_INSERT);
              i !== e && this.addChild(i), i.moveTo.apply(i, arguments);
            },
            moveBy: function() {
              var e = t(this, !0), i = e && e.getLastSegment(), r = z.read(arguments);
              this.moveTo(i ? r.add(i._point) : r);
            },
            closePath: function(e) {
              t(this, !0).closePath(e);
            }
          }
        );
      }(),
      M.each(["reverse", "flatten", "simplify", "smooth"], function(t) {
        this[t] = function(e) {
          for (var i = this._children, r, s = 0, a = i.length; s < a; s++)
            r = i[s][t](e) || r;
          return r;
        };
      }, {})
    );
    ve.inject(new function() {
      var t = Math.min, e = Math.max, i = Math.abs, r = {
        unite: { 1: !0, 2: !0 },
        intersect: { 2: !0 },
        subtract: { 1: !0 },
        exclude: { 1: !0, "-1": !0 }
      };
      function s(p) {
        return p._children || [p];
      }
      function a(p, y) {
        var c = p.clone(!1).reduce({ simplify: !0 }).transform(null, !0, !0);
        if (y) {
          for (var x = s(c), C = 0, P = x.length; C < P; C++) {
            var p = x[C];
            !p._closed && !p.isEmpty() && (p.closePath(1e-12), p.getFirstSegment().setHandleIn(0, 0), p.getLastSegment().setHandleOut(0, 0));
          }
          c = c.resolveCrossings().reorient(c.getFillRule() === "nonzero", !0);
        }
        return c;
      }
      function h(p, y, c, x, C) {
        var P = new we(I.NO_INSERT);
        return P.addChildren(p, !0), P = P.reduce({ simplify: y }), C && C.insert == !1 || P.insertAbove(x && c.isSibling(x) && c.getIndex() < x.getIndex() ? x : c), P.copyAttributes(c, !0), P;
      }
      function o(p) {
        return p.hasOverlap() || p.isCrossing();
      }
      function l(p, y, c, x) {
        if (x && (x.trace == !1 || x.stroke) && /^(subtract|intersect)$/.test(c))
          return f(p, y, c);
        var C = a(p, !0), P = y && p !== y && a(y, !0), S = r[c];
        S[c] = !0, P && (S.subtract || S.exclude) ^ (P.isClockwise() ^ C.isClockwise()) && P.reverse();
        var E = d(xe.expand(
          C.getIntersections(P, o)
        )), L = s(C), N = P && s(P), V = [], T = [], R;
        function F(ft) {
          for (var mt = 0, J = ft.length; mt < J; mt++) {
            var gt = ft[mt];
            M.push(V, gt._segments), M.push(T, gt.getCurves()), gt._overlapsOnly = !0;
          }
        }
        function U(ft) {
          for (var mt = [], J = 0, gt = ft && ft.length; J < gt; J++)
            mt.push(T[ft[J]]);
          return mt;
        }
        if (E.length) {
          F(L), N && F(N);
          for (var q = new Array(T.length), j = 0, Q = T.length; j < Q; j++)
            q[j] = T[j].getValues();
          for (var et = be.findCurveBoundsCollisions(
            q,
            q,
            0,
            !0
          ), rt = {}, j = 0; j < T.length; j++) {
            var ht = T[j], X = ht._path._id, K = rt[X] = rt[X] || {};
            K[ht.getIndex()] = {
              hor: U(et[j].hor),
              ver: U(et[j].ver)
            };
          }
          for (var j = 0, Q = E.length; j < Q; j++)
            m(
              E[j]._segment,
              C,
              P,
              rt,
              S
            );
          for (var j = 0, Q = V.length; j < Q; j++) {
            var at = V[j], lt = at._intersection;
            at._winding || m(
              at,
              C,
              P,
              rt,
              S
            ), lt && lt._overlap || (at._path._overlapsOnly = !1);
          }
          R = k(V, S);
        } else
          R = g(
            N ? L.concat(N) : L.slice(),
            function(ft) {
              return !!S[ft];
            }
          );
        return h(R, !0, p, y, x);
      }
      function f(p, y, c) {
        var x = a(p), C = a(y), P = x.getIntersections(C, o), S = c === "subtract", E = c === "divide", L = {}, N = [];
        function V(F) {
          if (!L[F._id] && (E || C.contains(F.getPointAt(F.getLength() / 2)) ^ S))
            return N.unshift(F), L[F._id] = !0;
        }
        for (var T = P.length - 1; T >= 0; T--) {
          var R = P[T].split();
          R && (V(R) && R.getFirstSegment().setHandleIn(0, 0), x.getLastSegment().setHandleOut(0, 0));
        }
        return V(x), h(N, !1, p, y);
      }
      function _(p, y) {
        for (var c = p; c; ) {
          if (c === y)
            return;
          c = c._previous;
        }
        for (; p._next && p._next !== y; )
          p = p._next;
        if (!p._next) {
          for (; y._previous; )
            y = y._previous;
          p._next = y, y._previous = p;
        }
      }
      function v(p) {
        for (var y = p.length - 1; y >= 0; y--)
          p[y].clearHandles();
      }
      function g(p, y, c) {
        var x = p && p.length;
        if (x) {
          var C = M.each(p, function(et, rt) {
            this[et._id] = {
              container: null,
              winding: et.isClockwise() ? 1 : -1,
              index: rt
            };
          }, {}), P = p.slice().sort(function(et, rt) {
            return i(rt.getArea()) - i(et.getArea());
          }), S = P[0], E = be.findItemBoundsCollisions(
            P,
            null,
            pt.GEOMETRIC_EPSILON
          );
          c == null && (c = S.isClockwise());
          for (var L = 0; L < x; L++) {
            var N = P[L], V = C[N._id], T = 0, R = E[L];
            if (R) {
              for (var F = null, U = R.length - 1; U >= 0; U--)
                if (R[U] < L) {
                  F = F || N.getInteriorPoint();
                  var q = P[R[U]];
                  if (q.contains(F)) {
                    var j = C[q._id];
                    T = j.winding, V.winding += T, V.container = j.exclude ? j.container : q;
                    break;
                  }
                }
            }
            if (y(V.winding) === y(T))
              V.exclude = !0, p[V.index] = null;
            else {
              var Q = V.container;
              N.setClockwise(
                Q ? !Q.isClockwise() : c
              );
            }
          }
        }
        return p;
      }
      function d(p, y, c) {
        var x = y && [], C = 1e-8, P = 1 - C, S = !1, E = c || [], L = c && {}, N, V, T;
        function R(mt) {
          return mt._path._id + "." + mt._segment1._index;
        }
        for (var F = (c && c.length) - 1; F >= 0; F--) {
          var U = c[F];
          U._path && (L[R(U)] = !0);
        }
        for (var F = p.length - 1; F >= 0; F--) {
          var q = p[F], j = q._time, Q = j, et = y && !y(q), U = q._curve, rt;
          if (U && (U !== V ? (S = !U.hasHandles() || L && L[R(U)], N = [], T = null, V = U) : T >= C && (j /= T)), et) {
            N && N.push(q);
            continue;
          } else
            y && x.unshift(q);
          if (T = Q, j < C)
            rt = U._segment1;
          else if (j > P)
            rt = U._segment2;
          else {
            var ht = U.divideAtTime(j, !0);
            S && E.push(U, ht), rt = ht._segment1;
            for (var X = N.length - 1; X >= 0; X--) {
              var K = N[X];
              K._time = (K._time - j) / (1 - j);
            }
          }
          q._setSegment(rt);
          var at = rt._intersection, lt = q._intersection;
          if (at) {
            _(at, lt);
            for (var ft = at; ft; )
              _(ft._intersection, at), ft = ft._next;
          } else
            rt._intersection = lt;
        }
        return c || v(E), x || p;
      }
      function w(p, y, c, x, C) {
        var P = Array.isArray(y) ? y : y[c ? "hor" : "ver"], S = c ? 1 : 0, E = S ^ 1, L = [p.x, p.y], N = L[S], V = L[E], T = 1e-9, R = 1e-6, F = N - T, U = N + T, q = 0, j = 0, Q = 0, et = 0, rt = !1, ht = !1, X = 1, K = [], at, lt;
        function ft(Nt) {
          var Yt = Nt[E + 0], ae = Nt[E + 6];
          if (!(V < t(Yt, ae) || V > e(Yt, ae))) {
            var te = Nt[S + 0], _e = Nt[S + 2], Ie = Nt[S + 4], fe = Nt[S + 6];
            if (Yt === ae) {
              (te < U && fe > F || fe < U && te > F) && (rt = !0);
              return;
            }
            var St = V === Yt ? 0 : V === ae || F > e(te, _e, Ie, fe) || U < t(te, _e, Ie, fe) ? 1 : st.solveCubic(Nt, E, V, K, 0, 1) > 0 ? K[0] : 1, ce = St === 0 ? te : St === 1 ? fe : st.getPoint(Nt, St)[c ? "y" : "x"], de = Yt > ae ? 1 : -1, Pe = at[E] > at[E + 6] ? 1 : -1, me = at[S + 6];
            return V !== Yt ? (ce < F ? Q += de : ce > U ? et += de : rt = !0, ce > N - R && ce < N + R && (X /= 2)) : (de !== Pe ? te < F ? Q += de : te > U && (et += de) : te != me && (me < U && ce > U ? (et += de, rt = !0) : me > F && ce < F && (Q += de, rt = !0)), X /= 4), at = Nt, !C && ce > F && ce < U && st.getTangent(Nt, St)[c ? "x" : "y"] === 0 && w(p, y, !c, x, !0);
          }
        }
        function mt(Nt) {
          var Yt = Nt[E + 0], ae = Nt[E + 2], te = Nt[E + 4], _e = Nt[E + 6];
          if (V <= e(Yt, ae, te, _e) && V >= t(Yt, ae, te, _e)) {
            for (var Ie = Nt[S + 0], fe = Nt[S + 2], St = Nt[S + 4], ce = Nt[S + 6], de = F > e(Ie, fe, St, ce) || U < t(Ie, fe, St, ce) ? [Nt] : st.getMonoCurves(Nt, c), Pe, me = 0, ri = de.length; me < ri; me++)
              if (Pe = ft(de[me]))
                return Pe;
          }
        }
        for (var J = 0, gt = P.length; J < gt; J++) {
          var It = P[J], yt = It._path, ie = It.getValues(), $t;
          if ((!J || P[J - 1]._path !== yt) && (at = null, yt._closed || (lt = st.getValues(
            yt.getLastCurve().getSegment2(),
            It.getSegment1(),
            null,
            !x
          ), lt[E] !== lt[E + 6] && (at = lt)), !at)) {
            at = ie;
            for (var se = yt.getLastCurve(); se && se !== It; ) {
              var Kt = se.getValues();
              if (Kt[E] !== Kt[E + 6]) {
                at = Kt;
                break;
              }
              se = se.getPrevious();
            }
          }
          if ($t = mt(ie))
            return $t;
          if (J + 1 === gt || P[J + 1]._path !== yt) {
            if (lt && ($t = mt(lt)))
              return $t;
            rt && !Q && !et && (Q = et = yt.isClockwise(x) ^ c ? 1 : -1), q += Q, j += et, Q = et = 0, rt && (ht = !0, rt = !1), lt = null;
          }
        }
        return q = i(q), j = i(j), {
          winding: e(q, j),
          windingL: q,
          windingR: j,
          quality: X,
          onPath: ht
        };
      }
      function m(p, y, c, x, C) {
        var P = [], S = p, E = 0, T;
        do {
          var L = p.getCurve();
          if (L) {
            var N = L.getLength();
            P.push({ segment: p, curve: L, length: N }), E += N;
          }
          p = p.getNext();
        } while (p && !p._intersection && p !== S);
        for (var V = [0.5, 0.25, 0.75], T = { winding: 0, quality: -1 }, R = 1e-3, F = 1 - R, U = 0; U < V.length && T.quality < 0.5; U++)
          for (var N = E * V[U], q = 0, j = P.length; q < j; q++) {
            var Q = P[q], et = Q.length;
            if (N <= et) {
              var L = Q.curve, rt = L._path, ht = rt._parent, X = ht instanceof we ? ht : rt, K = pt.clamp(L.getTimeAt(N), R, F), at = L.getPointAtTime(K), lt = i(L.getTangentAtTime(K).y) < Math.SQRT1_2, ft = null;
              if (C.subtract && c) {
                var mt = X === y ? c : y, J = mt._getWinding(at, lt, !0);
                if (X === y && J.winding || X === c && !J.winding) {
                  if (J.quality < 1)
                    continue;
                  ft = { winding: 0, quality: 1 };
                }
              }
              ft = ft || w(
                at,
                x[rt._id][L.getIndex()],
                lt,
                !0
              ), ft.quality > T.quality && (T = ft);
              break;
            }
            N -= et;
          }
        for (var q = P.length - 1; q >= 0; q--)
          P[q].segment._winding = T;
      }
      function k(p, y) {
        var c = [], x;
        function C(gt) {
          var It;
          return !!(gt && !gt._visited && (!y || y[(It = gt._winding || {}).winding] && !(y.unite && It.winding === 2 && It.windingL && It.windingR)));
        }
        function P(gt) {
          if (gt) {
            for (var It = 0, yt = x.length; It < yt; It++)
              if (gt === x[It])
                return !0;
          }
          return !1;
        }
        function S(gt) {
          for (var It = gt._segments, yt = 0, ie = It.length; yt < ie; yt++)
            It[yt]._visited = !0;
        }
        function E(gt, It) {
          var yt = gt._intersection, ie = yt, $t = [];
          It && (x = [gt]);
          function se(Kt, Nt) {
            for (; Kt && Kt !== Nt; ) {
              var Yt = Kt._segment, ae = Yt && Yt._path;
              if (ae) {
                var te = Yt.getNext() || ae.getFirstSegment(), _e = te._intersection;
                Yt !== gt && (P(Yt) || P(te) || te && C(Yt) && (C(te) || _e && C(_e._segment))) && $t.push(Yt), It && x.push(Yt);
              }
              Kt = Kt._next;
            }
          }
          if (yt) {
            for (se(yt); yt && yt._previous; )
              yt = yt._previous;
            se(yt, ie);
          }
          return $t;
        }
        p.sort(function(gt, It) {
          var yt = gt._intersection, ie = It._intersection, $t = !!(yt && yt._overlap), se = !!(ie && ie._overlap), Kt = gt._path, Nt = It._path;
          return $t ^ se ? $t ? 1 : -1 : !yt ^ !ie ? yt ? 1 : -1 : Kt !== Nt ? Kt._id - Nt._id : gt._index - It._index;
        });
        for (var L = 0, N = p.length; L < N; L++) {
          var V = p[L], T = C(V), R = null, F = !1, U = !0, q = [], j, Q, et;
          if (T && V._path._overlapsOnly) {
            var rt = V._path, ht = V._intersection._segment._path;
            rt.compare(ht) && (rt.getArea() && c.push(rt.clone(!1)), S(rt), S(ht), T = !1);
          }
          for (; T; ) {
            var X = !R, K = E(V, X), at = K.shift(), F = !X && (P(V) || P(at)), lt = !F && at;
            if (X && (R = new Tt(I.NO_INSERT), j = null), F) {
              (V.isFirst() || V.isLast()) && (U = V._path._closed), V._visited = !0;
              break;
            }
            if (lt && j && (q.push(j), j = null), j || (lt && K.push(V), j = {
              start: R._segments.length,
              crossings: K,
              visited: Q = [],
              handleIn: et
            }), lt && (V = at), !C(V)) {
              R.removeSegments(j.start);
              for (var ft = 0, mt = Q.length; ft < mt; ft++)
                Q[ft]._visited = !1;
              Q.length = 0;
              do
                V = j && j.crossings.shift(), (!V || !V._path) && (V = null, j = q.pop(), j && (Q = j.visited, et = j.handleIn));
              while (j && !C(V));
              if (!V)
                break;
            }
            var J = V.getNext();
            R.add(new vt(
              V._point,
              et,
              J && V._handleOut
            )), V._visited = !0, Q.push(V), V = J || V._path.getFirstSegment(), et = J && J._handleIn;
          }
          F && (U && (R.getFirstSegment().setHandleIn(et), R.setClosed(U)), R.getArea() !== 0 && c.push(R));
        }
        return c;
      }
      return {
        _getWinding: function(p, y, c) {
          return w(p, this.getCurves(), y, c);
        },
        unite: function(p, y) {
          return l(this, p, "unite", y);
        },
        intersect: function(p, y) {
          return l(this, p, "intersect", y);
        },
        subtract: function(p, y) {
          return l(this, p, "subtract", y);
        },
        exclude: function(p, y) {
          return l(this, p, "exclude", y);
        },
        divide: function(p, y) {
          return y && (y.trace == !1 || y.stroke) ? f(this, p, "divide") : h([
            this.subtract(p, y),
            this.intersect(p, y)
          ], !0, this, p, y);
        },
        resolveCrossings: function() {
          var p = this._children, y = p || [this];
          function c(j, Q) {
            var et = j && j._intersection;
            return et && et._overlap && et._path === Q;
          }
          var x = !1, C = !1, P = this.getIntersections(null, function(j) {
            return j.hasOverlap() && (x = !0) || j.isCrossing() && (C = !0);
          }), S = x && C && [];
          if (P = xe.expand(P), x)
            for (var E = d(P, function(j) {
              return j.hasOverlap();
            }, S), L = E.length - 1; L >= 0; L--) {
              var N = E[L], V = N._path, T = N._segment, R = T.getPrevious(), F = T.getNext();
              c(R, V) && c(F, V) && (T.remove(), R._handleOut._set(0, 0), F._handleIn._set(0, 0), R !== T && !R.getCurve().hasLength() && (F._handleIn.set(R._handleIn), R.remove()));
            }
          C && (d(P, x && function(j) {
            var Q = j.getCurve(), et = j.getSegment(), rt = j._intersection, ht = rt._curve, X = rt._segment;
            if (Q && ht && Q._path && ht._path)
              return !0;
            et && (et._intersection = null), X && (X._intersection = null);
          }, S), S && v(S), y = k(M.each(y, function(j) {
            M.push(this, j._segments);
          }, [])));
          var U = y.length, q;
          return U > 1 && p ? (y !== p && this.setChildren(y), q = this) : U === 1 && !p && (y[0] !== this && this.setSegments(y[0].removeSegments()), q = this), q || (q = new we(I.NO_INSERT), q.addChildren(y), q = q.reduce(), q.copyAttributes(this), this.replaceWith(q)), q;
        },
        reorient: function(p, y) {
          var c = this._children;
          return c && c.length ? this.setChildren(g(
            this.removeChildren(),
            function(x) {
              return !!(p ? x : x & 1);
            },
            y
          )) : y !== W && this.setClockwise(y), this;
        },
        getInteriorPoint: function() {
          var p = this.getBounds(), y = p.getCenter(!0);
          if (!this.contains(y)) {
            for (var c = this.getCurves(), x = y.y, C = [], P = [], S = 0, E = c.length; S < E; S++) {
              var L = c[S].getValues(), N = L[1], V = L[3], T = L[5], R = L[7];
              if (x >= t(N, V, T, R) && x <= e(N, V, T, R))
                for (var F = st.getMonoCurves(L), U = 0, q = F.length; U < q; U++) {
                  var j = F[U], Q = j[1], et = j[7];
                  if (Q !== et && (x >= Q && x <= et || x >= et && x <= Q)) {
                    var rt = x === Q ? j[0] : x === et ? j[6] : st.solveCubic(j, 1, x, P, 0, 1) === 1 ? st.getPoint(j, P[0]).x : (j[0] + j[6]) / 2;
                    C.push(rt);
                  }
                }
            }
            C.length > 1 && (C.sort(function(ht, X) {
              return ht - X;
            }), y.x = (C[0] + C[1]) / 2);
          }
          return y;
        }
      };
    }());
    var Be = M.extend(
      {
        _class: "PathFlattener",
        initialize: function(t, e, i, r, s) {
          var a = [], h = [], o = 0, l = 1 / (i || 32), f = t._segments, _ = f[0], v;
          function g(k, p) {
            var y = st.getValues(k, p, s);
            a.push(y), d(y, k._index, 0, 1);
          }
          function d(k, p, y, c) {
            if (c - y > l && !(r && st.isStraight(k)) && !st.isFlatEnough(k, e || 0.25)) {
              var x = st.subdivide(k, 0.5), C = (y + c) / 2;
              d(x[0], p, y, C), d(x[1], p, C, c);
            } else {
              var P = k[6] - k[0], S = k[7] - k[1], E = Math.sqrt(P * P + S * S);
              E > 0 && (o += E, h.push({
                offset: o,
                curve: k,
                index: p,
                time: c
              }));
            }
          }
          for (var w = 1, m = f.length; w < m; w++)
            v = f[w], g(_, v), _ = v;
          t._closed && g(v || _, f[0]), this.curves = a, this.parts = h, this.length = o, this.index = 0;
        },
        _get: function(t) {
          for (var e = this.parts, i = e.length, r, s = this.index; r = s, !(!s || e[--s].offset < t); )
            ;
          for (; r < i; r++) {
            var a = e[r];
            if (a.offset >= t) {
              this.index = r;
              var h = e[r - 1], o = h && h.index === a.index ? h.time : 0, l = h ? h.offset : 0;
              return {
                index: a.index,
                time: o + (a.time - o) * (t - l) / (a.offset - l)
              };
            }
          }
          return {
            index: e[i - 1].index,
            time: 1
          };
        },
        drawPart: function(t, e, i) {
          for (var r = this._get(e), s = this._get(i), a = r.index, h = s.index; a <= h; a++) {
            var o = st.getPart(
              this.curves[a],
              a === r.index ? r.time : 0,
              a === s.index ? s.time : 1
            );
            a === r.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2));
          }
        }
      },
      M.each(
        st._evaluateMethods,
        function(t) {
          this[t + "At"] = function(e) {
            var i = this._get(e);
            return st[t](this.curves[i.index], i.time);
          };
        },
        {}
      )
    ), He = M.extend({
      initialize: function(t) {
        for (var e = this.points = [], i = t._segments, r = t._closed, s = 0, a, h = i.length; s < h; s++) {
          var o = i[s].point;
          (!a || !a.equals(o)) && e.push(a = o.clone());
        }
        r && (e.unshift(e[e.length - 1]), e.push(e[1])), this.closed = r;
      },
      fit: function(t) {
        var e = this.points, i = e.length, r = null;
        return i > 0 && (r = [new vt(e[0])], i > 1 && (this.fitCubic(
          r,
          t,
          0,
          i - 1,
          e[1].subtract(e[0]),
          e[i - 2].subtract(e[i - 1])
        ), this.closed && (r.shift(), r.pop()))), r;
      },
      fitCubic: function(t, e, i, r, s, a) {
        var h = this.points;
        if (r - i === 1) {
          var o = h[i], l = h[r], f = o.getDistance(l) / 3;
          this.addCurve(t, [
            o,
            o.add(s.normalize(f)),
            l.add(a.normalize(f)),
            l
          ]);
          return;
        }
        for (var _ = this.chordLengthParameterize(i, r), v = Math.max(e, e * e), g, d = !0, w = 0; w <= 4; w++) {
          var m = this.generateBezier(i, r, _, s, a), k = this.findMaxError(i, r, m, _);
          if (k.error < e && d) {
            this.addCurve(t, m);
            return;
          }
          if (g = k.index, k.error >= v)
            break;
          d = this.reparameterize(i, r, _, m), v = k.error;
        }
        var p = h[g - 1].subtract(h[g + 1]);
        this.fitCubic(t, e, i, g, s, p), this.fitCubic(t, e, g, r, p.negate(), a);
      },
      addCurve: function(t, e) {
        var i = t[t.length - 1];
        i.setHandleOut(e[1].subtract(e[0])), t.push(new vt(e[3], e[2].subtract(e[3])));
      },
      generateBezier: function(t, e, i, r, s) {
        for (var a = 1e-12, h = Math.abs, o = this.points, l = o[t], f = o[e], _ = [[0, 0], [0, 0]], v = [0, 0], g = 0, d = e - t + 1; g < d; g++) {
          var w = i[g], m = 1 - w, k = 3 * w * m, p = m * m * m, y = k * m, c = k * w, x = w * w * w, C = r.normalize(y), P = s.normalize(c), S = o[t + g].subtract(l.multiply(p + y)).subtract(f.multiply(c + x));
          _[0][0] += C.dot(C), _[0][1] += C.dot(P), _[1][0] = _[0][1], _[1][1] += P.dot(P), v[0] += C.dot(S), v[1] += P.dot(S);
        }
        var E = _[0][0] * _[1][1] - _[1][0] * _[0][1], L, N;
        if (h(E) > a) {
          var V = _[0][0] * v[1] - _[1][0] * v[0], T = v[0] * _[1][1] - v[1] * _[0][1];
          L = T / E, N = V / E;
        } else {
          var R = _[0][0] + _[0][1], F = _[1][0] + _[1][1];
          L = N = h(R) > a ? v[0] / R : h(F) > a ? v[1] / F : 0;
        }
        var U = f.getDistance(l), q = a * U, j, Q;
        if (L < q || N < q)
          L = N = U / 3;
        else {
          var et = f.subtract(l);
          j = r.normalize(L), Q = s.normalize(N), j.dot(et) - Q.dot(et) > U * U && (L = N = U / 3, j = Q = null);
        }
        return [
          l,
          l.add(j || r.normalize(L)),
          f.add(Q || s.normalize(N)),
          f
        ];
      },
      reparameterize: function(t, e, i, r) {
        for (var s = t; s <= e; s++)
          i[s - t] = this.findRoot(r, this.points[s], i[s - t]);
        for (var s = 1, a = i.length; s < a; s++)
          if (i[s] <= i[s - 1])
            return !1;
        return !0;
      },
      findRoot: function(t, e, i) {
        for (var r = [], s = [], a = 0; a <= 2; a++)
          r[a] = t[a + 1].subtract(t[a]).multiply(3);
        for (var a = 0; a <= 1; a++)
          s[a] = r[a + 1].subtract(r[a]).multiply(2);
        var h = this.evaluate(3, t, i), o = this.evaluate(2, r, i), l = this.evaluate(1, s, i), f = h.subtract(e), _ = o.dot(o) + f.dot(l);
        return pt.isMachineZero(_) ? i : i - f.dot(o) / _;
      },
      evaluate: function(t, e, i) {
        for (var r = e.slice(), s = 1; s <= t; s++)
          for (var a = 0; a <= t - s; a++)
            r[a] = r[a].multiply(1 - i).add(r[a + 1].multiply(i));
        return r[0];
      },
      chordLengthParameterize: function(t, e) {
        for (var i = [0], r = t + 1; r <= e; r++)
          i[r - t] = i[r - t - 1] + this.points[r].getDistance(this.points[r - 1]);
        for (var r = 1, s = e - t; r <= s; r++)
          i[r] /= i[s];
        return i;
      },
      findMaxError: function(t, e, i, r) {
        for (var s = Math.floor((e - t + 1) / 2), a = 0, h = t + 1; h < e; h++) {
          var o = this.evaluate(3, i, r[h - t]), l = o.subtract(this.points[h]), f = l.x * l.x + l.y * l.y;
          f >= a && (a = f, s = h);
        }
        return {
          error: a,
          index: s
        };
      }
    }), Fe = I.extend({
      _class: "TextItem",
      _applyMatrix: !1,
      _canApplyMatrix: !1,
      _serializeFields: {
        content: null
      },
      _boundsOptions: { stroke: !1, handle: !1 },
      initialize: function(e) {
        this._content = "", this._lines = [];
        var i = e && M.isPlainObject(e) && e.x === W && e.y === W;
        this._initialize(i && e, !i && z.read(arguments));
      },
      _equals: function(t) {
        return this._content === t._content;
      },
      copyContent: function(t) {
        this.setContent(t._content);
      },
      getContent: function() {
        return this._content;
      },
      setContent: function(t) {
        this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/mg), this._changed(521);
      },
      isEmpty: function() {
        return !this._content;
      },
      getCharacterStyle: "#getStyle",
      setCharacterStyle: "#setStyle",
      getParagraphStyle: "#getStyle",
      setParagraphStyle: "#setStyle"
    }), $e = Fe.extend({
      _class: "PointText",
      initialize: function() {
        Fe.apply(this, arguments);
      },
      getPoint: function() {
        var t = this._matrix.getTranslation();
        return new Et(t.x, t.y, this, "setPoint");
      },
      setPoint: function() {
        var t = z.read(arguments);
        this.translate(t.subtract(this._matrix.getTranslation()));
      },
      _draw: function(t, e, i) {
        if (!!this._content) {
          this._setStyles(t, e, i);
          var r = this._lines, s = this._style, a = s.hasFill(), h = s.hasStroke(), o = s.getLeading(), l = t.shadowColor;
          t.font = s.getFontStyle(), t.textAlign = s.getJustification();
          for (var f = 0, _ = r.length; f < _; f++) {
            t.shadowColor = l;
            var v = r[f];
            a && (t.fillText(v, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), h && t.strokeText(v, 0, 0), t.translate(0, o);
          }
        }
      },
      _getBounds: function(t, e) {
        var i = this._style, r = this._lines, s = r.length, a = i.getJustification(), h = i.getLeading(), o = this.getView().getTextWidth(i.getFontStyle(), r), l = 0;
        a !== "left" && (l -= o / (a === "center" ? 2 : 1));
        var f = new ot(
          l,
          s ? -0.75 * h : 0,
          o,
          s * h
        );
        return t ? t._transformBounds(f, f) : f;
      }
    }), Jt = M.extend(
      new function() {
        var t = {
          gray: ["gray"],
          rgb: ["red", "green", "blue"],
          hsb: ["hue", "saturation", "brightness"],
          hsl: ["hue", "saturation", "lightness"],
          gradient: ["gradient", "origin", "destination", "highlight"]
        }, e = {}, i = {
          transparent: [0, 0, 0, 0]
        }, r;
        function s(o) {
          var l = o.match(
            /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i
          ) || o.match(
            /^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i
          ), f = "rgb", _;
          if (l) {
            var v = l[4] ? 4 : 3;
            _ = new Array(v);
            for (var g = 0; g < v; g++) {
              var d = l[g + 1];
              _[g] = parseInt(d.length == 1 ? d + d : d, 16) / 255;
            }
          } else if (l = o.match(/^(rgb|hsl)a?\((.*)\)$/)) {
            f = l[1], _ = l[2].trim().split(/[,\s]+/g);
            for (var w = f === "hsl", g = 0, m = Math.min(_.length, 4); g < m; g++) {
              var k = _[g], d = parseFloat(k);
              if (w)
                if (g === 0) {
                  var p = k.match(/([a-z]*)$/)[1];
                  d *= {
                    turn: 360,
                    rad: 180 / Math.PI,
                    grad: 0.9
                  }[p] || 1;
                } else
                  g < 3 && (d /= 100);
              else
                g < 3 && (d /= /%$/.test(k) ? 100 : 255);
              _[g] = d;
            }
          } else {
            var y = i[o];
            if (!y)
              if (it) {
                r || (r = Ft.getContext(1, 1), r.globalCompositeOperation = "copy"), r.fillStyle = "rgba(0,0,0,0)", r.fillStyle = o, r.fillRect(0, 0, 1, 1);
                var c = r.getImageData(0, 0, 1, 1).data;
                y = i[o] = [
                  c[0] / 255,
                  c[1] / 255,
                  c[2] / 255
                ];
              } else
                y = [0, 0, 0];
            _ = y.slice();
          }
          return [f, _];
        }
        var a = [
          [0, 3, 1],
          [2, 0, 1],
          [1, 0, 3],
          [1, 2, 0],
          [3, 1, 0],
          [0, 1, 2]
        ], h = {
          "rgb-hsb": function(o, l, f) {
            var _ = Math.max(o, l, f), v = Math.min(o, l, f), g = _ - v, d = g === 0 ? 0 : (_ == o ? (l - f) / g + (l < f ? 6 : 0) : _ == l ? (f - o) / g + 2 : (o - l) / g + 4) * 60;
            return [d, _ === 0 ? 0 : g / _, _];
          },
          "hsb-rgb": function(o, l, f) {
            o = (o / 60 % 6 + 6) % 6;
            var v = Math.floor(o), _ = o - v, v = a[v], g = [
              f,
              f * (1 - l),
              f * (1 - l * _),
              f * (1 - l * (1 - _))
            ];
            return [g[v[0]], g[v[1]], g[v[2]]];
          },
          "rgb-hsl": function(o, l, f) {
            var _ = Math.max(o, l, f), v = Math.min(o, l, f), g = _ - v, d = g === 0, w = d ? 0 : (_ == o ? (l - f) / g + (l < f ? 6 : 0) : _ == l ? (f - o) / g + 2 : (o - l) / g + 4) * 60, m = (_ + v) / 2, k = d ? 0 : m < 0.5 ? g / (_ + v) : g / (2 - _ - v);
            return [w, k, m];
          },
          "hsl-rgb": function(o, l, f) {
            if (o = (o / 360 % 1 + 1) % 1, l === 0)
              return [f, f, f];
            for (var _ = [o + 1 / 3, o, o - 1 / 3], v = f < 0.5 ? f * (1 + l) : f + l - f * l, g = 2 * f - v, d = [], w = 0; w < 3; w++) {
              var m = _[w];
              m < 0 && (m += 1), m > 1 && (m -= 1), d[w] = 6 * m < 1 ? g + (v - g) * 6 * m : 2 * m < 1 ? v : 3 * m < 2 ? g + (v - g) * (2 / 3 - m) * 6 : g;
            }
            return d;
          },
          "rgb-gray": function(o, l, f) {
            return [o * 0.2989 + l * 0.587 + f * 0.114];
          },
          "gray-rgb": function(o) {
            return [o, o, o];
          },
          "gray-hsb": function(o) {
            return [0, 0, o];
          },
          "gray-hsl": function(o) {
            return [0, 0, o];
          },
          "gradient-rgb": function() {
            return [];
          },
          "rgb-gradient": function() {
            return [];
          }
        };
        return M.each(t, function(o, l) {
          e[l] = [], M.each(o, function(f, _) {
            var v = M.capitalize(f), g = /^(hue|saturation)$/.test(f), d = e[l][_] = l === "gradient" ? f === "gradient" ? function(w) {
              var m = this._components[0];
              return w = ti.read(
                Array.isArray(w) ? w : arguments,
                0,
                { readNull: !0 }
              ), m !== w && (m && m._removeOwner(this), w && w._addOwner(this)), w;
            } : function() {
              return z.read(arguments, 0, {
                readNull: f === "highlight",
                clone: !0
              });
            } : function(w) {
              return w == null || isNaN(w) ? 0 : +w;
            };
            this["get" + v] = function() {
              return this._type === l || g && /^hs[bl]$/.test(this._type) ? this._components[_] : this._convert(l)[_];
            }, this["set" + v] = function(w) {
              this._type !== l && !(g && /^hs[bl]$/.test(this._type)) && (this._components = this._convert(l), this._properties = t[l], this._type = l), this._components[_] = d.call(this, w), this._changed();
            };
          }, this);
        }, {
          _class: "Color",
          _readIndex: !0,
          initialize: function o(l) {
            var f = arguments, _ = this.__read, v = 0, g, d, w, m;
            Array.isArray(l) && (f = l, l = f[0]);
            var k = l != null && typeof l;
            if (k === "string" && l in t && (g = l, l = f[1], Array.isArray(l) ? (d = l, w = f[2]) : (_ && (v = 1), f = M.slice(f, 1), k = typeof l)), !d) {
              if (m = k === "number" ? f : k === "object" && l.length != null ? l : null, m) {
                g || (g = m.length >= 3 ? "rgb" : "gray");
                var p = t[g].length;
                w = m[p], _ && (v += m === arguments ? p + (w != null ? 1 : 0) : 1), m.length > p && (m = M.slice(m, 0, p));
              } else if (k === "string") {
                var y = s(l);
                g = y[0], d = y[1], d.length === 4 && (w = d[3], d.length--);
              } else if (k === "object")
                if (l.constructor === o) {
                  if (g = l._type, d = l._components.slice(), w = l._alpha, g === "gradient")
                    for (var c = 1, x = d.length; c < x; c++) {
                      var C = d[c];
                      C && (d[c] = C.clone());
                    }
                } else if (l.constructor === ti)
                  g = "gradient", m = f;
                else {
                  g = "hue" in l ? "lightness" in l ? "hsl" : "hsb" : "gradient" in l || "stops" in l || "radial" in l ? "gradient" : "gray" in l ? "gray" : "rgb";
                  var P = t[g], S = e[g];
                  this._components = d = [];
                  for (var c = 0, x = P.length; c < x; c++) {
                    var E = l[P[c]];
                    E == null && !c && g === "gradient" && "stops" in l && (E = {
                      stops: l.stops,
                      radial: l.radial
                    }), E = S[c].call(this, E), E != null && (d[c] = E);
                  }
                  w = l.alpha;
                }
              _ && g && (v = 1);
            }
            if (this._type = g || "rgb", !d) {
              this._components = d = [];
              for (var S = e[this._type], c = 0, x = S.length; c < x; c++) {
                var E = S[c].call(this, m && m[c]);
                E != null && (d[c] = E);
              }
            }
            return this._components = d, this._properties = t[this._type], this._alpha = w, _ && (this.__read = v), this;
          },
          set: "#initialize",
          _serialize: function(o, l) {
            var f = this.getComponents();
            return M.serialize(
              /^(gray|rgb)$/.test(this._type) ? f : [this._type].concat(f),
              o,
              !0,
              l
            );
          },
          _changed: function() {
            this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129));
          },
          _convert: function(o) {
            var l;
            return this._type === o ? this._components.slice() : (l = h[this._type + "-" + o]) ? l.apply(this, this._components) : h["rgb-" + o].apply(
              this,
              h[this._type + "-rgb"].apply(
                this,
                this._components
              )
            );
          },
          convert: function(o) {
            return new Jt(o, this._convert(o), this._alpha);
          },
          getType: function() {
            return this._type;
          },
          setType: function(o) {
            this._components = this._convert(o), this._properties = t[o], this._type = o;
          },
          getComponents: function() {
            var o = this._components.slice();
            return this._alpha != null && o.push(this._alpha), o;
          },
          getAlpha: function() {
            return this._alpha != null ? this._alpha : 1;
          },
          setAlpha: function(o) {
            this._alpha = o == null ? null : Math.min(Math.max(o, 0), 1), this._changed();
          },
          hasAlpha: function() {
            return this._alpha != null;
          },
          equals: function(o) {
            var l = M.isPlainValue(o, !0) ? Jt.read(arguments) : o;
            return l === this || l && this._class === l._class && this._type === l._type && this.getAlpha() === l.getAlpha() && M.equals(this._components, l._components) || !1;
          },
          toString: function() {
            for (var o = this._properties, l = [], f = this._type === "gradient", _ = Ot.instance, v = 0, g = o.length; v < g; v++) {
              var d = this._components[v];
              d != null && l.push(o[v] + ": " + (f ? d : _.number(d)));
            }
            return this._alpha != null && l.push("alpha: " + _.number(this._alpha)), "{ " + l.join(", ") + " }";
          },
          toCSS: function(o) {
            var l = this._convert("rgb"), f = o || this._alpha == null ? 1 : this._alpha;
            function _(v) {
              return Math.round((v < 0 ? 0 : v > 1 ? 1 : v) * 255);
            }
            return l = [
              _(l[0]),
              _(l[1]),
              _(l[2])
            ], f < 1 && l.push(f < 0 ? 0 : f), o ? "#" + ((1 << 24) + (l[0] << 16) + (l[1] << 8) + l[2]).toString(16).slice(1) : (l.length == 4 ? "rgba(" : "rgb(") + l.join(",") + ")";
          },
          toCanvasStyle: function(o, l) {
            if (this._canvasStyle)
              return this._canvasStyle;
            if (this._type !== "gradient")
              return this._canvasStyle = this.toCSS();
            var f = this._components, _ = f[0], v = _._stops, g = f[1], d = f[2], w = f[3], m = l && l.inverted(), k;
            if (m && (g = m._transformPoint(g), d = m._transformPoint(d), w && (w = m._transformPoint(w))), _._radial) {
              var p = d.getDistance(g);
              if (w) {
                var y = w.subtract(g);
                y.getLength() > p && (w = g.add(y.normalize(p - 0.1)));
              }
              var c = w || g;
              k = o.createRadialGradient(
                c.x,
                c.y,
                0,
                g.x,
                g.y,
                p
              );
            } else
              k = o.createLinearGradient(
                g.x,
                g.y,
                d.x,
                d.y
              );
            for (var x = 0, C = v.length; x < C; x++) {
              var P = v[x], S = P._offset;
              k.addColorStop(
                S == null ? x / (C - 1) : S,
                P._color.toCanvasStyle()
              );
            }
            return this._canvasStyle = k;
          },
          transform: function(o) {
            if (this._type === "gradient") {
              for (var l = this._components, f = 1, _ = l.length; f < _; f++) {
                var v = l[f];
                o._transformPoint(v, v, !0);
              }
              this._changed();
            }
          },
          statics: {
            _types: t,
            random: function() {
              var o = Math.random;
              return new Jt(o(), o(), o());
            },
            _setOwner: function(o, l, f) {
              return o && (o._owner && l && o._owner !== l && (o = o.clone()), !o._owner ^ !l && (o._owner = l || null, o._setter = f || null)), o;
            }
          }
        });
      }(),
      new function() {
        var t = {
          add: function(e, i) {
            return e + i;
          },
          subtract: function(e, i) {
            return e - i;
          },
          multiply: function(e, i) {
            return e * i;
          },
          divide: function(e, i) {
            return e / i;
          }
        };
        return M.each(t, function(e, i) {
          this[i] = function(r) {
            r = Jt.read(arguments);
            for (var s = this._type, a = this._components, h = r._convert(s), o = 0, l = a.length; o < l; o++)
              h[o] = e(a[o], h[o]);
            return new Jt(
              s,
              h,
              this._alpha != null ? e(this._alpha, r.getAlpha()) : null
            );
          };
        }, {});
      }()
    ), ti = M.extend({
      _class: "Gradient",
      initialize: function(e, i) {
        this._id = Bt.get(), e && M.isPlainObject(e) && (this.set(e), e = i = null), this._stops == null && this.setStops(e || ["white", "black"]), this._radial == null && this.setRadial(typeof i == "string" && i === "radial" || i || !1);
      },
      _serialize: function(t, e) {
        return e.add(this, function() {
          return M.serialize(
            [this._stops, this._radial],
            t,
            !0,
            e
          );
        });
      },
      _changed: function() {
        for (var t = 0, e = this._owners && this._owners.length; t < e; t++)
          this._owners[t]._changed();
      },
      _addOwner: function(t) {
        this._owners || (this._owners = []), this._owners.push(t);
      },
      _removeOwner: function(t) {
        var e = this._owners ? this._owners.indexOf(t) : -1;
        e != -1 && (this._owners.splice(e, 1), this._owners.length || (this._owners = W));
      },
      clone: function() {
        for (var t = [], e = 0, i = this._stops.length; e < i; e++)
          t[e] = this._stops[e].clone();
        return new ti(t, this._radial);
      },
      getStops: function() {
        return this._stops;
      },
      setStops: function(t) {
        if (t.length < 2)
          throw new Error(
            "Gradient stop list needs to contain at least two stops."
          );
        var e = this._stops;
        if (e)
          for (var i = 0, r = e.length; i < r; i++)
            e[i]._owner = W;
        e = this._stops = hi.readList(t, 0, { clone: !0 });
        for (var i = 0, r = e.length; i < r; i++)
          e[i]._owner = this;
        this._changed();
      },
      getRadial: function() {
        return this._radial;
      },
      setRadial: function(t) {
        this._radial = t, this._changed();
      },
      equals: function(t) {
        if (t === this)
          return !0;
        if (t && this._class === t._class) {
          var e = this._stops, i = t._stops, r = e.length;
          if (r === i.length) {
            for (var s = 0; s < r; s++)
              if (!e[s].equals(i[s]))
                return !1;
            return !0;
          }
        }
        return !1;
      }
    }), hi = M.extend({
      _class: "GradientStop",
      initialize: function(e, i) {
        var r = e, s = i;
        typeof e == "object" && i === W && (Array.isArray(e) && typeof e[0] != "number" ? (r = e[0], s = e[1]) : ("color" in e || "offset" in e || "rampPoint" in e) && (r = e.color, s = e.offset || e.rampPoint || 0)), this.setColor(r), this.setOffset(s);
      },
      clone: function() {
        return new hi(this._color.clone(), this._offset);
      },
      _serialize: function(t, e) {
        var i = this._color, r = this._offset;
        return M.serialize(
          r == null ? [i] : [i, r],
          t,
          !0,
          e
        );
      },
      _changed: function() {
        this._owner && this._owner._changed(129);
      },
      getOffset: function() {
        return this._offset;
      },
      setOffset: function(t) {
        this._offset = t, this._changed();
      },
      getRampPoint: "#getOffset",
      setRampPoint: "#setOffset",
      getColor: function() {
        return this._color;
      },
      setColor: function() {
        Jt._setOwner(this._color, null), this._color = Jt._setOwner(
          Jt.read(arguments, 0),
          this,
          "setColor"
        ), this._changed();
      },
      equals: function(t) {
        return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1;
      }
    }), Re = M.extend(new function() {
      var t = {
        fillColor: null,
        fillRule: "nonzero",
        strokeColor: null,
        strokeWidth: 1,
        strokeCap: "butt",
        strokeJoin: "miter",
        strokeScaling: !0,
        miterLimit: 10,
        dashOffset: 0,
        dashArray: [],
        shadowColor: null,
        shadowBlur: 0,
        shadowOffset: new z(),
        selectedColor: null
      }, e = M.set({}, t, {
        fontFamily: "sans-serif",
        fontWeight: "normal",
        fontSize: 12,
        leading: null,
        justification: "left"
      }), i = M.set({}, e, {
        fillColor: new Jt()
      }), r = {
        strokeWidth: 193,
        strokeCap: 193,
        strokeJoin: 193,
        strokeScaling: 201,
        miterLimit: 193,
        fontFamily: 9,
        fontWeight: 9,
        fontSize: 9,
        font: 9,
        leading: 9,
        justification: 9
      }, s = {
        beans: !0
      }, a = {
        _class: "Style",
        beans: !0,
        initialize: function(o, l, f) {
          this._values = {}, this._owner = l, this._project = l && l._project || f || dt.project, this._defaults = !l || l instanceof zt ? e : l instanceof Fe ? i : t, o && this.set(o);
        }
      };
      return M.each(e, function(h, o) {
        var l = /Color$/.test(o), f = o === "shadowOffset", _ = M.capitalize(o), v = r[o], g = "set" + _, d = "get" + _;
        a[g] = function(w) {
          var m = this._owner, k = m && m._children, p = k && k.length > 0 && !(m instanceof we);
          if (p)
            for (var y = 0, c = k.length; y < c; y++)
              k[y]._style[g](w);
          if ((o === "selectedColor" || !p) && o in this._defaults) {
            var x = this._values[o];
            x !== w && (l && (x && (Jt._setOwner(x, null), x._canvasStyle = null), w && w.constructor === Jt && (w = Jt._setOwner(
              w,
              m,
              p && g
            ))), this._values[o] = w, m && m._changed(v || 129));
          }
        }, a[d] = function(w) {
          var m = this._owner, k = m && m._children, p = k && k.length > 0 && !(m instanceof we), y;
          if (p && !w)
            for (var c = 0, x = k.length; c < x; c++) {
              var C = k[c]._style[d]();
              if (!c)
                y = C;
              else if (!M.equals(y, C))
                return W;
            }
          else if (o in this._defaults) {
            var y = this._values[o];
            if (y === W)
              y = this._defaults[o], y && y.clone && (y = y.clone());
            else {
              var P = l ? Jt : f ? z : null;
              P && !(y && y.constructor === P) && (this._values[o] = y = P.read(
                [y],
                0,
                { readNull: !0, clone: !0 }
              ));
            }
          }
          return y && l && (y = Jt._setOwner(y, m, p && g)), y;
        }, s[d] = function(w) {
          return this._style[d](w);
        }, s[g] = function(w) {
          this._style[g](w);
        };
      }), M.each({
        Font: "FontFamily",
        WindingRule: "FillRule"
      }, function(h, o) {
        var l = "get" + o, f = "set" + o;
        a[l] = s[l] = "#get" + h, a[f] = s[f] = "#set" + h;
      }), I.inject(s), a;
    }(), {
      set: function(t) {
        var e = t instanceof Re, i = e ? t._values : t;
        if (i) {
          for (var r in i)
            if (r in this._defaults) {
              var s = i[r];
              this[r] = s && e && s.clone ? s.clone() : s;
            }
        }
      },
      equals: function(t) {
        function e(i, r, s) {
          var a = i._values, h = r._values, o = r._defaults;
          for (var l in a) {
            var f = a[l], _ = h[l];
            if (!(s && l in h) && !M.equals(
              f,
              _ === W ? o[l] : _
            ))
              return !1;
          }
          return !0;
        }
        return t === this || t && this._class === t._class && e(this, t) && e(t, this, !0) || !1;
      },
      _dispose: function() {
        var t;
        t = this.getFillColor(), t && (t._canvasStyle = null), t = this.getStrokeColor(), t && (t._canvasStyle = null), t = this.getShadowColor(), t && (t._canvasStyle = null);
      },
      hasFill: function() {
        var t = this.getFillColor();
        return !!t && t.alpha > 0;
      },
      hasStroke: function() {
        var t = this.getStrokeColor();
        return !!t && t.alpha > 0 && this.getStrokeWidth() > 0;
      },
      hasShadow: function() {
        var t = this.getShadowColor();
        return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero());
      },
      getView: function() {
        return this._project._view;
      },
      getFontStyle: function() {
        var t = this.getFontSize();
        return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily();
      },
      getFont: "#getFontFamily",
      setFont: "#setFontFamily",
      getLeading: function t() {
        var e = t.base.call(this), i = this.getFontSize();
        return /pt|em|%|px/.test(i) && (i = this.getView().getPixelSize(i)), e != null ? e : i * 1.2;
      }
    }), Dt = new function() {
      function t(e, i, r, s) {
        for (var a = ["", "webkit", "moz", "Moz", "ms", "o"], h = i[0].toUpperCase() + i.substring(1), o = 0; o < 6; o++) {
          var l = a[o], f = l ? l + h : i;
          if (f in e) {
            if (r)
              e[f] = s;
            else
              return e[f];
            break;
          }
        }
      }
      return {
        getStyles: function(e) {
          var i = e && e.nodeType !== 9 ? e.ownerDocument : e, r = i && i.defaultView;
          return r && r.getComputedStyle(e, "");
        },
        getBounds: function(e, i) {
          var r = e.ownerDocument, s = r.body, a = r.documentElement, h;
          try {
            h = e.getBoundingClientRect();
          } catch {
            h = { left: 0, top: 0, width: 0, height: 0 };
          }
          var o = h.left - (a.clientLeft || s.clientLeft || 0), l = h.top - (a.clientTop || s.clientTop || 0);
          if (!i) {
            var f = r.defaultView;
            o += f.pageXOffset || a.scrollLeft || s.scrollLeft, l += f.pageYOffset || a.scrollTop || s.scrollTop;
          }
          return new ot(o, l, h.width, h.height);
        },
        getViewportBounds: function(e) {
          var i = e.ownerDocument, r = i.defaultView, s = i.documentElement;
          return new ot(
            0,
            0,
            r.innerWidth || s.clientWidth,
            r.innerHeight || s.clientHeight
          );
        },
        getOffset: function(e, i) {
          return Dt.getBounds(e, i).getPoint();
        },
        getSize: function(e) {
          return Dt.getBounds(e, !0).getSize();
        },
        isInvisible: function(e) {
          return Dt.getSize(e).equals(new nt(0, 0));
        },
        isInView: function(e) {
          return !Dt.isInvisible(e) && Dt.getViewportBounds(e).intersects(
            Dt.getBounds(e, !0)
          );
        },
        isInserted: function(e) {
          return $.body.contains(e);
        },
        getPrefixed: function(e, i) {
          return e && t(e, i);
        },
        setPrefixed: function(e, i, r) {
          if (typeof i == "object")
            for (var s in i)
              t(e, s, !0, i[s]);
          else
            t(e, i, !0, r);
        }
      };
    }(), Xt = {
      add: function(t, e) {
        if (t)
          for (var i in e)
            for (var r = e[i], s = i.split(/[\s,]+/g), a = 0, h = s.length; a < h; a++) {
              var o = s[a], l = t === $ && (o === "touchstart" || o === "touchmove") ? { passive: !1 } : !1;
              t.addEventListener(o, r, l);
            }
      },
      remove: function(t, e) {
        if (t)
          for (var i in e)
            for (var r = e[i], s = i.split(/[\s,]+/g), a = 0, h = s.length; a < h; a++)
              t.removeEventListener(s[a], r, !1);
      },
      getPoint: function(t) {
        var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
        return new z(
          e.pageX || e.clientX + $.documentElement.scrollLeft,
          e.pageY || e.clientY + $.documentElement.scrollTop
        );
      },
      getTarget: function(t) {
        return t.target || t.srcElement;
      },
      getRelatedTarget: function(t) {
        return t.relatedTarget || t.toElement;
      },
      getOffset: function(t, e) {
        return Xt.getPoint(t).subtract(Dt.getOffset(
          e || Xt.getTarget(t)
        ));
      }
    };
    Xt.requestAnimationFrame = new function() {
      var t = Dt.getPrefixed(it, "requestAnimationFrame"), e = !1, i = [], r;
      function s() {
        var a = i;
        i = [];
        for (var h = 0, o = a.length; h < o; h++)
          a[h]();
        e = t && i.length, e && t(s);
      }
      return function(a) {
        i.push(a), t ? e || (t(s), e = !0) : r || (r = setInterval(s, 1e3 / 60));
      };
    }();
    var qt = M.extend(
      ge,
      {
        _class: "View",
        initialize: function t(e, i) {
          function r(v) {
            return i[v] || parseInt(i.getAttribute(v), 10);
          }
          function s() {
            var v = Dt.getSize(i);
            return v.isNaN() || v.isZero() ? new nt(r("width"), r("height")) : v;
          }
          var a;
          if (it && i) {
            this._id = i.getAttribute("id"), this._id == null && i.setAttribute("id", this._id = "paper-view-" + t._id++), Xt.add(i, this._viewEvents);
            var h = "none";
            if (Dt.setPrefixed(i.style, {
              userDrag: h,
              userSelect: h,
              touchCallout: h,
              contentZooming: h,
              tapHighlightColor: "rgba(0,0,0,0)"
            }), jt.hasAttribute(i, "resize")) {
              var o = this;
              Xt.add(it, this._windowEvents = {
                resize: function() {
                  o.setViewSize(s());
                }
              });
            }
            if (a = s(), jt.hasAttribute(i, "stats") && typeof Stats < "u") {
              this._stats = new Stats();
              var l = this._stats.domElement, f = l.style, _ = Dt.getOffset(i);
              f.position = "absolute", f.left = _.x + "px", f.top = _.y + "px", $.body.appendChild(l);
            }
          } else
            a = new nt(i), i = null;
          this._project = e, this._scope = e._scope, this._element = i, this._pixelRatio || (this._pixelRatio = it && it.devicePixelRatio || 1), this._setElementSize(a.width, a.height), this._viewSize = a, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new At())._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = { native: {}, virtual: {} }, this._autoUpdate = !dt.agent.node, this._needsUpdate = !1;
        },
        remove: function() {
          if (!this._project)
            return !1;
          qt._focused === this && (qt._focused = null), qt._views.splice(qt._views.indexOf(this), 1), delete qt._viewsById[this._id];
          var t = this._project;
          return t._view === this && (t._view = null), Xt.remove(this._element, this._viewEvents), Xt.remove(it, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0;
        },
        _events: M.each(
          I._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]),
          function(t) {
            this[t] = {};
          },
          {
            onFrame: {
              install: function() {
                this.play();
              },
              uninstall: function() {
                this.pause();
              }
            }
          }
        ),
        _animate: !1,
        _time: 0,
        _count: 0,
        getAutoUpdate: function() {
          return this._autoUpdate;
        },
        setAutoUpdate: function(t) {
          this._autoUpdate = t, t && this.requestUpdate();
        },
        update: function() {
        },
        draw: function() {
          this.update();
        },
        requestUpdate: function() {
          if (!this._requested) {
            var t = this;
            Xt.requestAnimationFrame(function() {
              if (t._requested = !1, t._animate) {
                t.requestUpdate();
                var e = t._element;
                (!Dt.getPrefixed($, "hidden") || jt.getAttribute(e, "keepalive") === "true") && Dt.isInView(e) && t._handleFrame();
              }
              t._autoUpdate && t.update();
            }), this._requested = !0;
          }
        },
        play: function() {
          this._animate = !0, this.requestUpdate();
        },
        pause: function() {
          this._animate = !1;
        },
        _handleFrame: function() {
          dt = this._scope;
          var t = Date.now() / 1e3, e = this._last ? t - this._last : 0;
          this._last = t, this.emit("frame", new M({
            delta: e,
            time: this._time += e,
            count: this._count++
          })), this._stats && this._stats.update();
        },
        _animateItem: function(t, e) {
          var i = this._frameItems;
          e ? (i[t._id] = {
            item: t,
            time: 0,
            count: 0
          }, ++this._frameItemCount === 1 && this.on("frame", this._handleFrameItems)) : (delete i[t._id], --this._frameItemCount === 0 && this.off("frame", this._handleFrameItems));
        },
        _handleFrameItems: function(t) {
          for (var e in this._frameItems) {
            var i = this._frameItems[e];
            i.item.emit("frame", new M(t, {
              time: i.time += t.delta,
              count: i.count++
            }));
          }
        },
        _changed: function() {
          this._project._changed(4097), this._bounds = this._decomposed = W;
        },
        getElement: function() {
          return this._element;
        },
        getPixelRatio: function() {
          return this._pixelRatio;
        },
        getResolution: function() {
          return this._pixelRatio * 72;
        },
        getViewSize: function() {
          var t = this._viewSize;
          return new _t(t.width, t.height, this, "setViewSize");
        },
        setViewSize: function() {
          var t = nt.read(arguments), e = t.subtract(this._viewSize);
          e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", { size: t, delta: e }), this._autoUpdate && this.update());
        },
        _setElementSize: function(t, e) {
          var i = this._element;
          i && (i.width !== t && (i.width = t), i.height !== e && (i.height = e));
        },
        getBounds: function() {
          return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(
            new ot(new z(), this._viewSize)
          )), this._bounds;
        },
        getSize: function() {
          return this.getBounds().getSize();
        },
        isVisible: function() {
          return Dt.isInView(this._element);
        },
        isInserted: function() {
          return Dt.isInserted(this._element);
        },
        getPixelSize: function(t) {
          var e = this._element, i;
          if (e) {
            var r = e.parentNode, s = $.createElement("div");
            s.style.fontSize = t, r.appendChild(s), i = parseFloat(Dt.getStyles(s).fontSize), r.removeChild(s);
          } else
            i = parseFloat(i);
          return i;
        },
        getTextWidth: function(t, e) {
          return 0;
        }
      },
      M.each(["rotate", "scale", "shear", "skew"], function(t) {
        var e = t === "rotate";
        this[t] = function() {
          var i = arguments, r = (e ? M : z).read(i), s = z.read(i, 0, { readNull: !0 });
          return this.transform(new At()[t](
            r,
            s || this.getCenter(!0)
          ));
        };
      }, {
        _decompose: function() {
          return this._decomposed || (this._decomposed = this._matrix.decompose());
        },
        translate: function() {
          var t = new At();
          return this.transform(t.translate.apply(t, arguments));
        },
        getCenter: function() {
          return this.getBounds().getCenter();
        },
        setCenter: function() {
          var t = z.read(arguments);
          this.translate(this.getCenter().subtract(t));
        },
        getZoom: function() {
          var t = this._decompose().scaling;
          return (t.x + t.y) / 2;
        },
        setZoom: function(t) {
          this.transform(new At().scale(
            t / this.getZoom(),
            this.getCenter()
          ));
        },
        getRotation: function() {
          return this._decompose().rotation;
        },
        setRotation: function(t) {
          var e = this.getRotation();
          e != null && t != null && this.rotate(t - e);
        },
        getScaling: function() {
          var t = this._decompose().scaling;
          return new Et(t.x, t.y, this, "setScaling");
        },
        setScaling: function() {
          var t = this.getScaling(), e = z.read(arguments, 0, { clone: !0, readNull: !0 });
          t && e && this.scale(e.x / t.x, e.y / t.y);
        },
        getMatrix: function() {
          return this._matrix;
        },
        setMatrix: function() {
          var t = this._matrix;
          t.set.apply(t, arguments);
        },
        transform: function(t) {
          this._matrix.append(t);
        },
        scrollBy: function() {
          this.translate(z.read(arguments).negate());
        }
      }),
      {
        projectToView: function() {
          return this._matrix._transformPoint(z.read(arguments));
        },
        viewToProject: function() {
          return this._matrix._inverseTransform(z.read(arguments));
        },
        getEventPoint: function(t) {
          return this.viewToProject(Xt.getOffset(t, this._element));
        }
      },
      {
        statics: {
          _views: [],
          _viewsById: {},
          _id: 0,
          create: function(t, e) {
            $ && typeof e == "string" && (e = $.getElementById(e));
            var i = it ? wi : qt;
            return new i(t, e);
          }
        }
      },
      new function() {
        if (!it)
          return;
        var t, e, i = !1, r = !1;
        function s(T) {
          var R = Xt.getTarget(T);
          return R.getAttribute && qt._viewsById[R.getAttribute("id")];
        }
        function a() {
          var T = qt._focused;
          if (!T || !T.isVisible()) {
            for (var R = 0, F = qt._views.length; R < F; R++)
              if ((T = qt._views[R]).isVisible()) {
                qt._focused = e = T;
                break;
              }
          }
        }
        function h(T, R, F) {
          T._handleMouseEvent("mousemove", R, F);
        }
        var o = it.navigator, l, f, _;
        o.pointerEnabled || o.msPointerEnabled ? (l = "pointerdown MSPointerDown", f = "pointermove MSPointerMove", _ = "pointerup pointercancel MSPointerUp MSPointerCancel") : (l = "touchstart", f = "touchmove", _ = "touchend touchcancel", "ontouchstart" in it && o.userAgent.match(
          /mobile|tablet|ip(ad|hone|od)|android|silk/i
        ) || (l += " mousedown", f += " mousemove", _ += " mouseup"));
        var v = {}, g = {
          mouseout: function(T) {
            var R = qt._focused, F = Xt.getRelatedTarget(T);
            if (R && (!F || F.nodeName === "HTML")) {
              var U = Xt.getOffset(T, R._element), q = U.x, j = Math.abs, Q = j(q), et = 1 << 25, rt = Q - et;
              U.x = j(rt) < Q ? rt * (q < 0 ? -1 : 1) : q, h(R, T, R.viewToProject(U));
            }
          },
          scroll: a
        };
        v[l] = function(T) {
          var R = qt._focused = s(T);
          i || (i = !0, R._handleMouseEvent("mousedown", T));
        }, g[f] = function(T) {
          var R = qt._focused;
          if (!r) {
            var F = s(T);
            F ? R !== F && (R && h(R, T), t || (t = R), R = qt._focused = e = F) : e && e === R && (t && !t.isInserted() && (t = null), R = qt._focused = t, t = null, a());
          }
          R && h(R, T);
        }, g[l] = function() {
          r = !0;
        }, g[_] = function(T) {
          var R = qt._focused;
          R && i && R._handleMouseEvent("mouseup", T), r = i = !1;
        }, Xt.add($, g), Xt.add(it, {
          load: a
        });
        var d = !1, w = !1, m = {
          doubleclick: "click",
          mousedrag: "mousemove"
        }, k = !1, p, y, c, x, C, P, S, E;
        function L(T, R, F, U, q, j, Q) {
          var et = !1, rt;
          function ht(X, K) {
            if (X.responds(K)) {
              if (rt || (rt = new Ge(
                K,
                U,
                q,
                R || X,
                j ? q.subtract(j) : null
              )), X.emit(K, rt) && (d = !0, rt.prevented && (w = !0), rt.stopped))
                return et = !0;
            } else {
              var at = m[K];
              if (at)
                return ht(X, at);
            }
          }
          for (; T && T !== Q && !ht(T, F); )
            T = T._parent;
          return et;
        }
        function N(T, R, F, U, q, j) {
          return T._project.removeOn(F), w = d = !1, C && L(
            C,
            null,
            F,
            U,
            q,
            j
          ) || R && R !== C && !R.isDescendant(C) && L(R, null, F === "mousedrag" ? "mousemove" : F, U, q, j, C) || L(
            T,
            C || R || T,
            F,
            U,
            q,
            j
          );
        }
        var V = {
          mousedown: {
            mousedown: 1,
            mousedrag: 1,
            click: 1,
            doubleclick: 1
          },
          mouseup: {
            mouseup: 1,
            mousedrag: 1,
            click: 1,
            doubleclick: 1
          },
          mousemove: {
            mousedrag: 1,
            mousemove: 1,
            mouseenter: 1,
            mouseleave: 1
          }
        };
        return {
          _viewEvents: v,
          _handleMouseEvent: function(T, R, F) {
            var U = this._itemEvents, q = U.native[T], j = T === "mousemove", Q = this._scope.tool, et = this;
            function rt(mt) {
              return U.virtual[mt] || et.responds(mt) || Q && Q.responds(mt);
            }
            j && i && rt("mousedrag") && (T = "mousedrag"), F || (F = this.getEventPoint(R));
            var ht = this.getBounds().contains(F), X = q && ht && et._project.hitTest(F, {
              tolerance: 0,
              fill: !0,
              stroke: !0
            }), K = X && X.item || null, at = !1, lt = {};
            if (lt[T.substr(5)] = !0, q && K !== x && (x && L(x, null, "mouseleave", R, F), K && L(K, null, "mouseenter", R, F), x = K), k ^ ht && (L(
              this,
              null,
              ht ? "mouseenter" : "mouseleave",
              R,
              F
            ), at = !0), (ht || lt.drag) && !F.equals(y) && (N(
              this,
              K,
              j ? T : "mousemove",
              R,
              F,
              y
            ), at = !0), k = ht, lt.down && ht || lt.up && p) {
              if (N(this, K, T, R, F, p), lt.down) {
                if (E = K === P && Date.now() - S < 300, c = P = K, !w && K) {
                  for (var ft = K; ft && !ft.responds("mousedrag"); )
                    ft = ft._parent;
                  ft && (C = K);
                }
                p = F;
              } else
                lt.up && (!w && K === c && (S = Date.now(), N(this, K, E ? "doubleclick" : "click", R, F, p), E = !1), c = C = null);
              k = !1, at = !0;
            }
            y = F, at && Q && (d = Q._handleMouseEvent(T, R, F, lt) || d), R.cancelable !== !1 && (d && !lt.move || lt.down && rt("mouseup")) && R.preventDefault();
          },
          _handleKeyEvent: function(T, R, F, U) {
            var q = this._scope, j = q.tool, Q;
            function et(rt) {
              rt.responds(T) && (dt = q, rt.emit(T, Q = Q || new li(T, R, F, U)));
            }
            this.isVisible() && (et(this), j && j.responds(T) && et(j));
          },
          _countItemEvent: function(T, R) {
            var F = this._itemEvents, U = F.native, q = F.virtual;
            for (var j in V)
              U[j] = (U[j] || 0) + (V[j][T] || 0) * R;
            q[T] = (q[T] || 0) + R;
          },
          statics: {
            updateFocus: a,
            _resetState: function() {
              i = r = d = k = !1, t = e = p = y = c = x = C = P = S = E = null;
            }
          }
        };
      }()
    ), wi = qt.extend({
      _class: "CanvasView",
      initialize: function(e, i) {
        if (!(i instanceof it.HTMLCanvasElement)) {
          var r = nt.read(arguments, 1);
          if (r.isZero())
            throw new Error(
              "Cannot create CanvasView with the provided argument: " + M.slice(arguments, 1)
            );
          i = Ft.getCanvas(r);
        }
        var s = this._context = i.getContext("2d");
        if (s.save(), this._pixelRatio = 1, !/^off|false$/.test(jt.getAttribute(i, "hidpi"))) {
          var a = it.devicePixelRatio || 1, h = Dt.getPrefixed(
            s,
            "backingStorePixelRatio"
          ) || 1;
          this._pixelRatio = a / h;
        }
        qt.call(this, e, i), this._needsUpdate = !0;
      },
      remove: function t() {
        return this._context.restore(), t.base.call(this);
      },
      _setElementSize: function t(e, i) {
        var r = this._pixelRatio;
        if (t.base.call(this, e * r, i * r), r !== 1) {
          var s = this._element, a = this._context;
          if (!jt.hasAttribute(s, "resize")) {
            var h = s.style;
            h.width = e + "px", h.height = i + "px";
          }
          a.restore(), a.save(), a.scale(r, r);
        }
      },
      getContext: function() {
        return this._context;
      },
      getPixelSize: function t(e) {
        var i = dt.agent, r;
        if (i && i.firefox)
          r = t.base.call(this, e);
        else {
          var s = this._context, a = s.font;
          s.font = e + " serif", r = parseFloat(s.font), s.font = a;
        }
        return r;
      },
      getTextWidth: function(t, e) {
        var i = this._context, r = i.font, s = 0;
        i.font = t;
        for (var a = 0, h = e.length; a < h; a++)
          s = Math.max(s, i.measureText(e[a]).width);
        return i.font = r, s;
      },
      update: function() {
        if (!this._needsUpdate)
          return !1;
        var t = this._project, e = this._context, i = this._viewSize;
        return e.clearRect(0, 0, i.width + 1, i.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0;
      }
    }), je = M.extend({
      _class: "Event",
      initialize: function(e) {
        this.event = e, this.type = e && e.type;
      },
      prevented: !1,
      stopped: !1,
      preventDefault: function() {
        this.prevented = !0, this.event.preventDefault();
      },
      stopPropagation: function() {
        this.stopped = !0, this.event.stopPropagation();
      },
      stop: function() {
        this.stopPropagation(), this.preventDefault();
      },
      getTimeStamp: function() {
        return this.event.timeStamp;
      },
      getModifiers: function() {
        return fi.modifiers;
      }
    }), li = je.extend({
      _class: "KeyEvent",
      initialize: function(e, i, r, s) {
        this.type = e, this.event = i, this.key = r, this.character = s;
      },
      toString: function() {
        return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }";
      }
    }), fi = new function() {
      var t = {
        "	": "tab",
        " ": "space",
        "\b": "backspace",
        "\x7F": "delete",
        Spacebar: "space",
        Del: "delete",
        Win: "meta",
        Esc: "escape"
      }, e = {
        tab: "	",
        space: " ",
        enter: "\r"
      }, i = {}, r = {}, s, a, h = new M({
        shift: !1,
        control: !1,
        alt: !1,
        meta: !1,
        capsLock: !1,
        space: !1
      }).inject({
        option: {
          get: function() {
            return this.alt;
          }
        },
        command: {
          get: function() {
            var f = dt && dt.agent;
            return f && f.mac ? this.meta : this.control;
          }
        }
      });
      function o(f) {
        var _ = f.key || f.keyIdentifier;
        return _ = /^U\+/.test(_) ? String.fromCharCode(parseInt(_.substr(2), 16)) : /^Arrow[A-Z]/.test(_) ? _.substr(5) : _ === "Unidentified" || _ === W ? String.fromCharCode(f.keyCode) : _, t[_] || (_.length > 1 ? M.hyphenate(_) : _.toLowerCase());
      }
      function l(f, _, v, g) {
        var d = qt._focused, w;
        if (i[_] = f, f ? r[_] = v : delete r[_], _.length > 1 && (w = M.camelize(_)) in h) {
          h[w] = f;
          var m = dt && dt.agent;
          if (w === "meta" && m && m.mac)
            if (f)
              s = {};
            else {
              for (var k in s)
                k in r && l(!1, k, s[k], g);
              s = null;
            }
        } else
          f && s && (s[_] = v);
        d && d._handleKeyEvent(
          f ? "keydown" : "keyup",
          g,
          _,
          v
        );
      }
      return Xt.add($, {
        keydown: function(f) {
          var _ = o(f), v = dt && dt.agent;
          _.length > 1 || v && v.chrome && (f.altKey || v.mac && f.metaKey || !v.mac && f.ctrlKey) ? l(
            !0,
            _,
            e[_] || (_.length > 1 ? "" : _),
            f
          ) : a = _;
        },
        keypress: function(f) {
          if (a) {
            var _ = o(f), v = f.charCode, g = v >= 32 ? String.fromCharCode(v) : _.length > 1 ? "" : _;
            _ !== a && (_ = g.toLowerCase()), l(!0, _, g, f), a = null;
          }
        },
        keyup: function(f) {
          var _ = o(f);
          _ in r && l(!1, _, r[_], f);
        }
      }), Xt.add(it, {
        blur: function(f) {
          for (var _ in r)
            l(!1, _, r[_], f);
        }
      }), {
        modifiers: h,
        isDown: function(f) {
          return !!i[f];
        }
      };
    }(), Ge = je.extend({
      _class: "MouseEvent",
      initialize: function(e, i, r, s, a) {
        this.type = e, this.event = i, this.point = r, this.target = s, this.delta = a;
      },
      toString: function() {
        return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }";
      }
    }), ci = je.extend({
      _class: "ToolEvent",
      _item: null,
      initialize: function(e, i, r) {
        this.tool = e, this.type = i, this.event = r;
      },
      _choosePoint: function(t, e) {
        return t || (e ? e.clone() : null);
      },
      getPoint: function() {
        return this._choosePoint(this._point, this.tool._point);
      },
      setPoint: function(t) {
        this._point = t;
      },
      getLastPoint: function() {
        return this._choosePoint(this._lastPoint, this.tool._lastPoint);
      },
      setLastPoint: function(t) {
        this._lastPoint = t;
      },
      getDownPoint: function() {
        return this._choosePoint(this._downPoint, this.tool._downPoint);
      },
      setDownPoint: function(t) {
        this._downPoint = t;
      },
      getMiddlePoint: function() {
        return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint;
      },
      setMiddlePoint: function(t) {
        this._middlePoint = t;
      },
      getDelta: function() {
        return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta;
      },
      setDelta: function(t) {
        this._delta = t;
      },
      getCount: function() {
        return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"];
      },
      setCount: function(t) {
        this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t;
      },
      getItem: function() {
        if (!this._item) {
          var t = this.tool._scope.project.hitTest(this.getPoint());
          if (t) {
            for (var e = t.item, i = e._parent; /^(Group|CompoundPath)$/.test(i._class); )
              e = i, i = i._parent;
            this._item = e;
          }
        }
        return this._item;
      },
      setItem: function(t) {
        this._item = t;
      },
      toString: function() {
        return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }";
      }
    }), di = Gt.extend({
      _class: "Tool",
      _list: "tools",
      _reference: "tool",
      _events: [
        "onMouseDown",
        "onMouseUp",
        "onMouseDrag",
        "onMouseMove",
        "onActivate",
        "onDeactivate",
        "onEditOptions",
        "onKeyDown",
        "onKeyUp"
      ],
      initialize: function(e) {
        Gt.call(this), this._moveCount = -1, this._downCount = -1, this.set(e);
      },
      getMinDistance: function() {
        return this._minDistance;
      },
      setMinDistance: function(t) {
        this._minDistance = t, t != null && this._maxDistance != null && t > this._maxDistance && (this._maxDistance = t);
      },
      getMaxDistance: function() {
        return this._maxDistance;
      },
      setMaxDistance: function(t) {
        this._maxDistance = t, this._minDistance != null && t != null && t < this._minDistance && (this._minDistance = t);
      },
      getFixedDistance: function() {
        return this._minDistance == this._maxDistance ? this._minDistance : null;
      },
      setFixedDistance: function(t) {
        this._minDistance = this._maxDistance = t;
      },
      _handleMouseEvent: function(t, e, i, r) {
        dt = this._scope, r.drag && !this.responds(t) && (t = "mousemove");
        var s = r.move || r.drag, a = this.responds(t), h = this.minDistance, o = this.maxDistance, l = !1, f = this;
        function _(g, d) {
          var w = i, m = s ? f._point : f._downPoint || w;
          if (s) {
            if (f._moveCount >= 0 && w.equals(m))
              return !1;
            if (m && (g != null || d != null)) {
              var k = w.subtract(m), p = k.getLength();
              if (p < (g || 0))
                return !1;
              d && (w = m.add(k.normalize(
                Math.min(p, d)
              )));
            }
            f._moveCount++;
          }
          return f._point = w, f._lastPoint = m || w, r.down && (f._moveCount = -1, f._downPoint = w, f._downCount++), !0;
        }
        function v() {
          a && (l = f.emit(t, new ci(f, t, e)) || l);
        }
        if (r.down)
          _(), v();
        else if (r.up)
          _(null, o), v();
        else if (a)
          for (; _(h, o); )
            v();
        return l;
      }
    }), ei = M.extend(ge, {
      _class: "Tween",
      statics: {
        easings: new M({
          linear: function(t) {
            return t;
          },
          easeInQuad: function(t) {
            return t * t;
          },
          easeOutQuad: function(t) {
            return t * (2 - t);
          },
          easeInOutQuad: function(t) {
            return t < 0.5 ? 2 * t * t : -1 + 2 * (2 - t) * t;
          },
          easeInCubic: function(t) {
            return t * t * t;
          },
          easeOutCubic: function(t) {
            return --t * t * t + 1;
          },
          easeInOutCubic: function(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart: function(t) {
            return t * t * t * t;
          },
          easeOutQuart: function(t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart: function(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint: function(t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function(t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint: function(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
          }
        })
      },
      initialize: function t(e, i, r, s, a, h) {
        this.object = e;
        var o = typeof a, l = o === "function";
        this.type = l ? o : o === "string" ? a : "linear", this.easing = l ? a : t.easings[this.type], this.duration = s, this.running = !1, this._then = null, this._startTime = null;
        var f = i || r;
        this._keys = f ? Object.keys(f) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = f && this._getState(i), this._to = f && this._getState(r), h !== !1 && this.start();
      },
      then: function(t) {
        return this._then = t, this;
      },
      start: function() {
        return this._startTime = null, this.running = !0, this;
      },
      stop: function() {
        return this.running = !1, this;
      },
      update: function(t) {
        if (this.running) {
          t >= 1 && (t = 1, this.running = !1);
          for (var e = this.easing(t), i = this._keys, r = function(_) {
            return typeof _ == "function" ? _(e, t) : _;
          }, s = 0, a = i && i.length; s < a; s++) {
            var h = i[s], o = r(this._from[h]), l = r(this._to[h]), f = o && l && o.__add && l.__add ? l.__subtract(o).__multiply(e).__add(o) : (l - o) * e + o;
            this._setProperty(this._parsedKeys[h], f);
          }
          this.responds("update") && this.emit("update", new M({
            progress: t,
            factor: e
          })), !this.running && this._then && this._then(this.object);
        }
        return this;
      },
      _events: {
        onUpdate: {}
      },
      _handleFrame: function(t) {
        var e = this._startTime, i = e ? (t - e) / this.duration : 0;
        e || (this._startTime = t), this.update(i);
      },
      _getState: function(t) {
        for (var e = this._keys, i = {}, r = 0, s = e.length; r < s; r++) {
          var a = e[r], h = this._parsedKeys[a], o = this._getProperty(h), l;
          if (t) {
            var f = this._resolveValue(o, t[a]);
            this._setProperty(h, f), l = this._getProperty(h), l = l && l.clone ? l.clone() : l, this._setProperty(h, o);
          } else
            l = o && o.clone ? o.clone() : o;
          i[a] = l;
        }
        return i;
      },
      _resolveValue: function(t, e) {
        if (e) {
          if (Array.isArray(e) && e.length === 2) {
            var i = e[0];
            return i && i.match && i.match(/^[+\-\*\/]=/) ? this._calculate(t, i[0], e[1]) : e;
          } else if (typeof e == "string") {
            var r = e.match(/^[+\-*/]=(.*)/);
            if (r) {
              var s = JSON.parse(r[1].replace(
                /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
                '"$2": '
              ));
              return this._calculate(t, e[0], s);
            }
          }
        }
        return e;
      },
      _calculate: function(t, e, i) {
        return dt.PaperScript.calculateBinary(t, e, i);
      },
      _parseKeys: function(t) {
        for (var e = {}, i = 0, r = t.length; i < r; i++) {
          var s = t[i], a = s.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
          e[s] = a.split("/");
        }
        return e;
      },
      _getProperty: function(t, e) {
        for (var i = this.object, r = 0, s = t.length - (e || 0); r < s && i; r++)
          i = i[t[r]];
        return i;
      },
      _setProperty: function(t, e) {
        var i = this._getProperty(t, 1);
        i && (i[t[t.length - 1]] = e);
      }
    }), ii = {
      request: function(t) {
        var e = new ct.XMLHttpRequest();
        return e.open(
          (t.method || "get").toUpperCase(),
          t.url,
          M.pick(t.async, !0)
        ), t.mimeType && e.overrideMimeType(t.mimeType), e.onload = function() {
          var i = e.status;
          i === 0 || i === 200 ? t.onLoad && t.onLoad.call(e, e.responseText) : e.onerror();
        }, e.onerror = function() {
          var i = e.status, r = 'Could not load "' + t.url + '" (Status: ' + i + ")";
          if (t.onError)
            t.onError(r, i);
          else
            throw new Error(r);
        }, e.send(null);
      }
    }, Ft = M.exports.CanvasProvider = {
      canvases: [],
      getCanvas: function(t, e) {
        if (!it)
          return null;
        var i, r = !0;
        typeof t == "object" && (e = t.height, t = t.width), this.canvases.length ? i = this.canvases.pop() : (i = $.createElement("canvas"), r = !1);
        var s = i.getContext("2d");
        if (!s)
          throw new Error("Canvas " + i + " is unable to provide a 2D context.");
        return i.width === t && i.height === e ? r && s.clearRect(0, 0, t + 1, e + 1) : (i.width = t, i.height = e), s.save(), i;
      },
      getContext: function(t, e) {
        var i = this.getCanvas(t, e);
        return i ? i.getContext("2d") : null;
      },
      release: function(t) {
        var e = t && t.canvas ? t.canvas : t;
        e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e));
      }
    }, ni = new function() {
      var t = Math.min, e = Math.max, i = Math.abs, r, s, a, h, o, l, f, _, v, g, d;
      function w(C, P, S) {
        return 0.2989 * C + 0.587 * P + 0.114 * S;
      }
      function m(C, P, S, N) {
        var L = N - w(C, P, S);
        v = C + L, g = P + L, d = S + L;
        var N = w(v, g, d), V = t(v, g, d), T = e(v, g, d);
        if (V < 0) {
          var R = N - V;
          v = N + (v - N) * N / R, g = N + (g - N) * N / R, d = N + (d - N) * N / R;
        }
        if (T > 255) {
          var F = 255 - N, U = T - N;
          v = N + (v - N) * F / U, g = N + (g - N) * F / U, d = N + (d - N) * F / U;
        }
      }
      function k(C, P, S) {
        return e(C, P, S) - t(C, P, S);
      }
      function p(C, P, S, E) {
        var L = [C, P, S], N = e(C, P, S), V = t(C, P, S), T;
        V = V === C ? 0 : V === P ? 1 : 2, N = N === C ? 0 : N === P ? 1 : 2, T = t(V, N) === 0 ? e(V, N) === 1 ? 2 : 1 : 0, L[N] > L[V] ? (L[T] = (L[T] - L[V]) * E / (L[N] - L[V]), L[N] = E) : L[T] = L[N] = 0, L[V] = 0, v = L[0], g = L[1], d = L[2];
      }
      var y = {
        multiply: function() {
          v = o * r / 255, g = l * s / 255, d = f * a / 255;
        },
        screen: function() {
          v = o + r - o * r / 255, g = l + s - l * s / 255, d = f + a - f * a / 255;
        },
        overlay: function() {
          v = o < 128 ? 2 * o * r / 255 : 255 - 2 * (255 - o) * (255 - r) / 255, g = l < 128 ? 2 * l * s / 255 : 255 - 2 * (255 - l) * (255 - s) / 255, d = f < 128 ? 2 * f * a / 255 : 255 - 2 * (255 - f) * (255 - a) / 255;
        },
        "soft-light": function() {
          var C = r * o / 255;
          v = C + o * (255 - (255 - o) * (255 - r) / 255 - C) / 255, C = s * l / 255, g = C + l * (255 - (255 - l) * (255 - s) / 255 - C) / 255, C = a * f / 255, d = C + f * (255 - (255 - f) * (255 - a) / 255 - C) / 255;
        },
        "hard-light": function() {
          v = r < 128 ? 2 * r * o / 255 : 255 - 2 * (255 - r) * (255 - o) / 255, g = s < 128 ? 2 * s * l / 255 : 255 - 2 * (255 - s) * (255 - l) / 255, d = a < 128 ? 2 * a * f / 255 : 255 - 2 * (255 - a) * (255 - f) / 255;
        },
        "color-dodge": function() {
          v = o === 0 ? 0 : r === 255 ? 255 : t(255, 255 * o / (255 - r)), g = l === 0 ? 0 : s === 255 ? 255 : t(255, 255 * l / (255 - s)), d = f === 0 ? 0 : a === 255 ? 255 : t(255, 255 * f / (255 - a));
        },
        "color-burn": function() {
          v = o === 255 ? 255 : r === 0 ? 0 : e(0, 255 - (255 - o) * 255 / r), g = l === 255 ? 255 : s === 0 ? 0 : e(0, 255 - (255 - l) * 255 / s), d = f === 255 ? 255 : a === 0 ? 0 : e(0, 255 - (255 - f) * 255 / a);
        },
        darken: function() {
          v = o < r ? o : r, g = l < s ? l : s, d = f < a ? f : a;
        },
        lighten: function() {
          v = o > r ? o : r, g = l > s ? l : s, d = f > a ? f : a;
        },
        difference: function() {
          v = o - r, v < 0 && (v = -v), g = l - s, g < 0 && (g = -g), d = f - a, d < 0 && (d = -d);
        },
        exclusion: function() {
          v = o + r * (255 - o - o) / 255, g = l + s * (255 - l - l) / 255, d = f + a * (255 - f - f) / 255;
        },
        hue: function() {
          p(r, s, a, k(o, l, f)), m(v, g, d, w(o, l, f));
        },
        saturation: function() {
          p(o, l, f, k(r, s, a)), m(v, g, d, w(o, l, f));
        },
        luminosity: function() {
          m(o, l, f, w(r, s, a));
        },
        color: function() {
          m(r, s, a, w(o, l, f));
        },
        add: function() {
          v = t(o + r, 255), g = t(l + s, 255), d = t(f + a, 255);
        },
        subtract: function() {
          v = e(o - r, 0), g = e(l - s, 0), d = e(f - a, 0);
        },
        average: function() {
          v = (o + r) / 2, g = (l + s) / 2, d = (f + a) / 2;
        },
        negation: function() {
          v = 255 - i(255 - r - o), g = 255 - i(255 - s - l), d = 255 - i(255 - a - f);
        }
      }, c = this.nativeModes = M.each([
        "source-over",
        "source-in",
        "source-out",
        "source-atop",
        "destination-over",
        "destination-in",
        "destination-out",
        "destination-atop",
        "lighter",
        "darker",
        "copy",
        "xor"
      ], function(C) {
        this[C] = !0;
      }, {}), x = Ft.getContext(1, 1);
      x && (M.each(y, function(C, P) {
        var S = P === "darken", E = !1;
        x.save();
        try {
          x.fillStyle = S ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = P, x.globalCompositeOperation === P && (x.fillStyle = S ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), E = x.getImageData(0, 0, 1, 1).data[0] !== S ? 170 : 51);
        } catch {
        }
        x.restore(), c[P] = E;
      }), Ft.release(x)), this.process = function(C, P, S, E, L) {
        var N = P.canvas, V = C === "normal";
        if (V || c[C])
          S.save(), S.setTransform(1, 0, 0, 1, 0, 0), S.globalAlpha = E, V || (S.globalCompositeOperation = C), S.drawImage(N, L.x, L.y), S.restore();
        else {
          var T = y[C];
          if (!T)
            return;
          for (var R = S.getImageData(
            L.x,
            L.y,
            N.width,
            N.height
          ), F = R.data, U = P.getImageData(
            0,
            0,
            N.width,
            N.height
          ).data, q = 0, j = F.length; q < j; q += 4) {
            r = U[q], o = F[q], s = U[q + 1], l = F[q + 1], a = U[q + 2], f = F[q + 2], h = U[q + 3], _ = F[q + 3], T();
            var Q = h * E / 255, et = 1 - Q;
            F[q] = Q * v + et * o, F[q + 1] = Q * g + et * l, F[q + 2] = Q * d + et * f, F[q + 3] = h * E + et * _;
          }
          S.putImageData(R, L.x, L.y);
        }
      };
    }(), Ht = new function() {
      var t = "http://www.w3.org/2000/svg", e = "http://www.w3.org/2000/xmlns", i = "http://www.w3.org/1999/xlink", r = {
        href: i,
        xlink: e,
        xmlns: e + "/",
        "xmlns:xlink": e + "/"
      };
      function s(o, l, f) {
        return h($.createElementNS(t, o), l, f);
      }
      function a(o, l) {
        var f = r[l], _ = f ? o.getAttributeNS(f, l) : o.getAttribute(l);
        return _ === "null" ? null : _;
      }
      function h(o, l, f) {
        for (var _ in l) {
          var v = l[_], g = r[_];
          typeof v == "number" && f && (v = f.number(v)), g ? o.setAttributeNS(g, _, v) : o.setAttribute(_, v);
        }
        return o;
      }
      return {
        svg: t,
        xmlns: e,
        xlink: i,
        create: s,
        get: a,
        set: h
      };
    }(), pi = M.each({
      fillColor: ["fill", "color"],
      fillRule: ["fill-rule", "string"],
      strokeColor: ["stroke", "color"],
      strokeWidth: ["stroke-width", "number"],
      strokeCap: ["stroke-linecap", "string"],
      strokeJoin: ["stroke-linejoin", "string"],
      strokeScaling: ["vector-effect", "lookup", {
        true: "none",
        false: "non-scaling-stroke"
      }, function(t, e) {
        return !e && (t instanceof ve || t instanceof Zt || t instanceof Fe);
      }],
      miterLimit: ["stroke-miterlimit", "number"],
      dashArray: ["stroke-dasharray", "array"],
      dashOffset: ["stroke-dashoffset", "number"],
      fontFamily: ["font-family", "string"],
      fontWeight: ["font-weight", "string"],
      fontSize: ["font-size", "number"],
      justification: ["text-anchor", "lookup", {
        left: "start",
        center: "middle",
        right: "end"
      }],
      opacity: ["opacity", "number"],
      blendMode: ["mix-blend-mode", "style"]
    }, function(t, e) {
      var i = M.capitalize(e), r = t[2];
      this[e] = {
        type: t[1],
        property: e,
        attribute: t[0],
        toSVG: r,
        fromSVG: r && M.each(r, function(s, a) {
          this[s] = a;
        }, {}),
        exportFilter: t[3],
        get: "get" + i,
        set: "set" + i
      };
    }, {});
    new function() {
      var t;
      function e(y, c, x) {
        var C = new M(), P = y.getTranslation();
        if (c) {
          var S;
          y.isInvertible() ? (y = y._shiftless(), S = y._inverseTransform(P), P = null) : S = new z(), C[x ? "cx" : "x"] = S.x, C[x ? "cy" : "y"] = S.y;
        }
        if (!y.isIdentity()) {
          var E = y.decompose();
          if (E) {
            var L = [], N = E.rotation, V = E.scaling, T = E.skewing;
            P && !P.isZero() && L.push("translate(" + t.point(P) + ")"), N && L.push("rotate(" + t.number(N) + ")"), (!pt.isZero(V.x - 1) || !pt.isZero(V.y - 1)) && L.push("scale(" + t.point(V) + ")"), T.x && L.push("skewX(" + t.number(T.x) + ")"), T.y && L.push("skewY(" + t.number(T.y) + ")"), C.transform = L.join(" ");
          } else
            C.transform = "matrix(" + y.getValues().join(",") + ")";
        }
        return C;
      }
      function i(y, c) {
        for (var x = e(y._matrix), C = y._children, P = Ht.create("g", x, t), S = 0, E = C.length; S < E; S++) {
          var L = C[S], N = k(L, c);
          if (N)
            if (L.isClipMask()) {
              var V = Ht.create("clipPath");
              V.appendChild(N), w(L, V, "clip"), Ht.set(P, {
                "clip-path": "url(#" + V.id + ")"
              });
            } else
              P.appendChild(N);
        }
        return P;
      }
      function r(y, c) {
        var x = e(y._matrix, !0), C = y.getSize(), P = y.getImage();
        return x.x -= C.width / 2, x.y -= C.height / 2, x.width = C.width, x.height = C.height, x.href = c.embedImages == !1 && P && P.src || y.toDataURL(), Ht.create("image", x, t);
      }
      function s(y, c) {
        var x = c.matchShapes;
        if (x) {
          var C = y.toShape(!1);
          if (C)
            return a(C);
        }
        var P = y._segments, S = P.length, E, L = e(y._matrix);
        if (x && S >= 2 && !y.hasHandles())
          if (S > 2) {
            E = y._closed ? "polygon" : "polyline";
            for (var N = [], V = 0; V < S; V++)
              N.push(t.point(P[V]._point));
            L.points = N.join(" ");
          } else {
            E = "line";
            var T = P[0]._point, R = P[1]._point;
            L.set({
              x1: T.x,
              y1: T.y,
              x2: R.x,
              y2: R.y
            });
          }
        else
          E = "path", L.d = y.getPathData(null, c.precision);
        return Ht.create(E, L, t);
      }
      function a(y) {
        var c = y._type, x = y._radius, C = e(y._matrix, !0, c !== "rectangle");
        if (c === "rectangle") {
          c = "rect";
          var P = y._size, S = P.width, E = P.height;
          C.x -= S / 2, C.y -= E / 2, C.width = S, C.height = E, x.isZero() && (x = null);
        }
        return x && (c === "circle" ? C.r = x : (C.rx = x.width, C.ry = x.height)), Ht.create(c, C, t);
      }
      function h(y, c) {
        var x = e(y._matrix), C = y.getPathData(null, c.precision);
        return C && (x.d = C), Ht.create("path", x, t);
      }
      function o(y, c) {
        var x = e(y._matrix, !0), C = y._definition, P = d(C, "symbol"), S = C._item, E = S.getStrokeBounds();
        return P || (P = Ht.create("symbol", {
          viewBox: t.rectangle(E)
        }), P.appendChild(k(S, c)), w(C, P, "symbol")), x.href = "#" + P.id, x.x += E.x, x.y += E.y, x.width = E.width, x.height = E.height, x.overflow = "visible", Ht.create("use", x, t);
      }
      function l(y) {
        var c = d(y, "color");
        if (!c) {
          var x = y.getGradient(), C = x._radial, P = y.getOrigin(), S = y.getDestination(), E;
          if (C) {
            E = {
              cx: P.x,
              cy: P.y,
              r: P.getDistance(S)
            };
            var L = y.getHighlight();
            L && (E.fx = L.x, E.fy = L.y);
          } else
            E = {
              x1: P.x,
              y1: P.y,
              x2: S.x,
              y2: S.y
            };
          E.gradientUnits = "userSpaceOnUse", c = Ht.create((C ? "radial" : "linear") + "Gradient", E, t);
          for (var N = x._stops, V = 0, T = N.length; V < T; V++) {
            var R = N[V], F = R._color, U = F.getAlpha(), q = R._offset;
            E = {
              offset: q == null ? V / (T - 1) : q
            }, F && (E["stop-color"] = F.toCSS(!0)), U < 1 && (E["stop-opacity"] = U), c.appendChild(
              Ht.create("stop", E, t)
            );
          }
          w(y, c, "color");
        }
        return "url(#" + c.id + ")";
      }
      function f(y) {
        var c = Ht.create(
          "text",
          e(y._matrix, !0),
          t
        );
        return c.textContent = y._content, c;
      }
      var _ = {
        Group: i,
        Layer: i,
        Raster: r,
        Path: s,
        Shape: a,
        CompoundPath: h,
        SymbolItem: o,
        PointText: f
      };
      function v(y, c, x) {
        var C = {}, P = !x && y.getParent(), S = [];
        return y._name != null && (C.id = y._name), M.each(pi, function(E) {
          var L = E.get, N = E.type, V = y[L]();
          if (E.exportFilter ? E.exportFilter(y, V) : !P || !M.equals(P[L](), V)) {
            if (N === "color" && V != null) {
              var T = V.getAlpha();
              T < 1 && (C[E.attribute + "-opacity"] = T);
            }
            N === "style" ? S.push(E.attribute + ": " + V) : C[E.attribute] = V == null ? "none" : N === "color" ? V.gradient ? l(V) : V.toCSS(!0) : N === "array" ? V.join(",") : N === "lookup" ? E.toSVG[V] : V;
          }
        }), S.length && (C.style = S.join(";")), C.opacity === 1 && delete C.opacity, y._visible || (C.visibility = "hidden"), Ht.set(c, C, t);
      }
      var g;
      function d(y, c) {
        return g || (g = { ids: {}, svgs: {} }), y && g.svgs[c + "-" + (y._id || y.__id || (y.__id = Bt.get("svg")))];
      }
      function w(y, c, x) {
        g || d();
        var C = g.ids[x] = (g.ids[x] || 0) + 1;
        c.id = x + "-" + C, g.svgs[x + "-" + (y._id || y.__id)] = c;
      }
      function m(y, c) {
        var x = y, C = null;
        if (g) {
          x = y.nodeName.toLowerCase() === "svg" && y;
          for (var P in g.svgs)
            C || (x || (x = Ht.create("svg"), x.appendChild(y)), C = x.insertBefore(
              Ht.create("defs"),
              x.firstChild
            )), C.appendChild(g.svgs[P]);
          g = null;
        }
        return c.asString ? new ct.XMLSerializer().serializeToString(x) : x;
      }
      function k(y, c, x) {
        var C = _[y._class], P = C && C(y, c);
        if (P) {
          var S = c.onExport;
          S && (P = S(y, P, c) || P);
          var E = JSON.stringify(y._data);
          E && E !== "{}" && E !== "null" && P.setAttribute("data-paper-data", E);
        }
        return P && v(y, P, x);
      }
      function p(y) {
        return y || (y = {}), t = new Ot(y.precision), y;
      }
      I.inject({
        exportSVG: function(y) {
          return y = p(y), m(k(this, y, !0), y);
        }
      }), kt.inject({
        exportSVG: function(y) {
          y = p(y);
          var c = this._children, x = this.getView(), C = M.pick(y.bounds, "view"), P = y.matrix || C === "view" && x._matrix, S = P && At.read([P]), E = C === "view" ? new ot([0, 0], x.getViewSize()) : C === "content" ? I._getBounds(c, S, { stroke: !0 }).rect : ot.read([C], 0, { readNull: !0 }), L = {
            version: "1.1",
            xmlns: Ht.svg,
            "xmlns:xlink": Ht.xlink
          };
          E && (L.width = E.width, L.height = E.height, (E.x || E.x === 0 || E.y || E.y === 0) && (L.viewBox = t.rectangle(E)));
          var N = Ht.create("svg", L, t), V = N;
          S && !S.isIdentity() && (V = N.appendChild(Ht.create(
            "g",
            e(S),
            t
          )));
          for (var T = 0, R = c.length; T < R; T++)
            V.appendChild(k(c[T], y, !0));
          return m(N, y);
        }
      });
    }(), new function() {
      var t = {}, e;
      function i(c, x, C, P, S, E) {
        var L = Ht.get(c, x) || E, N = L == null ? P ? null : C ? "" : 0 : C ? L : parseFloat(L);
        return /%\s*$/.test(L) ? N / 100 * (S ? 1 : e[/x|^width/.test(x) ? "width" : "height"]) : N;
      }
      function r(c, x, C, P, S, E, L) {
        return x = i(c, x || "x", !1, P, S, E), C = i(c, C || "y", !1, P, S, L), P && (x == null || C == null) ? null : new z(x, C);
      }
      function s(c, x, C, P, S) {
        return x = i(c, x || "width", !1, P, S), C = i(c, C || "height", !1, P, S), P && (x == null || C == null) ? null : new nt(x, C);
      }
      function a(c, x, C) {
        return c === "none" ? null : x === "number" ? parseFloat(c) : x === "array" ? c ? c.split(/[\s,]+/g).map(parseFloat) : [] : x === "color" ? k(c) || c : x === "lookup" ? C[c] : c;
      }
      function h(c, x, C, P) {
        var S = c.childNodes, E = x === "clippath", L = x === "defs", N = new zt(), V = N._project, T = V._currentStyle, R = [];
        if (!E && !L && (N = m(N, c, P), V._currentStyle = N._style.clone()), P)
          for (var F = c.querySelectorAll("defs"), U = 0, q = F.length; U < q; U++)
            p(F[U], C, !1);
        for (var U = 0, q = S.length; U < q; U++) {
          var j = S[U], Q;
          j.nodeType === 1 && !/^defs$/i.test(j.nodeName) && (Q = p(j, C, !1)) && !(Q instanceof ee) && R.push(Q);
        }
        return N.addChildren(R), E && (N = m(N.reduce(), c, P)), V._currentStyle = T, (E || L) && (N.remove(), N = null), N;
      }
      function o(c, x) {
        for (var C = c.getAttribute("points").match(
          /[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g
        ), P = [], S = 0, E = C.length; S < E; S += 2)
          P.push(new z(
            parseFloat(C[S]),
            parseFloat(C[S + 1])
          ));
        var L = new Tt(P);
        return x === "polygon" && L.closePath(), L;
      }
      function l(c) {
        return ve.create(c.getAttribute("d"));
      }
      function f(c, x) {
        var C = (i(c, "href", !0) || "").substring(1), P = x === "radialgradient", S;
        if (C)
          S = t[C].getGradient(), S._radial ^ P && (S = S.clone(), S._radial = P);
        else {
          for (var E = c.childNodes, L = [], N = 0, V = E.length; N < V; N++) {
            var T = E[N];
            T.nodeType === 1 && L.push(m(new hi(), T));
          }
          S = new ti(L, P);
        }
        var R, F, U, q = i(c, "gradientUnits", !0) !== "userSpaceOnUse";
        P ? (R = r(
          c,
          "cx",
          "cy",
          !1,
          q,
          "50%",
          "50%"
        ), F = R.add(
          i(c, "r", !1, !1, q, "50%"),
          0
        ), U = r(c, "fx", "fy", !0, q)) : (R = r(
          c,
          "x1",
          "y1",
          !1,
          q,
          "0%",
          "0%"
        ), F = r(
          c,
          "x2",
          "y2",
          !1,
          q,
          "100%",
          "0%"
        ));
        var j = m(
          new Jt(S, R, F, U),
          c
        );
        return j._scaleToBounds = q, null;
      }
      var _ = {
        "#document": function(c, x, C, P) {
          for (var S = c.childNodes, E = 0, L = S.length; E < L; E++) {
            var N = S[E];
            if (N.nodeType === 1)
              return p(N, C, P);
          }
        },
        g: h,
        svg: h,
        clippath: h,
        polygon: o,
        polyline: o,
        path: l,
        lineargradient: f,
        radialgradient: f,
        image: function(c) {
          var x = new ke(i(c, "href", !0));
          return x.on("load", function() {
            var C = s(c);
            this.setSize(C);
            var P = r(c).add(C.divide(2));
            this._matrix.append(new At().translate(P));
          }), x;
        },
        symbol: function(c, x, C, P) {
          return new ee(
            h(c, x, C, P),
            !0
          );
        },
        defs: h,
        use: function(c) {
          var x = (i(c, "href", !0) || "").substring(1), C = t[x], P = r(c);
          return C ? C instanceof ee ? C.place(P) : C.clone().translate(P) : null;
        },
        circle: function(c) {
          return new Zt.Circle(
            r(c, "cx", "cy"),
            i(c, "r")
          );
        },
        ellipse: function(c) {
          return new Zt.Ellipse({
            center: r(c, "cx", "cy"),
            radius: s(c, "rx", "ry")
          });
        },
        rect: function(c) {
          return new Zt.Rectangle(new ot(
            r(c),
            s(c)
          ), s(c, "rx", "ry"));
        },
        line: function(c) {
          return new Tt.Line(
            r(c, "x1", "y1"),
            r(c, "x2", "y2")
          );
        },
        text: function(c) {
          var x = new $e(r(c).add(
            r(c, "dx", "dy")
          ));
          return x.setContent(c.textContent.trim() || ""), x;
        },
        switch: h
      };
      function v(c, x, C, P) {
        if (c.transform) {
          for (var S = (P.getAttribute(C) || "").split(/\)\s*/g), E = new At(), L = 0, N = S.length; L < N; L++) {
            var V = S[L];
            if (!V)
              break;
            for (var T = V.split(/\(\s*/), R = T[0], F = T[1].split(/[\s,]+/g), U = 0, q = F.length; U < q; U++)
              F[U] = parseFloat(F[U]);
            switch (R) {
              case "matrix":
                E.append(
                  new At(F[0], F[1], F[2], F[3], F[4], F[5])
                );
                break;
              case "rotate":
                E.rotate(F[0], F[1] || 0, F[2] || 0);
                break;
              case "translate":
                E.translate(F[0], F[1] || 0);
                break;
              case "scale":
                E.scale(F);
                break;
              case "skewX":
                E.skew(F[0], 0);
                break;
              case "skewY":
                E.skew(0, F[0]);
                break;
            }
          }
          c.transform(E);
        }
      }
      function g(c, x, C) {
        var P = C === "fill-opacity" ? "getFillColor" : "getStrokeColor", S = c[P] && c[P]();
        S && S.setAlpha(parseFloat(x));
      }
      var d = M.set(M.each(pi, function(c) {
        this[c.attribute] = function(x, C) {
          if (x[c.set] && (x[c.set](a(C, c.type, c.fromSVG)), c.type === "color")) {
            var P = x[c.get]();
            if (P && P._scaleToBounds) {
              var S = x.getBounds();
              P.transform(new At().translate(S.getPoint()).scale(S.getSize()));
            }
          }
        };
      }, {}), {
        id: function(c, x) {
          t[x] = c, c.setName && c.setName(x);
        },
        "clip-path": function(c, x) {
          var C = k(x);
          if (C)
            if (C = C.clone(), C.setClipMask(!0), c instanceof zt)
              c.insertChild(0, C);
            else
              return new zt(C, c);
        },
        gradientTransform: v,
        transform: v,
        "fill-opacity": g,
        "stroke-opacity": g,
        visibility: function(c, x) {
          c.setVisible && c.setVisible(x === "visible");
        },
        display: function(c, x) {
          c.setVisible && c.setVisible(x !== null);
        },
        "stop-color": function(c, x) {
          c.setColor && c.setColor(x);
        },
        "stop-opacity": function(c, x) {
          c._color && c._color.setAlpha(parseFloat(x));
        },
        offset: function(c, x) {
          if (c.setOffset) {
            var C = x.match(/(.*)%$/);
            c.setOffset(C ? C[1] / 100 : parseFloat(x));
          }
        },
        viewBox: function(c, x, C, P, S) {
          var E = new ot(a(x, "array")), L = s(P, null, null, !0), N, V;
          if (c instanceof zt) {
            var T = L ? L.divide(E.getSize()) : 1, V = new At().scale(T).translate(E.getPoint().negate());
            N = c;
          } else
            c instanceof ee && (L && E.setSize(L), N = c._item);
          if (N) {
            if (w(P, "overflow", S) !== "visible") {
              var R = new Zt.Rectangle(E);
              R.setClipMask(!0), N.addChild(R);
            }
            V && N.transform(V);
          }
        }
      });
      function w(c, x, C) {
        var P = c.attributes[x], S = P && P.value;
        if (!S && c.style) {
          var E = M.camelize(x);
          S = c.style[E], !S && C.node[E] !== C.parent[E] && (S = C.node[E]);
        }
        return S ? S === "none" ? null : S : W;
      }
      function m(c, x, C) {
        var P = x.parentNode, S = {
          node: Dt.getStyles(x) || {},
          parent: !C && !/^defs$/i.test(P.tagName) && Dt.getStyles(P) || {}
        };
        return M.each(d, function(E, L) {
          var N = w(x, L, S);
          c = N !== W && E(c, N, L, x, S) || c;
        }), c;
      }
      function k(c) {
        var x = c && c.match(/\((?:["'#]*)([^"')]+)/), C = x && x[1], P = C && t[it ? C.replace(it.location.href.split("#")[0] + "#", "") : C];
        return P && P._scaleToBounds && (P = P.clone(), P._scaleToBounds = !0), P;
      }
      function p(c, x, C) {
        var P = c.nodeName.toLowerCase(), S = P !== "#document", E = $.body, L, N, V;
        C && S && (e = dt.getView().getSize(), e = s(c, null, null, !0) || e, L = Ht.create("svg", {
          style: "stroke-width: 1px; stroke-miterlimit: 10"
        }), N = c.parentNode, V = c.nextSibling, L.appendChild(c), E.appendChild(L));
        var T = dt.settings, R = T.applyMatrix, F = T.insertItems;
        T.applyMatrix = !1, T.insertItems = !1;
        var U = _[P], q = U && U(c, P, x, C) || null;
        if (T.insertItems = F, T.applyMatrix = R, q) {
          S && !(q instanceof zt) && (q = m(q, c, C));
          var j = x.onImport, Q = S && c.getAttribute("data-paper-data");
          j && (q = j(c, q, x) || q), x.expandShapes && q instanceof Zt && (q.remove(), q = q.toPath()), Q && (q._data = JSON.parse(Q));
        }
        return L && (E.removeChild(L), N && (V ? N.insertBefore(c, V) : N.appendChild(c))), C && (t = {}, q && M.pick(x.applyMatrix, R) && q.matrix.apply(!0, !0)), q;
      }
      function y(c, x, C) {
        if (!c)
          return null;
        x = typeof x == "function" ? { onLoad: x } : x || {};
        var P = dt, S = null;
        function E(T) {
          try {
            var R = typeof T == "object" ? T : new ct.DOMParser().parseFromString(
              T.trim(),
              "image/svg+xml"
            );
            if (!R.nodeName)
              throw R = null, new Error("Unsupported SVG source: " + c);
            dt = P, S = p(R, x, !0), (!x || x.insert !== !1) && C._insertItem(W, S);
            var F = x.onLoad;
            F && F(S, T);
          } catch (U) {
            L(U);
          }
        }
        function L(T, R) {
          var F = x.onError;
          if (F)
            F(T, R);
          else
            throw new Error(T);
        }
        if (typeof c == "string" && !/^[\s\S]*</.test(c)) {
          var N = $.getElementById(c);
          N ? E(N) : ii.request({
            url: c,
            async: !0,
            onLoad: E,
            onError: L
          });
        } else if (typeof File < "u" && c instanceof File) {
          var V = new FileReader();
          return V.onload = function() {
            E(V.result);
          }, V.onerror = function() {
            L(V.error);
          }, V.readAsText(c);
        } else
          E(c);
        return S;
      }
      I.inject({
        importSVG: function(c, x) {
          return y(c, x, this);
        }
      }), kt.inject({
        importSVG: function(c, x) {
          return this.activate(), y(c, x, this);
        }
      });
    }(), M.exports.PaperScript = function() {
      var t = this, e = t.acorn;
      if (!e && typeof ur < "u")
        try {
          e = lr();
        } catch {
        }
      if (!e) {
        var i, r;
        e = i = r = {}, function(m, k) {
          if (typeof i == "object" && typeof r == "object")
            return k(i);
          if (typeof W == "function" && W.amd)
            return W(["exports"], k);
          k(m.acorn || (m.acorn = {}));
        }(this, function(m) {
          m.version = "0.5.0";
          var k, p, y, c;
          m.parse = function(B, D) {
            return p = String(B), y = p.length, C(D), an(), Kn(k.program);
          };
          var x = m.defaultOptions = {
            ecmaVersion: 5,
            strictSemicolons: !1,
            allowTrailingCommas: !0,
            forbidReserved: !1,
            allowReturnOutsideFunction: !1,
            locations: !1,
            onComment: null,
            ranges: !1,
            program: null,
            sourceFile: null,
            directSourceFile: null
          };
          function C(B) {
            k = B || {};
            for (var D in x)
              Object.prototype.hasOwnProperty.call(k, D) || (k[D] = x[D]);
            c = k.sourceFile || null;
          }
          var P = m.getLineInfo = function(B, D) {
            for (var Z = 1, Y = 0; ; ) {
              si.lastIndex = Y;
              var xt = si.exec(B);
              if (xt && xt.index < D)
                ++Z, Y = xt.index + xt[0].length;
              else
                break;
            }
            return { line: Z, column: D - Y };
          };
          m.tokenize = function(B, D) {
            p = String(B), y = p.length, C(D), an();
            var Z = {};
            function Y(xt) {
              return Q = L, Ke(xt), Z.start = E, Z.end = L, Z.startLoc = N, Z.endLoc = V, Z.type = T, Z.value = R, Z;
            }
            return Y.jumpTo = function(xt, Ct) {
              if (S = xt, k.locations) {
                U = 1, q = si.lastIndex = 0;
                for (var Pt; (Pt = si.exec(p)) && Pt.index < xt; )
                  ++U, q = Pt.index + Pt[0].length;
              }
              F = Ct, ai();
            }, Y;
          };
          var S, E, L, N, V, T, R, F, U, q, j, Q, et, rt, ht, X;
          function K(B, D) {
            var Z = P(p, B);
            D += " (" + Z.line + ":" + Z.column + ")";
            var Y = new SyntaxError(D);
            throw Y.pos = B, Y.loc = Z, Y.raisedAt = S, Y;
          }
          var at = [], lt = { type: "num" }, ft = { type: "regexp" }, mt = { type: "string" }, J = { type: "name" }, gt = { type: "eof" }, It = { keyword: "break" }, yt = { keyword: "case", beforeExpr: !0 }, ie = { keyword: "catch" }, $t = { keyword: "continue" }, se = { keyword: "debugger" }, Kt = { keyword: "default" }, Nt = { keyword: "do", isLoop: !0 }, Yt = { keyword: "else", beforeExpr: !0 }, ae = { keyword: "finally" }, te = { keyword: "for", isLoop: !0 }, _e = { keyword: "function" }, Ie = { keyword: "if" }, fe = { keyword: "return", beforeExpr: !0 }, St = { keyword: "switch" }, ce = { keyword: "throw", beforeExpr: !0 }, de = { keyword: "try" }, Pe = { keyword: "var" }, me = { keyword: "while", isLoop: !0 }, ri = { keyword: "with" }, Si = { keyword: "new", beforeExpr: !0 }, Ci = { keyword: "this" }, n = { keyword: "null", atomValue: null }, u = { keyword: "true", atomValue: !0 }, b = { keyword: "false", atomValue: !1 }, A = { keyword: "in", binop: 7, beforeExpr: !0 }, O = {
            break: It,
            case: yt,
            catch: ie,
            continue: $t,
            debugger: se,
            default: Kt,
            do: Nt,
            else: Yt,
            finally: ae,
            for: te,
            function: _e,
            if: Ie,
            return: fe,
            switch: St,
            throw: ce,
            try: de,
            var: Pe,
            while: me,
            with: ri,
            null: n,
            true: u,
            false: b,
            new: Si,
            in: A,
            instanceof: { keyword: "instanceof", binop: 7, beforeExpr: !0 },
            this: Ci,
            typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 },
            void: { keyword: "void", prefix: !0, beforeExpr: !0 },
            delete: { keyword: "delete", prefix: !0, beforeExpr: !0 }
          }, H = { type: "[", beforeExpr: !0 }, G = { type: "]" }, tt = { type: "{", beforeExpr: !0 }, ut = { type: "}" }, bt = { type: "(", beforeExpr: !0 }, wt = { type: ")" }, Ut = { type: ",", beforeExpr: !0 }, ue = { type: ";", beforeExpr: !0 }, Se = { type: ":", beforeExpr: !0 }, Le = { type: "." }, De = { type: "?", beforeExpr: !0 }, Me = { binop: 10, beforeExpr: !0 }, Ne = { isAssign: !0, beforeExpr: !0 }, Ze = { isAssign: !0, beforeExpr: !0 }, wn = { postfix: !0, prefix: !0, isUpdate: !0 }, Qi = { prefix: !0, beforeExpr: !0 }, Ji = { binop: 1, beforeExpr: !0 }, $i = { binop: 2, beforeExpr: !0 }, Sn = { binop: 3, beforeExpr: !0 }, Cn = { binop: 4, beforeExpr: !0 }, kn = { binop: 5, beforeExpr: !0 }, In = { binop: 6, beforeExpr: !0 }, Pn = { binop: 7, beforeExpr: !0 }, An = { binop: 8, beforeExpr: !0 }, En = { binop: 9, prefix: !0, beforeExpr: !0 }, Tn = { binop: 10, beforeExpr: !0 };
          m.tokTypes = {
            bracketL: H,
            bracketR: G,
            braceL: tt,
            braceR: ut,
            parenL: bt,
            parenR: wt,
            comma: Ut,
            semi: ue,
            colon: Se,
            dot: Le,
            question: De,
            slash: Me,
            eq: Ne,
            name: J,
            eof: gt,
            num: lt,
            regexp: ft,
            string: mt
          };
          for (var tn in O)
            m.tokTypes["_" + tn] = O[tn];
          function gi(B) {
            B = B.split(" ");
            var D = "", Z = [];
            t:
              for (var Y = 0; Y < B.length; ++Y) {
                for (var xt = 0; xt < Z.length; ++xt)
                  if (Z[xt][0].length == B[Y].length) {
                    Z[xt].push(B[Y]);
                    continue t;
                  }
                Z.push([B[Y]]);
              }
            function Ct(Vt) {
              if (Vt.length == 1)
                return D += "return str === " + JSON.stringify(Vt[0]) + ";";
              D += "switch(str){";
              for (var Ee = 0; Ee < Vt.length; ++Ee)
                D += "case " + JSON.stringify(Vt[Ee]) + ":";
              D += "return true}return false;";
            }
            if (Z.length > 3) {
              Z.sort(function(Vt, Ee) {
                return Ee.length - Vt.length;
              }), D += "switch(str.length){";
              for (var Y = 0; Y < Z.length; ++Y) {
                var Pt = Z[Y];
                D += "case " + Pt[0].length + ":", Ct(Pt);
              }
              D += "}";
            } else
              Ct(B);
            return new Function("str", D);
          }
          var Ln = gi("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"), Mn = gi("class enum extends super const export import"), en = gi("implements interface let package private protected public static yield"), ki = gi("eval arguments"), Nn = gi("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), On = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, nn = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", Bn = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", rn = new RegExp("[" + nn + "]"), Rn = new RegExp("[" + nn + Bn + "]"), Ii = /[\n\r\u2028\u2029]/, si = /\r\n|[\n\r\u2028\u2029]/g, Pi = m.isIdentifierStart = function(B) {
            return B < 65 ? B === 36 : B < 91 ? !0 : B < 97 ? B === 95 : B < 123 ? !0 : B >= 170 && rn.test(String.fromCharCode(B));
          }, sn = m.isIdentifierChar = function(B) {
            return B < 48 ? B === 36 : B < 58 ? !0 : B < 65 ? !1 : B < 91 ? !0 : B < 97 ? B === 95 : B < 123 ? !0 : B >= 170 && Rn.test(String.fromCharCode(B));
          };
          function Xe() {
            this.line = U, this.column = S - q;
          }
          function an() {
            U = 1, S = q = 0, F = !0, ai();
          }
          function oe(B, D) {
            L = S, k.locations && (V = new Xe()), T = B, ai(), R = D, F = B.beforeExpr;
          }
          function Vn() {
            var B = k.onComment && k.locations && new Xe(), D = S, Z = p.indexOf("*/", S += 2);
            if (Z === -1 && K(S - 2, "Unterminated comment"), S = Z + 2, k.locations) {
              si.lastIndex = D;
              for (var Y; (Y = si.exec(p)) && Y.index < S; )
                ++U, q = Y.index + Y[0].length;
            }
            k.onComment && k.onComment(
              !0,
              p.slice(D + 2, Z),
              D,
              S,
              B,
              k.locations && new Xe()
            );
          }
          function Bi() {
            for (var B = S, D = k.onComment && k.locations && new Xe(), Z = p.charCodeAt(S += 2); S < y && Z !== 10 && Z !== 13 && Z !== 8232 && Z !== 8233; )
              ++S, Z = p.charCodeAt(S);
            k.onComment && k.onComment(
              !1,
              p.slice(B + 2, S),
              B,
              S,
              D,
              k.locations && new Xe()
            );
          }
          function ai() {
            for (; S < y; ) {
              var B = p.charCodeAt(S);
              if (B === 32)
                ++S;
              else if (B === 13) {
                ++S;
                var D = p.charCodeAt(S);
                D === 10 && ++S, k.locations && (++U, q = S);
              } else if (B === 10 || B === 8232 || B === 8233)
                ++S, k.locations && (++U, q = S);
              else if (B > 8 && B < 14)
                ++S;
              else if (B === 47) {
                var D = p.charCodeAt(S + 1);
                if (D === 42)
                  Vn();
                else if (D === 47)
                  Bi();
                else
                  break;
              } else if (B === 160)
                ++S;
              else if (B >= 5760 && On.test(String.fromCharCode(B)))
                ++S;
              else
                break;
            }
          }
          function zn() {
            var B = p.charCodeAt(S + 1);
            return B >= 48 && B <= 57 ? on(!0) : (++S, oe(Le));
          }
          function Fn() {
            var B = p.charCodeAt(S + 1);
            return F ? (++S, un()) : B === 61 ? he(Ze, 2) : he(Me, 1);
          }
          function Dn() {
            var B = p.charCodeAt(S + 1);
            return B === 61 ? he(Ze, 2) : he(Tn, 1);
          }
          function Un(B) {
            var D = p.charCodeAt(S + 1);
            return D === B ? he(B === 124 ? Ji : $i, 2) : D === 61 ? he(Ze, 2) : he(B === 124 ? Sn : kn, 1);
          }
          function qn() {
            var B = p.charCodeAt(S + 1);
            return B === 61 ? he(Ze, 2) : he(Cn, 1);
          }
          function Wn(B) {
            var D = p.charCodeAt(S + 1);
            return D === B ? D == 45 && p.charCodeAt(S + 2) == 62 && Ii.test(p.slice(Q, S)) ? (S += 3, Bi(), ai(), Ke()) : he(wn, 2) : D === 61 ? he(Ze, 2) : he(En, 1);
          }
          function Hn(B) {
            var D = p.charCodeAt(S + 1), Z = 1;
            return D === B ? (Z = B === 62 && p.charCodeAt(S + 2) === 62 ? 3 : 2, p.charCodeAt(S + Z) === 61 ? he(Ze, Z + 1) : he(An, Z)) : D == 33 && B == 60 && p.charCodeAt(S + 2) == 45 && p.charCodeAt(S + 3) == 45 ? (S += 4, Bi(), ai(), Ke()) : (D === 61 && (Z = p.charCodeAt(S + 2) === 61 ? 3 : 2), he(Pn, Z));
          }
          function jn(B) {
            var D = p.charCodeAt(S + 1);
            return D === 61 ? he(In, p.charCodeAt(S + 2) === 61 ? 3 : 2) : he(B === 61 ? Ne : Qi, 1);
          }
          function Gn(B) {
            switch (B) {
              case 46:
                return zn();
              case 40:
                return ++S, oe(bt);
              case 41:
                return ++S, oe(wt);
              case 59:
                return ++S, oe(ue);
              case 44:
                return ++S, oe(Ut);
              case 91:
                return ++S, oe(H);
              case 93:
                return ++S, oe(G);
              case 123:
                return ++S, oe(tt);
              case 125:
                return ++S, oe(ut);
              case 58:
                return ++S, oe(Se);
              case 63:
                return ++S, oe(De);
              case 48:
                var D = p.charCodeAt(S + 1);
                if (D === 120 || D === 88)
                  return Zn();
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return on(!1);
              case 34:
              case 39:
                return Xn(B);
              case 47:
                return Fn();
              case 37:
              case 42:
                return Dn();
              case 124:
              case 38:
                return Un(B);
              case 94:
                return qn();
              case 43:
              case 45:
                return Wn(B);
              case 60:
              case 62:
                return Hn(B);
              case 61:
              case 33:
                return jn(B);
              case 126:
                return he(Qi, 1);
            }
            return !1;
          }
          function Ke(B) {
            if (B ? S = E + 1 : E = S, k.locations && (N = new Xe()), B)
              return un();
            if (S >= y)
              return oe(gt);
            var D = p.charCodeAt(S);
            if (Pi(D) || D === 92)
              return ln();
            var Z = Gn(D);
            if (Z === !1) {
              var Y = String.fromCharCode(D);
              if (Y === "\\" || rn.test(Y))
                return ln();
              K(S, "Unexpected character '" + Y + "'");
            }
            return Z;
          }
          function he(B, D) {
            var Z = p.slice(S, S + D);
            S += D, oe(B, Z);
          }
          function un() {
            for (var xt = "", B, D, Z = S; ; ) {
              S >= y && K(Z, "Unterminated regular expression");
              var Y = p.charAt(S);
              if (Ii.test(Y) && K(Z, "Unterminated regular expression"), B)
                B = !1;
              else {
                if (Y === "[")
                  D = !0;
                else if (Y === "]" && D)
                  D = !1;
                else if (Y === "/" && !D)
                  break;
                B = Y === "\\";
              }
              ++S;
            }
            var xt = p.slice(Z, S);
            ++S;
            var Ct = hn();
            Ct && !/^[gmsiy]*$/.test(Ct) && K(Z, "Invalid regexp flag");
            try {
              var Pt = new RegExp(xt, Ct);
            } catch (Vt) {
              Vt instanceof SyntaxError && K(Z, Vt.message), K(Vt);
            }
            return oe(ft, Pt);
          }
          function _i(B, D) {
            for (var Z = S, Y = 0, xt = 0, Ct = D == null ? 1 / 0 : D; xt < Ct; ++xt) {
              var Pt = p.charCodeAt(S), Vt;
              if (Pt >= 97 ? Vt = Pt - 97 + 10 : Pt >= 65 ? Vt = Pt - 65 + 10 : Pt >= 48 && Pt <= 57 ? Vt = Pt - 48 : Vt = 1 / 0, Vt >= B)
                break;
              ++S, Y = Y * B + Vt;
            }
            return S === Z || D != null && S - Z !== D ? null : Y;
          }
          function Zn() {
            S += 2;
            var B = _i(16);
            return B == null && K(E + 2, "Expected hexadecimal number"), Pi(p.charCodeAt(S)) && K(S, "Identifier directly after number"), oe(lt, B);
          }
          function on(B) {
            var D = S, Z = !1, Y = p.charCodeAt(S) === 48;
            !B && _i(10) === null && K(D, "Invalid number"), p.charCodeAt(S) === 46 && (++S, _i(10), Z = !0);
            var xt = p.charCodeAt(S);
            (xt === 69 || xt === 101) && (xt = p.charCodeAt(++S), (xt === 43 || xt === 45) && ++S, _i(10) === null && K(D, "Invalid number"), Z = !0), Pi(p.charCodeAt(S)) && K(S, "Identifier directly after number");
            var Ct = p.slice(D, S), Pt;
            return Z ? Pt = parseFloat(Ct) : !Y || Ct.length === 1 ? Pt = parseInt(Ct, 10) : /[89]/.test(Ct) || X ? K(D, "Invalid number") : Pt = parseInt(Ct, 8), oe(lt, Pt);
          }
          function Xn(B) {
            S++;
            for (var D = ""; ; ) {
              S >= y && K(E, "Unterminated string constant");
              var Z = p.charCodeAt(S);
              if (Z === B)
                return ++S, oe(mt, D);
              if (Z === 92) {
                Z = p.charCodeAt(++S);
                var Y = /^[0-7]+/.exec(p.slice(S, S + 3));
                for (Y && (Y = Y[0]); Y && parseInt(Y, 8) > 255; )
                  Y = Y.slice(0, -1);
                if (Y === "0" && (Y = null), ++S, Y)
                  X && K(S - 2, "Octal literal in strict mode"), D += String.fromCharCode(parseInt(Y, 8)), S += Y.length - 1;
                else
                  switch (Z) {
                    case 110:
                      D += `
`;
                      break;
                    case 114:
                      D += "\r";
                      break;
                    case 120:
                      D += String.fromCharCode(Ai(2));
                      break;
                    case 117:
                      D += String.fromCharCode(Ai(4));
                      break;
                    case 85:
                      D += String.fromCharCode(Ai(8));
                      break;
                    case 116:
                      D += "	";
                      break;
                    case 98:
                      D += "\b";
                      break;
                    case 118:
                      D += "\v";
                      break;
                    case 102:
                      D += "\f";
                      break;
                    case 48:
                      D += "\0";
                      break;
                    case 13:
                      p.charCodeAt(S) === 10 && ++S;
                    case 10:
                      k.locations && (q = S, ++U);
                      break;
                    default:
                      D += String.fromCharCode(Z);
                      break;
                  }
              } else
                (Z === 13 || Z === 10 || Z === 8232 || Z === 8233) && K(E, "Unterminated string constant"), D += String.fromCharCode(Z), ++S;
            }
          }
          function Ai(B) {
            var D = _i(16, B);
            return D === null && K(E, "Bad character escape sequence"), D;
          }
          var ui;
          function hn() {
            ui = !1;
            for (var B, D = !0, Z = S; ; ) {
              var Y = p.charCodeAt(S);
              if (sn(Y))
                ui && (B += p.charAt(S)), ++S;
              else if (Y === 92) {
                ui || (B = p.slice(Z, S)), ui = !0, p.charCodeAt(++S) != 117 && K(S, "Expecting Unicode escape sequence \\uXXXX"), ++S;
                var xt = Ai(4), Ct = String.fromCharCode(xt);
                Ct || K(S - 1, "Invalid Unicode escape"), (D ? Pi(xt) : sn(xt)) || K(S - 4, "Invalid Unicode escape"), B += Ct;
              } else
                break;
              D = !1;
            }
            return ui ? B : p.slice(Z, S);
          }
          function ln() {
            var B = hn(), D = J;
            return !ui && Nn(B) && (D = O[B]), oe(D, B);
          }
          function Mt() {
            j = E, Q = L, et = V, Ke();
          }
          function Ri(B) {
            if (X = B, S = E, k.locations)
              for (; S < q; )
                q = p.lastIndexOf(`
`, q - 2) + 1, --U;
            ai(), Ke();
          }
          function fn() {
            this.type = null, this.start = E, this.end = null;
          }
          function cn() {
            this.start = N, this.end = null, c !== null && (this.source = c);
          }
          function le() {
            var B = new fn();
            return k.locations && (B.loc = new cn()), k.directSourceFile && (B.sourceFile = k.directSourceFile), k.ranges && (B.range = [E, 0]), B;
          }
          function Ue(B) {
            var D = new fn();
            return D.start = B.start, k.locations && (D.loc = new cn(), D.loc.start = B.loc.start), k.ranges && (D.range = [B.range[0], 0]), D;
          }
          function Lt(B, D) {
            return B.type = D, B.end = Q, k.locations && (B.loc.end = et), k.ranges && (B.range[1] = Q), B;
          }
          function Vi(B) {
            return k.ecmaVersion >= 5 && B.type === "ExpressionStatement" && B.expression.type === "Literal" && B.expression.value === "use strict";
          }
          function Qt(B) {
            if (T === B)
              return Mt(), !0;
          }
          function Ei() {
            return !k.strictSemicolons && (T === gt || T === ut || Ii.test(p.slice(Q, E)));
          }
          function Ye() {
            !Qt(ue) && !Ei() && Ve();
          }
          function ne(B) {
            T === B ? Mt() : Ve();
          }
          function Ve() {
            K(E, "Unexpected token");
          }
          function Ti(B) {
            B.type !== "Identifier" && B.type !== "MemberExpression" && K(B.start, "Assigning to rvalue"), X && B.type === "Identifier" && ki(B.name) && K(B.start, "Assigning to " + B.name + " in strict mode");
          }
          function Kn(B) {
            j = Q = S, k.locations && (et = new Xe()), rt = X = null, ht = [], Ke();
            var D = B || le(), Z = !0;
            for (B || (D.body = []); T !== gt; ) {
              var Y = Ae();
              D.body.push(Y), Z && Vi(Y) && Ri(!0), Z = !1;
            }
            return Lt(D, "Program");
          }
          var zi = { kind: "loop" }, Yn = { kind: "switch" };
          function Ae() {
            (T === Me || T === Ze && R == "/=") && Ke(!0);
            var B = T, D = le();
            switch (B) {
              case It:
              case $t:
                Mt();
                var Z = B === It;
                Qt(ue) || Ei() ? D.label = null : T !== J ? Ve() : (D.label = qe(), Ye());
                for (var Y = 0; Y < ht.length; ++Y) {
                  var xt = ht[Y];
                  if ((D.label == null || xt.name === D.label.name) && (xt.kind != null && (Z || xt.kind === "loop") || D.label && Z))
                    break;
                }
                return Y === ht.length && K(D.start, "Unsyntactic " + B.keyword), Lt(D, Z ? "BreakStatement" : "ContinueStatement");
              case se:
                return Mt(), Ye(), Lt(D, "DebuggerStatement");
              case Nt:
                return Mt(), ht.push(zi), D.body = Ae(), ht.pop(), ne(me), D.test = vi(), Ye(), Lt(D, "DoWhileStatement");
              case te:
                if (Mt(), ht.push(zi), ne(bt), T === ue)
                  return Fi(D, null);
                if (T === Pe) {
                  var Ct = le();
                  return Mt(), pn(Ct, !0), Lt(Ct, "VariableDeclaration"), Ct.declarations.length === 1 && Qt(A) ? dn(D, Ct) : Fi(D, Ct);
                }
                var Ct = pe(!1, !0);
                return Qt(A) ? (Ti(Ct), dn(D, Ct)) : Fi(D, Ct);
              case _e:
                return Mt(), Hi(D, !0);
              case Ie:
                return Mt(), D.test = vi(), D.consequent = Ae(), D.alternate = Qt(Yt) ? Ae() : null, Lt(D, "IfStatement");
              case fe:
                return !rt && !k.allowReturnOutsideFunction && K(E, "'return' outside of function"), Mt(), Qt(ue) || Ei() ? D.argument = null : (D.argument = pe(), Ye()), Lt(D, "ReturnStatement");
              case St:
                Mt(), D.discriminant = vi(), D.cases = [], ne(tt), ht.push(Yn);
                for (var Pt, Vt; T != ut; )
                  if (T === yt || T === Kt) {
                    var Ee = T === yt;
                    Pt && Lt(Pt, "SwitchCase"), D.cases.push(Pt = le()), Pt.consequent = [], Mt(), Ee ? Pt.test = pe() : (Vt && K(j, "Multiple default clauses"), Vt = !0, Pt.test = null), ne(Se);
                  } else
                    Pt || Ve(), Pt.consequent.push(Ae());
                return Pt && Lt(Pt, "SwitchCase"), Mt(), ht.pop(), Lt(D, "SwitchStatement");
              case ce:
                return Mt(), Ii.test(p.slice(Q, E)) && K(Q, "Illegal newline after throw"), D.argument = pe(), Ye(), Lt(D, "ThrowStatement");
              case de:
                if (Mt(), D.block = mi(), D.handler = null, T === ie) {
                  var Qe = le();
                  Mt(), ne(bt), Qe.param = qe(), X && ki(Qe.param.name) && K(Qe.param.start, "Binding " + Qe.param.name + " in strict mode"), ne(wt), Qe.guard = null, Qe.body = mi(), D.handler = Lt(Qe, "CatchClause");
                }
                return D.guardedHandlers = at, D.finalizer = Qt(ae) ? mi() : null, !D.handler && !D.finalizer && K(D.start, "Missing catch or finally clause"), Lt(D, "TryStatement");
              case Pe:
                return Mt(), pn(D), Ye(), Lt(D, "VariableDeclaration");
              case me:
                return Mt(), D.test = vi(), ht.push(zi), D.body = Ae(), ht.pop(), Lt(D, "WhileStatement");
              case ri:
                return X && K(E, "'with' in strict mode"), Mt(), D.object = vi(), D.body = Ae(), Lt(D, "WithStatement");
              case tt:
                return mi();
              case ue:
                return Mt(), Lt(D, "EmptyStatement");
              default:
                var Gi = R, Li = pe();
                if (B === J && Li.type === "Identifier" && Qt(Se)) {
                  for (var Y = 0; Y < ht.length; ++Y)
                    ht[Y].name === Gi && K(Li.start, "Label '" + Gi + "' is already declared");
                  var ir = T.isLoop ? "loop" : T === St ? "switch" : null;
                  return ht.push({ name: Gi, kind: ir }), D.body = Ae(), ht.pop(), D.label = Li, Lt(D, "LabeledStatement");
                } else
                  return D.expression = Li, Ye(), Lt(D, "ExpressionStatement");
            }
          }
          function vi() {
            ne(bt);
            var B = pe();
            return ne(wt), B;
          }
          function mi(B) {
            var D = le(), Z = !0, Y = !1, xt;
            for (D.body = [], ne(tt); !Qt(ut); ) {
              var Ct = Ae();
              D.body.push(Ct), Z && B && Vi(Ct) && (xt = Y, Ri(Y = !0)), Z = !1;
            }
            return Y && !xt && Ri(!1), Lt(D, "BlockStatement");
          }
          function Fi(B, D) {
            return B.init = D, ne(ue), B.test = T === ue ? null : pe(), ne(ue), B.update = T === wt ? null : pe(), ne(wt), B.body = Ae(), ht.pop(), Lt(B, "ForStatement");
          }
          function dn(B, D) {
            return B.left = D, B.right = pe(), ne(wt), B.body = Ae(), ht.pop(), Lt(B, "ForInStatement");
          }
          function pn(B, D) {
            for (B.declarations = [], B.kind = "var"; ; ) {
              var Z = le();
              if (Z.id = qe(), X && ki(Z.id.name) && K(Z.id.start, "Binding " + Z.id.name + " in strict mode"), Z.init = Qt(Ne) ? pe(!0, D) : null, B.declarations.push(Lt(Z, "VariableDeclarator")), !Qt(Ut))
                break;
            }
            return B;
          }
          function pe(B, D) {
            var Z = Di(D);
            if (!B && T === Ut) {
              var Y = Ue(Z);
              for (Y.expressions = [Z]; Qt(Ut); )
                Y.expressions.push(Di(D));
              return Lt(Y, "SequenceExpression");
            }
            return Z;
          }
          function Di(B) {
            var D = Qn(B);
            if (T.isAssign) {
              var Z = Ue(D);
              return Z.operator = R, Z.left = D, Mt(), Z.right = Di(B), Ti(D), Lt(Z, "AssignmentExpression");
            }
            return D;
          }
          function Qn(B) {
            var D = Jn(B);
            if (Qt(De)) {
              var Z = Ue(D);
              return Z.test = D, Z.consequent = pe(!0), ne(Se), Z.alternate = pe(!0, B), Lt(Z, "ConditionalExpression");
            }
            return D;
          }
          function Jn(B) {
            return Ui(qi(), -1, B);
          }
          function Ui(B, D, Z) {
            var Y = T.binop;
            if (Y != null && (!Z || T !== A) && Y > D) {
              var xt = Ue(B);
              xt.left = B, xt.operator = R;
              var Ct = T;
              Mt(), xt.right = Ui(qi(), Y, Z);
              var Pt = Lt(xt, Ct === Ji || Ct === $i ? "LogicalExpression" : "BinaryExpression");
              return Ui(Pt, D, Z);
            }
            return B;
          }
          function qi() {
            if (T.prefix) {
              var B = le(), D = T.isUpdate;
              return B.operator = R, B.prefix = !0, F = !0, Mt(), B.argument = qi(), D ? Ti(B.argument) : X && B.operator === "delete" && B.argument.type === "Identifier" && K(B.start, "Deleting local variable in strict mode"), Lt(B, D ? "UpdateExpression" : "UnaryExpression");
            }
            for (var Z = $n(); T.postfix && !Ei(); ) {
              var B = Ue(Z);
              B.operator = R, B.prefix = !1, B.argument = Z, Ti(Z), Mt(), Z = Lt(B, "UpdateExpression");
            }
            return Z;
          }
          function $n() {
            return bi(Wi());
          }
          function bi(B, D) {
            if (Qt(Le)) {
              var Z = Ue(B);
              return Z.object = B, Z.property = qe(!0), Z.computed = !1, bi(Lt(Z, "MemberExpression"), D);
            } else if (Qt(H)) {
              var Z = Ue(B);
              return Z.object = B, Z.property = pe(), Z.computed = !0, ne(G), bi(Lt(Z, "MemberExpression"), D);
            } else if (!D && Qt(bt)) {
              var Z = Ue(B);
              return Z.callee = B, Z.arguments = ji(wt, !1), bi(Lt(Z, "CallExpression"), D);
            } else
              return B;
          }
          function Wi() {
            switch (T) {
              case Ci:
                var Y = le();
                return Mt(), Lt(Y, "ThisExpression");
              case J:
                return qe();
              case lt:
              case mt:
              case ft:
                var Y = le();
                return Y.value = R, Y.raw = p.slice(E, L), Mt(), Lt(Y, "Literal");
              case n:
              case u:
              case b:
                var Y = le();
                return Y.value = T.atomValue, Y.raw = T.keyword, Mt(), Lt(Y, "Literal");
              case bt:
                var B = N, D = E;
                Mt();
                var Z = pe();
                return Z.start = D, Z.end = L, k.locations && (Z.loc.start = B, Z.loc.end = V), k.ranges && (Z.range = [D, L]), ne(wt), Z;
              case H:
                var Y = le();
                return Mt(), Y.elements = ji(G, !0, !0), Lt(Y, "ArrayExpression");
              case tt:
                return er();
              case _e:
                var Y = le();
                return Mt(), Hi(Y, !1);
              case Si:
                return tr();
              default:
                Ve();
            }
          }
          function tr() {
            var B = le();
            return Mt(), B.callee = bi(Wi(), !0), Qt(bt) ? B.arguments = ji(wt, !1) : B.arguments = at, Lt(B, "NewExpression");
          }
          function er() {
            var B = le(), D = !0, Z = !1;
            for (B.properties = [], Mt(); !Qt(ut); ) {
              if (D)
                D = !1;
              else if (ne(Ut), k.allowTrailingCommas && Qt(ut))
                break;
              var Y = { key: gn() }, xt = !1, Ct;
              if (Qt(Se) ? (Y.value = pe(!0), Ct = Y.kind = "init") : k.ecmaVersion >= 5 && Y.key.type === "Identifier" && (Y.key.name === "get" || Y.key.name === "set") ? (xt = Z = !0, Ct = Y.kind = Y.key.name, Y.key = gn(), T !== bt && Ve(), Y.value = Hi(le(), !1)) : Ve(), Y.key.type === "Identifier" && (X || Z))
                for (var Pt = 0; Pt < B.properties.length; ++Pt) {
                  var Vt = B.properties[Pt];
                  if (Vt.key.name === Y.key.name) {
                    var Ee = Ct == Vt.kind || xt && Vt.kind === "init" || Ct === "init" && (Vt.kind === "get" || Vt.kind === "set");
                    Ee && !X && Ct === "init" && Vt.kind === "init" && (Ee = !1), Ee && K(Y.key.start, "Redefinition of property");
                  }
                }
              B.properties.push(Y);
            }
            return Lt(B, "ObjectExpression");
          }
          function gn() {
            return T === lt || T === mt ? Wi() : qe(!0);
          }
          function Hi(B, D) {
            T === J ? B.id = qe() : D ? Ve() : B.id = null, B.params = [];
            var Z = !0;
            for (ne(bt); !Qt(wt); )
              Z ? Z = !1 : ne(Ut), B.params.push(qe());
            var Y = rt, xt = ht;
            if (rt = !0, ht = [], B.body = mi(!0), rt = Y, ht = xt, X || B.body.body.length && Vi(B.body.body[0]))
              for (var Ct = B.id ? -1 : 0; Ct < B.params.length; ++Ct) {
                var Pt = Ct < 0 ? B.id : B.params[Ct];
                if ((en(Pt.name) || ki(Pt.name)) && K(Pt.start, "Defining '" + Pt.name + "' in strict mode"), Ct >= 0)
                  for (var Vt = 0; Vt < Ct; ++Vt)
                    Pt.name === B.params[Vt].name && K(Pt.start, "Argument name clash in strict mode");
              }
            return Lt(B, D ? "FunctionDeclaration" : "FunctionExpression");
          }
          function ji(B, D, Z) {
            for (var Y = [], xt = !0; !Qt(B); ) {
              if (xt)
                xt = !1;
              else if (ne(Ut), D && k.allowTrailingCommas && Qt(B))
                break;
              Z && T === Ut ? Y.push(null) : Y.push(pe(!0));
            }
            return Y;
          }
          function qe(B) {
            var D = le();
            return B && k.forbidReserved == "everywhere" && (B = !1), T === J ? (!B && (k.forbidReserved && (k.ecmaVersion === 3 ? Ln : Mn)(R) || X && en(R)) && p.slice(E, L).indexOf("\\") == -1 && K(E, "The keyword '" + R + "' is reserved"), D.name = R) : B && T.keyword ? D.name = T.keyword : Ve(), F = !1, Mt(), Lt(D, "Identifier");
          }
        }), e.version || (e = null);
      }
      function s(m, k) {
        return (t.acorn || e).parse(m, k);
      }
      var a = {
        "+": "__add",
        "-": "__subtract",
        "*": "__multiply",
        "/": "__divide",
        "%": "__modulo",
        "==": "__equals",
        "!=": "__equals"
      }, h = {
        "-": "__negate",
        "+": "__self"
      }, o = M.each(
        ["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"],
        function(m) {
          this["__" + m] = "#" + m;
        },
        {
          __self: function() {
            return this;
          }
        }
      );
      z.inject(o), nt.inject(o), Jt.inject(o);
      function l(m, k, p) {
        var y = a[k];
        if (m && m[y]) {
          var c = m[y](p);
          return k === "!=" ? !c : c;
        }
        switch (k) {
          case "+":
            return m + p;
          case "-":
            return m - p;
          case "*":
            return m * p;
          case "/":
            return m / p;
          case "%":
            return m % p;
          case "==":
            return m == p;
          case "!=":
            return m != p;
        }
      }
      function f(m, k) {
        var p = h[m];
        if (k && k[p])
          return k[p]();
        switch (m) {
          case "+":
            return +k;
          case "-":
            return -k;
        }
      }
      function _(m, k) {
        if (!m)
          return "";
        k = k || {};
        var p = [];
        function y(X) {
          for (var K = 0, at = p.length; K < at; K++) {
            var lt = p[K];
            if (lt[0] >= X)
              break;
            X += lt[1];
          }
          return X;
        }
        function c(X) {
          return m.substring(
            y(X.range[0]),
            y(X.range[1])
          );
        }
        function x(X, K) {
          return m.substring(
            y(X.range[1]),
            y(K.range[0])
          );
        }
        function C(X, K) {
          for (var at = y(X.range[0]), lt = y(X.range[1]), ft = 0, mt = p.length - 1; mt >= 0; mt--)
            if (at > p[mt][0]) {
              ft = mt + 1;
              break;
            }
          p.splice(ft, 0, [at, K.length - lt + at]), m = m.substring(0, at) + K + m.substring(lt);
        }
        function P(X, K) {
          switch (X.type) {
            case "UnaryExpression":
              if (X.operator in h && X.argument.type !== "Literal") {
                var at = c(X.argument);
                C(X, '$__("' + X.operator + '", ' + at + ")");
              }
              break;
            case "BinaryExpression":
              if (X.operator in a && X.left.type !== "Literal") {
                var lt = c(X.left), ft = c(X.right), mt = x(X.left, X.right), J = X.operator;
                C(X, "__$__(" + lt + "," + mt.replace(
                  new RegExp("\\" + J),
                  '"' + J + '"'
                ) + ", " + ft + ")");
              }
              break;
            case "UpdateExpression":
            case "AssignmentExpression":
              var gt = K && K.type;
              if (!(gt === "ForStatement" || gt === "BinaryExpression" && /^[=!<>]/.test(K.operator) || gt === "MemberExpression" && K.computed)) {
                if (X.type === "UpdateExpression") {
                  var at = c(X.argument), It = "__$__(" + at + ', "' + X.operator[0] + '", 1)', yt = at + " = " + It;
                  X.prefix ? yt = "(" + yt + ")" : (gt === "AssignmentExpression" || gt === "VariableDeclarator" || gt === "BinaryExpression") && (c(K.left || K.id) === at && (yt = It), yt = at + "; " + yt), C(X, yt);
                } else if (/^.=$/.test(X.operator) && X.left.type !== "Literal") {
                  var lt = c(X.left), ft = c(X.right), It = lt + " = __$__(" + lt + ', "' + X.operator[0] + '", ' + ft + ")";
                  C(X, /^\(.*\)$/.test(c(X)) ? "(" + It + ")" : It);
                }
              }
              break;
          }
        }
        function S(X) {
          switch (X.type) {
            case "ExportDefaultDeclaration":
              C({
                range: [X.start, X.declaration.start]
              }, "module.exports = ");
              break;
            case "ExportNamedDeclaration":
              var K = X.declaration, at = X.specifiers;
              if (K) {
                var lt = K.declarations;
                lt && (lt.forEach(function(mt) {
                  C(mt, "module.exports." + c(mt));
                }), C({
                  range: [
                    X.start,
                    K.start + K.kind.length
                  ]
                }, ""));
              } else if (at) {
                var ft = at.map(function(mt) {
                  var J = c(mt);
                  return "module.exports." + J + " = " + J + "; ";
                }).join("");
                ft && C(X, ft);
              }
              break;
          }
        }
        function E(X, K, at) {
          if (X) {
            for (var lt in X)
              if (lt !== "range" && lt !== "loc") {
                var ft = X[lt];
                if (Array.isArray(ft))
                  for (var mt = 0, J = ft.length; mt < J; mt++)
                    E(ft[mt], X, at);
                else
                  ft && typeof ft == "object" && E(ft, X, at);
              }
            at.operatorOverloading !== !1 && P(X, K), at.moduleExports !== !1 && S(X);
          }
        }
        function L(X) {
          var K = "", at = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          for (X = (Math.abs(X) << 1) + (X < 0 ? 1 : 0); X || !K; ) {
            var lt = X & 31;
            X >>= 5, X && (lt |= 32), K += at[lt];
          }
          return K;
        }
        var N = k.url || "", V = k.sourceMaps, T = k.paperFeatures || {}, R = k.source || m, F = k.offset || 0, U = dt.agent, q = U.versionNumber, j = !1, Q = /\r\n|\n|\r/mg, et;
        if (V && (U.chrome && q >= 30 || U.webkit && q >= 537.76 || U.firefox && q >= 23 || U.node)) {
          if (U.node)
            F -= 2;
          else if (it && N && !it.location.href.indexOf(N)) {
            var rt = $.getElementsByTagName("html")[0].innerHTML;
            F = rt.substr(0, rt.indexOf(m) + 1).match(
              Q
            ).length + 1;
          }
          j = F > 0 && !(U.chrome && q >= 36 || U.safari && q >= 600 || U.firefox && q >= 40 || U.node);
          var ht = ["AA" + L(j ? 0 : F) + "A"];
          ht.length = (m.match(Q) || []).length + 1 + (j ? F : 0), et = {
            version: 3,
            file: N,
            names: [],
            mappings: ht.join(";AACA"),
            sourceRoot: "",
            sources: [N],
            sourcesContent: [R]
          };
        }
        return (T.operatorOverloading !== !1 || T.moduleExports !== !1) && E(s(m, {
          ranges: !0,
          preserveParens: !0,
          sourceType: "module"
        }), null, T), et && (j && (m = new Array(F + 1).join(`
`) + m), /^(inline|both)$/.test(V) && (m += `
//# sourceMappingURL=data:application/json;base64,` + ct.btoa(unescape(encodeURIComponent(
          JSON.stringify(et)
        )))), m += `
//# sourceURL=` + (N || "paperscript")), {
          url: N,
          source: R,
          code: m,
          map: et
        };
      }
      function v(m, k, p) {
        dt = k;
        var y = k.getView(), c = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(m) && !/\bnew\s+Tool\b/.test(m) ? new di() : null, x = c ? c._events : [], C = ["onFrame", "onResize"].concat(x), P = [], S = [], E, L = typeof m == "object" ? m : _(m, p);
        m = L.code;
        function N(q, j) {
          for (var Q in q)
            (j || !/^_/.test(Q)) && new RegExp("([\\b\\s\\W]|^)" + Q.replace(/\$/g, "\\$") + "\\b").test(m) && (P.push(Q), S.push(q[Q]));
        }
        N(
          { __$__: l, $__: f, paper: k, tool: c },
          !0
        ), N(k), m = "var module = { exports: {} }; " + m;
        var F = M.each(C, function(q) {
          new RegExp("\\s+" + q + "\\b").test(m) && (P.push(q), this.push("module.exports." + q + " = " + q + ";"));
        }, []).join(`
`);
        F && (m += `
` + F), m += `
return module.exports;`;
        var V = dt.agent;
        if ($ && (V.chrome || V.firefox && V.versionNumber < 40)) {
          var T = $.createElement("script"), R = $.head || $.getElementsByTagName("head")[0];
          V.firefox && (m = `
` + m), T.appendChild($.createTextNode(
            "document.__paperscript__ = function(" + P + ") {" + m + `
}`
          )), R.appendChild(T), E = $.__paperscript__, delete $.__paperscript__, R.removeChild(T);
        } else
          E = Function(P, m);
        var F = E && E.apply(k, S), U = F || {};
        return M.each(x, function(q) {
          var j = U[q];
          j && (c[q] = j);
        }), y && (U.onResize && y.setOnResize(U.onResize), y.emit("resize", {
          size: y.size,
          delta: new z()
        }), U.onFrame && y.setOnFrame(U.onFrame), y.requestUpdate()), F;
      }
      function g(m) {
        if (/^text\/(?:x-|)paperscript$/.test(m.type) && jt.getAttribute(m, "ignore") !== "true") {
          var k = jt.getAttribute(m, "canvas"), p = $.getElementById(k), y = m.src || m.getAttribute("data-src"), c = jt.hasAttribute(m, "async"), x = "data-paper-scope";
          if (!p)
            throw new Error('Unable to find canvas with id "' + k + '"');
          var C = jt.get(p.getAttribute(x)) || new jt().setup(p);
          return p.setAttribute(x, C._id), y ? ii.request({
            url: y,
            async: c,
            mimeType: "text/plain",
            onLoad: function(P) {
              v(P, C, y);
            }
          }) : v(m.innerHTML, C, m.baseURI), m.setAttribute("data-paper-ignore", "true"), C;
        }
      }
      function d() {
        M.each(
          $ && $.getElementsByTagName("script"),
          g
        );
      }
      function w(m) {
        return m ? g(m) : d();
      }
      return it && ($.readyState === "complete" ? setTimeout(d) : Xt.add(it, { load: d })), {
        compile: _,
        execute: v,
        load: w,
        parse: s,
        calculateBinary: l,
        calculateUnary: f
      };
    }.call(this);
    var dt = new (jt.inject(M.exports, {
      Base: M,
      Numerical: pt,
      Key: fi,
      DomEvent: Xt,
      DomElement: Dt,
      document: $,
      window: it,
      Symbol: ee,
      PlacedSymbol: We
    }))();
    return dt.agent.node && _n(dt), typeof W == "function" && W.amd ? W("paper", dt) : Wt && (Wt.exports = dt), dt;
  }).call(xn, typeof self == "object" ? self : null);
})(yn);
const Oe = yn.exports, fr = ["id"], mn = {
  __name: "ImageRuler",
  props: {
    image: Object,
    axis: String,
    position: String,
    comparison: String,
    xWidth: Number,
    xHeight: Number,
    yWidth: Number,
    yHeight: Number,
    imageLoaded: Boolean,
    config: Object
  },
  setup(Wt) {
    const ct = Wt, W = Je(() => "#" + ct.position + "Ruler"), it = yi(null), $ = Je(() => ({
      pixelsPerInch: ct.config.pixelsPerInch || 72,
      spaceAddend: 15,
      subUnitBase: 2,
      subUnitExponent: 2,
      levelToLevelMultiplier: 0.5,
      ticksPerUnit: Math.pow(2, 2),
      masterTickQty: Math.pow(2, 2) * ct.xWidth,
      rulerWidth: Math.round(15 + 0.3 * ct.config.pixelsPerInch)
    })), M = Je(() => {
      let Ot = {
        left: {
          x: {
            position: "absolute",
            bottom: 0,
            right: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(-${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            bottom: 0,
            right: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(-${$.value.rulerWidth}px)`
          }
        },
        right: {
          x: {
            position: "absolute",
            bottom: 0,
            left: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(-${$.value.rulerWidth}px)`
          }
        }
      }, pt = {
        left: {
          x: {
            position: "absolute",
            bottom: 0,
            right: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(-${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            bottom: 0,
            right: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(-${$.value.rulerWidth}px)`
          }
        },
        right: {
          x: {
            position: "absolute",
            bottom: 0,
            right: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(-${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(-${$.value.rulerWidth}px)`
          }
        }
      }, Bt = {
        left: {
          x: {
            position: "absolute",
            top: 0,
            left: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            top: 0,
            left: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(${$.value.rulerWidth}px)`
          }
        },
        right: {
          x: {
            position: "absolute",
            top: 0,
            right: 0,
            height: `${$.value.rulerWidth}px`,
            transform: `translateX(-${$.value.rulerWidth}px)`
          },
          y: {
            position: "absolute",
            top: 0,
            right: 0,
            width: `${$.value.rulerWidth}px`,
            transform: `translateY(${$.value.rulerWidth}px)`
          }
        }
      }, z = { left: { x: {}, y: {} }, right: { x: {}, y: {} } };
      return ct.comparison === "Facing Up" && (z = Ot), (ct.comparison === "Back-to-Back" || ct.comparison === "Back") && (z = pt), ct.comparison === "Facing In" && (z = Bt), z[ct.position][ct.axis];
    }), ge = () => {
      let Ot = [], pt = 0;
      for (let Bt = 0; Bt <= $.value.subUnitExponent; Bt++) {
        let z = Math.floor(
          (ct.axis === "x" ? ct.xWidth : ct.yHeight) * Math.pow($.value.subUnitBase, Bt)
        ), Et = $.value.ticksPerUnit / Math.pow($.value.subUnitBase, Bt);
        for (let nt = 0; nt <= z; nt++) {
          pt = Et * nt;
          let _t = ct.xHeight * $.value.pixelsPerInch * Math.pow($.value.levelToLevelMultiplier, Bt), ot = ct.yWidth * $.value.pixelsPerInch * Math.pow($.value.levelToLevelMultiplier, Bt), re = $.value.pixelsPerInch / Math.pow($.value.subUnitBase, Bt), At = nt === z, Rt = re * nt, kt = Rt, I = 0, zt = _t;
          if (ct.axis === "y" && (Rt = ct.position === "left" ? 0 : ct.yWidth * $.value.pixelsPerInch + $.value.spaceAddend, kt = ct.position === "left" ? ot : Rt - ot, I = re * nt, zt = I), ["Facing In"].includes(ct.comparison) && (ct.axis === "y" && (Rt = ct.position === "left" ? ct.yWidth * $.value.pixelsPerInch + $.value.spaceAddend : 0, kt = ct.position === "left" ? Rt - ot : ot, I = re * nt, zt = I), ct.axis === "x" && (Rt = re * nt, kt = Rt, I = ct.yWidth * $.value.pixelsPerInch + $.value.spaceAddend, zt = I - _t)), Ot[pt] === void 0) {
            let Te = new Oe.Point(Rt, I), Zt = new Oe.Point(kt, zt), ke = new Oe.Path.Line(Te, Zt);
            ke.strokeColor = "black", ke.strokeWidth = "1", Ot[pt] = !0, Bt === 0 && (ct.axis === "x" && Gt(Rt, zt, At, nt, z), ct.axis === "y" && jt(kt, I, nt, z));
          }
        }
      }
      Oe.view.draw();
    }, jt = (Ot, pt, Bt, z) => {
      let Et = ct.position === "left" ? -5 : -2, nt = 1;
      Bt === 0 ? nt = 15 : nt = -5;
      let _t = new Oe.PointText(
        new Oe.Point(Ot + Et, pt + nt)
      );
      _t.justification = "left", _t.fillColor = "black", _t.content = Bt, ["Facing Up", "Back-to-Back", "Back"].includes(ct.comparison) && (_t.content = Math.abs(Math.floor(Bt - z))), _t.style = {
        fontFamily: "monospace",
        fontSize: 14
      };
    }, Gt = (Ot, pt, Bt, z, Et) => {
      let nt = 4, _t = 6;
      Bt && (nt = -1 * nt);
      let ot = new Oe.PointText(
        new Oe.Point(Ot + nt, pt + _t)
      );
      ot.justification = "left", Bt && (ot.justification = "right"), ot.fillColor = "black", ot.content = ct.position === "left" ? z : Math.abs(Math.floor(z - Et)), ["Facing Up", "Back-to-Back", "Back"].includes(ct.comparison) && (ot.content = ct.position === "left" ? Math.abs(Math.floor(z - Et)) : z), ot.style = {
        fontFamily: "monospace",
        fontSize: 14
      };
    }, be = () => {
      it.value.width = Math.round(ct.xWidth * $.value.pixelsPerInch), it.value.height = Math.round(
        ct.xHeight * $.value.pixelsPerInch + $.value.spaceAddend
      ), ct.axis === "y" && (it.value.width = Math.round(
        ct.yWidth * $.value.pixelsPerInch + $.value.spaceAddend
      ), it.value.height = Math.round(
        ct.yHeight * $.value.pixelsPerInch
      ));
    };
    return Xi(() => {
    }), Zi(
      () => ct.imageLoaded,
      (Ot) => {
        Ot && (Oe.setup(it.value), be(), ge());
      }
    ), Zi(
      () => ct.comparison,
      () => {
        ct.imageLoaded && (Oe.setup(it.value), be(), ge());
      }
    ), (Ot, pt) => (Ki(), Yi("div", {
      style: xi(Ce(M))
    }, [
      ze("canvas", {
        ref_key: "ruler",
        ref: it,
        id: Ce(W),
        resize: ""
      }, null, 8, fr)
    ], 4));
  }
}, bn = {
  __name: "ImageCompare",
  props: {
    position: String,
    comparison: String,
    image: Object,
    maxLength: Number,
    config: Object
  },
  emits: ["imageLoaded"],
  setup(Wt, { emit: ct }) {
    const W = Wt, it = yi(null), $ = yi(!1), M = Ni({
      pixelsPerInch: W.config.pixelsPerInch || 72,
      spaceAddend: 15,
      xWidth: 0.3,
      xHeight: 0.3,
      yWidth: 0.3,
      yHeight: 0.3,
      rulerWidth: Math.round(15 + 0.3 * W.config.pixelsPerInch)
    }), ge = Je(() => ({
      width: W.image.rawLength * M.pixelsPerInch
    })), jt = () => {
      ["Facing Up"].includes(W.comparison) && (M.xWidth = Math.round(it.value.height / M.pixelsPerInch), M.yHeight = Math.round(W.maxLength)), ["Back-to-Back", "Facing In", "Back"].includes(W.comparison) && (M.xWidth = Math.round(W.maxLength), M.yHeight = Math.round(it.value.height / M.pixelsPerInch));
    }, Gt = () => {
      $.value = !0, jt(), ct("imageLoaded", it.value), be();
    }, be = () => {
      if (it.value.style.position = "absolute", ["Facing Up", "Back-to-Back", "Back"].includes(W.comparison)) {
        let pt = (it.value.width - it.value.height) / 2 - M.rulerWidth, Bt = (it.value.height - it.value.width) / 2 - M.rulerWidth;
        it.value.style.bottom = 0, it.value.style.top = "auto", W.position === "left" && (it.value.style.right = 0, it.value.style.left = "auto", W.comparison === "Facing Up" && (it.value.style.transform = `translate(${pt}px, ${Bt}px) rotate(90deg)`), (W.comparison === "Back-to-Back" || W.comparison === "Back") && (it.value.style.transform = `translate(-${M.rulerWidth}px, -${M.rulerWidth}px)`)), W.position === "right" && (it.value.style.left = 0, it.value.style.right = "auto", W.comparison === "Facing Up" && (it.value.style.transform = `translate(-${pt}px, ${Bt}px) rotate(-90deg)`), W.comparison === "Back-to-Back" && (it.value.style.transform = `translate(${M.rulerWidth}px, -${M.rulerWidth}px)`));
      }
      ["Facing In"].includes(W.comparison) && (it.value.style.top = 0, it.value.style.bottom = "auto", W.position === "left" && (it.value.style.left = 0, it.value.style.right = "auto", it.value.style.transform = `translate(${M.rulerWidth}px, ${M.rulerWidth}px)`), W.position === "right" && (it.value.style.right = 0, it.value.style.left = "auto", it.value.style.transform = `translate(-${M.rulerWidth}px, ${M.rulerWidth}px)`));
    }, Ot = (pt) => {
      ["Facing Up", "Back-to-Back"].includes(pt) && (W.position === "left" && (it.value.src = W.image.srcLeft), W.position === "right" && (it.value.src = W.image.srcRight)), pt === "Facing In" && (W.position === "left" && (it.value.src = W.image.srcRight), W.position === "right" && (it.value.src = W.image.srcLeft)), pt === "Back" && (it.value.src = W.image.srcBack);
    };
    return Xi(() => {
      Ot(W.comparison), it.value.width = ge.value.width;
    }), Zi(
      () => W.comparison,
      (pt) => {
        jt(), Ot(pt);
      }
    ), (pt, Bt) => (Ki(), Yi("div", null, [
      Oi(mn, {
        axis: "x",
        position: Wt.position,
        comparison: Wt.comparison,
        "x-width": M.xWidth,
        "x-height": M.xHeight,
        "y-width": M.yWidth,
        "y-height": M.yHeight,
        "image-loaded": $.value,
        config: W.config
      }, null, 8, ["position", "comparison", "x-width", "x-height", "y-width", "y-height", "image-loaded", "config"]),
      ze("img", {
        ref_key: "image",
        ref: it,
        id: "image",
        onLoad: Gt
      }, null, 544),
      Oi(mn, {
        axis: "y",
        position: Wt.position,
        comparison: Wt.comparison,
        "x-width": M.xWidth,
        "x-height": M.xHeight,
        "y-width": M.yWidth,
        "y-height": M.yHeight,
        "image-loaded": $.value,
        config: W.config
      }, null, 8, ["position", "comparison", "x-width", "x-height", "y-width", "y-height", "image-loaded", "config"])
    ]));
  }
}, cr = `*[data-v-b3ec667f],[data-v-b3ec667f]:before,[data-v-b3ec667f]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[data-v-b3ec667f]:before,[data-v-b3ec667f]:after{--tw-content: ""}html[data-v-b3ec667f]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body[data-v-b3ec667f]{margin:0;line-height:inherit}hr[data-v-b3ec667f]{height:0;color:inherit;border-top-width:1px}abbr[data-v-b3ec667f]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-b3ec667f],h2[data-v-b3ec667f],h3[data-v-b3ec667f],h4[data-v-b3ec667f],h5[data-v-b3ec667f],h6[data-v-b3ec667f]{font-size:inherit;font-weight:inherit}a[data-v-b3ec667f]{color:inherit;text-decoration:inherit}b[data-v-b3ec667f],strong[data-v-b3ec667f]{font-weight:bolder}code[data-v-b3ec667f],kbd[data-v-b3ec667f],samp[data-v-b3ec667f],pre[data-v-b3ec667f]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small[data-v-b3ec667f]{font-size:80%}sub[data-v-b3ec667f],sup[data-v-b3ec667f]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-b3ec667f]{bottom:-.25em}sup[data-v-b3ec667f]{top:-.5em}table[data-v-b3ec667f]{text-indent:0;border-color:inherit;border-collapse:collapse}button[data-v-b3ec667f],input[data-v-b3ec667f],optgroup[data-v-b3ec667f],select[data-v-b3ec667f],textarea[data-v-b3ec667f]{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button[data-v-b3ec667f],select[data-v-b3ec667f]{text-transform:none}button[data-v-b3ec667f],[type=button][data-v-b3ec667f],[type=reset][data-v-b3ec667f],[type=submit][data-v-b3ec667f]{-webkit-appearance:button;background-color:transparent;background-image:none}[data-v-b3ec667f]:-moz-focusring{outline:auto}[data-v-b3ec667f]:-moz-ui-invalid{box-shadow:none}progress[data-v-b3ec667f]{vertical-align:baseline}[data-v-b3ec667f]::-webkit-inner-spin-button,[data-v-b3ec667f]::-webkit-outer-spin-button{height:auto}[type=search][data-v-b3ec667f]{-webkit-appearance:textfield;outline-offset:-2px}[data-v-b3ec667f]::-webkit-search-decoration{-webkit-appearance:none}[data-v-b3ec667f]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[data-v-b3ec667f]{display:list-item}blockquote[data-v-b3ec667f],dl[data-v-b3ec667f],dd[data-v-b3ec667f],h1[data-v-b3ec667f],h2[data-v-b3ec667f],h3[data-v-b3ec667f],h4[data-v-b3ec667f],h5[data-v-b3ec667f],h6[data-v-b3ec667f],hr[data-v-b3ec667f],figure[data-v-b3ec667f],p[data-v-b3ec667f],pre[data-v-b3ec667f]{margin:0}fieldset[data-v-b3ec667f]{margin:0;padding:0}legend[data-v-b3ec667f]{padding:0}ol[data-v-b3ec667f],ul[data-v-b3ec667f],menu[data-v-b3ec667f]{list-style:none;margin:0;padding:0}textarea[data-v-b3ec667f]{resize:vertical}input[data-v-b3ec667f]::-moz-placeholder,textarea[data-v-b3ec667f]::-moz-placeholder{opacity:1;color:#9ca3af}input[data-v-b3ec667f]::placeholder,textarea[data-v-b3ec667f]::placeholder{opacity:1;color:#9ca3af}button[data-v-b3ec667f],[role=button][data-v-b3ec667f]{cursor:pointer}[data-v-b3ec667f]:disabled{cursor:default}img[data-v-b3ec667f],svg[data-v-b3ec667f],video[data-v-b3ec667f],canvas[data-v-b3ec667f],audio[data-v-b3ec667f],iframe[data-v-b3ec667f],embed[data-v-b3ec667f],object[data-v-b3ec667f]{display:block;vertical-align:middle}img[data-v-b3ec667f],video[data-v-b3ec667f]{max-width:100%;height:auto}*[data-v-b3ec667f],[data-v-b3ec667f]:before,[data-v-b3ec667f]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[data-v-b3ec667f]::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[data-v-b3ec667f]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.absolute[data-v-b3ec667f]{position:absolute}.relative[data-v-b3ec667f]{position:relative}.flex[data-v-b3ec667f]{display:flex}.inline-flex[data-v-b3ec667f]{display:inline-flex}.w-full[data-v-b3ec667f]{width:100%}.transform[data-v-b3ec667f]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize[data-v-b3ec667f]{resize:both}.flex-col[data-v-b3ec667f]{flex-direction:column}.items-center[data-v-b3ec667f]{align-items:center}.overflow-y-hidden[data-v-b3ec667f]{overflow-y:hidden}.overflow-x-scroll[data-v-b3ec667f]{overflow-x:scroll}.border[data-v-b3ec667f]{border-width:1px}.border-gray-200[data-v-b3ec667f]{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.bg-white[data-v-b3ec667f]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.py-1[data-v-b3ec667f]{padding-top:.25rem;padding-bottom:.25rem}.px-4[data-v-b3ec667f]{padding-left:1rem;padding-right:1rem}.font-sans[data-v-b3ec667f]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-sm[data-v-b3ec667f]{font-size:.875rem;line-height:1.25rem}.text-red-600[data-v-b3ec667f]{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.hover\\:bg-red-600[data-v-b3ec667f]:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:text-white[data-v-b3ec667f]:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}
`, dr = (Wt, ct) => {
  const W = Wt.__vccOpts || Wt;
  for (const [it, $] of ct)
    W[it] = $;
  return W;
}, pr = { class: "flex flex-col items-center justify-content-center" }, gr = { class: "inline-flex" }, _r = { style: { display: "flex", "align-items": "center", "justify-content": "center" } }, vr = {
  __name: "SizeComparison.ce",
  props: {
    leftImageLeftUrl: String,
    leftImageRightUrl: String,
    leftImageLength: String,
    rightImageLeftUrl: String,
    rightImageRightUrl: String,
    rightImageLength: String,
    baseContainerClass: String,
    buttonClass: String
  },
  setup(Wt) {
    const ct = Wt, W = yi("Facing In"), it = Ni({
      pixelsPerInch: 52,
      spaceAddend: 15,
      spacing: 0.3
    }), $ = Ni({
      srcLeft: ct.leftImageLeftUrl,
      srcRight: ct.leftImageRightUrl,
      srcBack: null,
      rawLength: parseInt(ct.leftImageLength),
      width: 0,
      height: 0
    }), M = Ni({
      srcLeft: ct.rightImageLeftUrl,
      srcRight: ct.rightImageRightUrl,
      srcBack: null,
      rawLength: parseInt(ct.rightImageLength),
      width: 0,
      height: 0
    }), ge = Je(() => {
      let z = (Math.floor(Gt.value.maxHeight) + 1) * it.pixelsPerInch + 100;
      return W.value === "Facing Up" && (z = Math.ceil(Gt.value.maxImageHeight) + (it.spacing * it.pixelsPerInch + it.spaceAddend) + 100), z * 2;
    }), jt = Je(() => W.value === "Facing Up" ? (Math.floor(Gt.value.maxHeight) + 1) * it.pixelsPerInch + 150 : Gt.value.maxImageHeight + 150), Gt = Je(() => {
      const z = $.rawLength > M.rawLength ? $.rawLength : M.rawLength;
      let Et = $.height > M.height ? $.height : M.height;
      $.width > M.width ? $.width : M.width;
      let nt = z + 1, _t = Math.ceil(Et) + (it.spacing * it.pixelsPerInch + it.spaceAddend) + 100 + "px", ot = (Math.floor(z) + 1) * it.pixelsPerInch + 100 + "px";
      return W.value === "Facing Up" && (_t = (Math.floor(z) + 1) * it.pixelsPerInch + 100 + "px", ot = Math.ceil(Et) + (it.spacing * it.pixelsPerInch + it.spaceAddend) + 100 + "px"), {
        pixelsPerInch: it.pixelsPerInch,
        spaceAddend: it.spaceAddend,
        maxHeight: z,
        containerHeight: _t,
        containerWidth: ot,
        maxLength: nt,
        maxImageHeight: Et
      };
    }), be = ({ width: z, height: Et }) => {
      $.width = z, $.height = Et;
    }, Ot = ({ width: z, height: Et }) => {
      M.width = z, M.height = Et;
    };
    let pt = yi(window.innerWidth);
    const Bt = () => pt.value = window.innerWidth;
    return Xi(() => {
      console.log(ct), window.addEventListener("resize", Bt);
    }), nr(() => {
      window.removeEventListener("resize", Bt);
    }), (z, Et) => (Ki(), Yi("div", pr, [
      ze("div", gr, [
        ze("button", {
          onClick: Et[0] || (Et[0] = (nt) => W.value = "Facing Up"),
          class: "font-sans text-sm bg-white hover:bg-red-600 hover:text-white border-gray-200 border text-red-600 py-1 px-4"
        }, " Facing Up "),
        ze("button", {
          onClick: Et[1] || (Et[1] = (nt) => W.value = "Back-to-Back"),
          class: "font-sans text-sm bg-white hover:bg-red-600 hover:text-white border-gray-200 border text-red-600 py-1 px-4"
        }, " Back-to-Back "),
        ze("button", {
          onClick: Et[2] || (Et[2] = (nt) => W.value = "Facing In"),
          class: "font-sans text-sm bg-white hover:bg-red-600 hover:text-white border-gray-200 border text-red-600 py-1 px-4"
        }, " Facing In ")
      ]),
      ze("div", {
        class: rr(["overflow-y-hidden relative", {
          "w-full overflow-x-scroll": Ce(ge) > Ce(pt)
        }]),
        style: xi({
          height: Ce(jt) + "px"
        })
      }, [
        ze("div", {
          style: xi({
            width: Ce(ge) + "px"
          })
        }, [
          ze("div", _r, [
            Oi(bn, {
              style: xi({
                height: Ce(Gt).containerHeight,
                position: "relative",
                width: Ce(Gt).containerWidth
              }),
              position: "left",
              comparison: W.value,
              image: $,
              maxLength: Ce(Gt).maxLength,
              config: it,
              onImageLoaded: be
            }, null, 8, ["style", "comparison", "image", "maxLength", "config"]),
            Oi(bn, {
              style: xi({
                height: Ce(Gt).containerHeight,
                position: "relative",
                width: Ce(Gt).containerWidth
              }),
              position: "right",
              comparison: W.value,
              image: M,
              maxLength: Ce(Gt).maxLength,
              config: it,
              onImageLoaded: Ot
            }, null, 8, ["style", "comparison", "image", "maxLength", "config"])
          ])
        ], 4)
      ], 6)
    ]));
  }
}, mr = /* @__PURE__ */ dr(vr, [["styles", [cr]], ["__scopeId", "data-v-b3ec667f"]]);
customElements.define("gc-size-comparison", sr(mr));
