import React from "react";

class Header_class_component extends React.Component{
    render(){
        return (
            <div>
                <h1 style={{'justify-content': 'center'}}>My WishList App</h1>
                <span style={{'justify-content' : 'right','position' : 'fixed'}}>The date is {Date(Date.now())}</span>
                <p>
                <br></br>
                my argument for property is <b> {this.props.property} </b>
                </p>
            </div>
        )
    }
}

export default Header_class_component;

