import React from 'react';
import { SquaresBackground } from './SquaresBackground';
import { UserCard } from './UserCard';

import "./style.css";
import "./cardClient.css";

export const StoreApp = () => {

    return (
        <>
            <section>
                <div className="deck">
                    <h3>User Register</h3>
                    <UserCard />   
                </div>
            </section>
            
            <SquaresBackground />
        </>
    );

}