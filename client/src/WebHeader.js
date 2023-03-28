import React, {useEffect, useState, useRef} from 'react';
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
            
            setMenuClass("visible")
            
        }
        else {
            
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
        applink = <Link  style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}} className={'nav-link'} to="/dictionary/1"><i className='icon-nav icon-goback'></i>  Go to app</Link>
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
         
           // Alert if clicked on outside of element
         
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) ) {
                setNavbarOpen(false)
                setMenuClass("hidden")

            }
          
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef= useRef(null);
    
    useOutsideAlerter(wrapperRef);

    return(
        <header className={classes.webHeader}>
            {
                navbarOpen
                ?
                <div style={{width:'100vw', height:`calc(${document.body.scrollHeight}px - 10vh)`, position:'absolute', zIndex:'0', backgroundColor: 'rgba(0,0,0,.2)'}}/>
                :
                null
            }
            
            <nav ref={wrapperRef} className={classes.navbar}>
                <Link
                    to={`/`}
                    style={{display:'flex'}}
                >
                    {/* <svg style={{margin: window.innerWidth > 600 ? '0 50px': '0 10px'}}  width={window.innerWidth > 600 ? "200" : "120"} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 22">
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
                    </svg> */}
                    <svg style={{margin: window.innerWidth > 600 ? '0 50px': 'auto 10px'}}  width={window.innerWidth > 600 ? "200" : "120"}  viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M197.302 38.2324H157.302V54.2833H197.302V38.2324Z" fill="#CAD051"/>
                            <path d="M163.665 49.2366V43.2803H165.804C166.567 43.2803 167.149 43.4185 167.549 43.7021C167.949 43.9857 168.145 44.393 168.145 44.9239C168.145 45.2294 168.073 45.4985 167.935 45.7094C167.789 45.9275 167.585 46.0875 167.309 46.1894C167.622 46.2694 167.862 46.4221 168.022 46.6475C168.189 46.873 168.269 47.1421 168.269 47.4621C168.269 48.0439 168.087 48.4803 167.716 48.7785C167.345 49.0694 166.8 49.2221 166.073 49.2294H163.658L163.665 49.2366ZM165.098 45.7675H165.847C166.16 45.7675 166.385 45.7094 166.516 45.593C166.647 45.4766 166.72 45.3166 166.72 45.0985C166.72 44.8439 166.647 44.6694 166.502 44.553C166.356 44.4439 166.124 44.3857 165.804 44.3857H165.098V45.7603V45.7675ZM165.098 46.7057V48.1312H166.036C166.298 48.1312 166.495 48.073 166.633 47.9494C166.771 47.833 166.844 47.6657 166.844 47.4475C166.844 46.953 166.596 46.6985 166.102 46.6985H165.098V46.7057Z" fill="#004F3D"/>
                            <path d="M175.105 46.7057H172.851V48.1312H175.52V49.2366H171.418V43.2803H175.527V44.3857H172.851V45.6439H175.105V46.7057Z" fill="#004F3D"/>
                            <path d="M183.2 44.3857H181.411V49.2294H179.978V44.3857H178.226V43.2803H183.2V44.3857Z" fill="#004F3D"/>
                            <path d="M189.04 48.1239H187.076L186.735 49.2366H185.2L187.382 43.2803H188.735L190.931 49.2366H189.389L189.04 48.1239ZM187.418 47.0185H188.698L188.058 44.953L187.418 47.0185Z" fill="#004F3D"/>
                            <path d="M18.7854 29.9198H14.509L13.3963 26.3198H7.93448L6.79993 29.9198H2.61084L8.21811 13.9707H13.1999L18.7854 29.9198ZM8.70539 23.4907H12.6181L10.6617 17.0398L8.70539 23.4907Z" fill="white"/>
                            <path d="M36.618 25.3527C36.3126 26.4655 35.818 27.3818 35.1416 28.0945C34.4653 28.8073 33.658 29.3382 32.7271 29.6655C31.7962 29.9927 30.7635 30.16 29.6362 30.16C28.0216 30.16 26.6326 29.8327 25.4544 29.1782C24.2762 28.5236 23.3744 27.5854 22.7489 26.3636C22.1235 25.1418 21.8035 23.6655 21.8035 21.9418C21.8035 20.2182 22.1162 18.7418 22.7489 17.52C23.3744 16.2982 24.2835 15.3527 25.4544 14.7054C26.6326 14.0509 28.0144 13.7236 29.6144 13.7236C30.7271 13.7236 31.7526 13.8836 32.6835 14.1964C33.6144 14.5091 34.4071 14.9891 35.0544 15.6364C35.7016 16.2836 36.1598 17.1127 36.4289 18.1236L32.778 19.6C32.5526 18.6036 32.1889 17.9127 31.6798 17.5418C31.1707 17.1709 30.5307 16.9891 29.7598 16.9891C28.9889 16.9891 28.3489 17.1709 27.7889 17.5418C27.2362 17.9127 26.8071 18.4654 26.5089 19.2C26.2107 19.9345 26.058 20.8509 26.058 21.9418C26.058 23.0327 26.1962 23.9345 26.4726 24.6764C26.7489 25.4182 27.1635 25.9709 27.7162 26.3418C28.2689 26.7127 28.9598 26.8945 29.7816 26.8945C30.5526 26.8945 31.2144 26.6836 31.7526 26.2545C32.2907 25.8254 32.6616 25.1709 32.8507 24.2836L36.618 25.3454V25.3527Z" fill="white"/>
                            <path d="M55.4981 25.3527C55.1927 26.4655 54.6981 27.3818 54.0218 28.0945C53.3454 28.8073 52.5381 29.3382 51.6072 29.6655C50.6763 29.9927 49.6436 30.16 48.5163 30.16C46.9018 30.16 45.5127 29.8327 44.3345 29.1782C43.1563 28.5236 42.2545 27.5854 41.6291 26.3636C41.0036 25.1418 40.6836 23.6655 40.6836 21.9418C40.6836 20.2182 40.9963 18.7418 41.6291 17.52C42.2545 16.2982 43.1636 15.3527 44.3345 14.7054C45.5127 14.0509 46.8945 13.7236 48.4945 13.7236C49.6072 13.7236 50.6327 13.8836 51.5636 14.1964C52.4945 14.5091 53.2872 14.9891 53.9345 15.6364C54.5818 16.2836 55.04 17.1127 55.3091 18.1236L51.6581 19.6C51.4327 18.6036 51.069 17.9127 50.56 17.5418C50.0509 17.1709 49.4109 16.9891 48.64 16.9891C47.869 16.9891 47.229 17.1709 46.669 17.5418C46.1163 17.9127 45.6872 18.4654 45.389 19.2C45.0909 19.9345 44.9381 20.8509 44.9381 21.9418C44.9381 23.0327 45.0763 23.9345 45.3527 24.6764C45.629 25.4182 46.0436 25.9709 46.5963 26.3418C47.149 26.7127 47.84 26.8945 48.6618 26.8945C49.4327 26.8945 50.0945 26.6836 50.6327 26.2545C51.1709 25.8254 51.5418 25.1709 51.7309 24.2836L55.4981 25.3454V25.3527Z" fill="white"/>
                            <path d="M108.516 13.9639V23.4111C108.516 25.6657 107.92 27.353 106.713 28.473C105.513 29.593 103.738 30.153 101.382 30.153C99.0253 30.153 97.2726 29.593 96.0653 28.473C94.858 27.353 94.2544 25.6657 94.2544 23.4111V13.9639H98.4362V23.4839C98.4362 24.6257 98.6835 25.4839 99.1708 26.0439C99.658 26.6111 100.4 26.8875 101.382 26.8875C102.363 26.8875 103.127 26.6039 103.622 26.0439C104.109 25.4839 104.356 24.6257 104.356 23.4839V13.9639H108.516Z" fill="white"/>
                            <path d="M128.524 13.9633V29.9124H123.906L118.953 21.2797L117.746 18.9088H117.724L117.818 21.8542V29.9051H114.146V13.9561H118.764L123.716 22.5815L124.924 24.9524H124.946L124.851 22.007V13.9561H128.524V13.9633Z" fill="white"/>
                            <path d="M147.884 13.9639V17.1784H142.684V29.9202H138.524V17.1784H133.302V13.9639H147.876H147.884Z" fill="white"/>
                            <path d="M156.829 13.9639V29.913H152.669V13.9639H156.829Z" fill="white"/>
                            <path d="M177.156 13.9633V29.9124H172.538L167.585 21.2797L166.378 18.9088H166.356L166.451 21.8542V29.9051H162.778V13.9561H167.396L172.349 22.5815L173.556 24.9524H173.578L173.484 22.007V13.9561H177.156V13.9633Z" fill="white"/>
                            <path d="M189.702 30.16C188.284 30.16 187.025 29.8473 185.92 29.2145C184.814 28.5818 183.956 27.6582 183.345 26.4364C182.734 25.2145 182.429 23.7236 182.429 21.9636C182.429 20.2036 182.749 18.7636 183.396 17.5418C184.044 16.32 184.96 15.3745 186.167 14.7127C187.367 14.0509 188.778 13.7236 190.407 13.7236C192.211 13.7236 193.673 14.0509 194.785 14.7054C195.898 15.36 196.756 16.3927 197.374 17.8109L193.534 19.3309C193.323 18.5091 192.953 17.9127 192.422 17.5418C191.891 17.1709 191.229 16.9891 190.443 16.9891C189.658 16.9891 188.974 17.1782 188.414 17.5564C187.847 17.9345 187.425 18.4945 187.134 19.2218C186.844 19.9564 186.698 20.8582 186.698 21.9418C186.698 23.0255 186.851 24.0145 187.149 24.7709C187.447 25.5273 187.891 26.0873 188.48 26.4509C189.069 26.8145 189.796 26.9964 190.669 26.9964C191.134 26.9964 191.563 26.9382 191.949 26.8291C192.334 26.72 192.676 26.5527 192.967 26.3345C193.258 26.1164 193.484 25.8473 193.644 25.5127C193.804 25.1855 193.884 24.7927 193.884 24.3418V24.1018H190.233V21.3236H197.411V29.9273H194.582L194.269 26.1818L194.945 26.7636C194.603 27.8618 194 28.6982 193.12 29.2873C192.24 29.8764 191.113 30.1673 189.723 30.1673L189.702 30.16Z" fill="white"/>
                            <path d="M81.7163 48.2114L83.1563 43.6805L81.7018 39.5859L76.5454 54.0878H79.84L80.8727 50.8441H85.6945L84.7636 48.2114H81.7163Z" fill="white"/>
                            <path d="M98.1091 46.0801H92.2837V48.5964H98.1091V46.0801Z" fill="white"/>
                            <path d="M104.407 51.4841L111.833 40.1968V38.335H100.546V40.9677H107.978L100.531 52.1822V54.0877H112V51.4841H104.407Z" fill="white"/>
                            <path d="M81.7455 28.0586C85.9928 25.6295 88.8655 21.0623 88.8655 15.8186C88.8655 8.02952 82.5528 1.7168 74.7637 1.7168C66.9746 1.7168 60.6619 8.02952 60.6619 15.8186C60.6619 23.6077 66.9746 29.9204 74.7637 29.9204C75.92 29.9204 77.04 29.7677 78.1164 29.4986L81.7019 39.5859L83.1564 43.6732L84.771 48.2113L85.7019 50.8441L86.851 54.0877H91.1419L81.7455 28.0586ZM74.7637 25.8913C69.2 25.8913 64.691 21.3822 64.691 15.8186C64.691 10.255 69.2 5.74589 74.7637 5.74589C80.3273 5.74589 84.8364 10.255 84.8364 15.8186C84.8364 21.3822 80.3273 25.8913 74.7637 25.8913Z" fill="#BD8E16"/>
                            <path d="M74.7419 25.9858C80.3612 25.9858 84.9165 21.4305 84.9165 15.8113C84.9165 10.192 80.3612 5.63672 74.7419 5.63672C69.1227 5.63672 64.5674 10.192 64.5674 15.8113C64.5674 21.4305 69.1227 25.9858 74.7419 25.9858Z" fill="#B3E0D9"/>
                        </svg>
                </Link>
                {
                    window.innerWidth < 991
                    ?
                    
                        <div onClick={updateMenu} className={classes.burgerButton}>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>
                        </div>
                
                    :
                    null
                }
                
               
                    <div 
                        style={{ 
                            width: jwt === "" && window.innerWidth > 991 ? '900px'
                                    : window.innerWidth < 991 ? '240px'
                                    : jwt === "" && window.innerWidth < 991 ? '240px'
                                    : '830px'
                            
                        }} 
                        className={`${classes.navbarLinks} ${navbarOpen ? classes.visible: classes.hidden}`}
                        
                    >
                            <div>
                                <NavLink 
                                    to={`/`}
                                    exact={true}
                                    className={'nav-link'}
                                    activeClassName="active"
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
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
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
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
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
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
                                    style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
                                >
                                    <i className='icon-nav icon-author'></i>
                                    About the author
                                </NavLink>
                            </div>
                            <div>
                                {applink}
                            </div>

                            {
                                window.innerWidth < 991 && jwt === ""
                                ?
                                <div>
                                    <NavLink
                                        to={`/login`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                        style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
                                    >
                                        <i className='icon-nav icon-signin'></i>
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to={`/registration`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                        style={{color:window.innerWidth < 991 ? '#B66A00' :'#FDFDFD', textTransform:'uppercase'}}
                                    >
                                        <i className='icon-nav icon-register'></i>
                                        register
                                    </NavLink>
                                </div>
                                :
                                <>
                                    <div className={classes.navbarButtons}>
                                        {loginLink}
                                    </div>
                                    <div className={classes.navbarButtons}>
                                        {registerLink}
                                    </div>
                                </>
                            }
                            

                            {/* RESPONSIVE */}
                            {/* <div className="nav-item d-flex align-items-center d-md-block d-lg-none">
                                {registerLinkM}
                            </div> */}
                 
                    </div>
           
            </nav>
        </header>
        
    );
    

}
