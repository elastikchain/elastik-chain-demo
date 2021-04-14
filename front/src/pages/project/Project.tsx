import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  signOut,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import {
  getSelectedProject,
  setSelectedSubmission,
} from "../../context/SharedContext";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonNote,
  IonPage,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTextarea,
  IonToolbar,
  IonList,
} from "@ionic/react";



import topbannerImg from "../../assets/img/topbanner-image.png";
import userImg from "../../assets/img/user.png";
import logo from "../../assets/img/logo-combination.png";
import {
  add,
  close,
  arrowBack,
  time,
  location,
  open,
  trash,
  pencil,
} from "ionicons/icons";
import "./Project.scss";
import { useLedger, useQuery, useStreamQueries } from "@daml/react";
import {
  AddChallenge,
  ClientProject,
  ClientRole,
  ParticipantSubmission,
  ProposeSubmission,
} from "@daml.js/cosmart-0.0.1/lib/Main";
import submissionPlaceHolder from '../../assets/img/img-proj-placeholder.png'
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
const Project = (props: RouteComponentProps) => {
  const user = useUserState();
  var userDispatch = useUserDispatch();
  const ledger = useLedger();
  console.log("getSelectedProject", getSelectedProject());

  const selectedProj = useStreamQueries(ClientProject, () => [
    { projectId: getSelectedProject().payload.projectId },
  ]).contracts;
  const submissions = useStreamQueries(ParticipantSubmission, () => [
    { client: getSelectedProject().payload.client },
  ]).contracts;
  const client = useStreamQueries(ClientRole).contracts;
  const getUserType = (): "" | "client" | "participant" | "judge" => {
    if (
      selectedProj.filter(
        (c) => c.payload.participants.indexOf((user as any).party) > -1
      ).length > 0
    ) {
      return "participant";
    }
    if (
      selectedProj.filter((c) => (user as any).party === c.payload.client)
        .length > 0
    ) {
      return "client";
    }

    return "";
  };

  const [searchText, setSearchText] = useState("");
  const [showChallengeModal, setShowChallengeModal] = useState(false);
 
  const [
    showDltChallenderConfirmation,
    deleteChallenderConfirmation,
  ] = useState({ status: false, challengeID: "", contractID: "" });
  const [challengeIdTouched, setChallengeIdTouched] = useState(false);
  const defaultChallengeDetail: AddChallenge = {
    challengeId: "",
    nameOf: "",
    description: "",
    prize: "",
  };
  const [challengeDetail, setChallengeDetail] = useState(
    defaultChallengeDetail
  );
  const [showedtChallengeToggle, editChallengeToggle] = useState(false);
  const resetCreateChallenge = () => {
    setChallengeDetail(defaultChallengeDetail);
    setChallengeIdTouched(false);
  };

  const handleChallengeSubmit = async (evt: any) => {
    evt.preventDefault();
    ledger
      .exercise(
        ClientProject.AddChallenge,
        selectedProj[0]!.contractId,
        challengeDetail
      )
      .then(() => {
        setShowChallengeModal(false);
        alert("Challenge Created Successfully!");
        // reset project detail info
        setTimeout(() => {
          resetCreateChallenge();
          setTimeout(() => {
            console.log("selectedProj this >>", selectedProj);
          }, 1000);
        }, 250);
      })
      .catch((err: any) => {
        setShowChallengeModal(false);
        alert("Error: " + JSON.stringify(err));
      });
  };

  const formattedDate = (dateStr: string) => {
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    };
    return new Date(dateStr).toLocaleDateString("en-US", dateTimeFormatOptions);
  };

  const [selectedChallengeId, setSelectedChallengeId] = useState(0);
  const [showCreateSubmissionModal, setShowCreateSubmissionModal] = useState({
    show: false,
    challengeId: "",
  } as { show: boolean; challengeId?: string });
  const ChallengeCompoenent = (props: any) => {
   /* console.log("Challenge For customer",props.challengeId);
    const stream = useQuery(
      Challenge,
      () => ({ challengeId: props.challengeId }),
      []
    );
    console.log(
      "Challenge get",
      stream,
      "challengeId: props.challengeId=",
      props.challengeId
    );
      
    if ((stream.contracts || []).length > 0) {
      return (
        <IonCard>
          <div className="d-flex" id="view-project">
            {showedtChallengeToggle != props.challengeId ? (
              <IonCardContent className="list-item-data">
                {console.log("Contacr", stream.contracts[0].payload)}

                <h1 className="proj-chall-name">
                  {stream.contracts[0].payload.nameOf}{" "}
                  <IonNote>Id: {props.challengeId}</IonNote>
                </h1>
                <h2 className="proj-chall-example">Dolor sit amet</h2>
                <p className="proj-chall-description">
                {stream.contracts[0].payload.description}
                </p>
                <p>Fund: ${stream.contracts[0].payload.prize}</p>
                
                {getUserType() === "participant" ? (
                  <IonButton
                    onClick={() => {
                      setSelectedChallengeId(props.challengeId);
                      setShowCreateSubmissionModal({
                        show: true,
                        challengeId: props.challengeId,
                      });
                    }}
                    className="create-project-button"
                  >
                    {" "}
                    Create New Submission{" "}
                  </IonButton>
                ) : null}
                <IonIcon
                  icon={pencil}
                  onClick={() => {
                    editChallengeToggle(props.challengeId);
                  }}
                ></IonIcon>

                <IonIcon
                  icon={trash}
                  onClick={() => {
                    deleteChallenderConfirmation({
                      status: true,
                      challengeID: props.challengeId,
                      contractID: stream.contracts[0].contractId,
                    });
                  }}
                ></IonIcon>
              </IonCardContent>
            ) : (
              <IonCardContent className="editClient-challenge">
                <IonButton
                  fill="clear"
                  onClick={() => {
                    editChallengeToggle(false);
                  }}
                >
                  <IonIcon slot="start" icon={arrowBack}></IonIcon>
                  Back
                </IonButton>
                <div className="edi-challenge">
                  <form onSubmit={handleChallengeSubmission}>
                    <IonItem>
                      <IonLabel position="floating">Challenge Name</IonLabel>
                      <IonInput
                        required={true}
                        value={stream.contracts[0].payload.nameOf}
                        name="challengeName"
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Challenge ID</IonLabel>
                      <IonInput
                        required={true}
                        value={props.challengeId}
                        name="challengeId"
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">
                        Challenge Description
                      </IonLabel>
                      <IonTextarea
                        required={true}
                        value={stream.contracts[0].payload.description}
                        name="challengeDesc"
                      ></IonTextarea>
                    </IonItem>

                    <IonItem>
                      <IonLabel position="floating">Challenge Price</IonLabel>
                     
                      <IonInput
                        required={true}
                        value={stream.contracts[0].contractId}
                        name="contractId"
                        className="hidden"
                      ></IonInput>
                      <IonInput
                        required={true}
                        value={stream.contracts[0].payload.prize}
                        name="challengePrize"
                      ></IonInput>
                    </IonItem>

                    <IonButton className="submit-button" type="submit">
                      Update Challenge
                    </IonButton>
                  </form>
                </div>
              </IonCardContent>
            )}
          </div>
        </IonCard>
      );
    } else return null;*/
  };

  const [selectedSegement, setSelectedSegement] = useState("submissions");

  const getChallengesIds = () => {
    return (
      (selectedProj && selectedProj.length > 0
        ? selectedProj[0]
        : { payload: {} }
      ).payload.challenges || []
    );
  };
  const deleteChallegeFromStorage = (challengeID: any, contractID: any) => {
    /*console.log(contractID);
    ledger
      .exercise(Challenge.RemoveChallenge, contractID, {
        comment: challengeID,
      })
      .then((data: any) => {
        console.log("Record Delete successfully");
        deleteChallenderConfirmation({
          status: false,
          challengeID: "",
          contractID: "",
        });
      })
      .catch((err: any) => console.log(err));*/
  };
  const handleChallengeSubmission = async (event: any) => {
  /*  event.preventDefault();
    ledger
      .exercise(
        Challenge.ModifieChallenge,
        event.target.elements.contractId.value,
        {
          newname: event.target.elements.challengeName.value,
          newprize: event.target.elements.challengePrize.value,
					newdescription: event.target.elements.challengeDesc.value,
        }
      )
      .then((data: any) => {
        editChallengeToggle(false);
      })
      .catch((err: any) => {
        editChallengeToggle(false);
      });
    console.log(event.target.elements.challengeName.value);*/
  };
 
  const SubmissionFormComponent = (props: any) => {
    const defaultSubmissionDetail: ProposeSubmission = {
        generalPublicParticipant: "",
        subName:"",
        subDesc:"",
        submission: "",
        videoLink: "",
        presentation: "",
    };
    const [submissionDetail, setSubmissionDetail] = useState(
      defaultSubmissionDetail
    );
    const resetCreateSubmission = () => {
      setSubmissionDetail(defaultSubmissionDetail);
    };
    const handleCreateSubmission = async (evt: any) => {
      evt.preventDefault();
     /* const dataToExercise = submissionDetail;
      dataToExercise.challengeId = String(selectedChallengeId || 0);
      ledger
        .exercise(
          ClientProject.ProposeSubmission,
          selectedProj[0].contractId,
          dataToExercise
        )
        .then(() => {
          setShowCreateSubmissionModal({ show: false });
          alert("Submission Created Successfully!");
          // reset project detail info
          setTimeout(() => {
            resetCreateSubmission();
          }, 250);
        })
        .catch((err: any) => {
          setShowCreateSubmissionModal({ show: false });
          alert("Error: " + JSON.stringify(err));
        });*/
    };
    return (
      <>
        <div className="content create-project-modal-content">
          <form onSubmit={handleCreateSubmission}>
            <h1>Propose Submission</h1>
            <IonItem>
              <IonLabel position="floating">Submission Name*</IonLabel>
              <IonInput
                required={true}
                value={submissionDetail.subName}
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    subName: e.detail.value!,
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Participant*</IonLabel>
              <IonInput
                required={true}
               
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Submission Description*</IonLabel>
              <IonInput
                required={true}
                value={submissionDetail.subDesc}
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    subDesc: e.detail.value!,
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Submission*</IonLabel>
              <IonInput
                required={true}
                value={submissionDetail.submission}
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    submission: e.detail.value!,
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Presentation*</IonLabel>
              <IonInput
                required={true}
                value={submissionDetail.presentation}
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    presentation: e.detail.value!,
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Video Link</IonLabel>
              <IonInput
                value={submissionDetail.videoLink}
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    videoLink: e.detail.value!,
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Challenge Id</IonLabel>
             {/*} <IonInput
                required={true}
                disabled={true}
                value={
                  submissionDetail.challengeId ||
                  showCreateSubmissionModal.challengeId
                }
                onIonChange={(e) =>
                  setSubmissionDetail({
                    ...submissionDetail,
                    challengeId: e.detail.value!,
                  })
                }
              ></IonInput> */}
            </IonItem>
            <IonButton className="submit-button" type="submit">
              Create
            </IonButton>
          </form>
        </div>
        <IonButton
          className="modal-default-close-btn"
          fill="clear"
          color="danger"
          onClick={() => {
            resetCreateSubmission();
            setShowCreateSubmissionModal({ show: false });
          }}
        >
          <IonIcon icon={close}></IonIcon>
        </IonButton>
      </>
    );
  };

  return (
    <IonPage>
     <SubHeader  {...props}/>
      <IonContent>

          <div className="image-heading-and-contant">
          

          <IonCard className="top-banner-details">

         <IonButton className="go-back" fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>

            <img
              className="project-picture"
              src={topbannerImg}
              alt="project image"
            />

            <IonCardContent className="left-contant-details">
              <h2>Category Type</h2>
              <p>
                We feature amazing projects that would bring in next level revolution in Fintech. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed vel leo suscipit, elementum metus vel, tempus massa. Curabitur ac felis eu lorem congue pharetra 
             
              </p>

              <h3>Partners</h3>
                <div className="partners-images d-flex">
                  <div className="images-partner-parent"><img src={getSelectedProject().payload.pictureUrl} /></div>
                  <div className="images-partner-parent"><img src={getSelectedProject().payload.pictureUrl} /></div>
                </div>
            </IonCardContent>
            {/* <IonCardContent>
              <div className="d-flex align-items-center justify-content-space-between">
                <IonLabel>
                  <div className="d-flex align-items-center">
                    <IonIcon
                      className="m-right"
                      slot="start"
                      icon={time}
                    ></IonIcon>
                    <span>
                      From:{" "}
                      {formattedDate(getSelectedProject().payload.startDate)},
                      to : {formattedDate(getSelectedProject().payload.endDate)}
                    </span>
                  </div>
                </IonLabel>
                <IonLabel>
                  <div className="d-flex align-items-center">
                    <IonIcon className="m-right" icon={location}></IonIcon>
                    {getSelectedProject().payload.location}
                  </div>
                </IonLabel>
                <IonButton>
                  <IonIcon slot="start" icon={open}></IonIcon>
                  Event WebSite
                </IonButton>
              </div>
            </IonCardContent> */}
          </IonCard>
          </div>

        <div className="proj-wrapper">
        <div className="edtion_main_section">
        <div className="content_part">
          <div className="top-part-contant">
            <div className="tabs-section">
              <div className="tabs-heading"><a href="#" className="tabs-contant">1. Overview</a></div>
              <div className="tabs-heading"><a href="#" className="tabs-contant">2. Challenges</a></div>
              <div className="tabs-heading"><a href="#" className="tabs-contant">3. Submissions</a></div>
            </div>
          </div>

         
          <div className="all-details-part project-overview">
          <h1>
              {getSelectedProject().payload.name}{" "}
              {/* <IonNote>Id: {getSelectedProject().payload.projectId}</IonNote> */}
            </h1>
            <p>{getSelectedProject().payload.desc}</p>
            <div className="video-list">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/63qyVXWE9Kw" title="YouTube video player" ></iframe>
            </div>

            <div className="">
              <p>
                We are excited to host this hackathon focusing on the Banking Revolution.
                </p>
                <p>
                Banking is currently one of the most innovative industries in technology and we want to see how YOU can use your skills to explore bringing further innovation to this exciting industry! People use their bank several times a day, they enable us to make some of the biggest and smallest decisions in our lives. 
                </p>
                <p>
                The Banking Revolution refers to areas of transformation that could drastically change the way a bank operates internally for its employees or externally for its consumers. Some examples of these innovations include blockchain, FinTech, revolutionising banking apps, client interaction and customer service improvements. 
                </p>
                <p>
                Over 24 hours your challenge is to build a working prototype for the banking industry. What you choose to do, is up to you! The hackathon will conclude with teams presenting their ideas, followed by a cocktail-style celebration. 
                </p>
                <p>
                We will have a team of our experts available for you to bounce ideas off, and offer some moral support.
                </p>
                <p>
                If you would like to know more about the type of work Accenture is involved within FinTech, checkout our Banking Technology Vision 2019 report or find out more about current banking trends on our Fintech blog.
                </p>
                <p>
                Keen to get involved? Then why not get a team together and register today. Sign up here before the 18th of November. Teams are selected on a first-come, first-serve basis.
              </p>
            </div>

            <div className="prizes-part">
              <h2>PRIZES</h2>
              <h5><b>$10,000</b> in prizes</h5>
              <div className="prize_list">
                <div className="">
                  <h3><span>*</span> First Prize</h3>
                  <p>A Macbook Pro 13 Inch (1.4GHz quad-core processor, 128GB storage, Touch Bar and Touch ID) for each person in the first-place team.</p>
                </div>
                <div className="">
                  <h3><span>*</span> First Prize</h3>
                  <p>A Macbook Pro 13 Inch (1.4GHz quad-core processor, 128GB storage, Touch Bar and Touch ID) for each person in the first-place team.</p>
                </div>
                <div className="">
                  <h3><span>*</span> First Prize</h3>
                  <p>A Macbook Pro 13 Inch (1.4GHz quad-core processor, 128GB storage, Touch Bar and Touch ID) for each person in the first-place team.</p>
                </div>
              </div>
            </div>


            <div className="list_inner">
              <h2>ELIGIBILITY</h2>
              <p>
              To be qualified to participate in this hackathon, you must meet the following requirements:
                </p>
                <ul>
                  <li>You must be a current university student.</li>
                  <li>Teams must consist of 2–4 members.</li>
                  <li>By participating in the hackathon, you consent to your image being used in any promotional or media material for Accenture.</li>
                  <li>You cannot be a current employee of Accenture</li>
                  <li>You must be an Australian or New Zealand Citizen, or an Australian Permanent Resident.</li>
                  <li>You must sign up&nbsp;<a href="https://forms.gle/HRYzsNQVBW3zBRxa7">here</a> before the 18th of November.</li>
                </ul>
            </div>

            <div className="list_inner">
              <h2>REQUIREMENTS</h2>
              <p>
              Below are the submission requirements for the hackathon. 
                </p>
                <ul>
                  <li>At the end of the time period, a working demo and presentation must be ready for the judges.</li>
                  <li>All code must be uploaded by the end of the time period to some code repository (such as GitHub). Any submission or adjustment after this time will not be considered.</li>
                  <li>Presentations will be 7 minutes long, with an additional 3 minutes for questions from the judges.</li>
                  <li>Links for submissions will be provided as we arrive closer to the date.</li>
                </ul>
            </div>

            <div className="judges">
              <h2>JUDGES</h2>
                <ul>
                  <li><img src={userImg}/><span><b>Mantri Boange</b><i>Recruiting Senior Analyst / Accenture Technology</i></span></li>
                  <li><img src={userImg}/><span><b>Mantri Boange</b><i>Recruiting Senior Analyst / Accenture Technology</i></span></li>
                  <li><img src={userImg}/><span><b>Mantri Boange</b><i>Recruiting Senior Analyst / Accenture Technology</i></span></li>
                  <li><img src={userImg}/><span><b>Mantri Boange</b><i>Recruiting Senior Analyst / Accenture Technology</i></span></li>
                </ul>
            </div>
            <div className="list_inner judging_criteria">
              <h2>JUDGING CRITERIA</h2>
                <ul>
                  <li><b>Presentation Quality</b></li>
                  <li><b>Banking Revolution Relevance</b></li>
                  <li><b>Quality of Application Execution</b></li>
                  <li><b>Business Value</b></li>
                </ul>
            </div>
          </div>
          <div className="challenge-item-list">
              Project Challenge
            </div>
          <div className="submission-item-list">
          { submissions.map((sc) => (
                    <IonCard
                      className="submission-card"
                      onClick={(e) => {
                        e.preventDefault();
                        const selectedSub = sc as any;
                        selectedSub.payload.projectId = getSelectedProject().payload.projectId;
                        setSelectedSubmission(selectedSub);
                        props.history.push(
                          "/main/submission/" + sc.payload.submissionId
                        );
                      }}
                    >
                      <div className="d-flex">
                      <div className="submission-img">
                            <img src={submissionPlaceHolder} alt="submission image"/>
                        </div>
                        <IonCardContent>
                          <h1 className="proj-chall-name">
                            {sc.payload.name}
                          </h1>
                          <h2 className="proj-chall-example"> {sc.payload.submissionId}</h2>
                          <p className="proj-chall-description">
                            {sc.payload.desc}
                          </p>
                        
                        <IonList>
                          <IonItem>
                              <div className="labels-submission">Challenge ID : </div>
                              <span></span>ID
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Submission : </div>
                              {sc.payload.submission}
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Presentation : </div>
                              {sc.payload.presentation}
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Video Link : </div>
                              {sc.payload.videoLink}
                          </IonItem>
                        </IonList>
                        </IonCardContent>
                      </div>
                    </IonCard>
                  ))}

          </div>
          <IonNote>
            Judging criteria:{" "}
            {getSelectedProject()
              .payload.criteria.map((c: any) => c.name)
              .join(", ")}
          </IonNote>
          {
            <div className="text-align-start">
              <div className="pos-relative">
                <IonSegment
                  className="justify-content-start"
                  color="secondary"
                  onIonChange={(e) => setSelectedSegement(e.detail.value!)}
                  value={selectedSegement}
                >
                  <IonSegmentButton value="submissions">
                    <IonLabel>Submissions ({submissions.length})</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton
                    value="challenges"
                    disabled={getChallengesIds().length < 1}
                  >
                    <IonLabel>
                       Challenges ({getChallengesIds().length})
                    </IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              
                {getUserType() === "client" ? (
                  <div className="icon-menu">
                  <IonFab vertical="top" horizontal="end" title="Add new Challenge"> 
                    <IonFabButton title="Add new Challenge" onClick={(e) => setShowChallengeModal(true)}>
                      <IonIcon icon={add} />
                    </IonFabButton>
                  </IonFab>
                  {/*<IonFab className="submittionadd-btn" title="Add new Submission" vertical="top" horizontal="end">
                  <IonFabButton title="Add new Submission" onClick={(e) => setShowCreateSubmissionModal({show:true})}>
                    <IonIcon icon={add}/> 
                  </IonFabButton>
                </IonFab>*/}
                </div>
                ) : null}
              </div>
             
              {selectedSegement === "challenges"
                ? getChallengesIds().map((c) => (
                    <IonList></IonList>
                  ))
                : submissions.map((sc) => (
                    <IonCard
                      className="submission-card"
                      onClick={(e) => {
                        e.preventDefault();
                        const selectedSub = sc as any;
                        selectedSub.payload.projectId = getSelectedProject().payload.projectId;
                        setSelectedSubmission(selectedSub);
                        props.history.push(
                          "/main/submission/" + sc.payload.submissionId
                        );
                      }}
                    >
                      <div className="d-flex">
                      <div className="submission-img">
                            <img src={submissionPlaceHolder} alt="submission image"/>
                        </div>
                        <IonCardContent>
                          <h1 className="proj-chall-name">
                            {sc.payload.name}
                          </h1>
                          <h2 className="proj-chall-example"> {sc.payload.submissionId}</h2>
                          <p className="proj-chall-description">
                            {sc.payload.desc}
                          </p>
                        
                        <IonList>
                          <IonItem>
                              <div className="labels-submission">Challenge ID : </div>
                              <span></span>ID
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Submission : </div>
                              {sc.payload.submission}
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Presentation : </div>
                              {sc.payload.presentation}
                          </IonItem>
                          <IonItem>
                              <div className="labels-submission">Video Link : </div>
                              {sc.payload.videoLink}
                          </IonItem>
                        </IonList>
                        </IonCardContent>
                      </div>
                    </IonCard>
                  ))}
            </div>
          }
          </div>
          <div className="edtion_sidebar">
           <div className="card-for-btn new-submission">
               <a> <IonIcon icon={add}></IonIcon> Create new Submission</a>
            </div>  
            <div className="card-for-btn new-project">
               <a> <IonIcon icon={add}></IonIcon> Create new Challenge</a>
            </div>

            <div className="card-for-btn join-participant">
               <a> <IonIcon icon={add}></IonIcon> Join as a Participant</a>
            </div>
       
            <div className="edtion_child">
            <div className="winner_announc">
              <span>Winners announced soon<b>Dec 1, 2019</b></span>
              <a href="#">View schedule</a>
            </div>
            <div className="iconlist_sidebar">
              <ul>
                <li><a href="#"><i></i>Accenture - Melbourne</a></li>
                <li><i></i>Public</li>
                <li><i></i><b>$10,000</b> in prizes</li>
                <li><i></i><b>128</b> participants</li>
                </ul>
            </div>
          </div>
          </div>
          </div>
        </div>
        {/*-- Delete Project confirmation showDltChallenderConfirmation --*/}
        <IonModal
          isOpen={showDltChallenderConfirmation.status}
          onDidDismiss={() =>
            deleteChallenderConfirmation({
              status: false,
              challengeID: "",
              contractID: "",
            })
          }
          cssClass="my-custom-class-trash trash-popup"
        >
          <div className="content trash-project-modal-content">
            <h1>Are you sure !</h1>
            <IonButton
              className="confirm-submit-button"
              type="button"
              onClick={() => {
                deleteChallegeFromStorage(
                  showDltChallenderConfirmation.challengeID,
                  showDltChallenderConfirmation.contractID
                );
              }}
            >
              Yes
            </IonButton>
            <IonButton
              className="decline-submit-button"
              type="button"
              onClick={() => {
                deleteChallenderConfirmation({
                  status: false,
                  challengeID: "",
                  contractID: "",
                });
              }}
            >
              No
            </IonButton>
          </div>
          <IonButton
            className="modal-default-close-btn"
            fill="clear"
            color="danger"
            onClick={() => {
              deleteChallenderConfirmation({
                status: false,
                challengeID: "",
                contractID: "",
              });
            }}
          >
            <IonIcon icon={close}></IonIcon>
          </IonButton>
        </IonModal>
         {/*-- Challenge Model */}
        <IonModal
          isOpen={showChallengeModal}
          onDidDismiss={() => setShowChallengeModal(false)}
          cssClass="my-custom-class"
        >
          <div className="content challenge-modal-content">
            <h1>Create Challenge</h1>
            <form onSubmit={handleChallengeSubmit}>
              <div className="flex-equal-childs-width">
                <IonItem>
                  <IonLabel position="floating">Challenge Name</IonLabel>
                  <IonInput
                    required={true}
                    value={challengeDetail.nameOf}
                    onIonChange={(e) => {
                      let id = challengeDetail.challengeId;
                      if (!challengeIdTouched) {
                        const d = new Date();
                        id =
                          e.detail.value!.replace(/\W/g, "_") +
                          "_" +
                          (d.getSeconds() +
                            d.getMinutes() +
                            d.getMilliseconds());
                        id = id.toLowerCase();
                      }
                      setChallengeDetail({
                        ...challengeDetail,
                        nameOf: e.detail.value!,
                        challengeId: id,
                      });
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Challenge ID</IonLabel>
                  <IonInput
                    required={true}
                    value={challengeDetail.challengeId}
                    onFocus={(e) => {
                      setChallengeIdTouched(true);
                    }}
                    onIonChange={(e) => {
                      setChallengeDetail({
                        ...challengeDetail,
                        challengeId: e.detail.value!,
                      });
                    }}
                  ></IonInput>
                </IonItem>
              </div>
              <IonItem>
                <IonLabel position="floating">Challenge Description</IonLabel>
                <IonTextarea
                  rows={2}
                  value={challengeDetail.description}
                  onIonChange={(e) =>
                    setChallengeDetail({
                      ...challengeDetail,
                      description: e.detail.value!,
                    })
                  }
                ></IonTextarea>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Challenge Prize</IonLabel>
                <IonInput
                  required={true}
                  type="number"
                  value={challengeDetail.prize}
                  onIonChange={(e) =>
                    setChallengeDetail({
                      ...challengeDetail,
                      prize: e.detail.value!,
                    })
                  }
                ></IonInput>
              </IonItem>
              <IonButton className="submit-button" type="submit">
                Create
              </IonButton>
            </form>
            <IonButton
              className="modal-default-close-btn"
              fill="clear"
              color="danger"
              onClick={() => {
                setShowChallengeModal(false);
              }}
            >
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </div>
        </IonModal>
        <IonModal
          isOpen={showCreateSubmissionModal.show}
          onDidDismiss={() => setShowCreateSubmissionModal({ show: false })}
          cssClass="my-custom-class"
        >
          <SubmissionFormComponent></SubmissionFormComponent>
        </IonModal>
      </IonContent>
      
    </IonPage>
  );
};
export default Project;
