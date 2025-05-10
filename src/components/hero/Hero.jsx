import Logo from "../Logo/Logo";
// import HeroMobile from "../../assets/images/hero/oetz-im-winter-2_mob.jpg";
// import HeroMobileWebp from "../../assets/images/hero/oetz-im-winter-2_mob.webp";
// import HeroMobileAvif from "../../assets/images/hero/oetz-im-winter-2_mob.avif";
import HeroDesktop from "../../assets/images/hero/Spielplatz.jpg";
import HeroDesktopWebp from "../../assets/images/hero/Spielplatz.webp";
import HeroDesktopAvif from "../../assets/images/hero/Spielplatz.avif";

import HeroMobile2 from "../../assets/images/hero/ochs_brandsee_mob.jpg";
import HeroMobileWebp2 from "../../assets/images/hero/ochs_brandsee_mob.webp";
import HeroMobileAvif2 from "../../assets/images/hero/ochs_brandsee_mob.avif";
import HeroDesktop2 from "../../assets/images/hero/ochs_brandsee.jpg";
import HeroDesktopWebp2 from "../../assets/images/hero/ochs_brandsee.webp";
import HeroDesktopAvif2 from "../../assets/images/hero/ochs_brandsee.avif";

import HeroDesktop3 from "../../assets/images/hero/Balkon.jpg";
import HeroDesktopWebp3 from "../../assets/images/hero/Balkon.webp";
import HeroDesktopAvif3 from "../../assets/images/hero/Balkon.avif";

import HeroDesktop4 from "../../assets/images/hero/Haus.jpg";
import HeroDesktopWebp4 from "../../assets/images/hero/Haus.webp";
import HeroDesktopAvif4 from "../../assets/images/hero/Haus.avif";

import './hero.css';
import { useEffect, useState } from "react";
import FreeSlots from "../freeSlots/FreeSlots";

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            desktopJpg: HeroDesktop,
            desktopAvif: HeroDesktopAvif,
            desktopWebp: HeroDesktopWebp,
            mobileJpg: HeroDesktop,
            mobileAvif: HeroDesktopAvif,
            mobileWebp: HeroDesktopWebp
        },
        {
            desktopJpg: HeroDesktop2,
            desktopAvif: HeroDesktopAvif2,
            desktopWebp: HeroDesktopWebp2,
            mobileJpg: HeroMobile2,
            mobileAvif: HeroMobileAvif2,
            mobileWebp: HeroMobileWebp2
        },
        {
            desktopJpg: HeroDesktop3,
            desktopAvif: HeroDesktopAvif3,
            desktopWebp: HeroDesktopWebp3,
            mobileJpg: HeroDesktop3,
            mobileAvif: HeroDesktopAvif3,
            mobileWebp: HeroDesktopWebp3
        },
        {
            desktopJpg: HeroDesktop4,
            desktopAvif: HeroDesktopAvif4,
            desktopWebp: HeroDesktopWebp4,
            mobileJpg: HeroDesktop4,
            mobileAvif: HeroDesktopAvif4,
            mobileWebp: HeroDesktopWebp4
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
            {/* <FreeSlots /> */}
            <div className="phrase">
                <span>Hast du dich verloren im Chaos der letzten Zeit...</span><br></br>
                <span>ein Urlaub am Wieserhof führt dich zurück zur Heiterkeit!</span>
            </div>
        </header>
    )
}

export default Hero;