import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/AAZ-DesktopBackBlue.png';

export default function CreateAccount({jwt}) {
    return (
        <>
        <img src={backgroundImage} alt="" className="img_bg_createAccountAA" />
        <div className='bg_createAccountAA'>
            <div className='container position-relative'>
                <div className=''>
                    <h3 className='text-center py-4'>Create an account</h3>
                </div>
                <div className='row py-4'>
                    <div className='col-12 col-md-6'>
                        <div className='box_accounts reveal fade-bottom'>
                            <div className='d-flex justify-content-center align-items-center pb-4'>
                                <i className='icon-account icon-basic me-1'></i>
                                <div className='body_text primary_dark'>Basic account</div>
                            </div>
                            <div className='body_text pb-4'>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                            <h3 className='pb-4'>
                                $0
                            </h3>
            
                            <div className='center-grid'>
                            {
                                jwt !== null
                                ?
                                <Link
                                    to={`/dictionary/${window.localStorage.getItem("termId")}`}
                                    className={'btn ochre'}
                                >
                                    Go back to App
                                </Link>
                                :
                                <Link
                                    to={`/registration`}
                                    className={'btn ochre size-auto'}
                                >
                                    Register
                                </Link>
                            }
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='box_accounts reveal fade-bottom'>
                            <div className='d-flex justify-content-center align-items-center pb-4'>
                                <i className='icon-account icon-premium me-1'></i>
                                <div className='body_text primary_dark'>Premium account</div>
                            </div>
                            <div className='body_text pb-4'>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                            <h3 className='pb-4'>
                                $0
                            </h3>
            
                            <div className='center-grid'>
                            {
                                jwt !== null
                                ?
                                <Link
                                    to={`/dictionary/${window.localStorage.getItem("termId")}`}
                                    className={'btn ochre'}
                                >
                                    Go back to App
                                </Link>
                                :
                                <Link
                                    to={`/registration`}
                                    className={'btn ochre size-auto'}
                                >
                                    Register
                                </Link>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
