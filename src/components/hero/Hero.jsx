import Logo from "../Logo/Logo";
import HeroMobile from "../../assets/images/oetz-im-winter-2_mob.jpg";
import HeroMobile2 from "../../assets/images/ochs_brandsee_mob.jpg";
import HeroMobileWebp from "../../assets/images/oetz-im-winter-2_mob.webp";
import HeroMobileWebp2 from "../../assets/images/ochs_brandsee_mob.webp";
import HeroMobileAvif from "../../assets/images/oetz-im-winter-2_mob.avif";
import HeroMobileAvif2 from "../../assets/images/ochs_brandsee_mob.avif";
import HeroDesktop from "../../assets/images/oetz-im-winter-2.jpg";
import HeroDesktop2 from "../../assets/images/ochs_brandsee.jpg";
import HeroDesktopWebp from "../../assets/images/oetz-im-winter-2.webp";
import HeroDesktopWebp2 from "../../assets/images/ochs_brandsee.webp";
import HeroDesktopAvif from "../../assets/images/oetz-im-winter-2.avif";
import HeroDesktopAvif2 from "../../assets/images/ochs_brandsee.avif";

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
            mobileJpg: HeroMobile,
            mobileAvif: HeroMobileAvif,
            mobileWebp: HeroMobileWebp
        },
        {
            desktopJpg: HeroDesktop2,
            desktopAvif: HeroDesktopAvif2,
            desktopWebp: HeroDesktopWebp2,
            mobileJpg: HeroMobile2,
            mobileAvif: HeroMobileAvif2,
            mobileWebp: HeroMobileWebp2
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
            <h1>Willkommen<br></br>auf dem Wieserhof!</h1>
            <div className="logo-container">
                <Logo />
            </div>
            <FreeSlots />
        </header>
    )
}

export default Hero;