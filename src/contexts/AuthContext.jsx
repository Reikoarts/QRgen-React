import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {

            fetch(`${import.meta.env.VITE_API_BASE_URL}/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data) {
                        setUser(data);
                    } else {
                        console.error('No user data in response');
                    }
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                    localStorage.removeItem('token');
                });
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('token', data.token);
            }
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setUser(null);
            localStorage.removeItem('token');
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
