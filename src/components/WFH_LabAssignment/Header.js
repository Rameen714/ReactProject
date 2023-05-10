import React from "react";
import './styles.css';
import '../App.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header>
            
            <Link to={"/"} className="logo">MyBlog</Link>

            <nav>
                <Link to={"/signup"}>Signup </Link>
                <Link to={"/login"}>Login </Link>
            </nav>

        </header>
        
        <h4>Welcome to My Blog Website!</h4>
        
        </>
    );
}

export default Header;