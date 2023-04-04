import React, {Component, Fragment} from 'react';
import backgroundImage from '../../Images/AAZ-DesktopBackBlue.png';
// import SliderComments from '../../Website-Components/SliderComments';

export default class Comments extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_commentsHP" />
                <div className='bg_commentsHP'>
                    <div className='position-relative container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-4 center-grid'>
                                <h3 className='py-4'>Comments of our users</h3>
                            </div>
                            <div className='col-12 col-lg-8 reveal fade-right'>
                                {/* <SliderComments /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}