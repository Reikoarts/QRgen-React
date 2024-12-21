import {useAuth} from "../contexts/AuthContext.jsx";

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) {
        return <p>Chargement...</p>; // Ou redirigez vers la page de connexion
    }

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h1 className="text-2xl font-bold">Vous êtes connecté !</h1>
                        <p>Bienvenue sur le tableau de bord, {user.name}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;