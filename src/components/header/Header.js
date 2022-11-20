import logo from './wieserhof_logo.jpg';
import hero_image from './balkon_view.jpg';
import hero_image_mob from './balkon_view-mobile.jpg';

import './header.css';

function Header() {
    return (
        <header>
            <picture>
                <source media="(max-width: 799px)" srcSet={hero_image_mob} />
                <img className="hero-image" src={hero_image} alt="Aussicht vom Balkon ins Tal" />
            </picture>
            <img className="wieserhof-logo" src={logo} alt="wieserhof logo"></img>
        </header>
    )
}

export default Header;