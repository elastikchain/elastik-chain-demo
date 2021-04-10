import { IonButton, IonButtons, IonCard, IonCardContent, IonContent,IonDatetime, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonNote, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSpinner, IonTextarea, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { signOut, useUserDispatch, useUserState } from "../../context/UserContext";
import { getSelectedProject, setSelectedSubmission } from '../../context/SharedContext'
import logo from '../../assets/img/logo-combination.svg';
import { add, close, arrowBack, time, location, open } from 'ionicons/icons';
import './Project.scss';
import { useLedger, useQuery, useStreamQueries } from "@daml/react";
import { AddChallenge, Challenge, ClientProject, ClientRole, ParticipantSubmission, ProposeSubmission } from "@daml.js/cosmart-0.0.1/lib/Main";

const EditProject = (props : RouteComponentProps) => {
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
        prize: '',
        participant: 'Andy',
        judge: 'Yuling'
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
        const stream = useQuery(Challenge, () => ({challengeId: props.challengeId}), [props.challengeId]);
        console.log('Challenge get', stream, 'challengeId: props.challengeId=', props.challengeId);
        
        if ((stream.contracts || []).length > 0){
            return (
                <IonCard>
                    <div className="d-flex" id="view-project">
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
    console.log(getSelectedProject().payload);
    const [selectedSegement, setSelectedSegement] = useState('submissions');

    const getChallengesIds = () => {
        return (selectedProj && selectedProj.length > 0 ? selectedProj[0] : {payload: {}}).payload.challenges || [];
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
            <div className="edi-project">
                 <IonItem>
                      <IonLabel position="floating">Project Name</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.name}
                        ></IonInput>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Project ID</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.projectId}
                        ></IonInput>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Description</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.desc}
                        ></IonInput>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Start Date</IonLabel>
                        <IonDatetime
                            displayFormat="MM DD YYYY, HH:mm"
                            display-timezone="utc"
                            value={getSelectedProject().payload.startDate}
                        ></IonDatetime>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">End Date</IonLabel>
                        <IonDatetime
                            displayFormat="MM DD YYYY, HH:mm"
                            display-timezone="utc"
                            value={getSelectedProject().payload.endDate}
                        ></IonDatetime>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Location</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.location}
                        ></IonInput>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Criteria</IonLabel>
                      {getSelectedProject().payload.criteria.map((row:any, i:any) =>
                        <IonList>
                          <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput
                                display-timezone="utc"
                                value={row.name}
                            ></IonInput>
                          </IonItem>
                          
                          <IonItem>
                          <IonLabel position="floating">Point</IonLabel>
                          <IonInput
                              display-timezone="utc"
                              value={row.point}
                          ></IonInput>
                        </IonItem>
                        </IonList>
                      ) }
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Public</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.public}
                        ></IonInput>
                 </IonItem>
                 <IonItem>
                      <IonLabel position="floating">Picture URL</IonLabel>
                        <IonInput
                            required={true}
                            value={getSelectedProject().payload.pictureUrl}
                        ></IonInput>
                 </IonItem>
                 <IonButton
                      className="submit-button"
                      type="button"
                    >
                      Update Project
                    </IonButton>
                 </div>
                 </div>
            </IonContent>
        </IonPage>
    )
}
export default EditProject;

