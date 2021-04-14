import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import {
  signOut,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import { useLedger, useStreamQueries } from "@daml/react";
import { arrowBack } from "ionicons/icons";
import logo from "../../assets/img/logo-combination.png";
import { Scorecard } from "@daml.js/cosmart-0.0.1/lib/Main";
import Footer from "../../components/Footer/footer";

const Scores = (props: RouteComponentProps) => {
  const user = useUserState();
  var userDispatch = useUserDispatch();
  const ledger = useLedger();
  const [searchText, setSearchText] = useState("");

  const scorecard = useStreamQueries(Scorecard, () => {
    return [{ client: (user as any).party }];
  }).contracts;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <div className="d-flex">
            <img className="app-logo" src={logo} alt="logo" />
            <IonSearchbar
              placeholder="Explore amazing ideas"
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
          </div>
          <IonButtons slot="end" className="toolbar-buttons-container">
            <div className="toolbar-buttons">
              <IonButton>Explore</IonButton>
              <IonButton
                onClick={(evt: any) => {
                  signOut(userDispatch, props.history, false);
                }}
              >
                Logout
              </IonButton>
            </div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="proj-wrapper">
          <IonButton fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>

          <IonList>
            <IonItem>
              <IonLabel>Submission Id</IonLabel>
              <IonLabel>Judge</IonLabel>
              <IonLabel>Scores</IonLabel>
            </IonItem>
            {scorecard.length > 0 ? (
              scorecard.map((c) => (
                <IonItem>
                  <IonLabel>{c.payload.submissionId}</IonLabel>
                  <IonLabel>{c.payload.judge}</IonLabel>
                  {(c.payload.scoretable || []).length > 0 ? (
                    <IonLabel>
                      {(c.payload.scoretable || []).map((s) => (
                        <p>
                          {s.name}: {s.point}
                        </p>
                      ))}
                    </IonLabel>
                  ) : null}
                </IonItem>
              ))
            ) : (
              <IonItem lines="none">
                <IonLabel>
                  <p>No scores found</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Scores;
