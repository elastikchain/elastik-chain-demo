"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');


exports.Either = function (a, b) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Left'), value: a.decoder, }), jtv.object({tag: jtv.constant('Right'), value: b.decoder, })); }),
}); };



exports.Tuple2 = function (t1, t2) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, }); }),
}); };



exports.Tuple3 = function (t1, t2, t3) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, }); }),
}); };



exports.Tuple4 = function (t1, t2, t3, t4) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, }); }),
}); };



exports.Tuple5 = function (t1, t2, t3, t4, t5) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, }); }),
}); };



exports.Tuple6 = function (t1, t2, t3, t4, t5, t6) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, }); }),
}); };



exports.Tuple7 = function (t1, t2, t3, t4, t5, t6, t7) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, }); }),
}); };



exports.Tuple8 = function (t1, t2, t3, t4, t5, t6, t7, t8) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, }); }),
}); };



exports.Tuple9 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, }); }),
}); };



exports.Tuple10 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, }); }),
}); };



exports.Tuple11 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, }); }),
}); };



exports.Tuple12 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, }); }),
}); };



exports.Tuple13 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, }); }),
}); };



exports.Tuple14 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, }); }),
}); };



exports.Tuple15 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, }); }),
}); };



exports.Tuple16 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, _16: t16.decoder, }); }),
}); };



exports.Tuple17 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, _16: t16.decoder, _17: t17.decoder, }); }),
}); };



exports.Tuple18 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, _16: t16.decoder, _17: t17.decoder, _18: t18.decoder, }); }),
}); };



exports.Tuple19 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, _16: t16.decoder, _17: t17.decoder, _18: t18.decoder, _19: t19.decoder, }); }),
}); };



exports.Tuple20 = function (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({_1: t1.decoder, _2: t2.decoder, _3: t3.decoder, _4: t4.decoder, _5: t5.decoder, _6: t6.decoder, _7: t7.decoder, _8: t8.decoder, _9: t9.decoder, _10: t10.decoder, _11: t11.decoder, _12: t12.decoder, _13: t13.decoder, _14: t14.decoder, _15: t15.decoder, _16: t16.decoder, _17: t17.decoder, _18: t18.decoder, _19: t19.decoder, _20: t20.decoder, }); }),
}); };

