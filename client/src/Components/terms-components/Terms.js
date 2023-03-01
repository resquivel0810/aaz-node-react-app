import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




export default function Terms({
    terms, 
    onClick2 = f => f, 
    currentTerm, 
    isLoading, 
    clipboard, 
    setClipboard = f => f, 
    toastVisible,
    setToastVisible = f => f, 
    setClipboardTitle = f => f, 
    setLink= f =>f, 
    setShareId = f => f, 
    mobile,
    setMobileMeaningStyle = f => f, 
    mobileMeaningStyle,
    setSkeletonWidth = f => f,
    searchLanguage}) {


    useEffect(() => {
        navigator.clipboard.writeText(clipboard)
        
        setToastVisible(toastVisible)
       
        
    }, [clipboard, toastVisible, setToastVisible])

    
    return(
        <>
            {
                mobile
                ?
                <>{
                    mobileMeaningStyle
                    ?
                    null
                    : 
                    null
                }</>
                
                : 
                null
            }
            <div className=''>
                {/* <h3>All terms</h3> */}
                <div className=''>
                    
                    <div className='container_term'>
                        {terms.map((t) => (                             
                            <div className='box_term' id={t.id} key={t.id}>
                                <div style={{backgroundColor: t.attributes.title === currentTerm ? 'rgba(225,226,225,0.6)': 'white', width: mobile ?'100%':'80%', padding: mobile ?'5px':'15px'}} className='row'>
                                    <div  className='col-8'>
                                    
                                        {
                                            isLoading
                                            ?
                                            <Skeleton height={10} width={70} />
                                            :
                                            <Link
                                            key={t.id} 
                                            onClick={() =>{
                                                onClick2(t.id); 
                                                setLink([document.getElementById(t.attributes.title).href.replace('https://aaz-node-react-app.herokuapp.com', ''), document.getElementById(t.attributes.title).innerText]); 
                                                setMobileMeaningStyle(true);
                                                setSkeletonWidth(document.getElementById('meaningText').offsetWidth)

                                            }}
                                            to={`/dictionary/${t.id}`}
                                            className={'link'}
                                            id={t.attributes.title}
                                            
                                            
                                            
                                        >
                                            {t.attributes.title}
                                        </Link>
                                            
                                        }

                                        <div 
                                            id={t.attributes.terms.data[0].id} 
                                        >

                                        {
                                            searchLanguage === 'de' 
                                            ?
                                            <>
                                            {(() => {
                                            if (t.attributes.localizations.data[0].attributes.locale === 'en' && Object.keys(t.attributes.localizations.data).length === 3) {
                                            return (
                                                <>
                                                    
                                                    {(() => {
                                                        if (t.attributes.localizations.data[1].attributes.locale === 'fr') {
                                                        return (
                                                            <>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                            <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                            </>
                                                        )
                                                        } else if (t.attributes.localizations.data[2].attributes.locale === 'fr') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                                </>
                                                            )
                                                        }
                                                    })()}
                                                    <div className='d-flex flex-row' >
                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                    </div>
                                                </>
                                            )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'fr' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        <div className='d-flex flex-row' >
                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                            <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                        </div>
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'en') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                </>
                                                            )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'en') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                        
                                                    </>
                                                )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'it' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'en') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                </div>
                                                                </>
                                                            )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'en') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                       
                                                    </>
                                                )
                                            }
                                            })()}
                                            </>
                                            :
                                            null
                                        }
                                        {
                                            searchLanguage === 'fr' 
                                            ?
                                            <>
                                            {(() => {
                                            if (t.attributes.localizations.data[0].attributes.locale === 'de' && Object.keys(t.attributes.localizations.data).length === 3) {
                                            return (
                                                <>
                                                    <div className='d-flex flex-row' >
                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                    </div>
                                                    {(() => {
                                                        if (t.attributes.localizations.data[1].attributes.locale === 'it') {
                                                        return (
                                                            <>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                            <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                            </>
                                                        )
                                                        } else if (t.attributes.localizations.data[2].attributes.locale === 'it') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                                </>
                                                            )
                                                        }
                                                    })()}
                                                    
                                                </>
                                            )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'it' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'en') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                </>
                                                            )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'en') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                    </div>
                                                                        <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                        
                                                    </>
                                                )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'en' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                   
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                         <div className='d-flex flex-row' >
                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                            <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                        </div>
                                                       
                                                    </>
                                                )
                                            }
                                            })()}
                                            </>
                                            :
                                            null
                                        }
                                        {
                                            searchLanguage === 'it' 
                                            ?
                                            <>
                                            {(() => {
                                            if (t.attributes.localizations.data[0].attributes.locale === 'de' && Object.keys(t.attributes.localizations.data).length === 3) {
                                            return (
                                                <>
                                                    <div className='d-flex flex-row' >
                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                    </div>
                                                    {(() => {
                                                        if (t.attributes.localizations.data[1].attributes.locale === 'en') {
                                                        return (
                                                            <>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                            </div>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                            </>
                                                        )
                                                        } else if (t.attributes.localizations.data[2].attributes.locale === 'en') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                </>
                                                            )
                                                        }
                                                    })()}
                                                    
                                                </>
                                            )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'en' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'fr') {
                                                            return (
                                                                <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                </>
                                                            )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'fr') {
                                                                return (
                                                                    <>
                                                                        <div className='d-flex flex-row' >
                                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                            <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                        </div>
                                                                        
                                                                        <div className='d-flex flex-row' >
                                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                            <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                        <div className='d-flex flex-row' >
                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                            <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                        </div>
                                                    </>
                                                )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'fr' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                         
                                                       
                                                    </>
                                                )
                                            }
                                            })()}
                                            </>
                                            :
                                            null
                                        }
                                        {
                                            searchLanguage === 'en' 
                                            ?
                                            <>
                                            {(() => {
                                            if (t.attributes.localizations.data[0].attributes.locale === 'de' && Object.keys(t.attributes.localizations.data).length === 3) {
                                            return (
                                                <>
                                                    <div className='d-flex flex-row' >
                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                    </div>
                                                    {(() => {
                                                        if (t.attributes.localizations.data[1].attributes.locale === 'fr') {
                                                        return (
                                                            <>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                            </div>
                                                            <div className='d-flex flex-row' >
                                                                <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                            </div>
                                                            </>
                                                        )
                                                        } else if (t.attributes.localizations.data[2].attributes.locale === 'fr') {
                                                            return (
                                                                <>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                </div>
                                                                <div className='d-flex flex-row' >
                                                                    <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                    <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                </div>
                                                                </>
                                                            )
                                                        }
                                                    })()}
                                                    
                                                </>
                                            )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'fr' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'it') {
                                                            return (
                                                                <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                    </div>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                </>
                                                            )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'it') {
                                                                return (
                                                                    <>
                                                                        <div className='d-flex flex-row' >
                                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                            <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                        </div>
                                                                        <div className='d-flex flex-row' >
                                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                                            <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                                        </div>
                                                                        <div className='d-flex flex-row' >
                                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                            <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                    </>
                                                )
                                            } else if (t.attributes.localizations.data[0].attributes.locale === 'it' && Object.keys(t.attributes.localizations.data).length === 3) {
                                                return (
                                                    <>
                                                        
                                                        {(() => {
                                                            if (t.attributes.localizations.data[1].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                   
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            } else if (t.attributes.localizations.data[2].attributes.locale === 'de') {
                                                                return (
                                                                    <>
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[2].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[2].attributes.title}</div>
                                                                    </div>
                                                                   
                                                                    <div className='d-flex flex-row' >
                                                                        <div className='body_text_len me-2'>{t.attributes.localizations.data[1].attributes.locale}.</div>
                                                                        <div className='body_text'>{t.attributes.localizations.data[1].attributes.title}</div>
                                                                    </div>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                        <div className='d-flex flex-row' >
                                                            <div className='body_text_len me-2'>{t.attributes.localizations.data[0].attributes.locale}.</div>
                                                            <div className='body_text'>{t.attributes.localizations.data[0].attributes.title}</div>
                                                        </div>
                                                       
                                                    </>
                                                )
                                            }
                                            })()}
                                            </>
                                            :
                                            null
                                        }
                                        
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
                                       
                                       
                                        <button  onClick={() => {setShareId(t.id, document.getElementById(t.attributes.terms.data[0].id).innerText)}} className='none'>
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
