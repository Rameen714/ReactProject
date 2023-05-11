import React from "react";

const AdmissionSchedule = () =>{
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
                        backgroundImage: `url(${process.env.PUBLIC_URL}/schedule.jpg)`
                    }}
                    >
                    <div className="container">
                        <div className="page-title-wrapper">
                        {/*.page-title-content*/}
                        <h2 className="captions">Admission Schedule</h2>
                        <ol className="breadcrumb">
                            <li>
                            <a href="https://nu.edu.pk/">Home</a>
                            </li>
                            <li>
                            <a href="https://nu.edu.pk/Admissions">Admissions</a>
                            </li>
                            <li>Admission Schedule</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div className="section section-padding ">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <strong className="pull-right">Updated on: 01-Jul-2022 </strong>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="table-responsive">
                            <table className="edu-table-responsive table-condensed table-bordered table-hover table-striped">
                                <thead className="table-header">
                                <tr className="heading-table">
                                    <th>Tentative Admission Schedule 2022</th>
                                    <th>
                                    <strong>BBA, BS (A&amp;F) &amp; BS</strong>
                                    </th>
                                    <th>
                                    <strong>MBA, MS &amp; PhD</strong>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="table-body">
                                <tr className="table-row">
                                    <td>&nbsp;&nbsp;Admission Application Submission</td>
                                    <td>Jun 3 - Jul 15</td>
                                    <td>Jun 3 - Jul 15</td>
                                </tr>
                                <tr className="table-row">
                                    <td>&nbsp;&nbsp;Admission Tests</td>
                                    <td>Jul 13 - 22</td>
                                    <td>Jul 13 - 22</td>
                                </tr>
                                <tr className="table-row">
                                    <td>
                                    &nbsp;&nbsp;Declaration of selected / test qualified
                                    candidates
                                    </td>
                                    <td>Jul 25</td>
                                    <td>Jul 25</td>
                                </tr>
                                <tr className="table-row">
                                    <td>&nbsp;&nbsp;Interviews</td>
                                    <td>-</td>
                                    <td>Jul 27</td>
                                </tr>
                                <tr className="table-row">
                                    <td>&nbsp;&nbsp;Admission Formalities</td>
                                    <td>Aug 1 - 12</td>
                                    <td>Aug 1 - 12</td>
                                </tr>
                                <tr className="table-row">
                                    <td>&nbsp;&nbsp;Commencement of classes</td>
                                    <td>Aug 15</td>
                                    <td>Aug 15</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* BUTTON BACK TO TOP*/}
            <div id="back-top">
                <a href="https://nu.edu.pk/Admissions/Schedule#top" className="hide">
                <i className="fa fa-angle-double-up" />
                </a>
            </div>
            </div>

        </>
    )
}

export default AdmissionSchedule;