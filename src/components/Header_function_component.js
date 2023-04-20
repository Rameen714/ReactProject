import React from "react";

var Header_function_component = () => 
{
        return (
            <div>
                <h1 style={{'justify-content': 'center'}}>My WishList App</h1>
                <span style={{'justify-content' : 'right','position' : 'fixed'}}>The date is {Date(Date.now())}</span>
                <p>
                    <br></br>
                    my argument for property is 
                </p>
            </div>
        )
}

export default Header_function_component;

