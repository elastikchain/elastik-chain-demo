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

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.ModifyScorecard = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({scores: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    scores: damlTypes.List(exports.CriteriaPoint).encode(__typed__.scores),
  };
}
,
};



exports.Scorecard = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:Scorecard',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, name: damlTypes.Text.decoder, submissionId: damlTypes.Text.decoder, judge: damlTypes.Party.decoder, scoretable: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    name: damlTypes.Text.encode(__typed__.name),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    judge: damlTypes.Party.encode(__typed__.judge),
    scoretable: damlTypes.List(exports.CriteriaPoint).encode(__typed__.scoretable),
  };
}
,
  Archive: {
    template: function () { return exports.Scorecard; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ModifyScorecard: {
    template: function () { return exports.Scorecard; },
    choiceName: 'ModifyScorecard',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ModifyScorecard.decoder; }),
    argumentEncode: function (__typed__) { return exports.ModifyScorecard.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Scorecard).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Scorecard).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Scorecard);



exports.ClosedParticipantProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedParticipantProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, participantProfile: exports.ProfileData.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    operator: damlTypes.Party.encode(__typed__.operator),
    participantProfile: exports.ProfileData.encode(__typed__.participantProfile),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedParticipantProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedParticipantProfile);



exports.ClosedJudgeProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedJudgeProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, judgeProfile: exports.ProfileData.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    operator: damlTypes.Party.encode(__typed__.operator),
    judgeProfile: exports.ProfileData.encode(__typed__.judgeProfile),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedJudgeProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedJudgeProfile);



exports.ClosedClientProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedClientProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, clientProfile: exports.ProfileData.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    clientProfile: exports.ProfileData.encode(__typed__.clientProfile),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedClientProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedClientProfile);



exports.ClosedChallenge = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedChallenge',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, client: damlTypes.Party.decoder, description: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    client: damlTypes.Party.encode(__typed__.client),
    description: damlTypes.Text.encode(__typed__.description),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedChallenge; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedChallenge);



exports.ClosedClientProject = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedClientProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(exports.ChallengeData).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    location: damlTypes.Text.encode(__typed__.location),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    challenges: damlTypes.List(exports.ChallengeData).encode(__typed__.challenges),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    projects: damlTypes.List(damlTypes.Text).encode(__typed__.projects),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedClientProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedClientProject);



exports.ClosedParticipantSubmission = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClosedParticipantSubmission',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, operator: damlTypes.Party.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    client: damlTypes.Party.encode(__typed__.client),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    operator: damlTypes.Party.encode(__typed__.operator),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
  Archive: {
    template: function () { return exports.ClosedParticipantSubmission; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClosedParticipantSubmission);



exports.Criteria = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:Criteria',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, design: damlTypes.Numeric(10).decoder, idea: damlTypes.Numeric(10).decoder, code: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    design: damlTypes.Numeric(10).encode(__typed__.design),
    idea: damlTypes.Numeric(10).encode(__typed__.idea),
    code: damlTypes.Numeric(10).encode(__typed__.code),
  };
}
,
  Archive: {
    template: function () { return exports.Criteria; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Criteria);



exports.ParticipantProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ParticipantProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, participantProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    participantProfile: exports.ProfileData.encode(__typed__.participantProfile),
  };
}
,
  Archive: {
    template: function () { return exports.ParticipantProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantProfile);



exports.JudgeProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:JudgeProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, judgeProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    judgeProfile: exports.ProfileData.encode(__typed__.judgeProfile),
  };
}
,
  Archive: {
    template: function () { return exports.JudgeProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.JudgeProfile);



exports.RemoveClientProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
};



exports.ClientProfile = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClientProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, clientProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    clientProfile: exports.ProfileData.encode(__typed__.clientProfile),
  };
}
,
  RemoveClientProfile: {
    template: function () { return exports.ClientProfile; },
    choiceName: 'RemoveClientProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveClientProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveClientProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClosedClientProfile).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClosedClientProfile).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClientProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientProfile);



exports.AcceptTeammateProposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.TeammateProposal = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:TeammateProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, email: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    participant: damlTypes.Party.encode(__typed__.participant),
    email: damlTypes.Text.encode(__typed__.email),
  };
}
,
  AcceptTeammateProposal: {
    template: function () { return exports.TeammateProposal; },
    choiceName: 'AcceptTeammateProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptTeammateProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptTeammateProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TeammateProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.TeammateProposal);



exports.SubmitScorecard = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({scores: damlTypes.List(exports.CriteriaPoint).decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    scores: damlTypes.List(exports.CriteriaPoint).encode(__typed__.scores),
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.AddTeammate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participantToAdd: damlTypes.Party.decoder, leaderParticipant: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participantToAdd: damlTypes.Party.encode(__typed__.participantToAdd),
    leaderParticipant: damlTypes.Party.encode(__typed__.leaderParticipant),
  };
}
,
};



exports.RemoveSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
};



exports.ProposeTeammate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({email: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    email: damlTypes.Text.encode(__typed__.email),
  };
}
,
};



exports.UpdateSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, newName: damlTypes.Text.decoder, newsubmission: damlTypes.Text.decoder, newvideoLink: damlTypes.Text.decoder, newpresentation: damlTypes.Text.decoder, newSteps: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    newDesc: damlTypes.Text.encode(__typed__.newDesc),
    newName: damlTypes.Text.encode(__typed__.newName),
    newsubmission: damlTypes.Text.encode(__typed__.newsubmission),
    newvideoLink: damlTypes.Text.encode(__typed__.newvideoLink),
    newpresentation: damlTypes.Text.encode(__typed__.newpresentation),
    newSteps: damlTypes.List(damlTypes.Text).encode(__typed__.newSteps),
  };
}
,
};



exports.AddJudgToSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.ParticipantSubmission = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ParticipantSubmission',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, operator: damlTypes.Party.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, projectId: damlTypes.Text.decoder, steps: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    client: damlTypes.Party.encode(__typed__.client),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    operator: damlTypes.Party.encode(__typed__.operator),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    steps: damlTypes.List(damlTypes.Text).encode(__typed__.steps),
  };
}
,
  AddJudgToSubmission: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'AddJudgToSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudgToSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddJudgToSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
  UpdateSubmission: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'UpdateSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
  ProposeTeammate: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'ProposeTeammate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProposeTeammate.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProposeTeammate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TeammateProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TeammateProposal).encode(__typed__); },
  },
  RemoveSubmission: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'RemoveSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClosedParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClosedParticipantSubmission).encode(__typed__); },
  },
  AddTeammate: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'AddTeammate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddTeammate.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddTeammate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
  SubmitScorecard: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'SubmitScorecard',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SubmitScorecard.decoder; }),
    argumentEncode: function (__typed__) { return exports.SubmitScorecard.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Scorecard).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Scorecard).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantSubmission);



exports.AcceptSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({submissionId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
  };
}
,
};



exports.ParticipantSubmissionProposal = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ParticipantSubmissionProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    projectId: damlTypes.Text.encode(__typed__.projectId),
    participant: damlTypes.Party.encode(__typed__.participant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
  };
}
,
  AcceptSubmission: {
    template: function () { return exports.ParticipantSubmissionProposal; },
    choiceName: 'AcceptSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ParticipantSubmissionProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantSubmissionProposal);



exports.GiveAcessToUserRole = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({generalPublicParticipant: damlTypes.Party.decoder, email: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    generalPublicParticipant: damlTypes.Party.encode(__typed__.generalPublicParticipant),
    email: damlTypes.Text.encode(__typed__.email),
  };
}
,
};



exports.ProposeSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({generalPublicParticipant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    generalPublicParticipant: damlTypes.Party.encode(__typed__.generalPublicParticipant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
  };
}
,
};



exports.RequestToJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judgemail: damlTypes.Text.decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judgemail: damlTypes.Text.encode(__typed__.judgemail),
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.RemoveClientProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    comment: damlTypes.Text.encode(__typed__.comment),
  };
}
,
};



exports.AddSubmissionToList = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({submissionId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
  };
}
,
};



exports.AddJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.AddParticipant = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
  };
}
,
};



exports.ModifyChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({c1: damlTypes.List(exports.ChallengeData).decoder, }); }),
  encode: function (__typed__) {
  return {
    c1: damlTypes.List(exports.ChallengeData).encode(__typed__.c1),
  };
}
,
};



exports.AddChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
};



exports.AddCriteria = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newCriteria: exports.CriteriaPoint.decoder, }); }),
  encode: function (__typed__) {
  return {
    newCriteria: exports.CriteriaPoint.encode(__typed__.newCriteria),
  };
}
,
};



exports.AddUpdateDescription = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    newDesc: damlTypes.Text.encode(__typed__.newDesc),
  };
}
,
};



exports.AddUpdateClientProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, newCriteria: damlTypes.List(exports.CriteriaPoint).decoder, newlocation: damlTypes.Text.decoder, newstartDate: damlTypes.Time.decoder, newendDate: damlTypes.Time.decoder, newrules: damlTypes.List(damlTypes.Text).decoder, newtermsLink: damlTypes.Text.decoder, newprivacyLink: damlTypes.Text.decoder, newprizes: damlTypes.List(exports.PrizeData).decoder, newProjectvideoLink: damlTypes.Text.decoder, neweligibility: damlTypes.List(damlTypes.Text).decoder, newrequirements: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    newDesc: damlTypes.Text.encode(__typed__.newDesc),
    newCriteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.newCriteria),
    newlocation: damlTypes.Text.encode(__typed__.newlocation),
    newstartDate: damlTypes.Time.encode(__typed__.newstartDate),
    newendDate: damlTypes.Time.encode(__typed__.newendDate),
    newrules: damlTypes.List(damlTypes.Text).encode(__typed__.newrules),
    newtermsLink: damlTypes.Text.encode(__typed__.newtermsLink),
    newprivacyLink: damlTypes.Text.encode(__typed__.newprivacyLink),
    newprizes: damlTypes.List(exports.PrizeData).encode(__typed__.newprizes),
    newProjectvideoLink: damlTypes.Text.encode(__typed__.newProjectvideoLink),
    neweligibility: damlTypes.List(damlTypes.Text).encode(__typed__.neweligibility),
    newrequirements: damlTypes.List(damlTypes.Text).encode(__typed__.newrequirements),
  };
}
,
};



exports.AddParticipantToGeneralPublic = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
  };
}
,
};



exports.AddGeneralPublic = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newParticipants: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    newParticipants: damlTypes.List(damlTypes.Party).encode(__typed__.newParticipants),
  };
}
,
};



exports.ClientProject = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClientProject',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, rules: damlTypes.List(damlTypes.Text).decoder, termsLink: damlTypes.Text.decoder, privacyLink: damlTypes.Text.decoder, prizes: damlTypes.List(exports.PrizeData).decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(exports.ChallengeData).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, pictureUrl: damlTypes.Text.decoder, generalPublic: damlTypes.List(damlTypes.Party).decoder, projectvideoLink: damlTypes.Text.decoder, eligibility: damlTypes.List(damlTypes.Text).decoder, requirements: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    location: damlTypes.Text.encode(__typed__.location),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    rules: damlTypes.List(damlTypes.Text).encode(__typed__.rules),
    termsLink: damlTypes.Text.encode(__typed__.termsLink),
    privacyLink: damlTypes.Text.encode(__typed__.privacyLink),
    prizes: damlTypes.List(exports.PrizeData).encode(__typed__.prizes),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    challenges: damlTypes.List(exports.ChallengeData).encode(__typed__.challenges),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    projects: damlTypes.List(damlTypes.Text).encode(__typed__.projects),
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
    generalPublic: damlTypes.List(damlTypes.Party).encode(__typed__.generalPublic),
    projectvideoLink: damlTypes.Text.encode(__typed__.projectvideoLink),
    eligibility: damlTypes.List(damlTypes.Text).encode(__typed__.eligibility),
    requirements: damlTypes.List(damlTypes.Text).encode(__typed__.requirements),
  };
}
,
  AddGeneralPublic: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddGeneralPublic',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddGeneralPublic.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddGeneralPublic.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddParticipantToGeneralPublic: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddParticipantToGeneralPublic',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipantToGeneralPublic.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParticipantToGeneralPublic.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddUpdateClientProject: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateClientProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateClientProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddUpdateClientProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddUpdateDescription: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateDescription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateDescription.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddUpdateDescription.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddCriteria: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddCriteria',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddCriteria.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddCriteria.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddChallenge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddChallenge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddChallenge.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddChallenge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  ModifyChallenge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'ModifyChallenge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ModifyChallenge.decoder; }),
    argumentEncode: function (__typed__) { return exports.ModifyChallenge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddParticipant: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddParticipant',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipant.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParticipant.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddJudge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudge.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddJudge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddSubmissionToList: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddSubmissionToList',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddSubmissionToList.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddSubmissionToList.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  RemoveClientProject: {
    template: function () { return exports.ClientProject; },
    choiceName: 'RemoveClientProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveClientProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveClientProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClosedClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClosedClientProject).encode(__typed__); },
  },
  RequestToJudge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'RequestToJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestToJudge.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestToJudge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJudgeProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestToJudgeProject).encode(__typed__); },
  },
  ProposeSubmission: {
    template: function () { return exports.ClientProject; },
    choiceName: 'ProposeSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProposeSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProposeSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmissionProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmissionProposal).encode(__typed__); },
  },
  GiveAcessToUserRole: {
    template: function () { return exports.ClientProject; },
    choiceName: 'GiveAcessToUserRole',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GiveAcessToUserRole.decoder; }),
    argumentEncode: function (__typed__) { return exports.GiveAcessToUserRole.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.UserRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.UserRole).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClientProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientProject);



exports.AddParticipantToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestToJoinProject = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:RequestToJoinProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
  };
}
,
  AddParticipantToProject: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'AddParticipantToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipantToProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParticipantToProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.RequestToJoinProject);



exports.ApproveClientProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ClientProjectProposal = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClientProjectProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, rules: damlTypes.List(damlTypes.Text).decoder, termsLink: damlTypes.Text.decoder, privacyLink: damlTypes.Text.decoder, prizes: damlTypes.List(exports.PrizeData).decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(damlTypes.Text).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, pictureUrl: damlTypes.Text.decoder, projectvideoLink: damlTypes.Text.decoder, eligibility: damlTypes.List(damlTypes.Text).decoder, requirements: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    location: damlTypes.Text.encode(__typed__.location),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    rules: damlTypes.List(damlTypes.Text).encode(__typed__.rules),
    termsLink: damlTypes.Text.encode(__typed__.termsLink),
    privacyLink: damlTypes.Text.encode(__typed__.privacyLink),
    prizes: damlTypes.List(exports.PrizeData).encode(__typed__.prizes),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    challenges: damlTypes.List(damlTypes.Text).encode(__typed__.challenges),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    projects: damlTypes.List(damlTypes.Text).encode(__typed__.projects),
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
    projectvideoLink: damlTypes.Text.encode(__typed__.projectvideoLink),
    eligibility: damlTypes.List(damlTypes.Text).encode(__typed__.eligibility),
    requirements: damlTypes.List(damlTypes.Text).encode(__typed__.requirements),
  };
}
,
  ApproveClientProject: {
    template: function () { return exports.ClientProjectProposal; },
    choiceName: 'ApproveClientProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveClientProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveClientProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Registry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Registry).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClientProjectProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientProjectProposal);



exports.CreateProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, projectId: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, location: damlTypes.Text.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, pictureUrl: damlTypes.Text.decoder, rules: damlTypes.List(damlTypes.Text).decoder, termsLink: damlTypes.Text.decoder, privacyLink: damlTypes.Text.decoder, prizes: damlTypes.List(exports.PrizeData).decoder, projectvideoLink: damlTypes.Text.decoder, eligibility: damlTypes.List(damlTypes.Text).decoder, requirements: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    location: damlTypes.Text.encode(__typed__.location),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
    rules: damlTypes.List(damlTypes.Text).encode(__typed__.rules),
    termsLink: damlTypes.Text.encode(__typed__.termsLink),
    privacyLink: damlTypes.Text.encode(__typed__.privacyLink),
    prizes: damlTypes.List(exports.PrizeData).encode(__typed__.prizes),
    projectvideoLink: damlTypes.Text.encode(__typed__.projectvideoLink),
    eligibility: damlTypes.List(damlTypes.Text).encode(__typed__.eligibility),
    requirements: damlTypes.List(damlTypes.Text).encode(__typed__.requirements),
  };
}
,
};



exports.AddEditCliProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newClientProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    newClientProfile: exports.ProfileData.encode(__typed__.newClientProfile),
  };
}
,
};



exports.ClientRole = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClientRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, clientProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    clientProfile: exports.ProfileData.encode(__typed__.clientProfile),
  };
}
,
  AddEditCliProfile: {
    template: function () { return exports.ClientRole; },
    choiceName: 'AddEditCliProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditCliProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddEditCliProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientRole).encode(__typed__); },
  },
  CreateProject: {
    template: function () { return exports.ClientRole; },
    choiceName: 'CreateProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProjectProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProjectProposal).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClientRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientRole);



exports.AcceptRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ClientRequestToJoin = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:ClientRequestToJoin',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, clientProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    clientProfile: exports.ProfileData.encode(__typed__.clientProfile),
  };
}
,
  AcceptRequest: {
    template: function () { return exports.ClientRequestToJoin; },
    choiceName: 'AcceptRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientRole).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClientRequestToJoin; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientRequestToJoin);



exports.AddJudgeToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestToJudgeProject = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:RequestToJudgeProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
  };
}
,
  AddJudgeToProject: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'AddJudgeToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudgeToProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddJudgeToProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.RequestToJudgeProject);



exports.JudgeForProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    projectId: damlTypes.Text.encode(__typed__.projectId),
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
};



exports.AddEditJudProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newJudgeProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    newJudgeProfile: exports.ProfileData.encode(__typed__.newJudgeProfile),
  };
}
,
};



exports.JudgeRole = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:JudgeRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, judgeProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    operator: damlTypes.Party.encode(__typed__.operator),
    judgeProfile: exports.ProfileData.encode(__typed__.judgeProfile),
  };
}
,
  AddEditJudProfile: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'AddEditJudProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditJudProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddEditJudProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.JudgeRole).encode(__typed__); },
  },
  JudgeForProject: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'JudgeForProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.JudgeForProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.JudgeForProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJudgeProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestToJudgeProject).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.JudgeRole);



exports.AddObserver = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyId: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyId: damlTypes.Party.encode(__typed__.partyId),
  };
}
,
};



exports.UpdateParProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newparticipantProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    newparticipantProfile: exports.ProfileData.encode(__typed__.newparticipantProfile),
  };
}
,
};



exports.PromoteToJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PromoteToClient = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AddClientAsObserver = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
};



exports.UserRole = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:UserRole',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({user: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, participantProfile: exports.ProfileData.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    user: damlTypes.Party.encode(__typed__.user),
    operator: damlTypes.Party.encode(__typed__.operator),
    participantProfile: exports.ProfileData.encode(__typed__.participantProfile),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  AddClientAsObserver: {
    template: function () { return exports.UserRole; },
    choiceName: 'AddClientAsObserver',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddClientAsObserver.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddClientAsObserver.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.UserRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.UserRole).encode(__typed__); },
  },
  PromoteToClient: {
    template: function () { return exports.UserRole; },
    choiceName: 'PromoteToClient',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PromoteToClient.decoder; }),
    argumentEncode: function (__typed__) { return exports.PromoteToClient.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientRole).encode(__typed__); },
  },
  PromoteToJudge: {
    template: function () { return exports.UserRole; },
    choiceName: 'PromoteToJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PromoteToJudge.decoder; }),
    argumentEncode: function (__typed__) { return exports.PromoteToJudge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.JudgeRole).encode(__typed__); },
  },
  UpdateParProfile: {
    template: function () { return exports.UserRole; },
    choiceName: 'UpdateParProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateParProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateParProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.UserRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.UserRole).encode(__typed__); },
  },
  AddObserver: {
    template: function () { return exports.UserRole; },
    choiceName: 'AddObserver',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddObserver.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddObserver.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.UserRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.UserRole).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.UserRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.UserRole);



exports.AcceptUserRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.UserRoleRequest = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:UserRoleRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({user: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, participantProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    user: damlTypes.Party.encode(__typed__.user),
    operator: damlTypes.Party.encode(__typed__.operator),
    participantProfile: exports.ProfileData.encode(__typed__.participantProfile),
  };
}
,
  AcceptUserRequest: {
    template: function () { return exports.UserRoleRequest; },
    choiceName: 'AcceptUserRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptUserRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptUserRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.UserRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.UserRole).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.UserRoleRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.UserRoleRequest);



exports.CreateRegistry = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Platform = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:Platform',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  CreateRegistry: {
    template: function () { return exports.Platform; },
    choiceName: 'CreateRegistry',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateRegistry.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateRegistry.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Registry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Registry).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Platform; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Platform);



exports.AddProjectListing = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectKey: damlTypes.Text.decoder, client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    projectKey: damlTypes.Text.encode(__typed__.projectKey),
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
};



exports.AddParticipantToProjectListing = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
  };
}
,
};



exports.Registry = {
  templateId: '2f565c56f10d8163d3f34a0acb491b0e52d36908b44fd5865659dc8574aca040:Main:Registry',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectKeys: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Party)).decoder, participants: damlTypes.List(damlTypes.Party).decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    projectKeys: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Party)).encode(__typed__.projectKeys),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  AddParticipantToProjectListing: {
    template: function () { return exports.Registry; },
    choiceName: 'AddParticipantToProjectListing',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipantToProjectListing.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParticipantToProjectListing.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Registry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Registry).encode(__typed__); },
  },
  AddProjectListing: {
    template: function () { return exports.Registry; },
    choiceName: 'AddProjectListing',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddProjectListing.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddProjectListing.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Registry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Registry).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Registry; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Registry);



exports.PrizeData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, value: damlTypes.Text.decoder, currency: damlTypes.Text.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    name: damlTypes.Text.encode(__typed__.name),
    value: damlTypes.Text.encode(__typed__.value),
    currency: damlTypes.Text.encode(__typed__.currency),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
};



exports.ProfileData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({firstName: damlTypes.Text.decoder, lastName: damlTypes.Text.decoder, email: damlTypes.Text.decoder, job: damlTypes.Text.decoder, company: damlTypes.Text.decoder, about: damlTypes.Text.decoder, pictureUrl: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    firstName: damlTypes.Text.encode(__typed__.firstName),
    lastName: damlTypes.Text.encode(__typed__.lastName),
    email: damlTypes.Text.encode(__typed__.email),
    job: damlTypes.Text.encode(__typed__.job),
    company: damlTypes.Text.encode(__typed__.company),
    about: damlTypes.Text.encode(__typed__.about),
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
  };
}
,
};



exports.CriteriaPoint = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, point: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    name: damlTypes.Text.encode(__typed__.name),
    point: damlTypes.Numeric(10).encode(__typed__.point),
  };
}
,
};



exports.ParticipantSubmissionData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
  };
}
,
};



exports.ChallengeData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
};



exports.ClientProjectData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(damlTypes.Text).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, public: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    location: damlTypes.Text.encode(__typed__.location),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    challenges: damlTypes.List(damlTypes.Text).encode(__typed__.challenges),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    projects: damlTypes.List(damlTypes.Text).encode(__typed__.projects),
    public: damlTypes.Party.encode(__typed__.public),
  };
}
,
};

