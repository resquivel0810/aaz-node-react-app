import React, {useEffect, useState} from 'react';
import IntroApp from './AboutApp-Sections/IntroApp';
import CreateAccount from './AboutApp-Sections/CreateAccount';
import DigitalBook from './AboutApp-Sections/DigitalBook';
import PWA from './AboutApp-Sections/PWA';

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
