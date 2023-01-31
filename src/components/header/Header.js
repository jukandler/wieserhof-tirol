import Logo from '../Logo/Logo';
import './header.css';

function Header({ title, image }) {
    return (
        <header className="regular">
            <Logo color="#6A5744" />
            <h1 className="grid-text_wide" dangerouslySetInnerHTML={{__html: title}}></h1>
            {image && <div className="header-image grid-expanded">
                <img src={image} alt="Wieserhof Tirol im Ötztal" />
            </div>}
        </header>
    )
}

export default Header;