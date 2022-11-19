import React, {Component, Fragment} from 'react';
import book from '../../Images/Book.png'
export default class IntroBook extends Component{
    render(){
        return(
            <Fragment>
                <div className='bg_introBookAB'>
                    <div className='container position-relative center-grid'>
                        <div className='fade-center-top'>
                            <h1 className='text-center py-4'>The Book</h1>
                        </div>
                        <div className='py-4 reveal fade-bottom'>
                            <img src={book} alt="" className="img_book_intro_AB" />
                        </div>
                        <div className='py-4 reveal fade-bottom'>
                            <a 
                                href='https://www.schellenberg-consulting.com/' 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='btn ochre'
                            >
                                See preview
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}