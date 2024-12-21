import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Si vous utilisez React Router
import DropdownLink from './DropdownLink';
import { useAuth } from '../contexts/AuthContext'; // Importation du AuthContext

const DropdownMenu = ({ menuColorClass: initialMenuColorClass = 'menu-alt' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuColorClass, setMenuColorClass] = useState(initialMenuColorClass);
    const { user, logout } = useAuth();
    const navigate = useNavigate(); // Hook pour redirection

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 50) {
                setMenuColorClass('menu-default');
            } else {
                setMenuColorClass('menu-alt');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout(); // Appelle la méthode logout depuis AuthContext
            navigate('/login'); // Redirige l'utilisateur vers la page de connexion
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    return (
        <div className="dropdown">
            <button
                className={`dropdown-toggle ${menuColorClass}`}
                onClick={toggleMenu}
            >
                Menu
            </button>

            {isMenuOpen && (
                <div className="dropdown-menu">
                    {user ? (
                        <>
                            <DropdownLink href="/dashboard">Interface</DropdownLink>
                            <DropdownLink href="/profile">Profil</DropdownLink>
                            <DropdownLink
                                href="/logout"
                                onClick={handleLogout}
                            >
                                <span style={{ color: 'brown' }}>Se déconnecter</span>
                            </DropdownLink>
                        </>
                    ) : (
                        <>
                            <DropdownLink href="/login">Se connecter</DropdownLink>
                            <DropdownLink href="/register">S'inscrire</DropdownLink>
                        </>
                    )}
                </div>
            )}

            <style>{`
                .dropdown {
                    position: fixed;
                    top: 30px;
                    right: 50px;
                    z-index: 1000;
                }

                .dropdown-toggle {
                    font-family: 'Futura W01 Medium', sans-serif;
                    font-weight: bold;
                    border: none;
                    font-size: 1.2rem;
                    cursor: pointer;
                    border-radius: 5px;
                    padding: 10px 20px;
                    transition: background-color 0.3s, color 0.3s;
                }

                .menu-default {
                    background-color: #000000;
                    color: #ffffff;
                }

                .menu-alt {
                    background-color: #ffffff;
                    color: #000000;
                }

                .dropdown-menu {
                    position: absolute;
                    right: 0;
                    width: 200px;
                    background-color: white;
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    padding: 10px;
                }

                .dropdown-menu a {
                    display: block;
                    padding: 10px;
                    text-decoration: none;
                    color: #333;
                    transition: background 0.3s;
                }

                .dropdown-menu a:hover {
                    background-color: #f0f0f0;
                }
            `}</style>
        </div>
    );
};

export default DropdownMenu;
