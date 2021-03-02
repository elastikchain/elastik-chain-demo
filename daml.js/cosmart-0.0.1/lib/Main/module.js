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


exports.JudgeProfile = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:JudgeProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
  Archive: {
    template: function () { return exports.JudgeProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.JudgeProfile);



exports.ParticipantProfile = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ParticipantProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
  Archive: {
    template: function () { return exports.ParticipantProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.ParticipantProfile);



exports.ClientProfile = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ClientProfile',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
  Archive: {
    template: function () { return exports.ClientProfile; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.ClientProfile);



exports.AddTeammate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.AddUpdateSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, newName: damlTypes.Text.decoder, newChallengeName: damlTypes.Text.decoder, }); }),
};



exports.ParticipantSubmission = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ParticipantSubmission',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, challengeName: damlTypes.Text.decoder, participants: damlTypes.List(damlTypes.Party).decoder, }); }),
  Archive: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddUpdateSubmission: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'AddUpdateSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateSubmission.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
  },
  AddTeammate: {
    template: function () { return exports.ParticipantSubmission; },
    choiceName: 'AddTeammate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddTeammate.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantSubmission).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ParticipantSubmission);



exports.AddEditSubmission = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, subName: damlTypes.Text.decoder, subDesc: damlTypes.Text.decoder, submission: damlTypes.Text.decoder, challengeName: damlTypes.Text.decoder, }); }),
};



exports.AddJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, }); }),
};



exports.AddParticipant = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
};



exports.AddUpdateChallenge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({challenge: damlTypes.Text.decoder, }); }),
};



exports.AddUpdateCriteria = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newCriteria: damlTypes.Text.decoder, }); }),
};



exports.AddUpdateDescription = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDesc: damlTypes.Text.decoder, }); }),
};



exports.ClientProject = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ClientProject',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, name: damlTypes.Text.decoder, desc: damlTypes.Text.decoder, criteria: damlTypes.Text.decoder, challenges: damlTypes.List(damlTypes.Text).decoder, participants: damlTypes.List(damlTypes.Party).decoder, judges: damlTypes.List(damlTypes.Party).decoder, projects: damlTypes.List(exports.ParticipantSubmission).decoder, }); }),
  Archive: {
    template: function () { return exports.ClientProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddUpdateDescription: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateDescription',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateDescription.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
  AddUpdateCriteria: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateCriteria',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateCriteria.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
  AddUpdateChallenge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddUpdateChallenge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddUpdateChallenge.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
  AddParticipant: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddParticipant',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipant.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
  AddJudge: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudge.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
  AddEditSubmission: {
    template: function () { return exports.ClientProject; },
    choiceName: 'AddEditSubmission',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditSubmission.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ClientProject);



exports.CreateProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({name: damlTypes.Text.decoder, projectId: damlTypes.Text.decoder, }); }),
};



exports.AddEditCliProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
};



exports.ClientRole = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ClientRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ClientRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddEditCliProfile: {
    template: function () { return exports.ClientRole; },
    choiceName: 'AddEditCliProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditCliProfile.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProfile).decoder; }),
  },
  CreateProject: {
    template: function () { return exports.ClientRole; },
    choiceName: 'CreateProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateProject.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ClientRole);



exports.AcceptRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ClientInvitation = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ClientInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ClientInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptRequest: {
    template: function () { return exports.ClientInvitation; },
    choiceName: 'AcceptRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptRequest.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ClientInvitation);



exports.AddParticipantToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.RequestToJoinProject = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:RequestToJoinProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, }); }),
  Archive: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddParticipantToProject: {
    template: function () { return exports.RequestToJoinProject; },
    choiceName: 'AddParticipantToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParticipantToProject.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.RequestToJoinProject);



exports.RegisterForProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, client: damlTypes.Party.decoder, }); }),
};



exports.AddParProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
};



exports.ParticipantRole = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ParticipantRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddParProfile: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'AddParProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddParProfile.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantProfile).decoder; }),
  },
  RegisterForProject: {
    template: function () { return exports.ParticipantRole; },
    choiceName: 'RegisterForProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RegisterForProject.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJoinProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ParticipantRole);



exports.AcceptParticipantRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ParticipantInvitation = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:ParticipantInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ParticipantInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptParticipantRequest: {
    template: function () { return exports.ParticipantInvitation; },
    choiceName: 'AcceptParticipantRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptParticipantRequest.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ParticipantInvitation);



exports.AddJudgeToProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.RequestToJudgeProject = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:RequestToJudgeProject',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, client: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, projectId: damlTypes.Text.decoder, }); }),
  Archive: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddJudgeToProject: {
    template: function () { return exports.RequestToJudgeProject; },
    choiceName: 'AddJudgeToProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddJudgeToProject.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.RequestToJudgeProject);



exports.JudgeForProject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({projectId: damlTypes.Text.decoder, client: damlTypes.Party.decoder, }); }),
};



exports.AddEditJudProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({first: damlTypes.Text.decoder, last: damlTypes.Text.decoder, email: damlTypes.Text.decoder, }); }),
};



exports.JudgeRole = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:JudgeRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AddEditJudProfile: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'AddEditJudProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddEditJudProfile.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeProfile).decoder; }),
  },
  JudgeForProject: {
    template: function () { return exports.JudgeRole; },
    choiceName: 'JudgeForProject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.JudgeForProject.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestToJudgeProject).decoder; }),
  },
};


damlTypes.registerTemplate(exports.JudgeRole);



exports.AcceptjudgeRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.JudgeInvitation = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:JudgeInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.JudgeInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptjudgeRequest: {
    template: function () { return exports.JudgeInvitation; },
    choiceName: 'AcceptjudgeRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptjudgeRequest.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.JudgeInvitation);



exports.InviteJudge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({judge: damlTypes.Party.decoder, }); }),
};



exports.InviteParticipant = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({participant: damlTypes.Party.decoder, }); }),
};



exports.InviteClient = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, }); }),
};



exports.Platform = {
  templateId: '09145f5f6a0d4ae8b89ebf4421fd6e8c67d6b4b0d35df4e4f773847e3d5dc56b:Main:Platform',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.Platform; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  InviteClient: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteClient',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteClient.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ClientInvitation).decoder; }),
  },
  InviteParticipant: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteParticipant',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteParticipant.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ParticipantInvitation).decoder; }),
  },
  InviteJudge: {
    template: function () { return exports.Platform; },
    choiceName: 'InviteJudge',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteJudge.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.JudgeInvitation).decoder; }),
  },
};


damlTypes.registerTemplate(exports.Platform);

