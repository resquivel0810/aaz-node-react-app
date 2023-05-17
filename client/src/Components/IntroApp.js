import React, {Component, Fragment} from 'react';

import backgroundImage from '../Images/AAZ-DesktopBackBlue.png';
import cellphoneFront from '../Images/Cellphone_front.png';
export default class Intro extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_IntroAA" />
                <div className='bg_IntroAA'>
                    <div className='container position-relative'>
                        <div className='fade-center-top'>
                            <h1 className='text-center py-4'>The App</h1>
                        </div>
                        <div className='row justify-content-center py-4'>
                            <div className='d-none d-lg-block col align-self-start'>
                                <div className='d-flex justify-content-start align-items-center reveal fade-bottom'>
                                    <div className=''>
                                        <i className='icon-benefits icon-search me-4'></i>
                                    </div>
                                    <div className='body_text'>
                                        Searh terms in german, french, italian and english
                                    </div>
                                </div>
                            </div>
                            <div className='col align-self-center d-flex justify-content-center'>
                                <img src={cellphoneFront} alt="" className="img_app_introAA" />
                            </div>
                            <div className='d-none d-lg-block col align-self-end'>
                                <div className='d-flex justify-content-end align-items-center reveal fade-bottom'>
                                    <div className='body_text'>
                                        Add your favourite terms to your watchlist
                                    </div>
                                    <div className=''>
                                        <i className='icon-benefits icon-addwatchlist-c me-4'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}