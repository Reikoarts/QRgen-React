import React from 'react';
import { Link } from 'react-router-dom';


const GuestLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link to="/">
                    {/*<ApplicationLogo className="h-32 w-32 fill-current" />*/}
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default GuestLayout;