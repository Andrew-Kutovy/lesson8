import { useState, useCallback } from 'react';

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = useCallback(() => {
        setValue((prevValue) => !prevValue);
    }, []);

    return [value, toggleValue];
};

export default useToggle;