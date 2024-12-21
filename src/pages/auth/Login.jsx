import  { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import GuestLayout from "../../components/GuestLayout.jsx";
import InputLabel from "../../components/InputLabel.jsx";
import TextInput from "../../components/TextInput.jsx";
import InputError from "../../components/InputError.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Login = ({ canResetPassword, status }) => {
    const { login } = useAuth();  // Utilisation du hook pour récupérer la fonction login
    const navigate = useNavigate();  // Utilisation du hook pour naviguer
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation basique
        if (!form.email || !form.password) {
            setErrors({
                email: form.email ? '' : 'Email est requis',
                password: form.password ? '' : 'Mot de passe est requis',
            });
            return;
        }

        try {
            const response = await login(form);  // Utilisation du login depuis AuthContext

            if (!response.ok) {
                setErrors({ ...errors, general: 'Identifiants invalides' });
            } else {
                // Redirection vers le dashboard si la connexion réussie
                navigate('/dashboard');
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setErrors({ ...errors, general: 'Une erreur est survenue, veuillez réessayer.' });
        }
    };

    return (
        <GuestLayout>
            <h1 className="text-2xl font-bold">Se connecter</h1>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                    {errors.email && <InputError message={errors.email} />}
                </div>

                <div className="mt-4">
                    <InputLabel for="password" value="Mot de passe" />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <InputError message={errors.password} />}
                </div>

                <div className="mt-4 flex items-center">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={form.remember}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                        Se souvenir de moi
                    </label>
                </div>

                {errors.general && <InputError message={errors.general} />}

                <div className="mt-4 flex items-center justify-between">
                    {canResetPassword && (
                        <Link
                            to="/password/reset"
                            className="text-sm text-gray-600 hover:text-gray-900"
                        >
                            Mot de passe oublié ?
                        </Link>
                    )}

                    <PrimaryButton
                        className="ml-4"
                        disabled={form.email === '' || form.password === ''}
                    >
                        Connexion
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};

export default Login;