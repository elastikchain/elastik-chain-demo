// Generated from Main.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type JudgeProfile = {
  judge: damlTypes.Party;
  first: string;
  last: string;
  email: string;
};

export declare const JudgeProfile:
  damlTypes.Template<JudgeProfile, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:JudgeProfile'> & {
  Archive: damlTypes.Choice<JudgeProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace JudgeProfile {
  export type CreateEvent = damlLedger.CreateEvent<JudgeProfile, undefined, typeof JudgeProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeProfile, typeof JudgeProfile.templateId>
  export type Event = damlLedger.Event<JudgeProfile, undefined, typeof JudgeProfile.templateId>
}



export declare type ParticipantProfile = {
  participant: damlTypes.Party;
  first: string;
  last: string;
  email: string;
};

export declare const ParticipantProfile:
  damlTypes.Template<ParticipantProfile, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ParticipantProfile'> & {
  Archive: damlTypes.Choice<ParticipantProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ParticipantProfile {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantProfile, undefined, typeof ParticipantProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantProfile, typeof ParticipantProfile.templateId>
  export type Event = damlLedger.Event<ParticipantProfile, undefined, typeof ParticipantProfile.templateId>
}



export declare type ClientProfile = {
  client: damlTypes.Party;
  first: string;
  last: string;
  email: string;
};

export declare const ClientProfile:
  damlTypes.Template<ClientProfile, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ClientProfile'> & {
  Archive: damlTypes.Choice<ClientProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClientProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClientProfile, undefined, typeof ClientProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProfile, typeof ClientProfile.templateId>
  export type Event = damlLedger.Event<ClientProfile, undefined, typeof ClientProfile.templateId>
}



export declare type AddTeammate = {
  participantToAdd: damlTypes.Party;
};

export declare const AddTeammate:
  damlTypes.Serializable<AddTeammate> & {
  }
;


export declare type UpdateSubmission = {
  newDesc: string;
  newName: string;
};

export declare const UpdateSubmission:
  damlTypes.Serializable<UpdateSubmission> & {
  }
;


export declare type ParticipantSubmission = {
  participant: damlTypes.Party;
  client: damlTypes.Party;
  submissionId: string;
  name: string;
  desc: string;
  submission: string;
  participants: damlTypes.Party[];
};

export declare const ParticipantSubmission:
  damlTypes.Template<ParticipantSubmission, ParticipantSubmission.Key, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ParticipantSubmission'> & {
  Archive: damlTypes.Choice<ParticipantSubmission, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ParticipantSubmission.Key>;
  UpdateSubmission: damlTypes.Choice<ParticipantSubmission, UpdateSubmission, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  AddTeammate: damlTypes.Choice<ParticipantSubmission, AddTeammate, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
};

export declare namespace ParticipantSubmission {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmission, typeof ParticipantSubmission.templateId>
  export type Event = damlLedger.Event<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
}



export declare type ModifieChallenge = {
  name1: string;
  prize1: string;
};

export declare const ModifieChallenge:
  damlTypes.Serializable<ModifieChallenge> & {
  }
;


export declare type Challenge = {
  challengeId: string;
  nameOf: string;
  prize: string;
  client: damlTypes.Party;
};

export declare const Challenge:
  damlTypes.Template<Challenge, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:Challenge'> & {
  Archive: damlTypes.Choice<Challenge, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ModifieChallenge: damlTypes.Choice<Challenge, ModifieChallenge, damlTypes.ContractId<Challenge>, undefined>;
};

export declare namespace Challenge {
  export type CreateEvent = damlLedger.CreateEvent<Challenge, undefined, typeof Challenge.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Challenge, typeof Challenge.templateId>
  export type Event = damlLedger.Event<Challenge, undefined, typeof Challenge.templateId>
}



export declare type AcceptSubmission = {
  submissionId: string;
};

export declare const AcceptSubmission:
  damlTypes.Serializable<AcceptSubmission> & {
  }
;


export declare type ParticipantSubmissionProposal = {
  projectId: string;
  participant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
  client: damlTypes.Party;
};

export declare const ParticipantSubmissionProposal:
  damlTypes.Template<ParticipantSubmissionProposal, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ParticipantSubmissionProposal'> & {
  Archive: damlTypes.Choice<ParticipantSubmissionProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptSubmission: damlTypes.Choice<ParticipantSubmissionProposal, AcceptSubmission, damlTypes.ContractId<ParticipantSubmission>, undefined>;
};

export declare namespace ParticipantSubmissionProposal {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmissionProposal, typeof ParticipantSubmissionProposal.templateId>
  export type Event = damlLedger.Event<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
}



export declare type ProposeSubmission = {
  participant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
};

export declare const ProposeSubmission:
  damlTypes.Serializable<ProposeSubmission> & {
  }
;


export declare type AddSubmissionToList = {
  submissionId: string;
};

export declare const AddSubmissionToList:
  damlTypes.Serializable<AddSubmissionToList> & {
  }
;


export declare type AddJudge = {
  judge: damlTypes.Party;
};

export declare const AddJudge:
  damlTypes.Serializable<AddJudge> & {
  }
;


export declare type AddParticipant = {
  participant: damlTypes.Party;
};

export declare const AddParticipant:
  damlTypes.Serializable<AddParticipant> & {
  }
;


export declare type RemoveChallenge = {
  challengeId: string;
};

export declare const RemoveChallenge:
  damlTypes.Serializable<RemoveChallenge> & {
  }
;


export declare type AddChallenge = {
  challengeId: string;
  nameOf: string;
  prize: string;
};

export declare const AddChallenge:
  damlTypes.Serializable<AddChallenge> & {
  }
;


export declare type AddUpdateCriteria = {
  newCriteria: string;
};

export declare const AddUpdateCriteria:
  damlTypes.Serializable<AddUpdateCriteria> & {
  }
;


export declare type AddUpdateDescription = {
  newDesc: string;
};

export declare const AddUpdateDescription:
  damlTypes.Serializable<AddUpdateDescription> & {
  }
;


export declare type ClientProject = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
  name: string;
  desc: string;
  criteria: string;
  challenges: string[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
};

export declare const ClientProject:
  damlTypes.Template<ClientProject, ClientProject.Key, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ClientProject'> & {
  Archive: damlTypes.Choice<ClientProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ClientProject.Key>;
  AddUpdateDescription: damlTypes.Choice<ClientProject, AddUpdateDescription, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddUpdateCriteria: damlTypes.Choice<ClientProject, AddUpdateCriteria, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddChallenge: damlTypes.Choice<ClientProject, AddChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  RemoveChallenge: damlTypes.Choice<ClientProject, RemoveChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddParticipant: damlTypes.Choice<ClientProject, AddParticipant, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddJudge: damlTypes.Choice<ClientProject, AddJudge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddSubmissionToList: damlTypes.Choice<ClientProject, AddSubmissionToList, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  ProposeSubmission: damlTypes.Choice<ClientProject, ProposeSubmission, damlTypes.ContractId<ParticipantSubmissionProposal>, ClientProject.Key>;
};

export declare namespace ClientProject {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProject, typeof ClientProject.templateId>
  export type Event = damlLedger.Event<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
}



export declare type CreateProject = {
  name: string;
  projectId: string;
};

export declare const CreateProject:
  damlTypes.Serializable<CreateProject> & {
  }
;


export declare type AddEditCliProfile = {
  first: string;
  last: string;
  email: string;
};

export declare const AddEditCliProfile:
  damlTypes.Serializable<AddEditCliProfile> & {
  }
;


export declare type ClientRole = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const ClientRole:
  damlTypes.Template<ClientRole, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ClientRole'> & {
  Archive: damlTypes.Choice<ClientRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddEditCliProfile: damlTypes.Choice<ClientRole, AddEditCliProfile, damlTypes.ContractId<ClientProfile>, undefined>;
  CreateProject: damlTypes.Choice<ClientRole, CreateProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace ClientRole {
  export type CreateEvent = damlLedger.CreateEvent<ClientRole, undefined, typeof ClientRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientRole, typeof ClientRole.templateId>
  export type Event = damlLedger.Event<ClientRole, undefined, typeof ClientRole.templateId>
}



export declare type AcceptRequest = {
};

export declare const AcceptRequest:
  damlTypes.Serializable<AcceptRequest> & {
  }
;


export declare type ClientInvitation = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const ClientInvitation:
  damlTypes.Template<ClientInvitation, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ClientInvitation'> & {
  Archive: damlTypes.Choice<ClientInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptRequest: damlTypes.Choice<ClientInvitation, AcceptRequest, damlTypes.ContractId<ClientRole>, undefined>;
};

export declare namespace ClientInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ClientInvitation, undefined, typeof ClientInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientInvitation, typeof ClientInvitation.templateId>
  export type Event = damlLedger.Event<ClientInvitation, undefined, typeof ClientInvitation.templateId>
}



export declare type AddParticipantToProject = {
};

export declare const AddParticipantToProject:
  damlTypes.Serializable<AddParticipantToProject> & {
  }
;


export declare type RequestToJoinProject = {
  participant: damlTypes.Party;
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
};

export declare const RequestToJoinProject:
  damlTypes.Template<RequestToJoinProject, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:RequestToJoinProject'> & {
  Archive: damlTypes.Choice<RequestToJoinProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddParticipantToProject: damlTypes.Choice<RequestToJoinProject, AddParticipantToProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace RequestToJoinProject {
  export type CreateEvent = damlLedger.CreateEvent<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestToJoinProject, typeof RequestToJoinProject.templateId>
  export type Event = damlLedger.Event<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
}



export declare type RegisterForProject = {
  projectId: string;
  client: damlTypes.Party;
};

export declare const RegisterForProject:
  damlTypes.Serializable<RegisterForProject> & {
  }
;


export declare type AddParProfile = {
  first: string;
  last: string;
  email: string;
};

export declare const AddParProfile:
  damlTypes.Serializable<AddParProfile> & {
  }
;


export declare type ParticipantRole = {
  participant: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const ParticipantRole:
  damlTypes.Template<ParticipantRole, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ParticipantRole'> & {
  Archive: damlTypes.Choice<ParticipantRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddParProfile: damlTypes.Choice<ParticipantRole, AddParProfile, damlTypes.ContractId<ParticipantProfile>, undefined>;
  RegisterForProject: damlTypes.Choice<ParticipantRole, RegisterForProject, damlTypes.ContractId<RequestToJoinProject>, undefined>;
};

export declare namespace ParticipantRole {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantRole, undefined, typeof ParticipantRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantRole, typeof ParticipantRole.templateId>
  export type Event = damlLedger.Event<ParticipantRole, undefined, typeof ParticipantRole.templateId>
}



export declare type AcceptParticipantRequest = {
};

export declare const AcceptParticipantRequest:
  damlTypes.Serializable<AcceptParticipantRequest> & {
  }
;


export declare type ParticipantInvitation = {
  participant: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const ParticipantInvitation:
  damlTypes.Template<ParticipantInvitation, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:ParticipantInvitation'> & {
  Archive: damlTypes.Choice<ParticipantInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptParticipantRequest: damlTypes.Choice<ParticipantInvitation, AcceptParticipantRequest, damlTypes.ContractId<ParticipantRole>, undefined>;
};

export declare namespace ParticipantInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantInvitation, undefined, typeof ParticipantInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantInvitation, typeof ParticipantInvitation.templateId>
  export type Event = damlLedger.Event<ParticipantInvitation, undefined, typeof ParticipantInvitation.templateId>
}



export declare type AddJudgeToProject = {
};

export declare const AddJudgeToProject:
  damlTypes.Serializable<AddJudgeToProject> & {
  }
;


export declare type RequestToJudgeProject = {
  judge: damlTypes.Party;
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
};

export declare const RequestToJudgeProject:
  damlTypes.Template<RequestToJudgeProject, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:RequestToJudgeProject'> & {
  Archive: damlTypes.Choice<RequestToJudgeProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddJudgeToProject: damlTypes.Choice<RequestToJudgeProject, AddJudgeToProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace RequestToJudgeProject {
  export type CreateEvent = damlLedger.CreateEvent<RequestToJudgeProject, undefined, typeof RequestToJudgeProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestToJudgeProject, typeof RequestToJudgeProject.templateId>
  export type Event = damlLedger.Event<RequestToJudgeProject, undefined, typeof RequestToJudgeProject.templateId>
}



export declare type JudgeForProject = {
  projectId: string;
  client: damlTypes.Party;
};

export declare const JudgeForProject:
  damlTypes.Serializable<JudgeForProject> & {
  }
;


export declare type AddEditJudProfile = {
  first: string;
  last: string;
  email: string;
};

export declare const AddEditJudProfile:
  damlTypes.Serializable<AddEditJudProfile> & {
  }
;


export declare type JudgeRole = {
  judge: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const JudgeRole:
  damlTypes.Template<JudgeRole, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:JudgeRole'> & {
  Archive: damlTypes.Choice<JudgeRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddEditJudProfile: damlTypes.Choice<JudgeRole, AddEditJudProfile, damlTypes.ContractId<JudgeProfile>, undefined>;
  JudgeForProject: damlTypes.Choice<JudgeRole, JudgeForProject, damlTypes.ContractId<RequestToJudgeProject>, undefined>;
};

export declare namespace JudgeRole {
  export type CreateEvent = damlLedger.CreateEvent<JudgeRole, undefined, typeof JudgeRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeRole, typeof JudgeRole.templateId>
  export type Event = damlLedger.Event<JudgeRole, undefined, typeof JudgeRole.templateId>
}



export declare type AcceptjudgeRequest = {
};

export declare const AcceptjudgeRequest:
  damlTypes.Serializable<AcceptjudgeRequest> & {
  }
;


export declare type JudgeInvitation = {
  judge: damlTypes.Party;
  operator: damlTypes.Party;
};

export declare const JudgeInvitation:
  damlTypes.Template<JudgeInvitation, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:JudgeInvitation'> & {
  Archive: damlTypes.Choice<JudgeInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptjudgeRequest: damlTypes.Choice<JudgeInvitation, AcceptjudgeRequest, damlTypes.ContractId<JudgeRole>, undefined>;
};

export declare namespace JudgeInvitation {
  export type CreateEvent = damlLedger.CreateEvent<JudgeInvitation, undefined, typeof JudgeInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeInvitation, typeof JudgeInvitation.templateId>
  export type Event = damlLedger.Event<JudgeInvitation, undefined, typeof JudgeInvitation.templateId>
}



export declare type InviteJudge = {
  judge: damlTypes.Party;
};

export declare const InviteJudge:
  damlTypes.Serializable<InviteJudge> & {
  }
;


export declare type InviteParticipant = {
  participant: damlTypes.Party;
};

export declare const InviteParticipant:
  damlTypes.Serializable<InviteParticipant> & {
  }
;


export declare type InviteClient = {
  client: damlTypes.Party;
};

export declare const InviteClient:
  damlTypes.Serializable<InviteClient> & {
  }
;


export declare type Platform = {
  operator: damlTypes.Party;
};

export declare const Platform:
  damlTypes.Template<Platform, undefined, '8dea56109b76a8c627ec5ab97b8715dce466820dbf0719b771ec3a949eacde2b:Main:Platform'> & {
  Archive: damlTypes.Choice<Platform, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  InviteClient: damlTypes.Choice<Platform, InviteClient, damlTypes.ContractId<ClientInvitation>, undefined>;
  InviteParticipant: damlTypes.Choice<Platform, InviteParticipant, damlTypes.ContractId<ParticipantInvitation>, undefined>;
  InviteJudge: damlTypes.Choice<Platform, InviteJudge, damlTypes.ContractId<JudgeInvitation>, undefined>;
};

export declare namespace Platform {
  export type CreateEvent = damlLedger.CreateEvent<Platform, undefined, typeof Platform.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Platform, typeof Platform.templateId>
  export type Event = damlLedger.Event<Platform, undefined, typeof Platform.templateId>
}


