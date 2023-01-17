import React, {useEffect, useState, useRef} from 'react';

import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';

import Terms from './../terms-components/Terms';
import Meaning from './Meaning';
import Input from '../form-components/Input';
import Toast from '../toast/Toast2';

import {useHistory} from 'react-router-dom'



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


export default function Dictionary(props) {
    // const [isLoading, setIsLoading ] = useState(false)
    const [isLoadingTerms, setIsLoadingTerms] = useState(false)
    const [isLoadingMeaning, setIsLoadingMeaning] = useState(false)
    const [isLoadingMeaningTranslation, setIsLoadingMeaningTranslation] = useState(false)

    const [terms, setTerms] = useState([])
    // const [error, setError] = useState(null);
    const [currentLetters, setCurrentLetters] = useState(['A','B','C'])
    const [currentLetter, setCurrentLetter] = useState()
    const [displayedLetters, setDisplayedLetters] = useState(false)
    const [displayedSearchBarOptions, setDisplayedSearchBarOptions] = useState(false)
    const [meaning, setMeaning] = useState([])
    const [meaningTranslation, setMeaningTranslation] = useState(false)
    const [searched, setSearched] = useState('')
    const [searchLanguage, setSearchLanguage] = useState('de')
    
    const [clipboard, setClipboard] = useState('')
    const [toastVisible, setToastVisible] = useState(false)
    const [clipboardTitle, setClipboardTitle] = useState('')
    const [toastProperties, setToastProperties] = useState([])
    const [link, setLink] = useState([])
    const [mobile, setMobile] = useState(false)
    const [mobileMeaningStyle, setMobileMeaningStyle] = useState(false)

    useEffect(() => {
        // setIsLoading(true)
        window.innerWidth < 900 ? setMobile(true) : setMobile(false)
        setIsLoadingTerms(true)
        setIsLoadingMeaning(true)
        let t = window.localStorage.getItem("jwt");
        if(t === null){
            // console.log("No access");
            window.location.href = '/'
        }
        fetch(`https://sandbox.linarys.com/api/folios/`+id+`?populate=*`, { 
            headers, method: 'GET' 
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data  => {
                setMeaning({...data.data.attributes}); 
                setSearchLanguage({...data.data.attributes}.locale); 
                fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=${data.data.attributes.locale}`, { 
                    headers, method: 'GET' 
                })
                .then(checkStatus)
                .then(parseJSON)
                .then(({ data }) => {setTerms(data); setIsLoadingTerms(false); setIsLoadingMeaning(false)})
            })
    }, [])

    useEffect(() => {
        setToastProperties({
            description: `${clipboardTitle.toUpperCase()}`,
            borderColor: '#0A9DE4',
            icon: 'icon-success'
        })
    }, [clipboardTitle])

    let id = props.match.params.id;
    // console.log(props.match.path)

    const getMeaning = (id) => {
        setIsLoadingMeaning(true)

        // id = props.match.params.id;
        const requestOptions = {
            method: 'GET', 
      
        }

        fetch(`https://sandbox.linarys.com/api/folios/`+id+`?populate=*`, requestOptions)
        .then((response) => {
            if(response.status !== "200"){
                let err = Error;
                err.Message = "Invalid response code: " + response.status;
            }
            return response.json();
        })
        .then((json) => {
            setMeaning(json.data.attributes)
            setIsLoadingMeaning(false)
            setMeaningTranslation(false)
            // console.log(json, id)
        })
        
    }

    const getTermsWithLanguage = (lan) => {
        setIsLoadingTerms(true)
        fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=${lan}`, { 
            headers, method: 'GET' 
        })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => {setTerms(data); setIsLoadingTerms(false)})
        //   .then(setIsLoading(false))
        //   .catch((error) => setError(error))
        
    }

    const getTermsWithLetter = (letter) => {
        setIsLoadingTerms(true)
        const requestOptions = {
            method: 'GET', 
      
        }

        fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=${searchLanguage}&filters[title][$startsWith]=` + letter, requestOptions)
        .then((response) => {
            if(response.status !== "200"){
                let err = Error;
                err.Message = "Invalid response code: " + response.status;
            }
            return response.json();
        })
        .then((json) => {
            setTerms(json.data)
            setIsLoadingTerms(false)
            // setMeaning([])
            // props.history.push('/dictionary/0')
            if(json.data.length > 0 && searched !== '') {
                setCurrentLetter(json.data[0].attributes.title.charAt(0))
                setSearched('')

            } 
            else if(json.data.length > 0 && searched === '') {
                setCurrentLetter(json.data[0].attributes.title.charAt(0))
            }
            else if (json.data.length === 0) {
                setCurrentLetter('')
            }
            
            // setCurrentLetter(json.data[0].attributes.title.charAt(0))
            // console.log(json.data[0].attributes.title.charAt(0))
            console.log(json.data.length > 0 )
        })
    }

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
            setIsLoadingMeaningTranslation(false)
        })
    }
    let traductions = {...meaning.localizations}.data
    // console.log(Object.values({...traductions}))
    let listOfTradcutions = []
    let listOfCurrentTraductions = []
    Object.values({...traductions}).map((l)=> {
                         
        // console.log(l.attributes.locale === 'fr')
        listOfTradcutions.push(
            l.id, l.attributes.locale
        );
        // console.log(listOfTradcutions)
        listOfCurrentTraductions = listOfTradcutions.slice(0).slice(-6)
 
        
    })

    const handleChange = e => {
        const  value  = e.target.value;
        setCurrentLetters([value.charAt(0), value.charAt(2), value.charAt(4)]);
        // setCurrentLetter(null)
    };

    const changeDisplayedLetters = () => {
        setDisplayedLetters(!displayedLetters)
    }


    function useOutsideAlerter(ref) {
        useEffect(() => {
         
           // Alert if clicked on outside of element
         
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) ) {
                setDisplayedLetters(false)
                // setDisplayedSearchBarOptions(false)

            }
          
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    function useOutsideAlerter2(ref2) {
        useEffect(() => {
         
           // Alert if clicked on outside of element
         
          function handleClickOutside(event) {
            if (ref2.current && !ref2.current.contains(event.target) ) {
                // setDisplayedLetters(false)
                setDisplayedSearchBarOptions(false)

            }
          
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref2]);
    }

    const wrapperRef= useRef(null);
    
    useOutsideAlerter(wrapperRef);

    const wrapperRef2= useRef(null);

    useOutsideAlerter2(wrapperRef2);

    const FilterByLetter = ({currentLetters}) => {

        return (
            <>
            <div>
                <div>
                    <div style={{display:'flex', backgroundColor: '#E1E2E1', width: '250px', padding: '5px 10px', borderRadius: '10px', justifyContent: 'space-between',alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#FDFDFD', padding: '0 10px',borderRadius: '10px'}}>
                            <span>{currentLetters}</span>
                            <button onClick={() => changeDisplayedLetters()} className='none'><i className='icon ms-1 icon-more'></i></button>
                        </div>
                        
                        <div style={{display: 'flex'}}>
                            <button 
                                style={{margin: '5px', height: '30px', width: '30px', borderRadius: '50%',backgroundColor: ['à', 'D', 'G', 'J', 'M', 'P', 'S', 'V', 'Y'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none' }} 
                                className='none'
                                id={Object.values(currentLetters)[0]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[0])}
                            >
                                {Object.values(currentLetters)[0]}
                            </button>
                            <button 
                                style={{margin: '5px', height: '30px', width: '30px', borderRadius: '50%',backgroundColor: ['B', 'E', 'H', 'K', 'N', 'Q', 'T', 'W', 'Z'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none'}}  
                                className='none'
                                id={Object.values(currentLetters)[1]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[1])}
                            >
                                {Object.values(currentLetters)[1]}
                            </button>
                            {/* {Object.values(currentLetters)[2] } */}
                            <button 
                                style={{margin: '5px', height: '30px', width: '30px', borderRadius: '50%',backgroundColor: ['C', 'F', 'I', 'L', 'O', 'R', 'U', 'X'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none'}}  
                                className='none'
                                id={Object.values(currentLetters)[2]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[2])}
                            >
                                {Object.values(currentLetters)[2]}
                            </button>
                        </div>
                    </div>
                    {displayedLetters
                        ?
                        <span ref={wrapperRef} style={{display:'block', position: 'absolute', backgroundColor: 'rgba(246,249,229,0.95)', padding: '20px 40px'}}>
                            <div>Select to search</div>
                            <div style={{display:'flex'}}>
                                <div style={{margin:'5px 10px'}}>
                                    <div style={{display:'flex'}}>
                                    <Input 
                                        type = {"radio"}
                                        id = {"ABC"}
                                        name = {"current_letters"}
                                        value = {['A','B','C']}
                                        checked={Object.values(currentLetters)[0]=== Object.values(['A','B','C'])[0]}
                                        handleChange={handleChange}
                                        style={{width:'unset', height: 'unset', marginRight:'5px'}}
                                    />
                                    <label for="ABC">ABC</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"DEF"}
                                            name = {"current_letters"}
                                            value = {['D','E','F']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['D','E','F'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="DEF">DEF</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"GHI"}
                                            name = {"current_letters"}
                                            value = {['G','H','I']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['G','H','I'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="GHI">GHI</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"JKL"}
                                            name = {"current_letters"}
                                            value = {['J','K','L']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['J','K','L'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="JKL">JKL</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"MNO"}
                                            name = {"current_letters"}
                                            value = {['M','N','O']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['M','N','O'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="MNO">MNO</label>
                                    </div>
                                </div>
                                <div style={{margin:'5px 10px'}}>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"PQR"}
                                            name = {"current_letters"}
                                            value = {['P','Q','R']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['P','Q','R'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="PQR">PQR</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"STU"}
                                            name = {"current_letters"}
                                            value = {['S','T','U']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['S','T','U'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="STU">STU</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"VWX"}
                                            name = {"current_letters"}
                                            value = {['V','W','X']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['V','W','X'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="VWX">VWX</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Input 
                                            type = {"radio"}
                                            id = {"YZ"}
                                            name = {"current_letters"}
                                            value = {['Y','Z']}
                                            checked={Object.values(currentLetters)[0]=== Object.values(['Y','Z'])[0]}
                                            handleChange={handleChange}
                                            style={{width:'unset', height: 'unset'}}
                                        />
                                        <label for="YZ">YZ</label>
                                    </div>
                                </div>
                            </div>
                        </span>
                        :
                        null                   
                    }
                    
                </div>
               
            </div>
            </>
        )
    }
    let history = useHistory()

    const handleShareButton = (ShareId, ShareTitle) => {
        // Check if navigator.share is supported by the browser
        if (navigator.share) {
          console.log("Congrats! Your browser supports Web Share API");
          navigator
            .share({
              url: `https://aaz-node-react-app.herokuapp.com/dictionary/${ShareId}`,
              title: 'Accounting dictionary - Register! More than 1,000 terms',
              text: `Accounting dictionary - Register! More than 1,000 terms \n ${ShareTitle}`,
            })
            .then(() => {
              console.log("Sharing successfull");
            })
            .catch(() => {
              console.log("Sharing failed");
            });
        } else {
          console.log("Sorry! Your browser does not support Web Share API");
        }
    };
    
    return(
        <>
            <Toast
                toastList={toastProperties}
                position="top-right" 
                visible={toastVisible}
            />
            <AppHeader 
                onClick3={(letters) => getTermsWithLetter(letters) }
                onClick5={(search) => setSearched(search)}
                onFocus1={() => setDisplayedSearchBarOptions(true)}
                // onBlur1={() => setDisplayedSearchBarOptions(false)}
                ref2={wrapperRef2}
                options={displayedSearchBarOptions}
                search={props.match.path}
                onChange1={(lan) => {
                    setSearchLanguage(lan);
                    console.log(listOfCurrentTraductions); 
                    let translationId = listOfCurrentTraductions[listOfCurrentTraductions.indexOf(lan)-1];  
                    if(translationId === undefined) {
                        var currentId = props.match.params.id
                    } else {
                        currentId = translationId
                    }; 
                    console.log(currentId);
                    getMeaning(currentId)
                    
                    history.push(`/dictionary/${currentId}`)
                    getTermsWithLanguage(lan)
                    
                   
                }}
                lastVisited = {link}
                getMeaning={(id) => getMeaning(id)}
                setMobileMeaningStyle = {(val) => setMobileMeaningStyle(val)}

            />
            <div className='bg_dictionary'>
                <div className='container relative'>
                    <div className='row py-4'>
                        <div style={{display: mobileMeaningStyle ? 'none' : 'block', marginTop: mobile ? '130px': '0'}}  className='col'>
                            {(() => {
                                if (currentLetter !== undefined && searched === '') {
                                return (
                                    <h3 style={{margin: '0'}}>All terms with {currentLetter}</h3>
                                )
                                } else if (searched !== '') {
                                return (
                                    <h3 style={{margin: '0'}}>Results</h3>
                                )
                                } else {
                                return (
                                    <h3 style={{margin: '0'}}>All terms</h3>
                                )
                                }
                            })()}
                            <div style={{color: '#A5A5A5', marginBottom:'20px'}}>
                                Currently searching in 
                                {
                                    searchLanguage === 'de' ? <> german</> : null 
                                }
                                {
                                    searchLanguage === 'fr' ? <> french</> : null 
                                }
                                {
                                    searchLanguage === 'it' ? <> italian</> : null 
                                }
                                {
                                    searchLanguage === 'en' ? <> english</> : null 
                                }
                            </div>
                            {/* {console.log(terms.length)} */}
                           
                            <FilterByLetter currentLetters={currentLetters}/>
                           {
                                isLoadingTerms
                                ?
                                // <div style={{width: '250px', margin: '35px 0', color: '#F33757'}}>
                                //     Sorry we couldn’t find any matches for the term “{searched}”.  
                                //     Double check your search for any typos or spelling error or 
                                //     search by letter. 
                                // </div>

                                <>
                                
                                <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '500px'}}>
                                <SkeletonTheme
                                    baseColor="#E1E2E1"
                                    highlightColor="#FDFDFD"
                                    borderRadius="10"
                                    duration={2}
                                >
                                    {[1,2,3,4,5].map(() => (
                                        <div className='box_term'>
                                        <Skeleton width={100} />
                                        <div className='d-flex flex-row'>
                                            <div className='body_text_len me-2'>DE.</div>
                                            <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <div className='body_text_len me-2'>EN.</div>
                                            <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <div className='body_text_len me-2'>FR.</div>
                                            <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <div className='body_text_len me-2'>IT.</div>
                                            <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                        </div>
                                        
                                        
                                    </div>
                                    ))}
                                    
                                    
                                </SkeletonTheme>
                                </div>
                                </>
                                :
                                <>
                                <Terms 
                                    isLoading={isLoadingTerms}
                                    terms={terms}
                                    onClick2={(id) => getMeaning(id)} 
                                    currentTerm = {meaning.title}
                                    clipboard = {clipboard}
                                    toastVisible = {toastVisible}
                                    setClipboard = {(cli) => 
                                        {   setClipboard(cli); 
                                            setToastProperties({
                                                description: `${clipboard.toUpperCase()}`,
                                                borderColor: '#0A9DE4',
                                                icon: 'icon-success'
                                            })
                                        }
                                    }
                                    setToastVisible = {(val) => setToastVisible(val)}
                                    setClipboardTitle = {(val) => setClipboardTitle(val)}
                                    setLink = {(val) => setLink([...[val], ...link])}
                                    setShareId = {(val1, val2) => {handleShareButton(val1, val2)}}
                                    setMobileMeaningStyle = {(val) => mobile ? setMobileMeaningStyle(val) : setMobileMeaningStyle(false)}

                                />
                                </>
                            }
                            {/* <Terms 
                                isLoading={isLoading}
                                terms={terms}
                                onClick2={(id) => getMeaning(id)} 
                                currentTerm = {meaning.title}
                            /> */}
                           
                                

                 
                            
                            
                            
                        </div>
                        <div style={{display: mobileMeaningStyle ? 'block' : 'none'}} className='d-lg-block col'>
                            {
                                isLoadingMeaning
                                ?
                                <>
                                    <SkeletonTheme
                                    baseColor="#E1E2E1"
                                    highlightColor="#FDFDFD"
                                    borderRadius="10"
                                    duration={2}
                                >
                                    <div style={{padding: '25px'}} className='box_meaningTerm'>
                                        <div style={{textAlign: 'center', marginBottom: '70px'}}>
                                            <h3><Skeleton width={300} /></h3>
                                        </div>
                                        <div style={{padding:'10px'}}>
                                            <div className='subtitle_bold'>
                                                <Skeleton width={300} />
                                            </div>
                                            <div>
                                                <Skeleton count={5} />
                                            </div>
                                        </div>
                                    </div>
                                </SkeletonTheme>
                                    
                                </>
                                :
                                <Meaning 
                                    meaning={meaning}
                                    id = {id}
                                    listOfCurrentTraductions = {listOfCurrentTraductions}
                                    meaningTranslation = {meaningTranslation}
                                    onClick4 = {(meaningTraductionId) => getMeaningTraducion(meaningTraductionId)}
                                    searchLanguage = {searchLanguage}
                                    isLoadingMeaningTranslation = {isLoadingMeaningTranslation}
                                    setIsLoadingMeaningTranslation = {(val) => setIsLoadingMeaningTranslation(val)}
                                />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>


            <AppFooter />
        </>
    );

}