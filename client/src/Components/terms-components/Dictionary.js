import React, {useEffect, useState, useRef} from 'react';

import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';

import Terms from './../terms-components/Terms';
import Meaning from './Meaning';
import Input from '../form-components/Input';
import Toast from '../toast/Toast2';
import RadioInput from './RadioInput'

import {useHistory} from 'react-router-dom'



import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import classes from './Dictionary.module.css'

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
    const [currentSearch, setCurrentSearch] = useState('')
    const [currentLetters, setCurrentLetters] = useState(['A','B','C'])
    const [currentLetter, setCurrentLetter] = useState('A')
    const [displayedLetters, setDisplayedLetters] = useState(false)
    const [displayedSearchBarOptions, setDisplayedSearchBarOptions] = useState(false)
    const [meaning, setMeaning] = useState([])
    const [meaningTranslation, setMeaningTranslation] = useState(false)
    const [searched, setSearched] = useState('')
    const [searchLanguage, setSearchLanguage] = useState('de')
    const [displayedPredicted, setDisplayedPredicted] = useState(false)
    const [predictedTerms, setPredictedTerms] = useState([])
    
    const [clipboard, setClipboard] = useState('')
    const [toastVisible, setToastVisible] = useState(false)
    const [clipboardTitle, setClipboardTitle] = useState('')
    const [toastProperties, setToastProperties] = useState([])
    const [link, setLink] = useState([])
    const [mobile, setMobile] = useState(false)
    const [searchBarDisplayed, setSearchBarDisplayed] = useState(false)
    const [mobileMeaningStyle, setMobileMeaningStyle] = useState(false)

    const [skeletonWidth, setSkeletonWidth] = useState()

    const [selected, setSelected] = useState(['A','B','C']);

    let termId = props.location.pathname.replace('/dictionary/','')
    window.localStorage.setItem("termId", termId);
    // console.log(typeof(props.location.pathname), props.location.pathname.replace('/dictionary/',''))

    useEffect(() => {
        
        console.log(termId, Number(termId))
        window.innerWidth < 900 ? setMobile(true) : setMobile(false)
        setIsLoadingTerms(true)
        setIsLoadingMeaning(true)
        let t = window.localStorage.getItem("jwt");
        if(t === null){
            // console.log("No access");
            window.location.href = '/'
        }
        fetch(`https://sandbox.linarys.com/api/folios/${Number(termId)}?populate=*`, { 
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
        fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=${lan}&filters[title][$startsWith]=${currentLetter}&sort[0]=title%3Aasc` , { 
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

        fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=${searchLanguage}&filters[title][$startsWith]=${letter}&sort[0]=title%3Aasc`, requestOptions)
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
                setCurrentLetter(json.data[0].attributes.title.charAt(0).toUpperCase())
                setSearched('')

            } 
            else if(json.data.length > 0 && searched === '') {
                setCurrentLetter(json.data[0].attributes.title.charAt(0).toUpperCase())
            }
            else if (json.data.length === 0) {
                setCurrentLetter('')
            }
            
            // setCurrentLetter(json.data[0].attributes.title.charAt(0))
            // console.log(json.data[0].attributes.title.charAt(0))
            // console.log(json.data.length > 0 )
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

    const getTermsWithPredictive = (lan, search) => {
        // setIsLoadingTerms(true)
        fetch(`https://sandbox.linarys.com/api/folios?populate=terms&locale=${lan}&filters[title][$startsWith]=${search}&pagination[limit]=5`, { 
            headers, method: 'GET' 
        })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => {setPredictedTerms(data);setDisplayedPredicted(true)})
   
        
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

    // const handleSearchChange = e => {
    //     const  value  = e.target.value;
    //     setCurrentLetters([value.charAt(0), value.charAt(2), value.charAt(4)]);
    //     // setCurrentLetter(null)
    // };

    // const handleChange = e => {
    //     const  value  = e.target.value;
    //     setCurrentLetters([value.charAt(0), value.charAt(2), value.charAt(4)]);
    //     // setCurrentLetter(null)
    // };

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
            <div style={{fontFamily: 'Work Sans'}}>
                <div>
                    <div className={classes.filterByLetterMain}>
                        <div className={classes.moreLetters}>
                            <span>{currentLetters}</span>
                            <button onClick={() => changeDisplayedLetters()} className='none'><i className='icon ms-1 icon-more'></i></button>
                        </div>
                        
                        <div style={{display: 'flex'}}>
                            <button 
                                style={{margin: '5px', borderRadius: '50%',backgroundColor: ['A', 'D', 'G', 'J', 'M', 'P', 'S', 'V', 'Y'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none' }} 
                                className={classes.filterButton}
                                id={Object.values(currentLetters)[0]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[0])}
                            >
                                {Object.values(currentLetters)[0]}
                            </button>
                            <button 
                                style={{margin: '5px', borderRadius: '50%',backgroundColor: ['B', 'E', 'H', 'K', 'N', 'Q', 'T', 'W', 'Z'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none'}}  
                                className={classes.filterButton}
                                id={Object.values(currentLetters)[1]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[1])}
                            >
                                {Object.values(currentLetters)[1]}
                            </button>
                            {/* {Object.values(currentLetters)[2] } */}
                            <button 
                                style={{margin: '5px', borderRadius: '50%',backgroundColor: ['C', 'F', 'I', 'L', 'O', 'R', 'U', 'X'].includes(currentLetter) && currentLetters.includes(currentLetter) ? 'rgba(243, 191, 76, .55)' : 'none'}}  
                                className={classes.filterButton}
                                id={Object.values(currentLetters)[2]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[2])}
                            >
                                {Object.values(currentLetters)[2]}
                            </button>
                        </div>
                    </div>
                    {displayedLetters
                        ?
                        <span ref={wrapperRef}  style={{display:'block', position: 'absolute', backgroundColor: 'rgba(246,249,229,0.95)', padding: '20px 40px', zIndex: '3'}}>
                            <div style={{color:'#004F3D'}}>Select to search</div>
                            <div style={{display:'flex'}}>
                                <div style={{margin:'5px 10px'}}>
                                    <div style={{display:'flex'}}>
                     
                                    <RadioInput 
                                        value={['A','B','C']}
                                        selected={selected}
                                        text="ABC"
                                        onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])}}
                                    />
                                    </div>
                                    <div style={{display:'flex'}}>
                                     
                                        <RadioInput 
                                            value={['D','E','F']}
                                            selected={selected}
                                            text="DEF"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                                
                                        <RadioInput 
                                            value={['G','H','I']}
                                            selected={selected}
                                            text="GHI"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                           
                                        <RadioInput 
                                            value={['J','K','L']}
                                            selected={selected}
                                            text="JKL"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                                      
                                        <RadioInput 
                                            value={['M','N','O']}
                                            selected={selected}
                                            text="MNO"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                </div>
                                <div style={{margin:'5px 10px'}}>
                                    <div style={{display:'flex'}}>
                                  
                                        <RadioInput 
                                            value={['P','Q','R']}
                                            selected={selected}
                                            text="PQR"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                                   
                                        <RadioInput 
                                            value={['S','T','U']}
                                            selected={selected}
                                            text="STU"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                                   
                                        <RadioInput 
                                            value={['V','W','X']}
                                            selected={selected}
                                            text="VWX"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
                                    </div>
                                    <div style={{display:'flex'}}>
                                        
                                        <RadioInput 
                                            value={['Y','Z']}
                                            selected={selected}
                                            text="YZ"
                                            onChange={(val) => {setSelected(val); setCurrentLetters(val); setCurrentLetter(val[0]); getTermsWithLetter(val[0])} }
                                        />
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
        <div className={classes.container}>
            <Toast
                toastList={toastProperties}
                position="top-right" 
                visible={toastVisible}
            />
            <AppHeader  
                onSelectPreviosSearch={(val) => setDisplayedSearchBarOptions(val)}
                searchBarDisplayed={searchBarDisplayed}
                setSearchBarDisplayed={(val) => setSearchBarDisplayed(val)}
                currentPathName={props.location.pathname}
                currentId={props.location.pathname.replace('/dictionary/','')}
                onClick3={(letters) => getTermsWithLetter(letters) }
                onClick5={(search) => setSearched(search)}
                onFocus1={() => setDisplayedSearchBarOptions(true)}
                // onBlur1={() => setDisplayedSearchBarOptions(false)}
                setCurrentSearch={(val) => setCurrentSearch(val)}
                currentSearch={currentSearch}
                getTermsWithPredictive={(partial) => getTermsWithPredictive(searchLanguage ,partial)}
                displayedPredicted={displayedPredicted}
                predictedTerms = {predictedTerms}
                displayedSearchBarOptions={displayedSearchBarOptions}
                ref2={wrapperRef2}
                options={displayedSearchBarOptions}
                search={props.match.path}
                onChange1={(lan) => {
                    setSearchLanguage(lan);
                    // console.log(listOfCurrentTraductions); 
                    let translationId = listOfCurrentTraductions[listOfCurrentTraductions.indexOf(lan)-1];  
                    if(translationId === undefined) {
                        var currentId = props.match.params.id
                    } else {
                        currentId = translationId
                    }; 
                    // console.log(currentId);
                    getMeaning(currentId)
                    
                    history.push(`/dictionary/${currentId}`)
                    getTermsWithLanguage(lan)
                    
                   
                }}
                lastVisited = {localStorage.getItem('recentSearch') !== null ? localStorage.getItem('recentSearch').split(/\,\/|\,(?=[a-zA-Z])/g).concat(['', '', '', '', '', '', '', '', '', '', '']): ['', '', '', '', '', '', '', '', '', '', '']}
                getMeaning={(id) => getMeaning(id)}
                // setMobileMeaningStyle = {(val) => setMobileMeaningStyle(val)}
                // mobileMeaningStyle = {mobileMeaningStyle}
                mobile = {mobile}
                setLink = {(val) => setLink([...[val], ...link])}
                language={searchLanguage}
                setTermVisible={(val) => {setSearched(val); getTermsWithLetter(val)}}
                setCurrentLetters={(val) => setCurrentLetters(val)}

            />
            <div className={classes.dictionary}>
                <div className={classes.dictionaryContainer}>
                  
                    <div  style={{display: mobileMeaningStyle ? 'none' : 'block', flex:'1', marginRight:'3vw'}}  >
                        <div className={classes.searchParams}>
                            {/* {(() => {
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
                                    <h3 style={{margin: '0'}}>Terms</h3>
                                )
                                }
                            })()} */}
                            <h3 style={{margin: '0'}}>Terms</h3>
                            <div className={classes.searchLanguage} >
                                Currently searching in 
                                {
                                    searchLanguage === 'de' ? <span style={{color:'#292929', fontWeight: '600'}}> German</span> : null 
                                }
                                {
                                    searchLanguage === 'fr' ? <span style={{color:'#292929', fontWeight: '600'}}> French</span> : null 
                                }
                                {
                                    searchLanguage === 'it' ? <span style={{color:'#292929', fontWeight: '600'}}> Italian</span> : null 
                                }
                                {
                                    searchLanguage === 'en' ? <span style={{color:'#292929', fontWeight: '600'}}> English</span> : null 
                                }
                            </div>
                            <FilterByLetter currentLetters={currentLetters}/>
                        </div>


                        {
                            isLoadingTerms
                            ?
                           

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
                                    {/* <div className='d-flex flex-row'>
                                        <div className='body_text_len me-2'>DE.</div>
                                        <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                    </div> */}
                                    <div className='d-flex flex-row'>
                                        {/* <div className='body_text_len me-2'>EN.</div> */}
                                        <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        {/* <div className='body_text_len me-2'>FR.</div> */}
                                        <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        {/* <div className='body_text_len me-2'>IT.</div> */}
                                        <div><Skeleton highlightColor="#FDFDFD" width={100} /></div>
                                    </div>
                                    
                                    
                                </div>
                                ))}
                                
                                
                            </SkeletonTheme>
                            </div>
                            </>
                            :
                            <>
                            {/* {console.log(terms.length)} */}
                            <Terms 
                                currentSearch={currentSearch}
                                termNotFound={terms.length === 0}
                                isLoading={isLoadingTerms}
                                terms={terms}
                                onClick2={(id) => {getMeaning(id); window.localStorage.setItem("termId", id);}} 
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
                                setLink = {(val) => {setLink([...[val], ...link]); localStorage.setItem('recentSearch',[...[val], ...link])}}
                                setShareId = {(val1, val2) => {handleShareButton(val1, val2)}}
                                setMobileMeaningStyle = {(val) => mobile ? setMobileMeaningStyle(val) : setMobileMeaningStyle(false)}
                                // setMobileMeaningStyle = {(val) => setMobileMeaningStyle(val)}
                                mobileMeaningStyle = {mobileMeaningStyle}
                                mobile = {mobile}
                                setSkeletonWidth = {(val) => setSkeletonWidth(val)}
                                searchLanguage = {searchLanguage}

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
                    <div style={{display: mobileMeaningStyle === true || mobile === false ? 'block' : 'none'}} className={classes.MeaningContainer}>
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
                                <div style={{padding: '25px', paddingTop:'50px', marginTop:'25px'}} className='box_meaningTerm'>
                                    <div style={{textAlign: 'center', marginBottom: mobile?'30px':'50px'}}>
                                        <h3><Skeleton width={100} /></h3>
                                    </div>
                                    <div style={{padding:'10px'}}>
                                        <div className='subtitle_bold'>
                                            <Skeleton  width={skeletonWidth}/>
                                        </div>
                                        <div>
                                            <Skeleton  count={11} />
                                        </div>
                                    </div>
                                </div>
                            </SkeletonTheme>
                                
                            </>
                            :
                            // <></>
                            <Meaning 
                                meaning={meaning}
                                id = {termId}
                                listOfCurrentTraductions = {listOfCurrentTraductions}
                                meaningTranslation = {meaningTranslation}
                                onClick4 = {(meaningTraductionId) => getMeaningTraducion(meaningTraductionId)}
                                searchLanguage = {searchLanguage}
                                isLoadingMeaningTranslation = {isLoadingMeaningTranslation}
                                setIsLoadingMeaningTranslation = {(val) => setIsLoadingMeaningTranslation(val)}
                                mobile = {mobile}
                                setMobileMeaningStyle = {(val) => setMobileMeaningStyle(val)}
                                mobileMeaningStyle = {mobileMeaningStyle}
                                setShareId = {(val1, val2) => {handleShareButton(val1, null)}}
                                skeletonWidth = {skeletonWidth}
                                setSkeletonWidth = {(val) => setSkeletonWidth(val)}
                            />
                           
                        }
                        
                    </div>
            
                </div>
            </div>


            <AppFooter />
        </div>
    );

}