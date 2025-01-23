import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Welcome from './pages/Welcome';
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AOS from 'aos'; // Importation d'AOS
import 'aos/dist/aos.css';
import Products from './pages/admin/Products.jsx';
import Categories from './pages/admin/Categories.jsx';
import Users from './pages/admin/Users.jsx';
import Restaurants from './pages/admin/Restaurants.jsx';


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
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/restaurant" element={<Restaurants />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Welcome />} />
                </Routes>
                {/*<PrivateRoute>*/}
                {/*</PrivateRoute>*/}
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;