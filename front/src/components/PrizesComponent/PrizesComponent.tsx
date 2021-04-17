import React, { useState } from "react";

import "./PrizesComponent.scss";

const PrizesComponent = (props: any) => {
  const [fields, setFields] = useState([
    { name: "", description: "", currency: "", value:"" },
  ]);

  function handleChange(i: number, event: any) {
    const { name, value } = event.target;
    const list: any = [...fields];
    list[i][name] = value;

    setFields(list);
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
    <div className="App">
      <button type="button" onClick={() => handleAdd()}>
        + Add Prize
      </button>
      {console.log("fie", fields)}
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={field.name || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <input
              type="text"
              name="value"
              placeholder="Enter Value"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <input
              type="text"
              name="currency"
              placeholder="Enter Currency"
              value={field.currency || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              value={field.description || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              X Remove Prize
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PrizesComponent;
