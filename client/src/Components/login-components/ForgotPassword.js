import React, {useState} from 'react';

import Input from "../form-components/Input";
import Button from "../form-components/Button";

import textureImage from '../../Images/AAZ-DesktopBackGreen.png';

export default function ForgotPassword2(props) {
    const [txt, setTxt] = useState('')
    const initError = {
        exists: false,
        helperText: null,
    };
    const [emailError, setEmailError] = useState(initError)

    const handleChange = (evt) => {
        let value = evt.target.value;
        setTxt(value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(txt.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null) {
            fetch("https://accounting.linarys.com/v1/forgot/" + txt, {method: "GET"})
            .then(() => {
                window.location.href='/confirmationforgotpassword'
            })
        } else {
            setEmailError({
                exists: true,
                helperText: "Write a valid email",
            });
        }



    };
    return(
        <>
        <div className="bg_forgotPassword">
            <div className="container position-relative">
                <div className="forgotPassword_box">
                    <img src={textureImage} alt="" className="" />
                    <div>
                        <h3 style={{textTransform:'uppercase'}} className='text-center mb-4'>Reset your password</h3>
                        <div className='center-grid'>
                            <form onSubmit={handleSubmit}>
                                <div className="body_text">
                                    Type your e-mail
                                </div>
                                <div className='py-4'>
                                    <Input 
                                        title = {"email"}
                                        type = {"text"}
                                        name = {"txt"}
                                        placeholder = {"User name / E-mail"}
                                        handleChange={handleChange}
                                        className={emailError.exists ? "is-invalid": ""}
                                        errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                        errorMsg = {emailError.helperText}
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
                </div>
            </div>
        </div>
        </>
    )

}
