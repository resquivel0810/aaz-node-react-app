import React, {Component, Fragment} from 'react';
import AboutBook from './AboutBook-Section/AboutBook';
import BuyBook from './AboutBook-Section/BuyBook';
import IntroBook from './AboutBook-Section/IntroBook';


export default class AboutBookPage extends Component{
    render(){
        return(
            <Fragment>
                <IntroBook />
                <AboutBook />
                <BuyBook />
            </Fragment>
        );
    }
}