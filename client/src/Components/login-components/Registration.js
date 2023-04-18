import React, {useEffect, useState} from 'react';
import Input from '../form-components/Input';
import Button from '../form-components/Button';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import GoogleLoginComponent from './ui-login-components/GoogleLoginComponent';

import textureImage from '../../Images/AAZ-DesktopBackGreen.png';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


export default function Registration2(props) {

    const [user, setUser] = useState({
        username: "",
        name: "",
        lastname: "",
        email: "",
        pwd: "",
        picture: "data:image/jpeg;base64,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",
  
    })

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
    const [enteredUserNameTouched, setEnteredUserNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredPwdTouched, setEnteredPwdTouched] = useState(false);

    const initError = {
        exists: false,
        helperText: null,
    };

    const [nameError, setNameError] = useState(initError);
    const [lastNameError, setLastNameError] = useState(initError);
    const [userNameError, setUserNameError] = useState(initError);
    const [emailError, setEmailError] = useState(initError);
    const [pwdError, setPwdError] = useState(initError);

    const [passwordCheck, setPasswordCheck] = useState("")
    const [passCheck, setPassCheck] = useState({
        longEnough: false,
        specialCharacter: false,
        number: false,
        capitalLetter: false,
        match: false
    })

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordCheckShown, setPasswordCheckShown] = useState(false);

    useEffect(() => {
        if (!user.name && enteredNameTouched) {
            setNameError({
              exists: true,
              helperText: "Write your name",
            });
        } else {
            setNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!user.lastname && enteredLastNameTouched) {
            setLastNameError({
              exists: true,
              helperText: "Write your last name",
            });
        } else {
            setLastNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!user.username && enteredUserNameTouched) {
            setUserNameError({
              exists: true,
              helperText: "Write your user name",
            });
        } else {
            setUserNameError({
              exists: false,
              helperText: null,
            });
        }
        
        if (!user.email && enteredEmailTouched) {
            setEmailError({
              exists: true,
              helperText: "Write your email",
            });
        } 
        else if(user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null && user.email !== '') {
            setEmailError({
                exists: true,
                helperText: "Write a valid email",
              });
        } 
        else {
            setEmailError({
              exists: false,
              helperText: null,
            });
        }

        if (!user.pwd && enteredPwdTouched) {
            setPwdError({
              exists: true,
              helperText: "Write a password",
            });
        } else {
            setPwdError({
              exists: false,
              helperText: null,
            });
        }

        if(user.pwd.length >= 8) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: true,
            }))
        } else if(user.pwd.length < 8) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: false,
            }))
        } 

        if (user.pwd.match(/[A-Z]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: true,
            }))
        } else if (user.pwd.match(/[A-Z]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: false,
            }))
        }

        if (user.pwd.match(/[0-9]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: true,
            }))
        } else if (user.pwd.match(/[0-9]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: false,
            }))
        }

        if (user.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: true,
            }))
        } else if (user.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: false,
            }))
        }

        if(user.pwd == passwordCheck && user.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } else if(user.pwd != passwordCheck) {
            setPassCheck((prevState) => ({
                ...prevState,
                match: false,
            }))
        } 

        setPasswordCheck(document.getElementById("pwdCheck").value)


        
    
    }, [user, enteredNameTouched, enteredLastNameTouched, enteredUserNameTouched, enteredEmailTouched, enteredPwdTouched, passwordCheck])
 

    const handleChange = (evt) => {
       
        let value = evt.target.value;
        let name = evt.target.name;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,  
        }))
        if(user.pwd.length >= 7) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: true,
            }))
        } 

        if (user.pwd.match(/[A-Z]/) !== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: true,
            }))
        }

        if (user.pwd.match(/[0-9]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: true,
            }))
        } 
        if (user.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: true,
            }))
        }
        if(user.pwd == passwordCheck && user.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } 
        console.log(user.pwd, passwordCheck, user.pwd === passwordCheck)
    }

    const handleChangePassCheck = (evt) => {
        let value = evt.target.value;
        setPasswordCheck(value)
        if(user.pwd == passwordCheck && user.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } 
        console.log(user.pwd, passwordCheck, user.pwd === passwordCheck)

    }
    

    const nameIsValid = !nameError.exists && enteredNameTouched;
    const lastNameIsValid = !lastNameError.exists && enteredLastNameTouched;
    const userNameIsValid = !userNameError.exists && enteredUserNameTouched;
    const emailIsValid = !emailError.exists && enteredEmailTouched;
    const pwdIsValid = !pwdError.exists && enteredPwdTouched;

    const nameBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const lastNameBlurHandler = (e) => {
        setEnteredLastNameTouched(true);
    };

    const userNameBlurHandler = (e) => {
        setEnteredUserNameTouched(true);
    };

    const emailBlurHandler = (e) => {
        setEnteredEmailTouched(true);
        if(user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null){
            setEmailError({
                exists: true,
                helperText: "Write a valid email",
              });
        } else {
            setEmailError({
              exists: false,
              helperText: null,
            });
        }
    };

    const pwdBlurHandler = (e) => {
        setEnteredPwdTouched(true);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(passCheck.number)

        setEnteredNameTouched(true);
        setEnteredLastNameTouched(true);
        setEnteredUserNameTouched(true);
        setEnteredEmailTouched(true);
        setEnteredPwdTouched(true);

        if(!passCheck.capitalLetter&& user.pwd !== '' || !passCheck.longEnough && user.pwd !== ''|| !passCheck.match&& user.pwd !== '' || !passCheck.number&& user.pwd !== '' || !passCheck.specialCharacter && user.pwd !== '') {
            setPwdError({
                exists: true,
                helperText: "Comply with the requirements at the bottom.",
              });
          }else if (!user.pwd && enteredPwdTouched) {
            setPwdError({
              exists: true,
              helperText: "Write a password",
            });
        } 
          else {
              setPwdError({
                exists: false,
                helperText: null,
              });
          }
        


        if (!passCheck.capitalLetter) {
            return;
        }

        if (!passCheck.longEnough) {
            return;
        }

        if (!passCheck.match) {
            return;
        }

        if (!passCheck.number) {
            return;
        }

        if (!passCheck.specialCharacter) {
            return;
        }

        if (!nameIsValid) {
            return;
        }
        if (!lastNameIsValid) {
            return;
        }
        if (!userNameIsValid) {
            return;
        }
        if (!emailIsValid) {
            return;
        }
        if (!pwdIsValid) {
            return;
        }
        

        Promise.all([
            fetch(`https://accounting.linarys.com/v1/verifyuser/${user.username}`).then(data => data.json()),
            fetch(`https://accounting.linarys.com/v1/verifyemail/${user.email}`).then(data => data.json())
        ])
            .then(data=> {
                console.log(data)
                console.log(data[0].ID)
                console.log(data[1].ID)
                if(data[0].ID === 0 && data[1].ID === 0){
                    const requestOptions = {
                        method: "POST",
                        body: JSON.stringify(user),
                    };

                    fetch('https://accounting.linarys.com/v1/register/', requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            
                            if(data.error){
                                console.log("Error");
                            }else{
                                console.log(data);
                                window.location.href='/confirmationRegistermail'
                            }
                        });

                }
                else if(data[1].ID !== 0) {
                    let oldUser = {
                        ...user,
                        id: `${data[1].ID}`,
                    }
                   
                    const requestOptions2 = {
                        method: 'POST', 
                        body: JSON.stringify(oldUser),
                    }
            
                    fetch('https://accounting.linarys.com/v1/updateuser/', requestOptions2)
                    .then(data => window.location.href='/confirmationRegistermail')
                }
                else if(data[0].ID !== 0 && data[1].ID === 0) {
                    setUserNameError({
                        exists: true,
                        helperText: "User name in use, choose another one",
                    });
                }
             
            })
         

        

    };
    
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const togglePasswordCheckVisibility = () => {
        setPasswordCheckShown(passwordCheckShown ? false : true);
    };

    return(
        <>
        <div className='bg_registration'>
                <div style={{paddingTop:'5rem'}} className='container position-relative'>
                    <div className='registration_box'>
                        <img src={textureImage} alt="" className="" />
                        <div className='row align-items-center '>
                            <div className='col-12 col-lg-6'>
                                <h3 className='text-center mb-4'>Registration form</h3>
                                <div className='center-grid'>
                                    <form onSubmit={handleSubmit}>
                                        <div >
                                            <Input 
                                                title = {"Name"}
                                                type = {"text"}
                                                name = {"name"}
                                                placeholder = {"name"}
                                                value = {user.name}
                                                handleChange = {handleChange}
                                                handleBlur={nameBlurHandler}
                                                className={nameError.exists ? "is-invalid": ""}
                                                errorDiv = {nameError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {nameError.helperText}
                                            />
                                        </div>
                                        <div >
                                            <Input 
                                                title = {"LastName"}
                                                type = {"text"}
                                                name = {"lastname"}
                                                placeholder = {"Last name"}
                                                value = {user.lastname}
                                                handleChange = {handleChange}
                                                handleBlur={lastNameBlurHandler}
                                                className={lastNameError.exists ? "is-invalid": ""}
                                                errorDiv = {lastNameError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {lastNameError.helperText}
                                            />
                                        </div>
                                        <div >
                                            <Input 
                                                title = {"UserName"}
                                                type = {"text"}
                                                name = {"username"}
                                                placeholder = {"User name"}
                                                value = {user.username}
                                                handleChange = {handleChange}
                                                handleBlur={userNameBlurHandler}
                                                className={userNameError.exists ? "is-invalid": ""}
                                                errorDiv = {userNameError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {userNameError.helperText}
                                            />
                                        </div>
                                        <div >
                                            <Input 
                                                title = {"Email"}
                                                type = {"text"}
                                                name = {"email"}
                                                placeholder = {"E-mail"}
                                                value = {user.email}
                                                handleChange = {handleChange}
                                                handleBlur={emailBlurHandler}
                                                className={emailError.exists ? "is-invalid": ""}
                                                errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {emailError.helperText}
                                            />
                                        </div>
                                        <div style={{position:'relative'}}>
                                            <Input
                                                title = {"Password"}
                                                name = {"pwd"}
                                                placeholder = {"New Password"}
                                                value = {user.pwd}
                                                handleChange = {handleChange}
                                                type={passwordShown ? "text" : "password"}
                                                handleBlur={pwdBlurHandler}
                                                className={pwdError.exists ? "is-invalid": ""}
                                                errorDiv = {pwdError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {pwdError.helperText}
                                                
                                            />
                                            <i style={{position: 'absolute', top:'8px', right:'15px', cursor:'pointer'}} onClick={togglePasswordVisibility}>{passwordShown ? EyeLogo() : EyeLogoClosed()}</i>
                                        </div>
                                        <div style={{position:'relative'}}>
                                            <Input
                                                title = {"PasswordCheck"}
                                                type={passwordCheckShown ? "text" : "password"}
                                                name = {"pwdCheck"}
                                                id = {"pwdCheck"}
                                                placeholder = {"Confirm new password"}
                                                value = {passwordCheck}
                                                handleChange = {handleChangePassCheck}
                                            />
                                            <i style={{position: 'absolute', top:'8px', right:'15px', cursor:'pointer'}} onClick={togglePasswordCheckVisibility}>{passwordCheckShown ? EyeLogo() : EyeLogoClosed()}</i>
                                        </div>
                                        <div>
                                            <div style={{fontSize:'14px'}}>
                                                <div style={{display:'flex'}}>
                                                    <span style={{marginRight: '10px'}}>{passCheck.longEnough ? passed() : notPassed()}</span>
                                                    <p style={{marginBottom:'5px', color: passCheck.longEnough ? '#292929' : '#A5A5A5'}}>Password has more than 8 characters.</p>
                                                </div>
                                                <div style={{display:'flex'}}>
                                                    <span style={{marginRight: '10px'}}>{passCheck.capitalLetter ? passed() : notPassed()}</span>
                                                    <p style={{marginBottom:'5px', color: passCheck.capitalLetter ? '#292929' : '#A5A5A5'}}>Password has a capital letter.</p>
                                                </div> 
                                                <div style={{display:'flex'}}>
                                                    <span style={{marginRight: '10px'}}>{passCheck.number ? passed() : notPassed()}</span>
                                                    <p style={{marginBottom:'5px', color: passCheck.number ? '#292929' : '#A5A5A5'}}>Password has a number.</p>
                                                </div>
                                                <div style={{display:'flex'}}>
                                                    <span style={{marginRight: '10px'}}>{passCheck.specialCharacter ? passed() : notPassed()}</span>
                                                    <p style={{marginBottom:'5px', color: passCheck.specialCharacter ? '#292929' : '#A5A5A5'}}>Password has a special character.</p>
                                                </div>
                                                <div style={{display:'flex'}}>
                                                    <span style={{marginRight: '10px'}}>{passCheck.match ? passed() : notPassed()}</span>
                                                    <p style={{marginBottom:'5px', color: passCheck.match ? '#292929' : '#A5A5A5'}}>Passwords match.</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                                

                                        <div className='py-4'>
                                            <Button
                                                title={"Register"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
                                </div>
                    
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
                                    <div
                                                style={{display: 'flex', justifyContent: 'center', margin: '3rem'}}
                                            >
                                                <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse);
                                                    var decoded = jwt_decode(credentialResponse.credential);
                                                    console.log(decoded)
                                                            const requestOptions = {
                                                                method: "POST",
                                                                body: JSON.stringify({
                                                                    username: '',
                                                                    name: decoded.given_name,
                                                                    lastname: decoded.family_name,
                                                                    email: decoded.email,
                                                                    pwd: '',
                                                                    picture:  decoded.picture    
                                                                }),
                                                            };
                                                            console.log(requestOptions)
                
                                                            fetch('https://accounting.linarys.com/v1/googleauth/', requestOptions)
                                                                .then(response => response.json())
                                                                .then(data => {
                                                                    console.log(data);
                                                                    window.localStorage.setItem("jwt", JSON.stringify({...data}.user.token));
                                                                    window.localStorage.setItem("id", JSON.stringify(data.user.id));
                                                                    props.history.push({
                                                                        pathname: "/dictionary/1",
                                                                    })
                                                                });
                                                    
                                                }}
                                            />
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

const notPassed = () => {
    return(
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H10.5" stroke="#B66A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    )
}

const passed = () => {
    return(
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8L4 11L11 1" stroke="#B66A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
    )
}

const EyeLogo = () => {
    return(
      <svg width="24" height="24" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0125 15.75C5.94249 15.75 1.5325 12.65 0.0225 8.02997C-0.0075 7.92997 -0.0075 7.81997 0.0225 7.71997C1.5325 3.09997 5.94249 0 11.0125 0C16.0825 0 20.4925 3.09997 22.0025 7.71997C22.0325 7.81997 22.0325 7.92997 22.0025 8.02997C20.4925 12.65 16.0825 15.75 11.0125 15.75ZM1.0225 7.87C2.4425 11.99 6.43249 14.75 11.0125 14.75C15.5925 14.75 19.5825 11.99 21.0025 7.87C19.5825 3.75 15.5925 0.98999 11.0125 0.98999C6.43249 0.98999 2.4425 3.75 1.0225 7.87Z" fill="#B66A00"/>
        <path d="M11.0125 12.7999C8.30251 12.7999 6.09253 10.5899 6.09253 7.87994C6.09253 7.59994 6.31253 7.37994 6.59253 7.37994C6.87253 7.37994 7.09253 7.59994 7.09253 7.87994C7.09253 10.0399 8.85251 11.7999 11.0125 11.7999C13.1725 11.7999 14.9326 10.0399 14.9326 7.87994C14.9326 5.71994 13.1725 3.95996 11.0125 3.95996C10.7325 3.95996 10.5125 3.73996 10.5125 3.45996C10.5125 3.17996 10.7325 2.95996 11.0125 2.95996C13.7225 2.95996 15.9326 5.16994 15.9326 7.87994C15.9326 10.5899 13.7225 12.7999 11.0125 12.7999Z" fill="#B66A00"/>
      </svg>
    )
}

const EyeLogoClosed = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0125 19.75C6.94249 19.75 2.5325 16.65 1.0225 12.03C0.9925 11.93 0.9925 11.82 1.0225 11.72C2.5325 7.09997 6.94249 4 12.0125 4C17.0825 4 21.4925 7.09997 23.0025 11.72C23.0325 11.82 23.0325 11.93 23.0025 12.03C21.4925 16.65 17.0825 19.75 12.0125 19.75ZM2.0225 11.87C3.4425 15.99 7.43249 18.75 12.0125 18.75C16.5925 18.75 20.5825 15.99 22.0025 11.87C20.5825 7.75 16.5925 4.98999 12.0125 4.98999C7.43249 4.98999 3.4425 7.75 2.0225 11.87Z" fill="#B66A00"/>
            <path d="M12.0125 16.7899C9.30251 16.7899 7.09253 14.5799 7.09253 11.8699C7.09253 11.5899 7.31253 11.3699 7.59253 11.3699C7.87253 11.3699 8.09253 11.5899 8.09253 11.8699C8.09253 14.0299 9.85251 15.7899 12.0125 15.7899C12.2925 15.7899 12.5125 16.0099 12.5125 16.2899C12.5125 16.5699 12.2925 16.7899 12.0125 16.7899Z" fill="#B66A00"/>
            <path d="M16.4225 12.3799C16.1425 12.3799 15.9225 12.1599 15.9225 11.8799C15.9225 9.71994 14.1624 7.95996 12.0024 7.95996C11.7224 7.95996 11.5024 7.73996 11.5024 7.45996C11.5024 7.17996 11.7224 6.95996 12.0024 6.95996C14.7124 6.95996 16.9225 9.16994 16.9225 11.8799C16.9225 12.1599 16.7025 12.3799 16.4225 12.3799Z" fill="#B66A00"/>
            <path d="M19.1426 19.51C19.0126 19.51 18.8826 19.46 18.7926 19.36L4.53257 5.09995C4.33257 4.89995 4.33257 4.58999 4.53257 4.38999C4.73257 4.18999 5.04259 4.18999 5.24259 4.38999L19.5025 18.65C19.7025 18.85 19.7025 19.16 19.5025 19.36C19.4025 19.46 19.2726 19.51 19.1526 19.51H19.1426Z" fill="#B66A00"/>
        </svg>
    )
}