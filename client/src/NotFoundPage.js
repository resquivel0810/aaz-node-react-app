import React, {Component, Fragment} from 'react';
import backgroundImage from './Images/AAZ-DesktopBackGreen.png';
import { Link } from 'react-router-dom';
import notFoundImage from '../src/Images/bitmap.png';

export default class NotFoundPage extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_notFoundPage" />
                <div className='bg_notFoundPage'>
                    <div className='container position-relative'>
                        <div className='pb-4'>
                            <h2 className='primary_dark'>Oops, there seems to be an error with your tax return...</h2>
                        </div>
                        <div className='row pt-4'>
                            <div className='col'>
                            <img style={{width:'60%'}} src={notFoundImage} alt="" className="img-login" />
                            </div>
                            <div style={{alignSelf:'center'}} className='col'>
                                <div className='pb-4'>
                                    <h3>We can't find the page you're looking for.  But you can return to the home page</h3>
                                </div>
                                <div className='center-grid'>
                                    <Link
                                        to={`/`}
                                        className={'btn ochre'}
                                    >
                                        Go to home page
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}