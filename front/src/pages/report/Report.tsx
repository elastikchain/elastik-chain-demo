import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
// import Ledger from "@daml/ledger";
import { useStreamQueries, useLedger, useParty } from "@daml/react";
import { InviteClient, Platform, 
  ClientInvitation, AcceptRequest, 
  InviteJudge, JudgeInvitation, 
  ParticipantInvitation, InviteParticipant,
  CreateProject, ClientRole, AddChallenge, ClientProject,
  RegisterForProject, ParticipantRole, RequestToJoinProject,
  ParticipantSubmission,
  ProposeTeammate,
  ProposeSubmission
} from "@daml.js/cosmart-0.0.1/lib/Main";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";
import { publicParty, useUserState } from "../../context/UserContext";

export default function Report() {
  const classes = useStyles();
  const party = useParty();
  const ledger = useLedger();
  const assets = useStreamQueries(Platform).contracts;
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;  
  console.log('clientProjectAssets', clientProjectAssets);
  const projectAssets = useStreamQueries(ClientRole).contracts;
  const judgeInvitationAssets = useStreamQueries(JudgeInvitation).contracts;
  const requestToJoinProjectAssets = useStreamQueries(RequestToJoinProject).contracts;

  const participantSubmissionAssets = useStreamQueries(ParticipantSubmission).contracts;
  const participantInvitationAssets = useStreamQueries(ParticipantInvitation).contracts;
  const participantRoleAssets = useStreamQueries(ParticipantRole).contracts;
  const clientInvitationAssets = useStreamQueries(ClientInvitation).contracts;
  const user = useUserState();

  // const defaultInviteCustomsMarProps : InputDialogProps<InviteCustomsMar> = {
  //   open: false,
  //   title: "Invite Customs Mar",
  //   defaultValue: { customsMar : "" },
  //   fields: {
  //     customsMar : {
  //       label: "customs Mar",
  //       type: "text" }},
  //       // items: [ "Alice", "Bob" ] } },
  //   onClose: async function() {}
  // };

  // const [ inviteCustomsMarProps, setInviteCustomsMarProps ] = useState(defaultInviteCustomsMarProps);
  // // One can pass the original contracts CreateEvent
  // function showInviteCustomsMar(asset : Platform.CreateEvent) {
  //   async function onClose(state : InviteCustomsMar | null) {
  //     setInviteCustomsMarProps({ ...defaultInviteCustomsMarProps, open: false});
  //     // if you want to use the contracts payload
  //     // if (!state || asset.payload.owner === state.newOwner) return;
  //     await ledger.exercise(Platform.InviteCustomsMar, asset.contractId, state);
  //   };
  //   setInviteCustomsMarProps({ ...defaultInviteCustomsMarProps, open: true, onClose})
  // };
  
  // const defaultInviteCustomsGuaProps : InputDialogProps<InviteCustomsGua> = {
  //   open: false,
  //   title: "Invite Customs Gua",
  //   defaultValue: { customsGua : "" },
  //   fields: {
  //     customsGua : {
  //       label: "customs Gua",
  //       type: "text" }},
  //   onClose: async function() {}
  // };

  // const [ inviteCustomsGuaProps, setInviteCustomsGuaProps ] = useState(defaultInviteCustomsGuaProps);
  // // One can pass the original contracts CreateEvent
  // function showInviteCustomsGua(asset : Platform.CreateEvent) {
  //   async function onClose(state : InviteCustomsGua | null) {
  //     setInviteCustomsGuaProps({ ...defaultInviteCustomsGuaProps, open: false});
  //     await ledger.exercise(Platform.InviteCustomsGua, asset.contractId, state);
  //   };
  //   setInviteCustomsGuaProps({ ...defaultInviteCustomsGuaProps, open: true, onClose})
  // };

  const defaultInviteClientProps : InputDialogProps<InviteClient> = {
    open: false,
    title: "Invite client",
    defaultValue: { client : "" },
    fields: {
      client : {
        label: "Client",
        type: "text" }},
    onClose: async function() {}
  };

  const [ inviteClientProps, setInviteClientProps ] = useState(defaultInviteClientProps);
  // One can pass the original contracts CreateEvent
  function showInviteClient(asset : Platform.CreateEvent) {
    async function onClose(state : InviteClient | null) {
      setInviteClientProps({ ...defaultInviteClientProps, open: false});
      await ledger.exercise(Platform.InviteClient, asset.contractId, state);
    };
    setInviteClientProps({ ...defaultInviteClientProps, open: true, onClose})
  };

  const defaultInviteParticipantProps : InputDialogProps<InviteParticipant> = {
    open: false,
    title: "Invite participant",
    defaultValue: { participant : "" },
    fields: {
      participant : {
        label: "Participant",
        type: "text" }},
    onClose: async function() {}
  };
  const [ inviteParticipantProps, setInviteParticipantProps ] = useState(defaultInviteParticipantProps);
  // One can pass the original contracts CreateEvent
  function showInviteParticipant(asset : Platform.CreateEvent) {
    async function onClose(state : InviteParticipant | null) {
      setInviteParticipantProps({ ...defaultInviteParticipantProps, open: false});
      await ledger.exercise(Platform.InviteParticipant, asset.contractId, state);
      alert("Invitation sent to the participant successfully!");
    };
    setInviteParticipantProps({ ...defaultInviteParticipantProps, open: true, onClose})
  };

  const defaultInviteJudgeProps : InputDialogProps<InviteJudge> = {
    open: false,
    title: "Invite Judge",
    defaultValue: { judge : "" },
    fields: {
      judge : {
        label: "Judge",
        type: "text" }},
    onClose: async function() {}
  };
  const [ inviteJudgeProps, setInviteJudgeProps ] = useState(defaultInviteJudgeProps);
  // One can pass the original contracts CreateEvent
  function showInviteJudge(asset : Platform.CreateEvent) {
    async function onClose(state : InviteJudge | null) {
      setInviteJudgeProps({ ...defaultInviteJudgeProps, open: false});
      await ledger.exercise(Platform.InviteJudge, asset.contractId, state);
      alert("Invitation sent to the Judge successfully!");
    };
    setInviteJudgeProps({ ...defaultInviteJudgeProps, open: true, onClose })
  };

  const defaultCreateProjectProps : InputDialogProps<CreateProject> = {
    open: false,
    title: "Create Project",
    defaultValue: { 
      name : "", 
      projectId: "", 
      startDate: "", 
      endDate: "", 
      location: "", 
      desc: "", 
      criteria: [], 
      pictureUrl: "",
      public: publicParty
    },
    fields: {
      name : {
        label: "Project Name",
        type: "text"
      },
      startDate : {
        label: "Project Start Date",
        type: "text"
      },
      endDate : {
        label: "Project End Date",
        type: "text"
      },
      location : {
        label: "Project Location",
        type: "text"
      },
      projectId: {
        label: "Project Id",
        type: "text"
      },
      desc: {
        label: "Project Descritpion",
        type: "text"
      },
      criteria: {
        label: "Project criteria",
        type: "text"
      },
      public: {
        label: "Public party",
        type: "text"
      },
      pictureUrl: {
        label: "Project Picture url",
        type: "text"
      }
    },
    onClose: async function() {}
  };
  const [ createProjectProps, setCreateProjectProps ] = useState(defaultCreateProjectProps);
  // One can pass the original contracts CreateEvent
  function showCreateProject(asset : ClientRole.CreateEvent) {
    async function onClose(state : CreateProject | null) {
      setCreateProjectProps({ ...defaultCreateProjectProps, open: false});
      await ledger.exercise(ClientRole.CreateProject, asset.contractId, state);
      alert("Project has been created successfully!");
    };
    setCreateProjectProps({ ...defaultCreateProjectProps, open: true, onClose})
  };
  
  const defaultAddUpdateChallengeProps : InputDialogProps<AddChallenge> = {
    open: false,
    title: "Add Challenge",
    defaultValue: { challengeId: "", description: "",nameOf: "", prize: "", participant: "Andy", judge: "Yuling"},
    fields: {
      challengeId: {
        label: "Challenge Id",
        type: "text" 
      },
      nameOf: {
        label: "Challenge Name",
        type: "text" 
      },
      prize: {
        label: "prize",
        type: "text" 
      },
      description: {
        label: "description",
        type: "text"
      },
      participant: {
        label: "participant",
        type: "text" 
      },
      judge: {
        label: "judge",
        type: "text" 
      }
    },
    onClose: async function() {}
  };
  const [ addUpdateChallengeProps, setAddUpdateChallengeProps ] = useState(defaultAddUpdateChallengeProps);
  // One can pass the original contracts CreateEvent
  function showAddUpdateChallenge(asset : ClientProject.CreateEvent) {
    async function onClose(state : AddChallenge | null) {
      setAddUpdateChallengeProps({ ...defaultAddUpdateChallengeProps, open: false});
      await ledger.exercise(ClientProject.AddChallenge, asset.contractId, state);
      alert("Challenge has been created successfully!");
    };
    setAddUpdateChallengeProps({ ...defaultAddUpdateChallengeProps, open: true, onClose})
  };

  const defaultAddUpdateSubmissionProps : InputDialogProps<ProposeSubmission> = {
    open: false,
    title: "Submission",
    defaultValue: { 
      participant: party, subName: "", subDesc: "", presentation: "", submission: "", challengeId: "", judge: "Yuling", videoLink: ""
    },
    fields: {
      participant: {
        label: "Participant",
        type: "text",
      },
      subName: {
        label: "Submission Name",
        type: "text" 
      },
      subDesc: {
        label: "Submission Description",
        type: "text" 
      },
      submission: {
        label: "Submission",
        type: "text" 
      },
      presentation: {
        label: "Presentation",
        type: "text" 
      },
      videoLink: {
        label: "Video Link",
        type: "text" 
      },
      challengeId: {
        label: "Challenge Id",
        type: "text" 
      },
      judge: {
        label: "judge",
        type: "text" 
      }
    },
    onClose: async function() {}
  };
  const [ addUpdateSubmissionProps, setAddUpdateSubmissionProps ] = useState(defaultAddUpdateSubmissionProps);
  // One can pass the original contracts CreateEvent
  function showParticipantSubmission(asset : ClientProject.CreateEvent) {
    async function onClose(state : ProposeSubmission | null) {
      setAddUpdateSubmissionProps({ ...defaultAddUpdateSubmissionProps, open: false});
      await ledger.exercise(ClientProject.ProposeSubmission, asset.contractId, state);
      alert("Submission has been created successfully!");
    };
    setAddUpdateSubmissionProps({ ...defaultAddUpdateSubmissionProps, open: true, onClose})
  };

  const defaultProposeTeammateProps : InputDialogProps<ProposeTeammate> = {
    open: false,
    title: "Add To The Teammate",
    defaultValue: { 
      email: "",
      participantToAdd: ""
    },
    fields: {
      email: {
        label: "Participant Email To Add",
        type: "text" 
      },
      participantToAdd: {
        label: "Participant To Add",
        type: "text" 
      }
    },
    onClose: async function() {}
  };
  const [ addTeammateProps, setProposeTeammateProps ] = useState(defaultProposeTeammateProps);
  // One can pass the original contracts CreateEvent
  function showProposeTeammate(asset : ParticipantSubmission.CreateEvent) {
    async function onClose(state : ProposeTeammate | null) {
      setProposeTeammateProps({ ...defaultProposeTeammateProps, open: false});
      await ledger.exercise(ParticipantSubmission.ProposeTeammate, asset.contractId, state);
      alert("Teammate has been created successfully!");
    };
    setProposeTeammateProps({ ...defaultProposeTeammateProps, open: true, onClose})
  };
  
  // const defaultInviteImporterProps : InputDialogProps<InviteImporter> = {
  //   open: false,
  //   title: "Invite client",
  //   defaultValue: { importer : "" },
  //   fields: {
  //     importer : {
  //       label: "Importer",
  //       type: "text" }},
  //   onClose: async function() {}
  // };

  // const [ inviteImporterProps, setInviteImporterProps ] = useState(defaultInviteImporterProps);
  // // One can pass the original contracts CreateEvent
  // function showInviteImporter(asset : Platform.CreateEvent) {
  //   async function onClose(state : InviteImporter | null) {
  //     setInviteImporterProps({ ...defaultInviteImporterProps, open: false});
  //     await ledger.exercise(Platform.InviteImporter, asset.contractId, state);
  //   };
  //   setInviteImporterProps({ ...defaultInviteImporterProps, open: true, onClose})
  // };

/*
  const defaultAcceptRequestProps : InputDialogProps<AcceptRequest> = {
    open: false,
    title: "Invite Customs Gua",
    defaultValue: { customsGua : "" },
    fields: {
      customsGua : {
        label: "customs Gua",
        type: "text" }},
    onClose: async function() {}
  };*/

  // const [ AcceptRequestProps, setAcceptRequestProps ] = useState(defaultAcceptRequestProps);
  // One can pass the original contracts CreateEvent
  async function showAcceptRequest(asset : ClientInvitation.CreateEvent) {
    await ledger.exercise(ClientInvitation.AcceptRequest, asset.contractId, AcceptRequest);
    alert('Your request accepted successfully!');
  };

  async function showAcceptParticipant(asset : ParticipantInvitation.CreateEvent) {
    await ledger.exercise(ParticipantInvitation.AcceptParticipantRequest, asset.contractId, AcceptRequest);
    alert('Your request accepted successfully!');
  };

  async function showAcceptParticipantRequestToProject(asset: RequestToJoinProject.CreateEvent) {
    await ledger.exercise(RequestToJoinProject.AddParticipantToProject, asset.contractId, AcceptRequest);
    alert('Participant request to project accepted successfully!');
  };

  

  const defaultRegisterForProjectProps : InputDialogProps<RegisterForProject> = {
    open: false,
    title: "Register For A Project",
    defaultValue: { projectId: "", client: "" },
    fields: {
      projectId: {
        label: "Project ID",
        type: "text"
      },
      client: {
        label: "Client",
        type: "text"
      }
    },
    onClose: async function() {}
  };
  const [ registerForProjectProps, setRegisterForProjectProps ] = useState(defaultRegisterForProjectProps);
  // One can pass the original contracts CreateEvent
  function showRegiterForProject(asset : ParticipantRole.CreateEvent) {
    async function onClose(state : RegisterForProject | null) {
      setRegisterForProjectProps({ ...defaultRegisterForProjectProps, open: false});
      await ledger.exercise(ParticipantRole.RegisterForProject, asset.contractId, state);
      alert("Registred For A Project Successfully!");
    };
    setRegisterForProjectProps({ ...defaultRegisterForProjectProps, open: true, onClose})
  };

  async function showAcceptJudge(asset : JudgeInvitation.CreateEvent) {
    await ledger.exercise(JudgeInvitation.AcceptjudgeRequest, asset.contractId, AcceptRequest);
    alert('Your request accepted successfully!');
  };

  // type UserSpecifiedAppraise = Pick<Appraise, "newValue">;
  // const today = (new Date()).toISOString().slice(0,10);
  // const defaultAppraiseProps : InputDialogProps<UserSpecifiedAppraise> = {
  //   open: false,
  //   title: "Appraise Asset",
  //   defaultValue: { newValue: "0" },
  //   fields: {
  //     newValue : {
  //       label: "New Value",
  //       type: "number" }
  //     },
  //   onClose: async function() {}
  // };
  // const [ appraiseProps, setAppraiseProps ] = useState(defaultAppraiseProps);

  // // Or can pass just the ContractId of an
  // function showAppraise(assetContractId : ContractId<Asset>) {
  //   async function onClose(state : UserSpecifiedAppraise | null) {
  //     setAppraiseProps({ ...defaultAppraiseProps, open: false});
  //     if (!state) return;
  //     const withNewDateOfAppraisal = { ...state, newDateOfAppraisal:today};
  //     await ledger.exercise(Asset.Appraise, assetContractId, withNewDateOfAppraisal);
  //   };
  //   setAppraiseProps({...defaultAppraiseProps, open: true, onClose});
  // };

  // type InputFieldsForNewAsset = Omit<Asset, "issuer">;
  // const defaultNewAssetProps : InputDialogProps<InputFieldsForNewAsset> = {
  //   open: false,
  //   title: "New Asset",
  //   defaultValue: {
  //     owner: party,
  //     name: "",
  //     dateOfAppraisal: today,
  //     value: "0",
  //   },
  //   fields: {
  //     owner: {
  //       label: "Owner",
  //       type: "selection",
  //       items: [ "Alice", "Bob" ],
  //     },
  //     name: {
  //       label: "Name of Asset",
  //       type: "text"
  //     },
  //     dateOfAppraisal: {
  //       label: "Date of Appraisal",
  //       type: "date"
  //     },
  //     value: {
  //       label: "Value",
  //       type: "number"
  //     }
  //   },
  //   onClose: async function() {}
  // };
  // const [newAssetProps, setNewAssetProps] = useState(defaultNewAssetProps);
  // function showNewAsset() {
  //   async function onClose(state : InputFieldsForNewAsset | null) {
  //     setNewAssetProps({ ...defaultNewAssetProps, open: false});
  //     if (!state) return;
  //     const withIssuer = { ...state, issuer:party};
  //     await ledger.create(Asset, withIssuer);
  //   };
  //   setNewAssetProps({...defaultNewAssetProps, open: true, onClose});
  // };

  return (
    <>
      {/* <InputDialog { ...inviteCustomsMarProps } /> */}
      {/* <InputDialog { ...inviteCustomsGuaProps } /> */}
      <InputDialog { ...inviteJudgeProps } />
      <InputDialog { ...inviteClientProps } />
      <InputDialog { ...inviteParticipantProps } />
      <InputDialog { ...createProjectProps } />
      <InputDialog { ...addUpdateChallengeProps } /> 
      <InputDialog { ...registerForProjectProps } /> 
      <InputDialog { ...addUpdateSubmissionProps } /> 
      <InputDialog { ...addTeammateProps } /> 
      
      {/* <InputDialog { ...inviteImporterProps } /> */}
      {/*<InputDialog { ...AcceptRequestProps } /> 
      /* <InputDialog { ...newAssetProps } /> */}
      {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" onClick={() => showNewAsset()}>
        Create New Asset
      </Button> */}
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            {/* <TableCell key={0} className={classes.tableCell}>Issuer</TableCell>
            <TableCell key={1} className={classes.tableCell}>Owner</TableCell>
            <TableCell key={2} className={classes.tableCell}>Name</TableCell>
            <TableCell key={3} className={classes.tableCell}>Value</TableCell>
            <TableCell key={4} className={classes.tableCell}>DateOfAppraisal</TableCell> */}
            <TableCell key={5} className={classes.tableCell}>options</TableCell>
            {/* <TableCell key={6} className={classes.tableCell}>Appraise</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {clientInvitationAssets.filter((c: any) => (user as any).party === c.payload.client).map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.client !== party} onClick={() => showAcceptRequest(a) }>Accept Invitation</Button>
                             {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
          {participantSubmissionAssets.filter((c: any) => (user as any).party === c.payload.participant).map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.participant !== party} onClick={() => showProposeTeammate(a) }>Add teammate</Button>
              </TableCell>
            </TableRow>
          ))}
          {participantInvitationAssets.filter((c: any) => (user as any).party === c.payload.participant).map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.participant !== party} onClick={() => showAcceptParticipant(a) }>Accept Invitation As A Participant</Button>
                             {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
          {clientProjectAssets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.participants.map((p: any) => p.toLowerCase()).indexOf(party.toLowerCase()) < 0} onClick={() => showParticipantSubmission(a) }> Add Submission</Button>
              </TableCell>
            </TableRow>
          ))}
          {participantRoleAssets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.participant !== party} onClick={() => showRegiterForProject(a) }>Register For A Project</Button>
              </TableCell>
            </TableRow>
          ))}
          
          {judgeInvitationAssets.filter((c: any) => (user as any).party === c.payload.judge).map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.judge !== party} onClick={() => showAcceptJudge(a) }>Accept Invitation As A Judge</Button>
              </TableCell>
            </TableRow>
          ))}
          {requestToJoinProjectAssets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptParticipantRequestToProject(a) }>Accept {a.payload.participant} Rquest To Project</Button>
              </TableCell>
            </TableRow>
          ))}
          {projectAssets.filter((c: any) => (user as any).party === c.payload.client).map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.client !== party} onClick={() => showCreateProject(a) }>Create Project</Button>
                             {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
          {clientProjectAssets.filter(c => (user as any).party === c.payload.client).map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.client !== party} onClick={() => showAddUpdateChallenge(a) }>Add Challenge To {a.payload.name}</Button>
              </TableCell>
            </TableRow>
          ))}
          {assets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteClient(a)}>InviteClient</Button>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
          {assets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteParticipant(a)}>Invite Participant</Button>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
          {assets.map((a: any) => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteJudge(a)}>Invite Judge</Button>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>

    </>
  );
}
