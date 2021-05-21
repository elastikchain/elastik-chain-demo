import React, { useState } from "react";

import {
  useUserDispatch,
  signOut,
  useUserState,
} from "../../context/UserContext";


import "./subheader.scss";
import useStyles from "./styles";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";


import logo from "../../assets/img/logo-combination.png";


const SubHeader = (props: any) => {
  const [searchText, setSearchText] = useState("");
  const userDispatch = useUserDispatch();

  return (
    <IonHeader>
      <IonToolbar className="toolbar">
        <div className="container-header">
          <div className="header">
            <div className="logo-img">
              <img className="app-logo" src={logo} alt="logo" />
            </div>
            <div className="search-form">
              <IonSearchbar
                placeholder="Explore amazing ideas"
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
              ></IonSearchbar>
            </div>
            <div className="header-menu">
              <IonButtons slot="end" className="toolbar-buttons-container">
                <div className="toolbar-buttons">
                  <IonButton>Explore</IonButton>
                  <IonButton className="activeButton"
                    onClick={(evt: any) => {
                      signOut(userDispatch, props.history,props, false);
                    }}
                  >
                    Logout
                  </IonButton>
                </div>
              </IonButtons>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default SubHeader;
