import React from "react";
import {
   UserRole,

  
} from "@daml.js/cosmart-0.0.1/lib/Main";
import { useStreamQueries } from "@daml/react";

const GetJudge = (props:any) => {
    const participantAssets = useStreamQueries(UserRole,()=>[{user:props.name}]).contracts;
    
    return (
                
                <> 
                {participantAssets.length > 0 ?    
                <>{participantAssets[0] && participantAssets[0].payload.participantProfile.firstName}  &nbsp;
                 {participantAssets[0] && participantAssets[0].payload.participantProfile.lastName}
                 {(props.showjob !== "undefined" ) &&  <i>{participantAssets[0] && participantAssets[0].payload.participantProfile.job}  </i> }
                </>
                :
                props.name

                }
            </>
        )
};
export default GetJudge;
