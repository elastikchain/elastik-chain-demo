import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useUserDispatch, useUserState } from "../../context/UserContext";

import {
  getSelectedProject,
  setSelectedSubmission,
} from "../../context/SharedContext";

import Tabs from "../../components/Tabs";
import Tab from "../../components/Tabs/Tab";

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
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
import "./Project.scss";
import { useLedger, useQuery, useStreamQueries } from "@daml/react";

import {
  AddChallenge,
  ClientProject,
  ClientRole,
  ParticipantSubmission,
  ProposeSubmission,
  ParticipantSubmissionProposal,
  AcceptSubmission,
} from "@daml.js/cosmart-0.0.1/lib/Main";

import submissionPlaceHolder from "../../assets/img/img-proj-placeholder.png";
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
  const participantSubmissionProposalAssets = useStreamQueries(
    ParticipantSubmissionProposal,
    () => [{ projectId: getSelectedProject().payload.projectId }]
  ).contracts;
  const [challengeDetail, setChallengeDetail] = useState(
    defaultChallengeDetail
  );
  const [showedtChallengeToggle, editChallengeToggle] = useState(false);
  const resetCreateChallenge = () => {
    setChallengeDetail(defaultChallengeDetail);
    setChallengeIdTouched(false);
  };

  const acceptSubmission = (contractId: any) => {
    ledger
      .exercise(
        ParticipantSubmissionProposal.AcceptSubmission,
        contractId,
        {submissionId: ""}
      ).then(data=> console.log("accepted"))
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
  const parseVideoLink = (videoLink: string) => {
    let res = videoLink;
    if(!res) res = "https://www.youtube.com/embed/IQHk9UCbQq4";
    if(!res.startsWith("http")) res = "http://"+res;
    if((res.indexOf("youtube") > -1 || res.indexOf("youtu.be") > -1) && res.indexOf("/embed") < 0){
      const arr = res.split(".com/");
      res = arr[0] + ".com/embed" + arr[1];
    }
    return res;
  }
  const SubmissionFormComponent = (props: any) => {
    const defaultSubmissionDetail: ProposeSubmission = {
      generalPublicParticipant: (user as any).party,
      subName: "",
      subDesc: "",
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
      const dataToExercise = submissionDetail;
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
        });
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
        <p className="subm-message">
          You can add more details to your submission after it is approved.
        </p>
      </>
    );
  };

  return (
    <IonPage>
      <SubHeader {...props} />
      <IonContent>
        <div className="content-container">
          <div className="image-heading-and-contant">
            <IonCard className="top-banner-details">
              {getSelectedProject() &&
              getSelectedProject().payload.pictureUrl != "" ? (
                <img
                  className="project-picture"
                  src={getSelectedProject().payload.pictureUrl}
                  alt="project image"
                />
              ) : (
                <img
                  className="project-picture"
                  src={topbannerImg}
                  alt="project image"
                />
              )}

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
                    <img src={getSelectedProject().payload.pictureUrl} />
                  </div>
                  <div className="images-partner-parent">
                    <img src={getSelectedProject().payload.pictureUrl} />
                  </div>
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
                {/* <div className="top-part-contant">
                <div className="tabs-section">
                  <div className="tabs-heading">
                    <a href="#" className="tabs-contant">
                      1. Overview
                    </a>
                  </div>
                  <div className="tabs-heading">
                    <a href="#" className="tabs-contant">
                      2. Challenges
                    </a>
                  </div>
                  <div className="tabs-heading">
                    <a href="#" className="tabs-contant">
                      3. Submissions
                    </a>
                  </div>
                </div>
              </div>
               */}

                <div className="top-part-contant">
                  <Tabs className="tabs-section">
                    <Tab title="1. Overview" className="tabs-contant">
                      <div className="all-details-part project-overview">
                        <h1>
                          {getSelectedProject().payload.name}{" "}
                          {/* <IonNote>Id: {getSelectedProject().payload.projectId}</IonNote> */}
                        </h1>
                        
                        <div className="video-list">
                          <iframe
                            width="560"
                            height="315"
                            src={parseVideoLink(getSelectedProject().payload.projectvideoLink)}
                            title="YouTube video player"
                          ></iframe>
                        </div>

                        <p>{getSelectedProject().payload.desc}</p>

                        <div className="prizes-part">
                          <h2>PRIZES</h2>
                          {/* <h5>
                            <b>$10,000</b> in prizes
                          </h5> */}
                          <div className="prize_list">

                            {selectedProj[0] && selectedProj[0].payload.prizes.map(k=>(
                              <div className="">
                              <h3>
                                <span>*</span> {k.value}{k.currency} {k.name}
                              </h3>
                              <p>
                                {k.description}
                              </p>
                            </div>
                            
                            ))}
                          </div>
                        </div>

                        <div className="list_inner">
                          <h2>ELIGIBILITY</h2>
                          <p>
                            To be qualified to participate in this hackathon,
                            you must meet the following requirements:
                          </p>
                          <ul>
                            <li>You must be a current university student.</li>
                            <li>Teams must consist of 2–4 members.</li>
                            <li>
                              By participating in the hackathon, you consent to
                              your image being used in any promotional or media
                              material for Accenture.
                            </li>
                            <li>
                              You cannot be a current employee of Accenture
                            </li>
                            <li>
                              You must be an Australian or New Zealand Citizen,
                              or an Australian Permanent Resident.
                            </li>
                            <li>
                              You must sign up&nbsp;
                              <a href="https://forms.gle/HRYzsNQVBW3zBRxa7">
                                here
                              </a>{" "}
                              before the 18th of November.
                            </li>
                          </ul>
                        </div>

                        <div className="list_inner">
                          <h2>REQUIREMENTS</h2>
                          <p>
                            Below are the submission requirements for the
                            hackathon.
                          </p>
                          <ul>
                            <li>
                              At the end of the time period, a working demo and
                              presentation must be ready for the judges.
                            </li>
                            <li>
                              All code must be uploaded by the end of the time
                              period to some code repository (such as GitHub).
                              Any submission or adjustment after this time will
                              not be considered.
                            </li>
                            <li>
                              Presentations will be 7 minutes long, with an
                              additional 3 minutes for questions from the
                              judges.
                            </li>
                            <li>
                              Links for submissions will be provided as we
                              arrive closer to the date.
                            </li>
                          </ul>
                        </div>

                        <div className="judges">
                          <h2>JUDGES ({selectedProj[0] && selectedProj[0].payload.judges ? selectedProj[0].payload.judges.length : "0"})</h2>
                          <ul>
                            {
                              selectedProj[0] && selectedProj[0].payload.judges.map(j => (
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
                        <div className="list_inner judging_criteria">
                          <h2>JUDGING CRITERIA</h2>
                          <ul>
                            <li>Presentation Quality</li>
                            <li>Banking Revolution Relevance</li>
                            <li>Quality of Application Execution</li>
                            <li>Business Value</li>
                          </ul>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="2. Challanges (6)" className="tabs-contant">
                    {selectedProj[0] ? selectedProj[0].payload.challenges.map(key => 
                      (
                        <div className="challanges-listing">
                          <div className="chanlanges-titles">
                            <div>
                                <h1>{key.nameOf}</h1>
                                <p>{key.description}</p>
                              </div>
                          </div>
                        </div>
                      )
                    ) : null}
                      <div className="challanges-listing">
                        <div className="logo-challanges">
                          {/* <img src={getSelectedProject().p.pictureUrl} /> */}
                        </div>
                        <div className="chanlanges-titles">
                          <h1>What is lorem ipsum ?</h1>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed vel leo suscipit, Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed vel leo
                            suscipit, Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel leo suscipit,
                          </p>
                          <div className="amount-main">
                            <h1 className="highlight-amount">
                              {" "}
                              <span>Fund</span> $30
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className="challanges-listing">
                        <div className="logo-challanges">
                          <img src={getSelectedProject().payload.pictureUrl} />
                        </div>
                        <div className="chanlanges-titles">
                          <h1>What is lorem ipsum ?</h1>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed vel leo suscipit, Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed vel leo
                            suscipit, Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel leo suscipit,
                          </p>
                          <div className="amount-main">
                            <h1 className="highlight-amount">
                              {" "}
                              <span>Fund</span> $30
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="3. Submissions (5)" className="tabs-contant">
                      <div className="submission-item-list">
                        {console.log(
                          "participantSubmissionProposalAssets",
                          participantSubmissionProposalAssets
                        )}
                        {participantSubmissionProposalAssets.map((sbmt) => (
                          <div className="submission-listing">
                            <div className="left-image-submission">
                              <img src={topbannerImg} alt="project image" />
                            </div>
                            <div className="right-contant-submission">
                              <h1>{sbmt.payload.subName}</h1>
                              <p>
                                {sbmt.payload.subDesc}
                              </p>
                          {console.log("data here", sbmt)}
                              {/* <ul>
                                <li>
                                  Milestones Achieved: <span> 3/5 </span>{" "}
                                </li>
                                <li>
                                  Fund: <span>2000 Euros </span>
                                </li>
                                <li>
                                  Total Votes: <span> 200 Votes </span>
                                </li>
                              </ul> */}

                              <div className="sponsors-challenge">
                                {getUserType() === "judge" && (
                                  <div className="submit-your-score">
                                    <input
                                      type="number"
                                      name="submissionscore"
                                    />
                                    <a
                                      href="javascript:void 0"
                                      className="btn view-details-btn"
                                    >
                                      Submit Score
                                    </a>
                                  </div>
                                )}
                                <a
                                  href="javascript:void 0"
                                  className="btn view-details-btn"
                                  onClick={(e) => {
                                    props.history.push(
                                      "/main/submission/" +
                                        getSelectedProject().payload.projectId
                                    );
                                  }}
                                >
                                  View details
                                </a>{" "}
                                &nbsp;
                                {getUserType() === "client" && (
                                  <IonButton onClick={(e)=>{acceptSubmission(sbmt.contractId)}}
                                    className="btn view-details-btn"
                                  >
                                    Accept Submission
                                  </IonButton>
                                )}
                                {/* <div className="sponsors-main">
                                        <h4>Sponsors : </h4>
                                        <img src={topbannerImg} alt="project image" />
                                      </div>
                                      <div className="challengers-main">
                                        <h4>Challenge : </h4>
                                        <img src={topbannerImg} alt="project image"/>
                                      </div> */}
                              </div>
                            </div>
                          </div>
                        ))}

                        {console.log(
                          "submissions",
                          participantSubmissionProposalAssets
                        )}
                        {submissions.map((sc) => (
                          <IonCard
                            className="submission-card"
                            onClick={(e) => {
                              e.preventDefault();
                              const selectedSub = sc as any;
                              selectedSub.payload.projectId = getSelectedProject().payload.projectId;
                              setSelectedSubmission(selectedSub);
                              props.history.push(
                                "/main/submission/" + sc.payload.name
                              );
                            }}
                          >
                            <div className="d-flex">
                              <div className="submission-img">
                                <img
                                  src={submissionPlaceHolder}
                                  alt="submission image"
                                />
                              </div>
                              <IonCardContent>
                                <h1 className="proj-chall-name">
                                  {sc.payload.name}
                                </h1>
                                <h2 className="proj-chall-example">
                                  {" "}
                                  {sc.payload.submissionId}
                                </h2>
                                <p className="proj-chall-description">
                                  {sc.payload.desc}
                                </p>

                                {/* <IonList>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Challenge ID :{" "}
                                    </div>
                                    <span></span>ID
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Submission :{" "}
                                    </div>
                                    {sc.payload.submission}
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Presentation :{" "}
                                    </div>
                                    {sc.payload.presentation}
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Video Link :{" "}
                                    </div>
                                    {sc.payload.videoLink}
                                  </IonItem>
                                </IonList>
                                */}
                              </IonCardContent> 
                            </div>
                          </IonCard>
                        ))}
                      </div>
                    </Tab>
                    <Tab title="Judging criteria" className="tabs-contant">
                      {/* <IonNote>
                      Judging criteria:{" "}
                      {getSelectedProject()
                        .payload.criteria.map((c: any) => c.name)
                        .join(", ")}
                    </IonNote> */}

                      <div className="list_inner judging_criteria">
                        <h2>JUDGING CRITERIA</h2>
                        <ul>
                          <li>Presentation Quality</li>
                          <li>Banking Revolution Relevance</li>
                          <li>Quality of Application Execution</li>
                          <li>Business Value</li>
                          <li>Presentation Quality</li>
                          <li>Banking Revolution Relevance</li>
                          <li>Quality of Application Execution</li>
                          <li>Business Value</li>
                          <li>Presentation Quality</li>
                          <li>Banking Revolution Relevance</li>
                          <li>Quality of Application Execution</li>
                          <li>Business Value</li>
                        </ul>
                      </div>
                    </Tab>
                  </Tabs>
                </div>

                {
                  <div className="text-align-start">
                    <div className="pos-relative">
                      <IonSegment
                        className="justify-content-start"
                        color="secondary"
                        onIonChange={(e) =>
                          setSelectedSegement(e.detail.value!)
                        }
                        value={selectedSegement}
                      >
                        <IonSegmentButton value="submissions">
                          <IonLabel>
                            Submissions ({submissions.length})
                          </IonLabel>
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
                          {/* <IonFab
                          vertical="top"
                          horizontal="end"
                          title="Add new Challenge"
                        >
                          <IonFabButton
                            title="Add new Challenge"
                            onClick={(e) => setShowChallengeModal(true)}
                          >
                            <IonIcon icon={add} />
                          </IonFabButton>
                        </IonFab> */}
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
                          <div>
                            {/* <ChallengeCompoenent challengeId={c}></ChallengeCompoenent> */}
                            {selectedProj[0] && (
                            <div>{selectedProj[0].payload.challenges}</div>)}
                          </div>
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
                                <img
                                  src={submissionPlaceHolder}
                                  alt="submission image"
                                />
                              </div>
                              <IonCardContent>
                                <h1 className="proj-chall-name">
                                  {sc.payload.name}
                                </h1>
                                <h2 className="proj-chall-example">
                                  {" "}
                                  {sc.payload.submissionId}
                                </h2>
                                <p className="proj-chall-description">
                                  {sc.payload.desc}
                                </p>

                                <IonList>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Challenge ID :{" "}
                                    </div>
                                    <span></span>ID
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Submission :{" "}
                                    </div>
                                    {sc.payload.submission}
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Presentation :{" "}
                                    </div>
                                    {sc.payload.presentation}
                                  </IonItem>
                                  <IonItem>
                                    <div className="labels-submission">
                                      Video Link :{" "}
                                    </div>
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
                {(getUserType() === "" || getUserType() === "participant") && (
                  <div>
                    <div className="card-for-btn join-participant">
                      <IonButton
                        onClick={(e) =>
                          setShowCreateSubmissionModal({
                            show: true,
                            challengeId: "",
                          })
                        }
                      >
                        <IonIcon icon={add}></IonIcon>
                        <IonLabel>Create new Submission</IonLabel>
                      </IonButton>
                    </div>

                    <div className="card-for-btn join-participant">
                      <IonButton onClick={(e) => {}}>
                        <IonIcon icon={add}></IonIcon>
                        <IonLabel>Join as a Participant</IonLabel>
                      </IonButton>
                    </div>
                  </div>
                )}
                {getUserType() === "client" && (
                  <div className="card-for-btn join-participant">
                    <IonButton onClick={(e) => setShowChallengeModal(true)}>
                      <IonIcon icon={add}></IonIcon>
                      <IonLabel>Create new Challenge</IonLabel>
                    </IonButton>
                  </div>
                )}
                <div className="edtion_child">
                  <div className="winner_announc">
                    <span>
                      Winners announced<b>{selectedProj[0] && new Date(selectedProj[0].payload.endDate).toDateString()}</b>
                    </span>
                    <a href="#">View schedule</a>
                  </div>
                  <div className="iconlist_sidebar">
                    <ul>
                      <li>
                        <div className="left-days details-page-leftdays">
                        {selectedProj[0] && Math.ceil(
                                      Math.abs(
                                        new Date(selectedProj[0].payload.endDate).getTime() -
                                          new Date().getTime()
                                      ) /
                                        (1000 * 60 * 60 * 24)
                                    )}
                                    {" "} Days left
                        </div>
                      </li>

                      <li>
                        <div className="Challanges-list">
                          <IonIcon icon={add}></IonIcon>
                          <span>{selectedProj[0] ? selectedProj[0].payload.challenges.length: 0}</span> Challanges
                        </div>
                      </li>

                      <li>
                        <p className="participants-numbers">
                          <IonIcon icon={add}></IonIcon>
                          <span> {selectedProj[0] ? selectedProj[0].payload.participants.length: 0} </span> participants
                        </p>
                      </li>

                      <li>
                        <p>
                          <div className="online-point">
                            {" "}
                            <IonIcon icon={add}></IonIcon> {selectedProj[0] ? selectedProj[0].payload.location : "" }
                          </div>
                        </p>
                      </li>

                      <li>
                        <div className="right-sidebar">
                          <IonIcon icon={add}></IonIcon> Start Date :
                          <span>{selectedProj[0] && new Date(selectedProj[0].payload.startDate).toDateString()}</span>
                        </div>
                      </li>

                      <li>
                        <div className="right-sidebar">
                          <IonIcon icon={add}></IonIcon> End Date :
                          <span>{selectedProj[0] && new Date(selectedProj[0].payload.endDate).toDateString()}</span>
                        </div>
                      </li>

                      <li>
                        <div className="right-sidebar details-Criteria">
                          <IonIcon icon={add}></IonIcon> Criteria :
                          <div>
                            <span className="Criteria-lisitng">
                            {selectedProj[0] && selectedProj[0].payload.criteria.map(k=>(<li>{k.name}</li>))}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="edtion_child">
                  <div className="details-social-icon">
                    <h2>Invite others to compete</h2>
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <IonIcon icon={logoFacebook}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <IonIcon icon={logoTwitter}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <IonIcon icon={logoInstagram}></IonIcon>
                        </a>
                      </li>
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
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Project;
