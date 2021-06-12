import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useLedger } from "@daml/react";
import ProfileMenu from "../profile/profileMenu";
import Alert from "../profile/alert";
import {
  ClientProject,
   CreateProject,
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "../profile/Profile.scss";
import {
  useUserState,
} from "../../context/UserContext";
import "./Project.scss";
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import PrizesComponent from "../../components/PrizesComponent/PrizesComponent";
import AddMore from "../../components/AddMore/AddMore";
import {
  IonPage,
  IonButton,
  IonContent,
  IonSplitPane,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonIcon,
} from "@ionic/react";
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
    return requirements.push({name:data,id:''});
  })
  const eligibility:any = [];
  getSelectedProject().payload.eligibility.map((data:any)=>{
    return eligibility.push({name:data,id:''});
  })
  const rules:any = [];
  getSelectedProject().payload.rules.map((data:any)=>{
    return rules.push({name:data,id:''});
  })
 
  const [projectDetail, setProjectDetail] = useState(defaultProjectDetail);
  const onPrizeChange = (val: any) => {
    setProjectDetail({
      ...projectDetail,
      prizes: val,
    });
  };
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }
  const [showAlert, setAlerts] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
 const handleEditProjectSubmit  = (evt:any)=>{
       evt.preventDefault();
      const UpdatedefaultProjectDetail = {
          newDesc: projectDetail.desc,
          newstartDate: projectDetail.startDate,
          newendDate:projectDetail.endDate,
          newlocation: projectDetail.location,
          newCriteria: projectDetail.criteria,
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
          setAlerts(true);
          setMessageText("Successfully updated project");
          setMessageType("success");
          
        })
        .catch((err:any)=>{
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
        });
 }
 const confirmUpdate  = (evt:any)=>{
    setAlerts(false);
    props.history.push("/main/profile");

 }
  const ledger = useLedger();





  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
        <Alert type={messageType} showAlert={showAlert} setAlerts={confirmUpdate} text={messageText} />
        <SubHeader {...props} />
        <IonContent>
          <div className="content-container">
            <IonSplitPane className="menu-container" contentId="main">
            

              {/*--  the side menu  --*/}
              <ProfileMenu {...props} />
              {/*-- the main content --*/}
              <IonPage className="full-width-container" id="main">
              <IonButton className="go-back2" fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>
                 <div className="wrapper">
                  {/*--Edit Project-- */}
                  <div className="edit-project">
                    <h2>Edit Project : {projectDetail.name}</h2>
           
         
            <IonItem>
              <IonLabel position="floating">Description</IonLabel>
              <IonTextarea
                required={true}
                value={projectDetail.desc}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    desc: e.detail.value!,
                  });
                }}
              ></IonTextarea>
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

            <div className="price-label-box">
              <IonLabel className="price-label">Prizes</IonLabel>
             
              <PrizesComponent onPrizeChange={onPrizeChange}  defaultPrice={projectDetail.prizes}/>
             
            </div>

           
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
          </div>  <Footer />
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
