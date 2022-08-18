import React, { createContext, useState } from "react";

const defaultUser = {
    name: "Nyx",
    phone: "+000 00000000000",
    email: "josem2740@gmail.com"
}

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(defaultUser);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )

}