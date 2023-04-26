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

export default function Meaning({
    meaning, 
    id, 
    onClick4 = f => f, 
    listOfCurrentTraductions, 
    meaningTranslation, 
    searchLanguage, 
    isLoadingMeaningTranslation, 
    setIsLoadingMeaningTranslation = f => f, 
    mobile,
    setMobileMeaningStyle = f => f, 
    mobileMeaningStyle, 
    setShareId = f => f,
    skeletonWidth,
    setSkeletonWidth = f => f}) {

    // const [skeletonWidth, setSkeletonWidth] = useState()


    function createMarkup(str) {
        return {__html: str};
    }

    return(
        <>
            <div  className=''>
                <div style={{padding: '25px 35px', marginTop: '25px'}} className='box_meaningTerm'>
              

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
                            <div style={{display:'flex', justifyContent: 'end'}}>
                            {
                                mobile
                                ?
                                <>{
                                    mobileMeaningStyle
                                    ?
                                    <button style={{margin:'0'}} onClick={() =>  setMobileMeaningStyle(false)} className='none'>
                                        <i style={{ transform: 'rotate(-180deg)', color: '#BD8F16'}} className='icon ms-1 icon-arrow'></i>
                                    </button>
                                    : 
                                    null
                                }</>
                                
                                : 
                                null
                            }
                            
                                {/* <button className='none'>
                                    <i className='icon ms-1 icon-copy'></i>
                                </button> */}
                                <button 
                                    className='none'
                                    onClick={() => {setShareId(id, null)}}
                                    style={{margin:'0'}}
                                >
                                    <i className='icon ms-1 icon-share'></i>
                                </button>
                                {/* <button className='none'>
                                    <i className='icon ms-1 icon-addwatchlist'></i>
                                </button> */}
                            </div>
                            <div style={{textAlign: 'center'}} >
                                <h3 style={{margin:'15px 0'}}>{meaning.title} </h3>  
                            </div>
                            
                            <div>
                                {/* {console.log(meaningTranslation)} */}
                                <div style={{display: 'flex', backgroundColor:'#FDFDFD', width:'70%', justifyContent: 'space-evenly', margin: 'auto',borderRadius: '15px', height: '35px', alignItems: 'center'}}>
                                 
                                    {(() => {
                                        if (searchLanguage === 'de') {
                                        return (
                                            <>
                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                {
                                                    mobile
                                                    ?
                                                    <>DE</>
                                                    :
                                                    <>GERMAN</>
                                                }
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}
                                                {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
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
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}

                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                {
                                                    mobile
                                                    ?
                                                    <>FR</>
                                                    :
                                                    <>FRENCH</>
                                                }
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}

                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
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
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}

                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                {
                                                    mobile
                                                    ?
                                                    <>IT</>
                                                    :
                                                    <>ITALIAN</>
                                                }
                                            </button>
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'en') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'en'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>EN</>
                                                            :
                                                            <>ENGLISH</>
                                                        }
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
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'de') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'de'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'de' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'de' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>DE</>
                                                            :
                                                            <>GERMAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px', backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'fr') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'fr'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'fr' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'fr' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>FR</>
                                                            :
                                                            <>FRENCH</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}
                                            {(() => {
                                                if (listOfCurrentTraductions[1] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[0]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[3] === 'it') {
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[2]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                } else if (listOfCurrentTraductions[5] === 'it'){
                                                return (
                                                    <button 
                                                        onClick={() => {onClick4(listOfCurrentTraductions[4]); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                        style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation.locale === 'it' ? '#BD8F16': '#FDFDFD', color: meaningTranslation.locale === 'it' ? '#FDFDFD' :'#BD8F16'}} 
                                                        className='none'
                                                    >
                                                        {
                                                            mobile
                                                            ?
                                                            <>IT</>
                                                            :
                                                            <>ITALIAN</>
                                                        }
                                                    </button>
                                                )
                                                }
                                            })()}




                                            <button 
                                                onClick={() => {onClick4(id); setIsLoadingMeaningTranslation(true); setSkeletonWidth(document.getElementById('meaningText').offsetWidth)}} 
                                                style={{height:'25px', padding: '0px 10px', borderRadius: '15px' ,backgroundColor: meaningTranslation === false || meaningTranslation.locale === 'en' ? '#BD8F16': '#FDFDFD', color: meaningTranslation === false || meaningTranslation.locale === 'en' ? '#FDFDFD' :'#BD8F16'}} 
                                                className='none'
                                            >
                                                {
                                                    mobile
                                                    ?
                                                    <>EN</>
                                                    :
                                                    <>ENGLISH</>
                                                }
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
                                                        <Skeleton width={skeletonWidth - 20} />
                                                    </div>
                                                    <div>
                                                        <Skeleton count={11} />
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
                                                <>
                                                    <div style={{margin: '15px 0'}}>{meaning.title}</div>
                                                    <div 
                                                        style={{fontSize: '16px', margin: '15px 0'}}
                                                    >   
                                                        {
                                                            {...{...{...{...meaning.terms}.data}[1]}.attributes}.text !== undefined && {...{...{...{...meaning.terms}.data}[2]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonim: {{...{...{...{...meaning.terms}.data}[1]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                        {
                                                            {...{...{...{...meaning.terms}.data}[2]}.attributes}.text !== undefined && {...{...{...{...meaning.terms}.data}[3]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonims: {{...{...{...{...meaning.terms}.data}[1]}.attributes}.text}, {{...{...{...{...meaning.terms}.data}[2]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                        {
                                                            {...{...{...{...meaning.terms}.data}[3]}.attributes}.text !== undefined && {...{...{...{...meaning.terms}.data}[4]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonims: {{...{...{...{...meaning.terms}.data}[1]}.attributes}.text}, {{...{...{...{...meaning.terms}.data}[2]}.attributes}.text}, {{...{...{...{...meaning.terms}.data}[3]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                        
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div style={{margin: '15px 0'}}>{meaningTranslation.title}</div>
                                                    <div 
                                                        style={{fontSize: '16px', margin: '15px 0'}}
                                                    >   
                                                        {
                                                            {...{...{...{...meaningTranslation.terms}.data}[1]}.attributes}.text !== undefined && {...{...{...{...meaningTranslation.terms}.data}[2]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonim: {{...{...{...{...meaningTranslation.terms}.data}[1]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                        {
                                                            {...{...{...{...meaningTranslation.terms}.data}[2]}.attributes}.text !== undefined && {...{...{...{...meaningTranslation.terms}.data}[3]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonims: {{...{...{...{...meaningTranslation.terms}.data}[1]}.attributes}.text}, {{...{...{...{...meaningTranslation.terms}.data}[2]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                        {
                                                            {...{...{...{...meaningTranslation.terms}.data}[3]}.attributes}.text !== undefined && {...{...{...{...meaningTranslation.terms}.data}[4]}.attributes}.text === undefined
                                                            ?
                                                            <>Synonims: {{...{...{...{...meaningTranslation.terms}.data}[1]}.attributes}.text}, {{...{...{...{...meaningTranslation.terms}.data}[2]}.attributes}.text}, {{...{...{...{...meaningTranslation.terms}.data}[3]}.attributes}.text}</>
                                                            :
                                                            <></>
                                                        }
                                                    </div>
                                                </>
                                            }
                                        
                                        </div>
                                        <div id='meaningText' style={{height: '50vh' }}>
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