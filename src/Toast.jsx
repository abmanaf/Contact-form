import React from "react";
import "./Toast.css";

const Toast = () => {
  return (
    <div className="toast-container">
      <h2 className="toast-title">
        <img src="/assets/images/icon-success-check.svg" />
        <span style={{color: 'white'}}>Message Sent!</span>
      </h2>
      <p style={{fontSize: '10px'}} className="toast-desc">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default Toast;