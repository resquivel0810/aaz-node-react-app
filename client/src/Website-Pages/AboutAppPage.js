import React, {Component, Fragment} from 'react';
import IntroApp from './AboutApp-Sections/IntroApp';
import CreateAccount from './AboutApp-Sections/CreateAccount';
import DigitalBook from './AboutApp-Sections/DigitalBook';
import PWA from './AboutApp-Sections/PWA';

export default class AboutAppPage extends Component{
    render(){
        return(
            <Fragment>
                <IntroApp />
                <CreateAccount />
                <DigitalBook />
                <PWA />
            </Fragment>
        );
    }
}