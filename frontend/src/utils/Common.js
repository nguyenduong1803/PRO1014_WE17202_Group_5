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
  
  export const setUserSession = (token, user, name,link,uid) => {
    sessionStorage.setItem("access_token", token);
    sessionStorage.setItem("uid", JSON.stringify(user));
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("go_to_backend", link);
  };
  export const removeUserSession = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("name");
  };
  