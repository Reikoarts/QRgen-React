import React, { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { useAuth } from '../../contexts/AuthContext'; // Assurez-vous que le hook useAuth est bien importé

const Users = () => {
    // Utilisation du user de useAuth
    const { user } = useAuth();

    // États pour la gestion du formulaire de changement de mot de passe
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Fonction pour gérer le changement de mot de passe
    const handlePasswordChange = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        // Logique de changement de mot de passe (ici on fait juste un log pour l'exemple)
        console.log('Changement de mot de passe pour', user.email);
        console.log('Ancien mot de passe:', oldPassword);
        console.log('Nouveau mot de passe:', newPassword);
    };

    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="user" />
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl mb-6">Informations Utilisateur</h1>

                <div className="mb-6">
                    <p><strong>Nom:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                <h2 className="text-xl mb-4">Changer le mot de passe</h2>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                        <label htmlFor="oldPassword" className="block text-sm">Ancien mot de passe</label>
                        <input
                            type="password"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="block text-sm">Nouveau mot de passe</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        >
                            Changer le mot de passe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Users;
