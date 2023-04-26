import React  from "react";

const List = ({ users }) => {
    return(
        <div>
            <h1>GitHub Users</h1>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>
                        <img src={user.avatar_url} alt="avatar" height={200} width={200}/>
                        <a href={user.html_url} target="_blank">{user.login}</a>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default List;