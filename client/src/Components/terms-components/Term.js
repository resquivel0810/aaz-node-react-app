import React, {Fragment} from 'react';
import WebHeader from '../../WebHeader';
import AppFooter from '../../AppFooter';
import { useEffect, useState } from 'react';

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


export default function Term() {
    const [error, setError] = useState(null);
    const [terms, setTerms] = useState([]);
    let data;

    useEffect(() => {
        fetch('https://sandbox.linarys.com/api/folios?populate=terms&locale=all', { 
            headers, method: 'GET' 
        })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => setTerms(data))
          .catch((error) => setError(error))
        
        
    }, [])
    console.log(terms)
    console.log("*",terms, error, data)
    // console.log("TERMS:" + data)

    return(
        <Fragment>
            <WebHeader />
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col'>
                            <h1>
                                {/* {this.state.term.defaultText} */}
                            </h1>
                            {/* {terms.map(({ id, title }) => <li key={id}>{title}</li>)} */}
                            {/* {terms.map(({ id, title}) => <li key={id}>{id}</li>)}

                            {terms.map((t) => (
                                <li key={t.id}>
                                    {t.id}
                                </li>
                            ))} */}
                            
                            {terms.map(review => (
                                <div key={review.id}>
                                    <div>{review.id}</div>
                                    <div>{review.attributes.Term}</div>
                                    <div>{review.attributes.Text}</div>
                                </div>
                            ))}

                        </div>
                        <div className='col'>
                            ACTIONS
                        </div>
                    </div>

                    <div className='py-4'>
                        LANGUAGES
                    </div>

                    <div className='py-4'>
                    <div>
                        <h2>
                                Term
                        </h2>
                    </div>
                    <div>
                        <div>
                                TEXT
                        </div>
                    </div>
                </div>
                    
            </div>
            <AppFooter />
        </Fragment>
    )

    
}