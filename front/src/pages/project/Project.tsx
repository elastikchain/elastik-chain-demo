import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from '../../assets/img/logo-combination.svg';
import './Project.scss'
import { getSelectedProject } from '../../context/SharedContext'
import projPlaceHolder from '../../assets/img/img-proj-placeholder.png'
const Project = (props : RouteComponentProps) => {
    const [searchText, setSearchText] = useState('');
    const selectedProj = getSelectedProject();
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
                <div className="project-wrapper">
                    <div className="nav-info-header">
                        <div className="nav-info">
                            <Link to="/main/profile">Profile</Link> &gt; <Link to="#">{selectedProj.name}</Link>
                        </div>
                        <IonButton>Edit</IonButton>
                    </div>
                    <div className="proj-info-container">
                        <div className="proj-img">
                            <img src={projPlaceHolder} alt="project image"/>
                        </div>
                        <div className="short-info-container">
                            <h1>{selectedProj.name}</h1>
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
export default Project;
