import React from 'react';

import classes from './UserFeedback.module.css'

import backgroundImage from '../Images/AAZ-DesktopBackBlue.png';

const UserFeedback = (props) => {
    const from1To2 = document.getElementById('from1To2')
    
    // const from2To1 = document.getElementById('from2To1')
    // const from2To3 = document.getElementById('from2To3')
    // const from3To2 = document.getElementById('from3To2')
    // const from3To1 = document.getElementById('from3To1')
    // const from1To3 = document.getElementById('from1To3')

    const slide1 = document.getElementById('slide1')
    console.log(slide1)
    const slide2 = document.getElementById('slide2')
    const slide3 = document.getElementById('slide3')

    // if (window.innerWidth >= 1024) {
    //     slide1.style.opacity = '1'
    //     from1To2.addEventListener('click', () => {
    //         slide2.style.opacity = '1'
    //         slide1.style.opacity = '0.4'
    //         slide3.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide3.style.transition = 'all 2s'
    //         slide3.style.zIndex = '1'
    //         slide1.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide1.style.transition = 'all 2s'
    //         slide1.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(100%) scale(1.35)'
    //         slide2.style.transition = 'all 2s'
    //         slide2.style.zIndex = '3'
    //     })
    //     from2To1.addEventListener('click', () => {
    //         slide2.style.opacity = '0.4'
    //         slide1.style.opacity = '1'
    //         slide3.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //         slide1.style.transform = 'translateX(100%) scale(1.35)'
    //         slide1.style.zIndex = '3'
    //     })
    //     from2To3.addEventListener('click', () => {
    //         slide2.style.opacity = '0.4'
    //         slide3.style.opacity = '1'
    //         slide3.style.transform = 'translateX(100%) scale(1.35)'
    //         slide3.style.zIndex = '3'
    //         slide1.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    //     from3To2.addEventListener('click', () => {
    //         slide2.style.opacity = '1'
    //         slide3.style.opacity = '0.4'
    //         slide2.style.transform = 'translateX(100%) scale(1.35)'
    //         slide2.style.zIndex = '3'
    //         slide1.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide3.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //     })
    //     from3To1.addEventListener('click', () => {
    //         slide3.style.opacity = '0.4'
    //         slide1.style.opacity = '1'
    //         slide1.style.transform = 'translateX(100%) scale(1.35)'
    //         slide1.style.zIndex = '3'
    //         slide3.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    //     from1To3.addEventListener('click', () => {
    //         slide1.style.opacity = '0.4'
    //         slide3.style.opacity = '1'
    //         slide1.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide3.style.transform = 'translateX(100%) scale(1.35)'
    //         slide3.style.zIndex = '3'
    //         slide2.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    // } else {
    //     slide1.style.opacity = '1'
    //     from1To2.addEventListener('click', () => {
    //         slide2.style.opacity = '1'
    //         slide1.style.opacity = '0.4'
    //         slide3.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide3.style.transition = 'all 2s'
    //         slide3.style.zIndex = '1'
    //         slide1.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide1.style.transition = 'all 2s'
    //         slide1.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(50%) scale(1.35)'
    //         slide2.style.transition = 'all 2s'
    //         slide2.style.zIndex = '3'
    //     })
    //     from2To1.addEventListener('click', () => {
    //         slide2.style.opacity = '0.4'
    //         slide1.style.opacity = '1'
    //         slide3.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //         slide1.style.transform = 'translateX(50%) scale(1.35)'
    //         slide1.style.zIndex = '3'
    //     })
    //     from2To3.addEventListener('click', () => {
    //         slide2.style.opacity = '0.4'
    //         slide3.style.opacity = '1'
    //         slide3.style.transform = 'translateX(50%) scale(1.35)'
    //         slide3.style.zIndex = '3'
    //         slide1.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    //     from3To2.addEventListener('click', () => {
    //         slide2.style.opacity = '1'
    //         slide3.style.opacity = '0.4'
    //         slide2.style.transform = 'translateX(50%) scale(1.35)'
    //         slide2.style.zIndex = '3'
    //         slide1.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide3.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //     })
    //     from3To1.addEventListener('click', () => {
    //         slide3.style.opacity = '0.4'
    //         slide1.style.opacity = '1'
    //         slide1.style.transform = 'translateX(50%) scale(1.35)'
    //         slide1.style.zIndex = '3'
    //         slide3.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide3.style.zIndex = '1'
    //         slide2.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    //     from1To3.addEventListener('click', () => {
    //         slide1.style.opacity = '0.4'
    //         slide3.style.opacity = '1'
    //         slide1.style.transform = 'translateX(110%) translateY(-20%) scale(.95)'
    //         slide1.style.zIndex = '1'
    //         slide3.style.transform = 'translateX(50%) scale(1.35)'
    //         slide3.style.zIndex = '3'
    //         slide2.style.transform = 'translateX(-20%) translateY(-20%) scale(.95)'
    //         slide2.style.zIndex = '1'
    //     })
    // }



    // function myFunction() {
    //     setTimeout(function(){
    //         from1To2.click()
    //         }, 10000)
    //     setTimeout(function(){
    //         from2To3.click()
    //         }, 20000)
    //     setTimeout(function(){
    //         from3To1.click()
    //         }, 30000)
    // }
    // myFunction()
    // function myFunction2() {
    //     setInterval(function(){ myFunction(); }, 30000);
    // }

    // myFunction2()

    const handleClick1To3 = () => {
        slide1.style.opacity = '0.4'
        slide3.style.opacity = '1'
        slide1.style.transform = 'translateX(200%) translateY(-20%) scale(.95)'
        slide1.style.zIndex = '1'
        slide3.style.transform = 'translateX(100%) scale(1.35)'
        slide3.style.zIndex = '3'
        slide2.style.transform = 'translateX(0%) translateY(-20%) scale(.95)'
        slide2.style.zIndex = '1'
     
     }


    return(
        <>
        <img src={backgroundImage} alt="" className="img_bg_registerHP" />
        <div style={{height:'100vh'}}>
            
            <div className={classes.carouselContainer}>
            <div className={`${classes.carousel} ${classes.myCarousel}`}>
                <input className={classes.carousel__activator} type="radio" name="carousel" id="1" checked="checked"/>
                <input className={classes.carousel__activator} type="radio" name="carousel" id="2"/>
                <input className={classes.carousel__activator} type="radio" name="carousel" id="3"/>
            
    
                <div className={classes.carousel__controls}>
                <label onClick={handleClick1To3} id="from1To3" className={`${classes.carousel__control} ${classes.carousel__controlBackward}`} for="3"></label>
                <label id="from1To2" className={`${classes.carousel__control} ${classes.carousel__controlForward}`} for="2"></label>
                </div>
                <div className={classes.carousel__controls}>
                <label id="from2To1" className={`${classes.carousel__control} ${classes.carousel__controlBackward}`} for="1"></label>
                <label id="from2To3" className={`${classes.carousel__control} ${classes.carousel__controlForward}`} for="3"></label>
                </div>
                <div className={classes.carousel__controls}>
                <label id="from3To2" className={`${classes.carousel__control} ${classes.carousel__controlBackward}`} for="2"></label>
                <label id="from3To1" className={`${classes.carousel__control} ${classes.carousel__controlForward}`} for="1"></label>
                </div>
                
                <div className={classes.carousel__track}>
                
                <li id="slide1" style={{opacity:'1'}} className={classes.carousel__slide}>
                    <div className={classes.carousel__saleStep}>
                    <div className={classes.saleStepText}>
                        <p>User name 1</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, 
                            commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. 
                            Nulla id quam sit amet lectus porttitor convallis ac
                        </p>
                    </div>
                    </div>
                </li>
                <li id="slide2" className={classes.carousel__slide}>
                    <div className={classes.carousel__saleStep}>
                        <div className={classes.saleStepText}>
                        <p>User name</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, 
                            commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. 
                            Nulla id quam sit amet lectus porttitor convallis ac
                        </p>
                        </div>
                    </div> 
                </li>
                <li id="slide3" className={classes.carousel__slide}>
                    <div className={classes.carousel__saleStep}>
                    <div className={classes.saleStepText}>
                        <p>User name</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, 
                            commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. 
                            Nulla id quam sit amet lectus porttitor convallis ac
                        </p>
                    </div>
                    </div>
                </li>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default UserFeedback;