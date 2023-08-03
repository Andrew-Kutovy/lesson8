import React from 'react';
import UseFetch from "../UseFetch/UseFetch";
import {urls} from "../../constants/urls";
import Post from "./Post/Post";

const Posts = () => {
    const { data: posts, loading } = UseFetch(urls.posts);

    return (
        <div>
            {loading ? <p>Loading...</p> : posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;