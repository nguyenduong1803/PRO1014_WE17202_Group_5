export const getUser = () => {
    const userStr = sessionStorage.getItem("uid");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  export const getToken = () => {
    return sessionStorage.getItem("access_token") || null;
  };
  export const getName = () => {
    return sessionStorage.getItem("name") || null;
  };
  export const getUsername = () => {
    return sessionStorage.getItem("username") || null;
  };
  export const getPassword = () => {
    return sessionStorage.getItem("password") || null;
  };
  
  
  export const getLink = () => {
    return sessionStorage.getItem("go_to_backend") || null;
  };
  
  export const setTokenSession = (token) => {
    sessionStorage.setItem("access_token", token);
  };
  export const removeUserSession = () => {
    sessionStorage.removeItem("access_token");
  };
  