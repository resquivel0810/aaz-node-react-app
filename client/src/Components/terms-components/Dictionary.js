import React, {Component, Fragment, useEffect, useState} from 'react';

import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';

import Terms from './../terms-components/Terms';
import Meaning from './Meaning';



export default function Dictionary(props) {
    const [isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        let t = window.localStorage.getItem("jwt");
        if(t === null){
            console.log("No access");
            window.location.href = '/'
        }
    }, [])
    let id = props.match.params.id;
    return(
        <>
            <AppHeader />
            <div className='bg_dictionary'>
                <div className='container relative'>
                    <div className='row py-4'>
                        <div className='col'>
                            <Terms />
                        </div>
                        <div className='d-none d-lg-block col'>
                            <Meaning 
                                id = {id}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <AppFooter />
        </>
    );

}