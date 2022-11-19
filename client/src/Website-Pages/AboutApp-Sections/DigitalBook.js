import React, {Component, Fragment} from 'react';
import cellphoneFront from '../../Images/Cellphone_front.png';
export default class DigitalBook extends Component{
    render(){
        return(
            <Fragment>

                <div className='bg_digitalBooktAA'>
                    <div className='container position-relative'>
                        <div className='row align-items-center'>
                            <div className='col'>
                                <div>
                                    <h3 className='text-center py-4'>Add the app to your homescreen!</h3>
                                </div>
                                <div className='body_text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac non sem.
                                </div>
                            </div>
                            <div className='col d-flex justify-content-center reveal fade-right'>
                                <img src={cellphoneFront} alt="" className="img_digitalBookAA" />
                            </div>
                        </div>                        
                    </div>
                </div>
            </Fragment>
        );
    }
}