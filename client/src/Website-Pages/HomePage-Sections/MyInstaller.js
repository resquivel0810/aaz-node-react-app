import React, { useEffect, useState } from 'react'

const MyInstaller = ({ children }) => {
    const [installEvent, setInstallEvent] = useState() 
    const [installEventIos, setInstallEventIos] = useState(false) 
    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault()
            setInstallEvent(event)
        })
        setInstallEventIos(isIos() && !isInStandaloneMode())

    }, [])

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
    }

    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
   

    return ( 
    <>
    {installEvent && ( 
        <button
            style={{position:'relative', top:'120px', zIndex:'100'}}
            onClick={async () => { 
                installEvent.prompt()
                    await installEvent.userChoice 
                setInstallEvent(null)
            }} 
        >
            Install this app! 
        </button>
    )}
    {children}
    </>
    ) 
}
export default MyInstaller