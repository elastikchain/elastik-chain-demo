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

export declare type ModifyScorecard = {
  scores: CriteriaPoint[];
};

export declare const ModifyScorecard:
  damlTypes.Serializable<ModifyScorecard> & {
  }
;


export declare type Scorecard = {
  client: damlTypes.Party;
  submissionId: string;
  judge: damlTypes.Party;
  scoretable: CriteriaPoint[];
};

export declare const Scorecard:
  damlTypes.Template<Scorecard, Scorecard.Key, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:Scorecard'> & {
  Archive: damlTypes.Choice<Scorecard, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Scorecard.Key>;
  ModifyScorecard: damlTypes.Choice<Scorecard, ModifyScorecard, damlTypes.ContractId<Scorecard>, Scorecard.Key>;
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
  damlTypes.Template<ClosedParticipantProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedParticipantProfile'> & {
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
  damlTypes.Template<ClosedJudgeProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedJudgeProfile'> & {
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
  damlTypes.Template<ClosedClientProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedClientProfile'> & {
  Archive: damlTypes.Choice<ClosedClientProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedClientProfile {
  export type CreateEvent = damlLedger.CreateEvent<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedClientProfile, typeof ClosedClientProfile.templateId>
  export type Event = damlLedger.Event<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedClientProfile, undefined, typeof ClosedClientProfile.templateId>
}



export declare type ClosedChallenge = {
  nameOf: string;
  prize: string;
  client: damlTypes.Party;
  description: string;
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
};

export declare const ClosedChallenge:
  damlTypes.Template<ClosedChallenge, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedChallenge'> & {
  Archive: damlTypes.Choice<ClosedChallenge, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClosedChallenge {
  export type CreateEvent = damlLedger.CreateEvent<ClosedChallenge, undefined, typeof ClosedChallenge.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClosedChallenge, typeof ClosedChallenge.templateId>
  export type Event = damlLedger.Event<ClosedChallenge, undefined, typeof ClosedChallenge.templateId>
  export type QueryResult = damlLedger.QueryResult<ClosedChallenge, undefined, typeof ClosedChallenge.templateId>
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
  challenges: ChallengeData[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  comment: string;
};

export declare const ClosedClientProject:
  damlTypes.Template<ClosedClientProject, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedClientProject'> & {
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
  name: string;
  desc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  participants: damlTypes.Party[];
  operator: damlTypes.Party;
  comment: string;
};

export declare const ClosedParticipantSubmission:
  damlTypes.Template<ClosedParticipantSubmission, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClosedParticipantSubmission'> & {
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
  damlTypes.Template<Criteria, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:Criteria'> & {
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
  damlTypes.Template<ParticipantProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ParticipantProfile'> & {
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
  damlTypes.Template<JudgeProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:JudgeProfile'> & {
  Archive: damlTypes.Choice<JudgeProfile, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace JudgeProfile {
  export type CreateEvent = damlLedger.CreateEvent<JudgeProfile, undefined, typeof JudgeProfile.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeProfile, typeof JudgeProfile.templateId>
  export type Event = damlLedger.Event<JudgeProfile, undefined, typeof JudgeProfile.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeProfile, undefined, typeof JudgeProfile.templateId>
}



export declare type RemoveClientProfile = {
  operator: damlTypes.Party;
  comment: string;
};

export declare const RemoveClientProfile:
  damlTypes.Serializable<RemoveClientProfile> & {
  }
;


export declare type ClientProfile = {
  client: damlTypes.Party;
  clientProfile: ProfileData;
};

export declare const ClientProfile:
  damlTypes.Template<ClientProfile, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClientProfile'> & {
  RemoveClientProfile: damlTypes.Choice<ClientProfile, RemoveClientProfile, damlTypes.ContractId<ClosedClientProfile>, undefined>;
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
  submissionId: string;
  participant: damlTypes.Party;
  email: string;
};

export declare const TeammateProposal:
  damlTypes.Template<TeammateProposal, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:TeammateProposal'> & {
  AcceptTeammateProposal: damlTypes.Choice<TeammateProposal, AcceptTeammateProposal, {}, undefined>;
  Archive: damlTypes.Choice<TeammateProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace TeammateProposal {
  export type CreateEvent = damlLedger.CreateEvent<TeammateProposal, undefined, typeof TeammateProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TeammateProposal, typeof TeammateProposal.templateId>
  export type Event = damlLedger.Event<TeammateProposal, undefined, typeof TeammateProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<TeammateProposal, undefined, typeof TeammateProposal.templateId>
}



export declare type SubmitScorecard = {
  scores: CriteriaPoint[];
  judge: damlTypes.Party;
};

export declare const SubmitScorecard:
  damlTypes.Serializable<SubmitScorecard> & {
  }
;


export declare type AddTeammate = {
  participantToAdd: damlTypes.Party;
  leaderParticipant: damlTypes.Party;
};

export declare const AddTeammate:
  damlTypes.Serializable<AddTeammate> & {
  }
;


export declare type RemoveSubmission = {
  comment: string;
};

export declare const RemoveSubmission:
  damlTypes.Serializable<RemoveSubmission> & {
  }
;


export declare type ProposeTeammate = {
  email: string;
};

export declare const ProposeTeammate:
  damlTypes.Serializable<ProposeTeammate> & {
  }
;


export declare type UpdateSubmission = {
  newDesc: string;
  newName: string;
  newsubmission: string;
  newvideoLink: string;
  newpresentation: string;
};

export declare const UpdateSubmission:
  damlTypes.Serializable<UpdateSubmission> & {
  }
;


export declare type AddJudgToSubmission = {
  judge: damlTypes.Party;
};

export declare const AddJudgToSubmission:
  damlTypes.Serializable<AddJudgToSubmission> & {
  }
;


export declare type ParticipantSubmission = {
  participant: damlTypes.Party;
  client: damlTypes.Party;
  submissionId: string;
  name: string;
  desc: string;
  submission: string;
  videoLink: string;
  presentation: string;
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  operator: damlTypes.Party;
  criteria: CriteriaPoint[];
};

export declare const ParticipantSubmission:
  damlTypes.Template<ParticipantSubmission, ParticipantSubmission.Key, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ParticipantSubmission'> & {
  AddJudgToSubmission: damlTypes.Choice<ParticipantSubmission, AddJudgToSubmission, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  UpdateSubmission: damlTypes.Choice<ParticipantSubmission, UpdateSubmission, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  ProposeTeammate: damlTypes.Choice<ParticipantSubmission, ProposeTeammate, damlTypes.ContractId<TeammateProposal>, ParticipantSubmission.Key>;
  RemoveSubmission: damlTypes.Choice<ParticipantSubmission, RemoveSubmission, damlTypes.ContractId<ClosedParticipantSubmission>, ParticipantSubmission.Key>;
  AddTeammate: damlTypes.Choice<ParticipantSubmission, AddTeammate, damlTypes.ContractId<ParticipantSubmission>, ParticipantSubmission.Key>;
  SubmitScorecard: damlTypes.Choice<ParticipantSubmission, SubmitScorecard, damlTypes.ContractId<Scorecard>, ParticipantSubmission.Key>;
  Archive: damlTypes.Choice<ParticipantSubmission, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ParticipantSubmission.Key>;
};

export declare namespace ParticipantSubmission {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmission, typeof ParticipantSubmission.templateId>
  export type Event = damlLedger.Event<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantSubmission, ParticipantSubmission.Key, typeof ParticipantSubmission.templateId>
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
  videoLink: string;
  presentation: string;
  client: damlTypes.Party;
  operator: damlTypes.Party;
  criteria: CriteriaPoint[];
};

export declare const ParticipantSubmissionProposal:
  damlTypes.Template<ParticipantSubmissionProposal, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ParticipantSubmissionProposal'> & {
  AcceptSubmission: damlTypes.Choice<ParticipantSubmissionProposal, AcceptSubmission, damlTypes.ContractId<ParticipantSubmission>, undefined>;
  Archive: damlTypes.Choice<ParticipantSubmissionProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ParticipantSubmissionProposal {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantSubmissionProposal, typeof ParticipantSubmissionProposal.templateId>
  export type Event = damlLedger.Event<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantSubmissionProposal, undefined, typeof ParticipantSubmissionProposal.templateId>
}



export declare type ProposeSubmission = {
  generalPublicParticipant: damlTypes.Party;
  subName: string;
  subDesc: string;
  submission: string;
  videoLink: string;
  presentation: string;
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


export declare type ModifyChallenge = {
  c1: ChallengeData[];
};

export declare const ModifyChallenge:
  damlTypes.Serializable<ModifyChallenge> & {
  }
;


export declare type AddChallenge = {
  challengeId: string;
  nameOf: string;
  prize: string;
  description: string;
};

export declare const AddChallenge:
  damlTypes.Serializable<AddChallenge> & {
  }
;


export declare type AddCriteria = {
  newCriteria: CriteriaPoint;
};

export declare const AddCriteria:
  damlTypes.Serializable<AddCriteria> & {
  }
;


export declare type AddUpdateDescription = {
  newDesc: string;
};

export declare const AddUpdateDescription:
  damlTypes.Serializable<AddUpdateDescription> & {
  }
;


export declare type AddUpdateClientProject = {
  newDesc: string;
  newCriteria: CriteriaPoint;
  newlocation: string;
  newstartDate: damlTypes.Time;
  newendDate: damlTypes.Time;
  newrules: string[];
  newtermsLink: string;
  newprivacyLink: string;
  newprizes: PrizeData[];
  newProjectvideoLink: string;
};

export declare const AddUpdateClientProject:
  damlTypes.Serializable<AddUpdateClientProject> & {
  }
;


export declare type AddParticipantToGeneralPublic = {
  participant: damlTypes.Party;
};

export declare const AddParticipantToGeneralPublic:
  damlTypes.Serializable<AddParticipantToGeneralPublic> & {
  }
;


export declare type AddGeneralPublic = {
  newParticipants: damlTypes.Party[];
};

export declare const AddGeneralPublic:
  damlTypes.Serializable<AddGeneralPublic> & {
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
  rules: string[];
  termsLink: string;
  privacyLink: string;
  prizes: PrizeData[];
  criteria: CriteriaPoint[];
  challenges: ChallengeData[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  pictureUrl: string;
  generalPublic: damlTypes.Party[];
  projectvideoLink: string;
};

export declare const ClientProject:
  damlTypes.Template<ClientProject, ClientProject.Key, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClientProject'> & {
  AddGeneralPublic: damlTypes.Choice<ClientProject, AddGeneralPublic, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddParticipantToGeneralPublic: damlTypes.Choice<ClientProject, AddParticipantToGeneralPublic, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddUpdateClientProject: damlTypes.Choice<ClientProject, AddUpdateClientProject, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddUpdateDescription: damlTypes.Choice<ClientProject, AddUpdateDescription, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddCriteria: damlTypes.Choice<ClientProject, AddCriteria, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddChallenge: damlTypes.Choice<ClientProject, AddChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  ModifyChallenge: damlTypes.Choice<ClientProject, ModifyChallenge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddParticipant: damlTypes.Choice<ClientProject, AddParticipant, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddJudge: damlTypes.Choice<ClientProject, AddJudge, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  AddSubmissionToList: damlTypes.Choice<ClientProject, AddSubmissionToList, damlTypes.ContractId<ClientProject>, ClientProject.Key>;
  RemoveClientProject: damlTypes.Choice<ClientProject, RemoveClientProject, damlTypes.ContractId<ClosedClientProject>, ClientProject.Key>;
  ProposeSubmission: damlTypes.Choice<ClientProject, ProposeSubmission, damlTypes.ContractId<ParticipantSubmissionProposal>, ClientProject.Key>;
  Archive: damlTypes.Choice<ClientProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ClientProject.Key>;
};

export declare namespace ClientProject {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProject, typeof ClientProject.templateId>
  export type Event = damlLedger.Event<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientProject, ClientProject.Key, typeof ClientProject.templateId>
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
  damlTypes.Template<RequestToJoinProject, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:RequestToJoinProject'> & {
  AddParticipantToProject: damlTypes.Choice<RequestToJoinProject, AddParticipantToProject, damlTypes.ContractId<ClientProject>, undefined>;
  Archive: damlTypes.Choice<RequestToJoinProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace RequestToJoinProject {
  export type CreateEvent = damlLedger.CreateEvent<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestToJoinProject, typeof RequestToJoinProject.templateId>
  export type Event = damlLedger.Event<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
  export type QueryResult = damlLedger.QueryResult<RequestToJoinProject, undefined, typeof RequestToJoinProject.templateId>
}



export declare type ApproveClientProject = {
};

export declare const ApproveClientProject:
  damlTypes.Serializable<ApproveClientProject> & {
  }
;


export declare type ClientProjectProposal = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  projectId: string;
  name: string;
  desc: string;
  location: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  rules: string[];
  termsLink: string;
  privacyLink: string;
  prizes: PrizeData[];
  criteria: CriteriaPoint[];
  challenges: string[];
  participants: damlTypes.Party[];
  judges: damlTypes.Party[];
  projects: string[];
  pictureUrl: string;
  projectvideoLink: string;
};

export declare const ClientProjectProposal:
  damlTypes.Template<ClientProjectProposal, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClientProjectProposal'> & {
  ApproveClientProject: damlTypes.Choice<ClientProjectProposal, ApproveClientProject, damlTypes.ContractId<Registry>, undefined>;
  Archive: damlTypes.Choice<ClientProjectProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClientProjectProposal {
  export type CreateEvent = damlLedger.CreateEvent<ClientProjectProposal, undefined, typeof ClientProjectProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientProjectProposal, typeof ClientProjectProposal.templateId>
  export type Event = damlLedger.Event<ClientProjectProposal, undefined, typeof ClientProjectProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientProjectProposal, undefined, typeof ClientProjectProposal.templateId>
}



export declare type CreateProject = {
  name: string;
  desc: string;
  projectId: string;
  startDate: damlTypes.Time;
  endDate: damlTypes.Time;
  location: string;
  criteria: CriteriaPoint[];
  pictureUrl: string;
  rules: string[];
  termsLink: string;
  privacyLink: string;
  prizes: PrizeData[];
  projectvideoLink: string;
};

export declare const CreateProject:
  damlTypes.Serializable<CreateProject> & {
  }
;


export declare type AddEditCliProfile = {
  newClientProfile: ProfileData;
};

export declare const AddEditCliProfile:
  damlTypes.Serializable<AddEditCliProfile> & {
  }
;


export declare type ClientRole = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  clientProfile: ProfileData;
};

export declare const ClientRole:
  damlTypes.Template<ClientRole, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClientRole'> & {
  AddEditCliProfile: damlTypes.Choice<ClientRole, AddEditCliProfile, damlTypes.ContractId<ClientRole>, undefined>;
  CreateProject: damlTypes.Choice<ClientRole, CreateProject, damlTypes.ContractId<ClientProjectProposal>, undefined>;
  Archive: damlTypes.Choice<ClientRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
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


export declare type ClientRequestToJoin = {
  client: damlTypes.Party;
  operator: damlTypes.Party;
  clientProfile: ProfileData;
};

export declare const ClientRequestToJoin:
  damlTypes.Template<ClientRequestToJoin, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ClientRequestToJoin'> & {
  AcceptRequest: damlTypes.Choice<ClientRequestToJoin, AcceptRequest, damlTypes.ContractId<ClientRole>, undefined>;
  Archive: damlTypes.Choice<ClientRequestToJoin, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClientRequestToJoin {
  export type CreateEvent = damlLedger.CreateEvent<ClientRequestToJoin, undefined, typeof ClientRequestToJoin.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClientRequestToJoin, typeof ClientRequestToJoin.templateId>
  export type Event = damlLedger.Event<ClientRequestToJoin, undefined, typeof ClientRequestToJoin.templateId>
  export type QueryResult = damlLedger.QueryResult<ClientRequestToJoin, undefined, typeof ClientRequestToJoin.templateId>
}



export declare type UpdateParProfile = {
  newparticipantProfile: ProfileData;
};

export declare const UpdateParProfile:
  damlTypes.Serializable<UpdateParProfile> & {
  }
;


export declare type ParticipantRole = {
  participant: damlTypes.Party;
  operator: damlTypes.Party;
  participantProfile: ProfileData;
};

export declare const ParticipantRole:
  damlTypes.Template<ParticipantRole, ParticipantRole.Key, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ParticipantRole'> & {
  UpdateParProfile: damlTypes.Choice<ParticipantRole, UpdateParProfile, damlTypes.ContractId<ParticipantRole>, ParticipantRole.Key>;
  Archive: damlTypes.Choice<ParticipantRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ParticipantRole.Key>;
};

export declare namespace ParticipantRole {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<ParticipantRole, ParticipantRole.Key, typeof ParticipantRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantRole, typeof ParticipantRole.templateId>
  export type Event = damlLedger.Event<ParticipantRole, ParticipantRole.Key, typeof ParticipantRole.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantRole, ParticipantRole.Key, typeof ParticipantRole.templateId>
}



export declare type AcceptParticipantRequest = {
};

export declare const AcceptParticipantRequest:
  damlTypes.Serializable<AcceptParticipantRequest> & {
  }
;


export declare type ParticipantRequestToJoin = {
  participant: damlTypes.Party;
  operator: damlTypes.Party;
  participantProfile: ProfileData;
};

export declare const ParticipantRequestToJoin:
  damlTypes.Template<ParticipantRequestToJoin, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:ParticipantRequestToJoin'> & {
  AcceptParticipantRequest: damlTypes.Choice<ParticipantRequestToJoin, AcceptParticipantRequest, damlTypes.ContractId<ParticipantRole>, undefined>;
  Archive: damlTypes.Choice<ParticipantRequestToJoin, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ParticipantRequestToJoin {
  export type CreateEvent = damlLedger.CreateEvent<ParticipantRequestToJoin, undefined, typeof ParticipantRequestToJoin.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ParticipantRequestToJoin, typeof ParticipantRequestToJoin.templateId>
  export type Event = damlLedger.Event<ParticipantRequestToJoin, undefined, typeof ParticipantRequestToJoin.templateId>
  export type QueryResult = damlLedger.QueryResult<ParticipantRequestToJoin, undefined, typeof ParticipantRequestToJoin.templateId>
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
  damlTypes.Template<RequestToJudgeProject, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:RequestToJudgeProject'> & {
  AddJudgeToProject: damlTypes.Choice<RequestToJudgeProject, AddJudgeToProject, damlTypes.ContractId<ClientProject>, undefined>;
  Archive: damlTypes.Choice<RequestToJudgeProject, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
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
  newJudgeProfile: ProfileData;
};

export declare const AddEditJudProfile:
  damlTypes.Serializable<AddEditJudProfile> & {
  }
;


export declare type JudgeRole = {
  judge: damlTypes.Party;
  operator: damlTypes.Party;
  judgeProfile: ProfileData;
};

export declare const JudgeRole:
  damlTypes.Template<JudgeRole, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:JudgeRole'> & {
  AddEditJudProfile: damlTypes.Choice<JudgeRole, AddEditJudProfile, damlTypes.ContractId<JudgeRole>, undefined>;
  JudgeForProject: damlTypes.Choice<JudgeRole, JudgeForProject, damlTypes.ContractId<RequestToJudgeProject>, undefined>;
  Archive: damlTypes.Choice<JudgeRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace JudgeRole {
  export type CreateEvent = damlLedger.CreateEvent<JudgeRole, undefined, typeof JudgeRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeRole, typeof JudgeRole.templateId>
  export type Event = damlLedger.Event<JudgeRole, undefined, typeof JudgeRole.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeRole, undefined, typeof JudgeRole.templateId>
}



export declare type AcceptJudgeRequest = {
};

export declare const AcceptJudgeRequest:
  damlTypes.Serializable<AcceptJudgeRequest> & {
  }
;


export declare type JudgeRequestTojoin = {
  judge: damlTypes.Party;
  operator: damlTypes.Party;
  judgeProfile: ProfileData;
};

export declare const JudgeRequestTojoin:
  damlTypes.Template<JudgeRequestTojoin, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:JudgeRequestTojoin'> & {
  AcceptJudgeRequest: damlTypes.Choice<JudgeRequestTojoin, AcceptJudgeRequest, damlTypes.ContractId<JudgeRole>, undefined>;
  Archive: damlTypes.Choice<JudgeRequestTojoin, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace JudgeRequestTojoin {
  export type CreateEvent = damlLedger.CreateEvent<JudgeRequestTojoin, undefined, typeof JudgeRequestTojoin.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<JudgeRequestTojoin, typeof JudgeRequestTojoin.templateId>
  export type Event = damlLedger.Event<JudgeRequestTojoin, undefined, typeof JudgeRequestTojoin.templateId>
  export type QueryResult = damlLedger.QueryResult<JudgeRequestTojoin, undefined, typeof JudgeRequestTojoin.templateId>
}



export declare type CreateRegistry = {
};

export declare const CreateRegistry:
  damlTypes.Serializable<CreateRegistry> & {
  }
;


export declare type Platform = {
  operator: damlTypes.Party;
};

export declare const Platform:
  damlTypes.Template<Platform, undefined, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:Platform'> & {
  CreateRegistry: damlTypes.Choice<Platform, CreateRegistry, damlTypes.ContractId<Registry>, undefined>;
  Archive: damlTypes.Choice<Platform, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Platform {
  export type CreateEvent = damlLedger.CreateEvent<Platform, undefined, typeof Platform.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Platform, typeof Platform.templateId>
  export type Event = damlLedger.Event<Platform, undefined, typeof Platform.templateId>
  export type QueryResult = damlLedger.QueryResult<Platform, undefined, typeof Platform.templateId>
}



export declare type AddProjectListing = {
  projectKey: string;
  client: damlTypes.Party;
};

export declare const AddProjectListing:
  damlTypes.Serializable<AddProjectListing> & {
  }
;


export declare type AddParticipantToProjectListing = {
  participant: damlTypes.Party;
};

export declare const AddParticipantToProjectListing:
  damlTypes.Serializable<AddParticipantToProjectListing> & {
  }
;


export declare type Registry = {
  projectKeys: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, damlTypes.Party>[];
  participants: damlTypes.Party[];
  operator: damlTypes.Party;
};

export declare const Registry:
  damlTypes.Template<Registry, Registry.Key, 'be58af1b559eefad200584929909cd4fb862c93fb9be76d9957e30558aa5bc45:Main:Registry'> & {
  AddParticipantToProjectListing: damlTypes.Choice<Registry, AddParticipantToProjectListing, damlTypes.ContractId<Registry>, Registry.Key>;
  AddProjectListing: damlTypes.Choice<Registry, AddProjectListing, damlTypes.ContractId<Registry>, Registry.Key>;
  Archive: damlTypes.Choice<Registry, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Registry.Key>;
};

export declare namespace Registry {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<Registry, Registry.Key, typeof Registry.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Registry, typeof Registry.templateId>
  export type Event = damlLedger.Event<Registry, Registry.Key, typeof Registry.templateId>
  export type QueryResult = damlLedger.QueryResult<Registry, Registry.Key, typeof Registry.templateId>
}



export declare type PrizeData = {
  name: string;
  value: string;
  currency: string;
  description: string;
};

export declare const PrizeData:
  damlTypes.Serializable<PrizeData> & {
  }
;


export declare type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
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
};

export declare const ParticipantSubmissionData:
  damlTypes.Serializable<ParticipantSubmissionData> & {
  }
;


export declare type ChallengeData = {
  challengeId: string;
  nameOf: string;
  prize: string;
  description: string;
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

