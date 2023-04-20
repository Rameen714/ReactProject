import React, { useState } from "react";

class List extends React.Component
{
    list = [];
    curr_item="";
    constructor()
    {
        super();
        this.state = {myList:this.list};
        this.lref = React.createRef();
    }
    render(){   

        return (
            <>
            
            <input type="text" onChange={this.add}></input>
            
            <ul>
            
                {this.list.map((item)=>(<li>{item}</li>))}
            </ul>
            
            </>
        )
    }
    add = (event) => {
        this.curr_item = event.target.value;
        this.list.push(this.curr_item);
        this.setState({myList:this.list});

    }
}

export default List;