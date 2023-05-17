import React, {Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./fontello/css/fontello.css";
// import Template from './Template';

import Login from './Pages/Login';
import Registration from './Pages/Registration';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import Dictionary from './Pages/Dictionary';


import WebFooter from './Components/WebFooter';
import WebHeader from './Components/WebHeader';
import HomePage from './Pages/HomePage';
import AboutAppPage from './Pages/AboutAppPage';
import ConfirmationRegistration from './Pages/ConfirmationRegistration';
import AboutBookPage from './Pages/AboutBookPage';
import AboutAuthorPage from './Pages/AboutAuthorPage';
import NotFoundPage from './Pages/NotFoundPage';
import ConfirmationRegistrationMail from './Pages/ConfirmationRegistrationMail';
import ConfirmationForgotPasswordMail from './Pages/ConfirmationForgotPassword';
import ConfirmationForgotPassword from './Pages/ConfirmationForgotPassword';
import ImprintPage from './Pages/ImprintPage';
import Profile from './Pages/Profile';

// import Term from './Components/terms-components/Term';
import ChangePassword from './Pages/ChangePassword';
import ConfirmChangePassword from './Pages/ConfirmChangePassword';

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
        this.setState({jwt: t});
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
         
          <Route path="/profile/:id" component={Profile} />

          <Route path='/changePassword' component={ChangePassword} />
      
          <Route path='/confirmChangePassword' component={ConfirmChangePassword}/>
          
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

          <Route exact path='/abouttheapp'>
            <WebHeader />
            <AboutAppPage />
            <WebFooter />
          </Route>
          <Route exact path='/aboutthebook'>
            <WebHeader />
            <AboutBookPage />
            <WebFooter />
          </Route>

          <Route exact path='/abouttheauthor'>
            <WebHeader />
            <AboutAuthorPage />
            <WebFooter />
          </Route>

          <Route exact path='/imprint'>
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
