import { useState, useEffect } from 'react';

const Checkbox = ({ checked, value, onCheckedChange }) => {
    const [proxyChecked, setProxyChecked] = useState(checked);

    // Mettre à jour le proxyChecked si 'checked' change (prop contrôlée)
    useEffect(() => {
        setProxyChecked(checked);
    }, [checked]);

    // Gérer le changement de l'état du checkbox
    const handleChange = (event) => {
        const newValue = event.target.checked;
        setProxyChecked(newValue);
        onCheckedChange(newValue); // Propagate the change back to the parent
    };

    return (
        <input
            type="checkbox"
            value={value}
            checked={proxyChecked}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
        />
    );
};

export default Checkbox;
