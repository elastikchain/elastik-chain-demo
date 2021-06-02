import { IonPage, IonHeader, IonToolbar, IonSearchbar, IonButtons, IonButton, IonSplitPane, IonContent } from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import logo from "../../assets/img/logo-combination.png";
import ProfileMenu from "./profileMenu";


import "./Profile.scss";
import SubHeader from "../../components/Header/subheader";


const AccountSetting = (props: RouteComponentProps) => {

    const [searchText, setSearchText] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginSegement, setLoginSegement] = useState("SIGN_IN");

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