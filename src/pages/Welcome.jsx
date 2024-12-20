import React, { useState, useEffect } from 'react';
import "./Welcome.css";
import { Link } from 'react-router-dom';

import Logo from "../components/Logo.jsx";
import HeaderSection from "../components/HeaderSection.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";
import TitleWithCurves from "../components/TitleWithCurves.jsx";
import FeatureItem from "../components/FeatureItem.jsx";
import BenefitsItem from "../components/BenefitsItem.jsx";
import FlagCard from "../components/FlagCard.jsx";
import PlanetFriendlyItem from "../components/PlanetFriendlyItem.jsx";
import Footer from "../components/Footer.jsx";

// Import images
import logoDefault from '/src/images/logo-qrgen-1.svg';
import logoNegative from '/src/images/logo-qrgen-1-negative.svg';
import qrLogo from "/src/images/qr-code-svgrepo-com.svg";



const dishes = [
    {
        fr: "Coq au vin",
        en: "Rooster in wine sauce",
        es: "Gallo al vino",
        de: "Hahn in Wein",
        zh: "红酒炖鸡",
        ja: "鶏肉の赤ワイン煮",
        ko: "와인 소스 닭고기"
    },
    {
        fr: "Ratatouille niçoise",
        en: "Provence vegetable stew",
        es: "Guiso de verduras provenzal",
        de: "Provenzalischer Gemüseeintopf",
        zh: "普罗旺斯炖菜",
        ja: "ラタトゥイユ",
        ko: "프로방스 스타일 야채 스튜"
    },
    {
        fr: "Tarte Tatin",
        en: "Upside-down apple tart",
        es: "Tarta de manzana invertida",
        de: "Gestürzter Apfelkuchen",
        zh: "法式焦糖苹果翻转蛋糕",
        ja: "タルト・タタン",
        ko: "거꾸로 사과 타르트"
    }
];

const initialFlags = [
    { src: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png', text: '', lang: 'en', aos: 'fade-right' },
    { src: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png', text: '', lang: 'es', aos: 'fade-up' },
    { src: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png', text: '', lang: 'de', aos: 'fade-left' },
    { src: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png', text: '', lang: 'zh', aos: 'fade-right' },
    { src: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png', text: '', lang: 'ja', aos: 'fade-down' },
    { src: 'https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png', text: '', lang: 'ko', aos: 'fade-left' }
];

export default function Welcome() {
    const [logo, setLogo] = useState(logoNegative);
    const [menuColorClass, setMenuColorClass] = useState("menu-alt");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentDish, setCurrentDish] = useState(null);
    const [flags, setFlags] = useState(initialFlags);

    useEffect(() => {
        // Select a random dish and update flags with translations
        const randomIndex = Math.floor(Math.random() * dishes.length);
        const selectedDish = dishes[randomIndex];
        setCurrentDish(selectedDish);

        setFlags(prevFlags =>
            prevFlags.map(flag => ({
                ...flag,
                text: selectedDish[flag.lang]
            }))
        );
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="homepage">
            <Logo logo={logoDefault} negativeLogo={logoNegative}/>

            <DropdownMenu
                isMenuOpen={isMenuOpen}
                onToggle={toggleMenu}
            />

            <HeaderSection
                title="Générateur de QR code"
                description="Ajoutez vos menus et rendez les accessibles par tous."
                ctaText="Commencer"
                qrLogo={qrLogo}
            />

            {/* Services proposés */}
            <section className="about-section" data-aos="fade-up">
                <TitleWithCurves title="Améliorez l'expérience client"/>

                <FeatureItem
                    imageSrc="https://images.unsplash.com/photo-1628611225356-badd4521f0cf?w=500&h=300&fit=crop"
                    imageAlt="Praticité et Autonomie"
                    title="Praticité et Autonomie"
                    description="Avec le QR code, vos clients n'ont plus à attendre un serveur pour voir le menu. Ils peuvent prendre le temps de consulter chaque plat, se renseigner sur les ingrédients, et revenir sur les descriptions en toute liberté."
                    aosEffect="flip-left"
                />
                <FeatureItem
                    imageSrc="https://images.unsplash.com/photo-1599172995721-49309fff2f21?w=500&h=300&fit=crop"
                    imageAlt="Menu Toujours à Jour"
                    title="Menu Toujours à Jour"
                    description="Finis les menus papier dépassés ! En quelques clics, vous pouvez actualiser votre menu et éviter toute déception liée à un plat en rupture ou un changement d'ingrédient."
                    aosEffect="flip-right"
                />
                <FeatureItem
                    imageSrc="https://images.unsplash.com/photo-1556742205-e10c9486e506?w=500&h=300&fit=crop"
                    imageAlt="Hygiène et Confort"
                    title="Hygiène et Confort"
                    description="En réduisant le contact physique avec des menus papier manipulés par tous, vous offrez une solution plus hygiénique qui rassure vos clients, surtout en période de sensibilité accrue à l'hygiène."
                    aosEffect="flip-left"
                />
            </section>

            {/* Avantages */}
            <section className="benefits-section" data-aos="fade-up">
                <TitleWithCurves title="Avantages"/>
                <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full">
                    <div className="col-span-2"/>
                    <div className="flex flex-col justify-between col-span-4">
                        <BenefitsItem
                            title="Impression et Maintenance"
                            description="Adopter un menu digital, c'est dire adieu aux coûts de réimpression à chaque changement de plat ou erreur. Avec un QR code, votre investissement est unique et les modifications se font en quelques secondes."
                            aosEffect="flip-left"
                        />
                        <BenefitsItem
                            title="Efficacité du Personnel"
                            description="Grâce au QR code, vos serveurs gagnent du temps en évitant les allers-retours pour fournir les menus, ce qui leur permet de se concentrer davantage sur le service et l'accueil."
                            aosEffect="flip-left"
                        />
                    </div>
                </div>
            </section>

            {/* Expérience multilingue */}
            <section className="foreignlanguages-section">
                <TitleWithCurves title="Expérience multilingue"/>

                <div className="foreign-item flex flex-col md:flex-row items-center" data-aos="flip-left">
                    <div className="foreign-content mx-auto text-center md:text-left">
                        <div className="foreign-text">
                            <p>
                                Avec le QR code, proposer des versions multilingues de votre menu devient simple.
                                Pour les établissements recevant une clientèle internationale, c'est un avantage
                                précieux,
                                qui améliore l'accessibilité et l'expérience client.
                            </p>
                            <br/>
                            <p>Exemple de traduction possible:</p>
                            <div className="quote mx-auto">
                                <p>{currentDish?.fr}</p>
                            </div>
                            <p className="font-bold">Survolez les cartes pour consulter les traductions possibles.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center sm:w-8/12 lg:w-1/2 mx-auto pt-8">
                    {flags.map((flag, index) => (
                        <FlagCard key={index} flag={flag} className="col-span-1 mx-auto"/>
                    ))}
                </div>
            </section>

            {/* Engagement durable */}
            <section className="planetfriendly-section" data-aos="fade-up">
                <TitleWithCurves title="Engagement Durable"/>
                <PlanetFriendlyItem/>
            </section>

            <Footer />
        </div>
    );
}