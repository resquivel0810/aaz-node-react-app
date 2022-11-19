import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import book from '../../Images/Book.png';
export default class Benefits extends Component{
    render(){
        return(
            <Fragment>
                <div className='bg_benefitsHP'>
                    <div className='container position-relative'>
                        <div className=''>
                            <h3 className='text-center py-4'>Search accounting terms easily!</h3>
                        </div>
                        <div className='row py-4'>
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
                            <div className='col align-self-center center-grid'>
                                <img src={book} alt="" className="img_bookBenefits_introHP" />
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
                        <div className='py-4 center-grid'>
                            <Link
                                to={`/registration`}
                                className={'btn ochre'}
                            >
                            Know more
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}