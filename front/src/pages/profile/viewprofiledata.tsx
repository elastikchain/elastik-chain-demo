import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";

import {
  ClientRole,
  ClientProject,
  CreateProject,
  RequestToJoinProject,
  UserRole
  
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "./Profile.scss";
import {
  useUserState,
} from "../../context/UserContext";

import clientIcon from '../../assets/img/client.png';
import participantIcon from '../../assets/img/participant.png';
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";

import "./Profile.scss";

interface CriteriaPoint {
  name: string;
  point: damlTypes.Numeric;
}

const ViewProfileData = (props: RouteComponentProps) => {
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }


  const projectAssets = useStreamQueries(ClientRole).contracts;
 

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




  const requestToJoinProjectAssets = useStreamQueries(RequestToJoinProject)
    .contracts;
  

  const [selectedTab, setSelectedTab] = useState("coordinates");

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
  
    return (
                    <div className="view-profile-content">
                    <div className="profile-top-header">

                    </div>
                    <div className="profile-info-container">
                      <div className="profile-img-container">
                        {projectAssets.length > 0 &&
                        projectAssets[0].payload.clientProfile.pictureUrl !==
                          "" ? (
                          <img
                            src={
                              projectAssets[0].payload.clientProfile.pictureUrl
                            }
                            alt="profile s"
                          />
                        ) : (
                          <img
                            src={getUserType() === "client" ? clientIcon : participantIcon}
                            alt="profile "
                          />
                        )}
                        <input
                          className="profile-picture-input"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                      <div className="profile-info">
                        <div className="profile-about">
                          <IonSegment value={selectedTab} onIonChange={e => setSelectedTab(e.detail?.value ?? 'coordinates') }>
                            <IonSegmentButton value="coordinates">
                              <IonLabel>Coordinates</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="about">
                              <IonLabel>About</IonLabel>
                            </IonSegmentButton>
                          </IonSegment>

                          {
                            (selectedTab === 'coordinates') ? (
                              <div className="coordinates">
                              
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
                              </div>
                              
                              
                            ) : (
                              <div className="about-text">
                                <p>
                                  {participantProfile().about}
                                </p>
                                
                              </div>
                            )
                          }
                        
                        </div>
                      </div>
                    </div>
                    </div> 
                 
    );

};
export default ViewProfileData;
