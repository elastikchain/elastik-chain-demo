import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonNote, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSpinner, IonTextarea, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { signOut, useUserDispatch, useUserState } from "../../context/UserContext";
import { getSelectedProject, setSelectedSubmission } from '../../context/SharedContext'
import logo from '../../assets/img/logo-combination.svg';
import { add, close, arrowBack, time, location, open } from 'ionicons/icons';
import './Project.scss';
import { useLedger, useQuery, useStreamQueries } from "@daml/react";
import { AddChallenge, Challenge, ClientProject, ClientRole, ParticipantSubmission, ProposeSubmission } from "@daml.js/cosmart-0.0.1/lib/Main";

const Project = (props : RouteComponentProps) => {
    const user = useUserState();
    var userDispatch = useUserDispatch();
    const ledger = useLedger();
    console.log('getSelectedProject', getSelectedProject());
    
    const selectedProj = useStreamQueries(ClientProject, () => ([{projectId: getSelectedProject().payload.projectId}])).contracts;
    const submissions = useStreamQueries(ParticipantSubmission, ()=> [{client: getSelectedProject().payload.client}]).contracts;
    const client = useStreamQueries(ClientRole).contracts
    const getUserType = (): '' | 'client' | 'participant' | 'judge' => {
        if(selectedProj.filter(c => c.payload.participants.indexOf((user as any).party) > -1).length > 0){
            return 'participant'
        }       
        if(selectedProj.filter(c => (user as any).party === c.payload.client).length > 0){
            return 'client';
        }

        return ''
    }    

    const [searchText, setSearchText] = useState('');
    const [showChallengeModal, setShowChallengeModal] = useState(false);
    
    const [challengeIdTouched, setChallengeIdTouched] = useState(false);
    const defaultChallengeDetail: AddChallenge = { 
        challengeId: '',
        nameOf: '',
        description: '',
        prize: ''
    };
    const [challengeDetail, setChallengeDetail] = useState(defaultChallengeDetail);
    const resetCreateChallenge = () => {
        setChallengeDetail(defaultChallengeDetail);
        setChallengeIdTouched(false);
    }; 

    const handleChallengeSubmit = async (evt: any) => {
        evt.preventDefault();
        ledger.exercise(ClientProject.AddChallenge, selectedProj[0]!.contractId, challengeDetail)
        .then(() => {
            setShowChallengeModal(false);
            alert('Challenge Created Successfully!');
            // reset project detail info
            setTimeout(() => {
                resetCreateChallenge();
                setTimeout(() => {
                    console.log('selectedProj>>', selectedProj);
                }, 1000);
            }, 250);
        })
        .catch((err: any) => {
            setShowChallengeModal(false);
            alert('Error: '+JSON.stringify(err));
        })
    };

    const formattedDate = (dateStr: string) => {
        const dateTimeFormatOptions: Intl.DateTimeFormatOptions = 
        {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', hour12: false, minute: '2-digit'};
        return new Date(dateStr).toLocaleDateString("en-US", dateTimeFormatOptions)
    }

    const [selectedChallengeId, setSelectedChallengeId] = useState(0);
    const [showCreateSubmissionModal, setShowCreateSubmissionModal] = useState({show: false, challengeId : ''} as {show: boolean, challengeId?: string});
    const ChallengeCompoenent  = (props: any) => {
        const stream = useQuery(Challenge, () => ({challengeId: props.challengeId}), []);
        console.log('Challenge get', stream, 'challengeId: props.challengeId=', props.challengeId);
        
        if ((stream.contracts || []).length > 0){
            return (
                <IonCard>
                    <div className="d-flex">
                        <IonCardContent>
                            <h1 className="proj-chall-name">{stream.contracts[0].payload.nameOf} <IonNote>Id: {props.challengeId}</IonNote></h1>
                            <h2 className="proj-chall-example">Dolor sit amet</h2>
                            <p className="proj-chall-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quos perspiciatis officiis aliquid, corrupti nobis rem iure explicabo dignissimos magni ducimus quo assumenda provident ad possimus voluptatem saepe reprehenderit nam.</p>
                            <p>Fund: ${stream.contracts[0].payload.prize}</p>
                            {
                                getUserType() === 'participant' ? (
                                    <IonButton 
                                        onClick={() => {
                                            setSelectedChallengeId(props.challengeId);
                                            setShowCreateSubmissionModal({show: true, challengeId: props.challengeId});
                                        }}
                                        className="create-project-button"> Create New Submission </IonButton>
                                ) : null
                            }
                        </IonCardContent>
                    </div>
                </IonCard>
            )
        }else return null;
    };

    const [selectedSegement, setSelectedSegement] = useState('submissions');

    const getChallengesIds = () => {
        return (selectedProj && selectedProj.length > 0 ? selectedProj[0] : {payload: {}}).payload.challenges || [];
    }

    const SubmissionFormComponent = (props: any) => {
        const defaultSubmissionDetail: ProposeSubmission = { 
            challengeId: "",
            participant: (user as any).party,
            subName: "",
            subDesc: "",
            submission: "",
            judge: "Yuling",
            presentation: "",
            videoLink: ""
        };
        const [submissionDetail, setSubmissionDetail] = useState(defaultSubmissionDetail);
        const resetCreateSubmission = () => {
            setSubmissionDetail(defaultSubmissionDetail);
        }; 
        const handleCreateSubmission = async (evt: any) => {
            evt.preventDefault();
            const dataToExercise = submissionDetail;
            dataToExercise.challengeId = String(selectedChallengeId || 0);
            ledger.exercise(ClientProject.ProposeSubmission, selectedProj[0].contractId, dataToExercise)
            .then(() => {
                setShowCreateSubmissionModal({show: false});
                alert('Submission Created Successfully!');
                // reset project detail info
                setTimeout(() => {
                    resetCreateSubmission();
                }, 250);
            })
            .catch((err: any) => {
                setShowCreateSubmissionModal({show: false});
                alert('Error: '+JSON.stringify(err));
            })
        };
        return (
            <><div className="content create-project-modal-content">
                <form onSubmit={handleCreateSubmission}>
                    <h1>Propose Submission</h1>
                    <IonItem>
                        <IonLabel position="floating">Submission Name*</IonLabel>
                        <IonInput required={true} value={submissionDetail.subName} onIonChange={e => setSubmissionDetail({ ...submissionDetail, subName: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Submission Description*</IonLabel>
                        <IonInput required={true} value={submissionDetail.subDesc} onIonChange={e => setSubmissionDetail({ ...submissionDetail, subDesc: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Submission*</IonLabel>
                        <IonInput required={true} value={submissionDetail.submission} onIonChange={e => setSubmissionDetail({ ...submissionDetail, submission: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Presentation*</IonLabel>
                        <IonInput required={true} value={submissionDetail.presentation} onIonChange={e => setSubmissionDetail({ ...submissionDetail, presentation: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Video Link</IonLabel>
                        <IonInput value={submissionDetail.videoLink} onIonChange={e => setSubmissionDetail({ ...submissionDetail, videoLink: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Challenge Id</IonLabel>
                        <IonInput required={true} disabled={true} value={submissionDetail.challengeId || showCreateSubmissionModal.challengeId} onIonChange={e => setSubmissionDetail({ ...submissionDetail, challengeId: e.detail.value! })}></IonInput>
                    </IonItem>
                    <IonButton className="submit-button" type="submit">Create</IonButton>
                </form>
            </div>
                <IonButton className="modal-default-close-btn" fill="clear" color="danger" onClick={() => {
                    resetCreateSubmission();
                    setShowCreateSubmissionModal({ show: false });
                } }>
                    <IonIcon icon={close}></IonIcon>
                </IonButton></>
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="toolbar">
                    <div className="d-flex">
                    <img className="app-logo" src={logo} alt="logo"/>
                    <IonSearchbar 
                    placeholder="Explore amazing ideas"
                    value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>  
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
                <div className="proj-wrapper">
                    <IonButton fill="clear" onClick={e => props.history.goBack() }>
                        <IonIcon slot="start" icon={arrowBack}></IonIcon>
                        Back
                    </IonButton>
                    <IonCard>
                        <img className="project-picture" src={getSelectedProject().payload.pictureUrl} alt="project image"/>
                        <IonCardContent>
                            <div className="d-flex align-items-center justify-content-space-between">
                                <IonLabel>
                                    <div className="d-flex align-items-center">
                                        <IonIcon className="m-right" slot="start" icon={time}></IonIcon>
                                        <span>From: {formattedDate(getSelectedProject().payload.startDate)}, to : {formattedDate(getSelectedProject().payload.endDate)}</span>
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
                        </IonCardContent>
                    </IonCard>
                    <h1>
                    {getSelectedProject().payload.name} <IonNote>Id: {getSelectedProject().payload.projectId}</IonNote>
                    </h1>
                    <p>{getSelectedProject().payload.desc}</p>
                    <IonNote>
                        Judging criteria: {getSelectedProject().payload.criteria.map((c: any) => c.name).join(', ')}
                    </IonNote>
                    {
                        <div className="text-align-start">
                            <div className="pos-relative">
                                <IonSegment className="justify-content-start" color="secondary" onIonChange={e => setSelectedSegement(e.detail.value!)} 
                                value={selectedSegement}>
                                    <IonSegmentButton value="submissions">
                                        <IonLabel>Submissions ({submissions.length})</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="challenges" disabled={getChallengesIds().length < 1}>
                                        <IonLabel>Challenges ({getChallengesIds().length})</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                                {
                                    getUserType() === 'client' ? (
                                    <IonFab vertical="top" horizontal="end">
                                        <IonFabButton onClick={e =>
                                            setShowChallengeModal(true)
                                        }>
                                            <IonIcon icon={add} />
                                        </IonFabButton>
                                    </IonFab>
                                    ) : null
                                }
                                
                            </div>
                            {
                                selectedSegement === 'challenges' ? (
                                    getChallengesIds().map(c => 
                                        (
                                            <ChallengeCompoenent challengeId={c}></ChallengeCompoenent>
                                        )
                                    )
                                ) : (
                                    submissions.map(sc => 
                                        <IonCard className="submission-card"
                                            onClick={ e => {
                                                e.preventDefault();
                                                const selectedSub = sc as any;  
                                                selectedSub.payload.projectId = getSelectedProject().payload.projectId;
                                                setSelectedSubmission(selectedSub);
                                                props.history.push('/main/submission?id='+sc.payload.submissionId);
                                            }
                                        }>
                                            <div className="d-flex">
                                                <IonCardContent>
                                                    <h1 className="proj-chall-name">{sc.payload.submissionId}</h1>
                                                    <h2 className="proj-chall-example">Dolor sit amet</h2>
                                                    <p className="proj-chall-description">{sc.payload.submission}, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quos perspiciatis officiis aliquid, corrupti nobis rem iure explicabo dignissimos magni ducimus quo assumenda provident ad possimus voluptatem saepe reprehenderit nam.</p>
                                                </IonCardContent>
                                            </div>
                                        </IonCard>
                                    )
                                )
                            }
                        </div>
                    }
                </div>
                <IonModal isOpen={showChallengeModal} onDidDismiss={() => setShowChallengeModal(false) } cssClass='my-custom-class'>
                    <div className="content challenge-modal-content">
                        <h1>Create Challenge</h1>
                        <form onSubmit={handleChallengeSubmit}>
                            <div className="flex-equal-childs-width">
                                <IonItem>
                                    <IonLabel position="floating">Challenge Name</IonLabel>
                                    <IonInput required={true} value={challengeDetail.nameOf} onIonChange={e => {
                                        let id = challengeDetail.challengeId;
                                        if(!challengeIdTouched){
                                            const d = new Date();
                                            id = e.detail.value!.replace(/\W/g,'_')+'_'+(d.getSeconds()+d.getMinutes()+d.getMilliseconds())
                                            id = id.toLowerCase();
                                        }
                                        setChallengeDetail({...challengeDetail, nameOf: e.detail.value!, challengeId: id})
                                        }}></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Challenge ID</IonLabel>
                                    <IonInput required={true} value={challengeDetail.challengeId} 
                                    onFocus={e => {
                                        setChallengeIdTouched(true);
                                    }}
                                    onIonChange={e => {
                                        setChallengeDetail({...challengeDetail, challengeId: e.detail.value!});
                                        }}></IonInput>
                                </IonItem>
                            </div>
                            <IonItem>
                                <IonLabel position="floating">Challenge Description</IonLabel>
                                <IonTextarea rows={2} value={challengeDetail.description} onIonChange={e => setChallengeDetail({...challengeDetail, description: e.detail.value!})}></IonTextarea>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Challenge Prize</IonLabel>
                                <IonInput required={true} type="number" value={challengeDetail.prize} onIonChange={e => setChallengeDetail({...challengeDetail, prize: e.detail.value!})}></IonInput>
                            </IonItem>
                            <IonButton className="submit-button" type="submit">Create</IonButton>
                        </form>
                        <IonButton className="modal-default-close-btn" fill="clear" color="danger" onClick={() =>{
                            setShowChallengeModal(false) 
                        }}>
                        <IonIcon icon={close}></IonIcon>
                        </IonButton>
                    </div>
                </IonModal>
                <IonModal isOpen={showCreateSubmissionModal.show} onDidDismiss={() => setShowCreateSubmissionModal({show: false}) } cssClass='my-custom-class'>
                    <SubmissionFormComponent></SubmissionFormComponent>
                </IonModal>
            </IonContent>
        </IonPage>
    )
}
export default Project;

