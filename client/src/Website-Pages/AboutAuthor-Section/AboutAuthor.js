import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class AboutAuthor extends Component{
    render(){
        return(
            <Fragment>
                
                <div className='bg_AboutAuthorA'>
                    <div className='container position-relative'>
                        <div className='container-contentA'>
                            <div className=''>
                                <h3 className='text-center py-4'>
                                    Space for a quote, just for 10 words maximum, please
                                </h3>
                            </div>
                            <div className='py-4'>
                                <div className='body_text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac non sem. Maecenas laoreet ante libero, non interdum felis semper sit amet. Nunc ultrices, dui euismod vestibulum pretium, orci ex commodo elit, sed tristique eros lectus sed enim. Ut sit amet nisl vestibulum, imperdiet ipsum vitae, mollis justo. In hac habitasse platea dictumst. Vivamus congue nunc in erat lacinia tincidunt at pharetra dolor.
                                Fusce vitae congue dui. Vivamus sollicitudin, diam et mattis porttitor, dui diam semper enim, et egestas velit eros a diam. Duis bibendum gravida dolor, et hendrerit ligula malesuada aliquam. Vestibulum hendrerit non ligula ac faucibus. Nam interdum vitae diam quis ornare. Integer consectetur pretium ante, vitae pharetra nisi porttitor vitae. Etiam fringilla arcu eu arcu posuere mattis. Nulla facilisi. Fusce rhoncus enim nec consectetur mattis. Suspendisse consequat lacus, a pulvinar enim erat non elit. Vivamus tristique mi ac interdum blandit. Nunc 
                                </div>
                            </div>

                            <div className='center-grid mt-4'>
                                <Link
                                    to={`/registration`}
                                    className={'btn ochre'}
                                >
                                    Know more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}