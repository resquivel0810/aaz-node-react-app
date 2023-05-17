import React, {Component, Fragment} from 'react';

export default class ConfirmationRegistrationMail extends Component{
   

    render(){
        return(
            <Fragment>
                <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3>WELCOME</h3>
                        </div>
                        <div className='py-4'>
                            <i className='icon-confirm icon-speaker'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div className='py-2'>
                                Your account was created successfully
                            </div>
                            <div>
                                Please confirm your email to activate your account.
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}