import React from "react";
import { GoogleLogin } from "react-google-login";

import { refreshTokenSetup } from "../../../utils/refreshToken";

const clientId =
  "613197080207-0ndgm9bmugefujcli8bocs0pb33cnsu5.apps.googleusercontent.com";

function GLogin() {
  const onSuccess = (res) => {
    console.log("[Login Success] current user:", res.profileObj);
    refreshTokenSetup(res)
  };
  const onFailure = (res) => {
    console.log("[Login failed]:", res);
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GLogin;
