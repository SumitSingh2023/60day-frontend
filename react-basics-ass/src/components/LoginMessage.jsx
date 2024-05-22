// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ? "Hello User" : "access Denied"}</div>;
}

export default LoginMessage;
