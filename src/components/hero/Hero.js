import Logo from "../Logo/Logo";
import HeroMobile from "../../assets/images/oetz-im-winter_mob.jpg"
import HeroDesktop from "../../assets/images/oetz-im-winter.jpg"

import './hero.css';

function Hero() {
    return (
        <header className="hero">
            <h1>Willkommen<br></br>auf dem Wieserhof</h1>
            <picture>
                <source
                    media={`(max-width: 750px)`}
                    srcSet={HeroMobile}
                />
                <img
                    className="media--{id} image--{id}"
                    src={HeroDesktop}
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