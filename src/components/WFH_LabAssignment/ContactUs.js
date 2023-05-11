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

const ContactUs = () => {
    return(
      <>
         


          <div id="wrapper-content">
          {/* PAGE WRAPPER*/}
          <div id="page-wrapper">
            {/* MAIN CONTENT*/}
            <div className="main-content">
              {/* CONTENT*/}
              <div className="content">
                <div
                  className="section background-opacity page-title set-height-top"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/ContactUs.jpg)`,
                  }}
                >
                  <div className="container">
                    <div className="page-title-wrapper">
                      {/*.page-title-content*/}
                      <h2 className="captions">Contact Us</h2>
                      <ol className="breadcrumb">
                        <li>
                          {" "}
                          <a href="https://nu.edu.pk/">Home</a>
                        </li>
                        <li>
                          {" "}
                          <a href="https://nu.edu.pk/">home</a>
                        </li>
                        <li>Contact Us</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <br />
                <div className="section section-padding contact-main">
                  <div className="container">
                    <div className="contact-main-wrapper">
                      <div className="row contact-method section-padding">
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Islamabad Campus</h4>
                            <div className="detail">
                              <p>A.K. Brohi Road, H-11/4</p>
                              <p>
                                Tel: 111 128 128 <b>or</b> (051) 831 4100-29
                              </p>
                              <p>Fax: (051) 410 0619</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Lahore Campus</h4>
                            <div className="detail">
                              <p>Block-B, Faisal Town</p>
                              <p>
                                Tel: 111 128 128<b> or </b>(042) 516 5680-83
                              </p>
                              <p>Fax: (042) 516 5232</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Karachi City Campus</h4>
                            <div className="detail">
                              <p>22-G, Block-6,</p>
                              <p>PECHS, Karachi.</p>
                              <p>Tel: (021) 343 90941-5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row contact-method">
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Karachi Main Campus</h4>
                            <div className="detail">
                              <p>Shah Latif Town (on National Highway)</p>
                              <p>
                                Tel: 111 128 128 <b>or</b> (021) 341 00541-6
                              </p>
                              <p>Fax: (021) 341 00549</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Peshawar Campus</h4>
                            <div className="detail">
                              <p>160, Industrial Estate, Jamrud Road</p>
                              <p>
                                03341128128 <b>or</b> 03351128128 <b>or</b> 03361128128.
                              </p>
                              <p>Fax: (091) 582 2320</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>Chiniot - Faislabad Campus</h4>
                            <div className="detail">
                              <p>Loonaywala Stop (9 Km from Motorway Interchange)</p>
                              <p>Faisalabad-Chiniot Road</p>
                              <p>Tel: (041) 111-128-128</p>
                              <p>Fax: (041) 260 7272</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row contact-method">
                        <div className="col-md-4">
                          <div className="method-item">
                            <i className="fa fa-map-marker" />
                            <h4>University Headoffice</h4>
                            <div className="detail">
                              <p>FAST House, Rohtas Road, G-9/4</p>
                              <p>Islamabad Pakistan</p>
                              <p>Tel: (051) 2855072-4</p>
                              <p>Fax: (051) 2855070</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-title-index">
                      <h2 className="center-title underline">Extension Numbers</h2>
                    </div>
                    <p>Dial 111 128 128 and then enter the desired extension:</p>
                    <table className="edu-table-responsive table-condensed table-bordered table-hover table-striped">
                      <thead>
                        <tr className="heading-table">
                          <th />
                          <th>Karachi</th>
                          <th>Lahore</th>
                          <th>Islamabad</th>
                          <th>Peshawar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Director</td>
                          <td>ext: 213</td>
                          <td>ext: 227</td>
                          <td>ext: 101</td>
                          <td>ext: 102</td>
                        </tr>
                        <tr>
                          <td>Accounts</td>
                          <td>ext: 216</td>
                          <td>ext: 209</td>
                          <td>ext: 226</td>
                          <td>ext: 117</td>
                        </tr>
                        <tr>
                          <td>Academics</td>
                          <td>ext: 264</td>
                          <td>ext: 289/233</td>
                          <td>ext: 623/119/137/218</td>
                          <td>ext: 108</td>
                        </tr>
                        <tr>
                          <td>Computer Lab</td>
                          <td>ext 100</td>
                          <td>ext: 215</td>
                          <td>ext: 214</td>
                          <td>ext:120</td>
                        </tr>
                        <tr>
                          <td>Library</td>
                          <td>ext: 223</td>
                          <td>ext: 210</td>
                          <td>ext: 231/232</td>
                          <td>ext: 119</td>
                        </tr>
                        <tr>
                          <td>Admissions Inquiry</td>
                          <td>ext: 267/276</td>
                          <td>dial 1{/*ext: 467/468/469/470/471/472*/}</td>
                          <td>ext: 134/259/359</td>
                          <td>ext: 155</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="group-title-index">
                      <h2 className="center-title underline">
                        Admission related queries
                      </h2>
                    </div>
                    <div className="ContentStyle">
                      <div className="span9">
                        <table className="span4 NoMargin table-condensed">
                          <tbody>
                            <tr>
                              <td>For Chiniot-Faisalablad campus :</td>
                              <td>
                                <a href="mailto:admissions.cfd@nu.edu.pk">
                                  admissions.cfd@nu.edu.pk
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>For Islamabad campus :</td>
                              <td>
                                <a href="mailto:admissions.isb@nu.edu.pk">
                                  admissions.isb@nu.edu.pk
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>For Karachi campus :</td>
                              <td>
                                <a href="mailto:admissions.khi@nu.edu.pk">
                                  admissions.khi@nu.edu.pk
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>For Lahore campus :</td>
                              <td>
                                <a href="mailto:admissions.lhr@nu.edu.pk">
                                  admissions.lhr@nu.edu.pk
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>For Peshawar campus :</td>
                              <td>
                                <a href="mailto:admissions.pwr@nu.edu.pk">
                                  admissions.pwr@nu.edu.pk
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          {/* BUTTON BACK TO TOP*/}
          <div id="back-top">
            <a href="https://nu.edu.pk/home/ContactUs#top" className="hide">
              <i className="fa fa-angle-double-up" />
            </a>
          </div>
        </div>



      </>
    );
}

export default ContactUs;