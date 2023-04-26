import React  from "react";

const List = ({ users }) => {
    return(
        <div>
            <h1>GitHub Users</h1>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>
                        <div style={{margin:"100px"}}>
                            <img src={user.avatar_url} alt="avatar" class="profile_img"/>
                            <br></br>
                            <a href={user.html_url} target="_blank">{user.login}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default List;