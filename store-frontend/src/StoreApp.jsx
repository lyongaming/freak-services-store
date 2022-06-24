import React from 'react';
import { SquaresBackground } from './SquaresBackground';

import "./style.css";
import "./cardClient.css";

export const StoreApp = () => {

    return (
        <>
            <section>
                <div className="deck">
                    <h3>User Register</h3>
                    <div className="hand">
                        <div className="userCard">
                            <img src="leon no sleep.jpg" alt="im dying" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small> &gt;&gt; </small></h2>
                            <h4>The Lion</h4>
                        </div>
                    </div>
                </div>
            </section>
            
            <SquaresBackground />
        </>
    );

}