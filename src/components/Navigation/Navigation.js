import './navigation.css';
import MenuIcon from "../../assets/icons/menu.svg";


function Navigation() {
    return (
        <nav>
            <div className="icon-close">
                <img src={MenuIcon} alt="menü schließen"/>
            </div>
        </nav>
    )
}

export default Navigation;