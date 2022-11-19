import React, {Component, Fragment} from 'react';

export default class ConfirmationForgotPasswordMail extends Component{
   

    render(){
        return(
            <Fragment>
                <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3>RESET YOUR PASSWORD</h3>
                        </div>
                        <div className='py-4'>
                            <i className='icon-confirm icon-lock'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div>
                                Your password has been reset succesfully
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}