import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import firebase from "firebase/app";
import { useLedger, useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";
import ProfileMenu from "./profileMenu";
import Alert from "./alert";
import Confirmation from "./confirmation";
import {
  ClientRole,
  ClientProject,
  CreateProject,
  PrizeData,
  UserRoleRequest,
  UserRole
  
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "./Profile.scss";
import {
  useUserState,
} from "../../context/UserContext";

import { setSelectedProject } from "../../context/SharedContext";
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import PrizesComponent from "../../components/PrizesComponent/PrizesComponent";
import CriteriaTagsInput from "../../components/CriteriaTagsInput/CriteriaTagsInput";
import {
  IonPage,
  IonButton,
  IonContent,
  IonSplitPane,
  IonItem,
  IonList,
  IonLabel,
  IonModal,
  IonInput,
  IonListHeader,
  IonTextarea,
  IonDatetime,
  IonNote,
  IonSpinner,
  IonIcon,
  IonCheckbox,
} from "@ionic/react";

import {
  close,
  pencil,
  trash,
  calendar,
  trophy,
  globe,
  flag,
  man,
  pricetags,
  hammer,
} from "ionicons/icons";

import mediumImage from "../../assets/img/medium.jpg";
import "./Profile.scss";

interface CriteriaPoint {
  name: string;
  point: damlTypes.Numeric;
}

const Profile = (props: RouteComponentProps) => {
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }

  const defaultProjectDetail: FrontCreateProject = {
    name: "",
    desc: "",
    projectId: "",
    startDate: "",
    endDate: "",
    location: "",
    criteria: Array<CriteriaPoint>(),
    pictureUrl: "",
    rules: [],
    termsLink: "",
    privacyLink: "",
    prizes: Array<PrizeData>(),
    projectvideoLink: "",
    loading: false,
    eligibility: [],
    requirements: [],
    projectStatus:'notsubmitted'
  };
  let checkFirstTimeLogin = 0;
  const defaultRegisterRequest = {
      firstName:'',
      lastName: '',
      email:'',
      company:'',
      job:'',
      about:'',
      pictureUrl:'https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
  };
  const [registerRequest, setRegisterRequest] = useState(defaultRegisterRequest);
  const [projectDetail, setProjectDetail] = useState(defaultProjectDetail);
  const [projectIdTouched, setProjectIdTouched] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [requestSend, setRequestSend] = useState(false);
  const [showTrashProjectModal, setShowTrashProjectModal] = useState({
    status: false,
    projectID: "",
    contractID: "",
  });
  const [registerProjectId, setRegisterProjectId] = useState("");
  const [registerProjectClient, setRegisterProjectClient] = useState("");
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showAlert, setAlerts] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageText, setMessageText] = useState("");
  const [participantId, setParicipantId] = useState("");
  const [showParticipantModal, setShowParticipantModal] = useState(false);

  const onPrizeChange = (val: any) => {
    setProjectDetail({
      ...projectDetail,
      prizes: val,
    });
  };

  const resetCreateProject = () => {
    setProjectDetail(defaultProjectDetail);
    setProjectIdTouched(false);
  };

  const ledger = useLedger();
  const projectAssets = useStreamQueries(ClientRole).contracts;
  const roleRequested = useStreamQueries(UserRoleRequest).contracts;
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;
  const participantAssets = useStreamQueries(UserRole).contracts;
  const getUserType = (): "" | "client" | "participant" | "judge" => {
    if (
      clientProjectAssets.length > 0 &&
      clientProjectAssets[0].payload.participants
        .map((p) => p.toLowerCase())
        .filter((p) => p === (user as any).party.toLowerCase()).length > 0
    ) {
      return "participant";
    }

    if (
      projectAssets.filter((c: any) => (user as any).party === c.payload.client)
        .length > 0
    ) {
      return "client";
    }
    if (
      participantAssets.filter(
        (p: any) => p.payload.participant === (user as any).party
      ).length > 0
    ) {
      return "participant";
    }

    return "participant";
  };


  const setRequestCheckbox = (e:any)=>{
    setRequestSend(e.detail.checked);
  }
  const handleCreateProject = async (evt: any) => {
    evt.preventDefault();
    const exercise = (cb: () => void) => {
      const { loading, projectImageFile, ...dataToExercise } = projectDetail;
      //console.log("dataToExercise", dataToExercise);
      ledger
        .exercise(
          ClientRole.CreateProject,
          projectAssets[0].contractId,
          dataToExercise
        )
        .then(() => {
          setShowCreateProjectModal(false);
          setAlerts(true);
          setMessageText("Successfully Created Project!");
          setMessageType("success");
          props.history.push("/main/profile");
          // reset project detail info
          setTimeout(() => {
            resetCreateProject();
            cb();
          }, 250);
        })
        .catch((err: any) => {
          setShowCreateProjectModal(false);
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
         
          cb();
        });
    };
    setProjectDetail({ ...projectDetail, loading: true });
    if (projectDetail.projectImageFile) {
      let imgFile = projectDetail.projectImageFile;
      // console.log("imgFile", imgFile);
      const { name } = imgFile;
      const filePath = `${new Date().getTime()}_${name}`;
      const storage = firebase.storage;
      const reference = storage().ref();
      const task = reference.child("project_picture_" + filePath);
      task
        .put(imgFile)
        .then((_) => {
          task
            .getDownloadURL()
            .then((urlStr) => {
              // console.log("urlStr", urlStr);
              const pd = projectDetail;
              pd.pictureUrl = urlStr;
              setProjectDetail(pd);
              setTimeout(() => {
                exercise(() => {
                  setProjectDetail({ ...projectDetail, loading: false });
                });
              }, 500);
            })
            .catch((err) => {
              // console.error(err);
              setAlerts(true);
              setMessageText(JSON.stringify(err));
              setMessageType("error");
                  setProjectDetail({ ...projectDetail, loading: false });
            });
        })
        .catch((err) => {
          // console.error(err);
          setAlerts(true);
          setMessageText(JSON.stringify(err));
          setMessageType("error");
          setProjectDetail({ ...projectDetail, loading: false });
        });
    } else {
      exercise(() => {
        setProjectDetail({ ...projectDetail, loading: false });
      });
    }
  };

  const handleJoinProject = async (evt: any) => {
    evt.preventDefault();

    /* const formData = {
      participant: user,
      client: registerProjectClient,
      operator: "Elastik",
      projectId: registerProjectId,
    };
   
    ledger
      .exercise(
        ParticipantRole.RegisterForProject,
        participantRoleAssets[0].contractId,
        formData
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err)); */
  };


  const deleteProjectFromStorage = (contactID: any) => {
    ledger
      .exercise(ClientProject.RemoveClientProject, contactID, { comment: "" })
      .then((data: any) => {
        setShowTrashProjectModal({
          status: false,
          projectID: "",
          contractID: "",
        });
      })
      .catch((err: any) => console.log(err));
  };

  const handleNewAccountRequest = async(evt:any)=>{
    const accountRequestData = {user: (user as any).party,operator:"Elastik",participantProfile:registerRequest};
   await ledger.create(UserRoleRequest, accountRequestData)
    .then((data:any)=>{
      setAlerts(true);
      setMessageText("Your account requested submitted");
      setMessageType("success");
    });
    //const archiveEvent = await Ledger.archive(ContractTemplate, contractId);
    //const [choiceReturnValue, events] = await ledger.exercise(ContractChoice, contractId, choiceArguments);
    

  }
  const participantProfile = () => {
    const d = {
      firstName: "",
      lastName: "",
      email: "",
      job: "",
      about: "",
      company: "",
      pictureUrl: "",
    };
    switch (getUserType()) {
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
        }
        break;
    }
    return d;
  };
  if((projectAssets && projectAssets.length !== 0 && checkFirstTimeLogin === 0) || (participantAssets && participantAssets.length !== 0 && checkFirstTimeLogin === 0)){ checkFirstTimeLogin = 1;  }
   if(roleRequested && roleRequested.length !== 0 && checkFirstTimeLogin === 0){checkFirstTimeLogin = 2;  }
   if(checkFirstTimeLogin === 0){checkFirstTimeLogin = 3;}
  const HackathonComponenent = (hackathonProps: any) => {
    const p = hackathonProps.project;
     return (
      <div className="listing-projects-name">
        <div className="created-projects-listing">
          <div
            className="left--project-image"
            onClick={(e) => {
              e.preventDefault();
              setSelectedProject(p);
              props.history.push("/main/project/" + p.payload.projectId);
            }}
          >
           
            {p.payload.pictureUrl !== "" ? (
              <img src={p.payload.pictureUrl} alt="peoject" />
            ) : (
              <img src={mediumImage} alt="peoject" />
            )}
          </div>
          <div
            className="center-project-contant"
            onClick={(e) => {
              e.preventDefault();
              setSelectedProject(p);
              props.history.push("/main/project/" + p.payload.projectId);
            }}
          >
            <h2 className="title-project">{p.payload.name}</h2>
            <div className="online-and-days">
              <div className="left-days">
                {new Date(p.payload.endDate).getTime() > new Date().getTime()
                  ? Math.ceil(
                      Math.abs(
                        new Date(p.payload.endDate).getTime() -
                          new Date().getTime()
                      ) /
                        (1000 * 60 * 60 * 24)
                    )
                  : 0}{" "}
                Days left
                
              </div>
              <div className="online-point">
                {" "}
                <IonIcon icon={globe}></IonIcon> {p.payload.location}
              </div>
            </div>
            <div className="price-chanllanges-parti">
              <div className="project-price-lsiitng">
                <h3 className="price-heading">Prizes</h3>
                {p.payload.prizes.map((prize: any,index:any) => (
                  <p className="price-listing" key={index}>
                    <IonIcon icon={trophy}></IonIcon>{" "}
                    <b>
                      {prize.currency} {prize.value}{" "}
                    </b>{" "}
                    {prize.description}
                  </p>
                ))}
              </div>
              <div className="Challanges-list">
                {" "}
                <IonIcon icon={flag}></IonIcon>{" "}
                <span>{p.payload.challenges.length}</span> Challange
                {p.payload.challenges.length > 1 && "s"}
              </div>
              <div className="participants">
                <p className="participants-numbers">
                  {" "}
                  <IonIcon icon={man}></IonIcon>{" "}
                  <span>{p.payload.participants.length}</span> participants
                </p>
              </div>
            </div>
          </div>
          <div className="left-project-details">
            <div className="right-sidebar">
              <IonIcon icon={calendar}></IonIcon> Start Date{" "}
              <span>{new Date(p.payload.startDate).toDateString()}</span>
            </div>
            <div className="right-sidebar">
              <IonIcon icon={calendar}></IonIcon> End Date{" "}
              <span>{new Date(p.payload.endDate).toDateString()}</span>
            </div>
            <div className="right-sidebar">
              <IonIcon icon={pricetags}></IonIcon> Criteria :
              <div>
                <span className="Criteria-lisitng">
                  {p.payload.criteria &&
                    p.payload.criteria.map((k: any,index:any) => <li key={index}>{k.name}</li>)}
                </span>
              </div>
            </div>

            {getUserType() === "client" && (
              <div className="edit-delete-list">
                <IonItem className="project-controls-listing">
                  <IonIcon
                    icon={hammer}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("the selected::", p);

                      setSelectedProject(p);
                      props.history.push("/main/scores/" + p.payload.projectId);
                    }}
                  ></IonIcon>

                  <IonIcon
                    icon={pencil}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("the selected::", p);

                      setSelectedProject(p);
                      props.history.push(
                        "/main/projects/" + p.payload.projectId + "/edit"
                      );
                    }}
                  ></IonIcon>
                  <IonIcon
                    icon={trash}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTrashProjectModal({
                        status: true,
                        projectID: p.payload.projectId,
                        contractID: p.contractId,
                      });
                    }}
                    className="trash-project-button"
                  ></IonIcon>
                </IonItem>
              </div>
            )}
          </div>
        </div>
        
        
      </div>
    );
  };
  const setConfirmation = ()=>{
    setShowTrashProjectModal({
      status: false,
      projectID: "",
      contractID: "",
    })
  }
  const deleteProject = ()=>{
      
    deleteProjectFromStorage(
      showTrashProjectModal.contractID
    )
  }

  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
        {getUserType() === "client" ? (
          <IonButton
            onClick={() => setShowCreateProjectModal(true)}
            className="create-project-button extra-create-button"
          >
            {" "}
            Create New Project{" "}
          </IonButton>
        ) : null}
        <SubHeader {...props} />
        <Alert type={messageType} showAlert={showAlert} setAlerts={setAlerts} text={messageText} />
       
        <IonContent>
          <div className="content-container">
            <IonSplitPane className="menu-container" contentId="main">
              {/*-- Delete Project confirmation setShowTrashProjectModal --*/}
              <Confirmation 
                  type="success" 
                  text="Are you sure !" 
                  showConfirmation={showTrashProjectModal.status} 
                  setConfirmation={setConfirmation}
                  actionHandler  ={deleteProject }  
                />
            

              {/*--  the side menu  --*/}
              <ProfileMenu {...props}/>
              {/*-- the main content --*/}
              <IonPage className="full-width-container" id="main">
                {/*--  modal showCreateProjectModal --*/}
                <IonModal
                  isOpen={showCreateProjectModal}
                  onDidDismiss={() => setShowCreateProjectModal(false)}
                  cssClass="my-custom-class"
                >
                  <div className="content create-project-modal-content">
                    <form onSubmit={handleCreateProject}>
                      <h1>Create Project</h1>
                      <div className="flex-equal-childs-width">
                        <IonItem>
                          <IonLabel position="floating" className="form-label">Project Name</IonLabel>
                          <IonInput
                            required={true}
                            value={projectDetail.name}
                            onIonChange={(e) => {
                              let projId = projectDetail.projectId;
                              if (!projectIdTouched) {
                                const d = new Date();
                                projId =
                                  e.detail.value!.replace(/\W/g, "_") +
                                  "_" +
                                  (d.getSeconds() +
                                    d.getMinutes() +
                                    d.getMilliseconds());
                                projId = projId.toLowerCase();
                              }
                              setProjectDetail({
                                ...projectDetail,
                                name: e.detail.value!,
                                projectId: projId,
                              });
                            }}
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                          <IonLabel position="floating">Project ID</IonLabel>
                          <IonInput
                            required={true}
                            value={projectDetail.projectId}
                            onFocus={(e) => {
                              setProjectIdTouched(true);
                            }}
                            onIonChange={(e) => {
                              setProjectDetail({
                                ...projectDetail,
                                projectId: e.detail.value!,
                              });
                            }}
                          ></IonInput>
                        </IonItem>
                        
                      </div>
                      <IonItem>
                        <IonLabel position="floating">Location</IonLabel>
                        <IonInput
                          required={true}
                          value={projectDetail.location}
                          onIonChange={(e) =>
                            setProjectDetail({
                              ...projectDetail,
                              location: e.detail.value!,
                            })
                          }
                        ></IonInput>
                      </IonItem>
                      <div className="criteria-tags-container">
                        <IonLabel>Criteria</IonLabel>
                        <CriteriaTagsInput
                          onChange={(tags) => {
                            const arrCriteriaPoint = tags.map(
                              (t) =>
                                ({ name: t.name, point: "0" } as CriteriaPoint)
                            );
                            setProjectDetail({
                              ...projectDetail,
                              criteria: arrCriteriaPoint,
                            });
                          }}
                        ></CriteriaTagsInput>
                      </div>
                      <div className="flex-equal-childs-width datebox">
                        <IonItem>
                          <IonLabel>Start Date</IonLabel>
                          <IonDatetime
                            displayFormat="MM DD YYYY, HH:mm"
                            placeholder="Select Start Date"
                            value={projectDetail.startDate}
                            onIonChange={(e) =>
                              setProjectDetail({
                                ...projectDetail,
                                startDate: new Date(
                                  e.detail.value!
                                ).toISOString(),
                              })
                            }
                          ></IonDatetime>
                        </IonItem>
                        <IonItem>
                          <IonLabel>End Date</IonLabel>
                          <IonDatetime
                            displayFormat="MM DD YYYY, HH:mm"
                            placeholder="Select End Date"
                            value={projectDetail.endDate}
                            onIonChange={(e) =>
                              setProjectDetail({
                                ...projectDetail,
                                endDate: new Date(
                                  e.detail.value!
                                ).toISOString(),
                              })
                            }
                          ></IonDatetime>
                        </IonItem>
                      </div>
                      <div>
                        <IonItem className="prize-data">
                          <IonLabel>Prizes</IonLabel>
                        </IonItem>
                        <PrizesComponent onPrizeChange={onPrizeChange} />
                      </div>
                      <IonItem>
                        <IonLabel position="floating">
                          Project Description
                        </IonLabel>
                        <IonTextarea
                          rows={2}
                          value={projectDetail.desc}
                          onIonChange={(e) =>
                            setProjectDetail({
                              ...projectDetail,
                              desc: e.detail.value!,
                            })
                          }
                        ></IonTextarea>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="stacked">Project Image</IonLabel>
                        <input
                          disabled={projectDetail.loading}
                          accept="images/*"
                          type="file"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setProjectDetail({
                                ...projectDetail,
                                projectImageFile: e!.target!.files![0],
                              });
                            } else {
                              setProjectDetail({
                                ...projectDetail,
                                projectImageFile: undefined,
                              });
                            }
                          }}
                        />
                      </IonItem>
                      <p
                        className="d-flex align-items-center m-left"
                        hidden={!projectDetail.loading}
                      >
                        <IonSpinner className="m-right" />{" "}
                        <IonNote>Uploading..</IonNote>
                      </p>
                      <IonButton
                        disabled={projectDetail.loading}
                        className="submit-button"
                        type="submit"
                      >
                        Create
                      </IonButton>
                    </form>
                  </div>
                  <IonButton
                    className="modal-default-close-btn"
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      resetCreateProject();
                      setShowCreateProjectModal(false);
                    }}
                  >
                    <IonIcon icon={close}></IonIcon>
                  </IonButton>
                </IonModal>

                {/*-- modal showRequestModal --*/}
                <IonModal
                  isOpen={showRequestModal}
                  onDidDismiss={() => setShowRequestModal(false)}
                  cssClass="my-custom-class"
                >
                  <div className="content create-project-modal-content">
                    <form onSubmit={handleJoinProject}>
                      <h1>Register project</h1>
                      <div className="flex-equal-childs-width">
                        <IonItem>
                          <IonLabel position="floating">Project ID</IonLabel>

                          <IonInput
                            required={true}
                            value={registerProjectId}
                            onIonChange={(e) => {
                              setRegisterProjectId(
                                (e.detail.value! as unknown) as string
                              );
                            }}
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                          <IonLabel position="floating">Client Name</IonLabel>
                          <IonInput
                            required={true}
                            value={registerProjectClient}
                            onIonChange={(e) => {
                              setRegisterProjectClient(
                                (e.detail.value! as unknown) as string
                              );
                            }}
                          ></IonInput>
                        </IonItem>
                      </div>

                      <IonButton
                        onClick={(e) => {
                          setRegisterProjectClient("");
                          setRegisterProjectId("");
                          setShowRequestModal(false);
                          handleJoinProject(e);
                        }}
                        className="submit-button"
                        type="submit"
                      >
                        Join
                      </IonButton>
                    </form>
                  </div>
                  <IonButton
                    className="modal-default-close-btn"
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      resetCreateProject();
                      setShowCreateProjectModal(false);
                    }}
                  >
                    <IonIcon icon={close}></IonIcon>
                  </IonButton>
                </IonModal>

                {/*-- modal AddParticipantToProject --*/}
                <IonModal
                  isOpen={showParticipantModal}
                  onDidDismiss={() => setShowParticipantModal(false)}
                  cssClass="my-custom-class"
                >
                  <div className="content create-project-modal-content">
                    <form onSubmit={handleJoinProject}>
                      <h1>Add Participant</h1>
                      <div className="flex-equal-childs-width">
                        <IonItem>
                          <IonLabel position="floating">
                            Participant ID
                          </IonLabel>

                          <IonInput
                            required={true}
                            value={participantId}
                            onIonChange={(e) => {
                              setParicipantId(
                                (e.detail.value! as unknown) as string
                              );
                            }}
                          ></IonInput>
                        </IonItem>
                      </div>
                    </form>
                  </div>
                  <IonButton
                    className="modal-default-close-btn"
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      resetCreateProject();
                      setShowCreateProjectModal(false);
                    }}
                  >
                    <IonIcon icon={close}></IonIcon>
                  </IonButton>
                </IonModal>

                <div className="wrapper">
                  {participantProfile().firstName !== "" && 
                  <div className="profile-info-container">
                    <div className="profile-img-container">
                      {projectAssets.length > 0 &&
                      projectAssets[0].payload.clientProfile.pictureUrl !==
                        "" ? (
                        <img
                          src={
                            projectAssets[0].payload.clientProfile.pictureUrl
                          }
                          alt="profile1"
                        />
                      ) : (
                        <img
                          src="https://via.placeholder.com/214x198.png"
                          alt="profile"
                        />
                      )}
                      <input
                        className="profile-picture-input"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                    <div className="profile-info">
                      <div className="profile-header">
                        <h1>
                          {/* {user.party}  */}
                          {participantProfile().firstName}{" "}
                          {participantProfile().lastName}
                        </h1>
                        <IonButton size="large" onClick={(e)=>
                            props.history.push("/main/profile/edit")
                        } className="edit-button">
                          
                          Edit{" "}
                        </IonButton>
                      </div>

                      <div className="profile-about">
                        <h2>About</h2>
                        <p>{participantProfile().about}</p>
                        <p>
                          Email:{" "}
                          <a href={"mailto:" + participantProfile().email}>
                            {participantProfile().email}
                          </a>
                        </p>

                        <p>
                          Name: {participantProfile().firstName} {participantProfile().lastName}
                        </p>
						
                        <p>
                          Job: {participantProfile().job}
                        </p>
                        <p>
                          About: {participantProfile().about}
                        </p>
                        { getUserType() }
                        {getUserType() === "client" ? (
                          <div>
                            <IonButton
                              onClick={() => setShowCreateProjectModal(true)}
                              className="create-project-button extra-create-newproject-btn"
                            >
                              Create New Hackathon
                            </IonButton>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  }
                  {checkFirstTimeLogin === 3 &&
                    <div className="new-user-profile">
                        <IonItem>
                         <IonLabel position="floating">First Name</IonLabel>
                          <IonInput
                            required={true}
                            value={registerRequest.firstName}
                            onIonChange={(e) =>
                              setRegisterRequest({
                                ...registerRequest,
                                firstName: e.detail.value!,
                              })
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                         <IonLabel position="floating">Last Name</IonLabel>
                          <IonInput
                            required={true}
                            value={registerRequest.lastName}
                            onIonChange={(e) =>
                              setRegisterRequest({
                                ...registerRequest,
                                lastName: e.detail.value!,
                              })
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                         <IonLabel position="floating">Email</IonLabel>
                          <IonInput
                            required={true}
                            value={registerRequest.email}
                            onIonChange={(e) =>
                              setRegisterRequest({
                                ...registerRequest,
                                email: e.detail.value!,
                              })
                            }
                          ></IonInput>
                        </IonItem>
                       
                        <IonItem>
                         <IonLabel position="floating">Job</IonLabel>
                          <IonInput
                            required={true}
                            value={registerRequest.job}
                            onIonChange={(e) =>
                              setRegisterRequest({
                                ...registerRequest,
                                job: e.detail.value!,
                              })
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                         <IonLabel position="floating">About</IonLabel>
                          <IonTextarea
                            required={true}
                            value={registerRequest.about}
                            onIonChange={(e) =>
                              setRegisterRequest({
                                ...registerRequest,
                                about: e.detail.value!,
                              })
                            }
                          ></IonTextarea>
                        </IonItem>  
                        <IonItem>
                       
                          <IonCheckbox
                           
                            value={registerRequest.job}
                            onIonChange={(e) =>
                              setRequestCheckbox(e)
                            }
                          ></IonCheckbox>
                             <IonLabel className="checkboxxlass">By ticking this box you agree to the terms and conditions of the hackathon <a href="">T&C</a> </IonLabel>
                        </IonItem>
                        <IonItem> 
                         
                          {requestSend === false ? 
                        <IonButton
                        className="profile-default-update-btn disabled"
                      
                      >
                       Request For new account
                      </IonButton>
                       :
                       <IonButton
                       className="profile-default-update-btn"
                        onClick={(e) => {
                         handleNewAccountRequest(e);
                       }}
                     >
                      Request For new account
                     </IonButton>
                      }
                      </IonItem>    
                    </div>
                  }
                  {(checkFirstTimeLogin === 2) &&
                    <h1>We are processing your account registration. Please check back later.</h1>
                  }
                  {checkFirstTimeLogin === 1 &&
                  (getUserType() === "client" ? (
                    clientProjectAssets.filter(
                      (c) => (user as any).party === c.payload.client
                    ).length > 0 ? (
                      <IonList>
                        <IonListHeader>Your Hackathons</IonListHeader>
                        {clientProjectAssets
                          .filter(
                            (c) => (user as any).party === c.payload.client
                          )
                          .map((p,index) => (
                            <HackathonComponenent
                              project={p}
                              key={index}
                            ></HackathonComponenent>
                          ))}
                      </IonList>
                    ) : null
                  ) : (
                    <IonList>
                      <IonListHeader>Hackathons:</IonListHeader>
                      {clientProjectAssets.map((p) => (
                        <HackathonComponenent
                          project={p}
                        ></HackathonComponenent>
                      ))}
                    </IonList>
                  )) }
				    <Footer />
                </div>
				
              </IonPage>
			  
            </IonSplitPane>
			
          </div>
        </IonContent>
      </IonPage>
    );
  }
};
export default Profile;
