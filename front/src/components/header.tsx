import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
} from "@ionic/react";

import Styled from "styled-components";

import { signOut } from "../context/UserContext";
import { useUserDispatch, loginUser } from "../context/UserContext";
import logo from '../assets/img/logo-combination.png';
import { styled } from "@material-ui/styles";


const StyledLogo = Styled.img`
  height: 50px;
  padding: 8px;
`;

const StyledIonToolbar = Styled(IonToolbar)`
  background: #0C3B6C;
`;

const StyledHead = Styled.div`
  background: #0C3B6C;
`;

const StyledIonButtons = Styled(IonButtons)`
  background: #fff;
  float: right;
`;

const HeaderComponent = (props: any) => {
  const [searchText, setSearchText] = useState("");
  var userDispatch = useUserDispatch();

  return (
    <IonHeader>
      <StyledIonToolbar className="toolbar">
        <StyledHead>
        <div className="d-flex">
          <StyledLogo src={logo} alt="logo" />
          <IonSearchbar
            placeholder="Explore amazing ideas"
            value={searchText}
            onIonChange={(e: any) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        
        <StyledIonButtons slot="end" className="toolbar-buttons-container">
          <div className="toolbar-buttons">
            <IonButton>Explore More</IonButton>
            <IonButton
              onClick={(evt: any) => {
                signOut(userDispatch, props.history, false);
              }}
            >
              Logout
            </IonButton>
          </div>
        </StyledIonButtons>
        </div>
        </StyledHead>
      </StyledIonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
