import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import SearchFilter from './Components/terms-components/SearchFilter';


export default function AppHeader2({onClick3 = f => f, search}) {
    let id = window.localStorage.getItem("id")
    return (
        <>
        <header>
            <nav className='navbar navbar-dark navbar-expand-lg navbar-primary fixed-top'>
                <Link
                    to={`/`}
                    className={'navbar-brand'}
                >
                    Accounting a-z
                </Link>
                <div className='me-3'>
                    {
                        search === '/dictionary/:id'
                        ?
                        <div className='d-flex align-items-center'>
                        <input
                            id='search'
                            placeholder='Search'
                        />  
                        <button onClick={() => onClick3(document.getElementById('search').value)} style={{width:'unset', height: '30px', padding: '0 10px', position: 'relative', right: '70px'}} className='btn ochre'>SEARCH</button>   
                        </div>
                        :
                        null

                    }
                    
                </div>
                <div className='app-nav offcanvas offcanvas-end'>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"> 
                        <li className='nav-app-link'>
                            <NavLink 
                                to={`/dictionary/0`}
                                exact={true}
                                className={'nav-link'}
                                activeClassName="active"
                            >
                                <i className='icon-nav icon-dictionary'></i>
                                <div>
                                    Dictionary
                                </div>
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink
                                to={`/profile/${id}`}
                                exact={true}
                                className={'nav-link'}
                                activeClassName="active"
                            >
                                <i className='icon-nav icon-profile'></i>
                                <div>
                                    Profile
                                </div> 
                            </NavLink>
                        </li>
                        <li>
                            
                            <NavLink
                                to={`/`}
                                exact={true}
                                className={'nav-link'}
                                activeClassName="active"
                            >
                                <i className='icon-nav icon-website'></i>
                                <div>
                                    Website
                                </div> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='d-md-block d-lg-none'>
                <nav className='navbar navbar-expand-lg fixed-bottom app-nav'>
                    <div className='position-absolute app-nav-box'>
                        <ul className="navbar-nav nav-tabs">
                            <li className=''>
                                <NavLink 
                                    to={`/dictionary`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                >
                                    <i className='icon-nav icon-dictionary'></i>
                                    Dictionary
                                </NavLink>      
                            </li>
                            <li>
                                <NavLink 
                                    to={`/profile/${id}`}
                                    exact={true}
                                    className={'nav-link'}
                                >
                                    <i className='icon-nav icon-profile'></i>
                                    Profile 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/`}
                                    exact={true}
                                    className={'nav-link'}
                                >
                                    <i className='icon-nav icon-website'></i>
                                    Website 
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}