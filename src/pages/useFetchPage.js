import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import UseFetch from "../components/UseFetch/UseFetch";

const UseFetchPage = () => {
    return (
        <div>
            UseFetch
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
            <NavLink to={'posts'}>posts</NavLink>
            <Outlet/>
        </div>
    );
};

export default UseFetchPage;