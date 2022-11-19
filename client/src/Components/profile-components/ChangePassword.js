import React, {Component, Fragment} from 'react';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter'
import Button from "../form-components/Button";
import textureImage from '../../Images/AAZ-DesktopBackGreen.png';
import PasswordValidation from '../login-components/ui-login-components/PasswordValidation';
import Input from '../form-components/Input';
import { Link } from 'react-router-dom';

export default class ChangePassword extends Component{
    state = {
        user: {}, 
        isLoaded: false,
    }

    constructor(props){
        super(props);
        this.state = {
            user: {
                id: 0,
                oldpwd: "",
                pwd: "",
            },
            isLoaded: false,
            error: null,
            errors: [],
            alert: {
                type: "d-none",
                message: "",
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (evt) => {
        let id = window.localStorage.getItem("id");
        
        
        evt.preventDefault();

        // CLIENT SIDE VALIDATION
        // let errors = [];
        // if(this.state.user.pwd === ""){
        //     errors.push("password");
        // }

        // this.setState({errors: errors});

        // if(errors.length > 0) {
        //     return false;
        // }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());
        this.state.user.idU = id.ID
        
        payload.id = ""+id
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        };

        // this.state.user.id = id
        // this.setState({user: {id : id}})
        this.setState({
            user: {
                oldpwd: this.state.user.oldpwd,
                newpwd: this.state.user.newpwd
            }
         })

        requestOptions.body = JSON.stringify(payload)
        // console.log(payload)
        // console.log(requestOptions)
      


        fetch('https://accounting.linarys.com/v1/cpwdlog/', requestOptions)
            // .then(response => response.json())
            .then(data => {
                console.log("Test");
                if(data.error){
                    console.log("Error");
                }else{
                    console.log(data);
                    console.log(payload)
                    console.log("Form was submited", "ID:", id);
                    // fetch('https://accounting.linarys.com/v1/closecode/' + this.props.match.params.id, {method: "GET"})
                    //     window.location.href='/confirmationforgotpasswordmail'
                    window.location.href='/confirmChangePassword'
                }
            })
    }

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

    componentDidMount(){

        // fetch(`https://accounting.linarys.com/v1/confirm/` + this.props.match.params.id, {method: "GET"})
        //     console.log(this.props.match.params.id)

       
        // fetch(`https://accounting.linarys.com/v1/getid/` + this.props.match.params.id, {method: "GET"})
        //     .then(response => response.json())
        //     .then(data => {
                
        //         if(data.erro){
        //             console.log("Error");
        //         }else{
        //             console.log(data);
        //             // user.id = data;
                    
        //             this.setState({
        //                 user: {
        //                     idU: data,
        //                 }
        //             })

        //             if (data.ID === 0){
        //                 window.location.href='/login'
        //             }
        //         }
        //     });
    }

    hasError(key){
        return this.state.errors.indexOf(key) !== -1;
    }

    render(){
        let { user} = this.state;
        let id = window.localStorage.getItem("id")
        return(
            <Fragment>
                <AppHeader />
                <div className="bg_forgotPassword">
                    <div className="container position-relative">
                        <div className="forgotPassword_box">
                            <img src={textureImage} alt="" className="" />
                            <div>
                                <div >
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className='center-grid'>
                                            <div className='pt-2'>
                                                <div className='body_text_small'>
                                                    Old password
                                                </div>
                                                <Input 
                                                    title = {"oldpwd"}
                                                    type = {"password"}
                                                    name = {"oldpwd"}
                                                    placeholder = {"Old password"}
                                                    handleChange={this.handleChange}
                                                />
                                            </div>
                                            <div className='pb-2'>
                                                <Link
                                                    to={`/forgotpassword`}
                                                    className={"link"}
                                                >
                                                    FORGOT YOUR PASSWORD?
                                                </Link>
                                            </div>
                                            <div>
                                                <PasswordValidation 
                                                    title = {"newpwd"}
                                                    type = {"password"}
                                                    name = {"newpwd"}
                                                    placeholder = {"New Password"}
                                                    value = {user.newpwd}
                                                    handleChange = {this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='py-4 center-flex'>
                                            <div className='px-2'>
                                                <Link 
                                                    to={`/profile/${id}`}
                                                    className={'btn snow'}
                                                >
                                                    Cancel
                                                </Link>
                                            </div>
                                            <div className='px-2'>
                                                <Button
                                                    title={"Change"}
                                                    className={"btn ochre"}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                    {/* <div>
                                        <pre>{JSON.stringify(this.state,null,3)}</pre>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppFooter />
            </Fragment>
        );
    }
}
