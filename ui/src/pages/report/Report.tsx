import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
// import Ledger from "@daml/ledger";
import { useStreamQueries, useLedger, useParty } from "@daml/react";
import { ContractId } from "@daml/types";
import { InviteClient,AcceptRequest, ClientInvitation,Platform  } from "@daml.js/cosmart-0.0.1/lib/Main";
import { InputDialog, InputDialogProps } from "./InputDialog";
import { AlertDialog } from "./AlertDialog";

import useStyles from "./styles";

export default function Report() {
  const classes = useStyles();
  const party = useParty();
  const ledger = useLedger();
  const assets = useStreamQueries(Platform).contracts;
  const assets1 = useStreamQueries(ClientInvitation).contracts;

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


  const defaultAcceptRequestProps : InputDialogProps<AcceptRequest> = {
    open: false,
    title: "Invite Customs Gua",
    defaultValue: { customsGua : "" },
    fields: {
      customsGua : {
        label: "customs Gua",
        type: "text" }},
    onClose: async function() {}
  };

  const [ AcceptRequestProps, setAcceptRequestProps ] = useState(defaultAcceptRequestProps);
  // One can pass the original contracts CreateEvent
  function showAcceptRequest(asset : ClientInvitation.CreateEvent) {
    async function onClose(state : AcceptRequest | null) {
      setAcceptRequestProps({ ...defaultAcceptRequestProps, open: false});
      await ledger.exercise(ClientInvitation.AcceptRequest, asset.contractId, state);
    };
    setAcceptRequestProps({ ...defaultAcceptRequestProps, open: true, onClose})
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
      <InputDialog { ...inviteClientProps } />
      {/* <InputDialog { ...inviteImporterProps } /> */}
      { <InputDialog { ...AcceptRequestProps } />
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
          {assets.map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
              {/* <TableCell key={0} className={classes.tableCell}>{a.payload.issuer}</TableCell>
              <TableCell key={1} className={classes.tableCell}>{a.payload.owner}</TableCell>
              <TableCell key={2} className={classes.tableCell}>{a.payload.name}</TableCell>
              <TableCell key={3} className={classes.tableCell}>{a.payload.value}</TableCell>
              <TableCell key={4} className={classes.tableCell}>{a.payload.dateOfAppraisal}</TableCell>
              <TableCell key={5} className={classes.tableCellButton}>
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.owner !== party} onClick={() => showGive(a)}>Give</Button>
              </TableCell> */}
              <TableCell key={6} className={classes.tableCellButton}>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteCustomsMar(a)}>InviteCustomsMar</Button> */}
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showAcceptRequest(a)}>Accept invite</Button> */}
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.operator !== party} onClick={() => showInviteClient(a)}>InviteClient</Button>
                {/* <Button color="primary" size="small" className={classes.choiceButton} variant="contained" >InviteImporter</Button> */}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
      
      {/* <AlertDialog { ...AcceptRequestProps } />  
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>   
            <TableCell key={5} className={classes.tableCell}>options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assetsb.map(b => (
            <TableRow key={b.contractId} className={classes.tableRow}>
              <TableCell key={6} className={classes.tableCellButton}>
              <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={b.payload.client !== party} onClick={() => showAcceptRequest(b)}>AcceptRequest</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  );
}
