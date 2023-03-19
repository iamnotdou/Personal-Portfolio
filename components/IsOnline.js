import React from "react";

function IsOnline({ online }) {
  return (
    <div className="flex items-center text-zinc-500">
      <div
        className={`h-2 w-2 rounded-full mx-2 font-medium  ${
          online ? "bg-green-500 " : "bg-red-500 shadow-red-700"
        }}`}
      ></div>
      <div className="onlineStatus_text">{online ? "Online" : "Offline"}</div>
    </div>
  );
}

export default IsOnline;
