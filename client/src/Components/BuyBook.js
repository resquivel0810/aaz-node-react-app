import React, {Component, Fragment} from 'react';
import backgroundImage from '../Images/AAZ-DesktopBackNude.png';
import logoversus from '../Images/logo-versus-white.gif';
export default class BuyBook extends Component{
    render(){
        return(
            <Fragment>
                <img src={backgroundImage} alt="" className="img_bg_buyBookAB" />
                <div className='bg_buyBookAB'>
                    <div className='container position-relative center-grid'>
                        <div className='pb-4'>
                            <h3>Where to find the book?</h3>
                        </div>
                        <div className='pt-4'>
                            <div className='box_buyBook'>
                                <img src={logoversus} alt="" className="img_book_buy_AB mb-2" />
                                <div>
                                    <a className='link' href='https://www.versus.ch/titelanzeige/158/Accounting%20A–Z.%20Rechnungswesen,%20Comptabilité,%20Contabilità' target="__blank">
                                        Versus verlag
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}