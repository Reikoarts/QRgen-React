import  { useState, useEffect } from 'react';

const Logo = ({ logo, negativeLogo }) => {
    const [currentLogo, setCurrentLogo] = useState(negativeLogo);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight - 50) {
            setCurrentLogo(logo);
        } else {
            setCurrentLogo(negativeLogo);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [logo, negativeLogo]);

    return (
        <>
            <img src={currentLogo} alt="Logo site" className="fixed-logo" />
            <style jsx>{`
        .fixed-logo {
          position: fixed;
          top: 30px;
          left: 50px;
          width: 115px;
          height: auto;
          z-index: 1000;
        }
      `}</style>
        </>
    );
};

export default Logo;
