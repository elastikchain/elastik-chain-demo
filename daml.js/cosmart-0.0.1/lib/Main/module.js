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


exports.Scorecard = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Scorecard',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, judge: damlTypes.Party.decoder, scoretable: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
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
};


damlTypes.registerTemplate(exports.Scorecard);



exports.ClosedParticipantProfile = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedParticipantProfile',
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedJudgeProfile',
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedClientProfile',
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



exports.ClosedClientProject = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedClientProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(damlTypes.Text).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, public: damlTypes.Party.decoder, comment: damlTypes.Text.decoder, }); }),
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedParticipantSubmission',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, challengeId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, comment: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    client: damlTypes.Party.encode(__typed__.client),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judge: damlTypes.Party.encode(__typed__.judge),
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Criteria',
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantProfile',
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeProfile',
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



exports.ClientProfile = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientProfile',
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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:TeammateProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, teammate: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, email: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    teammate: damlTypes.Party.encode(__typed__.teammate),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    participant: damlTypes.Party.encode(__typed__.participant),
    email: damlTypes.Text.encode(__typed__.email),
  };
}
,
  Archive: {
    template: function () { return exports.TeammateProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptTeammateProposal: {
    template: function () { return exports.TeammateProposal; },
    choiceName: 'AcceptTeammateProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptTeammateProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptTeammateProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.TeammateProposal);



exports.SubmitScorecard = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({scores: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    scores: damlTypes.List(exports.CriteriaPoint).encode(__typed__.scores),
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



exports.AddTeammate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({p: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    p: damlTypes.Party.encode(__typed__.p),
  };
}
,
};



exports.ProposeTeammate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participantToAdd: damlTypes.Party.decoder, email: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participantToAdd: damlTypes.Party.encode(__typed__.participantToAdd),
    email: damlTypes.Text.encode(__typed__.email),
  };
}
,
};



exports.UpdateSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, newName: damlTypes.Text.decoder, newchallengeId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    newDesc: damlTypes.Text.encode(__typed__.newDesc),
    newName: damlTypes.Text.encode(__typed__.newName),
    newchallengeId: damlTypes.Text.encode(__typed__.newchallengeId),
  };
}
,
};



exports.ParticipantSubmission = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantSubmission',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, submissionId: damlTypes.Text.decoder, challengeId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, judge: damlTypes.Party.decoder, judges: damlTypes.List(damlTypes.Party).decoder, operator: damlTypes.Party.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    client: damlTypes.Party.encode(__typed__.client),
    submissionId: damlTypes.Text.encode(__typed__.submissionId),
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judge: damlTypes.Party.encode(__typed__.judge),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    operator: damlTypes.Party.encode(__typed__.operator),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
  };
}
,
  Archive: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
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
  AddTeammate: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'AddTeammate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddTeammate.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddTeammate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
  RemoveSubmission: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'RemoveSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClosedParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClosedParticipantSubmission).encode(__typed__); },
  },
  SubmitScorecard: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'SubmitScorecard',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SubmitScorecard.decoder; }),
    argumentEncode: function (__typed__) { return exports.SubmitScorecard.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Scorecard).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Scorecard).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantSubmission);



exports.ModifieChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name1: damlTypes.Text.decoder, prize1: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    name1: damlTypes.Text.encode(__typed__.name1),
    prize1: damlTypes.Text.encode(__typed__.prize1),
  };
}
,
};



exports.Challenge = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Challenge',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, client: damlTypes.Party.decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, participant: damlTypes.Party.decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    client: damlTypes.Party.encode(__typed__.client),
    participants: damlTypes.List(damlTypes.Party).encode(__typed__.participants),
    judges: damlTypes.List(damlTypes.Party).encode(__typed__.judges),
    participant: damlTypes.Party.encode(__typed__.participant),
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
  Archive: {
    template: function () { return exports.Challenge; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ModifieChallenge: {
    template: function () { return exports.Challenge; },
    choiceName: 'ModifieChallenge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ModifieChallenge.decoder; }),
    argumentEncode: function (__typed__) { return exports.ModifieChallenge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Challenge).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Challenge).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Challenge);



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
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantSubmissionProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, challengeId: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, judge: damlTypes.Party.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, }); }),
  encode: function (__typed__) {
  return {
    projectId: damlTypes.Text.encode(__typed__.projectId),
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    participant: damlTypes.Party.encode(__typed__.participant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
    judge: damlTypes.Party.encode(__typed__.judge),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
  };
}
,
  Archive: {
    template: function () { return exports.ParticipantSubmissionProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptSubmission: {
    template: function () { return exports.ParticipantSubmissionProposal; },
    choiceName: 'AcceptSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmission).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantSubmissionProposal);



exports.ProposeSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, videoLink: damlTypes.Text.decoder, presentation: damlTypes.Text.decoder, challengeId: damlTypes.Text.decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
    videoLink: damlTypes.Text.encode(__typed__.videoLink),
    presentation: damlTypes.Text.encode(__typed__.presentation),
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
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



exports.RemoveChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
  };
}
,
};



exports.AddChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, description: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    description: damlTypes.Text.encode(__typed__.description),
    participant: damlTypes.Party.encode(__typed__.participant),
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.AddUpdateCriteria = {
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



exports.ClientProject = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientProject',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, location: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, challenges: damlTypes.List(damlTypes.Text).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(damlTypes.Text).decoder, public: damlTypes.Party.decoder, pictureUrl: damlTypes.Text.decoder, }); }),
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
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
  };
}
,
  Archive: {
    template: function () { return exports.ClientProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddUpdateDescription: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateDescription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateDescription.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddUpdateDescription.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
  AddUpdateCriteria: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateCriteria',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateCriteria.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddUpdateCriteria.encode(__typed__); },
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
  RemoveChallenge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'RemoveChallenge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveChallenge.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveChallenge.encode(__typed__); },
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
  ProposeSubmission: {
    template: function () { return exports.ClientProject; },
    choiceName: 'ProposeSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProposeSubmission.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProposeSubmission.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmissionProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantSubmissionProposal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientProject);



exports.CreateProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, projectId: damlTypes.Text.decoder, startDate: damlTypes.Time.decoder, endDate: damlTypes.Time.decoder, location: damlTypes.Text.decoder, criteria: damlTypes.List(exports.CriteriaPoint).decoder, public: damlTypes.Party.decoder, pictureUrl: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    name: damlTypes.Text.encode(__typed__.name),
    desc: damlTypes.Text.encode(__typed__.desc),
    projectId: damlTypes.Text.encode(__typed__.projectId),
    startDate: damlTypes.Time.encode(__typed__.startDate),
    endDate: damlTypes.Time.encode(__typed__.endDate),
    location: damlTypes.Text.encode(__typed__.location),
    criteria: damlTypes.List(exports.CriteriaPoint).encode(__typed__.criteria),
    public: damlTypes.Party.encode(__typed__.public),
    pictureUrl: damlTypes.Text.encode(__typed__.pictureUrl),
  };
}
,
};



exports.AddEditCliProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({clientProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    clientProfile: exports.ProfileData.encode(__typed__.clientProfile),
  };
}
,
};



exports.ClientRole = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.ClientRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddEditCliProfile: {
    template: function () { return exports.ClientRole; },
    choiceName: 'AddEditCliProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditCliProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddEditCliProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProfile).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProfile).encode(__typed__); },
  },
  CreateProject: {
    template: function () { return exports.ClientRole; },
    choiceName: 'CreateProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
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



exports.ClientInvitation = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.ClientInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptRequest: {
    template: function () { return exports.ClientInvitation; },
    choiceName: 'AcceptRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientRole).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClientInvitation);



exports.AddParticipantToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestToJoinProject = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:RequestToJoinProject',
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
  Archive: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddParticipantToProject: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'AddParticipantToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipantToProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParticipantToProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.RequestToJoinProject);



exports.RegisterForProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    projectId: damlTypes.Text.encode(__typed__.projectId),
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
};



exports.AddParProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participantProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    participantProfile: exports.ProfileData.encode(__typed__.participantProfile),
  };
}
,
};



exports.ParticipantRole = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddParProfile: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'AddParProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddParProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantProfile).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantProfile).encode(__typed__); },
  },
  RegisterForProject: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'RegisterForProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RegisterForProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.RegisterForProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJoinProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestToJoinProject).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantRole);



exports.AcceptParticipantRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ParticipantInvitation = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.ParticipantInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptParticipantRequest: {
    template: function () { return exports.ParticipantInvitation; },
    choiceName: 'AcceptParticipantRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptParticipantRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptParticipantRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantRole).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ParticipantInvitation);



exports.AddJudgeToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestToJudgeProject = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:RequestToJudgeProject',
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
  Archive: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddJudgeToProject: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'AddJudgeToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudgeToProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddJudgeToProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientProject).encode(__typed__); },
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judgeProfile: exports.ProfileData.decoder, }); }),
  encode: function (__typed__) {
  return {
    judgeProfile: exports.ProfileData.encode(__typed__.judgeProfile),
  };
}
,
};



exports.JudgeRole = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AddEditJudProfile: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'AddEditJudProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditJudProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddEditJudProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeProfile).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.JudgeProfile).encode(__typed__); },
  },
  JudgeForProject: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'JudgeForProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.JudgeForProject.decoder; }),
    argumentEncode: function (__typed__) { return exports.JudgeForProject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJudgeProject).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestToJudgeProject).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.JudgeRole);



exports.AcceptjudgeRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.JudgeInvitation = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.JudgeInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptjudgeRequest: {
    template: function () { return exports.JudgeInvitation; },
    choiceName: 'AcceptjudgeRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptjudgeRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptjudgeRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeRole).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.JudgeRole).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.JudgeInvitation);



exports.InviteJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    judge: damlTypes.Party.encode(__typed__.judge),
  };
}
,
};



exports.InviteParticipant = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
  };
}
,
};



exports.InviteClient = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
};



exports.Platform = {
  templateId: '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Platform',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  Archive: {
    template: function () { return exports.Platform; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  InviteClient: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteClient',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteClient.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteClient.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ClientInvitation).encode(__typed__); },
  },
  InviteParticipant: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteParticipant',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteParticipant.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteParticipant.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ParticipantInvitation).encode(__typed__); },
  },
  InviteJudge: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteJudge.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteJudge.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.JudgeInvitation).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Platform);



exports.ProfileData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({firstName: damlTypes.Text.decoder, lastName: damlTypes.Text.decoder, profileEmail: damlTypes.Text.decoder, job: damlTypes.Text.decoder, company: damlTypes.Text.decoder, about: damlTypes.Text.decoder, pictureUrl: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    firstName: damlTypes.Text.encode(__typed__.firstName),
    lastName: damlTypes.Text.encode(__typed__.lastName),
    profileEmail: damlTypes.Text.encode(__typed__.profileEmail),
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, challengeId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    participant: damlTypes.Party.encode(__typed__.participant),
    subName: damlTypes.Text.encode(__typed__.subName),
    subDesc: damlTypes.Text.encode(__typed__.subDesc),
    submission: damlTypes.Text.encode(__typed__.submission),
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
  };
}
,
};



exports.ChallengeData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challengeId: damlTypes.Text.decoder, nameOf: damlTypes.Text.decoder, prize: damlTypes.Text.decoder, participant: damlTypes.Party.decoder, judge: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    challengeId: damlTypes.Text.encode(__typed__.challengeId),
    nameOf: damlTypes.Text.encode(__typed__.nameOf),
    prize: damlTypes.Text.encode(__typed__.prize),
    participant: damlTypes.Party.encode(__typed__.participant),
    judge: damlTypes.Party.encode(__typed__.judge),
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

