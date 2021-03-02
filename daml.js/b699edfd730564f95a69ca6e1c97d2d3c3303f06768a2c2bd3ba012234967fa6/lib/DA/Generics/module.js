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


exports.DecidedStrictness = {
  DecidedLazy: 'DecidedLazy',
  DecidedStrict: 'DecidedStrict',
  DecidedUnpack: 'DecidedUnpack',
  keys: ['DecidedLazy','DecidedStrict','DecidedUnpack',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.DecidedStrictness.DecidedLazy), jtv.constant(exports.DecidedStrictness.DecidedStrict), jtv.constant(exports.DecidedStrictness.DecidedUnpack)); }),
};



exports.SourceStrictness = {
  NoSourceStrictness: 'NoSourceStrictness',
  SourceLazy: 'SourceLazy',
  SourceStrict: 'SourceStrict',
  keys: ['NoSourceStrictness','SourceLazy','SourceStrict',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.SourceStrictness.NoSourceStrictness), jtv.constant(exports.SourceStrictness.SourceLazy), jtv.constant(exports.SourceStrictness.SourceStrict)); }),
};



exports.SourceUnpackedness = {
  NoSourceUnpackedness: 'NoSourceUnpackedness',
  SourceNoUnpack: 'SourceNoUnpack',
  SourceUnpack: 'SourceUnpack',
  keys: ['NoSourceUnpackedness','SourceNoUnpack','SourceUnpack',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.SourceUnpackedness.NoSourceUnpackedness), jtv.constant(exports.SourceUnpackedness.SourceNoUnpack), jtv.constant(exports.SourceUnpackedness.SourceUnpack)); }),
};



exports.Associativity = {
  LeftAssociative: 'LeftAssociative',
  RightAssociative: 'RightAssociative',
  NotAssociative: 'NotAssociative',
  keys: ['LeftAssociative','RightAssociative','NotAssociative',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.Associativity.LeftAssociative), jtv.constant(exports.Associativity.RightAssociative), jtv.constant(exports.Associativity.NotAssociative)); }),
};



exports.Infix0 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({associativity: exports.Associativity.decoder, fixity: damlTypes.Int.decoder, }); }),
};



exports.Fixity = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Prefix'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('Infix'), value: exports.Infix0.decoder, })); }),
};



exports.K1 = function (i, c, p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unK1: c.decoder, }); }),
}); };



exports.Par1 = function (p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unPar1: p.decoder, }); }),
}); };



exports.U1 = function (p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
}); };

