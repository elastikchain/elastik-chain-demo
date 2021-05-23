import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonModal
} from "@ionic/react";
import {
  close,
 
} from "ionicons/icons";
import Alert from "../profile/alert";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  getSelectedSubmission,
} from "../../context/SharedContext";
import { arrowBack, add } from "ionicons/icons";
import submissionPlaceHolder from "../../assets/img/img-proj-placeholder.png";
import "./Submission.scss";
import { useLedger, useStreamQueries } from "@daml/react";
import {
  ClientProject,
  ParticipantSubmission,
} from "@daml.js/cosmart-0.0.1/lib/Main";
import {
  useUserState,
} from "../../context/UserContext";
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
const Submission = (props: RouteComponentProps) => {
  const selectedSubmission = getSelectedSubmission();
  
  const [showModal, setShowModal] = useState(false);
  const user = useUserState();
  const ledger = useLedger();
  const submission = useStreamQueries(ParticipantSubmission, () => [
    { submissionId: selectedSubmission.payload.submissionId },
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
  const [showAlert, setAlerts] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
  const validateEmail = (email: string) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  const [participantEmail,setParicipantEmail] = useState("");
  const handleJoinTeam = (evnt:any) =>{
    evnt.preventDefault();
    if (participantEmail) {
      if (validateEmail(participantEmail)) {
        ledger.exercise(
          ParticipantSubmission.ProposeTeammate,
          selectedSubmission.contractId,
          { email: participantEmail  }
        ).then((data:any)=>{
          setAlerts(true);
          setMessageText( "Teammate request has been sent successfully!");
          setMessageType("success");
         
        }).catch((err:any)=>{
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
        });
        setShowModal(false);
      } else {
          setAlerts(true);
          setMessageText( participantEmail  + " is not a valid email!");
          setMessageType("error");
       
      }
    }
  }
  return (
    <IonPage>
      <SubHeader {...props} />
      <Alert type={messageType} showAlert={showAlert} setAlerts={setAlerts} text={messageText} />
      <IonContent className="submission-content">
        <div className="content-container">
          <div className="submission-wrapper">
            <IonButton
              className="go-back"
              fill="clear"
              onClick={(e) => props.history.goBack()}
            >
              <IonIcon slot="start" icon={arrowBack}></IonIcon>
              Back
            </IonButton>

            <div className="breadcrumb-submission">
              <ul>
                <li>
                  <span>Projects</span>
                </li>
                <li>
                  <span>Fintech</span>
                </li>
                <li>
                  <span>{selectedSubmission.payload.name}</span>
                </li>
              </ul>
            </div>

            
            <div className="submission-info-container">
              <div className="submission-img">
                <img src={submissionPlaceHolder} alt="submission" />
              </div>
              <div className="short-info-container">
                <h1>{selectedSubmission.payload.name}</h1>
                <p>{selectedSubmission.payload.desc}</p>
                <h1>Other Details:</h1>

                <div className="lisitng-submission-details">
                  <p>
                    Presentation : <span>{selectedSubmission.payload.presentation}</span>
                  </p>
                 
                </div>

               
              </div>
            </div>
            <div className="idea-teammate-steps">
              <div className="idea-teammate">
                <div className="the-idea">
                  <h1>About the idea</h1>
                  <p>
                    {selectedSubmission.payload.submission}
                  </p>

                  <div className="video-list">
                  {selectedSubmission.payload.videoLink !== "" && 
                    <iframe
                      width="560"
                      height="315"
                      src={selectedSubmission.payload.videoLink}
                      title="YouTube video player"
                    ></iframe>
                      }
                  </div>
                </div>
                <div className="teammate">
                  <div className="d-flex align-items-center teammate-head">
                    <h1>Team</h1>
                    {getCurrentUserType() === "participant" &&
                    submission.length > 0 ? (
                      <IonFab>
                        <IonFabButton
                          onClick={async (e) => {
                            setShowModal(true)
                          }}
                        >
                          <IonIcon icon={add} />
                        </IonFabButton>
                      </IonFab>
                    ) : null}
                  </div>
                    {/*-- modal AddParticipantToProject --*/}
                <IonModal
                  isOpen={showModal}
                  onDidDismiss={() => setShowModal(false)}
                  cssClass="my-custom-class-team-mate"
                >
                  <div className="content create-project-modal-content">
                    <form onSubmit={handleJoinTeam}>
                      <h1>Add Team</h1>
                      <div className="flex-equal-childs-width">
                        <IonItem>
                          <IonLabel position="floating">
                            Participant Email
                          </IonLabel>

                          <IonInput
                            required={true}
                            value={participantEmail}
                            onIonChange={(e) => {
                              setParicipantEmail(
                                (e.detail.value! as unknown) as string
                              );
                            }}
                          ></IonInput>
                        </IonItem>
                      </div>
                      <IonButton
                        className="submit-button"
                        type="submit"
                        >
                        Add
                      </IonButton>
                    </form>
                  </div>
                  <IonButton
                    className="modal-default-close-btn"
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <IonIcon icon={close}></IonIcon>
                  </IonButton>
                </IonModal>
                  <div className="teammate-container">
                    {submission.map((c,index) => (
                      <div className="team-member" key={index}>
                        <img
                          src="https://via.placeholder.com/152x128.png"
                          alt="team member"
                        />
                        <p>{c.payload.participant}</p>
                      </div>
                    ))}
                    {submission.map((c) =>
                      c.payload.participants.map((p) => (
                        <div className="team-member">
                          <img
                            src="https://via.placeholder.com/152x128.png"
                            alt="team member item"
                          />
                          <p>{p}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="steps">
                <div className="steps-container">
                {selectedSubmission.payload.steps.map((obj:any,index:any)=>(
                  <div className="step">
                    
                    <div className="circle">
                      <p>{index}</p>
                    </div>
                    <p>STEP {index}:{obj} </p>
                  </div>
                ))}
                  
                
                  </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Submission;
