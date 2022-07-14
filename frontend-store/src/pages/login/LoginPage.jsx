import React from 'react';
import { UserCard } from '../../components';
import { useFetch } from "../../hooks";

export const LoginPage = () => {

    let { data: users } = useFetch("http://localhost:8090/users");
    users = users ? users : [];

    return (
        <>
            <section>
                <div className="deck">
                    <h3>User Register</h3>
                    {
                        users.map(user => (
                            <UserCard key={ user.id } name={ user.name } />
                        ))
                    }
                </div>
            </section>
        </>
    );

}