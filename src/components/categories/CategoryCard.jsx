import React from 'react'

const CategoryCard = ({ category, handleEdit, handleDelete }) => {
    return (
        <div key={category.id} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <img src={category.photo} alt={category.name} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={() => handleEdit(category.id)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Modifier
                    </button>
                    <button
                        onClick={() => handleDelete(category.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard