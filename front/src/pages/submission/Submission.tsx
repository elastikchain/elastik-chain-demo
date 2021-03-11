import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from '../../assets/img/logo-combination.svg';
import { getSelectedProject } from '../../context/SharedContext'
import submissionPlaceHolder from '../../assets/img/img-proj-placeholder.png'
import './Submission.scss'

const Submission = (props : RouteComponentProps) => {
    const [searchText, setSearchText] = useState('');
    const selectedSubmission = getSelectedProject();
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
                    </div>
                    </IonButtons>
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="submission-wrapper">
                    <div className="nav-info-header">
                        <div className="nav-info">
                            <Link to="/main/profile">Profile</Link> &gt; <Link to="#">{selectedSubmission.name}</Link>
                        </div>
                        <IonButton>Edit</IonButton>
                    </div>
                    <div className="submission-info-container">
                        <div className="submission-img">
                            <img src={submissionPlaceHolder} alt="submission image"/>
                        </div>
                        <div className="short-info-container">
                            <h1>{selectedSubmission.name}</h1>
                            <p>A few line of description to capture attention. Lorem ipsum dolor sit amet, consectetur  elementum metus vel, tempus massa. Curabitur ac felis eu lore</p>
                            <h1>Technologies</h1>
                            <p><strong>DAML</strong></p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Submission;