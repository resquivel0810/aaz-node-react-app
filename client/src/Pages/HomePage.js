import React, { useEffect } from 'react';
import { useState } from 'react';

import Intro from "../Components/Intro";
import Benefits from '../Components/Benefits';
import AboutAuthor from "../Components/AboutAuthor";
import Register from '../Components/Register';
import UserFeedback from '../Components/UserFeedback';
import MyInstaller from '../Components/MyInstaller';


export default function HomePage() {
    const [jwt, setJwt] = useState("")
    useEffect(() => {
        setJwt(window.localStorage.getItem("jwt"))
    }, [])
    return (
        <>
            <MyInstaller>
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload. 
                    </p>
                    <a
                        className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
                    >
                    </a> 
                </header>
            </MyInstaller>

            <Intro
                jwt={jwt} 
            />
            <Benefits />
            <AboutAuthor />
            {/* <UserFeedback /> */}
            {/* <Comments /> */}
            <Register 
                jwt={jwt} 
            />
        </>
    )
}


