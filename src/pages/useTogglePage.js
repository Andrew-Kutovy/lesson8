import React from 'react';
import useToggle from "../components/UseToggle/UseToggle";

const UseTogglePage = () => {
    const [status, toggleStatus] = useToggle(false);

    return (
        <div>
            UseToggle
            <div>Status: {status ? 'true' : 'false'}</div>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
};

export default UseTogglePage;