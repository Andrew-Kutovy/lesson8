import React, {useState} from 'react';
import UseCallback from "../components/UseCallback/UseCallback";

const TestUseMemoUseCallback = () => {
    const [data, setData] = useState(10);

    const handleChangeData = () => {
        setData(prevData => prevData + 10);
    };

    return (
        <div>
            <h1>UseCallback page</h1>
            <button onClick={handleChangeData}>Increase Data by 10</button>
            <UseCallback data={data} />
        </div>
    );
};

export default TestUseMemoUseCallback;