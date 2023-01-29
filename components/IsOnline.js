import React from "react";

function IsOnline({ online }) {
  return (
    <div className="onlineStatus">
      <div
        className={online ? "onlineStatus_dot" : "onlineStatus_dot offline"}
      ></div>
      <div className="onlineStatus_text">{online ? "Online" : "Offline"}</div>
    </div>
  );
}

export default IsOnline;
