import React, { useEffect, useRef } from 'react';

const TextInput = ({ className, autoFocus, ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <input
            ref={inputRef}
            className={`rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${className}`}
            {...props}
        />
    );
};

export default TextInput;