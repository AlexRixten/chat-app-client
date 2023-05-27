import React from "react";
import RoomForm from "./RoomForm";
import "./Room.scss";

function RoomPage() {
  return (
    <div className="room-wrapper">
      <div className="container">
        <h1 className="heading">Join</h1>
        <RoomForm />
      </div>
    </div>
  );
}

export default RoomPage;
