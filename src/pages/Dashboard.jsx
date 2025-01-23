import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import CardStat from "../components/statistique/CardStat.jsx";
import { getRestaurants } from "../utils/data.js";


const Dashboard = () => {

    const { user } = useAuth();

    useEffect(() => {
        let storedRestaurants = JSON.parse(localStorage.getItem('restaurants'));
        let selectedRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));

        //Recupere la liste des restaurants de l'utilisateur
        const fetchRestaurants = async () => {
            if (!storedRestaurants) {
                try {
                    await getRestaurants();
                } catch (error) {
                    console.error('Error fetching restaurants', error);
                }
            }
        }

        fetchRestaurants();

        //Assigne par défaut le restaurant id 0 à l'utilisateur si aucun autre dans le local starage "selectedRestaurant"
        if (!localStorage.getItem('selectedRestaurant')) {
            selectedRestaurant = localStorage.setItem('selectedRestaurant', JSON.stringify(0));
        }

    }, [])


    if (!user) {
        return <p>Chargement...</p>;
    }

    const stats = {
        products: 120,
        categories: 10,
        qrCodes: 450,
    };








    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="dashboard" />
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl mb-6">Tableau de bord</h1>

                <div className="grid grid-cols-3 gap-6">
                    <CardStat chiffre={stats.products} text="Produits" color='blue' />
                    <CardStat chiffre={stats.categories} text="Catégories" color='red' />
                    <CardStat chiffre={stats.qrCodes} text="QR Codes" color='lime' />
                </div>

                <div className="mt-6">
                    <h1>Votre Qr code</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
