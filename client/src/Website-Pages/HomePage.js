import React, { useEffect } from 'react';
import { useState } from 'react';

import Intro from "./HomePage-Sections/Intro";
// import AppResume from "./HomePage-Sections/AppResume";
import Benefits from './HomePage-Sections/Benefits';
import AboutAuthor from "./HomePage-Sections/AboutAuthor";
import Comments from './HomePage-Sections/Comments';
import Register from './HomePage-Sections/Register';
import UserFeedback from './HomePage-Sections/UserFeedback';
import MyInstaller from './HomePage-Sections/MyInstaller';


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
            {/* <AppResume /> */}
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


