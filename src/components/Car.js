import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            brand : "Ford",
            year: 1984,
            model: "Mustang",
            color: "red"
        };
        
    }
    changecolor = () => {
        if(this.state.color == "red")
            this.setState({color:"blue"}) ;
        else
            this.setState({color:"red"}) ;
    }
    render(){
        return(
            <>
             Helio I am {this.state.color} {this.state.brand} {this.state.model} of year {this.state.year}.
             <button onClick={this.changecolor}>Change Color</button>
            </>
        )
    }
}

export default Car;