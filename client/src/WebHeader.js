import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default class WebHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
          jwt: "",
        }
    
        this.handleJWTChange(this.handleJWTChange.bind(this));
    }
    
    componentDidMount(){
        let t = window.localStorage.getItem("jwt");
        if(t){
          if(this.state.jwt === ""){
            this.setState({jwt: JSON.parse(t)});
          }
        }
      }
    
    handleJWTChange = (jwt) => {
        this.setState({ jwt: jwt });
    }
    
    logout = () => {
        this.setState({ jwt: "" });
        // REMOVE TOKEN 
        window.localStorage.removeItem("jwt");
    }

    render(){
        let loginLink, applink, registerLink, registerLinkM;

        if(this.state.jwt === ""){
            loginLink = <Link to={`/login`} className={'btn ochre size-auto'} ><i className='icon-nav icon-signin'></i>  Sign In </Link>
            registerLink = <Link to={`/registration`} className={'btn transparent size-auto'}> <i className='icon-nav icon-register'></i> Register</Link>
            registerLinkM = <NavLink to={`/registration`} exact={true} className={'nav-link'} activeClassName="active"><i className='icon-nav icon-register'></i> Register </NavLink>
        }else{
            // loginLink = <Link className={'btn ochre size-auto'} to="/" onClick={this.logout}><i className='icon-nav icon-logout'></i>  Logout</Link>
            applink = <Link className={'nav-link'} to="/dictionary/0"><i className='icon-nav icon-goback'></i>  Go to app</Link>
        }

        return(
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg navbar-primary fixed-top">
                    <Link
                        to={`/`}
                        className={'navbar-brand'}
                    >
                        Accounting a-z
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">
                            {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav-web">
                                <li className="nav-item d-flex align-items-center">
                                    <NavLink 
                                        to={`/`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                    >
                                        <i className='icon-nav icon-home'></i>
                                        Home
                                    </NavLink> 
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <NavLink
                                        to={`/abouttheapp`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                    >
                                        <i className='icon-nav icon-app'></i>
                                        About the app
                                    </NavLink>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <NavLink
                                        to={`/aboutthebook`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                    >
                                        <i className='icon-nav icon-book'></i>
                                        About the book
                                    </NavLink>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <NavLink
                                        to={`/abouttheauthor`}
                                        exact={true}
                                        className={'nav-link'}
                                        activeClassName="active"
                                    >
                                        <i className='icon-nav icon-author'></i>
                                        About the author
                                    </NavLink>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    {applink}
                                </li>
                                <li className="nav-item d-flex align-items-center mx-2 hide-mobile">
                                    {loginLink}
                                </li>
                                <li className="nav-item d-flex align-items-center hide-mobile">
                                    {registerLink}
                                </li>

                                {/* RESPONSIVE */}
                                <li className="nav-item d-flex align-items-center d-md-block d-lg-none">
                                    {registerLinkM}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            
        );
    }
}