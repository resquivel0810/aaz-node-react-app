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
    let data;

    let { id } = useParams();

    console.log('id:'+id);

    useEffect(() => {
        
        fetch(`https://sandbox.linarys.com/api/folios/`+id+`?populate=*`, { 
            headers, method: 'GET' 
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(({ data }) => setTerms(data))
            .catch((error) => setError(error))
    }, [])
    console.log("Meaning",terms, error, data)

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
                                {/* {terms.id} */}
                                {/* {terms.attributes.title} */}
                                Meaning
                            </div>
                            <div>
                                {/* {terms.attributes.terms.data.attributes.definition} */}
                            </div>
                        </div>
                    }
        
                </div>
            </div>
        </Fragment>
    );
}