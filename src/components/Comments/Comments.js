import React from 'react';
import UseFetch from "../UseFetch/UseFetch";
import Comment from "./Comment/Comment";
import {urls} from "../../constants/urls";

const Comments = () => {
    const { data: comments, loading } = UseFetch(urls.comments);

    return (
        <div>
            {loading ? <p>Loading...</p> : comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default Comments;