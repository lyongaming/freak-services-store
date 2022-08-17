import React from "react";

import { useFetch } from "../../hooks";
import { UserOption } from "./UserOption/UserOption";

import "./UserSelection.css";

export const UserSelection = () => {

    let { data: users } = useFetch("http://localhost:8080/users");
    users = users ? users : [];

    return (
        <div className="user-selection">
        <h3>Select User</h3>
        {users.map((user) => (
            <UserOption key={user.id} name={user.name} />
        ))}
        </div>
    );
};
