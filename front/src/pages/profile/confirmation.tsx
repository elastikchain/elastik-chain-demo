import React from "react";
import "./dialog.scss";
import {
    IonButton,
    IonModal,
  } from "@ionic/react";
const Confirmation = (props:any) => {


    
    return (
        
      
             <IonModal
                  isOpen={props.showConfirmation}
                  onDidDismiss={() => props.setConfirmation(false)}
                  cssClass="my-custom-modal"
                >
                  <div className="content confirm-content">
                    {props.text}
                  </div>
                  <div className="btn-group">
                  <IonButton
                    className="modal-default-close-btn"
                    fill="outline"
                    color="primary"
                    onClick={() => {
                        props.setConfirmation(false);
                    }}
                  >
                   No
                  </IonButton>
                  <IonButton
                    className="modal-default-yes-btn"
                    fill="solid"
                    color="primary"
                    onClick={() => {
                        props.actionHandler();
                    }}
                  >
                   Yes
                  </IonButton>
                  </div>
                </IonModal>
      
          
    )
}
export default Confirmation;