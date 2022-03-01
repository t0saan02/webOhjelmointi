import React from "react";

function Button({ children, message = "", onHandleClick = () => {} }) {
  
  return (
    <div>
      <button onClick={onHandleClick}>{message ? message : children}</button>
    </div>
  );
}

export default Button;
