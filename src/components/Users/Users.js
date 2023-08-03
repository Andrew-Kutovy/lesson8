import React from 'react';
import UseFetch from "../UseFetch/UseFetch";
import {urls} from "../../constants/urls";
import User from "./User/User";

const Users = () => {
    const { data: users, loading } = UseFetch(urls.users);

    return (
        <div>
            {loading ? <p>Loading...</p> : users.map((user) => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;