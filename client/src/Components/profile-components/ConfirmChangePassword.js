import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class ConfirmChangePassword extends Component{
   

    render(){
        let id = window.localStorage.getItem("id")
        return(
            <Fragment>
                <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3>Successful change</h3>
                        </div>
                        <div className='py-4'>
                            <i className='icon-confirm icon-lock'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div>
                                Your password was updated
                            </div>
                        </div>
                        <div className='pt-4 center-grid'>
                            <Link
                                to={`/profile/${id}`}
                                className={'btn ochre'}
                            >
                                Go back
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}