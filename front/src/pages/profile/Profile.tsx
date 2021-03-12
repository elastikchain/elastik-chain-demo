import { IonPage, IonHeader, IonToolbar, IonSearchbar, IonButtons, IonButton, IonContent, IonMenu, IonSplitPane, IonTitle, IonItem, IonList, IonLabel, IonModal, IonInput, IonListHeader, IonTextarea, IonDatetime } from "@ionic/react";
import { IonIcon } from '@ionic/react';
import { open, close } from 'ionicons/icons';

import React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import logo from '../../assets/img/logo-combination.svg';
import menuItemImg from '../../assets/img/img-menu-item.png';


import './Profile.scss';
import { useLedger, useStreamQueries } from "@daml/react";
import { signOut, useUserDispatch, useUserState } from "../../context/UserContext";
import { ClientRole, ClientProject, ClientInvitation, AcceptRequest, ParticipantInvitation, ProposeSubmission, CreateProject, ParticipantSubmissionProposal, ParticipantSubmission } from "@daml.js/cosmart-0.0.1/lib/Main";
import { setSelectedProject } from "../../context/SharedContext";
import * as damlTypes from '@daml/types';
import CriteriaTagsInput from "../../components/CriteriaTagsInput/CriteriaTagsInput";
interface CriteriaPoint {
    name: string;
    point: damlTypes.Numeric;
}
const Profile = (props : RouteComponentProps) => {
    var userDispatch = useUserDispatch();
    const user = useUserState();
    const [searchText, setSearchText] = useState('');
    const [projectIdTouched, setProjectIdTouched] = useState(false);
    const defaultProjectDetail: CreateProject = { 
        projectId: "",
        name: "",
        desc: "",
        location: "",
        startDate: "",
        endDate: "",
        criteria: Array<CriteriaPoint>()
    };
    const [projectDetail, setProjectDetail] = useState(defaultProjectDetail);
    const resetCreateProject = () => {
        setProjectDetail(defaultProjectDetail);
        setProjectIdTouched(false);
    }; 
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

    const defaultSubmissionDetail: ProposeSubmission = { 
        challengeId: "",
        participant: (user as any).party,
        subName: "",
        subDesc: "",
        submission: ""
    };
    const [submissionDetail, setSubmissionDetail] = useState(defaultSubmissionDetail);
    const resetCreateSubmission = () => {
        setSubmissionDetail(defaultSubmissionDetail);
    }; 
    const [showCreateSubmissionModal, setShowCreateSubmissionModal] = useState(false);

    const ledger = useLedger();
    const clientInvitationAssets = useStreamQueries(ClientInvitation).contracts;
    console.log('clientInvitationAssets', clientInvitationAssets);
    
    const participantInvitationAssets = useStreamQueries(
        ParticipantInvitation,
        () => ([{participant: (user as any).party}])
    )
    const clientProjectAssets = useStreamQueries(ClientProject).contracts; 
    console.log('clientProjectAssets', clientProjectAssets);

    const projectAssets = useStreamQueries(ClientRole).contracts;
    console.log('projectAssets', projectAssets);
    
    const submissionAssets = useStreamQueries(ClientProject);
    console.log('submissionAssets', submissionAssets);

    const pParticipantSubmission = useStreamQueries(ParticipantSubmission).contracts;
    console.log('pParticipantSubmission', pParticipantSubmission);


    const handleCreateProject = async (evt: any) => {
        evt.preventDefault();
        ledger.exercise(ClientRole.CreateProject, projectAssets[0].contractId, projectDetail)
        .then(() => {
            setShowCreateProjectModal(false);
            alert('Project Created Successfully!');
            // reset project detail info
            setTimeout(() => {
                resetCreateProject();
            }, 250);
        })
        .catch((err: any) => {
            setShowCreateProjectModal(false);
            alert('Error: '+JSON.stringify(err));
        })
    };

    const handleCreateSubmission = async (evt: any) => {
        evt.preventDefault();
        ledger.exercise(ClientProject.ProposeSubmission, submissionAssets.contracts[0].contractId, submissionDetail)
        .then(() => {
            setShowCreateSubmissionModal(false);
            alert('Submission Created Successfully!');
            // reset project detail info
            setTimeout(() => {
                resetCreateSubmission();
            }, 250);
        })
        .catch((err: any) => {
            setShowCreateSubmissionModal(false);
            alert('Error: '+JSON.stringify(err));
        })

    };
    if(!user.isAuthenticated){
        return null;
    } else {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar className="toolbar">
                        <div className="d-flex">
                        <img className="app-logo" src={logo} alt="logo"/>
                        <IonSearchbar 
                        placeholder="Explore amazing ideas"
                        value={searchText} onIonChange={(e: any) => setSearchText(e.detail.value!)}></IonSearchbar>  
                        </div>
                        <IonButtons slot="end" className="toolbar-buttons-container">
                        <div className="toolbar-buttons">
                            <IonButton>
                                Explore
                            </IonButton>
                            <IonButton onClick={ (evt: any) => {
                                signOut(
                                    userDispatch,
                                    props.history,
                                    false
                                )
                            }
                            }>
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
                                    <img slot="start" src={menuItemImg} alt="menu item"/>
                                    <IonLabel>Profile</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <img slot="start" src={menuItemImg} alt="menu item"/>
                                    <IonLabel>Account Settings</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <img slot="start" src={menuItemImg} alt="menu item"/>
                                    <IonLabel>Password</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <img slot="start" src={menuItemImg} alt="menu item"/>
                                    <IonLabel>App preferences</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonContent>
                        </IonMenu>
                        {/*-- the main content --*/}
                        <IonPage id="main">
                            <IonModal isOpen={showCreateProjectModal} onDidDismiss={() => setShowCreateProjectModal(false) } cssClass='my-custom-class'>
                                <div className="content create-project-modal-content">
                                    <form onSubmit={handleCreateProject}>
                                        <h1>Create Project</h1>
                                        <div className="flex-equal-childs-width">
                                            <IonItem>
                                                <IonLabel position="floating">Project Name</IonLabel>
                                                <IonInput required={true} value={projectDetail.name} onIonChange={e => {
                                                    let projId = projectDetail.projectId;
                                                    if(!projectIdTouched){
                                                        const d = new Date();
                                                        projId = e.detail.value!.replace(/\W/g,'_')+'_'+(d.getSeconds()+d.getMinutes()+d.getMilliseconds())
                                                        projId = projId.toLowerCase();
                                                    }
                                                    setProjectDetail({...projectDetail, name: e.detail.value!, projectId: projId})
                                                    }}></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel position="floating">Project ID</IonLabel>
                                                <IonInput required={true} value={projectDetail.projectId} 
                                                onFocus={e => {
                                                    setProjectIdTouched(true);
                                                }}
                                                onIonChange={e => {
                                                    setProjectDetail({...projectDetail, projectId: e.detail.value!});
                                                    }}></IonInput>
                                            </IonItem>
                                        </div>
                                        <IonItem>
                                            <IonLabel position="floating">Location</IonLabel>
                                            <IonInput required={true} value={projectDetail.location} onIonChange={e => setProjectDetail({...projectDetail, location: e.detail.value!})}></IonInput>
                                        </IonItem>
                                        <div className="criteria-tags-container">
                                            <CriteriaTagsInput onChange={(tags) => {
                                                const arrCriteriaPoint = tags.map(t => ({name: t.name, point: '0'} as CriteriaPoint));
                                                setProjectDetail({...projectDetail, criteria: arrCriteriaPoint})
                                                }}></CriteriaTagsInput>
                                        </div>
                                        <div className="flex-equal-childs-width">
                                            <IonItem>
                                                <IonLabel>Start Date</IonLabel>
                                                <IonDatetime displayFormat="MM DD YYYY, HH:mm" placeholder="Select Start Date" value={projectDetail.startDate} onIonChange={e => setProjectDetail({...projectDetail, startDate: new Date(e.detail.value!).toISOString()})}></IonDatetime>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel>End Date</IonLabel>
                                                <IonDatetime displayFormat="MM DD YYYY, HH:mm" placeholder="Select End Date" value={projectDetail.endDate} onIonChange={e => setProjectDetail({...projectDetail, endDate: new Date(e.detail.value!).toISOString()})}></IonDatetime>
                                            </IonItem>
                                        </div>
                                        <IonItem>
                                            <IonLabel position="floating">Project Description</IonLabel>
                                            <IonTextarea rows={2} value={projectDetail.desc} onIonChange={e => setProjectDetail({...projectDetail, desc: e.detail.value!})}></IonTextarea>
                                        </IonItem>
                                        <IonButton className="submit-button" type="submit">Create</IonButton>
                                    </form>
                                </div>
                                <IonButton className="modal-default-close-btn" fill="clear" color="danger" onClick={() =>{
                                    resetCreateProject();
                                    setShowCreateProjectModal(false) 
                                }}>
                                    <IonIcon icon={close}></IonIcon>
                                </IonButton>
                            </IonModal>
                            <IonModal isOpen={showCreateSubmissionModal} onDidDismiss={() => setShowCreateSubmissionModal(false) } cssClass='my-custom-class'>
                                <div className="content create-project-modal-content">
                                    <form onSubmit={handleCreateSubmission}>
                                        <h1>Propose Submission</h1>{/*subName: "", subDesc: "", submission: "" */}
                                        <IonItem>
                                            <IonLabel position="floating">Submission Name</IonLabel>
                                            <IonInput required={true} value={submissionDetail.subName} onIonChange={e => setSubmissionDetail({...submissionDetail, subName: e.detail.value!})}></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel position="floating">Submission Description</IonLabel>
                                            <IonInput required={true} value={submissionDetail.subDesc} onIonChange={e => setSubmissionDetail({...submissionDetail, subDesc: e.detail.value!})}></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel position="floating">Submission</IonLabel>
                                            <IonInput required={true} value={submissionDetail.submission} onIonChange={e => setSubmissionDetail({...submissionDetail, submission: e.detail.value!})}></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel position="floating">Challenge Id</IonLabel>
                                            <IonInput required={true} value={submissionDetail.submission} onIonChange={e => setSubmissionDetail({...submissionDetail, challengeId: e.detail.value!})}></IonInput>
                                        </IonItem>
                                        
                                        <IonButton className="submit-button" type="submit">Create</IonButton>
                                    </form>
                                </div>
                                <IonButton className="modal-default-close-btn" fill="clear" color="danger" onClick={() =>{
                                    resetCreateProject();
                                    setShowCreateProjectModal(false) 
                                }}>
                                    <IonIcon icon={close}></IonIcon>
                                </IonButton>
                            </IonModal>
                            <div className="wrapper">
                                <div className="profile-info-container">
                                    <div className="profile-img-container">
                                        <img src="https://via.placeholder.com/214x198.png" alt="profile image"/>
                                    </div>
                                    <div className="profile-info">
                                        <div className="profile-header">
                                            <IonLabel color="secondary">{(user as any).party}
                                            {
                                                clientInvitationAssets.filter((c: any) => (user as any).party === c.payload.client).map((a: any) => (
                                                    <IonButton
                                                    onClick={async e => {
                                                        await ledger.exercise(ClientInvitation.AcceptRequest, a.contractId, AcceptRequest);
                                                        alert('Your request accepted successfully!');
                                                    }
                                                    }
                                                    > Accept Invitation</IonButton>
                                                ))
                                            }
                                            {
                                                (participantInvitationAssets.contracts || []).filter(c => (user as any).party === c.payload.participant).map(a => (
                                                    <IonButton
                                                    onClick={async e => {
                                                        await ledger.exercise(ParticipantInvitation.AcceptParticipantRequest, a.contractId, AcceptRequest);
                                                        alert('Your request accepted successfully!');
                                                    }
                                                    }
                                                    > Accept Invitation As Participant</IonButton>
                                                ))
                                            }
                                            </IonLabel>
                                            <IonButton size="large"> Edit </IonButton>
                                        </div>
                                        <div className="profile-about">
                                            <h1>About me</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque. Nulla quae pariatur voluptas, tenetur perferendis voluptatibus incidunt provident impedit sapiente eius voluptatum perspiciatis sint quisquam iste nam cupiditate dolores.</p>
                                            <p>Linkedin: <a href="#">Information here</a></p>
                                            <p>Github: <a href="#">Information here</a></p>
                                            {
                                                projectAssets.filter((c: any) => (user as any).party === c.payload.client).map((a: any) => {
                                                    return (
                                                        <IonButton 
                                                        onClick={() => setShowCreateProjectModal(true)}
                                                        className="create-project-button"> Create New Project </IonButton>
                                                    )
                                                })
                                            }
                                            {
                                                submissionAssets.contracts.filter(c => (c.payload.participants || []).indexOf((user as any).party) >= 0).map((a: any) => {
                                                    return (
                                                        <IonButton 
                                                        onClick={() => setShowCreateSubmissionModal(true)}
                                                        className="create-project-button"> Create New Submission </IonButton>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                {
                                    (clientProjectAssets.filter((c: any) => (user as any).party === c.payload.client).length > 0) ? (
                                        <IonList>
                                            <IonListHeader>
                                                Created Projects
                                            </IonListHeader>
                                            {
                                                clientProjectAssets.filter((c: any) => (user as any).party === c.payload.client).map(p => {
                                                    return (
                                                        <IonItem onClick={ e => {
                                                            e.preventDefault();
                                                            console.log('the selected::', p);
                                                            
                                                            setSelectedProject(p);
                                                            props.history.push('/main/project?id='+p.payload.projectId);
                                                        }
                                                        }>
                                                            <IonIcon slot="start" icon={open}></IonIcon>
                                                            <IonLabel className="project-info">name: {p.payload.name}, id: {p.payload.projectId}</IonLabel>
                                                        </IonItem> 
                                                    )
                                                })
                                            }
                                        </IonList>
                                    ) : null
                                }
                            </div>
                        </IonPage>
                    </IonSplitPane>
                </IonContent>
            </IonPage>
        );
      }
};
export default Profile;
