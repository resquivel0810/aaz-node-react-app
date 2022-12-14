import React, {useEffect, useState, useRef} from 'react';

import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';

import Terms from './../terms-components/Terms';
import Meaning from './Meaning';
import Input from '../form-components/Input';

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
    const [isLoading, setIsLoading ] = useState(false)
    const [terms, setTerms] = useState([])
    const [error, setError] = useState(null);
    const [currentLetters, setCurrentLetters] = useState(['A','B','C'])
    // const [currentLetter, setCurrentLetter] = useState('a')
    const [displayedLetters, setDisplayedLetters] = useState(false)
    const [meaning, setMeaning] = useState([])

    useEffect(() => {
        let t = window.localStorage.getItem("jwt");
        if(t === null){
            console.log("No access");
            window.location.href = '/'
        }
        fetch('https://sandbox.linarys.com/api/folios?populate=*&locale=de', { 
            headers, method: 'GET' 
        })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => setTerms(data))
          .catch((error) => setError(error))

        fetch(`https://sandbox.linarys.com/api/folios/`+id+`?populate=*`, { 
            headers, method: 'GET' 
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data  => setMeaning({...data.data.attributes}))
            .catch((error) => setError(error))

        
        
    }, [])
    let id = props.match.params.id;
    // console.log(id)

    const getMeaning = (id) => {

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
            // history.push("/home");
            console.log(json, id)
        })
        
    }

    const getTermsWithLetter = (letter) => {
        const requestOptions = {
            method: 'GET', 
      
        }

        fetch(`https://sandbox.linarys.com/api/folios?populate=*&locale=de&filters[title][$startsWith]=`+letter, requestOptions)
        .then((response) => {
            if(response.status !== "200"){
                let err = Error;
                err.Message = "Invalid response code: " + response.status;
            }
            return response.json();
        })
        .then((json) => {
            setTerms(json.data)
        })
    }

    // console.log(meaning)

    const handleChange = e => {
        const  value  = e.target.value;
        setCurrentLetters([value.charAt(0), value.charAt(2), value.charAt(4)]);
        console.log(typeof(value), value)
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

    const wrapperRef= useRef(null);
    useOutsideAlerter(wrapperRef);

    const FilterByLetter = ({currentLetters}) => {

        return (
            <>
            <div>
                <div>
                    <div style={{display:'flex', backgroundColor: '#E1E2E1', width: '200px', padding: '5px 10px', borderRadius: '10px', justifyContent: 'space-between',alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#FDFDFD', padding: '0 10px',borderRadius: '10px'}}>
                            <span>{currentLetters}</span>
                            <button onClick={() => changeDisplayedLetters()} className='none'><i className='icon ms-1 icon-more'></i></button>
                        </div>
                        
                        <div style={{display: 'flex'}}>
                            <button 
                                style={{margin: '5px', height: '15px', width: '15px'}} 
                                className='none'
                                id={Object.values(currentLetters)[0]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[0])}
                            >
                                {Object.values(currentLetters)[0]}
                            </button>
                            <button 
                                style={{margin: '5px', height: '15px', width: '15px'}}  
                                className='none'
                                id={Object.values(currentLetters)[1]} 
                                onClick={() => getTermsWithLetter(Object.values(currentLetters)[1])}
                            >
                                {Object.values(currentLetters)[1]}
                            </button>
                            {/* {Object.values(currentLetters)[2] } */}
                            <button 
                                style={{margin: '5px', height: '15px', width: '15px'}}  
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

    return(
        <>
            <AppHeader />
            <div className='bg_dictionary'>
                <div className='container relative'>
                    <div className='row py-4'>
                        <div className='col'>
                            <FilterByLetter currentLetters={currentLetters}/>
                            <Terms 
                                terms={terms}
                                onClick2={(id) => getMeaning(id)} 
                            />
                        </div>
                        <div className='d-none d-lg-block col'>
                            <Meaning 
                                meaning={meaning}
                                id = {id}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <AppFooter />
        </>
    );

}