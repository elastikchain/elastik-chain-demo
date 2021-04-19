import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLedger, useQuery, useStreamQueries } from "@daml/react";

import {
  IonButton,
  IonContent,
  IonDatetime,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";

import { useUserDispatch, useUserState } from "../../context/UserContext";

import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import PrizesComponent from "../../components/PrizesComponent/PrizesComponent";

import { getSelectedProject } from "../../context/SharedContext";

import { arrowBack } from "ionicons/icons";
import "./Project.scss";

import {
  AddChallenge,
  ClientProject,
  ClientRole,
  ParticipantSubmission,
  ProposeSubmission,
  AddUpdateClientProject,
} from "@daml.js/cosmart-0.0.1/lib/Main";

const EditProject = (props: RouteComponentProps) => {
  const ledger = useLedger();

  console.log("getSelectedProject", getSelectedProject());

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

  const [projectDetail, setProjectDetail] = useState(defaultProjectDetail);

  const onPrizeChange = (val: any) => {
    setProjectDetail({
      ...projectDetail,
      prizes: val,
    });
  };

  return (
    <IonPage>
      <SubHeader {...props} />
      <IonContent>
        <div className="proj-wrapper">
          <IonButton fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>

          <div className="edi-project">
            <IonItem>
              <IonLabel position="floating">Project Name</IonLabel>
              <IonInput
                required={true}
                value={projectDetail.name}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    name: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Project ID</IonLabel>
              <IonInput
                required={true}
                value={getSelectedProject().payload.projectId}
                onIonChange={(e) => {
                  setProjectDetail({
                    ...projectDetail,
                    projectId: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
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
              <IonLabel position="floating">Criteria</IonLabel>
              {projectDetail.criteria.map((row: any, i: any) => (
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput
                      display-timezone="utc"
                      value={row.name}
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Point</IonLabel>
                    <IonInput
                      display-timezone="utc"
                      value={row.point}
                    ></IonInput>
                  </IonItem>
                </IonList>
              ))}
            </IonItem>

            <IonItem>
              <IonLabel>Prizes</IonLabel>
              <PrizesComponent onPrizeChange={onPrizeChange} />
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
                console.log("submit", projectDetail);
                ledger.exercise(
                  ClientProject.AddUpdateClientProject,
                  getSelectedProject().contractId,
                  {
                    newDesc: projectDetail.desc,
                    newCriteria: { name: "Design", point: "0.0" },
                    newlocation: projectDetail.location,
                    newstartDate: projectDetail.startDate,
                    newendDate: projectDetail.endDate,
                    newrules: projectDetail.rules,
                    newtermsLink: projectDetail.termsLink,
                    newprivacyLink: projectDetail.privacyLink,
                    newprizes: projectDetail.prizes,
                    newProjectvideoLink: projectDetail.projectvideoLink,
                    neweligibility: projectDetail.eligibility,
                    newrequirements: projectDetail.requirements,
                  }
                );
              }}
            >
              Update Project
            </IonButton>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
export default EditProject;
