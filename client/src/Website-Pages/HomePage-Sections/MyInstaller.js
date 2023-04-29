import React, { useEffect, useState } from 'react'

const MyInstaller = ({ children }) => {
    const [installEvent, setInstallEvent] = useState() 
    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault()
            setInstallEvent(event)
        })
    }, [])

    return ( 
    <>
    {installEvent && ( 
        <button
            style={{position:'relative', top:'120px', zIndex:'100'}}
            onClick={async () => { installEvent.prompt()
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