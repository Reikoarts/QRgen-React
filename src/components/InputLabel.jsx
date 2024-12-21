import React from 'react';

const InputLabel = ({ value, children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
            {value || children}
        </label>
    );
};

export default InputLabel;