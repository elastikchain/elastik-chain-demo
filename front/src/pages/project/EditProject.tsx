import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import firebase from "firebase/app";
import { useLedger, useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";

import {
  ClientRole,
  ClientProject,
   CreateProject,
  ParticipantRole,
  JudgeRole,
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "../profile/Profile.scss";
import {
  publicParty,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import "./Project.scss";
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


const EditProject = (props: RouteComponentProps) => {
  const defaultProjectDetail = {
    name: getSelectedProject().payload.name,
    desc: getSelectedProject().payload.desc,
    projectId: getSelectedProject().payload.projectId,
    startDate: getSelectedProject().payload.startDate,
    endDate: getSelectedProject().payload.endDate,
    location: getSelectedProject().payload.location,
    criteria: getSelectedProject().payload.criteria,
    pictureUrl: getSelectedProject().payload.pictureUrl,
    rules: getSelectedProject().payload.rules,
    termsLink: getSelectedProject().payload.termsLink,
    privacyLink: getSelectedProject().payload.privacyLink,
    prizes: getSelectedProject().payload.prizes,
    projectvideoLink: getSelectedProject().payload.projectvideoLink,
    eligibility: getSelectedProject().payload.eligibility,
    requirements: getSelectedProject().payload.requirements,
  };
  const requirements:any = [];
  getSelectedProject().payload.requirements.map((data:any)=>{
    requirements.push({name:data,id:''});
  })
  const eligibility:any = [];
  getSelectedProject().payload.eligibility.map((data:any)=>{
    eligibility.push({name:data,id:''});
  })
  const rules:any = [];
  getSelectedProject().payload.rules.map((data:any)=>{
    rules.push({name:data,id:''});
  })
 
  const [projectDetail, setProjectDetail] = useState(defaultProjectDetail);
  const onPrizeChange = (val: any) => {
    setProjectDetail({
      ...projectDetail,
      prizes: val,
    });
  };
  const userDispatch = useUserDispatch();
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }

 const handleEditProjectSubmit  = (evt:any)=>{
       evt.preventDefault();
      const UpdatedefaultProjectDetail = {
          newDesc: projectDetail.desc,
          newstartDate: projectDetail.startDate,
          newendDate:projectDetail.endDate,
          newlocation: projectDetail.location,
          newCriteria: {name:'',point:'0.0'},
          newrules: projectDetail.rules,
          newtermsLink: projectDetail.termsLink,
          newprivacyLink: projectDetail.privacyLink,
          newprizes: projectDetail.prizes,
          newProjectvideoLink:projectDetail.projectvideoLink,
          neweligibility:projectDetail.eligibility,
          newrequirements:projectDetail.requirements,
        };
      
        ledger.exercise(ClientProject.AddUpdateClientProject,getSelectedProject().contractId,UpdatedefaultProjectDetail)
        .then((data:any)=>{
          alert("Successfully updated project");
          props.history.push("/main/profile");
        })
        .catch((err:any)=>{
          alert("Seems error!");
        });
 }
  const ledger = useLedger();
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;
  console.log("getSelectedProject()", getSelectedProject());

  const projectAssets = useStreamQueries(ClientRole).contracts;
  const participantAssets = useStreamQueries(ParticipantRole).contracts;
  const judgeAssets = useStreamQueries(JudgeRole).contracts;

  console.log("participantAssets", participantAssets);
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
    return "";
  };

 

  const userProfileData = () => {
    console.log("judgeAssets", judgeAssets);
    const d = {
      firstName: "",
      lastName: "",
      email: "",
      job: "",
      about: "",
      company: "",
      pictureUrl: "",
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
        }
        break;
      case "participant":
        const pa = participantAssets.filter(
          (p) => p.payload.participant === (user as any).party
        );
        if (pa.length > 0) {
          d.firstName = pa[0].payload.participantProfile.firstName;
          d.lastName = pa[0].payload.participantProfile.lastName;
          d.email = pa[0].payload.participantProfile.email;
          d.job = pa[0].payload.participantProfile.job;
          d.about = pa[0].payload.participantProfile.about;
          d.company = pa[0].payload.participantProfile.company;
          d.pictureUrl = pa[0].payload.participantProfile.pictureUrl;
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
        }
        break;
    }
    return d;
  };


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
              <IonButton fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>
                 <div className="wrapper">
                  <div className="profile-info-container">
                    <div className="profile-img-container">
                      
                      {projectAssets.length > 0 &&
                      projectAssets[0].payload.clientProfile.pictureUrl !=
                        "" ? (
                        <img
                          src={
                            projectAssets[0].payload.clientProfile.pictureUrl
                          }
                          alt="profile image"
                        />
                      ) : (
                        <img
                          src="https://via.placeholder.com/214x198.png"
                          alt="profile image"
                        />
                      )}
                      <input
                        className="profile-picture-input"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                    <div className="profile-info">
                      <div className="profile-header">
                        <h1>
                          {user.party} ({userProfileData().firstName}{" "}
                          {userProfileData().lastName})
                        </h1>
                        <IonButton size="large" className="edit-button">
                          {" "}
                          Edit{" "}
                        </IonButton>
                      </div>

                      <div className="profile-about">
                        <h2>About</h2>
                        <p>{userProfileData().about}</p>
                        <p>
                          Email:{" "}
                          <a href={"mailto:" + userProfileData().email}>
                            {userProfileData().email}
                          </a>
                        </p>

                        <p>
                          Company: <a href="#">{userProfileData().company}</a>
                        </p>
                        <p>
                          Linkedin: <a href="#">Information here</a>
                        </p>
                        <p>
                          Github: <a href="#">Information here</a>
                        </p>
                      
                      </div>
                    </div>
                  </div>

                  {/*--Edit Project-- */}
                  <div className="edi-project">
                    <h2>Edit Project : {projectDetail.name}</h2>
           
         
            <IonItem>
              <IonLabel position="floating">Description</IonLabel>
              <IonInput
                required={true}
                value={projectDetail.desc}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    desc: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Start Date</IonLabel>
              <IonDatetime
                displayFormat="MM DD YYYY, HH:mm"
                display-timezone="utc"
                value={projectDetail.startDate}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    startDate: new Date(e.detail.value!).toISOString(),
                  });
                }}
              ></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">End Date</IonLabel>
              <IonDatetime
                displayFormat="MM DD YYYY, HH:mm"
                display-timezone="utc"
                value={projectDetail.endDate}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    endDate: new Date(e.detail.value!).toISOString(),
                  });
                }}
              ></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Location</IonLabel>
              <IonInput
                required={true}
                value={projectDetail.location}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    location: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Terms Link</IonLabel>
              <IonInput
                value={projectDetail.termsLink}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    termsLink: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Privacy Link</IonLabel>
              <IonInput
                value={projectDetail.privacyLink}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    privacyLink: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Video Link</IonLabel>
              <IonInput
                value={projectDetail.projectvideoLink}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    projectvideoLink: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <div className="addmore-tags-container">
                        <IonLabel>Rules</IonLabel>
                        <AddMore
                          defaultTags={rules}
                          onChange={(tags) => {
                            const arrRules = tags.map(
                              (t) =>
                                (t.name)
                            );
                            setProjectDetail({
                              ...projectDetail,
                              rules: arrRules,
                            });
                          }}
                        ></AddMore>
                      </div>
                      <div className="addmore-tags-container">
                        <IonLabel>Eligibility</IonLabel>
                        <AddMore
                          defaultTags={eligibility}
                          onChange={(tags) => {
                            const arrEligibility = tags.map(
                              (t) =>
                                (t.name)
                            );
                            setProjectDetail({
                              ...projectDetail,
                              eligibility: arrEligibility,
                            });
                          }}
                        ></AddMore>
                      </div>
                      <div className="addmore-tags-container">
                        <IonLabel>Requirements</IonLabel>
                        {console.log(projectDetail.requirements)}
                        <AddMore
                          defaultTags={requirements}
                          onChange={(tags) => {
                            const arrrequirements = tags.map(
                              (t) =>
                                (t.name)
                            );
                            setProjectDetail({
                              ...projectDetail,
                              requirements: arrrequirements,
                            });
                          }}
                        ></AddMore>
                      </div>       

            <IonItem>
              <IonLabel>Prizes</IonLabel>
              <PrizesComponent onPrizeChange={onPrizeChange}  defaultPrice={projectDetail.prizes}/>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Picture URL</IonLabel>
              <IonInput
                required={true}
                value={projectDetail.pictureUrl}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
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
                handleEditProjectSubmit(e)
                
              }}
            >
              Update Project
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
export default EditProject;
