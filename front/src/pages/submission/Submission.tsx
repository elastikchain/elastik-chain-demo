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
} from "@ionic/react";
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
  console.log("submission", submission);

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
                  <p>
                  
                  operator: <span>{selectedSubmission.payload.operator}</span>
                  </p>
                  <p>
                    Presentation : <span>No</span>
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
                    What is the Idea about: Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed vel leo suscipit, elementum
                    metus vel, tempus massa. Curabitur ac felis eu lorem congue
                    pharetra. In ut felis lobortis, ultricies erat et,
                    scelerisque ligula. Suspendisse lectus nulla, venenatis quis
                    vulputate ac, fringilla a ex. Nullam gravida nunc sed purus
                    malesuada malesuada. Aliquam erat volutpat. Cras leo sapien,
                    tempor in accumsan vestibulum, laoreet eget arcu. Praesent
                    egestas suscipit lectus, sit amet dictum augue.
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
                            function validateEmail(email: string) {
                              const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                              return re.test(email);
                            }
                            const email = prompt("Enter the participant email");
                            if (email) {
                              if (validateEmail(email)) {
                                await ledger.exercise(
                                  ParticipantSubmission.ProposeTeammate,
                                  submission[0].contractId,
                                  { email }
                                );
                                alert(
                                  "Teammate request has been sent successfully!"
                                );
                              } else {
                                alert(email + " is not a valid email!");
                              }
                            }
                          }}
                        >
                          <IonIcon icon={add} />
                        </IonFabButton>
                      </IonFab>
                    ) : null}
                  </div>
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
                  <div className="step">
                    <div className="circle">
                      <p>1</p>
                    </div>
                    <p>STEP 1: Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                  <div className="step">
                    <div className="circle">
                      <p>2</p>
                    </div>
                    <p>STEP 2: Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                  <div className="step">
                    <div className="circle">
                      <p>3</p>
                    </div>
                    <p>STEP 3: Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="judges">
                          <h2>JUDGES ({selectedSubmission && selectedSubmission.payload.judges ? selectedSubmission.payload.judges.length : "0"})</h2>
                          <ul>
                            {
                              selectedSubmission && selectedSubmission.payload.judges.map((j:any)=> (
                                <li>
                                  <img src={userImg} />
                                  <span>
                                    <b>{j}</b>
                                    <i>
                                      Recruiting Senior Analyst / Accenture
                                      Technology
                                    </i>
                                  </span>
                                </li>
                              ))
                            }
                          </ul>
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
