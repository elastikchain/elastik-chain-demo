import {
    IonButton,
    IonContent,
    IonIcon,
    IonTextarea,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonCard,
    IonCardContent
  } from "@ionic/react";
  import React, { useState } from "react";
  import menuItemImg from "../../assets/img/img-menu-item.png";
  import {  RouteComponentProps } from "react-router-dom";
  import AddMore from "../../components/AddMore/AddMore";
  import {
    getSelectedSubmission,

  } from "../../context/SharedContext";
  import { arrowBack } from "ionicons/icons";
   import "./Submission.scss";
  import { useLedger, useStreamQueries } from "@daml/react";
  import {
     ParticipantSubmission
  } from "@daml.js/cosmart-0.0.1/lib/Main";
  import SubHeader from "../../components/Header/subheader";
  import Footer from "../../components/Footer/footer";
  import topbannerImg from "../../assets/img/topbanner-image.png";
  const EditSubmission = (props: RouteComponentProps) => {
    const selectedSubmission = getSelectedSubmission();
    const ledger = useLedger();
    const submission = useStreamQueries(ParticipantSubmission, () => [
        props.match.params,
    ]).contracts;
 
    console.log("submission", props.match.params);
    console.log("selectedSubmission", submission);
    const defaultSubmission = {
        newDesc: selectedSubmission.payload.desc,
        newName:selectedSubmission.payload.name,
        newsubmission: selectedSubmission.payload.submission,
        newvideoLink: selectedSubmission.payload.videoLink,
        newpresentation: selectedSubmission.payload.presentation,
        newSteps: selectedSubmission.payload.steps,
    };
    
    const defaultSteps:any = [];
    selectedSubmission.payload.steps.map((data:any)=>{
      defaultSteps.push({name:data,id:''});
    })
    const [submissionDetails,setSubmissionDetail] = useState(defaultSubmission);
    const handleEditSubmissionSubmit = (evnt:any)=>{
            ledger.exercise(ParticipantSubmission.UpdateSubmission,selectedSubmission.contractId,submissionDetails)
            .then((data:any)=>{
                alert("Successfully updated");
                //selectedSubmission.contractId = data[0];
                //setSelectedSubmission(selectedSubmission);  
                props.history.goBack();
            })
            .catch((err:any)=>{

            });
    }
      
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
                  alt="project"
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
                    <img src={menuItemImg}  alt="p log"/>
                  </div>
                  <div className="images-partner-parent">
                    <img src={menuItemImg}  alt=" icon "/>
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
            <div className="addmore-tags-container">
                        <IonLabel>Steps</IonLabel>
                        <AddMore
                          defaultTags={defaultSteps}
                          onChange={(tags) => {
                            const arrSteps = tags.map(
                              (t) =>
                                (t.name)
                            );
                            setSubmissionDetail({
                              ...submissionDetails,
                              newSteps: arrSteps,
                            });
                          }}
                        ></AddMore>
                      </div>
            
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
		    <Footer />
          </div>
        </IonContent>
      </IonPage>
    );
  };
  export default EditSubmission;
  