import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import CategoryCard from '../../components/categories/CategoryCard';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Catégorie A', description: 'Description de la catégorie A', imageUrl: 'https://placehold.co/600x400/png' },
        { id: 2, name: 'Catégorie B', description: 'Description de la catégorie B', imageUrl: 'https://placehold.co/600x400/png' },
        { id: 3, name: 'Catégorie C', description: 'Description de la catégorie C', imageUrl: 'https://placehold.co/600x400/png' },
        { id: 4, name: 'Catégorie D', description: 'Description de la catégorie D', imageUrl: 'https://placehold.co/600x400/png' },
    ];

    // Fonction pour gérer la suppression d'une catégorie
    const handleDelete = (id) => {
        // Logique de suppression (ici on fait juste un log pour l'exemple)
        console.log(`Suppression de la catégorie avec l'id: ${id}`);
    };

    // Fonction pour gérer la modification d'une catégorie
    const handleEdit = (id) => {
        // Logique de modification (ici on fait juste un log pour l'exemple)
        console.log(`Modification de la catégorie avec l'id: ${id}`);
    };

    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="category" />

            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl mb-6">Liste des catégories</h1>

                <div className="grid grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} handleDelete={handleDelete} handleEdit={handleEdit} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
