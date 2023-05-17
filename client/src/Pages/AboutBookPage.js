import React, {Component, Fragment} from 'react';
import AboutBook from '../Components/AboutBook';
import BuyBook from '../Components/BuyBook';
import IntroBook from '../Components/IntroBook';


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