import React, {Component, Fragment} from 'react';
import AppHeader from './../AppHeader';
import AppFooter from './../AppFooter';


// import Search from '../ui-components/Search';

export default class Test extends Component{

    state = { 
        term: {}, 
        isLoaded: false,
        error: null,
    };

    componentDidMount(){
        // this.setState({term: {
        //     id: this.props.match.params.id,
        //     defaultText: "Accounts Payable",
        // }})

        

        fetch('http://localhost:1337/api/terms/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            // .then(response => response.json())
            .then((response) =>{
                    console.log("Status code is", response.status);
                    if(response.status !== "200"){
                        let err = Error;
                        err.message = "Invalid response code: " + response.status;
                        this.setState({error: err});
                    }
                    return response.json();
                })
            .then(data => console.log(data))
           
            .then((data) =>{
                this.setState({
                    term: data,
                    isLoaded: true,
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                );
            });
             

           

        // fetch("http://localhost:1337/api/terms/" + this.props.match.params.id)
        //     // .then((response) => response.json())
            // .then((response) =>{
            //     console.log("Status code is", response.status);
            //     if(response.status !== "200"){
            //         let err = Error;
            //         err.message = "Invalid response code: " + response.status;
            //         this.setState({error: err});
            //     }
            //     return response.json();
            // })
            // .then((json) =>{
            //     this.setState({
            //         term: json.term,
            //         isLoaded: true,
            //     },
            //     (error) => {
            //         this.setState({
            //             isLoaded: true,
            //             error
            //         });
            //     }
            //     );
            // });
            // console.log(this.state.term);
    }

    render(){
        const {term, isLoaded, error, data} = this.state;
        

        return(
            <Fragment>
                <AppHeader />
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col'>
                            <h1>
                                {/* {this.state.term.defaultText} */}
                                {data}
                            </h1>
                            {/* {terms.map(({ id, title }) => <li key={id}>{title}</li>)} */}

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
        );
    }
}