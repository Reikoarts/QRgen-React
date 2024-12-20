import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Welcome from './pages/Welcome';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';

import AOS from 'aos'; // Importation d'AOS
import 'aos/dist/aos.css'; // Importation des styles de AOS

const App = () => {
    useEffect(() => {
        AOS.init(); // Initialisation de AOS
        AOS.refresh(); // Actualisation des animations AOS après l'initialisation
    }, []); // Le tableau vide [] garantit que l'effet ne s'exécute qu'une seule fois

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    {/*<Route path="/dashboard" element={<Dashboard />} />*/}
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/register" element={<Register />} />*/}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;