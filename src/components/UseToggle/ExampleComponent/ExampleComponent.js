import React from 'react';
import useToggle from "../UseToggle";
const ExampleComponent = () => {
    const [status, toggleStatus] = useToggle(false);

    return (
        <div>
            <h2>Example Component</h2>
            <p>Status: {status ? 'true' : 'false'}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
};

export default ExampleComponent;