import React from "react";
import {
   UserRole,

  
} from "@daml.js/cosmart-0.0.1/lib/Main";
import { useStreamQueries } from "@daml/react";

const GetJudge = (props:any) => {
    const participantAssets = useStreamQueries(UserRole,()=>[{user:props.name}]).contracts;
    console.log("requestJudge",participantAssets)
    return (
                <> 
                {participantAssets[0] && participantAssets[0].payload.participantProfile.firstName}  &nbsp;
                {participantAssets[0] && participantAssets[0].payload.participantProfile.lastName}
            </>
        )
};
export default GetJudge;
