import React, {Component, Fragment} from 'react';

import Intro from "./HomePage-Sections/Intro";
// import AppResume from "./HomePage-Sections/AppResume";
import Benefits from './HomePage-Sections/Benefits';
import AboutAuthor from "./HomePage-Sections/AboutAuthor";
import Comments from './HomePage-Sections/Comments';
import Register from './HomePage-Sections/Register';


export default class HomePage extends Component{
    render(){
        return(
            <Fragment>
                <Intro />
                {/* <AppResume /> */}
                <Benefits />
                <AboutAuthor />
                <Comments />
                <Register />
            </Fragment>
        );
    }
}