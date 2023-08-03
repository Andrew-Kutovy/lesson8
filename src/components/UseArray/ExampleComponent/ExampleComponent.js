import React from 'react';
import useArray from "../UseArray";

const ExampleComponent = () => {
    const { array, add, remove } = useArray([]);

    const handleAdd = () => {
        const newItem = { id: Date.now(), name: 'New elem' };
        add(newItem);
    };

    const handleRemove = (id) => {
        remove(id);
    };

    return (
        <div>
            <button onClick={handleAdd}>Add elem</button>
            <ul>
                {array.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleComponent;
