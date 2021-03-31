import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from '../../assets/img/logo-combination.svg';
import { getSelectedSubmission, setSelectedSubmission } from '../../context/SharedContext'
import { arrowBack, add } from 'ionicons/icons';
import submissionPlaceHolder from '../../assets/img/img-proj-placeholder.png'
import './Submission.scss'
import { useLedger, useStreamQueries } from "@daml/react";
import { ClientProject, ParticipantSubmission, ParticipantSubmissionProposal } from "@daml.js/cosmart-0.0.1/lib/Main";
import { signOut, useUserDispatch, useUserState } from "../../context/UserContext";

const Submission = (props : RouteComponentProps) => {
    const [searchText, setSearchText] = useState('');
    const selectedSubmission = getSelectedSubmission();
    console.log('selectedSubmission', selectedSubmission);

    const user = useUserState();
    var userDispatch = useUserDispatch();
    const ledger = useLedger();
    const submission = useStreamQueries(ParticipantSubmission, ()=> [{submissionId: selectedSubmission.payload.submissionId}]).contracts;
    const selectedProj = useStreamQueries(ClientProject, () => ([{projectId: selectedSubmission.payload.projectId}])).contracts;
    const getCurrentUserType = (): '' | 'client' | 'participant' | 'judge' => {
        if ((user as any).party){
            if(submission.filter(c => c.payload.participant === (user as any).party).length > 0){
                return 'participant'
            }       
            if(selectedProj.filter(c => (user as any).party === c.payload.client).length > 0){
                return 'client';
            }
        }
        return 'judge'
    } 
    console.log('submission', submission);

    const JudgingComponent = (judgingProps: any) => {
        const [criterias, setCriterias] = useState(getSelectedSubmission().payload.criteria as Array<{name: string, point: string}>);
        return (
            <div>
                {
                    criterias.map((c, idx) => (
                            <IonItem>
                                <IonLabel position="floating">{c.name}</IonLabel>
                                <IonInput type="number"
                                 onIonChange={e => {
                                     const cs = criterias;
                                     cs[idx].point = e.detail.value!;
                                     setCriterias(cs);
                                 }}
                                 value={Number(c.point)}></IonInput>
                            </IonItem>
                    ))
                }
                <IonButton onClick={
                    e => {
                        ledger.exercise(ParticipantSubmission.SubmitScorecard, submission[0].contractId, {scores: criterias})
                        .then(r => {
                            console.log('r', r);
                            alert("Judging has been sent successfully!");
                            const ss = getSelectedSubmission();
                            ss.payload.criteria = criterias;
                            setSelectedSubmission(ss);
                        })
                        .catch(e => {
                            alert(JSON.stringify(e));
                        })
                        
                    }
                }>
                    JUDGE    
                </IonButton>
            </div>
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
            <IonContent className="submission-content">
                <div className="submission-wrapper">
                    <div className="nav-info-header">
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
                    </div>
                    <div className="submission-info-container">
                        <div className="submission-img">
                            <img src={submissionPlaceHolder} alt="submission image"/>
                        </div>
                        <div className="short-info-container">
                            <h1>{selectedSubmission.payload.name}</h1>
                            <p>
                            {selectedSubmission.payload.submission}
                            </p>
                            <h1>Technologies</h1>
                            <p><strong>DAML</strong></p>
                        </div>
                    </div>
                    <div className="idea-teammate-steps">
                        <div className="idea-teammate">
                            <div className="the-idea">
                                <h1>About the idea</h1>
                                <p>What is the Idea about: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo suscipit, elementum metus vel, tempus massa. Curabitur ac felis eu lorem congue pharetra. In ut felis lobortis, ultricies erat et, scelerisque ligula. Suspendisse lectus nulla, venenatis quis vulputate ac, 

        fringilla a ex. Nullam gravida nunc sed purus malesuada malesuada. Aliquam erat volutpat. Cras leo sapien, tempor in accumsan vestibulum, laoreet eget arcu. Praesent egestas suscipit lectus, sit amet dictum augue.</p>
                            </div>
                            <div className="teammate">
                                <div className="d-flex align-items-center teammate-head">
                                    <h1>Team</h1>
                                    {
                                        (getCurrentUserType() === 'participant' && submission.length > 0) ? (
                                            <IonFab>
                                                <IonFabButton onClick={async e =>
                                                    {
                                                        function validateEmail(email: string) {
                                                            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                            return re.test(email);
                                                        }
                                                        const email = prompt('Enter the participant email');
                                                        const participantToAdd = prompt('Enter the participant name');
                                                        if(email){
                                                            if(validateEmail(email)){
                                                                await ledger.exercise(ParticipantSubmission.ProposeTeammate, submission[0].contractId, {email, participantToAdd});
                                                                alert("Teammate request has been sent successfully!");
                                                            }else{
                                                                alert(email + " is not a valid email!");
                                                            }
                                                        }
                                                    }
                                                }>
                                                    <IonIcon icon={add} />
                                                </IonFabButton>
                                            </IonFab>
                                        ) : null
                                    }
                                </div>
                                <div className="teammate-container">
                                    {
                                        submission.map(c => (
                                            <div className="team-member">
                                                <img src="https://via.placeholder.com/152x128.png" alt="team member image"/>
                                                <p>{c.payload.participant}</p>
                                            </div>
                                        ))
                                    }
                                    {
                                        submission.map(c => (
                                            c.payload.participants.map(p => (
                                                <div className="team-member">
                                                    <img src="https://via.placeholder.com/152x128.png" alt="team member image"/>
                                                    <p>{p}</p>
                                                </div>
                                            ))
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="steps-container">
                                <div className="step">
                                    <div className="circle">
                                        <p>1</p>
                                    </div>
                                    <p>STEP 1:  Lorem ipsum dolor sit amet, consectetur </p>
                                </div>
                                <div className="step">
                                    <div className="circle">
                                        <p>2</p>
                                    </div>
                                    <p>STEP 2:  Lorem ipsum dolor sit amet, consectetur </p>
                                </div>
                                <div className="step">
                                    <div className="circle">
                                        <p>3</p>
                                    </div>
                                    <p>STEP 3:  Lorem ipsum dolor sit amet, consectetur </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Submission;