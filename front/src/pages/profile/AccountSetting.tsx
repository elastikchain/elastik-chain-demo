import { IonPage,IonSplitPane, IonContent } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import ProfileMenu from "./profileMenu";


import "./Profile.scss";
import SubHeader from "../../components/Header/subheader";


const AccountSetting = (props: RouteComponentProps) => {



    return (
      <IonPage>
        <SubHeader {...props} />
        <IonContent>
            <div className="content-container">
              <IonSplitPane className="menu-container" contentId="main">
                <ProfileMenu {...props}/>
                {/*-- the main content --*/}
                <IonPage className="full-width-container" id="main">
                </IonPage>
              </IonSplitPane>
            </div>
          </IonContent>
        </IonPage>

    )
}


export default AccountSetting;