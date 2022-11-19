import React, {Component, Fragment} from 'react';


import Button from './Components/form-components/Button';
import Input from './Components/form-components/Input';

export default class Template extends Component{
    render(){
        return(
            <Fragment>
                <div className='container'>
                   
                    <div className='py-4'>
                        <h1>TEXTS</h1>
                        <h1>
                            Title / Header 1
                        </h1>
                        <h2>
                            Header 2
                        </h2>
                        <h3>
                            Header 3
                        </h3>
                        <div className='subtitle_bold'>
                            Subtitle bold
                        </div>
                        <div className='subtitle'>
                            Subtitle
                        </div>
                        <div className='body_text'>
                            Body Copy
                        </div>
                        <div className='body_text_bold'>
                            Body bold
                        </div>
                        <div className='body_text_small'>
                            Body small
                        </div>
                        <div className='pre_title'>
                            Pre title
                        </div>
                    </div>
                    
                    <div className='py-4'>
                        <h1>COMPONENTS</h1>
                        <div className='py-2'>
                            <h2>Buttons</h2>
                            <Button
                                title={"Text"}
                                className={"ochre"}
                            />
                            <br />
                            <Button
                                title={"Text"}
                                className={"snow"}
                            />
                        </div>
                        <div className='py-2'>
                            <h2>Fields</h2>
                            <Input 
                                title = {"TextField"}
                                type = {"text"}
                                name = {"text"}
                                placeholder = {"Text Field"}
                                className = {""}
                            />
                        </div>
                    </div>
                </div>

                
            </Fragment>
        );
    }
}