import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Images/AAZ-DesktopBackGreen.png';
import cellphone from '../../Images/Cellphone_front.png';

export default function Register({jwt}) {
    return (
        <>
        <img src={backgroundImage} alt="" className="img_bg_registerHP" />
        <div className='bg_registerHP'>
            <div className='container position-relative'>
                <div>
                    <h3 className='text-center py-4'>Already have the book?</h3>
                </div>
                <div className='subtitle text-center py-2'>
                    Get the digital version
                </div>
                <div className='center-grid py-4'>
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
                        className={'btn ochre'}
                    >
                        Register
                    </Link>
                }
                    
                </div>
                <div className='my-4 center-grid reveal fade-bottom'>
                    <img src={cellphone} alt="" className="img_cellphone_registerHP" />
                </div>
            </div>
        </div>
        </>
    )
}

