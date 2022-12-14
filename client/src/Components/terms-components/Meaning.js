import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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


let listOfTradcutions = []
let listOfCurrentTraductions = []

export default function Meaning({meaning, id}) {

    const [meaningTranslation, setMeaningTranslation] = useState(false)

    
    const getMeaningTraducion = (meaningTraductionId) => {
        const requestOptions = {
            method: 'GET', 
      
        }



        fetch(`https://sandbox.linarys.com/api/folios/${meaningTraductionId}?populate=*`, requestOptions)
        .then((response) => {
            if(response.status !== "200"){
                let err = Error;
                err.Message = "Invalid response code: " + response.status;
            }
            return response.json();
        })
        .then((json) => {
            setMeaningTranslation(json.data.attributes)
            console.log(json)
        })
    }

    let traductions = {...meaning.localizations}.data
    // console.log(listOfTradcutions)
    // console.log(Object.values({...traductions}))

    return(
        <>
            <div  className=''>
                <div style={{padding: '25px'}} className='box_meaningTerm'>
                    {
                       Object.values({...traductions}).map((l)=> {
                         
                            console.log(l.attributes.locale === 'fr')
                            listOfTradcutions.push(
                                l.id, l.attributes.locale
                            );
                            console.log(listOfCurrentTraductions)
                            listOfCurrentTraductions = listOfTradcutions.slice(1).slice(-6)
                            
                            // return (
                            //     <h1>{listOfTradcutions[0]}</h1>
                            // )
                            
                        })
                        
                    }
   
                    {id == 0 &&
                        <div className='subtitle_bold'>
                            Choose one
                        </div>
                    }
                    
                    {id > 0 &&
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
                            <button className='none'>
                                <i className='icon ms-1 icon-addwatchlist'></i>
                            </button>
                        </div>
                        <div>
                            <div style={{display: 'flex', backgroundColor:'#FDFDFD', width:'60%', justifyContent: 'space-evenly', margin: 'auto',borderRadius: '15px'}}>
                                <button onClick={() => getMeaningTraducion(id)} style={{color:'#BD8F16'}} className='none'>GERMAN</button>
                                {(() => {
                                    if (listOfCurrentTraductions[1] === 'fr') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[0])} style={{color:'#BD8F16'}} className='none'>FRENCH</button>
                                    )
                                    } else if (listOfCurrentTraductions[3] === 'fr') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[2])} style={{color:'#BD8F16'}} className='none'>FRENCH</button>
                                    )
                                    } else if (listOfCurrentTraductions[5] === 'fr'){
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[4])} style={{color:'#BD8F16'}} className='none'>FRENCH</button>
                                    )
                                    }
                                })()}
                                    {(() => {
                                    if (listOfCurrentTraductions[1] === 'it') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[0])} style={{color:'#BD8F16'}} className='none'>ITALIAN</button>
                                    )
                                    } else if (listOfCurrentTraductions[3] === 'it') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[2])} style={{color:'#BD8F16'}} className='none'>ITALIAN</button>
                                    )
                                    } else if (listOfCurrentTraductions[5] === 'it'){
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[4])} style={{color:'#BD8F16'}} className='none'>ITALIAN</button>
                                    )
                                    }
                                })()}
                                {(() => {
                                    if (listOfCurrentTraductions[1] === 'en') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[0])} style={{color:'#BD8F16'}} className='none'>ENGLISH</button>
                                    )
                                    } else if (listOfCurrentTraductions[3] === 'en') {
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[2])} style={{color:'#BD8F16'}} className='none'>ENGLISH</button>
                                    )
                                    } else if (listOfCurrentTraductions[5] === 'en'){
                                    return (
                                        <button onClick={() => getMeaningTraducion(listOfCurrentTraductions[4])} style={{color:'#BD8F16'}} className='none'>ENGLISH</button>
                                    )
                                    }
                                })()}
                          
                            </div>
                         
                            <div style={{color:'#068B77'}} className='subtitle_bold'>

                                {meaningTranslation.title}  
                            </div>
                            <div>
                                {{...{...{...{...meaning.terms}.data}[0]}.attributes}.definition}
                            </div>
                        </div>
                        </>
                    }
        
                </div>
            </div>
        </>
    );
}