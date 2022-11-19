import React, {Component, Fragment } from 'react';
import backgroundImage from './Images/AAZ-DesktopBackBlue.png';

export default class ImprintPage extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_imprint" />
                <div className='bg_imprint'>
                    <div className='container position-relative'>
                        <div className='text-center'>
                            <h1>Imprint</h1>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className='pe-4'>
                                ICON
                            </div>
                            <div className='body_text'>
                                Contact address
 
                                schellenberg consulting
                                Seestrasse 78
                                Postfach
                                CH-8703 Erlenbach ZH
                                info@schellenberg-consulting.ch
                                
                                
                                Design and implementation of the website:
                                
                                Linarys GmbH
                                www.linarys.com
                                info@linarys.com 
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}