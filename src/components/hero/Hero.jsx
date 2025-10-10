import Logo from "../Logo/Logo";

import HeroMobile from "../../assets/images/hero/oetz-im-winter-2_mob.jpg";
import HeroMobileWebp from "../../assets/images/hero/oetz-im-winter-2_mob.webp";
import HeroMobileAvif from "../../assets/images/hero/oetz-im-winter-2_mob.avif";
import HeroDesktop from "../../assets/images/hero/oetz-im-winter-2.jpg";
import HeroDesktopWebp from "../../assets/images/hero/oetz-im-winter-2.webp";
import HeroDesktopAvif from "../../assets/images/hero/oetz-im-winter-2.avif";

import HeroDesktop2 from "../../assets/images/hero/Badezimmer.jpg";
import HeroDesktopWebp2 from "../../assets/images/hero/Badezimmer.webp";
import HeroDesktopAvif2 from "../../assets/images/hero/Badezimmer.avif";

import HeroDesktop3 from "../../assets/images/hero/Schneemann.jpg";
import HeroDesktopWebp3 from "../../assets/images/hero/Schneemann.webp";
import HeroDesktopAvif3 from "../../assets/images/hero/Schneemann.avif";

import './hero.css';
import { useEffect, useState } from "react";

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            desktopJpg: HeroDesktop,
            desktopAvif: HeroDesktopAvif,
            desktopWebp: HeroDesktopWebp,
            mobileJpg: HeroMobile,
            mobileAvif: HeroMobileAvif,
            mobileWebp: HeroMobileWebp
        },
        {
            desktopJpg: HeroDesktop2,
            desktopAvif: HeroDesktopAvif2,
            desktopWebp: HeroDesktopWebp2,
            mobileJpg: HeroDesktop2,
            mobileAvif: HeroDesktopAvif2,
            mobileWebp: HeroDesktopWebp2
        },
        {
            desktopJpg: HeroDesktop3,
            desktopAvif: HeroDesktopAvif3,
            desktopWebp: HeroDesktopWebp3,
            mobileJpg: HeroDesktop3,
            mobileAvif: HeroDesktopAvif3,
            mobileWebp: HeroDesktopWebp3
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // alle 5 Sekunden
        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <header className="hero">
            {images.map((image, index) => (
                <div key={index}>
                    <div className={`blur-background ${index === currentIndex ? "active" : ""}`} style={{backgroundImage: `url(${image.desktopJpg})`}}></div>
                    <picture key={index} className={`image ${index === currentIndex ? "active" : ""}`}>
                        <source media="(min-width: 750px)" srcSet={image.desktopAvif} type="image/avif"/>
                        <source media="(min-width: 750px)" srcSet={image.desktopWebp} type="image/webp"/>
                        <source media="(min-width: 750px)" srcSet={image.desktopJpg}/>
                        <source srcSet={image.mobileAvif} type="image/avif"/>
                        <source srcSet={image.mobileWebp} type="image/webp"/>
                        <source srcSet={image.mobileJpg}/>
                        <img 
                            src={image.desktopJpg}
                            loading="eager"
                            decoding="sync"
                            alt="Wieserhof mit Blick ins Ötztal"
                        /> 
                    </picture>
                </div>
            ))}
            <h1>Willkommen<br></br>auf dem Wieserhof</h1>
            <div className="logo-container">
                <Logo />
            </div>
            <div className="phrase">
                <span>Hast du dich verloren im Chaos der letzten Zeit...</span><br></br>
                <span>ein Urlaub am Wieserhof führt dich zurück zur Heiterkeit!</span>
            </div>
        </header>
    )
}

export default Hero;