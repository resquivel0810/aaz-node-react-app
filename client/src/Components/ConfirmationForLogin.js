import React, {Component, Fragment} from 'react';

export default class ConfirmationRegistrationMail extends Component{
   

    render(){
        return(
            <Fragment>
                <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3 style={{textTransform:'uppercase'}}>Uh-oh! You are <br/> already registered</h3>
                        </div>
                        <div>
                            <i className='icon-confirm icon-speaker'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div style={{fontWeight:'bold'}} className='py-2'>
                                You already have an account but have not activated it yet.
                            </div>
                            <div>
                                Please go to your email to confirm and activate your account via the email we have just sent you.
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}