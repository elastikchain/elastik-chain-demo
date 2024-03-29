import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLedger, useStreamQueries } from "@daml/react";
import {
  ClientRole,
  ClientProject,
  UserRole,
} from "@daml.js/cosmart-0.0.1/lib/Main";
import Alert from "./alert";
import "./Profile.scss";
import {
  useUserState,
} from "../../context/UserContext";
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import {
  IonPage,
  IonButton,
  IonContent,
  IonSplitPane,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonIcon,
} from "@ionic/react";


import { arrowBack } from "ionicons/icons";
import ProfileMenu from "./profileMenu";

const EditProfile = (props: RouteComponentProps) => {
  const user = useUserState();
  
  const [showAlert, setAlerts] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
  const ledger = useLedger();
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;


  const projectAssets = useStreamQueries(ClientRole).contracts;
  const participantAssets = useStreamQueries(UserRole).contracts;
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

    return "participant";
  };
  let userContract:any;
 
 
  const userProfileData = () => {
 
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
  let defaultProfiletDetail = {
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
       
        
        if(getUserType() ===  "client"){
          const profileData = {newClientProfile: profileDetail};
        ledger.exercise(ClientRole.AddEditCliProfile,userProfileData().contractId,profileData)
        .then((data:any)=>{
          setAlerts(true);
          setMessageText("Successfully updated profile");
          setMessageType("success");
           
        })
        .catch((err:any)=>{
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
        });
      }else{
        const profileData = {newparticipantProfile: profileDetail};
        const userContractId = userProfileData().contractId
        ledger.exercise(UserRole.UpdateParProfile,userContractId,profileData)
        .then((data:any)=>{
          setAlerts(true);
          setMessageText("Successfully updated profile");
          setMessageType("success");
        })
        .catch((err:any)=>{
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
        });
      }
     
    }

  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
       
        <SubHeader {...props} />
        <Alert type={messageType} showAlert={showAlert} setAlerts={setAlerts} text={messageText} />
        <IonContent>
          <div className="content-container">
            <IonSplitPane className="menu-container" contentId="main">
            

              {/*--  the side menu  --*/}
                <ProfileMenu {...props}/>
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
                value={profileDetail.firstName === "" ? userProfileData().firstName: profileDetail.firstName}
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
                value={profileDetail.lastName === "" ? userProfileData().lastName: profileDetail.lastName}
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
                value={profileDetail.email === "" ? userProfileData().email: profileDetail.email}
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
                value={profileDetail.job === "" ? userProfileData().job: profileDetail.job}
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
                value={profileDetail.company === "" ? userProfileData().company: profileDetail.company}
                onIonChange={(e) => {
                    setProfileDetail({
                    ...profileDetail,
                    company: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">About Me</IonLabel>
              <IonTextarea
                value={profileDetail.about === "" ? userProfileData().about: profileDetail.about}
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
                value={profileDetail.pictureUrl === "" ? userProfileData().pictureUrl: profileDetail.pictureUrl}
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
          <Footer />
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
