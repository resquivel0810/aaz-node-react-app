import React, {Component, Fragment} from 'react';
import author from '../../Images/AldoSchellenberg.png';

export default class AboutAuthor extends Component{
    render(){
        return(
            <Fragment>
                <div className='bg_aboutAuthorHP'>
                    <div className='container position-relative'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 align-self-start'>
                                <h3 className='text-center py-4'>
                                    Aldo Schellenberg
                                </h3>
                                <div className='body_text py-4'>
                                    Als zukunfts-, team- und resultatorientierter Executive verfüge ich über ausgeprägte analytische Fähigkeiten, gepaart mit gesamtheitlichem strategischen Denken und Handeln und Sinn für das Machbare.
                                    Ich verfüge über breite unternehmerische Erfahrung und bin gewandt im Umgang mit Politik, Behörden, Wirtschaft und Medien. Auch in Krisen.
                                </div>
                                <div className='center-grid'>
                                    <a 
                                        href='https://www.schellenberg-consulting.com/' 
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className='btn ochre'
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='box_img_author_introHP'>
                            <img src={author} alt="" className="img_author_introHP" />
                        </div>
                    </div>              
                </div>
            </Fragment>
        );
    }
}