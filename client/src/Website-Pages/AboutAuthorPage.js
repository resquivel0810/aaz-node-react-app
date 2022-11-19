import React, {Component, Fragment} from 'react';
import AboutAuthor from './AboutAuthor-Section/AboutAuthor';
import IntroAuthor from './AboutAuthor-Section/IntroAuthor';


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