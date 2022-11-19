import React, {Component, Fragment} from 'react';
// import cellphoneFront from '../../Images/Cellphone_front.png';
import { Link } from 'react-router-dom';
export default class PWA extends Component{
    render(){
        return(
            <Fragment>
                <div className='bg_pwaAA'>
                    <div className='container position-relative'>
                        <div>
                            <div className='text-center'>
                                <h3 className='py-4'>Already have the book?</h3>
                                <div className='subtitle'>
                                    Get your free digital version
                                </div>
                            </div>
                            <div className='center-grid py-4 reveal fade-bottom'>
                                <div className='d-flex pb-2'>
                                    <div className='number_circle'>1</div>
                                    <div className='subtitle'>
                                        Register
                                    </div>
                                </div>  
                                <div className='d-flex pb-2'>
                                    <div className='number_circle'>2</div>
                                    <div className='subtitle'>
                                        Scan the QR code in the book
                                    </div>
                                </div> 
                                <div className='d-flex'>
                                    <div className='number_circle'>3</div>
                                    <div className='subtitle'>
                                        Enjoy the digital dictionary
                                    </div>
                                </div> 
                            </div>
                            <div className='center-grid pt-4 reveal fade-bottom'>
                                <Link
                                    to={`/registration`}
                                    className={'btn ochre'}
                                >
                                    Register
                                </Link>
                            </div>
                        </div>  
                        <div>
                            
                        </div>                     
                    </div>
                </div>
            </Fragment>
        );
    }
}