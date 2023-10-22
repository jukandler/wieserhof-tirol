import Logo from "../Logo/Logo";
import HeroMobile from "../../assets/images/oetz-im-winter_mob.jpg"
import HeroMobileWebp from "../../assets/images/oetz-im-winter_mob.webp"
import HeroMobileAvif from "../../assets/images/oetz-im-winter_mob.avif"
import HeroDesktop from "../../assets/images/oetz-im-winter.jpg"
import HeroDesktopWebp from "../../assets/images/oetz-im-winter.webp"
import HeroDesktopAvif from "../../assets/images/oetz-im-winter.avif"

import './hero.css';

function Hero() {
    return (
        <header className="hero">
            <h1>Willkommen<br></br>auf dem Wieserhof</h1>
            <picture>
                <source media="(min-width: 750px)" srcSet={HeroDesktopAvif} type="image/avif"/>
                <source media="(min-width: 750px)" srcSet={HeroDesktopWebp} type="image/webp"/>
                <source media="(min-width: 750px)" srcSet={HeroDesktop}/>
                <source srcSet={HeroMobileAvif} type="image/avif"/>
                <source srcSet={HeroMobileWebp} type="image/webp"/>
                <source srcSet={HeroMobile}/>
                <img 
                    src={HeroDesktop}
                    loading="eager"
                    decoding="sync"
                    fetchpriority="high"
                    alt="Blick ins Ötztal im Winter"
                /> 
            </picture>
            <div className="logo-container">
                <Logo />
            </div>
        </header>
    )
}

export default Hero;