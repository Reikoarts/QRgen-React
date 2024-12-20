export default function PlanetFriendlyItem() {
    const planet = '/images/planet-svgrepo-com.svg';

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full">
            <div className="col-span-5" />
            <div className="flex flex-col justify-between col-span-4">
                <div className="planetfriendly-item" data-aos="flip-left">
                    <h3 className="text-center md:text-left">Tout numérique</h3>
                    <p className="planetfriendly-text">
                        En passant au numérique, vous réduisez votre empreinte écologique. Moins de papier, moins d'encre, moins de déchets : c'est un geste concret qui séduit de plus en plus de clients sensibles à la protection de l'environnement. Vous contribuez ainsi à une démarche responsable tout en donnant une image positive de votre établissement.
                    </p>
                    <img src={planet} alt="Planet logo" className="planet mx-auto pt-4" />
                </div>
            </div>

            <style jsx>{`
                
        .planetfriendly-section {
            text-align: center;
            background: url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D') no-repeat;
            background-position: 30% center;
            background-size: initial;
            min-height: 100vh;
            height: auto;
        }

        .planetfriendly-item {
            padding: 15px;
            background-color: #ffffff75;
            color: black;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-bottom: 2rem;
            max-width: 65vw;
        }

        .planetfriendly-item h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
          padding-bottom: 15px;
        }

        .planetfriendly-text {
          font-size: 1.1rem;
          line-height: 1.5;
          margin: 0 auto;
          max-width: 75%;
        }

        .planet {
          width: 200px;
          height: auto;
        }
      `}</style>
        </div>
    );
}