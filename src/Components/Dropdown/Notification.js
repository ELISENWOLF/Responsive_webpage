import React, { useState } from "react";
import otherprof1 from "../Picture/profile-pic-02.jpg";
import otherprof2 from "../Picture/profile-pic-05.jpg";
import otherprof3 from "../Picture/profile-pic-06.jpg";
import "./Dropdown.css";

function Notification() {
  const[notdown, setNotdown] = useState(false)

  return (
    <div className="notification" onClick={() => setNotdown(!notdown)}>
      <div className="notification-msg-1">
        <img src={otherprof1} alt="" className="not-prof1" />
        <div className="not-detail">
          <span className="name">Bavid Kames</span>
          <span className="msg">Assigned you on th call with Sara</span>
        </div>
        <span className="time">2 min ago</span>
      </div>
      <div className="notification-msg-2">
        <img src={otherprof2} alt="" className="not-prof1" />
        <div className="not-detail">
          <span className="name">Alexa Marry</span>
          <span className="msg">Marked the task New UI as done</span>
        </div>
        <span className="time">5 min ago</span>
      </div>
      <div className="notification-msg-3">
        <img src={otherprof3} alt="" className="not-prof1" />
        <div className="not-detail">
          <span className="name">Eva Maria</span>
          <span className="msg">Added a new comment on Sales task</span>
        </div>
        <span className="time">10 min ago</span>
      </div>
      <hr className="not-line"/>
      <span className="not-show">Show More</span>
    </div>
  );
}

export default Notification;
