import React, {Component, Fragment} from 'react';

export default class AboutBook extends Component{
    render(){
        return(
            <Fragment>
                <div className='bg_introBookAB'>
                    <div className='container position-relative center-grid'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-6'>
                                <div className='container_AboutBookInfo'>
                                    <div className='body_text pb-4'>
                                        «Accounting A-Z» ist ein zuverlässiger Wegweiser im Dschungel der Finanzsprache. Darin finden sich Übersetzungen für alle geläufigen Begriffe des Rechnungswesens.
                                        Wie übersetzt man «fair value» auf Deutsch? Was heisst «Buchverlust» auf Italienisch? Was bedeutet die Bilanzposition «produits à recevoir» im französischen Abschluss?
                                        Im Glossar ist jeder der über 700 Begriffe unter Bezugnahme auf die Rechnungslegungsvorschriften in Deutschland, der Schweiz und der EU (IFRS) auf Deutsch erklärt.
                                        Was genau ist die sogenannte «Erwerbsmethode» der Kapitalkonsolidierung? Welche Varianten der Erwerbsmethode existieren und wie lauten die entsprechenden Vorschriften der International Financial Reporting Standards, des deutschen Handelsgesetzbuchs und des schweizerischen Obligationenrechts?
                                        Lexikon und Fachwörterbuch, praktisch undhandlich, wird dieses Buch zum nützlichen Begleiter in Handtasche und Aktenkoffer – nicht nur von Finanzfachleuten!
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div className='body_text me-2'>Written by</div>
                                        <a 
                                            href='https://www.schellenberg-consulting.com/' 
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className='link'
                                        >
                                            ALDO SCHELLENBERG
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='container_AboutBookInfo'>
                                    <div className='box_aboutBook'>
                                        <div className='row'>
                                            <div className='col text-center'>
                                                <div className='subtitle_bold primary_dark'>
                                                    Language
                                                </div>
                                                <div className=''>
                                                    <i className='icon-aboutBook icon-language'></i>
                                                </div>
                                                <div className='body_text'>
                                                    German
                                                </div>
                                            </div>
                                            <div className='col text-center'>
                                                <div className='subtitle_bold primary_dark'>
                                                    ISBN-10
                                                </div>
                                                <div className=''>
                                                    <i className='icon-aboutBook icon-barcode'></i>
                                                </div>
                                                <div className='body_text'>
                                                    303909047X
                                                </div>
                                            </div>
                                            <div className='col text-center'>
                                                <div className='subtitle_bold primary_dark '>
                                                    ISBN-30
                                                </div>
                                                <div className=''>
                                                    <i className='icon-aboutBook icon-barcode'></i>
                                                </div>
                                                <div className='body_text'>
                                                    978-3039090471
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}