import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Button from '../form-components/Button';
import Input from "../form-components/Input";

import WebHeader from "../../WebHeader";
import WebFooter from "../../WebFooter";



import backgroundImage from '../../Images/AAZ-DesktopBackNude.png';
import loginImage from '../../Images/Login_Desktop.png';

export default function Login(props) {
    const [credentials, setCredentials] = useState({
        pwd: '',
        txt: ''
    })
    const [enteredUserTouched, setEnteredUserTouched] = useState(false);
    const [enteredPwdTouched, setEnteredPwdTouched] = useState(false);

    const initError = {
        exists: false,
        helperText: null,
    };

    const [userError, setUserError] = useState(initError);
    const [pwdError, setPwdError] = useState(initError);
    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        if (!credentials.txt && enteredUserTouched) {
            setUserError({
              exists: true,
              helperText: "Write username or Email",
            });
        } else {
            setUserError({
              exists: false,
              helperText: null,
            });
        }
        if (!credentials.pwd && enteredPwdTouched) {
            setPwdError({
              exists: true,
              helperText: "Write your password",
            });
        } else {
            setPwdError({
              exists: false,
              helperText: null,
            });
        }
    }, [credentials, enteredUserTouched, enteredPwdTouched])

    const userIsValid = !userError.exists && enteredUserTouched;
    const pwdIsValid = !pwdError.exists && enteredPwdTouched;

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const userBlurHandler = (e) => {
        setEnteredUserTouched(true);
    };

    const pwdBlurHandler = (e) => {
        setEnteredPwdTouched(true);
    };

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setEnteredUserTouched(true);
        setEnteredPwdTouched(true);


        if (!userIsValid) {
            return;
        }
        if (!pwdIsValid) {
            return;
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(credentials),
        }
        
        
        fetch("https://accounting.linarys.com/v1/login/", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.user.id === 0 && data.user.confirmed === 0) {
                    setUserError({
                        exists: true,
                        helperText: "Wrong user or password",
                    });
                    setPwdError({
                        exists: true,
                        helperText: "Wrong user or password",
                    });
                    setEnteredUserTouched(true);
                    setEnteredPwdTouched(true);
                    return false;
                }
                else{
                    console.log(data);
                    console.log(data.user.token);
              
                    window.localStorage.setItem("jwt", JSON.stringify(data.user.token));
                    window.localStorage.setItem("id", JSON.stringify(data.user.id));
                    props.history.push({
                        pathname: "/dictionary/1",
                    })
                }
            }
        )

    };

        return(
            <>
                <WebHeader />
                <img src={backgroundImage} alt="" className="img_bg_login" />
                <div className='bg_login'>   
                    <div className='container position-relative'>
                        <div className='login_box'>
                      
                            <div className='row'>
                                <div className='col-12 col-lg-2 align-self-center'>
                                    <img src={loginImage} alt="" className="img-login" />
                                </div>
                                <div className='col-12 col-lg-5'>
                                    
                                    <h3 className='text-center mb-4'>Sign in</h3>
                                    <div className='center-grid'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='mb-4'>
                                                <Input 
                                                    title = {"email"}
                                                    type = {"text"}
                                                    name = {"txt"}
                                                    placeholder = {"User name / E-mail"}
                                                    value={credentials.txt}
                                                    handleChange={handleChange}
                                                    handleBlur={userBlurHandler}
                                                    className={userError.exists ? "is-invalid": ""}
                                                    errorDiv = {userError.exists ? "text-danger" : "d-none"}
                                                    errorMsg = {userError.helperText}
                                                />
                                            </div>
                                            <div style={{position:'relative'}} className='mb-4'>
                                                <Input 
                                                    title = {"password"}
                                                    // type = {"password"}
                                                    name = {"pwd"}
                                                    placeholder = {"Password"}
                                                    value={credentials.pwd}
                                                    handleChange={handleChange}
                                                    handleBlur={pwdBlurHandler}
                                                    className={pwdError.exists ? "is-invalid": ""}
                                                    errorDiv = {pwdError.exists ? "text-danger" : "d-none"}
                                                    errorMsg = {pwdError.helperText}
                                                    type={passwordShown ? "text" : "password"}
                                                />
                                                <i style={{position: 'absolute', top:'8px', right:'15px', cursor:'pointer'}} onClick={togglePasswordVisiblity}>{EyeLogo()}</i>
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
            </>
        );
}
const EyeLogo = () => {
    return(
      <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0125 15.75C5.94249 15.75 1.5325 12.65 0.0225 8.02997C-0.0075 7.92997 -0.0075 7.81997 0.0225 7.71997C1.5325 3.09997 5.94249 0 11.0125 0C16.0825 0 20.4925 3.09997 22.0025 7.71997C22.0325 7.81997 22.0325 7.92997 22.0025 8.02997C20.4925 12.65 16.0825 15.75 11.0125 15.75ZM1.0225 7.87C2.4425 11.99 6.43249 14.75 11.0125 14.75C15.5925 14.75 19.5825 11.99 21.0025 7.87C19.5825 3.75 15.5925 0.98999 11.0125 0.98999C6.43249 0.98999 2.4425 3.75 1.0225 7.87Z" fill="#B66A00"/>
        <path d="M11.0125 12.7999C8.30251 12.7999 6.09253 10.5899 6.09253 7.87994C6.09253 7.59994 6.31253 7.37994 6.59253 7.37994C6.87253 7.37994 7.09253 7.59994 7.09253 7.87994C7.09253 10.0399 8.85251 11.7999 11.0125 11.7999C13.1725 11.7999 14.9326 10.0399 14.9326 7.87994C14.9326 5.71994 13.1725 3.95996 11.0125 3.95996C10.7325 3.95996 10.5125 3.73996 10.5125 3.45996C10.5125 3.17996 10.7325 2.95996 11.0125 2.95996C13.7225 2.95996 15.9326 5.16994 15.9326 7.87994C15.9326 10.5899 13.7225 12.7999 11.0125 12.7999Z" fill="#B66A00"/>
      </svg>
    )
}



