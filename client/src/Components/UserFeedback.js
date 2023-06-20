import React, {useRef, useEffect, useState} from 'react';
import classes from './UserFeedback.module.css'
import backgroundImage from '../Images/AAZ-DesktopBackBlue.png';


const UserFeedback = (props) => {

    // const [feedbackNumber, setFeedbackNumber] = useState()
    const [feedback, setFeedback] = useState([])
    const [currentFeedback, setCurrentFeedback] = useState()
    const [lastCurrentFeedback, setLastCurrentFeedback] = useState()
    // const [feedbackConfiguration, setFeedConfiguration] = useState()


    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    // const ref4 = useRef();
    const currentFeedbackRef = useRef(2)
    



    useEffect(() => {
        fetch(`http://localhost:3000/api`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setFeedback(data.publicFeedback); 
                // setFeedbackNumber(Object.keys(data.publicFeedback).length)
            }).then(() => {setLastCurrentFeedback(3); setCurrentFeedback(2)})
    }, [])


    useEffect(() => {
        if(currentFeedback === 3 && lastCurrentFeedback === 1) {
            ref1.current.style.transform = 'translateX(-10%)'
            ref1.current.style.zIndex = '1'
            ref1.current.style.opacity = '0.4'
            ref1.current.style.transition = 'all 1s'

            ref2.current.style.transform = 'translateX(100%) '
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '1'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(210%) '
            ref3.current.style.zIndex = '3'
            ref3.current.style.opacity = '0.4'
            ref3.current.style.transition = 'all 1s'
        } else if(currentFeedback === 2 && lastCurrentFeedback === 3){
            ref1.current.style.transform = 'translateX(100%) '
            ref1.current.style.zIndex = '3'
            ref1.current.style.opacity = '1'
            ref1.current.style.transition = 'all 1s'
            
            ref2.current.style.transform = 'translateX(210%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '0.4'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(-10%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.opacity = '0.4'
            ref3.current.style.transition = 'all 1s'

        } else if(currentFeedback === 1 && lastCurrentFeedback === 2){
            ref1.current.style.transform = 'translateX(210%) '
            ref1.current.style.zIndex = '3'
            ref1.current.style.opacity = '0.4'
            ref1.current.style.transition = 'all 1s'
            
            ref2.current.style.transform = 'translateX(-10%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '0.4'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(100%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.opacity = '1'
            ref3.current.style.transition = 'all 1s'

        } 
        else if (currentFeedback === 3 && lastCurrentFeedback === 2) {
            ref1.current.style.transform = 'translateX(100%)'
            ref1.current.style.zIndex = '1'
            ref1.current.style.opacity = '1'
            ref1.current.style.transition = 'all 1s'

            ref2.current.style.transform = 'translateX(210%) '
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '0.4'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(-10%) '
            ref3.current.style.zIndex = '3'
            ref3.current.style.opacity = '0.4'
            ref3.current.style.transition = 'all 1s'

        } else if(currentFeedback === 2 && lastCurrentFeedback === 1) {
            ref1.current.style.transform = 'translateX(210%) '
            ref1.current.style.zIndex = '3'
            ref1.current.style.opacity = '0.4'
            ref1.current.style.transition = 'all 1s'
            
            ref2.current.style.transform = 'translateX(-10%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '0.4'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(100%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.opacity = '1'
            ref3.current.style.transition = 'all 1s'
        }
        else if(currentFeedback === 1 && lastCurrentFeedback === 3) {
            ref1.current.style.transform = 'translateX(-10%) '
            ref1.current.style.zIndex = '3'
            ref1.current.style.opacity = '0.4'
            ref1.current.style.transition = 'all 1s'
            
            ref2.current.style.transform = 'translateX(100%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.opacity = '1'
            ref2.current.style.transition = 'all 1s'

            ref3.current.style.transform = 'translateX(210%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.opacity = '0.4'
            ref3.current.style.transition = 'all 1s'
        }
    }, [currentFeedback])

   
    
    

    const Comment = ({id, picture, name, stars, feedback}) => {
      
        return (
            <>
            <li 
                ref= {(() => {
                        if (id === 1) {
                        return (
                            ref1
                        )
                        } else if (id === 2) {
                        return (
                            ref2
                        )
                        } else if (id === 3){
                        return (
                            ref3
                        )
                        }
                    })()}
                    id={`feedback${id}`}
                
                style={{}} 
                // className={`carousel__slide m${currentFeedback}${lastCurrentFeedback}`}
                className={`carousel__slide m${currentFeedback}`}

            >
                    <div className={'carousel__saleStep'}>
                    <div className={'saleStepText'}>
                        <img src={picture} />
                        <p>{name}{id}</p>
                        <p>
                            {feedback}
                        </p>
                    </div>
                    </div>
                </li>
            </>
        )
    }

    const handler1 = () => {
        if(currentFeedback === 3 && lastCurrentFeedback === 2) {
            ref1.current.style.transform = 'translateX(300%)'
            ref1.current.style.zIndex = '1'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(0) '
            ref2.current.style.zIndex = '1'
            ref2.current.style.transition = 'all 1s'
            ref3.current.style.transform = 'translateX(100%) '
            ref3.current.style.zIndex = '3'
            ref3.current.style.transition = 'all 1s'
        } else if(currentFeedback === 2 && lastCurrentFeedback === 3){
            ref1.current.style.transform = 'translateX(100%) '
            ref1.current.style.zIndex = '3'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(300%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.transition = 'all 1s'
            ref3.current.style.transform = 'translateX(0%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.transition = 'all 1s'

        } else if( currentFeedback === 1 && lastCurrentFeedback === 2 ) {
            

            ref1.current.style.transform = 'translateX(300%)'
            ref1.current.style.zIndex = '1'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(0%)'
            ref2.current.style.zIndex = '3'
            ref2.current.style.transition = 'all 1s' 
            ref3.current.style.transform = 'translateX(100%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.transition = 'all 1s'
        }else if(currentFeedback === 2 && lastCurrentFeedback === 1){
            ref1.current.style.transform = 'translateX(0%)'
            ref1.current.style.zIndex = '3'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(100%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.transition = 'all 1s'
            ref3.current.style.transform = 'translateX(300%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.transition = 'all 1s'
        } else if( currentFeedback === 1 && lastCurrentFeedback === 3 ) {
            
            ref1.current.style.transform = 'translateX(100%)'
            ref1.current.style.zIndex = '1'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(300%)'
            ref2.current.style.zIndex = '3'
            ref2.current.style.transition = 'all 1s' 
            ref3.current.style.transform = 'translateX(0%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.transition = 'all 1s'
        }else if(currentFeedback === 3 && lastCurrentFeedback === 1){
            ref1.current.style.transform = 'translateX(0%)'
            ref1.current.style.zIndex = '3'
            ref1.current.style.transition = 'all 1s'
            ref2.current.style.transform = 'translateX(100%)'
            ref2.current.style.zIndex = '1'
            ref2.current.style.transition = 'all 1s'
            ref3.current.style.transform = 'translateX(300%)'
            ref3.current.style.zIndex = '1'
            ref3.current.style.transition = 'all 1s'
        } 
    };

    const handler3 = () => {
        setLastCurrentFeedback(currentFeedback)
        if(currentFeedback === 2) {
           
            setCurrentFeedback(3)
            
        } else if(currentFeedback === 3) {
            setCurrentFeedback(1)

        } else if(currentFeedback === 1){
            setCurrentFeedback(2)
        }
    }

    const handler2 = () => {
        // currentFeedbackRef.current++;
        // currentFeedbackRef.current = currentFeedbackRef.current % 3 +1
        // console.log(`Clicked ${currentFeedbackRef.current} times`);
        // ref1.current.style.transform = `translateX(${currentFeedbackRef.current-1}00%)`
        // ref1.current.style.zIndex = '3'
        // ref1.current.style.transition = 'all 1s'
        // ref2.current.style.transform = `translateX(${currentFeedbackRef.current+1}00%)`
        // ref2.current.style.zIndex = '3'
        // ref2.current.style.transition = 'all 1s'
        // ref3.current.style.transform = `translateX(${currentFeedbackRef.current +2}00%)`
        // ref3.current.style.zIndex = '3'
        // ref3.current.style.transition = 'all 1s'
        
        setLastCurrentFeedback(currentFeedback)
        if(currentFeedback === 2) {
           
            setCurrentFeedback(1)
            
        } else if(currentFeedback === 3) {
            setCurrentFeedback(2)

        } else if(currentFeedback === 1){
            setCurrentFeedback(3)
        }

      

    }


    return(
        <>
        <img src={backgroundImage} alt="" className="img_bg_registerHP" />
        <div style={{height:'100vh'}}>
            
            <div className={`carouselContainer`}>
            <div className={`${'carousel'} ${'myCarousel'}`}>

                <button
                    onClick={() => { 
                        handler2()
                    }}
                >F</button>
             
                
                <div className={'carousel__track'}>
               
                
                {
                    feedback.map(feedback => 
                        <Comment id={feedback.id} picture={feedback.picture} name={feedback.name} feedback={feedback.feedback}/>
                    )
                }

                </div>
                <button 
                    onClick={handler3}
                >
                    B
                </button>
            </div>
            </div>
        </div>
        </>
    );
};

export default UserFeedback;