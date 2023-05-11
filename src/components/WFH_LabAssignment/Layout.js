import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import './assets/style.css';
import './assets/style-2.css';
import './assets/slider.css';
import './assets/responsive.css';
import './assets/FASTlogo.jpg';
import './assets/Footer-Logo.png';
import './assets/NU-logo.jpg';
// import './Contact Us_files/bootstrap.css';
// import './Contact Us_files/bootstrap.min.css';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return(
        <main>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

            <meta name="viewport" content="width=device-width" />
            <title>Contact Us</title>
            
            
            <script async="" src="./Contact Us_files/async-ads.js.download"></script><script type="text/javascript" async="" src="./Contact Us_files/f.txt"></script><script type="text/javascript" src="./Contact Us_files/jquery-latest.min.js.download"></script>
            <link rel="stylesheet" href="./Contact Us_files/bootstrap.min.css" />
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/css" />
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/font-awesome.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/Glyphter.css"/>
            {/* <!-- LIBRARY CSS--> */}
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/animate.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/bootstrap.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/owl.carousel.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/jquery.selectbox.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/mediaelementplayer.min.css"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/color-4.css"/>
            <link href="./Contact Us_files/responsive.css" rel="stylesheet"/>
            <link rel="stylesheet" href="./Contact Us_files/jquery.fancybox.min.css"/>
            <link href="./Contact Us_files/jquery.dataTables.css" rel="stylesheet" type="text/css"/>
            <script src="./Contact Us_files/jquery.dataTables.js.download"></script>
            <script src="./Contact Us_files/moment.min.js.download"></script>
            <script src="./Contact Us_files/datetime-moment.js.download"></script>
            <link href="./Contact Us_files/style2.css" rel="stylesheet"/>
            <link type="text/css" rel="stylesheet" href="./Contact Us_files/slider.css"/>
            {/* <!-- STYLE CSS    --> */}

            <script src="./Contact Us_files/js.cookie.js.download"></script>
            <link href="./Contact Us_files/lightbox.css" rel="stylesheet"/>

        
            <script src="./Contact Us_files/bootstrap.min.js.download"></script>
            <script src="./Contact Us_files/jquery-smoothscroll.js.download"></script>
            <script src="./Contact Us_files/owl.carousel.min.js.download"></script>
            <script src="./Contact Us_files/jquery.appear.js.download"></script>
            <script src="./Contact Us_files/jquery.countTo.js.download"></script>
            <script src="./Contact Us_files/wow.min.js.download"></script>
            <script src="./Contact Us_files/jquery.selectbox-0.2.min.js.download"></script>

            {/* <!-- MAIN JS--> */}
            <script src="./Contact Us_files/main.js.download"></script>
            <script src="./Contact Us_files/jquery.fancybox.min.js.download"></script>
            {/* <!-- LOADING SCRIPTS FOR PAGE--> */}
            <script src="./Contact Us_files/isotope.pkgd.min.js.download"></script>
            <script src="./Contact Us_files/fit-columns.js.download"></script>
            <script src="./Contact Us_files/homepage.js.download"></script>
            <script src="./Contact Us_files/Slider.js.download"></script>
            <script src="./Contact Us_files/gallery.js.download"></script>

            
            <>
                <link
                type="text/css"
                href="./Contact Us_files/default+en.css"
                rel="stylesheet"
                />
                <link
                type="text/css"
                href="./Contact Us_files/default.css"
                rel="stylesheet"
                />
                <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                    ".gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}.gsc-control-cse{border-color:#FFFFFF;background-color:#FFFFFF}input.gsc-input,.gsc-input-box,.gsc-input-box-hover,.gsc-input-box-focus{border-color:#FFFFFF}.gsc-search-button-v2,.gsc-search-button-v2:hover,.gsc-search-button-v2:focus{border-color:#FFFFFF;background-color:#2AACFF;background-image:none;filter:none}.gsc-search-button-v2 svg{fill:#FFFFFF}.gsc-tabHeader.gsc-tabhActive,.gsc-refinementHeader.gsc-refinementhActive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-tabHeader.gsc-tabhInactive,.gsc-refinementHeader.gsc-refinementhInactive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-webResult.gsc-result,.gsc-results .gsc-imageResult{border-color:#FFFFFF;background-color:#FFFFFF}.gsc-webResult.gsc-result:hover{border-color:#0B5394;background-color:#FFFFFF}.gs-webResult.gs-result a.gs-title:link,.gs-webResult.gs-result a.gs-title:link b,.gs-imageResult a.gs-title:link,.gs-imageResult a.gs-title:link b{color:#000000}.gs-webResult.gs-result a.gs-title:visited,.gs-webResult.gs-result a.gs-title:visited b,.gs-imageResult a.gs-title:visited,.gs-imageResult a.gs-title:visited b{color:#1155CC}.gs-webResult.gs-result a.gs-title:hover,.gs-webResult.gs-result a.gs-title:hover b,.gs-imageResult a.gs-title:hover,.gs-imageResult a.gs-title:hover b{color:#1155CC}.gs-webResult.gs-result a.gs-title:active,.gs-webResult.gs-result a.gs-title:active b,.gs-imageResult a.gs-title:active,.gs-imageResult a.gs-title:active b{color:#1155CC}.gsc-cursor-page{color:#000000}a.gsc-trailing-more-results:link{color:#000000}.gs-webResult:not(.gs-no-results-result):not(.gs-error-result) .gs-snippet,.gs-fileFormatType{color:#000000}.gs-webResult div.gs-visibleUrl{color:#0000FF}.gs-webResult div.gs-visibleUrl-short{color:#0000FF}.gsc-cursor-box{border-color:#FFFFFF}.gsc-results .gsc-cursor-box .gsc-cursor-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-webResult.gsc-result.gsc-promotion{border-color:#FFFFFF;background-color:#F6F6F6}.gsc-completion-title{color:#000000}.gsc-completion-snippet{color:#000000}.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion .gs-snippet a:link{color:#000000}.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:visited{color:#1155CC}.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion .gs-snippet a:hover{color:#1155CC}.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion .gs-snippet a:active{color:#1155CC}.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#333333}.gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl-short{color:#0000FF}.gcsc-find-more-on-google{color:#000000}.gcsc-find-more-on-google-magnifier{fill:#000000}"
                }}
                />
                <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                    ".gscb_a{display:inline-block;font:27px/13px arial,sans-serif}.gsst_a .gscb_a{color:#a1b9ed;cursor:pointer}.gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a{color:#36c}.gsst_a{display:inline-block}.gsst_a{cursor:pointer;padding:0 4px}.gsst_a:hover{text-decoration:none!important}.gsst_b{font-size:16px;padding:0 2px;position:relative;user-select:none;-webkit-user-select:none;white-space:nowrap}.gsst_e{vertical-align:middle;opacity:0.55;}.gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e{opacity:0.72;}.gsst_a:active .gsst_e{opacity:1;}.gsst_f{background:white;text-align:left}.gsst_g{background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);margin:-1px -3px;padding:0 6px}.gsst_h{background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px}.gsib_a{width:100%;padding:4px 6px 0}.gsib_a,.gsib_b{vertical-align:top}.gssb_c{border:0;position:absolute;z-index:989}.gssb_e{border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:default}.gssb_f{visibility:hidden;white-space:nowrap}.gssb_k{border:0;display:block;position:absolute;top:0;z-index:988}.gsdd_a{border:none!important}.gsq_a{padding:0}.gssb_a{padding:0 7px}.gssb_a,.gssb_a td{white-space:nowrap;overflow:hidden;line-height:22px}#gssb_b{font-size:11px;color:#36c;text-decoration:none}#gssb_b:hover{font-size:11px;color:#36c;text-decoration:underline}.gssb_g{text-align:center;padding:8px 0 7px;position:relative}.gssb_h{font-size:15px;height:28px;margin:0.2em;-webkit-appearance:button}.gssb_i{background:#eee}.gss_ifl{visibility:hidden;padding-left:5px}.gssb_i .gss_ifl{visibility:visible}a.gssb_j{font-size:13px;color:#36c;text-decoration:none;line-height:100%}a.gssb_j:hover{text-decoration:underline}.gssb_l{height:1px;background-color:#e5e5e5}.gssb_m{color:#000;background:#fff}.gssb_a{padding:0 9px}.gsib_a{padding:5px 9px 4px 9px}.gscb_a{line-height:27px}.gssb_e{border:0}.gssb_l{margin:5px 0}input.gsc-input::-webkit-input-placeholder{font-size:14px}input.gsc-input:-moz-placeholder{font-size:14px}input.gsc-input::-moz-placeholder{font-size:14px}input.gsc-input:-ms-input-placeholder{font-size:14px}input.gsc-input:focus::-webkit-input-placeholder{color:transparent}input.gsc-input:focus:-moz-placeholder{color:transparent}input.gsc-input:focus::-moz-placeholder{color:transparent}input.gsc-input:focus:-ms-input-placeholder{color:transparent}.gssb_c .gsc-completion-container{position:static}.gssb_c{z-index:5000}.gsc-completion-container table{background:transparent;font-size:inherit;font-family:inherit}.gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td{padding:0;margin:0;border:0}.gssb_a table,.gssb_a table tr,.gssb_a table tr td{padding:0;margin:0;border:0}"
                }}
                />
            </>


            </head>

            <Header />
            <p><b>In url write 
                <li> /ContactUs to visit ContactUs Page</li>
                <li> /AdmissionSchedule to visit Admission Schedule Page</li>
            </b></p>
            <Outlet />
            <Footer />
        </main>
    );
}

export default Layout;