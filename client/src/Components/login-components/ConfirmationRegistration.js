import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import WebHeader from '../../WebHeader';
import WebFooter from '../../WebFooter';
export default class ConfirmationRegistration extends Component{
    state = { 
        user: {}, 
        isLoaded: false, 
        error: null,
    };

    componentDidMount(){

        fetch(`https://accounting.linarys.com/v1/confirm/` + this.props.match.params.id, {method: "POST"})

    }

    render(){
        return(
            <Fragment>
                <WebHeader />
                <div className='bg_confirmation'>
                    <div className='container position-relative text-center'>
                        <div className='py-4'>
                            <h3>WELCOME TO ACCOUNTING A-Z</h3>
                        </div>
                        <div className='py-4'>
                            <i className='icon-confirm icon-success'></i>
                        </div>
                        <div className='body_text py-4'>
                            <div className='py-2'>
                                Your account was ACTIVATED successfully.
                            </div>
                            <div className='py-2'>
                                Now you can login and start using the digital dictionary.
                            </div>
                            <div className='pt-4 center-grid'>
                                <Link
                                    to={`/login`}
                                    className={'btn ochre'}
                                >
                                    Go to login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <WebFooter />
            </Fragment>
        );
    }
}