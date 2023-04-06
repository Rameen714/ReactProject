import React from "react";
import Car from './Car';
function Header_function_component(props) 
{
        return (
            <div>
                <h1 style={{'justify-content': 'center'}}>My WishList App</h1>
                <span style={{'justify-content' : 'right','position' : 'fixed'}}>The date is {Date(Date.now())}</span>
                <p>
                    <br></br>
                    my argument for property is <b> {props.property} </b>
                    <br></br>
                    <Car/>
                </p>
            </div>
        )
}

export default Header_function_component; 

