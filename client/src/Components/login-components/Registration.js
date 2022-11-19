import React, {Component} from 'react';
import Input from '../form-components/Input';
import Button from '../form-components/Button';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import GoogleLoginComponent from './ui-login-components/GoogleLoginComponent';

import PasswordValidation from './ui-login-components/PasswordValidation';

import textureImage from '../../Images/AAZ-DesktopBackGreen.png';



export default class Registration extends Component{

    state = {
        user: {}, 
        isLoaded: false,
        error: null,
    };

    constructor(props){
        super(props);
        this.state = {
            user: {
                // id: 0,
                name: "",
                lastname: "",
                username: "",
                email: "",
                pwd: "",
                role: 1,
                account: 1,
                pricture: "",
                status: 0,
                confirmed: 0
            },
            isLoaded: false,
            error: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (evt) => {

        evt.preventDefault();

        // CLIENT SIDE VALIDATION
        let errors = [];
        if(this.state.user.username === ""){
            errors.push("email");
        }
        if(this.state.user.pwd === ""){
            errors.push("password");
        }

        this.setState({errors: errors});

        if(errors.length > 0) {
            return false;
        }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());

        console.log(payload);

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        };

        fetch('https://accounting.linarys.com/v1/register/', requestOptions)
        .then(response => response.json())
        .then(data => {
            
            if(data.erro){
                console.log("Error");
            }else{
                console.log(data);
                window.location.href='/confirmationRegistermail'
            }
        });

    };

    handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value,
            }
        }))
    }

    hasError(key){
        return this.state.errors.indexOf(key) !== -1;
    }

    componentDidMount(){
        this.setState({ isLoaded: true });
    }

    render(){
        let { user, isLoaded, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded){
            return <p>Loading...</p>
        }else{
        return(
            <div className='bg_registration'>
                <div className='container position-relative'>
                    <div className='registration_box'>
                        <img src={textureImage} alt="" className="" />
                        <div className='row align-items-center '>
                            <div className='col-12 col-lg-6'>
                                <h3 className='text-center mb-4'>Registration form</h3>
                                <div className='center-grid'>
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className='py-2'>
                                            <Input 
                                                title = {"Name"}
                                                type = {"text"}
                                                name = {"name"}
                                                placeholder = {"name"}
                                                value = {user.name}
                                                handleChange = {this.handleChange}
                                            />
                                        </div>
                                        <div className='py-2'>
                                            <Input 
                                                title = {"LastName"}
                                                type = {"text"}
                                                name = {"lastname"}
                                                placeholder = {"Last name"}
                                                value = {user.lastname}
                                                handleChange = {this.handleChange}
                                            />
                                        </div>
                                        <div className='py-2'>
                                            <Input 
                                                title = {"UserName"}
                                                type = {"text"}
                                                name = {"username"}
                                                placeholder = {"User name"}
                                                value = {user.username}
                                                handleChange = {this.handleChange}
                                            />
                                        </div>
                                        <div className='py-2'>
                                            <Input 
                                                title = {"Email"}
                                                type = {"email"}
                                                name = {"email"}
                                                placeholder = {"E-mail"}
                                                value = {user.email}
                                                handleChange = {this.handleChange}

                                            />
                                        </div>
                                                   
                                        <PasswordValidation 
                                            title = {"Password"}
                                            type = {"password"}
                                            name = {"pwd"}
                                            placeholder = {"New Password"}
                                            value = {user.pwd}
                                            handleChange = {this.handleChange}
                                        />

                                        <input 
                                            type="hidden"
                                            name="id"
                                            id="id"
                                            value={user.id}
                                            onChange={this.handleChange}
                                        />
                                        
                                        <Input 
                                            title = {"role"}
                                            type = {"hidden"}
                                            name = {"role"}
                                            value = {user.role}
                                            handleChange = {this.handleChange}
                                        />

                                        <Input 
                                            title = {"account"}
                                            type = {"hidden"}
                                            name = {"account"}
                                            value = {user.account}
                                            handleChange = {this.handleChange}
                                        />

                                        <Input 
                                            title = {"pricture"}
                                            type = {"hidden"}
                                            name = {"pricture"}
                                            value = {user.pricture}
                                            handleChange = {this.handleChange}
                                        />

                                        <Input 
                                            title = {"status"}
                                            type = {"hidden"}
                                            name = {"status"}
                                            value = {user.status}
                                            handleChange = {this.handleChange}
                                        />

                                        <Input 
                                            title = {"confirmed"}
                                            type = {"hidden"}
                                            name = {"confirmed"}
                                            value = {user.confirmed}
                                            handleChange = {this.handleChange}
                                        />

                                        <div className='py-4'>
                                            <Button
                                                title={"Register"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
                                </div>
                                {/* <div>
                                    <pre>{JSON.stringify(this.state,null,3)}</pre>
                                </div> */}
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='mb-2 center-grid'>
                                    {/* <div className='subtitle mb-4 text-center'>
                                        or register with
                                    </div> */}
                                    {/* <div className='mb-4'>
                                        <GoogleLoginComponent />
                                    </div> */}
                                </div>
                                <div className='center-grid'>
                                    <div className='subtitle mb-4'>
                                        You have an account?
                                    </div>
                                    <Link
                                        to={`/login`}
                                        className={'btn snow'}
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }
}