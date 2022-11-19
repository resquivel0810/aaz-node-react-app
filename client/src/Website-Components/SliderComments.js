import React, {Component, Fragment} from 'react';
import commentImage from '../Images/AAZ-DesktopBackBlue.png';

import Slider from "react-slick";

export default class SliderComments extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1120,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        centerMode: true,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return(
            <Fragment>
                <Slider {...settings}>
                    <div className='card-carrousel'>
                         <div className='center-flex'>
                            <img src={commentImage} alt="" className="image" />
                        </div>
                        <div className='title'>User name</div>
                        <div className='subtitle'>Info abour the user</div>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac
                        </div>
                        <div className='mt-2'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className='card-carrousel'>
                         <div className='center-flex'>
                            <img src={commentImage} alt="" className="image" />
                        </div>
                        <div className='title'>User name</div>
                        <div className='subtitle'>Info abour the user</div>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac
                        </div>
                        <div className='mt-2'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className='card-carrousel'>
                         <div className='center-flex'>
                            <img src={commentImage} alt="" className="image" />
                        </div>
                        <div className='title'>User name</div>
                        <div className='subtitle'>Info abour the user</div>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac
                        </div>
                        <div className='mt-2'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className='card-carrousel'>
                         <div className='center-flex'>
                            <img src={commentImage} alt="" className="image" />
                        </div>
                        <div className='title'>User name</div>
                        <div className='subtitle'>Info abour the user</div>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac
                        </div>
                        <div className='mt-2'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                </Slider>
            </Fragment>
        );
    }
}