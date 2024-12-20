import React from 'react';

const BenefitsItem = ({ title, description, aosEffect = 'fade-up' }) => {
    return (
        <div className="benefits-item" data-aos={aosEffect}>
            <h3 className="text-center md:text-left">{title}</h3>
            <p className="benefits-text">{description}</p>
        </div>
    );
};

export default BenefitsItem;