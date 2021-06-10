import React from "react";


const ScoreSubmit = (props:any) => {
    
    return (
                <> 
                <input
                                      type="hidden"
                                      name="point"
                                      placeholder="Score"
                                      value=""
                                    />
                                    <input
                                      type="hidden"
                                      name="name"
                                      value=""
                                    />
                  <div className="judging">
                       <label>{props.crt.name}</label>
                       <input
                            type="number"
                             name="point"
                             placeholder="Score"
                       />
                       <label>Comment: </label>
                     
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
