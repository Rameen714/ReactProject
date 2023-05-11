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

const Header = () =>{
    return(
        <>
    


        
        <header>
            {/* Hello world */}
            <div className="header-main homepage-01">
                <div className="container">
                <div className="header-main-wrapper" style={{display:"flex", flexDirection: "column"}}>
                    <div className="navbar-header" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div className="logo pull-left"style={{justifyContent:"left"}}>
                        <a href="/" className="header-logo" >
                        <img 
                        src={require('./assets/Footer-Logo.png')} />
                        </a>
                    </div>
                    <div className="pull-right" style={{justifyContent: "center"}}>
                        <button
                        type="button"
                        data-toggle="collapse"
                        data-target=".navigation"
                        className="navbar-toggle edugate-navbar"
                        >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="logo pull-right"style={{justifyContent:"right"}}>
                        <a href="/" className="header-logo">
                        <img 
                        src={require('./assets/FASTlogo.jpg')} />
                        </a>
                    </div>
                    </div>
                    <nav 
                    className="navigation collapse navbar-collapse ">
                        yo yo
                    <ul className="nav-links nav navbar-nav swedugate-menu">
                        <li className="menu-item">
                        <a href="/Home" className="main-menu">
                            Home
                        </a>
                        </li>
                        <li className="dropdown menu-item active">
                        <a href="#" className="main-menu">
                            Admissions
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a href="/Degree-Programs" className="link-page">
                                Offered Programs
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/Schedule" className="link-page">
                                Admission Schedule
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/HowToApply" className="link-page">
                                How To Apply
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                href="/Admissions/EligibilityCriteria"
                                className="link-page"
                            >
                                Eligibility Criteria
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/Scholarship" className="link-page">
                                Loans/Scholarships
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/TestPattren" className="link-page">
                                Test Pattern
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/FeeStructure" className="link-page">
                                Fee Structure
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Admissions/Prospectus" className="link-page">
                                Prospectus 2022
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            Campuses
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Chiniot-Faisalabad Campus
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="http://cfd.nu.edu.pk" className="link-page">
                                    Home
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://cfd.nu.edu.pk/all-departments"
                                    className="link-page"
                                >
                                    Faculty &amp; Staff
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/PhdSupervisors"
                                    className="link-page"
                                >
                                    PhD Supervisors
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/Events"
                                    className="link-page"
                                >
                                    Events
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/MedalHolders"
                                    className="link-page"
                                >
                                    Medal Holders
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/RectorLists"
                                    className="link-page"
                                >
                                    Rector's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/DeanLists"
                                    className="link-page"
                                >
                                    Dean's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Chiniot-Faisalabad/ScholarshipAwardees"
                                    className="link-page"
                                >
                                    Scholarship Awardees
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Electrical Engineering"
                                    className="link-page"
                                >
                                    EE Department (Mission Vision)
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="http://isb.nu.edu.pk" className="link-page">
                                Islamabad Campus
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="http://isb.nu.edu.pk" className="link-page">
                                    Home
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://isb.nu.edu.pk/Faculty/allfaculty"
                                    className="link-page"
                                >
                                    Faculty &amp; Staff
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/PhdSupervisors"
                                    className="link-page"
                                >
                                    PhD Supervisors
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://isb.nu.edu.pk/Media/NewsList"
                                    className="link-page"
                                >
                                    Events
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/Research"
                                    className="link-page"
                                >
                                    Research
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/MedalHolders"
                                    className="link-page"
                                >
                                    Medal Holders
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/RectorLists"
                                    className="link-page"
                                >
                                    Rector's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/DeanLists"
                                    className="link-page"
                                >
                                    Dean's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Islamabad/ScholarshipAwardees"
                                    className="link-page"
                                >
                                    Scholarship Awardees
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Electrical Engineering"
                                    className="link-page"
                                >
                                    EE Department (Mission Vision)
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Karachi Campus
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="http://khi.nu.edu.pk" className="link-page">
                                    Home
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="https://khi.nu.edu.pk/Faculty.php"
                                    className="link-page"
                                >
                                    Faculty &amp; Staff
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Karachi/PhdSupervisors"
                                    className="link-page"
                                >
                                    PhD Supervisors
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://khi.nu.edu.pk/events.php"
                                    className="link-page"
                                >
                                    Events
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Campus/Karachi/Research" className="link-page">
                                    Research
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Karachi/MedalHolders"
                                    className="link-page"
                                >
                                    Medal Holders
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Karachi/RectorLists"
                                    className="link-page"
                                >
                                    Rector's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Campus/Karachi/DeanLists" className="link-page">
                                    Dean's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Karachi/ScholarshipAwardees"
                                    className="link-page"
                                >
                                    Scholarship Awardees
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Electrical Engineering"
                                    className="link-page"
                                >
                                    EE Department (Mission Vision)
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Lahore Campus
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="http://lhr.nu.edu.pk" className="link-page">
                                    Home
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://lhr.nu.edu.pk/faculty/"
                                    className="link-page"
                                >
                                    Faculty &amp; Staff
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Lahore/PhdSupervisors"
                                    className="link-page"
                                >
                                    PhD Supervisors
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="http://lhr.nu.edu.pk/news" className="link-page">
                                    Events
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Campus/Lahore/Research" className="link-page">
                                    Research
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Lahore/MedalHolders"
                                    className="link-page"
                                >
                                    Medal Holders
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Lahore/RectorLists"
                                    className="link-page"
                                >
                                    Rector's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Campus/Lahore/DeanLists" className="link-page">
                                    Dean's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Lahore/ScholarshipAwardees"
                                    className="link-page"
                                >
                                    Scholarship Awardees
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Civil Engineering"
                                    className="link-page"
                                >
                                    Civil Engg. Department (Mission Vision)
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Electrical Engineering"
                                    className="link-page"
                                >
                                    EE Department (Mission Vision)
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Peshawar Campus
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="http://pwr.nu.edu.pk" className="link-page">
                                    Home
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://pwr.nu.edu.pk/cs-faculty/"
                                    className="link-page"
                                >
                                    Faculty &amp; Staff
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Peshawar/PhdSupervisors"
                                    className="link-page"
                                >
                                    PhD Supervisors
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="http://pwr.nu.edu.pk/latest-news"
                                    className="link-page"
                                >
                                    Events
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Campus/Peshawar/Research" className="link-page">
                                    Research
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Peshawar/MedalHolders"
                                    className="link-page"
                                >
                                    Medal Holders
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Peshawar/RectorLists"
                                    className="link-page"
                                >
                                    Rector's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Peshawar/DeanLists"
                                    className="link-page"
                                >
                                    Dean's List
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Campus/Peshawar/ScholarshipAwardees"
                                    className="link-page"
                                >
                                    Scholarship Awardees
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/campus/missionvision/Electrical Engineering"
                                    className="link-page"
                                >
                                    EE Department (Mission Vision)
                                </a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            Students
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a href="/Student/dvp" className="link-page">
                                Degree Verification Program
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/Calender" className="link-page">
                                Academic Calendar
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/Conduct" className="link-page">
                                Code of Conduct
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/Grading" className="link-page">
                                Grading
                            </a>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Student Chapters
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a
                                    href="http://www.sites.ieee.org/sb-nuces-karachi/"
                                    className="link-page"
                                >
                                    IEEE-NUCES
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="http://www.nuces-acm.org/" className="link-page">
                                    NUCES-ACM
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Rules &amp; Regulations
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="/Student/RulesUndergrad" className="link-page">
                                    Bachelor Programs
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Student/Rulesphd" className="link-page">
                                    PhD Programs
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/HECEquivalence" className="link-page">
                                Equivalence by HEC
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                href="http://flexstudent.nu.edu.pk/Login"
                                className="link-page"
                            >
                                Flex Student Module
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/PhdGraduates" className="link-page">
                                Phd Graduates
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Student/FinancialRules" className="link-page">
                                Financial Rules
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            University
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a href="/University/History" className="link-page">
                                History
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Foundation" className="link-page">
                                Foundation
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Chancellor" className="link-page">
                                Chancellor
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/vision-and-mission" className="link-page">
                                Vision &amp; Mission Statement
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Trustees" className="link-page">
                                Board of Trustees
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Governers" className="link-page">
                                Board of Governors
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Officers" className="link-page">
                                Officers of the University
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Headquarters" className="link-page">
                                Headquarter
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/PhDFaculty" className="link-page">
                                PhD Faculty
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/HECSupervisors" className="link-page">
                                HEC Approved PhD Supervisor
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                href="/University/ExternalThesisReviewer"
                                className="link-page"
                            >
                                PhD Thesis Reviewers
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            Services
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a
                                target="_blank"
                                href="https://nu.insigniails.com/Library/Home"
                                className="link-page"
                            >
                                FAST-NU Library
                            </a>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Alumni
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="https://alumni.nu.edu.pk/" className="link-page">
                                    FAST Connect (For Alumni)
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="https://alumni.nu.edu.pk/Faculty"
                                    className="link-page"
                                >
                                    FAST Connect (For Faculty)
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="Http://www.osaf.org.pk" className="link-page">
                                    OSAF
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <a
                                target="_blank"
                                href="http://nu.edu.pk/NUJobs"
                                className="link-page"
                            >
                                Job Portal
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                target="_blank"
                                href="http://mail.nu.edu.pk"
                                className="link-page"
                            >
                                NU Mail
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                target="_blank"
                                href="http://slate.nu.edu.pk"
                                className="link-page"
                            >
                                SLATE-LMS
                            </a>
                            </li>
                            <li className="menu-item">
                            <a
                                target="_blank"
                                href="/Services/PlacementOffice"
                                className="link-page"
                            >
                                Career Services Office
                            </a>
                            </li>
                            <li className="menu-item">
                            <a target="_blank" href="/Services/PIO" className="link-page">
                                Public Information Officer
                            </a>
                            </li>
                            <li className="menu-item">
                            <a target="_blank" href="/Downloads" className="link-page">
                                Downloads
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            ORIC
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a href="/Oric" className="link-page">
                                Home
                            </a>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Research
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a
                                    href="/Oric/FundingOppertunities"
                                    className="link-page"
                                >
                                    Funding Opportunities
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Oric/FundedProjects" className="link-page">
                                    Funded Projects
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Oric/ResearchLabs" className="link-page">
                                    Research Labs
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Capacity Building
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="/Oric/CapacityBuilding" className="link-page">
                                    Conference/Seminar
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Oric/TravelGrants" className="link-page">
                                    Travel Grants
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Innovation &amp; Commercialization
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="/Oric/Entreprenures" className="link-page">
                                    Entrepreneurs
                                </a>
                                </li>
                                <li className="menu-item">
                                <a
                                    href="/Oric/IncubationFacilities"
                                    className="link-page"
                                >
                                    Incubation Facilities
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/Oric/Patent" className="link-page">
                                    Patent
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <a href="/Oric/Policies" className="link-page">
                                Policies
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Oric/Annoucements" className="link-page">
                                Announcements
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Oric/Scholarship" className="link-page">
                                Scholarships
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/Oric/Photogallery" className="link-page">
                                Photo Gallery
                            </a>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Downloads
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a
                                    href="/Oric/GrantAppForm/Research"
                                    className="link-page"
                                >
                                    Forms
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <a href="/Oric/Team" className="link-page">
                                Team
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown menu-item">
                        <a href="#" className="main-menu">
                            QEC
                            <i className="fa fa-angle-down arrow-open-dropdown" />
                        </a>
                        <ul className="dropdown-menu edugate-dropdown-menu-1">
                            <li className="menu-item">
                            <a href="/QEC" className="link-page">
                                Home
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/QEC/Team" className="link-page">
                                Team
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/QEC/Accreditation" className="link-page">
                                Accreditation
                            </a>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Self Assessment
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="/QEC/Evaluators" className="link-page">
                                    Team
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/SelfAssesment" className="link-page">
                                    Status
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown menu-item dropdown-submenu">
                            <a href="#" className="link-page">
                                Capacity Building
                                <i className="fa fa-angle-right arrow-open-dropdown" />
                            </a>
                            <ul className="dropdown-menu edugate-dropdown-menu-2">
                                <li className="menu-item">
                                <a href="/QEC/Contribution" className="link-page">
                                    Contribution
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/Participation" className="link-page">
                                    Participation
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/FacultyTraining" className="link-page">
                                    Faculty Training
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/Meetings" className="link-page">
                                    QEC Meetings
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/AnnualCalendar" className="link-page">
                                    Annual Activity Calendar
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="/QEC/BuildingCalendar" className="link-page">
                                    Capacity Building Calendar
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <a href="/QEC/Publications" className="link-page">
                                Publications
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/QEC/PhotoGallery" className="link-page">
                                Photo Gallery
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/QEC/Downloads" className="link-page">
                                Downloads
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="/University/Membership" className="link-page">
                                NU Membership
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="menu-item">
                        <a href="/home/ContactUs" className="main-menu">
                            Contact Us
                        </a>
                        </li>
                        <li className="menu-item">
                        <a href="/Career" className="main-menu">
                            Career
                        </a>
                        </li>
                    </ul>
                    <div className="button-search">
                        <p className="main-menu">
                        <i className="fa fa-search" />
                        </p>
                    </div>
                    <div className="nav-search hide">
                        <div id="___gcse_0">
                        <div className="gsc-control-cse gsc-control-cse-en">
                            <div className="gsc-control-wrapper-cse" dir="ltr">
                            <form
                                className="gsc-search-box gsc-search-box-tools"
                                acceptCharset="utf-8"
                            >
                                <table
                                cellSpacing={0}
                                cellPadding={0}
                                role="presentation"
                                className="gsc-search-box"
                                >
                                <tbody>
                                    <tr>
                                    <td className="gsc-input">
                                        <div className="gsc-input-box" id="gsc-iw-id1">
                                        <table
                                            cellSpacing={0}
                                            cellPadding={0}
                                            role="presentation"
                                            id="gs_id50"
                                            className="gstl_50 gsc-input"
                                            style={{ width: "100%", padding: 0 }}
                                        >
                                            <tbody>
                                            <tr>
                                                <td id="gs_tti50" className="gsib_a">
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    size={10}
                                                    className="gsc-input"
                                                    name="search"
                                                    title="search"
                                                    aria-label="search"
                                                    id="gsc-i-id1"
                                                    dir="ltr"
                                                    spellCheck="false"
                                                    style={{
                                                    width: "100%",
                                                    padding: 0,
                                                    border: "none",
                                                    margin: 0,
                                                    height: "auto",
                                                    background:
                                                        'url("https://www.google.com/cse/static/images/1x/en/branding.png") left center no-repeat rgb(255, 255, 255)',
                                                    outline: "none"
                                                    }}
                                                />
                                                </td>
                                                <td className="gsib_b">
                                                <div
                                                    className="gsst_b"
                                                    id="gs_st50"
                                                    dir="ltr"
                                                >
                                                    <a
                                                    className="gsst_a"
                                                    href="javascript:void(0)"
                                                    title="Clear search box"
                                                    role="button"
                                                    style={{ display: "none" }}
                                                    >
                                                    <span
                                                        className="gscb_a"
                                                        id="gs_cb50"
                                                        aria-hidden="true"
                                                    >
                                                        ×
                                                    </span>
                                                    </a>
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </td>
                                    <td className="gsc-search-button">
                                        <button className="gsc-search-button gsc-search-button-v2">
                                        <svg width={13} height={13} viewBox="0 0 13 13">
                                            <title>search</title>
                                            <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" />
                                        </svg>
                                        </button>
                                    </td>
                                    <td className="gsc-clear-button">
                                        <div
                                        className="gsc-clear-button"
                                        title="clear results"
                                        >
                                        &nbsp;
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </form>
                            <div className="gsc-results-wrapper-overlay">
                                <div className="gsc-results-close-btn" tabIndex={0} />
                                <div className="gsc-positioningWrapper">
                                <div className="gsc-tabsAreaInvisible">
                                    <div
                                    aria-label="refinement"
                                    role="tab"
                                    className="gsc-tabHeader gsc-inline-block gsc-tabhActive"
                                    >
                                    Custom Search
                                    </div>
                                    <span className="gs-spacer"> </span>
                                </div>
                                </div>
                                <div className="gsc-positioningWrapper">
                                <div className="gsc-refinementsAreaInvisible" />
                                </div>
                                <div className="gsc-above-wrapper-area-invisible">
                                <div className="gsc-above-wrapper-area-backfill-container" />
                                <table
                                    cellSpacing={0}
                                    cellPadding={0}
                                    role="presentation"
                                    className="gsc-above-wrapper-area-container"
                                >
                                    <tbody>
                                    <tr>
                                        <td className="gsc-result-info-container">
                                        <div className="gsc-result-info-invisible" />
                                        </td>
                                        <td className="gsc-orderby-container">
                                        <div className="gsc-orderby-invisible">
                                            <div className="gsc-orderby-label gsc-inline-block">
                                            Sort by:
                                            </div>
                                            <div className="gsc-option-menu-container gsc-inline-block">
                                            <div className="gsc-selected-option-container gsc-inline-block">
                                                <div className="gsc-selected-option">
                                                Relevance
                                                </div>
                                                <div className="gsc-option-selector" />
                                            </div>
                                            <div className="gsc-option-menu-invisible">
                                                <div className="gsc-option-menu-item gsc-option-menu-item-highlighted">
                                                <div className="gsc-option">
                                                    Relevance
                                                </div>
                                                </div>
                                                <div className="gsc-option-menu-item">
                                                <div className="gsc-option">Date</div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="gsc-adBlockInvisible" />
                                <div className="gsc-wrapper">
                                <div className="gsc-adBlockInvisible" />
                                <div className="gsc-resultsbox-invisible">
                                    <div className="gsc-resultsRoot gsc-tabData gsc-tabdActive">
                                    <div>
                                        <div className="gsc-expansionArea" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="gsc-modal-background-image" tabIndex={0} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
                </div>
            </div>

        </header>
        
        
        </>
    );
}

export default Header;