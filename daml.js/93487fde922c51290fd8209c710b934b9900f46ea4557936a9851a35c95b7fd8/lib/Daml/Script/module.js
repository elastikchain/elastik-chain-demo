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


exports.LedgerValue = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.SubmitFailure = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({status: damlTypes.Int.decoder, description: damlTypes.Text.decoder, }); }),
};



exports.PartyDetails = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({party: damlTypes.Party.decoder, displayName: damlTypes.Optional(damlTypes.Text).decoder, isLocal: damlTypes.Bool.decoder, }); }),
};



exports.ParticipantName = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participantName: damlTypes.Text.decoder, }); }),
};



exports.PartyIdHint = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyIdHint: damlTypes.Text.decoder, }); }),
};

