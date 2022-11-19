import React, {Component, Fragment} from 'react';

import Input from "../form-components/Input";
import Button from "../form-components/Button";

import textureImage from '../../Images/AAZ-DesktopBackGreen.png';


export default class ForgotPassword extends Component{
    constructor(props){
        super(props);

        this.state = {
            txt: "",

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

        this.setState({errors: errors});

        if(errors.length > 0 ){
            return false;
        }
        
        console.log(errors.length);

        const data = new FormData(evt.target);

        console.log(data);
        fetch("https://accounting.linarys.com/v1/forgot/" + this.state.txt, {method: "GET"})
            .then((data) => {
                if (data.error){
                    console.log("ERROR");
                }else{
                    console.log(data);
                    console.log("*");
                    window.location.href='/confirmationforgotpassword'
                }
            })

    };


    hasError(key){
        return this.state.errors.indexOf(key) !== -1;
    }

    render(){
        return(
            <Fragment>
                <div className="bg_forgotPassword">
                    <div className="container position-relative">
                        <div className="forgotPassword_box">
                            <img src={textureImage} alt="" className="" />
                            <div>
                                <h3 className='text-center mb-4'>Reset your password</h3>
                                <div className='center-grid'>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="body_text">
                                            TYPE YOUR USER NAME OR E-MAIL
                                        </div>
                                        <div className='py-4'>
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
                                        <div className='py-4'>
                                            <Button
                                                title={"Send e-mail"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <pre>{JSON.stringify(this.state,null,3)}</pre> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}