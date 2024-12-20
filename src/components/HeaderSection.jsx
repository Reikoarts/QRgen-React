import 'react';

const HeaderSection = ({ title, description, ctaText, qrLogo }) => {
    return (
        <section className="header" data-aos="fade-down">
            <div
                className="grid grid-cols-1 md:grid-cols-12 items-center w-full"
                style={{ paddingTop: '135px' }}
            >
                <div className="header-title grid grid-cols-1 md:grid-cols-12 col-span-9 items-center text-center">
                    <div className="col-span-3"></div>
                    <div className="col-span-5">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <button className="cta-button" data-aos="zoom-in">
                            {ctaText}
                        </button>
                    </div>
                    <div className="col-span-1 mx-auto text-center">
                        <img src={qrLogo} alt="Logo QR Code" className="qr-logo" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .header {
          text-align: center;
          background: url('https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            no-repeat center center;
          background-size: cover;
          height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .header h1 {
          font-family: 'Futura W01 Medium', sans-serif;
          font-weight: bold;
          color: white;
          font-size: 2rem;
          margin: 0;
        }

        .header p {
          font-family: 'Futura W01 Medium', sans-serif;
          color: white;
        }

        .cta-button {
          background-color: #b3972b;
          color: white;
          font-family: 'Futura W01 Medium', sans-serif;
          font-weight: bold;
          border: none;
          padding: 5px 25px;
          margin-top: 20px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1.2rem;
          transition: background-color 0.3s;
        }

        .cta-button:hover {
          background-color: #ffffff;
          color: black;
        }

        .header-title {
          position: relative;
          padding: 40px 0px;
          margin-left: -20px;
          background: linear-gradient(to right, #000000 0%, #00000000 100%);
        }

        .header-title::before,
        .header-title::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(182, 117, 0, 0.65);
          box-shadow: 0 0 15px rgba(182, 117, 0, 0.65), 0 0 30px rgba(182, 117, 0, 0.5),
            0 0 45px rgba(182, 117, 0, 0.3);
          animation: neon-blink 5s infinite;
        }

        .header-title::before {
          top: 0;
        }

        .header-title::after {
          bottom: 0;
        }

        .qr-logo {
          color: white;
          width: 115px;
          height: auto;
        }

        @keyframes neon-blink {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(182, 117, 0, 1), 0 0 40px rgba(182, 117, 0, 0.8);
          }
          20%,
          80% {
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(182, 117, 0, 0.5), 0 0 30px rgba(182, 117, 0, 0.3);
          }
          50% {
            opacity: 0.2;
            box-shadow: 0 0 5px rgba(182, 117, 0, 0.2);
          }
        }
      `}</style>
        </section>
    );
};

export default HeaderSection;
