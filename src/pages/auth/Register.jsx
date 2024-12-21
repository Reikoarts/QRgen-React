import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GuestLayout from "../../components/GuestLayout.jsx";
import InputLabel from "../../components/InputLabel.jsx";
import TextInput from "../../components/TextInput.jsx";
import InputError from "../../components/InputError.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import logoDefault from "../../images/logo-qrgen-1.svg";
import logoNegative from "../../images/logo-qrgen-1-negative.svg";
import Logo from "../../components/Logo.jsx";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, formData);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <GuestLayout>
            <Logo logo={logoNegative} negativeLogo={logoDefault}/>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        type="text"
                        className="mt-1 block w-full"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoFocus
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        className="mt-1 block w-full"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />

                    <InputError className="mt-2" message={errors.password} />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Mot de passe (confirmation)"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        className="mt-1 block w-full"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.password_confirmation}
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <a
                        href="/login"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Déjà inscrit?
                    </a>

                    <PrimaryButton
                        type="submit"
                        className="ms-4"
                        disabled={processing}
                    >
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};

export default Register;