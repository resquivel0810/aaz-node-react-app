import React, {Component, Fragment} from 'react';
import AboutAuthor from '../Components/AboutAuthor';
import IntroAuthor from '../Components/IntroAuthor';


export default class AboutAuthorPage extends Component{
    render(){
        return(
            <Fragment>
                <IntroAuthor />
                <AboutAuthor />
            </Fragment>
        );
    }
}