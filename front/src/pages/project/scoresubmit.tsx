import React from "react";


const ScoreSubmit = (props:any) => {
    
    return (
                <> 
                
                  <div className="judging">
                       <label>{props.crt.name}</label>
                       <input
                            type="number"
                             name="point"
                             placeholder="Score"
                       />
                       
                     
                       <input
                          type="hidden"
                          name="name"
                          value={props.crt.name}
                       />
                </div>
            </>
        )
};
export default ScoreSubmit;
