export default function FlagCard({ flag }) {
    return (
        <div className="card" data-aos={flag.aos}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={flag.src} alt="flag" className="flag" />
                </div>
                <div className="card-back">
                    <p>{flag.text}</p>
                </div>
            </div>

            <style jsx>{`
        .card {
          position: relative;
          width: 200px;
          height: 120px;
          perspective: 1000px;
          margin-bottom: 40px;
          border-radius: 10px;
          overflow: hidden;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }

        .card:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .card-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-back {
          background-color: #ffffff;
          color: black;
          font-family: 'Futura W01 Medium', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px #00000050 solid;
          border-radius: 10px;
          transform: rotateY(180deg);
        }

        .card-back p {
          margin: 0;
          text-align: center;
        }

        .flag {
          width: 100%;
          height: auto;
        }
      `}</style>
        </div>
    );
}