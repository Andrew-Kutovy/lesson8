import React, {useCallback} from 'react';

const UseCallback = ({data}) => {
    const processHeavyLogic = useCallback((data) => {
        console.log("Processing heavy logic...");
        let result = 0;

        for (let i = 0; i < data; i++) {
            result += i;
        }
        return result;
    }, []);

    return (
        <div>
            <h2>UseCallback Component</h2>
            <p>Data: {data}</p>
            <p>Result: {processHeavyLogic(data)}</p>
        </div>
    );
};

export default UseCallback;