import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { signOut, useUserDispatch, useUserState } from "../../context/UserContext";
import { getSelectedProject } from '../../context/SharedContext'
import logo from '../../assets/img/logo-combination.svg';
import { add, close } from 'ionicons/icons';
import './Project.scss';
import { useLedger, useQuery, useStreamFetchByKeys, useStreamQueries } from "@daml/react";
import { Challenge, ClientProject } from "@daml.js/cosmart-0.0.1/lib/Main";

const Project = (props : RouteComponentProps) => {
    const user = useUserState();
    var userDispatch = useUserDispatch();
    const [searchText, setSearchText] = useState('');
    const [showChallengeModal, setShowChallengeModal] = useState(false);
    const ledger = useLedger();
    const selectedProj = useStreamQueries(ClientProject, () => ([{projectId: getSelectedProject().payload.projectId}]), [getSelectedProject().payload.projectId]);
    //useStreamFetchByKeys(ClientProject, () => [getSelectedProject().contractId], [getSelectedProject().contractId]);
    console.log('selectedProj', selectedProj);
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};
    const [challengeIdTouched, setChallengeIdTouched] = useState(false);
    const defaultChallengeDetail = { 
        challengeId: '',
        nameOf: '',
        prize: ''
    };
    const [challengeDetail, setChallengeDetail] = useState(defaultChallengeDetail);
    const resetCreateChallenge = () => {
        setChallengeDetail(defaultChallengeDetail);
        setChallengeIdTouched(false);
    }; 

    const handleChallengeSubmit = async (evt: any) => {
        evt.preventDefault();
        ledger.exercise(ClientProject.AddChallenge, selectedProj.contracts[0]!.contractId, challengeDetail)
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


    const ChallengeCompoenent  = (props: any) => {
        const stream = useQuery(Challenge, () => ({challengeId: props.challengeId}), [props.challengeId]);
        if ((stream.contracts || []).length > 0){
            return (
                <div>
                    <p>Challenge Name: {stream.contracts[0].payload.nameOf}</p>
                    <p>Challenge Prize: {stream.contracts[0].payload.prize}</p>
                </div>
            )
        }else return null;
    };

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
                <h2>Project Info: </h2>
                <IonList>
                    <IonItem>
                        Name: {getSelectedProject().payload.name}, Id: {getSelectedProject().payload.projectId}
                    </IonItem>
                    <IonItem>
                        Description: {getSelectedProject().payload.desc}
                    </IonItem>
                    <IonItem>
                        Location: {getSelectedProject().payload.location}
                    </IonItem>
                    {getSelectedProject().payload.startDate ? (
                        <IonItem>
                            Start Date: {new Date(getSelectedProject().payload.startDate).toLocaleDateString("en-US", dateTimeFormatOptions)}
                        </IonItem>
                        ) : null }
                    {getSelectedProject().payload.endDate ? (
                        <IonItem>
                            End Date: {new Date(getSelectedProject().payload.endDate).toLocaleDateString("en-US", dateTimeFormatOptions)}
                        </IonItem>
                        ) : null }
                    {(getSelectedProject().payload.criteria && getSelectedProject().payload.criteria.length > 0) ?(
                        <IonItem>
                            Judging criteria: {getSelectedProject().payload.criteria.map((c: any) => c.name).join(', ')}
                        </IonItem>
                    ) : null }
                    <IonItem>
                        <IonList>
                            <IonListHeader>
                                <div className="challenges-list-header">
                                    <span>Challenges ({((selectedProj.contracts && selectedProj.contracts.length > 0 ? selectedProj.contracts[0] : {payload: {}}).payload.challenges || []).length})</span>
                                    <IonButton fill="solid" onClick={e =>
                                        setShowChallengeModal(true)
                                    }>
                                        <IonIcon icon={add}></IonIcon>
                                        Add New Challenge
                                    </IonButton>
                                </div>
                            </IonListHeader>
                            {
                                ((selectedProj.contracts && selectedProj.contracts.length > 0 ? selectedProj.contracts[0] : {payload: {}}).payload.challenges || [])
                                .map(v => 
                                    (
                                        <IonItem>
                                            <div className="d-flex flex-column p-margin-vertival-2">
                                                <p>Challenge ID: {v}</p>
                                                <ChallengeCompoenent challengeId={v}></ChallengeCompoenent>
                                            </div>
                                         </IonItem>
                                    )
                                )
                            }
                        </IonList>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default Project;
function streamFetchByKey() {
    throw new Error("Function not implemented.");
}

