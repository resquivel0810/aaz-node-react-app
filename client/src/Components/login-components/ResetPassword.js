import React, {Component, Fragment, useEffect, useState} from 'react';
import WebHeader from '../../WebHeader';
import WebFooter from '../../WebFooter'
import Button from "../form-components/Button";
import textureImage from '../../Images/AAZ-DesktopBackGreen.png';
// import PasswordValidation from './ui-login-components/PasswordValidation';
import Input from '../form-components/Input';

export default function ResetPassword2(props) {

    
    const [cwpdData, setCpwdData] = useState({
        id: '',
        pwd: ''
    })
    const [linkUsed, setLinkUsed] = useState(false)

    const initError = {
        exists: false,
        helperText: null,
    };

    const [pwdError, setPwdError] = useState(initError);

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordCheckShown, setPasswordCheckShown] = useState(false);

    const [passwordCheck, setPasswordCheck] = useState("")
    const [passCheck, setPassCheck] = useState({
        longEnough: false,
        specialCharacter: false,
        number: false,
        capitalLetter: false,
        match: false
    })

    useEffect(() => {
        fetch(`https://accounting.linarys.com/v1/getid/${props.match.params.id}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {

            console.log(data.ID)
            setCpwdData((prevState) => ({
                ...prevState,
                id: `${data.ID}` 
            }))  
            if (data.ID === -1) {
                setLinkUsed(true)
            }
            
        })
    }, [linkUsed])

    useEffect(() => {

        if(cwpdData.pwd.length >= 8) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: true,
            }))
        } else if(cwpdData.pwd.length < 8) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: false,
            }))
        } 

        if (cwpdData.pwd.match(/[A-Z]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: true,
            }))
        } else if (cwpdData.pwd.match(/[A-Z]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: false,
            }))
        }

        if (cwpdData.pwd.match(/[0-9]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: true,
            }))
        } else if (cwpdData.pwd.match(/[0-9]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: false,
            }))
        }

        if (cwpdData.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: true,
            }))
        } else if (cwpdData.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)=== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: false,
            }))
        }

        if(cwpdData.pwd == passwordCheck && cwpdData.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } else if(cwpdData.pwd != passwordCheck) {
            setPassCheck((prevState) => ({
                ...prevState,
                match: false,
            }))
        } 

        setPasswordCheck(document.getElementById("pwdCheck").value)


    },[cwpdData,passwordCheck])


    const handleChange = (evt) => {
       
        let value = evt.target.value;
        let name = evt.target.name;
        setCpwdData((prevState) => ({
            ...prevState,
            [name]: value,  
        }))

        if(cwpdData.pwd.length >= 7) {
            setPassCheck((prevState) => ({
                ...prevState,
                longEnough: true,
            }))
        } 

        if (cwpdData.pwd.match(/[A-Z]/) !== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                capitalLetter: true,
            }))
        }

        if (cwpdData.pwd.match(/[0-9]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                number: true,
            }))
        } 
        if (cwpdData.pwd.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)!== null) {
            setPassCheck((prevState) => ({
                ...prevState,
                specialCharacter: true,
            }))
        }
        if(cwpdData.pwd == passwordCheck && cwpdData.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } 

    }

    const handleChangePassCheck = (evt) => {
        let value = evt.target.value;
        setPasswordCheck(value)
        if(cwpdData.pwd === passwordCheck && cwpdData.pwd !== "") {
            setPassCheck((prevState) => ({
                ...prevState,
                match: true,
            }))
        } 
    }

    const handleSubmit = (evt) => {

        evt.preventDefault();
        if( cwpdData.pwd === '' || !passCheck.capitalLetter&& cwpdData.pwd !== '' || !passCheck.longEnough && cwpdData.pwd !== ''|| !passCheck.match&& cwpdData.pwd !== '' || !passCheck.number&& cwpdData.pwd !== '' || !passCheck.specialCharacter && cwpdData.pwd !== '') {
            setPwdError({
                exists: true,
                helperText: "Comply with the requirements at the bottom.",
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

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(cwpdData),
        };

        
        fetch('https://accounting.linarys.com/v1/cpwd/', requestOptions)
        .then(
            fetch(`https://accounting.linarys.com/v1/closecode/${props.match.params.id}`, {method: "GET"})
            .then(
                window.location.href='/confirmationforgotpasswordmail'
            )
            
        )

    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const togglePasswordCheckVisibility = () => {
        setPasswordCheckShown(passwordCheckShown ? false : true);
    };

    return(
        <>  
            {linkUsed
            ?
            <>
            <WebHeader />
            <div>
            <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3 style={{textTransform:'uppercase'}}>oops! <br />this link has expired  </h3>
                        </div>
                        <div className='py-4'>
                            <i style={{color:'#4FB8A8', fontSize:'5rem'}} className='icon-alert'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div>
                            After three days this link is no longer valid.
                            {/* If you are looking to change your password click on the button below. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WebFooter />
            </>
            :
            <>
            <WebHeader />
                <div className="bg_forgotPassword">
                    <div className="container position-relative">
                        <div className="forgotPassword_box">
                            <img src={textureImage} alt="" className="" />
                            <div>
                                <h3 className='text-center mb-4'>Reset your password</h3>
                                <div className='center-grid'>
                                    <form onSubmit={handleSubmit}>
                                        <div style={{position:'relative'}}>
                                            <Input
                                                title = {"Password"}
                                                name = {"pwd"}
                                                placeholder = {"New Password"}
                                                value = {cwpdData.pwd}
                                                handleChange = {handleChange}
                                                type={passwordShown ? "text" : "password"}
                                                // handleBlur={pwdBlurHandler}
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
                                        <div className='py-4'>
                                            <Button
                                                title={"Reset"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
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
                            </div>
                        </div>
                    </div>
                </div>
                <WebFooter />
                </>}
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