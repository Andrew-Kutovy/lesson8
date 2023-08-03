import React from 'react';

const Comment = ({comment}) => {
    const {id, name, mail, body} = comment
    return (
        <div>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>mail:{mail}</p>
            <p>body:{body}</p>
            <hr/>
        </div>
    );
};

export default Comment;