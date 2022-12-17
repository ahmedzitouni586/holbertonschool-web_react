import React from "react";

export const user = {
    email: "",
    password: "",
    isLoggedIn: false
}

export const logOut = () => {};

const myContext = React.createContext({user, logOut});

export default myContext;