import React, {useState} from 'react';
import TestUseMemo from "../components/TestUseMemo/TestUseMemo";

const TestUseMemoPage = () => {
    const [data, setData] = useState(10);

    const handleChangeData = () => {
        setData(prevData => prevData + 10);
    };
    return (
        <div>
            <h1>TestUseMemo page</h1>
            <button onClick={handleChangeData}>Increase Data by 10</button>
            <TestUseMemo data={data}/>
        </div>
    );
};

export default TestUseMemoPage;