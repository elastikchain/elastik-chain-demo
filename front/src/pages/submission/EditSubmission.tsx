import {
    IonButton,
    IonButtons,
    IonList,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonTitle,
    IonMenu,
    IonTextarea,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonSplitPane,
    IonSearchbar,
    IonToolbar,
    IonCard,
    IonCardContent
  } from "@ionic/react";
  import React, { useState } from "react";
  import menuItemImg from "../../assets/img/img-menu-item.png";
  import { Link, RouteComponentProps } from "react-router-dom";
  import logo from "../../assets/img/logo-combination.png";
  import userImg from "../../assets/img/user.png";
  import {
    getSelectedSubmission,
    setSelectedSubmission,
  } from "../../context/SharedContext";
  import { arrowBack, add } from "ionicons/icons";
  import submissionPlaceHolder from "../../assets/img/img-proj-placeholder.png";
  import "./Submission.scss";
  import { useLedger, useStreamQueries } from "@daml/react";
  import {
    ClientProject,
    ParticipantSubmission,
    ParticipantSubmissionProposal,
  } from "@daml.js/cosmart-0.0.1/lib/Main";
  import {
    signOut,
    useUserDispatch,
    useUserState,
  } from "../../context/UserContext";
  import SubHeader from "../../components/Header/subheader";
  import Footer from "../../components/Footer/footer";
  import topbannerImg from "../../assets/img/topbanner-image.png";
  const EditSubmission = (props: RouteComponentProps) => {
    const [searchText, setSearchText] = useState("");
    const selectedSubmission = getSelectedSubmission();
   
    
    const user = useUserState();
    var userDispatch = useUserDispatch();
    const ledger = useLedger();
    const submission = useStreamQueries(ParticipantSubmission, () => [
        props.match.params,
    ]).contracts;

    const selectedProj = useStreamQueries(ClientProject, () => [
      { projectId: selectedSubmission.payload.projectId },
    ]).contracts;
    const getCurrentUserType = (): "" | "client" | "participant" | "judge" => {
      if ((user as any).party) {
        if (
          submission.filter((c) => c.payload.participant === (user as any).party)
            .length > 0
        ) {
          return "participant";
        }
        if (
          selectedProj.filter((c) => (user as any).party === c.payload.client)
            .length > 0
        ) {
          return "client";
        }
      }
      return "judge";
    };
    console.log("submission", props.match.params);
    console.log("selectedSubmission", submission);
    const defaultSubmission = {
        newDesc: selectedSubmission.payload.desc,
        newName:selectedSubmission.payload.name,
        newsubmission: selectedSubmission.payload.submission,
        newvideoLink: selectedSubmission.payload.videoLink,
        newpresentation: selectedSubmission.payload.presentation,
        newSteps: [],
    };
    const [submissionDetails,setSubmissionDetail] = useState(defaultSubmission);
    const handleEditSubmissionSubmit = (evnt:any)=>{
            ledger.exercise(ParticipantSubmission.UpdateSubmission,selectedSubmission.contractId,submissionDetails)
            .then((data:any)=>{
                alert("Successfully updated");
                const sumid = selectedSubmission.payload.submissionId;
                //selectedSubmission.contractId = data[0];
                //setSelectedSubmission(selectedSubmission);  
                props.history.goBack();
            })
            .catch((err:any)=>{

            });
    }
    const JudgingComponent = (judgingProps: any) => {
      const [criterias, setCriterias] = useState(
        getSelectedSubmission().payload.criteria as Array<{
          name: string;
          point: string;
        }>
      );
      return (
        <div>
          {criterias.map((c, idx) => (
            <IonItem>
              <IonLabel position="floating">{c.name}</IonLabel>
              <IonInput
                type="number"
                onIonChange={(e) => {
                  const cs = criterias;
                  cs[idx].point = e.detail.value!;
                  setCriterias(cs);
                }}
                value={Number(c.point)}
              ></IonInput>
            </IonItem>
          ))}
        </div>
      );
    };
  
    return (
      <IonPage>
        <SubHeader {...props} />
        <IonContent>
        <div className="content-container">
          <div className="image-heading-and-contant">
            <IonCard className="top-banner-details">
                <img
                  className="project-picture"
                  src={topbannerImg}
                  alt="project image"
                />
            
              <IonCardContent className="left-contant-details">
                <IonButton
                  className="go-back"
                  fill="clear"
                  onClick={(e) => props.history.goBack()}
                >
                  <IonIcon slot="start" icon={arrowBack}></IonIcon>
                  Back
                </IonButton>
                <h2>Category Type</h2>
                <p>
                  We feature amazing projects that would bring in next level
                  revolution in Fintech. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed vel leo suscipit, elementum metus vel,
                  tempus massa. Curabitur ac felis eu lorem congue pharetra
                </p>

                <h3>Partners</h3>
                <div className="partners-images d-flex">
                  <div className="images-partner-parent">
                    <img src={menuItemImg} />
                  </div>
                  <div className="images-partner-parent">
                    <img src={menuItemImg} />
                  </div>
                </div>
              </IonCardContent>
              {/*-- the main content --*/}
            
              <IonButton className="go-back2" fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>
                 <div className="wrapper">
                 

                  {/*--Edit Project-- */}
                  <div className="edit-project">
                    <h2>Edit Submission</h2>
           
         
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput
                required={true}
                value={submissionDetails.newName}
                onIonChange={(e) => {
                    setSubmissionDetail({
                    ...submissionDetails,
                    newName: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Submission</IonLabel>
              <IonInput
                required={true}
                value={submissionDetails.newsubmission}
                onIonChange={(e) => {
                    setSubmissionDetail({
                    ...submissionDetails,
                    newsubmission: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Video Link</IonLabel>
              <IonInput
                required={true}
                value={submissionDetails.newvideoLink}
                onIonChange={(e) => {
                    setSubmissionDetail({
                    ...submissionDetails,
                    newvideoLink: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Presentation</IonLabel>
              <IonInput
                required={true}
                value={submissionDetails.newpresentation}
                onIonChange={(e) => {
                    setSubmissionDetail({
                    ...submissionDetails,
                    newpresentation: e.detail.value!,
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Description</IonLabel>
              <IonTextarea
                required={true}
                value={submissionDetails.newDesc}
                onIonChange={(e) => {
                    setSubmissionDetail({
                    ...submissionDetails,
                    newDesc: e.detail.value!,
                  });
                }}
              ></IonTextarea>
            </IonItem>
          
            
            <IonButton
              className="submit-button"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleEditSubmissionSubmit(e)
                
              }}
            >
              Update Submission
            </IonButton>
          </div>
                </div>
           
          </IonCard>
          </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  export default EditSubmission;
  