import React from "react";
import './assets/style.css';
import './assets/style-2.css';
import './assets/slider.css';
import './assets/responsive.css';
import './assets/FASTlogo.jpg';
import './assets/Footer-Logo.png';
import './assets/NU-logo.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
        <>
            
            <footer id="footer">
            <div className="footer-main">
                <div className="container">
                <div className="footer-main-wrapper">
                    <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12 sd380">
                        <div className="edugate-widget widget">
                        <div className="title-widget">
                            <i className="fa fa-phone" />
                            Contact
                        </div>
                        <div className="content-widget">
                            <div className="row">
                            <div className="col-md-12">
                                
                                <img 
                                className="img-responsive" 
                                style={{ maxWidth: "88%" }} 
                                src={require('./assets/Footer-Logo.png')} 
                                alt="some error"
                                />
                            </div>
                            </div>
                            <div className="row">
                            <div className="info-list">
                                <ul className="col-md-6 col-sm-6 list-unstyled">
                                <li>
                                    <i className="fa fa-phone" />
                                    <a href="https://nu.edu.pk/home/ContactUs#">Contact:</a>
                                </li>
                                <li>
                                    <a className="padding-left-15" href="tel:111128128">
                                    111-128-128
                                    </a>
                                </li>
                                <li className="socials">
                                    <a
                                    className="facebook"
                                    href="https://www.facebook.com/FastUniversityOfficial/"
                                    >
                                    <i className="fa fa-facebook" />
                                    </a>
                                    <a
                                    className="twitter"
                                    href="https://www.twitter.com/FastNuOfficial"
                                    >
                                    <i className="fa fa-twitter" />
                                    </a>
                                    <a
                                    className="insta"
                                    href="https://nu.edu.pk/home/ContactUs#"
                                    >
                                    <i className="fa fa-instagram" />
                                    </a>
                                    <a
                                    className="youtube"
                                    href="https://www.youtube.com/channel/UC0s-RmNrTAizAAJoX7z5e2w"
                                    >
                                    <i className="fa fa-youtube" />
                                    </a>
                                </li>
                                </ul>
                                <ul className="col-md-6 col-sm-6 list-unstyled">
                                <li>
                                    <i className="fa fa-map-marker" />
                                    <a href="https://nu.edu.pk/home/ContactUs#">
                                    Location:
                                    </a>
                                </li>
                                <li>
                                    <p className="padding-left-15">FAST-House</p>
                                    <p className="padding-left-15">Rohtas Road, G-9/4</p>
                                    <p className="padding-left-15">Islamabad - 44000</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="useful-link-widget widget">
                        <div className="title-widget">
                            <i className="fa fa-link" />
                            USEFUL LINKS
                        </div>
                        <div className="content-widget">
                            <div className="useful-link-list">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                <ul className="list-unstyled">
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/Degree-Programs">
                                        Programs
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a target="_blank" href="http://www.peef.org.pk/">
                                        PEEF
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a target="_blank" href="http://mail.nu.edu.pk/">
                                        NU Mail
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/jobs">Careers</a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a target="_blank" href="https://alumni.nu.edu.pk/">
                                        FAST Connect &nbsp;(For Alumni)
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a
                                        target="_blank"
                                        href="https://alumni.nu.edu.pk/Faculty"
                                    >
                                        FAST Connect &nbsp;(For Faculty)
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a target="_blank" href="http://www.osaf.org.pk/">
                                        OSAF
                                    </a>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                <ul className="list-unstyled">
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/dv">Degree Verification</a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a
                                        target="_blank"
                                        href="http://www.slate.nu.edu.pk/portal"
                                    >
                                        SLATE-LMS
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/ORIC">ORIC</a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/QEC">QEC</a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a href="https://nu.edu.pk/Home/ContactUs">
                                        Contact Us
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a
                                        target="_blank"
                                        href="https://nu.insigniails.com/Library/Home"
                                    >
                                        FAST-NU Library
                                    </a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-right" />
                                    <a target="_blank" href="https://cpec-centre.pk/">
                                        CoE-CPEC
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="useful-link-widget widget">
                        <div className="content-widget">
                            <div className="useful-link-list">
                            <div className="title-widget">
                                <i className="fa fa-university" />
                                Campuses
                            </div>
                            <ul className="list-unstyled">
                                <li>
                                <i className="fa fa-angle-right" />
                                <a href="http://cfd.nu.edu.pk/" target="_blank">
                                    Chiniot-Faisalabad Campus
                                </a>
                                </li>
                                <li>
                                <i className="fa fa-angle-right" />
                                <a href="http://isb.nu.edu.pk/" target="_blank">
                                    Islamabad Campus
                                </a>
                                </li>
                                <li>
                                <i className="fa fa-angle-right" />
                                <a href="http://khi.nu.edu.pk/" target="_blank">
                                    Karachi Campus
                                </a>
                                </li>
                                <li>
                                <i className="fa fa-angle-right" />
                                <a href="http://lhr.nu.edu.pk/" target="_blank">
                                    Lahore Campus
                                </a>
                                </li>
                                <li>
                                <i className="fa fa-angle-right" />
                                <a href="http://pwr.nu.edu.pk/" target="_blank">
                                    Peshawar Campus
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="hyperlink">
                    <div className="text-center">
                        Copyright © 2023 , NUCES. All Rights Reserved.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>


        </>
    );
}

export default Footer;