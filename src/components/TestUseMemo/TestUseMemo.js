import React, {useMemo} from 'react';

const TestUseMemo = ({data}) => {
    const processHeavyLogic = (data) => {
        console.log("Processing heavy logic...");
        let result = 0;

        for (let i = 0; i < data; i++) {
            result += i;
        }
        return result;
    };

    const memoizedResult = useMemo(() => processHeavyLogic(data), [data]);

    return (
        <div>
            <h2>TestUseMemo Component</h2>
            <p>Data: {data}</p>
            <p>Result: {memoizedResult}</p>
        </div>
    );
};

export default TestUseMemo;