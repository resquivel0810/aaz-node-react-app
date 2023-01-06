import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




export default function Terms({terms, onClick2 = f => f, currentTerm, isLoading, clipboard, setClipboard = f => f, toastVisible,setToastVisible = f => f, setClipboardTitle = f => f, setLink= f =>f }) {
    // const [clipboard, setClipboard] = useState('jajaja')

    useEffect(() => {
        navigator.clipboard.writeText(clipboard)
        
        setToastVisible(toastVisible)
       
        
    }, [clipboard, toastVisible, setToastVisible])
    
    return(
        <>
            <div className=''>
                {/* <h3>All terms</h3> */}
                <div className=''>
                    
                    <div className='container_term'>
                        {terms.map((t) => (                             
                            <div className='box_term' id={t.id} key={t.id}>
                                <div className='row'>
                                    <div style={{backgroundColor: t.attributes.title === currentTerm ? 'rgba(225,226,225,0.6)': 'white'}} className='col-8'>
                                    {/* 'rgba(225,226,225,0.6)' */}
                                    
                                        {
                                            isLoading
                                            ?
                                            <Skeleton height={10} width={70} />
                                            :
                                            <Link
                                            key={t.id} 
                                            onClick={() =>{onClick2(t.id); setLink([document.getElementById(t.attributes.title).href.replace('http://localhost:3000', ''), document.getElementById(t.attributes.title).innerText])}}
                                            to={`/dictionary/${t.id}`}
                                            className={'link'}
                                            id={t.attributes.title}
                                            
                                            
                                            
                                        >
                                            {t.attributes.title}
                                        </Link>
                                            
                                        }

                                        <div id={t.attributes.terms.data[0].id} >
                                        
                                        
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
                                        

                                    </div>
                                    <div className='col-4 text-end'>
                                        <div style={{display: 'flex'}}>
                                
                                            <button 
                                                onClick={() => 

                                                    {  

                                                        setClipboard(document.getElementById(t.attributes.terms.data[0].id).innerText)
                                                        setToastVisible(true)
                                                        setTimeout(() => {
                                                            setToastVisible(false)
                                                        }, 5000)
                                                        setClipboardTitle(document.getElementById(t.attributes.title).innerText)
                                                        
                                                 
                                                    }
                                                } 
                                                className='none'
                                            >
                                                <i className='icon ms-1 icon-copy'></i>
                                            </button>
                                       
                                       
                                        <button onClick={() => console.log('EMAIL!!!')} className='none'>
                                            <i className='icon ms-1 icon-share'></i>
                                        </button>
                                        </div>
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
