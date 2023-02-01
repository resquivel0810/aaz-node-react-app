import React, {Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./fontello/css/fontello.css";
// import Template from './Template';

import Login from './Components/login-components/Login';
import Registration from './Components/login-components/Registration';
import ForgotPassword from './Components/login-components/ForgotPassword';
import ResetPassword from './Components/login-components/ResetPassword';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Dictionary from './Components/terms-components/Dictionary';


import WebFooter from './WebFooter';
import WebHeader from './WebHeader';
import HomePage from './Website-Pages/HomePage';
import AboutAppPage from './Website-Pages/AboutAppPage';
import ConfirmationRegistration from './Components/login-components/ConfirmationRegistration';
import AboutBookPage from './Website-Pages/AboutBookPage';
import AboutAuthorPage from './Website-Pages/AboutAuthorPage';
import NotFoundPage from './NotFoundPage';
import ConfirmationRegistrationMail from './Components/login-components/ConfirmationRegistrationMail';
import ConfirmationForgotPasswordMail from './Components/login-components/ConfirmationForgotPasswordMail';
import ConfirmationForgotPassword from './Components/login-components/ConfirmationForgotPassword';
import ImprintPage from './ImprintPage';
import Profile from './Components/profile-components/Profile';

// import Term from './Components/terms-components/Term';
import ChangePassword from './Components/profile-components/ChangePassword';
import ConfirmChangePassword from './Components/profile-components/ConfirmChangePassword';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      jwt: "",
    };

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
    return(
      <Router>
        <Switch>
          {/* APP */}
          <Route path='/dictionary/:id' component={Dictionary} />
         
      
          <Route path="/profile/:id" component={Profile}>
          </Route>

          <Route path='/changePassword'>
            <ChangePassword />
          </Route>

          <Route path='/confirmChangePassword'>
            <AppHeader />
            <ConfirmChangePassword />
            <AppFooter />
          </Route>

          {/* WEBSITE */}
          <Route
            exact
            path="/login"
            component={(props) => <Login {...props} handleJWTChange = {this.handleJWTChange} /> }
          />
  
          <Route path='/registration'>
            <WebHeader />
            <Registration />
            <WebFooter />
          </Route>
  
          <Route path='/forgotpassword'>
            <WebHeader />
            <ForgotPassword />
            <WebFooter />
          </Route>
  
          <Route path="/resetpassword/:id" component={ResetPassword} />

          <Route path='/confirmationRegistermail'>
            <WebHeader />
            <ConfirmationRegistrationMail />
            <WebFooter />
          </Route>

          <Route path="/confirmationRegister/:id" component={ConfirmationRegistration} />

          <Route path='/confirmationforgotpassword'>
            <WebHeader />
            <ConfirmationForgotPassword />
            <WebFooter />
          </Route>

          <Route path='/confirmationforgotpasswordmail'>
            <WebHeader />
            <ConfirmationForgotPasswordMail />
            <WebFooter />
          </Route>

          <Route path='/abouttheapp'>
            <WebHeader />
            <AboutAppPage />
            <WebFooter />
          </Route>
          <Route path='/aboutthebook'>
            <WebHeader />
            <AboutBookPage />
            <WebFooter />
          </Route>

          <Route path='/abouttheauthor'>
            <WebHeader />
            <AboutAuthorPage />
            <WebFooter />
          </Route>

          <Route path='/imprint'>
            <WebHeader />
            <ImprintPage />
            <WebFooter />
          </Route>

          
          <Route exact path='/'>
            <WebHeader />
            <HomePage />
            <WebFooter />
          </Route>

          <Route path="*">
            <WebHeader />
            <NotFoundPage />
            <WebFooter />
          </Route>
          
          
        </Switch>

      </Router>
    );
  }
}
