import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import Button from '../form-components/Button';
import Input from "../form-components/Input";
// import Alert from "../ui-components/Alert";
import WebHeader from "../../WebHeader";
import WebFooter from "../../WebFooter";
import Alert from './ui-login-components/Alert';

// import GoogleLoginComponent from './ui-login-components/GoogleLoginComponent';

import backgroundImage from '../../Images/AAZ-DesktopBackNude.png';
import loginImage from '../../Images/Login_Desktop.png';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            txt: "",
            pwd: "",

            error: null,
            errors: [],
            alert: {
                type: "d-none",
                message: "",
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        let errors = [];

        if (this.state.txt === "") {
            errors.push("email");
        }

        if (this.state.pwd === "") {
            errors.push("password");
        }

        this.setState({errors: errors});

        if(errors.length > 0 ){
            return false;
        }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        }
        
        
        fetch("https://accounting.linarys.com/v1/login/", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.user.id === 0 & data.user.confirmed === 0) {
                    console.log("NO ACCESS")
                    this.setState({
                        alert: {
                            type: "alert-danger",
                            message: "Incorrect user or password",
                        }
                    })
                    return false;
                }
                if (data.error){
                    this.setState({
                        alert: {
                            type: "alert-danger",
                            message: data.error.message,
                        }
                    })
                }else{
                    console.log(data);
                    console.log(data.user.token);
                    // this.handleJWTChange(Object.values(data.user.token));
                    this.handleJWTChange(data.user.token);
                    this.handleJWTChange(data.user.id);
                    // SAVING OUR TOKEN
                    window.localStorage.setItem("jwt", JSON.stringify(data.user.token));
                    window.localStorage.setItem("id", JSON.stringify(data.user.id));
                    this.props.history.push({
                        // pathname: "/dictionary/"+ data.user.id,
                        
                        pathname: "/dictionary/0",
                    })
                }
            })

        console.log(payload);

    };

    handleJWTChange(jwt){
        this.props.handleJWTChange(jwt);
    }

    hasError(key){
        return this.state.errors.indexOf(key) !== -1;
    }

    render(){
        return(
            <Fragment>
                <WebHeader />
                <img src={backgroundImage} alt="" className="img_bg_login" />
                <div className='bg_login'>   
                    <div className='container position-relative'>
                        <div className='login_box'>
                            <Alert 
                                alertType = { this.state.alert.type }
                                alertMessage = { this.state.alert.message }
                            />
                            <div className='row'>
                                <div className='col-12 col-lg-2 align-self-center'>
                                    <img src={loginImage} alt="" className="img-login" />
                                </div>
                                <div className='col-12 col-lg-5'>
                                    
                                    <h3 className='text-center mb-4'>Sign in</h3>
                                    <div className='center-grid'>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className='mb-4'>
                                                <Input 
                                                    title = {"email"}
                                                    type = {"text"}
                                                    name = {"txt"}
                                                    placeholder = {"User name / E-mail"}

                                                    handleChange={this.handleChange}
                                                    className={this.hasError("email") ? "is-invalid": ""}
                                                    errorDiv = {this.hasError("email") ? "text-danger" : "d-none"}
                                                    errorMsg = {"Please enter a valid email address"}
                                                />
                                            </div>
                                            <div className='mb-4'>
                                                <Input 
                                                    title = {"password"}
                                                    type = {"password"}
                                                    name = {"pwd"}
                                                    placeholder = {"Password"}

                                                    handleChange={this.handleChange}
                                                    className={this.hasError("password") ? "is-invalid": ""}
                                                    errorDiv = {this.hasError("password") ? "text-danger" : "d-none"}
                                                    errorMsg = {"Please enter a valid password"}
                                                />
                                            </div>
                                    
                                            <div className='mb-4'>
                                                <Link
                                                    to={`/forgotpassword`}
                                                    className={"link"}
                                                >
                                                    FORGOT YOUR PASSWORD?
                                                </Link>
                                            </div>
                                            <div className=''>
                                                <Button
                                                    title={"Log in"}
                                                    className={"ochre"}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                    {/* <pre>{JSON.stringify(this.state,null,3)}</pre> */}
                                </div>
                                </div>
                                <div className='col-12 col-lg-5'>
                                    <div className='py-2'>
                                        {/* <div className='subtitle mb-4 text-center'>
                                            or
                                        </div> */}
                                        <div className='center-grid'>
                                            {/* <div className='mb-4'>
                                                <Button
                                                    title={"Facebook"}
                                                />
                                            </div> */}
                                            {/* <div className='mb-4'>
                                                <GoogleLoginComponent 
                                                />
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className='py-2'>
                                        <div className='subtitle mb-4 text-center'>
                                            Don't have an account?
                                        </div>
                                        <div className='center-grid'>
                                            <Link
                                                to={`/registration`}
                                                className={"link"}
                                            >
                                                REGISTER
                                            </Link>
                                        </div>
                                    
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <WebFooter />
            </Fragment>
        );
    }
}