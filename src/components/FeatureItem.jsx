export default function FeatureItem({ imageSrc, imageAlt, title, description, aosEffect = 'fade-up' }) {
    return (
        <div className="feature-item flex flex-col md:flex-row items-center" data-aos={aosEffect}>
            <img src={imageSrc} alt={imageAlt} className="feature-image md:w-3/5 lg:w-2/5 md:mb-4 lg:mb-0" />
            <div className="feature-content mx-auto text-center md:text-left">
                <h3 className="text-center md:text-left">{title}</h3>
                <div className="feature-text">
                    <p>{description}</p>
                </div>
            </div>

            <style jsx>{`
        .feature-item {
          padding: 15px;
          margin: 0 auto 2rem;
          background-color: #fff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          max-width: 55vw;
        }

        .feature-content {
          width: 100%;
          text-align: center;
        }

        .feature-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .feature-text p {
          font-size: 1rem;
          line-height: 1.5;
          margin: 0 auto;
          max-width: 75%;
        }
      `}</style>
        </div>
    );
}