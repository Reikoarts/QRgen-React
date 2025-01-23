import React from 'react';
import { faTachometerAlt, faUser, faCartShopping, faSignOutAlt, faFolder, faFireBurner } from '@fortawesome/free-solid-svg-icons';
import IconText from '../IconText';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navigation = ({ isActive }) => {
    const navigate = useNavigate()
    const { logout } = useAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout(); // Appelle la méthode logout depuis AuthContext
            navigate('/login'); // Redirige l'utilisateur vers la page de connexion
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    const redirection = (route) => {
        navigate(route);
    };

    return (
        <div className="bg-[#344D59] text-white p-6 rounded-lg flex flex-col justify-between">
            <div className="text-center mb-6">
                <div className='flex flex-col gap-2 mb-4'>
                    <p className=''>Vous modifiez actuellement :</p>
                    <p className="text-lg text-[#F9FFA8]">Le bg du 27 représente</p>
                    <a href="" className='text-[black] bg-[#F9FFA8] w-[50%] mx-auto rounded-lg hover:bg-black hover:text-white'>Changer</a>
                </div>
                <p className="text-lg">Aimeric Hosef</p>
                <p className="text-lg">aimeric.hosef@gmail.com</p>
                <ul className="space-y-4 mt-12">
                    <IconText icon={faTachometerAlt} Text="Tableau de bord" isActive={isActive} type="dashboard" redirection={() => redirection('/dashboard')} />
                    <IconText icon={faFireBurner} Text="Restaurants" isActive={isActive} type="restaurant" redirection={() => redirection('/restaurant')} />
                    <IconText icon={faFolder} Text="Catégorie" isActive={isActive} type="category" redirection={() => redirection('/categories')} />
                    <IconText icon={faCartShopping} Text="Produits" isActive={isActive} type="product" redirection={() => redirection('/products')} />
                    <IconText icon={faUser} Text="Mon compte" isActive={isActive} type="user" redirection={() => redirection('/users')} />
                </ul>
            </div>

            <div className='group'>
                <button className="bg-[#F9FFA8] text-black w-full py-2 rounded-lg hover:bg-red" onClick={handleLogout}>Déconnexion</button>
            </div>
        </div>
    );
};

export default Navigation;
