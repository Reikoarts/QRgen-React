import React, { useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import CategoryCard from '../../components/categories/CategoryCard';
import { useState } from 'react';
import { getCategoriesByRestaurantId } from '../../utils/data';

const Categories = () => {

    const [restaurants, setRestaurants] = useState(localStorage.getItem('restaurants') ? JSON.parse(localStorage.getItem('restaurants')) : []);
    const [selectedRestaurant, setSelectedRestaurant] = useState(localStorage.getItem('selectedRestaurant') ? localStorage.getItem('selectedRestaurant') : "");
    const [categories, setCategories] = useState([]);

    // Récupération des catégories du restaurant sélectionné
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategoriesByRestaurantId(restaurants[selectedRestaurant].id);
                setCategories(data.data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        }

        fetchCategories();

    }, [selectedRestaurant]);

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
            <Navigation isActive="category" selectedRestaurant={selectedRestaurant} />

            <div className="bg-white p-6 rounded-lg h-full overflow-y-auto">
                <h1 className="text-2xl mb-6">Liste des catégories</h1>

                <div className="grid grid-cols-2 gap-6">
                    {categories.length > 0 ? categories.map((category) => (
                        <CategoryCard key={category.id} category={category} handleDelete={handleDelete} handleEdit={handleEdit} />
                    )) : <p>Aucune catégorie trouvée</p>}
                </div>
            </div>
        </div>
    );
};

export default Categories;
