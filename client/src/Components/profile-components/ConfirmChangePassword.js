import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';

export default function ConfirmChangePassword(props) {
    let id = window.localStorage.getItem("id")
    return(
        <>
        <AppHeader 
            currentPathName={props.location.pathname}
        />
        <div className='bg_confirmation'>
            <div className='container position-relative text-center'>
                <div className='py-4'>
                    <h3>Successful change</h3>
                </div>
                <div className='py-4'>
                    <i className='icon-confirm icon-lock'></i>
                </div>
                <div className='body_text py-4'>
                    <div>
                        Your password was updated
                    </div>
                </div>
                <div className='pt-4 center-grid'>
                    <Link
                        to={`/profile/${id}`}
                        className={'btn ochre'}
                    >
                        Go back
                    </Link>
                </div>
            </div>
        </div>
        <AppFooter />
        </>
    )
}

