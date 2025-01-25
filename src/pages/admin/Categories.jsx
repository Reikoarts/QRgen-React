import React, { useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import CategoryCard from '../../components/categories/CategoryCard';
import { useState } from 'react';
import { getCategoriesByRestaurantId } from '../../utils/data';
import { deleteCategory } from '../../utils/data';
import AddCategoryModal from '../../components/modal/AddCategoryModal';


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
                console.log(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        }

        fetchCategories();

    }, [selectedRestaurant]);

    // Fonction pour gérer la suppression d'une catégorie
    const handleDelete = (id) => {
        deleteCategory(id)
            .then(() => {
                setCategories(categories.filter((category) => category.id !== id));
            })
            .catch((error) => {
                console.error('Failed to delete category:', error);
            });
    };

    // Fonction pour gérer la modification d'une catégorie
    const handleEdit = (id) => {
        const categoryToEdit = categories.find((cat) => cat.id === id);
        openEditModal(categoryToEdit);
    };


    //gestion de la modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const openCreateModal = () => {
        setCurrentCategory(null);
        setIsModalOpen(true);
    };

    const openEditModal = (category) => {
        setCurrentCategory(category);
        setIsModalOpen(true);
    };

    const handleModalSubmit = (category) => {
        console.log('category', category)
        if (currentCategory) {
            // Modifier une catégorie existante
            setCategories(categories.map((cat) => (cat.id === currentCategory.id ? { ...cat, ...category } : cat)));
        } else {
            // Ajouter une nouvelle catégorie
            setCategories([...categories, { id: Date.now(), ...category }]); // Simule un ID unique
        }
    };



    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="category" selectedRestaurant={selectedRestaurant} />

            <div className="bg-white p-6 rounded-lg h-full overflow-y-auto">
                <h1 className="text-2xl mb-6">Liste des catégories</h1>
                <div>
                    <a
                        onClick={openCreateModal}
                        className="bg-green-500 text-white px-4 py-2 rounded-md mb-6 inline-block cursor-pointer"
                    >
                        Ajouter une catégorie
                    </a>

                    <AddCategoryModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleModalSubmit}
                        initialData={currentCategory}
                    />
                </div>


                <div className="grid grid-cols-2 gap-6">
                    {categories.length > 0 ? categories.map((category) => (
                        <CategoryCard key={category.id} category={category} handleDelete={handleDelete} handleEdit={handleEdit} />
                    )) : <p>Chargement des données...</p>}
                </div>
            </div>
        </div>
    );
};

export default Categories;
