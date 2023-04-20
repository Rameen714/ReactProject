import React from "react";

function Football(){
    const shoot = () =>{
        alert("great shoot");
    }
    return(
        <button onClick={shoot}>Shoot</button>
    )
}

export default Football;