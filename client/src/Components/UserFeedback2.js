import React, {useRef, useEffect, useState} from 'react';
import classes from './UserFeedback.module.css'
import backgroundImage from '../Images/AAZ-DesktopBackBlue.png';

const UserFeedback2 = () => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setFeedback(data.publicFeedback); 
            })
    }, [])

    

    const Comment = ({ picture, name, stars, feedback}) => {
        useEffect(() => {
            const _E = document.querySelector('.containerThirdCarousel')
            const Indicator = document.querySelector('.userFeedback')
        console.log(_E.children.length)
        const L = _E.children.length
    
        const indicators = document.querySelectorAll(".indicator")
    
        let o = 0, z0 = null;
    
        function unify3(e) {	
            return e.changedTouches ? e.changedTouches[0] : e 
        };
    
        function lock3(e) { 
            z0 = unify3(e).clientX 
        };
    
        function move3(e) {
            if(z0 || z0 === 0) {
                let dz = unify3(e).clientX - z0, q = Math.sign(dz);
                indicators.forEach(i => i.classList.remove('active'))
    
                if((o > 0 || q < 0) && (o < L - 1 || q > 0))
                    _E.style.setProperty('--o', o -= q);
                    indicators[o].classList.add('active');
                z0 = null
            }
        };



        
        Indicator.style.setProperty('--a', L)
        _E.style.setProperty('--s', L);
        _E.style.setProperty('--o', 0);
    
        _E.addEventListener('mousedown', lock3);
        _E.addEventListener('touchstart', lock3);
    
        _E.addEventListener('mouseup', move3);
        _E.addEventListener('touchend', move3);


        indicators.forEach(function(elem) {
            elem.addEventListener("click", function() {
                _E.style.setProperty('--o', elem.id);
                
                if (_E.style.getPropertyValue('--o') === indicators[elem.id].id) {
                    indicators.forEach(i => i.classList.remove('active'))	
                }
                indicators[elem.id].classList.add('active');
            });
        });

        




        }, [])

        return (
            <div className={"thirdCarousel__item"}>
                <div className={"thirdCarousel__item-content"}  >
                    <img src={picture} />
                    <p>{name}</p>
                    <p>
                        {feedback}
                    </p>
                </div>
            </div>
        )
    }



    return(
        <section className='userFeedback'>
            <img style={{zIndex:'-1'}} draggable="false" src={backgroundImage} alt="" className="img_bg_registerHP" />
            <div 
                className={"containerThirdCarousel"}
                
            >
                {
                    feedback.map(feedback => 
                        <Comment id={feedback.id} picture={feedback.picture} name={feedback.name} feedback={feedback.feedback}/>
                    )
                }
            </div>
            <ol className="carousel-indicators2">
            {
                feedback.map(feedback =>
                    <li id={feedback.id - 1} className={`indicator ${feedback.id === 1 ? 'active' : ''}`}></li>
                )
            }
            </ol>
            <div className='slideButtons'>
                <button onClick={() => {
                    var current = document.querySelector('.containerThirdCarousel').style.getPropertyValue("--o")
                    var limit = document.querySelector('.containerThirdCarousel').style.getPropertyValue("--s")
                    console.log(parseInt(current),parseInt(limit),parseInt(current) + parseInt(limit) === parseInt(limit)  )
                    if (parseInt(current) < parseInt(limit) && parseInt(current) + parseInt(limit) !== parseInt(limit) ){
                        document.querySelector('.containerThirdCarousel').style.setProperty('--o', parseInt(current) -1);
                        if ( current  === document.querySelectorAll(".indicator")[current].id ) {
                            document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                        }
                        document.querySelectorAll(".indicator")[parseInt(current) -1].classList.add('active');
                    } else  if (parseInt(current) + parseInt(limit) === parseInt(limit) ){
                        console.log("LIMIT REACHED")
                    }
                }} id='backwardButton' className='none'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3547 4C15.4854 4 15.6161 4.03185 15.7337 4.10615C16.0212 4.27598 16.0866 4.61564 15.8775 4.84916L9.47354 12.0033L15.8775 19.1575C16.0866 19.391 16.0212 19.7306 15.7337 19.9005C15.4462 20.0703 15.0279 20.0172 14.8188 19.7837L8.12742 12.3111C7.95752 12.1307 7.95753 11.8759 8.12742 11.6849L14.8188 4.22289C14.9495 4.08491 15.1456 4 15.3416 4L15.3547 4Z" fill="#B66A00"/>
                    </svg>
                </button>
                <button onClick={() => {
                    var current = document.querySelector('.containerThirdCarousel').style.getPropertyValue("--o")
                    var limit = document.querySelector('.containerThirdCarousel').style.getPropertyValue("--s")
                    console.log(parseInt(current),parseInt(limit),parseInt(current) < parseInt(limit) -1)
                    if (parseInt(current) < parseInt(limit) -1){
                        document.querySelector('.containerThirdCarousel').style.setProperty('--o', parseInt(current) +1);
                        if ( current  === document.querySelectorAll(".indicator")[current].id ) {
                            document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                        }
                        document.querySelectorAll(".indicator")[parseInt(current) +1].classList.add('active');
                    } else {
                        console.log("LIMIT REACHED")
                    }
                }} id='fordwardButton' className='none'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64534 20C8.51465 20 8.38394 19.9682 8.26632 19.8938C7.9788 19.724 7.91343 19.3844 8.12254 19.1508L14.5265 11.9967L8.12254 4.84254C7.91344 4.60902 7.9788 4.26936 8.26632 4.09953C8.55384 3.9297 8.97207 3.98277 9.18118 4.21629L15.8726 11.6889C16.0425 11.8693 16.0425 12.1241 15.8726 12.3151L9.18118 19.7771C9.05049 19.9151 8.85442 20 8.65838 20L8.64534 20Z" fill="#B66A00"/>
                    </svg>
                </button>
                
            </div>
            

        </section>
    )
}

export default UserFeedback2