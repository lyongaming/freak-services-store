import React from 'react';
import { SquaresBackground } from '../SquaresBackground';
import { UserCard } from '../components/UserCard';
import { useFetch } from "../hooks/useFetch";

import "../style.css";

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
            
            <SquaresBackground />
        </>
    );

}