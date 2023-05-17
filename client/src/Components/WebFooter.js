import React from 'react';
import { Link } from 'react-router-dom';
import classes from './WebFooter.module.css'

export default function WebFooter() {
    return(
        <>
        <footer>
            <div>
                <div className='about'>
                    <div className='container py-5'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-6 center-flex'>
                                <ul className="">
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-home'></i>
                                        <Link
                                            to={`/`}
                                            className={'footer-link'}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-app'></i>
                                        <Link
                                            to={`/abouttheapp`}
                                            className={'footer-link'}
                                        >
                                            About the app
                                        </Link>
                                    </li>
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-book'></i>
                                        <Link
                                            to={`/aboutthebook`}
                                            className={'footer-link'}
                                        >
                                            About the book
                                        </Link>
                                    </li>
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-author'></i>
                                        <Link
                                            to={`/abouttheauthor`}
                                            className={'footer-link'}
                                        >
                                            About the author
                                        </Link>
                                    </li>
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-register'></i>
                                        <Link
                                            to={`/registration`}
                                            className={'footer-link'}
                                        >
                                            Register
                                        </Link>
                                    </li>
                                    {/* <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-privacy'></i>
                                        <Link
                                            to={`/`}
                                            className={'footer-link'}
                                        >
                                            Privacy notice
                                        </Link>
                                    </li>
                                    <li className="footer-item d-flex align-items-center">
                                        <i className='icon-footer icon-conditions'></i>
                                        <Link
                                            to={`/`}
                                            className={'footer-link'}
                                        >
                                            Terms and conditions
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='text-center'>
                                    <div className='pb-4'>
                                        <i className="icon-socialM icon-facebook me-2"></i>
                                        <i className="icon-socialM icon-instagram me-2"></i>
                                        <i className="icon-socialM icon-twitter me-2"></i>
                                    </div>
                                </div>
                                <div className='body_text_bold primary_dark text-center'>
                                    Seestrasse 78, 8703 Erlenbach, Switzerland
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='imprint'>
                    <div className='container py-2 text-center'>
                        <p className='body_text_small snow'>Accounting A-Z Ⓒ</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
