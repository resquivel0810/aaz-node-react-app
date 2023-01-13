import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const parseJSON = (resp) => (resp.json ? resp.json() : resp);
const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
  
    return parseJSON(resp).then(resp => {
      throw resp;
    });
};

const headers = { 'Content-Type': 'application/json' };


// let listOfTradcutions = []
// let listOfCurrentTraductions = []

export default function Meaning({meaning, id, onClick4 = f => f, listOfCurrentTraductions, meaningTranslation, searchLanguage, isLoadingMeaningTranslation, setIsLoadingMeaningTranslation = f => f}) {

    // var support = (function () {
    //     if (!window.DOMParser) return false;
    //     var parser = new DOMParser();
    //     try {
    //         parser.parseFromString('x', 'text/html');
    //     } catch(err) {
    //         return false;
    //     }
    //     return true;
    // })();

    // var stringToHTML = function (str) {

    //     // If DOMParser is supported, use it
    //     // if (support) {
    //     //     var parser = new DOMParser();
    //     //     var doc = parser.parseFromString(str, 'text/html');
    //     //     return doc.body;
    //     // }
    
    //     // Otherwise, fallback to old-school method
    //     var dom = document.createElement('div');
    //     dom.innerHTML = str;
    //     return dom;
    
    // };

    // const html = (obj) => {
    //     return (
    //         <>{stringToHTML(obj)}</>
    //     )
    // }

    function createMarkup(str) {
        return {__html: str};
    }

    return(
        <>
            <div  className=''>
                <div style={{padding: '25px'}} className='box_meaningTerm'>
              

                    {(() => {
                        if (id == 0) {
                        return (
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color:'#004F3D'}} className='subtitle_bold'>
                                Choose one
                            </div>
                        )
                        } else {
                        return (
                            <>
                            <div style={{textAlign: 'center'}} >
                                <h3>{meaning.title} </h3>  
                            </div>
                            <div style={{display:'flex', justifyContent: 'center'}}>
                                <button className='none'>
                                    <i className='icon ms-1 icon-copy'></i>
                                </button>
                                <button className='none'>
                                    <i className='icon ms-1 icon-share'></i>
                                </button>
                                {/* <button className='none'>
                                    <i className='icon ms-1 icon-addwatchlist'></i>
                                </button> */}
                            </div>
                            <div>
                                {/* {console.log(meaningTranslation)} */}
                                <div style={{display: 'flex', backgroundColor:'#FDFDFD', width:'60%', justifyContent: 'space-evenly', margin: 'auto',borderRadius: '15px', height: '35px', alignItems: 'center'}}>
                                 
                                    {(() => {
                                        if (searchLanguage === 'de') {
                                        return (
                                            <>
                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                GERMAN
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                }
                                            })()}
                                                {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                }
                                            })()}
                                            </>
                                        )
                                        } else if (searchLanguage === 'fr') {
                                        return (
                                            <>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                }
                                            })()}

                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                FRENCH
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                }
                                            })()}

                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                }
                                            })()}





                                            </>
                                        )
                                        } else if (searchLanguage === 'it'){
                                        return (
                                            <>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                }
                                            })()}

                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                ITALIAN
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ENGLISH
                                                    </button>
                                                )
                                                }
                                            })()}



                                            </>
                                        )
                                        } else if (searchLanguage === 'en'){
                                        return (
                                            <>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        GERMAN
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        FRENCH
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        ITALIAN
                                                    </button>
                                                )
                                                }
                                            })()}




                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                ENGLISH
                                            </button>
                                            </>
                                        )
                                        }
                                    })()}
                                    
                              
                                </div>

                                <div style={{padding: '10px'}}>
                                    {
                                        isLoadingMeaningTranslation
                                        ?
                                        <>
                                        <SkeletonTheme
                                            baseColor="#E1E2E1"
                                            highlightColor="#FDFDFD"
                                            borderRadius="10"
                                            duration={2}
                                        >
                                            
                                                <div style={{padding:'10px'}}>
                                                    <div className='subtitle_bold'>
                                                        <Skeleton width={300} />
                                                    </div>
                                                    <div>
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                         
                                        </SkeletonTheme>
                                        </>
                                        :
                                        <>
                                        <div style={{color:'#068B77'}} className='subtitle_bold'>
                                            {
                                                meaningTranslation === false
                                                ?
                                                <>{meaning.title}</>
                                                :
                                                <>{meaningTranslation.title}</>
                                            }
                                        
                                        </div>
                                        <div style={{overflowY: 'scroll',height: '50vh' }}>
                                            {
                                                meaningTranslation === false
                                                ?
                                                <div dangerouslySetInnerHTML={createMarkup({...{...{...{...meaning.terms}.data}[0]}.attributes}.definition)} />
                                                :
                                                <div dangerouslySetInnerHTML={createMarkup({...{...{...{...meaningTranslation.terms}.data}[0]}.attributes}.definition)} />
                                            }
                                        </div>
                                        </>
                                    }
                                    
                                </div>
                             
                                
                            </div>
                            </>
                        )
                        }
                    })()}
        
                </div>
            </div>
        </>
    );
}