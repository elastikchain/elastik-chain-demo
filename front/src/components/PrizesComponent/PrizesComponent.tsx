import React, { useState } from "react";

import "./PrizesComponent.scss";

const PrizesComponent = (props: any) => {
   const [fields, setFields] = useState([
    { name: "", description: "", currency: "", value:"" },
  ]);
  if('defaultPrice' in props){
    props.defaultPrice.map((data:any,index:any)=>{
      return fields[index] = data;
    });
    
  }
  console.log("fields",fields);
  function handleChange(i: number, event: any) {
    const { name, value } = event.target;
    const list: any = [...fields];
    list[i][name] = value;
    console.log("list",list);
    
    props.onPrizeChange(list);
  }

  function handleAdd() {
    // const values = [...fields];
    // values.push({ value: null, type: "" });

    setFields([...fields, { name: "", description: "", currency: "", value:"" }]);
  }

  function handleRemove(i: number) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="price-box">
      <button className="add-btn" type="button" onClick={() => handleAdd()}>
        + Add Prize
      </button>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`} className="repeator-box">
            <div className="price-box-field">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={field.name || ""}
              onChange={(e) => handleChange(idx, e)}
              className="price-input"
            />
            <input
              type="text"
              name="value"
              placeholder="Enter Value"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
              className="price-input"
            />
            </div>
             <div className="price-box-field">
            <select
              name="currency"
              placeholder="Enter Currency"
              value={field.currency || ""}
              onChange={(e) => handleChange(idx, e)}
              className="price-input"
             >
               <option value="USD" >USD</option>
               <option value="EUR" >EUR</option>
               <option value="AUD">AUD</option>
               <option value="INR">INR</option>
            </select>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              value={field.description || ""}
              onChange={(e) => handleChange(idx, e)}
              className="price-input"
            />
            </div>
            { idx !== 0 &&
            <button className="remove-btn" type="button" onClick={() => handleRemove(idx)}>
              X Remove Prize
            </button>
            }
          </div>
        );
      })}
    </div>
  );
};

export default PrizesComponent;
