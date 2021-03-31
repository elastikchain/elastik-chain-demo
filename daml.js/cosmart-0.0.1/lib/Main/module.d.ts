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

export declare type Scorecard = {
  client: damlTypes.Party;
  submissionId: string;
  judge: damlTypes.Party;
  scoretable: CriteriaPoint[];
};

export declare const Scorecard:
  damlTypes.Template<Scorecard, Scorecard.Key, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Scorecard'> & {
  Archive: damlTypes.Choice<Scorecard, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Scorecard.Key>;
};

export declare namespace Scorecard {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<Scorecard, Scorecard.Key, typeof Scorecard.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Scorecard, typeof Scorecard.templateId>
  export type Event = damlLedger.Event<Scorecard, Scorecard.Key, typeof Scorecard.templateId>
  export type QueryResult = damlLedger.QueryResult<Scorecard, Scorecard.Key, typeof Scorecard.templateId>
}



export declare type ClosedParticipantProfile = {
  participant: damlTypes.Party;
  operator: damlTypes.Party;
  participantProfile: ProfileData;
  comment: string;
};

export declare const ClosedParticipantProfile:
  damlTypes.Template<ClosedParticipantProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedParticipantProfile'> & {
  Archive: damlTypes.Choice<ClosedParticipantProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedParticipantProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClosedParticipantProfile, undefined, typeof ClosedParticipantProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedParticipantProfile, typeof ClosedParticipantProfile.templateId>
  export type Event = damlLedger.Event<ClosedParticipantProfile, undefined, typeof ClosedParticipantProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedParticipantProfile, undefined, typeof ClosedParticipantProfile.templateId>
}



export declare type ClosedJudgeProfile = {
  judge: damlTypes.Party;
  operator: damlTypes.Party;
  judgeProfile: ProfileData;
  comment: string;
};

export declare const ClosedJudgeProfile:
  damlTypes.Template<ClosedJudgeProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedJudgeProfile'> & {
  Archive: damlTypes.Choice<ClosedJudgeProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedJudgeProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClosedJudgeProfile, undefined, typeof ClosedJudgeProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedJudgeProfile, typeof ClosedJudgeProfile.templateId>
  export type Event = damlLedger.Event<ClosedJudgeProfile, undefined, typeof ClosedJudgeProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedJudgeProfile, undefined, typeof ClosedJudgeProfile.templateId>
}



export declare type ClosedClientProfile = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  clientProfile: ProfileData;
  comment: string;
};

export declare const ClosedClientProfile:
  damlTypes.Template<ClosedClientProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedClientProfile'> & {
  Archive: damlTypes.Choice<ClosedClientProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedClientProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedClientProfile, typeof ClosedClientProfile.templateId>
  export type Event = damlLedger.Event<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
}



export declare type ClosedClientProject = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
  name: string;
  desc: string;
  location: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  criteria: CriteriaPoint[];
  challenges: string[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  public: damlTypes.Party;
  comment: string;
};

export declare const ClosedClientProject:
  damlTypes.Template<ClosedClientProject, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedClientProject'> & {
  Archive: damlTypes.Choice<ClosedClientProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedClientProject {
  export type CreateEvent = damlLedger.CreateEvent<ClosedClientProject, undefined, typeof ClosedClientProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedClientProject, typeof ClosedClientProject.templateId>
  export type Event = damlLedger.Event<ClosedClientProject, undefined, typeof ClosedClientProject.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedClientProject, undefined, typeof ClosedClientProject.templateId>
}



export declare type ClosedParticipantSubmission = {
  participant: damlTypes.Party;
  client: damlTypes.Party;
  submissionId: string;
  challengeId: string;
  name: string;
  desc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  participants: damlTypes.Party[];
  judge: damlTypes.Party;
  operator: damlTypes.Party;
  comment: string;
};

export declare const ClosedParticipantSubmission:
  damlTypes.Template<ClosedParticipantSubmission, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClosedParticipantSubmission'> & {
  Archive: damlTypes.Choice<ClosedParticipantSubmission, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedParticipantSubmission {
  export type CreateEvent = damlLedger.CreateEvent<ClosedParticipantSubmission, undefined, typeof ClosedParticipantSubmission.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedParticipantSubmission, typeof ClosedParticipantSubmission.templateId>
  export type Event = damlLedger.Event<ClosedParticipantSubmission, undefined, typeof ClosedParticipantSubmission.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedParticipantSubmission, undefined, typeof ClosedParticipantSubmission.templateId>
}



export declare type Criteria = {
  judge: damlTypes.Party;
  design: damlTypes.Numeric;
  idea: damlTypes.Numeric;
  code: damlTypes.Numeric;
};

export declare const Criteria:
  damlTypes.Template<Criteria, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Criteria'> & {
  Archive: damlTypes.Choice<Criteria, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Criteria {
  export type CreateEvent = damlLedger.CreateEvent<Criteria, undefined, typeof Criteria.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Criteria, typeof Criteria.templateId>
  export type Event = damlLedger.Event<Criteria, undefined, typeof Criteria.templateId>
  export type QueryResult = damlLedger.QueryResult<Criteria, undefined, typeof Criteria.templateId>
}



export declare type ParticipantProfile = {
  participant: damlTypes.Party;
  participantProfile: ProfileData;
};

export declare const ParticipantProfile:
  damlTypes.Template<ParticipantProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantProfile'> & {
  Archive: damlTypes.Choice<ParticipantProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ParticipantProfile {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantProfile, undefined, typeof ParticipantProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantProfile, typeof ParticipantProfile.templateId>
  export type Event = damlLedger.Event<ParticipantProfile, undefined, typeof ParticipantProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantProfile, undefined, typeof ParticipantProfile.templateId>
}



export declare type JudgeProfile = {
  judge: damlTypes.Party;
  judgeProfile: ProfileData;
};

export declare const JudgeProfile:
  damlTypes.Template<JudgeProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeProfile'> & {
  Archive: damlTypes.Choice<JudgeProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace JudgeProfile {
  export type CreateEvent = damlLedger.CreateEvent<JudgeProfile, undefined, typeof JudgeProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeProfile, typeof JudgeProfile.templateId>
  export type Event = damlLedger.Event<JudgeProfile, undefined, typeof JudgeProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeProfile, undefined, typeof JudgeProfile.templateId>
}



export declare type ClientProfile = {
  client: damlTypes.Party;
  clientProfile: ProfileData;
};

export declare const ClientProfile:
  damlTypes.Template<ClientProfile, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientProfile'> & {
  Archive: damlTypes.Choice<ClientProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClientProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClientProfile, undefined, typeof ClientProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProfile, typeof ClientProfile.templateId>
  export type Event = damlLedger.Event<ClientProfile, undefined, typeof ClientProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientProfile, undefined, typeof ClientProfile.templateId>
}



export declare type AcceptTeammateProposal = {
};

export declare const AcceptTeammateProposal:
  damlTypes.Serializable<AcceptTeammateProposal> & {
  }
;


export declare type TeammateProposal = {
  operator: damlTypes.Party;
  teammate: damlTypes.Party;
  submissionId: string;
  participant: damlTypes.Party;
  email: string;
};

export declare const TeammateProposal:
  damlTypes.Template<TeammateProposal, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:TeammateProposal'> & {
  Archive: damlTypes.Choice<TeammateProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptTeammateProposal: damlTypes.Choice<TeammateProposal, AcceptTeammateProposal, {}, undefined>;
};

export declare namespace TeammateProposal {
  export type CreateEvent = damlLedger.CreateEvent<TeammateProposal, undefined, typeof TeammateProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TeammateProposal, typeof TeammateProposal.templateId>
  export type Event = damlLedger.Event<TeammateProposal, undefined, typeof TeammateProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<TeammateProposal, undefined, typeof TeammateProposal.templateId>
}



export declare type SubmitScorecard = {
  scores: CriteriaPoint[];
};

export declare const SubmitScorecard:
  damlTypes.Serializable<SubmitScorecard> & {
  }
;


export declare type RemoveSubmission = {
  comment: string;
};

export declare const RemoveSubmission:
  damlTypes.Serializable<RemoveSubmission> & {
  }
;


export declare type AddTeammate = {
  p: damlTypes.Party;
};

export declare const AddTeammate:
  damlTypes.Serializable<AddTeammate> & {
  }
;


export declare type ProposeTeammate = {
  participantToAdd: damlTypes.Party;
  email: string;
};

export declare const ProposeTeammate:
  damlTypes.Serializable<ProposeTeammate> & {
  }
;


export declare type UpdateSubmission = {
  newDesc: string;
  newName: string;
  newchallengeId: string;
};

export declare const UpdateSubmission:
  damlTypes.Serializable<UpdateSubmission> & {
  }
;


export declare type ParticipantSubmission = {
  participant: damlTypes.Party;
  client: damlTypes.Party;
  submissionId: string;
  challengeId: string;
  name: string;
  desc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  participants: damlTypes.Party[];
  judge: damlTypes.Party;
  judges: damlTypes.Party[];
  operator: damlTypes.Party;
  criteria: CriteriaPoint[];
};

export declare const ParticipantSubmission:
  damlTypes.Template<ParticipantSubmission, ParticipantSubmission.Key, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantSubmission'> & {
  Archive: damlTypes.Choice<ParticipantSubmission, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ParticipantSubmission.Key>;
  UpdateSubmission: damlTypes.Choice<ParticipantSubmission, UpdateSubmission, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  ProposeTeammate: damlTypes.Choice<ParticipantSubmission, ProposeTeammate, damlTypes.ContractId<TeammateProposal>, ParticipantSubmission.Key>;
  AddTeammate: damlTypes.Choice<ParticipantSubmission, AddTeammate, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  RemoveSubmission: damlTypes.Choice<ParticipantSubmission, RemoveSubmission, damlTypes.ContractId<ClosedParticipantSubmission>, ParticipantSubmission.Key>;
  SubmitScorecard: damlTypes.Choice<ParticipantSubmission, SubmitScorecard, damlTypes.ContractId<Scorecard>, ParticipantSubmission.Key>;
};

export declare namespace ParticipantSubmission {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmission, typeof ParticipantSubmission.templateId>
  export type Event = damlLedger.Event<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
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
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  participant: damlTypes.Party;
  judge: damlTypes.Party;
};

export declare const Challenge:
  damlTypes.Template<Challenge, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Challenge'> & {
  Archive: damlTypes.Choice<Challenge, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ModifieChallenge: damlTypes.Choice<Challenge, ModifieChallenge, damlTypes.ContractId<Challenge>, undefined>;
};

export declare namespace Challenge {
  export type CreateEvent = damlLedger.CreateEvent<Challenge, undefined, typeof Challenge.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Challenge, typeof Challenge.templateId>
  export type Event = damlLedger.Event<Challenge, undefined, typeof Challenge.templateId>
  export type QueryResult = damlLedger.QueryResult<Challenge, undefined, typeof Challenge.templateId>
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
  challengeId: string;
  participant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  client: damlTypes.Party;
  operator: damlTypes.Party;
  judge: damlTypes.Party;
  criteria: CriteriaPoint[];
};

export declare const ParticipantSubmissionProposal:
  damlTypes.Template<ParticipantSubmissionProposal, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantSubmissionProposal'> & {
  Archive: damlTypes.Choice<ParticipantSubmissionProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptSubmission: damlTypes.Choice<ParticipantSubmissionProposal, AcceptSubmission, damlTypes.ContractId<ParticipantSubmission>, undefined>;
};

export declare namespace ParticipantSubmissionProposal {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmissionProposal, typeof ParticipantSubmissionProposal.templateId>
  export type Event = damlLedger.Event<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
}



export declare type ProposeSubmission = {
  participant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  challengeId: string;
  judge: damlTypes.Party;
};

export declare const ProposeSubmission:
  damlTypes.Serializable<ProposeSubmission> & {
  }
;


export declare type RemoveClientProject = {
  comment: string;
};

export declare const RemoveClientProject:
  damlTypes.Serializable<RemoveClientProject> & {
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
  description: string;
  participant: damlTypes.Party;
  judge: damlTypes.Party;
};

export declare const AddChallenge:
  damlTypes.Serializable<AddChallenge> & {
  }
;


export declare type AddUpdateCriteria = {
  newCriteria: CriteriaPoint;
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
  location: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  criteria: CriteriaPoint[];
  challenges: string[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  public: damlTypes.Party;
  pictureUrl: string;
};

export declare const ClientProject:
  damlTypes.Template<ClientProject, ClientProject.Key, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientProject'> & {
  Archive: damlTypes.Choice<ClientProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ClientProject.Key>;
  AddUpdateDescription: damlTypes.Choice<ClientProject, AddUpdateDescription, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddUpdateCriteria: damlTypes.Choice<ClientProject, AddUpdateCriteria, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddChallenge: damlTypes.Choice<ClientProject, AddChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  RemoveChallenge: damlTypes.Choice<ClientProject, RemoveChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddParticipant: damlTypes.Choice<ClientProject, AddParticipant, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddJudge: damlTypes.Choice<ClientProject, AddJudge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddSubmissionToList: damlTypes.Choice<ClientProject, AddSubmissionToList, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  RemoveClientProject: damlTypes.Choice<ClientProject, RemoveClientProject, damlTypes.ContractId<ClosedClientProject>, ClientProject.Key>;
  ProposeSubmission: damlTypes.Choice<ClientProject, ProposeSubmission, damlTypes.ContractId<ParticipantSubmissionProposal>, ClientProject.Key>;
};

export declare namespace ClientProject {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProject, typeof ClientProject.templateId>
  export type Event = damlLedger.Event<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
}



export declare type CreateProject = {
  name: string;
  desc: string;
  projectId: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  location: string;
  criteria: CriteriaPoint[];
  public: damlTypes.Party;
  pictureUrl: string;
};

export declare const CreateProject:
  damlTypes.Serializable<CreateProject> & {
  }
;


export declare type AddEditCliProfile = {
  clientProfile: ProfileData;
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
  damlTypes.Template<ClientRole, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientRole'> & {
  Archive: damlTypes.Choice<ClientRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddEditCliProfile: damlTypes.Choice<ClientRole, AddEditCliProfile, damlTypes.ContractId<ClientProfile>, undefined>;
  CreateProject: damlTypes.Choice<ClientRole, CreateProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace ClientRole {
  export type CreateEvent = damlLedger.CreateEvent<ClientRole, undefined, typeof ClientRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientRole, typeof ClientRole.templateId>
  export type Event = damlLedger.Event<ClientRole, undefined, typeof ClientRole.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientRole, undefined, typeof ClientRole.templateId>
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
  damlTypes.Template<ClientInvitation, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ClientInvitation'> & {
  Archive: damlTypes.Choice<ClientInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptRequest: damlTypes.Choice<ClientInvitation, AcceptRequest, damlTypes.ContractId<ClientRole>, undefined>;
};

export declare namespace ClientInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ClientInvitation, undefined, typeof ClientInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientInvitation, typeof ClientInvitation.templateId>
  export type Event = damlLedger.Event<ClientInvitation, undefined, typeof ClientInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientInvitation, undefined, typeof ClientInvitation.templateId>
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
  damlTypes.Template<RequestToJoinProject, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:RequestToJoinProject'> & {
  Archive: damlTypes.Choice<RequestToJoinProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddParticipantToProject: damlTypes.Choice<RequestToJoinProject, AddParticipantToProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace RequestToJoinProject {
  export type CreateEvent = damlLedger.CreateEvent<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestToJoinProject, typeof RequestToJoinProject.templateId>
  export type Event = damlLedger.Event<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
  export type QueryResult = damlLedger.QueryResult<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
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
  participantProfile: ProfileData;
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
  damlTypes.Template<ParticipantRole, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantRole'> & {
  Archive: damlTypes.Choice<ParticipantRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddParProfile: damlTypes.Choice<ParticipantRole, AddParProfile, damlTypes.ContractId<ParticipantProfile>, undefined>;
  RegisterForProject: damlTypes.Choice<ParticipantRole, RegisterForProject, damlTypes.ContractId<RequestToJoinProject>, undefined>;
};

export declare namespace ParticipantRole {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantRole, undefined, typeof ParticipantRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantRole, typeof ParticipantRole.templateId>
  export type Event = damlLedger.Event<ParticipantRole, undefined, typeof ParticipantRole.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantRole, undefined, typeof ParticipantRole.templateId>
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
  damlTypes.Template<ParticipantInvitation, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:ParticipantInvitation'> & {
  Archive: damlTypes.Choice<ParticipantInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptParticipantRequest: damlTypes.Choice<ParticipantInvitation, AcceptParticipantRequest, damlTypes.ContractId<ParticipantRole>, undefined>;
};

export declare namespace ParticipantInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantInvitation, undefined, typeof ParticipantInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantInvitation, typeof ParticipantInvitation.templateId>
  export type Event = damlLedger.Event<ParticipantInvitation, undefined, typeof ParticipantInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantInvitation, undefined, typeof ParticipantInvitation.templateId>
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
  damlTypes.Template<RequestToJudgeProject, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:RequestToJudgeProject'> & {
  Archive: damlTypes.Choice<RequestToJudgeProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddJudgeToProject: damlTypes.Choice<RequestToJudgeProject, AddJudgeToProject, damlTypes.ContractId<ClientProject>, undefined>;
};

export declare namespace RequestToJudgeProject {
  export type CreateEvent = damlLedger.CreateEvent<RequestToJudgeProject, undefined, typeof RequestToJudgeProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestToJudgeProject, typeof RequestToJudgeProject.templateId>
  export type Event = damlLedger.Event<RequestToJudgeProject, undefined, typeof RequestToJudgeProject.templateId>
  export type QueryResult = damlLedger.QueryResult<RequestToJudgeProject, undefined, typeof RequestToJudgeProject.templateId>
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
  judgeProfile: ProfileData;
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
  damlTypes.Template<JudgeRole, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeRole'> & {
  Archive: damlTypes.Choice<JudgeRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AddEditJudProfile: damlTypes.Choice<JudgeRole, AddEditJudProfile, damlTypes.ContractId<JudgeProfile>, undefined>;
  JudgeForProject: damlTypes.Choice<JudgeRole, JudgeForProject, damlTypes.ContractId<RequestToJudgeProject>, undefined>;
};

export declare namespace JudgeRole {
  export type CreateEvent = damlLedger.CreateEvent<JudgeRole, undefined, typeof JudgeRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeRole, typeof JudgeRole.templateId>
  export type Event = damlLedger.Event<JudgeRole, undefined, typeof JudgeRole.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeRole, undefined, typeof JudgeRole.templateId>
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
  damlTypes.Template<JudgeInvitation, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:JudgeInvitation'> & {
  Archive: damlTypes.Choice<JudgeInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptjudgeRequest: damlTypes.Choice<JudgeInvitation, AcceptjudgeRequest, damlTypes.ContractId<JudgeRole>, undefined>;
};

export declare namespace JudgeInvitation {
  export type CreateEvent = damlLedger.CreateEvent<JudgeInvitation, undefined, typeof JudgeInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeInvitation, typeof JudgeInvitation.templateId>
  export type Event = damlLedger.Event<JudgeInvitation, undefined, typeof JudgeInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeInvitation, undefined, typeof JudgeInvitation.templateId>
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
  damlTypes.Template<Platform, undefined, '4294fa1d1cdda15d0b2f99f8a59cb624e9b8798e16badfe70f715eaa12424d3c:Main:Platform'> & {
  Archive: damlTypes.Choice<Platform, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  InviteClient: damlTypes.Choice<Platform, InviteClient, damlTypes.ContractId<ClientInvitation>, undefined>;
  InviteParticipant: damlTypes.Choice<Platform, InviteParticipant, damlTypes.ContractId<ParticipantInvitation>, undefined>;
  InviteJudge: damlTypes.Choice<Platform, InviteJudge, damlTypes.ContractId<JudgeInvitation>, undefined>;
};

export declare namespace Platform {
  export type CreateEvent = damlLedger.CreateEvent<Platform, undefined, typeof Platform.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Platform, typeof Platform.templateId>
  export type Event = damlLedger.Event<Platform, undefined, typeof Platform.templateId>
  export type QueryResult = damlLedger.QueryResult<Platform, undefined, typeof Platform.templateId>
}



export declare type ProfileData = {
  firstName: string;
  lastName: string;
  profileEmail: string;
  job: string;
  company: string;
  about: string;
  pictureUrl: string;
};

export declare const ProfileData:
  damlTypes.Serializable<ProfileData> & {
  }
;


export declare type CriteriaPoint = {
  name: string;
  point: damlTypes.Numeric;
};

export declare const CriteriaPoint:
  damlTypes.Serializable<CriteriaPoint> & {
  }
;


export declare type ParticipantSubmissionData = {
  participant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
  challengeId: string;
};

export declare const ParticipantSubmissionData:
  damlTypes.Serializable<ParticipantSubmissionData> & {
  }
;


export declare type ChallengeData = {
  challengeId: string;
  nameOf: string;
  prize: string;
  participant: damlTypes.Party;
  judge: damlTypes.Party;
};

export declare const ChallengeData:
  damlTypes.Serializable<ChallengeData> & {
  }
;


export declare type ClientProjectData = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
  name: string;
  desc: string;
  location: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  criteria: CriteriaPoint[];
  challenges: string[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  public: damlTypes.Party;
};

export declare const ClientProjectData:
  damlTypes.Serializable<ClientProjectData> & {
  }
;

