import React, { useState } from "react";
import { AiOutlineUser } from 'react-icons/ai'
import { TbReceipt } from 'react-icons/tb'
import { MdLogout } from 'react-icons/md'
import "./Dropdown.css";

function Logout() {
  const [logdown, setLogdown] = useState(false)


  return (
    <div className="logout" onClick={() => setLogdown(!logdown)}>
      <div className="logout-msg-1">
        <span className="log-msg"><AiOutlineUser className="log-icon"/>My Profile</span>
      </div>
      <div className="logout-msg-2">
        <span className="log-msg"><TbReceipt className="log-icon"/>Billing</span>
      </div>
      <div className="logout-msg-3">
        <span className="log-msg"><MdLogout className="log-icon"/>Logout</span>
      </div>
    </div>
  );
}

export default Logout;
