import React, { useState, useEffect } from "react";
import "../App.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  }
  console.log(isToggled)
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;