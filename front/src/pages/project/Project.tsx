import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Confirmation from "../profile/confirmation";
import Alert from "../profile/alert";
import { useUserState } from "../../context/UserContext";
import RequestForJudgeOnProject from "./projectRequest";
import GetJudge from './getjudge';
import {
  getSelectedProject,
  setSelectedSubmission,
} from "../../context/SharedContext";

import Tabs from "../../components/Tabs";
import Tab from "../../components/Tabs/Tab";
import ScoreSubmit from './scoresubmit';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTextarea,
} from "@ionic/react";

import topbannerImg from "../../assets/img/topbanner-image.png";
import userImg from "../../assets/img/user.png";
import {
  add,
  man,
  close,
  arrowBack,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
import "./Project.scss";
import { useLedger, useStreamQueries } from "@daml/react";

import {
  AddChallenge,
  ClientProject,
  ClientRole,
  ParticipantSubmission,
  ProposeSubmission,
  // ParticipantRole,
  UserRole,
  ParticipantSubmissionProposal,
  AddJudge,
  // JudgeRole,
  SubmitScorecard,
  CriteriaPoint,
  RequestToJudgeProject,
} from "@daml.js/cosmart-0.0.1/lib/Main";

import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";

const Project = (props: RouteComponentProps) => {
  const user = useUserState();
  const ledger = useLedger();

  const participantAssets = useStreamQueries(UserRole).contracts;
  // const judgeAssets = useStreamQueries(JudgeRole).contracts;
  const selectedProj = useStreamQueries(ClientProject, () => [
    { projectId: getSelectedProject().payload.projectId },
  ]).contracts;

  console.log('selectedProj', selectedProj);
  

 

   const getUserType = (): "" | "client" | "participant" | "judge" => {
     console.log('user type', (user as any).party);
     
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
    return "participant";
  };


  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [showJudgeModal, setShowJudgeModal] = useState(false);
  const [showConfirmation,setConfirmation] = useState(false);
  const projectAssets = useStreamQueries(ClientRole).contracts;
   const[showAlert,setAlerts] = useState(false);

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
  const defaultSubmitScoreDetail: SubmitScorecard = {
    judge:(user as any).party,
    scores:Array<CriteriaPoint>(),
    judgeComment:""
  };

  const defaultJudgeDetail: AddJudge = {
    judge : "",
    judgemail:''
  };
  const participantSubmissionProposalAssets = useStreamQueries(
    ParticipantSubmissionProposal,
    () => [{ projectId: getSelectedProject().payload.projectId }]
  ).contracts;
  
  const [cJudgeDetail, setJudgeDetail] = useState(
    defaultJudgeDetail
  );
  const [challengeDetail, setChallengeDetail] = useState(
    defaultChallengeDetail
  );
 
  const resetCreateChallenge = () => {
    setChallengeDetail(defaultChallengeDetail);
    setChallengeIdTouched(false);
  };
  const handleSubmitJudgeScore = async (evt:any)=>{
    evt.preventDefault();
    defaultSubmitScoreDetail.scores = Array<CriteriaPoint>();
    for(let i=0;i<evt.target.elements.name.length;i++){
      if(evt.target.elements.name[i] !== ""){
        defaultSubmitScoreDetail.scores.push({name:evt.target.elements.name[i].value,point:evt.target.elements.point[i].value});
      }
      
    }
    defaultSubmitScoreDetail.judgeComment = evt.target.elements.comment.value;
  
    ledger
      .exercise(
        ParticipantSubmission.SubmitScorecard,
        evt.target.elements.contactid.value,
        defaultSubmitScoreDetail,
        
      )
      .then(() => {
        setShowJudgeModal(false);
        setAlerts(true);
        setMessageText("Successfully Submitted Your Score");
        setMessageType("success");
        
      })
      .catch((err: any) => {
        setShowJudgeModal(false);
        setAlerts(true);
        setMessageText(JSON.stringify(err));
        setMessageType("error");
      });

  };

  const acceptSubmission = (contractId: any) => {
    ledger
      .exercise(
        ParticipantSubmissionProposal.AcceptSubmission,
        contractId,
        {submissionId: (new Date().getTime()).toString()}
      ).then(data => {
        setAlerts(true);
        setMessageText("Successfully accepted ");
        setMessageType("success");

      })
  };
  
  const handleJudgeSubmit = async (evt: any) => {
     evt.preventDefault();
     ledger
      .exercise(
        ClientProject.AddJudge,
        selectedProj[0]!.contractId,
        cJudgeDetail
      )
      .then(() => {
        setShowJudgeModal(false);
        setAlerts(true);
        setMessageText("Judge Added Successfully!");
        setMessageType("success");
      })
      .catch((err: any) => {
        setShowJudgeModal(false);
        setAlerts(true);
        setMessageText(JSON.stringify(err));
        setMessageType("error");
      });
  }
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
        setAlerts(true);
        setMessageText("Challenge Created Successfully!");
        setMessageType("success");
        // reset project detail info
        setTimeout(() => {
          resetCreateChallenge();
          setTimeout(() => {
            
          }, 1000);
        }, 250);
      })
      .catch((err: any) => {
        setShowChallengeModal(false);
        setAlerts(true);
        setMessageText(JSON.stringify(err));
        setMessageType("error");
      });
  };
  const userProfileData = () => {
    
    const d = {
      firstName: "",
      lastName: "",
      email: "",
      job: "",
      about: "",
      company: "",
      pictureUrl: "",
      contractId:'',
    };
    switch (getUserType()) {
      // case "judge":
      //   const ja = judgeAssets.filter(
      //     (j) => j.payload.judge === (user as any).party
      //   );
      //   if (ja.length > 0) {
      //     d.firstName = ja[0].payload.judgeProfile.firstName;
      //     d.lastName = ja[0].payload.judgeProfile.lastName;
      //     d.email = ja[0].payload.judgeProfile.email;
      //     d.job = ja[0].payload.judgeProfile.job;
      //     d.about = ja[0].payload.judgeProfile.about;
      //     d.company = ja[0].payload.judgeProfile.company;
      //     d.pictureUrl = ja[0].payload.judgeProfile.pictureUrl;
      //     d.contractId = ja[0].contractId;
      //   }
      //   break;
      case "participant":
        const pa = participantAssets.filter(
          (p) => p.payload.user === (user as any).party
        );
        if (pa.length > 0) {
          d.firstName = pa[0].payload.participantProfile.firstName;
          d.lastName = pa[0].payload.participantProfile.lastName;
          d.email = pa[0].payload.participantProfile.email;
          d.job = pa[0].payload.participantProfile.job;
          d.about = pa[0].payload.participantProfile.about;
          d.company = pa[0].payload.participantProfile.company;
          d.pictureUrl = pa[0].payload.participantProfile.pictureUrl;
          d.contractId = pa[0].contractId;
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
          d.contractId = ca[0].contractId;
        }
        break;
    }
    return d;
  };
 
 const sendRequestForJudge = ()=>{
    ledger
    .exercise(
      ClientProject.RequestToJudge,
      selectedProj[0]!.contractId,
      { judgemail: userProfileData().email, judge: (user as any).party}
    )
    .then(() => {
      setAlerts(true);
      setMessageText("Successfully submitted your request");
      setMessageType("success");
       
    }) 
    .catch((err: any) => {
      setShowChallengeModal(false);
      setAlerts(true);
      setMessageText(JSON.stringify(err));
      setMessageType("error");
    });
 }
  
  const approvedSubmissions = useStreamQueries(ParticipantSubmission, () => [
    {
      client: getSelectedProject().payload.client,
      projectId: getSelectedProject().payload.projectId,
    },
  ]).contracts;


  const requestToJudgeProject = useStreamQueries(RequestToJudgeProject, () => [
      {
        judge: (user as any).party
      }
    ]
  ).contracts

  console.log("requestToJudgeProject", requestToJudgeProject);
  

  
  const [showCreateSubmissionModal, setShowCreateSubmissionModal] = useState({
    show: false,
    challengeId: "",
  } as { show: boolean; challengeId?: string });

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
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
  const requestJudgeConfirmation = () =>{
    sendRequestForJudge();
    setConfirmation(false);
  }
  const requestForProjectJudge = ()=>{
    setConfirmation(true);
    setMessageType("success");
    setMessageText("Are you sure! You want to send request as a Judge for this project");
  }
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
          setAlerts(true);
          setMessageText("Submission Created Successfully!");
          setMessageType("success");
            // reset project detail info
          setTimeout(() => {
            resetCreateSubmission();
          }, 250);
        })
        .catch((err: any) => {
          setShowCreateSubmissionModal({ show: false });
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
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
      <Confirmation 
                  type={messageType} 
                  text={messageText}
                  showConfirmation={showConfirmation} 
                  setConfirmation={setConfirmation}
                  actionHandler  ={requestJudgeConfirmation }  
                />
       <Alert type={messageType} showAlert={showAlert} setAlerts={setAlerts} text={messageText} />
      <IonContent>
        <div className="content-container">
          <div className="image-heading-and-contant">
            <IonCard className="top-banner-details">
              {getSelectedProject() &&
              getSelectedProject().payload.pictureUrl !== "" ? (
                <img
                  className="project-picture"
                  src={getSelectedProject().payload.pictureUrl}
                  alt="project "
                />
              ) : (
                <img
                  className="project-picture"
                  src={topbannerImg}
                  alt="project "
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
                <h2>{getSelectedProject().payload.name}{" "}</h2>
               {/*}  <p>
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
              </div> */}
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

                            {selectedProj[0] && selectedProj[0].payload.prizes.map((k,index)=>(
                              <div className="" key={index}>
                              <h3>
                                <span>*</span> {k.currency}{k.value} {k.name}
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
                          {selectedProj[0] && selectedProj[0].payload.eligibility.map(k=>(<li>{k}</li>))}
                          </ul>
                        </div>

                        <div className="list_inner">
                          <h2>REQUIREMENTS</h2>
                          <p>
                            Below are the submission requirements for the
                            hackathon.
                          </p>
                          <ul>
                          {selectedProj[0] && selectedProj[0].payload.requirements.map(k=>(<li>{k}</li>))}
                           
                          </ul>
                        </div>
                        <div className="judges">
                          <h2>JUDGES ({selectedProj[0] && selectedProj[0].payload.judges ? selectedProj[0].payload.judges.length : "0"})</h2>
                          <ul>
                            {
                              selectedProj[0] && selectedProj[0].payload.judges.map((j:any,index:any) => (
                                <li key={index}>
                                  <img src={userImg} alt=""/>
                                  <span>
                                   <b> <GetJudge name={j}/> </b> 
                                    <i>
                                       Mentor / Hackathon judge
                                    </i>
                                  </span>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
						<div className="judges">
                          <h2>Terms Link</h2>
                          <p> {selectedProj[0] && selectedProj[0].payload.termsLink}</p>
                        </div>
						<div className="judges">
                          <h2>Privacy Link</h2>
                          <p> {selectedProj[0] && selectedProj[0].payload.privacyLink}</p>
                        </div>
                        <div className="list_inner judging_criteria">
                          <h2>JUDGING CRITERIA</h2>
                          <ul>
                           {selectedProj[0] && selectedProj[0].payload.criteria.map((k,index)=>(<li key={index}>{k.name}</li>))}
                          </ul>
                        </div>
                      </div>
                    </Tab>
                    <Tab title={`2. Challenges (${selectedProj[0] && selectedProj[0].payload.challenges.length})`} className="tabs-contant">
                    {selectedProj[0] ? selectedProj[0].payload.challenges.map((key,index) => 
                      (
                        <div className="challanges-listing" key={index}>
                        
                        <div className="chanlanges-titles">
                          <h1>{key.nameOf}</h1>
                          <p>
                          {key.description}
                          </p>
                          <div className="amount-main">
                            <h1 className="highlight-amount">
                              {" "}
                              <span>Prize ${key.prize}</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                      )
                    ) : <IonItem lines="none">
                    <IonLabel>
                      <p className="no-scores">No Challenges found</p>
                    </IonLabel>
                     </IonItem>}
                      
                    </Tab>
                    <Tab title={`3. Submissions (${approvedSubmissions && approvedSubmissions.length})`} className="tabs-contant">
                      <div className="submission-item-list">
                         {(getUserType() !== "judge" ) &&  participantSubmissionProposalAssets.map((sbmt,index) => (
                          <div className="submission-listing request-to-join" key={index}>
                            <div className="left-image-submission">
                              <img src={topbannerImg} alt="" />
                            </div>
                            <div className="right-contant-submission" key={`request (${index})`}>
                              <h1>{sbmt.payload.subName}</h1>
                              <p>
                                {sbmt.payload.subDesc}
                              </p>
                         
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
                               
                                
                                {getUserType() === "client" ? (
                                  
                                  <span
                                 className="btn view-details-btn"
                                  onClick={(e)=>{acceptSubmission(sbmt.contractId)}}
                                >
                                 Accept Request
                                </span>
                                  
                                ):
                                <span
                                
                                className="btn view-details-btn"
                                
                              >
                               Pending For Approval
                              </span>
                                }
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
                        {console.log(approvedSubmissions)}
                       
                        { (approvedSubmissions.length > 0) ? approvedSubmissions.map((sc,index) => (
                          <IonCard
                            key={index}
                            className="submission-card"
                            
                          >
                            <div className="submission-listing">
                            <div className="left-image-submission">
                              <img src={topbannerImg} alt="project" />
                            </div>
                            <div className="right-contant-submission">
                              <h1>{sc.payload.name}</h1>
                              <p>
                                {sc.payload.desc}
                              </p>
                            
                              
                              {/* check if judge is in judges */}
                           
                              <div className="sponsors-challenge">
                                <div className="submission-manage">
                                {(selectedProj[0] &&  (selectedProj[0].payload.judges.includes((user as any).party))) &&(
                                  <div className="submit-your-score">
                                    
                                    <form method="post" onSubmit={handleSubmitJudgeScore}>
                                    { (sc.payload.criteria.length > 0) && sc.payload.criteria.map((crt,index) => (
                                      <ScoreSubmit key={index} crt={crt}/>
                                    ))}
                                    <input
                                      type="hidden"
                                      name="contactid"
                                      placeholder=""
                                      value={sc.contractId}
                                    />
                                    <button
                                     className="btn view-details-btn"
                                      type="submit"
                                    >
                                      Submit Score
                                    </button>
                                    </form>
                                  </div>
                                )}
                                <div className="btn-group">
                                <a
                                  href="#top"
                                  className="btn view-details-btn"
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
                                  View details
                                </a> &nbsp;
                                {((getUserType() === "participant" || getUserType() === "" ) && !(selectedProj[0].payload.judges.includes((user as any).party)))&& (  <span
                                  className="btn view-details-btn"
                                  onClick={(e) => {
                                    const selectedSub = sc as any;  
                                     selectedSub.payload.projectId = getSelectedProject().payload.projectId;
                                     setSelectedSubmission(selectedSub);
                                    props.history.push(
                                      "/main/submission-edit/" + sc.payload.submissionId
                                    );
                                  }}
                                >
                                  Edit
                                </span> )}
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                         </IonCard>
                        ))
                      :
                      <IonItem lines="none">
                      <IonLabel>
                        <p className="no-scores">No Approved Submission found</p>
                      </IonLabel>
                       </IonItem>
                      }
                      </div>
                    </Tab>
                    {
                      (getUserType() === "client" || requestToJudgeProject.length < 1) ? 
                          <Tab title="Judge Requests" className="tabs-contant"> 
                            <div className="list_inner">
                              <h2>Judge Requests</h2>
                              
                              {selectedProj[0] &&  <RequestForJudgeOnProject projectId={selectedProj[0].payload.projectId}/> }
                            
                            </div>
                          
                          </Tab>

                          :

                          <Tab title="" className="hidden"></Tab>
                        
                    }
                   
                  </Tabs>
                </div>

                
              </div>
              <div className="edtion_sidebar">
                {(getUserType() === "" || getUserType() === "participant") && (
                  <div>
                    <div className="card-for-btn join-participant">
                    {(approvedSubmissions.length ===  0 && participantSubmissionProposalAssets.length === 0) && 
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
                    }
                  
                    
                    { (selectedProj[0] && (selectedProj[0].payload.judges).includes((user as any).party)) ? '': 
                    <IonButton color={requestToJudgeProject.length > 0 ? 'secondary' : 'primary'} className = "add-judges" onClick={(e) => requestToJudgeProject.length < 1 ? requestForProjectJudge() : null }>
                      <IonIcon icon={man}></IonIcon>
                      <IonLabel>
                        {
                          requestToJudgeProject.length > 0 ? (
                            'Your request is Pending ..'
                          ) :
                          (
                            'Request For Judge'
                          )
                        }
                        
                      </IonLabel>
                    </IonButton>
                    }
                    </div>

                   {/* <div className="card-for-btn join-participant">
                      <IonButton onClick={(e) => { partycipantRequestToJoinProject(e)}}>
                        <IonIcon icon={add}></IonIcon>
                        <IonLabel>Join as a Participant</IonLabel>
                      </IonButton>
                    </div> */}
                  </div>
                )}
              

                {getUserType() === "client" && (
                  <div className="card-for-btn join-participant">
                    <IonButton onClick={(e) => setShowChallengeModal(true)}>
                      <IonIcon icon={add}></IonIcon>
                      <IonLabel>Create new Challenge</IonLabel>
                    </IonButton>

                    <IonButton className = "add-judges" onClick={(e) => setShowJudgeModal(true)}>
                      <IonIcon icon={man}></IonIcon>
                      <IonLabel>Add new Judge</IonLabel>
                    </IonButton>

                  </div>
                )}
                <div className="edtion_child">
                  <div className="winner_announc">
                    <span>
                      Winners announced<b>{selectedProj[0] && new Date(selectedProj[0].payload.endDate).toDateString()}</b>
                    </span>
                    <a href="#top">View schedule</a>
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
                          <span className="online-point">
                            {" "}
                            <IonIcon icon={add}></IonIcon> {selectedProj[0] ? selectedProj[0].payload.location : "" }
                          </span>
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
                            <ul>{selectedProj[0] && selectedProj[0].payload.criteria.map((k,index)=>(<li key={index}>{k.name}</li>))}</ul>
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
                        <a href="#top">
                          {" "}
                          <IonIcon icon={logoFacebook}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#top">
                          {" "}
                          <IonIcon icon={logoTwitter}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#top">
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
          {/*-- Add Judge Model */}
          <IonModal
            isOpen={showJudgeModal}
            onDidDismiss={() => setShowJudgeModal(false)}
            cssClass="my-custom-class"
          >
            <div className="content challenge-modal-content">
              <h1>Add New Judge</h1>
              <form onSubmit={handleJudgeSubmit}>
                <div className="flex-equal-childs-width">
                  <IonItem>
                    <IonLabel position="floating">Judge Name </IonLabel>
                    <IonInput
                      required={true}
                      value={cJudgeDetail.judge}
                      onIonChange={(e) => {
                        setJudgeDetail({
                          ...cJudgeDetail,
                          judge: e.detail.value!,
                        });
                      }}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Judge Email </IonLabel>
                    <IonInput
                      required={true}
                      value={cJudgeDetail.judgemail}
                      onIonChange={(e) => {
                        setJudgeDetail({
                          ...cJudgeDetail,
                          judgemail: e.detail.value!,
                        });
                      }}
                    ></IonInput>
                  </IonItem>
                </div>
               
                <IonButton className="submit-button" type="submit">
                  Add Judge
                </IonButton>
              </form>
              <IonButton
                className="modal-default-close-btn"
                fill="clear"
                color="danger"
                onClick={() => {
                  setShowJudgeModal(false);
                }}
              >
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </div>
          </IonModal>
          {/* Challenge Modal */}

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
