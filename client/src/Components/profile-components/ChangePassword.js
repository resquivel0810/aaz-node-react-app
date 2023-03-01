import React, {Component, Fragment, useState} from 'react';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter'
import Button from "../form-components/Button";
import textureImage from '../../Images/AAZ-DesktopBackGreen.png';
import PasswordValidation from '../login-components/ui-login-components/PasswordValidation';
import Input from '../form-components/Input';
import { Link } from 'react-router-dom';

export default function ChangePassword2(props) {

  

    const [user, setUser] = useState({
        id: window.localStorage.getItem("id"),
        oldpwd:"",
        newpwd:""
    })

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(user),
        };


        fetch('https://accounting.linarys.com/v1/cpwdlog/', requestOptions)
            // .then(response => response.json())
            .then(data => {
                console.log("Test");
                if(data.error){
                    console.log("Error");
                }else{
                    console.log(data.error);
                    // console.log(payload)
                    
                    // fetch('https://accounting.linarys.com/v1/closecode/' + this.props.match.params.id, {method: "GET"})
                    //     window.location.href='/confirmationforgotpasswordmail'
                    // window.location.href='/confirmChangePassword'
                }
            })
    }
    let id = window.localStorage.getItem("id")

    return(
        <>
            <AppHeader 
                currentPathName={props.location.pathname}
            />
            <div className="bg_forgotPassword">
                <div className="container position-relative">
                    <div className="forgotPassword_box">
                        <img src={textureImage} alt="" className="" />
                        <div>
                            <div >
                                <form onSubmit={handleSubmit}>
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
                                                handleChange={handleChange}
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
                                                handleChange = {handleChange}
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
        </>
    )



}

