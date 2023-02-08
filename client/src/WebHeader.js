import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import classes from './WebHeader.module.css'

export default function WebHeader2(props) {
    const [jwt, setJwt] = useState('')
    const [navbarOpen, setNavbarOpen] = useState(false)
    // const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    
    useEffect(()=>{
        let t = window.localStorage.getItem("jwt");
        if(t){
            if(jwt === ""){
                setJwt(JSON.parse(t))
            }
        }
    })

    const logout = () => {
        setJwt('')
        window.localStorage.removeItem("jwt");
    }

    // toggle burger menu change
    const updateMenu = () => {
        if(!navbarOpen) {
            // setBurgerClass("burger-bar clicked")
            setMenuClass("visible")
        }
        else {
            // setBurgerClass("burger-bar unclicked")
            setMenuClass("hidden")
        }
        setNavbarOpen(!navbarOpen)
    }

    let loginLink, applink, registerLink, registerLinkM;

    if(jwt === ""){
        loginLink = <Link to={`/login`}  className={'btn ochre size-auto'} ><i className='icon-nav icon-signin'></i>  Sign In </Link>
        registerLink = <Link to={`/registration`} className={'btn transparent size-auto'}> <i className='icon-nav icon-register'></i> Register</Link>
        registerLinkM = <NavLink to={`/registration`} exact={true} className={'nav-link'} activeClassName="active"><i className='icon-nav icon-register'></i> Register </NavLink>
    }else{
        // loginLink = <Link className={'btn ochre size-auto'} to="/" onClick={this.logout}><i className='icon-nav icon-logout'></i>  Logout</Link>
        applink = <Link  style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD'}} className={'nav-link'} to="/dictionary/1"><i className='icon-nav icon-goback'></i>  Go to app</Link>
    }

    // const navbar = () => {

    // }

    return(
        <header style={{height:'10vh'}}>
            {
                navbarOpen
                ?
                <div style={{width:'100vw', height:`calc(${document.body.scrollHeight}px - 10vh)`, position:'absolute', zIndex:'0', backgroundColor: 'rgba(0,0,0,.2)'}}/>
                :
                null
            }
            
            <nav className={classes.navbar}>
                <Link
                    to={`/`}
                    style={{display:'flex'}}
                >
                    <svg style={{margin: window.innerWidth > 600 ? '0 50px': '0 15px'}}  width={window.innerWidth > 600 ? "200" : "120"} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 22">
                        <g>
                            <path style={{fill: '#fff'}} d="M31.54,19.31h-1.97l-.38,1.18h-1.19l2.03-5.71h1.04l2.04,5.71h-1.19l-.38-1.18Zm-1.67-.95h1.36l-.69-2.14-.68,2.14Z"/>
                            <path style={{fill: '#fff'}} d="M35.81,18.5h-2.11v-.91h2.11v.91Z"/>
                            <path style={{fill: '#fff'}} d="M38.1,19.54h2.75v.94h-4.15v-.69l2.7-4.06h-2.69v-.95h4.09v.67l-2.69,4.09Z"/>
                        </g>
                        <g>
                            <path style={{fill: '#fff'}} d="M7.08,11.73h-1.55l-.4-1.3h-1.98l-.41,1.3H1.23L3.26,5.95h1.8l2.02,5.78Zm-3.65-2.33h1.42l-.71-2.34-.71,2.34Z"/>
                            <path style={{fill: '#fff'}} d="M13.55,10.07c-.11,.4-.29,.73-.53,.99s-.54,.45-.88,.57-.71,.18-1.12,.18c-.58,0-1.09-.12-1.51-.35-.43-.24-.75-.58-.98-1.02-.23-.44-.34-.98-.34-1.6s.11-1.16,.34-1.6,.55-.78,.98-1.02c.43-.24,.93-.35,1.51-.35,.4,0,.77,.06,1.11,.17,.34,.11,.62,.29,.86,.52s.4,.53,.5,.9l-1.32,.53c-.08-.36-.21-.61-.4-.74s-.42-.2-.7-.2-.51,.07-.71,.2c-.2,.13-.36,.33-.46,.6-.11,.27-.16,.6-.16,.99s.05,.72,.15,.99c.1,.27,.25,.47,.45,.6s.45,.2,.75,.2c.28,0,.52-.08,.71-.23s.33-.39,.4-.71l1.37,.39Z"/>
                            <path style={{fill: '#fff'}} d="M20.38,10.07c-.11,.4-.29,.73-.53,.99s-.54,.45-.88,.57-.71,.18-1.12,.18c-.58,0-1.09-.12-1.51-.35-.43-.24-.75-.58-.98-1.02-.23-.44-.34-.98-.34-1.6s.11-1.16,.34-1.6,.55-.78,.98-1.02c.43-.24,.93-.35,1.51-.35,.4,0,.77,.06,1.11,.17,.34,.11,.62,.29,.86,.52s.4,.53,.5,.9l-1.32,.53c-.08-.36-.21-.61-.4-.74s-.42-.2-.7-.2-.51,.07-.71,.2c-.2,.13-.36,.33-.46,.6-.11,.27-.16,.6-.16,.99s.05,.72,.15,.99c.1,.27,.25,.47,.45,.6s.45,.2,.75,.2c.28,0,.52-.08,.71-.23s.33-.39,.4-.71l1.37,.39Z"/>
                            <path style={{fill: '#fff'}} d="M39.58,5.95v3.42c0,.82-.22,1.43-.65,1.83-.43,.41-1.08,.61-1.93,.61s-1.49-.2-1.93-.61-.66-1.02-.66-1.83v-3.42h1.51v3.45c0,.41,.09,.72,.27,.93,.18,.2,.44,.31,.8,.31s.63-.1,.81-.31c.18-.2,.27-.51,.27-.93v-3.45h1.51Z"/>
                            <path style={{fill: '#fff'}} d="M46.83,5.95v5.78h-1.67l-1.79-3.13-.44-.86h0l.04,1.07v2.92h-1.33V5.95h1.67l1.79,3.13,.44,.86h0l-.04-1.07v-2.92h1.33Z"/>
                            <path style={{fill: '#fff'}} d="M53.84,5.95v1.16h-1.88v4.61h-1.51V7.12h-1.89v-1.16h5.28Z"/>
                            <path style={{fill: '#fff'}} d="M57.08,5.95v5.78h-1.51V5.95h1.51Z"/>
                            <path style={{fill: '#fff'}} d="M64.45,5.95v5.78h-1.67l-1.79-3.13-.44-.86h0l.04,1.07v2.92h-1.33V5.95h1.67l1.79,3.13,.44,.86h0l-.04-1.07v-2.92h1.33Z"/>
                            <path style={{fill: '#fff'}} d="M68.99,11.82c-.51,0-.97-.11-1.37-.34s-.71-.56-.93-1.01c-.22-.44-.33-.98-.33-1.62s.12-1.16,.35-1.6c.23-.44,.57-.78,1-1.02,.43-.24,.95-.36,1.54-.36,.65,0,1.18,.12,1.58,.35,.4,.24,.71,.61,.94,1.12l-1.39,.55c-.08-.3-.21-.51-.4-.65-.19-.13-.43-.2-.72-.2s-.53,.07-.74,.21c-.2,.14-.36,.34-.46,.6-.11,.27-.16,.59-.16,.98s.05,.75,.16,1.02c.11,.27,.27,.48,.48,.61,.21,.13,.48,.2,.79,.2,.17,0,.32-.02,.46-.06,.14-.04,.26-.1,.37-.18,.11-.08,.19-.18,.25-.3,.06-.12,.09-.26,.09-.42v-.09h-1.32v-1.01h2.6v3.12h-1.02l-.11-1.36,.25,.21c-.12,.4-.34,.7-.66,.91s-.73,.32-1.23,.32Z"/>
                        </g>
                        <g>
                            <path style={{fill: '#bd8e16'}} d="M22.25,6.62c0,2.82,2.29,5.11,5.11,5.11,.42,0,.82-.06,1.22-.15l3.16,8.91h1.55s-3.4-9.43-3.4-9.43c1.54-.88,2.58-2.53,2.58-4.43,0-2.82-2.29-5.11-5.11-5.11-2.82,0-5.11,2.29-5.11,5.11Zm1.46,0c0-2.01,1.63-3.65,3.65-3.65s3.65,1.63,3.65,3.65-1.63,3.65-3.65,3.65-3.65-1.63-3.65-3.65Z"/>
                            <circle style={{fill: '#b3e0d9'}} cx="27.35" cy="6.62" r="3.68"/>
                        </g>
                    </svg>
                </Link>
                {
                    window.innerWidth < 991
                    ?
                    <button onClick={updateMenu} style={{backgroundColor:'antiquewhite'}} className="navbar-toggler" type="button" >
                        hamburger
                    </button>
                    :
                    null
                }
                
               
                    <div 
                        style={{ 
                            width: jwt === "" ? '900px' : window.innerWidth < 991 ? '230px' : '750px'
                        }} 
                        className={`${classes.navbarLinks} ${navbarOpen ? classes.visible: classes.hidden}`}
                    
                    >
                            <div>
                                <NavLink 
                                    to={`/`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD'}}
                                >
                                    <i className='icon-nav icon-home'></i>
                                    Home
                                </NavLink> 
                            </div>
                            <div>
                                <NavLink
                                    to={`/abouttheapp`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD'}}
                                >
                                    <i className='icon-nav icon-app'></i>
                                    About the app
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to={`/aboutthebook`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD'}}
                                >
                                    <i className='icon-nav icon-book'></i>
                                    About the book
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to={`/abouttheauthor`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD'}}
                                >
                                    <i className='icon-nav icon-author'></i>
                                    About the author
                                </NavLink>
                            </div>
                            <div>
                                {applink}
                            </div>
                            <div className={classes.navbarButtons}>
                                {loginLink}
                            </div>
                            <div className={classes.navbarButtons}>
                                {registerLink}
                            </div>

                            {/* RESPONSIVE */}
                            <div className="nav-item d-flex align-items-center d-md-block d-lg-none">
                                {registerLinkM}
                            </div>
                 
                    </div>
           
            </nav>
        </header>
        
    );
    

}
