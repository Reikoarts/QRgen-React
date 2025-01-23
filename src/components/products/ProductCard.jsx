import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-500 font-semibold mt-2">{product.price} €</p>
                <div className='flex justify-between mt-4'>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 transition">
                        Voir Détails
                    </button>
                    <button className="mt-4 bg-red-500 text-white py-2 px-2 rounded-lg hover:bg-red-600 transition">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
