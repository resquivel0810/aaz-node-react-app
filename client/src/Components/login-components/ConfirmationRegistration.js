import React, {Component, Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import WebHeader from '../../WebHeader';
import WebFooter from '../../WebFooter';

export default function ConfirmationRegistration2(props) {
    useEffect(() => {

        fetch(`https://accounting.linarys.com/v1/getid/${props.match.params.id}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            fetch(`https://accounting.linarys.com/v1/confirm/${data.ID}`, {method: "POST"})
        })
    }, [])

    return(
        <>
            <WebHeader />
            <div className='bg_confirmation'>
                <div className='container position-relative text-center'>
                    <div className='py-4'>
                        <h3>WELCOME TO ACCOUNTING A-Z</h3>
                    </div>
                    <div className='py-4'>
                        <i className='icon-confirm icon-success'></i>
                    </div>
                    <div className='body_text py-4'>
                        <div className='py-2'>
                            Your account was ACTIVATED successfully.
                        </div>
                        <div className='py-2'>
                            Now you can login and start using the digital dictionary.
                        </div>
                        <div className='pt-4 center-grid'>
                            <Link
                                to={`/login`}
                                className={'btn ochre'}
                            >
                                Go to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <WebFooter />
        </>
    )
}

