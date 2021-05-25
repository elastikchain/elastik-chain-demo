import React, { useState } from "react";
import {
  ClientProject,
  RequestToJudgeProject
  
} from "@daml.js/cosmart-0.0.1/lib/Main";
import { useLedger } from "@daml/react";
import { useStreamQueries } from "@daml/react";
import {
    IonButton
  } from "@ionic/react";
 import Alert from "../profile/alert"; 
const RequestForJudgeOnProject = (props:any) => {
   const requestJudge =  useStreamQueries(RequestToJudgeProject).contracts;
   const [showAlert, setAlerts] = useState(false);
   const [messageType, setMessageType] = useState("");
   const [messageText, setMessageText] = useState("");
   const ledger = useLedger();
  
    const acceptJudgeRequest= (judge:any,client:any,operator:any,contractID:any) =>{
      const  requestData = {judge: judge,client: client,operator:operator,projectId: props.projectId};
      ledger.exercise(RequestToJudgeProject.AddJudgeToProject,contractID,requestData)
      .then((data:any)=>{
        setAlerts(true);
        setMessageText("Successfully accepted Judge Request!");
        setMessageType("success");
        
      })
      .catch((err:any)=>{
        setAlerts(true);
        setMessageText(JSON.stringify(err));
        setMessageType("error");
      });
    }
    console.log("requestJudge",requestJudge)
    return (
                <> <Alert type={messageType} showAlert={showAlert} setAlerts={setAlerts} text={messageText} />
                     {requestJudge && requestJudge.map((obj,index)=>(

                        <IonButton
                        key={index}
                        className="submit-button"
                        type="button"
                        onClick={(e) => {
                            acceptJudgeRequest(obj.payload.judge,obj.payload.client,obj.payload.operator,obj.contractId)
                            
                        }}
                        >
                          Accept Judge Request For {obj.payload.judge}
                        </IonButton>
                     ))}
                    

            </>
        )
};
export default RequestForJudgeOnProject;
