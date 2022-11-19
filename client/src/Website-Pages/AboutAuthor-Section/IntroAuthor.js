import React, {Component, Fragment} from 'react';

import author from '../../Images/AldoSchellenberg.png';

export default class IntroAuthor extends Component{
    render(){
        return(
            <Fragment>
                
                <div className='bg_IntroA'>
                    <div className='container position-relative'>
                        <div className='fade-center-top'>
                            <h1 className='text-center py-4'>Aldo Schellenberg</h1>
                        </div>
                        <div className='box_imgAuthor'>
                            <img src={author} alt="" className="img_authorA" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}