import React from 'react'

const CardStat = ({ chiffre, text, color }) => {

    const colorClasses = {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        lime: 'bg-lime-500',
    };

    return (
        <div className={`${colorClasses[color]} p-6 rounded-lg flex flex-col items-center justify-center`}>
            <div className="text-4xl font-bold text-white">{chiffre}</div>
            <div className="text-white mt-2">{text}</div>
        </div>
    )
}

export default CardStat