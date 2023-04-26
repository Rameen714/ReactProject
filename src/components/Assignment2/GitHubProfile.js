import React, { useState } from "react";
import { useFetcher } from "react-router-dom";
import List from "./List";

const GitHubProfile = ({ user }) => {

    const [GitHubData,setData] = useState([]);
    const [GitHubUser,setUser]  = useState("");

    
    
    const fetchData = () =>{
        return fetch(`https://api.github.com/search/users?q=${GitHubUser}`)
        .then(res => res.json())
        .then(data => setData(data.items));
    }

    return (
        <div class="body">
        <div class="box">
            <h1>GitHub Profile</h1>
            <input type="text" value={GitHubUser} onChange={(e) => setUser(e.target.value)} />
            <button onClick={fetchData}>Search</button>
            <List users={GitHubData} />
           
        </div>
        </div>
    );

}

export default GitHubProfile;