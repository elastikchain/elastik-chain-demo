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
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import "./Scores.scss" ;
import {
  signOut,
  useUserDispatch,
  useUserState,
} from "../../context/UserContext";
import { useLedger, useStreamQueries } from "@daml/react";
import { arrowBack } from "ionicons/icons";
import logo from "../../assets/img/logo-combination.png";
import { Scorecard } from "@daml.js/cosmart-0.0.1/lib/Main";


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
     <SubHeader {...props} />
      <IonContent>
      <div className="content-container"> 
        <div className="proj-wrapper">
          <IonButton fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>

          <IonList>
            <IonItem className="table-header">
              <IonLabel>Submission Name</IonLabel>
              <IonLabel>Submission Id</IonLabel>
              <IonLabel>Judge</IonLabel>
              <IonLabel>Scores</IonLabel>
            </IonItem>
           
            {scorecard.length > 0 ? (
              scorecard.map((c) => (
                <IonItem>
                  <IonLabel>{c.payload.submissionId}</IonLabel>
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
                  <p className="no-scores">No scores found</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
        <Footer />
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Scores;
