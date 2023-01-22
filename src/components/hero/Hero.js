import Logo from "../Logo";
import HeroMobile from "../../assets/images/oetz-im-winter_mob.jpg"
import HeroDesktop from "../../assets/images/oetz-im-winter.jpg"

import './hero.css';

function Hero() {
    return (
        <header>
            <picture>
                <source
                    media={`(max-width: 750px)`}
                    srcset={HeroMobile}
                    // width={mobile.naturalWidth}
                    // height={mobile.naturalHeight}
                />
                <img
                    class="media--{id} image--{id}"
                    src={HeroDesktop}
                    alt="Blick ins Ötztal im Winter"
                    // width={desktop.naturalWidth}
                    // height={desktop.naturalHeight}
                />
            </picture>
            <div className="logo-container">
                <Logo />
            </div>
        </header>
    )
}

export default Hero;