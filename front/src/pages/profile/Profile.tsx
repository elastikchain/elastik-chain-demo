import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import firebase from "firebase/app";
import { useLedger, useStreamQueries } from "@daml/react";

import {
  ClientRole,
  ClientProject,
  ClientInvitation,
  AcceptRequest,
  ParticipantInvitation,
  ProposeSubmission,
  CreateProject,
  ParticipantSubmissionProposal,
  ParticipantSubmission,
  AcceptSubmission,
  JudgeInvitation,
  RequestToJoinProject,
  ParticipantRole,
} from "@daml.js/cosmart-0.0.1/lib/Main";

import {
  publicParty,
  signOut,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import { setSelectedProject } from "../../context/SharedContext";

import CriteriaTagsInput from "../../components/CriteriaTagsInput/CriteriaTagsInput";
import * as damlTypes from "@daml/types";
import DamlLedger from "@daml/react";
import { httpBaseUrl, wsBaseUrl } from "../../config";
import { useStreamQueriesAsPublic } from "@daml/hub-react/lib";
import { Template } from "@daml/types";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonContent,
  IonMenu,
  IonSplitPane,
  IonTitle,
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
} from "@ionic/react";
import { open, close } from "ionicons/icons";

import logo from "../../assets/img/logo-combination.svg";
import menuItemImg from "../../assets/img/img-menu-item.png";
import "./Profile.scss";

interface CriteriaPoint {
  name: string;
  point: damlTypes.Numeric;
}
const Profile = (props: RouteComponentProps) => {
  const userDispatch = useUserDispatch();
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }

  const defaultProjectDetail: FrontCreateProject = {
    projectId: "",
    name: "",
    desc: "",
    location: "",
    startDate: "",
    endDate: "",
    criteria: Array<CriteriaPoint>(),
    pictureUrl: "",
    public: publicParty,
    projectImageFile: undefined,
    loading: false,
  };

  const [projectDetail, setProjectDetail] = useState( defaultProjectDetail );
  const [registerProjectId, setRegisterProjectId] = useState("");
  const [registerProjectClient, setRegisterProjectClient] = useState("");
  const [searchText, setSearchText] = useState("");
  const [projectIdTouched, setProjectIdTouched] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  const resetCreateProject = () => {
    setProjectDetail(defaultProjectDetail);
    setProjectIdTouched(false);
  };

  const ledger = useLedger();

  const clientInvitationAssets = useStreamQueries(ClientInvitation).contracts;
  console.log("clientInvitationAssets", clientInvitationAssets);

  const participantInvitationAssets = useStreamQueries(
    ParticipantInvitation,
    () => [{ participant: (user as any).party }]
  ).contracts;

  const judgeInvitationAssets = useStreamQueries(JudgeInvitation, () => [
    { judge: (user as any).party },
  ]).contracts;

  const clientProjectAssets = useStreamQueries(ClientProject).contracts;
  console.log("clientProjectAssets", clientProjectAssets);

  const projectAssets = useStreamQueries(ClientRole).contracts;

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

    return "";
  };

  console.log("getUserType", getUserType());

  const SubmissionToAcceptComponent = (props: any) => {
    const participantSubmissionProposalAssets = useStreamQueries(
      ParticipantSubmissionProposal,
      () => [{ projectId: props.projectId }]
    ).contracts;
    console.log(
      "participantSubmissionProposalAssets",
      participantSubmissionProposalAssets
    );
    const els = participantSubmissionProposalAssets.map((c) => (
      <IonItem>
        <IonLabel>
          <h2>Submission Name: {c.payload.subName}</h2>
          <p>Submission Description: {c.payload.subDesc}</p>
          <p>Submission Content: {c.payload.submission}</p>
          <p>Challenge Id: {c.payload.challengeId}</p>
        </IonLabel>
        <IonButton
          slot="end"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            const d = new Date();
            const submissionId =
              c.payload.subName.replace(/\W/g, "_") +
              "_" +
              (d.getSeconds() + d.getMinutes() + d.getMilliseconds());
            ledger
              .exercise(
                ParticipantSubmissionProposal.AcceptSubmission,
                c.contractId,
                { submissionId }
              )
              .then((_) => alert("Submission Accepted!"))
              .catch((err) => alert(JSON.stringify(err.errors || [])));
          }}
        >
          Accept {c.payload.participant} Submission
        </IonButton>
      </IonItem>
    ));
    return els.length > 0 ? <div>{els}</div> : null;
  };

  const handleCreateProject = async (evt: any) => {
    evt.preventDefault();
    const exercise = (cb: () => void) => {
      const { loading, projectImageFile, ...dataToExercise } = projectDetail;
      console.log("dataToExercise", dataToExercise);
      ledger
        .exercise(
          ClientRole.CreateProject,
          projectAssets[0].contractId,
          dataToExercise
        )
        .then(() => {
          setShowCreateProjectModal(false);
          alert("Project Created Successfully!");
          // reset project detail info
          setTimeout(() => {
            resetCreateProject();
            cb();
          }, 250);
        })
        .catch((err: any) => {
          setShowCreateProjectModal(false);
          alert("Error: " + JSON.stringify(err));
          cb();
        });
    };
    setProjectDetail({ ...projectDetail, loading: true });
    if (projectDetail.projectImageFile) {
      let imgFile = projectDetail.projectImageFile;
      console.log("imgFile", imgFile);
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
              console.log("urlStr", urlStr);
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
              console.error(err);
              alert(JSON.stringify(err));
              setProjectDetail({ ...projectDetail, loading: false });
            });
        })
        .catch((err) => {
          console.error(err);
          alert(JSON.stringify(err));
          setProjectDetail({ ...projectDetail, loading: false });
        });
    } else {
      exercise(() => {
        setProjectDetail({ ...projectDetail, loading: false });
      });
    }
  };


  const participantRoleAssets = useStreamQueries(ParticipantRole).contracts;

  const handleJoinProject = async (evt: any) => {
    evt.preventDefault();
      
     const formData = {
      participant: user,
      client: registerProjectClient,
      operator: "Elastik",
      projectId: registerProjectId,
    };

    ledger.exercise(ParticipantRole.RegisterForProject, participantRoleAssets[0].contractId, formData)
    .then(data=>console.log(data));
  };

  

  const handleUploadError = (err: any) => {
    console.log(err);
  };

  const handleUploadSuccess = async (filename: string) => {
    console.log("success upload");
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();
    console.log("downloadURL", downloadURL);
  };

  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="toolbar">
            <div className="d-flex">
              <img className="app-logo" src={logo} alt="logo" />
              <IonSearchbar
                placeholder="Explore amazing ideas"
                value={searchText}
                onIonChange={(e: any) => setSearchText(e.detail.value!)}
              ></IonSearchbar>
            </div>
            <IonButtons slot="end" className="toolbar-buttons-container">
              <div className="toolbar-buttons">
                <IonButton>Explore</IonButton>
                <IonButton
                  onClick={(evt: any) => {
                    signOut(userDispatch, props.history, false);
                  }}
                >
                  Logout
                </IonButton>
              </div>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSplitPane className="menu-container" contentId="main">
            {/*--  the side menu  --*/}
            <IonMenu contentId="main">
              <IonHeader>
                <IonToolbar>
                  <IonTitle></IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonList className="menu-items-list">
                  <IonItem>
                    <img slot="start" src={menuItemImg} alt="menu item" />
                    <IonLabel>Profile</IonLabel>
                  </IonItem>
                  <IonItem>
                    <img slot="start" src={menuItemImg} alt="menu item" />
                    <IonLabel>Account Settings</IonLabel>
                  </IonItem>
                  <IonItem>
                    <img slot="start" src={menuItemImg} alt="menu item" />
                    <IonLabel>Password</IonLabel>
                  </IonItem>
                  <IonItem>
                    <img slot="start" src={menuItemImg} alt="menu item" />
                    <IonLabel>App preferences</IonLabel>
                  </IonItem>
                </IonList>
              </IonContent>
            </IonMenu>
            {/*-- the main content --*/}
            <IonPage id="main">
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
                        <IonLabel position="floating">Project Name</IonLabel>
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
                    <div className="flex-equal-childs-width">
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
                              endDate: new Date(e.detail.value!).toISOString(),
                            })
                          }
                        ></IonDatetime>
                      </IonItem>
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
                    <h1>Request to join project</h1>
                    <div className="flex-equal-childs-width">
                      <IonItem>
                        <IonLabel position="floating">Project ID</IonLabel>
                        
                        <IonInput
                          required={true}
                          value={registerProjectId}
                          onIonChange={(e) => {
                            setRegisterProjectId(e.detail.value! as unknown as string)
                          }}
                        ></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Client Name</IonLabel>
                        <IonInput
                          required={true}
                          value={registerProjectClient}
                          onIonChange={(e) => {
                            setRegisterProjectClient(e.detail.value! as unknown as string);
                          }}
                        ></IonInput>
                      </IonItem>
                    </div>

                    <IonButton
                      onClick={(e) => {
                        // resetRequestForm();
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
              <div className="wrapper">
                <div className="profile-info-container">
                  <div className="profile-img-container">
                    <img
                      src="https://via.placeholder.com/214x198.png"
                      alt="profile image"
                    />
                    <input
                      className="profile-picture-input"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <div className="profile-info">
                    <div className="profile-header">
                      <IonLabel color="secondary">
                        {(user as any).party}
                        {clientInvitationAssets
                          .filter(
                            (c: any) => (user as any).party === c.payload.client
                          )
                          .map((a: any) => (
                            <IonButton
                              onClick={async (e) => {
                                await ledger.exercise(
                                  ClientInvitation.AcceptRequest,
                                  a.contractId,
                                  AcceptRequest
                                );
                                alert("Your request accepted successfully!");
                              }}
                            >
                              {" "}
                              Accept Invitation
                            </IonButton>
                          ))}
                        {participantInvitationAssets
                          .filter(
                            (c) => (user as any).party === c.payload.participant
                          )
                          .map((a) => (
                            <IonButton
                              onClick={async (e) => {
                                await ledger.exercise(
                                  ParticipantInvitation.AcceptParticipantRequest,
                                  a.contractId,
                                  AcceptRequest
                                );
                                alert("Your request accepted successfully!");
                              }}
                            >
                              {" "}
                              Accept Invitation As Participant
                            </IonButton>
                          ))}
                        {judgeInvitationAssets
                          .filter(
                            (c) => (user as any).party === c.payload.judge
                          )
                          .map((a) => (
                            <IonButton
                              onClick={async (e) => {
                                await ledger.exercise(
                                  JudgeInvitation.AcceptjudgeRequest,
                                  a.contractId,
                                  AcceptRequest
                                );
                                alert("Your request accepted successfully!");
                              }}
                            >
                              {" "}
                              Accept Invitation As Judge
                            </IonButton>
                          ))}
                      </IonLabel>
                      <IonButton size="large"> Edit </IonButton>
                    </div>
                    <div className="profile-about">
                      <h1>About me</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil, neque. Nulla quae pariatur voluptas, tenetur
                        perferendis voluptatibus incidunt provident impedit
                        sapiente eius voluptatum perspiciatis sint quisquam iste
                        nam cupiditate dolores.
                      </p>
                      <p>
                        Linkedin: <a href="#">Information here</a>
                      </p>
                      <p>
                        Github: <a href="#">Information here</a>
                      </p>
                      {getUserType() === "client" ? (
                        <IonButton
                          onClick={() => setShowCreateProjectModal(true)}
                          className="create-project-button"
                        >
                          {" "}
                          Create New Project{" "}
                        </IonButton>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  {
                    <IonButton
                      onClick={() => setShowRequestModal(true)}
                      className="create-project-button"
                    >
                      Request to join project
                    </IonButton>
                  }
                </div>
                {getUserType() === "client" ? (
                  clientProjectAssets.filter(
                    (c) => (user as any).party === c.payload.client
                  ).length > 0 ? (
                    <IonList>
                      <IonListHeader>Created Projects</IonListHeader>
                      {clientProjectAssets
                        .filter((c) => (user as any).party === c.payload.client)
                        .map((p) => (
                          <IonItem
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("the selected::", p);

                              setSelectedProject(p);
                              props.history.push(
                                "/main/project?id=" + p.payload.projectId
                              );
                            }}
                          >
                            <IonIcon slot="start" icon={open}></IonIcon>
                            <IonLabel className="project-info">
                              name: {p.payload.name}, id: {p.payload.projectId}
                              <SubmissionToAcceptComponent
                                contractId={p.contractId}
                                projectId={p.payload.projectId}
                              ></SubmissionToAcceptComponent>
                            </IonLabel>
                          </IonItem>
                        ))}
                    </IonList>
                  ) : null
                ) : (
                  <IonList>
                    <IonListHeader>Projects:</IonListHeader>
                    {clientProjectAssets.map((p) => {
                      return (
                        <IonItem
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedProject(p);
                            props.history.push(
                              "/main/project?id=" + p.payload.projectId
                            );
                          }}
                        >
                          <IonIcon slot="start" icon={open}></IonIcon>
                          <IonLabel className="project-info">
                            name: {p.payload.name}, id: {p.payload.projectId}
                          </IonLabel>
                        </IonItem>
                      );
                    })}
                  </IonList>
                )}
              </div>
            </IonPage>
          </IonSplitPane>
        </IonContent>
      </IonPage>
    );
  }
};
export default Profile;
function dbdb90d7bcad5c3e9b0cff213c7b254a8270cd6275adcdb4c51ff85078d4f7(AddParticipantToProject: damlTypes.Choice<RequestToJoinProject, import("@daml.js/cosmart-0.0.1/lib/Main").AddParticipantToProject, damlTypes.ContractId<ClientProject>, undefined>, arg1: number, dbdb90d7bcad5c3e9b0cff213c7b254a8270cd6275adcdb4c51ff85078d4f7: any, formData: { participant: { isAuthenticated: false; } | { isAuthenticated: true; token: string; party: string; }; client: string; operator: string; projectId: string; }) {
  throw new Error("Function not implemented.");
}

