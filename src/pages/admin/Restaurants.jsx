import React, { useState, useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { useNavigate } from 'react-router-dom';

const Restaurants = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(localStorage.getItem('selectedRestaurant') ? localStorage.getItem('selectedRestaurant') : "");
    const [changedRestaurant, setChangedRestaurant] = useState("");
    const navigate = useNavigate();
    const restaurants = JSON.parse(localStorage.getItem('restaurants'));

    //Si aucun restaurant n'est trouvé dans le local storage, on redirige l'utilisateur vers la page d'accueil
    useEffect(() => {
        if (!restaurants) {
            navigate('/dashboard');
        }
    }, []);

    const handleSelectRestaurant = (id) => {
        const selectedRestaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === id);
        localStorage.setItem('selectedRestaurant', selectedRestaurantIndex);
        setSelectedRestaurant(selectedRestaurantIndex);
        setChangedRestaurant(restaurants[selectedRestaurantIndex].name);
    };

    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="restaurant" selectedRestaurant={selectedRestaurant} />
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl mb-6">Liste des restaurants</h1>

                <div className="grid grid-cols-2 gap-6">
                    {restaurants ? restaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
                            onClick={() => handleSelectRestaurant(restaurant.id)}
                        >
                            <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                            <p className="text-sm text-gray-500">{restaurant.description}</p>
                        </div>
                    )) : <p>Chargement...</p>}
                </div>

                {changedRestaurant && (
                    <div className="bg-green-200 p-4 rounded-lg mt-6">
                        <p className="text-green-800">Restaurant modifié avec succès</p>
                        <p className="text-green-800">Vous modifiez actuellement :</p>
                        <p className="text-lg text-green-800">{changedRestaurant}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Restaurants;
