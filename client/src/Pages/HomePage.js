import React, { useEffect } from 'react';
import { useState } from 'react';

import Intro from "../Components/Intro";
import Benefits from '../Components/Benefits';
import AboutAuthor from "../Components/AboutAuthor";
import Register from '../Components/Register';
import UserFeedback from '../Components/UserFeedback';
import UserFeedback2 from '../Components/UserFeedback2'

import MyInstaller from '../Components/MyInstaller';


export default function HomePage() {
    const [jwt, setJwt] = useState("")
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        setJwt(window.localStorage.getItem("jwt"))
        fetch(`http://localhost:3000/api`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setFeedback(data.publicFeedback); 
                // setFeedbackNumber(Object.keys(data.publicFeedback).length)
            })

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
            <UserFeedback2 />
           
            <Register 
                jwt={jwt} 
            />
        </>
    )
}


