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

            <ul>
                <input type="text"></input>
            </ul>
            
            </>
        )
    }
}

export default List;