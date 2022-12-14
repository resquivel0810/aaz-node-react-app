import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function Terms({terms, onClick2 = f => f }) {

    
    return(
        <>
            <div className=''>
                <h3>All terms</h3>
                <div className=''>
                    <div className='my-4'>
                        {/* <FilterAlphabet /> */}
                    </div>
                    <div className='container_term'>
                        {terms.map((t) => (                             
                            <div className='box_term' id={t.id} key={t.id}>
                                <div className='row'>
                                    <div className='col-8'>
                                        <Link
                                            key={t.id} 
                                            onClick={() =>onClick2(t.id)}
                                            to={`/dictionary/${t.id}`}
                                            className={'link'}
                                            
                                        >
                                            {t.attributes.title}
                                        </Link>
                                        {t.attributes.terms.data.map((g) => (
                                            <div className='d-flex flex-row' key={g.id}>
                                                <div className='body_text_len me-2'>{g.attributes.locale}.</div>
                                                <div className='body_text'>{g.attributes.text}</div>
                                            </div> 
                                        ))}

                                        {t.attributes.localizations.data.map((l) => (
                                            <div className='d-flex flex-row' key={l.id}>
                                                <div className='body_text_len me-2'>{l.attributes.locale}.</div>
                                                <div className='body_text'>{l.attributes.title}</div>
                                            </div> 
                                        ))}

                                    </div>
                                    <div className='col-4 text-end'>
                                        <i className='icon ms-1 icon-copy'></i>
                                        <i className='icon ms-1 icon-share'></i>
                                        <i className='icon ms-1 icon-addwatchlist'></i>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
            
                    </div>
                    
                    

                </div>
            </div>
        </>
    );
}