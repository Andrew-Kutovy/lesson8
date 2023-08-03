import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user
    return (
        <div>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <hr/>
        </div>
    );
};

export default User;