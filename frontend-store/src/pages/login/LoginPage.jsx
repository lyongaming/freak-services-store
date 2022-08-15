import React from 'react';
import { UserOption } from '../../components';
import { useFetch } from "../../hooks";

export const LoginPage = () => {

    let { data: users } = useFetch("http://localhost:8080/users");
    users = users ? users : [];

    return (
        <>
            <section>
                <div className="deck">
                    <h3>User Register</h3>
                    {
                        users.map(user => (
                            <UserOption key={ user.id } name={ user.name } />
                        ))
                    }
                </div>
            </section>
        </>
    );

}