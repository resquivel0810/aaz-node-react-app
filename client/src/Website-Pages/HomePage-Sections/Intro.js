import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Images/AAZ-DesktopBackNude.png';
import cellphone from '../../Images/Cellphone.png';
import '../animation';
export default class Intro extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_introHP" />
                <div className='bg_introHP'>
                    <div className='container position-relative'>
                        <div className='fade-center-top'>
                            <h1 className='text-center py-4'>Accounting A-Z</h1>
                        </div>
                        <div className='row py-4'>
                            <div className='col align-self-center fade-left'>
                                <img src={cellphone} alt="" className="img_cellphone_introHP" />
                            </div>
                            <div className='d-none d-lg-block col align-self-center fade-right'>
                                <h3>Try the app!</h3>
                                <div className='py-4 body_text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac non sem. Maecenas laoreet ante libero, non interdum felis semper sit amet. Nunc ultrices, dui euismod 
                                </div>
                                <div className='py-4'>
                                    <Link
                                        to={`/login`}
                                        className={'btn ochre'}
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg_introHP_mobile d-md-block d-lg-none'>
                    <div className='container position-relative'>
                        <h3 className='text-center'>Try the app!</h3>
                        <div className='py-4 body_text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac non sem. Maecenas laoreet ante libero, non interdum felis semper sit amet. Nunc ultrices, dui euismod 
                        </div>
                        <div className='py-4 center-grid'>
                            <Link
                                to={`/registration`}
                                className={'btn ochre'}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

