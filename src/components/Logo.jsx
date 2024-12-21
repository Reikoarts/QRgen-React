import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = ({ logo, negativeLogo }) => {
    const navigate = useNavigate(); // Hook pour la navigation
    const [currentLogo, setCurrentLogo] = useState(negativeLogo);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight - 50) {
            setCurrentLogo(logo);
        } else {
            setCurrentLogo(negativeLogo);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [logo, negativeLogo]);

    const handleClick = () => {
        navigate('/'); // Redirige vers la page d'accueil
    };

    return (
        <>
            <img
                src={currentLogo}
                alt="Logo site"
                className="fixed-logo"
                onClick={handleClick} // Ajoute un gestionnaire de clic
            />
            <style>{`
                .fixed-logo {
                    position: fixed;
                    top: 30px;
                    left: 50px;
                    width: 115px;
                    height: auto;
                    z-index: 1000;
                    cursor: pointer; /* Optionnel, ajoute un curseur pour indiquer que c'est cliquable */
                }
            `}</style>
        </>
    );
};

export default Logo;
