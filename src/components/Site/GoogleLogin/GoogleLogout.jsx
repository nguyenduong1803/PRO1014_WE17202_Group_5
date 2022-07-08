import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "613197080207-0ndgm9bmugefujcli8bocs0pb33cnsu5.apps.googleusercontent.com";

function GLogout() {
  const onSuccess = () => {
    alert("Logout made successfully");
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    ></GoogleLogout>
  );
}

export default GLogout;
