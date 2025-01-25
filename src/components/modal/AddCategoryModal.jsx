import React, { useState } from 'react';

const AddCategoryModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [photo, setPhoto] = useState(initialData?.photo || '');

    console.log('initialData', initialData)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, photo });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{initialData ? 'Modifier la catégorie' : 'Créer une catégorie'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                            type="text"
                            id="name"
                            value={initialData ? initialData.name : name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo (lien)</label>
                        <input
                            type="url"
                            id="photo"
                            value={initialData ? initialData.photo : photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            {initialData ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AddCategoryModal;