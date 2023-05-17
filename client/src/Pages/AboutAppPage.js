import React, {useEffect, useState} from 'react';
import IntroApp from '../Components/IntroApp';
import CreateAccount from '../Components/CreateAccount';
import DigitalBook from '../Components/DigitalBook';
import PWA from '../Components/PWA';

export default function AboutAppPage() {
    const [jwt, setJwt] = useState("")
    useEffect(() => {
        setJwt(window.localStorage.getItem("jwt"))
    }, [])
    return (
        <>
        <IntroApp />
        <CreateAccount 
            jwt={jwt} 
        />
        <DigitalBook />
        <PWA 
            jwt={jwt} 
        />
        </>
    )
}
