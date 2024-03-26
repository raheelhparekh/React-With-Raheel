import React from "react";
/*
    UserContext is a context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
*/



const UserContext=React.createContext()


export default UserContext;