import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import AddComponent from "./addComponent";

export default function CancelRequest() {
  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={(e) => handleChange(e)} />
        <span className="slider round"></span>
      </label>
      {isChecked && <AddComponent />}
    </div>
  );
}
