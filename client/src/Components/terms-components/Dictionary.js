import React, {Component, Fragment} from 'react';

import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';

import Terms from './../terms-components/Terms';
import Meaning from './Meaning';

export default class Dictionary extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            errors: [],
            alert: {
                type:"d-none",
                message: "",
            }
        }

    };
    hasError(key){
        return this.state.errors.indexOf(key) !== -1;
    }
    componentDidMount(){
        let t = window.localStorage.getItem("jwt");
        if(t === null){
            console.log("No access");
            window.location.href = '/'
        }
    };
    

    render(){
        let id = this.props.match.params.id;

        return(
            <Fragment>
                <AppHeader />
                <div className='bg_dictionary'>
                    <div className='container relative'>
                        <div className='row py-4'>
                            <div className='col'>
                                <Terms />
                            </div>
                            <div className='d-none d-lg-block col'>
                                <Meaning 
                                    id = {id}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <AppFooter />
            </Fragment>
        );
    }
}