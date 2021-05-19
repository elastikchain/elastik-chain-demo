import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import firebase from "firebase/app";
import { useLedger, useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";

import {
  ClientRole,
  ClientProject,
   CreateProject,
  UserRole,
  JudgeRole,
  ProfileData
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "./Profile.scss";
import {
  publicParty,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import { setSelectedProject } from "../../context/SharedContext";
import SubHeader from "../../components/Header/subheader";
import menuItemImg from "../../assets/img/img-menu-item.png";
import Footer from "../../components/Footer/footer";
import PrizesComponent from "../../components/PrizesComponent/PrizesComponent";
import CriteriaTagsInput from "../../components/CriteriaTagsInput/CriteriaTagsInput";
import AddMore from "../../components/AddMore/AddMore";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonMenu,
  IonSplitPane,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
  IonModal,
  IonInput,
  IonListHeader,
  IonTextarea,
  IonDatetime,
  IonNote,
  IonSpinner,
  IonIcon,
} from "@ionic/react";

import {
  open,
  close,
  pencil,
  trash,
  calendar,
  calendarClear,
  trophy,
  globe,
  flag,
  man,
  pricetags,
  hammer,
} from "ionicons/icons";
import { getSelectedProject } from "../../context/SharedContext";
import { arrowBack } from "ionicons/icons";


const EditProfile = (props: RouteComponentProps) => {
  
  const userDispatch = useUserDispatch();
  const user = useUserState();
  
 
  const ledger = useLedger();
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;
  console.log("getSelectedProject()", getSelectedProject());

  const projectAssets = useStreamQueries(ClientRole).contracts;
  const participantAssets = useStreamQueries(UserRole).contracts;
  const judgeAssets = useStreamQueries(JudgeRole).contracts;
  const getUserType = (): "" | "client" | "participant" | "judge" => {
    if (
      clientProjectAssets.length > 0 &&
      clientProjectAssets[0].payload.participants
        .map((p) => p.toLowerCase())
        .filter((p) => p === (user as any).party.toLowerCase()).length > 0
    ) {
      return "participant";
    }

    if (
      projectAssets.filter((c: any) => (user as any).party === c.payload.client)
        .length > 0
    ) {
      return "client";
    }
    if (
      participantAssets.filter(
        (p: any) => p.payload.participant === (user as any).party
      ).length > 0
    ) {
      return "participant";
    }

    if (
      judgeAssets.filter((c) => (user as any).party === c.payload.judge)
        .length > 0
    ) {
      return "judge";
    }
    return "participant";
  };
  let userContract:any;
 
  const[contractIdUser,setContractIdUser] = useState();
  const userProfileData = () => {
    console.log("judgeAssets", clientProjectAssets);
    const d = {
      firstName: "",
      lastName: "",
      email: "",
      job: "",
      about: "",
      company: "",
      pictureUrl: "",
      contractId: userContract,
    };
    switch (getUserType()) {
      case "judge":
        const ja = judgeAssets.filter(
          (j) => j.payload.judge === (user as any).party
        );
        if (ja.length > 0) {
          d.firstName = ja[0].payload.judgeProfile.firstName;
          d.lastName = ja[0].payload.judgeProfile.lastName;
          d.email = ja[0].payload.judgeProfile.email;
          d.job = ja[0].payload.judgeProfile.job;
          d.about = ja[0].payload.judgeProfile.about;
          d.company = ja[0].payload.judgeProfile.company;
          d.pictureUrl = ja[0].payload.judgeProfile.pictureUrl;
          d.contractId = ja[0].contractId;
        }
        break;
      case "participant":
        const pa = participantAssets.filter(
          (p) => p.payload.user === (user as any).party
        );
        if (pa.length > 0) {
          d.firstName = pa[0].payload.participantProfile.firstName;
          d.lastName = pa[0].payload.participantProfile.lastName;
          d.email = pa[0].payload.participantProfile.email;
          d.job = pa[0].payload.participantProfile.job;
          d.about = pa[0].payload.participantProfile.about;
          d.company = pa[0].payload.participantProfile.company;
          d.pictureUrl = pa[0].payload.participantProfile.pictureUrl;
          d.contractId = pa[0].contractId;
        }
        break;
      case "client":
        const ca = projectAssets.filter(
          (c) => c.payload.client === (user as any).party
        );
        if (ca.length > 0) {
          d.firstName = ca[0].payload.clientProfile.firstName;
          d.lastName = ca[0].payload.clientProfile.lastName;
          d.email = ca[0].payload.clientProfile.email;
          d.job = ca[0].payload.clientProfile.job;
          d.about = ca[0].payload.clientProfile.about;
          d.company = ca[0].payload.clientProfile.company;
          d.pictureUrl = ca[0].payload.clientProfile.pictureUrl;
          d.contractId = ca[0].contractId;
        }
        break;
    }
    return d;
  };
  const defaultProfiletDetail = {
        firstName: userProfileData().firstName,
        lastName: userProfileData().lastName,
        email: userProfileData().email,
        job: userProfileData().job,
        company: userProfileData().company,
        about: userProfileData().about,
        pictureUrl: userProfileData().pictureUrl,
    };
    const [profileDetail, setProfileDetail] = useState(defaultProfiletDetail);
    const handleEditProfileSubmit  = (evt:any)=>{
        console.log("userProfileData",userProfileData().contractId); 
        
        if(getUserType() ===  "client"){
          const profileData = {newClientProfile: profileDetail};
        ledger.exercise(ClientRole.AddEditCliProfile,userProfileData().contractId,profileData)
        .then((data:any)=>{
            alert("Successfull updated profile");
        })
        .catch((err:any)=>{
            alert(err);
        });
      }else{
        const profileData = {newparticipantProfile: profileDetail};
        const userContractId = userProfileData().contractId
        ledger.exercise(UserRole.UpdateParProfile,userContractId,profileData)
        .then((data:any)=>{
            alert("Successfull updated profile");
        })
        .catch((err:any)=>{
            alert(err);
        });
      }
     
    }

  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
       
        <SubHeader {...props} />
        <IonContent>
          <div className="content-container">
            <IonSplitPane className="menu-container" contentId="main">
            

              {/*--  the side menu  --*/}
              <IonMenu contentId="main" className="leftbar-main">
                <IonHeader className="d-none">
                  <IonToolbar>
                    <IonTitle></IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <IonList className="menu-items-list">
                    {/* <Tabs>
                    <Tab title="Lemon">Lemon is yellow</Tab>
                    <Tab title="Strawberry">Strawberry is red</Tab>
                    <Tab title="Pear">Pear is green</Tab>
                  </Tabs> */}

                    <IonItem>
                      <img slot="start" src={menuItemImg} alt="menu item" />
                      <IonLabel>Profile</IonLabel>
                    </IonItem>
                    <IonItem>
                      <img slot="start" src={menuItemImg} alt="menu item" />
                      <IonLabel>Account Settings</IonLabel>
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonMenu>
              {/*-- the main content --*/}
              <IonPage className="full-width-container" id="main">
              <IonButton className="go-back2" fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>
                 <div className="wrapper">
                 

                  {/*--Edit Project-- */}
                  <div className="edit-project">
                    <h2>Edit Profile : {user.party}</h2>
           
         
            <IonItem>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput
                required={true}
                value={profileDetail.firstName}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    firstName: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput
                required={true}
                value={profileDetail.lastName}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    lastName: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email </IonLabel>
              <IonInput
                required={true}
                value={profileDetail.email}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    email: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Job </IonLabel>
              <IonInput
                required={true}
                value={profileDetail.job}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    job: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Company </IonLabel>
              <IonInput
                required={true}
                value={profileDetail.company}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    company: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Video Link</IonLabel>
              <IonTextarea
                value={profileDetail.about}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    about: e.detail.value!,
                  });
                }}
              ></IonTextarea>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Picture URL</IonLabel>
              <IonInput
                value={profileDetail.pictureUrl}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    pictureUrl: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            
            <IonButton
              className="submit-button"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleEditProfileSubmit(e)
                
              }}
            >
              Update Profile
            </IonButton>
          </div>
                </div>
              </IonPage>
            </IonSplitPane>
          </div>
        </IonContent>
      </IonPage>
    );
  }
};
export default EditProfile;
