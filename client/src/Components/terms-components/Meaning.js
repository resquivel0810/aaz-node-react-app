import React, {Fragment} from 'react';
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


export default function Meaning(props) {
    
    const [error, setError] = useState(null);
    const [terms, setTerms] = useState([]);
    

    let { id } = useParams();



    useEffect(() => {
        
        fetch(`https://sandbox.linarys.com/api/folios/`+id+`?populate=*`, { 
            headers, method: 'GET' 
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data  => setTerms({...data.data.attributes}))
            .catch((error) => setError(error))
    }, [])
   
    console.log({...terms.localizations})


    return(
        <Fragment>
            <div className=''>
                <div className='box_meaningTerm'>
            
                    {id == 0 &&
                        <div className='subtitle_bold'>
                            Choose one
                        </div>
                    }
                    
                    {id > 0 &&
                        <div>
                            <div className='subtitle_bold'>
                                {terms.title}
                                
                            </div>
                            <div>
                                {{...{...{...{...terms.terms}.data}[0]}.attributes}.definition}
                            </div>
                        </div>
                    }
        
                </div>
            </div>
        </Fragment>
    );
}