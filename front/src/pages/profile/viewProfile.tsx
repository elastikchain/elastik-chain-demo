import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";

import {
  ClientRole,
  ClientProject,
  CreateProject,
  RequestToJoinProject,
  UserRoleRequest,
  UserRole
  
} from "@daml.js/cosmart-0.0.1/lib/Main";

import "./Profile.scss";
import {
  useUserState,
} from "../../context/UserContext";

import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import {
  IonPage,
  IonButton,
  IonContent,
  IonSplitPane,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";

import "./Profile.scss";
import ProfileMenu from "./profileMenu";
interface CriteriaPoint {
  name: string;
  point: damlTypes.Numeric;
}

const ViewProfile = (props: RouteComponentProps) => {
  const user = useUserState();
  interface FrontCreateProject extends CreateProject {
    projectImageFile?: File;
    loading: boolean;
  }


  let checkFirstTimeLogin = 0;

  const projectAssets = useStreamQueries(ClientRole).contracts;
  const roleRequested = useStreamQueries(UserRoleRequest).contracts;
  console.log("clientRole",projectAssets);
  console.log("roleRequested",roleRequested);
  const clientProjectAssets = useStreamQueries(ClientProject).contracts;
  


  const participantAssets = useStreamQueries(UserRole).contracts;
  console.log("User Role Data", participantAssets);
  console.log("User Role Data", projectAssets);
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
  console.log("requestToJoinProjectAssets", requestToJoinProjectAssets);

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
  if((projectAssets && projectAssets.length !== 0 && checkFirstTimeLogin === 0) || (participantAssets && participantAssets.length !== 0 && checkFirstTimeLogin === 0)){ checkFirstTimeLogin = 1;  }
   if(roleRequested && roleRequested.length !== 0 && checkFirstTimeLogin === 0){checkFirstTimeLogin = 2;  }




  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <IonPage>
    
        <SubHeader {...props} />
        <IonContent>
          <div className="content-container">
            <IonSplitPane className="menu-container" contentId="main">
              <ProfileMenu {...props}/>
              {/*-- the main content --*/}
              <IonPage className="full-width-container" id="main">
                <div className="view-profile-content">
                <div className="profile-top-header">

                </div>
                <div className="wrapper">
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
                            src="https://via.placeholder.com/214x198.png"
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
                            (selectedTab == 'coordinates') ? (
                              <div className="coordinates">
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
                              </div>
                              
                              
                            ) : (
                              <div className="about-text">
                                <p>
                                  {participantProfile().about}
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus ex, incidunt nostrum veniam labore quis, quidem nemo porro eum velit, vel numquam deserunt omnis explicabo nulla aliquid? Tempore, hic!</p>
                              </div>
                            )
                          }
                        
                        </div>
                      </div>
                    </div>
                  
                  
                    <Footer />
                  </div>

                </div>
                  
              </IonPage>
			  
            </IonSplitPane>
			
          </div>
        </IonContent>
      </IonPage>
    );
  }
};
export default ViewProfile;
