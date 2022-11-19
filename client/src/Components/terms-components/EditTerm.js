import React, {Component, Fragment} from 'react';
import Button from '../form-components/Button';
import Input from '../form-components/Input';
// import RichTextEditor from './ui-components/RichTextEditor';



export default class EditTerm extends Component{
    render(){
        return(
            <Fragment>
                <div className='container'>
                    <div className='py-4'>
                        <h1>
                            Add/Edit term
                        </h1>
                    </div>
                    
                    <div className='row py-4'>
                        <div className='col'>
                            LANGUAGES
                        </div>
                        <div className='col'>
                            STATUS
                        </div>
                        <div className='col'>
                            <Button 
                                title={'Save'}
                            />
                        </div>
                    </div>

                    <div className='py-4'>
                        <Input 
                            placeholder = {""}
                        />
                    </div>

                    <div className='py-4'>
                        {/* <RichTextEditor /> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}