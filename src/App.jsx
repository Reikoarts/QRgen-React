import  {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Welcome from './pages/Welcome';
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import AOS from 'aos'; // Importation d'AOS
import 'aos/dist/aos.css';


const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                {/*<PrivateRoute>*/}
                {/*</PrivateRoute>*/}
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;