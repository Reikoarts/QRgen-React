import 'react';

export default function TitleWithCurves({ title }) {
    const leftCurve = '/images/courbe-gauche-marron-clair.svg';
    const rightCurve = '/images/courbe-droite-marron-clair.svg';

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 pt-6 pb-8 md:pt-16 md:pb-20">
            <div className="md:col-span-3"></div>
            <div className="col-span-2 md:col-span-2 flex">
                <img src={leftCurve} alt="Courbe gauche" className="h-8 md:mx-0" />
            </div>
            <div className="col-span-2 text-center">
                <h2 className="text-lg menu-name">{title}</h2>
            </div>
            <div className="col-span-2 md:col-span-2 flex justify-end">
                <img src={rightCurve} alt="Courbe droite" className="h-8 md:mx-0" />
            </div>
            <div className="md:col-span-3"></div>

            <style jsx>
                {`
                .menu-name {
                  color: #101010;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                  font-weight: bold;
                  font-size: 1.25rem;
                }
              `}
            </style>
        </div>
    );
}