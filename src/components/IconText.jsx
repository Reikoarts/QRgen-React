import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const IconText = ({ icon, Text, isActive, type, redirection }) => {
    const isActiveLink = isActive === type;

    return (
        <li onClick={() => redirection()} className={`flex group items-center gap-4 ${isActiveLink ? 'bg-[#F9FFA8] hover:text-gray-300 p-2 rounded-lg cursor-pointer' : 'flex group items-center space-x-4 cursor-pointer hover:bg-[#F9FFA8] hover:text-gray-300 p-2 rounded-lg'}`}>
            <a className='flex group items-center gap-4'>
                <FontAwesomeIcon icon={icon} className={`text-xl  ${isActiveLink ? "text-black" : "text-[#F9FFA8] group-hover:text-black"}`} />
                <span className={`text-xl  ${isActiveLink ? "text-black" : "group-hover:text-black"}`}>{Text}</span>
            </a>
        </li>
    );
};

export default IconText;
