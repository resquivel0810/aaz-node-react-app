import React, {Component} from 'react';

export default class AppFooter extends Component{
    render(){
        return(
            <footer style={{height:'5vh'}}>
                <div>
                    <div style={{display: window.innerWidth < 900 ? 'none' : 'block'}} className='imprint'>
                        <div className='container py-2 text-center'>
                            <p className='body_text_small snow'>Imprint / Accounting A-Z</p>
                            {/* <a href='#' className='body_text_small snow'>Imprint / Terms and conditions</a> */}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}