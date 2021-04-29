import {
  IonButton,
  IonButtons,
  IonList,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonToolbar,
  IonModal
} from "@ionic/react";
import {
  open,
  close,
 
} from "ionicons/icons";

import React, { useState } from "react";
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
const Submission = (props: RouteComponentProps) => {
  const [searchText, setSearchText] = useState("");
  const selectedSubmission = getSelectedSubmission();
  console.log("selectedSubmission", selectedSubmission);
  const [showModal, setShowModal] = useState(false);
  const user = useUserState();
  var userDispatch = useUserDispatch();
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
  const validateEmail = (email: string) =>{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  console.log("submission", submission);
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
          alert(
            "Teammate request has been sent successfully!"
          );
        }).catch((err:any)=>{
          alert(
            err
          );
        });
        setShowModal(false);
      } else {
       
        alert(  participantEmail  + " is not a valid email!");
      }
    }
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
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Fintech</a>
                </li>
                <li>
                  <a href="#">{selectedSubmission.payload.name}</a>
                </li>
              </ul>
            </div>

            {/* <div className="page-breadcrumb">
                    <IonList className="breadcrumbs">
                    <IonItem>
                            <IonLabel>Projects {'>'}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Fintech {'>'}</IonLabel>
                    </IonItem>
                    <IonItem className="active">
                        <IonLabel>{selectedSubmission.payload.name}</IonLabel>
                    </IonItem>
                    </IonList>
                </div> */}
            {/* <div className="nav-info-header">
                        <div className="nav-info">
                        <IonButton fill="clear" onClick={e => props.history.goBack() }>
                            <IonIcon slot="start" icon={arrowBack}></IonIcon>
                            Back
                        </IonButton>
                        </div>
                        {
                            getCurrentUserType() === 'judge' ? (
                                <JudgingComponent></JudgingComponent>
                            ) : (
                                <IonButton>
                                    Edit    
                                </IonButton>
                            )
                        }
                    </div> */}
            <div className="submission-info-container">
              <div className="submission-img">
                <img src={submissionPlaceHolder} alt="submission image" />
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

                {/* <IonList>
                           <IonItem>
                              <IonLabel>Challenge ID :- </IonLabel>
                              {selectedSubmission.payload.challengeId}
                          </IonItem> 
                          <IonItem>
                              <IonLabel>Submission :- </IonLabel>
                              {selectedSubmission.payload.submission}
                          </IonItem>
                          <IonItem>
                              <IonLabel>Presentation :- </IonLabel>
                              {selectedSubmission.payload.presentation}
                          </IonItem>
                          <IonItem>
                              <IonLabel>Video Link :-  </IonLabel>
                              {selectedSubmission.payload.videoLink}
                          </IonItem>
                        </IonList> */}
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
                  {selectedSubmission.payload.videoLink != "" && 
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
                    {submission.map((c) => (
                      <div className="team-member">
                        <img
                          src="https://via.placeholder.com/152x128.png"
                          alt="team member image"
                        />
                        <p>{c.payload.participant}</p>
                      </div>
                    ))}
                    {submission.map((c) =>
                      c.payload.participants.map((p) => (
                        <div className="team-member">
                          <img
                            src="https://via.placeholder.com/152x128.png"
                            alt="team member image"
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
