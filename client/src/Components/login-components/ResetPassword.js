import React, {Component, Fragment, useEffect, useState} from 'react';
import WebHeader from '../../WebHeader';
import WebFooter from '../../WebFooter'
import Button from "../form-components/Button";
import textureImage from '../../Images/AAZ-DesktopBackGreen.png';
import PasswordValidation from './ui-login-components/PasswordValidation';

export default function ResetPassword2(props) {
    
    const [cwpdData, setCpwdData] = useState({
        id: '',
        pwd: ''
    })
    const [linkUsed, setLinkUsed] = useState(false)

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
    }, [])

    const handleChange = (evt) => {
       
        let value = evt.target.value;
        let name = evt.target.name;
        setCpwdData((prevState) => ({
            ...prevState,
            [name]: value,  
        }))
    }

    const handleSubmit = (evt) => {

        evt.preventDefault();

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
                                        <PasswordValidation 
                                            title = {"Password"}
                                            type = {"password"}
                                            name = {"pwd"}
                                            placeholder = {"New Password"}
                                            value = {cwpdData.pwd}
                                            handleChange = {handleChange}
                                        />
                                        <div className='py-4'>
                                            <Button
                                                title={"Reset"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
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

