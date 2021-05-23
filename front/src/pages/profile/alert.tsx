import React from "react";
import "./dialog.scss";
import {
    IonButton,
    IonModal,
    IonContent
  } from "@ionic/react";
const Alert = (props:any) => {


    return (
        
        <div className = {(props.type === "success") ? "alert-dialog success":'alert-dialog error' }>
             <IonModal
                  isOpen={props.showAlert}
                  onDidDismiss={() => props.setAlerts(false)}
                  cssClass="my-custom-modal"
                >
                <IonContent>
                  <div className="content alert-content">
                    {props.text}
                  </div>
                  <div className="btn-group">
                  <IonButton
                    className="modal-default-close-btn"
                    fill="solid"
                    color="primary"
                    onClick={() => {
                        props.setAlerts(false);
                    }}
                  >
                   Ok
                  </IonButton>
                  </div>
                  </IonContent>
                </IonModal>
        </div>
          
    )
}
export default Alert;