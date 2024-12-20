import React from "react";

const Toggle = ({ className = "", ...props }) => {
  return (
    <div className={`${className}`}>
      <label className="switch">
        <input type="checkbox" {...props} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
