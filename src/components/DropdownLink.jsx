const DropdownLink = ({ href, children, onClick }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block w-full px-4 py-2 text-start leading-5 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        >
            {children}
        </a>
    );
};

export default DropdownLink;