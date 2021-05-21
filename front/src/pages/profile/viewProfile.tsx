import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStreamQueries } from "@daml/react";
import * as damlTypes from "@daml/types";

import {
  ClientRole,
  ClientProject,
  CreateProject,
  RequestToJoinProject,
  JudgeRole,
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
  const judgeAssets = useStreamQueries(JudgeRole).contracts;

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


  const participantProfile = () => {
    console.log("judgeAssets", judgeAssets);
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
  if((projectAssets && projectAssets.length !== 0 && checkFirstTimeLogin === 0) || (participantAssets && participantAssets.length !== 0 && checkFirstTimeLogin === 0)|| (judgeAssets && judgeAssets.length !== 0 && checkFirstTimeLogin === 0)){ checkFirstTimeLogin = 1;  }
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
                      <div className="profile-header">
                        <h1>
                          {/* {user.party}  */}
                          {participantProfile().firstName}{" "}
                          {participantProfile().lastName}
                        </h1>
                        <IonButton size="large" onClick={(e)=>
                            props.history.push("/main/profile")
                        } className="edit-button">
                          
                          Go Back {" "}
                        </IonButton>
                      </div>

                      <div className="profile-about">
                        <h2>About</h2>
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
                        <p>
                          About: {participantProfile().about}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                 
                
				    <Footer />
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
